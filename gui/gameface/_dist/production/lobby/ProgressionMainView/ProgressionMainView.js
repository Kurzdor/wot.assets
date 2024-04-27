(() => {
    var __webpack_modules__ = {
            926: (e) => {
                e.exports = {
                    SMALL_WIDTH: 'mediaSmallWidth',
                    MEDIUM_WIDTH: 'mediaMediumWidth',
                    LARGE_WIDTH: 'mediaLargeWidth',
                    EXTRA_LARGE_WIDTH: 'mediaExtraLargeWidth',
                    SMALL_HEIGHT: 'mediaSmallHeight',
                    MEDIUM_HEIGHT: 'mediaMediumHeight',
                    LARGE_HEIGHT: 'mediaLargeHeight',
                    EXTRA_LARGE_HEIGHT: 'mediaExtraLargeHeight',
                    SMALL: 'mediaSmall',
                    MEDIUM: 'mediaMedium',
                    LARGE: 'mediaLarge',
                    EXTRA_LARGE: 'mediaExtraLarge',
                };
            },
            3532: (e) => {
                e.exports = {
                    BLACK_REAL: '#000000',
                    WHITE_REAL: '#FFFFFF',
                    WHITE: '#F2F2F7',
                    WHITE_ORANGE: '#FEFEEC',
                    WHITE_SPANISH: '#E9E2BF',
                    PAR: '#8C8C7E',
                    PAR_SECONDARY: '#595950',
                    PAR_TERTIARY: '#37362E',
                    INFO_RED: '#FF0000',
                    RED: '#FF2717',
                    RED_DARK: '#B70000',
                    YELLOW: '#FEAB34',
                    ORANGE: '#EE7000',
                    CREAM: '#FFDD99',
                    BROWN: '#CBAC77',
                    GREEN_BRIGHT: '#80D43A',
                    GREEN: '#7AB300',
                    GREEN_DARK: '#497212',
                    BLUE_BOOSTER: '#CCFFFF',
                    BLUE_TEAMKILLER: '#09E2FF',
                    CRED: '#CED9D9',
                    GOLD: '#FFC363',
                    BOND: '#C9C9B6',
                    PROM: '#A29B70',
                };
            },
            9887: (e) => {
                e.exports = {
                    XS: '4rem',
                    SM: '8rem',
                    SMp: '10rem',
                    MD: '16rem',
                    MDp: '20rem',
                    LG: '32rem',
                    XL: '64rem',
                };
            },
            5067: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => W });
                var r = {};
                t.r(r), t.d(r, { mouse: () => _, onResize: () => l });
                var n = {};
                t.r(n),
                    t.d(n, {
                        events: () => r,
                        getMouseGlobalPosition: () => m,
                        getSize: () => d,
                        graphicsQuality: () => E,
                    });
                var a = {};
                t.r(a), t.d(a, { getBgUrl: () => g, getTextureUrl: () => A });
                var s = {};
                function o(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                function i(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.r(s),
                    t.d(s, {
                        addModelObserver: () => v,
                        addPreloadTexture: () => h,
                        children: () => a,
                        displayStatus: () => F,
                        displayStatusIs: () => G,
                        events: () => p,
                        extraSize: () => U,
                        forceTriggerMouseMove: () => H,
                        freezeTextureBeforeResize: () => R,
                        getBrowserTexturePath: () => f,
                        getDisplayStatus: () => I,
                        getScale: () => T,
                        getSize: () => S,
                        getViewGlobalPosition: () => P,
                        isEventHandled: () => O,
                        isFocused: () => k,
                        pxToRem: () => x,
                        remToPx: () => L,
                        resize: () => y,
                        sendEvent: () => C,
                        setAnimateWindow: () => M,
                        setEventHandled: () => N,
                        setInputPaddingsRem: () => b,
                        setSidePaddingsRem: () => w,
                        whenTutorialReady: () => z,
                    });
                const l = o('clientResized'),
                    c = { down: o('mousedown'), up: o('mouseup'), move: o('mousemove') },
                    _ = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function u() {
                            e.enabled && i(!1);
                        }
                        function t() {
                            e.enabled && i(!0);
                        }
                        function r() {
                            e.enabled
                                ? e.listeners < 1
                                    ? ((e.initialized = !1),
                                      document.body.removeEventListener('mouseenter', u),
                                      document.body.removeEventListener('mouseleave', t))
                                    : e.initialized ||
                                      ((e.initialized = !0),
                                      document.body.addEventListener('mouseenter', u),
                                      document.body.addEventListener('mouseleave', t))
                                : i(!1);
                        }
                        const n = ['down', 'up', 'move'].reduce(
                            (u, t) => (
                                (u[t] = (function (u) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let n = !0;
                                        const a = `mouse${u}`,
                                            s = c[u]((e) => t([e, 'outside']));
                                        function o(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(a, o),
                                            r(),
                                            () => {
                                                n &&
                                                    (s(),
                                                    window.removeEventListener(a, o),
                                                    (e.listeners -= 1),
                                                    r(),
                                                    (n = !1));
                                            }
                                        );
                                    };
                                })(t)),
                                u
                            ),
                            {},
                        );
                        return Object.assign({}, n, {
                            disable() {
                                (e.enabled = !1), r();
                            },
                            enable() {
                                (e.enabled = !0), r();
                            },
                            enableOutside() {
                                e.enabled && i(!0);
                            },
                            disableOutside() {
                                e.enabled && i(!1);
                            },
                        });
                    })();
                function d(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const E = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function A(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function g(e, u, t) {
                    return `url(${A(e, u, t)})`;
                }
                const F = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    p = {
                        onTextureFrozen: o('self.onTextureFrozen'),
                        onTextureReady: o('self.onTextureReady'),
                        onDomBuilt: o('self.onDomBuilt'),
                        onLoaded: o('self.onLoaded'),
                        onDisplayChanged: o('self.onShowingStatusChanged'),
                        onFocusUpdated: o('self.onFocusChanged'),
                        children: {
                            onAdded: o('children.onAdded'),
                            onLoaded: o('children.onLoaded'),
                            onRemoved: o('children.onRemoved'),
                            onAttached: o('children.onAttached'),
                            onTextureReady: o('children.onTextureReady'),
                            onRequestPosition: o('children.requestPosition'),
                        },
                    },
                    D = ['args'],
                    B = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const n = u.args,
                                a = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        n = {},
                                        a = Object.keys(e);
                                    for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                    return n;
                                })(u, D);
                            return void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, a, {
                                          arguments:
                                              ((r = n),
                                              Object.entries(r).map(([e, u]) => {
                                                  const t = 'GFValueProxy';
                                                  switch (typeof u) {
                                                      case 'number':
                                                          return { __Type: t, name: e, number: u };
                                                      case 'boolean':
                                                          return { __Type: t, name: e, bool: u };
                                                      default:
                                                          return { __Type: t, name: e, string: u.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, a));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var r;
                    },
                    C = {
                        close(e) {
                            B('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            B(64);
                        },
                        move(e) {
                            B(16, { isMouseEvent: !0, on: e });
                        },
                    };
                function h(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function b(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function f(e, u, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, r);
                }
                function v(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function w(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function S(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function y(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function P(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: L(u.x), y: L(u.y) };
                }
                function R() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function T() {
                    return viewEnv.getScale();
                }
                function x(e) {
                    return viewEnv.pxToRem(e);
                }
                function L(e) {
                    return viewEnv.remToPx(e);
                }
                function M(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function k() {
                    return viewEnv.isFocused();
                }
                function N() {
                    return viewEnv.setEventHandled();
                }
                function O() {
                    return viewEnv.isEventHandled();
                }
                function H() {
                    viewEnv.forceTriggerMouseMove();
                }
                function I() {
                    return viewEnv.getShowingStatus();
                }
                const G = Object.keys(F).reduce((e, u) => ((e[u] = () => viewEnv.getShowingStatus() === F[u]), e), {}),
                    U = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    z = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : p.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    W = { view: s, client: n };
            },
            5521: (e, u, t) => {
                'use strict';
                let r, n;
                t.d(u, { n: () => r }),
                    (function (e) {
                        (e[(e.NONE = -1)] = 'NONE'),
                            (e[(e.ALT = 165)] = 'ALT'),
                            (e[(e.ENTER = 13)] = 'ENTER'),
                            (e[(e.ESCAPE = 27)] = 'ESCAPE'),
                            (e[(e.SPACE = 32)] = 'SPACE'),
                            (e[(e.END = 35)] = 'END'),
                            (e[(e.HOME = 36)] = 'HOME'),
                            (e[(e.ARROW_LEFT = 37)] = 'ARROW_LEFT'),
                            (e[(e.ARROW_UP = 38)] = 'ARROW_UP'),
                            (e[(e.ARROW_RIGHT = 39)] = 'ARROW_RIGHT'),
                            (e[(e.ARROW_DOWN = 40)] = 'ARROW_DOWN'),
                            (e[(e.NUM_PLUS = 107)] = 'NUM_PLUS'),
                            (e[(e.NUM_MINUS = 109)] = 'NUM_MINUS'),
                            (e[(e.PLUS = 187)] = 'PLUS'),
                            (e[(e.MINUS = 189)] = 'MINUS'),
                            (e[(e.PAGE_UP = 33)] = 'PAGE_UP'),
                            (e[(e.PAGE_DOWN = 34)] = 'PAGE_DOWN'),
                            (e[(e.BACKSPACE = 8)] = 'BACKSPACE'),
                            (e[(e.DELETE = 46)] = 'DELETE'),
                            (e[(e.TAB = 9)] = 'TAB'),
                            (e[(e.KEY_N = 78)] = 'KEY_N'),
                            (e[(e.KEY_1 = 49)] = 'KEY_1'),
                            (e[(e.KEY_2 = 50)] = 'KEY_2'),
                            (e[(e.KEY_3 = 51)] = 'KEY_3'),
                            (e[(e.KEY_4 = 52)] = 'KEY_4'),
                            (e[(e.KEY_5 = 53)] = 'KEY_5'),
                            (e[(e.KEY_6 = 54)] = 'KEY_6'),
                            (e[(e.KEY_7 = 55)] = 'KEY_7'),
                            (e[(e.KEY_8 = 56)] = 'KEY_8'),
                            (e[(e.KEY_9 = 57)] = 'KEY_9'),
                            (e[(e.CAPS_LOCK = 20)] = 'CAPS_LOCK'),
                            (e[(e.INSERT = 45)] = 'INSERT'),
                            (e[(e.F1 = 112)] = 'F1'),
                            (e[(e.F2 = 113)] = 'F2'),
                            (e[(e.F3 = 114)] = 'F3'),
                            (e[(e.F4 = 115)] = 'F4'),
                            (e[(e.F5 = 116)] = 'F5'),
                            (e[(e.F6 = 117)] = 'F6'),
                            (e[(e.F7 = 118)] = 'F7'),
                            (e[(e.F8 = 119)] = 'F8'),
                            (e[(e.F9 = 120)] = 'F9'),
                            (e[(e.F10 = 121)] = 'F10'),
                            (e[(e.F11 = 122)] = 'F11'),
                            (e[(e.F12 = 123)] = 'F12'),
                            (e[(e.SELECT = 93)] = 'SELECT'),
                            (e[(e.NUMPAD_0 = 96)] = 'NUMPAD_0'),
                            (e[(e.NUMPAD_1 = 97)] = 'NUMPAD_1'),
                            (e[(e.NUMPAD_2 = 98)] = 'NUMPAD_2'),
                            (e[(e.NUMPAD_3 = 99)] = 'NUMPAD_3'),
                            (e[(e.NUMPAD_4 = 100)] = 'NUMPAD_4'),
                            (e[(e.NUMPAD_5 = 101)] = 'NUMPAD_5'),
                            (e[(e.NUMPAD_6 = 102)] = 'NUMPAD_6'),
                            (e[(e.NUMPAD_7 = 103)] = 'NUMPAD_7'),
                            (e[(e.NUMPAD_8 = 104)] = 'NUMPAD_8'),
                            (e[(e.NUMPAD_9 = 105)] = 'NUMPAD_9'),
                            (e[(e.NUM_DECIMAL = 110)] = 'NUM_DECIMAL'),
                            (e[(e.STAR = 106)] = 'STAR'),
                            (e[(e.NUM_SLASH = 111)] = 'NUM_SLASH'),
                            (e[(e.FORWARD_SLASH = 191)] = 'FORWARD_SLASH'),
                            (e[(e.COMMA = 188)] = 'COMMA'),
                            (e[(e.DASH = 189)] = 'DASH'),
                            (e[(e.PERIOD = 190)] = 'PERIOD');
                    })(r || (r = {})),
                    (function (e) {
                        (e.ALT = 'Alt'),
                            (e.ALT_GRAPH = 'AltGraph'),
                            (e.CAPS_LOCK = 'CapsLock'),
                            (e.CONTROL = 'Control'),
                            (e.FN = 'Fn'),
                            (e.FN_LOCK = 'FnLock'),
                            (e.META = 'Meta'),
                            (e.NUM_LOCK = 'NumLock'),
                            (e.SCROLL_LOCK = 'ScrollLock'),
                            (e.SHIFT = 'Shift'),
                            (e.SYMBOL = 'Symbol'),
                            (e.SYMBOL_LOCK = 'SymbolLock');
                    })(n || (n = {}));
            },
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => a });
                var r = t(5067);
                class n {
                    constructor() {
                        (this._callbacks = void 0),
                            (this._updateHandler = void 0),
                            (this._views = void 0),
                            (this.clearViewCallbacks = (e) => {
                                this._views[e] &&
                                    (this._views[e].forEach((e) => {
                                        delete this._callbacks[e];
                                    }),
                                    delete this._views[e]);
                            }),
                            (this._callbacks = {}),
                            (this._views = {}),
                            (this._updateHandler = void 0);
                    }
                    static get instance() {
                        return window.__dataTracker || (window.__dataTracker = new n()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(e, u, t = 0, n = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = r.O.view.addModelObserver(e, t, n);
                        return (
                            a > 0
                                ? ((this._callbacks[a] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(a) : (this._views[t] = [a])))
                                : console.error("Can't add callback for model:", e),
                            a
                        );
                    }
                    removeCallback(e, u = 0) {
                        let t = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((t = viewEnv.removeDataChangedCallback(e, u)), delete this._callbacks[e]),
                            t || console.error("Can't remove callback by id:", e),
                            t
                        );
                    }
                    _emmitDataChanged(e, u, t) {
                        t.forEach((t) => {
                            const r = this._callbacks[t];
                            void 0 !== r && r(e, u);
                        });
                    }
                }
                n.__instance = void 0;
                const a = n;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4179);
                class ViewModel {
                    constructor(path, watchingFields = []) {
                        (this.dataTracker = void 0),
                            (this.modelPath = void 0),
                            (this.callbacks = void 0),
                            (this.data = void 0),
                            (this._notifyObservers = () => {
                                (this.data = eval(this.modelPath)),
                                    this.callbacks.forEach((e) => {
                                        e(this.data);
                                    });
                            }),
                            (this.dataTracker = new _DataTracker__WEBPACK_IMPORTED_MODULE_0__.Z()),
                            (this.modelPath = path),
                            (this.callbacks = new Set()),
                            (0, _index__WEBPACK_IMPORTED_MODULE_1__.ry)().then(() => {
                                this._addCallback(path),
                                    watchingFields.forEach((e) => {
                                        this._addCallback(path + '.' + e);
                                    }),
                                    this._notifyObservers();
                            });
                    }
                    subscribe(e) {
                        this.callbacks.add(e), null !== this.data && void 0 !== this.data && e(this.data);
                    }
                    unsubscribe(e) {
                        this.callbacks.delete(e);
                    }
                    destroy() {
                        this.dataTracker.clear(), this.callbacks.clear();
                    }
                    _addCallback(e) {
                        this.dataTracker.addCallback(e, this._notifyObservers);
                    }
                }
                const __WEBPACK_DEFAULT_EXPORT__ = ViewModel;
            },
            4179: (e, u, t) => {
                'use strict';
                t.d(u, { B3: () => c, Z5: () => s, B0: () => i, ry: () => D, Eu: () => B });
                class r {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: u, callback: t }) => {
                                    let r = e.target;
                                    do {
                                        if (r === u) return;
                                        r = r.parentNode;
                                    } while (r);
                                    t();
                                });
                            });
                    }
                    static get instance() {
                        return r.__instance || (r.__instance = new r()), r.__instance;
                    }
                    register(e, u) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: u });
                    }
                    unregister(e, u) {
                        const t = e,
                            r = u;
                        (this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== r)),
                            this.removeMouseListener();
                    }
                    addMouseListener() {
                        this._listenMouse ||
                            (document.addEventListener('mousedown', this.onMouseDown), (this._listenMouse = !0));
                    }
                    removeMouseListener() {
                        this._listenMouse &&
                            0 === this.entries.length &&
                            (document.removeEventListener('mousedown', this.onMouseDown), (this._listenMouse = !1));
                    }
                }
                r.__instance = void 0;
                const n = r;
                var a = t(1358);
                const s = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    o = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    };
                let i;
                var l;
                ((l = i || (i = {}))[(l.UNDEFINED = 0)] = 'UNDEFINED'),
                    (l[(l.TOOLTIP = 1)] = 'TOOLTIP'),
                    (l[(l.POP_OVER = 2)] = 'POP_OVER'),
                    (l[(l.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (l[(l.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (l[(l.MOVE = 16)] = 'MOVE'),
                    (l[(l.CLOSE = 32)] = 'CLOSE'),
                    (l[(l.MINIMIZE = 64)] = 'MINIMIZE');
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    _ = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var E = t(5521),
                    A = t(5067);
                const g = ['args'];
                function F(e, u, t, r, n, a, s) {
                    try {
                        var o = e[a](s),
                            i = o.value;
                    } catch (e) {
                        return void t(e);
                    }
                    o.done ? u(i) : Promise.resolve(i).then(r, n);
                }
                const p = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    D = (function () {
                        var e,
                            u =
                                ((e = function* () {
                                    return (
                                        !(!engine._BindingsReady || !engine._WindowLoaded) ||
                                        new Promise((e) => {
                                            engine.on('Ready', e);
                                        })
                                    );
                                }),
                                function () {
                                    var u = this,
                                        t = arguments;
                                    return new Promise(function (r, n) {
                                        var a = e.apply(u, t);
                                        function s(e) {
                                            F(a, r, n, s, o, 'next', e);
                                        }
                                        function o(e) {
                                            F(a, r, n, s, o, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    B = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    C = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const n = u.args,
                                a = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        n = {},
                                        a = Object.keys(e);
                                    for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                    return n;
                                })(u, g);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, a, {
                                          arguments:
                                              ((r = n),
                                              Object.entries(r).map(([e, u]) => {
                                                  const t = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof u) {
                                                      case 'number':
                                                          t.number = u;
                                                          break;
                                                      case 'boolean':
                                                          t.bool = u;
                                                          break;
                                                      default:
                                                          t.string = u.toString();
                                                  }
                                                  return t;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, a));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var r;
                    },
                    h = () => C(i.CLOSE),
                    b = (e, u) => {
                        e.keyCode === E.n.ESCAPE && u();
                    };
                var f = t(7572);
                const v = n.instance,
                    w = {
                        DataTracker: a.Z,
                        ViewModel: f.Z,
                        ViewEventType: i,
                        NumberFormatType: c,
                        RealFormatType: _,
                        TimeFormatType: d,
                        DateFormatType: m,
                        makeGlobalBoundingBox: p,
                        sendMoveEvent: (e) => C(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: h,
                        sendClosePopOverEvent: () => C(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            C(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, r, n = R.invalid('resId'), a) => {
                            const s = A.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                _ = o.width,
                                d = o.height,
                                m = {
                                    x: A.O.view.pxToRem(l) + s.x,
                                    y: A.O.view.pxToRem(c) + s.y,
                                    width: A.O.view.pxToRem(_),
                                    height: A.O.view.pxToRem(d),
                                };
                            C(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: n,
                                direction: u,
                                bbox: p(m),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => b(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            b(e, h);
                        },
                        handleViewEvent: C,
                        onBindingsReady: D,
                        onLayoutReady: B,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(i.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(i.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(i.POP_OVER),
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const r in u)
                                if (Object.prototype.hasOwnProperty.call(u, r)) {
                                    const n = Object.prototype.toString.call(u[r]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = u[r];
                                        t[r] = [];
                                        for (let u = 0; u < n.length; u++) t[r].push({ value: e(n[u].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[r] = e(u[r]))
                                            : (t[r] = u[r]);
                                }
                            return t;
                        },
                        ClickOutsideManager: v,
                        SystemLocale: s,
                        UserLocale: o,
                    };
                window.ViewEnvHelper = w;
            },
            9870: (e, u, t) => {
                'use strict';
                var r = {};
                t.r(r),
                    t.d(r, {
                        Area: () => Yt,
                        Bar: () => Vt,
                        DefaultScroll: () => Xt,
                        Direction: () => Mt,
                        defaultSettings: () => kt,
                        useHorizontalScrollApi: () => Ot,
                    });
                var n = {};
                t.r(n), t.d(n, { Area: () => sr, Bar: () => rr, Default: () => ar, useVerticalScrollApi: () => qt });
                var a = t(6179),
                    s = t.n(a);
                const o = (e, u, t) =>
                    u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                        ? (u.extraLargeHeight && t.extraLarge) ||
                          (u.largeHeight && t.large) ||
                          (u.mediumHeight && t.medium) ||
                          (u.smallHeight && t.small) ||
                          (u.extraSmallHeight && t.extraSmall)
                            ? e
                            : null
                        : e;
                var i = t(5067);
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var c;
                function _(e, u, t) {
                    const r = (function (e, u) {
                            switch (!0) {
                                case e >= u.extraLarge.width:
                                    return u.extraLarge.weight;
                                case e >= u.large.width && e < u.extraLarge.width:
                                    return u.large.weight;
                                case e >= u.medium.width && e < u.large.width:
                                    return u.medium.weight;
                                case e >= u.small.width && e < u.medium.width:
                                    return u.small.weight;
                                default:
                                    return u.extraSmall.weight;
                            }
                        })(e, t),
                        n = (function (e, u) {
                            switch (!0) {
                                case e >= u.extraLarge.height:
                                    return u.extraLarge.weight;
                                case e >= u.large.height && e < u.extraLarge.height:
                                    return u.large.weight;
                                case e >= u.medium.height && e < u.large.height:
                                    return u.medium.weight;
                                case e >= u.small.height && e < u.medium.height:
                                    return u.small.weight;
                                default:
                                    return u.extraSmall.weight;
                            }
                        })(u, t),
                        a = Math.min(r, n);
                    return {
                        extraLarge: a === t.extraLarge.weight,
                        large: a === t.large.weight,
                        medium: a === t.medium.weight,
                        small: a === t.small.weight,
                        extraSmall: a === t.extraSmall.weight,
                        extraLargeWidth: r === t.extraLarge.weight,
                        largeWidth: r === t.large.weight,
                        mediumWidth: r === t.medium.weight,
                        smallWidth: r === t.small.weight,
                        extraSmallWidth: r === t.extraSmall.weight,
                        extraLargeHeight: n === t.extraLarge.weight,
                        largeHeight: n === t.large.weight,
                        mediumHeight: n === t.medium.weight,
                        smallHeight: n === t.small.weight,
                        extraSmallHeight: n === t.extraSmall.weight,
                    };
                }
                !(function (e) {
                    (e.extraLarge = 'extraLarge'),
                        (e.large = 'large'),
                        (e.medium = 'medium'),
                        (e.small = 'small'),
                        (e.extraSmall = 'extraSmall'),
                        (e.extraLargeWidth = 'extraLargeWidth'),
                        (e.largeWidth = 'largeWidth'),
                        (e.mediumWidth = 'mediumWidth'),
                        (e.smallWidth = 'smallWidth'),
                        (e.extraSmallWidth = 'extraSmallWidth'),
                        (e.extraLargeHeight = 'extraLargeHeight'),
                        (e.largeHeight = 'largeHeight'),
                        (e.mediumHeight = 'mediumHeight'),
                        (e.smallHeight = 'smallHeight'),
                        (e.extraSmallHeight = 'extraSmallHeight');
                })(c || (c = {}));
                const d = i.O.client.getSize('rem'),
                    m = d.width,
                    E = d.height,
                    A = Object.assign({ width: m, height: E }, _(m, E, l)),
                    g = (0, a.createContext)(A),
                    F = ['children'],
                    p = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, F);
                        const r = (0, a.useContext)(g),
                            n = r.extraLarge,
                            s = r.large,
                            i = r.medium,
                            l = r.small,
                            c = r.extraSmall,
                            _ = r.extraLargeWidth,
                            d = r.largeWidth,
                            m = r.mediumWidth,
                            E = r.smallWidth,
                            A = r.extraSmallWidth,
                            p = r.extraLargeHeight,
                            D = r.largeHeight,
                            B = r.mediumHeight,
                            C = r.smallHeight,
                            h = r.extraSmallHeight,
                            b = { extraLarge: p, large: D, medium: B, small: C, extraSmall: h };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && n) return u;
                            if (t.large && s) return u;
                            if (t.medium && i) return u;
                            if (t.small && l) return u;
                            if (t.extraSmall && c) return u;
                        } else {
                            if (t.extraLargeWidth && _) return o(u, t, b);
                            if (t.largeWidth && d) return o(u, t, b);
                            if (t.mediumWidth && m) return o(u, t, b);
                            if (t.smallWidth && E) return o(u, t, b);
                            if (t.extraSmallWidth && A) return o(u, t, b);
                            if (
                                !(
                                    t.extraLargeWidth ||
                                    t.largeWidth ||
                                    t.mediumWidth ||
                                    t.smallWidth ||
                                    t.extraSmallWidth
                                )
                            ) {
                                if (t.extraLargeHeight && p) return u;
                                if (t.largeHeight && D) return u;
                                if (t.mediumHeight && B) return u;
                                if (t.smallHeight && C) return u;
                                if (t.extraSmallHeight && h) return u;
                            }
                        }
                        return null;
                    };
                (p.defaultProps = {
                    extraLarge: !1,
                    large: !1,
                    medium: !1,
                    small: !1,
                    extraSmall: !1,
                    extraLargeWidth: !1,
                    largeWidth: !1,
                    mediumWidth: !1,
                    smallWidth: !1,
                    extraSmallWidth: !1,
                    extraLargeHeight: !1,
                    largeHeight: !1,
                    mediumHeight: !1,
                    smallHeight: !1,
                    extraSmallHeight: !1,
                }),
                    (0, a.memo)(p);
                const D = (0, a.memo)(({ children: e }) => {
                    const u = (0, a.useContext)(g),
                        t = (0, a.useState)(u),
                        r = t[0],
                        n = t[1],
                        o = (0, a.useCallback)((e, u) => {
                            const t = i.O.view.pxToRem(e),
                                r = i.O.view.pxToRem(u);
                            n(Object.assign({ width: t, height: r }, _(t, r, l)));
                        }, []);
                    ((e) => {
                        const u = (0, a.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    })(() => {
                        engine.on('clientResized', o);
                    }),
                        (0, a.useEffect)(() => () => engine.off('clientResized', o), [o]);
                    const c = (0, a.useMemo)(() => Object.assign({}, r), [r]);
                    return s().createElement(g.Provider, { value: c }, e);
                });
                var B = t(6483),
                    C = t.n(B),
                    h = t(926),
                    b = t.n(h);
                let f, v, w;
                var S;
                ((S = f || (f = {}))[(S.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                    (S[(S.Small = l.small.width)] = 'Small'),
                    (S[(S.Medium = l.medium.width)] = 'Medium'),
                    (S[(S.Large = l.large.width)] = 'Large'),
                    (S[(S.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge'),
                    (function (e) {
                        (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.width)] = 'Small'),
                            (e[(e.Medium = l.medium.width)] = 'Medium'),
                            (e[(e.Large = l.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                    })(v || (v = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = l.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.height)] = 'Small'),
                            (e[(e.Medium = l.medium.height)] = 'Medium'),
                            (e[(e.Large = l.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.height)] = 'ExtraLarge');
                    })(w || (w = {}));
                const y = () => {
                        const e = (0, a.useContext)(g),
                            u = e.width,
                            t = e.height,
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return f.ExtraLarge;
                                    case e.large:
                                        return f.Large;
                                    case e.medium:
                                        return f.Medium;
                                    case e.small:
                                        return f.Small;
                                    case e.extraSmall:
                                        return f.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), f.ExtraSmall;
                                }
                            })(e),
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return v.ExtraLarge;
                                    case e.largeWidth:
                                        return v.Large;
                                    case e.mediumWidth:
                                        return v.Medium;
                                    case e.smallWidth:
                                        return v.Small;
                                    case e.extraSmallWidth:
                                        return v.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), v.ExtraSmall;
                                }
                            })(e),
                            s = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return w.ExtraLarge;
                                    case e.largeHeight:
                                        return w.Large;
                                    case e.mediumHeight:
                                        return w.Medium;
                                    case e.smallHeight:
                                        return w.Small;
                                    case e.extraSmallHeight:
                                        return w.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), w.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: r, mediaWidth: n, mediaHeight: s, remScreenWidth: u, remScreenHeight: t };
                    },
                    P = ['children', 'className'];
                function T() {
                    return (
                        (T =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        T.apply(this, arguments)
                    );
                }
                const x = {
                        [v.ExtraSmall]: '',
                        [v.Small]: b().SMALL_WIDTH,
                        [v.Medium]: `${b().SMALL_WIDTH} ${b().MEDIUM_WIDTH}`,
                        [v.Large]: `${b().SMALL_WIDTH} ${b().MEDIUM_WIDTH} ${b().LARGE_WIDTH}`,
                        [v.ExtraLarge]: `${b().SMALL_WIDTH} ${b().MEDIUM_WIDTH} ${b().LARGE_WIDTH} ${b().EXTRA_LARGE_WIDTH}`,
                    },
                    L = {
                        [w.ExtraSmall]: '',
                        [w.Small]: b().SMALL_HEIGHT,
                        [w.Medium]: `${b().SMALL_HEIGHT} ${b().MEDIUM_HEIGHT}`,
                        [w.Large]: `${b().SMALL_HEIGHT} ${b().MEDIUM_HEIGHT} ${b().LARGE_HEIGHT}`,
                        [w.ExtraLarge]: `${b().SMALL_HEIGHT} ${b().MEDIUM_HEIGHT} ${b().LARGE_HEIGHT} ${b().EXTRA_LARGE_HEIGHT}`,
                    },
                    M = {
                        [f.ExtraSmall]: '',
                        [f.Small]: b().SMALL,
                        [f.Medium]: `${b().SMALL} ${b().MEDIUM}`,
                        [f.Large]: `${b().SMALL} ${b().MEDIUM} ${b().LARGE}`,
                        [f.ExtraLarge]: `${b().SMALL} ${b().MEDIUM} ${b().LARGE} ${b().EXTRA_LARGE}`,
                    },
                    k = (e) => {
                        let u = e.children,
                            t = e.className,
                            r = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, P);
                        const n = y(),
                            a = n.mediaWidth,
                            o = n.mediaHeight,
                            i = n.mediaSize;
                        return s().createElement('div', T({ className: C()(t, x[a], L[o], M[i]) }, r), u);
                    },
                    N = ['children'],
                    O = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, N);
                        return s().createElement(D, null, s().createElement(k, t, u));
                    };
                var H = t(493),
                    I = t.n(H);
                let G;
                !(function (e) {
                    e[(e.PROGRESSION = 0)] = 'PROGRESSION';
                })(G || (G = {}));
                var U = t(3282),
                    z = t(5521),
                    W = t(4179);
                const $ = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function V(e = z.n.NONE, u = $, t = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== z.n.NONE)
                            return (
                                window.addEventListener('keydown', r, t),
                                () => {
                                    window.removeEventListener('keydown', r, t);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (i.O.view.isEventHandled()) return;
                                i.O.view.setEventHandled(), u(r), t && r.stopPropagation();
                            }
                        }
                    }, [u, e, t]);
                }
                const j = [
                    'children',
                    'contentId',
                    'args',
                    'onMouseEnter',
                    'onMouseLeave',
                    'onMouseDown',
                    'onClick',
                    'ignoreShowDelay',
                    'ignoreMouseClick',
                    'decoratorId',
                    'isEnabled',
                    'targetId',
                    'onShow',
                    'onHide',
                ];
                function X(e) {
                    return Object.entries(e || {}).map(([e, u]) => {
                        const t = { __Type: 'GFValueProxy', name: e };
                        switch (typeof u) {
                            case 'number':
                                t.number = u;
                                break;
                            case 'boolean':
                                t.bool = u;
                                break;
                            case 'undefined':
                                break;
                            default:
                                t.string = u.toString();
                        }
                        return t;
                    });
                }
                const Y = (e, u, t = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: W.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: r,
                                },
                                t,
                            ),
                        );
                    },
                    q = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            r = e.args,
                            n = e.onMouseEnter,
                            s = e.onMouseLeave,
                            o = e.onMouseDown,
                            i = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            _ = e.ignoreMouseClick,
                            d = void 0 !== _ && _,
                            m = e.decoratorId,
                            E = void 0 === m ? 0 : m,
                            A = e.isEnabled,
                            g = void 0 === A || A,
                            F = e.targetId,
                            p = void 0 === F ? 0 : F,
                            D = e.onShow,
                            B = e.onHide,
                            C = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, j);
                        const h = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            b = (0, a.useMemo)(
                                () =>
                                    p ||
                                    ((e = 1) => {
                                        const u = new Error().stack;
                                        let t,
                                            r = R.invalid('resId');
                                        return (
                                            u &&
                                                ((t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== t &&
                                                    window.subViews[t] &&
                                                    (r = window.subViews[t].id)),
                                            { caller: t, stack: u, resId: r }
                                        );
                                    })().resId,
                                [p],
                            ),
                            f = (0, a.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (Y(t, E, { isMouseEvent: !0, on: !0, arguments: X(r) }, b),
                                    D && D(),
                                    (h.current.isVisible = !0));
                            }, [t, E, r, b, D]),
                            v = (0, a.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const e = h.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (h.current.timeoutId = 0)),
                                        Y(t, E, { on: !1 }, b),
                                        h.current.isVisible && B && B(),
                                        (h.current.isVisible = !1);
                                }
                            }, [t, E, b, B]),
                            w = (0, a.useCallback)((e) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(h.current.prevTarget) && v();
                                    }, 200)));
                            }, []);
                        return (
                            (0, a.useEffect)(() => {
                                const e = h.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', w, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', w, { capture: !0 }),
                                            e && window.clearTimeout(e);
                                    }
                                );
                            }, []),
                            (0, a.useEffect)(() => {
                                !1 === g && v();
                            }, [g, v]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', v),
                                    () => {
                                        window.removeEventListener('mouseleave', v), v();
                                    }
                                ),
                                [v],
                            ),
                            g
                                ? (0, a.cloneElement)(
                                      u,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((S = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((h.current.timeoutId = window.setTimeout(f, c ? 100 : 400)),
                                                          n && n(e),
                                                          S && S(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  v(), null == s || s(u), null == e || e(u);
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  !1 === d && v(), null == i || i(u), null == e || e(u);
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  !1 === d && v(), null == o || o(u), null == e || e(u);
                                              })(u.props.onMouseDown),
                                          },
                                          C,
                                      ),
                                  )
                                : u
                        );
                        var S;
                    };
                function K(e) {
                    engine.call('PlaySound', e);
                }
                const Q = {
                        base: 'TextButton_base_b6',
                        base__right: 'TextButton_base__right_39',
                        icon: 'TextButton_icon_17',
                        icon__back: 'TextButton_icon__back_43',
                        icon__forward: 'TextButton_icon__forward_59',
                        icon__close: 'TextButton_icon__close_53',
                        icon__info: 'TextButton_icon__info_33',
                        glow: 'TextButton_glow_a4',
                        caption: 'TextButton_caption_82',
                        caption__back: 'TextButton_caption__back_b9',
                        caption__forward: 'TextButton_caption__forward_4e',
                        caption__close: 'TextButton_caption__close_36',
                        caption__info: 'TextButton_caption__info_23',
                        goto: 'TextButton_goto_e7',
                        base__left: 'TextButton_base__left_ff',
                        shine: 'TextButton_shine_e2',
                    },
                    Z = [
                        'caption',
                        'onClick',
                        'goto',
                        'side',
                        'type',
                        'classNames',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseDown',
                        'onMouseUp',
                        'soundClick',
                        'soundHover',
                    ];
                function J() {
                    return (
                        (J =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        J.apply(this, arguments)
                    );
                }
                class ee extends s().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && K(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && K(this.props.soundClick);
                            }),
                            (this._onMouseUp = (e) => (u) => {
                                e && e(u), this.setState({ click: !1 });
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 }));
                    }
                    render() {
                        const e = this.props,
                            u = e.caption,
                            t = e.onClick,
                            r = e.goto,
                            n = e.side,
                            a = e.type,
                            o = e.classNames,
                            i = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            _ = e.onMouseUp,
                            d =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        n = {},
                                        a = Object.keys(e);
                                    for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                    return n;
                                })(e, Z)),
                            m = C()(Q.base, Q[`base__${a}`], Q[`base__${n}`], null == o ? void 0 : o.base),
                            E = C()(Q.icon, Q[`icon__${a}`], Q[`icon__${n}`], null == o ? void 0 : o.icon),
                            A = C()(Q.glow, null == o ? void 0 : o.glow),
                            g = C()(Q.caption, Q[`caption__${a}`], null == o ? void 0 : o.caption),
                            F = C()(Q.goto, null == o ? void 0 : o.goto);
                        return s().createElement(
                            'div',
                            J(
                                {
                                    className: m,
                                    onMouseEnter: this._onMouseEnter(i),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(_),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                d,
                            ),
                            'info' !== a && s().createElement('div', { className: Q.shine }),
                            s().createElement('div', { className: E }, s().createElement('div', { className: A })),
                            s().createElement('div', { className: g }, u),
                            r && s().createElement('div', { className: F }, r),
                        );
                    }
                }
                ee.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const ue = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function te() {
                    return (
                        (te =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        te.apply(this, arguments)
                    );
                }
                const re = R.views.common.tooltip_window.simple_tooltip_content,
                    ne = (e) => {
                        let u = e.children,
                            t = e.body,
                            r = e.header,
                            n = e.note,
                            o = e.alert,
                            i = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, ue);
                        const c = (0, a.useMemo)(() => {
                            const e = Object.assign({}, i, { body: t, header: r, note: n, alert: o });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [o, t, r, n, i]);
                        return s().createElement(
                            q,
                            te(
                                {
                                    contentId:
                                        ((_ = null == i ? void 0 : i.hasHtmlContent),
                                        _ ? re.SimpleTooltipHtmlContent('resId') : re.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var _;
                    },
                    ae = (e, u, t) => (t < e ? e : t > u ? u : t);
                function se() {}
                function oe() {
                    return !1;
                }
                console.log;
                var ie = t(3915);
                function le(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, r = new Array(u); t < u; t++) r[t] = e[t];
                    return r;
                }
                const ce = (e) => (0 === e ? window : window.subViews.get(e)),
                    _e = () => (e, u) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: n, children: o, mocks: l }) {
                                const c = (0, a.useRef)([]),
                                    _ = (t, r, n) => {
                                        var a;
                                        const s = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = ce,
                                                context: r = 'model',
                                            } = {}) {
                                                const n = new Map();
                                                function a(e, u = 0) {
                                                    viewEnv.removeDataChangedCallback(e, u)
                                                        ? n.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, u, t) => {
                                                        t.forEach((u) => {
                                                            const t = n.get(u);
                                                            void 0 !== t && t(e);
                                                        });
                                                    });
                                                });
                                                const s = (e) => {
                                                    const n = t(u),
                                                        a = r.split('.').reduce((e, u) => e[u], n);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? a
                                                        : e.split('.').reduce((e, u) => {
                                                              const t = e[u];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, a);
                                                };
                                                return {
                                                    subscribe: (t, a) => {
                                                        const o = 'string' == typeof a ? `${r}.${a}` : r,
                                                            l = i.O.view.addModelObserver(o, u, !0);
                                                        return n.set(l, t), e && t(s(a)), l;
                                                    },
                                                    readByPath: s,
                                                    createCallback: (e, u) => {
                                                        const t = s(u);
                                                        return (...u) => {
                                                            t(e(...u));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const u = s(e);
                                                        return () => {
                                                            u();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (
                                                            var e,
                                                                t = (function (e, u) {
                                                                    var t =
                                                                        ('undefined' != typeof Symbol &&
                                                                            e[Symbol.iterator]) ||
                                                                        e['@@iterator'];
                                                                    if (t) return (t = t.call(e)).next.bind(t);
                                                                    if (
                                                                        Array.isArray(e) ||
                                                                        (t = (function (e, u) {
                                                                            if (e) {
                                                                                if ('string' == typeof e)
                                                                                    return le(e, u);
                                                                                var t = Object.prototype.toString
                                                                                    .call(e)
                                                                                    .slice(8, -1);
                                                                                return (
                                                                                    'Object' === t &&
                                                                                        e.constructor &&
                                                                                        (t = e.constructor.name),
                                                                                    'Map' === t || 'Set' === t
                                                                                        ? Array.from(e)
                                                                                        : 'Arguments' === t ||
                                                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                                t,
                                                                                            )
                                                                                          ? le(e, u)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (u && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        t && (e = t);
                                                                        var r = 0;
                                                                        return function () {
                                                                            return r >= e.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: e[r++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(n.keys());
                                                            !(e = t()).done;

                                                        )
                                                            a(e.value, u);
                                                    },
                                                    unsubscribe: a,
                                                };
                                            })(r),
                                            o =
                                                'real' === t
                                                    ? s
                                                    : Object.assign({}, s, {
                                                          readByPath:
                                                              null != (a = null == n ? void 0 : n.getter)
                                                                  ? a
                                                                  : () => {},
                                                      }),
                                            l = (e) =>
                                                'mocks' === t ? (null == n ? void 0 : n.getter(e)) : o.readByPath(e),
                                            _ = (e) => c.current.push(e),
                                            d = e({
                                                mode: t,
                                                readByPath: l,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (e, u) => {
                                                        const r = null != u ? u : l(e),
                                                            n = ie.observable.box(r, { equals: oe });
                                                        return (
                                                            'real' === t &&
                                                                o.subscribe(
                                                                    (0, ie.action)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (e, u) => {
                                                        const r = null != u ? u : l(e),
                                                            n = ie.observable.box(r, { equals: oe });
                                                        return (
                                                            'real' === t &&
                                                                o.subscribe(
                                                                    (0, ie.action)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (e, u) => {
                                                        const r = l(u);
                                                        if (Array.isArray(e)) {
                                                            const n = e.reduce(
                                                                (e, u) => ((e[u] = ie.observable.box(r[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    o.subscribe(
                                                                        (0, ie.action)((u) => {
                                                                            e.forEach((e) => {
                                                                                n[e].set(u[e]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                n
                                                            );
                                                        }
                                                        {
                                                            const n = e,
                                                                a = Object.entries(n),
                                                                s = a.reduce(
                                                                    (e, [u, t]) => (
                                                                        (e[t] = ie.observable.box(r[u], {})), e
                                                                    ),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    o.subscribe(
                                                                        (0, ie.action)((e) => {
                                                                            a.forEach(([u, t]) => {
                                                                                s[t].set(e[u]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                s
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: _,
                                            }),
                                            m = { mode: t, model: d, externalModel: o, cleanup: _ };
                                        return {
                                            model: d,
                                            controls: 'mocks' === t && n ? n.controls(m) : u(m),
                                            externalModel: o,
                                            mode: t,
                                        };
                                    },
                                    d = (0, a.useRef)(!1),
                                    m = (0, a.useState)(r),
                                    E = m[0],
                                    A = m[1],
                                    g = (0, a.useState)(() => _(r, n, l)),
                                    F = g[0],
                                    p = g[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        d.current ? p(_(E, n, l)) : (d.current = !0);
                                    }, [l, E, n]),
                                    (0, a.useEffect)(() => {
                                        A(r);
                                    }, [r]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            F.externalModel.dispose(), c.current.forEach((e) => e());
                                        },
                                        [F],
                                    ),
                                    s().createElement(t.Provider, { value: F }, o)
                                );
                            },
                            () => (0, a.useContext)(t),
                        ];
                    };
                function de(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                const me = de;
                function Ee(e) {
                    var u;
                    return e && 'value' in e && null != (u = e.constructor) && u.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function Ae(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, r) => u(null == e ? void 0 : e.value, t, r));
                }
                const ge = (e, u) =>
                    Object.keys(e).length === Object.keys(u).length &&
                    Object.keys(e).every((t) => Object.prototype.hasOwnProperty.call(u, t) && e[t] === u[t]);
                var Fe = t(6517);
                let pe, De, Be, Ce, he, be, fe;
                var ve;
                !(function (e) {
                    (e.Items = 'items'),
                        (e.Equipment = 'equipment'),
                        (e.Xp = 'xp'),
                        (e.XpFactor = 'xpFactor'),
                        (e.Blueprints = 'blueprints'),
                        (e.BlueprintsAny = 'blueprintsAny'),
                        (e.Goodies = 'goodies'),
                        (e.Berths = 'berths'),
                        (e.Slots = 'slots'),
                        (e.Tokens = 'tokens'),
                        (e.CrewSkins = 'crewSkins'),
                        (e.CrewBooks = 'crewBooks'),
                        (e.Customizations = 'customizations'),
                        (e.CreditsFactor = 'creditsFactor'),
                        (e.Currency = 'currency'),
                        (e.TankmenXp = 'tankmenXP'),
                        (e.TankmenXpFactor = 'tankmenXPFactor'),
                        (e.FreeXpFactor = 'freeXPFactor'),
                        (e.BattleToken = 'battleToken'),
                        (e.HBVehicleUnlock = 'hbUnlockVehicles'),
                        (e.PremiumUniversal = 'premium_universal'),
                        (e.Gold = 'gold'),
                        (e.Credits = 'credits'),
                        (e.Crystal = 'crystal'),
                        (e.FreeXp = 'freeXP'),
                        (e.Premium = 'premium'),
                        (e.PremiumPlus = 'premium_plus'),
                        (e.BattlePassPoints = 'battlePassPoints'),
                        (e.BattlePassSelectToken = 'battlePassSelectToken'),
                        (e.StyleProgressToken = 'styleProgressToken'),
                        (e.TmanToken = 'tmanToken'),
                        (e.NaturalCover = 'naturalCover'),
                        (e.BpCoin = 'bpcoin'),
                        (e.BattlaPassFinalAchievement = 'dossier_achievement'),
                        (e.BattleBadge = 'dossier_badge'),
                        (e.NewYearAlbumsAccess = 'newYearAlbumsAccess'),
                        (e.NewYearFillers = 'ny22Fillers'),
                        (e.NewYearInvoice = 'newYearInvoice'),
                        (e.NewYearToyFragments = 'ny22ToyFragments'),
                        (e.NewYearSlot = 'newYearSlot'),
                        (e.BonusX5 = 'battle_bonus_x5'),
                        (e.CrewBonusX3 = 'crew_bonus_x3'),
                        (e.Vehicles = 'vehicles'),
                        (e.EpicSelectToken = 'epicSelectToken'),
                        (e.CollectionItem = 'collectionItem'),
                        (e.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                        (e.BattleBoosterGift = 'battleBooster_gift'),
                        (e.CosmicLootboxSilver = 'lootBoxToken'),
                        (e.CosmicLootboxCommon = 'cosmic_2024_2'),
                        (e.MayEntitlement100 = 'historical_battles_100'),
                        (e.HistoricalBattleDiscount25 = 'historical_battles_25'),
                        (e.HistoricalBattleDiscount50 = 'historical_battles_50'),
                        (e.HistoricalBattleDiscount75 = 'historical_battles_75');
                })(pe || (pe = {})),
                    (function (e) {
                        (e.Gold = 'gold'),
                            (e.Credits = 'credits'),
                            (e.Crystal = 'crystal'),
                            (e.Premium = 'premium'),
                            (e.PremiumPlus = 'premium_plus'),
                            (e.Vehicles = 'vehicles'),
                            (e.Customizations = 'customizations'),
                            (e.Blueprints = 'blueprints'),
                            (e.BlueprintsAny = 'blueprintsAny'),
                            (e.BlueprintsFinal = 'finalBlueprints'),
                            (e.Goodies = 'goodies'),
                            (e.CrewSkins = 'crewSkins'),
                            (e.Xp = 'xp'),
                            (e.XpFactor = 'xpFactor'),
                            (e.FreeXp = 'freeXP'),
                            (e.FreeXPFactor = 'freeXPFactor'),
                            (e.TankmenXP = 'tankmenXP'),
                            (e.TankmenXPFactor = 'tankmenXPFactor'),
                            (e.DailyXPFactor = 'dailyXPFactor'),
                            (e.CreditsFactor = 'creditsFactor'),
                            (e.Items = 'items'),
                            (e.StrBonus = 'strBonus'),
                            (e.Groups = 'groups'),
                            (e.Berths = 'berths'),
                            (e.Slots = 'slots'),
                            (e.Meta = 'meta'),
                            (e.Tokens = 'tokens'),
                            (e.Dossier = 'dossier'),
                            (e.OneOf = 'oneof'),
                            (e.PremiumUniversal = 'premium_universal'),
                            (e.BadgesGroup = 'badgesGroup'),
                            (e.Entitlements = 'entitlements'),
                            (e.RankedDailyBattles = 'rankedDailyBattles'),
                            (e.RankedBonusBattles = 'rankedBonusBattles'),
                            (e.BattlePassPoints = 'battlePassPoints'),
                            (e.BattleBadge = 'dossier_badge'),
                            (e.BattleAchievement = 'dossier_achievement');
                    })(De || (De = {})),
                    ((ve = Be || (Be = {})).Big = 'big'),
                    (ve.Small = 'small'),
                    (ve.Mini = 'mini'),
                    (ve.S600x450 = 's600x450'),
                    (ve.S400x300 = 's400x300'),
                    (ve.S296x222 = 's296x222'),
                    (ve.S232x174 = 's232x174'),
                    (ve.S180x135 = 's180x135'),
                    (ve.S128x100 = 's128x100'),
                    (ve.S80x80 = 's80x80'),
                    (ve.S48x48 = 's48x48'),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(Ce || (Ce = {})),
                    (function (e) {
                        (e.BATTLE_BOOSTER = 'battleBooster'),
                            (e.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (e.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (e.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (e.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (e.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (e.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (e.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (e.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4');
                    })(he || (he = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(be || (be = {})),
                    (function (e) {
                        (e.BATTLE_BOOSTER = 'battleBooster'),
                            (e.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (e.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (e.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (e.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (e.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (e.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (e.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (e.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4');
                    })(fe || (fe = {}));
                const we = ['children'];
                function Se() {
                    return (
                        (Se =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Se.apply(this, arguments)
                    );
                }
                const ye = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                r,
                                n = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                            return n;
                        })(e, we);
                    return s().createElement(
                        q,
                        Se(
                            {
                                contentId:
                                    R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                        'resId',
                                    ),
                                ignoreShowDelay: !0,
                            },
                            t,
                        ),
                        u,
                    );
                };
                function Pe() {
                    return (
                        (Pe =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Pe.apply(this, arguments)
                    );
                }
                const Re = ({ children: e, tooltipArgs: u, className: t }) => {
                    if (!u) return e;
                    const r = s().createElement('div', { className: t }, e);
                    if (u.header || u.body) return s().createElement(ne, u, r);
                    const n = u.contentId,
                        a = u.args,
                        o = null == a ? void 0 : a.contentId;
                    return n || o
                        ? s().createElement(q, Pe({}, u, { contentId: n || o }), r)
                        : s().createElement(ye, u, r);
                };
                class Te extends s().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? W.B3.GOLD : W.B3.INTEGRAL;
                        const u = W.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                Te.defaultProps = { format: 'integral' };
                const xe = [
                        pe.Items,
                        pe.Equipment,
                        pe.Xp,
                        pe.XpFactor,
                        pe.Blueprints,
                        pe.BlueprintsAny,
                        pe.Goodies,
                        pe.Berths,
                        pe.Slots,
                        pe.Tokens,
                        pe.CrewSkins,
                        pe.CrewBooks,
                        pe.Customizations,
                        pe.CreditsFactor,
                        pe.TankmenXp,
                        pe.TankmenXpFactor,
                        pe.FreeXpFactor,
                        pe.BattleToken,
                        pe.HBVehicleUnlock,
                        pe.PremiumUniversal,
                        pe.NaturalCover,
                        pe.BpCoin,
                        pe.BattlePassSelectToken,
                        pe.BattlaPassFinalAchievement,
                        pe.BattleBadge,
                        pe.BonusX5,
                        pe.CrewBonusX3,
                        pe.NewYearFillers,
                        pe.NewYearInvoice,
                        pe.EpicSelectToken,
                        pe.Comp7TokenWeeklyReward,
                        pe.BattleBoosterGift,
                        pe.CosmicLootboxCommon,
                        pe.CosmicLootboxSilver,
                    ],
                    Le = [pe.Gold, pe.Credits, pe.Crystal, pe.FreeXp],
                    Me = [pe.BattlePassPoints],
                    ke = [pe.PremiumPlus, pe.Premium],
                    Ne = ['engravings', 'backgrounds'],
                    Oe = ['engraving', 'background'],
                    He = (e, u = Be.Small) => {
                        const t = e.name,
                            r = e.type,
                            n = e.value,
                            a = e.icon,
                            s = e.item,
                            o = e.dogTagType,
                            i = e.iconSmall,
                            l = ((e) => {
                                switch (e) {
                                    case Be.S600x450:
                                        return 'c_600x450';
                                    case Be.S400x300:
                                        return 'c_400x300';
                                    case Be.S296x222:
                                        return 'c_296x222';
                                    case Be.S232x174:
                                        return 'c_232x174';
                                    case Be.Big:
                                        return 'c_80x80';
                                    case Be.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(u);
                        switch (t) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${r}_${n}`;
                            case 'premium':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_plus_${n}`;
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_${n}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${s}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${u}.${a}`;
                            case 'tokens':
                            case 'battleToken':
                                return 'big' === u
                                    ? e.iconBig.replace('..', 'img://gui')
                                    : e.iconSmall.replace('..', 'img://gui');
                            case 'hbUnlockVehicles':
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}`;
                            case 'lootBoxToken':
                            case 'customizations':
                            case 'styleProgress':
                            case 'crewSkins':
                            case 'goodies':
                            case 'groups':
                            case 'tmanToken':
                            case 'battlePassSelectToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${a}`;
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${u}.${a}`;
                            case 'entitlements':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${i}`;
                            case 'dogTagComponents':
                                return ((e, u, t) => {
                                    const r = Ne[e];
                                    if (r) {
                                        const n = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(r),
                                            a = n.$dyn(t);
                                        return a ? `${a}` : `${n.$dyn(Oe[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(o, u, a);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${l}.${a}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${l}.${a}`;
                            case 'xp':
                            case 'xpFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.exp`;
                            case 'creditsFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.credits`;
                            case 'tankmenXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.tankmenXP`;
                            case 'dailyXPFactor':
                            case 'freeXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.freeXP`;
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${l}.${a}`;
                        }
                    },
                    Ie = (e, u, t) => {
                        const r = u && { contentId: u };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || u),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !u,
                            },
                            r,
                            t,
                        );
                    },
                    Ge = {
                        base: 'Reward_base_ea',
                        base__s48x48: 'Reward_base__s48x48_46',
                        base__small: 'Reward_base__small_c0',
                        base__s80x80: 'Reward_base__s80x80_ce',
                        base__big: 'Reward_base__big_e5',
                        base__s128x100: 'Reward_base__s128x100_c3',
                        base__s180x135: 'Reward_base__s180x135_7c',
                        base__s232x174: 'Reward_base__s232x174_67',
                        base__s296x222: 'Reward_base__s296x222_78',
                        base__s400x300: 'Reward_base__s400x300_07',
                        base__s600x450: 'Reward_base__s600x450_f8',
                        tooltipWrapper: 'Reward_tooltipWrapper_b5',
                        icon: 'Reward_icon_df',
                        overlay: 'Reward_overlay_68',
                        highlight: 'Reward_highlight_36',
                        image: 'Reward_image_89',
                        info: 'Reward_info_72',
                        info__multi: 'Reward_info__multi_63',
                        info__credits: 'Reward_info__credits_ef',
                        info__gold: 'Reward_info__gold_36',
                        info__crystal: 'Reward_info__crystal_36',
                        info__premiumTank: 'Reward_info__premiumTank_d3',
                        timer: 'Reward_timer_d3',
                    },
                    Ue = ({
                        name: e,
                        image: u,
                        isPeriodic: t = !1,
                        size: r = Be.Big,
                        special: n,
                        value: a,
                        valueType: o,
                        style: i,
                        className: l,
                        classNames: c,
                        tooltipArgs: _,
                        periodicIconTooltipArgs: d,
                    }) => {
                        const m = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case he.BATTLE_BOOSTER:
                                    case he.BATTLE_BOOSTER_REPLACE:
                                        return be.BATTLE_BOOSTER;
                                }
                            })(n),
                            E = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case he.BATTLE_BOOSTER:
                                        return fe.BATTLE_BOOSTER;
                                    case he.BATTLE_BOOSTER_REPLACE:
                                        return fe.BATTLE_BOOSTER_REPLACE;
                                    case he.BUILT_IN_EQUIPMENT:
                                        return fe.BUILT_IN_EQUIPMENT;
                                    case he.EQUIPMENT_PLUS:
                                        return fe.EQUIPMENT_PLUS;
                                    case he.EQUIPMENT_TROPHY_BASIC:
                                        return fe.EQUIPMENT_TROPHY_BASIC;
                                    case he.EQUIPMENT_TROPHY_UPGRADED:
                                        return fe.EQUIPMENT_TROPHY_UPGRADED;
                                    case he.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return fe.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case he.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return fe.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case he.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return fe.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case he.PROGRESSION_STYLE_UPGRADED_1:
                                        return fe.PROGRESSION_STYLE_UPGRADED_1;
                                    case he.PROGRESSION_STYLE_UPGRADED_2:
                                        return fe.PROGRESSION_STYLE_UPGRADED_2;
                                    case he.PROGRESSION_STYLE_UPGRADED_3:
                                        return fe.PROGRESSION_STYLE_UPGRADED_3;
                                    case he.PROGRESSION_STYLE_UPGRADED_4:
                                        return fe.PROGRESSION_STYLE_UPGRADED_4;
                                }
                            })(n),
                            A = ((e, u) => {
                                if (void 0 === e) return null;
                                switch (u) {
                                    case Ce.MULTI: {
                                        const u = Number(e);
                                        return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                                    }
                                    case Ce.CURRENCY:
                                    case Ce.NUMBER:
                                        return s().createElement(Te, { format: 'integral', value: Number(e) });
                                    case Ce.PREMIUM_PLUS: {
                                        const u = Number(e);
                                        return isNaN(u) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(a, o);
                        return s().createElement(
                            'div',
                            { className: C()(Ge.base, Ge[`base__${r}`], l), style: i },
                            s().createElement(
                                Re,
                                { tooltipArgs: _, className: Ge.tooltipWrapper },
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement(
                                        'div',
                                        { className: C()(Ge.image, null == c ? void 0 : c.image) },
                                        m &&
                                            s().createElement('div', {
                                                className: C()(Ge.highlight, null == c ? void 0 : c.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${m}_highlight)`,
                                                },
                                            }),
                                        u &&
                                            s().createElement('div', {
                                                className: C()(Ge.icon, null == c ? void 0 : c.rewardIcon),
                                                style: { backgroundImage: `url(${u})` },
                                            }),
                                        E &&
                                            s().createElement('div', {
                                                className: C()(Ge.overlay, null == c ? void 0 : c.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${E}_overlay)`,
                                                },
                                            }),
                                    ),
                                    A &&
                                        s().createElement(
                                            'div',
                                            {
                                                className: C()(
                                                    Ge.info,
                                                    Ge[`info__${e}`],
                                                    o === Ce.MULTI && Ge.info__multi,
                                                    null == c ? void 0 : c.info,
                                                ),
                                            },
                                            A,
                                        ),
                                ),
                            ),
                            t &&
                                s().createElement(
                                    Re,
                                    { tooltipArgs: d },
                                    s().createElement('div', {
                                        className: C()(Ge.timer, null == c ? void 0 : c.periodicIcon),
                                    }),
                                ),
                        );
                    };
                function ze() {
                    return (
                        (ze =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        ze.apply(this, arguments)
                    );
                }
                const We = (e) => ('overlayType' in e ? e.overlayType : void 0),
                    $e = [pe.BattleBadge, pe.Vehicles, pe.MayEntitlement100],
                    Ve = [
                        pe.TmanToken,
                        pe.HistoricalBattleDiscount25,
                        pe.HistoricalBattleDiscount50,
                        pe.HistoricalBattleDiscount75,
                        pe.BattlaPassFinalAchievement,
                    ];
                function je(e, u, t = !1) {
                    const r = y(),
                        n = ((e, u) => u || (f.Medium, Be.Small))(r.mediaSize, u),
                        a =
                            (s = r.remScreenWidth) < f.Small
                                ? Be.S296x222
                                : s >= f.Small && s < f.Large
                                  ? Be.S400x300
                                  : Be.S600x450;
                    var s;
                    const o = 3 === e.length,
                        i = e.findIndex((e) => Ve.includes(e.name));
                    if (-1 !== i) {
                        const u = e.splice(i, 1)[0],
                            t = Math.floor(e.length / 2);
                        e.splice(t, 0, u);
                    }
                    const l = Ae(e, (e, u) => {
                            let r = ze({}, e);
                            return Object.assign({}, r, {
                                special: We(r),
                                image: He(r, t && 1 === u && o ? a : n),
                                size: t && 1 === u && o ? a : n,
                                valueType:
                                    ((s = r.name),
                                    xe.includes(s)
                                        ? Ce.MULTI
                                        : Le.includes(s)
                                          ? Ce.CURRENCY
                                          : Me.includes(s)
                                            ? Ce.NUMBER
                                            : ke.includes(s)
                                              ? Ce.PREMIUM_PLUS
                                              : Ce.STRING),
                                tooltipArgs: Ie({ tooltipId: r.tooltipId, tooltipContentId: r.tooltipContentId }),
                            });
                            var s;
                        }),
                        c = l.filter(({ name: e }) => !$e.includes(e));
                    return { parsedRewards: l, filteredRewards: c, imageSize: n };
                }
                const Xe = {
                    base: 'Separator_base_c9',
                    separator: 'Separator_separator_01',
                    base__completedBattleQuests: 'Separator_base__completedBattleQuests_ca',
                    separator__left: 'Separator_separator__left_45',
                    base__inProgressBattleQuests: 'Separator_base__inProgressBattleQuests_f5',
                    base__condition: 'Separator_base__condition_c3',
                    base__awards: 'Separator_base__awards_fb',
                    base__completed: 'Separator_base__completed_76',
                    show: 'Separator_show_7e',
                    base__completedWasVisited: 'Separator_base__completedWasVisited_03',
                    separator__right: 'Separator_separator__right_e1',
                    ellipse: 'Separator_ellipse_75',
                    firstLayer: 'Separator_firstLayer_9d',
                    secondLayer: 'Separator_secondLayer_b9',
                    'add-blur': 'Separator_add-blur_31',
                    hide: 'Separator_hide_e7',
                };
                let Ye;
                !(function (e) {
                    (e.Awards = 'awards'),
                        (e.Condition = 'condition'),
                        (e.CompletedBattleQuests = 'completedBattleQuests'),
                        (e.InProgressBattleQuests = 'inProgressBattleQuests');
                })(Ye || (Ye = {}));
                const qe = ({ children: e, statusAnimation: u, type: t }) =>
                        s().createElement(
                            'div',
                            { className: C()(Xe.base, Xe[`base__${t}`], Xe[`base__${u}`]) },
                            s().createElement(
                                'div',
                                { className: C()(Xe.separator, Xe.separator__left) },
                                s().createElement(
                                    'div',
                                    { className: Xe.ellipse },
                                    s().createElement(
                                        'div',
                                        { className: Xe.firstLayer },
                                        s().createElement('div', { className: Xe.secondLayer }),
                                    ),
                                ),
                            ),
                            e,
                            s().createElement(
                                'div',
                                { className: C()(Xe.separator, Xe.separator__right) },
                                s().createElement(
                                    'div',
                                    { className: Xe.ellipse },
                                    s().createElement(
                                        'div',
                                        { className: Xe.firstLayer },
                                        s().createElement('div', { className: Xe.secondLayer }),
                                    ),
                                ),
                            ),
                        ),
                    Ke = {
                        base: 'TaskBattle_base_28',
                        base__completed: 'TaskBattle_base__completed_f4',
                        'add-shadow': 'TaskBattle_add-shadow_d9',
                        base__completedWasVisited: 'TaskBattle_base__completedWasVisited_7d',
                        base__mediaMediumHeight: 'TaskBattle_base__mediaMediumHeight_00',
                        taskType: 'TaskBattle_taskType_45',
                        conditions: 'TaskBattle_conditions_8f',
                        awards: 'TaskBattle_awards_e2',
                        'add-blur': 'TaskBattle_add-blur_ef',
                        awardsList: 'TaskBattle_awardsList_b5',
                        award: 'TaskBattle_award_b8',
                        hide: 'TaskBattle_hide_c0',
                        show: 'TaskBattle_show_7d',
                    };
                let Qe;
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(Qe || (Qe = {}));
                const Ze = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    Je = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    eu = (e, u, t = Qe.left) => e.split(u).reduce(t === Qe.left ? Ze : Je, []),
                    uu = (() => {
                        const e = new RegExp(
                            /[\(\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?[ %\+\x2D-9A-Za-\{\}\xA0\xC0-\u0237\u2013\u2014\u2026]+[\)\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3002\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\uFF01\uFF0C\uFF1A\uFF1B\uFF1F\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?/gmu
                                .source +
                                '|' +
                                /[\(\xAB\u201C\u275D][\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}][\0-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u3004\u3006\u3008-\u3020\u302A-\u3037\u303C-\u33FF\u4DC0-\u4DFF\uA000-\uF8FF\uFA6E\uFA6F\uFADA-\u{16FE1}\u{16FE4}-\u{16FEF}\u{16FF2}-\u{1FFFF}\u{2A6E0}-\u{2A6FF}\u{2B739}-\u{2B73F}\u{2B81E}\u{2B81F}\u{2CEA2}-\u{2CEAF}\u{2EBE1}-\u{2F7FF}\u{2FA1E}-\u{2FFFF}\u{3134B}-\u{10FFFF}]?|[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}][\0-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u3004\u3006\u3008-\u3020\u302A-\u3037\u303C-\u33FF\u4DC0-\u4DFF\uA000-\uF8FF\uFA6E\uFA6F\uFADA-\u{16FE1}\u{16FE4}-\u{16FEF}\u{16FF2}-\u{1FFFF}\u{2A6E0}-\u{2A6FF}\u{2B739}-\u{2B73F}\u{2B81E}\u{2B81F}\u{2CEA2}-\u{2CEAF}\u{2EBE1}-\u{2F7FF}\u{2FA1E}-\u{2FFFF}\u{3134B}-\u{10FFFF}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?[\)\xBB\u201D\u275E][\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?/gmu
                                    .source +
                                '|' +
                                /[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u{10000}-\u{1000B}\u{1000D}-\u{10026}\u{10028}-\u{1003A}\u{1003C}\u{1003D}\u{1003F}-\u{1004D}\u{10050}-\u{1005D}\u{10080}-\u{100FA}\u{10280}-\u{1029C}\u{102A0}-\u{102D0}\u{10300}-\u{1031F}\u{1032D}-\u{10340}\u{10342}-\u{10349}\u{10350}-\u{10375}\u{10380}-\u{1039D}\u{103A0}-\u{103C3}\u{103C8}-\u{103CF}\u{10400}-\u{1049D}\u{104B0}-\u{104D3}\u{104D8}-\u{104FB}\u{10500}-\u{10527}\u{10530}-\u{10563}\u{10570}-\u{1057A}\u{1057C}-\u{1058A}\u{1058C}-\u{10592}\u{10594}\u{10595}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10600}-\u{10736}\u{10740}-\u{10755}\u{10760}-\u{10767}\u{10780}-\u{10785}\u{10787}-\u{107B0}\u{107B2}-\u{107BA}\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10860}-\u{10876}\u{10880}-\u{1089E}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{10900}-\u{10915}\u{10920}-\u{10939}\u{10980}-\u{109B7}\u{109BE}\u{109BF}\u{10A00}\u{10A10}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A60}-\u{10A7C}\u{10A80}-\u{10A9C}\u{10AC0}-\u{10AC7}\u{10AC9}-\u{10AE4}\u{10B00}-\u{10B35}\u{10B40}-\u{10B55}\u{10B60}-\u{10B72}\u{10B80}-\u{10B91}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10D00}-\u{10D23}\u{10E80}-\u{10EA9}\u{10EB0}\u{10EB1}\u{10F00}-\u{10F1C}\u{10F27}\u{10F30}-\u{10F45}\u{10F70}-\u{10F81}\u{10FB0}-\u{10FC4}\u{10FE0}-\u{10FF6}\u{11003}-\u{11037}\u{11071}\u{11072}\u{11075}\u{11083}-\u{110AF}\u{110D0}-\u{110E8}\u{11103}-\u{11126}\u{11144}\u{11147}\u{11150}-\u{11172}\u{11176}\u{11183}-\u{111B2}\u{111C1}-\u{111C4}\u{111DA}\u{111DC}\u{11200}-\u{11211}\u{11213}-\u{1122B}\u{11280}-\u{11286}\u{11288}\u{1128A}-\u{1128D}\u{1128F}-\u{1129D}\u{1129F}-\u{112A8}\u{112B0}-\u{112DE}\u{11305}-\u{1130C}\u{1130F}\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}\u{11333}\u{11335}-\u{11339}\u{1133D}\u{11350}\u{1135D}-\u{11361}\u{11400}-\u{11434}\u{11447}-\u{1144A}\u{1145F}-\u{11461}\u{11480}-\u{114AF}\u{114C4}\u{114C5}\u{114C7}\u{11580}-\u{115AE}\u{115D8}-\u{115DB}\u{11600}-\u{1162F}\u{11644}\u{11680}-\u{116AA}\u{116B8}\u{11700}-\u{1171A}\u{11740}-\u{11746}\u{11800}-\u{1182B}\u{118A0}-\u{118DF}\u{118FF}-\u{11906}\u{11909}\u{1190C}-\u{11913}\u{11915}\u{11916}\u{11918}-\u{1192F}\u{1193F}\u{11941}\u{119A0}-\u{119A7}\u{119AA}-\u{119D0}\u{119E1}\u{119E3}\u{11A00}\u{11A0B}-\u{11A32}\u{11A3A}\u{11A50}\u{11A5C}-\u{11A89}\u{11A9D}\u{11AB0}-\u{11AF8}\u{11C00}-\u{11C08}\u{11C0A}-\u{11C2E}\u{11C40}\u{11C72}-\u{11C8F}\u{11D00}-\u{11D06}\u{11D08}\u{11D09}\u{11D0B}-\u{11D30}\u{11D46}\u{11D60}-\u{11D65}\u{11D67}\u{11D68}\u{11D6A}-\u{11D89}\u{11D98}\u{11EE0}-\u{11EF2}\u{11FB0}\u{12000}-\u{12399}\u{12480}-\u{12543}\u{12F90}-\u{12FF0}\u{13000}-\u{1342E}\u{14400}-\u{14646}\u{16800}-\u{16A38}\u{16A40}-\u{16A5E}\u{16A70}-\u{16ABE}\u{16AD0}-\u{16AED}\u{16B00}-\u{16B2F}\u{16B40}-\u{16B43}\u{16B63}-\u{16B77}\u{16B7D}-\u{16B8F}\u{16E40}-\u{16E7F}\u{16F00}-\u{16F4A}\u{16F50}\u{16F93}-\u{16F9F}\u{16FE0}\u{16FE1}\u{16FE3}\u{17000}-\u{187F7}\u{18800}-\u{18CD5}\u{18D00}-\u{18D08}\u{1AFF0}-\u{1AFF3}\u{1AFF5}-\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B000}-\u{1B122}\u{1B150}-\u{1B152}\u{1B164}-\u{1B167}\u{1B170}-\u{1B2FB}\u{1BC00}-\u{1BC6A}\u{1BC70}-\u{1BC7C}\u{1BC80}-\u{1BC88}\u{1BC90}-\u{1BC99}\u{1D400}-\u{1D454}\u{1D456}-\u{1D49C}\u{1D49E}\u{1D49F}\u{1D4A2}\u{1D4A5}\u{1D4A6}\u{1D4A9}-\u{1D4AC}\u{1D4AE}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D505}\u{1D507}-\u{1D50A}\u{1D50D}-\u{1D514}\u{1D516}-\u{1D51C}\u{1D51E}-\u{1D539}\u{1D53B}-\u{1D53E}\u{1D540}-\u{1D544}\u{1D546}\u{1D54A}-\u{1D550}\u{1D552}-\u{1D6A5}\u{1D6A8}-\u{1D6C0}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6FA}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D734}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D76E}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D7A8}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7CB}\u{1DF00}-\u{1DF1E}\u{1E100}-\u{1E12C}\u{1E137}-\u{1E13D}\u{1E14E}\u{1E290}-\u{1E2AD}\u{1E2C0}-\u{1E2EB}\u{1E7E0}-\u{1E7E6}\u{1E7E8}-\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}-\u{1E7FE}\u{1E800}-\u{1E8C4}\u{1E900}-\u{1E943}\u{1E94B}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[ \):;\u2022\u3001\u3002\u300A-\u300D\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]|[\(,1A-Za-\{\}\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u{10000}-\u{1000B}\u{1000D}-\u{10026}\u{10028}-\u{1003A}\u{1003C}\u{1003D}\u{1003F}-\u{1004D}\u{10050}-\u{1005D}\u{10080}-\u{100FA}\u{10280}-\u{1029C}\u{102A0}-\u{102D0}\u{10300}-\u{1031F}\u{1032D}-\u{10340}\u{10342}-\u{10349}\u{10350}-\u{10375}\u{10380}-\u{1039D}\u{103A0}-\u{103C3}\u{103C8}-\u{103CF}\u{10400}-\u{1049D}\u{104B0}-\u{104D3}\u{104D8}-\u{104FB}\u{10500}-\u{10527}\u{10530}-\u{10563}\u{10570}-\u{1057A}\u{1057C}-\u{1058A}\u{1058C}-\u{10592}\u{10594}\u{10595}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10600}-\u{10736}\u{10740}-\u{10755}\u{10760}-\u{10767}\u{10780}-\u{10785}\u{10787}-\u{107B0}\u{107B2}-\u{107BA}\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10860}-\u{10876}\u{10880}-\u{1089E}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{10900}-\u{10915}\u{10920}-\u{10939}\u{10980}-\u{109B7}\u{109BE}\u{109BF}\u{10A00}\u{10A10}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A60}-\u{10A7C}\u{10A80}-\u{10A9C}\u{10AC0}-\u{10AC7}\u{10AC9}-\u{10AE4}\u{10B00}-\u{10B35}\u{10B40}-\u{10B55}\u{10B60}-\u{10B72}\u{10B80}-\u{10B91}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10D00}-\u{10D23}\u{10E80}-\u{10EA9}\u{10EB0}\u{10EB1}\u{10F00}-\u{10F1C}\u{10F27}\u{10F30}-\u{10F45}\u{10F70}-\u{10F81}\u{10FB0}-\u{10FC4}\u{10FE0}-\u{10FF6}\u{11003}-\u{11037}\u{11071}\u{11072}\u{11075}\u{11083}-\u{110AF}\u{110D0}-\u{110E8}\u{11103}-\u{11126}\u{11144}\u{11147}\u{11150}-\u{11172}\u{11176}\u{11183}-\u{111B2}\u{111C1}-\u{111C4}\u{111DA}\u{111DC}\u{11200}-\u{11211}\u{11213}-\u{1122B}\u{11280}-\u{11286}\u{11288}\u{1128A}-\u{1128D}\u{1128F}-\u{1129D}\u{1129F}-\u{112A8}\u{112B0}-\u{112DE}\u{11305}-\u{1130C}\u{1130F}\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}\u{11333}\u{11335}-\u{11339}\u{1133D}\u{11350}\u{1135D}-\u{11361}\u{11400}-\u{11434}\u{11447}-\u{1144A}\u{1145F}-\u{11461}\u{11480}-\u{114AF}\u{114C4}\u{114C5}\u{114C7}\u{11580}-\u{115AE}\u{115D8}-\u{115DB}\u{11600}-\u{1162F}\u{11644}\u{11680}-\u{116AA}\u{116B8}\u{11700}-\u{1171A}\u{11740}-\u{11746}\u{11800}-\u{1182B}\u{118A0}-\u{118DF}\u{118FF}-\u{11906}\u{11909}\u{1190C}-\u{11913}\u{11915}\u{11916}\u{11918}-\u{1192F}\u{1193F}\u{11941}\u{119A0}-\u{119A7}\u{119AA}-\u{119D0}\u{119E1}\u{119E3}\u{11A00}\u{11A0B}-\u{11A32}\u{11A3A}\u{11A50}\u{11A5C}-\u{11A89}\u{11A9D}\u{11AB0}-\u{11AF8}\u{11C00}-\u{11C08}\u{11C0A}-\u{11C2E}\u{11C40}\u{11C72}-\u{11C8F}\u{11D00}-\u{11D06}\u{11D08}\u{11D09}\u{11D0B}-\u{11D30}\u{11D46}\u{11D60}-\u{11D65}\u{11D67}\u{11D68}\u{11D6A}-\u{11D89}\u{11D98}\u{11EE0}-\u{11EF2}\u{11FB0}\u{12000}-\u{12399}\u{12480}-\u{12543}\u{12F90}-\u{12FF0}\u{13000}-\u{1342E}\u{14400}-\u{14646}\u{16800}-\u{16A38}\u{16A40}-\u{16A5E}\u{16A70}-\u{16ABE}\u{16AD0}-\u{16AED}\u{16B00}-\u{16B2F}\u{16B40}-\u{16B43}\u{16B63}-\u{16B77}\u{16B7D}-\u{16B8F}\u{16E40}-\u{16E7F}\u{16F00}-\u{16F4A}\u{16F50}\u{16F93}-\u{16F9F}\u{16FE0}\u{16FE1}\u{16FE3}\u{17000}-\u{187F7}\u{18800}-\u{18CD5}\u{18D00}-\u{18D08}\u{1AFF0}-\u{1AFF3}\u{1AFF5}-\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B000}-\u{1B122}\u{1B150}-\u{1B152}\u{1B164}-\u{1B167}\u{1B170}-\u{1B2FB}\u{1BC00}-\u{1BC6A}\u{1BC70}-\u{1BC7C}\u{1BC80}-\u{1BC88}\u{1BC90}-\u{1BC99}\u{1D400}-\u{1D454}\u{1D456}-\u{1D49C}\u{1D49E}\u{1D49F}\u{1D4A2}\u{1D4A5}\u{1D4A6}\u{1D4A9}-\u{1D4AC}\u{1D4AE}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D505}\u{1D507}-\u{1D50A}\u{1D50D}-\u{1D514}\u{1D516}-\u{1D51C}\u{1D51E}-\u{1D539}\u{1D53B}-\u{1D53E}\u{1D540}-\u{1D544}\u{1D546}\u{1D54A}-\u{1D550}\u{1D552}-\u{1D6A5}\u{1D6A8}-\u{1D6C0}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6FA}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D734}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D76E}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D7A8}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7CB}\u{1DF00}-\u{1DF1E}\u{1E100}-\u{1E12C}\u{1E137}-\u{1E13D}\u{1E14E}\u{1E290}-\u{1E2AD}\u{1E2C0}-\u{1E2EB}\u{1E7E0}-\u{1E7E6}\u{1E7E8}-\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}-\u{1E7FE}\u{1E800}-\u{1E8C4}\u{1E900}-\u{1E943}\u{1E94B}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]/gmu
                                    .source +
                                '|' +
                                /[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]/gmu
                                    .source,
                            'gum',
                        );
                        return (u) =>
                            u
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(e);
                    })(),
                    tu = ['zh_cn', 'zh_sg', 'zh_tw'],
                    ru = (e, u, t) =>
                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                            t && e in t
                                ? t[e]
                                : ((e, u = Qe.left) => {
                                      const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                      return tu.includes(t)
                                          ? uu(e)
                                          : ((e, u = Qe.left) => {
                                                let t = [];
                                                const r =
                                                        /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                    n = e.replace(/&nbsp;/g, ' ');
                                                return (
                                                    eu(n, /( )/, u).forEach((e) => (t = t.concat(eu(e, r, Qe.left)))), t
                                                );
                                            })(e, u);
                                  })(e, u),
                        ),
                    nu = ({ binding: e, text: u = '', classMix: t, alignment: r = Qe.left }) =>
                        null === u
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : s().createElement(
                                  a.Fragment,
                                  null,
                                  u.split('\n').map((u, n) =>
                                      s().createElement(
                                          'div',
                                          { className: C()('FormatText_base_d0', t), key: `${u}-${n}` },
                                          ru(u, r, e).map((e, u) =>
                                              s().createElement(a.Fragment, { key: `${u}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              ),
                    au = { 0: 'firstCondition', 1: 'secondCondition' },
                    su = (e, u) => {
                        const t = [];
                        if ('or' === e.conditionType || 'and' === e.conditionType)
                            e.items.forEach((e) => {
                                const r = Ee(e);
                                r && t.push(...su(r, u));
                            });
                        else {
                            const r = e.descrData;
                            let n = e,
                                a = n.titleData,
                                s = n.current,
                                o = n.total,
                                i = n.earned,
                                l = n.iconKey;
                            const c = de(u, 0);
                            c &&
                                ((a = r || c.descrData),
                                (l = l || c.iconKey),
                                (s = c.current),
                                (o = c.total),
                                (i = c.earned)),
                                0 === o && (a = r),
                                t.push({ condition: a, lastValue: i, currentValue: s, maxValue: o, icon: l });
                        }
                        return t;
                    },
                    ou = (0, Fe.computedFn)((e, u) => {
                        for (let t = 0; t < u.length; t++) if (e < u[t]) return t;
                        return u.length + 1;
                    }),
                    iu = (e) => ('secondCondition' in e ? 'multiConditions' : 'oneCondition'),
                    lu = {
                        base: 'ProgressBar_base_45',
                        base__medium: 'ProgressBar_base__medium_62',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__medium: 'ProgressBar_background__medium_6e',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let cu, _u;
                !(function (e) {
                    (e.Small = 'small'), (e.Medium = 'medium'), (e.Big = 'big'), (e.Default = 'big');
                })(cu || (cu = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(_u || (_u = {}));
                const du = ({ size: e = cu.Default }) =>
                        s().createElement('div', { className: C()(lu.background, lu[`background__${e}`]) }),
                    mu = {
                        base: 'ProgressBarBlink_base_24',
                        base__medium: 'ProgressBarBlink_base__medium_ec',
                        base__small: 'ProgressBarBlink_base__small_0f',
                    },
                    Eu = ({ size: e }) => {
                        const u = C()(mu.base, mu[`base__${e}`]);
                        return s().createElement('div', { className: u });
                    },
                    Au = {
                        base: 'ProgressLineImpose_base_80',
                        base__disabled: 'ProgressLineImpose_base__disabled_cc',
                        base__finished: 'ProgressLineImpose_base__finished_d4',
                        base__withoutBounce: 'ProgressLineImpose_base__withoutBounce_56',
                        pattern: 'ProgressLineImpose_pattern_1c',
                        base__small: 'ProgressLineImpose_base__small_55',
                        gradient: 'ProgressLineImpose_gradient_35',
                        glow: 'ProgressLineImpose_glow_a5',
                        glow__left: 'ProgressLineImpose_glow__left_d8',
                    },
                    gu = (0, a.memo)(
                        ({ size: e, lineRef: u, disabled: t, baseStyles: r, isComplete: n, withoutBounce: a }) => {
                            const o = C()(
                                    Au.base,
                                    Au[`base__${e}`],
                                    t && Au.base__disabled,
                                    n && Au.base__finished,
                                    a && Au.base__withoutBounce,
                                ),
                                i = !t && !n;
                            return s().createElement(
                                'div',
                                { className: o, style: r, ref: u },
                                s().createElement('div', { className: Au.pattern }),
                                s().createElement('div', { className: Au.gradient }),
                                i && s().createElement(Eu, { size: e }),
                            );
                        },
                    ),
                    Fu = ({ size: e, value: u, lineRef: t, disabled: r, onComplete: n }) => {
                        const o = (0, a.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                            i = 100 === u;
                        return (
                            (0, a.useEffect)(() => {
                                i && n && n();
                            }, [i, n]),
                            s().createElement(gu, { size: e, disabled: r, baseStyles: o, isComplete: i, lineRef: t })
                        );
                    },
                    pu = (e, u) => {
                        let t;
                        const r = setTimeout(() => {
                            t = e();
                        }, u);
                        return () => {
                            'function' == typeof t && t(), clearTimeout(r);
                        };
                    };
                let Du, Bu;
                !(function (e) {
                    (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
                })(Du || (Du = {})),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                    })(Bu || (Bu = {}));
                const Cu = (0, a.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: r,
                            size: n,
                            to: o,
                            onEndAnimation: i,
                            onChangeAnimationState: l,
                        }) => {
                            const c = o < r,
                                _ = (0, a.useState)(Bu.Idle),
                                d = _[0],
                                m = _[1],
                                E = d === Bu.In,
                                A = d === Bu.End,
                                g = d === Bu.Idle,
                                F = (0, a.useCallback)(
                                    (e) => {
                                        m(e), l && l(e);
                                    },
                                    [l],
                                );
                            (0, a.useEffect)(() => {
                                if (g && !t)
                                    return pu(() => {
                                        F(Bu.In);
                                    }, u);
                            }, [F, t, g, u]),
                                (0, a.useEffect)(() => {
                                    if (E)
                                        return pu(() => {
                                            i && i(), F(Bu.End);
                                        }, e + u);
                                }, [F, E, i, u, e]);
                            const p = (0, a.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                D = (0, a.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                B = (0, a.useMemo)(
                                    () => ({ width: `${Math.abs(r - o)}%`, left: `${c ? o : r}%` }),
                                    [r, c, o],
                                );
                            return A
                                ? null
                                : s().createElement(
                                      'div',
                                      { className: 'ProgressBarDeltaSimple_base_6c', style: B },
                                      s().createElement(
                                          'div',
                                          { style: g ? p : D, className: 'ProgressBarDeltaSimple_delta_99' },
                                          s().createElement(Eu, { size: n }),
                                      ),
                                  );
                        },
                    ),
                    hu = (0, a.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: r,
                            disabled: n,
                            isComplete: o,
                            animationSettings: i,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const _ = (0, a.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${i.line.duration}ms`,
                                    transitionDelay: `${i.line.delay}ms`,
                                }),
                                [i.line.delay, i.line.duration, e],
                            );
                            return s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(gu, {
                                    size: u,
                                    lineRef: r,
                                    disabled: n,
                                    isComplete: o,
                                    baseStyles: _,
                                }),
                                t >= 0 &&
                                    s().createElement(Cu, {
                                        transitionDuration: i.delta.duration,
                                        transitionDelay: i.delta.delay,
                                        freezed: i.freezed,
                                        from: t,
                                        size: u,
                                        to: e,
                                        onChangeAnimationState: l,
                                        onEndAnimation: c,
                                    }),
                            );
                        },
                    ),
                    bu = (e) => (e ? { left: 0 } : { right: 0 }),
                    fu = (e, u) => (e ? { right: 100 - u + '%' } : { left: `${u}%` }),
                    vu = (e) => ({ transitionDuration: `${e}ms` }),
                    wu = (0, a.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: r,
                            size: n,
                            to: o,
                            onEndAnimation: i,
                            onChangeAnimationState: l,
                            className: c,
                        }) => {
                            const _ = o < r,
                                d = (0, a.useState)(Du.Idle),
                                m = d[0],
                                E = d[1],
                                A = m === Du.End,
                                g = m === Du.Idle,
                                F = m === Du.Grow,
                                p = m === Du.Shrink,
                                D = (0, a.useCallback)(
                                    (e) => {
                                        E(e), l && l(e);
                                    },
                                    [l],
                                ),
                                B = (0, a.useCallback)(
                                    (e, u) =>
                                        pu(() => {
                                            D(e);
                                        }, u),
                                    [D],
                                );
                            (0, a.useEffect)(() => {
                                if (!t)
                                    return g
                                        ? B(Du.Grow, u)
                                        : F
                                          ? B(Du.Shrink, e)
                                          : p
                                            ? B(Du.End, e)
                                            : void (A && i && i());
                            }, [B, t, A, F, g, p, i, u, e]);
                            const h = (0, a.useMemo)(() => Object.assign({ width: '100%' }, vu(e), bu(_)), [_, e]),
                                b = (0, a.useMemo)(() => Object.assign({ width: '0%' }, vu(e), bu(_)), [_, e]),
                                f = (0, a.useMemo)(() => Object.assign({ width: '0%' }, fu(_, r), vu(e)), [r, _, e]),
                                v = (0, a.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(o - r)}%` }, fu(_, r), vu(e)),
                                    [r, _, o, e],
                                );
                            if (A) return null;
                            const w = C()(
                                'ProgressBarDeltaGrow_base_7e',
                                c,
                                _ && 0 === o && 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                            );
                            return s().createElement(
                                'div',
                                { style: g ? f : v, className: w },
                                s().createElement(
                                    'div',
                                    { style: p ? b : h, className: 'ProgressBarDeltaGrow_glow_68' },
                                    s().createElement(Eu, { size: n }),
                                ),
                            );
                        },
                    ),
                    Su = (0, a.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: r,
                            disabled: n,
                            isComplete: o,
                            animationSettings: i,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const _ = e < t,
                                d = (0, a.useState)(!1),
                                m = d[0],
                                E = d[1],
                                A = (0, a.useCallback)(
                                    (e) => {
                                        e === Du.Shrink && E(!0), c && c(e);
                                    },
                                    [c],
                                ),
                                g = (0, a.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                F = (0, a.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${i.line.duration}ms` }),
                                    [i.line.duration, e],
                                );
                            return s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(gu, {
                                    size: u,
                                    lineRef: r,
                                    disabled: n,
                                    isComplete: o,
                                    withoutBounce: _ && 0 === e,
                                    baseStyles: m ? F : g,
                                }),
                                t >= 0 &&
                                    s().createElement(wu, {
                                        transitionDuration: i.delta.duration,
                                        transitionDelay: i.delta.delay,
                                        onChangeAnimationState: A,
                                        freezed: i.freezed,
                                        onEndAnimation: l,
                                        from: t,
                                        size: u,
                                        to: e,
                                        className: i.delta.className,
                                    }),
                            );
                        },
                    ),
                    yu = ['onComplete', 'onEndAnimation'];
                function Pu() {
                    return (
                        (Pu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Pu.apply(this, arguments)
                    );
                }
                const Ru = (0, a.memo)((e) => {
                        let u = e.onComplete,
                            t = e.onEndAnimation,
                            r = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, yu);
                        const n = (0, a.useState)(!1),
                            o = n[0],
                            i = n[1],
                            l = (0, a.useCallback)(() => {
                                const e = 100 === r.to;
                                e !== o && i(e), e && u && u(), t && t();
                            }, [o, u, t, r.to]);
                        switch (r.animationSettings.type) {
                            case _u.Simple:
                                return s().createElement(hu, Pu({}, r, { onEndAnimation: l, isComplete: o }));
                            case _u.Growing:
                                return s().createElement(Su, Pu({}, r, { onEndAnimation: l, isComplete: o }));
                            default:
                                return null;
                        }
                    }),
                    Tu = ['onEndAnimation'];
                function xu() {
                    return (
                        (xu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        xu.apply(this, arguments)
                    );
                }
                const Lu = (0, a.memo)((e) => {
                    let u = e.onEndAnimation,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                r,
                                n = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                            return n;
                        })(e, Tu);
                    const r = (0, a.useRef)({}),
                        n = (0, a.useCallback)(() => {
                            (r.current.from = void 0), u && u();
                        }, [u]),
                        o = 'number' == typeof r.current.from ? r.current.from : t.from;
                    return (
                        (r.current.from = o),
                        s().createElement(Ru, xu({}, t, { onEndAnimation: n, key: `${o}-${t.to}`, from: o }))
                    );
                });
                function Mu() {
                    return (
                        (Mu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Mu.apply(this, arguments)
                    );
                }
                const ku = (0, a.memo)(
                        ({
                            size: e,
                            value: u,
                            lineRef: t,
                            disabled: r,
                            deltaFrom: n,
                            animationSettings: a,
                            onEndAnimation: o,
                            onChangeAnimationState: i,
                            onComplete: l,
                        }) => {
                            if (n === u)
                                return s().createElement(Fu, {
                                    key: `${n}-${u}`,
                                    size: e,
                                    value: u,
                                    lineRef: t,
                                    disabled: r,
                                    onComplete: l,
                                });
                            const c = {
                                from: n,
                                to: u,
                                size: e,
                                lineRef: t,
                                disabled: r,
                                animationSettings: a,
                                onComplete: l,
                                onEndAnimation: o,
                                onChangeAnimationState: i,
                            };
                            return a.withStack
                                ? s().createElement(Lu, c)
                                : s().createElement(Ru, Mu({ key: `${n}-${u}` }, c));
                        },
                    ),
                    Nu = (e) => ({
                        '--progress-base': `url(${e.bgImageBase})`,
                        '--progress-line-base': e.line.bgColorBase,
                        '--progress-line-disabled': e.line.bgColorDisabled,
                        '--progress-line-finished': e.line.bgColorFinished,
                        '--progress-pattern-base': `url(${e.pattern.bgImageBase})`,
                        '--progress-pattern-disabled': `url(${e.pattern.bgImageDisabled})`,
                        '--progress-pattern-finished': `url(${e.pattern.bgImageFinished})`,
                        '--progress-glow': `url('${e.glow}')`,
                        '--progress-glow-small': `url('${e.glowSmall}')`,
                        '--progress-delta-color': e.delta.color,
                        '--progress-delta-shadow': e.delta.shadow,
                    }),
                    Ou = (e, u, t) => ('number' == typeof t ? (ae(0, u, t) / u) * 100 : e),
                    Hu = {
                        bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.pattern_grey',
                        line: { bgColorBase: '#f50', bgColorDisabled: 'transparent', bgColorFinished: '#59a011' },
                        pattern: {
                            bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.pattern_orange',
                            bgImageDisabled: 'R.images.gui.maps.icons.components.progress_bar.pattern_disabled',
                            bgImageFinished: 'R.images.gui.maps.icons.components.progress_bar.pattern_green',
                        },
                        glow: 'R.images.gui.maps.icons.components.progress_bar.glow',
                        glowSmall: 'R.images.gui.maps.icons.components.progress_bar.glow_small',
                        delta: {
                            color: '#ffc',
                            shadow: '0 0 4px 1px #ffaa0066, 0 0 9px 1px #ffaa0066, 0 0 12px 2px #ff550066, 0 0 12px 4px #ff000066',
                        },
                    },
                    Iu = {
                        freezed: !1,
                        withStack: !1,
                        type: _u.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    Gu = (0, a.memo)(
                        ({
                            maxValue: e = 100,
                            theme: u = Hu,
                            size: t = cu.Default,
                            animationSettings: r = Iu,
                            disabled: n = !1,
                            withoutBackground: o = !1,
                            value: i,
                            deltaFrom: l,
                            lineRef: c,
                            onChangeAnimationState: _,
                            onEndAnimation: d,
                            onComplete: m,
                        }) => {
                            const E = ((e, u, t) =>
                                (0, a.useMemo)(() => {
                                    const r = (ae(0, u, e) / u) * 100;
                                    return { value: r, deltaFrom: Ou(r, u, t) };
                                }, [t, u, e]))(i, e, l);
                            return s().createElement(
                                'div',
                                { className: C()(lu.base, lu[`base__${t}`]), style: Nu(u) },
                                !o && s().createElement(du, { size: t }),
                                s().createElement(ku, {
                                    size: t,
                                    lineRef: c,
                                    disabled: n,
                                    value: E.value,
                                    deltaFrom: E.deltaFrom,
                                    animationSettings: r,
                                    onEndAnimation: d,
                                    onChangeAnimationState: _,
                                    onComplete: m,
                                }),
                            );
                        },
                    ),
                    Uu = {
                        base: 'Progression_base_ee',
                        base__completedWasVisited: 'Progression_base__completedWasVisited_62',
                        progression: 'Progression_progression_34',
                        base__completed: 'Progression_base__completed_14',
                        hide: 'Progression_hide_ca',
                        progressionNumerical: 'Progression_progressionNumerical_20',
                        progressionNumerical__mediaMediumHeight:
                            'Progression_progressionNumerical__mediaMediumHeight_4b',
                        'finish-color': 'Progression_finish-color_78',
                        currentValue__inProgress: 'Progression_currentValue__inProgress_a3',
                        currentValue: 'Progression_currentValue_05',
                        separator: 'Progression_separator_49',
                        progressBar: 'Progression_progressBar_37',
                        progressBar__mediaMediumHeight: 'Progression_progressBar__mediaMediumHeight_7f',
                        'add-blur': 'Progression_add-blur_f8',
                        show: 'Progression_show_6a',
                        'default-color': 'Progression_default-color_92',
                    },
                    zu = ({
                        currentValue: e,
                        maxValue: u,
                        lastValue: t,
                        statusAnimation: r,
                        updateStatusAnimation: n,
                    }) => {
                        const a = y(),
                            o = a.mediaSize === f.Medium && a.remScreenHeight >= 1024;
                        return s().createElement(
                            'div',
                            { className: C()(Uu.base, Uu[`base__${r}`]) },
                            s().createElement(
                                'div',
                                { className: Uu.progression },
                                s().createElement(
                                    'div',
                                    {
                                        className: C()(
                                            Uu.progressionNumerical,
                                            o && Uu.progressionNumerical__mediaMediumHeight,
                                        ),
                                    },
                                    s().createElement(
                                        'span',
                                        { className: C()(Uu.currentValue, Boolean(e) && Uu.currentValue__inProgress) },
                                        e,
                                    ),
                                    s().createElement(
                                        'span',
                                        { className: Uu.separator },
                                        R.strings.common.common.slash(),
                                    ),
                                    s().createElement('span', null, u),
                                ),
                                Boolean(e) &&
                                    s().createElement(
                                        'div',
                                        { className: C()(Uu.progressBar, o && Uu.progressBar__mediaMediumHeight) },
                                        s().createElement(Gu, {
                                            size: cu.Small,
                                            value: e,
                                            deltaFrom: e - t,
                                            maxValue: u,
                                            onComplete: n,
                                        }),
                                    ),
                            ),
                        );
                    },
                    Wu = {
                        base: 'TaskCondition_base_85',
                        condition: 'TaskCondition_condition_09',
                        text: 'TaskCondition_text_9b',
                        text__completed: 'TaskCondition_text__completed_40',
                        'update-condition': 'TaskCondition_update-condition_e3',
                        text__completedWasVisited: 'TaskCondition_text__completedWasVisited_eb',
                        'add-blur': 'TaskCondition_add-blur_10',
                        hide: 'TaskCondition_hide_60',
                        show: 'TaskCondition_show_ea',
                    },
                    $u = R.strings.historical_battles_progression.progressionView.battleQuests,
                    Vu = (0, U.observer)(
                        ({
                            conditions: e,
                            setStatusAnimation: u,
                            statusAnimation: t,
                            progression: r,
                            conditionIndex: n,
                        }) => {
                            const o = et().model.computes.missionCompletedVisitedStatus,
                                i = (0, a.useCallback)(() => {
                                    u(o(n));
                                }, [n, o, u]),
                                l = Object.assign({}, r, { statusAnimation: t, updateStatusAnimation: i }),
                                c = r.maxValue,
                                _ = r.status,
                                d = 0 === c;
                            return (
                                (0, a.useEffect)(() => {
                                    _ === Qu ? d && i() : u(qu.inProgress);
                                }, [d, u, _, i]),
                                s().createElement(
                                    'div',
                                    { className: Wu.base },
                                    s().createElement(
                                        'div',
                                        { className: Wu.condition },
                                        s().createElement(nu, {
                                            text: `${$u.$dyn(iu(e))}`,
                                            classMix: C()(Wu.text, Wu[`text__${t}`]),
                                            binding: Object.assign({}, e),
                                        }),
                                        Boolean(c) && s().createElement(zu, l),
                                    ),
                                )
                            );
                        },
                    ),
                    ju = {
                        base: 'TaskType_base_ed',
                        ellipse: 'TaskType_ellipse_f9',
                        base__completed: 'TaskType_base__completed_03',
                        hide: 'TaskType_hide_94',
                        base__completedWasVisited: 'TaskType_base__completedWasVisited_b0',
                        typeIcon: 'TaskType_typeIcon_64',
                        completedIcon: 'TaskType_completedIcon_fc',
                        'slide-down': 'TaskType_slide-down_cc',
                        'add-blur': 'TaskType_add-blur_4b',
                        show: 'TaskType_show_6f',
                    },
                    Xu = ({ taskBattleIcon: e, statusAnimation: u }) =>
                        s().createElement(
                            'div',
                            { className: C()(ju.base, ju[`base__${u}`]) },
                            s().createElement('div', { className: ju.ellipse }),
                            s().createElement('div', {
                                className: ju.typeIcon,
                                style: { backgroundImage: `url('${R.images.gui.maps.icons.missions.daily.$dyn(e)}')` },
                            }),
                            s().createElement('div', { className: ju.completedIcon }),
                        );
                function Yu() {
                    return (
                        (Yu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Yu.apply(this, arguments)
                    );
                }
                const qu = {
                    inProgress: 'inProgress',
                    completed: 'completed',
                    completedWasVisited: 'completedWasVisited',
                    allCompletedTasksVisited: 'allCompletedTasksVisited',
                };
                let Ku;
                (0, U.observer)(({ taskConditions: e, awardsBattle: u, taskBattleIcon: t, index: r }) => {
                    const n = (0, a.useState)(qu.inProgress),
                        o = n[0],
                        i = n[1],
                        l = y(),
                        c = je(u, Be.Small).parsedRewards;
                    return s().createElement(
                        'div',
                        {
                            className: C()(
                                Ke.base,
                                Ke[`base__${o}`],
                                l.mediaSize === f.Medium && l.remScreenHeight >= 1024 && Ke.base__mediaMediumHeight,
                            ),
                        },
                        s().createElement(
                            'div',
                            { className: Ke.taskType },
                            s().createElement(Xu, { taskBattleIcon: t, statusAnimation: o }),
                        ),
                        s().createElement(
                            'div',
                            { className: Ke.conditions },
                            Ae(e, ({ conditions: e, progression: u }) =>
                                s().createElement(Vu, {
                                    key: u.currentValue,
                                    conditionIndex: r,
                                    progression: u,
                                    conditions: e,
                                    setStatusAnimation: i,
                                    statusAnimation: o,
                                }),
                            ),
                        ),
                        s().createElement(
                            'div',
                            { className: Ke.awards },
                            s().createElement(
                                qe,
                                { statusAnimation: o, type: Ye.Awards },
                                s().createElement(
                                    'div',
                                    { className: Ke.awardsList },
                                    Ae(c, (e) => s().createElement(Ue, Yu({ className: Ke.award, key: e.name }, e))),
                                ),
                            ),
                        ),
                    );
                }),
                    (function (e) {
                        (e[(e.Scrolling = 0)] = 'Scrolling'),
                            (e[(e.ProgressChange = 1)] = 'ProgressChange'),
                            (e[(e.HighlightCard = 2)] = 'HighlightCard'),
                            (e[(e.ChangeCompleted = 3)] = 'ChangeCompleted'),
                            (e[(e.ProgressFinished = 4)] = 'ProgressFinished'),
                            (e[(e.ProgressAlreadyFinished = 5)] = 'ProgressAlreadyFinished');
                    })(Ku || (Ku = {}));
                const Qu = 'done',
                    Zu = _e()(
                        ({ observableModel: e }) => {
                            const u = Object.assign(
                                    {
                                        root: e.object(),
                                        currentTimerDate: e.primitives(['currentTimerDate'], 'battleQuests'),
                                        battleQuests: e.array('battleQuests.tasksBattle'),
                                        missionsCompletedVisited: e.array('battleQuests.missionsCompletedVisited'),
                                        progressLevels: e.array('progressLevels'),
                                        pointsForLevel: e.array('pointsForLevel'),
                                    },
                                    e.primitives([
                                        'state',
                                        'curProgressPoints',
                                        'prevProgressPoints',
                                        'vehicleDiscount',
                                        'hasVehicle',
                                    ]),
                                    {
                                        progressAnimationState: ie.observable.box(Ku.Scrolling),
                                        hoveredCard: ie.observable.box(void 0),
                                    },
                                ),
                                t = (0, Fe.computedFn)(() => Ae(u.pointsForLevel.get(), (e) => e)),
                                r = (0, Fe.computedFn)(() => ou(u.curProgressPoints.get(), t())),
                                n = (0, Fe.computedFn)(() => ou(u.prevProgressPoints.get(), t())),
                                a = (0, Fe.computedFn)(
                                    (e) => ({
                                        wasProgressionVisited: n() === r(),
                                        isRecentlyCompletedLevel: n() <= e && e <= r(),
                                        isPrevLevel: e <= n(),
                                    }),
                                    { equals: ge },
                                ),
                                s = (0, Fe.computedFn)((e) =>
                                    ae(
                                        0,
                                        u.pointsForLevel.get(),
                                        u.curProgressPoints.get() - e * u.pointsForLevel.get(),
                                    ),
                                ),
                                o = (0, Fe.computedFn)(() =>
                                    Ae(u.battleQuests.get(), (e) => {
                                        const u = ((e, u, t) => {
                                            const r = {};
                                            let n = {},
                                                a = '';
                                            return (
                                                su(e, u).forEach(
                                                    (
                                                        {
                                                            condition: e,
                                                            lastValue: u,
                                                            currentValue: t,
                                                            maxValue: s,
                                                            icon: o,
                                                        },
                                                        i,
                                                    ) => {
                                                        (r[au[i]] = ((e, u) =>
                                                            ru(e, Qe.left)
                                                                .flat()
                                                                .map(
                                                                    (e, t) => (
                                                                        0 === t && u > 0 && (e = e.toLowerCase()), e
                                                                    ),
                                                                ))(e, i)),
                                                            (a = o),
                                                            (n = { lastValue: u, currentValue: t, maxValue: s });
                                                    },
                                                ),
                                                {
                                                    taskConditions: [
                                                        { conditions: r, progression: Object.assign({ status: t }, n) },
                                                    ],
                                                    taskBattleIcon: a,
                                                }
                                            );
                                        })(e.postBattleCondition, e.bonusCondition.items, e.status);
                                        return Object.assign({}, u, { awardsBattle: e.bonuses });
                                    }),
                                ),
                                i = (0, Fe.computedFn)(() => 4 >= o().length),
                                l = (0, Fe.computedFn)(() => {
                                    let e = 0;
                                    return (
                                        o().forEach((u) => {
                                            u.taskConditions[0].progression.status === Qu && ++e;
                                        }),
                                        e
                                    );
                                }),
                                c = (0, Fe.computedFn)(() => {
                                    const e = r(),
                                        t = u.progressLevels.get();
                                    return Ae(u.progressLevels.get(), ({ rewards: u }, r) => ({
                                        level: r + 1,
                                        isCompleted: r < e,
                                        isActive: r === e,
                                        isLast: r === t.length - 1,
                                        rewards: u,
                                    }));
                                }),
                                _ = (0, Fe.computedFn)(() => {
                                    const e = o();
                                    for (let u = 0; u < e.length; u++)
                                        if (e[u].taskConditions[0].progression.status !== Qu) return qu.inProgress;
                                    return (function (e, u) {
                                        if (Array.isArray(e)) return e.every(u);
                                        for (let u = 0; u < e.length; u++) if (!me(e, u)) return !1;
                                        return !0;
                                    })(u.missionsCompletedVisited.get(), (e) => e)
                                        ? qu.allCompletedTasksVisited
                                        : qu.completed;
                                }),
                                d = (0, Fe.computedFn)((e) => {
                                    const t = me(o(), e).taskConditions[0].progression.status,
                                        r = u.missionsCompletedVisited.get()[e].value;
                                    return t !== Qu ? qu.inProgress : r ? qu.completedWasVisited : qu.completed;
                                }),
                                m = (0, Fe.computedFn)(() => {
                                    const e = u.pointsForLevel.get() * u.progressLevels.get().length;
                                    return u.curProgressPoints.get() >= e;
                                }),
                                E = (0, Fe.computedFn)(
                                    () => m() && u.curProgressPoints.get() === u.prevProgressPoints.get(),
                                );
                            return Object.assign({}, u, u.currentTimerDate, {
                                computes: {
                                    levels: c,
                                    battleQuests: o,
                                    currentLevel: r,
                                    levelStatus: a,
                                    currentPointsForLevel: s,
                                    battleTasksStatus: _,
                                    isProgressionCompleted: m,
                                    wasProgressionCompletedBeforeStart: E,
                                    missionCompletedVisitedStatus: d,
                                    areDefaultNumberQuests: i,
                                    numberCompletedQuests: l,
                                    getLevels: t,
                                },
                            });
                        },
                        ({ externalModel: e, model: u }) => {
                            const t = (function (e) {
                                    const u = {};
                                    for (const t in e)
                                        if (Object.prototype.hasOwnProperty.call(e, t)) {
                                            const r = e[t];
                                            u[t] = (0, ie.action)(r);
                                        }
                                    return u;
                                })({
                                    finishScrolling: () => u.progressAnimationState.set(Ku.ProgressChange),
                                    finishProgressionChange: () => u.progressAnimationState.set(Ku.HighlightCard),
                                    finishHighlightCard: () => u.progressAnimationState.set(Ku.ChangeCompleted),
                                    completeProgression: (e) =>
                                        u.progressAnimationState.set(
                                            e ? Ku.ProgressAlreadyFinished : Ku.ProgressFinished,
                                        ),
                                }),
                                r = (0, ie.action)((e) => u.hoveredCard.set(e));
                            return Object.assign({}, t, {
                                updateHoveredCard: r,
                                onClose: e.createCallbackNoArgs('onClose'),
                                onAboutClicked: e.createCallbackNoArgs('onAboutClicked'),
                                onBuyClicked: e.createCallbackNoArgs('onVehicleBuyClicked'),
                                showVehiclePreview: e.createCallbackNoArgs('onPreviewClicked'),
                            });
                        },
                    ),
                    Ju = Zu[0],
                    et = Zu[1];
                var ut = t(9887),
                    tt = t.n(ut);
                const rt = ['xl', 'lg', 'md', 'sm', 'xs'],
                    nt = (e) => e.includes('_') && ((e) => rt.includes(e))(e.split('_').at(-1)),
                    at = [f.ExtraLarge, f.Large, f.Medium, f.Small, f.ExtraSmall],
                    st = (e, u) =>
                        Object.keys(e).reduce((t, r) => {
                            if (r in t) return t;
                            if (nt(r)) {
                                const n = r.split('_').slice(0, -1).join('_');
                                if (n in t) return t;
                                const a = at.indexOf(u),
                                    s = (-1 !== a ? rt.slice(a) : [])
                                        .map((e) => n + '_' + e)
                                        .find((u) => void 0 !== e[u]),
                                    o = s ? e[s] : void 0;
                                return (t[n] = void 0 !== o ? o : e[n]), t;
                            }
                            const n = e[r];
                            return (
                                void 0 === n ||
                                    ((e, u) => rt.some((t) => void 0 !== u[`${e}_${t}`]))(r, e) ||
                                    (t[r] = n),
                                t
                            );
                        }, {}),
                    ot = (e, u = st) => {
                        const t = (
                            (e, u = st) =>
                            (t) => {
                                const r = y().mediaSize,
                                    n = (0, a.useMemo)(() => u(t, r), [t, r]);
                                return s().createElement(e, n);
                            }
                        )(e, u);
                        return s().memo((u) =>
                            Object.keys(u).some((e) => nt(e) && void 0 !== u[e])
                                ? s().createElement(t, u)
                                : s().createElement(e, u),
                        );
                    },
                    it = {
                        mt__XS: 'Box_mt__XS_0c',
                        mt__SM: 'Box_mt__SM_eb',
                        mt__SMp: 'Box_mt__SMp_cf',
                        mt__MD: 'Box_mt__MD_25',
                        mt__MDp: 'Box_mt__MDp_49',
                        mt__LG: 'Box_mt__LG_e8',
                        mt__XL: 'Box_mt__XL_83',
                        mr__XS: 'Box_mr__XS_7c',
                        mr__SM: 'Box_mr__SM_08',
                        mr__SMp: 'Box_mr__SMp_06',
                        mr__MD: 'Box_mr__MD_4a',
                        mr__MDp: 'Box_mr__MDp_b6',
                        mr__LG: 'Box_mr__LG_d0',
                        mr__XL: 'Box_mr__XL_db',
                        mb__XS: 'Box_mb__XS_bb',
                        mb__SM: 'Box_mb__SM_83',
                        mb__SMp: 'Box_mb__SMp_04',
                        mb__MD: 'Box_mb__MD_ed',
                        mb__MDp: 'Box_mb__MDp_65',
                        mb__LG: 'Box_mb__LG_c8',
                        mb__XL: 'Box_mb__XL_f8',
                        ml__XS: 'Box_ml__XS_8a',
                        ml__SM: 'Box_ml__SM_e6',
                        ml__SMp: 'Box_ml__SMp_fb',
                        ml__MD: 'Box_ml__MD_2b',
                        ml__MDp: 'Box_ml__MDp_c7',
                        ml__LG: 'Box_ml__LG_39',
                        ml__XL: 'Box_ml__XL_4a',
                    },
                    lt = [
                        'className',
                        'width',
                        'height',
                        'm',
                        'mt',
                        'mr',
                        'mb',
                        'ml',
                        'column',
                        'row',
                        'flexDirection',
                        'flexStart',
                        'center',
                        'flexEnd',
                        'spaceBetween',
                        'spaceAround',
                        'justifyContent',
                        'alignItems',
                        'alignSelf',
                        'wrap',
                        'flexWrap',
                        'grow',
                        'shrink',
                        'flex',
                        'style',
                        'children',
                    ];
                function ct() {
                    return (
                        (ct =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        ct.apply(this, arguments)
                    );
                }
                Object.keys(tt());
                const _t = {
                        XL: { mt: it.mt__XL, mr: it.mr__XL, mb: it.mb__XL, ml: it.ml__XL },
                        LG: { mt: it.mt__LG, mr: it.mr__LG, mb: it.mb__LG, ml: it.ml__LG },
                        MDp: { mt: it.mt__MDp, mr: it.mr__MDp, mb: it.mb__MDp, ml: it.ml__MDp },
                        MD: { mt: it.mt__MD, mr: it.mr__MD, mb: it.mb__MD, ml: it.ml__MD },
                        SMp: { mt: it.mt__SMp, mr: it.mr__SMp, mb: it.mb__SMp, ml: it.ml__SMp },
                        SM: { mt: it.mt__SM, mr: it.mr__SM, mb: it.mb__SM, ml: it.ml__SM },
                        XS: { mt: it.mt__XS, mr: it.mr__XS, mb: it.mb__XS, ml: it.ml__XS },
                    },
                    dt = (Object.keys(_t), ['mt', 'mr', 'mb', 'ml']),
                    mt = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    Et = ot((e) => {
                        let u = e.className,
                            t = e.width,
                            r = e.height,
                            n = e.m,
                            o = e.mt,
                            i = void 0 === o ? n : o,
                            l = e.mr,
                            c = void 0 === l ? n : l,
                            _ = e.mb,
                            d = void 0 === _ ? n : _,
                            m = e.ml,
                            E = void 0 === m ? n : m,
                            A = e.column,
                            g = e.row,
                            F = e.flexDirection,
                            p = void 0 === F ? (A ? 'column' : g && 'row') || void 0 : F,
                            D = e.flexStart,
                            B = e.center,
                            h = e.flexEnd,
                            b = e.spaceBetween,
                            f = e.spaceAround,
                            v = e.justifyContent,
                            w =
                                void 0 === v
                                    ? (D ? 'flex-start' : B && 'center') ||
                                      (h && 'flex-end') ||
                                      (b && 'space-between') ||
                                      (f && 'space-around') ||
                                      void 0
                                    : v,
                            S = e.alignItems,
                            y = void 0 === S ? (D ? 'flex-start' : B && 'center') || (h && 'flex-end') || void 0 : S,
                            P = e.alignSelf,
                            R = e.wrap,
                            T = e.flexWrap,
                            x = void 0 === T ? (R ? 'wrap' : void 0) : T,
                            L = e.grow,
                            M = e.shrink,
                            k = e.flex,
                            N = void 0 === k ? (L || M ? `${L ? 1 : 0} ${M ? 1 : 0} auto` : void 0) : k,
                            O = e.style,
                            H = e.children,
                            I = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, lt);
                        const G = (0, a.useMemo)(() => {
                                const e = { mt: i, mr: c, mb: d, ml: E },
                                    u = ((e) =>
                                        dt.reduce((u, t) => {
                                            const r = e[t];
                                            return r && 'number' != typeof r ? u.concat(_t[!0 === r ? 'MD' : r][t]) : u;
                                        }, []))(e),
                                    n = ((e) =>
                                        dt.reduce((u, t) => {
                                            const r = e[t];
                                            return 'number' == typeof r && (u[mt[t]] = r + 'rem'), u;
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, O, n, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== r && 'number' == typeof r ? r + 'rem' : r,
                                        flex: N,
                                        alignSelf: P,
                                        display: p || y ? 'flex' : void 0,
                                        flexDirection: p,
                                        flexWrap: x,
                                        justifyContent: w,
                                        alignItems: y,
                                    }),
                                    computedClassNames: u,
                                };
                            }, [t, r, i, c, d, E, O, N, P, p, x, w, y]),
                            U = G.computedStyle,
                            z = G.computedClassNames;
                        return s().createElement('div', ct({ className: C()(it.base, ...z, u), style: U }, I), H);
                    });
                var At = t(3532),
                    gt = t.n(At);
                const Ft = {
                        'paragraph-P10': 'Text_paragraph-P10_2c',
                        'paragraph-P12': 'Text_paragraph-P12_22',
                        'paragraph-P14': 'Text_paragraph-P14_a7',
                        'paragraph-P16': 'Text_paragraph-P16_90',
                        'paragraph-P18': 'Text_paragraph-P18_50',
                        'paragraph-P24': 'Text_paragraph-P24_33',
                        'heading-H14': 'Text_heading-H14_8b',
                        'heading-H15': 'Text_heading-H15_9e',
                        'heading-H18': 'Text_heading-H18_b7',
                        'heading-H20R': 'Text_heading-H20R_f6',
                        'heading-H22': 'Text_heading-H22_27',
                        'heading-H24R': 'Text_heading-H24R_be',
                        'heading-H24': 'Text_heading-H24_0c',
                        'heading-H28': 'Text_heading-H28_78',
                        'heading-H36': 'Text_heading-H36_32',
                        'heading-H56': 'Text_heading-H56_c3',
                        'heading-H73': 'Text_heading-H73_8f',
                        'heading-H144': 'Text_heading-H144_a9',
                        BLACK_REAL: 'Text_BLACK_REAL_30',
                        WHITE_REAL: 'Text_WHITE_REAL_bc',
                        WHITE: 'Text_WHITE_62',
                        WHITE_ORANGE: 'Text_WHITE_ORANGE_54',
                        WHITE_SPANISH: 'Text_WHITE_SPANISH_df',
                        PAR: 'Text_PAR_15',
                        PAR_SECONDARY: 'Text_PAR_SECONDARY_5d',
                        PAR_TERTIARY: 'Text_PAR_TERTIARY_c9',
                        INFO_RED: 'Text_INFO_RED_30',
                        RED: 'Text_RED_66',
                        RED_DARK: 'Text_RED_DARK_d8',
                        YELLOW: 'Text_YELLOW_ed',
                        ORANGE: 'Text_ORANGE_be',
                        CREAM: 'Text_CREAM_57',
                        BROWN: 'Text_BROWN_18',
                        GREEN_BRIGHT: 'Text_GREEN_BRIGHT_3f',
                        GREEN: 'Text_GREEN_e3',
                        GREEN_DARK: 'Text_GREEN_DARK_f1',
                        BLUE_BOOSTER: 'Text_BLUE_BOOSTER_21',
                        BLUE_TEAMKILLER: 'Text_BLUE_TEAMKILLER_ab',
                        CRED: 'Text_CRED_f7',
                        GOLD: 'Text_GOLD_28',
                        BOND: 'Text_BOND_be',
                        PROM: 'Text_PROM_65',
                    },
                    pt = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function Dt() {
                    return (
                        (Dt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Dt.apply(this, arguments)
                    );
                }
                Object.keys(tt());
                const Bt = Object.keys(gt()),
                    Ct = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    ht = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    bt = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    ft =
                        (Object.keys({
                            XL: { mt: 'XL', mr: 'XL', mb: 'XL', ml: 'XL' },
                            LG: { mt: 'LG', mr: 'LG', mb: 'LG', ml: 'LG' },
                            MDp: { mt: 'MDp', mr: 'MDp', mb: 'MDp', ml: 'MDp' },
                            MD: { mt: 'MD', mr: 'MD', mb: 'MD', ml: 'MD' },
                            SMp: { mt: 'SMp', mr: 'SMp', mb: 'SMp', ml: 'SMp' },
                            SM: { mt: 'SM', mr: 'SM', mb: 'SM', ml: 'SM' },
                            XS: { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                        }),
                        {
                            'heading-H144': { mt: 'XL', mr: 'LG', mb: 'LG', ml: 'LG' },
                            'heading-H73': { mt: 'LG', mr: 'MD', mb: 'MD', ml: 'MD' },
                            'heading-H56': Ct,
                            'heading-H36': Ct,
                            'heading-H28': ht,
                            'heading-H24': ht,
                            'heading-H24R': ht,
                            'heading-H22': ht,
                            'heading-H20R': ht,
                            'heading-H18': ht,
                            'heading-H15': bt,
                            'heading-H14': bt,
                            'paragraph-P24': ht,
                            'paragraph-P18': ht,
                            'paragraph-P16': ht,
                            'paragraph-P14': bt,
                            'paragraph-P12': bt,
                            'paragraph-P10': bt,
                        }),
                    vt =
                        (Object.keys(ft),
                        (e) =>
                            e
                                ? ((e) => Bt.includes(e))(e)
                                    ? { colorClassName: Ft[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    wt = ot((e) => {
                        let u = e.text,
                            t = e.variant,
                            r = e.className,
                            n = e.color,
                            o = e.m,
                            i = e.mt,
                            l = void 0 === i ? o : i,
                            c = e.mr,
                            _ = void 0 === c ? o : c,
                            d = e.mb,
                            m = void 0 === d ? o : d,
                            E = e.ml,
                            A = void 0 === E ? o : E,
                            g = e.style,
                            F = e.format,
                            p = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, pt);
                        const D = (0, a.useMemo)(() => {
                                const e = vt(n),
                                    u = e.colorClassName,
                                    t = e.colorStyle,
                                    r = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, g, r), colorClassName: u };
                            }, [g, n]),
                            B = D.computedStyle,
                            h = D.colorClassName;
                        return s().createElement(
                            Et,
                            Dt(
                                {
                                    className: C()(Ft.base, t && Ft[t], h, r),
                                    style: B,
                                    mt: !0 === l ? ft[t || 'paragraph-P16'].mt : l,
                                    mr: !0 === _ ? ft[t || 'paragraph-P16'].mr : _,
                                    mb: !0 === m ? ft[t || 'paragraph-P16'].mb : m,
                                    ml: !0 === A ? ft[t || 'paragraph-P16'].ml : A,
                                },
                                p,
                            ),
                            void 0 !== F ? s().createElement(nu, Dt({}, F, { text: u })) : u,
                        );
                    }),
                    St = R.strings.historical_battles_progression.progressionView,
                    yt = (0, U.observer)(() => {
                        const e = et().model.progressAnimationState.get(),
                            u = e >= Ku.ProgressFinished,
                            t = e === Ku.ProgressAlreadyFinished && 'Header_header__fast_03';
                        return s().createElement(
                            'div',
                            { className: 'Header_base_32' },
                            s().createElement(
                                'div',
                                {
                                    className: C()(
                                        'Header_header_ea',
                                        t,
                                        'Header_header__inProgress_18',
                                        u && 'Header_header__hide_02',
                                    ),
                                },
                                s().createElement('div', { className: 'Header_shadowBg_1c' }),
                                s().createElement(wt, { text: St.title.inProgress(), className: 'Header_title_dd' }),
                            ),
                        );
                    }),
                    Pt = (e) => {
                        let u,
                            t = null;
                        return (
                            (t = requestAnimationFrame(() => {
                                t = requestAnimationFrame(() => {
                                    (t = null), (u = e());
                                });
                            })),
                            () => {
                                'function' == typeof u && u(), null !== t && cancelAnimationFrame(t);
                            }
                        );
                    };
                function Rt(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, r = new Array(u); t < u; t++) r[t] = e[t];
                    return r;
                }
                const Tt = [];
                function xt(e) {
                    const u = (0, a.useRef)(e);
                    return (
                        (0, a.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, a.useCallback)((...e) => (0, u.current)(...e), Tt)
                    );
                }
                var Lt = t(8552);
                let Mt;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(Mt || (Mt = {}));
                const kt = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    Nt = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: r,
                        getWrapperSize: n,
                        triggerMouseMoveOnUpdate: s = !1,
                    }) => {
                        const o = (e, t) => {
                            const r = u(e),
                                n = r[0],
                                a = r[1];
                            return ae(n, a, t);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                _ = void 0 === c ? kt : c,
                                d = (0, a.useRef)(null),
                                m = (0, a.useRef)(null),
                                E = (() => {
                                    const e = (0, a.useMemo)(() => ({}), []),
                                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                        t = (e, t) => {
                                            u(e).set(t, t);
                                        },
                                        r = (e, t) => {
                                            u(e).delete(t);
                                        },
                                        n = (e, ...t) => {
                                            for (
                                                var r,
                                                    n = (function (e, u) {
                                                        var t =
                                                            ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                                                            e['@@iterator'];
                                                        if (t) return (t = t.call(e)).next.bind(t);
                                                        if (
                                                            Array.isArray(e) ||
                                                            (t = (function (e, u) {
                                                                if (e) {
                                                                    if ('string' == typeof e) return Rt(e, u);
                                                                    var t = Object.prototype.toString
                                                                        .call(e)
                                                                        .slice(8, -1);
                                                                    return (
                                                                        'Object' === t &&
                                                                            e.constructor &&
                                                                            (t = e.constructor.name),
                                                                        'Map' === t || 'Set' === t
                                                                            ? Array.from(e)
                                                                            : 'Arguments' === t ||
                                                                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                    t,
                                                                                )
                                                                              ? Rt(e, u)
                                                                              : void 0
                                                                    );
                                                                }
                                                            })(e)) ||
                                                            (u && e && 'number' == typeof e.length)
                                                        ) {
                                                            t && (e = t);
                                                            var r = 0;
                                                            return function () {
                                                                return r >= e.length
                                                                    ? { done: !0 }
                                                                    : { done: !1, value: e[r++] };
                                                            };
                                                        }
                                                        throw new TypeError(
                                                            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                        );
                                                    })(u(e).values());
                                                !(r = n()).done;

                                            )
                                                (0, r.value)(...t);
                                        };
                                    return (0, a.useMemo)(() => ({ on: t, off: r, trigger: n }), []);
                                })(),
                                A = (function (e, u, t) {
                                    const r = (0, a.useMemo)(
                                        () =>
                                            (function (e, u, t, r) {
                                                let n,
                                                    a = !1,
                                                    s = 0;
                                                function o() {
                                                    n && clearTimeout(n);
                                                }
                                                function i(...i) {
                                                    const l = this,
                                                        c = Date.now() - s;
                                                    function _() {
                                                        (s = Date.now()), t.apply(l, i);
                                                    }
                                                    a ||
                                                        (r && !n && _(),
                                                        o(),
                                                        void 0 === r && c > e
                                                            ? _()
                                                            : !0 !== u &&
                                                              (n = setTimeout(
                                                                  r
                                                                      ? function () {
                                                                            n = void 0;
                                                                        }
                                                                      : _,
                                                                  void 0 === r ? e - c : e,
                                                              )));
                                                }
                                                return (
                                                    'boolean' != typeof u && ((r = t), (t = u), (u = void 0)),
                                                    (i.cancel = function () {
                                                        o(), (a = !0);
                                                    }),
                                                    i
                                                );
                                            })(t, e),
                                        u,
                                    );
                                    return (0, a.useEffect)(() => r.cancel, [r]), r;
                                })(
                                    () => {
                                        i.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                g = (0, Lt.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = d.current;
                                        u && (t(u, e), E.trigger('change', e), s && A());
                                    },
                                    onRest: (e) => E.trigger('rest', e),
                                    onStart: (e) => E.trigger('start', e),
                                    onPause: (e) => E.trigger('pause', e),
                                })),
                                F = g[0],
                                p = g[1],
                                D = (0, a.useCallback)(
                                    (e, u, t) => {
                                        var r;
                                        const n = F.scrollPosition.get(),
                                            a = (null != (r = F.scrollPosition.goal) ? r : 0) - n;
                                        return o(e, u * t + a + n);
                                    },
                                    [F.scrollPosition],
                                ),
                                B = (0, a.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const r = d.current;
                                        r &&
                                            p.start({
                                                scrollPosition: o(r, e),
                                                immediate: u,
                                                reset: t,
                                                config: _.animationConfig,
                                                from: { scrollPosition: o(r, F.scrollPosition.get()) },
                                            });
                                    },
                                    [p, _.animationConfig, F.scrollPosition],
                                ),
                                C = (0, a.useCallback)(
                                    (e) => {
                                        const u = d.current,
                                            t = m.current;
                                        if (!u || !t) return;
                                        const r = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return n(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, _.step),
                                            a = D(u, e, r);
                                        B(a);
                                    },
                                    [B, D, _.step],
                                ),
                                h = (0, a.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && C(r(e)),
                                            d.current && E.trigger('mouseWheel', e, F.scrollPosition, u(d.current));
                                    },
                                    [F.scrollPosition, C, E],
                                ),
                                b = ((e, u = []) => {
                                    const t = (0, a.useRef)(),
                                        r = (0, a.useCallback)((...u) => {
                                            t.current && t.current(), (t.current = e(...u));
                                        }, u);
                                    return (
                                        (0, a.useEffect)(
                                            () => () => {
                                                t.current && t.current();
                                            },
                                            [r],
                                        ),
                                        r
                                    );
                                })(
                                    () =>
                                        Pt(() => {
                                            const e = d.current;
                                            e &&
                                                (B(o(e, F.scrollPosition.goal), { immediate: !0 }),
                                                E.trigger('resizeHandled'));
                                        }),
                                    [B, F.scrollPosition.goal],
                                ),
                                f = xt(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const u = o(e, F.scrollPosition.goal);
                                    u !== F.scrollPosition.goal && B(u, { immediate: !0 }),
                                        E.trigger('recalculateContent');
                                });
                            return (
                                (0, a.useEffect)(
                                    () => (
                                        window.addEventListener('resize', b),
                                        () => {
                                            window.removeEventListener('resize', b);
                                        }
                                    ),
                                    [b],
                                ),
                                (0, a.useMemo)(
                                    () => ({
                                        getWrapperSize: () => (m.current ? n(m.current) : void 0),
                                        getContainerSize: () => (d.current ? e(d.current) : void 0),
                                        getBounds: () =>
                                            d.current
                                                ? u(d.current)
                                                : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                        stepTimeout: _.step.clampedArrowStepTimeout,
                                        clampPosition: o,
                                        handleMouseWheel: h,
                                        applyScroll: B,
                                        applyStepTo: C,
                                        contentRef: d,
                                        wrapperRef: m,
                                        scrollPosition: p,
                                        animationScroll: F,
                                        recalculateContent: f,
                                        events: { on: E.on, off: E.off },
                                    }),
                                    [F.scrollPosition, B, C, E.off, E.on, f, h, p, _.step.clampedArrowStepTimeout],
                                )
                            );
                        };
                    },
                    Ot = Nt({
                        getBounds: (e) => {
                            var u, t;
                            return [
                                0,
                                e.offsetWidth -
                                    (null != (u = null == (t = e.parentElement) ? void 0 : t.offsetWidth) ? u : 0),
                            ];
                        },
                        getContainerSize: (e) => e.offsetWidth,
                        getWrapperSize: (e) => e.offsetWidth,
                        setScrollPosition: (e, u) => {
                            e.style.transform = `translateX(-${u.value.scrollPosition}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Mt.Next : Mt.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    });
                function Ht(e, u, t = []) {
                    const r = (0, a.useRef)(0),
                        n = (0, a.useCallback)(() => window.clearInterval(r.current), t || []);
                    (0, a.useEffect)(() => n, [n]);
                    const s = (null != t ? t : []).concat([u]);
                    return [
                        (0, a.useCallback)((t) => {
                            (r.current = window.setInterval(() => e(t, !0), u)), e(t, !1);
                        }, s),
                        n,
                    ];
                }
                const It = 'HorizontalBar_base__nonActive_82',
                    Gt = 'disable',
                    Ut = { pending: !1, offset: 0 },
                    zt = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    Wt = () => {},
                    $t = (e, u) => Math.max(20, e.offsetWidth * u),
                    Vt = (0, a.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = zt, onDrag: r = Wt }) => {
                        const n = (0, a.useRef)(null),
                            o = (0, a.useRef)(null),
                            i = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            _ = e.stepTimeout || 100,
                            d = (0, a.useState)(Ut),
                            m = d[0],
                            E = d[1],
                            A = (0, a.useCallback)(
                                (e) => {
                                    E(e),
                                        c.current && r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current });
                                },
                                [r],
                            ),
                            g = () => {
                                const u = l.current,
                                    t = c.current,
                                    r = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(r && u && t && n)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, r / n),
                                    _ = ae(0, 1, a / (n - r)),
                                    d = (u.offsetWidth - $t(u, s)) * _;
                                (t.style.transform = `translateX(${0 | d}px)`),
                                    ((e) => {
                                        if (o.current && i.current && l.current && c.current) {
                                            if (0 === e)
                                                return o.current.classList.add(Gt), void i.current.classList.remove(Gt);
                                            if (
                                                ((u = l.current),
                                                (t = c.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return o.current.classList.remove(Gt), void i.current.classList.add(Gt);
                                            var u, t;
                                            o.current.classList.remove(Gt), i.current.classList.remove(Gt);
                                        }
                                    })(d);
                            },
                            F = xt(() => {
                                (() => {
                                    const u = c.current,
                                        t = l.current,
                                        r = e.getWrapperSize(),
                                        a = e.getContainerSize();
                                    if (!(a && u && r && t)) return;
                                    const s = Math.min(1, r / a);
                                    (u.style.width = `${$t(t, s)}px`),
                                        (u.style.display = 'flex'),
                                        n.current &&
                                            (1 === s ? n.current.classList.add(It) : n.current.classList.remove(It));
                                })(),
                                    g();
                            });
                        (0, a.useEffect)(() => Pt(F)),
                            (0, a.useEffect)(
                                () =>
                                    Pt(() => {
                                        const u = () => {
                                            g();
                                        };
                                        let t = Wt;
                                        const r = () => {
                                            t(), (t = Pt(F));
                                        };
                                        return (
                                            e.events.on('recalculateContent', F),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', r),
                                            () => {
                                                t(),
                                                    e.events.off('recalculateContent', F),
                                                    e.events.off('rest', u),
                                                    e.events.off('change', u),
                                                    e.events.off('resizeHandled', r);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, a.useEffect)(() => {
                                if (!m.pending) return;
                                const u = (u) => {
                                        var t;
                                        const n = e.contentRef.current;
                                        if (!n) return;
                                        const a = l.current,
                                            s = c.current;
                                        if (!n || !a || !s) return;
                                        const o = u.screenX - m.offset - a.getBoundingClientRect().x,
                                            i = (o / a.offsetWidth) * (null != (t = e.getContainerSize()) ? t : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(n, i),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            r({ type: 'dragging', thumb: s, thumbOffset: o, contentOffset: i });
                                    },
                                    t = () => {
                                        window.removeEventListener('mousemove', u), A(Ut);
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t);
                                    }
                                );
                            }, [e, m.offset, m.pending, r, A]);
                        const p = Ht((u) => e.applyStepTo(u), _, [e]),
                            D = p[0],
                            B = p[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', B, !0),
                                () => document.removeEventListener('mouseup', B, !0)
                            ),
                            [B],
                        );
                        const h = (e) => {
                            e.target.classList.contains(Gt) || K('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: C()('HorizontalBar_base_49', u.base), ref: n, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: C()('HorizontalBar_leftButton_5f', u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Gt) || 0 !== e.button || (K('play'), D(Mt.Next));
                                },
                                onMouseUp: B,
                                ref: o,
                                onMouseEnter: h,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: C()('HorizontalBar_track_0d', u.track),
                                    onMouseDown: (u) => {
                                        const r = c.current;
                                        r &&
                                            0 === u.button &&
                                            (K('play'),
                                            u.target === r
                                                ? A({ pending: !0, offset: u.screenX - r.getBoundingClientRect().x })
                                                : ((u) => {
                                                      const r = c.current,
                                                          n = e.contentRef.current;
                                                      if (!r || !n) return;
                                                      const a = t(e);
                                                      e.applyScroll(e.animationScroll.scrollPosition.get() + a * u);
                                                  })(u.screenX > r.getBoundingClientRect().x ? Mt.Prev : Mt.Next));
                                    },
                                    ref: l,
                                    onMouseEnter: h,
                                },
                                s().createElement('div', { ref: c, className: C()('HorizontalBar_thumb_fd', u.thumb) }),
                                s().createElement('div', { className: C()('HorizontalBar_rail_32', u.rail) }),
                            ),
                            s().createElement('div', {
                                className: C()('HorizontalBar_rightButton_03', u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Gt) || 0 !== e.button || (K('play'), D(Mt.Prev));
                                },
                                onMouseUp: B,
                                ref: i,
                                onMouseEnter: h,
                            }),
                        );
                    }),
                    jt = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Xt = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: r,
                        areaClassName: n,
                        classNames: o,
                        scrollClassName: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const _ = (0, a.useMemo)(() => {
                                const e = r || {};
                                return Object.assign({}, e, { base: C()(jt.base, e.base) });
                            }, [r]),
                            d = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return s().createElement(
                            'div',
                            { className: C()(jt.defaultScroll, t), onWheel: u.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: C()(jt.defaultScrollArea, n) },
                                s().createElement(Yt, { className: i, api: d, classNames: o }, e),
                            ),
                            s().createElement(Vt, { getStepByRailClick: l, api: u, onDrag: c, classNames: _ }),
                        );
                    },
                    Yt = ({ api: e, className: u, classNames: t, children: r }) => (
                        (0, a.useEffect)(() => Pt(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: C()(jt.base, u) },
                            s().createElement(
                                'div',
                                {
                                    className: C()(jt.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                s().createElement(
                                    'div',
                                    { className: C()(jt.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    r,
                                ),
                            ),
                        )
                    );
                (Yt.Bar = Vt),
                    (Yt.Default = Xt),
                    (Yt.SeniorityAwards = ({ api: e, className: u, classNames: t, children: r }) => (
                        (0, a.useEffect)(() => Pt(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: C()(jt.base, u) },
                            s().createElement(
                                'div',
                                { className: C()(jt.wrapper, null == t ? void 0 : t.wrapper), ref: e.wrapperRef },
                                s().createElement(
                                    'div',
                                    { className: C()(jt.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    r,
                                ),
                            ),
                        )
                    ));
                const qt = Nt({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Mt.Next : Mt.Prev),
                    }),
                    Kt = 'VerticalBar_base__nonActive_42',
                    Qt = 'disable',
                    Zt = () => {},
                    Jt = { pending: !1, offset: 0 },
                    er = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    ur = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    tr = (e, u) => Math.max(20, e.offsetHeight * u),
                    rr = (0, a.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = er, onDrag: r = Zt }) => {
                        const n = (0, a.useRef)(null),
                            o = (0, a.useRef)(null),
                            i = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            _ = e.stepTimeout || 100,
                            d = (0, a.useState)(Jt),
                            m = d[0],
                            E = d[1],
                            A = (0, a.useCallback)(
                                (e) => {
                                    E(e),
                                        c.current && r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current });
                                },
                                [r],
                            ),
                            g = xt(() => {
                                const u = c.current,
                                    t = l.current,
                                    r = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(r && a && u && t)) return;
                                const s = Math.min(1, r / a);
                                return (
                                    (u.style.height = `${tr(t, s)}px`),
                                    u.classList.add('VerticalBar_thumb_32'),
                                    n.current &&
                                        (1 === s ? n.current.classList.add(Kt) : n.current.classList.remove(Kt)),
                                    s
                                );
                            }),
                            F = xt(() => {
                                const u = l.current,
                                    t = c.current,
                                    r = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(r && u && t && n)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, r / n),
                                    _ = ae(0, 1, a / (n - r)),
                                    d = (u.offsetHeight - tr(u, s)) * _;
                                (t.style.transform = `translateY(${0 | d}px)`),
                                    ((e) => {
                                        if (o.current && i.current && l.current && c.current) {
                                            if (0 === e)
                                                return o.current.classList.add(Qt), void i.current.classList.remove(Qt);
                                            if (
                                                ((u = l.current),
                                                (t = c.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return o.current.classList.remove(Qt), void i.current.classList.add(Qt);
                                            var u, t;
                                            o.current.classList.remove(Qt), i.current.classList.remove(Qt);
                                        }
                                    })(d);
                            }),
                            p = xt(() => {
                                ur(e, () => {
                                    g(), F();
                                });
                            });
                        (0, a.useEffect)(() => Pt(p)),
                            (0, a.useEffect)(() => {
                                const u = () => {
                                    ur(e, () => {
                                        F();
                                    });
                                };
                                let t = Zt;
                                const r = () => {
                                    t(), (t = Pt(p));
                                };
                                return (
                                    e.events.on('recalculateContent', p),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', r),
                                    () => {
                                        t(),
                                            e.events.off('recalculateContent', p),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', r);
                                    }
                                );
                            }, [e]),
                            (0, a.useEffect)(() => {
                                if (!m.pending) return;
                                const u = (u) => {
                                        ur(e, (t) => {
                                            const n = l.current,
                                                a = c.current,
                                                s = e.getContainerSize();
                                            if (!n || !a || !s) return;
                                            const o = u.screenY - m.offset - n.getBoundingClientRect().y,
                                                i = (o / n.offsetHeight) * s;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                r({ type: 'dragging', thumb: a, thumbOffset: o, contentOffset: i });
                                        });
                                    },
                                    t = () => {
                                        window.removeEventListener('mousemove', u), A(Jt);
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t);
                                    }
                                );
                            }, [e, m.offset, m.pending, r, A]);
                        const D = Ht((u) => e.applyStepTo(u), _, [e]),
                            B = D[0],
                            h = D[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', h, !0),
                                () => document.removeEventListener('mouseup', h, !0)
                            ),
                            [h],
                        );
                        const b = (e) => {
                            e.target.classList.contains(Qt) || K('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: C()('VerticalBar_base_f3', u.base), ref: n, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: C()('VerticalBar_topButton_d7', u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Qt) || 0 !== e.button || (K('play'), B(Mt.Next));
                                },
                                ref: o,
                                onMouseEnter: b,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: C()('VerticalBar_track_df', u.track),
                                    onMouseDown: (u) => {
                                        const r = c.current;
                                        var n;
                                        r &&
                                            0 === u.button &&
                                            (K('play'),
                                            u.target === r
                                                ? A({ pending: !0, offset: u.screenY - r.getBoundingClientRect().y })
                                                : ((n = u.screenY > r.getBoundingClientRect().y ? Mt.Prev : Mt.Next),
                                                  c.current &&
                                                      ur(e, (u) => {
                                                          if (!u) return;
                                                          const r = t(e),
                                                              a = e.clampPosition(u, u.scrollTop + r * n);
                                                          e.applyScroll(a);
                                                      })));
                                    },
                                    ref: l,
                                    onMouseEnter: b,
                                },
                                s().createElement('div', { ref: c, className: u.thumb }),
                                s().createElement('div', { className: C()('VerticalBar_rail_43', u.rail) }),
                            ),
                            s().createElement('div', {
                                className: C()('VerticalBar_bottomButton_06', u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Qt) || 0 !== e.button || (K('play'), B(Mt.Prev));
                                },
                                onMouseUp: h,
                                ref: i,
                                onMouseEnter: b,
                            }),
                        );
                    }),
                    nr = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    ar = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: r,
                        areaClassName: n,
                        scrollClassName: o,
                        scrollClassNames: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const _ = (0, a.useMemo)(() => {
                                const e = r || {};
                                return Object.assign({}, e, { base: C()(nr.base, e.base) });
                            }, [r]),
                            d = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return s().createElement(
                            'div',
                            { className: C()(nr.defaultScroll, t), onWheel: u.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: C()(nr.area, n) },
                                s().createElement(sr, { className: o, classNames: i, api: d }, e),
                            ),
                            s().createElement(rr, { getStepByRailClick: l, api: u, onDrag: c, classNames: _ }),
                        );
                    },
                    sr = ({ className: e, classNames: u, children: t, api: r }) => (
                        (0, a.useEffect)(() => Pt(r.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: C()(nr.base, e), ref: r.wrapperRef, onWheel: r.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: C()(nr.content, null == u ? void 0 : u.content), ref: r.contentRef },
                                t,
                            ),
                        )
                    );
                sr.Default = ar;
                const or = { Vertical: n, Horizontal: r };
                'undefined' != typeof Element &&
                    (Element.prototype.matches ||
                        Element.prototype.webkitMatchesSelector ||
                        Element.prototype.mozMatchesSelector ||
                        Element.prototype.msMatchesSelector),
                    'undefined' != typeof document && document.documentElement.style,
                    'undefined' != typeof window &&
                        ('ontouchstart' in window || (window.DocumentTouch && (document, window.DocumentTouch))),
                    'undefined' != typeof navigator && navigator.msMaxTouchPoints,
                    'undefined' != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent);
                const ir = 'LevelLabel_levelBackground_72',
                    lr = 'LevelLabel_level_e5',
                    cr = ({ level: e, isActive: u, isCompleted: t, isHovered: r, isLast: n }) => {
                        const a = C()(
                            'LevelLabel_base_dc',
                            t && 'LevelLabel_base__completed_4b',
                            u && 'LevelLabel_base__active_64',
                        );
                        return s().createElement(
                            'div',
                            { className: a },
                            s().createElement('div', { className: ir }),
                            s().createElement('div', { className: lr }, e - 1),
                            r && s().createElement('div', { className: 'LevelLabel_hover_d0' }),
                            n &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', {
                                        className: C()(ir, 'LevelLabel_levelBackground__last_e4'),
                                    }),
                                    s().createElement('div', { className: C()(lr, 'LevelLabel_level__last_18') }, e),
                                ),
                        );
                    },
                    _r = R.strings.historical_battles_progression.progressionView,
                    dr = ({ isCompleted: e, className: u, tooltipConfig: t }) => {
                        const r = t || {},
                            n = r.tooltipId,
                            a = r.tooltipContentId,
                            o = Ie({ tooltipId: n, tooltipContentId: a }),
                            i = C()('MainReward_base_39', e && 'MainReward_base__completed_26', u);
                        return s().createElement(
                            s().Fragment,
                            null,
                            s().createElement(Re, { tooltipArgs: o }, s().createElement('div', { className: i })),
                            e && s().createElement('div', { className: 'MainReward_finished_7f' }, _r.rewardReceived()),
                        );
                    };
                let mr, Er;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(mr || (mr = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
                    })(Er || (Er = {}));
                const Ar = {
                        base: 'CButton_base_40',
                        base__main: 'CButton_base__main_42',
                        base__primary: 'CButton_base__primary_7f',
                        base__primaryGreen: 'CButton_base__primaryGreen_6f',
                        base__primaryRed: 'CButton_base__primaryRed_ec',
                        base__secondary: 'CButton_base__secondary_50',
                        base__ghost: 'CButton_base__ghost_ed',
                        base__extraSmall: 'CButton_base__extraSmall_27',
                        base__small: 'CButton_base__small_df',
                        base__medium: 'CButton_base__medium_74',
                        base__disabled: 'CButton_base__disabled_d9',
                        back: 'CButton_back_e5',
                        texture: 'CButton_texture_fe',
                        state: 'CButton_state_11',
                        base__focus: 'CButton_base__focus_83',
                        stateHighlightHover: 'CButton_stateHighlightHover_ff',
                        stateHighlightActive: 'CButton_stateHighlightActive_35',
                        stateDisabled: 'CButton_stateDisabled_54',
                        base__firstHover: 'CButton_base__firstHover_d5',
                        base__highlightActive: 'CButton_base__highlightActive_b2',
                        content: 'CButton_content_cc',
                    },
                    gr = ({
                        children: e,
                        size: u,
                        isFocused: t,
                        type: r,
                        disabled: n,
                        mixClass: o,
                        soundHover: i,
                        soundClick: l,
                        onMouseEnter: c,
                        onMouseMove: _,
                        onMouseDown: d,
                        onMouseUp: m,
                        onMouseLeave: E,
                        onClick: A,
                    }) => {
                        const g = (0, a.useRef)(null),
                            F = (0, a.useState)(t),
                            p = F[0],
                            D = F[1],
                            B = (0, a.useState)(!1),
                            h = B[0],
                            b = B[1],
                            f = (0, a.useState)(!1),
                            v = f[0],
                            w = f[1],
                            S = (0, a.useCallback)(() => {
                                n || (g.current && (g.current.focus(), D(!0)));
                            }, [n]),
                            y = (0, a.useCallback)(
                                (e) => {
                                    p && null !== g.current && !g.current.contains(e.target) && D(!1);
                                },
                                [p],
                            ),
                            P = (0, a.useCallback)(
                                (e) => {
                                    n || (A && A(e));
                                },
                                [n, A],
                            ),
                            T = (0, a.useCallback)(
                                (e) => {
                                    n || (null !== i && K(i), c && c(e), w(!0));
                                },
                                [n, i, c],
                            ),
                            x = (0, a.useCallback)(
                                (e) => {
                                    _ && _(e);
                                },
                                [_],
                            ),
                            L = (0, a.useCallback)(
                                (e) => {
                                    n || (m && m(e), b(!1));
                                },
                                [n, m],
                            ),
                            M = (0, a.useCallback)(
                                (e) => {
                                    n || (null !== l && K(l), d && d(e), t && S(), b(!0));
                                },
                                [n, l, d, S, t],
                            ),
                            k = (0, a.useCallback)(
                                (e) => {
                                    n || (E && E(e), b(!1));
                                },
                                [n, E],
                            ),
                            N = C()(
                                Ar.base,
                                Ar[`base__${r}`],
                                {
                                    [Ar.base__disabled]: n,
                                    [Ar[`base__${u}`]]: u,
                                    [Ar.base__focus]: p,
                                    [Ar.base__highlightActive]: h,
                                    [Ar.base__firstHover]: v,
                                },
                                o,
                            ),
                            O = C()(Ar.state, Ar.state__default);
                        return (
                            (0, a.useEffect)(
                                () => (
                                    document.addEventListener('mousedown', y),
                                    () => {
                                        document.removeEventListener('mousedown', y);
                                    }
                                ),
                                [y],
                            ),
                            (0, a.useEffect)(() => {
                                D(t);
                            }, [t]),
                            s().createElement(
                                'div',
                                {
                                    ref: g,
                                    className: N,
                                    onMouseEnter: T,
                                    onMouseMove: x,
                                    onMouseUp: L,
                                    onMouseDown: M,
                                    onMouseLeave: k,
                                    onClick: P,
                                },
                                r !== mr.ghost &&
                                    s().createElement(
                                        s().Fragment,
                                        null,
                                        s().createElement('div', { className: Ar.back }),
                                        s().createElement('span', { className: Ar.texture }),
                                    ),
                                s().createElement(
                                    'span',
                                    { className: O },
                                    s().createElement('span', { className: Ar.stateDisabled }),
                                    s().createElement('span', { className: Ar.stateHighlightHover }),
                                    s().createElement('span', { className: Ar.stateHighlightActive }),
                                ),
                                s().createElement(
                                    'span',
                                    { className: Ar.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                    e,
                                ),
                            )
                        );
                    };
                gr.defaultProps = { type: mr.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const Fr = (0, a.memo)(gr),
                    pr = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    Dr = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3],
                    Br = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                let Cr;
                !(function (e) {
                    (e.small = 'small'), (e.big = 'big');
                })(Cr || (Cr = {}));
                const hr = ({ vehicleLvl: e, vehicleType: u, vehicleName: t, isElite: r, size: n }) => {
                    const a = `${((o = u), o.replace(/-/g, '_'))}${r ? '_elite' : ''}`;
                    var o;
                    const i = R.images.gui.maps.icons.vehicleTypes.big.$dyn(a),
                        l = n === Cr.big,
                        c = n === Cr.small;
                    return s().createElement(
                        'div',
                        { className: C()('Vehicle_base_00', c && 'Vehicle_base__small_59') },
                        s().createElement(
                            'div',
                            { className: C()('Vehicle_level_d7') },
                            ((_ = e),
                            Br
                                ? `${_}`
                                : (function (e) {
                                      let u = '';
                                      for (let t = Dr.length - 1; t >= 0; t--)
                                          for (; e >= Dr[t]; ) (u += pr[t]), (e -= Dr[t]);
                                      return u;
                                  })(_)),
                        ),
                        s().createElement('div', {
                            className: C()('Vehicle_type_4c', l && 'Vehicle_type__bigIcon_e1'),
                            style: { backgroundImage: `url(${i})` },
                        }),
                        s().createElement('div', { className: C()('Vehicle_name_1b') }, t),
                    );
                    var _;
                };
                function br() {
                    return (
                        (br =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        br.apply(this, arguments)
                    );
                }
                const fr = R.strings.historical_battles_progression.progressionView,
                    vr = { vehicleName: fr.rewardTankName(), vehicleType: 'mediumTank', vehicleLvl: 7 },
                    wr = ({ className: e, isCompleted: u, tooltipConfig: t }) => {
                        const r = et(),
                            n = r.model,
                            a = r.controls,
                            o = n.root.get(),
                            i = o.hasVehicle,
                            l = o.vehicleDiscount,
                            c = u || i,
                            _ = C()('TankReward_base_22', c && 'TankReward_base__completed_0b', e),
                            d = t || {},
                            m = d.tooltipId,
                            E = d.tooltipContentId,
                            A = Object.assign({}, Ie({ tooltipId: m, tooltipContentId: E }), { isEnabled: u }),
                            g = Object.assign(
                                {},
                                Ie({
                                    contentId:
                                        R.views.historical_battles.lobby.tooltips.HbVehicleRewardTooltip('resId'),
                                }),
                                { isEnabled: !0 },
                            );
                        return s().createElement(
                            Re,
                            { tooltipArgs: i ? A : g },
                            s().createElement(
                                'div',
                                { className: _ },
                                s().createElement('div', { className: 'TankReward_tankBg_c6' }),
                                s().createElement(
                                    'div',
                                    { className: 'TankReward_vehicleInfo_20' },
                                    s().createElement(hr, br({}, vr, { size: Cr.small, isElite: !0 })),
                                ),
                                c &&
                                    s().createElement(
                                        'div',
                                        { className: 'TankReward_finished_d6' },
                                        fr.rewardReceived(),
                                    ),
                                Boolean(l) &&
                                    !c &&
                                    s().createElement(
                                        'div',
                                        { className: 'TankReward_discountContainer_54' },
                                        s().createElement('div', { className: 'TankReward_discountLight_84' }),
                                        s().createElement(
                                            'div',
                                            { className: 'TankReward_discount_1a' },
                                            s().createElement('div', { className: 'TankReward_discountBg_c4' }),
                                            s().createElement('div', { className: 'TankReward_discountCount_ed' }, l),
                                        ),
                                        s().createElement(
                                            Fr,
                                            {
                                                mixClass: 'TankReward_buyButton_23',
                                                size: Er.small,
                                                type: mr.main,
                                                onClick: a.onBuyClicked,
                                            },
                                            R.strings.hb_shop.common.button.buy(),
                                        ),
                                    ),
                            ),
                        );
                    },
                    Sr = (e, u, t) =>
                        C()(
                            e[t],
                            u === Ku.ProgressAlreadyFinished
                                ? e[`${t}__fast`]
                                : u >= Ku.ProgressFinished
                                  ? e[`${t}__completed`]
                                  : void 0,
                        ),
                    yr = ({ arr: e, value: u }) => e.findIndex((e) => e > u),
                    Pr = (e, u) =>
                        (function (e, t) {
                            for (let t = 0; t < e.length; t++) {
                                const r = Ee(e[t]);
                                if (r.name === u) return r;
                            }
                        })(e),
                    Rr = 'LevelCard_border_7c',
                    Tr = (0, U.observer)(
                        ({ level: e, isActive: u, isLast: t, isCompleted: r, cardNumber: n, rewards: o }) => {
                            const i = et(),
                                l = i.model,
                                c = i.controls,
                                _ = l.hoveredCard.get() === n,
                                d = 8 === n,
                                m = 10 === n,
                                E = (0, a.useRef)(null),
                                A = Pr(o, pe.BattleBadge),
                                g = Pr(o, pe.Vehicles),
                                F = l.computes.levelStatus(e),
                                p = F.wasProgressionVisited,
                                D = F.isRecentlyCompletedLevel;
                            (0, a.useEffect)(() => {}, [r, p, D]);
                            const B = (0, a.useCallback)(() => {
                                K('pr_progress_tick');
                            }, []);
                            (0, a.useEffect)(() => {
                                const e = E.current;
                                return Pt(() => {
                                    if (e)
                                        return (
                                            e.addEventListener('transitionstart', B),
                                            () => {
                                                e.removeEventListener('transitionstart', B);
                                            }
                                        );
                                });
                            }, [E, B]);
                            const h = C()(
                                'LevelCard_blockBackground_e1',
                                r && 'LevelCard_blockBackground__completed_ef',
                                u && 'LevelCard_blockBackground__active_d3',
                            );
                            return s().createElement(
                                'div',
                                {
                                    className: 'LevelCard_base_77',
                                    onMouseEnter: () => {
                                        c.updateHoveredCard(n);
                                    },
                                    onMouseLeave: () => {
                                        c.updateHoveredCard(void 0);
                                    },
                                },
                                s().createElement('div', { className: h, ref: E }),
                                s().createElement(cr, {
                                    level: e,
                                    isCompleted: r,
                                    isActive: u,
                                    isLast: t,
                                    isHovered: _,
                                }),
                                s().createElement('div', { className: Rr }),
                                t && s().createElement('div', { className: C()(Rr, 'LevelCard_border__right_50') }),
                                d &&
                                    s().createElement(wr, {
                                        className: 'LevelCard_tankRewardContainer_c4',
                                        isCompleted: r,
                                        tooltipConfig: g,
                                    }),
                                m &&
                                    s().createElement(dr, {
                                        className: 'LevelCard_mainRewardContainer_f9',
                                        isCompleted: r,
                                        tooltipConfig: A,
                                    }),
                            );
                        },
                    );
                function xr() {
                    return (
                        (xr =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        xr.apply(this, arguments)
                    );
                }
                const Lr = (0, U.observer)(
                    ({ levelRef: e }) => {
                        const u = et().model;
                        return s().createElement(
                            'div',
                            { className: 'LevelCards_base_a1', ref: e },
                            u.computes
                                .levels()
                                .map((e) => s().createElement(Tr, xr({ key: e.level }, e, { cardNumber: e.level }))),
                        );
                    },
                    { forwardRef: !0 },
                );
                let Mr, kr;
                !(function (e) {
                    (e.WELCOME = 'welcome'),
                        (e.PROGRESSION_STEP = 'progressionStep'),
                        (e.SELECTED_REWARDS = 'selectedRewards'),
                        (e.WINBACK_PROGRESSION_COMPLETED = 'winbackProgressionCompleted'),
                        (e.REGULAR_PROGRESSION_COMPLETED = 'regularProgressionCompleted');
                })(Mr || (Mr = {})),
                    (function (e) {
                        (e.VEHICLE_FOR_GIFT = 'vehicleForGift'),
                            (e.VEHICLE_DISCOUNT = 'vehicleDiscount'),
                            (e.VEHICLE_FOR_RENT = 'vehicleForRent'),
                            (e.SELECTABLE_VEHICLE_FOR_GIFT = 'selectableVehicleForGift'),
                            (e.SELECTABLE_VEHICLE_DISCOUNT = 'selectableVehicleDiscount');
                    })(kr || (kr = {}));
                function Nr() {
                    return (
                        (Nr =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Nr.apply(this, arguments)
                    );
                }
                const Or = ['historical_battles_25', 'historical_battles_50', 'historical_battles_75'],
                    Hr = (0, U.observer)(({ isCompleted: e, isActive: u, rewards: t }) => {
                        const r = et().model.root.get().hasVehicle,
                            n = je(t),
                            a = n.filteredRewards,
                            o = n.imageSize,
                            i = C()(
                                'Rewards_base_24',
                                o === Be.Small && a.length > 3 && 'Rewards_base__wide_f9',
                                e && !u && 'Rewards_base__completed_87',
                            ),
                            l = a.findIndex((e) => Ve.includes(e.name));
                        if (-1 !== l) {
                            const e = a.splice(l, 1)[0],
                                u = Math.floor(a.length / 2);
                            a.splice(u, 0, e);
                        }
                        return s().createElement(
                            'div',
                            { className: i },
                            a.map((e, u) => {
                                const t = e.name,
                                    n = e.tooltipId,
                                    a = e.tooltipContentId,
                                    o = Or.includes(t);
                                return s().createElement(
                                    Ue,
                                    Nr(
                                        { className: C()('Rewards_reward_8d', o && r && 'Rewards_opacity_dd'), key: u },
                                        e,
                                        { tooltipArgs: Ie({ tooltipId: n }, Number(a)) },
                                    ),
                                );
                            }),
                        );
                    }),
                    Ir = {
                        base: 'RewardCard_base_b6',
                        background: 'RewardCard_background_3b',
                        background__completed: 'RewardCard_background__completed_0f',
                        background__fast: 'RewardCard_background__fast_ec',
                        background__active: 'RewardCard_background__active_44',
                        pointsBorder: 'RewardCard_pointsBorder_94',
                        pointsBorder__right: 'RewardCard_pointsBorder__right_4e',
                        pointsContainer: 'RewardCard_pointsContainer_7e',
                        points: 'RewardCard_points_6a',
                        border: 'RewardCard_border_0e',
                        border__right: 'RewardCard_border__right_99',
                    },
                    Gr = (0, U.observer)(
                        ({
                            pointsMin: e,
                            pointsForLast: u,
                            isCompleted: t,
                            isActive: r,
                            isLast: n,
                            rewards: a,
                            rewardId: o,
                        }) => {
                            const i = y(),
                                l = et().controls,
                                c = o + 1,
                                _ = C()(
                                    Ir.base,
                                    i.mediaSize === f.Medium && Ir.base__mediaMedium,
                                    i.mediaSize === f.Large && Ir.base__mediaLarge,
                                    i.remScreenHeight >= 1200 && Ir.base__mediaExtraExtraLarge,
                                ),
                                d = C()(Ir.background, t && Ir.background__completed, r && Ir.background__active);
                            return s().createElement(
                                'div',
                                {
                                    className: _,
                                    onMouseEnter: () => {
                                        l.updateHoveredCard(c);
                                    },
                                    onMouseLeave: () => {
                                        l.updateHoveredCard(void 0);
                                    },
                                },
                                s().createElement('div', { className: d }),
                                s().createElement(Hr, { rewards: a, isActive: r, isCompleted: t }),
                                s().createElement('div', { className: Ir.border }),
                                s().createElement('div', { className: Ir.pointsBorder }, e),
                                n && s().createElement('div', { className: C()(Ir.border, Ir.border__right) }),
                                n &&
                                    s().createElement(
                                        'div',
                                        { className: C()(Ir.pointsBorder, Ir.pointsBorder__right) },
                                        u,
                                    ),
                            );
                        },
                    ),
                    Ur = (0, U.observer)(() => {
                        const e = et().model,
                            u = [0, ...e.computes.getLevels()];
                        return s().createElement(
                            'div',
                            { className: 'RewardCards_base_eb' },
                            Ae(e.computes.levels(), ({ isCompleted: e, isActive: t, isLast: r, rewards: n }, a) =>
                                s().createElement(Gr, {
                                    key: a,
                                    pointsMin: u[a],
                                    pointsForLast: u.slice(-1),
                                    isCompleted: e,
                                    isActive: t,
                                    isLast: r,
                                    rewards: n,
                                    rewardId: a,
                                }),
                            ),
                        );
                    }),
                    zr = ['api', 'value', 'maxValue', 'theme'];
                function Wr() {
                    return (
                        (Wr =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Wr.apply(this, arguments)
                    );
                }
                const $r = (e, u) => ('number' == typeof u ? u : e.offsetLeft),
                    Vr = (e) => {
                        let u = e.api,
                            t = e.value,
                            r = e.maxValue,
                            n = void 0 === r ? 100 : r,
                            o = e.theme,
                            i = void 0 === o ? Hu : o,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, zr);
                        const c = (0, a.useRef)(null),
                            _ = (0, a.useRef)(null),
                            d = (0, a.useRef)(null),
                            m = ae(0, t, n) / n,
                            E = (0, a.useCallback)(
                                (e) => {
                                    d.current &&
                                        c.current &&
                                        (({ horizontalScrollPosition: e, leftOffset: u }, t, r) => {
                                            const n = t.offsetWidth - r.offsetWidth,
                                                a = e - $r(t, u),
                                                s = ae(0, n, a);
                                            r.style.left = `${s}px`;
                                        })(e, c.current, d.current),
                                        _.current &&
                                            c.current &&
                                            ((
                                                { horizontalScrollPosition: e, leftOffset: u },
                                                t,
                                                { container: r, line: n },
                                            ) => {
                                                const a = Math.max(0, Math.floor(r.offsetWidth * t) - 8e3),
                                                    s = e - $r(r, u),
                                                    o = ae(0, a, s);
                                                n.style.left = `${o}px`;
                                            })(e, m, { line: _.current, container: c.current });
                                },
                                [m],
                            ),
                            A = (0, a.useMemo)(() => Nu(i), [i]);
                        return (
                            (u.current.update = E),
                            s().createElement(
                                'div',
                                { className: 'OptimizedProgressBar_base_1f', ref: c },
                                s().createElement(
                                    'div',
                                    { className: 'OptimizedProgressBar_wrapper_ab' },
                                    s().createElement(
                                        'div',
                                        { style: A, className: 'OptimizedProgressBar_background_ce', ref: d },
                                        s().createElement(du, { size: l.size }),
                                    ),
                                    s().createElement(
                                        Gu,
                                        Wr({}, l, {
                                            lineRef: _,
                                            value: t,
                                            theme: i,
                                            maxValue: n,
                                            withoutBackground: !0,
                                        }),
                                    ),
                                ),
                            )
                        );
                    },
                    jr = {
                        base: 'Container_base_9d',
                        progressWrapper: 'Container_progressWrapper_c4',
                        progressWrapper__completed: 'Container_progressWrapper__completed_b5',
                        progressWrapper__fast: 'Container_progressWrapper__fast_d4',
                        bg: 'Container_bg_56',
                    },
                    Xr = 100,
                    Yr = (0, U.observer)(({ api: e, theme: u }) => {
                        const t = et(),
                            r = t.model,
                            n = t.controls,
                            o = r.progressAnimationState.get(),
                            i = r.prevProgressPoints.get(),
                            l = r.curProgressPoints.get(),
                            c = r.computes,
                            _ = r.computes.getLevels(),
                            d = Xr / _.length,
                            m = [0, ..._],
                            E = yr({ arr: _, value: i }),
                            A = yr({ arr: _, value: l }),
                            g = (e, u, t) => {
                                const r = t[u + 1] - t[u],
                                    n = e - t[u];
                                return u * d + (d / Xr) * (((n / r) * Xr * 75.6) / Xr + 12.2);
                            },
                            F = g(i, E, m),
                            p = g(l, A, m),
                            D = (0, a.useRef)({ update: () => {} });
                        e.current.moveProgressBars = (0, a.useCallback)((e) => {
                            D.current.update(e);
                        }, []);
                        const B = (0, a.useState)({ previousEarnedPoints: F, progressionSize: F }),
                            C = B[0],
                            h = C.previousEarnedPoints,
                            b = C.progressionSize,
                            f = B[1];
                        (0, a.useEffect)(() => {
                            f((e) => ({
                                previousEarnedPoints: 0 === e.progressionSize ? i : e.progressionSize,
                                progressionSize: p,
                            })),
                                i !== p && K('pr_progress_bar');
                        }, [i, p, c]);
                        const v = (0, a.useMemo)(
                            () =>
                                Object.assign({}, Iu, {
                                    withStack: !0,
                                    type: _u.Growing,
                                    delta: { duration: 400, delay: 300 },
                                    line: { duration: 400, delay: 300 },
                                }),
                            [],
                        );
                        return (
                            (0, a.useEffect)(() => {
                                if (o === Ku.ProgressChange)
                                    return pu(() => {
                                        n.finishProgressionChange();
                                    }, 700);
                            }, [n, o]),
                            s().createElement(
                                'div',
                                { className: jr.base },
                                s().createElement('div', { className: jr.bg }),
                                s().createElement(
                                    'div',
                                    { className: Sr(jr, o, 'progressWrapper') },
                                    s().createElement(Vr, {
                                        animationSettings: v,
                                        deltaFrom: h,
                                        value: b,
                                        maxValue: Xr,
                                        api: D,
                                        theme: u,
                                    }),
                                ),
                            )
                        );
                    }),
                    qr = ({ api: e, children: u, updateProgressBarPosition: t }) => {
                        const r = (0, a.useState)(0),
                            n = r[0],
                            o = r[1],
                            i = (0, a.useState)(0),
                            l = i[0],
                            c = i[1],
                            _ = (0, a.useState)(!1),
                            d = _[0],
                            m = _[1];
                        (0, a.useEffect)(
                            () =>
                                Pt(() => {
                                    const u = (e) => {
                                        const u = e.value.scrollPosition;
                                        d || o(-u);
                                    };
                                    return (
                                        e.events.on('change', u),
                                        () => {
                                            e.events.off('change', u);
                                        }
                                    );
                                }),
                            [e, d],
                        );
                        const E = (0, a.useCallback)(
                                (e) => {
                                    m(!0), c(e.clientX), t();
                                },
                                [t],
                            ),
                            A = (0, a.useCallback)(() => {
                                m(!1), c(0), t();
                            }, [t]),
                            g = (0, a.useCallback)(
                                (u) => {
                                    if (d) {
                                        const r = ae(-(e.getBounds()[1] || 0), 0, n + u.clientX - l);
                                        e.applyScroll(-r, !0), c(u.clientX), o(r), t();
                                    }
                                },
                                [d, e, n, l, t],
                            );
                        return s().createElement(
                            'div',
                            {
                                className: C()('ScrollDrag_base_e7', d && 'ScrollDrag_base__grabbing_75'),
                                onMouseDown: E,
                                onMouseUp: A,
                                onMouseMove: g,
                            },
                            u,
                        );
                    };
                function Kr(e, u, t, r, n, a, s) {
                    try {
                        var o = e[a](s),
                            i = o.value;
                    } catch (e) {
                        return void t(e);
                    }
                    o.done ? u(i) : Promise.resolve(i).then(r, n);
                }
                const Qr = (0, U.observer)(({ api: e }) => {
                        const u = et().model,
                            t = y(),
                            r = (0, a.useState)(!1),
                            n = r[0],
                            o = r[1],
                            i = (0, a.useState)(!1),
                            l = i[0],
                            c = i[1],
                            _ = u.computes.levels().length,
                            d = u.progressAnimationState.get(),
                            m = u.curProgressPoints.get(),
                            E = u.computes,
                            A = (0, a.useRef)({ moveProgressBars: se }),
                            g = (0, a.useRef)(null),
                            F = (0, a.useRef)(null),
                            p = e.animationScroll.scrollPosition,
                            D = e.getWrapperSize,
                            B = e.contentRef,
                            h = e.wrapperRef,
                            b = e.getContainerSize,
                            f = e.applyScroll;
                        (0, a.useLayoutEffect)(
                            () =>
                                Pt(() => {
                                    const e = h.current,
                                        u = F.current;
                                    if (!e || !u) return;
                                    const r = parseFloat(getComputedStyle(u.children[0]).width),
                                        n = parseFloat(getComputedStyle(u).paddingRight),
                                        a = parseFloat(getComputedStyle(e).paddingLeft);
                                    o(t.remScreenWidth >= _ * r + n + a), c(!0);
                                }),
                            [t.remScreenWidth, h, _],
                        );
                        const v = (0, a.useCallback)(
                                (e) => {
                                    if (g.current) {
                                        const u = D();
                                        A.current.moveProgressBars({
                                            viewPort: g.current,
                                            horizontalScrollPosition: u ? e - u : e,
                                        });
                                    }
                                },
                                [D],
                            ),
                            w = () => {
                                v(p.goal);
                            },
                            S = (0, a.useCallback)(() => {
                                const e = B.current,
                                    u = E.levels().length;
                                if (e && u > 0) {
                                    const t = b() || 0,
                                        r = D() || 0,
                                        n = t / u,
                                        a = E.currentLevel() * n,
                                        s = (r - e.offsetLeft - n) / 2;
                                    f(ae(0, t - r, a - s), { immediate: d === Ku.ProgressAlreadyFinished });
                                }
                                0 === p.goal && v(p.goal);
                            }, [f, E, B, b, D, d, p.goal, v]);
                        return (
                            (0, a.useEffect)(() => {
                                S();
                            }, [m, S]),
                            (0, a.useEffect)(() => {
                                const e = (function () {
                                    var e,
                                        u =
                                            ((e = function* () {
                                                const e = b(),
                                                    u = p.goal;
                                                yield (0, W.Eu)(),
                                                    yield new Promise((e) => {
                                                        requestAnimationFrame(() => {
                                                            requestAnimationFrame(() => {
                                                                e();
                                                            });
                                                        });
                                                    });
                                                const t = b();
                                                v(t && e && t !== e ? (u * t) / e : u), S();
                                            }),
                                            function () {
                                                var u = this,
                                                    t = arguments;
                                                return new Promise(function (r, n) {
                                                    var a = e.apply(u, t);
                                                    function s(e) {
                                                        Kr(a, r, n, s, o, 'next', e);
                                                    }
                                                    function o(e) {
                                                        Kr(a, r, n, s, o, 'throw', e);
                                                    }
                                                    s(void 0);
                                                });
                                            });
                                    return function () {
                                        return u.apply(this, arguments);
                                    };
                                })();
                                return (
                                    engine.on('clientResized', e),
                                    () => {
                                        engine.off('clientResized', e);
                                    }
                                );
                            }, []),
                            (0, a.useEffect)(() => pu(() => v(p.goal), 0), [m, p.goal, v]),
                            s().createElement(
                                'div',
                                {
                                    className: C()(
                                        'Content_base_a5',
                                        n && 'Content_base__centered_0c',
                                        l && 'Content_base__layoutReady_a7',
                                    ),
                                    ref: g,
                                    onWheel: () => v(p.goal),
                                },
                                s().createElement(
                                    or.Horizontal.Area.Default,
                                    {
                                        api: e,
                                        className: 'Content_horizontalContent_f9',
                                        classNames: { wrapper: 'Content_wrapper_63' },
                                        barClassNames: { base: 'Content_horizontalBarVerticalScrollBar_66' },
                                        onDrag: w,
                                    },
                                    s().createElement(
                                        qr,
                                        { api: e, updateProgressBarPosition: w },
                                        s().createElement(Lr, { levelRef: F }),
                                        s().createElement(
                                            'div',
                                            { className: 'Content_progress_d5' },
                                            s().createElement(
                                                'div',
                                                { className: 'Content_progressArea_38' },
                                                s().createElement(Yr, { api: A }),
                                            ),
                                        ),
                                        s().createElement(Ur, null),
                                    ),
                                ),
                            )
                        );
                    }),
                    Zr = {
                        base: 'Progression_base_36',
                        base__completed: 'Progression_base__completed_7a',
                        base__fast: 'Progression_base__fast_ce',
                        shadow: 'Progression_shadow_f6',
                        shadow__left: 'Progression_shadow__left_d0',
                        shadow__right: 'Progression_shadow__right_6d',
                        shadow__visible: 'Progression_shadow__visible_ff',
                    },
                    Jr = (0, U.observer)(() => {
                        const e = et(),
                            u = e.model,
                            t = e.controls,
                            r = u.progressAnimationState.get(),
                            n = (0, a.useState)(!1),
                            o = n[0],
                            i = n[1],
                            l = (0, a.useState)(!1),
                            c = l[0],
                            _ = l[1],
                            d = u.computes.isProgressionCompleted(),
                            m = u.computes.wasProgressionCompletedBeforeStart(),
                            E = Ot();
                        return (
                            (0, a.useEffect)(() => {
                                const e = (e) => {
                                    const u = E.contentRef.current.offsetLeft,
                                        t = e.value.scrollPosition,
                                        r = E.getWrapperSize() || 0,
                                        n = E.getContainerSize() || 0;
                                    i(t > u), _(t + r < n - u);
                                };
                                return (
                                    E.events.on('change', e),
                                    () => {
                                        E.events.off('change', e);
                                    }
                                );
                            }, [E]),
                            (0, a.useEffect)(
                                () =>
                                    m
                                        ? t.completeProgression(!0)
                                        : r === Ku.ChangeCompleted && d
                                          ? pu(() => {
                                                t.completeProgression(!1);
                                            }, 1600)
                                          : r !== Ku.Scrolling || m
                                            ? r === Ku.HighlightCard
                                                ? pu(() => {
                                                      t.finishHighlightCard();
                                                  }, 500)
                                                : void 0
                                            : pu(() => {
                                                  t.finishScrolling();
                                              }, 1200),
                                [r, m, d, t],
                            ),
                            s().createElement(
                                'div',
                                { className: Sr(Zr, r, 'base') },
                                s().createElement('div', {
                                    className: C()(Zr.shadow, Zr.shadow__left, o && Zr.shadow__visible),
                                }),
                                s().createElement('div', {
                                    className: C()(Zr.shadow, Zr.shadow__right, c && Zr.shadow__visible),
                                }),
                                s().createElement(Qr, { api: E }),
                            )
                        );
                    }),
                    en = {
                        base: 'HBCoin_base_d8',
                        label__defence: 'HBCoin_label__defence_a3',
                        label__counterattack: 'HBCoin_label__counterattack_e6',
                        label__offence: 'HBCoin_label__offence_3e',
                        label__counterattackGlow: 'HBCoin_label__counterattackGlow_e3',
                        label__offenceGlow: 'HBCoin_label__offenceGlow_7c',
                        label__defenceGlow: 'HBCoin_label__defenceGlow_78',
                        label: 'HBCoin_label_7f',
                        label__animated: 'HBCoin_label__animated_82',
                        label__notEnough: 'HBCoin_label__notEnough_0e',
                        label__sizeP14: 'HBCoin_label__sizeP14_c0',
                        label__sizeH15: 'HBCoin_label__sizeH15_73',
                        label__sizeH18: 'HBCoin_label__sizeH18_f6',
                        label__sizeH22: 'HBCoin_label__sizeH22_9c',
                        label__sizeH24: 'HBCoin_label__sizeH24_b0',
                        label__sizeH28: 'HBCoin_label__sizeH28_6d',
                        label__sizeH36: 'HBCoin_label__sizeH36_10',
                        label__sizeH42: 'HBCoin_label__sizeH42_4f',
                        label__sizeH56: 'HBCoin_label__sizeH56_88',
                        label__sizeH73: 'HBCoin_label__sizeH73_c1',
                        label__progression: 'HBCoin_label__progression_08',
                        icon: 'HBCoin_icon_27',
                        icon__animated: 'HBCoin_icon__animated_17',
                        icon__size16x16: 'HBCoin_icon__size16x16_6b',
                        icon__size24x24: 'HBCoin_icon__size24x24_35',
                        icon__size32x32: 'HBCoin_icon__size32x32_70',
                        icon__size48x48: 'HBCoin_icon__size48x48_42',
                        icon__size134x134: 'HBCoin_icon__size134x134_4d',
                        stockBg: 'HBCoin_stockBg_25',
                        stockBg__sizeH18: 'HBCoin_stockBg__sizeH18_9b',
                        stockBg__sizeH22: 'HBCoin_stockBg__sizeH22_5a',
                    };
                let un, tn;
                !(function (e) {
                    (e.P14 = 'P14'),
                        (e.H15 = 'H15'),
                        (e.H18 = 'H18'),
                        (e.H22 = 'H22'),
                        (e.H24 = 'H24'),
                        (e.H28 = 'H28'),
                        (e.H36 = 'H36'),
                        (e.H42 = 'H42'),
                        (e.H56 = 'H56'),
                        (e.H73 = 'H73');
                })(un || (un = {})),
                    (function (e) {
                        (e.C16x16 = '16x16'),
                            (e.C24x24 = '24x24'),
                            (e.C32x32 = '32x32'),
                            (e.C48x48 = '48x48'),
                            (e.C134x134 = '134x134');
                    })(tn || (tn = {}));
                const rn = (0, a.memo)(
                        ({
                            amount: e,
                            type: u,
                            iconSize: t,
                            labelSize: r,
                            isEnough: n = !0,
                            isHighlighted: o = !1,
                            isAmountVisible: i = !0,
                            isDiscount: l = !1,
                            isAnimated: c = !1,
                            isProgression: _ = !1,
                            classMix: d,
                        }) => {
                            const m = W.Z5.getNumberFormat(e, W.B3.GOLD),
                                E = (0, a.useMemo)(
                                    () => ({
                                        backgroundImage: `url('${R.images.historical_battles.gui.maps.icons.hbCoin.$dyn(`c_${t}`).$dyn(u)}')`,
                                    }),
                                    [u, t],
                                ),
                                A = C()(en.base, d),
                                g = C()(
                                    en.label,
                                    en[`label__${u}`],
                                    en[`label__size${r}`],
                                    o && en[`label__${u}Glow`],
                                    !n && en.label__notEnough,
                                    c && en.label__animated,
                                    _ && en.label__progression,
                                ),
                                F = C()(en.icon, en[`icon__size${t}`], c && en.icon__animated),
                                p = C()(en.stockBg, en[`stockBg__size${r}`]);
                            return s().createElement(
                                'div',
                                { className: A },
                                i && s().createElement(wt, { text: m, className: g }),
                                s().createElement('div', { className: F, style: E }),
                                l && s().createElement('div', { className: p }),
                            );
                        },
                    ),
                    nn = {
                        base: 'App_base_a6',
                        windowIn: 'App_windowIn_8e',
                        bgContainer: 'App_bgContainer_f4',
                        bg: 'App_bg_40',
                        base__finished: 'App_base__finished_2d',
                        desk: 'App_desk_56',
                        vignette: 'App_vignette_11',
                        bottomShadow: 'App_bottomShadow_b3',
                        buttonClose: 'App_buttonClose_0a',
                        buttonInfo: 'App_buttonInfo_c1',
                        content: 'App_content_0f',
                        coinTooltipContainer: 'App_coinTooltipContainer_00',
                        coinContainer: 'App_coinContainer_e7',
                        mainContent: 'App_mainContent_b7',
                        battleQuests: 'App_battleQuests_59',
                    },
                    an = 'offence',
                    sn = (0, U.observer)(() => {
                        const e = et(),
                            u = e.model,
                            t = e.controls,
                            r = u.computes,
                            n = u.curProgressPoints.get(),
                            o = r.currentLevel(),
                            i = 11 === o,
                            l = C()(nn.base, i && nn.base__finished),
                            c = {
                                backgroundImage: `url('${R.images.historical_battles.gui.maps.icons.backgrounds.desk.$dyn(`desk_${o}`)}')`,
                            },
                            _ = (0, a.useMemo)(
                                () => ({
                                    contentId: R.views.historical_battles.lobby.tooltips.HbCoinTooltip('resId'),
                                    args: { coinType: an },
                                }),
                                [],
                            );
                        return (
                            V(z.n.ESCAPE, t.onClose),
                            s().createElement(
                                'div',
                                { className: l },
                                s().createElement(
                                    'div',
                                    { className: nn.bgContainer },
                                    s().createElement('div', { className: nn.bg }),
                                    !i && s().createElement('div', { className: nn.desk, style: c }),
                                    s().createElement('div', { className: nn.vignette }),
                                    s().createElement('div', { className: nn.bottomShadow }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: nn.content },
                                    s().createElement(
                                        'div',
                                        { className: nn.buttonInfo },
                                        s().createElement(
                                            ne,
                                            { body: R.strings.hb_lobby.hangar.infoBtn.body() },
                                            s().createElement(ee, {
                                                caption: R.strings.menu.viewHeader.aboutBtn.label(),
                                                type: 'info',
                                                side: 'left',
                                                onClick: t.onAboutClicked,
                                            }),
                                        ),
                                    ),
                                    s().createElement(
                                        'div',
                                        { className: nn.buttonClose },
                                        s().createElement(ee, {
                                            caption: R.strings.menu.viewHeader.closeBtn.label(),
                                            type: 'close',
                                            side: 'right',
                                            onClick: t.onClose,
                                        }),
                                    ),
                                    s().createElement(yt, null),
                                    !i &&
                                        s().createElement(
                                            'div',
                                            { className: nn.coinTooltipContainer },
                                            s().createElement(
                                                q,
                                                _,
                                                s().createElement(
                                                    'div',
                                                    { className: nn.coinContainer },
                                                    s().createElement(rn, {
                                                        amount: n,
                                                        iconSize: tn.C24x24,
                                                        labelSize: un.H22,
                                                        isAnimated: !0,
                                                        isProgression: !0,
                                                        type: an,
                                                        classMix: nn.hbCoins,
                                                    }),
                                                ),
                                            ),
                                        ),
                                    s().createElement(
                                        'div',
                                        { className: nn.mainContent },
                                        s().createElement(Jr, null),
                                    ),
                                ),
                            )
                        );
                    }),
                    on = {
                        [G.PROGRESSION]: () =>
                            s().createElement(
                                Ju,
                                { options: { context: 'model.progressionModel' } },
                                s().createElement(sn, null),
                            ),
                    },
                    ln = ({ viewType: e }) => {
                        const u = on[e];
                        return u
                            ? s().createElement(
                                  a.Suspense,
                                  { fallback: s().createElement('div', null) },
                                  s().createElement(u, null),
                              )
                            : (console.error('Unknown view type for render', e), null);
                    },
                    cn = _e()(({ observableModel: e }) => {
                        const u = { root: e.object(), progressionModel: e.object('progressionModel') };
                        return Object.assign({}, u);
                    }, se),
                    _n = cn[0],
                    dn = cn[1],
                    mn = (0, U.observer)(() => {
                        const e = dn().model.root.get().viewType;
                        return s().createElement(
                            'div',
                            { className: 'App_base_7d' },
                            s().createElement(ln, { viewType: e }),
                        );
                    });
                engine.whenReady.then(() => {
                    I().render(
                        s().createElement(
                            O,
                            null,
                            s().createElement(
                                _n,
                                null,
                                s().createElement(
                                    'div',
                                    { className: 'ProgressionMainView_base_e5' },
                                    s().createElement(mn, null),
                                ),
                            ),
                        ),
                        document.getElementById('root'),
                    );
                });
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(e) {
        var u = __webpack_module_cache__[e];
        if (void 0 !== u) return u.exports;
        var t = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e].call(t.exports, t, t.exports, __webpack_require__), t.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, u, t, r) => {
            if (!u) {
                var n = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [u, t, r] = deferred[i], a = !0, s = 0; s < u.length; s++)
                        (!1 & r || n >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[s]))
                            ? u.splice(s--, 1)
                            : ((a = !1), r < n && (n = r));
                    if (a) {
                        deferred.splice(i--, 1);
                        var o = t();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            r = r || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > r; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [u, t, r];
        }),
        (__webpack_require__.n = (e) => {
            var u = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(u, { a: u }), u;
        }),
        (__webpack_require__.d = (e, u) => {
            for (var t in u)
                __webpack_require__.o(u, t) &&
                    !__webpack_require__.o(e, t) &&
                    Object.defineProperty(e, t, { enumerable: !0, get: u[t] });
        }),
        (__webpack_require__.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (__webpack_require__.o = (e, u) => Object.prototype.hasOwnProperty.call(e, u)),
        (__webpack_require__.r = (e) => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (() => {
            var e = { 782: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var r,
                        n,
                        [a, s, o] = t,
                        i = 0;
                    if (a.some((u) => 0 !== e[u])) {
                        for (r in s) __webpack_require__.o(s, r) && (__webpack_require__.m[r] = s[r]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (u && u(t); i < a.length; i++)
                        (n = a[i]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(9870));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
