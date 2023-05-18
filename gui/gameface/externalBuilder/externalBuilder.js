const path = require('path');
const fs = require('fs-extra');
const process = require('process');
const { execSync } = require('child_process');

const { createCache, getModifiedFeatures, getFeatures } = require('./modificationsIndexing/modificationsIndexing');

const environment = process.env.NODE_ENV || 'development';
const IS_DEV = environment === 'development';

const BUILD_MODES = { fullBuild: 'fullBuild', modificationBuild: 'modificationBuild', start: 'start' };
const buildMode = BUILD_MODES[process.env.BUILD_MODE] || BUILD_MODES.start;

const projectDirectory = path.resolve(__dirname, '..');
const buildDirectory = path.join(projectDirectory, IS_DEV ? '_dev' : '_dist');

const deleteFolderRecursive = (directoryPath) => {
    if (fs.existsSync(directoryPath)) {
        fs.readdirSync(directoryPath).forEach((file) => {
            const curPath = path.join(directoryPath, file);
            if (fs.statSync(curPath).isDirectory()) {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                deleteFolderRecursive(curPath);
            } else {
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(directoryPath);
    }
};

const clear = (feature) => {
    const buildFeaturePath = path.join(buildDirectory, feature.replace('views', 'production'));
    const chunksPath = path.join(buildDirectory, 'production', 'chunks', /([^\\/]*)\/*$/.exec(feature)[1]);
    const vendorPaths = path.join(buildDirectory, feature.replace('views', 'production/lib'));

    deleteFolderRecursive(buildFeaturePath);
    deleteFolderRecursive(chunksPath);
    deleteFolderRecursive(vendorPaths);
};

const modificationBuild = () => {
    const modifiedFeatures = getModifiedFeatures();

    if (modifiedFeatures.includes('shared')) {
        fullBuild();
        return;
    }

    modifiedFeatures.forEach((feature) => {
        clear(feature);
        try {
            const cmd = `cross-env NODE_ENV=${environment} FEATURE=${feature} webpack --config ./config/webpack.config.js`;
            execSync(cmd, { stdio: 'inherit' });
        } catch (error) {
            console.error(error.message);
            console.error(`Failed on: ${feature}`);
            throw error;
        }
        // eslint-disable-next-line no-console
        console.log(`Completed: ${feature}`);
    });
    createCache();
};

const fullBuild = () => {
    const features = getFeatures();

    deleteFolderRecursive(buildDirectory);

    features.forEach((feature) => {
        try {
            const cmd = `cross-env NODE_ENV=${environment} FEATURE=${feature} webpack --config ./config/webpack.config.js`;
            execSync(cmd, { stdio: 'inherit' });
        } catch (error) {
            console.error(error.message);
            console.error(`Failed on: ${feature}`);
            throw error;
        }
        // eslint-disable-next-line no-console
        console.log(`Completed: ${feature}`);
    });

    if (!IS_DEV) {
        createCache();
    }
};

async function questionToStart(features) {
    const readline = require('readline');
    const util = require('util');
    const lineInterface = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    const question = util.promisify(lineInterface.question).bind(lineInterface);

    features.forEach((feature, index) => {
        // eslint-disable-next-line no-console
        console.log(`${index} - ${feature}`);
    });
    const answer = await question('Which feature do you want to work with?\n\nNumber: ');
    lineInterface.close();

    return features[answer];
}

const start = () => {
    const features = getFeatures();
    questionToStart(features).then((feature) => {
        // eslint-disable-next-line no-console
        console.log(`Run build and watch ${feature}...`);
        clear(feature);
        try {
            const cmd = `cross-env NODE_ENV=${environment} FEATURE=${feature} webpack --config ./config/webpack.config.js -w`;
            execSync(cmd, { stdio: 'inherit' });
        } catch (error) {
            console.error(error.message);
            throw error;
        }
    });
};

const run = () => {
    switch (buildMode) {
        case BUILD_MODES.fullBuild:
            return fullBuild();
        case BUILD_MODES.modificationBuild:
            return modificationBuild();
        case BUILD_MODES.start:
        default:
            return start();
    }
};

run();
