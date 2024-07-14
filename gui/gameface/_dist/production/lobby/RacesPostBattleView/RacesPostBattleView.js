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
            527: (e, u, t) => {
                'use strict';
                t.r(u), t.d(u, { mouse: () => o, onResize: () => n });
                var r = t(2472),
                    a = t(1176);
                const n = (0, r.E)('clientResized'),
                    s = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') },
                    o = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function u() {
                            e.enabled && (0, a.R)(!1);
                        }
                        function t() {
                            e.enabled && (0, a.R)(!0);
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
                                : (0, a.R)(!1);
                        }
                        const n = ['down', 'up', 'move'].reduce(
                            (u, t) => (
                                (u[t] = (function (u) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let a = !0;
                                        const n = `mouse${u}`,
                                            o = s[u]((e) => t([e, 'outside']));
                                        function i(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(n, i),
                                            r(),
                                            () => {
                                                a &&
                                                    (o(),
                                                    window.removeEventListener(n, i),
                                                    (e.listeners -= 1),
                                                    r(),
                                                    (a = !1));
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
                                e.enabled && (0, a.R)(!0);
                            },
                            disableOutside() {
                                e.enabled && (0, a.R)(!1);
                            },
                        });
                    })();
            },
            5959: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        events: () => r,
                        getMouseGlobalPosition: () => n,
                        getSize: () => a,
                        graphicsQuality: () => s,
                    });
                var r = t(527);
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function n(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, u, t) => {
                'use strict';
                function r(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => r });
            },
            2472: (e, u, t) => {
                'use strict';
                function r(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                t.d(u, { E: () => r });
            },
            3138: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => a });
                var r = t(5959);
                const a = { view: t(7641), client: r };
            },
            3722: (e, u, t) => {
                'use strict';
                function r(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function a(e, u, t) {
                    return `url(${r(e, u, t)})`;
                }
                t.r(u), t.d(u, { getBgUrl: () => a, getTextureUrl: () => r });
            },
            6112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => a });
                var r = t(2472);
                const a = {
                    onTextureFrozen: (0, r.E)('self.onTextureFrozen'),
                    onTextureReady: (0, r.E)('self.onTextureReady'),
                    onDomBuilt: (0, r.E)('self.onDomBuilt'),
                    onLoaded: (0, r.E)('self.onLoaded'),
                    onDisplayChanged: (0, r.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, r.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, r.E)('children.onAdded'),
                        onLoaded: (0, r.E)('children.onLoaded'),
                        onRemoved: (0, r.E)('children.onRemoved'),
                        onAttached: (0, r.E)('children.onAttached'),
                        onTextureReady: (0, r.E)('children.onTextureReady'),
                        onRequestPosition: (0, r.E)('children.requestPosition'),
                    },
                };
            },
            7641: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => o,
                        children: () => r,
                        displayStatus: () => a.W,
                        displayStatusIs: () => b,
                        events: () => n.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => f,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => v,
                        getScale: () => F,
                        getSize: () => d,
                        getViewGlobalPosition: () => _,
                        isEventHandled: () => h,
                        isFocused: () => C,
                        pxToRem: () => g,
                        remToPx: () => D,
                        resize: () => E,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => p,
                        setEventHandled: () => B,
                        setInputPaddingsRem: () => i,
                        setSidePaddingsRem: () => m,
                        whenTutorialReady: () => S,
                    });
                var r = t(3722),
                    a = t(6112),
                    n = t(6538),
                    s = t(8566);
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function i(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, u, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, r);
                }
                function c(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function m(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function d(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function E(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function _(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: D(u.x), y: D(u.y) };
                }
                function A() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function F() {
                    return viewEnv.getScale();
                }
                function g(e) {
                    return viewEnv.pxToRem(e);
                }
                function D(e) {
                    return viewEnv.remToPx(e);
                }
                function p(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function C() {
                    return viewEnv.isFocused();
                }
                function B() {
                    return viewEnv.setEventHandled();
                }
                function h() {
                    return viewEnv.isEventHandled();
                }
                function f() {
                    viewEnv.forceTriggerMouseMove();
                }
                function v() {
                    return viewEnv.getShowingStatus();
                }
                const b = Object.keys(a.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === a.W[u]), e),
                        {},
                    ),
                    w = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    S = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : n.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => n });
                const r = ['args'],
                    a = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const n = u.args,
                                s = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        a = {},
                                        n = Object.keys(e);
                                    for (r = 0; r < n.length; r++) (t = n[r]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                    return a;
                                })(u, r);
                            return void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, s, {
                                          arguments:
                                              ((a = n),
                                              Object.entries(a).map(([e, u]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var a;
                    },
                    n = {
                        close(e) {
                            a('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            a(64);
                        },
                        move(e) {
                            a(16, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, u, t) => {
                'use strict';
                let r, a;
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
                    })(a || (a = {}));
            },
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                var r = t(3138);
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
                        const n = r.O.view.addModelObserver(e, t, a);
                        return (
                            n > 0
                                ? ((this._callbacks[n] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(n) : (this._views[t] = [n])))
                                : console.error("Can't add callback for model:", e),
                            n
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
                a.__instance = void 0;
                const n = a;
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
                t.d(u, { Sw: () => n.Z, B3: () => c, Z5: () => s, B0: () => i, ry: () => p, Eu: () => C });
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
                const a = r;
                var n = t(1358);
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
                    m = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = t(5521),
                    A = t(3138);
                const F = ['args'];
                function g(e, u, t, r, a, n, s) {
                    try {
                        var o = e[n](s),
                            i = o.value;
                    } catch (e) {
                        return void t(e);
                    }
                    o.done ? u(i) : Promise.resolve(i).then(r, a);
                }
                const D = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    p = (function () {
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
                                    return new Promise(function (r, a) {
                                        var n = e.apply(u, t);
                                        function s(e) {
                                            g(n, r, a, s, o, 'next', e);
                                        }
                                        function o(e) {
                                            g(n, r, a, s, o, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    C = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    B = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                n = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        a = {},
                                        n = Object.keys(e);
                                    for (r = 0; r < n.length; r++) (t = n[r]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                    return a;
                                })(u, F);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, n, {
                                          arguments:
                                              ((r = a),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, n));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var r;
                    },
                    h = () => B(i.CLOSE),
                    f = (e, u) => {
                        e.keyCode === _.n.ESCAPE && u();
                    };
                var v = t(7572);
                const b = a.instance,
                    w = {
                        DataTracker: n.Z,
                        ViewModel: v.Z,
                        ViewEventType: i,
                        NumberFormatType: c,
                        RealFormatType: m,
                        TimeFormatType: d,
                        DateFormatType: E,
                        makeGlobalBoundingBox: D,
                        sendMoveEvent: (e) => B(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: h,
                        sendClosePopOverEvent: () => B(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            B(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, r, a = R.invalid('resId'), n) => {
                            const s = A.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                m = o.width,
                                d = o.height,
                                E = {
                                    x: A.O.view.pxToRem(l) + s.x,
                                    y: A.O.view.pxToRem(c) + s.y,
                                    width: A.O.view.pxToRem(m),
                                    height: A.O.view.pxToRem(d),
                                };
                            B(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: a,
                                direction: u,
                                bbox: D(E),
                                on: !0,
                                args: n,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => f(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            f(e, h);
                        },
                        handleViewEvent: B,
                        onBindingsReady: p,
                        onLayoutReady: C,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(i.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(i.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(i.POP_OVER),
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const r in u)
                                if (Object.prototype.hasOwnProperty.call(u, r)) {
                                    const a = Object.prototype.toString.call(u[r]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = u[r];
                                        t[r] = [];
                                        for (let u = 0; u < a.length; u++) t[r].push({ value: e(a[u].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[r] = e(u[r]))
                                            : (t[r] = u[r]);
                                }
                            return t;
                        },
                        ClickOutsideManager: b,
                        SystemLocale: s,
                        UserLocale: o,
                    };
                window.ViewEnvHelper = w;
            },
            9670: (e, u, t) => {
                'use strict';
                var r = {};
                t.r(r),
                    t.d(r, {
                        Area: () => ft,
                        Bar: () => Ct,
                        DefaultScroll: () => ht,
                        Direction: () => it,
                        defaultSettings: () => lt,
                        useHorizontalScrollApi: () => mt,
                    });
                var a = {};
                t.r(a), t.d(a, { Area: () => Mt, Bar: () => Rt, Default: () => Lt, useVerticalScrollApi: () => vt });
                var n = t(6179),
                    s = t.n(n);
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
                var i = t(3138);
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var c;
                function m(e, u, t) {
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
                        n = Math.min(r, a);
                    return {
                        extraLarge: n === t.extraLarge.weight,
                        large: n === t.large.weight,
                        medium: n === t.medium.weight,
                        small: n === t.small.weight,
                        extraSmall: n === t.extraSmall.weight,
                        extraLargeWidth: r === t.extraLarge.weight,
                        largeWidth: r === t.large.weight,
                        mediumWidth: r === t.medium.weight,
                        smallWidth: r === t.small.weight,
                        extraSmallWidth: r === t.extraSmall.weight,
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
                })(c || (c = {}));
                const d = i.O.client.getSize('rem'),
                    E = d.width,
                    _ = d.height,
                    A = Object.assign({ width: E, height: _ }, m(E, _, l)),
                    F = (0, n.createContext)(A),
                    g = ['children'],
                    D = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    a = {},
                                    n = Object.keys(e);
                                for (r = 0; r < n.length; r++) (t = n[r]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, g);
                        const r = (0, n.useContext)(F),
                            a = r.extraLarge,
                            s = r.large,
                            i = r.medium,
                            l = r.small,
                            c = r.extraSmall,
                            m = r.extraLargeWidth,
                            d = r.largeWidth,
                            E = r.mediumWidth,
                            _ = r.smallWidth,
                            A = r.extraSmallWidth,
                            D = r.extraLargeHeight,
                            p = r.largeHeight,
                            C = r.mediumHeight,
                            B = r.smallHeight,
                            h = r.extraSmallHeight,
                            f = { extraLarge: D, large: p, medium: C, small: B, extraSmall: h };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && a) return u;
                            if (t.large && s) return u;
                            if (t.medium && i) return u;
                            if (t.small && l) return u;
                            if (t.extraSmall && c) return u;
                        } else {
                            if (t.extraLargeWidth && m) return o(u, t, f);
                            if (t.largeWidth && d) return o(u, t, f);
                            if (t.mediumWidth && E) return o(u, t, f);
                            if (t.smallWidth && _) return o(u, t, f);
                            if (t.extraSmallWidth && A) return o(u, t, f);
                            if (
                                !(
                                    t.extraLargeWidth ||
                                    t.largeWidth ||
                                    t.mediumWidth ||
                                    t.smallWidth ||
                                    t.extraSmallWidth
                                )
                            ) {
                                if (t.extraLargeHeight && D) return u;
                                if (t.largeHeight && p) return u;
                                if (t.mediumHeight && C) return u;
                                if (t.smallHeight && B) return u;
                                if (t.extraSmallHeight && h) return u;
                            }
                        }
                        return null;
                    };
                (D.defaultProps = {
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
                    (0, n.memo)(D);
                const p = (0, n.memo)(({ children: e }) => {
                    const u = (0, n.useContext)(F),
                        t = (0, n.useState)(u),
                        r = t[0],
                        a = t[1],
                        o = (0, n.useCallback)((e, u) => {
                            const t = i.O.view.pxToRem(e),
                                r = i.O.view.pxToRem(u);
                            a(Object.assign({ width: t, height: r }, m(t, r, l)));
                        }, []);
                    ((e) => {
                        const u = (0, n.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    })(() => {
                        engine.on('clientResized', o);
                    }),
                        (0, n.useEffect)(() => () => engine.off('clientResized', o), [o]);
                    const c = (0, n.useMemo)(() => Object.assign({}, r), [r]);
                    return s().createElement(F.Provider, { value: c }, e);
                });
                var C = t(6483),
                    B = t.n(C),
                    h = t(926),
                    f = t.n(h);
                let v, b, w;
                !(function (e) {
                    (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = l.small.width)] = 'Small'),
                        (e[(e.Medium = l.medium.width)] = 'Medium'),
                        (e[(e.Large = l.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                })(v || (v = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.width)] = 'Small'),
                            (e[(e.Medium = l.medium.width)] = 'Medium'),
                            (e[(e.Large = l.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                    })(b || (b = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = l.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.height)] = 'Small'),
                            (e[(e.Medium = l.medium.height)] = 'Medium'),
                            (e[(e.Large = l.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.height)] = 'ExtraLarge');
                    })(w || (w = {}));
                const S = () => {
                        const e = (0, n.useContext)(F),
                            u = e.width,
                            t = e.height,
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return v.ExtraLarge;
                                    case e.large:
                                        return v.Large;
                                    case e.medium:
                                        return v.Medium;
                                    case e.small:
                                        return v.Small;
                                    case e.extraSmall:
                                        return v.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), v.ExtraSmall;
                                }
                            })(e),
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return b.ExtraLarge;
                                    case e.largeWidth:
                                        return b.Large;
                                    case e.mediumWidth:
                                        return b.Medium;
                                    case e.smallWidth:
                                        return b.Small;
                                    case e.extraSmallWidth:
                                        return b.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), b.ExtraSmall;
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
                        return { mediaSize: r, mediaWidth: a, mediaHeight: s, remScreenWidth: u, remScreenHeight: t };
                    },
                    T = ['children', 'className'];
                function P() {
                    return (
                        (P =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        P.apply(this, arguments)
                    );
                }
                const y = {
                        [b.ExtraSmall]: '',
                        [b.Small]: f().SMALL_WIDTH,
                        [b.Medium]: `${f().SMALL_WIDTH} ${f().MEDIUM_WIDTH}`,
                        [b.Large]: `${f().SMALL_WIDTH} ${f().MEDIUM_WIDTH} ${f().LARGE_WIDTH}`,
                        [b.ExtraLarge]: `${f().SMALL_WIDTH} ${f().MEDIUM_WIDTH} ${f().LARGE_WIDTH} ${f().EXTRA_LARGE_WIDTH}`,
                    },
                    x = {
                        [w.ExtraSmall]: '',
                        [w.Small]: f().SMALL_HEIGHT,
                        [w.Medium]: `${f().SMALL_HEIGHT} ${f().MEDIUM_HEIGHT}`,
                        [w.Large]: `${f().SMALL_HEIGHT} ${f().MEDIUM_HEIGHT} ${f().LARGE_HEIGHT}`,
                        [w.ExtraLarge]: `${f().SMALL_HEIGHT} ${f().MEDIUM_HEIGHT} ${f().LARGE_HEIGHT} ${f().EXTRA_LARGE_HEIGHT}`,
                    },
                    N = {
                        [v.ExtraSmall]: '',
                        [v.Small]: f().SMALL,
                        [v.Medium]: `${f().SMALL} ${f().MEDIUM}`,
                        [v.Large]: `${f().SMALL} ${f().MEDIUM} ${f().LARGE}`,
                        [v.ExtraLarge]: `${f().SMALL} ${f().MEDIUM} ${f().LARGE} ${f().EXTRA_LARGE}`,
                    },
                    L = (e) => {
                        let u = e.children,
                            t = e.className,
                            r = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    a = {},
                                    n = Object.keys(e);
                                for (r = 0; r < n.length; r++) (t = n[r]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, T);
                        const a = S(),
                            n = a.mediaWidth,
                            o = a.mediaHeight,
                            i = a.mediaSize;
                        return s().createElement('div', P({ className: B()(t, y[n], x[o], N[i]) }, r), u);
                    },
                    M = ['children'],
                    O = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    a = {},
                                    n = Object.keys(e);
                                for (r = 0; r < n.length; r++) (t = n[r]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, M);
                        return s().createElement(p, null, s().createElement(L, t, u));
                    };
                var k = t(493),
                    I = t.n(k);
                let H;
                function W(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(H || (H = {}));
                const U = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    G = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    $ = (e, u, t = H.left) => e.split(u).reduce(t === H.left ? U : G, []),
                    z = (() => {
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
                    j = ['zh_cn', 'zh_sg', 'zh_tw'],
                    V = (e, u, t) =>
                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                            t && e in t
                                ? t[e]
                                : ((e, u = H.left) => {
                                      const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                      return j.includes(t)
                                          ? z(e)
                                          : ((e, u = H.left) => {
                                                let t = [];
                                                const r =
                                                        /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                    a = e.replace(/&nbsp;/g, ' ');
                                                return (
                                                    $(a, /( )/, u).forEach((e) => (t = t.concat($(e, r, H.left)))), t
                                                );
                                            })(e, u);
                                  })(e, u),
                        ),
                    q = ({ binding: e, text: u = '', classMix: t, alignment: r = H.left }) =>
                        null === u
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : s().createElement(
                                  n.Fragment,
                                  null,
                                  u.split('\n').map((u, a) =>
                                      s().createElement(
                                          'div',
                                          { className: B()('FormatText_base_d0', t), key: `${u}-${a}` },
                                          V(u, r, e).map((e, u) =>
                                              s().createElement(n.Fragment, { key: `${u}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              );
                function X(e) {
                    engine.call('PlaySound', e);
                }
                const Y = {
                        playHighlight() {
                            X('highlight');
                        },
                        playClick() {
                            X('play');
                        },
                        playYes() {
                            X('yes1');
                        },
                    },
                    Q = {
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
                    K = [
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
                function Z() {
                    return (
                        (Z =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Z.apply(this, arguments)
                    );
                }
                class J extends s().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && X(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && X(this.props.soundClick);
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
                            a = e.side,
                            n = e.type,
                            o = e.classNames,
                            i = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            m = e.onMouseUp,
                            d =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        a = {},
                                        n = Object.keys(e);
                                    for (r = 0; r < n.length; r++) (t = n[r]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                    return a;
                                })(e, K)),
                            E = B()(Q.base, Q[`base__${n}`], Q[`base__${a}`], null == o ? void 0 : o.base),
                            _ = B()(Q.icon, Q[`icon__${n}`], Q[`icon__${a}`], null == o ? void 0 : o.icon),
                            A = B()(Q.glow, null == o ? void 0 : o.glow),
                            F = B()(Q.caption, Q[`caption__${n}`], null == o ? void 0 : o.caption),
                            g = B()(Q.goto, null == o ? void 0 : o.goto);
                        return s().createElement(
                            'div',
                            Z(
                                {
                                    className: E,
                                    onMouseEnter: this._onMouseEnter(i),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(m),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                d,
                            ),
                            'info' !== n && s().createElement('div', { className: Q.shine }),
                            s().createElement('div', { className: _ }, s().createElement('div', { className: A })),
                            s().createElement('div', { className: F }, u),
                            r && s().createElement('div', { className: g }, r),
                        );
                    }
                }
                J.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var ee = t(3403);
                function ue() {}
                function te() {
                    return !1;
                }
                console.log;
                var re = t(9174);
                function ae(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, r = new Array(u); t < u; t++) r[t] = e[t];
                    return r;
                }
                const ne = (e) => (0 === e ? window : window.subViews.get(e)),
                    se = () => (e, u) => {
                        const t = (0, n.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: a, children: o, mocks: l }) {
                                const c = (0, n.useRef)([]),
                                    m = (t, r, a) => {
                                        var n;
                                        const s = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = ne,
                                                context: r = 'model',
                                            } = {}) {
                                                const a = new Map();
                                                function n(e, u = 0) {
                                                    viewEnv.removeDataChangedCallback(e, u)
                                                        ? a.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, u, t) => {
                                                        t.forEach((u) => {
                                                            const t = a.get(u);
                                                            void 0 !== t && t(e);
                                                        });
                                                    });
                                                });
                                                const s = (e) => {
                                                    const a = t(u),
                                                        n = r.split('.').reduce((e, u) => e[u], a);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? n
                                                        : e.split('.').reduce((e, u) => {
                                                              const t = e[u];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, n);
                                                };
                                                return {
                                                    subscribe: (t, n) => {
                                                        const o = 'string' == typeof n ? `${r}.${n}` : r,
                                                            l = i.O.view.addModelObserver(o, u, !0);
                                                        return a.set(l, t), e && t(s(n)), l;
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
                                                                                    return ae(e, u);
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
                                                                                          ? ae(e, u)
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
                                                                })(a.keys());
                                                            !(e = t()).done;

                                                        )
                                                            n(e.value, u);
                                                    },
                                                    unsubscribe: n,
                                                };
                                            })(r),
                                            o =
                                                'real' === t
                                                    ? s
                                                    : Object.assign({}, s, {
                                                          readByPath:
                                                              null != (n = null == a ? void 0 : a.getter)
                                                                  ? n
                                                                  : () => {},
                                                      }),
                                            l = (e) =>
                                                'mocks' === t ? (null == a ? void 0 : a.getter(e)) : o.readByPath(e),
                                            m = (e) => c.current.push(e),
                                            d = e({
                                                mode: t,
                                                readByPath: l,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (e, u) => {
                                                        const r = null != u ? u : l(e),
                                                            a = re.LO.box(r, { equals: te });
                                                        return (
                                                            'real' === t &&
                                                                o.subscribe(
                                                                    (0, re.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (e, u) => {
                                                        const r = null != u ? u : l(e),
                                                            a = re.LO.box(r, { equals: te });
                                                        return (
                                                            'real' === t &&
                                                                o.subscribe(
                                                                    (0, re.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (e, u) => {
                                                        const r = l(u);
                                                        if (Array.isArray(e)) {
                                                            const a = e.reduce(
                                                                (e, u) => ((e[u] = re.LO.box(r[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    o.subscribe(
                                                                        (0, re.aD)((u) => {
                                                                            e.forEach((e) => {
                                                                                a[e].set(u[e]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                        {
                                                            const a = e,
                                                                n = Object.entries(a),
                                                                s = n.reduce(
                                                                    (e, [u, t]) => ((e[t] = re.LO.box(r[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    o.subscribe(
                                                                        (0, re.aD)((e) => {
                                                                            n.forEach(([u, t]) => {
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
                                                cleanup: m,
                                            }),
                                            E = { mode: t, model: d, externalModel: o, cleanup: m };
                                        return {
                                            model: d,
                                            controls: 'mocks' === t && a ? a.controls(E) : u(E),
                                            externalModel: o,
                                            mode: t,
                                        };
                                    },
                                    d = (0, n.useRef)(!1),
                                    E = (0, n.useState)(r),
                                    _ = E[0],
                                    A = E[1],
                                    F = (0, n.useState)(() => m(r, a, l)),
                                    g = F[0],
                                    D = F[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        d.current ? D(m(_, a, l)) : (d.current = !0);
                                    }, [l, _, a]),
                                    (0, n.useEffect)(() => {
                                        A(r);
                                    }, [r]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            g.externalModel.dispose(), c.current.forEach((e) => e());
                                        },
                                        [g],
                                    ),
                                    s().createElement(t.Provider, { value: g }, o)
                                );
                            },
                            () => (0, n.useContext)(t),
                        ];
                    };
                function oe(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, r) => u(null == e ? void 0 : e.value, t, r));
                }
                var ie = t(3946);
                let le;
                !(function (e) {
                    (e.Normal = 'normal'), (e.RecentlyCompleted = 'recentlyCompleted'), (e.Completed = 'completed');
                })(le || (le = {}));
                const ce = { 0: 'firstCondition', 1: 'secondCondition' },
                    me = (e, u) => {
                        const t = [];
                        if ('or' === e.conditionType || 'and' === e.conditionType)
                            e.items.forEach((e) => {
                                const r =
                                    (a = e) &&
                                    'value' in a &&
                                    null != (n = a.constructor) &&
                                    n.name.includes('ArrayItem')
                                        ? null == a
                                            ? void 0
                                            : a.value
                                        : a;
                                var a, n;
                                r && t.push(...me(r, u));
                            });
                        else {
                            const r = e.descrData;
                            let a = e,
                                n = a.titleData,
                                s = a.current,
                                o = a.total,
                                i = a.earned,
                                l = a.iconKey;
                            const c = (function (e, u) {
                                var t;
                                if (!(u >= e.length))
                                    return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                            })(u, 0);
                            c &&
                                ((n = r || c.descrData),
                                (l = l || c.iconKey),
                                (s = c.current),
                                (o = c.total),
                                (i = c.earned)),
                                0 === o && (n = r),
                                t.push({ condition: n, lastValue: i, currentValue: s, maxValue: o, icon: l });
                        }
                        return t;
                    },
                    de = (e, u, t) => {
                        const r = {};
                        let a = {},
                            n = '';
                        return (
                            me(e, u).forEach(
                                ({ condition: e, lastValue: u, currentValue: t, maxValue: s, icon: o }, i) => {
                                    (r[ce[i]] = ((e, u) =>
                                        V(e, H.left)
                                            .flat()
                                            .map((e, t) => (0 === t && u > 0 && (e = e.toLowerCase()), e)))(e, i)),
                                        (n = o),
                                        (a = { lastValue: u, currentValue: t, maxValue: s });
                                },
                            ),
                            {
                                taskConditions: [{ conditions: r, progression: Object.assign({ status: t }, a) }],
                                taskBattleIcon: n,
                            }
                        );
                    },
                    Ee = (e) => ('secondCondition' in e ? 'multiConditions' : 'oneCondition'),
                    _e = ({ lastValue: e, currentValue: u, maxValue: t }) =>
                        u !== e && u === t ? le.RecentlyCompleted : u === e && u === t ? le.Completed : le.Normal,
                    Ae = R.strings.races_postbattle,
                    Fe = se()(
                        ({ observableModel: e }) => {
                            const u = {
                                    root: e.object(),
                                    dailyQuests: e.array('dailyQuests'),
                                    players: e.array('players'),
                                },
                                t = (0, ie.Om)(
                                    () =>
                                        oe(u.dailyQuests.get(), (e) => {
                                            const u = de(e.postBattleCondition, e.bonusCondition.items, e.status);
                                            return Object.assign({}, u, { awardsBattle: e.bonuses });
                                        }),
                                    { equals: te },
                                ),
                                r = (0, ie.Om)(() => oe(u.players.get(), (e) => e), { equals: te }),
                                a = (0, ie.Om)((e) => r().find((u) => u.playerId === e));
                            return Object.assign({}, u, {
                                computes: { battleQuests: t, getPlayers: r, getPlayerById: a },
                            });
                        },
                        ({ externalModel: e }) => ({ onClose: e.createCallbackNoArgs('onClose') }),
                    ),
                    ge = Fe[0],
                    De = Fe[1],
                    pe = {
                        base: 'App_base_9e',
                        base__victory: 'App_base__victory_4b',
                        header: 'App_header_01',
                        switchView: 'App_switchView_c0',
                        close: 'App_close_7b',
                        footer: 'App_footer_59',
                        battleInfo: 'App_battleInfo_34',
                        finishTime: 'App_finishTime_ca',
                        finishText: 'App_finishText_7c',
                        finishTimeStamp: 'App_finishTimeStamp_68',
                        racesInfo: 'App_racesInfo_4e',
                        button: 'App_button_92',
                        texture: 'App_texture_a2',
                        leaveButton: 'App_leaveButton_66',
                        leaveButton_container: 'App_leaveButton_container_57',
                    };
                var Ce = t(9887),
                    Be = t.n(Ce);
                const he = ['xl', 'lg', 'md', 'sm', 'xs'],
                    fe = (e) => e.includes('_') && ((e) => he.includes(e))(e.split('_').at(-1)),
                    ve = [v.ExtraLarge, v.Large, v.Medium, v.Small, v.ExtraSmall],
                    be = (e, u) =>
                        Object.keys(e).reduce((t, r) => {
                            if (r in t) return t;
                            if (fe(r)) {
                                const a = r.split('_').slice(0, -1).join('_');
                                if (a in t) return t;
                                const n = ve.indexOf(u),
                                    s = (-1 !== n ? he.slice(n) : [])
                                        .map((e) => a + '_' + e)
                                        .find((u) => void 0 !== e[u]),
                                    o = s ? e[s] : void 0;
                                return (t[a] = void 0 !== o ? o : e[a]), t;
                            }
                            const a = e[r];
                            return (
                                void 0 === a ||
                                    ((e, u) => he.some((t) => void 0 !== u[`${e}_${t}`]))(r, e) ||
                                    (t[r] = a),
                                t
                            );
                        }, {}),
                    we = (e, u = be) => {
                        const t = (
                            (e, u = be) =>
                            (t) => {
                                const r = S().mediaSize,
                                    a = (0, n.useMemo)(() => u(t, r), [t, r]);
                                return s().createElement(e, a);
                            }
                        )(e, u);
                        return s().memo((u) =>
                            Object.keys(u).some((e) => fe(e) && void 0 !== u[e])
                                ? s().createElement(t, u)
                                : s().createElement(e, u),
                        );
                    },
                    Se = {
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
                    Te = [
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
                Object.keys(Be());
                const ye = {
                        XL: { mt: Se.mt__XL, mr: Se.mr__XL, mb: Se.mb__XL, ml: Se.ml__XL },
                        LG: { mt: Se.mt__LG, mr: Se.mr__LG, mb: Se.mb__LG, ml: Se.ml__LG },
                        MDp: { mt: Se.mt__MDp, mr: Se.mr__MDp, mb: Se.mb__MDp, ml: Se.ml__MDp },
                        MD: { mt: Se.mt__MD, mr: Se.mr__MD, mb: Se.mb__MD, ml: Se.ml__MD },
                        SMp: { mt: Se.mt__SMp, mr: Se.mr__SMp, mb: Se.mb__SMp, ml: Se.ml__SMp },
                        SM: { mt: Se.mt__SM, mr: Se.mr__SM, mb: Se.mb__SM, ml: Se.ml__SM },
                        XS: { mt: Se.mt__XS, mr: Se.mr__XS, mb: Se.mb__XS, ml: Se.ml__XS },
                    },
                    xe = (Object.keys(ye), ['mt', 'mr', 'mb', 'ml']),
                    Re = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    Ne = we((e) => {
                        let u = e.className,
                            t = e.width,
                            r = e.height,
                            a = e.m,
                            o = e.mt,
                            i = void 0 === o ? a : o,
                            l = e.mr,
                            c = void 0 === l ? a : l,
                            m = e.mb,
                            d = void 0 === m ? a : m,
                            E = e.ml,
                            _ = void 0 === E ? a : E,
                            A = e.column,
                            F = e.row,
                            g = e.flexDirection,
                            D = void 0 === g ? (A ? 'column' : F && 'row') || void 0 : g,
                            p = e.flexStart,
                            C = e.center,
                            h = e.flexEnd,
                            f = e.spaceBetween,
                            v = e.spaceAround,
                            b = e.justifyContent,
                            w =
                                void 0 === b
                                    ? (p ? 'flex-start' : C && 'center') ||
                                      (h && 'flex-end') ||
                                      (f && 'space-between') ||
                                      (v && 'space-around') ||
                                      void 0
                                    : b,
                            S = e.alignItems,
                            T = void 0 === S ? (p ? 'flex-start' : C && 'center') || (h && 'flex-end') || void 0 : S,
                            P = e.alignSelf,
                            y = e.wrap,
                            x = e.flexWrap,
                            R = void 0 === x ? (y ? 'wrap' : void 0) : x,
                            N = e.grow,
                            L = e.shrink,
                            M = e.flex,
                            O = void 0 === M ? (N || L ? `${N ? 1 : 0} ${L ? 1 : 0} auto` : void 0) : M,
                            k = e.style,
                            I = e.children,
                            H = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    a = {},
                                    n = Object.keys(e);
                                for (r = 0; r < n.length; r++) (t = n[r]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, Te);
                        const W = (0, n.useMemo)(() => {
                                const e = { mt: i, mr: c, mb: d, ml: _ },
                                    u = ((e) =>
                                        xe.reduce((u, t) => {
                                            const r = e[t];
                                            return r && 'number' != typeof r ? u.concat(ye[!0 === r ? 'MD' : r][t]) : u;
                                        }, []))(e),
                                    a = ((e) =>
                                        xe.reduce((u, t) => {
                                            const r = e[t];
                                            return 'number' == typeof r && (u[Re[t]] = r + 'rem'), u;
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, k, a, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== r && 'number' == typeof r ? r + 'rem' : r,
                                        flex: O,
                                        alignSelf: P,
                                        display: D || T ? 'flex' : void 0,
                                        flexDirection: D,
                                        flexWrap: R,
                                        justifyContent: w,
                                        alignItems: T,
                                    }),
                                    computedClassNames: u,
                                };
                            }, [t, r, i, c, d, _, k, O, P, D, R, w, T]),
                            U = W.computedStyle,
                            G = W.computedClassNames;
                        return s().createElement('div', Pe({ className: B()(Se.base, ...G, u), style: U }, H), I);
                    });
                var Le = t(3532),
                    Me = t.n(Le);
                const Oe = {
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
                    ke = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function Ie() {
                    return (
                        (Ie =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Ie.apply(this, arguments)
                    );
                }
                Object.keys(Be());
                const He = Object.keys(Me()),
                    We = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    Ue = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Ge = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    $e =
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
                            'heading-H56': We,
                            'heading-H36': We,
                            'heading-H28': Ue,
                            'heading-H24': Ue,
                            'heading-H24R': Ue,
                            'heading-H22': Ue,
                            'heading-H20R': Ue,
                            'heading-H18': Ue,
                            'heading-H15': Ge,
                            'heading-H14': Ge,
                            'paragraph-P24': Ue,
                            'paragraph-P18': Ue,
                            'paragraph-P16': Ue,
                            'paragraph-P14': Ge,
                            'paragraph-P12': Ge,
                            'paragraph-P10': Ge,
                        }),
                    ze =
                        (Object.keys($e),
                        (e) =>
                            e
                                ? ((e) => He.includes(e))(e)
                                    ? { colorClassName: Oe[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    je = we((e) => {
                        let u = e.text,
                            t = e.variant,
                            r = e.className,
                            a = e.color,
                            o = e.m,
                            i = e.mt,
                            l = void 0 === i ? o : i,
                            c = e.mr,
                            m = void 0 === c ? o : c,
                            d = e.mb,
                            E = void 0 === d ? o : d,
                            _ = e.ml,
                            A = void 0 === _ ? o : _,
                            F = e.style,
                            g = e.format,
                            D = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    a = {},
                                    n = Object.keys(e);
                                for (r = 0; r < n.length; r++) (t = n[r]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, ke);
                        const p = (0, n.useMemo)(() => {
                                const e = ze(a),
                                    u = e.colorClassName,
                                    t = e.colorStyle,
                                    r = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, F, r), colorClassName: u };
                            }, [F, a]),
                            C = p.computedStyle,
                            h = p.colorClassName;
                        return s().createElement(
                            Ne,
                            Ie(
                                {
                                    className: B()(Oe.base, t && Oe[t], h, r),
                                    style: C,
                                    mt: !0 === l ? $e[t || 'paragraph-P16'].mt : l,
                                    mr: !0 === m ? $e[t || 'paragraph-P16'].mr : m,
                                    mb: !0 === E ? $e[t || 'paragraph-P16'].mb : E,
                                    ml: !0 === A ? $e[t || 'paragraph-P16'].ml : A,
                                },
                                D,
                            ),
                            void 0 !== g ? s().createElement(q, Ie({}, g, { text: u })) : u,
                        );
                    }),
                    Ve = ({ text: e, onClick: u, isActive: t = !1 }) =>
                        s().createElement(
                            'div',
                            { className: B()('HeaderTab_base_53', t && 'HeaderTab_base__active_fd'), onClick: u },
                            s().createElement(
                                'div',
                                { className: 'HeaderTab_content_0a' },
                                t && s().createElement('div', { className: 'HeaderTab_texture_97' }),
                                s().createElement(je, { text: e, className: 'HeaderTab_text_98' }),
                            ),
                        );
                let qe, Xe, Ye, Qe, Ke, Ze, Je;
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
                        (e.Comp7TokenCouponReward = 'comp7TokenCouponReward'),
                        (e.BattleBoosterGift = 'battleBooster_gift'),
                        (e.CosmicLootboxSilver = 'lootBoxToken'),
                        (e.CosmicLootboxCommon = 'cosmic_2024_2'),
                        (e.RacesPoint = 'races_point');
                })(qe || (qe = {})),
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
                    })(Xe || (Xe = {})),
                    (function (e) {
                        (e.Big = 'big'),
                            (e.Small = 'small'),
                            (e.Mini = 'mini'),
                            (e.S600x450 = 's600x450'),
                            (e.S400x300 = 's400x300'),
                            (e.S296x222 = 's296x222'),
                            (e.S232x174 = 's232x174'),
                            (e.S180x135 = 's180x135'),
                            (e.S128x100 = 's128x100'),
                            (e.S80x80 = 's80x80'),
                            (e.S48x48 = 's48x48');
                    })(Ye || (Ye = {})),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(Qe || (Qe = {})),
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
                    })(Ke || (Ke = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(Ze || (Ze = {})),
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
                    })(Je || (Je = {}));
                var eu = t(4179);
                const uu = [
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
                function tu(e) {
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
                const ru = (e, u, t = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: eu.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: r,
                                },
                                t,
                            ),
                        );
                    },
                    au = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            r = e.args,
                            a = e.onMouseEnter,
                            s = e.onMouseLeave,
                            o = e.onMouseDown,
                            i = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            m = e.ignoreMouseClick,
                            d = void 0 !== m && m,
                            E = e.decoratorId,
                            _ = void 0 === E ? 0 : E,
                            A = e.isEnabled,
                            F = void 0 === A || A,
                            g = e.targetId,
                            D = void 0 === g ? 0 : g,
                            p = e.onShow,
                            C = e.onHide,
                            B = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    a = {},
                                    n = Object.keys(e);
                                for (r = 0; r < n.length; r++) (t = n[r]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, uu);
                        const h = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            f = (0, n.useMemo)(
                                () =>
                                    D ||
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
                                [D],
                            ),
                            v = (0, n.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (ru(t, _, { isMouseEvent: !0, on: !0, arguments: tu(r) }, f),
                                    p && p(),
                                    (h.current.isVisible = !0));
                            }, [t, _, r, f, p]),
                            b = (0, n.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const e = h.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (h.current.timeoutId = 0)),
                                        ru(t, _, { on: !1 }, f),
                                        h.current.isVisible && C && C(),
                                        (h.current.isVisible = !1);
                                }
                            }, [t, _, f, C]),
                            w = (0, n.useCallback)((e) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(h.current.prevTarget) && b();
                                    }, 200)));
                            }, []);
                        return (
                            (0, n.useEffect)(() => {
                                const e = h.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', w, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', w, { capture: !0 }),
                                            e && window.clearTimeout(e);
                                    }
                                );
                            }, []),
                            (0, n.useEffect)(() => {
                                !1 === F && b();
                            }, [F, b]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', b),
                                    () => {
                                        window.removeEventListener('mouseleave', b), b();
                                    }
                                ),
                                [b],
                            ),
                            F
                                ? (0, n.cloneElement)(
                                      u,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((S = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((h.current.timeoutId = window.setTimeout(v, c ? 100 : 400)),
                                                          a && a(e),
                                                          S && S(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  b(), null == s || s(u), null == e || e(u);
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  !1 === d && b(), null == i || i(u), null == e || e(u);
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  !1 === d && b(), null == o || o(u), null == e || e(u);
                                              })(u.props.onMouseDown),
                                          },
                                          B,
                                      ),
                                  )
                                : u
                        );
                        var S;
                    },
                    nu = ['children'];
                function su() {
                    return (
                        (su =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        su.apply(this, arguments)
                    );
                }
                const ou = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    a = {},
                                    n = Object.keys(e);
                                for (r = 0; r < n.length; r++) (t = n[r]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, nu);
                        return s().createElement(
                            au,
                            su(
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
                    iu = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function lu() {
                    return (
                        (lu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        lu.apply(this, arguments)
                    );
                }
                const cu = R.views.common.tooltip_window.simple_tooltip_content,
                    mu = (e) => {
                        let u = e.children,
                            t = e.body,
                            r = e.header,
                            a = e.note,
                            o = e.alert,
                            i = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    a = {},
                                    n = Object.keys(e);
                                for (r = 0; r < n.length; r++) (t = n[r]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, iu);
                        const c = (0, n.useMemo)(() => {
                            const e = Object.assign({}, i, { body: t, header: r, note: a, alert: o });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [o, t, r, a, i]);
                        return s().createElement(
                            au,
                            lu(
                                {
                                    contentId:
                                        ((m = null == i ? void 0 : i.hasHtmlContent),
                                        m ? cu.SimpleTooltipHtmlContent('resId') : cu.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var m;
                    };
                function du() {
                    return (
                        (du =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        du.apply(this, arguments)
                    );
                }
                const Eu = ({ children: e, tooltipArgs: u, className: t }) => {
                    if (!u) return e;
                    const r = s().createElement('div', { className: t }, e);
                    if (u.header || u.body) return s().createElement(mu, u, r);
                    const a = u.contentId,
                        n = u.args,
                        o = null == n ? void 0 : n.contentId;
                    return a || o
                        ? s().createElement(au, du({}, u, { contentId: a || o }), r)
                        : s().createElement(ou, u, r);
                };
                class _u extends s().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? eu.B3.GOLD : eu.B3.INTEGRAL;
                        const u = eu.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                _u.defaultProps = { format: 'integral' };
                const Au = [
                        qe.Items,
                        qe.Equipment,
                        qe.Xp,
                        qe.XpFactor,
                        qe.Blueprints,
                        qe.BlueprintsAny,
                        qe.Goodies,
                        qe.Berths,
                        qe.Slots,
                        qe.Tokens,
                        qe.CrewSkins,
                        qe.CrewBooks,
                        qe.Customizations,
                        qe.CreditsFactor,
                        qe.TankmenXp,
                        qe.TankmenXpFactor,
                        qe.FreeXpFactor,
                        qe.BattleToken,
                        qe.PremiumUniversal,
                        qe.NaturalCover,
                        qe.BpCoin,
                        qe.BattlePassSelectToken,
                        qe.BattlaPassFinalAchievement,
                        qe.BattleBadge,
                        qe.BonusX5,
                        qe.CrewBonusX3,
                        qe.NewYearFillers,
                        qe.NewYearInvoice,
                        qe.EpicSelectToken,
                        qe.Comp7TokenWeeklyReward,
                        qe.Comp7TokenCouponReward,
                        qe.BattleBoosterGift,
                        qe.CosmicLootboxCommon,
                        qe.CosmicLootboxSilver,
                    ],
                    Fu = [qe.Gold, qe.Credits, qe.Crystal, qe.FreeXp],
                    gu = [qe.BattlePassPoints, qe.RacesPoint],
                    Du = [qe.PremiumPlus, qe.Premium],
                    pu = ['engravings', 'backgrounds'],
                    Cu = ['engraving', 'background'],
                    Bu = (e, u, t) => {
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
                    hu = (e, u) => {
                        if (void 0 === e) return null;
                        switch (u) {
                            case Qe.MULTI: {
                                const u = Number(e);
                                return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                            }
                            case Qe.CURRENCY:
                            case Qe.NUMBER:
                                return s().createElement(_u, { format: 'integral', value: Number(e) });
                            case Qe.PREMIUM_PLUS: {
                                const u = Number(e);
                                return isNaN(u) ? e : null;
                            }
                            default:
                                return e;
                        }
                    },
                    fu = {
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
                    vu = ({
                        name: e,
                        image: u,
                        isPeriodic: t = !1,
                        size: r = Ye.Big,
                        special: a,
                        value: n,
                        valueType: o,
                        style: i,
                        className: l,
                        classNames: c,
                        tooltipArgs: m,
                        periodicIconTooltipArgs: d,
                    }) => {
                        const E = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case Ke.BATTLE_BOOSTER:
                                    case Ke.BATTLE_BOOSTER_REPLACE:
                                        return Ze.BATTLE_BOOSTER;
                                }
                            })(a),
                            _ = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case Ke.BATTLE_BOOSTER:
                                        return Je.BATTLE_BOOSTER;
                                    case Ke.BATTLE_BOOSTER_REPLACE:
                                        return Je.BATTLE_BOOSTER_REPLACE;
                                    case Ke.BUILT_IN_EQUIPMENT:
                                        return Je.BUILT_IN_EQUIPMENT;
                                    case Ke.EQUIPMENT_PLUS:
                                        return Je.EQUIPMENT_PLUS;
                                    case Ke.EQUIPMENT_TROPHY_BASIC:
                                        return Je.EQUIPMENT_TROPHY_BASIC;
                                    case Ke.EQUIPMENT_TROPHY_UPGRADED:
                                        return Je.EQUIPMENT_TROPHY_UPGRADED;
                                    case Ke.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return Je.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case Ke.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return Je.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case Ke.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return Je.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case Ke.PROGRESSION_STYLE_UPGRADED_1:
                                        return Je.PROGRESSION_STYLE_UPGRADED_1;
                                    case Ke.PROGRESSION_STYLE_UPGRADED_2:
                                        return Je.PROGRESSION_STYLE_UPGRADED_2;
                                    case Ke.PROGRESSION_STYLE_UPGRADED_3:
                                        return Je.PROGRESSION_STYLE_UPGRADED_3;
                                    case Ke.PROGRESSION_STYLE_UPGRADED_4:
                                        return Je.PROGRESSION_STYLE_UPGRADED_4;
                                }
                            })(a),
                            A = hu(n, o);
                        return s().createElement(
                            'div',
                            { className: B()(fu.base, fu[`base__${r}`], l), style: i },
                            s().createElement(
                                Eu,
                                { tooltipArgs: m, className: fu.tooltipWrapper },
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement(
                                        'div',
                                        { className: B()(fu.image, null == c ? void 0 : c.image) },
                                        E &&
                                            s().createElement('div', {
                                                className: B()(fu.highlight, null == c ? void 0 : c.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${E}_highlight)`,
                                                },
                                            }),
                                        u &&
                                            s().createElement('div', {
                                                className: B()(fu.icon, null == c ? void 0 : c.rewardIcon),
                                                style: { backgroundImage: `url(${u})` },
                                            }),
                                        _ &&
                                            s().createElement('div', {
                                                className: B()(fu.overlay, null == c ? void 0 : c.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${_}_overlay)`,
                                                },
                                            }),
                                    ),
                                    A &&
                                        s().createElement(
                                            'div',
                                            {
                                                className: B()(
                                                    fu.info,
                                                    fu[`info__${e}`],
                                                    o === Qe.MULTI && fu.info__multi,
                                                    null == c ? void 0 : c.info,
                                                ),
                                            },
                                            A,
                                        ),
                                ),
                            ),
                            t &&
                                s().createElement(
                                    Eu,
                                    { tooltipArgs: d },
                                    s().createElement('div', {
                                        className: B()(fu.timer, null == c ? void 0 : c.periodicIcon),
                                    }),
                                ),
                        );
                    };
                function bu() {
                    return (
                        (bu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        bu.apply(this, arguments)
                    );
                }
                const wu = ['races_point'],
                    Su = (e) => ('overlayType' in e ? e.overlayType : void 0),
                    Tu = (e, u) =>
                        wu.includes(e.name)
                            ? `R.images.races.gui.maps.icons.rewards.${u}.${e.name}`
                            : ((e, u = Ye.Small) => {
                                  const t = e.name,
                                      r = e.type,
                                      a = e.value,
                                      n = e.icon,
                                      s = e.item,
                                      o = e.dogTagType,
                                      i = ((e) => {
                                          switch (e) {
                                              case Ye.S600x450:
                                                  return 'c_600x450';
                                              case Ye.S400x300:
                                                  return 'c_400x300';
                                              case Ye.S296x222:
                                                  return 'c_296x222';
                                              case Ye.S232x174:
                                                  return 'c_232x174';
                                              case Ye.Big:
                                                  return 'c_80x80';
                                              case Ye.Small:
                                                  return 'c_48x48';
                                              default:
                                                  return e;
                                          }
                                      })(u);
                                  switch (t) {
                                      case 'basic':
                                      case 'plus':
                                          return `R.images.gui.maps.icons.quests.bonuses.${u}.${r}_${a}`;
                                      case 'premium':
                                          return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_plus_${a}`;
                                      case 'premium_plus':
                                          return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_${a}`;
                                      case 'items':
                                          return `R.images.gui.maps.icons.quests.bonuses.${u}.${s}`;
                                      case 'blueprints':
                                      case 'blueprintsAny':
                                      case 'finalBlueprints':
                                          return `R.images.gui.maps.icons.blueprints.fragment.${u}.${n}`;
                                      case 'tokens':
                                      case 'battleToken':
                                          return ((e, u) => {
                                              switch (u) {
                                                  case Ye.Big:
                                                      return e.iconBig.replace('..', 'img://gui');
                                                  case Ye.Small:
                                                      return e.iconSmall.replace('..', 'img://gui');
                                                  default:
                                                      return `R.images.gui.maps.icons.quests.bonuses.${u}.${e.icon}`;
                                              }
                                          })(e, u);
                                      case 'lootBoxToken':
                                      case 'customizations':
                                      case 'styleProgress':
                                      case 'crewSkins':
                                      case 'goodies':
                                      case 'groups':
                                      case 'tmanToken':
                                      case 'battlePassSelectToken':
                                          return `R.images.gui.maps.icons.quests.bonuses.${u}.${n}`;
                                      case 'crewBooks':
                                          return `R.images.gui.maps.icons.crewBooks.books.${u}.${n}`;
                                      case 'dogTagComponents':
                                          return ((e, u, t) => {
                                              const r = pu[e];
                                              if (r) {
                                                  const a = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(r),
                                                      n = a.$dyn(t);
                                                  return n ? `${n}` : `${a.$dyn(Cu[e])}`;
                                              }
                                              return (
                                                  console.error(
                                                      'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                                  ),
                                                  ''
                                              );
                                          })(o, u, n);
                                      case 'dossier_badge':
                                          return `R.images.gui.maps.icons.quests.bonuses.badges.${i}.${n}`;
                                      case 'dossier_achievement':
                                          return `R.images.gui.maps.icons.achievement.${i}.${n}`;
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
                                          return `R.images.gui.maps.icons.collectionItems.${i}.${n}`;
                                      default:
                                          return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}`;
                                  }
                              })(e, u);
                function Pu(e, u) {
                    const t = S(),
                        r = null != u ? u : t.mediaSize < v.Medium ? Ye.Small : Ye.Big;
                    return {
                        parsedRewards: oe(e, (e) => {
                            let u = bu({}, e);
                            return Object.assign({}, u, {
                                special: Su(u),
                                image: Tu(u, r),
                                size: r,
                                valueType:
                                    ((t = u.name),
                                    Au.includes(t)
                                        ? Qe.MULTI
                                        : Fu.includes(t)
                                          ? Qe.CURRENCY
                                          : gu.includes(t)
                                            ? Qe.NUMBER
                                            : Du.includes(t)
                                              ? Qe.PREMIUM_PLUS
                                              : Qe.STRING),
                                tooltipArgs: Bu({ tooltipId: u.tooltipId, tooltipContentId: u.tooltipContentId }),
                            });
                            var t;
                        }),
                        imageSize: r,
                    };
                }
                var yu = t(5521);
                const xu = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function Ru(e = yu.n.NONE, u = xu, t = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== yu.n.NONE)
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
                const Nu = (e, u, t) => (t < e ? e : t > u ? u : t);
                let Lu;
                !(function (e) {
                    (e[(e.Scrolling = 0)] = 'Scrolling'),
                        (e[(e.ProgressChange = 1)] = 'ProgressChange'),
                        (e[(e.HighlightCard = 2)] = 'HighlightCard'),
                        (e[(e.ChangeCompleted = 3)] = 'ChangeCompleted'),
                        (e[(e.ProgressFinished = 4)] = 'ProgressFinished'),
                        (e[(e.ProgressAlreadyFinished = 5)] = 'ProgressAlreadyFinished');
                })(Lu || (Lu = {}));
                const Mu = se()(
                        ({ observableModel: e }) => {
                            const u = {
                                    root: e.object(),
                                    progressAnimationState: re.LO.box(Lu.Scrolling),
                                    progressLevels: e.array('progressLevels'),
                                    dailyQuests: e.array('quests.missions'),
                                    dailyQuestsModel: e.object('quests'),
                                },
                                t = (0, ie.Om)(
                                    () =>
                                        oe(u.dailyQuests.get(), (e) => {
                                            const u = de(e.postBattleCondition, e.bonusCondition.items, e.status);
                                            return Object.assign({}, u, { awardsBattle: e.bonuses });
                                        }),
                                    { equals: te },
                                ),
                                r = (0, ie.Om)(
                                    () => t().every((e) => _e(e.taskConditions[0].progression) === le.Completed),
                                    { equals: te },
                                ),
                                a = (0, ie.Om)(
                                    () => {
                                        const e = u.root.get().pointsForLevel * u.progressLevels.get().length;
                                        return u.root.get().curProgressPoints >= e;
                                    },
                                    { equals: te },
                                ),
                                n = (0, ie.Om)(
                                    () => a() && u.root.get().curProgressPoints === u.root.get().prevProgressPoints,
                                    { equals: te },
                                ),
                                s = (0, ie.Om)(
                                    () => Math.floor(u.root.get().curProgressPoints / u.root.get().pointsForLevel),
                                    { equals: te },
                                ),
                                o = (0, ie.Om)(
                                    (e) =>
                                        Nu(
                                            0,
                                            u.root.get().pointsForLevel,
                                            u.root.get().curProgressPoints - e * u.root.get().pointsForLevel,
                                        ),
                                    { equals: te },
                                ),
                                i = (0, ie.Om)(
                                    () => Math.floor(u.root.get().prevProgressPoints / u.root.get().pointsForLevel),
                                    { equals: te },
                                ),
                                l = (0, ie.Om)(
                                    (e) => ({
                                        wasProgressionVisited: i() === s(),
                                        isRecentlyCompletedLevel: i() <= e && e <= s(),
                                        isPrevLevel: e <= i(),
                                    }),
                                    { equals: te },
                                ),
                                c = (0, ie.Om)(
                                    () => {
                                        const e = s(),
                                            t = u.progressLevels.get();
                                        return oe(t, ({ rewards: u }, r) => ({
                                            level: r + 1,
                                            isCompleted: r < e,
                                            isActive: r === e,
                                            isLast: r === t.length - 1,
                                            rewards: u,
                                        }));
                                    },
                                    { equals: te },
                                );
                            return Object.assign({}, u, {
                                computes: {
                                    levels: c,
                                    prevLevel: i,
                                    levelStatus: l,
                                    currentLevel: s,
                                    battleQuests: t,
                                    currentPointsForLevel: o,
                                    isProgressionCompleted: a,
                                    isAllQuestsCompleted: r,
                                    wasProgressionCompletedBeforeStart: n,
                                },
                            });
                        },
                        ({ externalModel: e, model: u }) => {
                            const t = (function (e) {
                                const u = {};
                                for (const t in e)
                                    if (Object.prototype.hasOwnProperty.call(e, t)) {
                                        const r = e[t];
                                        u[t] = (0, re.aD)(r);
                                    }
                                return u;
                            })({
                                finishScrolling: () => u.progressAnimationState.set(Lu.ProgressChange),
                                finishProgressionChange: () => u.progressAnimationState.set(Lu.HighlightCard),
                                finishHighlightCard: () => u.progressAnimationState.set(Lu.ChangeCompleted),
                                completeProgression: (e) =>
                                    u.progressAnimationState.set(e ? Lu.ProgressAlreadyFinished : Lu.ProgressFinished),
                            });
                            return Object.assign({}, t, {
                                onClose: e.createCallbackNoArgs('onClose'),
                                onAboutEvent: e.createCallbackNoArgs('onAboutEvent'),
                            });
                        },
                    ),
                    Ou = (Mu[0], Mu[1]);
                let ku, Iu, Hu;
                var Wu;
                !(function (e) {
                    (e.Timer = 'timer'), (e.Countdown = 'countdown'), (e.Cooldown = 'cooldown'), (e.None = 'none');
                })(ku || (ku = {})),
                    (function (e) {
                        (e.Description = 'description'),
                            (e.Short = 'short'),
                            (e.Long = 'long'),
                            (e.Extended = 'extended');
                    })(Iu || (Iu = {})),
                    ((Wu = Hu || (Hu = {})).SHORT_DATE = 'short-date'),
                    (Wu.SHORT_TIME = 'short-time'),
                    (Wu.SHORT_DATE_TIME = 'short-date-time'),
                    (Wu.FULL_DATE = 'full-date'),
                    (Wu.FULL_DATE_TIME = 'full-date-time'),
                    (Wu.MONTH = 'month'),
                    (Wu.MONTH_DATE = 'month-date'),
                    (Wu.DATE_MONTH = 'date-month'),
                    (Wu.MONTH_YEAR = 'month-year'),
                    (Wu.WEEK_DAY = 'week-day'),
                    (Wu.WEEK_DAY_TIME = 'week-day-time'),
                    (Wu.YEAR = 'year'),
                    (Wu.DATE_YEAR = 'date-year');
                Date.now();
                const Uu = () => {};
                let Gu;
                eu.Sw.instance,
                    (function (e) {
                        (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                    })(Gu || (Gu = {})),
                    eu.Sw.instance;
                const $u = (e = 0, u, t = 0, r = Uu) => {
                        const a = (0, n.useState)(e),
                            s = a[0],
                            o = a[1];
                        return (
                            (0, n.useEffect)(() => {
                                if (e > 0) {
                                    o(e);
                                    const a = Date.now(),
                                        n = setInterval(
                                            () => {
                                                const u = e - Math.floor((Date.now() - a) / 1e3);
                                                null !== t && u <= t ? (o(t), r && r(), clearInterval(n)) : o(u);
                                            },
                                            1e3 * (u || (e > 120 ? 60 : 1)),
                                        );
                                    return () => {
                                        clearInterval(n);
                                    };
                                }
                            }, [e, u, t, r]),
                            s
                        );
                    },
                    zu = 'Countdown_description_8d',
                    ju = (e) => e.toString().padStart(2, '0'),
                    Vu = R.images.gui.maps.icons.components.countdown,
                    qu = (e, u) => {
                        const t = 2 === u ? Vu.big : Vu;
                        switch (e) {
                            case ku.Timer:
                                return t.clock();
                            case ku.Countdown:
                                return t.hourglass();
                            case ku.Cooldown:
                                return t.lock();
                        }
                    },
                    Xu = (0, n.memo)(
                        ({
                            duration: e,
                            icon: u = ku.Timer,
                            style: t = Iu.Description,
                            onTimeReached: r,
                            className: a = '',
                            classNames: o = {},
                            labelFormat: l = '',
                        }) => {
                            const c = t !== Iu.Description ? 1 : void 0,
                                m = $u(e, c),
                                d = (() => {
                                    const e = (0, n.useState)(i.O.view.getScale()),
                                        u = e[0],
                                        t = e[1];
                                    return (
                                        (0, n.useEffect)(() => {
                                            const e = () => {
                                                t(i.O.view.getScale());
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
                            r && r[m] && r[m]();
                            const E = ((e, u) => {
                                switch (u) {
                                    case Iu.Description:
                                        return ((e, u = !0) =>
                                            e.days > 7 && u
                                                ? W(R.strings.common.duration.days(), { days: e.days })
                                                : e.days >= 1
                                                  ? 0 === e.hours
                                                      ? W(R.strings.common.duration.days(), { days: e.days })
                                                      : `${W(R.strings.common.duration.days(), { days: e.days })} ${W(R.strings.common.duration.hours(), { hours: e.hours })}`
                                                  : e.hours >= 1
                                                    ? 0 === e.minutes
                                                        ? W(R.strings.common.duration.hours(), { hours: e.hours })
                                                        : `${W(R.strings.common.duration.hours(), { hours: e.hours })} ${W(R.strings.common.duration.minutes(), { minutes: e.minutes })}`
                                                    : W(R.strings.common.duration.minutes(), {
                                                          minutes: e.minutes || 1,
                                                      }))(e);
                                    case Iu.Short:
                                        return `${ju(e.minutes)}:${ju(e.seconds)}`;
                                    case Iu.Long:
                                        return `${ju(e.hours)}:${ju(e.minutes)}:${ju(e.seconds)}`;
                                    case Iu.Extended:
                                        return `${W(R.strings.common.duration.days(), { days: e.days })} | ${ju(e.hours)}:${ju(e.minutes)}:${ju(e.seconds)}`;
                                }
                            })(
                                (function (e = 0) {
                                    let u = e;
                                    const t = Math.trunc(u / 86400);
                                    u -= 86400 * t;
                                    const r = Math.trunc(u / 3600);
                                    u -= 3600 * r;
                                    const a = Math.trunc(u / 60);
                                    return (u -= 60 * a), { days: t, hours: r, minutes: a, seconds: u };
                                })(m),
                                t,
                            );
                            return s().createElement(
                                'div',
                                { className: B()('Countdown_base_fe', a) },
                                u !== ku.None &&
                                    s().createElement('div', {
                                        className: B()('Countdown_icon_8b', o.icon),
                                        style: { backgroundImage: `url('${qu(u, d)}')` },
                                    }),
                                l
                                    ? s().createElement(
                                          'div',
                                          { className: B()(zu, o.text) },
                                          s().createElement(q, { text: l, binding: { timerText: E } }),
                                      )
                                    : s().createElement('div', { className: B()(zu, o.text) }, E),
                            );
                        },
                    ),
                    Yu = 'DailyQuests_base_db',
                    Qu = 'DailyQuests_line_8b';
                let Ku;
                !(function (e) {
                    (e.inProgress = 'inProgress'),
                        (e.completed = 'completed'),
                        (e.completedWasVisited = 'completedWasVisited'),
                        (e.allCompletedTasksVisited = 'allCompletedTasksVisited');
                })(Ku || (Ku = {}));
                const Zu = (0, ee.Pi)(({ quests: e }) =>
                        s().createElement(
                            'div',
                            { className: 'Quests_base_b1' },
                            e.map((e, u) =>
                                s().createElement(Qr, {
                                    key: u,
                                    rewards: e.awardsBattle,
                                    conditions: e.taskConditions,
                                    icon: e.taskBattleIcon,
                                }),
                            ),
                        ),
                    ),
                    Ju = (0, ee.Pi)(() => {
                        const e = Ou().model,
                            u = e.computes.battleQuests(),
                            t = e.computes.isAllQuestsCompleted(),
                            r = e.dailyQuestsModel.get(),
                            a = r.expirationTime,
                            n = r.isLastSeasonDay;
                        return t && n
                            ? s().createElement(
                                  'div',
                                  { className: Yu },
                                  s().createElement(q, {
                                      text: zr.dailyQuests.questsDone(),
                                      classMix: 'DailyQuests_questsDone_3e',
                                  }),
                              )
                            : s().createElement(
                                  'div',
                                  { className: Yu },
                                  !n &&
                                      s().createElement(
                                          'div',
                                          { className: 'DailyQuests_timer_c9' },
                                          s().createElement('div', { className: Qu }),
                                          s().createElement(
                                              'div',
                                              { className: 'DailyQuests_timerContent_e5' },
                                              s().createElement(
                                                  'div',
                                                  { className: 'DailyQuests_timerText_67' },
                                                  zr.dailyQuests.updateTime(),
                                              ),
                                              s().createElement(Xu, { duration: a, style: Iu.Description }),
                                          ),
                                          s().createElement('div', { className: Qu }),
                                      ),
                                  s().createElement(
                                      'div',
                                      { className: 'DailyQuests_quests_65' },
                                      s().createElement(Zu, { quests: u }),
                                  ),
                              );
                    }),
                    et = {
                        base: 'ViewDecorator_base_aa',
                        container: 'ViewDecorator_container_98',
                        container__shown: 'ViewDecorator_container__shown_da',
                        leftBlock: 'ViewDecorator_leftBlock_63',
                        leftBlock__small: 'ViewDecorator_leftBlock__small_6a',
                        rightBlock: 'ViewDecorator_rightBlock_71',
                        rightBlock__small: 'ViewDecorator_rightBlock__small_ef',
                        view: 'ViewDecorator_view_9e',
                    };
                let ut;
                !(function (e) {
                    (e.Back = 'back'), (e.Forward = 'forward'), (e.Close = 'close'), (e.Info = 'info');
                })(ut || (ut = {})),
                    (0, n.memo)(
                        ({
                            background: e,
                            rightText: u,
                            leftText: t,
                            children: r,
                            leftSubText: a,
                            leftButtonType: o,
                            onClose: i,
                            onLeftButtonClick: l,
                            isHideButtons: m = !1,
                        }) => {
                            const d = (function (e, u, t) {
                                    const r = (0, n.useContext)(F);
                                    let a = Object.entries(r).filter(([e, u]) => !0 === u && e in c);
                                    return ['leftBlock', 'rightBlock'].reduce((e, t) => {
                                        const r = a.map((e) =>
                                            B()(
                                                u[((e, u) => e + '__' + u)(t, e[0])],
                                                u[
                                                    ((e, u) => {
                                                        return e + ((t = u)[0].toUpperCase() + t.slice(1));
                                                        var t;
                                                    })(t, e[0])
                                                ],
                                            ),
                                        );
                                        return (e[t] = B()(u[t], ...r)), e;
                                    }, {});
                                })(0, et),
                                E = (0, n.useState)(m),
                                _ = E[0],
                                A = E[1];
                            (0, n.useEffect)(() => A(!m), [m]);
                            const g = (0, n.useMemo)(() => (e ? { backgroundImage: `url('${e}')` } : void 0), [e]),
                                D = B()(et.container, _ && et.container__shown);
                            return s().createElement(
                                'div',
                                { className: et.base, style: g },
                                s().createElement(
                                    'div',
                                    { className: D },
                                    Boolean(t) &&
                                        s().createElement(
                                            'div',
                                            { className: d.leftBlock },
                                            s().createElement(J, {
                                                caption: t || '',
                                                goto: a,
                                                type: o,
                                                side: 'left',
                                                onClick: l,
                                            }),
                                        ),
                                    Boolean(u) &&
                                        s().createElement(
                                            'div',
                                            { className: d.rightBlock },
                                            s().createElement(J, {
                                                caption: u || '',
                                                type: 'close',
                                                side: 'right',
                                                onClick: i,
                                            }),
                                        ),
                                ),
                                s().createElement('div', { className: et.view }, r),
                            );
                        },
                    );
                const tt = (0, ee.Pi)(({ isProgressionCompleted: e = !1 }) => {
                        const u = Ou().controls,
                            t = (0, n.useCallback)(() => {
                                u.onAboutEvent();
                            }, [u]),
                            r = (0, n.useCallback)(() => {
                                u.onClose();
                            }, [u]);
                        return s().createElement(
                            'div',
                            { className: 'Header_base_c4' },
                            s().createElement(
                                'div',
                                { className: 'Header_about_a6' },
                                s().createElement(J, { caption: zr.header.about(), type: ut.Info, onClick: t }),
                            ),
                            !e &&
                                s().createElement(
                                    'div',
                                    { className: 'Header_header_60' },
                                    s().createElement('div', { className: 'Header_title_42' }, zr.header.title()),
                                    s().createElement('div', { className: 'Header_subTitle_ee' }, zr.header.subTitle()),
                                ),
                            s().createElement(
                                'div',
                                { className: 'Header_close_e1' },
                                s().createElement(J, {
                                    caption: zr.header.close(),
                                    type: 'close',
                                    side: 'right',
                                    onClick: r,
                                }),
                            ),
                        );
                    }),
                    rt = (e) => {
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
                function at(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, r = new Array(u); t < u; t++) r[t] = e[t];
                    return r;
                }
                const nt = [];
                function st(e) {
                    const u = (0, n.useRef)(e);
                    return (
                        (0, n.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, n.useCallback)((...e) => (0, u.current)(...e), nt)
                    );
                }
                var ot = t(7030);
                let it;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(it || (it = {}));
                const lt = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    ct = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: r,
                        getWrapperSize: a,
                        triggerMouseMoveOnUpdate: s = !1,
                    }) => {
                        const o = (e, t) => {
                            const r = u(e),
                                a = r[0],
                                n = r[1];
                            return Nu(a, n, t);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                m = void 0 === c ? lt : c,
                                d = (0, n.useRef)(null),
                                E = (0, n.useRef)(null),
                                _ = (() => {
                                    const e = (0, n.useMemo)(() => ({}), []),
                                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                        t = (e, t) => {
                                            u(e).set(t, t);
                                        },
                                        r = (e, t) => {
                                            u(e).delete(t);
                                        },
                                        a = (e, ...t) => {
                                            for (
                                                var r,
                                                    a = (function (e, u) {
                                                        var t =
                                                            ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                                                            e['@@iterator'];
                                                        if (t) return (t = t.call(e)).next.bind(t);
                                                        if (
                                                            Array.isArray(e) ||
                                                            (t = (function (e, u) {
                                                                if (e) {
                                                                    if ('string' == typeof e) return at(e, u);
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
                                                                              ? at(e, u)
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
                                                !(r = a()).done;

                                            )
                                                (0, r.value)(...t);
                                        };
                                    return (0, n.useMemo)(() => ({ on: t, off: r, trigger: a }), []);
                                })(),
                                A = (function (e, u, t) {
                                    const r = (0, n.useMemo)(
                                        () =>
                                            (function (e, u, t, r) {
                                                let a,
                                                    n = !1,
                                                    s = 0;
                                                function o() {
                                                    a && clearTimeout(a);
                                                }
                                                function i(...i) {
                                                    const l = this,
                                                        c = Date.now() - s;
                                                    function m() {
                                                        (s = Date.now()), t.apply(l, i);
                                                    }
                                                    n ||
                                                        (r && !a && m(),
                                                        o(),
                                                        void 0 === r && c > e
                                                            ? m()
                                                            : !0 !== u &&
                                                              (a = setTimeout(
                                                                  r
                                                                      ? function () {
                                                                            a = void 0;
                                                                        }
                                                                      : m,
                                                                  void 0 === r ? e - c : e,
                                                              )));
                                                }
                                                return (
                                                    'boolean' != typeof u && ((r = t), (t = u), (u = void 0)),
                                                    (i.cancel = function () {
                                                        o(), (n = !0);
                                                    }),
                                                    i
                                                );
                                            })(t, e),
                                        u,
                                    );
                                    return (0, n.useEffect)(() => r.cancel, [r]), r;
                                })(
                                    () => {
                                        i.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                F = (0, ot.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = d.current;
                                        u && (t(u, e), _.trigger('change', e), s && A());
                                    },
                                    onRest: (e) => _.trigger('rest', e),
                                    onStart: (e) => _.trigger('start', e),
                                    onPause: (e) => _.trigger('pause', e),
                                })),
                                g = F[0],
                                D = F[1],
                                p = (0, n.useCallback)(
                                    (e, u, t) => {
                                        var r;
                                        const a = g.scrollPosition.get(),
                                            n = (null != (r = g.scrollPosition.goal) ? r : 0) - a;
                                        return o(e, u * t + n + a);
                                    },
                                    [g.scrollPosition],
                                ),
                                C = (0, n.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const r = d.current;
                                        r &&
                                            D.start({
                                                scrollPosition: o(r, e),
                                                immediate: u,
                                                reset: t,
                                                config: m.animationConfig,
                                                from: { scrollPosition: o(r, g.scrollPosition.get()) },
                                            });
                                    },
                                    [D, m.animationConfig, g.scrollPosition],
                                ),
                                B = (0, n.useCallback)(
                                    (e) => {
                                        const u = d.current,
                                            t = E.current;
                                        if (!u || !t) return;
                                        const r = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return a(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, m.step),
                                            n = p(u, e, r);
                                        C(n);
                                    },
                                    [C, p, m.step],
                                ),
                                h = (0, n.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && B(r(e)),
                                            d.current && _.trigger('mouseWheel', e, g.scrollPosition, u(d.current));
                                    },
                                    [g.scrollPosition, B, _],
                                ),
                                f = ((e, u = []) => {
                                    const t = (0, n.useRef)(),
                                        r = (0, n.useCallback)((...u) => {
                                            t.current && t.current(), (t.current = e(...u));
                                        }, u);
                                    return (
                                        (0, n.useEffect)(
                                            () => () => {
                                                t.current && t.current();
                                            },
                                            [r],
                                        ),
                                        r
                                    );
                                })(
                                    () =>
                                        rt(() => {
                                            const e = d.current;
                                            e &&
                                                (C(o(e, g.scrollPosition.goal), { immediate: !0 }),
                                                _.trigger('resizeHandled'));
                                        }),
                                    [C, g.scrollPosition.goal],
                                ),
                                v = st(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const u = o(e, g.scrollPosition.goal);
                                    u !== g.scrollPosition.goal && C(u, { immediate: !0 }),
                                        _.trigger('recalculateContent');
                                });
                            return (
                                (0, n.useEffect)(
                                    () => (
                                        window.addEventListener('resize', f),
                                        () => {
                                            window.removeEventListener('resize', f);
                                        }
                                    ),
                                    [f],
                                ),
                                (0, n.useMemo)(
                                    () => ({
                                        getWrapperSize: () => (E.current ? a(E.current) : void 0),
                                        getContainerSize: () => (d.current ? e(d.current) : void 0),
                                        getBounds: () =>
                                            d.current
                                                ? u(d.current)
                                                : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                        stepTimeout: m.step.clampedArrowStepTimeout,
                                        clampPosition: o,
                                        handleMouseWheel: h,
                                        applyScroll: C,
                                        applyStepTo: B,
                                        contentRef: d,
                                        wrapperRef: E,
                                        scrollPosition: D,
                                        animationScroll: g,
                                        recalculateContent: v,
                                        events: { on: _.on, off: _.off },
                                    }),
                                    [g.scrollPosition, C, B, _.off, _.on, v, h, D, m.step.clampedArrowStepTimeout],
                                )
                            );
                        };
                    },
                    mt = ct({
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
                        getDirection: (e) => (e.deltaY > 1 ? it.Next : it.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    dt = (e, u) => {
                        let t;
                        const r = setTimeout(() => {
                            t = e();
                        }, u);
                        return () => {
                            'function' == typeof t && t(), clearTimeout(r);
                        };
                    };
                function Et(e, u, t = []) {
                    const r = (0, n.useRef)(0),
                        a = (0, n.useCallback)(() => window.clearInterval(r.current), t || []);
                    (0, n.useEffect)(() => a, [a]);
                    const s = (null != t ? t : []).concat([u]);
                    return [
                        (0, n.useCallback)((t) => {
                            (r.current = window.setInterval(() => e(t, !0), u)), e(t, !1);
                        }, s),
                        a,
                    ];
                }
                const _t = 'HorizontalBar_base__nonActive_82',
                    At = 'disable',
                    Ft = { pending: !1, offset: 0 },
                    gt = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    Dt = () => {},
                    pt = (e, u) => Math.max(20, e.offsetWidth * u),
                    Ct = (0, n.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = gt, onDrag: r = Dt }) => {
                        const a = (0, n.useRef)(null),
                            o = (0, n.useRef)(null),
                            i = (0, n.useRef)(null),
                            l = (0, n.useRef)(null),
                            c = (0, n.useRef)(null),
                            m = e.stepTimeout || 100,
                            d = (0, n.useState)(Ft),
                            E = d[0],
                            _ = d[1],
                            A = (0, n.useCallback)(
                                (e) => {
                                    _(e),
                                        c.current && r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current });
                                },
                                [r],
                            ),
                            F = () => {
                                const u = l.current,
                                    t = c.current,
                                    r = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(r && u && t && a)) return;
                                const n = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, r / a),
                                    m = Nu(0, 1, n / (a - r)),
                                    d = (u.offsetWidth - pt(u, s)) * m;
                                (t.style.transform = `translateX(${0 | d}px)`),
                                    ((e) => {
                                        if (o.current && i.current && l.current && c.current) {
                                            if (0 === e)
                                                return o.current.classList.add(At), void i.current.classList.remove(At);
                                            if (
                                                ((u = l.current),
                                                (t = c.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return o.current.classList.remove(At), void i.current.classList.add(At);
                                            var u, t;
                                            o.current.classList.remove(At), i.current.classList.remove(At);
                                        }
                                    })(d);
                            },
                            g = st(() => {
                                (() => {
                                    const u = c.current,
                                        t = l.current,
                                        r = e.getWrapperSize(),
                                        n = e.getContainerSize();
                                    if (!(n && u && r && t)) return;
                                    const s = Math.min(1, r / n);
                                    (u.style.width = `${pt(t, s)}px`),
                                        (u.style.display = 'flex'),
                                        a.current &&
                                            (1 === s ? a.current.classList.add(_t) : a.current.classList.remove(_t));
                                })(),
                                    F();
                            });
                        (0, n.useEffect)(() => rt(g)),
                            (0, n.useEffect)(
                                () =>
                                    rt(() => {
                                        const u = () => {
                                            F();
                                        };
                                        let t = Dt;
                                        const r = () => {
                                            t(), (t = rt(g));
                                        };
                                        return (
                                            e.events.on('recalculateContent', g),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', r),
                                            () => {
                                                t(),
                                                    e.events.off('recalculateContent', g),
                                                    e.events.off('rest', u),
                                                    e.events.off('change', u),
                                                    e.events.off('resizeHandled', r);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, n.useEffect)(() => {
                                if (!E.pending) return;
                                const u = (u) => {
                                        var t;
                                        const a = e.contentRef.current;
                                        if (!a) return;
                                        const n = l.current,
                                            s = c.current;
                                        if (!a || !n || !s) return;
                                        const o = u.screenX - E.offset - n.getBoundingClientRect().x,
                                            i = (o / n.offsetWidth) * (null != (t = e.getContainerSize()) ? t : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(a, i),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            r({ type: 'dragging', thumb: s, thumbOffset: o, contentOffset: i });
                                    },
                                    t = () => {
                                        window.removeEventListener('mousemove', u), A(Ft);
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t);
                                    }
                                );
                            }, [e, E.offset, E.pending, r, A]);
                        const D = Et((u) => e.applyStepTo(u), m, [e]),
                            p = D[0],
                            C = D[1];
                        (0, n.useEffect)(
                            () => (
                                document.addEventListener('mouseup', C, !0),
                                () => document.removeEventListener('mouseup', C, !0)
                            ),
                            [C],
                        );
                        const h = (e) => {
                            e.target.classList.contains(At) || X('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: B()('HorizontalBar_base_49', u.base), ref: a, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: B()('HorizontalBar_leftButton_5f', u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(At) || 0 !== e.button || (X('play'), p(it.Next));
                                },
                                onMouseUp: C,
                                ref: o,
                                onMouseEnter: h,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: B()('HorizontalBar_track_0d', u.track),
                                    onMouseDown: (u) => {
                                        const r = c.current;
                                        r &&
                                            0 === u.button &&
                                            (X('play'),
                                            u.target === r
                                                ? A({ pending: !0, offset: u.screenX - r.getBoundingClientRect().x })
                                                : ((u) => {
                                                      const r = c.current,
                                                          a = e.contentRef.current;
                                                      if (!r || !a) return;
                                                      const n = t(e);
                                                      e.applyScroll(e.animationScroll.scrollPosition.get() + n * u);
                                                  })(u.screenX > r.getBoundingClientRect().x ? it.Prev : it.Next));
                                    },
                                    ref: l,
                                    onMouseEnter: h,
                                },
                                s().createElement('div', { ref: c, className: B()('HorizontalBar_thumb_fd', u.thumb) }),
                                s().createElement('div', { className: B()('HorizontalBar_rail_32', u.rail) }),
                            ),
                            s().createElement('div', {
                                className: B()('HorizontalBar_rightButton_03', u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(At) || 0 !== e.button || (X('play'), p(it.Prev));
                                },
                                onMouseUp: C,
                                ref: i,
                                onMouseEnter: h,
                            }),
                        );
                    }),
                    Bt = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    ht = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: r,
                        areaClassName: a,
                        classNames: o,
                        scrollClassName: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const m = (0, n.useMemo)(() => {
                                const e = r || {};
                                return Object.assign({}, e, { base: B()(Bt.base, e.base) });
                            }, [r]),
                            d = (0, n.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return s().createElement(
                            'div',
                            { className: B()(Bt.defaultScroll, t), onWheel: u.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: B()(Bt.defaultScrollArea, a) },
                                s().createElement(ft, { className: i, api: d, classNames: o }, e),
                            ),
                            s().createElement(Ct, { getStepByRailClick: l, api: u, onDrag: c, classNames: m }),
                        );
                    },
                    ft = ({ api: e, className: u, classNames: t, children: r }) => (
                        (0, n.useEffect)(() => rt(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: B()(Bt.base, u) },
                            s().createElement(
                                'div',
                                {
                                    className: B()(Bt.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                s().createElement(
                                    'div',
                                    { className: B()(Bt.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    r,
                                ),
                            ),
                        )
                    );
                (ft.Bar = Ct),
                    (ft.Default = ht),
                    (ft.SeniorityAwards = ({ api: e, className: u, classNames: t, children: r }) => (
                        (0, n.useEffect)(() => rt(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: B()(Bt.base, u) },
                            s().createElement(
                                'div',
                                { className: B()(Bt.wrapper, null == t ? void 0 : t.wrapper), ref: e.wrapperRef },
                                s().createElement(
                                    'div',
                                    { className: B()(Bt.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    r,
                                ),
                            ),
                        )
                    ));
                const vt = ct({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? it.Next : it.Prev),
                    }),
                    bt = 'VerticalBar_base__nonActive_42',
                    wt = 'disable',
                    St = () => {},
                    Tt = { pending: !1, offset: 0 },
                    Pt = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    yt = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    xt = (e, u) => Math.max(20, e.offsetHeight * u),
                    Rt = (0, n.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = Pt, onDrag: r = St }) => {
                        const a = (0, n.useRef)(null),
                            o = (0, n.useRef)(null),
                            i = (0, n.useRef)(null),
                            l = (0, n.useRef)(null),
                            c = (0, n.useRef)(null),
                            m = e.stepTimeout || 100,
                            d = (0, n.useState)(Tt),
                            E = d[0],
                            _ = d[1],
                            A = (0, n.useCallback)(
                                (e) => {
                                    _(e),
                                        c.current && r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current });
                                },
                                [r],
                            ),
                            F = st(() => {
                                const u = c.current,
                                    t = l.current,
                                    r = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(r && n && u && t)) return;
                                const s = Math.min(1, r / n);
                                return (
                                    (u.style.height = `${xt(t, s)}px`),
                                    u.classList.add('VerticalBar_thumb_32'),
                                    a.current &&
                                        (1 === s ? a.current.classList.add(bt) : a.current.classList.remove(bt)),
                                    s
                                );
                            }),
                            g = st(() => {
                                const u = l.current,
                                    t = c.current,
                                    r = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(r && u && t && a)) return;
                                const n = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, r / a),
                                    m = Nu(0, 1, n / (a - r)),
                                    d = (u.offsetHeight - xt(u, s)) * m;
                                (t.style.transform = `translateY(${0 | d}px)`),
                                    ((e) => {
                                        if (o.current && i.current && l.current && c.current) {
                                            if (0 === e)
                                                return o.current.classList.add(wt), void i.current.classList.remove(wt);
                                            if (
                                                ((u = l.current),
                                                (t = c.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return o.current.classList.remove(wt), void i.current.classList.add(wt);
                                            var u, t;
                                            o.current.classList.remove(wt), i.current.classList.remove(wt);
                                        }
                                    })(d);
                            }),
                            D = st(() => {
                                yt(e, () => {
                                    F(), g();
                                });
                            });
                        (0, n.useEffect)(() => rt(D)),
                            (0, n.useEffect)(() => {
                                const u = () => {
                                    yt(e, () => {
                                        g();
                                    });
                                };
                                let t = St;
                                const r = () => {
                                    t(), (t = rt(D));
                                };
                                return (
                                    e.events.on('recalculateContent', D),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', r),
                                    () => {
                                        t(),
                                            e.events.off('recalculateContent', D),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', r);
                                    }
                                );
                            }, [e]),
                            (0, n.useEffect)(() => {
                                if (!E.pending) return;
                                const u = (u) => {
                                        yt(e, (t) => {
                                            const a = l.current,
                                                n = c.current,
                                                s = e.getContainerSize();
                                            if (!a || !n || !s) return;
                                            const o = u.screenY - E.offset - a.getBoundingClientRect().y,
                                                i = (o / a.offsetHeight) * s;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                r({ type: 'dragging', thumb: n, thumbOffset: o, contentOffset: i });
                                        });
                                    },
                                    t = () => {
                                        window.removeEventListener('mousemove', u), A(Tt);
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t);
                                    }
                                );
                            }, [e, E.offset, E.pending, r, A]);
                        const p = Et((u) => e.applyStepTo(u), m, [e]),
                            C = p[0],
                            h = p[1];
                        (0, n.useEffect)(
                            () => (
                                document.addEventListener('mouseup', h, !0),
                                () => document.removeEventListener('mouseup', h, !0)
                            ),
                            [h],
                        );
                        const f = (e) => {
                            e.target.classList.contains(wt) || X('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: B()('VerticalBar_base_f3', u.base), ref: a, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: B()('VerticalBar_topButton_d7', u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(wt) || 0 !== e.button || (X('play'), C(it.Next));
                                },
                                ref: o,
                                onMouseEnter: f,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: B()('VerticalBar_track_df', u.track),
                                    onMouseDown: (u) => {
                                        const r = c.current;
                                        var a;
                                        r &&
                                            0 === u.button &&
                                            (X('play'),
                                            u.target === r
                                                ? A({ pending: !0, offset: u.screenY - r.getBoundingClientRect().y })
                                                : ((a = u.screenY > r.getBoundingClientRect().y ? it.Prev : it.Next),
                                                  c.current &&
                                                      yt(e, (u) => {
                                                          if (!u) return;
                                                          const r = t(e),
                                                              n = e.clampPosition(u, u.scrollTop + r * a);
                                                          e.applyScroll(n);
                                                      })));
                                    },
                                    ref: l,
                                    onMouseEnter: f,
                                },
                                s().createElement('div', { ref: c, className: u.thumb }),
                                s().createElement('div', { className: B()('VerticalBar_rail_43', u.rail) }),
                            ),
                            s().createElement('div', {
                                className: B()('VerticalBar_bottomButton_06', u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(wt) || 0 !== e.button || (X('play'), C(it.Prev));
                                },
                                onMouseUp: h,
                                ref: i,
                                onMouseEnter: f,
                            }),
                        );
                    }),
                    Nt = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Lt = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: r,
                        areaClassName: a,
                        scrollClassName: o,
                        scrollClassNames: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const m = (0, n.useMemo)(() => {
                                const e = r || {};
                                return Object.assign({}, e, { base: B()(Nt.base, e.base) });
                            }, [r]),
                            d = (0, n.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return s().createElement(
                            'div',
                            { className: B()(Nt.defaultScroll, t), onWheel: u.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: B()(Nt.area, a) },
                                s().createElement(Mt, { className: o, classNames: i, api: d }, e),
                            ),
                            s().createElement(Rt, { getStepByRailClick: l, api: u, onDrag: c, classNames: m }),
                        );
                    },
                    Mt = ({ className: e, classNames: u, children: t, api: r }) => (
                        (0, n.useEffect)(() => rt(r.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: B()(Nt.base, e), ref: r.wrapperRef, onWheel: r.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: B()(Nt.content, null == u ? void 0 : u.content), ref: r.contentRef },
                                t,
                            ),
                        )
                    );
                Mt.Default = Lt;
                const Ot = { Vertical: a, Horizontal: r };
                let kt;
                !(function (e) {
                    (e[(e.Scrolling = 0)] = 'Scrolling'),
                        (e[(e.ProgressChange = 1)] = 'ProgressChange'),
                        (e[(e.HighlightCard = 2)] = 'HighlightCard'),
                        (e[(e.ChangeCompleted = 3)] = 'ChangeCompleted'),
                        (e[(e.ProgressFinished = 4)] = 'ProgressFinished'),
                        (e[(e.ProgressAlreadyFinished = 5)] = 'ProgressAlreadyFinished');
                })(kt || (kt = {}));
                const It = (e, u, t) =>
                        B()(
                            e[t],
                            u === kt.ProgressAlreadyFinished
                                ? e[`${t}__fast`]
                                : u >= kt.ProgressFinished
                                  ? e[`${t}__completed`]
                                  : void 0,
                        ),
                    Ht = ({ level: e, isActive: u, isCompleted: t }) => {
                        const r = B()(
                            'LevelLabel_level_87',
                            t && 'LevelLabel_level__completed_6b',
                            u && 'LevelLabel_level__active_eb',
                        );
                        return s().createElement(
                            'div',
                            { className: 'LevelLabel_base_e0' },
                            s().createElement('div', {
                                className: B()('LevelLabel_activeGlow_bd', u && 'LevelLabel_activeGlow__completed_68'),
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: B()(
                                        'LevelLabel_levelCurrent_7c',
                                        u && 'LevelLabel_levelCurrent__completed_f1',
                                    ),
                                },
                                e,
                            ),
                            s().createElement('div', { className: r }, e),
                        );
                    },
                    Wt = {
                        base: 'LevelCard_base_64',
                        bgCompleted: 'LevelCard_bgCompleted_7f',
                        bgCompleted__completed: 'LevelCard_bgCompleted__completed_d6',
                        bgCompleted__fast: 'LevelCard_bgCompleted__fast_67',
                        completedIconContainer: 'LevelCard_completedIconContainer_03',
                        completedIconContainer__completed: 'LevelCard_completedIconContainer__completed_5b',
                        completedIconContainer__prevLevel: 'LevelCard_completedIconContainer__prevLevel_34',
                        completedIcon: 'LevelCard_completedIcon_7f',
                        completedIconGlow: 'LevelCard_completedIconGlow_ce',
                        border: 'LevelCard_border_8f',
                        border__right: 'LevelCard_border__right_6a',
                    },
                    Ut = (e, u, t) => (e ? 'completed' : u ? 'inProgress' : t),
                    Gt = (0, ee.Pi)(({ level: e, isActive: u, isCompleted: t, isLast: r }) => {
                        const a = (0, n.useState)(),
                            o = a[0],
                            i = a[1],
                            l = Ou().model,
                            c = (0, n.useRef)(null),
                            m = l.computes.levelStatus(e),
                            d = m.wasProgressionVisited,
                            E = m.isRecentlyCompletedLevel,
                            _ = m.isPrevLevel;
                        (0, n.useEffect)(() => {
                            t && !d && E && i('prevLevel');
                        }, [t, d, E]);
                        const A = (0, n.useCallback)(() => {
                            X('pr_progress_tick');
                        }, []);
                        return (
                            (0, n.useEffect)(() => {
                                const e = c.current;
                                return rt(() => {
                                    if (e)
                                        return (
                                            e.addEventListener('transitionstart', A),
                                            () => {
                                                e.removeEventListener('transitionstart', A);
                                            }
                                        );
                                });
                            }, [c, A]),
                            s().createElement(
                                'div',
                                { className: Wt.base },
                                s().createElement('div', {
                                    className: B()(Wt.bgCompleted, u && Wt.bgCompleted__completed),
                                    ref: c,
                                }),
                                s().createElement(
                                    'div',
                                    {
                                        className: B()(
                                            Wt.completedIconContainer,
                                            Wt[`completedIconContainer__${Ut(_, !t, o)}`],
                                        ),
                                    },
                                    s().createElement('div', { className: Wt.completedIconGlow }),
                                    s().createElement('div', { className: Wt.completedIcon }),
                                ),
                                s().createElement(Ht, { level: e, isCompleted: t, isActive: u }),
                                s().createElement('div', { className: Wt.border }),
                                r && s().createElement('div', { className: B()(Wt.border, Wt.border__right) }),
                            )
                        );
                    });
                function $t() {
                    return (
                        ($t =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        $t.apply(this, arguments)
                    );
                }
                const zt = (0, ee.Pi)(
                        ({ levelRef: e }) => {
                            const u = Ou().model;
                            return s().createElement(
                                'div',
                                { className: 'LevelCards_base_49', ref: e },
                                oe(u.computes.levels(), (e) => s().createElement(Gt, $t({ key: e.level }, e))),
                            );
                        },
                        { forwardRef: !0 },
                    ),
                    jt = {
                        blackReal: 'FormatTextWithColorTags_blackReal_3c',
                        whiteReal: 'FormatTextWithColorTags_whiteReal_8a',
                        white: 'FormatTextWithColorTags_white_16',
                        whiteOrange: 'FormatTextWithColorTags_whiteOrange_18',
                        whiteSpanish: 'FormatTextWithColorTags_whiteSpanish_10',
                        par: 'FormatTextWithColorTags_par_ca',
                        parSecondary: 'FormatTextWithColorTags_parSecondary_8d',
                        parTertiary: 'FormatTextWithColorTags_parTertiary_a3',
                        red: 'FormatTextWithColorTags_red_60',
                        redDark: 'FormatTextWithColorTags_redDark_03',
                        yellow: 'FormatTextWithColorTags_yellow_ad',
                        orange: 'FormatTextWithColorTags_orange_e4',
                        cream: 'FormatTextWithColorTags_cream_cd',
                        brown: 'FormatTextWithColorTags_brown_c8',
                        greenBright: 'FormatTextWithColorTags_greenBright_f0',
                        green: 'FormatTextWithColorTags_green_c5',
                        greenDark: 'FormatTextWithColorTags_greenDark_af',
                        blueBooster: 'FormatTextWithColorTags_blueBooster_ac',
                        blueTeamkiller: 'FormatTextWithColorTags_blueTeamkiller_6f',
                        cred: 'FormatTextWithColorTags_cred_4e',
                        gold: 'FormatTextWithColorTags_gold_90',
                        bond: 'FormatTextWithColorTags_bond_71',
                        prom: 'FormatTextWithColorTags_prom_dd',
                    },
                    Vt = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    qt = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    Xt = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    Yt = (0, n.memo)(({ text: e, binding: u, classMix: t }) => {
                        const r = (0, n.useCallback)((e) => ({ color: `#${e}` }), []),
                            a = (0, n.useMemo)(() => u || {}, [u]);
                        let o = Vt.exec(e),
                            i = e,
                            l = 0;
                        for (; o; ) {
                            const t = o[0],
                                n = qt.exec(t),
                                c = Xt.exec(t),
                                m = o[1];
                            if (n && c) {
                                const e = n[0],
                                    o = e + l++ + e;
                                (i = i.replace(t, `%(${o})`)),
                                    (a[o] = jt[e]
                                        ? s().createElement(
                                              'span',
                                              { className: jt[e] },
                                              s().createElement(q, { text: m, binding: u }),
                                          )
                                        : s().createElement(
                                              'span',
                                              { style: r(e) },
                                              s().createElement(q, { text: m, binding: u }),
                                          ));
                            }
                            o = Vt.exec(e);
                        }
                        return s().createElement(q, { text: i, classMix: t, binding: a });
                    });
                function Qt() {
                    return (
                        (Qt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Qt.apply(this, arguments)
                    );
                }
                const Kt = (0, ee.Pi)(({ isCompleted: e, isActive: u, rewards: t }) => {
                        const r = Pu(t),
                            a = r.parsedRewards,
                            n = r.imageSize,
                            o = B()(
                                'Rewards_base_8a',
                                n === Ye.Small && a.length > 2 && 'Rewards_base__wide_c4',
                                e && !u && 'Rewards_base__completed_b3',
                            );
                        return s().createElement(
                            'div',
                            { className: o },
                            oe(a, (e) =>
                                s().createElement(
                                    vu,
                                    Qt({ className: 'Rewards_reward_16', key: e.name }, e, {
                                        tooltipArgs: Bu({ tooltipId: e.tooltipId }, Number(e.tooltipContentId)),
                                    }),
                                ),
                            ),
                        );
                    }),
                    Zt = 'RewardCard_pointsBorder_61',
                    Jt = 'RewardCard_border_ad',
                    er = (0, ee.Pi)(
                        ({
                            pointsMin: e,
                            pointsForCard: u,
                            pointsCurrent: t,
                            isCompleted: r,
                            isActive: a,
                            isLast: n,
                            rewards: o,
                        }) => {
                            const i = B()('RewardCard_activeBlock_d6', a && 'RewardCard_activeBlock__completed_03'),
                                l = B()('RewardCard_bgCompleted_eb', a && 'RewardCard_bgCompleted__completed_30');
                            return s().createElement(
                                'div',
                                { className: 'RewardCard_base_36' },
                                s().createElement(
                                    'div',
                                    { className: i },
                                    s().createElement(
                                        'div',
                                        { className: 'RewardCard_pointsContainer_82' },
                                        s().createElement(Yt, {
                                            classMix: 'RewardCard_points_5f',
                                            text: R.strings.races_progression.progression.card.points(),
                                            binding: { current: hu(`${e + t}`, Qe.NUMBER) },
                                        }),
                                        s().createElement('div', { className: 'RewardCard_token_b7' }),
                                    ),
                                ),
                                s().createElement(
                                    'div',
                                    { className: 'RewardCard_bgShadow_74' },
                                    s().createElement('div', { className: l }),
                                ),
                                s().createElement(Kt, { rewards: o, isActive: a, isCompleted: r }),
                                s().createElement('div', { className: Jt }),
                                s().createElement(
                                    'div',
                                    { className: B()(Zt, 'RewardCard_pointsBorder__left_bd') },
                                    hu(`${e}`, Qe.NUMBER),
                                ),
                                n && s().createElement('div', { className: B()(Jt, 'RewardCard_border__right_c9') }),
                                n &&
                                    s().createElement(
                                        'div',
                                        { className: B()(Zt, 'RewardCard_pointsBorder__right_b2') },
                                        hu(`${e + u}`, Qe.NUMBER),
                                    ),
                            );
                        },
                    ),
                    ur = (0, ee.Pi)(() => {
                        const e = Ou().model,
                            u = e.root.get().pointsForLevel;
                        return s().createElement(
                            'div',
                            { className: 'RewardCards_base_da' },
                            oe(
                                e.computes.levels(),
                                ({ level: t, isCompleted: r, isActive: a, isLast: n, rewards: o }, i) =>
                                    s().createElement(er, {
                                        key: i,
                                        pointsMin: i * u,
                                        pointsForCard: u,
                                        pointsCurrent: e.computes.currentPointsForLevel(t - 1),
                                        isCompleted: r,
                                        isActive: a,
                                        isLast: n,
                                        rewards: o,
                                    }),
                            ),
                        );
                    }),
                    tr = {
                        base: 'ProgressBar_base_45',
                        base__medium: 'ProgressBar_base__medium_62',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__medium: 'ProgressBar_background__medium_6e',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let rr, ar;
                !(function (e) {
                    (e.Small = 'small'), (e.Medium = 'medium'), (e.Big = 'big'), (e.Default = 'big');
                })(rr || (rr = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(ar || (ar = {}));
                const nr = ({ size: e = rr.Default }) =>
                        s().createElement('div', { className: B()(tr.background, tr[`background__${e}`]) }),
                    sr = {
                        base: 'ProgressBarBlink_base_24',
                        base__medium: 'ProgressBarBlink_base__medium_ec',
                        base__small: 'ProgressBarBlink_base__small_0f',
                    },
                    or = ({ size: e }) => {
                        const u = B()(sr.base, sr[`base__${e}`]);
                        return s().createElement('div', { className: u });
                    },
                    ir = {
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
                    lr = (0, n.memo)(
                        ({ size: e, lineRef: u, disabled: t, baseStyles: r, isComplete: a, withoutBounce: n }) => {
                            const o = B()(
                                    ir.base,
                                    ir[`base__${e}`],
                                    t && ir.base__disabled,
                                    a && ir.base__finished,
                                    n && ir.base__withoutBounce,
                                ),
                                i = !t && !a;
                            return s().createElement(
                                'div',
                                { className: o, style: r, ref: u },
                                s().createElement('div', { className: ir.pattern }),
                                s().createElement('div', { className: ir.gradient }),
                                i && s().createElement(or, { size: e }),
                            );
                        },
                    ),
                    cr = ({ size: e, value: u, lineRef: t, disabled: r, onComplete: a }) => {
                        const o = (0, n.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                            i = 100 === u;
                        return (
                            (0, n.useEffect)(() => {
                                i && a && a();
                            }, [i, a]),
                            s().createElement(lr, { size: e, disabled: r, baseStyles: o, isComplete: i, lineRef: t })
                        );
                    };
                let mr, dr;
                !(function (e) {
                    (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
                })(mr || (mr = {})),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                    })(dr || (dr = {}));
                const Er = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: r,
                            size: a,
                            to: o,
                            onEndAnimation: i,
                            onChangeAnimationState: l,
                        }) => {
                            const c = o < r,
                                m = (0, n.useState)(dr.Idle),
                                d = m[0],
                                E = m[1],
                                _ = d === dr.In,
                                A = d === dr.End,
                                F = d === dr.Idle,
                                g = (0, n.useCallback)(
                                    (e) => {
                                        E(e), l && l(e);
                                    },
                                    [l],
                                );
                            (0, n.useEffect)(() => {
                                if (F && !t)
                                    return dt(() => {
                                        g(dr.In);
                                    }, u);
                            }, [g, t, F, u]),
                                (0, n.useEffect)(() => {
                                    if (_)
                                        return dt(() => {
                                            i && i(), g(dr.End);
                                        }, e + u);
                                }, [g, _, i, u, e]);
                            const D = (0, n.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                p = (0, n.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                C = (0, n.useMemo)(
                                    () => ({ width: `${Math.abs(r - o)}%`, left: `${c ? o : r}%` }),
                                    [r, c, o],
                                );
                            return A
                                ? null
                                : s().createElement(
                                      'div',
                                      { className: 'ProgressBarDeltaSimple_base_6c', style: C },
                                      s().createElement(
                                          'div',
                                          { style: F ? D : p, className: 'ProgressBarDeltaSimple_delta_99' },
                                          s().createElement(or, { size: a }),
                                      ),
                                  );
                        },
                    ),
                    _r = (0, n.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: r,
                            disabled: a,
                            isComplete: o,
                            animationSettings: i,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const m = (0, n.useMemo)(
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
                                s().createElement(lr, {
                                    size: u,
                                    lineRef: r,
                                    disabled: a,
                                    isComplete: o,
                                    baseStyles: m,
                                }),
                                t >= 0 &&
                                    s().createElement(Er, {
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
                    Ar = (e) => (e ? { left: 0 } : { right: 0 }),
                    Fr = (e, u) => (e ? { right: 100 - u + '%' } : { left: `${u}%` }),
                    gr = (e) => ({ transitionDuration: `${e}ms` }),
                    Dr = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: r,
                            size: a,
                            to: o,
                            onEndAnimation: i,
                            onChangeAnimationState: l,
                            className: c,
                        }) => {
                            const m = o < r,
                                d = (0, n.useState)(mr.Idle),
                                E = d[0],
                                _ = d[1],
                                A = E === mr.End,
                                F = E === mr.Idle,
                                g = E === mr.Grow,
                                D = E === mr.Shrink,
                                p = (0, n.useCallback)(
                                    (e) => {
                                        _(e), l && l(e);
                                    },
                                    [l],
                                ),
                                C = (0, n.useCallback)(
                                    (e, u) =>
                                        dt(() => {
                                            p(e);
                                        }, u),
                                    [p],
                                );
                            (0, n.useEffect)(() => {
                                if (!t)
                                    return F
                                        ? C(mr.Grow, u)
                                        : g
                                          ? C(mr.Shrink, e)
                                          : D
                                            ? C(mr.End, e)
                                            : void (A && i && i());
                            }, [C, t, A, g, F, D, i, u, e]);
                            const h = (0, n.useMemo)(() => Object.assign({ width: '100%' }, gr(e), Ar(m)), [m, e]),
                                f = (0, n.useMemo)(() => Object.assign({ width: '0%' }, gr(e), Ar(m)), [m, e]),
                                v = (0, n.useMemo)(() => Object.assign({ width: '0%' }, Fr(m, r), gr(e)), [r, m, e]),
                                b = (0, n.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(o - r)}%` }, Fr(m, r), gr(e)),
                                    [r, m, o, e],
                                );
                            if (A) return null;
                            const w = B()(
                                'ProgressBarDeltaGrow_base_7e',
                                c,
                                m && 0 === o && 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                            );
                            return s().createElement(
                                'div',
                                { style: F ? v : b, className: w },
                                s().createElement(
                                    'div',
                                    { style: D ? f : h, className: 'ProgressBarDeltaGrow_glow_68' },
                                    s().createElement(or, { size: a }),
                                ),
                            );
                        },
                    ),
                    pr = (0, n.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: r,
                            disabled: a,
                            isComplete: o,
                            animationSettings: i,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const m = e < t,
                                d = (0, n.useState)(!1),
                                E = d[0],
                                _ = d[1],
                                A = (0, n.useCallback)(
                                    (e) => {
                                        e === mr.Shrink && _(!0), c && c(e);
                                    },
                                    [c],
                                ),
                                F = (0, n.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                g = (0, n.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${i.line.duration}ms` }),
                                    [i.line.duration, e],
                                );
                            return s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(lr, {
                                    size: u,
                                    lineRef: r,
                                    disabled: a,
                                    isComplete: o,
                                    withoutBounce: m && 0 === e,
                                    baseStyles: E ? g : F,
                                }),
                                t >= 0 &&
                                    s().createElement(Dr, {
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
                    Cr = ['onComplete', 'onEndAnimation'];
                function Br() {
                    return (
                        (Br =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Br.apply(this, arguments)
                    );
                }
                const hr = (0, n.memo)((e) => {
                        let u = e.onComplete,
                            t = e.onEndAnimation,
                            r = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    a = {},
                                    n = Object.keys(e);
                                for (r = 0; r < n.length; r++) (t = n[r]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, Cr);
                        const a = (0, n.useState)(!1),
                            o = a[0],
                            i = a[1],
                            l = (0, n.useCallback)(() => {
                                const e = 100 === r.to;
                                e !== o && i(e), e && u && u(), t && t();
                            }, [o, u, t, r.to]);
                        switch (r.animationSettings.type) {
                            case ar.Simple:
                                return s().createElement(_r, Br({}, r, { onEndAnimation: l, isComplete: o }));
                            case ar.Growing:
                                return s().createElement(pr, Br({}, r, { onEndAnimation: l, isComplete: o }));
                            default:
                                return null;
                        }
                    }),
                    fr = ['onEndAnimation'];
                function vr() {
                    return (
                        (vr =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        vr.apply(this, arguments)
                    );
                }
                const br = (0, n.memo)((e) => {
                    let u = e.onEndAnimation,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                r,
                                a = {},
                                n = Object.keys(e);
                            for (r = 0; r < n.length; r++) (t = n[r]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                            return a;
                        })(e, fr);
                    const r = (0, n.useRef)({}),
                        a = (0, n.useCallback)(() => {
                            (r.current.from = void 0), u && u();
                        }, [u]),
                        o = 'number' == typeof r.current.from ? r.current.from : t.from;
                    return (
                        (r.current.from = o),
                        s().createElement(hr, vr({}, t, { onEndAnimation: a, key: `${o}-${t.to}`, from: o }))
                    );
                });
                function wr() {
                    return (
                        (wr =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        wr.apply(this, arguments)
                    );
                }
                const Sr = (0, n.memo)(
                        ({
                            size: e,
                            value: u,
                            lineRef: t,
                            disabled: r,
                            deltaFrom: a,
                            animationSettings: n,
                            onEndAnimation: o,
                            onChangeAnimationState: i,
                            onComplete: l,
                        }) => {
                            if (a === u)
                                return s().createElement(cr, {
                                    key: `${a}-${u}`,
                                    size: e,
                                    value: u,
                                    lineRef: t,
                                    disabled: r,
                                    onComplete: l,
                                });
                            const c = {
                                from: a,
                                to: u,
                                size: e,
                                lineRef: t,
                                disabled: r,
                                animationSettings: n,
                                onComplete: l,
                                onEndAnimation: o,
                                onChangeAnimationState: i,
                            };
                            return n.withStack
                                ? s().createElement(br, c)
                                : s().createElement(hr, wr({ key: `${a}-${u}` }, c));
                        },
                    ),
                    Tr = (e) => ({
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
                    Pr = (e, u, t) => ('number' == typeof t ? (Nu(0, u, t) / u) * 100 : e),
                    yr = {
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
                    xr = {
                        freezed: !1,
                        withStack: !1,
                        type: ar.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    Rr = (0, n.memo)(
                        ({
                            maxValue: e = 100,
                            theme: u = yr,
                            size: t = rr.Default,
                            animationSettings: r = xr,
                            disabled: a = !1,
                            withoutBackground: o = !1,
                            value: i,
                            deltaFrom: l,
                            lineRef: c,
                            onChangeAnimationState: m,
                            onEndAnimation: d,
                            onComplete: E,
                        }) => {
                            const _ = ((e, u, t) =>
                                (0, n.useMemo)(() => {
                                    const r = (Nu(0, u, e) / u) * 100;
                                    return { value: r, deltaFrom: Pr(r, u, t) };
                                }, [t, u, e]))(i, e, l);
                            return s().createElement(
                                'div',
                                { className: B()(tr.base, tr[`base__${t}`]), style: Tr(u) },
                                !o && s().createElement(nr, { size: t }),
                                s().createElement(Sr, {
                                    size: t,
                                    lineRef: c,
                                    disabled: a,
                                    value: _.value,
                                    deltaFrom: _.deltaFrom,
                                    animationSettings: r,
                                    onEndAnimation: d,
                                    onChangeAnimationState: m,
                                    onComplete: E,
                                }),
                            );
                        },
                    ),
                    Nr = ['api', 'value', 'maxValue', 'theme'];
                function Lr() {
                    return (
                        (Lr =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Lr.apply(this, arguments)
                    );
                }
                const Mr = (e, u) => ('number' == typeof u ? u : e.offsetLeft),
                    Or = (e) => {
                        let u = e.api,
                            t = e.value,
                            r = e.maxValue,
                            a = void 0 === r ? 100 : r,
                            o = e.theme,
                            i = void 0 === o ? yr : o,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    a = {},
                                    n = Object.keys(e);
                                for (r = 0; r < n.length; r++) (t = n[r]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, Nr);
                        const c = (0, n.useRef)(null),
                            m = (0, n.useRef)(null),
                            d = (0, n.useRef)(null),
                            E = Nu(0, t, a) / a,
                            _ = (0, n.useCallback)(
                                (e) => {
                                    d.current &&
                                        c.current &&
                                        (({ horizontalScrollPosition: e, leftOffset: u }, t, r) => {
                                            const a = t.offsetWidth - r.offsetWidth,
                                                n = e - Mr(t, u),
                                                s = Nu(0, a, n);
                                            r.style.left = `${s}px`;
                                        })(e, c.current, d.current),
                                        m.current &&
                                            c.current &&
                                            ((
                                                { horizontalScrollPosition: e, leftOffset: u },
                                                t,
                                                { container: r, line: a },
                                            ) => {
                                                const n = Math.max(0, Math.floor(r.offsetWidth * t) - 8e3),
                                                    s = e - Mr(r, u),
                                                    o = Nu(0, n, s);
                                                a.style.left = `${o}px`;
                                            })(e, E, { line: m.current, container: c.current });
                                },
                                [E],
                            ),
                            A = (0, n.useMemo)(() => Tr(i), [i]);
                        return (
                            (u.current.update = _),
                            s().createElement(
                                'div',
                                { className: 'OptimizedProgressBar_base_1f', ref: c },
                                s().createElement(
                                    'div',
                                    { className: 'OptimizedProgressBar_wrapper_ab' },
                                    s().createElement(
                                        'div',
                                        { style: A, className: 'OptimizedProgressBar_background_ce', ref: d },
                                        s().createElement(nr, { size: l.size }),
                                    ),
                                    s().createElement(
                                        Rr,
                                        Lr({}, l, {
                                            lineRef: m,
                                            value: t,
                                            theme: i,
                                            maxValue: a,
                                            withoutBackground: !0,
                                        }),
                                    ),
                                ),
                            )
                        );
                    },
                    kr = {
                        base: 'Container_base_ff',
                        progressWrapper: 'Container_progressWrapper_c7',
                        progressWrapper__completed: 'Container_progressWrapper__completed_74',
                        progressWrapper__fast: 'Container_progressWrapper__fast_7d',
                        bg: 'Container_bg_5d',
                    },
                    Ir = (0, ee.Pi)(({ api: e, theme: u }) => {
                        const t = Ou(),
                            r = t.model,
                            a = t.controls,
                            o = r.root.get(),
                            i = o.curProgressPoints,
                            l = o.pointsForLevel,
                            c = o.prevProgressPoints,
                            m = r.progressAnimationState.get(),
                            d = r.computes,
                            E = d.levels().length,
                            _ = (0, n.useRef)({ update: () => {} });
                        e.current.moveProgressBars = (0, n.useCallback)((e) => {
                            _.current.update(e);
                        }, []);
                        const A = (0, n.useState)({ maxPoints: E * l, previousEarnedPoints: c, progressionSize: c }),
                            F = A[0],
                            g = F.previousEarnedPoints,
                            D = F.maxPoints,
                            p = F.progressionSize,
                            C = A[1];
                        (0, n.useEffect)(() => {
                            C((e) => {
                                const u = 0 === e.progressionSize ? c : e.progressionSize;
                                return { maxPoints: E * l, previousEarnedPoints: u, progressionSize: i };
                            }),
                                c !== i && X('pr_progress_bar');
                        }, [c, l, i, d, E]);
                        const B = (0, n.useMemo)(
                            () =>
                                Object.assign({}, xr, {
                                    withStack: !0,
                                    type: ar.Growing,
                                    delta: { duration: 400, delay: 300 },
                                    line: { duration: 400, delay: 300 },
                                }),
                            [],
                        );
                        return (
                            (0, n.useEffect)(() => {
                                if (m === kt.ProgressChange)
                                    return dt(() => {
                                        a.finishProgressionChange();
                                    }, 700);
                            }, [a, m]),
                            s().createElement(
                                'div',
                                { className: kr.base },
                                s().createElement('div', { className: kr.bg }),
                                s().createElement(
                                    'div',
                                    { className: It(kr, m, 'progressWrapper') },
                                    s().createElement(Or, {
                                        animationSettings: B,
                                        deltaFrom: g,
                                        value: p,
                                        maxValue: D,
                                        api: _,
                                        theme: u,
                                    }),
                                ),
                            )
                        );
                    }),
                    Hr = ({ api: e, children: u, updateProgressBarPosition: t }) => {
                        const r = (0, n.useState)(0),
                            a = r[0],
                            o = r[1],
                            i = (0, n.useState)(0),
                            l = i[0],
                            c = i[1],
                            m = (0, n.useState)(!1),
                            d = m[0],
                            E = m[1];
                        (0, n.useEffect)(
                            () =>
                                rt(() => {
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
                        const _ = (0, n.useCallback)(
                                (e) => {
                                    E(!0), c(e.clientX), t();
                                },
                                [t],
                            ),
                            A = (0, n.useCallback)(() => {
                                E(!1), c(0), t();
                            }, [t]),
                            F = (0, n.useCallback)(
                                (u) => {
                                    if (d) {
                                        const r = Nu(-(e.getBounds()[1] || 0), 0, a + u.clientX - l);
                                        e.applyScroll(-r, !0), c(u.clientX), o(r), t();
                                    }
                                },
                                [d, e, a, l, t],
                            );
                        return s().createElement(
                            'div',
                            {
                                className: B()('ScrollDrag_base_39', d && 'ScrollDrag_base__grabbing_1c'),
                                onMouseDown: _,
                                onMouseUp: A,
                                onMouseMove: F,
                            },
                            u,
                        );
                    };
                function Wr(e, u, t, r, a, n, s) {
                    try {
                        var o = e[n](s),
                            i = o.value;
                    } catch (e) {
                        return void t(e);
                    }
                    o.done ? u(i) : Promise.resolve(i).then(r, a);
                }
                const Ur = (0, ee.Pi)(({ api: e }) => {
                        const u = Ou().model,
                            t = u.root.get().curProgressPoints,
                            r = S(),
                            a = (0, n.useState)(!1),
                            o = a[0],
                            i = a[1],
                            l = (0, n.useState)(!1),
                            c = l[0],
                            m = l[1],
                            d = u.computes.levels().length,
                            E = u.progressAnimationState.get(),
                            _ = u.computes,
                            A = (0, n.useRef)({ moveProgressBars: ue }),
                            F = (0, n.useRef)(null),
                            g = (0, n.useRef)(null),
                            D = e.animationScroll.scrollPosition,
                            p = e.getWrapperSize,
                            C = e.contentRef,
                            h = e.wrapperRef,
                            f = e.getContainerSize,
                            v = e.applyScroll;
                        (0, n.useLayoutEffect)(
                            () =>
                                rt(() => {
                                    const e = h.current,
                                        u = g.current;
                                    if (!e || !u) return;
                                    const t = u.children.length ? parseFloat(getComputedStyle(u.children[0]).width) : 0,
                                        a = parseFloat(getComputedStyle(u).paddingRight),
                                        n = parseFloat(getComputedStyle(e).paddingLeft);
                                    i(r.remScreenWidth >= d * t + a + n), m(!0);
                                }),
                            [r.remScreenWidth, h, d],
                        );
                        const b = (0, n.useCallback)(
                                (e) => {
                                    if (F.current) {
                                        const u = p();
                                        A.current.moveProgressBars({
                                            viewPort: F.current,
                                            horizontalScrollPosition: u ? e - u : e,
                                        });
                                    }
                                },
                                [p],
                            ),
                            w = () => {
                                b(D.goal);
                            },
                            T = (0, n.useCallback)(() => {
                                const e = C.current,
                                    u = d;
                                if (e && u > 0) {
                                    const t = f() || 0,
                                        r = p() || 0,
                                        a = t / u,
                                        n = _.currentLevel() * a,
                                        s = (r - e.offsetLeft - a) / 2;
                                    v(Nu(0, t - r, n - s), { immediate: E === kt.ProgressAlreadyFinished });
                                }
                                0 === D.goal && b(D.goal);
                            }, [d, v, _, C, f, p, E, D.goal, b]);
                        return (
                            (0, n.useEffect)(() => {
                                T();
                            }, [t, T]),
                            (0, n.useEffect)(() => {
                                const e = (function () {
                                    var e,
                                        u =
                                            ((e = function* () {
                                                const e = f(),
                                                    u = D.goal;
                                                yield (0, eu.Eu)();
                                                const t = f();
                                                b(t && e && t !== e ? (u * t) / e : u), T();
                                            }),
                                            function () {
                                                var u = this,
                                                    t = arguments;
                                                return new Promise(function (r, a) {
                                                    var n = e.apply(u, t);
                                                    function s(e) {
                                                        Wr(n, r, a, s, o, 'next', e);
                                                    }
                                                    function o(e) {
                                                        Wr(n, r, a, s, o, 'throw', e);
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
                            (0, n.useEffect)(() => dt(() => b(D.goal), 0), [t, D.goal, b]),
                            s().createElement(
                                'div',
                                {
                                    className: B()(
                                        'Content_base_ee',
                                        o && 'Content_base__centered_2a',
                                        c && 'Content_base__layoutReady_56',
                                    ),
                                    ref: F,
                                    onWheel: () => b(D.goal),
                                },
                                s().createElement(
                                    Ot.Horizontal.Area.Default,
                                    {
                                        api: e,
                                        className: 'Content_horizontalContent_f4',
                                        classNames: { wrapper: 'Content_wrapper_a0' },
                                        barClassNames: { base: 'Content_horizontalBarVerticalScrollBar_4e' },
                                        onDrag: w,
                                    },
                                    s().createElement(
                                        Hr,
                                        { api: e, updateProgressBarPosition: w },
                                        s().createElement(zt, { levelRef: g }),
                                        s().createElement(
                                            'div',
                                            { className: 'Content_progress_72' },
                                            s().createElement(
                                                'div',
                                                { className: 'Content_progressArea_ee' },
                                                s().createElement(Ir, { api: A }),
                                            ),
                                        ),
                                        s().createElement(ur, null),
                                    ),
                                ),
                            )
                        );
                    }),
                    Gr = {
                        base: 'Progression_base_a8',
                        base__fast: 'Progression_base__fast_da',
                        shadow: 'Progression_shadow_37',
                        shadow__left: 'Progression_shadow__left_4a',
                        shadow__right: 'Progression_shadow__right_8f',
                        shadow__visible: 'Progression_shadow__visible_ab',
                    },
                    $r = (0, ee.Pi)(() => {
                        const e = Ou(),
                            u = e.model,
                            t = e.controls,
                            r = u.progressAnimationState.get(),
                            a = (0, n.useState)(!1),
                            o = a[0],
                            i = a[1],
                            l = (0, n.useState)(!1),
                            c = l[0],
                            m = l[1],
                            d = u.computes.isProgressionCompleted(),
                            E = u.computes.wasProgressionCompletedBeforeStart(),
                            _ = mt();
                        return (
                            (0, n.useEffect)(() => {
                                const e = (e) => {
                                    const u = _.contentRef.current.offsetLeft,
                                        t = e.value.scrollPosition,
                                        r = _.getWrapperSize() || 0,
                                        a = _.getContainerSize() || 0;
                                    i(t > u), m(t + r < a - u);
                                };
                                return (
                                    _.events.on('change', e),
                                    () => {
                                        _.events.off('change', e);
                                    }
                                );
                            }, [_]),
                            (0, n.useEffect)(
                                () =>
                                    E
                                        ? t.completeProgression(!0)
                                        : r === kt.ChangeCompleted && d
                                          ? dt(() => {
                                                t.completeProgression(!1);
                                            }, 1600)
                                          : r !== kt.Scrolling || E
                                            ? r === kt.HighlightCard
                                                ? dt(() => {
                                                      t.finishHighlightCard();
                                                  }, 500)
                                                : void 0
                                            : dt(() => {
                                                  t.finishScrolling();
                                              }, 1200),
                                [r, E, d, t],
                            ),
                            s().createElement(
                                'div',
                                { className: It(Gr, r, 'base') },
                                s().createElement('div', {
                                    className: B()(Gr.shadow, Gr.shadow__left, o && Gr.shadow__visible),
                                }),
                                s().createElement('div', {
                                    className: B()(Gr.shadow, Gr.shadow__right, c && Gr.shadow__visible),
                                }),
                                s().createElement(Ur, { api: _ }),
                            )
                        );
                    }),
                    zr = R.strings.races_progression,
                    jr =
                        ((0, ee.Pi)(() => {
                            const e = Ou(),
                                u = e.controls,
                                t = e.model.computes.isProgressionCompleted();
                            var r;
                            return (
                                (r = u.onClose),
                                Ru(yu.n.ESCAPE, r),
                                s().createElement(
                                    'div',
                                    { className: 'App_base_cd' },
                                    s().createElement('div', { className: 'App_bg_fb' }),
                                    t && s().createElement('div', { className: 'App_completedBg_76' }),
                                    s().createElement(tt, { isProgressionCompleted: t }),
                                    t
                                        ? s().createElement(
                                              'div',
                                              { className: 'App_completedContainer_88' },
                                              s().createElement(
                                                  'div',
                                                  { className: 'App_flagContainer_ac' },
                                                  s().createElement('div', { className: 'App_flag_5e' }),
                                                  s().createElement(
                                                      'div',
                                                      { className: 'App_textContainer_0e' },
                                                      s().createElement(
                                                          'div',
                                                          { className: 'App_text_07' },
                                                          zr.progression.completed(),
                                                      ),
                                                      s().createElement('div', { className: 'App_shine_f4' }),
                                                  ),
                                              ),
                                          )
                                        : s().createElement(
                                              'div',
                                              { className: 'App_questsContainer_8e' },
                                              s().createElement(Ju, null),
                                          ),
                                    s().createElement(
                                        'div',
                                        { className: 'App_progression_f9' },
                                        s().createElement($r, null),
                                    ),
                                )
                            );
                        }),
                        {
                            base: 'Progression_base_53',
                            progression: 'Progression_progression_11',
                            base__completed: 'Progression_base__completed_34',
                            hide: 'Progression_hide_e9',
                            progressionNumerical: 'Progression_progressionNumerical_e6',
                            'finish-color': 'Progression_finish-color_a8',
                            currentValue__inProgress: 'Progression_currentValue__inProgress_65',
                            currentValue: 'Progression_currentValue_ae',
                            separator: 'Progression_separator_aa',
                            progressBar: 'Progression_progressBar_37',
                            'add-blur': 'Progression_add-blur_9d',
                            show: 'Progression_show_f1',
                            'default-color': 'Progression_default-color_1d',
                        }),
                    Vr = ({ currentValue: e, maxValue: u, lastValue: t, statusAnimation: r }) =>
                        s().createElement(
                            'div',
                            { className: B()(jr.base, jr[`base__${r}`]) },
                            s().createElement(
                                'div',
                                { className: jr.progression },
                                s().createElement(
                                    'div',
                                    { className: B()(jr.progressionNumerical) },
                                    s().createElement(
                                        'span',
                                        { className: B()(jr.currentValue, Boolean(e) && jr.currentValue__inProgress) },
                                        e,
                                    ),
                                    s().createElement(
                                        'span',
                                        { className: jr.separator },
                                        R.strings.common.common.slash(),
                                    ),
                                    s().createElement('span', null, u),
                                ),
                                Boolean(e) &&
                                    s().createElement(
                                        'div',
                                        { className: B()(jr.progressBar) },
                                        s().createElement(Rr, {
                                            size: rr.Small,
                                            value: e,
                                            deltaFrom: e - t,
                                            maxValue: u,
                                        }),
                                    ),
                            ),
                        ),
                    qr = {
                        base: 'Quest_base_69',
                        topLine: 'Quest_topLine_e5',
                        border: 'Quest_border_9e',
                        base__recentlyCompleted: 'Quest_base__recentlyCompleted_15',
                        fadeOut: 'Quest_fadeOut_63',
                        base__completed: 'Quest_base__completed_37',
                        base__normal: 'Quest_base__normal_c3',
                        borderShine: 'Quest_borderShine_a5',
                        borderBlinkLine: 'Quest_borderBlinkLine_4c',
                        fadeOutLine: 'Quest_fadeOutLine_71',
                        questLogo: 'Quest_questLogo_23',
                        questIcon: 'Quest_questIcon_56',
                        showIcon: 'Quest_showIcon_df',
                        questIconShine: 'Quest_questIconShine_e5',
                        showShine: 'Quest_showShine_cf',
                        description: 'Quest_description_17',
                        condition: 'Quest_condition_db',
                        changeDescriptionColor: 'Quest_changeDescriptionColor_7e',
                        centerText: 'Quest_centerText_4b',
                        descriptionBgShine: 'Quest_descriptionBgShine_65',
                        progression: 'Quest_progression_fe',
                        hideProgression: 'Quest_hideProgression_a6',
                        rewards: 'Quest_rewards_3c',
                        racesPointsText: 'Quest_racesPointsText_65',
                        rewardImage: 'Quest_rewardImage_40',
                    };
                function Xr() {
                    return (
                        (Xr =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Xr.apply(this, arguments)
                    );
                }
                const Yr = R.images.races.gui.maps.icons.progression.dailyQuests,
                    Qr = (0, ee.Pi)(({ rewards: e = [], conditions: u, icon: t, mixClass: r, questState: a }) => {
                        var n;
                        const o = Pu(e, Ye.Small).parsedRewards,
                            i = null != a ? a : _e(u[0].progression),
                            l = null != (n = Yr.$dyn(t)) ? n : Yr.battles(),
                            c = i === le.Normal ? l : Yr.iconCompleted();
                        return s().createElement(
                            'div',
                            { className: B()(qr.base, qr[`base__${i}`], r) },
                            s().createElement(
                                'div',
                                { className: qr.topLine },
                                s().createElement('div', { className: qr.border }),
                                i === le.RecentlyCompleted &&
                                    s().createElement(
                                        s().Fragment,
                                        null,
                                        s().createElement('div', { className: qr.borderShine }),
                                        s().createElement('div', { className: qr.borderBlinkLine }),
                                    ),
                            ),
                            s().createElement(
                                'div',
                                { className: qr.questLogo },
                                s().createElement('div', {
                                    className: B()(qr.questIcon),
                                    style: { backgroundImage: `url('${c}')` },
                                }),
                                i !== le.Normal && s().createElement('div', { className: B()(qr.questIconShine) }),
                            ),
                            s().createElement(
                                'div',
                                { className: qr.description },
                                i === le.Normal && s().createElement('div', { className: qr.descriptionBgShine }),
                                u.map(({ conditions: e, progression: u }, t) =>
                                    s().createElement(
                                        s().Fragment,
                                        { key: t },
                                        s().createElement(
                                            'div',
                                            { className: qr.condition },
                                            s().createElement(q, {
                                                text: `${zr.battleQuests.$dyn(Ee(e))}`,
                                                binding: Object.assign({}, e),
                                                classMix: qr.centerText,
                                            }),
                                        ),
                                        i !== le.Completed &&
                                            s().createElement(
                                                'div',
                                                { className: qr.progression },
                                                s().createElement(Vr, {
                                                    currentValue: u.currentValue,
                                                    maxValue: u.maxValue,
                                                    lastValue: u.lastValue,
                                                    statusAnimation:
                                                        i === le.RecentlyCompleted ? Ku.completed : Ku.inProgress,
                                                }),
                                            ),
                                    ),
                                ),
                            ),
                            s().createElement(
                                'div',
                                { className: qr.rewards },
                                o.map((e) =>
                                    s().createElement(
                                        vu,
                                        Xr({ className: qr.award, key: e.name }, e, {
                                            classNames: { info: qr.racesPointsText, image: qr.rewardImage },
                                        }),
                                    ),
                                ),
                            ),
                        );
                    }),
                    Kr = (e) => {
                        const u = Math.floor(e / 60),
                            t = e - 60 * u;
                        return `${u}:${t < 10 ? '0' + t : t}`;
                    };
                let Zr;
                !(function (e) {
                    (e.Win = 'finishWinner'),
                        (e.WinnerPlace = 'finishPlace'),
                        (e.Place = 'finishPlace'),
                        (e.FinishFail = 'finishFail'),
                        (e.Disqualification = 'finishDisqualification');
                })(Zr || (Zr = {}));
                const Jr = (e) => {
                        if (_e(e) === le.Completed) return le.RecentlyCompleted;
                    },
                    ea = (0, ee.Pi)(({ isFirstView: e = !1 }) => {
                        const u = De().model,
                            t = u.root.get(),
                            r = t.questsState,
                            a = t.playerId,
                            n = u.computes.getPlayerById(a),
                            o = n.isFinishFail,
                            i = n.isDisqualification,
                            l = n.place,
                            c = n.raceDuration,
                            m = n.points,
                            d = u.computes.battleQuests(),
                            E = Kr(c),
                            _ = ((e, u, t) =>
                                t
                                    ? Zr.Disqualification
                                    : u
                                      ? Zr.FinishFail
                                      : 1 === e
                                        ? Zr.Win
                                        : e > 1 && e <= 3
                                          ? Zr.WinnerPlace
                                          : Zr.Place)(l, o, i);
                        return s().createElement(
                            'div',
                            { className: B()('PersonalTab_base_c4') },
                            s().createElement(
                                'div',
                                { className: B()('PersonalTab_flag_14', e && 'PersonalTab_flag__animate_ac') },
                                s().createElement('div', { className: 'PersonalTab_flagIcon_04' }),
                                s().createElement(
                                    'div',
                                    { className: 'PersonalTab_winnerText_f3' },
                                    s().createElement(
                                        'div',
                                        { className: 'PersonalTab_text_06' },
                                        s().createElement(q, { text: Ae.content.$dyn(_), binding: { place: l } }),
                                    ),
                                    s().createElement('div', { className: 'PersonalTab_shine_93' }),
                                ),
                                _ !== Zr.Disqualification &&
                                    _ !== Zr.FinishFail &&
                                    s().createElement(
                                        'div',
                                        { className: 'PersonalTab_timeText_d8' },
                                        s().createElement(q, {
                                            text: Ae.content.finishTime(),
                                            binding: { finishTime: E },
                                        }),
                                    ),
                            ),
                            s().createElement(
                                'div',
                                { className: 'PersonalTab_points_e7' },
                                s().createElement('div', { className: 'PersonalTab_pointsIcon_9f' }),
                                s().createElement(
                                    'div',
                                    { className: 'PersonalTab_pointsDescription_c5' },
                                    s().createElement(je, { text: m, className: 'PersonalTab_count_af' }),
                                    s().createElement(je, {
                                        text: Ae.content.points(),
                                        className: 'PersonalTab_label_66',
                                    }),
                                ),
                            ),
                            d.length
                                ? s().createElement(
                                      'div',
                                      { className: 'PersonalTab_quests_a6' },
                                      d.map((u, t) =>
                                          s().createElement(Qr, {
                                              key: `${u.taskBattleIcon}_${t}`,
                                              rewards: u.awardsBattle,
                                              conditions: u.taskConditions,
                                              icon: u.taskBattleIcon,
                                              mixClass: t > 0 ? 'PersonalTab_marginLeft_da' : void 0,
                                              questState: e ? Jr(u.taskConditions[0].progression) : void 0,
                                          }),
                                      ),
                                  )
                                : s().createElement(je, {
                                      text: Ae.content.$dyn(r),
                                      className: 'PersonalTab_infoMessage_37',
                                  }),
                        );
                    }),
                    ua = 'TeamTab_row_1b',
                    ta = 'TeamTab_position_04',
                    ra = 'TeamTab_playerRow_69',
                    aa = 'TeamTab_positionIcon_21',
                    na = 'TeamTab_time_7d',
                    sa = 'TeamTab_points_f4',
                    oa = 'TeamTab_border_1c',
                    ia = 'TeamTab_points__board_4d',
                    la = 'TeamTab_action_b0',
                    ca = 'TeamTab_actionRow_4f',
                    ma = 'TeamTab_actionIconContainer_3b',
                    da = 'R.images.races.gui.maps.icons.postBattle',
                    Ea = (e) => `url(R.images.races.gui.maps.icons.progression.dailyQuests.${e})`,
                    _a = (0, ee.Pi)(() => {
                        const e = De().model,
                            u = e.root.get().playerId,
                            t = (0, n.useState)(u),
                            r = t[0],
                            a = t[1],
                            o = e.computes.getPlayers(),
                            i = e.computes.getPlayerById(r);
                        return s().createElement(
                            'div',
                            { className: B()('TeamTab_base_2e') },
                            s().createElement(
                                'div',
                                { className: 'TeamTab_leaderBoard_2a' },
                                s().createElement(
                                    'div',
                                    { className: 'TeamTab_header_7a' },
                                    s().createElement(je, {
                                        text: Ae.content.leaderBoard.position(),
                                        className: B()(ua, ta),
                                    }),
                                    s().createElement(je, {
                                        text: Ae.content.leaderBoard.player(),
                                        className: B()(ua, ra),
                                    }),
                                    s().createElement(je, {
                                        text: Ae.content.leaderBoard.time(),
                                        className: B()(ua, na),
                                    }),
                                    s().createElement(je, {
                                        text: Ae.content.leaderBoard.points(),
                                        className: B()(ua, sa),
                                    }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: 'TeamTab_players_75' },
                                    o.map((e) => {
                                        return s().createElement(
                                            'div',
                                            {
                                                className: B()(
                                                    'TeamTab_player_50',
                                                    e.playerId === u && 'TeamTab_player__current_63',
                                                    e.playerId === r && 'TeamTab_player__selected_33',
                                                ),
                                                key: e.playerId,
                                                onClick: () => {
                                                    return (u = e.playerId), X('play'), void a(u);
                                                    var u;
                                                },
                                            },
                                            s().createElement('div', { className: 'TeamTab_texture_fe' }),
                                            s().createElement(
                                                'div',
                                                { className: B()(ua, ta, 'TeamTab_position__board_25', oa) },
                                                ((t = e.place),
                                                e.isDisqualification || e.isFinishFail
                                                    ? s().createElement(je, {
                                                          text: Ae.content.leaderBoard.emptyPlace(),
                                                      })
                                                    : t <= 3
                                                      ? s().createElement('div', {
                                                            className: aa,
                                                            style: { backgroundImage: `url(${da}.prize_${t})` },
                                                        })
                                                      : t),
                                            ),
                                            s().createElement(je, {
                                                text: e.playerNickname,
                                                className: B()(ua, ra, oa),
                                            }),
                                            s().createElement(je, {
                                                text:
                                                    e.isDisqualification || e.isFinishFail
                                                        ? Ae.content.leaderBoard.emptyTime()
                                                        : Kr(e.raceDuration),
                                                className: B()(ua, na, 'TeamTab_time__board_4a', oa),
                                            }),
                                            s().createElement(je, {
                                                text: e.isDisqualification
                                                    ? Ae.content.leaderBoard.emptyPlace()
                                                    : e.points,
                                                className: B()(ua, sa, ia),
                                            }),
                                        );
                                        var t;
                                    }),
                                ),
                            ),
                            s().createElement(
                                'div',
                                { className: 'TeamTab_playerInfo_7e' },
                                s().createElement(
                                    'div',
                                    { className: 'TeamTab_playerInfoHeader_10' },
                                    s().createElement('div', {
                                        className: 'TeamTab_vehicleIcon_13',
                                        style: { backgroundImage: `url(${da}.${i.vehicleIconName})` },
                                    }),
                                    s().createElement(
                                        'div',
                                        { className: 'TeamTab_description_2f' },
                                        s().createElement(je, {
                                            text: i.playerNickname,
                                            className: 'TeamTab_playerNickname_d5',
                                        }),
                                        s().createElement(je, {
                                            text: i.vehicleName,
                                            className: 'TeamTab_vehicleName_2c',
                                        }),
                                    ),
                                ),
                                s().createElement(
                                    'div',
                                    { className: 'TeamTab_playerInfoTableHeader_5c' },
                                    s().createElement(je, {
                                        text: Ae.content.leaderBoard.actionsHeader(),
                                        className: B()(ua, 'TeamTab_actions_03'),
                                    }),
                                    s().createElement(je, {
                                        text: Ae.content.leaderBoard.points(),
                                        className: B()(ua, sa),
                                    }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: la },
                                    s().createElement(
                                        'div',
                                        { className: B()(ua, ma, oa) },
                                        s().createElement('div', {
                                            className: aa,
                                            style: { backgroundImage: Ea('points') },
                                        }),
                                    ),
                                    s().createElement(je, {
                                        text: Ae.content.leaderBoard.actions.total(),
                                        className: B()(ua, ca, oa),
                                    }),
                                    s().createElement(je, {
                                        text: i.points > 0 ? i.points : Ae.content.leaderBoard.emptyPlace(),
                                        className: B()(ua, sa, ia),
                                    }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: la },
                                    s().createElement(
                                        'div',
                                        { className: B()(ua, ma, oa) },
                                        s().createElement('div', {
                                            className: aa,
                                            style: { backgroundImage: Ea('battles') },
                                        }),
                                    ),
                                    s().createElement(
                                        'div',
                                        { className: B()(ua, ca, oa) },
                                        s().createElement(q, {
                                            text: Ae.content.leaderBoard.actions.$dyn(
                                                (i.place,
                                                (l = i.isFinishFail),
                                                (c = i.isDisqualification),
                                                c ? Zr.Disqualification : l ? Zr.FinishFail : Zr.Place),
                                            ),
                                            binding: { place: i.place },
                                        }),
                                    ),
                                    s().createElement(je, {
                                        text:
                                            i.battleResultPoints.battles > 0
                                                ? i.battleResultPoints.battles
                                                : Ae.content.leaderBoard.emptyPlace(),
                                        className: B()(ua, sa, ia),
                                    }),
                                ),
                                Object.entries(i.battleResultPoints)
                                    .filter((e) => 'battles' !== e[0])
                                    .map((e, u) =>
                                        s().createElement(
                                            'div',
                                            { className: la, key: u },
                                            s().createElement(
                                                'div',
                                                { className: B()(ua, ma, oa) },
                                                s().createElement('div', {
                                                    className: aa,
                                                    style: { backgroundImage: Ea(e[0]) },
                                                }),
                                            ),
                                            s().createElement(je, {
                                                text: Ae.content.leaderBoard.actions.$dyn(e[0]),
                                                className: B()(ua, ca, oa),
                                            }),
                                            s().createElement(je, {
                                                text: e[1] > 0 ? e[1] : Ae.content.leaderBoard.emptyPlace(),
                                                className: B()(ua, sa, ia),
                                            }),
                                        ),
                                    ),
                            ),
                        );
                        var l, c;
                    }),
                    Aa = [1, 2, 3];
                var Fa;
                !(function (e) {
                    (e[(e.Personal = 0)] = 'Personal'), (e[(e.Team = 1)] = 'Team');
                })(Fa || (Fa = {}));
                const ga = (0, ee.Pi)(() => {
                    const e = (0, n.useState)(Fa.Personal),
                        u = e[0],
                        t = e[1],
                        r = (0, n.useState)(!0),
                        a = r[0],
                        o = r[1],
                        i = De(),
                        l = i.controls,
                        c = i.model,
                        m = c.root.get(),
                        d = m.battleFinishDate,
                        E = m.playerId,
                        _ = c.computes.getPlayerById(E).place,
                        A = {
                            [Fa.Personal]: s().createElement(ea, { isFirstView: a }),
                            [Fa.Team]: s().createElement(_a, null),
                        },
                        F = Aa.includes(_),
                        g = () => {
                            l.onClose(), X('play');
                        },
                        D = (e) => {
                            t(e), X('play');
                        },
                        p = new Date(1e3 * d),
                        C = `${p.getUTCDate()}.${p.getMonth() + 1 < 10 ? `0${p.getMonth() + 1}` : p.getMonth() + 1}.${p.getFullYear()}`,
                        h = `${p.getHours()}:${p.getMinutes() < 10 ? `0${p.getMinutes()}` : p.getMinutes()}`,
                        f = (0, n.useCallback)(() => {
                            D(Fa.Personal);
                        }, []),
                        v = (0, n.useCallback)(() => {
                            D(Fa.Team);
                        }, []),
                        b = (0, n.useCallback)(() => {
                            Y.playHighlight();
                        }, []);
                    return (
                        (0, n.useEffect)(() => {
                            setTimeout(() => {
                                o(!1);
                            }, 2500);
                        }, []),
                        s().createElement(
                            'div',
                            { className: B()(pe.base, F && pe.base__victory) },
                            s().createElement(
                                'div',
                                { className: pe.header },
                                s().createElement(
                                    'div',
                                    { className: pe.switchView },
                                    s().createElement(Ve, {
                                        text: Ae.header.personalTab(),
                                        onClick: f,
                                        isActive: u === Fa.Personal,
                                    }),
                                    s().createElement(Ve, {
                                        text: Ae.header.teamTab(),
                                        onClick: v,
                                        isActive: u === Fa.Team,
                                    }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: pe.close },
                                    s().createElement(J, {
                                        caption: Ae.header.close(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: g,
                                    }),
                                ),
                            ),
                            s().createElement('div', { className: pe.content }, A[u]),
                            s().createElement(
                                'div',
                                { className: pe.footer },
                                s().createElement(
                                    'div',
                                    { className: pe.battleInfo },
                                    s().createElement('div', { className: pe.racesInfo }, Ae.footer.raceMap()),
                                    s().createElement(
                                        'div',
                                        { className: pe.finishTime },
                                        s().createElement('div', { className: pe.finishText }, Ae.footer.finishTime()),
                                        s().createElement(q, {
                                            text: Ae.footer.finishTimeStamp(),
                                            classMix: pe.finishTimeStamp,
                                            binding: { finishDate: C, finishTime: h },
                                        }),
                                    ),
                                ),
                                s().createElement(
                                    'div',
                                    { className: pe.button },
                                    s().createElement('div', { className: pe.texture }),
                                    s().createElement(
                                        'button',
                                        { className: pe.leaveButton, onMouseEnter: b, onClick: g },
                                        Ae.footer.approve(),
                                    ),
                                ),
                            ),
                        )
                    );
                });
                engine.whenReady.then(() => {
                    I().render(
                        s().createElement(ge, null, s().createElement(O, null, s().createElement(ga, null))),
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
        return __webpack_modules__[e](t, t.exports, __webpack_require__), t.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, u, t, r) => {
            if (!u) {
                var a = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [u, t, r] = deferred[i], n = !0, s = 0; s < u.length; s++)
                        (!1 & r || a >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[s]))
                            ? u.splice(s--, 1)
                            : ((n = !1), r < a && (a = r));
                    if (n) {
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
        (__webpack_require__.j = 420),
        (() => {
            var e = { 420: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var r,
                        a,
                        [n, s, o] = t,
                        i = 0;
                    if (n.some((u) => 0 !== e[u])) {
                        for (r in s) __webpack_require__.o(s, r) && (__webpack_require__.m[r] = s[r]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (u && u(t); i < n.length; i++)
                        (a = n[i]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(9670));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
