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
                t.d(u, { O: () => z });
                var n = {};
                t.r(n), t.d(n, { mouse: () => _, onResize: () => l });
                var a = {};
                t.r(a),
                    t.d(a, {
                        events: () => n,
                        getMouseGlobalPosition: () => d,
                        getSize: () => E,
                        graphicsQuality: () => m,
                    });
                var r = {};
                t.r(r), t.d(r, { getBgUrl: () => F, getTextureUrl: () => A });
                var o = {};
                function i(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                function s(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.r(o),
                    t.d(o, {
                        addModelObserver: () => v,
                        addPreloadTexture: () => b,
                        children: () => r,
                        displayStatus: () => D,
                        displayStatusIs: () => W,
                        events: () => B,
                        extraSize: () => $,
                        forceTriggerMouseMove: () => I,
                        freezeTextureBeforeResize: () => S,
                        getBrowserTexturePath: () => f,
                        getDisplayStatus: () => P,
                        getScale: () => k,
                        getSize: () => x,
                        getViewGlobalPosition: () => M,
                        isEventHandled: () => H,
                        isFocused: () => O,
                        pxToRem: () => L,
                        remToPx: () => T,
                        resize: () => y,
                        sendEvent: () => g,
                        setAnimateWindow: () => N,
                        setEventHandled: () => R,
                        setInputPaddingsRem: () => p,
                        setSidePaddingsRem: () => w,
                        whenTutorialReady: () => G,
                    });
                const l = i('clientResized'),
                    c = { down: i('mousedown'), up: i('mouseup'), move: i('mousemove') },
                    _ = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function u() {
                            e.enabled && s(!1);
                        }
                        function t() {
                            e.enabled && s(!0);
                        }
                        function n() {
                            e.enabled
                                ? e.listeners < 1
                                    ? ((e.initialized = !1),
                                      document.body.removeEventListener('mouseenter', u),
                                      document.body.removeEventListener('mouseleave', t))
                                    : e.initialized ||
                                      ((e.initialized = !0),
                                      document.body.addEventListener('mouseenter', u),
                                      document.body.addEventListener('mouseleave', t))
                                : s(!1);
                        }
                        const a = ['down', 'up', 'move'].reduce(
                            (u, t) => (
                                (u[t] = (function (u) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let a = !0;
                                        const r = `mouse${u}`,
                                            o = c[u]((e) => t([e, 'outside']));
                                        function i(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(r, i),
                                            n(),
                                            () => {
                                                a &&
                                                    (o(),
                                                    window.removeEventListener(r, i),
                                                    (e.listeners -= 1),
                                                    n(),
                                                    (a = !1));
                                            }
                                        );
                                    };
                                })(t)),
                                u
                            ),
                            {},
                        );
                        return Object.assign({}, a, {
                            disable() {
                                (e.enabled = !1), n();
                            },
                            enable() {
                                (e.enabled = !0), n();
                            },
                            enableOutside() {
                                e.enabled && s(!0);
                            },
                            disableOutside() {
                                e.enabled && s(!1);
                            },
                        });
                    })();
                function E(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function d(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const m = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function A(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function F(e, u, t) {
                    return `url(${A(e, u, t)})`;
                }
                const D = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    B = {
                        onTextureFrozen: i('self.onTextureFrozen'),
                        onTextureReady: i('self.onTextureReady'),
                        onDomBuilt: i('self.onDomBuilt'),
                        onLoaded: i('self.onLoaded'),
                        onDisplayChanged: i('self.onShowingStatusChanged'),
                        onFocusUpdated: i('self.onFocusChanged'),
                        children: {
                            onAdded: i('children.onAdded'),
                            onLoaded: i('children.onLoaded'),
                            onRemoved: i('children.onRemoved'),
                            onAttached: i('children.onAttached'),
                            onTextureReady: i('children.onTextureReady'),
                            onRequestPosition: i('children.requestPosition'),
                        },
                    },
                    C = ['args'],
                    h = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                r = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                    return a;
                                })(u, C);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, r, {
                                          arguments:
                                              ((n = a),
                                              Object.entries(n).map(([e, u]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, r));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    g = {
                        close(e) {
                            h('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            h(64);
                        },
                        move(e) {
                            h(16, { isMouseEvent: !0, on: e });
                        },
                    };
                function b(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function p(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function f(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function v(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function w(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function x(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function y(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function M(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: T(u.x), y: T(u.y) };
                }
                function S() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function k() {
                    return viewEnv.getScale();
                }
                function L(e) {
                    return viewEnv.pxToRem(e);
                }
                function T(e) {
                    return viewEnv.remToPx(e);
                }
                function N(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function O() {
                    return viewEnv.isFocused();
                }
                function R() {
                    return viewEnv.setEventHandled();
                }
                function H() {
                    return viewEnv.isEventHandled();
                }
                function I() {
                    viewEnv.forceTriggerMouseMove();
                }
                function P() {
                    return viewEnv.getShowingStatus();
                }
                const W = Object.keys(D).reduce((e, u) => ((e[u] = () => viewEnv.getShowingStatus() === D[u]), e), {}),
                    $ = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    G = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : B.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    z = { view: o, client: a };
            },
            5521: (e, u, t) => {
                'use strict';
                let n, a;
                t.d(u, { n: () => n }),
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
                    })(n || (n = {})),
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
                    })(a || (a = {}));
            },
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                var n = t(5067);
                class a {
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
                        return window.__dataTracker || (window.__dataTracker = new a()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(e, u, t = 0, a = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = n.O.view.addModelObserver(e, t, a);
                        return (
                            r > 0
                                ? ((this._callbacks[r] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(r) : (this._views[t] = [r])))
                                : console.error("Can't add callback for model:", e),
                            r
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
                            const n = this._callbacks[t];
                            void 0 !== n && n(e, u);
                        });
                    }
                }
                a.__instance = void 0;
                const r = a;
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
                t.d(u, { Sw: () => r.Z, kH: () => d, B3: () => c, Z5: () => o, lf: () => E, B0: () => s, ry: () => C });
                class n {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: u, callback: t }) => {
                                    let n = e.target;
                                    do {
                                        if (n === u) return;
                                        n = n.parentNode;
                                    } while (n);
                                    t();
                                });
                            });
                    }
                    static get instance() {
                        return n.__instance || (n.__instance = new n()), n.__instance;
                    }
                    register(e, u) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: u });
                    }
                    unregister(e, u) {
                        const t = e,
                            n = u;
                        (this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== n)),
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
                n.__instance = void 0;
                const a = n;
                var r = t(1358);
                const o = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    i = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    };
                let s;
                var l;
                ((l = s || (s = {}))[(l.UNDEFINED = 0)] = 'UNDEFINED'),
                    (l[(l.TOOLTIP = 1)] = 'TOOLTIP'),
                    (l[(l.POP_OVER = 2)] = 'POP_OVER'),
                    (l[(l.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (l[(l.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (l[(l.MOVE = 16)] = 'MOVE'),
                    (l[(l.CLOSE = 32)] = 'CLOSE'),
                    (l[(l.MINIMIZE = 64)] = 'MINIMIZE');
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    _ = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = t(5521),
                    A = t(5067);
                const F = ['args'];
                function D(e, u, t, n, a, r, o) {
                    try {
                        var i = e[r](o),
                            s = i.value;
                    } catch (e) {
                        return void t(e);
                    }
                    i.done ? u(s) : Promise.resolve(s).then(n, a);
                }
                const B = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    C = (function () {
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
                                    return new Promise(function (n, a) {
                                        var r = e.apply(u, t);
                                        function o(e) {
                                            D(r, n, a, o, i, 'next', e);
                                        }
                                        function i(e) {
                                            D(r, n, a, o, i, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    h = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                r = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                    return a;
                                })(u, F);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, r, {
                                          arguments:
                                              ((n = a),
                                              Object.entries(n).map(([e, u]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, r));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    g = () => h(s.CLOSE),
                    b = (e, u) => {
                        e.keyCode === m.n.ESCAPE && u();
                    };
                var p = t(7572);
                const f = a.instance,
                    v = {
                        DataTracker: r.Z,
                        ViewModel: p.Z,
                        ViewEventType: s,
                        NumberFormatType: c,
                        RealFormatType: _,
                        TimeFormatType: E,
                        DateFormatType: d,
                        makeGlobalBoundingBox: B,
                        sendMoveEvent: (e) => h(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: g,
                        sendClosePopOverEvent: () => h(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            h(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, a = R.invalid('resId'), r) => {
                            const o = A.O.view.getViewGlobalPosition(),
                                i = t.getBoundingClientRect(),
                                l = i.x,
                                c = i.y,
                                _ = i.width,
                                E = i.height,
                                d = {
                                    x: A.O.view.pxToRem(l) + o.x,
                                    y: A.O.view.pxToRem(c) + o.y,
                                    width: A.O.view.pxToRem(_),
                                    height: A.O.view.pxToRem(E),
                                };
                            h(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: u,
                                bbox: B(d),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => b(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            b(e, g);
                        },
                        handleViewEvent: h,
                        onBindingsReady: C,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const n in u)
                                if (Object.prototype.hasOwnProperty.call(u, n)) {
                                    const a = Object.prototype.toString.call(u[n]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = u[n];
                                        t[n] = [];
                                        for (let u = 0; u < a.length; u++) t[n].push({ value: e(a[u].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = e(u[n]))
                                            : (t[n] = u[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: f,
                        SystemLocale: o,
                        UserLocale: i,
                    };
                window.ViewEnvHelper = v;
            },
            5136: (e, u, t) => {
                'use strict';
                var n = t(6179),
                    a = t.n(n);
                const r = (e, u, t) =>
                    u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                        ? (u.extraLargeHeight && t.extraLarge) ||
                          (u.largeHeight && t.large) ||
                          (u.mediumHeight && t.medium) ||
                          (u.smallHeight && t.small) ||
                          (u.extraSmallHeight && t.extraSmall)
                            ? e
                            : null
                        : e;
                var o = t(5067);
                const i = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var s;
                function l(e, u, t) {
                    const n = (function (e, u) {
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
                        a = (function (e, u) {
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
                        r = Math.min(n, a);
                    return {
                        extraLarge: r === t.extraLarge.weight,
                        large: r === t.large.weight,
                        medium: r === t.medium.weight,
                        small: r === t.small.weight,
                        extraSmall: r === t.extraSmall.weight,
                        extraLargeWidth: n === t.extraLarge.weight,
                        largeWidth: n === t.large.weight,
                        mediumWidth: n === t.medium.weight,
                        smallWidth: n === t.small.weight,
                        extraSmallWidth: n === t.extraSmall.weight,
                        extraLargeHeight: a === t.extraLarge.weight,
                        largeHeight: a === t.large.weight,
                        mediumHeight: a === t.medium.weight,
                        smallHeight: a === t.small.weight,
                        extraSmallHeight: a === t.extraSmall.weight,
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
                })(s || (s = {}));
                const c = o.O.client.getSize('rem'),
                    _ = c.width,
                    E = c.height,
                    d = Object.assign({ width: _, height: E }, l(_, E, i)),
                    m = (0, n.createContext)(d),
                    A = ['children'],
                    F = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, A);
                        const a = (0, n.useContext)(m),
                            o = a.extraLarge,
                            i = a.large,
                            s = a.medium,
                            l = a.small,
                            c = a.extraSmall,
                            _ = a.extraLargeWidth,
                            E = a.largeWidth,
                            d = a.mediumWidth,
                            F = a.smallWidth,
                            D = a.extraSmallWidth,
                            B = a.extraLargeHeight,
                            C = a.largeHeight,
                            h = a.mediumHeight,
                            g = a.smallHeight,
                            b = a.extraSmallHeight,
                            p = { extraLarge: B, large: C, medium: h, small: g, extraSmall: b };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && o) return u;
                            if (t.large && i) return u;
                            if (t.medium && s) return u;
                            if (t.small && l) return u;
                            if (t.extraSmall && c) return u;
                        } else {
                            if (t.extraLargeWidth && _) return r(u, t, p);
                            if (t.largeWidth && E) return r(u, t, p);
                            if (t.mediumWidth && d) return r(u, t, p);
                            if (t.smallWidth && F) return r(u, t, p);
                            if (t.extraSmallWidth && D) return r(u, t, p);
                            if (
                                !(
                                    t.extraLargeWidth ||
                                    t.largeWidth ||
                                    t.mediumWidth ||
                                    t.smallWidth ||
                                    t.extraSmallWidth
                                )
                            ) {
                                if (t.extraLargeHeight && B) return u;
                                if (t.largeHeight && C) return u;
                                if (t.mediumHeight && h) return u;
                                if (t.smallHeight && g) return u;
                                if (t.extraSmallHeight && b) return u;
                            }
                        }
                        return null;
                    };
                (F.defaultProps = {
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
                    (0, n.memo)(F);
                const D = (e) => {
                        const u = (0, n.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    },
                    B = (0, n.memo)(({ children: e }) => {
                        const u = (0, n.useContext)(m),
                            t = (0, n.useState)(u),
                            r = t[0],
                            s = t[1],
                            c = (0, n.useCallback)((e, u) => {
                                const t = o.O.view.pxToRem(e),
                                    n = o.O.view.pxToRem(u);
                                s(Object.assign({ width: t, height: n }, l(t, n, i)));
                            }, []);
                        D(() => {
                            engine.on('clientResized', c);
                        }),
                            (0, n.useEffect)(() => () => engine.off('clientResized', c), [c]);
                        const _ = (0, n.useMemo)(() => Object.assign({}, r), [r]);
                        return a().createElement(m.Provider, { value: _ }, e);
                    });
                var C = t(6483),
                    h = t.n(C),
                    g = t(926),
                    b = t.n(g);
                let p, f, v;
                !(function (e) {
                    (e[(e.ExtraSmall = i.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = i.small.width)] = 'Small'),
                        (e[(e.Medium = i.medium.width)] = 'Medium'),
                        (e[(e.Large = i.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = i.extraLarge.width)] = 'ExtraLarge');
                })(p || (p = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = i.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = i.small.width)] = 'Small'),
                            (e[(e.Medium = i.medium.width)] = 'Medium'),
                            (e[(e.Large = i.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = i.extraLarge.width)] = 'ExtraLarge');
                    })(f || (f = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = i.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = i.small.height)] = 'Small'),
                            (e[(e.Medium = i.medium.height)] = 'Medium'),
                            (e[(e.Large = i.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = i.extraLarge.height)] = 'ExtraLarge');
                    })(v || (v = {}));
                const w = () => {
                        const e = (0, n.useContext)(m),
                            u = e.width,
                            t = e.height,
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return p.ExtraLarge;
                                    case e.large:
                                        return p.Large;
                                    case e.medium:
                                        return p.Medium;
                                    case e.small:
                                        return p.Small;
                                    case e.extraSmall:
                                        return p.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), p.ExtraSmall;
                                }
                            })(e),
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return f.ExtraLarge;
                                    case e.largeWidth:
                                        return f.Large;
                                    case e.mediumWidth:
                                        return f.Medium;
                                    case e.smallWidth:
                                        return f.Small;
                                    case e.extraSmallWidth:
                                        return f.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), f.ExtraSmall;
                                }
                            })(e),
                            o = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return v.ExtraLarge;
                                    case e.largeHeight:
                                        return v.Large;
                                    case e.mediumHeight:
                                        return v.Medium;
                                    case e.smallHeight:
                                        return v.Small;
                                    case e.extraSmallHeight:
                                        return v.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), v.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: a, mediaWidth: r, mediaHeight: o, remScreenWidth: u, remScreenHeight: t };
                    },
                    x = ['children', 'className'];
                function y() {
                    return (
                        (y =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        y.apply(this, arguments)
                    );
                }
                const M = {
                        [f.ExtraSmall]: '',
                        [f.Small]: b().SMALL_WIDTH,
                        [f.Medium]: `${b().SMALL_WIDTH} ${b().MEDIUM_WIDTH}`,
                        [f.Large]: `${b().SMALL_WIDTH} ${b().MEDIUM_WIDTH} ${b().LARGE_WIDTH}`,
                        [f.ExtraLarge]: `${b().SMALL_WIDTH} ${b().MEDIUM_WIDTH} ${b().LARGE_WIDTH} ${b().EXTRA_LARGE_WIDTH}`,
                    },
                    S = {
                        [v.ExtraSmall]: '',
                        [v.Small]: b().SMALL_HEIGHT,
                        [v.Medium]: `${b().SMALL_HEIGHT} ${b().MEDIUM_HEIGHT}`,
                        [v.Large]: `${b().SMALL_HEIGHT} ${b().MEDIUM_HEIGHT} ${b().LARGE_HEIGHT}`,
                        [v.ExtraLarge]: `${b().SMALL_HEIGHT} ${b().MEDIUM_HEIGHT} ${b().LARGE_HEIGHT} ${b().EXTRA_LARGE_HEIGHT}`,
                    },
                    k = {
                        [p.ExtraSmall]: '',
                        [p.Small]: b().SMALL,
                        [p.Medium]: `${b().SMALL} ${b().MEDIUM}`,
                        [p.Large]: `${b().SMALL} ${b().MEDIUM} ${b().LARGE}`,
                        [p.ExtraLarge]: `${b().SMALL} ${b().MEDIUM} ${b().LARGE} ${b().EXTRA_LARGE}`,
                    },
                    L = (e) => {
                        let u = e.children,
                            t = e.className,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, x);
                        const r = w(),
                            o = r.mediaWidth,
                            i = r.mediaHeight,
                            s = r.mediaSize;
                        return a().createElement('div', y({ className: h()(t, M[o], S[i], k[s]) }, n), u);
                    },
                    T = ['children'],
                    N = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, T);
                        return a().createElement(B, null, a().createElement(L, t, u));
                    };
                var O = t(493),
                    H = t.n(O);
                function I(e) {
                    engine.call('PlaySound', e);
                }
                const P = {
                        playHighlight() {
                            I('highlight');
                        },
                        playClick() {
                            I('play');
                        },
                        playYes() {
                            I('yes1');
                        },
                    },
                    W = {
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
                    $ = [
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
                function G() {
                    return (
                        (G =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        G.apply(this, arguments)
                    );
                }
                class z extends a().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && I(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && I(this.props.soundClick);
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
                            n = e.goto,
                            r = e.side,
                            o = e.type,
                            i = e.classNames,
                            s = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            _ = e.onMouseUp,
                            E =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                    return a;
                                })(e, $)),
                            d = h()(W.base, W[`base__${o}`], W[`base__${r}`], null == i ? void 0 : i.base),
                            m = h()(W.icon, W[`icon__${o}`], W[`icon__${r}`], null == i ? void 0 : i.icon),
                            A = h()(W.glow, null == i ? void 0 : i.glow),
                            F = h()(W.caption, W[`caption__${o}`], null == i ? void 0 : i.caption),
                            D = h()(W.goto, null == i ? void 0 : i.goto);
                        return a().createElement(
                            'div',
                            G(
                                {
                                    className: d,
                                    onMouseEnter: this._onMouseEnter(s),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(_),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                E,
                            ),
                            'info' !== o && a().createElement('div', { className: W.shine }),
                            a().createElement('div', { className: m }, a().createElement('div', { className: A })),
                            a().createElement('div', { className: F }, u),
                            n && a().createElement('div', { className: D }, n),
                        );
                    }
                }
                z.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const U = (e = 1) => {
                    const u = new Error().stack;
                    let t,
                        n = R.invalid('resId');
                    return (
                        u &&
                            ((t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== t &&
                                window.subViews[t] &&
                                (n = window.subViews[t].id)),
                        { caller: t, stack: u, resId: n }
                    );
                };
                var j = t(4179);
                const V = [
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
                const K = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: j.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    Y = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            a = e.args,
                            r = e.onMouseEnter,
                            o = e.onMouseLeave,
                            i = e.onMouseDown,
                            s = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            _ = e.ignoreMouseClick,
                            E = void 0 !== _ && _,
                            d = e.decoratorId,
                            m = void 0 === d ? 0 : d,
                            A = e.isEnabled,
                            F = void 0 === A || A,
                            D = e.targetId,
                            B = void 0 === D ? 0 : D,
                            C = e.onShow,
                            h = e.onHide,
                            g = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, V);
                        const b = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            p = (0, n.useMemo)(() => B || U().resId, [B]),
                            f = (0, n.useCallback)(() => {
                                (b.current.isVisible && b.current.timeoutId) ||
                                    (K(t, m, { isMouseEvent: !0, on: !0, arguments: X(a) }, p),
                                    C && C(),
                                    (b.current.isVisible = !0));
                            }, [t, m, a, p, C]),
                            v = (0, n.useCallback)(() => {
                                if (b.current.isVisible || b.current.timeoutId) {
                                    const e = b.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (b.current.timeoutId = 0)),
                                        K(t, m, { on: !1 }, p),
                                        b.current.isVisible && h && h(),
                                        (b.current.isVisible = !1);
                                }
                            }, [t, m, p, h]),
                            w = (0, n.useCallback)((e) => {
                                b.current.isVisible &&
                                    ((b.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (b.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(b.current.prevTarget) && v();
                                    }, 200)));
                            }, []);
                        return (
                            (0, n.useEffect)(() => {
                                const e = b.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', w, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', w, { capture: !0 }),
                                            e && window.clearTimeout(e);
                                    }
                                );
                            }, []),
                            (0, n.useEffect)(() => {
                                !1 === F && v();
                            }, [F, v]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', v),
                                    () => {
                                        window.removeEventListener('mouseleave', v), v();
                                    }
                                ),
                                [v],
                            ),
                            F
                                ? (0, n.cloneElement)(
                                      u,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((x = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((b.current.timeoutId = window.setTimeout(f, c ? 100 : 400)),
                                                          r && r(e),
                                                          x && x(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  v(), null == o || o(u), null == e || e(u);
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  !1 === E && v(), null == s || s(u), null == e || e(u);
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  !1 === E && v(), null == i || i(u), null == e || e(u);
                                              })(u.props.onMouseDown),
                                          },
                                          g,
                                      ),
                                  )
                                : u
                        );
                        var x;
                    },
                    q = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Z() {
                    return (
                        (Z =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Z.apply(this, arguments)
                    );
                }
                const Q = R.views.common.tooltip_window.simple_tooltip_content,
                    J = (e) => {
                        let u = e.children,
                            t = e.body,
                            r = e.header,
                            o = e.note,
                            i = e.alert,
                            s = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, q);
                        const c = (0, n.useMemo)(() => {
                            const e = Object.assign({}, s, { body: t, header: r, note: o, alert: i });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [i, t, r, o, s]);
                        return a().createElement(
                            Y,
                            Z(
                                {
                                    contentId:
                                        ((_ = null == s ? void 0 : s.hasHtmlContent),
                                        _ ? Q.SimpleTooltipHtmlContent('resId') : Q.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var _;
                    };
                let ee;
                function ue(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(ee || (ee = {}));
                const te = (e) => e.replace(/&nbsp;/g, ' '),
                    ne = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    ae = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    re = (e, u, t = ee.left) => e.split(u).reduce(t === ee.left ? ne : ae, []),
                    oe = (() => {
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
                    ie = ['zh_cn', 'zh_sg', 'zh_tw'];
                let se;
                var le;
                ((le = se || (se = {})).SHORT_DATE = 'short-date'),
                    (le.SHORT_TIME = 'short-time'),
                    (le.SHORT_DATE_TIME = 'short-date-time'),
                    (le.FULL_DATE = 'full-date'),
                    (le.FULL_DATE_TIME = 'full-date-time'),
                    (le.MONTH = 'month'),
                    (le.MONTH_DATE = 'month-date'),
                    (le.DATE_MONTH = 'date-month'),
                    (le.MONTH_YEAR = 'month-year'),
                    (le.WEEK_DAY = 'week-day'),
                    (le.WEEK_DAY_TIME = 'week-day-time'),
                    (le.YEAR = 'year'),
                    (le.DATE_YEAR = 'date-year');
                function ce(e, u = ' ', t = 'SHORT_FORMAT', n = 'SHORT_FORMAT') {
                    return `${j.Z5.getDateFormat(e, j.kH[t])}${u}${j.Z5.getTimeFormat(e, j.lf[n])}`;
                }
                function _e(e = 0) {
                    let u = e;
                    const t = Math.trunc(u / 86400);
                    u -= 86400 * t;
                    const n = Math.trunc(u / 3600);
                    u -= 3600 * n;
                    const a = Math.trunc(u / 60);
                    return (u -= 60 * a), { days: t, hours: n, minutes: a, seconds: u };
                }
                Date.now();
                const Ee = (e, u = !0) =>
                        e.days > 7 && u
                            ? ue(R.strings.common.duration.days(), { days: e.days })
                            : e.days >= 1
                              ? 0 === e.hours
                                  ? ue(R.strings.common.duration.days(), { days: e.days })
                                  : `${ue(R.strings.common.duration.days(), { days: e.days })} ${ue(R.strings.common.duration.hours(), { hours: e.hours })}`
                              : e.hours >= 1
                                ? 0 === e.minutes
                                    ? ue(R.strings.common.duration.hours(), { hours: e.hours })
                                    : `${ue(R.strings.common.duration.hours(), { hours: e.hours })} ${ue(R.strings.common.duration.minutes(), { minutes: e.minutes })}`
                                : ue(R.strings.common.duration.minutes(), { minutes: e.minutes || 1 }),
                    de = () => {},
                    me = (e, u) => e.split('.').reduce((e, u) => e && e[u], u),
                    Ae = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    Fe = (e, u) => (e.length > 0 ? `${e}.${u}` : u),
                    De = j.Sw.instance;
                let Be;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(Be || (Be = {}));
                const Ce = (e = 'model', u = Be.Deep) => {
                        const t = (0, n.useState)(0),
                            a = (t[0], t[1]),
                            r = (0, n.useMemo)(() => U(), []),
                            o = r.caller,
                            i = r.resId,
                            s = (0, n.useMemo)(
                                () => (window.__feature && window.__feature !== o ? `subViews.${o}.${e}` : e),
                                [o, e],
                            ),
                            l = (0, n.useState)(() =>
                                ((e) => {
                                    const u = me(e, window);
                                    for (const e in u) 'function' == typeof u[e] && (u[e] = u[e].bind(u));
                                    return Ae(u) ? u.value : u;
                                })(
                                    ((e) =>
                                        ((e, u) =>
                                            e.split('.').reduce((e, u) => {
                                                const t = me(`${e}.${u}`, window);
                                                return Ae(t) ? ((e, u) => `${e}.${u}.value`)(e, u) : `${e}.${u}`;
                                            }))(e))(s),
                                ),
                            ),
                            c = l[0],
                            _ = l[1],
                            E = (0, n.useRef)(-1);
                        return (
                            D(() => {
                                if (
                                    ('boolean' == typeof u &&
                                        ((u = u ? Be.Deep : Be.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    u !== Be.None)
                                ) {
                                    const t = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            u === Be.Deep
                                                ? (e === c && a((e) => e + 1), _(e))
                                                : _(Object.assign([], e));
                                        },
                                        n = ((e) => {
                                            const u = ((e) => {
                                                    const u = U(),
                                                        t = u.caller,
                                                        n = u.resId,
                                                        a =
                                                            window.__feature && window.__feature !== t && t
                                                                ? `subViews.${t}`
                                                                : '';
                                                    return { modelPrefix: a, modelPath: Fe(a, ''), resId: n };
                                                })(),
                                                t = u.modelPrefix,
                                                n = e.split('.');
                                            if (n.length > 0) {
                                                const e = [n[0]];
                                                return (
                                                    n.reduce((u, n) => {
                                                        const a = me(Fe(t, `${u}.${n}`), window);
                                                        return Ae(a)
                                                            ? (e.push(a.id), `${u}.${n}.value`)
                                                            : (e.push(n), `${u}.${n}`);
                                                    }),
                                                    e.reduce((e, u) => e + '.' + u)
                                                );
                                            }
                                            return '';
                                        })(e);
                                    E.current = De.addCallback(n, t, i, u === Be.Deep);
                                }
                            }),
                            (0, n.useEffect)(() => {
                                if (u !== Be.None)
                                    return () => {
                                        De.removeCallback(E.current, i);
                                    };
                            }, [i, u]),
                            c
                        );
                    },
                    he =
                        (j.Sw.instance,
                        (e = 0, u, t = 0, a = de) => {
                            const r = (0, n.useState)(e),
                                o = r[0],
                                i = r[1];
                            return (
                                (0, n.useEffect)(() => {
                                    if (e > 0) {
                                        i(e);
                                        const n = Date.now(),
                                            r = setInterval(
                                                () => {
                                                    const u = e - Math.floor((Date.now() - n) / 1e3);
                                                    null !== t && u <= t ? (i(t), a && a(), clearInterval(r)) : i(u);
                                                },
                                                1e3 * (u || (e > 120 ? 60 : 1)),
                                            );
                                        return () => {
                                            clearInterval(r);
                                        };
                                    }
                                }, [e, u, t, a]),
                                o
                            );
                        }),
                    ge = (e = R.sounds.highlight()) => {
                        const u = (0, n.useState)(!1),
                            t = u[0],
                            a = u[1],
                            r = (0, n.useMemo)(
                                () => [
                                    () => {
                                        I(e), a(!0);
                                    },
                                    () => {
                                        a(!1);
                                    },
                                ],
                                [e],
                            );
                        return [t, r[0], r[1]];
                    };
                var be = t(5521);
                const pe = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function fe(e = be.n.NONE, u = pe, t = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== be.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (o.O.view.isEventHandled()) return;
                                o.O.view.setEventHandled(), u(n), t && n.stopPropagation();
                            }
                        }
                    }, [u, e, t]);
                }
                function ve(e, u) {
                    for (let a = 0; a < e.length; a++) {
                        const r =
                            ((t = e[a]),
                            (n = void 0),
                            t && 'value' in t && null != (n = t.constructor) && n.name.includes('ArrayItem')
                                ? null == t
                                    ? void 0
                                    : t.value
                                : t);
                        if (u(r, a, e)) return r;
                    }
                    var t, n;
                }
                const we = ({ isDisable: e, onMoveSpace: u, onOverSpace: t, onCursorChange: r }) => {
                        const o = (0, n.useState)(!1),
                            i = o[0],
                            s = o[1],
                            l = (0, n.useRef)(0),
                            c = (0, n.useRef)(0),
                            _ = (0, n.createRef)(),
                            E = (0, n.useCallback)(
                                (u) => {
                                    if (!_.current) return;
                                    if (e) return !1;
                                    const t = _.current.getBoundingClientRect(),
                                        n = t.width,
                                        a = t.height;
                                    return !(
                                        0 === u.clientX ||
                                        0 === u.clientY ||
                                        u.clientX >= n - 1 ||
                                        u.clientY >= a - 1
                                    );
                                },
                                [_, e],
                            ),
                            d = (0, n.useCallback)(
                                (e) => {
                                    if ((e.preventDefault(), !i || !E(e))) return;
                                    const t = e.clientX,
                                        n = e.clientY,
                                        a = t !== l.current ? t - l.current : 0,
                                        r = n !== c.current ? n - c.current : 0;
                                    (l.current = t), (c.current = n), u({ dx: a, dy: r, dz: 0 });
                                },
                                [E, i, l, c, u],
                            ),
                            m = (0, n.useCallback)(
                                (e) => {
                                    if ((e.preventDefault(), !E(e))) return;
                                    const t = e.deltaY < 0;
                                    u({ dx: 0, dy: 0, dz: t ? -600 : 600 });
                                },
                                [E, u],
                            ),
                            A = (0, n.useCallback)(() => {
                                r && r(!1), s(!1);
                            }, [r]);
                        (0, n.useEffect)(
                            () => (
                                document.addEventListener('mouseup', A),
                                () => {
                                    document.removeEventListener('mouseup', A);
                                }
                            ),
                            [A],
                        );
                        const F = (0, n.useCallback)(
                                (e) => {
                                    e.preventDefault(),
                                        0 === e.button &&
                                            E(e) &&
                                            (s(!0), r && r(!0), (l.current = e.clientX), (c.current = e.clientY));
                                },
                                [E, r],
                            ),
                            D = (0, n.useCallback)(() => {
                                t && t(!1);
                            }, [t]),
                            B = (0, n.useCallback)(() => {
                                t && t(!0);
                            }, [t]),
                            C = h()('SceneWrapper_grab_58', i && 'SceneWrapper_grab__down_ce');
                        return a().createElement(
                            'div',
                            { className: 'SceneWrapper_base_a5' },
                            a().createElement('div', {
                                ref: _,
                                className: C,
                                onMouseMove: d,
                                onMouseDown: F,
                                onWheel: m,
                                onMouseLeave: D,
                                onMouseOver: B,
                            }),
                        );
                    },
                    xe = 'BattleMode_icon_af',
                    ye = (0, n.memo)(
                        ({ label: e, tooltip: u, className: t, onButtonClick: r, onButtonHover: o, children: i }) => {
                            const s = ge(),
                                l = (s[0], s[1]),
                                c = s[2],
                                _ = (0, n.useCallback)(() => {
                                    P.playClick(), r();
                                }, [r]);
                            return a().createElement(
                                J,
                                { body: u },
                                a().createElement(
                                    'div',
                                    {
                                        className: h()(t, 'MenuButton_base_e9'),
                                        onClick: _,
                                        onMouseEnter: () => {
                                            l(), o && o(!0);
                                        },
                                        onMouseLeave: () => {
                                            c(), o && o(!1);
                                        },
                                    },
                                    i,
                                    a().createElement('div', { className: 'MenuButton_label_be' }, te(e)),
                                    a().createElement('div', { className: 'MenuButton_hoverBg_98' }),
                                ),
                            );
                        },
                    ),
                    Me = {
                        base: 'Counter_base_9e',
                        show: 'Counter_show_be',
                        base__big: 'Counter_base__big_19',
                        base__small: 'Counter_base__small_3b',
                        base__empty: 'Counter_base__empty_98',
                        base__animated: 'Counter_base__animated_40',
                        base__hidden: 'Counter_base__hidden_56',
                        hide: 'Counter_hide_b6',
                        bg: 'Counter_bg_74',
                        value: 'Counter_value_3e',
                        value__text: 'Counter_value__text_d6',
                        base__pattern: 'Counter_base__pattern_71',
                        plus: 'Counter_plus_15',
                        pattern: 'Counter_pattern_83',
                    },
                    Se = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function ke() {
                    return (
                        (ke =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        ke.apply(this, arguments)
                    );
                }
                const Le = (e) => {
                    let u = e.size,
                        t = e.value,
                        n = e.isEmpty,
                        r = e.fadeInAnimation,
                        o = e.hide,
                        i = e.maximumNumber,
                        s = e.className,
                        l = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                            return a;
                        })(e, Se);
                    const c = n ? null : t,
                        _ = 'string' == typeof c;
                    if ((c && !_ && c < 0) || 0 === c) return null;
                    const E = c && !_ && c > i,
                        d = h()(
                            Me.base,
                            Me[`base__${u}`],
                            r && Me.base__animated,
                            o && Me.base__hidden,
                            !c && Me.base__pattern,
                            n && Me.base__empty,
                            s,
                        );
                    return a().createElement(
                        'div',
                        ke({ className: d }, l),
                        a().createElement('div', { className: Me.bg }),
                        a().createElement('div', { className: Me.pattern }),
                        a().createElement(
                            'div',
                            { className: h()(Me.value, _ && Me.value__text) },
                            E ? i : c,
                            E && a().createElement('span', { className: Me.plus }, '+'),
                        ),
                    );
                };
                let Te;
                (Le.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 }),
                    (function (e) {
                        (e.Soon = 'soon'),
                            (e.Available = 'available'),
                            (e.Highlighted = 'highlighted'),
                            (e.Countdown = 'countdown');
                    })(Te || (Te = {}));
                var Ne = t(9887),
                    Oe = t.n(Ne);
                const Re = ['xl', 'lg', 'md', 'sm', 'xs'],
                    He = (e) => e.includes('_') && ((e) => Re.includes(e))(e.split('_').at(-1)),
                    Ie = [p.ExtraLarge, p.Large, p.Medium, p.Small, p.ExtraSmall],
                    Pe = (e, u) =>
                        Object.keys(e).reduce((t, n) => {
                            if (n in t) return t;
                            if (He(n)) {
                                const a = n.split('_').slice(0, -1).join('_');
                                if (a in t) return t;
                                const r = Ie.indexOf(u),
                                    o = (-1 !== r ? Re.slice(r) : [])
                                        .map((e) => a + '_' + e)
                                        .find((u) => void 0 !== e[u]),
                                    i = o ? e[o] : void 0;
                                return (t[a] = void 0 !== i ? i : e[a]), t;
                            }
                            const a = e[n];
                            return (
                                void 0 === a ||
                                    ((e, u) => Re.some((t) => void 0 !== u[`${e}_${t}`]))(n, e) ||
                                    (t[n] = a),
                                t
                            );
                        }, {}),
                    We = (e, u = Pe) => {
                        const t = (
                            (e, u = Pe) =>
                            (t) => {
                                const r = w().mediaSize,
                                    o = (0, n.useMemo)(() => u(t, r), [t, r]);
                                return a().createElement(e, o);
                            }
                        )(e, u);
                        return a().memo((u) =>
                            Object.keys(u).some((e) => He(e) && void 0 !== u[e])
                                ? a().createElement(t, u)
                                : a().createElement(e, u),
                        );
                    },
                    $e = {
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
                    Ge = [
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
                function ze() {
                    return (
                        (ze =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        ze.apply(this, arguments)
                    );
                }
                Object.keys(Oe());
                const Ue = {
                        XL: { mt: $e.mt__XL, mr: $e.mr__XL, mb: $e.mb__XL, ml: $e.ml__XL },
                        LG: { mt: $e.mt__LG, mr: $e.mr__LG, mb: $e.mb__LG, ml: $e.ml__LG },
                        MDp: { mt: $e.mt__MDp, mr: $e.mr__MDp, mb: $e.mb__MDp, ml: $e.ml__MDp },
                        MD: { mt: $e.mt__MD, mr: $e.mr__MD, mb: $e.mb__MD, ml: $e.ml__MD },
                        SMp: { mt: $e.mt__SMp, mr: $e.mr__SMp, mb: $e.mb__SMp, ml: $e.ml__SMp },
                        SM: { mt: $e.mt__SM, mr: $e.mr__SM, mb: $e.mb__SM, ml: $e.ml__SM },
                        XS: { mt: $e.mt__XS, mr: $e.mr__XS, mb: $e.mb__XS, ml: $e.ml__XS },
                    },
                    je = (Object.keys(Ue), ['mt', 'mr', 'mb', 'ml']),
                    Ve = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    Xe = We((e) => {
                        let u = e.className,
                            t = e.width,
                            r = e.height,
                            o = e.m,
                            i = e.mt,
                            s = void 0 === i ? o : i,
                            l = e.mr,
                            c = void 0 === l ? o : l,
                            _ = e.mb,
                            E = void 0 === _ ? o : _,
                            d = e.ml,
                            m = void 0 === d ? o : d,
                            A = e.column,
                            F = e.row,
                            D = e.flexDirection,
                            B = void 0 === D ? (A ? 'column' : F && 'row') || void 0 : D,
                            C = e.flexStart,
                            g = e.center,
                            b = e.flexEnd,
                            p = e.spaceBetween,
                            f = e.spaceAround,
                            v = e.justifyContent,
                            w =
                                void 0 === v
                                    ? (C ? 'flex-start' : g && 'center') ||
                                      (b && 'flex-end') ||
                                      (p && 'space-between') ||
                                      (f && 'space-around') ||
                                      void 0
                                    : v,
                            x = e.alignItems,
                            y = void 0 === x ? (C ? 'flex-start' : g && 'center') || (b && 'flex-end') || void 0 : x,
                            M = e.alignSelf,
                            S = e.wrap,
                            k = e.flexWrap,
                            L = void 0 === k ? (S ? 'wrap' : void 0) : k,
                            T = e.grow,
                            N = e.shrink,
                            O = e.flex,
                            R = void 0 === O ? (T || N ? `${T ? 1 : 0} ${N ? 1 : 0} auto` : void 0) : O,
                            H = e.style,
                            I = e.children,
                            P = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, Ge);
                        const W = (0, n.useMemo)(() => {
                                const e = { mt: s, mr: c, mb: E, ml: m },
                                    u = ((e) =>
                                        je.reduce((u, t) => {
                                            const n = e[t];
                                            return n && 'number' != typeof n ? u.concat(Ue[!0 === n ? 'MD' : n][t]) : u;
                                        }, []))(e),
                                    n = ((e) =>
                                        je.reduce((u, t) => {
                                            const n = e[t];
                                            return 'number' == typeof n && (u[Ve[t]] = n + 'rem'), u;
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, H, n, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== r && 'number' == typeof r ? r + 'rem' : r,
                                        flex: R,
                                        alignSelf: M,
                                        display: B || y ? 'flex' : void 0,
                                        flexDirection: B,
                                        flexWrap: L,
                                        justifyContent: w,
                                        alignItems: y,
                                    }),
                                    computedClassNames: u,
                                };
                            }, [t, r, s, c, E, m, H, R, M, B, L, w, y]),
                            $ = W.computedStyle,
                            G = W.computedClassNames;
                        return a().createElement('div', ze({ className: h()($e.base, ...G, u), style: $ }, P), I);
                    }),
                    Ke = ({ binding: e, text: u = '', classMix: t, alignment: r = ee.left }) =>
                        null === u
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : a().createElement(
                                  n.Fragment,
                                  null,
                                  u.split('\n').map((u, o) =>
                                      a().createElement(
                                          'div',
                                          { className: h()('FormatText_base_d0', t), key: `${u}-${o}` },
                                          ((e, u, t) =>
                                              e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                                                  t && e in t
                                                      ? t[e]
                                                      : ((e, u = ee.left) => {
                                                            const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                            return ie.includes(t)
                                                                ? oe(e)
                                                                : ((e, u = ee.left) => {
                                                                      let t = [];
                                                                      const n =
                                                                              /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                          a = te(e);
                                                                      return (
                                                                          re(a, /( )/, u).forEach(
                                                                              (e) => (t = t.concat(re(e, n, ee.left))),
                                                                          ),
                                                                          t
                                                                      );
                                                                  })(e, u);
                                                        })(e, u),
                                              ))(u, r, e).map((e, u) =>
                                              a().createElement(n.Fragment, { key: `${u}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              );
                var Ye = t(3532),
                    qe = t.n(Ye);
                const Ze = {
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
                    Qe = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function Je() {
                    return (
                        (Je =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Je.apply(this, arguments)
                    );
                }
                Object.keys(Oe());
                const eu = Object.keys(qe()),
                    uu = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    tu = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    nu = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    au =
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
                            'heading-H56': uu,
                            'heading-H36': uu,
                            'heading-H28': tu,
                            'heading-H24': tu,
                            'heading-H24R': tu,
                            'heading-H22': tu,
                            'heading-H20R': tu,
                            'heading-H18': tu,
                            'heading-H15': nu,
                            'heading-H14': nu,
                            'paragraph-P24': tu,
                            'paragraph-P18': tu,
                            'paragraph-P16': tu,
                            'paragraph-P14': nu,
                            'paragraph-P12': nu,
                            'paragraph-P10': nu,
                        }),
                    ru =
                        (Object.keys(au),
                        (e) =>
                            e
                                ? ((e) => eu.includes(e))(e)
                                    ? { colorClassName: Ze[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    ou = We((e) => {
                        let u = e.text,
                            t = e.variant,
                            r = e.className,
                            o = e.color,
                            i = e.m,
                            s = e.mt,
                            l = void 0 === s ? i : s,
                            c = e.mr,
                            _ = void 0 === c ? i : c,
                            E = e.mb,
                            d = void 0 === E ? i : E,
                            m = e.ml,
                            A = void 0 === m ? i : m,
                            F = e.style,
                            D = e.format,
                            B = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, Qe);
                        const C = (0, n.useMemo)(() => {
                                const e = ru(o),
                                    u = e.colorClassName,
                                    t = e.colorStyle,
                                    n = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, F, n), colorClassName: u };
                            }, [F, o]),
                            g = C.computedStyle,
                            b = C.colorClassName;
                        return a().createElement(
                            Xe,
                            Je(
                                {
                                    className: h()(Ze.base, t && Ze[t], b, r),
                                    style: g,
                                    mt: !0 === l ? au[t || 'paragraph-P16'].mt : l,
                                    mr: !0 === _ ? au[t || 'paragraph-P16'].mr : _,
                                    mb: !0 === d ? au[t || 'paragraph-P16'].mb : d,
                                    ml: !0 === A ? au[t || 'paragraph-P16'].ml : A,
                                },
                                B,
                            ),
                            void 0 !== D ? a().createElement(Ke, Je({}, D, { text: u })) : u,
                        );
                    }),
                    iu = {
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
                let su, lu;
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
                })(su || (su = {})),
                    (function (e) {
                        (e.C16x16 = '16x16'),
                            (e.C24x24 = '24x24'),
                            (e.C32x32 = '32x32'),
                            (e.C48x48 = '48x48'),
                            (e.C134x134 = '134x134');
                    })(lu || (lu = {}));
                const cu = (0, n.memo)(
                        ({
                            amount: e,
                            type: u,
                            iconSize: t,
                            labelSize: r,
                            isEnough: o = !0,
                            isHighlighted: i = !1,
                            isAmountVisible: s = !0,
                            isDiscount: l = !1,
                            isAnimated: c = !1,
                            isProgression: _ = !1,
                            classMix: E,
                        }) => {
                            const d = j.Z5.getNumberFormat(e, j.B3.GOLD),
                                m = (0, n.useMemo)(
                                    () => ({
                                        backgroundImage: `url('${R.images.historical_battles.gui.maps.icons.hbCoin.$dyn(`c_${t}`).$dyn(u)}')`,
                                    }),
                                    [u, t],
                                ),
                                A = h()(iu.base, E),
                                F = h()(
                                    iu.label,
                                    iu[`label__${u}`],
                                    iu[`label__size${r}`],
                                    i && iu[`label__${u}Glow`],
                                    !o && iu.label__notEnough,
                                    c && iu.label__animated,
                                    _ && iu.label__progression,
                                ),
                                D = h()(iu.icon, iu[`icon__size${t}`], c && iu.icon__animated),
                                B = h()(iu.stockBg, iu[`stockBg__size${r}`]);
                            return a().createElement(
                                'div',
                                { className: A },
                                s && a().createElement(ou, { text: d, className: F }),
                                a().createElement('div', { className: D, style: m }),
                                l && a().createElement('div', { className: B }),
                            );
                        },
                    ),
                    _u = (0, n.memo)(({ duration: e, classMix: u }) => {
                        const t = (0, n.useMemo)(() => {
                            const u = _e(Math.max(300, e));
                            return (e < 300 ? '< ' : '') + Ee(u, u.days >= 31);
                        }, [e]);
                        return a().createElement('span', { className: u }, t);
                    }),
                    Eu = (0, n.memo)(({ duration: e, classMix: u }) =>
                        a().createElement(_u, { duration: he(e), classMix: u }),
                    ),
                    du = {
                        base: 'Timer_base_da',
                        iconWrapper: 'Timer_iconWrapper_ff',
                        icon: 'Timer_icon_01',
                        label: 'Timer_label_04',
                        base__highlightedStyle: 'Timer_base__highlightedStyle_6d',
                        base__accentStyle: 'Timer_base__accentStyle_3d',
                        time: 'Timer_time_79',
                    };
                let mu;
                !(function (e) {
                    (e.Default = 'default'), (e.Accent = 'accent'), (e.Highlighted = 'highlighted');
                })(mu || (mu = {}));
                const Au = (0, n.memo)(
                        ({
                            duration: e,
                            label: u,
                            timerStyle: t = mu.Default,
                            isTickEnabled: n = !0,
                            showTime: r = !0,
                        }) => {
                            const o = h()(du.base, du[`base__${t}Style`]);
                            return a().createElement(
                                'div',
                                { className: o },
                                a().createElement(
                                    'div',
                                    { className: du.iconWrapper },
                                    a().createElement('div', { className: du.icon }),
                                ),
                                a().createElement('span', { className: du.label }, u),
                                r &&
                                    (n
                                        ? a().createElement(Eu, { duration: e, classMix: du.time })
                                        : a().createElement(_u, { duration: e, classMix: du.time })),
                            );
                        },
                    ),
                    Fu = ['disabled', 'children', 'frontName', 'classMix'],
                    Du = (0, n.memo)((e) => {
                        let u = e.disabled,
                            t = e.children,
                            r = e.frontName,
                            o = e.classMix,
                            i = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, Fu);
                        const s = (0, n.useMemo)(
                            () => ({
                                contentId: R.views.historical_battles.lobby.tooltips.BattleModeInfoTooltip('resId'),
                                args: { frontName: r },
                            }),
                            [r],
                        );
                        return u
                            ? a().createElement(J, i, a().createElement('div', { className: o }, t))
                            : a().createElement(Y, s, a().createElement('div', { className: o }, t));
                    }),
                    Bu = {
                        base: 'ModeButton_base_2f',
                        base__nonInteractive: 'ModeButton_base__nonInteractive_87',
                        contentWrapper: 'ModeButton_contentWrapper_35',
                        base__highlighted: 'ModeButton_base__highlighted_f5',
                        base__available: 'ModeButton_base__available_e8',
                        base__disabled: 'ModeButton_base__disabled_62',
                        base__selected: 'ModeButton_base__selected_58',
                        base__hovered: 'ModeButton_base__hovered_24',
                        content: 'ModeButton_content_88',
                        labelWrapper: 'ModeButton_labelWrapper_87',
                        info: 'ModeButton_info_29',
                        coin: 'ModeButton_coin_06',
                        counter: 'ModeButton_counter_47',
                        label: 'ModeButton_label_34',
                        pendingFrontLabel: 'ModeButton_pendingFrontLabel_51',
                        swfArrows: 'ModeButton_swfArrows_f3',
                        bg: 'ModeButton_bg_33',
                        opacity: 'ModeButton_opacity_8a',
                        cloudBg: 'ModeButton_cloudBg_97',
                        shineBg: 'ModeButton_shineBg_ad',
                        highLightSwf: 'ModeButton_highLightSwf_0d',
                        base__counterattack: 'ModeButton_base__counterattack_4c',
                        highLightBg: 'ModeButton_highLightBg_83',
                        pulse: 'ModeButton_pulse_0e',
                    },
                    Cu = R.strings.hb_lobby.battleMode.pendingFrontLabel(),
                    hu = R.strings.hb_lobby.battleMode.countdownLabel(),
                    gu = R.images.historical_battles.gui.maps.icons.battleMode.selected,
                    bu = (0, n.memo)(
                        ({
                            frontName: e,
                            isSelected: u,
                            frontState: t,
                            isDisabled: r,
                            countDownSeconds: o,
                            earningsType: i,
                            earningsAmount: s,
                            disableReason: l,
                            isFadeAnimating: c,
                        }) => {
                            const _ = (0, n.useState)(u),
                                E = _[0],
                                d = _[1],
                                A = (0, n.useContext)(m),
                                F = u ? su.H24 : su.H22,
                                D = A.extraSmall || A.small ? su.H18 : F,
                                B = ge(),
                                C = B[0],
                                g = B[1],
                                b = B[2],
                                p = C && !r,
                                f = e + 'mask',
                                v = (0, n.useState)(!1),
                                w = v[0],
                                x = v[1],
                                y = (0, n.useState)(!1),
                                M = y[0],
                                S = y[1],
                                k = (0, n.useMemo)(
                                    () => ({
                                        contentId: R.views.historical_battles.lobby.tooltips.HbCoinTooltip('resId'),
                                        args: { coinType: i },
                                    }),
                                    [i],
                                ),
                                L = (0, n.useMemo)(() => `${gu.$dyn(e)}`, [e]),
                                T = (0, n.useMemo)(
                                    () => ({
                                        maskImage: `url('swf://gui/flash/animations/historicalBattles/battleMode/maskBtn.swf?name=${f}')`,
                                    }),
                                    [f],
                                ),
                                N = (0, n.useMemo)(
                                    () =>
                                        `${t === Te.Soon || t === Te.Countdown ? 'swf://gui/flash/animations/historicalBattles/battleMode/inactive/' : 'swf://gui/flash/animations/historicalBattles/battleMode/selected/'}${e}.swf?name=${e}`,
                                    [t, e],
                                );
                            (0, n.useEffect)(() => {
                                if (w && M) {
                                    if ((swfPlayer.gotoAndStop(e, 1), swfPlayer.gotoAndStop(f, 1), E)) {
                                        S(!1),
                                            x(!1),
                                            swfPlayer.gotoAndPlay(e, 2),
                                            swfPlayer.gotoAndPlay(f, 2),
                                            I('ev_2020_secret_event_hangar_ui_banner');
                                        const u = window.setTimeout(() => {
                                            d(!1);
                                        }, 1200);
                                        return () => window.clearTimeout(u);
                                    }
                                    swfPlayer.gotoAndStop(e, 60), swfPlayer.gotoAndStop(f, 60);
                                }
                            }, [w, M, E, e, f]);
                            const O = (0, n.useCallback)(() => {
                                    S(!0);
                                }, [S]),
                                H = (0, n.useCallback)(() => {
                                    x(!0);
                                }, [x]),
                                P = h()(
                                    Bu.base,
                                    Bu[`base__${e}`],
                                    Bu[`base__${t}`],
                                    u && Bu.base__selected,
                                    r && Bu.base__disabled,
                                    p && Bu.base__hovered,
                                    (c || (E && !u)) && Bu.base__nonInteractive,
                                );
                            return a().createElement(
                                'div',
                                { className: P },
                                a().createElement(
                                    Du,
                                    {
                                        disabled: r && !u,
                                        frontName: e,
                                        body: l && R.strings.hb_lobby.battleMode.disabled.$dyn(l),
                                        header: R.strings.hb_lobby.battleMode.disabled.title(),
                                        classMix: Bu.contentWrapper,
                                    },
                                    a().createElement(
                                        'div',
                                        { onMouseEnter: g, onMouseLeave: b, className: Bu.content },
                                        a().createElement(
                                            'div',
                                            { className: Bu.labelWrapper },
                                            a().createElement(
                                                'div',
                                                { className: Bu.counter },
                                                a().createElement(Le, { value: '!', size: 'small' }),
                                            ),
                                        ),
                                        a().createElement(
                                            'div',
                                            { className: Bu.info },
                                            t === Te.Available || t === Te.Highlighted
                                                ? a().createElement(
                                                      Y,
                                                      k,
                                                      a().createElement(
                                                          'div',
                                                          null,
                                                          a().createElement(cu, {
                                                              type: i,
                                                              amount: s,
                                                              iconSize: lu.C32x32,
                                                              labelSize: D,
                                                              isHighlighted: u,
                                                              isAnimated: !0,
                                                              classMix: Bu.coin,
                                                          }),
                                                      ),
                                                  )
                                                : a().createElement(Au, {
                                                      duration: o,
                                                      label: t === Te.Countdown ? hu : Cu,
                                                      showTime: t === Te.Countdown,
                                                  }),
                                        ),
                                    ),
                                ),
                                a().createElement('img', {
                                    className: Bu.bg,
                                    src: L,
                                    style: T,
                                    onLoad: H,
                                    alt: 'swfBgAlt',
                                }),
                                a().createElement('img', {
                                    className: Bu.swfArrows,
                                    src: N,
                                    onLoad: O,
                                    alt: 'swfArrowsAlt',
                                }),
                                a().createElement('div', { className: Bu.cloudBg }),
                                a().createElement('div', { className: Bu.shineBg }),
                                a().createElement('div', { className: Bu.highLightBg }),
                                a().createElement('div', { className: Bu.highLightSwf }),
                            );
                        },
                    );
                function pu() {
                    return (
                        (pu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        pu.apply(this, arguments)
                    );
                }
                const fu = R.strings.hb_shop.shopLabel(),
                    vu = R.strings.hb_lobby.shopButton.tooltip.body(),
                    wu = R.strings.hb_lobby.progressionMenu.label(),
                    xu = R.strings.hb_lobby.progressionMenu.tooltip(),
                    yu = (0, n.memo)(
                        ({
                            isDisabled: e,
                            disableReason: u,
                            selectedMode: t,
                            isFadeAnimating: r,
                            canShowAnimation: o,
                        }) => {
                            const i = Ce('model.battleModeWidget.battleModes'),
                                s = Ce('model.progressionButton').onProgressionButtonClick,
                                l = Ce('model.shopButton').onShopButtonClick,
                                c = i[0].value,
                                _ = (0, n.useState)(!1),
                                E = _[0],
                                d = _[1],
                                m = (0, n.useState)(!1),
                                A = m[0],
                                F = m[1],
                                D = h()('BattleMode_shadowRight_0b', E && 'BattleMode_shadowRight__hover_7e'),
                                B = h()('BattleMode_shadowLeft_54', A && 'BattleMode_shadowLeft__hover_b8');
                            return a().createElement(
                                'div',
                                { className: 'BattleMode_base_fe' },
                                a().createElement('div', { className: B }),
                                a().createElement('div', { className: D }),
                                e && a().createElement('div', { className: 'BattleMode_disabledBg_8c' }),
                                a().createElement(
                                    'div',
                                    { className: 'BattleMode_buttonsPanel_4c' },
                                    a().createElement(
                                        ye,
                                        {
                                            label: fu,
                                            tooltip: vu,
                                            className: 'BattleMode_leftButtonContainer_19',
                                            onButtonClick: l,
                                            onButtonHover: F,
                                        },
                                        a().createElement('div', { className: h()(xe, 'BattleMode_shopIcon_ce') }),
                                    ),
                                    a().createElement(
                                        'div',
                                        { className: 'BattleMode_modeButton_91' },
                                        o &&
                                            a().createElement(
                                                bu,
                                                pu({}, c, {
                                                    isDisabled: e,
                                                    isSelected: c.frontName === t,
                                                    disableReason: u,
                                                    earningsType: c.earnings.type,
                                                    earningsAmount: c.earnings.amount,
                                                    isFadeAnimating: r,
                                                }),
                                            ),
                                    ),
                                    a().createElement(
                                        ye,
                                        {
                                            label: wu,
                                            tooltip: xu,
                                            className: 'BattleMode_rightButtonContainer_fd',
                                            onButtonClick: s,
                                            onButtonHover: d,
                                        },
                                        a().createElement('div', {
                                            className: h()(xe, 'BattleMode_progressionIcon_37'),
                                        }),
                                    ),
                                ),
                            );
                        },
                    ),
                    Mu = (0, n.memo)(({ classMix: e, selectedMode: u, onAnimationChanged: t }) => {
                        const r = Ce('model.battleModeWidget', Be.None).onBattleModeChanged,
                            o = (0, n.useRef)(u),
                            i = (0, n.useRef)(-1),
                            s = (0, n.useState)(!1),
                            l = s[0],
                            c = s[1],
                            _ = (0, n.useMemo)(() => ({ transitionDuration: (l ? 150 : 350) + 'ms' }), [l]);
                        (0, n.useEffect)(() => {
                            if (o.current !== u)
                                return (
                                    (o.current = u),
                                    t(!0),
                                    (i.current = window.setTimeout(() => {
                                        r({ frontName: u }),
                                            (i.current = window.setTimeout(() => {
                                                c(!1),
                                                    (i.current = window.setTimeout(() => {
                                                        t(!1);
                                                    }, 150));
                                            }, 600));
                                    }, 350)),
                                    c(!0),
                                    () => {
                                        -1 !== i.current && clearTimeout(i.current);
                                    }
                                );
                        }, [u, r, t]);
                        const E = h()('FadingCover_base_0b', l && 'FadingCover_base__isVisible_72', e);
                        return a().createElement('div', { className: E, style: _ });
                    }),
                    Su = a().memo(({ icon: e, isActive: u }) => {
                        const t = (0, n.useMemo)(() => ({ backgroundImage: `url(${e})` }), [e]),
                            r = h()('Icon_base_0e', u && 'Icon_base__active_13');
                        return a().createElement('div', { className: r, style: t });
                    }),
                    ku = a().memo(({ frontmanId: e, polygon: u }) => {
                        const t = (0, n.useContext)(m),
                            r = ((e, u) => {
                                const t = (0, n.useRef)(null),
                                    a = (0, n.useState)(!1),
                                    r = a[0],
                                    o = a[1],
                                    i = (0, n.useMemo)(() => {
                                        const u = e.split(' '),
                                            t = [];
                                        for (let e = 0; e < u.length; e += 2)
                                            t.push([parseInt(u[e]), parseInt(u[e + 1])]);
                                        return t;
                                    }, [e]);
                                return [
                                    (0, n.useCallback)(
                                        (e) => {
                                            if ((e.preventDefault(), t.current)) {
                                                const n = t.current.getBoundingClientRect(),
                                                    a = n.x,
                                                    s = n.y,
                                                    l = ((e, u, t) => {
                                                        let n = !1;
                                                        for (let a = 0, r = t.length - 1; a < t.length; r = a++) {
                                                            const o = t[a][0],
                                                                i = t[a][1],
                                                                s = t[r][0],
                                                                l = t[r][1];
                                                            i > u != l > u &&
                                                                e < ((s - o) * (u - i)) / (l - i) + o &&
                                                                (n = !n);
                                                        }
                                                        return n;
                                                    })((e.clientX - a) * u, (e.clientY - s) * u, i);
                                                l !== r && o(l);
                                            }
                                        },
                                        [r, o, i, u],
                                    ),
                                    (0, n.useMemo)(() => ({ display: r ? 'none' : 'flex' }), [r]),
                                    t,
                                ];
                            })(
                                u,
                                ((e) => {
                                    switch (!0) {
                                        case e.extraSmall:
                                        case e.small:
                                            return 1.2767123287671234;
                                        case e.medium:
                                            return 1;
                                        case e.large:
                                            return 0.7952218430034129;
                                        case e.extraLarge:
                                            return 0.6657142857142857;
                                    }
                                    return 466;
                                })(t),
                            ),
                            o = r[0],
                            i = r[1],
                            s = r[2],
                            l = (0, n.useMemo)(
                                () => ({
                                    contentId: R.views.historical_battles.lobby.tooltips.FrontmanTooltip('resId'),
                                    args: { frontmanID: e },
                                    ignoreMouseClick: !0,
                                    ignoreShowDelay: !0,
                                }),
                                [e],
                            ),
                            c = (0, n.useMemo)(
                                () =>
                                    t.small
                                        ? R.images.historical_battles.gui.maps.icons.frontman.c_380x500
                                        : t.medium
                                          ? R.images.historical_battles.gui.maps.icons.frontman.c_466x580
                                          : t.large
                                            ? R.images.historical_battles.gui.maps.icons.frontman.c_586x728
                                            : t.extraLarge
                                              ? R.images.historical_battles.gui.maps.icons.frontman.c_840x1008
                                              : R.images.historical_battles.gui.maps.icons.frontman.c_365x454,
                                [t],
                            );
                        return a().createElement(
                            'div',
                            { onMouseMove: o, ref: s },
                            a().createElement('div', { className: 'FrontmanBgIcon_tooltipBlocker_0e', style: i }),
                            a().createElement(
                                Y,
                                l,
                                a().createElement(
                                    'div',
                                    { className: 'FrontmanBgIcon_base_7d' },
                                    [...Array(3)].map((u, t) =>
                                        a().createElement(
                                            'div',
                                            { key: t, className: 'FrontmanBgIcon_item_85' },
                                            c && a().createElement(Su, { icon: c.$num(t + 1), isActive: t + 1 === e }),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    });
                let Lu, Tu;
                !(function (e) {
                    (e.Engineer = 'engineer'), (e.Aviation = 'aviation'), (e.Artillery = 'artillery');
                })(Lu || (Lu = {})),
                    (function (e) {
                        (e.Default = 'default'), (e.InBattle = 'inBattle'), (e.InPlatoon = 'inPlatoon');
                    })(Tu || (Tu = {}));
                const Nu = ({ content: e, classMix: u }) => {
                        const t = (0, n.useRef)(null),
                            r = (0, n.useState)(!0),
                            o = r[0],
                            i = r[1];
                        return (
                            (0, n.useEffect)(() =>
                                ((e) => {
                                    let u,
                                        n = null;
                                    return (
                                        (n = requestAnimationFrame(() => {
                                            n = requestAnimationFrame(() => {
                                                (n = null),
                                                    (u = (() => {
                                                        const e = t.current;
                                                        e && e.offsetWidth >= e.scrollWidth && i(!1);
                                                    })());
                                            });
                                        })),
                                        () => {
                                            'function' == typeof u && u(), null !== n && cancelAnimationFrame(n);
                                        }
                                    );
                                })(),
                            ),
                            a().createElement(
                                J,
                                { isEnabled: o, body: e },
                                a().createElement('div', { ref: t, className: h()('TextOverflow_base_3b', u) }, e),
                            )
                        );
                    },
                    Ou = {
                        base: 'VehicleType_base_62',
                        base__c_16x16: 'VehicleType_base__c_16x16_b9',
                        base__c_24x24: 'VehicleType_base__c_24x24_54',
                        base__c_48x48: 'VehicleType_base__c_48x48_11',
                        base__c_60x60: 'VehicleType_base__c_60x60_a1',
                        base__c_83x74: 'VehicleType_base__c_83x74_26',
                    };
                let Ru, Hu;
                !(function (e) {
                    (e.C24x24 = 'c_24x24'), (e.C83x74 = 'c_83x74');
                })(Ru || (Ru = {})),
                    (function (e) {
                        (e.Silver = 'silver'), (e.Elite = 'elite');
                    })(Hu || (Hu = {}));
                const Iu = (0, n.memo)(({ type: e, color: u, classMix: t, size: r = Ru.C24x24 }) => {
                        const o = h()(Ou.base, Ou[`base__${r}`], t),
                            i = (0, n.useMemo)(() => {
                                return {
                                    backgroundImage: `url(${R.images.historical_battles.gui.maps.icons.vehicleTypes.flat
                                        .$dyn(u)
                                        .$dyn(r)
                                        .$dyn(((t = e), t.replace(/-/g, '_')))})`,
                                };
                                var t;
                            }, [r, e, u]);
                        return a().createElement('div', { className: o, style: i });
                    }),
                    Pu = {
                        base: 'FrontmanCard_base_37',
                        base__selected: 'FrontmanCard_base__selected_f7',
                        base__disabled: 'FrontmanCard_base__disabled_94',
                        icon: 'FrontmanCard_icon_fd',
                        infoContainer: 'FrontmanCard_infoContainer_ab',
                        textOverflowContainer: 'FrontmanCard_textOverflowContainer_63',
                        base__active: 'FrontmanCard_base__active_ee',
                        name: 'FrontmanCard_name_54',
                        role: 'FrontmanCard_role_57',
                        tankInfo: 'FrontmanCard_tankInfo_e8',
                        tankName: 'FrontmanCard_tankName_ad',
                        tankName__elite: 'FrontmanCard_tankName__elite_8f',
                        roleIcon: 'FrontmanCard_roleIcon_25',
                        inPlatoon: 'FrontmanCard_inPlatoon_b3',
                        lineBg: 'FrontmanCard_lineBg_3d',
                        infoBg: 'FrontmanCard_infoBg_55',
                        disabled: 'FrontmanCard_disabled_bc',
                        disabled__inPlatoon: 'FrontmanCard_disabled__inPlatoon_b2',
                        lock: 'FrontmanCard_lock_4b',
                    },
                    Wu = ({
                        role: e,
                        vehicle: u,
                        isSelected: t,
                        id: r,
                        state: o,
                        canSwitchVehicle: i,
                        isBlocked: s,
                        isProfiledVehicle: l,
                    }) => {
                        const c = Ce('model', Be.None).onFrontmanChanged,
                            _ = ge(),
                            E = _[0],
                            d = _[1],
                            m = _[2],
                            A = o === Tu.InPlatoon || o === Tu.InBattle,
                            F = o === Tu.InBattle || s,
                            D = (E || t) && !F,
                            B = A && R.strings.hb_lobby.status.$dyn(o),
                            C = (0, n.useMemo)(() => {
                                const e = R.strings.hb_lobby.$dyn(`frontman_${r}`);
                                return (
                                    e || console.warn(`INCORRECT FRONTMAN LOCAL KEY!!!  Frontman id: ${r}`), e.name()
                                );
                            }, [r]),
                            g = (0, n.useMemo)(() => {
                                const e = D ? `c_${r}_normal` : `c_${r}_inactive`;
                                return {
                                    backgroundImage: `url(${R.images.historical_battles.gui.maps.icons.frontman.$dyn(e)})`,
                                };
                            }, [r, D]),
                            b = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url(${R.images.historical_battles.gui.maps.icons.roles.c_16x16.$dyn(e)})`,
                                }),
                                [e],
                            ),
                            p = (0, n.useMemo)(
                                () => ({
                                    contentId: R.views.historical_battles.lobby.tooltips.FrontmanTooltip('resId'),
                                    args: { frontmanID: r, showRoleAbility: !0 },
                                }),
                                [r],
                            ),
                            f = (0, n.useCallback)(() => {
                                s || (P.playClick(), c({ id: r }));
                            }, [r, s, c]),
                            v = h()(
                                Pu.base,
                                D && Pu.base__active,
                                t && !s && Pu.base__selected,
                                F && Pu.base__disabled,
                            ),
                            w = h()(Pu.tankName, !l && Pu.tankName__elite),
                            x = h()(Pu.disabled, Pu[`disabled__${o}`]),
                            y = l ? Hu.Silver : Hu.Elite;
                        return a().createElement(
                            Y,
                            p,
                            a().createElement(
                                'div',
                                { className: v, onMouseEnter: d, onMouseLeave: m, onClick: f },
                                a().createElement('div', { className: Pu.icon, style: g }),
                                F && a().createElement('div', { className: Pu.lineBg }),
                                a().createElement('div', { className: Pu.infoBg }),
                                a().createElement(
                                    'div',
                                    { className: Pu.infoContainer },
                                    a().createElement(
                                        'div',
                                        { className: Pu.textOverflowContainer },
                                        a().createElement(Nu, { content: C, classMix: Pu.name }),
                                        a().createElement(Nu, {
                                            content: R.strings.hb_lobby.role.$dyn(e),
                                            classMix: Pu.role,
                                        }),
                                        !A &&
                                            a().createElement(
                                                'div',
                                                { className: Pu.tankInfo },
                                                !i && a().createElement('div', { className: Pu.lock }),
                                                a().createElement(Iu, { type: u.type, color: y }),
                                                a().createElement('span', { className: w }, u.name),
                                            ),
                                    ),
                                    A && a().createElement('span', { className: x }, B),
                                ),
                                a().createElement('div', { className: Pu.roleIcon, style: b }),
                            ),
                        );
                    };
                function $u() {
                    return (
                        ($u =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        $u.apply(this, arguments)
                    );
                }
                const Gu = (0, n.memo)(({ selectedFrontmanId: e }) => {
                        const u = Ce('model.frontmen'),
                            t = u.some(({ value: e }) => e.state === Tu.InPlatoon, []);
                        return a().createElement(
                            'div',
                            { className: 'FrontmanCarousel_base_af' },
                            u.map(({ value: u }) =>
                                a().createElement(
                                    'div',
                                    { key: u.id, className: 'FrontmanCarousel_item_53' },
                                    a().createElement(Wu, $u({}, u, { isSelected: u.id === e, isBlocked: t })),
                                ),
                            ),
                        );
                    }),
                    zu = ['children'];
                function Uu() {
                    return (
                        (Uu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Uu.apply(this, arguments)
                    );
                }
                const ju = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, zu);
                        return a().createElement(
                            Y,
                            Uu(
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
                    },
                    Vu = {
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
                    };
                let Xu, Ku;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(Xu || (Xu = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
                    })(Ku || (Ku = {}));
                const Yu = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: r,
                    disabled: o,
                    mixClass: i,
                    soundHover: s,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: _,
                    onMouseDown: E,
                    onMouseUp: d,
                    onMouseLeave: m,
                    onClick: A,
                }) => {
                    const F = (0, n.useRef)(null),
                        D = (0, n.useState)(t),
                        B = D[0],
                        C = D[1],
                        g = (0, n.useState)(!1),
                        b = g[0],
                        p = g[1],
                        f = (0, n.useState)(!1),
                        v = f[0],
                        w = f[1],
                        x = (0, n.useCallback)(() => {
                            o || (F.current && (F.current.focus(), C(!0)));
                        }, [o]),
                        y = (0, n.useCallback)(
                            (e) => {
                                B && null !== F.current && !F.current.contains(e.target) && C(!1);
                            },
                            [B],
                        ),
                        M = (0, n.useCallback)(
                            (e) => {
                                o || (A && A(e));
                            },
                            [o, A],
                        ),
                        S = (0, n.useCallback)(
                            (e) => {
                                o || (null !== s && I(s), c && c(e), w(!0));
                            },
                            [o, s, c],
                        ),
                        k = (0, n.useCallback)(
                            (e) => {
                                _ && _(e);
                            },
                            [_],
                        ),
                        L = (0, n.useCallback)(
                            (e) => {
                                o || (d && d(e), p(!1));
                            },
                            [o, d],
                        ),
                        T = (0, n.useCallback)(
                            (e) => {
                                o || (null !== l && I(l), E && E(e), t && x(), p(!0));
                            },
                            [o, l, E, x, t],
                        ),
                        N = (0, n.useCallback)(
                            (e) => {
                                o || (m && m(e), p(!1));
                            },
                            [o, m],
                        ),
                        O = h()(
                            Vu.base,
                            Vu[`base__${r}`],
                            {
                                [Vu.base__disabled]: o,
                                [Vu[`base__${u}`]]: u,
                                [Vu.base__focus]: B,
                                [Vu.base__highlightActive]: b,
                                [Vu.base__firstHover]: v,
                            },
                            i,
                        ),
                        H = h()(Vu.state, Vu.state__default);
                    return (
                        (0, n.useEffect)(
                            () => (
                                document.addEventListener('mousedown', y),
                                () => {
                                    document.removeEventListener('mousedown', y);
                                }
                            ),
                            [y],
                        ),
                        (0, n.useEffect)(() => {
                            C(t);
                        }, [t]),
                        a().createElement(
                            'div',
                            {
                                ref: F,
                                className: O,
                                onMouseEnter: S,
                                onMouseMove: k,
                                onMouseUp: L,
                                onMouseDown: T,
                                onMouseLeave: N,
                                onClick: M,
                            },
                            r !== Xu.ghost &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement('div', { className: Vu.back }),
                                    a().createElement('span', { className: Vu.texture }),
                                ),
                            a().createElement(
                                'span',
                                { className: H },
                                a().createElement('span', { className: Vu.stateDisabled }),
                                a().createElement('span', { className: Vu.stateHighlightHover }),
                                a().createElement('span', { className: Vu.stateHighlightActive }),
                            ),
                            a().createElement(
                                'span',
                                { className: Vu.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                Yu.defaultProps = { type: Xu.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const qu = (0, n.memo)(Yu),
                    Zu = {
                        base: 'ChangeVehicleButton_base_23',
                        counter: 'ChangeVehicleButton_counter_b8',
                        spark: 'ChangeVehicleButton_spark_64',
                        spark__top: 'ChangeVehicleButton_spark__top_00',
                        spark__bottom: 'ChangeVehicleButton_spark__bottom_6b',
                        spark__animated: 'ChangeVehicleButton_spark__animated_02',
                        light: 'ChangeVehicleButton_light_a7',
                    },
                    Qu = (0, n.memo)(({ onClick: e, disable: u, isNew: t, counterValue: n, title: r }) => {
                        const i = o.O.client.graphicsQuality.isLow();
                        return a().createElement(
                            'div',
                            { className: Zu.base },
                            a().createElement(
                                'div',
                                { className: Zu.content },
                                t &&
                                    a().createElement(
                                        a().Fragment,
                                        null,
                                        a().createElement('div', {
                                            className: h()(Zu.spark, Zu.spark__top, !i && Zu.spark__animated),
                                        }),
                                        a().createElement('div', {
                                            className: h()(Zu.spark, Zu.spark__bottom, !i && Zu.spark__animated),
                                        }),
                                    ),
                                a().createElement(
                                    qu,
                                    {
                                        onClick: e,
                                        type: Xu.primary,
                                        size: Ku.medium,
                                        disabled: u,
                                        mixClass: Zu.changeBtn,
                                    },
                                    r,
                                ),
                            ),
                            t &&
                                a().createElement(
                                    'div',
                                    { className: Zu.counter },
                                    a().createElement(Le, { size: 'small', value: n }),
                                ),
                        );
                    }),
                    Ju = a().memo(({ id: e, iconName: u, classMix: t, isTooltipDisabled: r }) => {
                        const o = h()('Ability_base_80', t),
                            i = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url(${R.images.historical_battles.gui.maps.icons.artefact.$dyn(u)})`,
                                }),
                                [u],
                            ),
                            s = (0, n.useMemo)(
                                () => ({
                                    contentId: R.views.historical_battles.lobby.tooltips.AbilityTooltip('resId'),
                                    args: { abilityID: e, isRoleAbility: !1 },
                                    isEnabled: !r,
                                }),
                                [e, r],
                            );
                        return a().createElement(
                            Y,
                            s,
                            a().createElement(
                                'div',
                                { className: o },
                                a().createElement('div', { className: 'Ability_icon_52', style: i }),
                            ),
                        );
                    });
                function et() {
                    return (
                        (et =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        et.apply(this, arguments)
                    );
                }
                const ut = a().memo(({ abilities: e, classMix: u }) => {
                        const t = h()('Abilities_base_ab', u);
                        return a().createElement(
                            'div',
                            { className: t },
                            ((n = e),
                            (r = (e) => a().createElement(Ju, et({ key: e.id, classMix: 'Abilities_item_cb' }, e))),
                            Array.isArray(n) ? n.map(r) : n.map((e, u, t) => r(null == e ? void 0 : e.value))),
                        );
                        var n, r;
                    }),
                    tt = a().memo(({ title: e, subtitle: u, description: t, icon: n, perkId: r, classMix: o }) => {
                        const i = h()('Skill_base_4e', o),
                            s = {
                                backgroundImage: `url(${R.images.historical_battles.gui.maps.icons.artefact.c_64x64.$dyn(n)})`,
                            },
                            l = {
                                contentId: R.views.historical_battles.lobby.tooltips.AbilityTooltip('resId'),
                                args: { abilityID: r, isRoleAbility: !0 },
                            };
                        return a().createElement(
                            'div',
                            { className: i },
                            a().createElement(
                                Y,
                                l,
                                a().createElement(
                                    'div',
                                    null,
                                    a().createElement(
                                        'div',
                                        { className: 'Skill_skillContent_4c' },
                                        a().createElement('div', { className: 'Skill_slot_cc' }),
                                        a().createElement('div', { style: s, className: 'Skill_skill_af' }),
                                        a().createElement(
                                            'div',
                                            { className: 'Skill_info_f6' },
                                            a().createElement('div', { className: 'Skill_title_83' }, e),
                                            a().createElement('div', { className: 'Skill_subtitle_9a' }, u),
                                        ),
                                    ),
                                    a().createElement('div', { className: 'Skill_description_74' }, t),
                                    a().createElement('div', { className: 'Skill_divider_13' }),
                                ),
                            ),
                        );
                    }),
                    nt = {
                        base: 'FrontmanWidget_base_71',
                        bg: 'FrontmanWidget_bg_21',
                        header: 'FrontmanWidget_header_ae',
                        role: 'FrontmanWidget_role_9b',
                        progress: 'FrontmanWidget_progress_60',
                        tankDescription: 'FrontmanWidget_tankDescription_8f',
                        warning: 'FrontmanWidget_warning_7c',
                        warning__show: 'FrontmanWidget_warning__show_fe',
                        infoIcon: 'FrontmanWidget_infoIcon_76',
                        tankName: 'FrontmanWidget_tankName_ff',
                        tankName__noProfile: 'FrontmanWidget_tankName__noProfile_68',
                        tankName__profile: 'FrontmanWidget_tankName__profile_93',
                        vehType__silver: 'FrontmanWidget_vehType__silver_e6',
                        vehType__elite: 'FrontmanWidget_vehType__elite_a0',
                        abilityBg: 'FrontmanWidget_abilityBg_d1',
                        abilityBg__show: 'FrontmanWidget_abilityBg__show_aa',
                        abilities: 'FrontmanWidget_abilities_37',
                        abilities__profiled: 'FrontmanWidget_abilities__profiled_79',
                        changeBtn: 'FrontmanWidget_changeBtn_5a',
                        counter: 'FrontmanWidget_counter_8c',
                        bottom: 'FrontmanWidget_bottom_1e',
                        skillWrapper: 'FrontmanWidget_skillWrapper_31',
                        roleWrapper: 'FrontmanWidget_roleWrapper_15',
                        roleIcon: 'FrontmanWidget_roleIcon_03',
                        lockWrapper: 'FrontmanWidget_lockWrapper_1a',
                        lock: 'FrontmanWidget_lock_80',
                    },
                    at = a().memo(({ classMix: e }) => {
                        const u = (0, n.useContext)(m),
                            t = Ce('model.battleModeWidget').selectedMode,
                            r = Ce('model'),
                            o = r.selectedFrontmanId,
                            i = r.onVehicleChange,
                            s = ve(Ce('model.frontmen'), (e) => e.id === o),
                            l = s || {},
                            c = l.progress,
                            _ = l.state,
                            E = l.vehicle,
                            d = l.isProfiledVehicle,
                            A = l.canSwitchVehicle,
                            F = l.role,
                            D = l.perkId,
                            B = l.perkName,
                            C = l.abilities,
                            g = _ === Tu.InBattle || _ === Tu.InPlatoon,
                            b = (0, n.useCallback)(() => {
                                i();
                            }, [i]),
                            p = (0, n.useMemo)(
                                () => ({ tooltipId: 'HBVehicle', vehicleId: null == E ? void 0 : E.id, isLocked: !A }),
                                [null == E ? void 0 : E.id, A],
                            ),
                            f = (0, n.useMemo)(
                                () =>
                                    _ === Tu.InBattle
                                        ? R.strings.hb_lobby.hangar.frontmanWidget.inBattleBody()
                                        : R.strings.hb_lobby.hangar.frontmanWidget.inPlatoonBody(),
                                [_],
                            ),
                            v = h()(nt.tankName, !d && nt.tankName__profile, d && nt.tankName__noProfile),
                            w = h()(nt.vehType, d && nt.vehType__silver, !d && nt.vehType__elite),
                            x = (0, n.useMemo)(
                                () => ({
                                    tankName: a().createElement(
                                        ju,
                                        { args: p, isEnabled: !0 },
                                        a().createElement(
                                            'div',
                                            { className: v },
                                            !A &&
                                                a().createElement(
                                                    'div',
                                                    { className: nt.lockWrapper },
                                                    a().createElement('div', { className: nt.lock }),
                                                ),
                                            a().createElement(Iu, {
                                                classMix: w,
                                                color: d ? Hu.Silver : Hu.Elite,
                                                type: null == E ? void 0 : E.type,
                                                size: Ru.C83x74,
                                            }),
                                            null == E ? void 0 : E.name,
                                        ),
                                    ),
                                }),
                                [v, p, null == E ? void 0 : E.name, null == E ? void 0 : E.type, d, w, A],
                            ),
                            y = u.small || u.medium ? 'c_32x32' : 'c_48x48',
                            M = {
                                backgroundImage: `url(${R.images.historical_battles.gui.maps.icons.roles[y].$dyn(F)})`,
                            },
                            S = h()(nt.base, nt[`base__${t}`], e),
                            k = h()(nt.abilities, d && nt.abilities__profiled),
                            L = h()(nt.abilityBg, !A && nt.abilityBg__show),
                            T = h()(nt.bottom, d && nt.bottom__show);
                        return a().createElement(
                            'div',
                            { className: S },
                            a().createElement('div', { className: nt.bg }),
                            a().createElement(
                                'span',
                                { className: nt.header },
                                R.strings.hb_lobby.$dyn(`frontman_${o}`).name(),
                            ),
                            a().createElement(
                                'div',
                                { className: nt.roleWrapper },
                                a().createElement('div', { style: M, className: nt.roleIcon }),
                                a().createElement('span', { className: nt.role }, R.strings.hb_lobby.role.$dyn(F)),
                            ),
                            a().createElement(tt, {
                                title: R.strings.hb_lobby.role.skill(),
                                subtitle: null == c ? void 0 : c.nameRole,
                                icon: B,
                                perkId: D,
                                description: R.strings.hb_lobby.role.skillDescription(),
                                classMix: nt.skillWrapper,
                            }),
                            a().createElement(Ke, {
                                text: R.strings.hb_lobby.hangar.frontmanWidget.abilities(),
                                binding: x,
                                classMix: nt.tankDescription,
                            }),
                            a().createElement(
                                'div',
                                { className: T },
                                a().createElement('div', { className: L }),
                                a().createElement(ut, { abilities: C, classMix: k }),
                                a().createElement(
                                    J,
                                    {
                                        header: R.strings.hb_lobby.hangar.frontmanWidget.inBattleHeader(),
                                        body: f,
                                        isEnabled: g,
                                    },
                                    a().createElement(
                                        'div',
                                        { className: nt.changeBtn },
                                        a().createElement(Qu, {
                                            onClick: b,
                                            disable: g,
                                            counterValue: R.strings.menu.headerButtons.defaultCounter(),
                                            title: R.strings.hb_lobby.hangar.frontmanWidget.changeVehicle(),
                                            isNew: null == s ? void 0 : s.hasNewVehicle,
                                        }),
                                    ),
                                ),
                            ),
                        );
                    });
                let rt, ot, it;
                !(function (e) {
                    (e.Small = 'x5'), (e.Medium = 'x10'), (e.Big = 'x15');
                })(rt || (rt = {})),
                    (function (e) {
                        (e.Timer = 'timer'), (e.Countdown = 'countdown'), (e.Cooldown = 'cooldown'), (e.None = 'none');
                    })(ot || (ot = {})),
                    (function (e) {
                        (e.Description = 'description'),
                            (e.Short = 'short'),
                            (e.Long = 'long'),
                            (e.Extended = 'extended');
                    })(it || (it = {}));
                const st = 'Countdown_description_8d',
                    lt = (e) => e.toString().padStart(2, '0'),
                    ct = R.images.gui.maps.icons.components.countdown,
                    _t = (e, u) => {
                        const t = 2 === u ? ct.big : ct;
                        switch (e) {
                            case ot.Timer:
                                return t.clock();
                            case ot.Countdown:
                                return t.hourglass();
                            case ot.Cooldown:
                                return t.lock();
                        }
                    },
                    Et = (0, n.memo)(
                        ({
                            duration: e,
                            icon: u = ot.Timer,
                            style: t = it.Description,
                            onTimeReached: r,
                            className: i = '',
                            classNames: s = {},
                            labelFormat: l = '',
                        }) => {
                            const c = t !== it.Description ? 1 : void 0,
                                _ = he(e, c),
                                E = (() => {
                                    const e = (0, n.useState)(o.O.view.getScale()),
                                        u = e[0],
                                        t = e[1];
                                    return (
                                        (0, n.useEffect)(() => {
                                            const e = () => {
                                                t(o.O.view.getScale());
                                            };
                                            return (
                                                window.addEventListener('resize', e),
                                                () => {
                                                    window.removeEventListener('resize', e);
                                                }
                                            );
                                        }, []),
                                        u
                                    );
                                })();
                            r && r[_] && r[_]();
                            const d = ((e, u) => {
                                switch (u) {
                                    case it.Description:
                                        return Ee(e);
                                    case it.Short:
                                        return `${lt(e.minutes)}:${lt(e.seconds)}`;
                                    case it.Long:
                                        return `${lt(e.hours)}:${lt(e.minutes)}:${lt(e.seconds)}`;
                                    case it.Extended:
                                        return `${ue(R.strings.common.duration.days(), { days: e.days })} | ${lt(e.hours)}:${lt(e.minutes)}:${lt(e.seconds)}`;
                                }
                            })(_e(_), t);
                            return a().createElement(
                                'div',
                                { className: h()('Countdown_base_fe', i) },
                                u !== ot.None &&
                                    a().createElement('div', {
                                        className: h()('Countdown_icon_8b', s.icon),
                                        style: { backgroundImage: `url('${_t(u, E)}')` },
                                    }),
                                l
                                    ? a().createElement(
                                          'div',
                                          { className: h()(st, s.text) },
                                          a().createElement(Ke, { text: l, binding: { timerText: d } }),
                                      )
                                    : a().createElement('div', { className: h()(st, s.text) }, d),
                            );
                        },
                    );
                function dt() {
                    return (
                        (dt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        dt.apply(this, arguments)
                    );
                }
                const mt = ({ children: e, tooltipArgs: u, className: t }) => {
                    if (!u) return e;
                    const n = a().createElement('div', { className: t }, e);
                    if (u.header || u.body) return a().createElement(J, u, n);
                    const r = u.contentId,
                        o = u.args,
                        i = null == o ? void 0 : o.contentId;
                    return r || i
                        ? a().createElement(Y, dt({}, u, { contentId: r || i }), n)
                        : a().createElement(ju, u, n);
                };
                var At = t(9050),
                    Ft = t.n(At);
                let Dt, Bt, Ct;
                !(function (e) {
                    (e[(e.Word = 0)] = 'Word'),
                        (e[(e.LineBreak = 1)] = 'LineBreak'),
                        (e[(e.NewLine = 2)] = 'NewLine'),
                        (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                        (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                        (e[(e.Binding = 5)] = 'Binding');
                })(Dt || (Dt = {})),
                    (function (e) {
                        (e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end');
                    })(Bt || (Bt = {})),
                    (function (e) {
                        (e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n');
                    })(Ct || (Ct = {}));
                const ht = { [Ct.NBSP]: Dt.NoBreakSymbol, [Ct.ZWNBSP]: Dt.NoBreakSymbol, [Ct.NEW_LINE]: Dt.LineBreak },
                    gt = {
                        blackReal: 'colors_blackReal_fc',
                        whiteReal: 'colors_whiteReal_31',
                        white: 'colors_white_45',
                        whiteOrange: 'colors_whiteOrange_81',
                        whiteSpanish: 'colors_whiteSpanish_c3',
                        par: 'colors_par_5b',
                        parSecondary: 'colors_parSecondary_fd',
                        parTertiary: 'colors_parTertiary_97',
                        red: 'colors_red_79',
                        redDark: 'colors_redDark_73',
                        yellow: 'colors_yellow_76',
                        orange: 'colors_orange_cd',
                        cream: 'colors_cream_0f',
                        brown: 'colors_brown_82',
                        greenBright: 'colors_greenBright_68',
                        green: 'colors_green_fa',
                        greenDark: 'colors_greenDark_a9',
                        blueBooster: 'colors_blueBooster_26',
                        blueTeamkiller: 'colors_blueTeamkiller_86',
                        cred: 'colors_cred_35',
                        gold: 'colors_gold_c3',
                        bond: 'colors_bond_ce',
                        prom: 'colors_prom_83',
                    },
                    bt = (e) => ({ color: `#${e}` }),
                    pt = ({ elementList: e, textBlock: u, key: t }) => {
                        const n = u.colorTag;
                        return n
                            ? gt[n]
                                ? a().createElement(
                                      'span',
                                      { key: t, 'data-block-type': u.blockType, className: gt[n] },
                                      e,
                                  )
                                : a().createElement('span', { key: t, 'data-block-type': u.blockType, style: bt(n) }, e)
                            : a().createElement('span', { key: t, 'data-block-type': u.blockType }, e);
                    },
                    ft = {
                        [Dt.Word]: pt,
                        [Dt.NoBreakSymbol]: pt,
                        [Dt.Binding]: ({ elementList: e, textBlock: u, key: t }) =>
                            a().createElement(
                                'span',
                                { key: t, 'data-block-type': u.blockType },
                                e.map((e) => a().createElement(a().Fragment, { key: t }, e)),
                            ),
                        [Dt.LineBreak]: ({ key: e }) =>
                            a().createElement('span', {
                                key: e,
                                'data-block-type': Dt.LineBreak,
                                className: 'renderers_lineBreak_b5',
                            }),
                        [Dt.NewLine]: ({ elementList: e, key: u }) =>
                            a().createElement(
                                'span',
                                { key: u, 'data-block-type': Dt.NewLine, className: 'renderers_newLine_bd' },
                                e,
                            ),
                        [Dt.NoBreakWrapper]: ({ elementList: e, key: u }) =>
                            a().createElement(
                                'span',
                                {
                                    key: u,
                                    'data-block-type': Dt.NoBreakWrapper,
                                    className: 'renderers_noBreakWrapper_10',
                                },
                                e,
                            ),
                    },
                    vt = (e, u, t) => {
                        const n = [];
                        return (
                            e.childList.forEach((a, r) => {
                                const o = `${t}_${r}`;
                                if (((e) => void 0 !== e.childList)(a)) {
                                    const e = a,
                                        u = e.blockType,
                                        t = vt(e, ft[u], o);
                                    n.push(...t);
                                } else n.push(u({ elementList: [a], textBlock: e, key: o }));
                            }),
                            n
                        );
                    },
                    wt = (e, u, t, n) => {
                        let a = u.exec(e),
                            r = 0;
                        for (; a; ) r !== a.index && t(e.slice(r, a.index)), n(a), (r = u.lastIndex), (a = u.exec(e));
                        r !== e.length && t(e.slice(r));
                    },
                    xt = (e) => {
                        const u = /[\s\u002d]/g;
                        let t = u.exec(e);
                        if (!t) return [e];
                        const n = [];
                        let a = 0;
                        for (; t; ) n.push(e.slice(a, u.lastIndex)), (a = u.lastIndex), (t = u.exec(e));
                        return a !== e.length && n.push(e.slice(a)), n;
                    },
                    yt = (e, u = '') => {
                        const t = [];
                        return (
                            wt(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    t.push({ blockType: Dt.Word, colorTag: u, childList: xt(e) });
                                },
                                (e) => {
                                    const n = e[0],
                                        a = ht[n.charAt(0)];
                                    a === Dt.LineBreak
                                        ? t.push(
                                              ...((e) => {
                                                  const u = [
                                                      {
                                                          blockType: Dt.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let t = 0; t < e.length - 1; t++)
                                                      u.push({
                                                          blockType: Dt.NewLine,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      });
                                                  return u;
                                              })(n),
                                          )
                                        : t.push({ blockType: a, colorTag: u, childList: [n] });
                                },
                            ),
                            t
                        );
                    },
                    Mt = (e, u, t = '') => {
                        const n = [];
                        return (
                            wt(
                                e,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    n.push(...yt(e, t));
                                },
                                (e) => {
                                    const a = e[1],
                                        r = void 0 === u[a] ? e[0] : u[a];
                                    'string' == typeof r || 'number' == typeof r
                                        ? n.push(...yt(String(r), t))
                                        : n.push({ blockType: Dt.Binding, colorTag: t, childList: [r] });
                                },
                            ),
                            n
                        );
                    },
                    St = (e, u) => {
                        if (!e) return [u];
                        const t = [],
                            n = Object.assign({}, u, { childList: u.childList.splice(0, 1) });
                        if (e.blockType === Dt.NoBreakWrapper) e.childList.push(n), t.push(e);
                        else {
                            const u = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            e.childList.length > 0 && t.push(e),
                                t.push({ blockType: Dt.NoBreakWrapper, colorTag: '', childList: [u, n] });
                        }
                        return u.childList.length > 0 && t.push(u), t;
                    },
                    kt = (e, u = {}) => {
                        if (!e) return [];
                        const t = ((e) => {
                            const u = [];
                            let t = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === Dt.NoBreakSymbol
                                        ? ((t = !0), u.push(...St(u.pop(), e)))
                                        : (t ? u.push(...St(u.pop(), e)) : u.push(e), (t = !1));
                                }),
                                u
                            );
                        })(
                            ((e, u) => {
                                const t = [];
                                return (
                                    wt(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})/g,
                                        (e) => {
                                            t.push(...Mt(e, u));
                                        },
                                        (e) => {
                                            t.push(...Mt(e[2], u, e[1]));
                                        },
                                    ),
                                    t
                                );
                            })(te(e).replace(/&zwnbsp;/g, '\ufeff'), u),
                        );
                        return ((e) => {
                            const u = [];
                            return (
                                e.forEach((e, t) => {
                                    u.push(
                                        ...((e, u) => {
                                            const t = [],
                                                n = e.blockType,
                                                a = ft[n],
                                                r = vt(e, a, u);
                                            return (
                                                n === Dt.NoBreakWrapper
                                                    ? t.push(a({ elementList: r, textBlock: e, key: `${u}` }))
                                                    : t.push(...r),
                                                t
                                            );
                                        })(e, t),
                                    );
                                }),
                                u
                            );
                        })(t);
                    },
                    Lt = (e, u) => !e || e.offsetTop + e.offsetHeight > u,
                    Tt = (e, u) => e.offsetLeft + e.offsetWidth - u,
                    Nt = (e, u, t) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > u) return [!1, 0];
                        const n = Tt(e, u),
                            a = e.textContent.length,
                            r = e.offsetWidth / a,
                            o = Math.ceil(n / r);
                        if (n > 0) {
                            const n = Math.floor((u - e.offsetLeft) / r);
                            return n >= t ? [!0, t + o] : [!1, n];
                        }
                        const i = Math.max(t + o, 0);
                        return a < i ? [!1, 0] : [!0, i];
                    },
                    Ot = (e, u, t, n, r, o) => {
                        let i = -1,
                            s = null;
                        for (let l = t; l >= 0; l--) {
                            const t = e[l],
                                c = Number(e[l].getAttribute('data-block-type'));
                            if (c === Dt.LineBreak || c === Dt.NewLine || c === Dt.Binding) continue;
                            const _ = t.textContent || '';
                            if (!(t.childElementCount > 1)) {
                                const e = Nt(t, n, r),
                                    c = e[0],
                                    E = e[1];
                                if (!c) {
                                    E > 0 && (r -= E);
                                    continue;
                                }
                                const d = _.slice(0, _.length - E) + o,
                                    m = u[l];
                                (s = a().cloneElement(m, m.props, d)), (i = l);
                                break;
                            }
                            {
                                const e = t.children,
                                    c = u[l],
                                    E = c.props.children,
                                    d = Ot(e, E, e.length - 1, n, r, o),
                                    m = d[0],
                                    A = d[1];
                                if (!(m < 0)) {
                                    const e = E.slice(0, m);
                                    (s = a().cloneElement(c, c.props, e, A)), (i = l);
                                    break;
                                }
                                r -= _.length;
                            }
                        }
                        return [i, s];
                    },
                    Rt = a().memo(
                        ({
                            text: e,
                            classMix: u,
                            onSizeChanged: t,
                            binding: r,
                            isTooltipEnable: o = !1,
                            isTruncationAvailable: i = !1,
                            targetId: s,
                            justifyContent: l = Bt.FlexStart,
                            alignContent: c = Bt.FlexStart,
                            truncateIdentify: _ = '...',
                        }) => {
                            const E = (0, n.useRef)(null),
                                d = (0, n.useRef)({ height: 0, width: 0 }),
                                m = (0, n.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                A = m[0],
                                F = m[1],
                                D = (0, n.useMemo)(() => kt(e, r), [r, e]),
                                B = (0, n.useMemo)(() => {
                                    if (o && A.isTruncated)
                                        return {
                                            args: { text: e, stringifyKwargs: r ? JSON.stringify(r) : '' },
                                            contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                            targetId: s,
                                        };
                                }, [r, o, s, e, A.isTruncated]),
                                C = (0, n.useCallback)(
                                    (e) => {
                                        (d.current.width = e.contentRect.width),
                                            (d.current.height = e.contentRect.height);
                                        const u = ((e, u, t, n = '...') => {
                                                const a = [...u],
                                                    r = e.current;
                                                if (!r) return [a, !1];
                                                const o = t.height,
                                                    i = t.width,
                                                    s = r.lastElementChild;
                                                if (!Lt(s, o) && Tt(s, i) <= 0) return [a, !1];
                                                const l = r.children,
                                                    c = ((e, u) => {
                                                        let t = 0,
                                                            n = e.length - 1;
                                                        for (; n - t >= 0; ) {
                                                            const a = t + Math.ceil(0.5 * (n - t));
                                                            Lt(e[a], u) ? (n = a - 1) : (t = a + 1);
                                                        }
                                                        return t - 1;
                                                    })(l, o);
                                                if (c < 0) return [a, !1];
                                                const _ = Ot(l, a, c, i, n.length, n),
                                                    E = _[0],
                                                    d = _[1];
                                                return d && (a.splice(E, 1, d), a.splice(E + 1)), [a, !0];
                                            })(E, D, d.current, _),
                                            n = u[0],
                                            a = u[1];
                                        F({ elementList: n, isTruncated: a, isTruncateFinished: !0 }), t && t(a);
                                    },
                                    [t, _, D],
                                ),
                                g = (0, n.useMemo)(() => ({ justifyContent: l, alignContent: c }), [c, l]);
                            return (
                                ((e, u, t = !0) => {
                                    const a = (0, n.useCallback)(
                                        (e) => {
                                            const t = e[0];
                                            u && u(t);
                                        },
                                        [u],
                                    );
                                    (0, n.useEffect)(() => {
                                        if (!e.current || !t) return;
                                        const u = new (Ft())((e) => a(e));
                                        return (
                                            u.observe(e.current),
                                            () => {
                                                u.disconnect();
                                            }
                                        );
                                    }, [a, t, e]);
                                })(E, C, i),
                                a().createElement(
                                    'div',
                                    {
                                        className: h()(
                                            'ExtendedText_base_71',
                                            u,
                                            'ExtendedText_base__zeroPadding_25',
                                            i && 'ExtendedText_base__isTruncationAvailable_5b',
                                        ),
                                        style: g,
                                    },
                                    a().createElement('div', { className: 'ExtendedText_unTruncated_b8', ref: E }, D),
                                    a().createElement(
                                        mt,
                                        { tooltipArgs: B },
                                        a().createElement(
                                            'div',
                                            {
                                                className: h()(
                                                    'ExtendedText_truncated_97',
                                                    !A.isTruncateFinished && i && 'ExtendedText_truncated__hide_31',
                                                ),
                                                style: g,
                                            },
                                            A.isTruncateFinished && i ? A.elementList : D,
                                        ),
                                    ),
                                )
                            );
                        },
                    ),
                    Ht = 300,
                    It = (0, n.memo)(() => {
                        const e = Ce('model.orders').orderCountdown,
                            u = (0, n.useState)(e < Ht),
                            t = u[0],
                            r = u[1],
                            o = (0, n.useCallback)(() => r(!0), []);
                        (0, n.useEffect)(() => {
                            e >= Ht && t ? r(!1) : e < Ht && !t && r(!0);
                        }, [e, t]);
                        const i = (0, n.useMemo)(() => ({ 299: o }), [o]),
                            s = (0, n.useMemo)(() => ({ time: Ee(_e(Ht)) }), []);
                        return e <= 0
                            ? null
                            : a().createElement(
                                  'div',
                                  { className: 'OrderCountDown_base_1f' },
                                  a().createElement('div', { className: 'OrderCountDown_highlight_4a' }),
                                  a().createElement(
                                      'div',
                                      { className: 'OrderCountDown_timer_96' },
                                      t
                                          ? a().createElement(
                                                'div',
                                                { className: 'OrderCountDown_pending_b4' },
                                                a().createElement('img', {
                                                    src: R.images.gui.maps.icons.components.countdown.clock(),
                                                    alt: '',
                                                }),
                                                a().createElement(Rt, {
                                                    classMix: 'OrderCountDown_pendingTime_00',
                                                    text: R.strings.hb_lobby.hangar.orderPending(),
                                                    binding: s,
                                                }),
                                            )
                                          : a().createElement(Et, { duration: e, style: it.Long, onTimeReached: i }),
                                  ),
                              );
                    }),
                    Pt = {
                        base: 'OrderItem_base_c0',
                        order: 'OrderItem_order_2b',
                        base__x5: 'OrderItem_base__x5_e3',
                        hover: 'OrderItem_hover_ee',
                        base__active: 'OrderItem_base__active_4f',
                        orderIcon: 'OrderItem_orderIcon_17',
                        base__disabled: 'OrderItem_base__disabled_51',
                        count: 'OrderItem_count_08',
                        swf: 'OrderItem_swf_0a',
                        borderStatic: 'OrderItem_borderStatic_dc',
                        borderWave: 'OrderItem_borderWave_c6',
                        fadeIn: 'OrderItem_fadeIn_0b',
                        borderScaleOut: 'OrderItem_borderScaleOut_38',
                        buyButton: 'OrderItem_buyButton_9f',
                        fadeOut: 'OrderItem_fadeOut_f6',
                        rotating: 'OrderItem_rotating_94',
                    },
                    Wt = (0, n.memo)(
                        ({
                            id: e,
                            type: u,
                            isActive: t,
                            count: r,
                            onClick: o,
                            isIconAnimated: i,
                            isBorderAnimated: s,
                            onIconAnimationStart: l,
                            onIconAnimationFinish: c,
                            onBorderAnimationStart: _,
                            onBorderAnimationFinish: E,
                        }) => {
                            const d = ge(),
                                m = d[1],
                                A = d[2],
                                F =
                                    ((D = R.strings.hb_lobby.hangar.itemCount()),
                                    (B = { count: r }),
                                    D.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                                        const u = 0 === e.indexOf('%') ? 2 : 1;
                                        return String(B[e.slice(u, -u)]);
                                    }));
                            var D, B;
                            const C = (0, n.useMemo)(
                                    () => ({
                                        backgroundImage: `url(${R.images.historical_battles.gui.maps.icons.order.c_80x80.$dyn(u)})`,
                                    }),
                                    [u],
                                ),
                                g = (0, n.useMemo)(
                                    () => ({
                                        contentId: R.views.historical_battles.lobby.tooltips.OrderTooltip('resId'),
                                        args: { orderType: u },
                                    }),
                                    [u],
                                ),
                                b = (0, n.useCallback)(() => {
                                    c(e);
                                }, [e, c]),
                                p = (0, n.useCallback)(() => {
                                    E(e);
                                }, [e, E]),
                                f = (0, n.useCallback)(() => {
                                    o(u);
                                }, [u, o]),
                                v = (0, n.useCallback)(() => {
                                    P.playClick(), o(u);
                                }, [u, o]);
                            (0, n.useEffect)(() => {
                                if (s) {
                                    _(e);
                                    const u = window.setTimeout(p, 2150);
                                    return () => window.clearTimeout(u);
                                }
                            }, [e, u, s, p, _]);
                            const w = (0, n.useMemo)(() => {
                                    switch (u) {
                                        case rt.Small:
                                            return a().createElement(It, null);
                                        case rt.Medium:
                                            return a().createElement(
                                                qu,
                                                { mixClass: Pt.buyButton, onClick: f },
                                                R.strings.hb_lobby.hangar.buyOrders(),
                                            );
                                        case rt.Big:
                                            return a().createElement(
                                                qu,
                                                { mixClass: Pt.buyButton, onClick: f },
                                                R.strings.hb_lobby.hangar.getOrders(),
                                            );
                                        default:
                                            return console.error(`Unsupported OrderType: ${u}`), null;
                                    }
                                }, [u, f]),
                                x = h()(Pt.base, t ? Pt.base__active : Pt.base__disabled, Pt[`base__${u}`]);
                            (0, n.useEffect)(() => {
                                if (i) {
                                    const u = document.getElementById(e);
                                    u &&
                                        (u.src =
                                            'swf://gui/flash/' +
                                            R.animations.historicalBattles.gettingOrderItem() +
                                            '?name=order');
                                }
                            }, [e, i]);
                            const y = (0, n.useCallback)(() => {
                                if (i) {
                                    l(e), swfPlayer.gotoAndPlay('order', 2);
                                    const u = window.setTimeout(b, 3e3);
                                    return () => window.clearTimeout(u);
                                }
                            }, [e, i, b, l]);
                            return a().createElement(
                                'div',
                                { className: x },
                                a().createElement(
                                    Y,
                                    g,
                                    a().createElement(
                                        'div',
                                        { onMouseEnter: m, onMouseLeave: A, className: Pt.order, onClick: v },
                                        s && a().createElement('div', { className: Pt.borderWave }),
                                        a().createElement('div', { className: Pt.borderStatic }),
                                        a().createElement('div', { className: Pt.orderIcon, style: C }),
                                        a().createElement('span', { className: Pt.count }, F),
                                        a().createElement('img', {
                                            id: e,
                                            className: Pt.swf,
                                            src: '',
                                            onLoad: y,
                                            alt: 'hintSwf',
                                        }),
                                        u !== rt.Small && a().createElement('div', { className: Pt.hover }),
                                    ),
                                ),
                                w,
                            );
                        },
                    ),
                    $t = ['id'];
                function Gt() {
                    return (
                        (Gt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Gt.apply(this, arguments)
                    );
                }
                const zt = (0, n.memo)(() => {
                        const e = Ce('model.orders', Be.None),
                            u = e.onIconAnimationStart,
                            t = e.onIconAnimationFinish,
                            r = e.onBorderAnimationStart,
                            o = e.onBorderAnimationFinish,
                            i = e.onBuyOrdersPressed,
                            s = e.onGetOrdersPressed,
                            l = Ce('model.orders.orders').map((e) => e.value),
                            c = (0, n.useCallback)(
                                (e) => {
                                    u({ id: e });
                                },
                                [u],
                            ),
                            _ = (0, n.useCallback)(
                                (e) => {
                                    t({ id: e });
                                },
                                [t],
                            ),
                            E = (0, n.useCallback)(
                                (e) => {
                                    r({ id: e });
                                },
                                [r],
                            ),
                            d = (0, n.useCallback)(
                                (e) => {
                                    o({ id: e });
                                },
                                [o],
                            ),
                            m = (0, n.useCallback)(
                                (e) => {
                                    switch (e) {
                                        case rt.Small:
                                            return;
                                        case rt.Medium:
                                            i();
                                            break;
                                        case rt.Big:
                                            s();
                                            break;
                                        default:
                                            return void console.error(`Unsupported OrderType: ${e}`);
                                    }
                                },
                                [i, s],
                            );
                        return a().createElement(
                            'div',
                            { className: 'OrderList_base_49' },
                            l.map((e) => {
                                let u = e.id,
                                    t = (function (e, u) {
                                        if (null == e) return {};
                                        var t,
                                            n,
                                            a = {},
                                            r = Object.keys(e);
                                        for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                        return a;
                                    })(e, $t);
                                return a().createElement(
                                    Wt,
                                    Gt({ key: u, id: u }, t, {
                                        onIconAnimationStart: c,
                                        onIconAnimationFinish: _,
                                        onBorderAnimationStart: E,
                                        onBorderAnimationFinish: d,
                                        onClick: m,
                                    }),
                                );
                            }),
                        );
                    }),
                    Ut = () =>
                        a().createElement(
                            'div',
                            { className: 'OrderPanel_base_3f' },
                            a().createElement('div', { className: 'OrderPanel_back_c9' }),
                            a().createElement(
                                'span',
                                { className: 'OrderPanel_ordersLabel_8f' },
                                R.strings.hb_lobby.hangar.ordersLabel(),
                            ),
                            a().createElement(zt, null),
                        ),
                    jt = 'StatusWarning_border_99',
                    Vt = 'StatusWarning_horizontalBorder_5e',
                    Xt = (0, n.memo)(({ children: e, classMix: u, isBanWarning: t }) => {
                        const n = h()(
                                'StatusWarning_base_bb',
                                t ? 'StatusWarning_base__banned_05' : 'StatusWarning_base__regular_cb',
                                u,
                            ),
                            r = h()(Vt, 'StatusWarning_horizontalBorder__left_14');
                        return a().createElement(
                            'div',
                            { className: n },
                            !t && a().createElement('div', { className: jt }),
                            a().createElement(
                                'div',
                                { className: 'StatusWarning_contentWrapper_16' },
                                a().createElement('div', { className: r }),
                                a().createElement('div', { className: 'StatusWarning_content_c4' }, e),
                                a().createElement('div', { className: Vt }),
                            ),
                            !t && a().createElement('div', { className: jt }),
                        );
                    }),
                    Kt = (0, n.memo)(({ isSelectedModeAvailable: e }) => {
                        const u = (0, n.useContext)(m),
                            t = Ce('model').banExpirationTime,
                            r = Ce('model.orders').selectedOrderId,
                            o = Boolean(t),
                            i = Boolean(r),
                            s = u.extraSmall
                                ? R.strings.hb_lobby.statusMessage.ban.extraSmall()
                                : R.strings.hb_lobby.statusMessage.ban.regular(),
                            l = u.extraSmall
                                ? R.strings.hb_lobby.statusMessage.noActiveHint.extraSmall()
                                : R.strings.hb_lobby.statusMessage.noActiveHint.regular(),
                            c = o ? s : l,
                            _ = (0, n.useMemo)(
                                () => ({
                                    date: ce(t, ', '),
                                    icon: a().createElement('div', { className: 'StatusOrBanDisplay_icon_ec' }),
                                }),
                                [t],
                            );
                        return !e || (!o && i)
                            ? null
                            : a().createElement(
                                  Xt,
                                  { classMix: 'StatusOrBanDisplay_statusMix_5c', isBanWarning: Boolean(o) },
                                  a().createElement(Rt, { text: c, binding: _, justifyContent: Bt.Center }),
                              );
                    }),
                    Yt = {
                        base: 'HangarApp_base_22',
                        status: 'HangarApp_status_23',
                        base__hide: 'HangarApp_base__hide_60',
                        base__show: 'HangarApp_base__show_b1',
                        vignette: 'HangarApp_vignette_3f',
                        base__frontNotAvailable: 'HangarApp_base__frontNotAvailable_33',
                        header: 'HangarApp_header_02',
                        footer: 'HangarApp_footer_36',
                        footerBg: 'HangarApp_footerBg_07',
                        sceneWrapper: 'HangarApp_sceneWrapper_52',
                        orderPanelContainer: 'HangarApp_orderPanelContainer_08',
                        shopButton: 'HangarApp_shopButton_7c',
                        frontmanWidget: 'HangarApp_frontmanWidget_91',
                        bigFrontmanIcon: 'HangarApp_bigFrontmanIcon_cc',
                        infoButton: 'HangarApp_infoButton_42',
                        closeButton: 'HangarApp_closeButton_f3',
                        fadingCover: 'HangarApp_fadingCover_c8',
                    },
                    qt = () => {
                        const e = Ce('model', Be.None),
                            u = e.onMoveSpace,
                            t = e.onOverScene,
                            r = e.onEscapePressed,
                            o = e.onInfoClick,
                            i = e.onMousePressed,
                            s = e.onCloseClick,
                            l = Ce('model'),
                            c = l.selectedFrontmanId,
                            _ = l.frontmen,
                            E = Ce('model.battleModeWidget'),
                            d = E.selectedMode,
                            m = E.isSelectedModeAvailable,
                            A = E.isDisabled,
                            F = E.disableReason,
                            D = E.canShowAnimation,
                            B = (0, n.useRef)(d),
                            C = (0, n.useState)(d),
                            g = C[0],
                            b = C[1],
                            p = (0, n.useState)(!1),
                            f = p[0],
                            v = p[1],
                            w = (0, n.useState)(!1),
                            x = w[0],
                            y = w[1],
                            M = (0, n.useCallback)((e) => u(e), [u]),
                            S = (0, n.useCallback)((e) => t({ isOver3dScene: e }), [t]),
                            k = (0, n.useCallback)(() => r(), [r]),
                            L = (0, n.useCallback)(
                                (e) => {
                                    v(e), i({ isPressed: e });
                                },
                                [v, i],
                            ),
                            T = (0, n.useCallback)(() => o(), [o]),
                            N = (0, n.useCallback)(() => s(), [s]);
                        var O;
                        (O = k),
                            fe(be.n.ESCAPE, O),
                            (0, n.useEffect)(() => {
                                B.current !== d && ((B.current = d), b(d));
                            }, [d]);
                        const H = h()(
                                Yt.base,
                                f ? Yt.base__hide : Yt.base__show,
                                m ? Yt.base__frontAvailable : Yt.base__frontNotAvailable,
                            ),
                            I = (ve(_, (e) => e.id === c) || {}).polygon;
                        return a().createElement(
                            'div',
                            { className: H },
                            a().createElement(
                                'div',
                                { className: Yt.infoButton },
                                a().createElement(
                                    J,
                                    { body: R.strings.hb_lobby.hangar.infoBtn.body() },
                                    a().createElement(z, {
                                        type: 'info',
                                        onClick: T,
                                        caption: R.strings.hb_lobby.hangar.infoBtn.name(),
                                    }),
                                ),
                            ),
                            a().createElement(
                                'div',
                                { className: Yt.closeButton },
                                a().createElement(z, {
                                    caption: R.strings.hb_lobby.hangar.closeBtn.name(),
                                    type: 'close',
                                    side: 'right',
                                    onClick: N,
                                }),
                            ),
                            a().createElement('div', { className: Yt.vignette }),
                            a().createElement(
                                'div',
                                { className: Yt.status },
                                a().createElement(Kt, { isSelectedModeAvailable: m }),
                            ),
                            a().createElement(
                                'div',
                                { className: Yt.sceneWrapper },
                                a().createElement(we, { onMoveSpace: M, onOverSpace: S, onCursorChange: L }),
                            ),
                            a().createElement(
                                'div',
                                { className: Yt.header },
                                a().createElement(yu, {
                                    isDisabled: A,
                                    disableReason: F,
                                    selectedMode: g,
                                    isFadeAnimating: x,
                                    canShowAnimation: D,
                                }),
                            ),
                            a().createElement(Mu, { selectedMode: g, classMix: Yt.fadingCover, onAnimationChanged: y }),
                            a().createElement('div', { className: Yt.frontmanWidget }, a().createElement(at, null)),
                            a().createElement(
                                'div',
                                { className: Yt.footer },
                                a().createElement(
                                    'div',
                                    { className: Yt.orderPanelContainer },
                                    a().createElement(Ut, null),
                                ),
                                a().createElement('div', { className: Yt.footerBg }),
                                a().createElement(
                                    'div',
                                    { className: Yt.bigFrontmanIcon },
                                    a().createElement(ku, { frontmanId: c, polygon: I }),
                                ),
                                a().createElement(Gu, { selectedFrontmanId: c }),
                            ),
                        );
                    };
                engine.whenReady.then(() => {
                    H().render(
                        a().createElement(N, null, a().createElement(qt, null)),
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
        (__webpack_require__.O = (e, u, t, n) => {
            if (!u) {
                var a = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [u, t, n] = deferred[s], r = !0, o = 0; o < u.length; o++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[o]))
                            ? u.splice(o--, 1)
                            : ((r = !1), n < a && (a = n));
                    if (r) {
                        deferred.splice(s--, 1);
                        var i = t();
                        void 0 !== i && (e = i);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > n; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [u, t, n];
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
            var e = { 833: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        a,
                        [r, o, i] = t,
                        s = 0;
                    if (r.some((u) => 0 !== e[u])) {
                        for (n in o) __webpack_require__.o(o, n) && (__webpack_require__.m[n] = o[n]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (u && u(t); s < r.length; s++)
                        (a = r[s]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(5136));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
