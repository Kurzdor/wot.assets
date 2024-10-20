/******/ (() => {
    // webpackBootstrap
    /******/ 'use strict';
    /******/ var __webpack_modules__ = {
        /***/ './src/components/TooltipDecorator/TooltipDecorator.tsx':
            /*!**************************************************************!*\
  !*** ./src/components/TooltipDecorator/TooltipDecorator.tsx ***!
  \**************************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ TooltipDecorator: () => /* binding */ TooltipDecorator,
                    /* harmony export */
                });
                /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! classnames */ './node_modules/classnames/index.js',
                );
                /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default =
                    /*#__PURE__*/ __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
                /* harmony import */ var lib_env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! lib/env */ './src/lib/env/index.ts',
                );
                /* harmony import */ var lib_hooks_useMountUnmount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! lib/hooks/useMountUnmount */ './src/lib/hooks/useMountUnmount.ts',
                );
                /* harmony import */ var lib_hooks_useSkipFrame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! lib/hooks/useSkipFrame */ './src/lib/hooks/useSkipFrame.ts',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    /*! react */ './node_modules/@wotfe/react/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default =
                    /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
                /* harmony import */ var _TooltipDecorator_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                    /*! ./TooltipDecorator.css */ './src/components/TooltipDecorator/TooltipDecorator.css',
                );
                const _excluded = ['children', 'className', 'theme'];

                function _extends() {
                    _extends =
                        Object.assign ||
                        function (target) {
                            for (var i = 1; i < arguments.length; i++) {
                                var source = arguments[i];
                                for (var key in source) {
                                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                                        target[key] = source[key];
                                    }
                                }
                            }
                            return target;
                        };
                    return _extends.apply(this, arguments);
                }

                function _objectWithoutPropertiesLoose(source, excluded) {
                    if (source == null) return {};
                    var target = {};
                    var sourceKeys = Object.keys(source);
                    var key, i;
                    for (i = 0; i < sourceKeys.length; i++) {
                        key = sourceKeys[i];
                        if (excluded.indexOf(key) >= 0) continue;
                        target[key] = source[key];
                    }
                    return target;
                }

                const TooltipDecorator = react__WEBPACK_IMPORTED_MODULE_4___default().forwardRef(
                    function TooltipDecorator(_ref, ref) {
                        let children = _ref.children,
                            className = _ref.className,
                            _ref$theme = _ref.theme,
                            theme = _ref$theme === void 0 ? 'default' : _ref$theme,
                            restProps = _objectWithoutPropertiesLoose(_ref, _excluded);

                        const skipFrame = (0, lib_hooks_useSkipFrame__WEBPACK_IMPORTED_MODULE_3__.useSkipFrame)();
                        const baseRef = react__WEBPACK_IMPORTED_MODULE_4___default().useRef(null);
                        (0, lib_hooks_useMountUnmount__WEBPACK_IMPORTED_MODULE_2__.useMount)(() => {
                            skipFrame.run(() => {
                                const base = baseRef.current;

                                if (!base) {
                                    return;
                                }

                                const contentWidth = base.scrollWidth;
                                const contentHeight = base.scrollHeight;
                                lib_env__WEBPACK_IMPORTED_MODULE_1__.env.view.resize(contentWidth, contentHeight);
                                const style = window.getComputedStyle(base);
                                lib_env__WEBPACK_IMPORTED_MODULE_1__.env.view.setSidePaddingsRem({
                                    left: parseInt(style.getPropertyValue('padding-left'), 10),
                                    top: parseInt(style.getPropertyValue('padding-top'), 10),
                                    right: parseInt(style.getPropertyValue('padding-right'), 10),
                                    bottom: parseInt(style.getPropertyValue('padding-bottom'), 10),
                                });
                            });
                        });

                        function setRefs(node) {
                            baseRef.current = node;

                            if (typeof ref === 'function') {
                                ref(node);
                            } else if (ref) {
                                ref.current = node;
                            }
                        }

                        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().createElement(
                            'div',
                            _extends({}, restProps, {
                                className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(
                                    _TooltipDecorator_css__WEBPACK_IMPORTED_MODULE_5__['default'].base,
                                    _TooltipDecorator_css__WEBPACK_IMPORTED_MODULE_5__['default'][
                                        `base__theme-${theme}`
                                    ],
                                    className,
                                ),
                                ref: setRefs,
                            }),
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().createElement(
                                'div',
                                {
                                    className: _TooltipDecorator_css__WEBPACK_IMPORTED_MODULE_5__['default'].decorator,
                                },
                                children,
                            ),
                        );
                    },
                );

                /***/
            },

        /***/ './src/lib/data-layer/data-layer.ts':
            /*!******************************************!*\
  !*** ./src/lib/data-layer/data-layer.ts ***!
  \******************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ create: () => /* binding */ create,
                    /* harmony export */
                });
                /* harmony import */ var lib_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! lib/env */ './src/lib/env/index.ts',
                );
                function _createForOfIteratorHelperLoose(o, allowArrayLike) {
                    var it = (typeof Symbol !== 'undefined' && o[Symbol.iterator]) || o['@@iterator'];
                    if (it) return (it = it.call(o)).next.bind(it);
                    if (
                        Array.isArray(o) ||
                        (it = _unsupportedIterableToArray(o)) ||
                        (allowArrayLike && o && typeof o.length === 'number')
                    ) {
                        if (it) o = it;
                        var i = 0;
                        return function () {
                            if (i >= o.length) return { done: true };
                            return { done: false, value: o[i++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }

                function _unsupportedIterableToArray(o, minLen) {
                    if (!o) return;
                    if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
                    var n = Object.prototype.toString.call(o).slice(8, -1);
                    if (n === 'Object' && o.constructor) n = o.constructor.name;
                    if (n === 'Map' || n === 'Set') return Array.from(o);
                    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return _arrayLikeToArray(o, minLen);
                }

                function _arrayLikeToArray(arr, len) {
                    if (len == null || len > arr.length) len = arr.length;
                    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
                    return arr2;
                }

                /* eslint-disable @typescript-eslint/no-explicit-any */

                const getRootDefault = (rootId) => {
                    if (rootId === 0) {
                        return window;
                    }

                    return window.subViews.get(rootId);
                };

                function create({ initializer = true, rootId = 0, getRoot = getRootDefault, context = 'model' } = {}) {
                    const subscribers = new Map();
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (data, _, callbackIDs) => {
                            callbackIDs.forEach((callbackID) => {
                                const callback = subscribers.get(callbackID);

                                if (callback !== undefined) {
                                    callback(data);
                                }
                            });
                        });
                    });

                    function unsubscribe(id, resId = 0) {
                        if (viewEnv.removeDataChangedCallback(id, resId)) {
                            subscribers.delete(id);
                        } else {
                            console.error("Can't remove callback by id:", id);
                        }
                    }

                    const readByPath = (path) => {
                        const root = getRoot(rootId);
                        const model = context.split('.').reduce((result, key) => {
                            return result[key];
                        }, root);

                        if (typeof path !== 'string' || path.length === 0) {
                            return model;
                        }

                        return path.split('.').reduce((result, key) => {
                            const element = result[key];

                            if (typeof element === 'function') {
                                return element.bind(result);
                            }

                            return element;
                        }, model);
                    };

                    const subscribe = (subscriber, path) => {
                        const subscribePath = typeof path === 'string' ? `${context}.${path}` : context;
                        const trackInDepth = true;
                        const id = lib_env__WEBPACK_IMPORTED_MODULE_0__.env.view.addModelObserver(
                            subscribePath,
                            rootId,
                            trackInDepth,
                        );
                        subscribers.set(id, subscriber);

                        if (initializer) {
                            subscriber(readByPath(path));
                        }

                        return id;
                    };

                    const createCallback = (argsMap, path) => {
                        const fn = readByPath(path);
                        return (...args) => {
                            fn(argsMap(...args));
                        };
                    };

                    const createCallbackNoArgs = (path) => {
                        const fn = readByPath(path);
                        return () => {
                            fn();
                        };
                    };

                    function dispose() {
                        for (
                            var _iterator = _createForOfIteratorHelperLoose(subscribers.keys()), _step;
                            !(_step = _iterator()).done;

                        ) {
                            const subscriberId = _step.value;
                            unsubscribe(subscriberId, rootId);
                        }
                    }

                    return {
                        subscribe,
                        readByPath,
                        createCallback,
                        createCallbackNoArgs,
                        dispose,
                        unsubscribe,
                    };
                }

                /***/
            },

        /***/ './src/lib/data-layer/index.tsx':
            /*!**************************************!*\
  !*** ./src/lib/data-layer/index.tsx ***!
  \**************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ dataLayer: () =>
                        /* reexport module object */ _data_layer__WEBPACK_IMPORTED_MODULE_2__,
                    /* harmony export */ initializeModelWithContext: () => /* binding */ initializeModelWithContext,
                    /* harmony export */
                });
                /* harmony import */ var lib_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! lib/function */ './src/lib/function.ts',
                );
                /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! mobx */ './node_modules/mobx/dist/mobx.esm.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! react */ './node_modules/@wotfe/react/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
                    /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
                /* harmony import */ var _data_layer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! ./data-layer */ './src/lib/data-layer/data-layer.ts',
                );
                /* eslint-disable @typescript-eslint/no-explicit-any */

                /* eslint-disable react/function-component-definition */

                /**
                 * Create ModelProvider and useModel for your data-layer:
                 * ```ts
                 * export const [ModelProvider, useModel] = initializeModelWithContext<<MODEL_TYPE>>()(
                 *     () => {}, // for model
                 *     () => {}, // for controls (functions)
                 * );
                 * ```
                 * Where `<MODEL_TYPE>` is your model type.
                 */
                const initializeModelWithContext = () => {
                    return (modelCreator, controlsCreator) => {
                        const Context = (0, react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
                        return [
                            function DataLayerProvider({ mode: dataMode = 'real', options, children, mocks }) {
                                const cleanupsRef = (0, react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]);

                                const createContextValue = (mode, options, mocks) => {
                                    var _mocks$getter;

                                    const dataLayerInstance = _data_layer__WEBPACK_IMPORTED_MODULE_2__.create(options);
                                    const externalModel =
                                        mode === 'real'
                                            ? dataLayerInstance
                                            : Object.assign({}, dataLayerInstance, {
                                                  readByPath:
                                                      (_mocks$getter = mocks == null ? void 0 : mocks.getter) != null
                                                          ? _mocks$getter
                                                          : () => undefined,
                                              });

                                    const readByPath = (path) => {
                                        if (mode === 'mocks') {
                                            return mocks == null ? void 0 : mocks.getter(path);
                                        } else {
                                            return externalModel.readByPath(path);
                                        }
                                    };

                                    const observableArray = (path, init) => {
                                        const initObservable = (() => {
                                            return init != null ? init : readByPath(path);
                                        })();

                                        const model = mobx__WEBPACK_IMPORTED_MODULE_3__.observable.box(initObservable, {
                                            equals: lib_function__WEBPACK_IMPORTED_MODULE_0__.constFalse,
                                        });

                                        if (mode === 'real') {
                                            externalModel.subscribe(
                                                (0, mobx__WEBPACK_IMPORTED_MODULE_3__.action)((data) =>
                                                    model.set(data),
                                                ),
                                                path,
                                            );
                                        }

                                        return model;
                                    };

                                    const observableObject = (path, init) => {
                                        const initObservable = (() => {
                                            return init != null ? init : readByPath(path);
                                        })();

                                        const model = mobx__WEBPACK_IMPORTED_MODULE_3__.observable.box(initObservable, {
                                            equals: lib_function__WEBPACK_IMPORTED_MODULE_0__.constFalse,
                                        });

                                        if (mode === 'real') {
                                            externalModel.subscribe(
                                                (0, mobx__WEBPACK_IMPORTED_MODULE_3__.action)((data) =>
                                                    model.set(data),
                                                ),
                                                path,
                                            );
                                        }

                                        return model;
                                    };

                                    const observablePrimitives = (keys, path) => {
                                        const initObservable = readByPath(path);

                                        if (Array.isArray(keys)) {
                                            const model = keys.reduce((acc, key) => {
                                                acc[key] = mobx__WEBPACK_IMPORTED_MODULE_3__.observable.box(
                                                    initObservable[key],
                                                    {},
                                                );
                                                return acc;
                                            }, {});

                                            if (mode === 'real') {
                                                externalModel.subscribe(
                                                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.action)((data) => {
                                                        keys.forEach((key) => {
                                                            model[key].set(data[key]);
                                                        });
                                                    }),
                                                    path,
                                                );
                                            }

                                            return model;
                                        } else {
                                            const keysRecord = keys;
                                            const keysEntries = Object.entries(keysRecord);
                                            const model = keysEntries.reduce((acc, [keyFrom, keyTo]) => {
                                                acc[keyTo] = mobx__WEBPACK_IMPORTED_MODULE_3__.observable.box(
                                                    initObservable[keyFrom],
                                                    {},
                                                );
                                                return acc;
                                            }, {});

                                            if (mode === 'real') {
                                                externalModel.subscribe(
                                                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.action)((data) => {
                                                        keysEntries.forEach(([keyFrom, keyTo]) => {
                                                            model[keyTo].set(data[keyFrom]);
                                                        });
                                                    }),
                                                    path,
                                                );
                                            }

                                            return model;
                                        }
                                    };

                                    const cleanup = (fn) => cleanupsRef.current.push(fn);

                                    const model = modelCreator({
                                        mode,
                                        readByPath,
                                        externalModel,
                                        observableModel: {
                                            array: observableArray,
                                            object: observableObject,
                                            primitives: observablePrimitives,
                                        },
                                        cleanup,
                                    });
                                    const controlsArgs = {
                                        mode,
                                        model,
                                        externalModel,
                                        cleanup,
                                    };
                                    const controls =
                                        mode === 'mocks' && mocks
                                            ? mocks.controls(controlsArgs)
                                            : controlsCreator(controlsArgs);
                                    return {
                                        model,
                                        controls,
                                        externalModel,
                                        mode,
                                    };
                                };

                                const startedRef = (0, react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);

                                const _useState = (0, react__WEBPACK_IMPORTED_MODULE_1__.useState)(dataMode),
                                    mode = _useState[0],
                                    changeMode = _useState[1];

                                const _useState2 = (0, react__WEBPACK_IMPORTED_MODULE_1__.useState)(() =>
                                        createContextValue(dataMode, options, mocks),
                                    ),
                                    value = _useState2[0],
                                    setValue = _useState2[1];

                                (0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
                                    if (!startedRef.current) {
                                        startedRef.current = true;
                                        return;
                                    }

                                    setValue(createContextValue(mode, options, mocks));
                                }, [mocks, mode, options]);
                                (0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
                                    changeMode(dataMode);
                                }, [dataMode]);
                                (0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(
                                    () => () => {
                                        value.externalModel.dispose();
                                        cleanupsRef.current.forEach((fn) => fn());
                                    },
                                    [value],
                                );
                                return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                                    Context.Provider,
                                    {
                                        value: value,
                                    },
                                    children,
                                );
                            },
                            () => (0, react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Context),
                        ];
                    };
                };

                /***/
            },

        /***/ './src/lib/env/client/events.ts':
            /*!**************************************!*\
  !*** ./src/lib/env/client/events.ts ***!
  \**************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ mouse: () => /* binding */ mouse,
                    /* harmony export */ onResize: () => /* binding */ onResize,
                    /* harmony export */
                });
                /* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ../helpers */ './src/lib/env/helpers.ts',
                );
                /* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! ./internal */ './src/lib/env/client/internal.ts',
                );

                const onResize = (0, _helpers__WEBPACK_IMPORTED_MODULE_0__.makeEngineEvent)('clientResized');
                const internalMouse = {
                    down: (0, _helpers__WEBPACK_IMPORTED_MODULE_0__.makeEngineEvent)('mousedown'),
                    up: (0, _helpers__WEBPACK_IMPORTED_MODULE_0__.makeEngineEvent)('mouseup'),
                    move: (0, _helpers__WEBPACK_IMPORTED_MODULE_0__.makeEngineEvent)('mousemove'),
                };

                /**
                 * Calculate mouse position relative to the view is expensive operation.
                 * This decorator separate track mouse events between inside and outside.
                 * When cursor is outside of the view.
                 * When mouse cursor is inside of the view, it will be tracked by internal default events.
                 *
                 * Function encapsulate logic and state inside.
                 */
                function initMouseEvents() {
                    const state = {
                        listeners: 0,
                        enabled: true,
                        initialized: false,
                    };

                    function handleMouseEnter() {
                        if (state.enabled) {
                            (0, _internal__WEBPACK_IMPORTED_MODULE_1__.setTrackMouseOutside)(false);
                        }
                    }

                    function handleMouseLeave() {
                        if (state.enabled) {
                            (0, _internal__WEBPACK_IMPORTED_MODULE_1__.setTrackMouseOutside)(true);
                        }
                    }

                    function updateLazyTrack() {
                        if (!state.enabled) {
                            (0, _internal__WEBPACK_IMPORTED_MODULE_1__.setTrackMouseOutside)(false);
                            return;
                        }

                        if (state.listeners < 1) {
                            state.initialized = false;
                            document.body.removeEventListener('mouseenter', handleMouseEnter);
                            document.body.removeEventListener('mouseleave', handleMouseLeave);
                        } else if (!state.initialized) {
                            state.initialized = true;
                            document.body.addEventListener('mouseenter', handleMouseEnter);
                            document.body.addEventListener('mouseleave', handleMouseLeave);
                        }
                    }

                    function makeEvent(name) {
                        return (listener) => {
                            state.listeners += 1;
                            let active = true; // prevent double dispose(unsubscribe)

                            const windowEvent = `mouse${name}`;
                            const dispose = internalMouse[name]((event) => listener([event, 'outside']));

                            function handleWindowEvent(event) {
                                listener([event, 'inside']);
                            }

                            window.addEventListener(windowEvent, handleWindowEvent);
                            updateLazyTrack();
                            return () => {
                                if (!active) {
                                    return;
                                }

                                dispose();
                                window.removeEventListener(windowEvent, handleWindowEvent);
                                state.listeners -= 1;
                                updateLazyTrack();
                                active = false;
                            };
                        };
                    }

                    const events = ['down', 'up', 'move'];
                    const subscribeApi = events.reduce((acc, name) => {
                        acc[name] = makeEvent(name);
                        return acc;
                    }, {});
                    return Object.assign({}, subscribeApi, {
                        disable() {
                            state.enabled = false;
                            updateLazyTrack();
                        },

                        enable() {
                            state.enabled = true;
                            updateLazyTrack();
                        },

                        enableOutside() {
                            if (state.enabled) {
                                (0, _internal__WEBPACK_IMPORTED_MODULE_1__.setTrackMouseOutside)(true);
                            }
                        },

                        disableOutside() {
                            if (state.enabled) {
                                (0, _internal__WEBPACK_IMPORTED_MODULE_1__.setTrackMouseOutside)(false);
                            }
                        },
                    });
                }

                const mouse = initMouseEvents();

                /***/
            },

        /***/ './src/lib/env/client/index.ts':
            /*!*************************************!*\
  !*** ./src/lib/env/client/index.ts ***!
  \*************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ events: () =>
                        /* reexport module object */ _events__WEBPACK_IMPORTED_MODULE_0__,
                    /* harmony export */ getMouseGlobalPosition: () => /* binding */ getMouseGlobalPosition,
                    /* harmony export */ getSize: () => /* binding */ getSize,
                    /* harmony export */ graphicsQuality: () => /* binding */ graphicsQuality,
                    /* harmony export */
                });
                /* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ./events */ './src/lib/env/client/events.ts',
                );

                function getSize(unit = 'px') {
                    return unit === 'rem' ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function getMouseGlobalPosition(unit = 'px') {
                    return unit === 'rem' ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const graphicsQuality = {
                    isLow: () => viewEnv.getGraphicsQuality() === 1,
                    isHigh: () => viewEnv.getGraphicsQuality() === 0,
                    get: () => viewEnv.getGraphicsQuality(),
                };

                /***/
            },

        /***/ './src/lib/env/client/internal.ts':
            /*!****************************************!*\
  !*** ./src/lib/env/client/internal.ts ***!
  \****************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ setTrackMouseOutside: () => /* binding */ setTrackMouseOutside,
                    /* harmony export */
                });
                function setTrackMouseOutside(value) {
                    viewEnv.setTrackMouseOnStage(value);
                }

                /***/
            },

        /***/ './src/lib/env/helpers.ts':
            /*!********************************!*\
  !*** ./src/lib/env/helpers.ts ***!
  \********************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ makeEngineEvent: () => /* binding */ makeEngineEvent,
                    /* harmony export */
                });
                function makeEngineEvent(eventName) {
                    return (handler) => {
                        engine.on(eventName, handler);
                        return () => {
                            engine.off(eventName, handler);
                        };
                    };
                }

                /***/
            },

        /***/ './src/lib/env/index.ts':
            /*!******************************!*\
  !*** ./src/lib/env/index.ts ***!
  \******************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ env: () => /* binding */ env,
                    /* harmony export */
                });
                /* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ./client */ './src/lib/env/client/index.ts',
                );
                /* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! ./view */ './src/lib/env/view/index.ts',
                );

                const env = {
                    view: _view__WEBPACK_IMPORTED_MODULE_1__,
                    client: _client__WEBPACK_IMPORTED_MODULE_0__,
                };

                if (true) {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    window.env = env;
                }

                /***/
            },

        /***/ './src/lib/env/view/children.ts':
            /*!**************************************!*\
  !*** ./src/lib/env/view/children.ts ***!
  \**************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ getBgUrl: () => /* binding */ getBgUrl,
                    /* harmony export */ getTextureUrl: () => /* binding */ getTextureUrl,
                    /* harmony export */
                });
                function getTextureUrl(childId, size, scale = 1) {
                    return viewEnv.getChildTexturePath(childId, size.width, size.height, scale);
                }
                function getBgUrl(childId, size, scale) {
                    return `url(${getTextureUrl(childId, size, scale)})`;
                }

                /***/
            },

        /***/ './src/lib/env/view/common.ts':
            /*!************************************!*\
  !*** ./src/lib/env/view/common.ts ***!
  \************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ displayStatus: () => /* binding */ displayStatus,
                    /* harmony export */
                });
                const displayStatus = {
                    showing: 0,
                    shown: 1,
                    hiding: 2,
                    hidden: 3,
                };

                /***/
            },

        /***/ './src/lib/env/view/events.ts':
            /*!************************************!*\
  !*** ./src/lib/env/view/events.ts ***!
  \************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ events: () => /* binding */ events,
                    /* harmony export */
                });
                /* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ../helpers */ './src/lib/env/helpers.ts',
                );

                const events = {
                    onTextureFrozen: (0, _helpers__WEBPACK_IMPORTED_MODULE_0__.makeEngineEvent)('self.onTextureFrozen'),
                    onTextureReady: (0, _helpers__WEBPACK_IMPORTED_MODULE_0__.makeEngineEvent)('self.onTextureReady'),
                    onDomBuilt: (0, _helpers__WEBPACK_IMPORTED_MODULE_0__.makeEngineEvent)('self.onDomBuilt'),
                    onLoaded: (0, _helpers__WEBPACK_IMPORTED_MODULE_0__.makeEngineEvent)('self.onLoaded'),
                    onDisplayChanged: (0, _helpers__WEBPACK_IMPORTED_MODULE_0__.makeEngineEvent)(
                        'self.onShowingStatusChanged',
                    ),
                    onFocusUpdated: (0, _helpers__WEBPACK_IMPORTED_MODULE_0__.makeEngineEvent)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, _helpers__WEBPACK_IMPORTED_MODULE_0__.makeEngineEvent)('children.onAdded'),
                        onLoaded: (0, _helpers__WEBPACK_IMPORTED_MODULE_0__.makeEngineEvent)('children.onLoaded'),
                        onRemoved: (0, _helpers__WEBPACK_IMPORTED_MODULE_0__.makeEngineEvent)('children.onRemoved'),
                        onAttached: (0, _helpers__WEBPACK_IMPORTED_MODULE_0__.makeEngineEvent)('children.onAttached'),
                        onTextureReady: (0, _helpers__WEBPACK_IMPORTED_MODULE_0__.makeEngineEvent)(
                            'children.onTextureReady',
                        ),
                        onRequestPosition: (0, _helpers__WEBPACK_IMPORTED_MODULE_0__.makeEngineEvent)(
                            'children.requestPosition',
                        ),
                    },
                };

                /***/
            },

        /***/ './src/lib/env/view/index.ts':
            /*!***********************************!*\
  !*** ./src/lib/env/view/index.ts ***!
  \***********************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ addModelObserver: () => /* binding */ addModelObserver,
                    /* harmony export */ addPreloadTexture: () => /* binding */ addPreloadTexture,
                    /* harmony export */ children: () =>
                        /* reexport module object */ _children__WEBPACK_IMPORTED_MODULE_0__,
                    /* harmony export */ displayStatus: () =>
                        /* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_1__.displayStatus,
                    /* harmony export */ displayStatusIs: () => /* binding */ displayStatusIs,
                    /* harmony export */ events: () => /* reexport safe */ _events__WEBPACK_IMPORTED_MODULE_2__.events,
                    /* harmony export */ extraSize: () => /* binding */ extraSize,
                    /* harmony export */ forceTriggerMouseMove: () => /* binding */ forceTriggerMouseMove,
                    /* harmony export */ freezeTextureBeforeResize: () => /* binding */ freezeTextureBeforeResize,
                    /* harmony export */ getBrowserTexturePath: () => /* binding */ getBrowserTexturePath,
                    /* harmony export */ getDisplayStatus: () => /* binding */ getDisplayStatus,
                    /* harmony export */ getScale: () => /* binding */ getScale,
                    /* harmony export */ getSize: () => /* binding */ getSize,
                    /* harmony export */ getViewGlobalPosition: () => /* binding */ getViewGlobalPosition,
                    /* harmony export */ isEventHandled: () => /* binding */ isEventHandled,
                    /* harmony export */ isFocused: () => /* binding */ isFocused,
                    /* harmony export */ pxToRem: () => /* binding */ pxToRem,
                    /* harmony export */ remToPx: () => /* binding */ remToPx,
                    /* harmony export */ resize: () => /* binding */ resize,
                    /* harmony export */ sendEvent: () =>
                        /* reexport safe */ _sendEvent__WEBPACK_IMPORTED_MODULE_3__.sendEvent,
                    /* harmony export */ setAnimateWindow: () => /* binding */ setAnimateWindow,
                    /* harmony export */ setEventHandled: () => /* binding */ setEventHandled,
                    /* harmony export */ setInputPaddingsRem: () => /* binding */ setInputPaddingsRem,
                    /* harmony export */ setSidePaddingsRem: () => /* binding */ setSidePaddingsRem,
                    /* harmony export */ whenTutorialReady: () => /* binding */ whenTutorialReady,
                    /* harmony export */
                });
                /* harmony import */ var _children__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ./children */ './src/lib/env/view/children.ts',
                );
                /* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! ./common */ './src/lib/env/view/common.ts',
                );
                /* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! ./events */ './src/lib/env/view/events.ts',
                );
                /* harmony import */ var _sendEvent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! ./sendEvent */ './src/lib/env/view/sendEvent.ts',
                );

                const ALL_SIDES = 0xf;
                function addPreloadTexture(path) {
                    viewEnv.addPreloadTexture(path);
                }
                function setInputPaddingsRem(paddings) {
                    viewEnv.setHitAreaPaddingsRem(paddings, paddings, paddings, paddings, ALL_SIDES);
                }
                function getBrowserTexturePath(id, width, height, scale = 1) {
                    return viewEnv.getWebBrowserTexturePath(id, width, height, scale);
                }
                function addModelObserver(path, resId, trackSubItems) {
                    return viewEnv.addDataChangedCallback(path, resId, trackSubItems);
                }
                function setSidePaddingsRem(paddings) {
                    viewEnv.setHitAreaPaddingsRem(
                        paddings.top,
                        paddings.right,
                        paddings.bottom,
                        paddings.left,
                        ALL_SIDES,
                    );
                }
                function getSize(unit = 'px') {
                    return unit === 'rem' ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function resize(width, height, unit = 'px') {
                    return unit === 'rem' ? viewEnv.resizeViewRem(width, height) : viewEnv.resizeViewPx(width, height);
                }
                function getViewGlobalPosition(unit = 'rem') {
                    const value = viewEnv.getViewGlobalPositionRem();
                    return unit === 'rem'
                        ? value
                        : {
                              x: remToPx(value.x),
                              y: remToPx(value.y),
                          };
                }
                function freezeTextureBeforeResize() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function getScale() {
                    return viewEnv.getScale();
                }
                function pxToRem(px) {
                    return viewEnv.pxToRem(px);
                }
                function remToPx(rem) {
                    return viewEnv.remToPx(rem);
                }
                function setAnimateWindow(showing, hiding) {
                    viewEnv.setAnimateWindow(showing, hiding);
                }
                function isFocused() {
                    return viewEnv.isFocused();
                }
                function setEventHandled() {
                    return viewEnv.setEventHandled();
                }
                function isEventHandled() {
                    return viewEnv.isEventHandled();
                }
                function forceTriggerMouseMove() {
                    viewEnv.forceTriggerMouseMove();
                }
                function getDisplayStatus() {
                    return viewEnv.getShowingStatus();
                }
                const displayStatusIs = Object.keys(_common__WEBPACK_IMPORTED_MODULE_1__.displayStatus).reduce(
                    (acc, key) => {
                        acc[key] = () =>
                            viewEnv.getShowingStatus() === _common__WEBPACK_IMPORTED_MODULE_1__.displayStatus[key];

                        return acc;
                    },
                    {},
                );
                const extraSize = {
                    /** Rem units */
                    set: (width, height) => {
                        viewEnv.setExtraSizeRem(width, height);
                    },

                    /** Rem units */
                    get: (width, height) => {
                        viewEnv.getExtraSizeRem(width, height);
                    },
                };
                const whenTutorialReady = Promise.all([
                    new Promise((resolve) => {
                        if (window.isDomBuilt) {
                            resolve();
                        } else {
                            _events__WEBPACK_IMPORTED_MODULE_2__.events.onDomBuilt(resolve);
                        }
                    }),
                    engine.whenReady,
                ]);

                /***/
            },

        /***/ './src/lib/env/view/sendEvent.ts':
            /*!***************************************!*\
  !*** ./src/lib/env/view/sendEvent.ts ***!
  \***************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ sendEvent: () => /* binding */ sendEvent,
                    /* harmony export */ sendViewEvent: () => /* binding */ sendViewEvent,
                    /* harmony export */ viewEventTypes: () => /* binding */ viewEventTypes,
                    /* harmony export */
                });
                const _excluded = ['args'];

                function _objectWithoutPropertiesLoose(source, excluded) {
                    if (source == null) return {};
                    var target = {};
                    var sourceKeys = Object.keys(source);
                    var key, i;
                    for (i = 0; i < sourceKeys.length; i++) {
                        key = sourceKeys[i];
                        if (excluded.indexOf(key) >= 0) continue;
                        target[key] = source[key];
                    }
                    return target;
                }

                const viewEventTypes = {
                    closePopover: 2,
                    move: 16,
                    close: 32,
                    minimize: 64,
                };

                const createViewEventArguments = (data) => {
                    return Object.entries(data).map(([name, value]) => {
                        const __Type = 'GFValueProxy';

                        switch (typeof value) {
                            case 'number':
                                return {
                                    __Type,
                                    name,
                                    number: value,
                                };

                            case 'boolean':
                                return {
                                    __Type,
                                    name,
                                    bool: value,
                                };

                            default:
                            case 'string':
                                return {
                                    __Type,
                                    name,
                                    string: value.toString(),
                                };
                        }
                    });
                };

                const sendViewEvent = (type, options) => {
                    const __Type = 'GFViewEventProxy';

                    if (options !== undefined) {
                        const args = options.args,
                            restOptions = _objectWithoutPropertiesLoose(options, _excluded);

                        if (args !== undefined) {
                            return viewEnv.handleViewEvent(
                                Object.assign(
                                    {
                                        __Type,
                                        type,
                                    },
                                    restOptions,
                                    {
                                        arguments: createViewEventArguments(args),
                                    },
                                ),
                            );
                        } else {
                            return viewEnv.handleViewEvent(
                                Object.assign(
                                    {
                                        __Type,
                                        type,
                                    },
                                    restOptions,
                                ),
                            );
                        }
                    } else {
                        return viewEnv.handleViewEvent({
                            __Type,
                            type,
                        });
                    }
                };
                const sendEvent = {
                    close(type) {
                        if (type === 'popover') {
                            sendViewEvent(viewEventTypes.closePopover);
                        } else {
                            sendViewEvent(viewEventTypes.close);
                        }
                    },

                    minimize() {
                        sendViewEvent(viewEventTypes.minimize);
                    },

                    move(start) {
                        sendViewEvent(viewEventTypes.move, {
                            isMouseEvent: true,
                            on: start,
                        });
                    },
                };

                /***/
            },

        /***/ './src/lib/function.ts':
            /*!*****************************!*\
  !*** ./src/lib/function.ts ***!
  \*****************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ constFalse: () => /* binding */ constFalse,
                    /* harmony export */ constTrue: () => /* binding */ constTrue,
                    /* harmony export */ emptyFunction: () => /* binding */ emptyFunction,
                    /* harmony export */ identity: () => /* binding */ identity,
                    /* harmony export */ log: () => /* binding */ log,
                    /* harmony export */ noop: () => /* binding */ noop,
                    /* harmony export */
                });
                /** Empty function */
                function noop() {} // eslint-disable-line @typescript-eslint/no-empty-function

                /** Alias of noop */

                const emptyFunction = noop;
                /**
                 * This helper function for corner case
                 * For example:
                 * ```js
                 * Object.keys(obj).map(identity) // -> [..]
                 * ```
                 */

                function identity(a) {
                    return a;
                }
                /**
                 * Can be used like this:
                 * ```
                 * computed(() => some.value, { equals: constFalse })
                 * ```
                 * Means that value will trigger updates by mutate
                 */

                function constFalse() {
                    return false;
                }
                /**
                 * Can be used like this:
                 * ```
                 * computed(() => some.value, { equals: constTrue })
                 * ```
                 * Means that value will **never** trigger updates by mutate
                 */

                function constTrue() {
                    return true;
                }
                /**
                 * This helper function for logging callbacks inside Data Layer Mocks without linter issues
                 *
                 * For example:
                 * ```js
                 *     controls: () => {
                 *         return makeActions({
                 *             goToBranchReset: () => log('onGoToBranchReset'),
                 *         });
                 *     },
                 * ```
                 */
                // eslint-disable-next-line no-console

                const log = console.log;

                /***/
            },

        /***/ './src/lib/hooks/useMountUnmount.ts':
            /*!******************************************!*\
  !*** ./src/lib/hooks/useMountUnmount.ts ***!
  \******************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ useMount: () => /* binding */ useMount,
                    /* harmony export */ useUnmount: () => /* binding */ useUnmount,
                    /* harmony export */
                });
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! react */ './node_modules/@wotfe/react/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
                    /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

                const useMount = (fn) => {
                    // eslint-disable-next-line react-hooks/exhaustive-deps
                    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(fn, []);
                };
                const useUnmount = (fn) => {
                    // eslint-disable-next-line react-hooks/exhaustive-deps
                    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => fn, []);
                };

                /***/
            },

        /***/ './src/lib/hooks/useSkipFrame.ts':
            /*!***************************************!*\
  !*** ./src/lib/hooks/useSkipFrame.ts ***!
  \***************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ useSkipFrame: () => /* binding */ useSkipFrame,
                    /* harmony export */
                });
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! react */ './node_modules/@wotfe/react/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
                    /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
                /* harmony import */ var _useMountUnmount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! ./useMountUnmount */ './src/lib/hooks/useMountUnmount.ts',
                );

                const NO_RAF_ID = 0;
                /**
                 * This hook will correctly work with async skip frame.
                 * It will be cleared when your component is automatically unmounted.
                 * Each time function starts, it will clear the previous run.
                 *
                 * Examples to usage:
                 * ```ts
                 * const skipFrame = useSkipFrame()
                 *
                 * useEffect(() => {
                 *   if (state === 'animating') {
                 *     skipFrame.run(() => setState(...))
                 *   }
                 * }, [state, skipFrame])
                 * ```
                 */

                function useSkipFrame() {
                    const rafIdRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(NO_RAF_ID);
                    (0, _useMountUnmount__WEBPACK_IMPORTED_MODULE_1__.useUnmount)(() => {
                        window.cancelAnimationFrame(rafIdRef.current);
                    });
                    return (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
                        () => ({
                            run: (handler) => {
                                window.cancelAnimationFrame(rafIdRef.current);
                                rafIdRef.current = window.requestAnimationFrame(() => {
                                    rafIdRef.current = window.requestAnimationFrame(() => {
                                        handler();
                                        rafIdRef.current = NO_RAF_ID;
                                    });
                                });
                            },
                            clear: () => {
                                window.cancelAnimationFrame(rafIdRef.current);
                                rafIdRef.current = NO_RAF_ID;
                            },

                            get isRunning() {
                                return rafIdRef.current !== NO_RAF_ID;
                            },
                        }),
                        [],
                    );
                }

                /***/
            },

        /***/ './src/views/lobby/pm_announce/tooltips/PersonalMissionsOldCampaignTooltipView/PersonalMissionsOldCampaignTooltipView.tsx':
            /*!********************************************************************************************************************************!*\
  !*** ./src/views/lobby/pm_announce/tooltips/PersonalMissionsOldCampaignTooltipView/PersonalMissionsOldCampaignTooltipView.tsx ***!
  \********************************************************************************************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */ var components_TooltipDecorator_TooltipDecorator__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! components/TooltipDecorator/TooltipDecorator */ './src/components/TooltipDecorator/TooltipDecorator.tsx',
                    );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! react */ './node_modules/@wotfe/react/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
                    /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
                /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! react-dom */ './node_modules/@wotfe/react-dom/index.js',
                );
                /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default =
                    /*#__PURE__*/ __webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
                /* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! ./components/App */ './src/views/lobby/pm_announce/tooltips/PersonalMissionsOldCampaignTooltipView/components/App.tsx',
                );
                /* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    /*! ./model */ './src/views/lobby/pm_announce/tooltips/PersonalMissionsOldCampaignTooltipView/model.ts',
                );

                engine.whenReady.then(() => {
                    react_dom__WEBPACK_IMPORTED_MODULE_2___default().render(
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                            _model__WEBPACK_IMPORTED_MODULE_4__.ModelProvider,
                            null,
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                                components_TooltipDecorator_TooltipDecorator__WEBPACK_IMPORTED_MODULE_0__.TooltipDecorator,
                                null,
                                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                                    _components_App__WEBPACK_IMPORTED_MODULE_3__.App,
                                    null,
                                ),
                            ),
                        ),
                        document.getElementById('root'),
                    );
                });

                /***/
            },

        /***/ './src/views/lobby/pm_announce/tooltips/PersonalMissionsOldCampaignTooltipView/components/App.tsx':
            /*!********************************************************************************************************!*\
  !*** ./src/views/lobby/pm_announce/tooltips/PersonalMissionsOldCampaignTooltipView/components/App.tsx ***!
  \********************************************************************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ App: () => /* binding */ App,
                    /* harmony export */
                });
                /* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! mobx-react-lite */ './node_modules/mobx-react-lite/es/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! react */ './node_modules/@wotfe/react/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
                    /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
                /* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! ../model */ './src/views/lobby/pm_announce/tooltips/PersonalMissionsOldCampaignTooltipView/model.ts',
                );
                /* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! ./App.css */ './src/views/lobby/pm_announce/tooltips/PersonalMissionsOldCampaignTooltipView/components/App.css',
                );

                const TEXTS = R.strings.tooltips.researchPage.earlyAccessInfo;
                const App = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_0__.observer)(() => {
                    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
                    const _useModel = (0, _model__WEBPACK_IMPORTED_MODULE_2__.useModel)(),
                        controls = _useModel.controls,
                        model = _useModel.model;

                    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                        'div',
                        {
                            className: _App_css__WEBPACK_IMPORTED_MODULE_3__['default'].base,
                        },
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                            'div',
                            {
                                className: _App_css__WEBPACK_IMPORTED_MODULE_3__['default'].header,
                            },
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement('div', {
                                className: _App_css__WEBPACK_IMPORTED_MODULE_3__['default'].header__icon,
                            }),
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                                'div',
                                {
                                    className: _App_css__WEBPACK_IMPORTED_MODULE_3__['default'].header__text,
                                },
                                TEXTS.header(),
                            ),
                        ),
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                            'div',
                            {
                                className: _App_css__WEBPACK_IMPORTED_MODULE_3__['default'].content,
                            },
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                                'div',
                                {
                                    className: _App_css__WEBPACK_IMPORTED_MODULE_3__['default'].content__title,
                                },
                                TEXTS.title(),
                            ),
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                                'div',
                                {
                                    className: _App_css__WEBPACK_IMPORTED_MODULE_3__['default'].content__text,
                                },
                                TEXTS.text(),
                            ),
                        ),
                    );
                });

                /***/
            },

        /***/ './src/views/lobby/pm_announce/tooltips/PersonalMissionsOldCampaignTooltipView/model.ts':
            /*!**********************************************************************************************!*\
  !*** ./src/views/lobby/pm_announce/tooltips/PersonalMissionsOldCampaignTooltipView/model.ts ***!
  \**********************************************************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ ModelProvider: () => /* binding */ ModelProvider,
                    /* harmony export */ useModel: () => /* binding */ useModel,
                    /* harmony export */
                });
                /* harmony import */ var lib_data_layer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! lib/data-layer */ './src/lib/data-layer/index.tsx',
                );
                /* eslint-disable @typescript-eslint/no-unused-vars */

                const _initializeModelWithC = (0,
                    lib_data_layer__WEBPACK_IMPORTED_MODULE_0__.initializeModelWithContext)()(
                        ({ observableModel }) => {
                            const model = {
                                root: observableModel.object(),
                            };
                            return Object.assign({}, model, {
                                computes: {},
                            });
                        },
                        ({ externalModel }) => ({}),
                    ),
                    ModelProvider = _initializeModelWithC[0],
                    useModel = _initializeModelWithC[1];

                /***/
            },

        /***/ './src/components/TooltipDecorator/TooltipDecorator.css':
            /*!**************************************************************!*\
  !*** ./src/components/TooltipDecorator/TooltipDecorator.css ***!
  \**************************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
                    /* harmony export */
                });
                // extracted by mini-css-extract-plugin
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = {
                    base: 'TooltipDecorator_base_c9',
                    'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                    decorator: 'TooltipDecorator_decorator_3d',
                };

                /***/
            },

        /***/ './src/views/lobby/pm_announce/tooltips/PersonalMissionsOldCampaignTooltipView/components/App.css':
            /*!********************************************************************************************************!*\
  !*** ./src/views/lobby/pm_announce/tooltips/PersonalMissionsOldCampaignTooltipView/components/App.css ***!
  \********************************************************************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
                    /* harmony export */
                });
                // extracted by mini-css-extract-plugin
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = {
                    base: 'App_base_89',
                    header: 'App_header_bf',
                    header__icon: 'App_header__icon_8c',
                    header__text: 'App_header__text_3b',
                    content: 'App_content_85',
                    content__title: 'App_content__title_3c',
                    content__text: 'App_content__text_8c',
                };

                /***/
            },

        /******/
    };
    /************************************************************************/
    /******/ // The module cache
    /******/ var __webpack_module_cache__ = {};
    /******/
    /******/ // The require function
    /******/ function __webpack_require__(moduleId) {
        /******/ // Check if module is in cache
        /******/ var cachedModule = __webpack_module_cache__[moduleId];
        /******/ if (cachedModule !== undefined) {
            /******/ return cachedModule.exports;
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/ var module = (__webpack_module_cache__[moduleId] = {
            /******/ // no module.id needed
            /******/ // no module.loaded needed
            /******/ exports: {},
            /******/
        });
        /******/
        /******/ // Execute the module function
        /******/ __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
        /******/
        /******/ // Return the exports of the module
        /******/ return module.exports;
        /******/
    }
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/ __webpack_require__.m = __webpack_modules__;
    /******/
    /************************************************************************/
    /******/ /* webpack/runtime/chunk loaded */
    /******/ (() => {
        /******/ var deferred = [];
        /******/ __webpack_require__.O = (result, chunkIds, fn, priority) => {
            /******/ if (chunkIds) {
                /******/ priority = priority || 0;
                /******/ for (var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--)
                    deferred[i] = deferred[i - 1];
                /******/ deferred[i] = [chunkIds, fn, priority];
                /******/ return;
                /******/
            }
            /******/ var notFulfilled = Infinity;
            /******/ for (var i = 0; i < deferred.length; i++) {
                /******/ var [chunkIds, fn, priority] = deferred[i];
                /******/ var fulfilled = true;
                /******/ for (var j = 0; j < chunkIds.length; j++) {
                    /******/ if (
                        (priority & (1 === 0) || notFulfilled >= priority) &&
                        Object.keys(__webpack_require__.O).every((key) => __webpack_require__.O[key](chunkIds[j]))
                    ) {
                        /******/ chunkIds.splice(j--, 1);
                        /******/
                    } else {
                        /******/ fulfilled = false;
                        /******/ if (priority < notFulfilled) notFulfilled = priority;
                        /******/
                    }
                    /******/
                }
                /******/ if (fulfilled) {
                    /******/ deferred.splice(i--, 1);
                    /******/ var r = fn();
                    /******/ if (r !== undefined) result = r;
                    /******/
                }
                /******/
            }
            /******/ return result;
            /******/
        };
        /******/
    })();
    /******/
    /******/ /* webpack/runtime/compat get default export */
    /******/ (() => {
        /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/ __webpack_require__.n = (module) => {
            /******/ var getter =
                module && module.__esModule ? /******/ () => module['default'] : /******/ () => module;
            /******/ __webpack_require__.d(getter, { a: getter });
            /******/ return getter;
            /******/
        };
        /******/
    })();
    /******/
    /******/ /* webpack/runtime/define property getters */
    /******/ (() => {
        /******/ // define getter functions for harmony exports
        /******/ __webpack_require__.d = (exports, definition) => {
            /******/ for (var key in definition) {
                /******/ if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
                    /******/ Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
                    /******/
                }
                /******/
            }
            /******/
        };
        /******/
    })();
    /******/
    /******/ /* webpack/runtime/global */
    /******/ (() => {
        /******/ __webpack_require__.g = (function () {
            /******/ if (typeof globalThis === 'object') return globalThis;
            /******/ try {
                /******/ return this || new Function('return this')();
                /******/
            } catch (e) {
                /******/ if (typeof window === 'object') return window;
                /******/
            }
            /******/
        })();
        /******/
    })();
    /******/
    /******/ /* webpack/runtime/hasOwnProperty shorthand */
    /******/ (() => {
        /******/ __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
        /******/
    })();
    /******/
    /******/ /* webpack/runtime/make namespace object */
    /******/ (() => {
        /******/ // define __esModule on exports
        /******/ __webpack_require__.r = (exports) => {
            /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
                /******/
            }
            /******/ Object.defineProperty(exports, '__esModule', { value: true });
            /******/
        };
        /******/
    })();
    /******/
    /******/ /* webpack/runtime/jsonp chunk loading */
    /******/ (() => {
        /******/ // no baseURI
        /******/
        /******/ // object to store loaded and loading chunks
        /******/ // undefined = chunk not loaded, null = chunk preloaded/prefetched
        /******/ // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
        /******/ var installedChunks = {
            /******/ 'lobby/pm_announce/tooltips/PersonalMissionsOldCampaignTooltipView/PersonalMissionsOldCampaignTooltipView': 0,
            /******/
        };
        /******/
        /******/ // no chunk on demand loading
        /******/
        /******/ // no prefetching
        /******/
        /******/ // no preloaded
        /******/
        /******/ // no HMR
        /******/
        /******/ // no HMR manifest
        /******/
        /******/ __webpack_require__.O.j = (chunkId) => installedChunks[chunkId] === 0;
        /******/
        /******/ // install a JSONP callback for chunk loading
        /******/ var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
            /******/ var [chunkIds, moreModules, runtime] = data;
            /******/ // add "moreModules" to the modules object,
            /******/ // then flag all "chunkIds" as loaded and fire callback
            /******/ var moduleId,
                chunkId,
                i = 0;
            /******/ if (chunkIds.some((id) => installedChunks[id] !== 0)) {
                /******/ for (moduleId in moreModules) {
                    /******/ if (__webpack_require__.o(moreModules, moduleId)) {
                        /******/ __webpack_require__.m[moduleId] = moreModules[moduleId];
                        /******/
                    }
                    /******/
                }
                /******/ if (runtime) var result = runtime(__webpack_require__);
                /******/
            }
            /******/ if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
            /******/ for (; i < chunkIds.length; i++) {
                /******/ chunkId = chunkIds[i];
                /******/ if (__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
                    /******/ installedChunks[chunkId][0]();
                    /******/
                }
                /******/ installedChunks[chunkId] = 0;
                /******/
            }
            /******/ return __webpack_require__.O(result);
            /******/
        };
        /******/
        /******/ var chunkLoadingGlobal = (self['webpackChunkgameface'] = self['webpackChunkgameface'] || []);
        /******/ chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
        /******/ chunkLoadingGlobal.push = webpackJsonpCallback.bind(
            null,
            chunkLoadingGlobal.push.bind(chunkLoadingGlobal),
        );
        /******/
    })();
    /******/
    /************************************************************************/
    /******/
    /******/ // startup
    /******/ // Load entry module and return exports
    /******/ // This entry module depends on other loaded chunks and execution need to be delayed
    /******/ var __webpack_exports__ = __webpack_require__.O(undefined, ['lib/lobby/pm_announce/vendors'], () =>
        __webpack_require__(
            './src/views/lobby/pm_announce/tooltips/PersonalMissionsOldCampaignTooltipView/PersonalMissionsOldCampaignTooltipView.tsx',
        ),
    );
    /******/ __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
    /******/
    /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9iYnkvcG1fYW5ub3VuY2UvdG9vbHRpcHMvUGVyc29uYWxNaXNzaW9uc09sZENhbXBhaWduVG9vbHRpcFZpZXcvUGVyc29uYWxNaXNzaW9uc09sZENhbXBhaWduVG9vbHRpcFZpZXcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQU1PLE1BQU1NLGdCQUFnQixHQUFHRix1REFBQSxDQUF3QyxTQUFTRSxnQkFBVCxPQUVwRUUsR0FGb0UsRUFHdEU7QUFBQSxNQUZJQyxRQUVKLFFBRklBLFFBRUo7QUFBQSxNQUZjQyxTQUVkLFFBRmNBLFNBRWQ7QUFBQSx3QkFGeUJDLEtBRXpCO0FBQUEsTUFGeUJBLEtBRXpCLDJCQUZpQyxTQUVqQztBQUFBLE1BRitDQyxTQUUvQzs7QUFDRSxRQUFNQyxTQUFTLEdBQUdWLG9FQUFZLEVBQTlCO0FBQ0EsUUFBTVcsT0FBTyxHQUFHVixtREFBQSxDQUFvQyxJQUFwQyxDQUFoQjtBQUVBRixFQUFBQSxtRUFBUSxDQUFDLE1BQU07QUFDWFcsSUFBQUEsU0FBUyxDQUFDRyxHQUFWLENBQWMsTUFBTTtBQUNoQixZQUFNQyxJQUFJLEdBQUdILE9BQU8sQ0FBQ0ksT0FBckI7O0FBQ0EsVUFBSSxDQUFDRCxJQUFMLEVBQVc7QUFDUDtBQUNIOztBQUNELFlBQU1FLFlBQVksR0FBR0YsSUFBSSxDQUFDRyxXQUExQjtBQUNBLFlBQU1DLGFBQWEsR0FBR0osSUFBSSxDQUFDSyxZQUEzQjtBQUVBckIsTUFBQUEsb0RBQUEsQ0FBZ0JrQixZQUFoQixFQUE4QkUsYUFBOUI7QUFFQSxZQUFNSSxLQUFLLEdBQUdDLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0JWLElBQXhCLENBQWQ7QUFDQWhCLE1BQUFBLGdFQUFBLENBQTRCO0FBQ3hCNEIsUUFBQUEsSUFBSSxFQUFFQyxRQUFRLENBQUNMLEtBQUssQ0FBQ00sZ0JBQU4sQ0FBdUIsY0FBdkIsQ0FBRCxFQUF5QyxFQUF6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Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0MzQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWhEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvY29tcG9uZW50cy9Ub29sdGlwRGVjb3JhdG9yL1Rvb2x0aXBEZWNvcmF0b3IudHN4Iiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2xpYi9kYXRhLWxheWVyL2RhdGEtbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvbGliL2RhdGEtbGF5ZXIvaW5kZXgudHN4Iiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2xpYi9lbnYvY2xpZW50L2V2ZW50cy50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9saWIvZW52L2NsaWVudC9pbmRleC50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9saWIvZW52L2NsaWVudC9pbnRlcm5hbC50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9saWIvZW52L2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvbGliL2Vudi9pbmRleC50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9saWIvZW52L3ZpZXcvY2hpbGRyZW4udHMiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvbGliL2Vudi92aWV3L2NvbW1vbi50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9saWIvZW52L3ZpZXcvZXZlbnRzLnRzIiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2xpYi9lbnYvdmlldy9pbmRleC50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9saWIvZW52L3ZpZXcvc2VuZEV2ZW50LnRzIiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2xpYi9mdW5jdGlvbi50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9saWIvaG9va3MvdXNlTW91bnRVbm1vdW50LnRzIiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2xpYi9ob29rcy91c2VTa2lwRnJhbWUudHMiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvdmlld3MvbG9iYnkvcG1fYW5ub3VuY2UvdG9vbHRpcHMvUGVyc29uYWxNaXNzaW9uc09sZENhbXBhaWduVG9vbHRpcFZpZXcvUGVyc29uYWxNaXNzaW9uc09sZENhbXBhaWduVG9vbHRpcFZpZXcudHN4Iiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL3ZpZXdzL2xvYmJ5L3BtX2Fubm91bmNlL3Rvb2x0aXBzL1BlcnNvbmFsTWlzc2lvbnNPbGRDYW1wYWlnblRvb2x0aXBWaWV3L2NvbXBvbmVudHMvQXBwLnRzeCIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy92aWV3cy9sb2JieS9wbV9hbm5vdW5jZS90b29sdGlwcy9QZXJzb25hbE1pc3Npb25zT2xkQ2FtcGFpZ25Ub29sdGlwVmlldy9tb2RlbC50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9jb21wb25lbnRzL1Rvb2x0aXBEZWNvcmF0b3IvVG9vbHRpcERlY29yYXRvci5jc3MiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvdmlld3MvbG9iYnkvcG1fYW5ub3VuY2UvdG9vbHRpcHMvUGVyc29uYWxNaXNzaW9uc09sZENhbXBhaWduVG9vbHRpcFZpZXcvY29tcG9uZW50cy9BcHAuY3NzIiwid2VicGFjazovL2dhbWVmYWNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2dhbWVmYWNlL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2dhbWVmYWNlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9nYW1lZmFjZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dhbWVmYWNlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2dhbWVmYWNlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2Uvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2dhbWVmYWNlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCB7IGVudiB9IGZyb20gJ2xpYi9lbnYnO1xyXG5pbXBvcnQgeyB1c2VNb3VudCB9IGZyb20gJ2xpYi9ob29rcy91c2VNb3VudFVubW91bnQnO1xyXG5pbXBvcnQgeyB1c2VTa2lwRnJhbWUgfSBmcm9tICdsaWIvaG9va3MvdXNlU2tpcEZyYW1lJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Ub29sdGlwRGVjb3JhdG9yLmNzcyc7XHJcblxyXG5leHBvcnQgdHlwZSBQcm9wcyA9IFJlYWN0LkNvbXBvbmVudFByb3BzPCdkaXYnPiAmIHtcclxuICAgIHRoZW1lPzogJ25vbmUnIHwgJ2RlZmF1bHQnO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFRvb2x0aXBEZWNvcmF0b3IgPSBSZWFjdC5mb3J3YXJkUmVmPEhUTUxEaXZFbGVtZW50LCBQcm9wcz4oZnVuY3Rpb24gVG9vbHRpcERlY29yYXRvcihcclxuICAgIHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgdGhlbWUgPSAnZGVmYXVsdCcsIC4uLnJlc3RQcm9wcyB9LFxyXG4gICAgcmVmLFxyXG4pIHtcclxuICAgIGNvbnN0IHNraXBGcmFtZSA9IHVzZVNraXBGcmFtZSgpO1xyXG4gICAgY29uc3QgYmFzZVJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MRGl2RWxlbWVudCB8IG51bGw+KG51bGwpO1xyXG5cclxuICAgIHVzZU1vdW50KCgpID0+IHtcclxuICAgICAgICBza2lwRnJhbWUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYmFzZSA9IGJhc2VSZWYuY3VycmVudDtcclxuICAgICAgICAgICAgaWYgKCFiYXNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgY29udGVudFdpZHRoID0gYmFzZS5zY3JvbGxXaWR0aDtcclxuICAgICAgICAgICAgY29uc3QgY29udGVudEhlaWdodCA9IGJhc2Uuc2Nyb2xsSGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgZW52LnZpZXcucmVzaXplKGNvbnRlbnRXaWR0aCwgY29udGVudEhlaWdodCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGJhc2UpO1xyXG4gICAgICAgICAgICBlbnYudmlldy5zZXRTaWRlUGFkZGluZ3NSZW0oe1xyXG4gICAgICAgICAgICAgICAgbGVmdDogcGFyc2VJbnQoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy1sZWZ0JyksIDEwKSxcclxuICAgICAgICAgICAgICAgIHRvcDogcGFyc2VJbnQoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy10b3AnKSwgMTApLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IHBhcnNlSW50KHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctcmlnaHQnKSwgMTApLFxyXG4gICAgICAgICAgICAgICAgYm90dG9tOiBwYXJzZUludChzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLWJvdHRvbScpLCAxMCksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0UmVmcyhub2RlOiBIVE1MRGl2RWxlbWVudCkge1xyXG4gICAgICAgIGJhc2VSZWYuY3VycmVudCA9IG5vZGU7XHJcbiAgICAgICAgaWYgKHR5cGVvZiByZWYgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgcmVmKG5vZGUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocmVmKSB7XHJcbiAgICAgICAgICAgIChyZWYgYXMgUmVhY3QuTXV0YWJsZVJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD4pLmN1cnJlbnQgPSBub2RlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgey4uLnJlc3RQcm9wc30gY2xhc3NOYW1lPXtjeChzdHlsZXMuYmFzZSwgc3R5bGVzW2BiYXNlX190aGVtZS0ke3RoZW1lfWBdLCBjbGFzc05hbWUpfSByZWY9e3NldFJlZnN9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlY29yYXRvcn0+e2NoaWxkcmVufTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSk7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cbmltcG9ydCB7IGVudiB9IGZyb20gJ2xpYi9lbnYnO1xuaW1wb3J0IHsgVHlwZUJ5U3RyaW5nUGF0aCB9IGZyb20gJ2xpYi90eXBlLWhlbHBlcnMnO1xuXG5leHBvcnQgdHlwZSBNb2RlbFN1YnNjcmliZXI8VD4gPSAobW9kZWw6IFQpID0+IHZvaWQ7XG5cbmV4cG9ydCB0eXBlIERhdGFMYXllckNyZWF0ZU9wdGlvbnMgPSB7XG4gICAgaW5pdGlhbGl6ZXI/OiBib29sZWFuIHwgdW5kZWZpbmVkO1xuICAgIGNvbnRleHQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgcm9vdElkPzogbnVtYmVyO1xuICAgIGdldFJvb3Q/OiAocm9vdElkOiBudW1iZXIpID0+IHVua25vd247XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFMYXllcjxUIGV4dGVuZHMge30+IHtcbiAgICBzdWJzY3JpYmU8UCBleHRlbmRzIHN0cmluZz4oc3Vic2NyaWJlcjogTW9kZWxTdWJzY3JpYmVyPFR5cGVCeVN0cmluZ1BhdGg8VCwgUD4+LCBwYXRoPzogUCk6IG51bWJlcjtcbiAgICByZWFkQnlQYXRoPFAgZXh0ZW5kcyBzdHJpbmc+KHBhdGg/OiBQKTogVHlwZUJ5U3RyaW5nUGF0aDxULCBQPjtcbiAgICBjcmVhdGVDYWxsYmFjazxBcmdzTWFwIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBFeHRlcm5BcmdzLCBFeHRlcm5BcmdzIGV4dGVuZHMge30sIFAgZXh0ZW5kcyBzdHJpbmc+KFxuICAgICAgICBhcmdzTWFwOiBBcmdzTWFwLFxuICAgICAgICBwYXRoOiBQLFxuICAgICk6IFR5cGVCeVN0cmluZ1BhdGg8VCwgUD4gZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IHZvaWQgPyAoLi4uYXJnczogUGFyYW1ldGVyczxBcmdzTWFwPikgPT4gdm9pZCA6IHVua25vd247XG4gICAgY3JlYXRlQ2FsbGJhY2tOb0FyZ3M8UCBleHRlbmRzIHN0cmluZz4oXG4gICAgICAgIHBhdGg6IFAsXG4gICAgKTogVHlwZUJ5U3RyaW5nUGF0aDxULCBQPiBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZCA/ICgpID0+IHZvaWQgOiB1bmtub3duO1xuICAgIGRpc3Bvc2U6ICgpID0+IHZvaWQ7XG4gICAgdW5zdWJzY3JpYmU6IChpZDogbnVtYmVyLCByZXNJZD86IG51bWJlcikgPT4gdm9pZDtcbn1cblxuY29uc3QgZ2V0Um9vdERlZmF1bHQgPSAocm9vdElkOiBudW1iZXIpID0+IHtcbiAgICBpZiAocm9vdElkID09PSAwKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3c7XG4gICAgfVxuICAgIHJldHVybiB3aW5kb3cuc3ViVmlld3MuZ2V0KHJvb3RJZCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlPFQgZXh0ZW5kcyB7fT4oe1xuICAgIGluaXRpYWxpemVyID0gdHJ1ZSxcbiAgICByb290SWQgPSAwLFxuICAgIGdldFJvb3QgPSBnZXRSb290RGVmYXVsdCxcbiAgICBjb250ZXh0ID0gJ21vZGVsJyxcbn06IERhdGFMYXllckNyZWF0ZU9wdGlvbnMgPSB7fSk6IERhdGFMYXllcjxUPiB7XG4gICAgY29uc3Qgc3Vic2NyaWJlcnMgPSBuZXcgTWFwPG51bWJlciwgTW9kZWxTdWJzY3JpYmVyPGFueT4+KCk7XG5cbiAgICBlbmdpbmUud2hlblJlYWR5LnRoZW4oKCkgPT4ge1xuICAgICAgICBlbmdpbmUub24oJ3ZpZXdFbnYub25EYXRhQ2hhbmdlZCcsIChkYXRhOiBhbnksIF86IHVua25vd24sIGNhbGxiYWNrSURzOiBudW1iZXJbXSkgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2tJRHMuZm9yRWFjaCgoY2FsbGJhY2tJRCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gc3Vic2NyaWJlcnMuZ2V0KGNhbGxiYWNrSUQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gdW5zdWJzY3JpYmUoaWQ6IG51bWJlciwgcmVzSWQgPSAwKSB7XG4gICAgICAgIGlmICh2aWV3RW52LnJlbW92ZURhdGFDaGFuZ2VkQ2FsbGJhY2soaWQsIHJlc0lkKSkge1xuICAgICAgICAgICAgc3Vic2NyaWJlcnMuZGVsZXRlKGlkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDYW4ndCByZW1vdmUgY2FsbGJhY2sgYnkgaWQ6XCIsIGlkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlYWRCeVBhdGggPSA8UCBleHRlbmRzIHN0cmluZz4ocGF0aD86IFApOiBUeXBlQnlTdHJpbmdQYXRoPFQsIFA+ID0+IHtcbiAgICAgICAgY29uc3Qgcm9vdCA9IGdldFJvb3Qocm9vdElkKTtcbiAgICAgICAgY29uc3QgbW9kZWwgPSBjb250ZXh0LnNwbGl0KCcuJykucmVkdWNlKChyZXN1bHQsIGtleSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChyZXN1bHQgYXMgYW55KVtrZXldO1xuICAgICAgICB9LCByb290IGFzIFQpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycgfHwgcGF0aC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBtb2RlbCBhcyB1bmtub3duIGFzIFR5cGVCeVN0cmluZ1BhdGg8VCwgUD47XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGF0aC5zcGxpdCgnLicpLnJlZHVjZSgocmVzdWx0LCBrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSAocmVzdWx0IGFzIGFueSlba2V5XTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmJpbmQocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICB9LCBtb2RlbCkgYXMgVHlwZUJ5U3RyaW5nUGF0aDxULCBQPjtcbiAgICB9O1xuXG4gICAgY29uc3Qgc3Vic2NyaWJlID0gPFAgZXh0ZW5kcyBzdHJpbmc+KHN1YnNjcmliZXI6IE1vZGVsU3Vic2NyaWJlcjxUeXBlQnlTdHJpbmdQYXRoPFQsIFA+PiwgcGF0aD86IFApID0+IHtcbiAgICAgICAgY29uc3Qgc3Vic2NyaWJlUGF0aCA9IHR5cGVvZiBwYXRoID09PSAnc3RyaW5nJyA/IGAke2NvbnRleHR9LiR7cGF0aH1gIDogY29udGV4dDtcbiAgICAgICAgY29uc3QgdHJhY2tJbkRlcHRoID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgaWQgPSBlbnYudmlldy5hZGRNb2RlbE9ic2VydmVyKHN1YnNjcmliZVBhdGgsIHJvb3RJZCwgdHJhY2tJbkRlcHRoKTtcbiAgICAgICAgc3Vic2NyaWJlcnMuc2V0KGlkLCBzdWJzY3JpYmVyKTtcbiAgICAgICAgaWYgKGluaXRpYWxpemVyKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyKHJlYWRCeVBhdGgocGF0aCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpZDtcbiAgICB9O1xuXG4gICAgY29uc3QgY3JlYXRlQ2FsbGJhY2sgPSA8QXJnc01hcCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gRXh0ZXJuQXJncywgRXh0ZXJuQXJncyBleHRlbmRzIHt9LCBQIGV4dGVuZHMgc3RyaW5nPihcbiAgICAgICAgYXJnc01hcDogQXJnc01hcCxcbiAgICAgICAgcGF0aDogUCxcbiAgICApOiBUeXBlQnlTdHJpbmdQYXRoPFQsIFA+IGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkID8gKC4uLmFyZ3M6IFBhcmFtZXRlcnM8QXJnc01hcD4pID0+IHZvaWQgOiB1bmtub3duID0+IHtcbiAgICAgICAgY29uc3QgZm4gPSByZWFkQnlQYXRoKHBhdGgpIGFzIChhcmdzPzogRXh0ZXJuQXJncykgPT4gdm9pZDtcbiAgICAgICAgcmV0dXJuICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgICAgICAgZm4oYXJnc01hcCguLi5hcmdzKSk7XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIGNvbnN0IGNyZWF0ZUNhbGxiYWNrTm9BcmdzID0gPFAgZXh0ZW5kcyBzdHJpbmc+KFxuICAgICAgICBwYXRoOiBQLFxuICAgICk6IFR5cGVCeVN0cmluZ1BhdGg8VCwgUD4gZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IHZvaWQgPyAoKSA9PiB2b2lkIDogdW5rbm93biA9PiB7XG4gICAgICAgIGNvbnN0IGZuID0gcmVhZEJ5UGF0aChwYXRoKSBhcyAoYXJncz86IHsgYXJnczogYW55IH0pID0+IHZvaWQ7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBmbigpO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBkaXNwb3NlKCkge1xuICAgICAgICBmb3IgKGNvbnN0IHN1YnNjcmliZXJJZCBvZiBzdWJzY3JpYmVycy5rZXlzKCkpIHtcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlKHN1YnNjcmliZXJJZCwgcm9vdElkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7IHN1YnNjcmliZSwgcmVhZEJ5UGF0aCwgY3JlYXRlQ2FsbGJhY2ssIGNyZWF0ZUNhbGxiYWNrTm9BcmdzLCBkaXNwb3NlLCB1bnN1YnNjcmliZSB9O1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9mdW5jdGlvbi1jb21wb25lbnQtZGVmaW5pdGlvbiAqL1xyXG5pbXBvcnQgeyBjb25zdEZhbHNlIH0gZnJvbSAnbGliL2Z1bmN0aW9uJztcclxuaW1wb3J0IHsgVHlwZUJ5U3RyaW5nUGF0aCB9IGZyb20gJ2xpYi90eXBlLWhlbHBlcnMnO1xyXG5pbXBvcnQgeyBhY3Rpb24sIG9ic2VydmFibGUgfSBmcm9tICdtb2J4JztcclxuaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIFByb3BzV2l0aENoaWxkcmVuLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgdHlwZSB7IERhdGFMYXllciwgRGF0YUxheWVyQ3JlYXRlT3B0aW9ucyB9IGZyb20gJy4vZGF0YS1sYXllcic7XHJcbmltcG9ydCAqIGFzIGRhdGFMYXllciBmcm9tICcuL2RhdGEtbGF5ZXInO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlTW9kZWwgfSBmcm9tICcuL3R5cGVzJztcclxuXHJcbmV4cG9ydCB7IGRhdGFMYXllciB9O1xyXG5leHBvcnQgdHlwZSB7IERhdGFMYXllckNyZWF0ZU9wdGlvbnMsIERhdGFMYXllciB9O1xyXG4vKiogQ3VycmVudCBkYXRhIG1vZGUgKG1vY2tzIG9yIHJlYWwpICovXHJcbmV4cG9ydCB0eXBlIE1vZGUgPSAnbW9ja3MnIHwgJ3JlYWwnO1xyXG5cclxuZXhwb3J0IHR5cGUgQ29udGV4dDxNb2RlbCwgQ29udHJvbHM+ID0ge1xyXG4gICAgbW9kZWw6IE1vZGVsO1xyXG4gICAgY29udHJvbHM6IENvbnRyb2xzO1xyXG4gICAgbW9kZTogTW9kZTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBXaWxsIGJlIGNhbGwgYmVmb3JlIE1vZGVsUHJvdmlkZXIgd2lsbCB1bm1vdW50XHJcbiAqIGBgYHRzeFxyXG4gKiBsZXQgdGltZW91dElkID0gMFxyXG4gKiBjbGVhbnVwKCgpID0+IGNsZWFyVGltZW91dCh0aW1lb3V0SWQpKVxyXG4gKlxyXG4gKiAvLyAuLi5cclxuICpcclxuICogKCkgPT4gdGltZW91dElkID0gc2V0VGltZW91dChkb1NvbWV0aGluZywgNTAwKVxyXG4gKiBgYGBcclxuICovXHJcbmV4cG9ydCB0eXBlIENsZWFudXAgPSAoY2xlYW51cEZuOiAoKSA9PiB2b2lkKSA9PiB2b2lkO1xyXG5leHBvcnQgdHlwZSBDb250ZXh0UHJvcHMgPSBQcm9wc1dpdGhDaGlsZHJlbjx7XHJcbiAgICBtb2RlPzogTW9kZTtcclxuICAgIG9wdGlvbnM/OiBEYXRhTGF5ZXJDcmVhdGVPcHRpb25zO1xyXG59PjtcclxuXHJcbmV4cG9ydCB0eXBlIFJlYWRCeVBhdGg8VCBleHRlbmRzIHt9PiA9IDxQIGV4dGVuZHMgc3RyaW5nIHwgdW5kZWZpbmVkPihcclxuICAgIHBhdGg6IFAsXHJcbikgPT4gUCBleHRlbmRzIHN0cmluZyA/IFR5cGVCeVN0cmluZ1BhdGg8VCwgUD4gOiBUO1xyXG5cclxuZXhwb3J0IHR5cGUgTW9kZWxDcmVhdG9yQXJnczxUIGV4dGVuZHMge30+ID0ge1xyXG4gICAgbW9kZTogTW9kZTtcclxuICAgIC8qKiBUaGlzIGlzIEFQSSBmb3IgSlMgPC0+IEMrKywgcmVhZCBvZiBjcmVhdGUgZG9jIGluIHtAbGluayBkYXRhTGF5ZXIuY3JlYXRlfSAqL1xyXG4gICAgZXh0ZXJuYWxNb2RlbDogRGF0YUxheWVyPFQ+O1xyXG4gICAgLyoqIEBzZWUge0BsaW5rIENsZWFudXB9IGZvciBmdXJ0aGVyIGluZm9ybWF0aW9uLiAqL1xyXG4gICAgY2xlYW51cDogQ2xlYW51cDtcclxuICAgIC8qKlxyXG4gICAgICogTWFrZXMgb2JzZXJ2YWJsZSBib3ggYWJvdmUgcGFydCBvZiBtb2RlbCBhbmQgc3Vic2NyaWJlIHRvIHVwZGF0ZSBieSB0eXBlXHJcbiAgICAgKiBAcGFyYW0gcGF0aCBvcHRpb25hbCByZWxhdGl2ZSBwYXRoIG9mIG1vZGVsXHJcbiAgICAgKiBAcGFyYW0gaW5pdCBvcHRpb25hbCBpbml0IGRhdGEgb2YgcGF0aCAod2lsbCByZWFkIGZyb20gbW9kZWwgYnkgZGVmYXVsdClcclxuICAgICAqL1xyXG4gICAgb2JzZXJ2YWJsZU1vZGVsOiBPYnNlcnZhYmxlTW9kZWw8VD47XHJcbiAgICByZWFkQnlQYXRoOiBSZWFkQnlQYXRoPFQ+O1xyXG59O1xyXG5leHBvcnQgdHlwZSBDb250cm9sc0NyZWF0b3JBcmdzPE1vZGVsLCBUIGV4dGVuZHMge30+ID0ge1xyXG4gICAgbW9kZTogTW9kZTtcclxuICAgIC8qKiBNb2RlbCB3aGF0IHJldHVybmVkIGZyb20gZmlyc3QgZnVuY3Rpb24gLSB7QGxpbmsgTW9kZWxDcmVhdG9yQXJnczxUPn0gKi9cclxuICAgIG1vZGVsOiBNb2RlbDtcclxuICAgIC8qKlxyXG4gICAgICogTWFrZXMgb2JzZXJ2YWJsZSBib3ggYWJvdmUgcGFydCBvZiBtb2RlbCBhbmQgc3Vic2NyaWJlIHRvIHVwZGF0ZSBieSB0eXBlXHJcbiAgICAgKiBAcGFyYW0gcGF0aCBvcHRpb25hbCByZWxhdGl2ZSBwYXRoIG9mIG1vZGVsXHJcbiAgICAgKiBAcGFyYW0gaW5pdCBvcHRpb25hbCBpbml0IGRhdGEgb2YgcGF0aCAod2lsbCByZWFkIGZyb20gbW9kZWwgYnkgZGVmYXVsdClcclxuICAgICAqL1xyXG4gICAgZXh0ZXJuYWxNb2RlbDogRGF0YUxheWVyPFQ+O1xyXG4gICAgLyoqIEBzZWUge0BsaW5rIENsZWFudXB9IGZvciBmdXJ0aGVyIGluZm9ybWF0aW9uLiAqL1xyXG4gICAgY2xlYW51cDogQ2xlYW51cDtcclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIE1vY2tzPE1vZGVsLCBDb250cm9scz4gPSB7XHJcbiAgICBnZXR0ZXI6IChwYXRoPzogc3RyaW5nKSA9PiBhbnk7XHJcbiAgICBjb250cm9sczogKGFyZ3M6IHsgbW9kZTogTW9kZTsgbW9kZWw6IE1vZGVsOyBjbGVhbnVwOiBDbGVhbnVwIH0pID0+IENvbnRyb2xzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqICMjIyMgTWFrZXMgdHlwZSBmb3IgbWFrZSBtb2NrcyBlYXNpZXJcclxuICogYGBgdHNcclxuICogIGNvbnN0IG1vY2tzOiBNb2Nrc09mPHR5cGVvZiB1c2VNb2RlbD4gPSB7XHJcbiAqICAgICAgLy8gLi4uXHJcbiAqICB9XHJcbiAqIGBgYFxyXG4gKi9cclxuZXhwb3J0IHR5cGUgTW9ja3NPZjxVc2VNb2RlbCBleHRlbmRzICgpID0+IGFueT4gPSBSZXR1cm5UeXBlPFVzZU1vZGVsPiBleHRlbmRzIENvbnRleHQ8aW5mZXIgTW9kZWwsIGluZmVyIENvbnRyb2xzPlxyXG4gICAgPyBNb2NrczxNb2RlbCwgQ29udHJvbHM+XHJcbiAgICA6IG5ldmVyO1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZSBNb2RlbFByb3ZpZGVyIGFuZCB1c2VNb2RlbCBmb3IgeW91ciBkYXRhLWxheWVyOlxyXG4gKiBgYGB0c1xyXG4gKiBleHBvcnQgY29uc3QgW01vZGVsUHJvdmlkZXIsIHVzZU1vZGVsXSA9IGluaXRpYWxpemVNb2RlbFdpdGhDb250ZXh0PDxNT0RFTF9UWVBFPj4oKShcclxuICogICAgICgpID0+IHt9LCAvLyBmb3IgbW9kZWxcclxuICogICAgICgpID0+IHt9LCAvLyBmb3IgY29udHJvbHMgKGZ1bmN0aW9ucylcclxuICogKTtcclxuICogYGBgXHJcbiAqIFdoZXJlIGA8TU9ERUxfVFlQRT5gIGlzIHlvdXIgbW9kZWwgdHlwZS5cclxuICovXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsaXplTW9kZWxXaXRoQ29udGV4dCA9IDxUIGV4dGVuZHMge30+KCkgPT4ge1xyXG4gICAgcmV0dXJuIDxNb2RlbCwgQ29udHJvbHM+KFxyXG4gICAgICAgIG1vZGVsQ3JlYXRvcjogKGFyZ3M6IE1vZGVsQ3JlYXRvckFyZ3M8VD4pID0+IE1vZGVsLFxyXG4gICAgICAgIGNvbnRyb2xzQ3JlYXRvcjogKGFyZ3M6IENvbnRyb2xzQ3JlYXRvckFyZ3M8TW9kZWwsIFQ+KSA9PiBDb250cm9scyxcclxuICAgICkgPT4ge1xyXG4gICAgICAgIGNvbnN0IENvbnRleHQgPSBjcmVhdGVDb250ZXh0PENvbnRleHQ8TW9kZWwsIENvbnRyb2xzPj4oe30gYXMgdW5rbm93biBhcyBDb250ZXh0PE1vZGVsLCBDb250cm9scz4pO1xyXG5cclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBEYXRhTGF5ZXJQcm92aWRlcih7XHJcbiAgICAgICAgICAgICAgICBtb2RlOiBkYXRhTW9kZSA9ICdyZWFsJyxcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMsXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbixcclxuICAgICAgICAgICAgICAgIG1vY2tzLFxyXG4gICAgICAgICAgICB9OiBDb250ZXh0UHJvcHMgJiB7IG1vY2tzPzogTW9ja3M8TW9kZWwsIENvbnRyb2xzPiB9KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjbGVhbnVwc1JlZiA9IHVzZVJlZjwoKCkgPT4gdm9pZClbXT4oW10pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3JlYXRlQ29udGV4dFZhbHVlID0gKFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGU6IE1vZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz86IERhdGFMYXllckNyZWF0ZU9wdGlvbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgbW9ja3M/OiBNb2NrczxNb2RlbCwgQ29udHJvbHM+LFxyXG4gICAgICAgICAgICAgICAgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YUxheWVySW5zdGFuY2UgPSBkYXRhTGF5ZXIuY3JlYXRlPFQ+KG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4dGVybmFsTW9kZWwgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlID09PSAncmVhbCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZGF0YUxheWVySW5zdGFuY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uZGF0YUxheWVySW5zdGFuY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkQnlQYXRoOiBtb2Nrcz8uZ2V0dGVyID8/ICgoKSA9PiB1bmRlZmluZWQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0eXBlIE9ic2VydmFibGVNb2RlbExvY2FsID0gT2JzZXJ2YWJsZU1vZGVsPFQ+O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWFkQnlQYXRoOiBSZWFkQnlQYXRoPFQ+ID0gKHBhdGgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGUgPT09ICdtb2NrcycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtb2Nrcz8uZ2V0dGVyKHBhdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGV4dGVybmFsTW9kZWwucmVhZEJ5UGF0aChwYXRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9ic2VydmFibGVBcnJheTogT2JzZXJ2YWJsZU1vZGVsTG9jYWxbJ2FycmF5J10gPSAocGF0aCwgaW5pdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbml0T2JzZXJ2YWJsZSA9ICgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5pdCA/PyByZWFkQnlQYXRoKHBhdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9kZWwgPSBvYnNlcnZhYmxlLmJveDxhbnk+KGluaXRPYnNlcnZhYmxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcXVhbHM6IGNvbnN0RmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kZSA9PT0gJ3JlYWwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRlcm5hbE1vZGVsLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24oKGRhdGE6IGFueSkgPT4gbW9kZWwuc2V0KGRhdGEpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9kZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2JzZXJ2YWJsZU9iamVjdDogT2JzZXJ2YWJsZU1vZGVsTG9jYWxbJ29iamVjdCddID0gKHBhdGgsIGluaXQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5pdE9ic2VydmFibGUgPSAoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluaXQgPz8gcmVhZEJ5UGF0aChwYXRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vZGVsID0gb2JzZXJ2YWJsZS5ib3goaW5pdE9ic2VydmFibGUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVxdWFsczogY29uc3RGYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb2RlID09PSAncmVhbCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dGVybmFsTW9kZWwuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbigoZGF0YTogYW55KSA9PiBtb2RlbC5zZXQoZGF0YSkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtb2RlbCBhcyBhbnk7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2JzZXJ2YWJsZVByaW1pdGl2ZXM6IE9ic2VydmFibGVNb2RlbExvY2FsWydwcmltaXRpdmVzJ10gPSAoa2V5czogdW5rbm93biwgcGF0aD86IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbml0T2JzZXJ2YWJsZSA9IHJlYWRCeVBhdGgocGF0aCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShrZXlzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9kZWwgPSBrZXlzLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2Nba2V5XSA9IG9ic2VydmFibGUuYm94KChpbml0T2JzZXJ2YWJsZSBhcyBSZWNvcmQ8c3RyaW5nLCBUPilba2V5XSwge30pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7fSBhcyBhbnkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb2RlID09PSAncmVhbCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRlcm5hbE1vZGVsLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uKChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWxba2V5XS5zZXQoZGF0YVtrZXldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vZGVsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5c1JlY29yZCA9IGtleXMgYXMgUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleXNFbnRyaWVzID0gT2JqZWN0LmVudHJpZXMoa2V5c1JlY29yZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtb2RlbCA9IGtleXNFbnRyaWVzLnJlZHVjZSgoYWNjLCBba2V5RnJvbSwga2V5VG9dKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjW2tleVRvXSA9IG9ic2VydmFibGUuYm94KChpbml0T2JzZXJ2YWJsZSBhcyBSZWNvcmQ8c3RyaW5nLCBUPilba2V5RnJvbV0sIHt9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwge30gYXMgYW55KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kZSA9PT0gJ3JlYWwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0ZXJuYWxNb2RlbC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbigoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzRW50cmllcy5mb3JFYWNoKChba2V5RnJvbSwga2V5VG9dKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWxba2V5VG9dLnNldChkYXRhW2tleUZyb21dKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vZGVsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xlYW51cDogQ2xlYW51cCA9IChmbikgPT4gY2xlYW51cHNSZWYuY3VycmVudC5wdXNoKGZuKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9kZWwgPSBtb2RlbENyZWF0b3Ioe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkQnlQYXRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHRlcm5hbE1vZGVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZhYmxlTW9kZWw6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5OiBvYnNlcnZhYmxlQXJyYXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3Q6IG9ic2VydmFibGVPYmplY3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltaXRpdmVzOiBvYnNlcnZhYmxlUHJpbWl0aXZlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYW51cCxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udHJvbHNBcmdzID0geyBtb2RlLCBtb2RlbCwgZXh0ZXJuYWxNb2RlbCwgY2xlYW51cCB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xzID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZSA9PT0gJ21vY2tzJyAmJiBtb2NrcyA/IG1vY2tzLmNvbnRyb2xzKGNvbnRyb2xzQXJncykgOiBjb250cm9sc0NyZWF0b3IoY29udHJvbHNBcmdzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbW9kZWwsIGNvbnRyb2xzLCBleHRlcm5hbE1vZGVsLCBtb2RlIH07XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0ZWRSZWYgPSB1c2VSZWYoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgW21vZGUsIGNoYW5nZU1vZGVdID0gdXNlU3RhdGU8TW9kZT4oZGF0YU1vZGUpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgoKSA9PiBjcmVhdGVDb250ZXh0VmFsdWUoZGF0YU1vZGUsIG9wdGlvbnMsIG1vY2tzKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXN0YXJ0ZWRSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydGVkUmVmLmN1cnJlbnQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFZhbHVlKGNyZWF0ZUNvbnRleHRWYWx1ZShtb2RlLCBvcHRpb25zLCBtb2NrcykpO1xyXG4gICAgICAgICAgICAgICAgfSwgW21vY2tzLCBtb2RlLCBvcHRpb25zXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VNb2RlKGRhdGFNb2RlKTtcclxuICAgICAgICAgICAgICAgIH0sIFtkYXRhTW9kZV0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHVzZUVmZmVjdChcclxuICAgICAgICAgICAgICAgICAgICAoKSA9PiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLmV4dGVybmFsTW9kZWwuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhbnVwc1JlZi5jdXJyZW50LmZvckVhY2goKGZuKSA9PiBmbigpKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFt2YWx1ZV0sXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiA8Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PntjaGlsZHJlbn08L0NvbnRleHQuUHJvdmlkZXI+O1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoKSA9PiB1c2VDb250ZXh0KENvbnRleHQpLFxyXG4gICAgICAgIF0gYXMgY29uc3Q7XHJcbiAgICB9O1xyXG59O1xyXG4iLCJpbXBvcnQgeyBtYWtlRW5naW5lRXZlbnQgfSBmcm9tICcuLi9oZWxwZXJzJztcclxuaW1wb3J0IHsgc2V0VHJhY2tNb3VzZU91dHNpZGUgfSBmcm9tICcuL2ludGVybmFsJztcclxuXHJcbmV4cG9ydCB0eXBlIEdGTW91c2VFdmVudCA9IHtcclxuICAgIHR5cGU6IHN0cmluZztcclxuICAgIGJ1dHRvbjogbnVtYmVyO1xyXG4gICAgYnV0dG9uczogbnVtYmVyO1xyXG4gICAgeDogbnVtYmVyO1xyXG4gICAgeTogbnVtYmVyO1xyXG4gICAgY2xpZW50WDogbnVtYmVyO1xyXG4gICAgY2xpZW50WTogbnVtYmVyO1xyXG4gICAgc2NyZWVuWDogbnVtYmVyO1xyXG4gICAgc2NyZWVuWTogbnVtYmVyO1xyXG4gICAgYWx0S2V5OiBib29sZWFuO1xyXG4gICAgY3RybEtleTogYm9vbGVhbjtcclxuICAgIHNoaWZ0S2V5OiBib29sZWFuO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG9uUmVzaXplID0gbWFrZUVuZ2luZUV2ZW50PCh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikgPT4gdm9pZD4oJ2NsaWVudFJlc2l6ZWQnKTtcclxuXHJcbmV4cG9ydCB0eXBlIEdGTW91c2VIYW5kbGVyID0gKGV2ZW50OiBHRk1vdXNlRXZlbnQpID0+IHZvaWQ7XHJcbmV4cG9ydCB0eXBlIEdGTW91c2VFdmVudE5hbWUgPSAnZG93bicgfCAndXAnIHwgJ21vdmUnO1xyXG5leHBvcnQgdHlwZSBFeHRNb3VzZUV2ZW50ID0gW2V2ZW50OiBHRk1vdXNlRXZlbnQsIHR5cGU6ICdvdXRzaWRlJ10gfCBbZXZlbnQ6IE1vdXNlRXZlbnQsIHR5cGU6ICdpbnNpZGUnXTtcclxuXHJcbmV4cG9ydCB0eXBlIE1vdXNlTGlzdGVuZXIgPSAoZXZlbnQ6IEV4dE1vdXNlRXZlbnQpID0+IHZvaWQ7XHJcblxyXG5jb25zdCBpbnRlcm5hbE1vdXNlID0ge1xyXG4gICAgZG93bjogbWFrZUVuZ2luZUV2ZW50PEdGTW91c2VIYW5kbGVyPignbW91c2Vkb3duJyksXHJcbiAgICB1cDogbWFrZUVuZ2luZUV2ZW50PEdGTW91c2VIYW5kbGVyPignbW91c2V1cCcpLFxyXG4gICAgbW92ZTogbWFrZUVuZ2luZUV2ZW50PEdGTW91c2VIYW5kbGVyPignbW91c2Vtb3ZlJyksXHJcbn07XHJcblxyXG50eXBlIE1vdXNlRXZlbnRzQVBJID0gUmVjb3JkPEdGTW91c2VFdmVudE5hbWUsIChsaXN0ZW5lcjogTW91c2VMaXN0ZW5lcikgPT4gKCkgPT4gdm9pZD4gJiB7XHJcbiAgICBkaXNhYmxlOiAoKSA9PiB2b2lkO1xyXG4gICAgZW5hYmxlOiAoKSA9PiB2b2lkO1xyXG4gICAgZW5hYmxlT3V0c2lkZTogKCkgPT4gdm9pZDtcclxuICAgIGRpc2FibGVPdXRzaWRlOiAoKSA9PiB2b2lkO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENhbGN1bGF0ZSBtb3VzZSBwb3NpdGlvbiByZWxhdGl2ZSB0byB0aGUgdmlldyBpcyBleHBlbnNpdmUgb3BlcmF0aW9uLlxyXG4gKiBUaGlzIGRlY29yYXRvciBzZXBhcmF0ZSB0cmFjayBtb3VzZSBldmVudHMgYmV0d2VlbiBpbnNpZGUgYW5kIG91dHNpZGUuXHJcbiAqIFdoZW4gY3Vyc29yIGlzIG91dHNpZGUgb2YgdGhlIHZpZXcuXHJcbiAqIFdoZW4gbW91c2UgY3Vyc29yIGlzIGluc2lkZSBvZiB0aGUgdmlldywgaXQgd2lsbCBiZSB0cmFja2VkIGJ5IGludGVybmFsIGRlZmF1bHQgZXZlbnRzLlxyXG4gKlxyXG4gKiBGdW5jdGlvbiBlbmNhcHN1bGF0ZSBsb2dpYyBhbmQgc3RhdGUgaW5zaWRlLlxyXG4gKi9cclxuZnVuY3Rpb24gaW5pdE1vdXNlRXZlbnRzKCk6IE1vdXNlRXZlbnRzQVBJIHtcclxuICAgIGNvbnN0IHN0YXRlID0ge1xyXG4gICAgICAgIGxpc3RlbmVyczogMCxcclxuICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgIGluaXRpYWxpemVkOiBmYWxzZSxcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlTW91c2VFbnRlcigpIHtcclxuICAgICAgICBpZiAoc3RhdGUuZW5hYmxlZCkge1xyXG4gICAgICAgICAgICBzZXRUcmFja01vdXNlT3V0c2lkZShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZU1vdXNlTGVhdmUoKSB7XHJcbiAgICAgICAgaWYgKHN0YXRlLmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgc2V0VHJhY2tNb3VzZU91dHNpZGUodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZUxhenlUcmFjaygpIHtcclxuICAgICAgICBpZiAoIXN0YXRlLmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgc2V0VHJhY2tNb3VzZU91dHNpZGUoZmFsc2UpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc3RhdGUubGlzdGVuZXJzIDwgMSkge1xyXG4gICAgICAgICAgICBzdGF0ZS5pbml0aWFsaXplZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBoYW5kbGVNb3VzZUVudGVyKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgaGFuZGxlTW91c2VMZWF2ZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICghc3RhdGUuaW5pdGlhbGl6ZWQpIHtcclxuICAgICAgICAgICAgc3RhdGUuaW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBoYW5kbGVNb3VzZUVudGVyKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgaGFuZGxlTW91c2VMZWF2ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG1ha2VFdmVudChuYW1lOiBHRk1vdXNlRXZlbnROYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIChsaXN0ZW5lcjogTW91c2VMaXN0ZW5lcikgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5saXN0ZW5lcnMgKz0gMTtcclxuICAgICAgICAgICAgbGV0IGFjdGl2ZSA9IHRydWU7IC8vIHByZXZlbnQgZG91YmxlIGRpc3Bvc2UodW5zdWJzY3JpYmUpXHJcbiAgICAgICAgICAgIGNvbnN0IHdpbmRvd0V2ZW50ID0gYG1vdXNlJHtuYW1lfWA7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpc3Bvc2UgPSBpbnRlcm5hbE1vdXNlW25hbWVdKChldmVudCkgPT4gbGlzdGVuZXIoW2V2ZW50LCAnb3V0c2lkZSddKSk7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZVdpbmRvd0V2ZW50KGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcihbZXZlbnQsICdpbnNpZGUnXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIod2luZG93RXZlbnQsIGhhbmRsZVdpbmRvd0V2ZW50KTtcclxuICAgICAgICAgICAgdXBkYXRlTGF6eVRyYWNrKCk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKHdpbmRvd0V2ZW50LCBoYW5kbGVXaW5kb3dFdmVudCk7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5saXN0ZW5lcnMgLT0gMTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZUxhenlUcmFjaygpO1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBldmVudHM6IFR1cGxpZnk8R0ZNb3VzZUV2ZW50TmFtZT4gPSBbJ2Rvd24nLCAndXAnLCAnbW92ZSddO1xyXG5cclxuICAgIGNvbnN0IHN1YnNjcmliZUFwaSA9IGV2ZW50cy5yZWR1Y2UoKGFjYywgbmFtZSkgPT4ge1xyXG4gICAgICAgIGFjY1tuYW1lXSA9IG1ha2VFdmVudChuYW1lKTtcclxuICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgfSwgPFBpY2s8TW91c2VFdmVudHNBUEksIEdGTW91c2VFdmVudE5hbWU+Pnt9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN1YnNjcmliZUFwaSxcclxuICAgICAgICBkaXNhYmxlKCkge1xyXG4gICAgICAgICAgICBzdGF0ZS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHVwZGF0ZUxhenlUcmFjaygpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW5hYmxlKCkge1xyXG4gICAgICAgICAgICBzdGF0ZS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdXBkYXRlTGF6eVRyYWNrKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbmFibGVPdXRzaWRlKCkge1xyXG4gICAgICAgICAgICBpZiAoc3RhdGUuZW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgc2V0VHJhY2tNb3VzZU91dHNpZGUodHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGRpc2FibGVPdXRzaWRlKCkge1xyXG4gICAgICAgICAgICBpZiAoc3RhdGUuZW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgc2V0VHJhY2tNb3VzZU91dHNpZGUoZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBtb3VzZSA9IGluaXRNb3VzZUV2ZW50cygpO1xyXG4iLCJleHBvcnQgKiBhcyBldmVudHMgZnJvbSAnLi9ldmVudHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2l6ZSh1bml0OiAncHgnIHwgJ3JlbScgPSAncHgnKSB7XG4gICAgcmV0dXJuIHVuaXQgPT09ICdyZW0nID8gdmlld0Vudi5nZXRDbGllbnRTaXplUmVtKCkgOiB2aWV3RW52LmdldENsaWVudFNpemVQeCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TW91c2VHbG9iYWxQb3NpdGlvbih1bml0OiAncHgnIHwgJ3JlbScgPSAncHgnKSB7XG4gICAgcmV0dXJuIHVuaXQgPT09ICdyZW0nID8gdmlld0Vudi5nZXRNb3VzZUdsb2JhbFBvc2l0aW9uUmVtKCkgOiB2aWV3RW52LmdldE1vdXNlR2xvYmFsUG9zaXRpb25QeCgpO1xufVxuXG5leHBvcnQgY29uc3QgZ3JhcGhpY3NRdWFsaXR5ID0ge1xuICAgIGlzTG93OiAoKSA9PiB2aWV3RW52LmdldEdyYXBoaWNzUXVhbGl0eSgpID09PSAxLFxuICAgIGlzSGlnaDogKCkgPT4gdmlld0Vudi5nZXRHcmFwaGljc1F1YWxpdHkoKSA9PT0gMCxcbiAgICBnZXQ6ICgpID0+IHZpZXdFbnYuZ2V0R3JhcGhpY3NRdWFsaXR5KCksXG59O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIHNldFRyYWNrTW91c2VPdXRzaWRlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB2aWV3RW52LnNldFRyYWNrTW91c2VPblN0YWdlKHZhbHVlKTtcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gbWFrZUVuZ2luZUV2ZW50PFQgZXh0ZW5kcyBGdW5jdGlvbj4oZXZlbnROYW1lOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiAoaGFuZGxlcjogVCkgPT4ge1xyXG4gICAgICAgIGVuZ2luZS5vbihldmVudE5hbWUsIGhhbmRsZXIgYXMgbmV2ZXIpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGVuZ2luZS5vZmYoZXZlbnROYW1lLCBoYW5kbGVyIGFzIG5ldmVyKTtcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxufVxyXG4iLCJpbXBvcnQgKiBhcyBjbGllbnQgZnJvbSAnLi9jbGllbnQnO1xyXG5pbXBvcnQgKiBhcyB2aWV3IGZyb20gJy4vdmlldyc7XHJcblxyXG5leHBvcnQgY29uc3QgZW52ID0ge1xyXG4gICAgdmlldyxcclxuICAgIGNsaWVudCxcclxufTtcclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICAgICh3aW5kb3cgYXMgYW55KS5lbnYgPSBlbnY7XHJcbn1cclxuIiwiaW1wb3J0IHsgU2l6ZSB9IGZyb20gJy4vY29tbW9uJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRleHR1cmVVcmwoY2hpbGRJZDogbnVtYmVyLCBzaXplOiBTaXplLCBzY2FsZSA9IDEpIHtcbiAgICByZXR1cm4gdmlld0Vudi5nZXRDaGlsZFRleHR1cmVQYXRoKGNoaWxkSWQsIHNpemUud2lkdGgsIHNpemUuaGVpZ2h0LCBzY2FsZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCZ1VybChjaGlsZElkOiBudW1iZXIsIHNpemU6IFNpemUsIHNjYWxlPzogbnVtYmVyKSB7XG4gICAgcmV0dXJuIGB1cmwoJHtnZXRUZXh0dXJlVXJsKGNoaWxkSWQsIHNpemUsIHNjYWxlKX0pYDtcbn1cbiIsImV4cG9ydCB0eXBlIFNpemUgPSB7XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbn07XG5cbmV4cG9ydCB0eXBlIFBvaW50ID0ge1xuICAgIHg6IG51bWJlcjtcbiAgICB5OiBudW1iZXI7XG59O1xuXG5leHBvcnQgY29uc3QgZGlzcGxheVN0YXR1cyA9IHtcbiAgICBzaG93aW5nOiAwLFxuICAgIHNob3duOiAxLFxuICAgIGhpZGluZzogMixcbiAgICBoaWRkZW46IDMsXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgdHlwZSBEaXNwbGF5U3RhdHVzID0gVmFsdWVPZjx0eXBlb2YgZGlzcGxheVN0YXR1cz47XG4iLCJpbXBvcnQgeyBtYWtlRW5naW5lRXZlbnQgfSBmcm9tICcuLi9oZWxwZXJzJztcclxuaW1wb3J0IHsgRGlzcGxheVN0YXR1cywgUG9pbnQgfSBmcm9tICcuL2NvbW1vbic7XHJcblxyXG5leHBvcnQgdHlwZSBDaGlsZHJlbkV2ZW50SGFuZGxlciA9ICh2aWV3SWQ6IG51bWJlciwgaW5zdGFuY2VJZDogbnVtYmVyLCByZXNJZDogbnVtYmVyKSA9PiB2b2lkO1xyXG5leHBvcnQgdHlwZSBSZXF1ZXN0UG9zaXRpb25IYW5kbGVyID0gKHZpZXdJZDogbnVtYmVyLCBwb3NpdGlvbjogUG9pbnQpID0+IHZvaWQ7XHJcbmV4cG9ydCB0eXBlIENoYW5nZURpc3BsYXlIYW5kbGVyID0gKHByZXZTdGF0dXM6IERpc3BsYXlTdGF0dXMsIGN1cnJlbnRTdGF0dXM6IERpc3BsYXlTdGF0dXMpID0+IHZvaWQ7XHJcbmV4cG9ydCB0eXBlIEZvY3VzVXBkYXRlZEhhbmRsZXIgPSAocHJldlN0YXR1czogRGlzcGxheVN0YXR1cywgY3VycmVudFN0YXR1czogRGlzcGxheVN0YXR1cykgPT4gdm9pZDtcclxuXHJcbmV4cG9ydCBjb25zdCBldmVudHMgPSB7XHJcbiAgICBvblRleHR1cmVGcm96ZW46IG1ha2VFbmdpbmVFdmVudDwoKSA9PiB2b2lkPignc2VsZi5vblRleHR1cmVGcm96ZW4nKSxcclxuICAgIG9uVGV4dHVyZVJlYWR5OiBtYWtlRW5naW5lRXZlbnQ8KCkgPT4gdm9pZD4oJ3NlbGYub25UZXh0dXJlUmVhZHknKSxcclxuICAgIG9uRG9tQnVpbHQ6IG1ha2VFbmdpbmVFdmVudDwoKSA9PiB2b2lkPignc2VsZi5vbkRvbUJ1aWx0JyksXHJcbiAgICBvbkxvYWRlZDogbWFrZUVuZ2luZUV2ZW50PCgpID0+IHZvaWQ+KCdzZWxmLm9uTG9hZGVkJyksXHJcbiAgICBvbkRpc3BsYXlDaGFuZ2VkOiBtYWtlRW5naW5lRXZlbnQ8Q2hhbmdlRGlzcGxheUhhbmRsZXI+KCdzZWxmLm9uU2hvd2luZ1N0YXR1c0NoYW5nZWQnKSxcclxuICAgIG9uRm9jdXNVcGRhdGVkOiBtYWtlRW5naW5lRXZlbnQ8Rm9jdXNVcGRhdGVkSGFuZGxlcj4oJ3NlbGYub25Gb2N1c0NoYW5nZWQnKSxcclxuICAgIGNoaWxkcmVuOiB7XHJcbiAgICAgICAgb25BZGRlZDogbWFrZUVuZ2luZUV2ZW50PENoaWxkcmVuRXZlbnRIYW5kbGVyPignY2hpbGRyZW4ub25BZGRlZCcpLFxyXG4gICAgICAgIG9uTG9hZGVkOiBtYWtlRW5naW5lRXZlbnQ8Q2hpbGRyZW5FdmVudEhhbmRsZXI+KCdjaGlsZHJlbi5vbkxvYWRlZCcpLFxyXG4gICAgICAgIG9uUmVtb3ZlZDogbWFrZUVuZ2luZUV2ZW50PENoaWxkcmVuRXZlbnRIYW5kbGVyPignY2hpbGRyZW4ub25SZW1vdmVkJyksXHJcbiAgICAgICAgb25BdHRhY2hlZDogbWFrZUVuZ2luZUV2ZW50PENoaWxkcmVuRXZlbnRIYW5kbGVyPignY2hpbGRyZW4ub25BdHRhY2hlZCcpLFxyXG4gICAgICAgIG9uVGV4dHVyZVJlYWR5OiBtYWtlRW5naW5lRXZlbnQ8Q2hpbGRyZW5FdmVudEhhbmRsZXI+KCdjaGlsZHJlbi5vblRleHR1cmVSZWFkeScpLFxyXG4gICAgICAgIG9uUmVxdWVzdFBvc2l0aW9uOiBtYWtlRW5naW5lRXZlbnQ8UmVxdWVzdFBvc2l0aW9uSGFuZGxlcj4oJ2NoaWxkcmVuLnJlcXVlc3RQb3NpdGlvbicpLFxyXG4gICAgfSxcclxufTtcclxuIiwiaW1wb3J0ICogYXMgY2hpbGRyZW4gZnJvbSAnLi9jaGlsZHJlbic7XG5pbXBvcnQgeyBEaXNwbGF5U3RhdHVzLCBkaXNwbGF5U3RhdHVzIH0gZnJvbSAnLi9jb21tb24nO1xuaW1wb3J0IHsgZXZlbnRzIH0gZnJvbSAnLi9ldmVudHMnO1xuaW1wb3J0IHsgc2VuZEV2ZW50IH0gZnJvbSAnLi9zZW5kRXZlbnQnO1xuXG5leHBvcnQgdHlwZSB7IFBvaW50LCBTaXplLCBEaXNwbGF5U3RhdHVzIH0gZnJvbSAnLi9jb21tb24nO1xuXG5leHBvcnQgeyBldmVudHMsIHNlbmRFdmVudCwgY2hpbGRyZW4sIGRpc3BsYXlTdGF0dXMgfTtcblxuZXhwb3J0IHR5cGUgU2lkZXMgPSB7XG4gICAgdG9wOiBudW1iZXI7XG4gICAgcmlnaHQ6IG51bWJlcjtcbiAgICBib3R0b206IG51bWJlcjtcbiAgICBsZWZ0OiBudW1iZXI7XG59O1xuXG5jb25zdCBBTExfU0lERVMgPSAweGY7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQcmVsb2FkVGV4dHVyZShwYXRoOiBzdHJpbmcpIHtcbiAgICB2aWV3RW52LmFkZFByZWxvYWRUZXh0dXJlKHBhdGgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0SW5wdXRQYWRkaW5nc1JlbShwYWRkaW5nczogbnVtYmVyKSB7XG4gICAgdmlld0Vudi5zZXRIaXRBcmVhUGFkZGluZ3NSZW0ocGFkZGluZ3MsIHBhZGRpbmdzLCBwYWRkaW5ncywgcGFkZGluZ3MsIEFMTF9TSURFUyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCcm93c2VyVGV4dHVyZVBhdGgoaWQ6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHNjYWxlID0gMSkge1xuICAgIHJldHVybiB2aWV3RW52LmdldFdlYkJyb3dzZXJUZXh0dXJlUGF0aChpZCwgd2lkdGgsIGhlaWdodCwgc2NhbGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTW9kZWxPYnNlcnZlcihwYXRoOiBzdHJpbmcsIHJlc0lkOiBudW1iZXIsIHRyYWNrU3ViSXRlbXM6IGJvb2xlYW4pIHtcbiAgICByZXR1cm4gdmlld0Vudi5hZGREYXRhQ2hhbmdlZENhbGxiYWNrKHBhdGgsIHJlc0lkLCB0cmFja1N1Ykl0ZW1zKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFNpZGVQYWRkaW5nc1JlbShwYWRkaW5nczogU2lkZXMpIHtcbiAgICB2aWV3RW52LnNldEhpdEFyZWFQYWRkaW5nc1JlbShwYWRkaW5ncy50b3AsIHBhZGRpbmdzLnJpZ2h0LCBwYWRkaW5ncy5ib3R0b20sIHBhZGRpbmdzLmxlZnQsIEFMTF9TSURFUyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTaXplKHVuaXQ6ICdweCcgfCAncmVtJyA9ICdweCcpIHtcbiAgICByZXR1cm4gdW5pdCA9PT0gJ3JlbScgPyB2aWV3RW52LmdldFZpZXdTaXplUmVtKCkgOiB2aWV3RW52LmdldFZpZXdTaXplUHgoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2l6ZSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgdW5pdDogJ3B4JyB8ICdyZW0nID0gJ3B4Jykge1xuICAgIHJldHVybiB1bml0ID09PSAncmVtJyA/IHZpZXdFbnYucmVzaXplVmlld1JlbSh3aWR0aCwgaGVpZ2h0KSA6IHZpZXdFbnYucmVzaXplVmlld1B4KHdpZHRoLCBoZWlnaHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Vmlld0dsb2JhbFBvc2l0aW9uKHVuaXQ6ICdweCcgfCAncmVtJyA9ICdyZW0nKSB7XG4gICAgY29uc3QgdmFsdWUgPSB2aWV3RW52LmdldFZpZXdHbG9iYWxQb3NpdGlvblJlbSgpO1xuICAgIHJldHVybiB1bml0ID09PSAncmVtJyA/IHZhbHVlIDogeyB4OiByZW1Ub1B4KHZhbHVlLngpLCB5OiByZW1Ub1B4KHZhbHVlLnkpIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmVlemVUZXh0dXJlQmVmb3JlUmVzaXplKCkge1xuICAgIHZpZXdFbnYuZnJlZXplVGV4dHVyZUJlZm9yZVJlc2l6ZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NhbGUoKSB7XG4gICAgcmV0dXJuIHZpZXdFbnYuZ2V0U2NhbGUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHB4VG9SZW0ocHg6IG51bWJlcikge1xuICAgIHJldHVybiB2aWV3RW52LnB4VG9SZW0ocHgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtVG9QeChyZW06IG51bWJlcikge1xuICAgIHJldHVybiB2aWV3RW52LnJlbVRvUHgocmVtKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEFuaW1hdGVXaW5kb3coc2hvd2luZzogYm9vbGVhbiwgaGlkaW5nOiBib29sZWFuKSB7XG4gICAgdmlld0Vudi5zZXRBbmltYXRlV2luZG93KHNob3dpbmcsIGhpZGluZyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0ZvY3VzZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHZpZXdFbnYuaXNGb2N1c2VkKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRFdmVudEhhbmRsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHZpZXdFbnYuc2V0RXZlbnRIYW5kbGVkKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0V2ZW50SGFuZGxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdmlld0Vudi5pc0V2ZW50SGFuZGxlZCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yY2VUcmlnZ2VyTW91c2VNb3ZlKCkge1xuICAgIHZpZXdFbnYuZm9yY2VUcmlnZ2VyTW91c2VNb3ZlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5U3RhdHVzKCkge1xuICAgIHJldHVybiB2aWV3RW52LmdldFNob3dpbmdTdGF0dXMoKSBhcyBEaXNwbGF5U3RhdHVzO1xufVxuXG5leHBvcnQgY29uc3QgZGlzcGxheVN0YXR1c0lzID0gT2JqZWN0LmtleXMoZGlzcGxheVN0YXR1cykucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgIGFjY1trZXldID0gKCkgPT4gdmlld0Vudi5nZXRTaG93aW5nU3RhdHVzKCkgPT09IGRpc3BsYXlTdGF0dXNba2V5XTtcbiAgICByZXR1cm4gYWNjO1xufSwge30gYXMgUmVjb3JkPGtleW9mIHR5cGVvZiBkaXNwbGF5U3RhdHVzLCAoKSA9PiBib29sZWFuPik7XG5cbmV4cG9ydCBjb25zdCBleHRyYVNpemUgPSB7XG4gICAgLyoqIFJlbSB1bml0cyAqL1xuICAgIHNldDogKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSA9PiB7XG4gICAgICAgIHZpZXdFbnYuc2V0RXh0cmFTaXplUmVtKHdpZHRoLCBoZWlnaHQpO1xuICAgIH0sXG4gICAgLyoqIFJlbSB1bml0cyAqL1xuICAgIGdldDogKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSA9PiB7XG4gICAgICAgIHZpZXdFbnYuZ2V0RXh0cmFTaXplUmVtKHdpZHRoLCBoZWlnaHQpO1xuICAgIH0sXG59O1xuXG5leHBvcnQgY29uc3Qgd2hlblR1dG9yaWFsUmVhZHkgPSBQcm9taXNlLmFsbDx2b2lkPihbXG4gICAgbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUpID0+IHtcbiAgICAgICAgaWYgKHdpbmRvdy5pc0RvbUJ1aWx0KSB7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBldmVudHMub25Eb21CdWlsdChyZXNvbHZlKTtcbiAgICAgICAgfVxuICAgIH0pLFxuICAgIGVuZ2luZS53aGVuUmVhZHksXG5dKTtcbiIsImV4cG9ydCB0eXBlIFZpZXdFdmVudEFyZ3MgPSB7IFtrZXk6IHN0cmluZ106IG51bWJlciB8IGJvb2xlYW4gfCBzdHJpbmcgfTtcblxuZXhwb3J0IHR5cGUgVmlld0V2ZW50T3B0aW9ucyA9IFBpY2s8XG4gICAgR0ZWaWV3RXZlbnRQcm94eSxcbiAgICAnY29udGVudElEJyB8ICdkZWNvcmF0b3JJRCcgfCAnaXNNb3VzZUV2ZW50JyB8ICdvbicgfCAnZGlyZWN0aW9uJyB8ICdiYm94J1xuPiAmIHsgYXJncz86IFZpZXdFdmVudEFyZ3MgfTtcblxuZXhwb3J0IGNvbnN0IHZpZXdFdmVudFR5cGVzID0ge1xuICAgIGNsb3NlUG9wb3ZlcjogMixcbiAgICBtb3ZlOiAxNixcbiAgICBjbG9zZTogMzIsXG4gICAgbWluaW1pemU6IDY0LFxufSBhcyBjb25zdDtcblxuZXhwb3J0IHR5cGUgVmlld0V2ZW50VHlwZSA9IFZhbHVlT2Y8dHlwZW9mIHZpZXdFdmVudFR5cGVzPjtcblxuY29uc3QgY3JlYXRlVmlld0V2ZW50QXJndW1lbnRzID0gKGRhdGE6IFZpZXdFdmVudEFyZ3MpOiBHRlZhbHVlUHJveHlbXSA9PiB7XG4gICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKGRhdGEpLm1hcCgoW25hbWUsIHZhbHVlXSkgPT4ge1xuICAgICAgICBjb25zdCBfX1R5cGUgPSAnR0ZWYWx1ZVByb3h5JztcbiAgICAgICAgc3dpdGNoICh0eXBlb2YgdmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgX19UeXBlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgICAgICBudW1iZXI6IHZhbHVlLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBfX1R5cGUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGJvb2w6IHZhbHVlLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBfX1R5cGUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHN0cmluZzogdmFsdWUudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2VuZFZpZXdFdmVudCA9ICh0eXBlOiBWaWV3RXZlbnRUeXBlLCBvcHRpb25zPzogVmlld0V2ZW50T3B0aW9ucykgPT4ge1xuICAgIGNvbnN0IF9fVHlwZSA9ICdHRlZpZXdFdmVudFByb3h5JztcbiAgICBpZiAob3B0aW9ucyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IHsgYXJncywgLi4ucmVzdE9wdGlvbnMgfSA9IG9wdGlvbnM7XG5cbiAgICAgICAgaWYgKGFyZ3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHZpZXdFbnYuaGFuZGxlVmlld0V2ZW50KHtcbiAgICAgICAgICAgICAgICBfX1R5cGUsXG4gICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICAuLi5yZXN0T3B0aW9ucyxcbiAgICAgICAgICAgICAgICBhcmd1bWVudHM6IGNyZWF0ZVZpZXdFdmVudEFyZ3VtZW50cyhhcmdzKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHZpZXdFbnYuaGFuZGxlVmlld0V2ZW50KHtcbiAgICAgICAgICAgICAgICBfX1R5cGUsXG4gICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICAuLi5yZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZpZXdFbnYuaGFuZGxlVmlld0V2ZW50KHtcbiAgICAgICAgICAgIF9fVHlwZSxcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBzZW5kRXZlbnQgPSB7XG4gICAgY2xvc2UodHlwZT86ICdwb3BvdmVyJykge1xuICAgICAgICBpZiAodHlwZSA9PT0gJ3BvcG92ZXInKSB7XG4gICAgICAgICAgICBzZW5kVmlld0V2ZW50KHZpZXdFdmVudFR5cGVzLmNsb3NlUG9wb3Zlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZW5kVmlld0V2ZW50KHZpZXdFdmVudFR5cGVzLmNsb3NlKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWluaW1pemUoKSB7XG4gICAgICAgIHNlbmRWaWV3RXZlbnQodmlld0V2ZW50VHlwZXMubWluaW1pemUpO1xuICAgIH0sXG4gICAgbW92ZShzdGFydDogYm9vbGVhbikge1xuICAgICAgICBzZW5kVmlld0V2ZW50KHZpZXdFdmVudFR5cGVzLm1vdmUsIHtcbiAgICAgICAgICAgIGlzTW91c2VFdmVudDogdHJ1ZSxcbiAgICAgICAgICAgIG9uOiBzdGFydCxcbiAgICAgICAgfSk7XG4gICAgfSxcbn07XG4iLCIvKiogRW1wdHkgZnVuY3Rpb24gKi9cbmV4cG9ydCBmdW5jdGlvbiBub29wKCkge30gLy8gZXNsaW50LWRpc2FibGUtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZW1wdHktZnVuY3Rpb25cblxuLyoqIEFsaWFzIG9mIG5vb3AgKi9cbmV4cG9ydCBjb25zdCBlbXB0eUZ1bmN0aW9uID0gbm9vcDtcblxuLyoqXG4gKiBUaGlzIGhlbHBlciBmdW5jdGlvbiBmb3IgY29ybmVyIGNhc2VcbiAqIEZvciBleGFtcGxlOlxuICogYGBganNcbiAqIE9iamVjdC5rZXlzKG9iaikubWFwKGlkZW50aXR5KSAvLyAtPiBbLi5dXG4gKiBgYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aXR5PEE+KGE6IEEpIHtcbiAgICByZXR1cm4gYTtcbn1cblxuLyoqXG4gKiBDYW4gYmUgdXNlZCBsaWtlIHRoaXM6XG4gKiBgYGBcbiAqIGNvbXB1dGVkKCgpID0+IHNvbWUudmFsdWUsIHsgZXF1YWxzOiBjb25zdEZhbHNlIH0pXG4gKiBgYGBcbiAqIE1lYW5zIHRoYXQgdmFsdWUgd2lsbCB0cmlnZ2VyIHVwZGF0ZXMgYnkgbXV0YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25zdEZhbHNlKCkge1xuICAgIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBDYW4gYmUgdXNlZCBsaWtlIHRoaXM6XG4gKiBgYGBcbiAqIGNvbXB1dGVkKCgpID0+IHNvbWUudmFsdWUsIHsgZXF1YWxzOiBjb25zdFRydWUgfSlcbiAqIGBgYFxuICogTWVhbnMgdGhhdCB2YWx1ZSB3aWxsICoqbmV2ZXIqKiB0cmlnZ2VyIHVwZGF0ZXMgYnkgbXV0YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25zdFRydWUoKSB7XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogVGhpcyBoZWxwZXIgZnVuY3Rpb24gZm9yIGxvZ2dpbmcgY2FsbGJhY2tzIGluc2lkZSBEYXRhIExheWVyIE1vY2tzIHdpdGhvdXQgbGludGVyIGlzc3Vlc1xuICpcbiAqIEZvciBleGFtcGxlOlxuICogYGBganNcbiAqICAgICBjb250cm9sczogKCkgPT4ge1xuICogICAgICAgICByZXR1cm4gbWFrZUFjdGlvbnMoe1xuICogICAgICAgICAgICAgZ29Ub0JyYW5jaFJlc2V0OiAoKSA9PiBsb2coJ29uR29Ub0JyYW5jaFJlc2V0JyksXG4gKiAgICAgICAgIH0pO1xuICogICAgIH0sXG4gKiBgYGBcbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbmV4cG9ydCBjb25zdCBsb2cgPSBjb25zb2xlLmxvZztcbiIsImltcG9ydCB7IEVmZmVjdENhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlTW91bnQgPSAoZm46IEVmZmVjdENhbGxiYWNrKSA9PiB7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXHJcbiAgICB1c2VFZmZlY3QoZm4sIFtdKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VVbm1vdW50ID0gKGZuOiAoKSA9PiB2b2lkKSA9PiB7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4gZm4sIFtdKTtcclxufTtcclxuIiwiaW1wb3J0IHsgdXNlTWVtbywgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgdXNlVW5tb3VudCB9IGZyb20gJy4vdXNlTW91bnRVbm1vdW50JztcclxuXHJcbmNvbnN0IE5PX1JBRl9JRCA9IDAgYXMgY29uc3Q7XHJcblxyXG4vKipcclxuICogVGhpcyBob29rIHdpbGwgY29ycmVjdGx5IHdvcmsgd2l0aCBhc3luYyBza2lwIGZyYW1lLlxyXG4gKiBJdCB3aWxsIGJlIGNsZWFyZWQgd2hlbiB5b3VyIGNvbXBvbmVudCBpcyBhdXRvbWF0aWNhbGx5IHVubW91bnRlZC5cclxuICogRWFjaCB0aW1lIGZ1bmN0aW9uIHN0YXJ0cywgaXQgd2lsbCBjbGVhciB0aGUgcHJldmlvdXMgcnVuLlxyXG4gKlxyXG4gKiBFeGFtcGxlcyB0byB1c2FnZTpcclxuICogYGBgdHNcclxuICogY29uc3Qgc2tpcEZyYW1lID0gdXNlU2tpcEZyYW1lKClcclxuICpcclxuICogdXNlRWZmZWN0KCgpID0+IHtcclxuICogICBpZiAoc3RhdGUgPT09ICdhbmltYXRpbmcnKSB7XHJcbiAqICAgICBza2lwRnJhbWUucnVuKCgpID0+IHNldFN0YXRlKC4uLikpXHJcbiAqICAgfVxyXG4gKiB9LCBbc3RhdGUsIHNraXBGcmFtZV0pXHJcbiAqIGBgYFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVNraXBGcmFtZSgpIHtcclxuICAgIGNvbnN0IHJhZklkUmVmID0gdXNlUmVmPG51bWJlcj4oTk9fUkFGX0lEKTtcclxuXHJcbiAgICB1c2VVbm1vdW50KCgpID0+IHtcclxuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUocmFmSWRSZWYuY3VycmVudCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdXNlTWVtbyhcclxuICAgICAgICAoKSA9PiAoe1xyXG4gICAgICAgICAgICBydW46IChoYW5kbGVyOiAoKSA9PiB2b2lkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUocmFmSWRSZWYuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICByYWZJZFJlZi5jdXJyZW50ID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmFmSWRSZWYuY3VycmVudCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhZklkUmVmLmN1cnJlbnQgPSBOT19SQUZfSUQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2xlYXI6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShyYWZJZFJlZi5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgIHJhZklkUmVmLmN1cnJlbnQgPSBOT19SQUZfSUQ7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdldCBpc1J1bm5pbmcoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmFmSWRSZWYuY3VycmVudCAhPT0gTk9fUkFGX0lEO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIFtdLFxyXG4gICAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBUb29sdGlwRGVjb3JhdG9yIH0gZnJvbSAnY29tcG9uZW50cy9Ub29sdGlwRGVjb3JhdG9yL1Rvb2x0aXBEZWNvcmF0b3InO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuXHJcbmltcG9ydCB7IEFwcCB9IGZyb20gJy4vY29tcG9uZW50cy9BcHAnO1xyXG5pbXBvcnQgeyBNb2RlbFByb3ZpZGVyIH0gZnJvbSAnLi9tb2RlbCc7XHJcblxyXG5lbmdpbmUud2hlblJlYWR5LnRoZW4oKCkgPT4ge1xyXG4gICAgUmVhY3RET00ucmVuZGVyKFxyXG4gICAgICAgIDxNb2RlbFByb3ZpZGVyPlxyXG4gICAgICAgICAgICA8VG9vbHRpcERlY29yYXRvcj5cclxuICAgICAgICAgICAgICAgIDxBcHAgLz5cclxuICAgICAgICAgICAgPC9Ub29sdGlwRGVjb3JhdG9yPlxyXG4gICAgICAgIDwvTW9kZWxQcm92aWRlcj4sXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSxcclxuICAgICk7XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gJ21vYngtcmVhY3QtbGl0ZSc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyB1c2VNb2RlbCB9IGZyb20gJy4uL21vZGVsJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0FwcC5jc3MnO1xyXG5cclxuY29uc3QgVEVYVFMgPSBSLnN0cmluZ3MudG9vbHRpcHMucmVzZWFyY2hQYWdlLmVhcmx5QWNjZXNzSW5mbztcclxuXHJcbmV4cG9ydCBjb25zdCBBcHAgPSBvYnNlcnZlcigoKSA9PiB7XHJcbiAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzICovXHJcbiAgICBjb25zdCB7IGNvbnRyb2xzLCBtb2RlbCB9ID0gdXNlTW9kZWwoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYXNlfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJfX2ljb259IC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcl9fdGV4dH0+e1RFWFRTLmhlYWRlcigpfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudF9fdGl0bGV9PntURVhUUy50aXRsZSgpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50X190ZXh0fT57VEVYVFMudGV4dCgpfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0pO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnMgKi9cclxuaW1wb3J0IHsgUGVyc29uYWxNaXNzaW9uc09sZENhbXBhaWduVG9vbHRpcFZpZXdNb2RlbCB9IGZyb20gJ2d1aS9pbXBsL2dlbi92aWV3X21vZGVscy92aWV3cy9sb2JieS9wbV9hbm5vdW5jZS90b29sdGlwcy9wZXJzb25hbF9taXNzaW9uc19vbGRfY2FtcGFpZ25fdG9vbHRpcF92aWV3X21vZGVsJztcclxuaW1wb3J0IHsgaW5pdGlhbGl6ZU1vZGVsV2l0aENvbnRleHQgfSBmcm9tICdsaWIvZGF0YS1sYXllcic7XHJcbmltcG9ydCB7IENhc3RBbGxBcnJheXMgfSBmcm9tICdsaWIvbGlrZUFycmF5JztcclxuXHJcbmV4cG9ydCBjb25zdCBbTW9kZWxQcm92aWRlciwgdXNlTW9kZWxdID0gaW5pdGlhbGl6ZU1vZGVsV2l0aENvbnRleHQ8Q2FzdEFsbEFycmF5czxQZXJzb25hbE1pc3Npb25zT2xkQ2FtcGFpZ25Ub29sdGlwVmlld01vZGVsPj4oKShcclxuICAgICh7IG9ic2VydmFibGVNb2RlbCB9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgbW9kZWwgPSB7XHJcbiAgICAgICAgICAgIHJvb3Q6IG9ic2VydmFibGVNb2RlbC5vYmplY3QoKSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5tb2RlbCxcclxuICAgICAgICAgICAgY29tcHV0ZXM6IHt9LFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgKHsgZXh0ZXJuYWxNb2RlbCB9KSA9PiAoe30pLFxyXG4pOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiYmFzZVwiOlwiVG9vbHRpcERlY29yYXRvcl9iYXNlX2M5XCIsXCJiYXNlX190aGVtZS1kZWZhdWx0XCI6XCJUb29sdGlwRGVjb3JhdG9yX2Jhc2VfX3RoZW1lLWRlZmF1bHRfNmRcIixcImRlY29yYXRvclwiOlwiVG9vbHRpcERlY29yYXRvcl9kZWNvcmF0b3JfM2RcIn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJiYXNlXCI6XCJBcHBfYmFzZV84OVwiLFwiaGVhZGVyXCI6XCJBcHBfaGVhZGVyX2JmXCIsXCJoZWFkZXJfX2ljb25cIjpcIkFwcF9oZWFkZXJfX2ljb25fOGNcIixcImhlYWRlcl9fdGV4dFwiOlwiQXBwX2hlYWRlcl9fdGV4dF8zYlwiLFwiY29udGVudFwiOlwiQXBwX2NvbnRlbnRfODVcIixcImNvbnRlbnRfX3RpdGxlXCI6XCJBcHBfY29udGVudF9fdGl0bGVfM2NcIixcImNvbnRlbnRfX3RleHRcIjpcIkFwcF9jb250ZW50X190ZXh0XzhjXCJ9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJsb2JieS9wbV9hbm5vdW5jZS90b29sdGlwcy9QZXJzb25hbE1pc3Npb25zT2xkQ2FtcGFpZ25Ub29sdGlwVmlldy9QZXJzb25hbE1pc3Npb25zT2xkQ2FtcGFpZ25Ub29sdGlwVmlld1wiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtnYW1lZmFjZVwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtnYW1lZmFjZVwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wibGliL2xvYmJ5L3BtX2Fubm91bmNlL3ZlbmRvcnNcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvdmlld3MvbG9iYnkvcG1fYW5ub3VuY2UvdG9vbHRpcHMvUGVyc29uYWxNaXNzaW9uc09sZENhbXBhaWduVG9vbHRpcFZpZXcvUGVyc29uYWxNaXNzaW9uc09sZENhbXBhaWduVG9vbHRpcFZpZXcudHN4XCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsiY3giLCJlbnYiLCJ1c2VNb3VudCIsInVzZVNraXBGcmFtZSIsIlJlYWN0Iiwic3R5bGVzIiwiVG9vbHRpcERlY29yYXRvciIsImZvcndhcmRSZWYiLCJyZWYiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsInRoZW1lIiwicmVzdFByb3BzIiwic2tpcEZyYW1lIiwiYmFzZVJlZiIsInVzZVJlZiIsInJ1biIsImJhc2UiLCJjdXJyZW50IiwiY29udGVudFdpZHRoIiwic2Nyb2xsV2lkdGgiLCJjb250ZW50SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwidmlldyIsInJlc2l6ZSIsInN0eWxlIiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInNldFNpZGVQYWRkaW5nc1JlbSIsImxlZnQiLCJwYXJzZUludCIsImdldFByb3BlcnR5VmFsdWUiLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsInNldFJlZnMiLCJub2RlIiwiZGVjb3JhdG9yIiwiZ2V0Um9vdERlZmF1bHQiLCJyb290SWQiLCJzdWJWaWV3cyIsImdldCIsImNyZWF0ZSIsImluaXRpYWxpemVyIiwiZ2V0Um9vdCIsImNvbnRleHQiLCJzdWJzY3JpYmVycyIsIk1hcCIsImVuZ2luZSIsIndoZW5SZWFkeSIsInRoZW4iLCJvbiIsImRhdGEiLCJfIiwiY2FsbGJhY2tJRHMiLCJmb3JFYWNoIiwiY2FsbGJhY2tJRCIsImNhbGxiYWNrIiwidW5kZWZpbmVkIiwidW5zdWJzY3JpYmUiLCJpZCIsInJlc0lkIiwidmlld0VudiIsInJlbW92ZURhdGFDaGFuZ2VkQ2FsbGJhY2siLCJkZWxldGUiLCJjb25zb2xlIiwiZXJyb3IiLCJyZWFkQnlQYXRoIiwicGF0aCIsInJvb3QiLCJtb2RlbCIsInNwbGl0IiwicmVkdWNlIiwicmVzdWx0Iiwia2V5IiwibGVuZ3RoIiwiZWxlbWVudCIsImJpbmQiLCJzdWJzY3JpYmUiLCJzdWJzY3JpYmVyIiwic3Vic2NyaWJlUGF0aCIsInRyYWNrSW5EZXB0aCIsImFkZE1vZGVsT2JzZXJ2ZXIiLCJzZXQiLCJjcmVhdGVDYWxsYmFjayIsImFyZ3NNYXAiLCJmbiIsImFyZ3MiLCJjcmVhdGVDYWxsYmFja05vQXJncyIsImRpc3Bvc2UiLCJrZXlzIiwic3Vic2NyaWJlcklkIiwiY29uc3RGYWxzZSIsImFjdGlvbiIsIm9ic2VydmFibGUiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZGF0YUxheWVyIiwiaW5pdGlhbGl6ZU1vZGVsV2l0aENvbnRleHQiLCJtb2RlbENyZWF0b3IiLCJjb250cm9sc0NyZWF0b3IiLCJDb250ZXh0IiwiRGF0YUxheWVyUHJvdmlkZXIiLCJtb2RlIiwiZGF0YU1vZGUiLCJvcHRpb25zIiwibW9ja3MiLCJjbGVhbnVwc1JlZiIsImNyZWF0ZUNvbnRleHRWYWx1ZSIsImRhdGFMYXllckluc3RhbmNlIiwiZXh0ZXJuYWxNb2RlbCIsImdldHRlciIsIm9ic2VydmFibGVBcnJheSIsImluaXQiLCJpbml0T2JzZXJ2YWJsZSIsImJveCIsImVxdWFscyIsIm9ic2VydmFibGVPYmplY3QiLCJvYnNlcnZhYmxlUHJpbWl0aXZlcyIsIkFycmF5IiwiaXNBcnJheSIsImFjYyIsImtleXNSZWNvcmQiLCJrZXlzRW50cmllcyIsIk9iamVjdCIsImVudHJpZXMiLCJrZXlGcm9tIiwia2V5VG8iLCJjbGVhbnVwIiwicHVzaCIsIm9ic2VydmFibGVNb2RlbCIsImFycmF5Iiwib2JqZWN0IiwicHJpbWl0aXZlcyIsImNvbnRyb2xzQXJncyIsImNvbnRyb2xzIiwic3RhcnRlZFJlZiIsImNoYW5nZU1vZGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwibWFrZUVuZ2luZUV2ZW50Iiwic2V0VHJhY2tNb3VzZU91dHNpZGUiLCJvblJlc2l6ZSIsImludGVybmFsTW91c2UiLCJkb3duIiwidXAiLCJtb3ZlIiwiaW5pdE1vdXNlRXZlbnRzIiwic3RhdGUiLCJsaXN0ZW5lcnMiLCJlbmFibGVkIiwiaW5pdGlhbGl6ZWQiLCJoYW5kbGVNb3VzZUVudGVyIiwiaGFuZGxlTW91c2VMZWF2ZSIsInVwZGF0ZUxhenlUcmFjayIsImRvY3VtZW50IiwiYm9keSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwibWFrZUV2ZW50IiwibmFtZSIsImxpc3RlbmVyIiwiYWN0aXZlIiwid2luZG93RXZlbnQiLCJldmVudCIsImhhbmRsZVdpbmRvd0V2ZW50IiwiZXZlbnRzIiwic3Vic2NyaWJlQXBpIiwiZGlzYWJsZSIsImVuYWJsZSIsImVuYWJsZU91dHNpZGUiLCJkaXNhYmxlT3V0c2lkZSIsIm1vdXNlIiwiZ2V0U2l6ZSIsInVuaXQiLCJnZXRDbGllbnRTaXplUmVtIiwiZ2V0Q2xpZW50U2l6ZVB4IiwiZ2V0TW91c2VHbG9iYWxQb3NpdGlvbiIsImdldE1vdXNlR2xvYmFsUG9zaXRpb25SZW0iLCJnZXRNb3VzZUdsb2JhbFBvc2l0aW9uUHgiLCJncmFwaGljc1F1YWxpdHkiLCJpc0xvdyIsImdldEdyYXBoaWNzUXVhbGl0eSIsImlzSGlnaCIsInNldFRyYWNrTW91c2VPblN0YWdlIiwiZXZlbnROYW1lIiwiaGFuZGxlciIsIm9mZiIsImNsaWVudCIsInByb2Nlc3MiLCJOT0RFX0VOViIsImdldFRleHR1cmVVcmwiLCJjaGlsZElkIiwic2l6ZSIsInNjYWxlIiwiZ2V0Q2hpbGRUZXh0dXJlUGF0aCIsIndpZHRoIiwiaGVpZ2h0IiwiZ2V0QmdVcmwiLCJkaXNwbGF5U3RhdHVzIiwic2hvd2luZyIsInNob3duIiwiaGlkaW5nIiwiaGlkZGVuIiwib25UZXh0dXJlRnJvemVuIiwib25UZXh0dXJlUmVhZHkiLCJvbkRvbUJ1aWx0Iiwib25Mb2FkZWQiLCJvbkRpc3BsYXlDaGFuZ2VkIiwib25Gb2N1c1VwZGF0ZWQiLCJvbkFkZGVkIiwib25SZW1vdmVkIiwib25BdHRhY2hlZCIsIm9uUmVxdWVzdFBvc2l0aW9uIiwic2VuZEV2ZW50IiwiQUxMX1NJREVTIiwiYWRkUHJlbG9hZFRleHR1cmUiLCJzZXRJbnB1dFBhZGRpbmdzUmVtIiwicGFkZGluZ3MiLCJzZXRIaXRBcmVhUGFkZGluZ3NSZW0iLCJnZXRCcm93c2VyVGV4dHVyZVBhdGgiLCJnZXRXZWJCcm93c2VyVGV4dHVyZVBhdGgiLCJ0cmFja1N1Ykl0ZW1zIiwiYWRkRGF0YUNoYW5nZWRDYWxsYmFjayIsImdldFZpZXdTaXplUmVtIiwiZ2V0Vmlld1NpemVQeCIsInJlc2l6ZVZpZXdSZW0iLCJyZXNpemVWaWV3UHgiLCJnZXRWaWV3R2xvYmFsUG9zaXRpb24iLCJnZXRWaWV3R2xvYmFsUG9zaXRpb25SZW0iLCJ4IiwicmVtVG9QeCIsInkiLCJmcmVlemVUZXh0dXJlQmVmb3JlUmVzaXplIiwiZ2V0U2NhbGUiLCJweFRvUmVtIiwicHgiLCJyZW0iLCJzZXRBbmltYXRlV2luZG93IiwiaXNGb2N1c2VkIiwic2V0RXZlbnRIYW5kbGVkIiwiaXNFdmVudEhhbmRsZWQiLCJmb3JjZVRyaWdnZXJNb3VzZU1vdmUiLCJnZXREaXNwbGF5U3RhdHVzIiwiZ2V0U2hvd2luZ1N0YXR1cyIsImRpc3BsYXlTdGF0dXNJcyIsImV4dHJhU2l6ZSIsInNldEV4dHJhU2l6ZVJlbSIsImdldEV4dHJhU2l6ZVJlbSIsIndoZW5UdXRvcmlhbFJlYWR5IiwiUHJvbWlzZSIsImFsbCIsInJlc29sdmUiLCJpc0RvbUJ1aWx0Iiwidmlld0V2ZW50VHlwZXMiLCJjbG9zZVBvcG92ZXIiLCJjbG9zZSIsIm1pbmltaXplIiwiY3JlYXRlVmlld0V2ZW50QXJndW1lbnRzIiwibWFwIiwiX19UeXBlIiwibnVtYmVyIiwiYm9vbCIsInN0cmluZyIsInRvU3RyaW5nIiwic2VuZFZpZXdFdmVudCIsInR5cGUiLCJyZXN0T3B0aW9ucyIsImhhbmRsZVZpZXdFdmVudCIsImFyZ3VtZW50cyIsInN0YXJ0IiwiaXNNb3VzZUV2ZW50Iiwibm9vcCIsImVtcHR5RnVuY3Rpb24iLCJpZGVudGl0eSIsImEiLCJjb25zdFRydWUiLCJsb2ciLCJ1c2VVbm1vdW50IiwidXNlTWVtbyIsIk5PX1JBRl9JRCIsInJhZklkUmVmIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjbGVhciIsImlzUnVubmluZyIsIlJlYWN0RE9NIiwiQXBwIiwiTW9kZWxQcm92aWRlciIsInJlbmRlciIsImdldEVsZW1lbnRCeUlkIiwib2JzZXJ2ZXIiLCJ1c2VNb2RlbCIsIlRFWFRTIiwiUiIsInN0cmluZ3MiLCJ0b29sdGlwcyIsInJlc2VhcmNoUGFnZSIsImVhcmx5QWNjZXNzSW5mbyIsImhlYWRlciIsImhlYWRlcl9faWNvbiIsImhlYWRlcl9fdGV4dCIsImNvbnRlbnQiLCJjb250ZW50X190aXRsZSIsInRpdGxlIiwiY29udGVudF9fdGV4dCIsInRleHQiLCJjb21wdXRlcyJdLCJzb3VyY2VSb290IjoiIn0=
