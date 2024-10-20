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
            532: (e) => {
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
            887: (e) => {
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
                var r = t(472),
                    a = t(176);
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
            959: (e, u, t) => {
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
            176: (e, u, t) => {
                'use strict';
                function r(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => r });
            },
            472: (e, u, t) => {
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
            138: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => a });
                var r = t(959);
                const a = { view: t(641), client: r };
            },
            722: (e, u, t) => {
                'use strict';
                function r(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function a(e, u, t) {
                    return `url(${r(e, u, t)})`;
                }
                t.r(u), t.d(u, { getBgUrl: () => a, getTextureUrl: () => r });
            },
            112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => a });
                var r = t(472);
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
            641: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => o,
                        children: () => r,
                        displayStatus: () => a.W,
                        displayStatusIs: () => v,
                        events: () => n.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => b,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => f,
                        getScale: () => g,
                        getSize: () => m,
                        getViewGlobalPosition: () => E,
                        isEventHandled: () => h,
                        isFocused: () => C,
                        pxToRem: () => F,
                        remToPx: () => p,
                        resize: () => _,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => D,
                        setEventHandled: () => B,
                        setInputPaddingsRem: () => i,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => S,
                    });
                var r = t(722),
                    a = t(112),
                    n = t(538),
                    s = t(566);
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
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function _(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function E(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: p(u.x), y: p(u.y) };
                }
                function A() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function g() {
                    return viewEnv.getScale();
                }
                function F(e) {
                    return viewEnv.pxToRem(e);
                }
                function p(e) {
                    return viewEnv.remToPx(e);
                }
                function D(e, u) {
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
                function b() {
                    viewEnv.forceTriggerMouseMove();
                }
                function f() {
                    return viewEnv.getShowingStatus();
                }
                const v = Object.keys(a.W).reduce(
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
            566: (e, u, t) => {
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
            521: (e, u, t) => {
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
            358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                var r = t(138);
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
            572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(364);
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
            364: (e, u, t) => {
                'use strict';
                t.d(u, { Sw: () => n.Z, B3: () => c, Z5: () => s, B0: () => i, ry: () => D, Eu: () => C });
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
                var n = t(358);
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
                    d = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var E = t(521),
                    A = t(138);
                const g = ['args'];
                function F(e, u, t, r, a, n, s) {
                    try {
                        var o = e[n](s),
                            i = o.value;
                    } catch (e) {
                        return void t(e);
                    }
                    o.done ? u(i) : Promise.resolve(i).then(r, a);
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
                                    return new Promise(function (r, a) {
                                        var n = e.apply(u, t);
                                        function s(e) {
                                            F(n, r, a, s, o, 'next', e);
                                        }
                                        function o(e) {
                                            F(n, r, a, s, o, 'throw', e);
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
                                })(u, g);
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
                    b = (e, u) => {
                        e.keyCode === E.n.ESCAPE && u();
                    };
                var f = t(572);
                const v = a.instance,
                    w = {
                        DataTracker: n.Z,
                        ViewModel: f.Z,
                        ViewEventType: i,
                        NumberFormatType: c,
                        RealFormatType: d,
                        TimeFormatType: m,
                        DateFormatType: _,
                        makeGlobalBoundingBox: p,
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
                                d = o.width,
                                m = o.height,
                                _ = {
                                    x: A.O.view.pxToRem(l) + s.x,
                                    y: A.O.view.pxToRem(c) + s.y,
                                    width: A.O.view.pxToRem(d),
                                    height: A.O.view.pxToRem(m),
                                };
                            B(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: a,
                                direction: u,
                                bbox: p(_),
                                on: !0,
                                args: n,
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
                        handleViewEvent: B,
                        onBindingsReady: D,
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
                        ClickOutsideManager: v,
                        SystemLocale: s,
                        UserLocale: o,
                    };
                window.ViewEnvHelper = w;
            },
            241: (e, u, t) => {
                'use strict';
                var r = {};
                t.r(r),
                    t.d(r, {
                        Area: () => Wr,
                        Bar: () => Or,
                        DefaultScroll: () => Hr,
                        Direction: () => wr,
                        defaultSettings: () => Sr,
                        useHorizontalScrollApi: () => Rr,
                    });
                var a = {};
                t.r(a), t.d(a, { Area: () => Zr, Bar: () => Yr, Default: () => Kr, useVerticalScrollApi: () => Ur });
                var n = t(179),
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
                var i = t(138);
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var c;
                function d(e, u, t) {
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
                const m = i.O.client.getSize('rem'),
                    _ = m.width,
                    E = m.height,
                    A = Object.assign({ width: _, height: E }, d(_, E, l)),
                    g = (0, n.createContext)(A),
                    F = ['children'],
                    p = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    a = {},
                                    n = Object.keys(e);
                                for (r = 0; r < n.length; r++) (t = n[r]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, F);
                        const r = (0, n.useContext)(g),
                            a = r.extraLarge,
                            s = r.large,
                            i = r.medium,
                            l = r.small,
                            c = r.extraSmall,
                            d = r.extraLargeWidth,
                            m = r.largeWidth,
                            _ = r.mediumWidth,
                            E = r.smallWidth,
                            A = r.extraSmallWidth,
                            p = r.extraLargeHeight,
                            D = r.largeHeight,
                            C = r.mediumHeight,
                            B = r.smallHeight,
                            h = r.extraSmallHeight,
                            b = { extraLarge: p, large: D, medium: C, small: B, extraSmall: h };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && a) return u;
                            if (t.large && s) return u;
                            if (t.medium && i) return u;
                            if (t.small && l) return u;
                            if (t.extraSmall && c) return u;
                        } else {
                            if (t.extraLargeWidth && d) return o(u, t, b);
                            if (t.largeWidth && m) return o(u, t, b);
                            if (t.mediumWidth && _) return o(u, t, b);
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
                                if (t.mediumHeight && C) return u;
                                if (t.smallHeight && B) return u;
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
                    (0, n.memo)(p);
                const D = (0, n.memo)(({ children: e }) => {
                    const u = (0, n.useContext)(g),
                        t = (0, n.useState)(u),
                        r = t[0],
                        a = t[1],
                        o = (0, n.useCallback)((e, u) => {
                            const t = i.O.view.pxToRem(e),
                                r = i.O.view.pxToRem(u);
                            a(Object.assign({ width: t, height: r }, d(t, r, l)));
                        }, []);
                    ((e) => {
                        const u = (0, n.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    })(() => {
                        engine.on('clientResized', o);
                    }),
                        (0, n.useEffect)(() => () => engine.off('clientResized', o), [o]);
                    const c = (0, n.useMemo)(() => Object.assign({}, r), [r]);
                    return s().createElement(g.Provider, { value: c }, e);
                });
                var C = t(483),
                    B = t.n(C),
                    h = t(926),
                    b = t.n(h);
                let f, v, w;
                !(function (e) {
                    (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = l.small.width)] = 'Small'),
                        (e[(e.Medium = l.medium.width)] = 'Medium'),
                        (e[(e.Large = l.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                })(f || (f = {})),
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
                const S = () => {
                        const e = (0, n.useContext)(g),
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
                            a = ((e) => {
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
                        return { mediaSize: r, mediaWidth: a, mediaHeight: s, remScreenWidth: u, remScreenHeight: t };
                    },
                    T = ['children', 'className'];
                function y() {
                    return (
                        (y =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        y.apply(this, arguments)
                    );
                }
                const x = {
                        [v.ExtraSmall]: '',
                        [v.Small]: b().SMALL_WIDTH,
                        [v.Medium]: `${b().SMALL_WIDTH} ${b().MEDIUM_WIDTH}`,
                        [v.Large]: `${b().SMALL_WIDTH} ${b().MEDIUM_WIDTH} ${b().LARGE_WIDTH}`,
                        [v.ExtraLarge]: `${b().SMALL_WIDTH} ${b().MEDIUM_WIDTH} ${b().LARGE_WIDTH} ${b().EXTRA_LARGE_WIDTH}`,
                    },
                    P = {
                        [w.ExtraSmall]: '',
                        [w.Small]: b().SMALL_HEIGHT,
                        [w.Medium]: `${b().SMALL_HEIGHT} ${b().MEDIUM_HEIGHT}`,
                        [w.Large]: `${b().SMALL_HEIGHT} ${b().MEDIUM_HEIGHT} ${b().LARGE_HEIGHT}`,
                        [w.ExtraLarge]: `${b().SMALL_HEIGHT} ${b().MEDIUM_HEIGHT} ${b().LARGE_HEIGHT} ${b().EXTRA_LARGE_HEIGHT}`,
                    },
                    L = {
                        [f.ExtraSmall]: '',
                        [f.Small]: b().SMALL,
                        [f.Medium]: `${b().SMALL} ${b().MEDIUM}`,
                        [f.Large]: `${b().SMALL} ${b().MEDIUM} ${b().LARGE}`,
                        [f.ExtraLarge]: `${b().SMALL} ${b().MEDIUM} ${b().LARGE} ${b().EXTRA_LARGE}`,
                    },
                    M = (e) => {
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
                        return s().createElement('div', y({ className: B()(t, x[n], P[o], L[i]) }, r), u);
                    },
                    N = ['children'],
                    k = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    a = {},
                                    n = Object.keys(e);
                                for (r = 0; r < n.length; r++) (t = n[r]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, N);
                        return s().createElement(D, null, s().createElement(M, t, u));
                    };
                var O = t(493),
                    I = t.n(O);
                let H;
                function W(e) {
                    engine.call('PlaySound', e);
                }
                !(function (e) {
                    e[(e.PROGRESSION = 0)] = 'PROGRESSION';
                })(H || (H = {}));
                const U = {
                        playHighlight() {
                            W('highlight');
                        },
                        playClick() {
                            W('play');
                        },
                        playYes() {
                            W('yes1');
                        },
                    },
                    G = {
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
                function z() {
                    return (
                        (z =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        z.apply(this, arguments)
                    );
                }
                class V extends s().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && W(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && W(this.props.soundClick);
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
                            d = e.onMouseUp,
                            m =
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
                                })(e, $)),
                            _ = B()(G.base, G[`base__${n}`], G[`base__${a}`], null == o ? void 0 : o.base),
                            E = B()(G.icon, G[`icon__${n}`], G[`icon__${a}`], null == o ? void 0 : o.icon),
                            A = B()(G.glow, null == o ? void 0 : o.glow),
                            g = B()(G.caption, G[`caption__${n}`], null == o ? void 0 : o.caption),
                            F = B()(G.goto, null == o ? void 0 : o.goto);
                        return s().createElement(
                            'div',
                            z(
                                {
                                    className: _,
                                    onMouseEnter: this._onMouseEnter(i),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(d),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                m,
                            ),
                            'info' !== n && s().createElement('div', { className: G.shine }),
                            s().createElement('div', { className: E }, s().createElement('div', { className: A })),
                            s().createElement('div', { className: g }, u),
                            r && s().createElement('div', { className: F }, r),
                        );
                    }
                }
                V.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var j = t(521),
                    X = t(364);
                const q = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function Y(e = j.n.NONE, u = q, t = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== j.n.NONE)
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
                var Q = t(515);
                const K = 'stage';
                let Z;
                !(function (e) {
                    (e.InProgress = 'inProgress'), (e.Completed = 'completed');
                })(Z || (Z = {}));
                const J = (e, u, t) => (t < e ? e : t > u ? u : t);
                function ee() {}
                function ue(e) {
                    return e;
                }
                function te() {
                    return !1;
                }
                console.log;
                var re = t(174);
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
                                    d = (t, r, a) => {
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
                                            d = (e) => c.current.push(e),
                                            m = e({
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
                                                cleanup: d,
                                            }),
                                            _ = { mode: t, model: m, externalModel: o, cleanup: d };
                                        return {
                                            model: m,
                                            controls: 'mocks' === t && a ? a.controls(_) : u(_),
                                            externalModel: o,
                                            mode: t,
                                        };
                                    },
                                    m = (0, n.useRef)(!1),
                                    _ = (0, n.useState)(r),
                                    E = _[0],
                                    A = _[1],
                                    g = (0, n.useState)(() => d(r, a, l)),
                                    F = g[0],
                                    p = g[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        m.current ? p(d(E, a, l)) : (m.current = !0);
                                    }, [l, E, a]),
                                    (0, n.useEffect)(() => {
                                        A(r);
                                    }, [r]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            F.externalModel.dispose(), c.current.forEach((e) => e());
                                        },
                                        [F],
                                    ),
                                    s().createElement(t.Provider, { value: F }, o)
                                );
                            },
                            () => (0, n.useContext)(t),
                        ];
                    };
                function oe(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                const ie = oe;
                function le(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, r) => u(null == e ? void 0 : e.value, t, r));
                }
                var ce = t(946);
                let de, me, _e, Ee, Ae, ge, Fe;
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
                        (e.SelectableBonus = 'selectableBonus'),
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
                        (e.WtStamp = 'stamp'),
                        (e.WtHunter = 'wt_hunter'),
                        (e.WtHunterCollection = 'hunter_collection'),
                        (e.WtTicket = 'wtevent_ticket'),
                        (e.WtMainPrizeDiscount = 'main_prize_discount');
                })(de || (de = {})),
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
                    })(me || (me = {})),
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
                    })(_e || (_e = {})),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(Ee || (Ee = {})),
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
                    })(Ae || (Ae = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(ge || (ge = {})),
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
                    })(Fe || (Fe = {}));
                const pe = [
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
                function De(e) {
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
                const Ce = (e, u, t = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: X.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: r,
                                },
                                t,
                            ),
                        );
                    },
                    Be = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            r = e.args,
                            a = e.onMouseEnter,
                            s = e.onMouseLeave,
                            o = e.onMouseDown,
                            i = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            d = e.ignoreMouseClick,
                            m = void 0 !== d && d,
                            _ = e.decoratorId,
                            E = void 0 === _ ? 0 : _,
                            A = e.isEnabled,
                            g = void 0 === A || A,
                            F = e.targetId,
                            p = void 0 === F ? 0 : F,
                            D = e.onShow,
                            C = e.onHide,
                            B = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    a = {},
                                    n = Object.keys(e);
                                for (r = 0; r < n.length; r++) (t = n[r]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, pe);
                        const h = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            b = (0, n.useMemo)(
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
                            f = (0, n.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (Ce(t, E, { isMouseEvent: !0, on: !0, arguments: De(r) }, b),
                                    D && D(),
                                    (h.current.isVisible = !0));
                            }, [t, E, r, b, D]),
                            v = (0, n.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const e = h.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (h.current.timeoutId = 0)),
                                        Ce(t, E, { on: !1 }, b),
                                        h.current.isVisible && C && C(),
                                        (h.current.isVisible = !1);
                                }
                            }, [t, E, b, C]),
                            w = (0, n.useCallback)((e) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(h.current.prevTarget) && v();
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
                                !1 === g && v();
                            }, [g, v]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', v),
                                    () => {
                                        window.removeEventListener('mouseleave', v), v();
                                    }
                                ),
                                [v],
                            ),
                            g
                                ? (0, n.cloneElement)(
                                      u,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((S = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((h.current.timeoutId = window.setTimeout(f, c ? 100 : 400)),
                                                          a && a(e),
                                                          S && S(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  v(), null == s || s(u), null == e || e(u);
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  !1 === m && v(), null == i || i(u), null == e || e(u);
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  !1 === m && v(), null == o || o(u), null == e || e(u);
                                              })(u.props.onMouseDown),
                                          },
                                          B,
                                      ),
                                  )
                                : u
                        );
                        var S;
                    },
                    he = ['children'];
                function be() {
                    return (
                        (be =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        be.apply(this, arguments)
                    );
                }
                const fe = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    a = {},
                                    n = Object.keys(e);
                                for (r = 0; r < n.length; r++) (t = n[r]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, he);
                        return s().createElement(
                            Be,
                            be(
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
                    ve = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function we() {
                    return (
                        (we =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        we.apply(this, arguments)
                    );
                }
                const Se = R.views.common.tooltip_window.simple_tooltip_content,
                    Te = (e) => {
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
                            })(e, ve);
                        const c = (0, n.useMemo)(() => {
                            const e = Object.assign({}, i, { body: t, header: r, note: a, alert: o });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [o, t, r, a, i]);
                        return s().createElement(
                            Be,
                            we(
                                {
                                    contentId:
                                        ((d = null == i ? void 0 : i.hasHtmlContent),
                                        d ? Se.SimpleTooltipHtmlContent('resId') : Se.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var d;
                    };
                function Re() {
                    return (
                        (Re =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Re.apply(this, arguments)
                    );
                }
                const ye = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const r = s().createElement('div', { className: t }, e);
                        if (u.header || u.body) return s().createElement(Te, u, r);
                        const a = u.contentId,
                            n = u.args,
                            o = null == n ? void 0 : n.contentId;
                        return a || o
                            ? s().createElement(Be, Re({}, u, { contentId: a || o }), r)
                            : s().createElement(fe, u, r);
                    },
                    xe = ({ format: e, value: u }) => {
                        const t = ((e, u = 'integral') => {
                            let t;
                            return (
                                (t = 'gold' === u ? X.B3.GOLD : X.B3.INTEGRAL),
                                void 0 === e ? '' : X.Z5.getNumberFormat(e, t)
                            );
                        })(u, e);
                        return t ? s().createElement('span', null, t) : null;
                    },
                    Pe = [
                        de.Items,
                        de.Equipment,
                        de.Xp,
                        de.XpFactor,
                        de.Blueprints,
                        de.BlueprintsAny,
                        de.Goodies,
                        de.Berths,
                        de.Slots,
                        de.Tokens,
                        de.CrewSkins,
                        de.CrewBooks,
                        de.Customizations,
                        de.CreditsFactor,
                        de.TankmenXp,
                        de.TankmenXpFactor,
                        de.FreeXpFactor,
                        de.BattleToken,
                        de.PremiumUniversal,
                        de.NaturalCover,
                        de.BpCoin,
                        de.BattlePassSelectToken,
                        de.BattlaPassFinalAchievement,
                        de.BattleBadge,
                        de.BonusX5,
                        de.CrewBonusX3,
                        de.NewYearFillers,
                        de.NewYearInvoice,
                        de.EpicSelectToken,
                        de.Comp7TokenWeeklyReward,
                        de.Comp7TokenCouponReward,
                        de.BattleBoosterGift,
                        de.CosmicLootboxCommon,
                        de.CosmicLootboxSilver,
                        de.SelectableBonus,
                        de.WtStamp,
                        de.WtTicket,
                        de.WtMainPrizeDiscount,
                        de.WtHunter,
                        de.WtHunterCollection,
                    ],
                    Le = [de.Gold, de.Credits, de.Crystal, de.FreeXp],
                    Me = [de.BattlePassPoints],
                    Ne = [de.PremiumPlus, de.Premium],
                    ke = ['engravings', 'backgrounds'],
                    Oe = ['engraving', 'background'],
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
                    He = {
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
                    We = ({
                        name: e,
                        image: u,
                        isPeriodic: t = !1,
                        size: r = _e.Big,
                        special: a,
                        value: n,
                        valueType: o,
                        style: i,
                        className: l,
                        classNames: c,
                        tooltipArgs: d,
                        periodicIconTooltipArgs: m,
                    }) => {
                        const _ = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case Ae.BATTLE_BOOSTER:
                                    case Ae.BATTLE_BOOSTER_REPLACE:
                                        return ge.BATTLE_BOOSTER;
                                }
                            })(a),
                            E = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case Ae.BATTLE_BOOSTER:
                                        return Fe.BATTLE_BOOSTER;
                                    case Ae.BATTLE_BOOSTER_REPLACE:
                                        return Fe.BATTLE_BOOSTER_REPLACE;
                                    case Ae.BUILT_IN_EQUIPMENT:
                                        return Fe.BUILT_IN_EQUIPMENT;
                                    case Ae.EQUIPMENT_PLUS:
                                        return Fe.EQUIPMENT_PLUS;
                                    case Ae.EQUIPMENT_TROPHY_BASIC:
                                        return Fe.EQUIPMENT_TROPHY_BASIC;
                                    case Ae.EQUIPMENT_TROPHY_UPGRADED:
                                        return Fe.EQUIPMENT_TROPHY_UPGRADED;
                                    case Ae.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return Fe.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case Ae.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return Fe.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case Ae.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return Fe.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case Ae.PROGRESSION_STYLE_UPGRADED_1:
                                        return Fe.PROGRESSION_STYLE_UPGRADED_1;
                                    case Ae.PROGRESSION_STYLE_UPGRADED_2:
                                        return Fe.PROGRESSION_STYLE_UPGRADED_2;
                                    case Ae.PROGRESSION_STYLE_UPGRADED_3:
                                        return Fe.PROGRESSION_STYLE_UPGRADED_3;
                                    case Ae.PROGRESSION_STYLE_UPGRADED_4:
                                        return Fe.PROGRESSION_STYLE_UPGRADED_4;
                                }
                            })(a),
                            A = ((e, u) => {
                                if (void 0 === e) return null;
                                switch (u) {
                                    case Ee.MULTI: {
                                        const u = Number(e);
                                        return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                                    }
                                    case Ee.CURRENCY:
                                    case Ee.NUMBER:
                                        return s().createElement(xe, { format: 'integral', value: Number(e) });
                                    case Ee.PREMIUM_PLUS: {
                                        const u = Number(e);
                                        return isNaN(u) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(n, o);
                        return s().createElement(
                            'div',
                            { className: B()(He.base, He[`base__${r}`], l), style: i },
                            s().createElement(
                                ye,
                                { tooltipArgs: d, className: He.tooltipWrapper },
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement(
                                        'div',
                                        { className: B()(He.image, null == c ? void 0 : c.image) },
                                        _ &&
                                            s().createElement('div', {
                                                className: B()(He.highlight, null == c ? void 0 : c.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${_}_highlight)`,
                                                },
                                            }),
                                        u &&
                                            s().createElement('div', {
                                                className: B()(He.icon, null == c ? void 0 : c.rewardIcon),
                                                style: { backgroundImage: `url(${u})` },
                                            }),
                                        E &&
                                            s().createElement('div', {
                                                className: B()(He.overlay, null == c ? void 0 : c.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${E}_overlay)`,
                                                },
                                            }),
                                    ),
                                    A &&
                                        s().createElement(
                                            'div',
                                            {
                                                className: B()(
                                                    He.info,
                                                    He[`info__${e}`],
                                                    o === Ee.MULTI && He.info__multi,
                                                    null == c ? void 0 : c.info,
                                                ),
                                            },
                                            A,
                                        ),
                                ),
                            ),
                            t &&
                                s().createElement(
                                    ye,
                                    { tooltipArgs: m },
                                    s().createElement('div', {
                                        className: B()(He.timer, null == c ? void 0 : c.periodicIcon),
                                    }),
                                ),
                        );
                    },
                    Ue = (e, u, t) => {
                        var r;
                        const a = e.$dyn(u);
                        return null != (r = null == a ? void 0 : a.$dyn(t)) ? r : null;
                    },
                    Ge = 'R.images.winback.gui.maps.icons';
                let $e;
                !(function (e) {
                    (e.SELECTABLE_VEHICLE_FOR_GIFT = 'selectableVehicleForGift'),
                        (e.SELECTABLE_VEHICLE_DISCOUNT = 'selectableVehicleDiscount');
                })($e || ($e = {}));
                const ze = (e, u = _e.Small) => {
                        const t = e.name;
                        if (e.isCompensation && t === de.Credits) return `${Ge}.quests.bonuses.${u}.${t}`;
                        switch (t) {
                            case $e.SELECTABLE_VEHICLE_FOR_GIFT:
                                return `${Ge}.progression.tank_reward`;
                            case $e.SELECTABLE_VEHICLE_DISCOUNT:
                                return `${Ge}.progression.tank_discount`;
                            default:
                                return ((e, u = _e.Small) => {
                                    const t = e.name,
                                        r = e.type,
                                        a = e.value,
                                        n = e.icon,
                                        s = e.item,
                                        o = e.dogTagType,
                                        i = ((e) => {
                                            switch (e) {
                                                case _e.S600x450:
                                                    return 'c_600x450';
                                                case _e.S400x300:
                                                    return 'c_400x300';
                                                case _e.S296x222:
                                                    return 'c_296x222';
                                                case _e.S232x174:
                                                    return 'c_232x174';
                                                case _e.Big:
                                                    return 'c_80x80';
                                                case _e.Small:
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
                                                    case _e.Big:
                                                        return e.iconBig.replace('..', 'img://gui');
                                                    case _e.Small:
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
                                        case 'selectableBonus':
                                            return `R.images.gui.maps.icons.quests.bonuses.${u}.${n}`;
                                        case 'crewBooks':
                                            return `R.images.gui.maps.icons.crewBooks.books.${u}.${n}`;
                                        case 'dogTagComponents':
                                            return ((e, u, t) => {
                                                const r = ke[e];
                                                if (r) {
                                                    const a = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(r),
                                                        n = a.$dyn(t);
                                                    return n ? `${n}` : `${a.$dyn(Oe[e])}`;
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
                        }
                    },
                    Ve = (e) => ('overlayType' in e ? e.overlayType : void 0),
                    je = (e, u) => {
                        const t = S(),
                            r = u || (t.mediaSize < f.Medium ? _e.Small : _e.Big);
                        return {
                            parsedRewards: le(e, ue).map((e) => {
                                return Object.assign({}, e, {
                                    special: Ve(e),
                                    image: ze(e, r),
                                    size: r,
                                    valueType:
                                        ((u = e.name),
                                        Pe.includes(u)
                                            ? Ee.MULTI
                                            : Le.includes(u)
                                              ? Ee.CURRENCY
                                              : Me.includes(u)
                                                ? Ee.NUMBER
                                                : Ne.includes(u)
                                                  ? Ee.PREMIUM_PLUS
                                                  : Ee.STRING),
                                    tooltipArgs: Ie({ tooltipId: e.tooltipId, tooltipContentId: e.tooltipContentId }),
                                });
                                var u;
                            }),
                            imageSize: r,
                        };
                    },
                    Xe = {
                        base: 'Separator_base_cf',
                        separator: 'Separator_separator_b9',
                        separator__fixedSize: 'Separator_separator__fixedSize_43',
                        base__completedBattleQuests: 'Separator_base__completedBattleQuests_a7',
                        separator__left: 'Separator_separator__left_c8',
                        base__inProgressBattleQuests: 'Separator_base__inProgressBattleQuests_58',
                        base__condition: 'Separator_base__condition_62',
                        base__awards: 'Separator_base__awards_c7',
                        base__completed: 'Separator_base__completed_de',
                        show: 'Separator_show_fa',
                        base__completedWasVisited: 'Separator_base__completedWasVisited_7b',
                        separator__right: 'Separator_separator__right_26',
                        ellipse: 'Separator_ellipse_cc',
                        firstLayer: 'Separator_firstLayer_d5',
                        secondLayer: 'Separator_secondLayer_20',
                        'add-blur': 'Separator_add-blur_40',
                        hide: 'Separator_hide_19',
                    };
                let qe;
                !(function (e) {
                    (e.Awards = 'awards'),
                        (e.Condition = 'condition'),
                        (e.CompletedBattleQuests = 'completedBattleQuests'),
                        (e.InProgressBattleQuests = 'inProgressBattleQuests');
                })(qe || (qe = {}));
                const Ye = ({ children: e, statusAnimation: u, isFixedSize: t, type: r }) =>
                        s().createElement(
                            'div',
                            { className: B()(Xe.base, Xe[`base__${r}`], Xe[`base__${u}`]) },
                            s().createElement(
                                'div',
                                { className: B()(Xe.separator, Xe.separator__left, t && Xe.separator__fixedSize) },
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
                                { className: B()(Xe.separator, Xe.separator__right, t && Xe.separator__fixedSize) },
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
                    Qe = {
                        base: 'TaskBattle_base_3d',
                        base__completed: 'TaskBattle_base__completed_2b',
                        'add-shadow': 'TaskBattle_add-shadow_35',
                        base__completedWasVisited: 'TaskBattle_base__completedWasVisited_32',
                        taskType: 'TaskBattle_taskType_62',
                        conditions: 'TaskBattle_conditions_33',
                        base__mediaMediumHeight: 'TaskBattle_base__mediaMediumHeight_ca',
                        awards: 'TaskBattle_awards_6b',
                        'add-blur': 'TaskBattle_add-blur_bf',
                        awardsList: 'TaskBattle_awardsList_13',
                        award: 'TaskBattle_award_87',
                        hide: 'TaskBattle_hide_19',
                        show: 'TaskBattle_show_08',
                    };
                let Ke;
                function Ze(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(Ke || (Ke = {}));
                const Je = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    eu = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    uu = (e, u, t = Ke.left) => e.split(u).reduce(t === Ke.left ? Je : eu, []),
                    tu = (() => {
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
                    ru = ['zh_cn', 'zh_sg', 'zh_tw'],
                    au = (e, u, t) =>
                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                            t && e in t
                                ? t[e]
                                : ((e, u = Ke.left) => {
                                      const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                      return ru.includes(t)
                                          ? tu(e)
                                          : ((e, u = Ke.left) => {
                                                let t = [];
                                                const r =
                                                        /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                    a = e.replace(/&nbsp;/g, ' ');
                                                return (
                                                    uu(a, /( )/, u).forEach((e) => (t = t.concat(uu(e, r, Ke.left)))), t
                                                );
                                            })(e, u);
                                  })(e, u),
                        ),
                    nu = ({ binding: e, text: u = '', classMix: t, alignment: r = Ke.left }) =>
                        null === u
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : s().createElement(
                                  n.Fragment,
                                  null,
                                  u.split('\n').map((u, a) =>
                                      s().createElement(
                                          'div',
                                          { className: B()('FormatText_base_d0', t), key: `${u}-${a}` },
                                          au(u, r, e).map((e, u) =>
                                              s().createElement(n.Fragment, { key: `${u}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              ),
                    su = {
                        base: 'ProgressBar_base_45',
                        base__medium: 'ProgressBar_base__medium_62',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__medium: 'ProgressBar_background__medium_6e',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let ou, iu;
                !(function (e) {
                    (e.Small = 'small'), (e.Medium = 'medium'), (e.Big = 'big'), (e.Default = 'big');
                })(ou || (ou = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(iu || (iu = {}));
                const lu = ({ size: e = ou.Default }) =>
                        s().createElement('div', { className: B()(su.background, su[`background__${e}`]) }),
                    cu = {
                        base: 'ProgressBarBlink_base_24',
                        base__medium: 'ProgressBarBlink_base__medium_ec',
                        base__small: 'ProgressBarBlink_base__small_0f',
                    },
                    du = ({ size: e }) => {
                        const u = B()(cu.base, cu[`base__${e}`]);
                        return s().createElement('div', { className: u });
                    },
                    mu = {
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
                    _u = (0, n.memo)(
                        ({ size: e, lineRef: u, disabled: t, baseStyles: r, isComplete: a, withoutBounce: n }) => {
                            const o = B()(
                                    mu.base,
                                    mu[`base__${e}`],
                                    t && mu.base__disabled,
                                    a && mu.base__finished,
                                    n && mu.base__withoutBounce,
                                ),
                                i = !t && !a;
                            return s().createElement(
                                'div',
                                { className: o, style: r, ref: u },
                                s().createElement('div', { className: mu.pattern }),
                                s().createElement('div', { className: mu.gradient }),
                                i && s().createElement(du, { size: e }),
                            );
                        },
                    ),
                    Eu = ({ size: e, value: u, lineRef: t, disabled: r, onComplete: a }) => {
                        const o = (0, n.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                            i = 100 === u;
                        return (
                            (0, n.useEffect)(() => {
                                i && a && a();
                            }, [i, a]),
                            s().createElement(_u, { size: e, disabled: r, baseStyles: o, isComplete: i, lineRef: t })
                        );
                    },
                    Au = (e, u) => {
                        let t;
                        const r = setTimeout(() => {
                            t = e();
                        }, u);
                        return () => {
                            'function' == typeof t && t(), clearTimeout(r);
                        };
                    };
                let gu, Fu;
                !(function (e) {
                    (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
                })(gu || (gu = {})),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                    })(Fu || (Fu = {}));
                const pu = (0, n.memo)(
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
                                d = (0, n.useState)(Fu.Idle),
                                m = d[0],
                                _ = d[1],
                                E = m === Fu.In,
                                A = m === Fu.End,
                                g = m === Fu.Idle,
                                F = (0, n.useCallback)(
                                    (e) => {
                                        _(e), l && l(e);
                                    },
                                    [l],
                                );
                            (0, n.useEffect)(() => {
                                if (g && !t)
                                    return Au(() => {
                                        F(Fu.In);
                                    }, u);
                            }, [F, t, g, u]),
                                (0, n.useEffect)(() => {
                                    if (E)
                                        return Au(() => {
                                            i && i(), F(Fu.End);
                                        }, e + u);
                                }, [F, E, i, u, e]);
                            const p = (0, n.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                D = (0, n.useMemo)(
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
                                          { style: g ? p : D, className: 'ProgressBarDeltaSimple_delta_99' },
                                          s().createElement(du, { size: a }),
                                      ),
                                  );
                        },
                    ),
                    Du = (0, n.memo)(
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
                            const d = (0, n.useMemo)(
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
                                s().createElement(_u, {
                                    size: u,
                                    lineRef: r,
                                    disabled: a,
                                    isComplete: o,
                                    baseStyles: d,
                                }),
                                t >= 0 &&
                                    s().createElement(pu, {
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
                    Cu = (e) => (e ? { left: 0 } : { right: 0 }),
                    Bu = (e, u) => (e ? { right: 100 - u + '%' } : { left: `${u}%` }),
                    hu = (e) => ({ transitionDuration: `${e}ms` }),
                    bu = (0, n.memo)(
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
                            const d = o < r,
                                m = (0, n.useState)(gu.Idle),
                                _ = m[0],
                                E = m[1],
                                A = _ === gu.End,
                                g = _ === gu.Idle,
                                F = _ === gu.Grow,
                                p = _ === gu.Shrink,
                                D = (0, n.useCallback)(
                                    (e) => {
                                        E(e), l && l(e);
                                    },
                                    [l],
                                ),
                                C = (0, n.useCallback)(
                                    (e, u) =>
                                        Au(() => {
                                            D(e);
                                        }, u),
                                    [D],
                                );
                            (0, n.useEffect)(() => {
                                if (!t)
                                    return g
                                        ? C(gu.Grow, u)
                                        : F
                                          ? C(gu.Shrink, e)
                                          : p
                                            ? C(gu.End, e)
                                            : void (A && i && i());
                            }, [C, t, A, F, g, p, i, u, e]);
                            const h = (0, n.useMemo)(() => Object.assign({ width: '100%' }, hu(e), Cu(d)), [d, e]),
                                b = (0, n.useMemo)(() => Object.assign({ width: '0%' }, hu(e), Cu(d)), [d, e]),
                                f = (0, n.useMemo)(() => Object.assign({ width: '0%' }, Bu(d, r), hu(e)), [r, d, e]),
                                v = (0, n.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(o - r)}%` }, Bu(d, r), hu(e)),
                                    [r, d, o, e],
                                );
                            if (A) return null;
                            const w = B()(
                                'ProgressBarDeltaGrow_base_7e',
                                c,
                                d && 0 === o && 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                            );
                            return s().createElement(
                                'div',
                                { style: g ? f : v, className: w },
                                s().createElement(
                                    'div',
                                    { style: p ? b : h, className: 'ProgressBarDeltaGrow_glow_68' },
                                    s().createElement(du, { size: a }),
                                ),
                            );
                        },
                    ),
                    fu = (0, n.memo)(
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
                            const d = e < t,
                                m = (0, n.useState)(!1),
                                _ = m[0],
                                E = m[1],
                                A = (0, n.useCallback)(
                                    (e) => {
                                        e === gu.Shrink && E(!0), c && c(e);
                                    },
                                    [c],
                                ),
                                g = (0, n.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                F = (0, n.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${i.line.duration}ms` }),
                                    [i.line.duration, e],
                                );
                            return s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(_u, {
                                    size: u,
                                    lineRef: r,
                                    disabled: a,
                                    isComplete: o,
                                    withoutBounce: d && 0 === e,
                                    baseStyles: _ ? F : g,
                                }),
                                t >= 0 &&
                                    s().createElement(bu, {
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
                    vu = ['onComplete', 'onEndAnimation'];
                function wu() {
                    return (
                        (wu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        wu.apply(this, arguments)
                    );
                }
                const Su = (0, n.memo)((e) => {
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
                            })(e, vu);
                        const a = (0, n.useState)(!1),
                            o = a[0],
                            i = a[1],
                            l = (0, n.useCallback)(() => {
                                const e = 100 === r.to;
                                e !== o && i(e), e && u && u(), t && t();
                            }, [o, u, t, r.to]);
                        switch (r.animationSettings.type) {
                            case iu.Simple:
                                return s().createElement(Du, wu({}, r, { onEndAnimation: l, isComplete: o }));
                            case iu.Growing:
                                return s().createElement(fu, wu({}, r, { onEndAnimation: l, isComplete: o }));
                            default:
                                return null;
                        }
                    }),
                    Tu = ['onEndAnimation'];
                function Ru() {
                    return (
                        (Ru =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Ru.apply(this, arguments)
                    );
                }
                const yu = (0, n.memo)((e) => {
                    let u = e.onEndAnimation,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                r,
                                a = {},
                                n = Object.keys(e);
                            for (r = 0; r < n.length; r++) (t = n[r]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                            return a;
                        })(e, Tu);
                    const r = (0, n.useRef)({}),
                        a = (0, n.useCallback)(() => {
                            (r.current.from = void 0), u && u();
                        }, [u]),
                        o = 'number' == typeof r.current.from ? r.current.from : t.from;
                    return (
                        (r.current.from = o),
                        s().createElement(Su, Ru({}, t, { onEndAnimation: a, key: `${o}-${t.to}`, from: o }))
                    );
                });
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
                const Pu = (0, n.memo)(
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
                                return s().createElement(Eu, {
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
                                ? s().createElement(yu, c)
                                : s().createElement(Su, xu({ key: `${a}-${u}` }, c));
                        },
                    ),
                    Lu = (e) => ({
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
                    Mu = (e, u, t) => ('number' == typeof t ? (J(0, u, t) / u) * 100 : e),
                    Nu = {
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
                    ku = {
                        freezed: !1,
                        withStack: !1,
                        type: iu.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    Ou = (0, n.memo)(
                        ({
                            maxValue: e = 100,
                            theme: u = Nu,
                            size: t = ou.Default,
                            animationSettings: r = ku,
                            disabled: a = !1,
                            withoutBackground: o = !1,
                            value: i,
                            deltaFrom: l,
                            lineRef: c,
                            onChangeAnimationState: d,
                            onEndAnimation: m,
                            onComplete: _,
                        }) => {
                            const E = ((e, u, t) =>
                                (0, n.useMemo)(() => {
                                    const r = (J(0, u, e) / u) * 100;
                                    return { value: r, deltaFrom: Mu(r, u, t) };
                                }, [t, u, e]))(i, e, l);
                            return s().createElement(
                                'div',
                                { className: B()(su.base, su[`base__${t}`]), style: Lu(u) },
                                !o && s().createElement(lu, { size: t }),
                                s().createElement(Pu, {
                                    size: t,
                                    lineRef: c,
                                    disabled: a,
                                    value: E.value,
                                    deltaFrom: E.deltaFrom,
                                    animationSettings: r,
                                    onEndAnimation: m,
                                    onChangeAnimationState: d,
                                    onComplete: _,
                                }),
                            );
                        },
                    ),
                    Iu = {
                        base: 'Progression_base_8d',
                        base__completedWasVisited: 'Progression_base__completedWasVisited_ad',
                        progression: 'Progression_progression_02',
                        base__completed: 'Progression_base__completed_8b',
                        hide: 'Progression_hide_ca',
                        progressionNumerical: 'Progression_progressionNumerical_bb',
                        progressionNumerical__mediaMediumHeight:
                            'Progression_progressionNumerical__mediaMediumHeight_08',
                        'finish-color': 'Progression_finish-color_0f',
                        currentValue__inProgress: 'Progression_currentValue__inProgress_2c',
                        currentValue: 'Progression_currentValue_81',
                        separator: 'Progression_separator_8c',
                        progressBar: 'Progression_progressBar_92',
                        progressBar__mediaMediumHeight: 'Progression_progressBar__mediaMediumHeight_f5',
                        'add-blur': 'Progression_add-blur_a1',
                        show: 'Progression_show_75',
                        'default-color': 'Progression_default-color_dd',
                    },
                    Hu = ({
                        currentValue: e,
                        maxValue: u,
                        lastValue: t,
                        statusAnimation: r,
                        updateStatusAnimation: a,
                    }) => {
                        const n = S(),
                            o = n.mediaSize === f.Medium && n.remScreenHeight >= 1024;
                        return s().createElement(
                            'div',
                            { className: B()(Iu.base, Iu[`base__${r}`]) },
                            s().createElement(
                                'div',
                                { className: Iu.progression },
                                s().createElement(
                                    'div',
                                    {
                                        className: B()(
                                            Iu.progressionNumerical,
                                            o && Iu.progressionNumerical__mediaMediumHeight,
                                        ),
                                    },
                                    s().createElement(
                                        'span',
                                        { className: B()(Iu.currentValue, Boolean(e) && Iu.currentValue__inProgress) },
                                        e,
                                    ),
                                    s().createElement(
                                        'span',
                                        { className: Iu.separator },
                                        R.strings.common.common.slash(),
                                    ),
                                    s().createElement('span', null, u),
                                ),
                                Boolean(e) &&
                                    s().createElement(
                                        'div',
                                        { className: B()(Iu.progressBar, o && Iu.progressBar__mediaMediumHeight) },
                                        s().createElement(Ou, {
                                            size: ou.Small,
                                            value: e,
                                            deltaFrom: e - t,
                                            maxValue: u,
                                            onComplete: a,
                                        }),
                                    ),
                            ),
                        );
                    },
                    Wu = {
                        base: 'TaskCondition_base_e9',
                        condition: 'TaskCondition_condition_e1',
                        text: 'TaskCondition_text_69',
                        text__completed: 'TaskCondition_text__completed_4b',
                        'update-condition': 'TaskCondition_update-condition_4a',
                        text__completedWasVisited: 'TaskCondition_text__completedWasVisited_fc',
                        'add-blur': 'TaskCondition_add-blur_56',
                        hide: 'TaskCondition_hide_c3',
                        show: 'TaskCondition_show_46',
                    },
                    Uu = { 0: 'firstCondition', 1: 'secondCondition' },
                    Gu = (e) => ('secondCondition' in e ? 'multiConditions' : 'oneCondition'),
                    $u = R.strings.winback.progressionView.battleQuests,
                    zu = (0, Q.Pi)(
                        ({
                            conditions: e,
                            setStatusAnimation: u,
                            statusAnimation: t,
                            progression: r,
                            conditionIndex: a,
                        }) => {
                            const o = et().model.computes.missionCompletedVisitedStatus,
                                i = (0, n.useCallback)(() => {
                                    u(o(a));
                                }, [a, o, u]),
                                l = Object.assign({}, r, { statusAnimation: t, updateStatusAnimation: i }),
                                c = r.maxValue,
                                d = r.status,
                                m = 0 === c;
                            return (
                                (0, n.useEffect)(() => {
                                    d === Ku ? m && i() : u(qu.inProgress);
                                }, [m, u, d, i]),
                                s().createElement(
                                    'div',
                                    { className: Wu.base },
                                    s().createElement(
                                        'div',
                                        { className: Wu.condition },
                                        s().createElement(nu, {
                                            text: `${$u.$dyn(Gu(e))}`,
                                            classMix: B()(Wu.text, Wu[`text__${t}`]),
                                            binding: Object.assign({}, e),
                                        }),
                                        Boolean(c) && s().createElement(Hu, l),
                                    ),
                                )
                            );
                        },
                    ),
                    Vu = {
                        base: 'TaskType_base_c2',
                        ellipse: 'TaskType_ellipse_17',
                        base__completed: 'TaskType_base__completed_69',
                        hide: 'TaskType_hide_8f',
                        base__completedWasVisited: 'TaskType_base__completedWasVisited_a6',
                        typeIcon: 'TaskType_typeIcon_3e',
                        completedIcon: 'TaskType_completedIcon_a2',
                        'slide-down': 'TaskType_slide-down_55',
                        'add-blur': 'TaskType_add-blur_fb',
                        show: 'TaskType_show_5c',
                    },
                    ju = ({ taskBattleIcon: e, statusAnimation: u }) =>
                        s().createElement(
                            'div',
                            { className: B()(Vu.base, Vu[`base__${u}`]) },
                            s().createElement('div', { className: Vu.ellipse }),
                            s().createElement('div', {
                                className: Vu.typeIcon,
                                style: { backgroundImage: `url('${R.images.gui.maps.icons.missions.daily.$dyn(e)}')` },
                            }),
                            s().createElement('div', { className: Vu.completedIcon }),
                        );
                function Xu() {
                    return (
                        (Xu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Xu.apply(this, arguments)
                    );
                }
                const qu = {
                        inProgress: 'inProgress',
                        completed: 'completed',
                        completedWasVisited: 'completedWasVisited',
                        allCompletedTasksVisited: 'allCompletedTasksVisited',
                    },
                    Yu = s().memo(({ taskConditions: e, awardsBattle: u, taskBattleIcon: t, index: r }) => {
                        const a = (0, n.useState)(qu.inProgress),
                            o = a[0],
                            i = a[1],
                            l = S(),
                            c = je(u, _e.Small).parsedRewards;
                        return s().createElement(
                            'div',
                            {
                                className: B()(
                                    Qe.base,
                                    Qe[`base__${o}`],
                                    l.mediaSize === f.Medium && l.remScreenHeight >= 1024 && Qe.base__mediaMediumHeight,
                                ),
                            },
                            s().createElement(
                                'div',
                                { className: Qe.taskType },
                                s().createElement(ju, { taskBattleIcon: t, statusAnimation: o }),
                            ),
                            s().createElement(
                                'div',
                                { className: Qe.conditions },
                                e.map(({ conditions: e, progression: u }) =>
                                    s().createElement(zu, {
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
                                { className: Qe.awards },
                                s().createElement(
                                    Ye,
                                    { statusAnimation: o, type: qe.Awards, isFixedSize: !0 },
                                    s().createElement(
                                        'div',
                                        { className: Qe.awardsList },
                                        c.map((e) =>
                                            s().createElement(We, Xu({ className: Qe.award, key: e.name }, e)),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    });
                let Qu;
                !(function (e) {
                    (e[(e.Scrolling = 0)] = 'Scrolling'),
                        (e[(e.ProgressChange = 1)] = 'ProgressChange'),
                        (e[(e.HighlightCard = 2)] = 'HighlightCard'),
                        (e[(e.ChangeCompleted = 3)] = 'ChangeCompleted'),
                        (e[(e.ProgressFinished = 4)] = 'ProgressFinished'),
                        (e[(e.ProgressAlreadyFinished = 5)] = 'ProgressAlreadyFinished');
                })(Qu || (Qu = {}));
                const Ku = 'done',
                    Zu = se()(
                        ({ observableModel: e }) => {
                            const u = Object.assign(
                                    {
                                        root: e.object(),
                                        currentTimerDate: e.primitives(['currentTimerDate'], 'battleQuests'),
                                        missionsCompletedVisited: e.array('battleQuests.missionsCompletedVisited'),
                                        progressLevels: e.array('progressLevels'),
                                    },
                                    e.primitives([
                                        'state',
                                        'curProgressPoints',
                                        'prevProgressPoints',
                                        'pointsForLevel',
                                        'isClaimRewardsAvailable',
                                        'progressionName',
                                    ]),
                                    { progressAnimationState: re.LO.box(Qu.Scrolling) },
                                ),
                                t = (0, ce.Om)(() => u.state.get() === Z.Completed),
                                r = (0, ce.Om)(() => Math.floor(u.curProgressPoints.get() / u.pointsForLevel.get()), {
                                    equals: te,
                                }),
                                a = (0, ce.Om)(() => Math.floor(u.prevProgressPoints.get() / u.pointsForLevel.get()), {
                                    equals: te,
                                }),
                                n = (0, ce.Om)(() => ({ wasProgressionVisited: a() === r() }), { equals: te }),
                                s = (0, ce.Om)(
                                    (e) =>
                                        J(
                                            0,
                                            u.pointsForLevel.get(),
                                            u.curProgressPoints.get() - e * u.pointsForLevel.get(),
                                        ),
                                    { equals: te },
                                ),
                                o = (0, ce.Om)(
                                    () =>
                                        le(u.root.get().battleQuests.tasksBattle, (e) => {
                                            const u = ((e, u, t, r) => {
                                                const a = {};
                                                let n = {},
                                                    s = '';
                                                return (
                                                    ((e, u, t) => {
                                                        const r = [];
                                                        if ('or' === e.conditionType || 'and' === e.conditionType)
                                                            e.items.forEach((e) => {
                                                                const a =
                                                                        (s = e) &&
                                                                        'value' in s &&
                                                                        null != (o = s.constructor) &&
                                                                        o.name.includes('ArrayItem')
                                                                            ? null == s
                                                                                ? void 0
                                                                                : s.value
                                                                            : s,
                                                                    n = oe(u, 0);
                                                                var s, o;
                                                                if (a) {
                                                                    const e = a,
                                                                        u = e.current,
                                                                        s = e.total,
                                                                        o = e.earned,
                                                                        i = e.iconKey;
                                                                    r.push({
                                                                        condition: t,
                                                                        lastValue: o,
                                                                        currentValue:
                                                                            (null == n ? void 0 : n.current) || u,
                                                                        maxValue: (null == n ? void 0 : n.total) || s,
                                                                        icon: i,
                                                                    });
                                                                }
                                                            });
                                                        else {
                                                            const t = e.descrData;
                                                            let a = e,
                                                                n = a.titleData,
                                                                s = a.current,
                                                                o = a.total,
                                                                i = a.earned,
                                                                l = a.iconKey;
                                                            const c = oe(u, 0);
                                                            c &&
                                                                ((n = t || c.descrData),
                                                                (l = l || c.iconKey),
                                                                (s = c.current),
                                                                (o = c.total),
                                                                (i = c.earned)),
                                                                0 === o && (n = t),
                                                                r.push({
                                                                    condition: n,
                                                                    lastValue: i,
                                                                    currentValue: s,
                                                                    maxValue: o,
                                                                    icon: l,
                                                                });
                                                        }
                                                        return r;
                                                    })(e, u, r).forEach(
                                                        (
                                                            {
                                                                condition: e,
                                                                lastValue: u,
                                                                currentValue: t,
                                                                maxValue: r,
                                                                icon: o,
                                                            },
                                                            i,
                                                        ) => {
                                                            (a[Uu[i]] = ((e, u) =>
                                                                au(e, Ke.left)
                                                                    .flat()
                                                                    .map(
                                                                        (e, t) => (
                                                                            0 === t && u > 0 && (e = e.toLowerCase()), e
                                                                        ),
                                                                    ))(e, i)),
                                                                (s = o),
                                                                (n = { lastValue: u, currentValue: t, maxValue: r });
                                                        },
                                                    ),
                                                    {
                                                        taskConditions: [
                                                            {
                                                                conditions: a,
                                                                progression: Object.assign({ status: t }, n),
                                                            },
                                                        ],
                                                        taskBattleIcon: s,
                                                    }
                                                );
                                            })(e.postBattleCondition, e.bonusCondition.items, e.status, e.description);
                                            return Object.assign({}, u, { awardsBattle: e.bonuses });
                                        }),
                                    { equals: te },
                                ),
                                i = (0, ce.Om)(() => 3 >= o().length, { equals: te }),
                                l = (0, ce.Om)(
                                    () =>
                                        3 ===
                                        o()
                                            .map((e) => e.taskConditions.filter((e) => e.progression.status === Ku))
                                            .filter((e) => e.length > 0).length,
                                    { equals: te },
                                ),
                                c = (0, ce.Om)(
                                    () => {
                                        let e = 0;
                                        return (
                                            o().forEach((u) => {
                                                u.taskConditions[0].progression.status === Ku && ++e;
                                            }),
                                            e
                                        );
                                    },
                                    { equals: te },
                                ),
                                d = (0, ce.Om)(
                                    () => {
                                        const e = r(),
                                            t = u.progressLevels.get();
                                        return le(
                                            u.progressLevels.get(),
                                            ({ rewards: u, isSelectableReward: r }, a) => ({
                                                level: a + 1,
                                                isCompleted: a < e,
                                                isActive: a === e,
                                                isLast: a === t.length - 1,
                                                rewards: le(u, ue),
                                                isSelectableReward: r,
                                            }),
                                        ).map(ue);
                                    },
                                    { equals: te },
                                ),
                                m = (0, ce.Om)(
                                    () => {
                                        const e = o();
                                        for (let u = 0; u < e.length; u++)
                                            if (e[u].taskConditions[0].progression.status !== Ku) return qu.inProgress;
                                        return (function (e, u) {
                                            if (Array.isArray(e)) return e.every(u);
                                            for (let u = 0; u < e.length; u++) if (!ie(e, u)) return !1;
                                            return !0;
                                        })(u.missionsCompletedVisited.get(), (e) => e)
                                            ? qu.allCompletedTasksVisited
                                            : qu.completed;
                                    },
                                    { equals: te },
                                ),
                                _ = (0, ce.Om)(
                                    (e) => {
                                        const t = ie(o(), e).taskConditions[0].progression.status,
                                            r = u.missionsCompletedVisited.get()[e].value;
                                        return t !== Ku ? qu.inProgress : r ? qu.completedWasVisited : qu.completed;
                                    },
                                    { equals: te },
                                ),
                                E = (0, ce.Om)(
                                    () => {
                                        const e = u.pointsForLevel.get() * u.progressLevels.get().length;
                                        return u.curProgressPoints.get() >= e;
                                    },
                                    { equals: te },
                                ),
                                A = (0, ce.Om)(() => E() && u.curProgressPoints.get() === u.prevProgressPoints.get(), {
                                    equals: te,
                                });
                            return Object.assign({}, u, u.currentTimerDate, {
                                computes: {
                                    levels: d,
                                    battleQuests: o,
                                    currentLevel: r,
                                    levelStatus: n,
                                    currentPointsForLevel: s,
                                    battleTasksStatus: m,
                                    isProgressionCompleted: E,
                                    wasProgressionCompletedBeforeStart: A,
                                    missionCompletedVisitedStatus: _,
                                    areDefaultNumberQuests: i,
                                    numberCompletedQuests: c,
                                    isComplete: t,
                                    isAllBattleQuestsCompleted: l,
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
                                finishScrolling: () => u.progressAnimationState.set(Qu.ProgressChange),
                                finishProgressionChange: () => u.progressAnimationState.set(Qu.HighlightCard),
                                finishHighlightCard: () => u.progressAnimationState.set(Qu.ChangeCompleted),
                                completeProgression: (e) =>
                                    u.progressAnimationState.set(e ? Qu.ProgressAlreadyFinished : Qu.ProgressFinished),
                            });
                            return Object.assign({}, t, {
                                onClose: e.createCallbackNoArgs('onClose'),
                                onAboutClicked: e.createCallbackNoArgs('onAboutClicked'),
                                onShowSelectableRewardView: e.createCallback(
                                    (e) => ({ [K]: e }),
                                    'onShowSelectableRewardView',
                                ),
                                onShowSelectableRewardsView: e.createCallback(
                                    () => ({ [K]: -1 }),
                                    'onShowSelectableRewardView',
                                ),
                            });
                        },
                    ),
                    Ju = Zu[0],
                    et = Zu[1];
                let ut, tt, rt;
                var at;
                !(function (e) {
                    (e.Timer = 'timer'), (e.Countdown = 'countdown'), (e.Cooldown = 'cooldown'), (e.None = 'none');
                })(ut || (ut = {})),
                    (function (e) {
                        (e.Description = 'description'),
                            (e.Short = 'short'),
                            (e.Long = 'long'),
                            (e.Extended = 'extended');
                    })(tt || (tt = {})),
                    ((at = rt || (rt = {})).SHORT_DATE = 'short-date'),
                    (at.SHORT_TIME = 'short-time'),
                    (at.SHORT_DATE_TIME = 'short-date-time'),
                    (at.FULL_DATE = 'full-date'),
                    (at.FULL_DATE_TIME = 'full-date-time'),
                    (at.MONTH = 'month'),
                    (at.MONTH_DATE = 'month-date'),
                    (at.DATE_MONTH = 'date-month'),
                    (at.MONTH_YEAR = 'month-year'),
                    (at.WEEK_DAY = 'week-day'),
                    (at.WEEK_DAY_TIME = 'week-day-time'),
                    (at.YEAR = 'year'),
                    (at.DATE_YEAR = 'date-year');
                function nt(e = 0) {
                    let u = e;
                    const t = Math.trunc(u / 86400);
                    u -= 86400 * t;
                    const r = Math.trunc(u / 3600);
                    u -= 3600 * r;
                    const a = Math.trunc(u / 60);
                    return (u -= 60 * a), { days: t, hours: r, minutes: a, seconds: u };
                }
                Date.now();
                const st = () => {};
                let ot;
                X.Sw.instance,
                    (function (e) {
                        (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                    })(ot || (ot = {})),
                    X.Sw.instance;
                const it = (e = 0, u, t = 0, r = st) => {
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
                    lt = 'Countdown_description_8d',
                    ct = (e) => e.toString().padStart(2, '0'),
                    dt = R.images.gui.maps.icons.components.countdown,
                    mt = (e, u) => {
                        const t = 2 === u ? dt.big : dt;
                        switch (e) {
                            case ut.Timer:
                                return t.clock();
                            case ut.Countdown:
                                return t.hourglass();
                            case ut.Cooldown:
                                return t.lock();
                        }
                    },
                    _t = (0, n.memo)(
                        ({
                            duration: e,
                            icon: u = ut.Timer,
                            style: t = tt.Description,
                            onTimeReached: r,
                            className: a = '',
                            classNames: o = {},
                            labelFormat: l = '',
                        }) => {
                            const c = t !== tt.Description ? 1 : void 0,
                                d = it(e, c),
                                m = (() => {
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
                            r && r[d] && r[d]();
                            const _ = ((e, u) => {
                                switch (u) {
                                    case tt.Description:
                                        return ((e, u = !0) =>
                                            e.days > 7 && u
                                                ? Ze(R.strings.common.duration.days(), { days: e.days })
                                                : e.days >= 1
                                                  ? 0 === e.hours
                                                      ? Ze(R.strings.common.duration.days(), { days: e.days })
                                                      : `${Ze(R.strings.common.duration.days(), { days: e.days })} ${Ze(R.strings.common.duration.hours(), { hours: e.hours })}`
                                                  : e.hours >= 1
                                                    ? 0 === e.minutes
                                                        ? Ze(R.strings.common.duration.hours(), { hours: e.hours })
                                                        : `${Ze(R.strings.common.duration.hours(), { hours: e.hours })} ${Ze(R.strings.common.duration.minutes(), { minutes: e.minutes })}`
                                                    : Ze(R.strings.common.duration.minutes(), {
                                                          minutes: e.minutes || 1,
                                                      }))(e);
                                    case tt.Short:
                                        return `${ct(e.minutes)}:${ct(e.seconds)}`;
                                    case tt.Long:
                                        return `${ct(e.hours)}:${ct(e.minutes)}:${ct(e.seconds)}`;
                                    case tt.Extended:
                                        return `${Ze(R.strings.common.duration.days(), { days: e.days })} | ${ct(e.hours)}:${ct(e.minutes)}:${ct(e.seconds)}`;
                                }
                            })(nt(d), t);
                            return s().createElement(
                                'div',
                                { className: B()('Countdown_base_fe', a) },
                                u !== ut.None &&
                                    s().createElement('div', {
                                        className: B()('Countdown_icon_8b', o.icon),
                                        style: { backgroundImage: `url('${mt(u, m)}')` },
                                    }),
                                l
                                    ? s().createElement(
                                          'div',
                                          { className: B()(lt, o.text) },
                                          s().createElement(nu, { text: l, binding: { timerText: _ } }),
                                      )
                                    : s().createElement('div', { className: B()(lt, o.text) }, _),
                            );
                        },
                    ),
                    Et = {
                        base: 'Timer_base_7e',
                        timer: 'Timer_timer_66',
                        base__small: 'Timer_base__small_6e',
                        block: 'Timer_block_36',
                        base__big: 'Timer_base__big_e8',
                        bgCountdown: 'Timer_bgCountdown_23',
                        countdown: 'Timer_countdown_d0',
                        countdown__text: 'Timer_countdown__text_54',
                        countdown__time: 'Timer_countdown__time_6d',
                        countdown__clock: 'Timer_countdown__clock_ce',
                        takeRewards: 'Timer_takeRewards_8c',
                        'add-blur': 'Timer_add-blur_df',
                        hide: 'Timer_hide_1d',
                        show: 'Timer_show_e8',
                    };
                let At, gt;
                !(function (e) {
                    e.Default = 'default';
                })(At || (At = {})),
                    (function (e) {
                        (e.AVAILABLE = 'available'), (e.DISABLED = 'disabled'), (e.NO_OFFERS = 'no_offers');
                    })(gt || (gt = {}));
                const Ft = {
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
                    pt = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    Dt = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    Ct = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    Bt = (0, n.memo)(({ text: e, binding: u, classMix: t }) => {
                        const r = (0, n.useCallback)((e) => ({ color: `#${e}` }), []),
                            a = (0, n.useMemo)(() => u || {}, [u]);
                        let o = pt.exec(e),
                            i = e,
                            l = 0;
                        for (; o; ) {
                            const t = o[0],
                                n = Dt.exec(t),
                                c = Ct.exec(t),
                                d = o[1];
                            if (n && c) {
                                const e = n[0],
                                    o = e + l++ + e;
                                (i = i.replace(t, `%(${o})`)),
                                    (a[o] = Ft[e]
                                        ? s().createElement(
                                              'span',
                                              { className: Ft[e] },
                                              s().createElement(nu, { text: d, binding: u }),
                                          )
                                        : s().createElement(
                                              'span',
                                              { style: r(e) },
                                              s().createElement(nu, { text: d, binding: u }),
                                          ));
                            }
                            o = pt.exec(e);
                        }
                        return s().createElement(nu, { text: i, classMix: t, binding: a });
                    }),
                    ht = {
                        base: 'TakeRewards_base_f1',
                        base__disabled: 'TakeRewards_base__disabled_d3',
                        button: 'TakeRewards_button_33',
                        button__small: 'TakeRewards_button__small_ea',
                        border: 'TakeRewards_border_be',
                        glow: 'TakeRewards_glow_97',
                        content: 'TakeRewards_content_96',
                        buttonIcon: 'TakeRewards_buttonIcon_58',
                        hightlightWrapper: 'TakeRewards_hightlightWrapper_79',
                        hightlight: 'TakeRewards_hightlight_84',
                        slide: 'TakeRewards_slide_b0',
                        countdown: 'TakeRewards_countdown_90',
                        countdownIcon: 'TakeRewards_countdownIcon_2e',
                    };
                var bt = t(887),
                    ft = t.n(bt);
                const vt = ['xl', 'lg', 'md', 'sm', 'xs'],
                    wt = (e) => e.includes('_') && ((e) => vt.includes(e))(e.split('_').at(-1)),
                    St = [f.ExtraLarge, f.Large, f.Medium, f.Small, f.ExtraSmall],
                    Tt = (e, u) =>
                        Object.keys(e).reduce((t, r) => {
                            if (r in t) return t;
                            if (wt(r)) {
                                const a = r.split('_').slice(0, -1).join('_');
                                if (a in t) return t;
                                const n = St.indexOf(u),
                                    s = (-1 !== n ? vt.slice(n) : [])
                                        .map((e) => a + '_' + e)
                                        .find((u) => void 0 !== e[u]),
                                    o = s ? e[s] : void 0;
                                return (t[a] = void 0 !== o ? o : e[a]), t;
                            }
                            const a = e[r];
                            return (
                                void 0 === a ||
                                    ((e, u) => vt.some((t) => void 0 !== u[`${e}_${t}`]))(r, e) ||
                                    (t[r] = a),
                                t
                            );
                        }, {}),
                    Rt = (e, u = Tt) => {
                        const t = (
                            (e, u = Tt) =>
                            (t) => {
                                const r = S().mediaSize,
                                    a = (0, n.useMemo)(() => u(t, r), [t, r]);
                                return s().createElement(e, a);
                            }
                        )(e, u);
                        return s().memo((u) =>
                            Object.keys(u).some((e) => wt(e) && void 0 !== u[e])
                                ? s().createElement(t, u)
                                : s().createElement(e, u),
                        );
                    },
                    yt = {
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
                    xt = [
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
                function Pt() {
                    return (
                        (Pt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Pt.apply(this, arguments)
                    );
                }
                Object.keys(ft());
                const Lt = {
                        XL: { mt: yt.mt__XL, mr: yt.mr__XL, mb: yt.mb__XL, ml: yt.ml__XL },
                        LG: { mt: yt.mt__LG, mr: yt.mr__LG, mb: yt.mb__LG, ml: yt.ml__LG },
                        MDp: { mt: yt.mt__MDp, mr: yt.mr__MDp, mb: yt.mb__MDp, ml: yt.ml__MDp },
                        MD: { mt: yt.mt__MD, mr: yt.mr__MD, mb: yt.mb__MD, ml: yt.ml__MD },
                        SMp: { mt: yt.mt__SMp, mr: yt.mr__SMp, mb: yt.mb__SMp, ml: yt.ml__SMp },
                        SM: { mt: yt.mt__SM, mr: yt.mr__SM, mb: yt.mb__SM, ml: yt.ml__SM },
                        XS: { mt: yt.mt__XS, mr: yt.mr__XS, mb: yt.mb__XS, ml: yt.ml__XS },
                    },
                    Mt = (Object.keys(Lt), ['mt', 'mr', 'mb', 'ml']),
                    Nt = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    kt = Rt((e) => {
                        let u = e.className,
                            t = e.width,
                            r = e.height,
                            a = e.m,
                            o = e.mt,
                            i = void 0 === o ? a : o,
                            l = e.mr,
                            c = void 0 === l ? a : l,
                            d = e.mb,
                            m = void 0 === d ? a : d,
                            _ = e.ml,
                            E = void 0 === _ ? a : _,
                            A = e.column,
                            g = e.row,
                            F = e.flexDirection,
                            p = void 0 === F ? (A ? 'column' : g && 'row') || void 0 : F,
                            D = e.flexStart,
                            C = e.center,
                            h = e.flexEnd,
                            b = e.spaceBetween,
                            f = e.spaceAround,
                            v = e.justifyContent,
                            w =
                                void 0 === v
                                    ? (D ? 'flex-start' : C && 'center') ||
                                      (h && 'flex-end') ||
                                      (b && 'space-between') ||
                                      (f && 'space-around') ||
                                      void 0
                                    : v,
                            S = e.alignItems,
                            T = void 0 === S ? (D ? 'flex-start' : C && 'center') || (h && 'flex-end') || void 0 : S,
                            R = e.alignSelf,
                            y = e.wrap,
                            x = e.flexWrap,
                            P = void 0 === x ? (y ? 'wrap' : void 0) : x,
                            L = e.grow,
                            M = e.shrink,
                            N = e.flex,
                            k = void 0 === N ? (L || M ? `${L ? 1 : 0} ${M ? 1 : 0} auto` : void 0) : N,
                            O = e.style,
                            I = e.children,
                            H = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    a = {},
                                    n = Object.keys(e);
                                for (r = 0; r < n.length; r++) (t = n[r]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, xt);
                        const W = (0, n.useMemo)(() => {
                                const e = { mt: i, mr: c, mb: m, ml: E },
                                    u = ((e) =>
                                        Mt.reduce((u, t) => {
                                            const r = e[t];
                                            return r && 'number' != typeof r ? u.concat(Lt[!0 === r ? 'MD' : r][t]) : u;
                                        }, []))(e),
                                    a = ((e) =>
                                        Mt.reduce((u, t) => {
                                            const r = e[t];
                                            return 'number' == typeof r && (u[Nt[t]] = r + 'rem'), u;
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, O, a, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== r && 'number' == typeof r ? r + 'rem' : r,
                                        flex: k,
                                        alignSelf: R,
                                        display: p || T ? 'flex' : void 0,
                                        flexDirection: p,
                                        flexWrap: P,
                                        justifyContent: w,
                                        alignItems: T,
                                    }),
                                    computedClassNames: u,
                                };
                            }, [t, r, i, c, m, E, O, k, R, p, P, w, T]),
                            U = W.computedStyle,
                            G = W.computedClassNames;
                        return s().createElement('div', Pt({ className: B()(yt.base, ...G, u), style: U }, H), I);
                    });
                var Ot = t(532),
                    It = t.n(Ot);
                const Ht = {
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
                    Wt = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function Ut() {
                    return (
                        (Ut =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Ut.apply(this, arguments)
                    );
                }
                Object.keys(ft());
                const Gt = Object.keys(It()),
                    $t = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    zt = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Vt = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    jt =
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
                            'heading-H56': $t,
                            'heading-H36': $t,
                            'heading-H28': zt,
                            'heading-H24': zt,
                            'heading-H24R': zt,
                            'heading-H22': zt,
                            'heading-H20R': zt,
                            'heading-H18': zt,
                            'heading-H15': Vt,
                            'heading-H14': Vt,
                            'paragraph-P24': zt,
                            'paragraph-P18': zt,
                            'paragraph-P16': zt,
                            'paragraph-P14': Vt,
                            'paragraph-P12': Vt,
                            'paragraph-P10': Vt,
                        }),
                    Xt =
                        (Object.keys(jt),
                        (e) =>
                            e
                                ? ((e) => Gt.includes(e))(e)
                                    ? { colorClassName: Ht[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    qt = Rt((e) => {
                        let u = e.text,
                            t = e.variant,
                            r = e.className,
                            a = e.color,
                            o = e.m,
                            i = e.mt,
                            l = void 0 === i ? o : i,
                            c = e.mr,
                            d = void 0 === c ? o : c,
                            m = e.mb,
                            _ = void 0 === m ? o : m,
                            E = e.ml,
                            A = void 0 === E ? o : E,
                            g = e.style,
                            F = e.format,
                            p = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    a = {},
                                    n = Object.keys(e);
                                for (r = 0; r < n.length; r++) (t = n[r]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, Wt);
                        const D = (0, n.useMemo)(() => {
                                const e = Xt(a),
                                    u = e.colorClassName,
                                    t = e.colorStyle,
                                    r = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, g, r), colorClassName: u };
                            }, [g, a]),
                            C = D.computedStyle,
                            h = D.colorClassName;
                        return s().createElement(
                            kt,
                            Ut(
                                {
                                    className: B()(Ht.base, t && Ht[t], h, r),
                                    style: C,
                                    mt: !0 === l ? jt[t || 'paragraph-P16'].mt : l,
                                    mr: !0 === d ? jt[t || 'paragraph-P16'].mr : d,
                                    mb: !0 === _ ? jt[t || 'paragraph-P16'].mb : _,
                                    ml: !0 === A ? jt[t || 'paragraph-P16'].ml : A,
                                },
                                p,
                            ),
                            void 0 !== F ? s().createElement(nu, Ut({}, F, { text: u })) : u,
                        );
                    }),
                    Yt = { [gt.AVAILABLE]: 'active', [gt.NO_OFFERS]: 'hidden', [gt.DISABLED]: 'disabled' },
                    Qt = R.strings.winback.progression.takeRewardsBtn,
                    Kt = (0, Q.Pi)(({ className: e, isNeedTimer: u, onClick: t, time: r, isDisabled: a = !1 }) => {
                        const n = ((e, u = !0) =>
                                e.days > 7 && u
                                    ? Ze(R.strings.common.duration.days(), { days: e.days })
                                    : e.days >= 1
                                      ? 0 === e.hours
                                          ? Ze(R.strings.common.duration.days(), { days: e.days })
                                          : Ze(R.strings.common.duration.days(), { days: e.days + 1 })
                                      : e.hours >= 1
                                        ? 0 === e.minutes
                                            ? Ze(R.strings.common.duration.hours(), { hours: e.hours })
                                            : Ze(R.strings.common.duration.hours(), { hours: e.hours + 1 })
                                        : Ze(R.strings.common.duration.minutes(), { minutes: e.minutes || 1 }))(
                                nt(null != r ? r : 99e3),
                                !1,
                            ),
                            o = !a && u,
                            i = `base__${Yt.active}`;
                        return s().createElement(
                            'div',
                            { className: B()(ht.base, e, ht[i]) },
                            s().createElement(
                                Te,
                                { body: a ? Qt.tooltipDisable() : Qt.tooltip() },
                                s().createElement(
                                    'div',
                                    {
                                        className: ht.button,
                                        onClick: a
                                            ? void 0
                                            : () => {
                                                  t(), U.playClick();
                                              },
                                        onMouseEnter: a ? void 0 : U.playHighlight,
                                    },
                                    !a &&
                                        s().createElement(
                                            s().Fragment,
                                            null,
                                            s().createElement('div', { className: ht.border }),
                                            s().createElement('div', { className: ht.glow }),
                                        ),
                                    s().createElement(
                                        'div',
                                        { className: ht.content },
                                        s().createElement('div', { className: ht.buttonIcon }),
                                        s().createElement(qt, { text: Qt.title() }),
                                    ),
                                    !a &&
                                        s().createElement(
                                            'div',
                                            { className: ht.hightlightWrapper },
                                            s().createElement('div', { className: ht.hightlight }),
                                        ),
                                ),
                            ),
                            o &&
                                s().createElement(
                                    'div',
                                    { className: ht.countdown },
                                    s().createElement('div', { className: ht.countdownIcon }),
                                    s().createElement(Bt, { text: Qt.countdown(), binding: { leftTime: n } }),
                                ),
                        );
                    });
                let Zt;
                !(function (e) {
                    (e.Big = 'big'), (e.Small = 'small');
                })(Zt || (Zt = {}));
                const Jt = R.strings.winback.progression,
                    er = (0, Q.Pi)(({ size: e, state: u }) => {
                        const t = et(),
                            r = t.model,
                            a = t.controls,
                            n = r.computes,
                            o = n.battleQuests,
                            i = n.isAllBattleQuestsCompleted,
                            l = r.currentTimerDate.get(),
                            c = r.isClaimRewardsAvailable.get(),
                            d = u === Z.Completed,
                            m = u === Z.InProgress,
                            _ = (m && 0 === o().length) || (d && !c) || (i() && !d);
                        return s().createElement(
                            'div',
                            { className: B()(Et.base, Et[`base__${e}`]) },
                            s().createElement(
                                'div',
                                { className: Et.timer },
                                s().createElement(
                                    Ye,
                                    { type: m ? qe.InProgressBattleQuests : qe.CompletedBattleQuests },
                                    _ &&
                                        s().createElement(
                                            'div',
                                            { className: Et.countdown },
                                            s().createElement(qt, { className: Et.countdown__text, text: Jt.timer() }),
                                            s().createElement('div', { className: Et.bgCountdown }),
                                            s().createElement(_t, {
                                                duration: l,
                                                style: tt.Long,
                                                classNames: { text: Et.countdown__time },
                                                className: Et.countdown__clock,
                                            }),
                                        ),
                                    d &&
                                        c &&
                                        s().createElement(
                                            'div',
                                            { className: Et.takeRewards },
                                            s().createElement(Kt, { time: l, onClick: a.onShowSelectableRewardsView }),
                                        ),
                                ),
                            ),
                        );
                    }),
                    ur = 'InformText_content_07',
                    tr = 'InformText_title_a0',
                    rr = 'InformText_text_43',
                    ar = R.strings.winback.progression.battleQuests.timer,
                    nr = ({ state: e, battleQuests: u, allTasksCompleted: t }) => {
                        const r = e === Z.Completed;
                        return s().createElement(
                            'div',
                            { className: 'InformText_base_d1' },
                            r
                                ? s().createElement(
                                      'div',
                                      { className: ur },
                                      s().createElement(qt, {
                                          className: B()(tr, 'InformText_title__complete_ca'),
                                          text: ar.completed.title(),
                                      }),
                                      s().createElement(qt, {
                                          className: B()(rr, 'InformText_text__complete_4e'),
                                          text: ar.completed.text(),
                                      }),
                                  )
                                : s().createElement(
                                      'div',
                                      { className: ur },
                                      s().createElement(qt, { className: tr, text: ar.inProgress.title() }),
                                      u.length > 0 &&
                                          !t &&
                                          s().createElement(qt, { className: rr, text: ar.inProgress.text() }),
                                  ),
                        );
                    },
                    sr = {
                        base: 'InformBlock_base_76',
                        base__completed: 'InformBlock_base__completed_24',
                        base__inProgress: 'InformBlock_base__inProgress_e2',
                        body: 'InformBlock_body_c9',
                        show: 'InformBlock_show_33',
                        'add-blur': 'InformBlock_add-blur_94',
                        hide: 'InformBlock_hide_c6',
                    },
                    or = s().memo(({ state: e, battleQuests: u, allTasksCompleted: t }) => {
                        const r = e === Z.Completed || (e === Z.InProgress && 0 === u.length) || t;
                        return s().createElement(
                            'div',
                            { className: B()(sr.base, sr[`base__${e}`]) },
                            r &&
                                s().createElement(
                                    'div',
                                    { className: sr.body },
                                    s().createElement(nr, { state: e, battleQuests: u, allTasksCompleted: t }),
                                    s().createElement(er, { size: Zt.Big, state: e }),
                                ),
                        );
                    }),
                    ir = (e) => {
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
                    },
                    lr = {
                        base: 'ScrollArea_base_d5',
                        body: 'ScrollArea_body_db',
                        block: 'ScrollArea_block_2e',
                        content: 'ScrollArea_content_9c',
                        content__scroll: 'ScrollArea_content__scroll_5b',
                        button: 'ScrollArea_button_a4',
                        button__active: 'ScrollArea_button__active_6c',
                        button__hidden: 'ScrollArea_button__hidden_4c',
                        button__forward: 'ScrollArea_button__forward_be',
                        button__back: 'ScrollArea_button__back_03',
                        buttonBack: 'ScrollArea_buttonBack_6d',
                        buttonForward: 'ScrollArea_buttonForward_ec',
                        button__locked: 'ScrollArea_button__locked_c6',
                    },
                    cr = (e, u) => (u ? 'hidden' : e ? 'active' : 'locked'),
                    dr = ({ children: e, areDefaultNumberQuests: u }) => {
                        const t = (0, n.useState)(0),
                            r = t[0],
                            a = t[1],
                            o = (0, n.useState)(0),
                            i = o[0],
                            l = o[1],
                            c = (0, n.useRef)(null),
                            d = (0, n.useRef)(null),
                            m = S(),
                            _ = ((e, u, t) => !(!u || !t) && e === u.scrollWidth - t.offsetWidth)(
                                r,
                                c.current,
                                d.current,
                            ),
                            E = (e) => {
                                e || W('highlight');
                            };
                        return (
                            (0, n.useEffect)(
                                () =>
                                    ir(() => {
                                        const e = c.current,
                                            u = d.current;
                                        if (e && u && e.scrollWidth > u.offsetWidth) {
                                            const u = e.children,
                                                t = u[0],
                                                r = u[1].getBoundingClientRect().left - t.getBoundingClientRect().left;
                                            l(r), a(0);
                                        } else l(0), a(0);
                                    }),
                                [m.remScreenWidth, u],
                            ),
                            s().createElement(
                                'div',
                                { className: lr.base },
                                s().createElement(
                                    'div',
                                    { className: lr.body },
                                    s().createElement(
                                        'div',
                                        {
                                            onMouseEnter: () => E(!r),
                                            onClick: () => {
                                                r && (W('play'), a((e) => e - i));
                                            },
                                            className: B()(lr.button, lr[`button__${cr(r, u)}`], lr.button__back),
                                        },
                                        s().createElement('div', { className: lr.buttonBack }),
                                    ),
                                    s().createElement(
                                        'div',
                                        { className: lr.block, ref: d },
                                        s().createElement(
                                            'div',
                                            {
                                                ref: c,
                                                className: B()(lr.content, !u && lr.content__scroll),
                                                style: { transform: `translateX(-${r}px)` },
                                            },
                                            e,
                                        ),
                                    ),
                                    s().createElement(
                                        'div',
                                        {
                                            onMouseEnter: () => E(_),
                                            onClick: () => {
                                                _ || (W('play'), a((e) => e + i));
                                            },
                                            className: B()(lr.button, lr[`button__${cr(!_, u)}`], lr.button__forward),
                                        },
                                        s().createElement('div', { className: lr.buttonForward }),
                                    ),
                                ),
                            )
                        );
                    },
                    mr = {
                        base: 'TaskBattleList_base_88',
                        base__completed: 'TaskBattleList_base__completed_dd',
                        'hidden-tasks-list': 'TaskBattleList_hidden-tasks-list_e6',
                        base__allCompletedTasksVisited: 'TaskBattleList_base__allCompletedTasksVisited_b6',
                        timerWithQuestsTotal: 'TaskBattleList_timerWithQuestsTotal_58',
                        timer: 'TaskBattleList_timer_31',
                        taskList: 'TaskBattleList_taskList_33',
                        'add-blur': 'TaskBattleList_add-blur_9c',
                        hide: 'TaskBattleList_hide_d5',
                        show: 'TaskBattleList_show_b3',
                    },
                    _r = R.strings.winback.progression,
                    Er = (0, Q.Pi)(() => {
                        const e = et().model;
                        return s().createElement(
                            'div',
                            { className: 'TimerWithQuestsTotal_base_b9' },
                            s().createElement(
                                'div',
                                { className: 'TimerWithQuestsTotal_body_46' },
                                s().createElement(
                                    Ye,
                                    { type: qe.InProgressBattleQuests },
                                    s().createElement(
                                        'div',
                                        { className: 'TimerWithQuestsTotal_timerBlock_78' },
                                        s().createElement(qt, {
                                            className: 'TimerWithQuestsTotal_text_2b',
                                            text: _r.timer(),
                                        }),
                                        s().createElement(_t, {
                                            duration: e.currentTimerDate.get(),
                                            style: tt.Description,
                                            classNames: { text: 'TimerWithQuestsTotal_description_8c' },
                                        }),
                                    ),
                                ),
                            ),
                        );
                    });
                function Ar() {
                    return (
                        (Ar =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Ar.apply(this, arguments)
                    );
                }
                const gr = s().memo(({ battleQuests: e, state: u }) =>
                        s().createElement(
                            'div',
                            { className: B()(mr.base, mr[`base__${u}`]) },
                            e.length > 0 &&
                                s().createElement(
                                    'div',
                                    { className: mr.timerWithQuestsTotal },
                                    s().createElement(Er, { questsNumber: e.length }),
                                ),
                            s().createElement(
                                'div',
                                { className: mr.taskList },
                                s().createElement(
                                    dr,
                                    { areDefaultNumberQuests: !0 },
                                    e.map((e, u) => s().createElement(Yu, Ar({ key: u }, e, { index: u }))),
                                ),
                            ),
                        ),
                    ),
                    Fr = (0, Q.Pi)(() => {
                        const e = et().model,
                            u = e.computes,
                            t = u.battleQuests,
                            r = u.isAllBattleQuestsCompleted,
                            a = S(),
                            n = e.state.get(),
                            o = n !== Z.Completed && t().length > 0 && !r();
                        return s().createElement(
                            'div',
                            {
                                className: B()(
                                    'BattleQuests_base_2b',
                                    a.mediaSize === f.Large && 'BattleQuests_base__mediaLarge_ea',
                                    a.mediaSize === f.Medium &&
                                        a.remScreenHeight >= 1024 &&
                                        'BattleQuests_base__mediumHeight_b5',
                                    a.remScreenWidth >= 1280 && 'BattleQuests_base__specifySize_86',
                                ),
                            },
                            s().createElement(
                                'div',
                                { className: 'BattleQuests_body_d9' },
                                s().createElement(or, { state: n, battleQuests: t(), allTasksCompleted: r() }),
                                o && s().createElement(gr, { state: n, battleQuests: t() }),
                            ),
                        );
                    }),
                    pr = 'Header_header_0d',
                    Dr = 'Header_title_55',
                    Cr = R.strings.winback.progression,
                    Br = (0, Q.Pi)(() => {
                        const e = et().model,
                            u = e.progressAnimationState.get(),
                            t = e.state.get(),
                            r = e.progressionName.get(),
                            a = u === Qu.ProgressAlreadyFinished && 'Header_header__fast_f8',
                            n = t === Z.Completed;
                        return s().createElement(
                            'div',
                            { className: 'Header_base_cc' },
                            s().createElement(
                                'div',
                                {
                                    className: B()(
                                        pr,
                                        a,
                                        'Header_header__inProgress_9e',
                                        n && 'Header_header__hide_54',
                                    ),
                                },
                                s().createElement(qt, { className: Dr, text: Ue(Cr.title, r, 'inProgress') }),
                                s().createElement(qt, {
                                    className: 'Header_subTitle_c4',
                                    text: Ue(Cr.subtitle, r, 'inProgress'),
                                }),
                            ),
                            s().createElement(
                                'div',
                                { className: B()(pr, a, 'Header_header__completed_99', n && 'Header_header__show_ae') },
                                s().createElement(qt, { className: Dr, text: Ue(Cr.title, r, 'complete') }),
                            ),
                        );
                    });
                function hr(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, r = new Array(u); t < u; t++) r[t] = e[t];
                    return r;
                }
                const br = [];
                function fr(e) {
                    const u = (0, n.useRef)(e);
                    return (
                        (0, n.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, n.useCallback)((...e) => (0, u.current)(...e), br)
                    );
                }
                var vr = t(30);
                let wr;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(wr || (wr = {}));
                const Sr = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    Tr = ({
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
                            return J(a, n, t);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                d = void 0 === c ? Sr : c,
                                m = (0, n.useRef)(null),
                                _ = (0, n.useRef)(null),
                                E = (() => {
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
                                                                    if ('string' == typeof e) return hr(e, u);
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
                                                                              ? hr(e, u)
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
                                                    function d() {
                                                        (s = Date.now()), t.apply(l, i);
                                                    }
                                                    n ||
                                                        (r && !a && d(),
                                                        o(),
                                                        void 0 === r && c > e
                                                            ? d()
                                                            : !0 !== u &&
                                                              (a = setTimeout(
                                                                  r
                                                                      ? function () {
                                                                            a = void 0;
                                                                        }
                                                                      : d,
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
                                g = (0, vr.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = m.current;
                                        u && (t(u, e), E.trigger('change', e), s && A());
                                    },
                                    onRest: (e) => E.trigger('rest', e),
                                    onStart: (e) => E.trigger('start', e),
                                    onPause: (e) => E.trigger('pause', e),
                                })),
                                F = g[0],
                                p = g[1],
                                D = (0, n.useCallback)(
                                    (e, u, t) => {
                                        var r;
                                        const a = F.scrollPosition.get(),
                                            n = (null != (r = F.scrollPosition.goal) ? r : 0) - a;
                                        return o(e, u * t + n + a);
                                    },
                                    [F.scrollPosition],
                                ),
                                C = (0, n.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const r = m.current;
                                        r &&
                                            p.start({
                                                scrollPosition: o(r, e),
                                                immediate: u,
                                                reset: t,
                                                config: d.animationConfig,
                                                from: { scrollPosition: o(r, F.scrollPosition.get()) },
                                            });
                                    },
                                    [p, d.animationConfig, F.scrollPosition],
                                ),
                                B = (0, n.useCallback)(
                                    (e) => {
                                        const u = m.current,
                                            t = _.current;
                                        if (!u || !t) return;
                                        const r = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return a(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, d.step),
                                            n = D(u, e, r);
                                        C(n);
                                    },
                                    [C, D, d.step],
                                ),
                                h = (0, n.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && B(r(e)),
                                            m.current && E.trigger('mouseWheel', e, F.scrollPosition, u(m.current));
                                    },
                                    [F.scrollPosition, B, E],
                                ),
                                b = ((e, u = []) => {
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
                                        ir(() => {
                                            const e = m.current;
                                            e &&
                                                (C(o(e, F.scrollPosition.goal), { immediate: !0 }),
                                                E.trigger('resizeHandled'));
                                        }),
                                    [C, F.scrollPosition.goal],
                                ),
                                f = fr(() => {
                                    const e = m.current;
                                    if (!e) return;
                                    const u = o(e, F.scrollPosition.goal);
                                    u !== F.scrollPosition.goal && C(u, { immediate: !0 }),
                                        E.trigger('recalculateContent');
                                });
                            return (
                                (0, n.useEffect)(
                                    () => (
                                        window.addEventListener('resize', b),
                                        () => {
                                            window.removeEventListener('resize', b);
                                        }
                                    ),
                                    [b],
                                ),
                                (0, n.useMemo)(
                                    () => ({
                                        getWrapperSize: () => (_.current ? a(_.current) : void 0),
                                        getContainerSize: () => (m.current ? e(m.current) : void 0),
                                        getBounds: () =>
                                            m.current
                                                ? u(m.current)
                                                : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                        stepTimeout: d.step.clampedArrowStepTimeout,
                                        clampPosition: o,
                                        handleMouseWheel: h,
                                        applyScroll: C,
                                        applyStepTo: B,
                                        contentRef: m,
                                        wrapperRef: _,
                                        scrollPosition: p,
                                        animationScroll: F,
                                        recalculateContent: f,
                                        events: { on: E.on, off: E.off },
                                    }),
                                    [F.scrollPosition, C, B, E.off, E.on, f, h, p, d.step.clampedArrowStepTimeout],
                                )
                            );
                        };
                    },
                    Rr = Tr({
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
                        getDirection: (e) => (e.deltaY > 1 ? wr.Next : wr.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    });
                function yr(e, u, t = []) {
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
                const xr = 'HorizontalBar_base__nonActive_82',
                    Pr = 'disable',
                    Lr = { pending: !1, offset: 0 },
                    Mr = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    Nr = () => {},
                    kr = (e, u) => Math.max(20, e.offsetWidth * u),
                    Or = (0, n.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = Mr, onDrag: r = Nr }) => {
                        const a = (0, n.useRef)(null),
                            o = (0, n.useRef)(null),
                            i = (0, n.useRef)(null),
                            l = (0, n.useRef)(null),
                            c = (0, n.useRef)(null),
                            d = e.stepTimeout || 100,
                            m = (0, n.useState)(Lr),
                            _ = m[0],
                            E = m[1],
                            A = (0, n.useCallback)(
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
                                    a = e.getContainerSize();
                                if (!(r && u && t && a)) return;
                                const n = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, r / a),
                                    d = J(0, 1, n / (a - r)),
                                    m = (u.offsetWidth - kr(u, s)) * d;
                                (t.style.transform = `translateX(${0 | m}px)`),
                                    ((e) => {
                                        if (o.current && i.current && l.current && c.current) {
                                            if (0 === e)
                                                return o.current.classList.add(Pr), void i.current.classList.remove(Pr);
                                            if (
                                                ((u = l.current),
                                                (t = c.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return o.current.classList.remove(Pr), void i.current.classList.add(Pr);
                                            var u, t;
                                            o.current.classList.remove(Pr), i.current.classList.remove(Pr);
                                        }
                                    })(m);
                            },
                            F = fr(() => {
                                (() => {
                                    const u = c.current,
                                        t = l.current,
                                        r = e.getWrapperSize(),
                                        n = e.getContainerSize();
                                    if (!(n && u && r && t)) return;
                                    const s = Math.min(1, r / n);
                                    (u.style.width = `${kr(t, s)}px`),
                                        (u.style.display = 'flex'),
                                        a.current &&
                                            (1 === s ? a.current.classList.add(xr) : a.current.classList.remove(xr));
                                })(),
                                    g();
                            });
                        (0, n.useEffect)(() => ir(F)),
                            (0, n.useEffect)(
                                () =>
                                    ir(() => {
                                        const u = () => {
                                            g();
                                        };
                                        let t = Nr;
                                        const r = () => {
                                            t(), (t = ir(F));
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
                            (0, n.useEffect)(() => {
                                if (!_.pending) return;
                                const u = (u) => {
                                        var t;
                                        const a = e.contentRef.current;
                                        if (!a) return;
                                        const n = l.current,
                                            s = c.current;
                                        if (!a || !n || !s) return;
                                        const o = u.screenX - _.offset - n.getBoundingClientRect().x,
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
                                        window.removeEventListener('mousemove', u), A(Lr);
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t);
                                    }
                                );
                            }, [e, _.offset, _.pending, r, A]);
                        const p = yr((u) => e.applyStepTo(u), d, [e]),
                            D = p[0],
                            C = p[1];
                        (0, n.useEffect)(
                            () => (
                                document.addEventListener('mouseup', C, !0),
                                () => document.removeEventListener('mouseup', C, !0)
                            ),
                            [C],
                        );
                        const h = (e) => {
                            e.target.classList.contains(Pr) || W('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: B()('HorizontalBar_base_49', u.base), ref: a, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: B()('HorizontalBar_leftButton_5f', u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Pr) || 0 !== e.button || (W('play'), D(wr.Next));
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
                                            (W('play'),
                                            u.target === r
                                                ? A({ pending: !0, offset: u.screenX - r.getBoundingClientRect().x })
                                                : ((u) => {
                                                      const r = c.current,
                                                          a = e.contentRef.current;
                                                      if (!r || !a) return;
                                                      const n = t(e);
                                                      e.applyScroll(e.animationScroll.scrollPosition.get() + n * u);
                                                  })(u.screenX > r.getBoundingClientRect().x ? wr.Prev : wr.Next));
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
                                    e.target.classList.contains(Pr) || 0 !== e.button || (W('play'), D(wr.Prev));
                                },
                                onMouseUp: C,
                                ref: i,
                                onMouseEnter: h,
                            }),
                        );
                    }),
                    Ir = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Hr = ({
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
                        const d = (0, n.useMemo)(() => {
                                const e = r || {};
                                return Object.assign({}, e, { base: B()(Ir.base, e.base) });
                            }, [r]),
                            m = (0, n.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return s().createElement(
                            'div',
                            { className: B()(Ir.defaultScroll, t), onWheel: u.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: B()(Ir.defaultScrollArea, a) },
                                s().createElement(Wr, { className: i, api: m, classNames: o }, e),
                            ),
                            s().createElement(Or, { getStepByRailClick: l, api: u, onDrag: c, classNames: d }),
                        );
                    },
                    Wr = ({ api: e, className: u, classNames: t, children: r }) => (
                        (0, n.useEffect)(() => ir(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: B()(Ir.base, u) },
                            s().createElement(
                                'div',
                                {
                                    className: B()(Ir.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                s().createElement(
                                    'div',
                                    { className: B()(Ir.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    r,
                                ),
                            ),
                        )
                    );
                (Wr.Bar = Or),
                    (Wr.Default = Hr),
                    (Wr.SeniorityAwards = ({ api: e, className: u, classNames: t, children: r }) => (
                        (0, n.useEffect)(() => ir(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: B()(Ir.base, u) },
                            s().createElement(
                                'div',
                                { className: B()(Ir.wrapper, null == t ? void 0 : t.wrapper), ref: e.wrapperRef },
                                s().createElement(
                                    'div',
                                    { className: B()(Ir.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    r,
                                ),
                            ),
                        )
                    ));
                const Ur = Tr({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? wr.Next : wr.Prev),
                    }),
                    Gr = 'VerticalBar_base__nonActive_42',
                    $r = 'disable',
                    zr = () => {},
                    Vr = { pending: !1, offset: 0 },
                    jr = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    Xr = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    qr = (e, u) => Math.max(20, e.offsetHeight * u),
                    Yr = (0, n.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = jr, onDrag: r = zr }) => {
                        const a = (0, n.useRef)(null),
                            o = (0, n.useRef)(null),
                            i = (0, n.useRef)(null),
                            l = (0, n.useRef)(null),
                            c = (0, n.useRef)(null),
                            d = e.stepTimeout || 100,
                            m = (0, n.useState)(Vr),
                            _ = m[0],
                            E = m[1],
                            A = (0, n.useCallback)(
                                (e) => {
                                    E(e),
                                        c.current && r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current });
                                },
                                [r],
                            ),
                            g = fr(() => {
                                const u = c.current,
                                    t = l.current,
                                    r = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(r && n && u && t)) return;
                                const s = Math.min(1, r / n);
                                return (
                                    (u.style.height = `${qr(t, s)}px`),
                                    u.classList.add('VerticalBar_thumb_32'),
                                    a.current &&
                                        (1 === s ? a.current.classList.add(Gr) : a.current.classList.remove(Gr)),
                                    s
                                );
                            }),
                            F = fr(() => {
                                const u = l.current,
                                    t = c.current,
                                    r = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(r && u && t && a)) return;
                                const n = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, r / a),
                                    d = J(0, 1, n / (a - r)),
                                    m = (u.offsetHeight - qr(u, s)) * d;
                                (t.style.transform = `translateY(${0 | m}px)`),
                                    ((e) => {
                                        if (o.current && i.current && l.current && c.current) {
                                            if (0 === e)
                                                return o.current.classList.add($r), void i.current.classList.remove($r);
                                            if (
                                                ((u = l.current),
                                                (t = c.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return o.current.classList.remove($r), void i.current.classList.add($r);
                                            var u, t;
                                            o.current.classList.remove($r), i.current.classList.remove($r);
                                        }
                                    })(m);
                            }),
                            p = fr(() => {
                                Xr(e, () => {
                                    g(), F();
                                });
                            });
                        (0, n.useEffect)(() => ir(p)),
                            (0, n.useEffect)(() => {
                                const u = () => {
                                    Xr(e, () => {
                                        F();
                                    });
                                };
                                let t = zr;
                                const r = () => {
                                    t(), (t = ir(p));
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
                            (0, n.useEffect)(() => {
                                if (!_.pending) return;
                                const u = (u) => {
                                        Xr(e, (t) => {
                                            const a = l.current,
                                                n = c.current,
                                                s = e.getContainerSize();
                                            if (!a || !n || !s) return;
                                            const o = u.screenY - _.offset - a.getBoundingClientRect().y,
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
                                        window.removeEventListener('mousemove', u), A(Vr);
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t);
                                    }
                                );
                            }, [e, _.offset, _.pending, r, A]);
                        const D = yr((u) => e.applyStepTo(u), d, [e]),
                            C = D[0],
                            h = D[1];
                        (0, n.useEffect)(
                            () => (
                                document.addEventListener('mouseup', h, !0),
                                () => document.removeEventListener('mouseup', h, !0)
                            ),
                            [h],
                        );
                        const b = (e) => {
                            e.target.classList.contains($r) || W('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: B()('VerticalBar_base_f3', u.base), ref: a, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: B()('VerticalBar_topButton_d7', u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains($r) || 0 !== e.button || (W('play'), C(wr.Next));
                                },
                                ref: o,
                                onMouseEnter: b,
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
                                            (W('play'),
                                            u.target === r
                                                ? A({ pending: !0, offset: u.screenY - r.getBoundingClientRect().y })
                                                : ((a = u.screenY > r.getBoundingClientRect().y ? wr.Prev : wr.Next),
                                                  c.current &&
                                                      Xr(e, (u) => {
                                                          if (!u) return;
                                                          const r = t(e),
                                                              n = e.clampPosition(u, u.scrollTop + r * a);
                                                          e.applyScroll(n);
                                                      })));
                                    },
                                    ref: l,
                                    onMouseEnter: b,
                                },
                                s().createElement('div', { ref: c, className: u.thumb }),
                                s().createElement('div', { className: B()('VerticalBar_rail_43', u.rail) }),
                            ),
                            s().createElement('div', {
                                className: B()('VerticalBar_bottomButton_06', u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains($r) || 0 !== e.button || (W('play'), C(wr.Prev));
                                },
                                onMouseUp: h,
                                ref: i,
                                onMouseEnter: b,
                            }),
                        );
                    }),
                    Qr = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Kr = ({
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
                        const d = (0, n.useMemo)(() => {
                                const e = r || {};
                                return Object.assign({}, e, { base: B()(Qr.base, e.base) });
                            }, [r]),
                            m = (0, n.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return s().createElement(
                            'div',
                            { className: B()(Qr.defaultScroll, t), onWheel: u.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: B()(Qr.area, a) },
                                s().createElement(Zr, { className: o, classNames: i, api: m }, e),
                            ),
                            s().createElement(Yr, { getStepByRailClick: l, api: u, onDrag: c, classNames: d }),
                        );
                    },
                    Zr = ({ className: e, classNames: u, children: t, api: r }) => (
                        (0, n.useEffect)(() => ir(r.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: B()(Qr.base, e), ref: r.wrapperRef, onWheel: r.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: B()(Qr.content, null == u ? void 0 : u.content), ref: r.contentRef },
                                t,
                            ),
                        )
                    );
                Zr.Default = Kr;
                const Jr = { Vertical: a, Horizontal: r };
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
                const ea = {
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
                let ua, ta;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(ua || (ua = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
                    })(ta || (ta = {}));
                const ra = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: r,
                    disabled: a,
                    mixClass: o,
                    soundHover: i,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: d,
                    onMouseDown: m,
                    onMouseUp: _,
                    onMouseLeave: E,
                    onClick: A,
                }) => {
                    const g = (0, n.useRef)(null),
                        F = (0, n.useState)(t),
                        p = F[0],
                        D = F[1],
                        C = (0, n.useState)(!1),
                        h = C[0],
                        b = C[1],
                        f = (0, n.useState)(!1),
                        v = f[0],
                        w = f[1],
                        S = (0, n.useCallback)(() => {
                            a || (g.current && (g.current.focus(), D(!0)));
                        }, [a]),
                        T = (0, n.useCallback)(
                            (e) => {
                                p && null !== g.current && !g.current.contains(e.target) && D(!1);
                            },
                            [p],
                        ),
                        y = (0, n.useCallback)(
                            (e) => {
                                a || (A && A(e));
                            },
                            [a, A],
                        ),
                        x = (0, n.useCallback)(
                            (e) => {
                                a || (null !== i && W(i), c && c(e), w(!0));
                            },
                            [a, i, c],
                        ),
                        P = (0, n.useCallback)(
                            (e) => {
                                d && d(e);
                            },
                            [d],
                        ),
                        L = (0, n.useCallback)(
                            (e) => {
                                a || (_ && _(e), b(!1));
                            },
                            [a, _],
                        ),
                        M = (0, n.useCallback)(
                            (e) => {
                                a || (null !== l && W(l), m && m(e), t && S(), b(!0));
                            },
                            [a, l, m, S, t],
                        ),
                        N = (0, n.useCallback)(
                            (e) => {
                                a || (E && E(e), b(!1));
                            },
                            [a, E],
                        ),
                        k = B()(
                            ea.base,
                            ea[`base__${r}`],
                            {
                                [ea.base__disabled]: a,
                                [ea[`base__${u}`]]: u,
                                [ea.base__focus]: p,
                                [ea.base__highlightActive]: h,
                                [ea.base__firstHover]: v,
                            },
                            o,
                        ),
                        O = B()(ea.state, ea.state__default);
                    return (
                        (0, n.useEffect)(
                            () => (
                                document.addEventListener('mousedown', T),
                                () => {
                                    document.removeEventListener('mousedown', T);
                                }
                            ),
                            [T],
                        ),
                        (0, n.useEffect)(() => {
                            D(t);
                        }, [t]),
                        s().createElement(
                            'div',
                            {
                                ref: g,
                                className: k,
                                onMouseEnter: x,
                                onMouseMove: P,
                                onMouseUp: L,
                                onMouseDown: M,
                                onMouseLeave: N,
                                onClick: y,
                            },
                            r !== ua.ghost &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: ea.back }),
                                    s().createElement('span', { className: ea.texture }),
                                ),
                            s().createElement(
                                'span',
                                { className: O },
                                s().createElement('span', { className: ea.stateDisabled }),
                                s().createElement('span', { className: ea.stateHighlightHover }),
                                s().createElement('span', { className: ea.stateHighlightActive }),
                            ),
                            s().createElement(
                                'span',
                                { className: ea.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                ra.defaultProps = { type: ua.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const aa = (0, n.memo)(ra),
                    na = ({ level: e, isActive: u, isCompleted: t }) => {
                        const r = B()(
                            'LevelLabel_level_aa',
                            t && 'LevelLabel_level__completed_67',
                            u && 'LevelLabel_level__active_9c',
                        );
                        return s().createElement(
                            'div',
                            { className: 'LevelLabel_base_39' },
                            s().createElement('div', {
                                className: B()('LevelLabel_activeGlow_bd', u && 'LevelLabel_activeGlow__completed_ac'),
                            }),
                            s().createElement(qt, {
                                className: B()(
                                    'LevelLabel_levelCurrent_69',
                                    u && 'LevelLabel_levelCurrent__completed_4a',
                                ),
                                text: String(e),
                            }),
                            s().createElement(qt, { className: r, text: String(e) }),
                        );
                    },
                    sa = {
                        base: 'LevelCard_base_3e',
                        bgCompleted: 'LevelCard_bgCompleted_07',
                        bgCompleted__completed: 'LevelCard_bgCompleted__completed_40',
                        bgCompleted__fast: 'LevelCard_bgCompleted__fast_06',
                        completedIconContainer: 'LevelCard_completedIconContainer_61',
                        completedIconContainer__completed: 'LevelCard_completedIconContainer__completed_49',
                        completedIcon: 'LevelCard_completedIcon_b0',
                        completedIconGlow: 'LevelCard_completedIconGlow_30',
                        border: 'LevelCard_border_63',
                        border__right: 'LevelCard_border__right_0b',
                    },
                    oa = (0, Q.Pi)(({ level: e, isActive: u, isCompleted: t, isLast: r, isSelectableReward: a }) => {
                        const o = et().model,
                            i = (0, n.useRef)(null),
                            l = o.computes.levelStatus().wasProgressionVisited;
                        (0, n.useEffect)(() => {}, [t, l]);
                        const c = (0, n.useCallback)(() => {
                            W('pr_progress_tick');
                        }, []);
                        return (
                            (0, n.useEffect)(() => {
                                const e = i.current;
                                return ir(() => {
                                    if (e)
                                        return (
                                            e.addEventListener('transitionstart', c),
                                            () => {
                                                e.removeEventListener('transitionstart', c);
                                            }
                                        );
                                });
                            }, [i, c]),
                            s().createElement(
                                'div',
                                { className: sa.base },
                                s().createElement('div', {
                                    className: B()(sa.bgCompleted, (u || t) && sa.bgCompleted__completed),
                                    ref: i,
                                }),
                                !a &&
                                    s().createElement(
                                        'div',
                                        {
                                            className: B()(
                                                sa.completedIconContainer,
                                                sa['completedIconContainer__' + (t ? 'completed' : 'inProgress')],
                                            ),
                                        },
                                        s().createElement('div', { className: sa.completedIconGlow }),
                                        s().createElement('div', { className: sa.completedIcon }),
                                    ),
                                s().createElement(na, { level: e, isCompleted: t, isActive: u }),
                                s().createElement('div', { className: sa.border }),
                                r && s().createElement('div', { className: B()(sa.border, sa.border__right) }),
                            )
                        );
                    });
                function ia() {
                    return (
                        (ia =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        ia.apply(this, arguments)
                    );
                }
                const la = (0, Q.Pi)(
                    ({ levelRef: e }) => {
                        const u = et(),
                            t = u.model,
                            r = u.controls,
                            a = !1,
                            n = B()('LevelCards_buttonInner_ff', a),
                            o = B()('LevelCards_button_89', a),
                            i = t.computes.levels();
                        return s().createElement(
                            'div',
                            { className: 'LevelCards_base_df', ref: e },
                            i.map((e) =>
                                s().createElement(
                                    'div',
                                    { className: 'LevelCards_levels_e4', key: e.level },
                                    e.isSelectableReward
                                        ? s().createElement(
                                              'div',
                                              { className: 'LevelCards_takeRewardBtn_71' },
                                              s().createElement(
                                                  'div',
                                                  { className: 'LevelCards_buttonHolder_08' },
                                                  s().createElement(
                                                      'div',
                                                      { className: n },
                                                      s().createElement(
                                                          aa,
                                                          {
                                                              type: ua.ghost,
                                                              size: ta.small,
                                                              disabled: a,
                                                              onClick: () =>
                                                                  ((e) => {
                                                                      r.onShowSelectableRewardView(e);
                                                                  })(e.level),
                                                              mixClass: o,
                                                          },
                                                          s().createElement('div', {
                                                              className: 'LevelCards_buttonBlink_7d',
                                                          }),
                                                          s().createElement(qt, {
                                                              className: 'LevelCards_buttonText_ce',
                                                              text: R.strings.winback.takeReward.buttonText(),
                                                          }),
                                                      ),
                                                  ),
                                              ),
                                          )
                                        : s().createElement('div', { className: 'LevelCards_levelWithoutButton_d1' }),
                                    s().createElement(oa, ia({ key: e.level }, e)),
                                ),
                            ),
                        );
                    },
                    { forwardRef: !0 },
                );
                let ca, da;
                function ma() {
                    return (
                        (ma =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        ma.apply(this, arguments)
                    );
                }
                !(function (e) {
                    (e.WELCOME = 'welcome'),
                        (e.PROGRESSION_STEP = 'progressionStep'),
                        (e.SELECTED_REWARDS = 'selectedRewards'),
                        (e.PROGRESSION_COMPLETED = 'progressionCompleted');
                })(ca || (ca = {})),
                    (function (e) {
                        (e.VEHICLE_FOR_GIFT = 'vehicleForGift'),
                            (e.VEHICLE_DISCOUNT = 'vehicleDiscount'),
                            (e.VEHICLE_FOR_RENT = 'vehicleForRent'),
                            (e.SELECTABLE_VEHICLE_FOR_GIFT = 'selectableVehicleForGift'),
                            (e.SELECTABLE_VEHICLE_DISCOUNT = 'selectableVehicleDiscount');
                    })(da || (da = {}));
                const _a = (0, Q.Pi)(({ isCompleted: e, isActive: u, rewards: t }) => {
                        const r = je(t),
                            a = r.parsedRewards,
                            n = r.imageSize,
                            o = et().model.curProgressPoints.get(),
                            i = e && !u && o > 0,
                            l = B()(
                                'Rewards_base_b1',
                                n === _e.Small && a.length > 2 && 'Rewards_base__wide_4e',
                                i && 'Rewards_base__completedReward_d3',
                            );
                        return s().createElement(
                            'div',
                            { className: l },
                            a.map((e) =>
                                s().createElement(
                                    We,
                                    ma(
                                        {
                                            className: 'Rewards_reward_0d',
                                            classNames: { info: 'Rewards_info_08' },
                                            key: e.name,
                                        },
                                        e,
                                        {
                                            tooltipArgs: Ie({ tooltipId: e.tooltipId }, Number(e.tooltipContentId), {
                                                ignoreShowDelay: !0,
                                            }),
                                        },
                                    ),
                                ),
                            ),
                        );
                    }),
                    Ea = 'RewardCard_pointsBorder_18',
                    Aa = 'RewardCard_border_af',
                    ga = R.strings.winback.progression.cards,
                    Fa = (0, Q.Pi)(
                        ({
                            pointsMin: e,
                            pointsForCard: u,
                            pointsCurrent: t,
                            isCompleted: r,
                            isActive: a,
                            isLast: n,
                            rewards: o,
                            progressionName: i,
                        }) => {
                            const l = S(),
                                c = B()(
                                    'RewardCard_base_b8',
                                    l.mediaSize === f.Medium && 'RewardCard_base__mediaMedium_52',
                                    l.mediaSize === f.Large && 'RewardCard_base__mediaLarge_4e',
                                    l.remScreenHeight >= 1200 && 'RewardCard_base__mediaExtraExtraLarge_a0',
                                ),
                                d = B()('RewardCard_activeBlock_96', a && 'RewardCard_activeBlock__completed_df'),
                                m = B()(
                                    'RewardCard_bgCompleted_c9',
                                    (a || r) && 'RewardCard_bgCompleted__completed_e1',
                                ),
                                _ = `url('R.images.winback.gui.maps.icons.progression.level_token_${i}')`;
                            return s().createElement(
                                'div',
                                { className: c },
                                s().createElement(
                                    'div',
                                    { className: d },
                                    s().createElement(
                                        'div',
                                        { className: 'RewardCard_pointsContainer_25' },
                                        s().createElement(Bt, {
                                            classMix: 'RewardCard_points_b1',
                                            text: ga.points(),
                                            binding: { current: t, total: u },
                                        }),
                                        s().createElement('div', {
                                            className: 'RewardCard_token_ff',
                                            style: { backgroundImage: _ },
                                        }),
                                    ),
                                ),
                                s().createElement('div', { className: m }),
                                s().createElement(_a, { rewards: o, isActive: a, isCompleted: r }),
                                s().createElement('div', { className: Aa }),
                                s().createElement(qt, { className: Ea, text: String(e) }),
                                n && s().createElement('div', { className: B()(Aa, 'RewardCard_border__right_ed') }),
                                n &&
                                    s().createElement(qt, {
                                        className: B()(Ea, 'RewardCard_pointsBorder__right_7d'),
                                        text: String(u),
                                    }),
                            );
                        },
                    ),
                    pa = (0, Q.Pi)(() => {
                        const e = et().model,
                            u = e.computes.levels(),
                            t = e.progressionName.get();
                        return s().createElement(
                            'div',
                            { className: 'RewardCards_base_f5' },
                            s().createElement(
                                'div',
                                { className: 'RewardCards_content_8f' },
                                u.map(({ isCompleted: u, level: r, isActive: a, isLast: n, rewards: o }, i) =>
                                    s().createElement(Fa, {
                                        key: r,
                                        pointsMin: i * e.pointsForLevel.get(),
                                        pointsForCard: e.pointsForLevel.get() * r,
                                        pointsCurrent: e.curProgressPoints.get(),
                                        isCompleted: u,
                                        isActive: a,
                                        isLast: n,
                                        rewards: o,
                                        progressionName: t,
                                    }),
                                ),
                            ),
                        );
                    }),
                    Da = ['api', 'value', 'maxValue', 'theme'];
                function Ca() {
                    return (
                        (Ca =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Ca.apply(this, arguments)
                    );
                }
                const Ba = (e, u) => ('number' == typeof u ? u : e.offsetLeft),
                    ha = (e) => {
                        let u = e.api,
                            t = e.value,
                            r = e.maxValue,
                            a = void 0 === r ? 100 : r,
                            o = e.theme,
                            i = void 0 === o ? Nu : o,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    a = {},
                                    n = Object.keys(e);
                                for (r = 0; r < n.length; r++) (t = n[r]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, Da);
                        const c = (0, n.useRef)(null),
                            d = (0, n.useRef)(null),
                            m = (0, n.useRef)(null),
                            _ = J(0, t, a) / a,
                            E = (0, n.useCallback)(
                                (e) => {
                                    m.current &&
                                        c.current &&
                                        (({ horizontalScrollPosition: e, leftOffset: u }, t, r) => {
                                            const a = t.offsetWidth - r.offsetWidth,
                                                n = e - Ba(t, u),
                                                s = J(0, a, n);
                                            r.style.left = `${s}px`;
                                        })(e, c.current, m.current),
                                        d.current &&
                                            c.current &&
                                            ((
                                                { horizontalScrollPosition: e, leftOffset: u },
                                                t,
                                                { container: r, line: a },
                                            ) => {
                                                const n = Math.max(0, Math.floor(r.offsetWidth * t) - 8e3),
                                                    s = e - Ba(r, u),
                                                    o = J(0, n, s);
                                                a.style.left = `${o}px`;
                                            })(e, _, { line: d.current, container: c.current });
                                },
                                [_],
                            ),
                            A = (0, n.useMemo)(() => Lu(i), [i]);
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
                                        { style: A, className: 'OptimizedProgressBar_background_ce', ref: m },
                                        s().createElement(lu, { size: l.size }),
                                    ),
                                    s().createElement(
                                        Ou,
                                        Ca({}, l, {
                                            lineRef: d,
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
                    ba = (e, u, t) =>
                        B()(
                            e[t],
                            u === Qu.ProgressAlreadyFinished
                                ? e[`${t}__fast`]
                                : u >= Qu.ProgressFinished
                                  ? e[`${t}__completed`]
                                  : void 0,
                        ),
                    fa = {
                        base: 'Container_base_61',
                        progressWrapper: 'Container_progressWrapper_9b',
                        progressWrapper__completed: 'Container_progressWrapper__completed_46',
                        progressWrapper__fast: 'Container_progressWrapper__fast_24',
                        bg: 'Container_bg_94',
                    };
                let va;
                !(function (e) {
                    (e[(e.DEFAULT = 400)] = 'DEFAULT'),
                        (e[(e.RESET = 1200)] = 'RESET'),
                        (e[(e.MORE_THAN_ONE_LVL = 800)] = 'MORE_THAN_ONE_LVL');
                })(va || (va = {}));
                const wa = (0, Q.Pi)(({ api: e, theme: u }) => {
                        const t = et(),
                            r = t.model,
                            a = t.controls,
                            o = r.progressAnimationState.get(),
                            i = r.computes,
                            l = r.prevProgressPoints.get(),
                            c = r.curProgressPoints.get(),
                            d = r.pointsForLevel.get(),
                            m = c - l > 3,
                            _ = 0 === c,
                            E = (0, n.useState)(va.DEFAULT),
                            A = E[0],
                            g = E[1],
                            F = (0, n.useRef)({ update: () => {} });
                        e.current.moveProgressBars = (0, n.useCallback)((e) => {
                            F.current.update(e);
                        }, []);
                        const p = (0, n.useState)({
                                maxPoints: i.levels().length * d,
                                previousEarnedPoints: l,
                                progressionSize: l,
                            }),
                            D = p[0],
                            C = D.previousEarnedPoints,
                            B = D.maxPoints,
                            h = D.progressionSize,
                            b = p[1];
                        (0, n.useEffect)(() => {
                            b((e) => {
                                const u = 0 === e.progressionSize ? l : e.progressionSize;
                                return {
                                    maxPoints: i.levels().length * d,
                                    previousEarnedPoints: u,
                                    progressionSize: c,
                                };
                            }),
                                g(_ ? va.RESET : m ? va.MORE_THAN_ONE_LVL : va.DEFAULT),
                                l !== c && W('pr_progress_bar');
                        }, [l, d, c, i, _, m]);
                        const f = (0, n.useMemo)(
                            () =>
                                Object.assign({}, ku, {
                                    withStack: !0,
                                    type: iu.Growing,
                                    delta: { duration: A, delay: 300 },
                                    line: { duration: A, delay: 300 },
                                }),
                            [A],
                        );
                        return (
                            (0, n.useEffect)(() => {
                                if (o === Qu.ProgressChange)
                                    return Au(() => {
                                        a.finishProgressionChange();
                                    }, 300 + va.DEFAULT);
                            }, [a, o]),
                            s().createElement(
                                'div',
                                { className: fa.base },
                                s().createElement('div', { className: fa.bg }),
                                s().createElement(
                                    'div',
                                    { className: ba(fa, o, 'progressWrapper') },
                                    s().createElement(ha, {
                                        animationSettings: f,
                                        deltaFrom: C,
                                        value: h,
                                        maxValue: B,
                                        api: F,
                                        theme: u,
                                    }),
                                ),
                            )
                        );
                    }),
                    Sa = ({ api: e, children: u, updateProgressBarPosition: t }) => {
                        const r = (0, n.useState)(0),
                            a = r[0],
                            o = r[1],
                            i = (0, n.useState)(0),
                            l = i[0],
                            c = i[1],
                            d = (0, n.useState)(!1),
                            m = d[0],
                            _ = d[1];
                        (0, n.useEffect)(
                            () =>
                                ir(() => {
                                    const u = (e) => {
                                        const u = e.value.scrollPosition;
                                        m || o(-u);
                                    };
                                    return (
                                        e.events.on('change', u),
                                        () => {
                                            e.events.off('change', u);
                                        }
                                    );
                                }),
                            [e, m],
                        );
                        const E = (0, n.useCallback)(
                                (e) => {
                                    _(!0), c(e.clientX), t();
                                },
                                [t],
                            ),
                            A = (0, n.useCallback)(() => {
                                _(!1), c(0), t();
                            }, [t]),
                            g = (0, n.useCallback)(
                                (u) => {
                                    if (m) {
                                        const r = J(-(e.getBounds()[1] || 0), 0, a + u.clientX - l);
                                        e.applyScroll(-r, !0), c(u.clientX), o(r), t();
                                    }
                                },
                                [m, e, a, l, t],
                            );
                        return s().createElement(
                            'div',
                            {
                                className: B()('ScrollDrag_base_df', m && 'ScrollDrag_base__grabbing_5a'),
                                onMouseDown: E,
                                onMouseUp: A,
                                onMouseMove: g,
                            },
                            u,
                        );
                    };
                function Ta(e, u, t, r, a, n, s) {
                    try {
                        var o = e[n](s),
                            i = o.value;
                    } catch (e) {
                        return void t(e);
                    }
                    o.done ? u(i) : Promise.resolve(i).then(r, a);
                }
                const Ra = (0, Q.Pi)(({ api: e }) => {
                        const u = et().model,
                            t = S(),
                            r = (0, n.useState)(!1),
                            a = r[0],
                            o = r[1],
                            i = (0, n.useState)(!1),
                            l = i[0],
                            c = i[1],
                            d = u.progressAnimationState.get(),
                            m = u.curProgressPoints.get(),
                            _ = (0, n.useRef)(-1),
                            E = u.computes,
                            A = (0, n.useRef)({ moveProgressBars: ee }),
                            g = (0, n.useRef)(null),
                            F = (0, n.useRef)(null),
                            p = e.animationScroll.scrollPosition,
                            D = e.getWrapperSize,
                            C = e.contentRef,
                            h = e.getContainerSize,
                            b = e.applyScroll;
                        (0, n.useLayoutEffect)(
                            () =>
                                ir(() => {
                                    o(t.remScreenWidth > 3e3), c(!0);
                                }),
                            [t.remScreenWidth],
                        );
                        const f = (0, n.useCallback)(
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
                            v = () => {
                                f(p.goal);
                            },
                            w = (0, n.useCallback)(() => {
                                const e = C.current,
                                    u = E.levels().length;
                                if (e && u > 0) {
                                    const t = h() || 0,
                                        r = D() || 0,
                                        a = t / u,
                                        n = E.currentLevel() * a,
                                        s = (r - e.offsetLeft - a) / 2;
                                    b(J(0, t - r, n - s), { immediate: d === Qu.ProgressAlreadyFinished });
                                }
                                0 === p.goal && f(p.goal);
                            }, [b, E, C, h, D, d, p.goal, f]);
                        return (
                            (0, n.useEffect)(() => {
                                m !== _.current && (w(), (_.current = m));
                            }, [m, w]),
                            (0, n.useEffect)(() => {
                                const e = (function () {
                                    var e,
                                        u =
                                            ((e = function* () {
                                                const e = h(),
                                                    u = p.goal;
                                                yield (0, X.Eu)(),
                                                    yield new Promise((e) => {
                                                        requestAnimationFrame(() => {
                                                            requestAnimationFrame(() => {
                                                                e();
                                                            });
                                                        });
                                                    });
                                                const t = h();
                                                f(t && e && t !== e ? (u * t) / e : u), w();
                                            }),
                                            function () {
                                                var u = this,
                                                    t = arguments;
                                                return new Promise(function (r, a) {
                                                    var n = e.apply(u, t);
                                                    function s(e) {
                                                        Ta(n, r, a, s, o, 'next', e);
                                                    }
                                                    function o(e) {
                                                        Ta(n, r, a, s, o, 'throw', e);
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
                            (0, n.useEffect)(() => Au(() => f(p.goal), 0), [m, p.goal, f]),
                            s().createElement(
                                'div',
                                {
                                    className: B()(
                                        'Content_base_78',
                                        a && 'Content_base__centered_8a',
                                        l && 'Content_base__layoutReady_cf',
                                    ),
                                    ref: g,
                                    onWheel: () => f(p.goal),
                                },
                                s().createElement(
                                    Jr.Horizontal.Area.Default,
                                    {
                                        api: e,
                                        className: 'Content_horizontalContent_80',
                                        classNames: { wrapper: 'Content_wrapper_5e' },
                                        barClassNames: { base: 'Content_horizontalBarVerticalScrollBar_ab' },
                                        onDrag: v,
                                    },
                                    s().createElement(
                                        Sa,
                                        { api: e, updateProgressBarPosition: v },
                                        s().createElement(la, { levelRef: F }),
                                        s().createElement(
                                            'div',
                                            { className: 'Content_progress_d9' },
                                            s().createElement(
                                                'div',
                                                { className: 'Content_progressArea_8f' },
                                                s().createElement(wa, { api: A }),
                                            ),
                                        ),
                                        s().createElement(pa, null),
                                    ),
                                ),
                            )
                        );
                    }),
                    ya = {
                        base: 'Progression_base_7c',
                        shadow: 'Progression_shadow_98',
                        shadow__left: 'Progression_shadow__left_ee',
                        shadow__right: 'Progression_shadow__right_14',
                        shadow__visible: 'Progression_shadow__visible_fb',
                    },
                    xa = (0, Q.Pi)(() => {
                        const e = et(),
                            u = e.model,
                            t = e.controls,
                            r = u.progressAnimationState.get(),
                            a = (0, n.useState)(!1),
                            o = a[0],
                            i = a[1],
                            l = (0, n.useState)(!1),
                            c = l[0],
                            d = l[1],
                            m = u.computes.isProgressionCompleted(),
                            _ = u.computes.wasProgressionCompletedBeforeStart(),
                            E = Rr();
                        return (
                            (0, n.useEffect)(() => {
                                const e = (e) => {
                                    const u = E.contentRef.current.offsetLeft,
                                        t = e.value.scrollPosition,
                                        r = E.getWrapperSize() || 0,
                                        a = E.getContainerSize() || 0;
                                    i(t > u), d(t + r < a - u);
                                };
                                return (
                                    E.events.on('change', e),
                                    () => {
                                        E.events.off('change', e);
                                    }
                                );
                            }, [E]),
                            (0, n.useEffect)(
                                () =>
                                    _
                                        ? t.completeProgression(!0)
                                        : r === Qu.ChangeCompleted && m
                                          ? Au(() => {
                                                t.completeProgression(!1);
                                            }, 1600)
                                          : r !== Qu.Scrolling || _
                                            ? r === Qu.HighlightCard
                                                ? Au(() => {
                                                      t.finishHighlightCard();
                                                  }, 500)
                                                : void 0
                                            : Au(() => {
                                                  t.finishScrolling();
                                              }, 1200),
                                [r, _, m, t],
                            ),
                            s().createElement(
                                'div',
                                { className: ba(ya, r, 'base') },
                                s().createElement('div', {
                                    className: B()(ya.shadow, ya.shadow__left, o && ya.shadow__visible),
                                }),
                                s().createElement('div', {
                                    className: B()(ya.shadow, ya.shadow__right, c && ya.shadow__visible),
                                }),
                                s().createElement(Ra, { api: E }),
                            )
                        );
                    }),
                    Pa = R.strings.winback.progression.header,
                    La = (0, Q.Pi)(() => {
                        const e = et(),
                            u = e.model,
                            t = e.controls,
                            r = u.computes.isComplete,
                            a = S(),
                            n = !r() && u.isClaimRewardsAvailable.get(),
                            o = u.progressionName.get(),
                            l = i.O.client.graphicsQuality.isLow();
                        Y(j.n.ESCAPE, t.onClose);
                        const c = `url(R.images.winback.gui.maps.icons.progression.bg_${o}${l ? '_dds' : ''})`;
                        return s().createElement(
                            'div',
                            { className: 'App_base_ae' },
                            s().createElement(
                                'div',
                                { className: 'App_bgContainer_84' },
                                s().createElement('div', { className: 'App_bg_ee', style: { backgroundImage: c } }),
                                s().createElement('div', { className: 'App_bottomShadow_75' }),
                            ),
                            s().createElement(
                                'div',
                                { className: 'App_content_67' },
                                s().createElement(Br, null),
                                s().createElement(
                                    'div',
                                    {
                                        className: B()(
                                            'App_mainContent_21',
                                            a.mediaSize === f.Medium &&
                                                a.remScreenHeight >= 1200 &&
                                                'App_mainContent__largeHeight_13',
                                        ),
                                    },
                                    s().createElement(
                                        'div',
                                        { className: 'App_battleQuests_86' },
                                        s().createElement(Fr, null),
                                    ),
                                    s().createElement(xa, null),
                                ),
                                s().createElement(
                                    'div',
                                    { className: 'App_buttonInfo_28' },
                                    s().createElement(V, {
                                        caption: Ue(Pa.aboutBtn, o, 'label'),
                                        type: 'info',
                                        side: 'left',
                                        onClick: t.onAboutClicked,
                                    }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: 'App_buttonClose_a5' },
                                    s().createElement(V, {
                                        caption: Ue(Pa.closeBtn, o, 'label'),
                                        type: 'close',
                                        side: 'right',
                                        onClick: t.onClose,
                                    }),
                                    n &&
                                        s().createElement(Kt, {
                                            className: 'App_buttonTakeRewards_11',
                                            onClick: t.onShowSelectableRewardsView,
                                        }),
                                ),
                            ),
                        );
                    }),
                    Ma = {
                        [H.PROGRESSION]: () =>
                            s().createElement(
                                Ju,
                                { options: { context: 'model.progressionModel' } },
                                s().createElement(La, null),
                            ),
                    },
                    Na = ({ viewType: e }) => {
                        const u = Ma[e];
                        return u
                            ? s().createElement(
                                  n.Suspense,
                                  { fallback: s().createElement('div', null) },
                                  s().createElement(u, null),
                              )
                            : (console.error('Unknown view type for render', e), null);
                    },
                    ka = se()(({ observableModel: e }) => {
                        const u = { root: e.object(), progressionModel: e.object('progressionModel') };
                        return Object.assign({}, u);
                    }, ee),
                    Oa = ka[0],
                    Ia = ka[1],
                    Ha = (0, Q.Pi)(() => {
                        const e = Ia().model.root.get().viewType;
                        return s().createElement(
                            'div',
                            { className: 'App_base_43' },
                            s().createElement(Na, { viewType: e }),
                        );
                    });
                engine.whenReady.then(() => {
                    I().render(
                        s().createElement(
                            k,
                            null,
                            s().createElement(
                                Oa,
                                null,
                                s().createElement(
                                    'div',
                                    { className: 'ProgressionMainView_base_e4' },
                                    s().createElement(Ha, null),
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
        (__webpack_require__.j = 556),
        (() => {
            var e = { 556: 0 };
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
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(241));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
