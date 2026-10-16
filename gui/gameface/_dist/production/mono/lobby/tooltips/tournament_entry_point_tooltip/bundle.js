import { r as e } from '../../chunks/rolldown-runtime.js';
import { Cs as t, Mr as a, Na as s, _i as n, ct as i, fi as o } from '../../chunks/lib.js';
import '../../chunks/_wg-global-styles.js';
import { a as p, i as r } from '../../chunks/vendor.js';
import { s as l } from '../../chunks/enums.js';
import { t as _ } from '../../chunks/tooltip_decorator.js';
import { t as c } from '../../chunks/tooltips.module.js';
t();
var d = e(r(), 1),
    m = (function (e) {
        return (
            (e[(e.StartingSoon = 0)] = 'StartingSoon'),
            (e[(e.Live = 1)] = 'Live'),
            (e[(e.BetweenShowmatches = 2)] = 'BetweenShowmatches'),
            (e[(e.Finished = 3)] = 'Finished'),
            e
        );
    })({}),
    [h, f] = n()(({ observableModel: e }) => ({ root: e.object() })),
    v = {
        base: 'App_db75b9f1',
        topContentBg: 'App_topContentBg_83729a80',
        base__ols: 'App_base__ols_0',
        base__olsLive: 'App_base__olsLive_0',
        live: 'App_live_9ef7c7f3',
        topContent: 'App_topContent_52c7eecf',
        title: 'App_title_65c2019a',
        bottomContent: 'App_bottomContent_86b6402b',
        paragraph: 'App_paragraph_849a18a2',
        divider: 'App_divider_5cecff56',
        timerContainer: 'App_timerContainer_3955c4fa',
        fadeIn: 'App_fadeIn_0',
        fadeInThreeQuarters: 'App_fadeInThreeQuarters_0',
        fadeInHalf: 'App_fadeInHalf_0',
        fadeOut: 'App_fadeOut_0',
        fadeInWithScale: 'App_fadeInWithScale_0',
        slideUp: 'App_slideUp_0',
        scale: 'App_scale_0',
        raysAppearance: 'App_raysAppearance_0',
        rotate: 'App_rotate_0',
        'reverse-rotate': 'App_reverse-rotate_0',
        glowAppearance: 'App_glowAppearance_0',
        highlightAppearance: 'App_highlightAppearance_0',
        blink: 'App_blink_0',
        slideUpIn: 'App_slideUpIn_0',
    },
    A = e(s(), 1),
    u = [m.Live, m.BetweenShowmatches],
    x = p(() => {
        const { model: e } = f(),
            { state: t, timeLeftUntilLiveMatch: s, timeLeftUntilNextShowMatchDay: n, tournamentName: o } = e.root.get();
        return (0, A.jsxs)('div', {
            className: (0, d.default)(v.base, v[`base__${o}${t === m.Live ? 'Live' : ''}`]),
            children: [
                (0, A.jsx)('div', { className: v.topContentBg }),
                t === m.Live && o === l.WCI && (0, A.jsx)('div', { className: v.live }),
                (0, A.jsx)('div', {
                    className: v.topContent,
                    children: (0, A.jsx)('div', {
                        className: v.title,
                        children: `${R.strings.comp7_ext.tournamentsEntryPointTooltip.heading.$dyn(o)}`,
                    }),
                }),
                (0, A.jsxs)('div', {
                    className: v.bottomContent,
                    children: [
                        (0, A.jsx)(a, {
                            text: `${R.strings.comp7_ext.tournamentsEntryPointTooltip.description.$dyn(o)}`,
                            classMix: v.paragraph,
                        }),
                        u.includes(t) &&
                            (0, A.jsxs)(A.Fragment, {
                                children: [
                                    (0, A.jsx)('div', { className: (0, d.default)(c.divider, v.divider) }),
                                    (0, A.jsx)('div', {
                                        className: v.timerContainer,
                                        children: (0, A.jsx)(a, {
                                            text:
                                                t === m.Live
                                                    ? R.strings.comp7_ext.tournamentsEntryPointTooltip.live()
                                                    : R.strings.comp7_ext.tournamentsEntryPointTooltip.showmatch(),
                                            binding: {
                                                timer: (0, A.jsx)(i, {
                                                    start: t === m.Live ? s : n,
                                                    format: i.format.default,
                                                    type: i.type.accent,
                                                    size: i.size.x24x24,
                                                }),
                                            },
                                        }),
                                    }),
                                ],
                            }),
                    ],
                }),
            ],
        });
    });
o((0, A.jsx)(h, { children: (0, A.jsx)(_, { children: (0, A.jsx)(x, {}) }) }));
