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
                t.r(u), t.d(u, { mouse: () => i, onResize: () => a });
                var n = t(2472),
                    r = t(1176);
                const a = (0, n.E)('clientResized'),
                    o = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const i = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function u() {
                        e.enabled && (0, r.R)(!1);
                    }
                    function t() {
                        e.enabled && (0, r.R)(!0);
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
                            : (0, r.R)(!1);
                    }
                    const a = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const a = `mouse${u}`,
                                        i = o[u]((e) => t([e, 'outside']));
                                    function s(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, s),
                                        n(),
                                        () => {
                                            r &&
                                                (i(),
                                                window.removeEventListener(a, s),
                                                (e.listeners -= 1),
                                                n(),
                                                (r = !1));
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
                            e.enabled && (0, r.R)(!0);
                        },
                        disableOutside() {
                            e.enabled && (0, r.R)(!1);
                        },
                    });
                })();
            },
            5959: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        events: () => n,
                        getMouseGlobalPosition: () => a,
                        getSize: () => r,
                        graphicsQuality: () => o,
                    });
                var n = t(527);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const o = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, u, t) => {
                'use strict';
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => n });
            },
            2472: (e, u, t) => {
                'use strict';
                function n(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                t.d(u, { E: () => n });
            },
            3138: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => r });
                var n = t(5959);
                const r = { view: t(7641), client: n };
            },
            3722: (e, u, t) => {
                'use strict';
                function n(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function r(e, u, t) {
                    return `url(${n(e, u, t)})`;
                }
                t.r(u), t.d(u, { getBgUrl: () => r, getTextureUrl: () => n });
            },
            6112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => r });
                var n = t(2472);
                const r = {
                    onTextureFrozen: (0, n.E)('self.onTextureFrozen'),
                    onTextureReady: (0, n.E)('self.onTextureReady'),
                    onDomBuilt: (0, n.E)('self.onDomBuilt'),
                    onLoaded: (0, n.E)('self.onLoaded'),
                    onDisplayChanged: (0, n.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, n.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, n.E)('children.onAdded'),
                        onLoaded: (0, n.E)('children.onLoaded'),
                        onRemoved: (0, n.E)('children.onRemoved'),
                        onAttached: (0, n.E)('children.onAttached'),
                        onTextureReady: (0, n.E)('children.onTextureReady'),
                        onRequestPosition: (0, n.E)('children.requestPosition'),
                    },
                };
            },
            7641: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => i,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => b,
                        events: () => a.U,
                        extraSize: () => y,
                        forceTriggerMouseMove: () => f,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => v,
                        getScale: () => F,
                        getSize: () => _,
                        getViewGlobalPosition: () => d,
                        isEventHandled: () => p,
                        isFocused: () => h,
                        pxToRem: () => D,
                        remToPx: () => C,
                        resize: () => m,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => g,
                        setEventHandled: () => B,
                        setInputPaddingsRem: () => s,
                        setSidePaddingsRem: () => E,
                        whenTutorialReady: () => w,
                    });
                var n = t(3722),
                    r = t(6112),
                    a = t(6538),
                    o = t(8566);
                function i(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function s(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function c(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function E(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function d(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: C(u.x), y: C(u.y) };
                }
                function A() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function F() {
                    return viewEnv.getScale();
                }
                function D(e) {
                    return viewEnv.pxToRem(e);
                }
                function C(e) {
                    return viewEnv.remToPx(e);
                }
                function g(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function h() {
                    return viewEnv.isFocused();
                }
                function B() {
                    return viewEnv.setEventHandled();
                }
                function p() {
                    return viewEnv.isEventHandled();
                }
                function f() {
                    viewEnv.forceTriggerMouseMove();
                }
                function v() {
                    return viewEnv.getShowingStatus();
                }
                const b = Object.keys(r.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === r.W[u]), e),
                        {},
                    ),
                    y = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    w = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : a.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => l });
                const n = ['args'];
                const r = 2,
                    a = 16,
                    o = 32,
                    i = 64,
                    s = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                o = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                    return r;
                                })(u, n);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, o, {
                                          arguments:
                                              ((r = a),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var r;
                    },
                    l = {
                        close(e) {
                            s('popover' === e ? r : o);
                        },
                        minimize() {
                            s(i);
                        },
                        move(e) {
                            s(a, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, u, t) => {
                'use strict';
                let n, r;
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
                    })(r || (r = {}));
            },
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => a });
                var n = t(3138);
                class r {
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
                        return window.__dataTracker || (window.__dataTracker = new r()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(e, u, t = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = n.O.view.addModelObserver(e, t, r);
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
                            const n = this._callbacks[t];
                            void 0 !== n && n(e, u);
                        });
                    }
                }
                r.__instance = void 0;
                const a = r;
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
                t.d(u, { kH: () => _, B3: () => l, Z5: () => o, lf: () => E, cy: () => i, B0: () => s, ry: () => C });
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
                const r = n;
                var a = t(1358);
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
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(s || (s = {}));
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = t(5521),
                    d = t(3138);
                const A = ['args'];
                function F(e, u, t, n, r, a, o) {
                    try {
                        var i = e[a](o),
                            s = i.value;
                    } catch (e) {
                        return void t(e);
                    }
                    i.done ? u(s) : Promise.resolve(s).then(n, r);
                }
                const D = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                    return new Promise(function (n, r) {
                                        var a = e.apply(u, t);
                                        function o(e) {
                                            F(a, n, r, o, i, 'next', e);
                                        }
                                        function i(e) {
                                            F(a, n, r, o, i, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    g = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                a = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                    return r;
                                })(u, A);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, a, {
                                          arguments:
                                              ((n = r),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, a));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    h = () => g(s.CLOSE),
                    B = (e, u) => {
                        e.keyCode === m.n.ESCAPE && u();
                    };
                var p = t(7572);
                const f = r.instance,
                    v = {
                        DataTracker: a.Z,
                        ViewModel: p.Z,
                        ViewEventType: s,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: E,
                        DateFormatType: _,
                        makeGlobalBoundingBox: D,
                        sendMoveEvent: (e) => g(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: h,
                        sendClosePopOverEvent: () => g(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            g(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, r = R.invalid('resId'), a) => {
                            const o = d.O.view.getViewGlobalPosition(),
                                i = t.getBoundingClientRect(),
                                l = i.x,
                                c = i.y,
                                E = i.width,
                                _ = i.height,
                                m = {
                                    x: d.O.view.pxToRem(l) + o.x,
                                    y: d.O.view.pxToRem(c) + o.y,
                                    width: d.O.view.pxToRem(E),
                                    height: d.O.view.pxToRem(_),
                                };
                            g(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: u,
                                bbox: D(m),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => B(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            B(e, h);
                        },
                        handleViewEvent: g,
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
                                    const r = Object.prototype.toString.call(u[n]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = u[n];
                                        t[n] = [];
                                        for (let u = 0; u < r.length; u++) t[n].push({ value: e(r[u].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
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
            6029: (e, u, t) => {
                'use strict';
                var n = {};
                t.r(n),
                    t.d(n, {
                        Area: () => wn,
                        Bar: () => vn,
                        DefaultScroll: () => yn,
                        Direction: () => sn,
                        defaultSettings: () => ln,
                        useHorizontalScrollApi: () => En,
                    });
                var r = {};
                t.r(r), t.d(r, { Area: () => $n, Bar: () => Gn, Default: () => jn, useVerticalScrollApi: () => xn });
                var a = t(6179),
                    o = t.n(a);
                const i = (e, u, t) =>
                    u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                        ? (u.extraLargeHeight && t.extraLarge) ||
                          (u.largeHeight && t.large) ||
                          (u.mediumHeight && t.medium) ||
                          (u.smallHeight && t.small) ||
                          (u.extraSmallHeight && t.extraSmall)
                            ? e
                            : null
                        : e;
                var s = t(3138);
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var c;
                function E(e, u, t) {
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
                        r = (function (e, u) {
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
                        a = Math.min(n, r);
                    return {
                        extraLarge: a === t.extraLarge.weight,
                        large: a === t.large.weight,
                        medium: a === t.medium.weight,
                        small: a === t.small.weight,
                        extraSmall: a === t.extraSmall.weight,
                        extraLargeWidth: n === t.extraLarge.weight,
                        largeWidth: n === t.large.weight,
                        mediumWidth: n === t.medium.weight,
                        smallWidth: n === t.small.weight,
                        extraSmallWidth: n === t.extraSmall.weight,
                        extraLargeHeight: r === t.extraLarge.weight,
                        largeHeight: r === t.large.weight,
                        mediumHeight: r === t.medium.weight,
                        smallHeight: r === t.small.weight,
                        extraSmallHeight: r === t.extraSmall.weight,
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
                const _ = s.O.client.getSize('rem'),
                    m = _.width,
                    d = _.height,
                    A = Object.assign({ width: m, height: d }, E(m, d, l)),
                    F = (0, a.createContext)(A),
                    D = ['children'];
                const C = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                            return r;
                        })(e, D);
                    const n = (0, a.useContext)(F),
                        r = n.extraLarge,
                        o = n.large,
                        s = n.medium,
                        l = n.small,
                        c = n.extraSmall,
                        E = n.extraLargeWidth,
                        _ = n.largeWidth,
                        m = n.mediumWidth,
                        d = n.smallWidth,
                        A = n.extraSmallWidth,
                        C = n.extraLargeHeight,
                        g = n.largeHeight,
                        h = n.mediumHeight,
                        B = n.smallHeight,
                        p = n.extraSmallHeight,
                        f = { extraLarge: C, large: g, medium: h, small: B, extraSmall: p };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && r) return u;
                        if (t.large && o) return u;
                        if (t.medium && s) return u;
                        if (t.small && l) return u;
                        if (t.extraSmall && c) return u;
                    } else {
                        if (t.extraLargeWidth && E) return i(u, t, f);
                        if (t.largeWidth && _) return i(u, t, f);
                        if (t.mediumWidth && m) return i(u, t, f);
                        if (t.smallWidth && d) return i(u, t, f);
                        if (t.extraSmallWidth && A) return i(u, t, f);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && C) return u;
                            if (t.largeHeight && g) return u;
                            if (t.mediumHeight && h) return u;
                            if (t.smallHeight && B) return u;
                            if (t.extraSmallHeight && p) return u;
                        }
                    }
                    return null;
                };
                C.defaultProps = {
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
                };
                (0, a.memo)(C);
                const g = (e) => {
                        const u = (0, a.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    },
                    h = (0, a.memo)(({ children: e }) => {
                        const u = (0, a.useContext)(F),
                            t = (0, a.useState)(u),
                            n = t[0],
                            r = t[1],
                            i = (0, a.useCallback)((e, u) => {
                                const t = s.O.view.pxToRem(e),
                                    n = s.O.view.pxToRem(u);
                                r(Object.assign({ width: t, height: n }, E(t, n, l)));
                            }, []);
                        g(() => {
                            engine.on('clientResized', i);
                        }),
                            (0, a.useEffect)(() => () => engine.off('clientResized', i), [i]);
                        const c = (0, a.useMemo)(() => Object.assign({}, n), [n]);
                        return o().createElement(F.Provider, { value: c }, e);
                    });
                var B = t(6483),
                    p = t.n(B),
                    f = t(926),
                    v = t.n(f);
                let b, y, w;
                !(function (e) {
                    (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = l.small.width)] = 'Small'),
                        (e[(e.Medium = l.medium.width)] = 'Medium'),
                        (e[(e.Large = l.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                })(b || (b = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.width)] = 'Small'),
                            (e[(e.Medium = l.medium.width)] = 'Medium'),
                            (e[(e.Large = l.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                    })(y || (y = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = l.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.height)] = 'Small'),
                            (e[(e.Medium = l.medium.height)] = 'Medium'),
                            (e[(e.Large = l.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.height)] = 'ExtraLarge');
                    })(w || (w = {}));
                const x = () => {
                        const e = (0, a.useContext)(F),
                            u = e.width,
                            t = e.height,
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return b.ExtraLarge;
                                    case e.large:
                                        return b.Large;
                                    case e.medium:
                                        return b.Medium;
                                    case e.small:
                                        return b.Small;
                                    case e.extraSmall:
                                        return b.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), b.ExtraSmall;
                                }
                            })(e),
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return y.ExtraLarge;
                                    case e.largeWidth:
                                        return y.Large;
                                    case e.mediumWidth:
                                        return y.Medium;
                                    case e.smallWidth:
                                        return y.Small;
                                    case e.extraSmallWidth:
                                        return y.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), y.ExtraSmall;
                                }
                            })(e),
                            o = ((e) => {
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
                        return { mediaSize: n, mediaWidth: r, mediaHeight: o, remScreenWidth: u, remScreenHeight: t };
                    },
                    S = ['children', 'className'];
                function M() {
                    return (
                        (M =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        M.apply(this, arguments)
                    );
                }
                const T = {
                        [y.ExtraSmall]: '',
                        [y.Small]: v().SMALL_WIDTH,
                        [y.Medium]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH}`,
                        [y.Large]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH} ${v().LARGE_WIDTH}`,
                        [y.ExtraLarge]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH} ${v().LARGE_WIDTH} ${v().EXTRA_LARGE_WIDTH}`,
                    },
                    L = {
                        [w.ExtraSmall]: '',
                        [w.Small]: v().SMALL_HEIGHT,
                        [w.Medium]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT}`,
                        [w.Large]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT} ${v().LARGE_HEIGHT}`,
                        [w.ExtraLarge]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT} ${v().LARGE_HEIGHT} ${v().EXTRA_LARGE_HEIGHT}`,
                    },
                    k = {
                        [b.ExtraSmall]: '',
                        [b.Small]: v().SMALL,
                        [b.Medium]: `${v().SMALL} ${v().MEDIUM}`,
                        [b.Large]: `${v().SMALL} ${v().MEDIUM} ${v().LARGE}`,
                        [b.ExtraLarge]: `${v().SMALL} ${v().MEDIUM} ${v().LARGE} ${v().EXTRA_LARGE}`,
                    },
                    P = (e) => {
                        let u = e.children,
                            t = e.className,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, S);
                        const r = x(),
                            a = r.mediaWidth,
                            i = r.mediaHeight,
                            s = r.mediaSize;
                        return o().createElement('div', M({ className: p()(t, T[a], L[i], k[s]) }, n), u);
                    },
                    N = ['children'];
                const O = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                            return r;
                        })(e, N);
                    return o().createElement(h, null, o().createElement(P, t, u));
                };
                var H = t(493),
                    I = t.n(H);
                function W(e) {
                    engine.call('PlaySound', e);
                }
                const V = {
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
                        base: 'ActionButton_base_a0',
                        base__hovered: 'ActionButton_base__hovered_ea',
                        icon: 'ActionButton_icon_6f',
                        icon__small: 'ActionButton_icon__small_50',
                        icon__normal: 'ActionButton_icon__normal_d8',
                        base__mouseDown: 'ActionButton_base__mouseDown_b7',
                        label: 'ActionButton_label_76',
                        base__visibleLabel: 'ActionButton_base__visibleLabel_f7',
                    };
                let U, j;
                !(function (e) {
                    (e.COMPARE = 'compare'), (e.PREVIEW = 'preview');
                })(U || (U = {})),
                    (function (e) {
                        (e.SMALL = 'small'), (e.NORMAL = 'normal');
                    })(j || (j = {}));
                const $ = [
                    'label',
                    'isVisibleLabel',
                    'autofocus',
                    'soundHover',
                    'soundClick',
                    'size',
                    'onClick',
                    'onMouseEnter',
                    'onMouseLeave',
                    'onMouseDown',
                    'onMouseUp',
                    'onFocus',
                    'onBlur',
                    'type',
                ];
                function z() {
                    return (
                        (z =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        z.apply(this, arguments)
                    );
                }
                const X = {
                        [U.PREVIEW]: 'R.images.gui.maps.icons.library.previewVehicle',
                        [U.COMPARE]: 'R.images.gui.maps.icons.library.compareVehicle',
                    },
                    Y = (0, a.memo)((e) => {
                        let u = e.label,
                            t = e.isVisibleLabel,
                            n = void 0 !== t && t,
                            r = e.autofocus,
                            i = void 0 !== r && r,
                            s = e.soundHover,
                            l = void 0 === s ? 'highlight' : s,
                            c = e.soundClick,
                            E = void 0 === c ? 'play' : c,
                            _ = e.size,
                            m = void 0 === _ ? j.NORMAL : _,
                            d = e.onClick,
                            A = e.onMouseEnter,
                            F = e.onMouseLeave,
                            D = e.onMouseDown,
                            C = e.onMouseUp,
                            g = e.onFocus,
                            h = e.onBlur,
                            B = e.type,
                            f = void 0 === B ? U.PREVIEW : B,
                            v = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, $);
                        const b = (0, a.useState)(!1),
                            y = b[0],
                            w = b[1],
                            x = (0, a.useState)(!1),
                            S = x[0],
                            M = x[1],
                            T = (0, a.useState)(i),
                            L = T[0],
                            k = T[1],
                            R = (0, a.useRef)(null),
                            P = (0, a.useCallback)(() => {
                                R.current && (R.current.focus(), k(!0));
                            }, []),
                            N = (0, a.useCallback)(
                                (e) => {
                                    L && null !== R.current && !R.current.contains(e.target) && k(!1);
                                },
                                [L],
                            );
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mousedown', N),
                                () => {
                                    document.removeEventListener('mousedown', N);
                                }
                            ),
                            [N],
                        ),
                            (0, a.useEffect)(() => {
                                k(i);
                            }, [i]);
                        const O = (0, a.useCallback)(
                                (e) => {
                                    d && d(e);
                                },
                                [d],
                            ),
                            H = (0, a.useCallback)(
                                (e) => {
                                    w(!0), D && D(e), E && W(E), i && P();
                                },
                                [i, D, P, E],
                            ),
                            I = (0, a.useCallback)(
                                (e) => {
                                    w(!1), C && C(e);
                                },
                                [C],
                            ),
                            V = (0, a.useCallback)(
                                (e) => {
                                    A && A(e), l && W(l), M(!0);
                                },
                                [A, l],
                            ),
                            Y = (0, a.useCallback)(
                                (e) => {
                                    w(!1), M(!1), F && F(e);
                                },
                                [F],
                            ),
                            q = (0, a.useCallback)(
                                (e) => {
                                    k(!0), g && g(e);
                                },
                                [g],
                            ),
                            K = (0, a.useCallback)(
                                (e) => {
                                    k(!1), h && h(e);
                                },
                                [h],
                            ),
                            Z = p()(
                                G.base,
                                n && G.base__visibleLabel,
                                y && G.base__mouseDown,
                                S && G.base__hovered,
                                L && G.base__focused,
                            ),
                            Q = p()(G.icon, G[`icon__${m}`]);
                        return o().createElement(
                            'div',
                            z(
                                {
                                    ref: R,
                                    className: Z,
                                    onClick: O,
                                    onMouseEnter: V,
                                    onMouseLeave: Y,
                                    onMouseDown: H,
                                    onMouseUp: I,
                                    onFocus: q,
                                    onBlur: K,
                                },
                                v,
                            ),
                            o().createElement('div', { className: Q, style: { backgroundImage: `url(${X[f]})` } }),
                            o().createElement('div', { className: G.label }, u),
                        );
                    });
                var q = t(9887),
                    K = t.n(q);
                const Z = ['xl', 'lg', 'md', 'sm', 'xs'],
                    Q = (e) => e.includes('_') && ((e) => Z.includes(e))(e.split('_').at(-1)),
                    J = [b.ExtraLarge, b.Large, b.Medium, b.Small, b.ExtraSmall],
                    ee = (e, u) =>
                        Object.keys(e).reduce((t, n) => {
                            if (n in t) return t;
                            if (Q(n)) {
                                const r = n.split('_').slice(0, -1).join('_');
                                if (r in t) return t;
                                const a = J.indexOf(u),
                                    o = (-1 !== a ? Z.slice(a) : [])
                                        .map((e) => r + '_' + e)
                                        .find((u) => void 0 !== e[u]),
                                    i = o ? e[o] : void 0;
                                return (t[r] = void 0 !== i ? i : e[r]), t;
                            }
                            const r = e[n];
                            return (
                                void 0 === r ||
                                    ((e, u) => Z.some((t) => void 0 !== u[`${e}_${t}`]))(n, e) ||
                                    (t[n] = r),
                                t
                            );
                        }, {}),
                    ue = (e, u = ee) => {
                        const t = (
                            (e, u = ee) =>
                            (t) => {
                                const n = x().mediaSize,
                                    r = (0, a.useMemo)(() => u(t, n), [t, n]);
                                return o().createElement(e, r);
                            }
                        )(e, u);
                        return o().memo((u) =>
                            Object.keys(u).some((e) => Q(e) && void 0 !== u[e])
                                ? o().createElement(t, u)
                                : o().createElement(e, u),
                        );
                    },
                    te = {
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
                    ne = [
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
                function re() {
                    return (
                        (re =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        re.apply(this, arguments)
                    );
                }
                Object.keys(K());
                const ae = {
                        XL: { mt: te.mt__XL, mr: te.mr__XL, mb: te.mb__XL, ml: te.ml__XL },
                        LG: { mt: te.mt__LG, mr: te.mr__LG, mb: te.mb__LG, ml: te.ml__LG },
                        MDp: { mt: te.mt__MDp, mr: te.mr__MDp, mb: te.mb__MDp, ml: te.ml__MDp },
                        MD: { mt: te.mt__MD, mr: te.mr__MD, mb: te.mb__MD, ml: te.ml__MD },
                        SMp: { mt: te.mt__SMp, mr: te.mr__SMp, mb: te.mb__SMp, ml: te.ml__SMp },
                        SM: { mt: te.mt__SM, mr: te.mr__SM, mb: te.mb__SM, ml: te.ml__SM },
                        XS: { mt: te.mt__XS, mr: te.mr__XS, mb: te.mb__XS, ml: te.ml__XS },
                    },
                    oe = (Object.keys(ae), ['mt', 'mr', 'mb', 'ml']),
                    ie = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    se = ue((e) => {
                        let u = e.className,
                            t = e.width,
                            n = e.height,
                            r = e.m,
                            i = e.mt,
                            s = void 0 === i ? r : i,
                            l = e.mr,
                            c = void 0 === l ? r : l,
                            E = e.mb,
                            _ = void 0 === E ? r : E,
                            m = e.ml,
                            d = void 0 === m ? r : m,
                            A = e.column,
                            F = e.row,
                            D = e.flexDirection,
                            C = void 0 === D ? (A ? 'column' : F && 'row') || void 0 : D,
                            g = e.flexStart,
                            h = e.center,
                            B = e.flexEnd,
                            f = e.spaceBetween,
                            v = e.spaceAround,
                            b = e.justifyContent,
                            y =
                                void 0 === b
                                    ? (g ? 'flex-start' : h && 'center') ||
                                      (B && 'flex-end') ||
                                      (f && 'space-between') ||
                                      (v && 'space-around') ||
                                      void 0
                                    : b,
                            w = e.alignItems,
                            x = void 0 === w ? (g ? 'flex-start' : h && 'center') || (B && 'flex-end') || void 0 : w,
                            S = e.alignSelf,
                            M = e.wrap,
                            T = e.flexWrap,
                            L = void 0 === T ? (M ? 'wrap' : void 0) : T,
                            k = e.grow,
                            R = e.shrink,
                            P = e.flex,
                            N = void 0 === P ? (k || R ? `${k ? 1 : 0} ${R ? 1 : 0} auto` : void 0) : P,
                            O = e.style,
                            H = e.children,
                            I = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, ne);
                        const W = (0, a.useMemo)(() => {
                                const e = { mt: s, mr: c, mb: _, ml: d },
                                    u = ((e) =>
                                        oe.reduce((u, t) => {
                                            const n = e[t];
                                            return n && 'number' != typeof n ? u.concat(ae[!0 === n ? 'MD' : n][t]) : u;
                                        }, []))(e),
                                    r = ((e) =>
                                        oe.reduce((u, t) => {
                                            const n = e[t];
                                            return 'number' == typeof n && (u[ie[t]] = n + 'rem'), u;
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, O, r, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== n && 'number' == typeof n ? n + 'rem' : n,
                                        flex: N,
                                        alignSelf: S,
                                        display: C || x ? 'flex' : void 0,
                                        flexDirection: C,
                                        flexWrap: L,
                                        justifyContent: y,
                                        alignItems: x,
                                    }),
                                    computedClassNames: u,
                                };
                            }, [t, n, s, c, _, d, O, N, S, C, L, y, x]),
                            V = W.computedStyle,
                            G = W.computedClassNames;
                        return o().createElement('div', re({ className: p()(te.base, ...G, u), style: V }, I), H);
                    });
                let le;
                function ce(e) {
                    return e.replace(/-/g, '_');
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(le || (le = {}));
                const Ee = (e) => e.replace(/&nbsp;/g, ' '),
                    _e = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    me = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    de = (e, u, t = le.left) => e.split(u).reduce(t === le.left ? _e : me, []),
                    Ae = (() => {
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
                    Fe = ['zh_cn', 'zh_sg', 'zh_tw'],
                    De = (e, u = le.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        return Fe.includes(t)
                            ? Ae(e)
                            : ((e, u = le.left) => {
                                  let t = [];
                                  const n =
                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                      r = Ee(e);
                                  return de(r, /( )/, u).forEach((e) => (t = t.concat(de(e, n, le.left)))), t;
                              })(e, u);
                    },
                    Ce = 'FormatText_base_d0',
                    ge = ({ binding: e, text: u = '', classMix: t, alignment: n = le.left }) =>
                        null === u
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : o().createElement(
                                  a.Fragment,
                                  null,
                                  u.split('\n').map((u, r) =>
                                      o().createElement(
                                          'div',
                                          { className: p()(Ce, t), key: `${u}-${r}` },
                                          ((e, u, t) =>
                                              e
                                                  .split(/%\((.*?)\)(?:[sd])?/g)
                                                  .map((e) => (t && e in t ? t[e] : De(e, u))))(u, n, e).map((e, u) =>
                                              o().createElement(a.Fragment, { key: `${u}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              );
                var he = t(3532),
                    Be = t.n(he);
                const pe = {
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
                    fe = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function ve() {
                    return (
                        (ve =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        ve.apply(this, arguments)
                    );
                }
                Object.keys(K());
                const be = Object.keys(Be()),
                    ye = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    we = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    xe = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Se = {
                        XL: { mt: 'XL', mr: 'XL', mb: 'XL', ml: 'XL' },
                        LG: { mt: 'LG', mr: 'LG', mb: 'LG', ml: 'LG' },
                        MDp: { mt: 'MDp', mr: 'MDp', mb: 'MDp', ml: 'MDp' },
                        MD: { mt: 'MD', mr: 'MD', mb: 'MD', ml: 'MD' },
                        SMp: { mt: 'SMp', mr: 'SMp', mb: 'SMp', ml: 'SMp' },
                        SM: { mt: 'SM', mr: 'SM', mb: 'SM', ml: 'SM' },
                        XS: { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    },
                    Me =
                        (Object.keys(Se),
                        {
                            'heading-H144': { mt: 'XL', mr: 'LG', mb: 'LG', ml: 'LG' },
                            'heading-H73': { mt: 'LG', mr: 'MD', mb: 'MD', ml: 'MD' },
                            'heading-H56': ye,
                            'heading-H36': ye,
                            'heading-H28': we,
                            'heading-H24': we,
                            'heading-H24R': we,
                            'heading-H22': we,
                            'heading-H20R': we,
                            'heading-H18': we,
                            'heading-H15': xe,
                            'heading-H14': xe,
                            'paragraph-P24': we,
                            'paragraph-P18': we,
                            'paragraph-P16': we,
                            'paragraph-P14': xe,
                            'paragraph-P12': xe,
                            'paragraph-P10': xe,
                        }),
                    Te =
                        (Object.keys(Me),
                        (e) =>
                            e
                                ? ((e) => be.includes(e))(e)
                                    ? { colorClassName: pe[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    Le = ue((e) => {
                        let u = e.text,
                            t = e.variant,
                            n = e.className,
                            r = e.color,
                            i = e.m,
                            s = e.mt,
                            l = void 0 === s ? i : s,
                            c = e.mr,
                            E = void 0 === c ? i : c,
                            _ = e.mb,
                            m = void 0 === _ ? i : _,
                            d = e.ml,
                            A = void 0 === d ? i : d,
                            F = e.style,
                            D = e.format,
                            C = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, fe);
                        const g = (0, a.useMemo)(() => {
                                const e = Te(r),
                                    u = e.colorClassName,
                                    t = e.colorStyle,
                                    n = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, F, n), colorClassName: u };
                            }, [F, r]),
                            h = g.computedStyle,
                            B = g.colorClassName;
                        return o().createElement(
                            se,
                            ve(
                                {
                                    className: p()(pe.base, t && pe[t], B, n),
                                    style: h,
                                    mt: !0 === l ? Me[t || 'paragraph-P16'].mt : l,
                                    mr: !0 === E ? Me[t || 'paragraph-P16'].mr : E,
                                    mb: !0 === m ? Me[t || 'paragraph-P16'].mb : m,
                                    ml: !0 === A ? Me[t || 'paragraph-P16'].ml : A,
                                },
                                C,
                            ),
                            void 0 !== D ? o().createElement(ge, ve({}, D, { text: u })) : u,
                        );
                    });
                let ke, Re;
                !(function (e) {
                    (e.InProgress = 'inProgress'),
                        (e.InInventory = 'inInventory'),
                        (e.Locked = 'locked'),
                        (e.Purchasable = 'purchasable');
                })(ke || (ke = {})),
                    (function (e) {
                        e.QuestsWidget = 'questsWidget';
                    })(Re || (Re = {}));
                const Pe = (e, u) => {
                    let t;
                    const n = setTimeout(() => {
                        t = e();
                    }, u);
                    return () => {
                        'function' == typeof t && t(), clearTimeout(n);
                    };
                };
                function Ne() {
                    const e = (0, a.useRef)(0);
                    var u;
                    return (
                        (u = () => {
                            window.clearTimeout(e.current);
                        }),
                        (0, a.useEffect)(() => u, []),
                        (0, a.useMemo)(
                            () => ({
                                run: (u, t) => {
                                    window.clearTimeout(e.current),
                                        (e.current = window.setTimeout(() => {
                                            u(), (e.current = 0);
                                        }, t));
                                },
                                clear: () => {
                                    window.clearTimeout(e.current), (e.current = 0);
                                },
                                get isRunning() {
                                    return 0 !== e.current;
                                },
                            }),
                            [],
                        )
                    );
                }
                var Oe = t(3403);
                const He = {
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
                    Ie = [
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
                function We() {
                    return (
                        (We =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        We.apply(this, arguments)
                    );
                }
                class Ve extends o().PureComponent {
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
                            n = e.goto,
                            r = e.side,
                            a = e.type,
                            i = e.classNames,
                            s = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            E = e.onMouseUp,
                            _ =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                    return r;
                                })(e, Ie)),
                            m = p()(He.base, He[`base__${a}`], He[`base__${r}`], null == i ? void 0 : i.base),
                            d = p()(He.icon, He[`icon__${a}`], He[`icon__${r}`], null == i ? void 0 : i.icon),
                            A = p()(He.glow, null == i ? void 0 : i.glow),
                            F = p()(He.caption, He[`caption__${a}`], null == i ? void 0 : i.caption),
                            D = p()(He.goto, null == i ? void 0 : i.goto);
                        return o().createElement(
                            'div',
                            We(
                                {
                                    className: m,
                                    onMouseEnter: this._onMouseEnter(s),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(E),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                _,
                            ),
                            'info' !== a && o().createElement('div', { className: He.shine }),
                            o().createElement('div', { className: d }, o().createElement('div', { className: A })),
                            o().createElement('div', { className: F }, u),
                            n && o().createElement('div', { className: D }, n),
                        );
                    }
                }
                Ve.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var Ge = t(5521),
                    Ue = t(4179);
                const je = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function $e(e = Ge.n.NONE, u = je, t = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== Ge.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (s.O.view.isEventHandled()) return;
                                s.O.view.setEventHandled(), u(n), t && n.stopPropagation();
                            }
                        }
                    }, [u, e, t]);
                }
                let ze, Xe, Ye, qe;
                !(function (e) {
                    (e[(e.Keyboard = 0)] = 'Keyboard'), (e[(e.Mouse = 1)] = 'Mouse');
                })(ze || (ze = {})),
                    (function (e) {
                        e.POST_PROGRESSION = 'postprogression';
                    })(Xe || (Xe = {})),
                    (function (e) {
                        (e.ACTIVE = 'active'),
                            (e.ACTIVE_LAST_HOURS = 'activeLastHours'),
                            (e.BUY = 'buy'),
                            (e.COMPLETED = 'completed'),
                            (e.POST_PROGRESSION = 'postProgression');
                    })(Ye || (Ye = {})),
                    (function (e) {
                        (e.PLAY = 'play'), (e.STOP = 'stop');
                    })(qe || (qe = {}));
                const Ke = ({ onClose: e }) => {
                        const u = (0, a.useCallback)(
                                (u) => {
                                    u.stopPropagation(), e(ze.Mouse);
                                },
                                [e],
                            ),
                            t = (0, a.useCallback)(() => {
                                e(ze.Keyboard);
                            }, [e]);
                        var n;
                        return (
                            (n = t),
                            $e(Ge.n.ESCAPE, n),
                            o().createElement(Ve, {
                                side: 'right',
                                type: 'close',
                                caption: R.strings.early_access.header.closeLink(),
                                onClick: u,
                            })
                        );
                    },
                    Ze = 'Header_base_9c',
                    Qe = 'Header_container_21',
                    Je = 'Header_infoLinkWithBackButton_5f',
                    eu = 'Header_mainText_d6',
                    uu = 'Header_closeLink_df',
                    tu = 'InfoLinkWithBackButton_base_1e',
                    nu = 'InfoLinkWithBackButton_backButton_f7',
                    ru = R.strings.early_access.header,
                    au = ({ nation: e, onAbout: u, onBack: t }) =>
                        o().createElement(
                            'div',
                            { className: tu },
                            u && o().createElement(Ve, { caption: ru.infoLink(), type: 'info', onClick: u }),
                            t &&
                                e &&
                                o().createElement(Ve, {
                                    classNames: { base: nu },
                                    caption: ru.backLink.label(),
                                    goto: ru.backLink.goToLabel.$dyn(e),
                                    type: 'back',
                                    onClick: t,
                                }),
                        ),
                    ou = (e) => e.split(' ').splice(0, 2).join(' ').toLocaleUpperCase(),
                    iu = 'MainText_base_a4',
                    su = 'MainText_subtitle_d1',
                    lu = 'MainText_featureState_a2',
                    cu = 'MainText_date_8b',
                    Eu = 'MainText_separator_cb',
                    _u = 'MainText_gradientText_86',
                    mu = 'MainText_title_09',
                    du = R.strings.early_access.header,
                    Au = ({ className: e, featureState: u, fromTimestamp: t, toTimestamp: n, titleText: r }) => {
                        const i = u !== Ye.POST_PROGRESSION && u !== Ye.BUY,
                            s = i ? ou(Ue.Z5.getDateFormat(t, 1)) : void 0,
                            l = ou(Ue.Z5.getDateFormat(n, 1)),
                            c = p()(e && e, iu),
                            E = (0, a.useMemo)(
                                () =>
                                    o().createElement(Le, {
                                        className: cu,
                                        text: i ? du.dateFormat.between() : du.dateFormat.until(),
                                        format: { binding: { fromDate: s, toDate: l } },
                                    }),
                                [s, i, l],
                            );
                        return o().createElement(
                            'div',
                            { className: c },
                            o().createElement(
                                'div',
                                { className: su },
                                o().createElement(Le, { className: lu, text: du.featureName.$dyn(u) }),
                                u !== Ye.COMPLETED &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement('div', { className: Eu }),
                                        E,
                                    ),
                            ),
                            o().createElement(
                                'div',
                                { className: _u },
                                o().createElement(Le, { className: mu, text: r }),
                            ),
                        );
                    },
                    Fu = [
                        'className',
                        'featureState',
                        'endDate',
                        'startDate',
                        'titleText',
                        'handleAbout',
                        'handleBackToTree',
                        'nation',
                        'handleClose',
                    ];
                function Du() {
                    return (
                        (Du =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Du.apply(this, arguments)
                    );
                }
                const Cu = (0, a.memo)((e) => {
                    let u = e.className,
                        t = e.featureState,
                        n = e.endDate,
                        r = e.startDate,
                        a = e.titleText,
                        i = e.handleAbout,
                        s = e.handleBackToTree,
                        l = e.nation,
                        c = e.handleClose,
                        E = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                            return r;
                        })(e, Fu);
                    const _ = p()(Ze, u);
                    return o().createElement(
                        'div',
                        { className: _ },
                        o().createElement(
                            'div',
                            { className: Qe },
                            o().createElement(
                                'div',
                                Du({ className: Je }, E),
                                o().createElement(au, { nation: l, onAbout: i, onBack: s }),
                            ),
                            o().createElement(Au, {
                                className: eu,
                                featureState: t,
                                fromTimestamp: r,
                                toTimestamp: n,
                                titleText: a,
                            }),
                            c &&
                                o().createElement(
                                    'div',
                                    Du({ className: uu }, E),
                                    o().createElement(Ke, { onClose: c }),
                                ),
                        ),
                    );
                });
                function gu() {
                    return !1;
                }
                console.log;
                var hu = t(9174);
                function Bu(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return pu(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return pu(e, u);
                        })(e)) ||
                        (u && e && 'number' == typeof e.length)
                    ) {
                        t && (e = t);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function pu(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const fu = (e) => (0 === e ? window : window.subViews.get(e));
                var vu = t(3946);
                const bu = ((e, u) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: n = 'real', options: r, children: i, mocks: l }) {
                                const c = (0, a.useRef)([]),
                                    E = (t, n, r) => {
                                        var a;
                                        const o = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = fu,
                                                context: n = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function a(e, u = 0) {
                                                    viewEnv.removeDataChangedCallback(e, u)
                                                        ? r.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, u, t) => {
                                                        t.forEach((u) => {
                                                            const t = r.get(u);
                                                            void 0 !== t && t(e);
                                                        });
                                                    });
                                                });
                                                const o = (e) => {
                                                    const r = t(u),
                                                        a = n.split('.').reduce((e, u) => e[u], r);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? a
                                                        : e.split('.').reduce((e, u) => {
                                                              const t = e[u];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, a);
                                                };
                                                return {
                                                    subscribe: (t, a) => {
                                                        const i = 'string' == typeof a ? `${n}.${a}` : n,
                                                            l = s.O.view.addModelObserver(i, u, !0);
                                                        return r.set(l, t), e && t(o(a)), l;
                                                    },
                                                    readByPath: o,
                                                    createCallback: (e, u) => {
                                                        const t = o(u);
                                                        return (...u) => {
                                                            t(e(...u));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const u = o(e);
                                                        return () => {
                                                            u();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, t = Bu(r.keys()); !(e = t()).done; ) a(e.value, u);
                                                    },
                                                    unsubscribe: a,
                                                };
                                            })(n),
                                            i =
                                                'real' === t
                                                    ? o
                                                    : Object.assign({}, o, {
                                                          readByPath:
                                                              null != (a = null == r ? void 0 : r.getter)
                                                                  ? a
                                                                  : () => {},
                                                      }),
                                            l = (e) =>
                                                'mocks' === t ? (null == r ? void 0 : r.getter(e)) : i.readByPath(e),
                                            E = (e) => c.current.push(e),
                                            _ = e({
                                                mode: t,
                                                readByPath: l,
                                                externalModel: i,
                                                observableModel: {
                                                    array: (e, u) => {
                                                        const n = null != u ? u : l(e),
                                                            r = hu.LO.box(n, { equals: gu });
                                                        return (
                                                            'real' === t &&
                                                                i.subscribe(
                                                                    (0, hu.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (e, u) => {
                                                        const n = null != u ? u : l(e),
                                                            r = hu.LO.box(n, { equals: gu });
                                                        return (
                                                            'real' === t &&
                                                                i.subscribe(
                                                                    (0, hu.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (e, u) => {
                                                        const n = l(u);
                                                        if (Array.isArray(e)) {
                                                            const r = e.reduce(
                                                                (e, u) => ((e[u] = hu.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    i.subscribe(
                                                                        (0, hu.aD)((u) => {
                                                                            e.forEach((e) => {
                                                                                r[e].set(u[e]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                r
                                                            );
                                                        }
                                                        {
                                                            const r = e,
                                                                a = Object.entries(r),
                                                                o = a.reduce(
                                                                    (e, [u, t]) => ((e[t] = hu.LO.box(n[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    i.subscribe(
                                                                        (0, hu.aD)((e) => {
                                                                            a.forEach(([u, t]) => {
                                                                                o[t].set(e[u]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: E,
                                            }),
                                            m = { mode: t, model: _, externalModel: i, cleanup: E };
                                        return {
                                            model: _,
                                            controls: 'mocks' === t && r ? r.controls(m) : u(m),
                                            externalModel: i,
                                            mode: t,
                                        };
                                    },
                                    _ = (0, a.useRef)(!1),
                                    m = (0, a.useState)(n),
                                    d = m[0],
                                    A = m[1],
                                    F = (0, a.useState)(() => E(n, r, l)),
                                    D = F[0],
                                    C = F[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        _.current ? C(E(d, r, l)) : (_.current = !0);
                                    }, [l, d, r]),
                                    (0, a.useEffect)(() => {
                                        A(n);
                                    }, [n]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            D.externalModel.dispose(), c.current.forEach((e) => e());
                                        },
                                        [D],
                                    ),
                                    o().createElement(t.Provider, { value: D }, i)
                                );
                            },
                            () => (0, a.useContext)(t),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const u = {
                                    root: e.object(),
                                    currentVehicleCD: e.primitives(['currentVehicleCD']),
                                    vehicles: e.array('vehicles', []),
                                },
                                t = (0, vu.Om)(
                                    () => {
                                        return (
                                            (e = u.vehicles.get()),
                                            (t = (e) => Object.assign({}, e)),
                                            Array.isArray(e)
                                                ? e.map(t)
                                                : e.map((e, u, n) => t(null == e ? void 0 : e.value, u, n))
                                        );
                                        var e, t;
                                    },
                                    { equals: gu },
                                ),
                                n = (0, vu.Om)(() => u.currentVehicleCD.currentVehicleCD.get(), { equals: gu }),
                                r = (0, vu.Om)(() => t().find((e) => e.vehicleCD === n()) || t()[0], { equals: gu });
                            return Object.assign({}, u, { computes: { getCurrentVehicle: r, getVehicles: t } });
                        },
                        ({ externalModel: e }) => ({
                            compareVehicle: e.createCallback((e) => ({ vehicleCD: e }), 'onCompare'),
                            selectVehicle: e.createCallback((e) => ({ vehicleCD: e }), 'onSelectVehicle'),
                            showVehiclePreview: e.createCallback((e) => ({ vehicleCD: e }), 'onShowVehiclePreview'),
                            showInHangar: e.createCallback((e) => ({ vehicleCD: e }), 'onShowInHangar'),
                            aboutEvent: e.createCallbackNoArgs('onAboutEvent'),
                            backToHangar: e.createCallbackNoArgs('onBackToHangar'),
                            backToPrevScreen: e.createCallbackNoArgs('onBackToPrevScreen'),
                            buyTokens: e.createCallbackNoArgs('onBuyTokens'),
                            buyVehicle: e.createCallback((e) => ({ vehicleCD: e }), 'onBuyVehicle'),
                            goToQuests: e.createCallbackNoArgs('onGoToQuests'),
                            moveSpace: e.createCallback((e) => e, 'onMoveSpace'),
                            startMoving: e.createCallbackNoArgs('onStartMoving'),
                            onAnimationFinished: e.createCallbackNoArgs('onAnimationFinished'),
                        }),
                    ),
                    yu = bu[0],
                    wu = bu[1],
                    xu = 'App_base_2b',
                    Su = 'App_net_dd',
                    Mu = 'App_header_7b',
                    Tu = 'App_header__hide_2e',
                    Lu = 'App_buyTokensWidget_b1',
                    ku = 'App_buyTokensWidget__hide_67',
                    Ru = 'App_flag_c5',
                    Pu = 'App_flag__hide_66',
                    Nu = 'App_content_63',
                    Ou = 'App_description_bf',
                    Hu = 'App_description__withWidget_28',
                    Iu = 'App_description__hide_57',
                    Wu = 'App_tankViewButtons_4c',
                    Vu = 'App_tankViewButtons__hide_96',
                    Gu = 'App_tankViewButtons__onlyCompare_de',
                    Uu = 'App_carouselWrapper_f4',
                    ju = 'App_carouselWrapper__hide_f1',
                    $u = 'App_carousel_56',
                    zu = 'App_carousel__withWidget_69',
                    Xu = 'App_questWidgetWrapper_64',
                    Yu = 33,
                    qu = 0,
                    Ku = !0,
                    Zu = 'play';
                function Qu(e) {
                    const u = e.chunk,
                        t = u.rows * u.columns;
                    return (n) => {
                        const r = n % t,
                            a = (r % u.columns) * e.width,
                            o = Math.trunc(r / u.columns) * e.height;
                        return { path: e.getChunkPath(Math.trunc(n / t)), x: a, y: o };
                    };
                }
                const Ju = [
                    'width',
                    'height',
                    'getImageSource',
                    'frameCount',
                    'onAnimate',
                    'frameTime',
                    'initialFrameIndex',
                    'lastFrameIndex',
                    'loop',
                    'state',
                    'onAnimationDone',
                    'onAnimationComplete',
                    'poster',
                ];
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
                const ut = (0, a.memo)(function (e) {
                        let u = e.width,
                            t = e.height,
                            n = e.getImageSource,
                            r = e.frameCount,
                            i = e.onAnimate,
                            s = e.frameTime,
                            l = void 0 === s ? Yu : s,
                            c = e.initialFrameIndex,
                            E = void 0 === c ? qu : c,
                            _ = e.lastFrameIndex,
                            m = void 0 === _ ? r - 1 : _,
                            d = e.loop,
                            A = void 0 === d ? Ku : d,
                            F = e.state,
                            D = void 0 === F ? Zu : F,
                            C = e.onAnimationDone,
                            g = e.onAnimationComplete,
                            h = e.poster,
                            B = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, Ju);
                        const p = (0, a.useRef)(null);
                        return (
                            (0, a.useEffect)(() => {
                                const e = p.current;
                                if (!e) return;
                                const u = e.getContext('2d'),
                                    t = (t) => {
                                        u.clearRect(0, 0, e.width, e.height), u.drawImage(t.img, -t.x, -t.y);
                                    };
                                switch (D) {
                                    case 'play':
                                        return (function () {
                                            const e = rt(E, m, n),
                                                u = tt(E, m),
                                                r = window.setInterval(() => {
                                                    const n = u(),
                                                        a = e.get(n);
                                                    a
                                                        ? (null == i || i(n, a),
                                                          t(a),
                                                          n === m &&
                                                              (null == g || g(),
                                                              A || (null == C || C(), window.clearInterval(r))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, l);
                                            return () => window.clearInterval(r);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const e = 0 === E && h ? { path: h, x: 0, y: 0 } : n(E),
                                                u = new Image();
                                            u.src = e.path;
                                            const r = () => t(nt(e, u));
                                            return (
                                                u.addEventListener('load', r), () => u.removeEventListener('load', r)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [l, n, E, m, A, i, g, C, h, D]),
                            o().createElement('canvas', et({}, B, { width: u, height: t, ref: p }))
                        );
                    }),
                    tt = (e, u) => {
                        let t = e;
                        return () => {
                            const n = t;
                            return (t += 1), t > u && (t = e), n;
                        };
                    },
                    nt = (e, u) => Object.assign({}, e, { img: u }),
                    rt = (e, u, t) => {
                        const n = new Map(),
                            r = {};
                        for (let a = e; a <= u; a++) {
                            const e = t(a),
                                u = r[e.path];
                            if (u) n.set(a, nt(e, u));
                            else {
                                const u = new Image();
                                (r[e.path] = u),
                                    (u.src = e.path),
                                    (u.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${a})`,
                                            e.path,
                                            `(${e.x},${e.y})`,
                                        );
                                    }),
                                    n.set(a, nt(e, u));
                            }
                        }
                        return n;
                    },
                    at = [
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
                function ot(e) {
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
                const it = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: Ue.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    st = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            n = e.args,
                            r = e.onMouseEnter,
                            o = e.onMouseLeave,
                            i = e.onMouseDown,
                            s = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            E = e.ignoreMouseClick,
                            _ = void 0 !== E && E,
                            m = e.decoratorId,
                            d = void 0 === m ? 0 : m,
                            A = e.isEnabled,
                            F = void 0 === A || A,
                            D = e.targetId,
                            C = void 0 === D ? 0 : D,
                            g = e.onShow,
                            h = e.onHide,
                            B = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, at);
                        const p = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            f = (0, a.useMemo)(
                                () =>
                                    C ||
                                    ((e = 1) => {
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
                                    })().resId,
                                [C],
                            ),
                            v = (0, a.useCallback)(() => {
                                (p.current.isVisible && p.current.timeoutId) ||
                                    (it(t, d, { isMouseEvent: !0, on: !0, arguments: ot(n) }, f),
                                    g && g(),
                                    (p.current.isVisible = !0));
                            }, [t, d, n, f, g]),
                            b = (0, a.useCallback)(() => {
                                if (p.current.isVisible || p.current.timeoutId) {
                                    const e = p.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (p.current.timeoutId = 0)),
                                        it(t, d, { on: !1 }, f),
                                        p.current.isVisible && h && h(),
                                        (p.current.isVisible = !1);
                                }
                            }, [t, d, f, h]),
                            y = (0, a.useCallback)((e) => {
                                p.current.isVisible &&
                                    ((p.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (p.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(p.current.prevTarget) && b();
                                    }, 200)));
                            }, []);
                        (0, a.useEffect)(() => {
                            const e = p.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', y, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', y, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, a.useEffect)(() => {
                                !1 === F && b();
                            }, [F, b]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', b),
                                    () => {
                                        window.removeEventListener('mouseleave', b), b();
                                    }
                                ),
                                [b],
                            );
                        return F
                            ? (0, a.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((w = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((p.current.timeoutId = window.setTimeout(v, c ? 100 : 400)),
                                                      r && r(e),
                                                      w && w(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              b(), null == o || o(u), null == e || e(u);
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              !1 === _ && b(), null == s || s(u), null == e || e(u);
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              !1 === _ && b(), null == i || i(u), null == e || e(u);
                                          })(u.props.onMouseDown),
                                      },
                                      B,
                                  ),
                              )
                            : u;
                        var w;
                    };
                let lt;
                !(function (e) {
                    (e.SHORT_DATE = 'short-date'),
                        (e.SHORT_TIME = 'short-time'),
                        (e.SHORT_DATE_TIME = 'short-date-time'),
                        (e.FULL_DATE = 'full-date'),
                        (e.FULL_DATE_TIME = 'full-date-time'),
                        (e.MONTH = 'month'),
                        (e.MONTH_DATE = 'month-date'),
                        (e.DATE_MONTH = 'date-month'),
                        (e.MONTH_YEAR = 'month-year'),
                        (e.WEEK_DAY = 'week-day'),
                        (e.WEEK_DAY_TIME = 'week-day-time'),
                        (e.YEAR = 'year'),
                        (e.DATE_YEAR = 'date-year');
                })(lt || (lt = {}));
                const ct = 3600,
                    Et = 86400;
                Date.now();
                const _t = (e) => {
                        const u = new Date(1e3 * e),
                            t = u.getDate(),
                            n = R.strings.menu.dateTime.months.$num(u.getMonth() + 1),
                            r = u.getFullYear(),
                            a = ((e, u, t) => {
                                switch (u) {
                                    case lt.SHORT_DATE:
                                        return t
                                            ? Ue.Z5.getDateFormat(e, Ue.kH.SHORT_FORMAT)
                                            : Ue.cy.getTimeFormat('%d.%m.%y', e, !0);
                                    case lt.SHORT_TIME:
                                        return t
                                            ? Ue.Z5.getTimeFormat(e, Ue.lf.SHORT_FORMAT)
                                            : Ue.cy.getTimeFormat('%I:%M %p', e, !0);
                                    case lt.SHORT_DATE_TIME:
                                        return t
                                            ? `${Ue.Z5.getDateFormat(e, Ue.kH.SHORT_FORMAT)}, ${Ue.Z5.getTimeFormat(e, Ue.lf.SHORT_FORMAT)}`
                                            : Ue.cy.getTimeFormat('%d.%m.%y, %I:%M %p', e, !0);
                                    case lt.FULL_DATE:
                                        return t
                                            ? Ue.Z5.getDateFormat(e, Ue.kH.LONG_FORMAT)
                                            : Ue.cy.getTimeFormat('%B %d, %Y', e, !0);
                                    case lt.FULL_DATE_TIME:
                                        return t
                                            ? `${Ue.Z5.getDateFormat(e, Ue.kH.LONG_FORMAT)}, ${Ue.Z5.getTimeFormat(e, Ue.lf.SHORT_FORMAT)}`
                                            : Ue.cy.getTimeFormat('%B %d, %Y, %I:%M %p', e, !0);
                                    case lt.MONTH:
                                        return Ue.cy.getTimeFormat('%B', e, !0);
                                    case lt.MONTH_DATE:
                                        return Ue.cy.getTimeFormat('%B %e', e, !0);
                                    case lt.DATE_MONTH:
                                        return Ue.cy.getTimeFormat('%e %B', e, !0);
                                    case lt.MONTH_YEAR:
                                        return Ue.cy.getTimeFormat('%B %Y', e, !0);
                                    case lt.WEEK_DAY:
                                        return Ue.cy.getTimeFormat('%A', e, !0);
                                    case lt.WEEK_DAY_TIME:
                                        return t
                                            ? `${Ue.cy.getTimeFormat('%A', e, !0)} ${Ue.Z5.getTimeFormat(e, Ue.lf.SHORT_FORMAT)}`
                                            : Ue.cy.getTimeFormat('%A, %I:%M %p', e, !0);
                                    case lt.YEAR:
                                        return Ue.cy.getTimeFormat('%Y', e, !0);
                                    case lt.DATE_YEAR:
                                        return Ue.cy.getTimeFormat('%d, %Y', e, !0);
                                }
                            })(e, lt.SHORT_TIME, !0),
                            o = Math.floor(e % 60),
                            i = Math.floor(e / 60) % 60;
                        return {
                            day: t,
                            month: n,
                            year: r,
                            time: a,
                            hour: Math.floor((e / 3600) % 24),
                            min: i,
                            seconds: o,
                            totalDays: Math.floor(e / 86400),
                        };
                    },
                    mt = {
                        width: 270,
                        height: 143,
                        frameCount: 11,
                        chunk: { count: 1, rows: 3, columns: 4 },
                        getChunkPath: () => 'R.images.gui.maps.icons.early_access.widgets.tokens_hover_sequence',
                    },
                    dt = {
                        width: 367,
                        height: 192,
                        frameCount: 11,
                        chunk: { count: 1, rows: 3, columns: 4 },
                        getChunkPath: () => 'R.images.gui.maps.icons.early_access.widgets.tokens_hover_sequence_large',
                    },
                    At = {
                        width: 270,
                        height: 233,
                        frameCount: 11,
                        chunk: { count: 1, rows: 3, columns: 4 },
                        getChunkPath: () => 'R.images.gui.maps.icons.early_access.widgets.quests_hover_sequence',
                    },
                    Ft = {
                        width: 221,
                        height: 77,
                        frameCount: 80,
                        chunk: { count: 1, rows: 10, columns: 8 },
                        getChunkPath: () => 'R.images.gui.maps.icons.early_access.widgets.quests_cycle_hover_sequence',
                    },
                    Dt = {
                        width: 345,
                        height: 295,
                        frameCount: 11,
                        chunk: { count: 1, rows: 3, columns: 4 },
                        getChunkPath: () => 'R.images.gui.maps.icons.early_access.widgets.quests_hover_sequence_large',
                    },
                    Ct = {
                        width: 283,
                        height: 98,
                        frameCount: 112,
                        chunk: { count: 1, rows: 14, columns: 8 },
                        getChunkPath: () =>
                            'R.images.gui.maps.icons.early_access.widgets.quests_cycle_hover_sequence_large',
                    },
                    gt = 'QuestWidget_base_fb',
                    ht = 'QuestWidget_touchedZone_78',
                    Bt = 'QuestWidget_background_67',
                    pt = 'QuestWidget_hoverSequence_1c',
                    ft = 'QuestWidget_hoverSequence__visible_6c',
                    vt = 'QuestWidget_hoverCycleSequence_1b',
                    bt = 'QuestWidget_hoverCycleSequence__visible_d0',
                    yt = 'QuestWidget_content_61',
                    wt = 'QuestWidget_untilTextContainer_ec',
                    xt = 'QuestWidget_clockIcon_49',
                    St = 'QuestWidget_title_b8',
                    Mt = 'QuestWidget_goldTime_75',
                    Tt = 'QuestWidget_goldTime__isLastHours_c1',
                    Lt = R.strings.early_access.tankView.questsWidget,
                    kt = R.strings.early_access.entryPoint.tooltip.header,
                    Rt = (e) =>
                        e.hours > 0
                            ? o().createElement(Le, {
                                  text: e.minutes > 0 ? kt.hoursWithMinutes() : kt.hours(),
                                  format: {
                                      binding: {
                                          hour: o().createElement(Le, { text: e.hours.toString() }),
                                          min: o().createElement(Le, { text: e.minutes.toString() }),
                                      },
                                  },
                              })
                            : e.minutes > 0
                              ? o().createElement(Le, {
                                    text: kt.min(),
                                    format: { binding: { min: o().createElement(Le, { text: e.minutes.toString() }) } },
                                })
                              : o().createElement(Le, { text: kt.sec() }),
                    Pt = (0, a.memo)(
                        ({
                            handleClick: e,
                            handleMouseEnter: u,
                            handleMouseLeave: t,
                            currentDate: n,
                            endDate: r,
                            featureState: i,
                        }) => {
                            const s = x().mediaSize,
                                l = (0, a.useState)(qe.STOP),
                                c = l[0],
                                E = l[1],
                                _ = (0, a.useState)(qe.STOP),
                                m = _[0],
                                d = _[1],
                                A = (0, a.useRef)(0),
                                F = (0, a.useRef)(0),
                                D = s < b.Medium,
                                C = i === Ye.POST_PROGRESSION || i === Ye.BUY,
                                g = i === Ye.COMPLETED,
                                h = Ne(),
                                B = _t(r),
                                f = (function (e = 0) {
                                    let u = e;
                                    const t = Math.trunc(u / Et);
                                    u -= t * Et;
                                    const n = Math.trunc(u / ct);
                                    u -= n * ct;
                                    const r = Math.trunc(u / 60);
                                    return (u -= 60 * r), { days: t, hours: n, minutes: r, seconds: u };
                                })(r - n),
                                v = f.days <= 0,
                                y = g ? Lt.title.completed() : Lt.title.chapters(),
                                w = C ? Lt.title.postProgression() : y,
                                S = v
                                    ? {
                                          text: Lt.timeText.untilLastHours.$dyn(
                                              C || D ? 'postProgression' : 'chapters',
                                          ),
                                          binding: { time: Rt(f) },
                                      }
                                    : { text: Lt.timeText.until(), binding: { time: `${B.day} ${B.month}` } };
                            (0, a.useEffect)(() => {
                                if (h.isRunning) return () => h.clear();
                            }, []);
                            const M = (0, a.useCallback)(
                                    (e) => {
                                        A.current = e;
                                    },
                                    [A],
                                ),
                                T = (0, a.useCallback)(
                                    (e) => {
                                        F.current = e;
                                    },
                                    [F],
                                ),
                                L = D ? At : Dt,
                                k = D ? Ft : Ct;
                            return o().createElement(
                                'div',
                                { className: gt },
                                o().createElement('div', { className: Bt }),
                                o().createElement(
                                    st,
                                    {
                                        contentId:
                                            R.views.lobby.early_access.tooltips.EarlyAccessSimpleTooltipView('resId'),
                                        args: { state: Re.QuestsWidget },
                                        isEnabled: !0,
                                    },
                                    o().createElement('div', {
                                        onClick: e,
                                        onMouseEnter: () => {
                                            u(),
                                                (A.current = 0),
                                                E(qe.PLAY),
                                                h.run(() => {
                                                    (F.current = 0), d(qe.PLAY);
                                                }, 410);
                                        },
                                        onMouseLeave: () => {
                                            t(), E(qe.STOP), d(qe.STOP), h.clear();
                                        },
                                        className: ht,
                                    }),
                                ),
                                o().createElement(
                                    'div',
                                    { className: yt },
                                    o().createElement(Le, { className: St, text: w }),
                                    !g &&
                                        o().createElement(
                                            'div',
                                            { className: wt },
                                            v && o().createElement('div', { className: xt }),
                                            o().createElement(Le, {
                                                className: p()(Mt, v && Tt),
                                                text: S.text,
                                                format: { binding: S.binding },
                                            }),
                                        ),
                                ),
                                o().createElement(ut, {
                                    width: L.width,
                                    height: L.height,
                                    frameCount: L.frameCount,
                                    getImageSource: Qu(L),
                                    initialFrameIndex: A.current,
                                    state: c,
                                    loop: !1,
                                    frameTime: 20,
                                    onAnimate: M,
                                    className: p()(pt, c === qe.PLAY && ft),
                                }),
                                o().createElement(ut, {
                                    width: k.width,
                                    height: k.height,
                                    frameCount: k.frameCount,
                                    getImageSource: Qu(k),
                                    initialFrameIndex: F.current,
                                    state: m,
                                    loop: !0,
                                    frameTime: 15,
                                    onAnimate: T,
                                    className: p()(vt, m === qe.PLAY && bt),
                                }),
                            );
                        },
                    ),
                    Nt = 'SceneWrapper_base_cb',
                    Ot = 'SceneWrapper_base__down_95',
                    Ht = 'SceneWrapper_base__moveSpaceDisabled_0a',
                    It = ({ children: e, moveSpace: u, isDisabled: t = !1, onStartMoving: n, onEndMoving: r }) => {
                        const i = (0, a.useState)(!1),
                            s = i[0],
                            l = i[1],
                            c = (0, a.useState)({ x: 0, y: 0 }),
                            E = c[0],
                            _ = c[1],
                            m = (0, a.useRef)(null),
                            d = (0, a.useCallback)(() => {
                                l(!1), null == r || r();
                            }, [r]);
                        (0, a.useEffect)(
                            () => (
                                window.addEventListener('mouseup', d), () => window.removeEventListener('mouseup', d)
                            ),
                            [d],
                        );
                        const A = (e) => {
                            if (!m.current) return;
                            const u = m.current.getBoundingClientRect(),
                                t = u.width,
                                n = u.height;
                            return !(0 === e.clientX || 0 === e.clientY || e.clientX >= t - 1 || e.clientY >= n - 1);
                        };
                        return o().createElement(
                            'div',
                            {
                                ref: m,
                                className: p()(Nt, s && Ot, t && Ht),
                                onMouseDown: t
                                    ? void 0
                                    : (e) => {
                                          e.preventDefault(),
                                              0 === e.button && A(e) && (l(!0), _({ x: e.clientX, y: e.clientY }));
                                      },
                                onMouseMove: t
                                    ? void 0
                                    : (e) => {
                                          if ((e.preventDefault(), s)) {
                                              if (!A(e)) return;
                                              const t = e.clientX !== E.x ? e.clientX - E.x : 0,
                                                  r = e.clientY !== E.y ? e.clientY - E.y : 0;
                                              (0 === t && 0 === r) || null == n || n(),
                                                  _({ x: e.clientX, y: e.clientY }),
                                                  u({ dx: t, dy: r, dz: 0 });
                                          }
                                      },
                                onMouseUp: t
                                    ? void 0
                                    : () => {
                                          l(!1), null == r || r();
                                      },
                                onWheel: t
                                    ? void 0
                                    : (e) => {
                                          if ((e.preventDefault(), !A(e))) return;
                                          const t = e.deltaY < 0;
                                          u({ dx: 0, dy: 0, dz: t ? -600 : 600 });
                                      },
                            },
                            e,
                        );
                    },
                    Wt = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Vt() {
                    return (
                        (Vt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Vt.apply(this, arguments)
                    );
                }
                const Gt = R.views.common.tooltip_window.simple_tooltip_content,
                    Ut = (e) => {
                        let u = e.children,
                            t = e.body,
                            n = e.header,
                            r = e.note,
                            i = e.alert,
                            s = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, Wt);
                        const c = (0, a.useMemo)(() => {
                            const e = Object.assign({}, s, { body: t, header: n, note: r, alert: i });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [i, t, n, r, s]);
                        return o().createElement(
                            st,
                            Vt(
                                {
                                    contentId:
                                        ((E = null == s ? void 0 : s.hasHtmlContent),
                                        E ? Gt.SimpleTooltipHtmlContent('resId') : Gt.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var E;
                    },
                    jt = 'TokensWidget_base_25',
                    $t = 'TokensWidget_touchedZone_a0',
                    zt = 'TokensWidget_background_5c',
                    Xt = 'TokensWidget_content_b6',
                    Yt = 'TokensWidget_hoverSequence_19',
                    qt = 'TokensWidget_hoverSequence__visible_46',
                    Kt = R.strings.early_access.tankView.shopWidget,
                    Zt = (0, a.memo)(({ handleClick: e, handleMouseEnter: u, handleMouseLeave: t }) => {
                        const n = x().mediaSize,
                            r = (0, a.useState)(!1),
                            i = r[0],
                            s = r[1],
                            l = (0, a.useState)(qe.STOP),
                            c = l[0],
                            E = l[1],
                            _ = (0, a.useRef)(0),
                            m = n < b.Medium,
                            d = (0, a.useCallback)(
                                (e) => {
                                    _.current = e;
                                },
                                [_],
                            ),
                            A = m ? mt : dt;
                        return o().createElement(
                            'div',
                            { className: jt },
                            o().createElement('div', { className: zt }),
                            o().createElement(
                                Ut,
                                { header: Kt.header(), body: Kt.body(), isEnabled: !0 },
                                o().createElement(
                                    'div',
                                    {
                                        className: $t,
                                        onClick: e,
                                        onMouseEnter: () => {
                                            u(), s(!0), (_.current = 0), E(qe.PLAY);
                                        },
                                        onMouseLeave: () => {
                                            t(), s(!1);
                                        },
                                    },
                                    o().createElement(Le, { className: Xt, text: Kt.content() }),
                                ),
                            ),
                            o().createElement(ut, {
                                width: A.width,
                                height: A.height,
                                frameCount: A.frameCount,
                                getImageSource: Qu(A),
                                initialFrameIndex: _.current,
                                state: i ? c : qe.STOP,
                                loop: !1,
                                frameTime: 20,
                                onAnimate: d,
                                className: p()(Yt, i && qt),
                            }),
                        );
                    }),
                    Qt = (e) => {
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
                    Jt = (e, u, t) => (t < e ? e : t > u ? u : t),
                    en = [];
                function un(e) {
                    const u = (0, a.useRef)(e);
                    return (
                        (0, a.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, a.useCallback)((...e) => (0, u.current)(...e), en)
                    );
                }
                function tn(e, u, t = []) {
                    const n = (0, a.useRef)(0),
                        r = (0, a.useCallback)(() => window.clearInterval(n.current), t || []);
                    (0, a.useEffect)(() => r, [r]);
                    const o = (null != t ? t : []).concat([u]);
                    return [
                        (0, a.useCallback)((t) => {
                            (n.current = window.setInterval(() => e(t, !0), u)), e(t, !1);
                        }, o),
                        r,
                    ];
                }
                function nn(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return rn(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return rn(e, u);
                        })(e)) ||
                        (u && e && 'number' == typeof e.length)
                    ) {
                        t && (e = t);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function rn(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                function an(e, u, t) {
                    const n = (0, a.useMemo)(
                        () =>
                            (function (e, u, t, n) {
                                let r,
                                    a = !1,
                                    o = 0;
                                function i() {
                                    r && clearTimeout(r);
                                }
                                function s(...s) {
                                    const l = this,
                                        c = Date.now() - o;
                                    function E() {
                                        (o = Date.now()), t.apply(l, s);
                                    }
                                    a ||
                                        (n && !r && E(),
                                        i(),
                                        void 0 === n && c > e
                                            ? E()
                                            : !0 !== u &&
                                              (r = setTimeout(
                                                  n
                                                      ? function () {
                                                            r = void 0;
                                                        }
                                                      : E,
                                                  void 0 === n ? e - c : e,
                                              )));
                                }
                                return (
                                    'boolean' != typeof u && ((n = t), (t = u), (u = void 0)),
                                    (s.cancel = function () {
                                        i(), (a = !0);
                                    }),
                                    s
                                );
                            })(t, e),
                        u,
                    );
                    return (0, a.useEffect)(() => n.cancel, [n]), n;
                }
                var on = t(7030);
                let sn;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(sn || (sn = {}));
                const ln = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    cn = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: n,
                        getWrapperSize: r,
                        triggerMouseMoveOnUpdate: o = !1,
                    }) => {
                        const i = (e, t) => {
                            const n = u(e),
                                r = n[0],
                                a = n[1];
                            return Jt(r, a, t);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                E = void 0 === c ? ln : c,
                                _ = (0, a.useRef)(null),
                                m = (0, a.useRef)(null),
                                d = (() => {
                                    const e = (0, a.useMemo)(() => ({}), []),
                                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                        t = (e, t) => {
                                            u(e).set(t, t);
                                        },
                                        n = (e, t) => {
                                            u(e).delete(t);
                                        },
                                        r = (e, ...t) => {
                                            for (var n, r = nn(u(e).values()); !(n = r()).done; ) (0, n.value)(...t);
                                        };
                                    return (0, a.useMemo)(() => ({ on: t, off: n, trigger: r }), []);
                                })(),
                                A = an(
                                    () => {
                                        s.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                F = (0, on.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = _.current;
                                        u && (t(u, e), d.trigger('change', e), o && A());
                                    },
                                    onRest: (e) => d.trigger('rest', e),
                                    onStart: (e) => d.trigger('start', e),
                                    onPause: (e) => d.trigger('pause', e),
                                })),
                                D = F[0],
                                C = F[1],
                                g = (0, a.useCallback)(
                                    (e, u, t) => {
                                        var n;
                                        const r = D.scrollPosition.get(),
                                            a = (null != (n = D.scrollPosition.goal) ? n : 0) - r;
                                        return i(e, u * t + a + r);
                                    },
                                    [D.scrollPosition],
                                ),
                                h = (0, a.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const n = _.current;
                                        n &&
                                            C.start({
                                                scrollPosition: i(n, e),
                                                immediate: u,
                                                reset: t,
                                                config: E.animationConfig,
                                                from: { scrollPosition: i(n, D.scrollPosition.get()) },
                                            });
                                    },
                                    [C, E.animationConfig, D.scrollPosition],
                                ),
                                B = (0, a.useCallback)(
                                    (e) => {
                                        const u = _.current,
                                            t = m.current;
                                        if (!u || !t) return;
                                        const n = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return r(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, E.step),
                                            a = g(u, e, n);
                                        h(a);
                                    },
                                    [h, g, E.step],
                                ),
                                p = (0, a.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && B(n(e)),
                                            _.current && d.trigger('mouseWheel', e, D.scrollPosition, u(_.current));
                                    },
                                    [D.scrollPosition, B, d],
                                ),
                                f = ((e, u = []) => {
                                    const t = (0, a.useRef)(),
                                        n = (0, a.useCallback)((...u) => {
                                            t.current && t.current(), (t.current = e(...u));
                                        }, u);
                                    return (
                                        (0, a.useEffect)(
                                            () => () => {
                                                t.current && t.current();
                                            },
                                            [n],
                                        ),
                                        n
                                    );
                                })(
                                    () =>
                                        Qt(() => {
                                            const e = _.current;
                                            e &&
                                                (h(i(e, D.scrollPosition.goal), { immediate: !0 }),
                                                d.trigger('resizeHandled'));
                                        }),
                                    [h, D.scrollPosition.goal],
                                ),
                                v = un(() => {
                                    const e = _.current;
                                    if (!e) return;
                                    const u = i(e, D.scrollPosition.goal);
                                    u !== D.scrollPosition.goal && h(u, { immediate: !0 }),
                                        d.trigger('recalculateContent');
                                });
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('resize', f),
                                    () => {
                                        window.removeEventListener('resize', f);
                                    }
                                ),
                                [f],
                            );
                            return (0, a.useMemo)(
                                () => ({
                                    getWrapperSize: () => (m.current ? r(m.current) : void 0),
                                    getContainerSize: () => (_.current ? e(_.current) : void 0),
                                    getBounds: () =>
                                        _.current
                                            ? u(_.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: E.step.clampedArrowStepTimeout,
                                    clampPosition: i,
                                    handleMouseWheel: p,
                                    applyScroll: h,
                                    applyStepTo: B,
                                    contentRef: _,
                                    wrapperRef: m,
                                    scrollPosition: C,
                                    animationScroll: D,
                                    recalculateContent: v,
                                    events: { on: d.on, off: d.off },
                                }),
                                [D.scrollPosition, h, B, d.off, d.on, v, p, C, E.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    En = cn({
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
                        getDirection: (e) => (e.deltaY > 1 ? sn.Next : sn.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    _n = 'HorizontalBar_base_49',
                    mn = 'HorizontalBar_base__nonActive_82',
                    dn = 'HorizontalBar_leftButton_5f',
                    An = 'HorizontalBar_rightButton_03',
                    Fn = 'HorizontalBar_track_0d',
                    Dn = 'HorizontalBar_thumb_fd',
                    Cn = 'HorizontalBar_rail_32',
                    gn = 'disable',
                    hn = { pending: !1, offset: 0 },
                    Bn = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    pn = () => {},
                    fn = (e, u) => Math.max(20, e.offsetWidth * u),
                    vn = (0, a.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = Bn, onDrag: n = pn }) => {
                        const r = (0, a.useRef)(null),
                            i = (0, a.useRef)(null),
                            s = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            E = e.stepTimeout || 100,
                            _ = (0, a.useState)(hn),
                            m = _[0],
                            d = _[1],
                            A = (0, a.useCallback)(
                                (e) => {
                                    d(e),
                                        c.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current });
                                },
                                [n],
                            ),
                            F = () => {
                                const u = l.current,
                                    t = c.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && u && t && r)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, n / r),
                                    E = Jt(0, 1, a / (r - n)),
                                    _ = (u.offsetWidth - fn(u, o)) * E;
                                (t.style.transform = `translateX(${0 | _}px)`),
                                    ((e) => {
                                        if (i.current && s.current && l.current && c.current) {
                                            if (0 === e)
                                                return i.current.classList.add(gn), void s.current.classList.remove(gn);
                                            if (
                                                ((u = l.current),
                                                (t = c.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return i.current.classList.remove(gn), void s.current.classList.add(gn);
                                            var u, t;
                                            i.current.classList.remove(gn), s.current.classList.remove(gn);
                                        }
                                    })(_);
                            },
                            D = un(() => {
                                (() => {
                                    const u = c.current,
                                        t = l.current,
                                        n = e.getWrapperSize(),
                                        a = e.getContainerSize();
                                    if (!(a && u && n && t)) return;
                                    const o = Math.min(1, n / a);
                                    (u.style.width = `${fn(t, o)}px`),
                                        (u.style.display = 'flex'),
                                        r.current &&
                                            (1 === o ? r.current.classList.add(mn) : r.current.classList.remove(mn));
                                })(),
                                    F();
                            });
                        (0, a.useEffect)(() => Qt(D)),
                            (0, a.useEffect)(
                                () =>
                                    Qt(() => {
                                        const u = () => {
                                            F();
                                        };
                                        let t = pn;
                                        const n = () => {
                                            t(), (t = Qt(D));
                                        };
                                        return (
                                            e.events.on('recalculateContent', D),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', n),
                                            () => {
                                                t(),
                                                    e.events.off('recalculateContent', D),
                                                    e.events.off('rest', u),
                                                    e.events.off('change', u),
                                                    e.events.off('resizeHandled', n);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, a.useEffect)(() => {
                                if (!m.pending) return;
                                const u = (u) => {
                                        var t;
                                        const r = e.contentRef.current;
                                        if (!r) return;
                                        const a = l.current,
                                            o = c.current;
                                        if (!r || !a || !o) return;
                                        const i = u.screenX - m.offset - a.getBoundingClientRect().x,
                                            s = (i / a.offsetWidth) * (null != (t = e.getContainerSize()) ? t : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(r, s),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: o, thumbOffset: i, contentOffset: s });
                                    },
                                    t = () => {
                                        window.removeEventListener('mousemove', u), A(hn);
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t);
                                    }
                                );
                            }, [e, m.offset, m.pending, n, A]);
                        const C = tn((u) => e.applyStepTo(u), E, [e]),
                            g = C[0],
                            h = C[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', h, !0),
                                () => document.removeEventListener('mouseup', h, !0)
                            ),
                            [h],
                        );
                        const B = (e) => {
                            e.target.classList.contains(gn) || W('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: p()(_n, u.base), ref: r, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: p()(dn, u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(gn) || 0 !== e.button || (W('play'), g(sn.Next));
                                },
                                onMouseUp: h,
                                ref: i,
                                onMouseEnter: B,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: p()(Fn, u.track),
                                    onMouseDown: (u) => {
                                        const n = c.current;
                                        if (n && 0 === u.button)
                                            if ((W('play'), u.target === n))
                                                A({ pending: !0, offset: u.screenX - n.getBoundingClientRect().x });
                                            else {
                                                ((u) => {
                                                    const n = c.current,
                                                        r = e.contentRef.current;
                                                    if (!n || !r) return;
                                                    const a = t(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + a * u);
                                                })(u.screenX > n.getBoundingClientRect().x ? sn.Prev : sn.Next);
                                            }
                                    },
                                    ref: l,
                                    onMouseEnter: B,
                                },
                                o().createElement('div', { ref: c, className: p()(Dn, u.thumb) }),
                                o().createElement('div', { className: p()(Cn, u.rail) }),
                            ),
                            o().createElement('div', {
                                className: p()(An, u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(gn) || 0 !== e.button || (W('play'), g(sn.Prev));
                                },
                                onMouseUp: h,
                                ref: s,
                                onMouseEnter: B,
                            }),
                        );
                    }),
                    bn = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    yn = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: r,
                        classNames: i,
                        scrollClassName: s,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const E = (0, a.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: p()(bn.base, e.base) });
                            }, [n]),
                            _ = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return o().createElement(
                            'div',
                            { className: p()(bn.defaultScroll, t), onWheel: u.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: p()(bn.defaultScrollArea, r) },
                                o().createElement(wn, { className: s, api: _, classNames: i }, e),
                            ),
                            o().createElement(vn, { getStepByRailClick: l, api: u, onDrag: c, classNames: E }),
                        );
                    },
                    wn = ({ api: e, className: u, classNames: t, children: n }) => (
                        (0, a.useEffect)(() => Qt(e.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: p()(bn.base, u) },
                            o().createElement(
                                'div',
                                {
                                    className: p()(bn.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                o().createElement(
                                    'div',
                                    { className: p()(bn.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    );
                (wn.Bar = vn),
                    (wn.Default = yn),
                    (wn.SeniorityAwards = ({ api: e, className: u, classNames: t, children: n }) => (
                        (0, a.useEffect)(() => Qt(e.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: p()(bn.base, u) },
                            o().createElement(
                                'div',
                                { className: p()(bn.wrapper, null == t ? void 0 : t.wrapper), ref: e.wrapperRef },
                                o().createElement(
                                    'div',
                                    { className: p()(bn.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    ));
                const xn = cn({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? sn.Next : sn.Prev),
                    }),
                    Sn = 'VerticalBar_base_f3',
                    Mn = 'VerticalBar_base__nonActive_42',
                    Tn = 'VerticalBar_topButton_d7',
                    Ln = 'VerticalBar_bottomButton_06',
                    kn = 'VerticalBar_track_df',
                    Rn = 'VerticalBar_thumb_32',
                    Pn = 'VerticalBar_rail_43',
                    Nn = 'disable',
                    On = () => {},
                    Hn = { pending: !1, offset: 0 },
                    In = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    Wn = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    Vn = (e, u) => Math.max(20, e.offsetHeight * u),
                    Gn = (0, a.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = In, onDrag: n = On }) => {
                        const r = (0, a.useRef)(null),
                            i = (0, a.useRef)(null),
                            s = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            E = e.stepTimeout || 100,
                            _ = (0, a.useState)(Hn),
                            m = _[0],
                            d = _[1],
                            A = (0, a.useCallback)(
                                (e) => {
                                    d(e),
                                        c.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current });
                                },
                                [n],
                            ),
                            F = un(() => {
                                const u = c.current,
                                    t = l.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && a && u && t)) return;
                                const o = Math.min(1, n / a);
                                return (
                                    (u.style.height = `${Vn(t, o)}px`),
                                    u.classList.add(Rn),
                                    r.current &&
                                        (1 === o ? r.current.classList.add(Mn) : r.current.classList.remove(Mn)),
                                    o
                                );
                            }),
                            D = un(() => {
                                const u = l.current,
                                    t = c.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && u && t && r)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, n / r),
                                    E = Jt(0, 1, a / (r - n)),
                                    _ = (u.offsetHeight - Vn(u, o)) * E;
                                (t.style.transform = `translateY(${0 | _}px)`),
                                    ((e) => {
                                        if (i.current && s.current && l.current && c.current) {
                                            if (0 === e)
                                                return i.current.classList.add(Nn), void s.current.classList.remove(Nn);
                                            if (
                                                ((u = l.current),
                                                (t = c.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return i.current.classList.remove(Nn), void s.current.classList.add(Nn);
                                            var u, t;
                                            i.current.classList.remove(Nn), s.current.classList.remove(Nn);
                                        }
                                    })(_);
                            }),
                            C = un(() => {
                                Wn(e, () => {
                                    F(), D();
                                });
                            });
                        (0, a.useEffect)(() => Qt(C)),
                            (0, a.useEffect)(() => {
                                const u = () => {
                                    Wn(e, () => {
                                        D();
                                    });
                                };
                                let t = On;
                                const n = () => {
                                    t(), (t = Qt(C));
                                };
                                return (
                                    e.events.on('recalculateContent', C),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        t(),
                                            e.events.off('recalculateContent', C),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', n);
                                    }
                                );
                            }, [e]),
                            (0, a.useEffect)(() => {
                                if (!m.pending) return;
                                const u = (u) => {
                                        Wn(e, (t) => {
                                            const r = l.current,
                                                a = c.current,
                                                o = e.getContainerSize();
                                            if (!r || !a || !o) return;
                                            const i = u.screenY - m.offset - r.getBoundingClientRect().y,
                                                s = (i / r.offsetHeight) * o;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, s),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: a, thumbOffset: i, contentOffset: s });
                                        });
                                    },
                                    t = () => {
                                        window.removeEventListener('mousemove', u), A(Hn);
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t);
                                    }
                                );
                            }, [e, m.offset, m.pending, n, A]);
                        const g = tn((u) => e.applyStepTo(u), E, [e]),
                            h = g[0],
                            B = g[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', B, !0),
                                () => document.removeEventListener('mouseup', B, !0)
                            ),
                            [B],
                        );
                        const f = (e) => {
                            e.target.classList.contains(Nn) || W('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: p()(Sn, u.base), ref: r, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: p()(Tn, u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Nn) || 0 !== e.button || (W('play'), h(sn.Next));
                                },
                                ref: i,
                                onMouseEnter: f,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: p()(kn, u.track),
                                    onMouseDown: (u) => {
                                        const n = c.current;
                                        if (n && 0 === u.button)
                                            if ((W('play'), u.target === n))
                                                A({ pending: !0, offset: u.screenY - n.getBoundingClientRect().y });
                                            else {
                                                ((u) => {
                                                    c.current &&
                                                        Wn(e, (n) => {
                                                            if (!n) return;
                                                            const r = t(e),
                                                                a = e.clampPosition(n, n.scrollTop + r * u);
                                                            e.applyScroll(a);
                                                        });
                                                })(u.screenY > n.getBoundingClientRect().y ? sn.Prev : sn.Next);
                                            }
                                    },
                                    ref: l,
                                    onMouseEnter: f,
                                },
                                o().createElement('div', { ref: c, className: u.thumb }),
                                o().createElement('div', { className: p()(Pn, u.rail) }),
                            ),
                            o().createElement('div', {
                                className: p()(Ln, u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Nn) || 0 !== e.button || (W('play'), h(sn.Prev));
                                },
                                onMouseUp: B,
                                ref: s,
                                onMouseEnter: f,
                            }),
                        );
                    }),
                    Un = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    jn = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: r,
                        scrollClassName: i,
                        scrollClassNames: s,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const E = (0, a.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: p()(Un.base, e.base) });
                            }, [n]),
                            _ = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return o().createElement(
                            'div',
                            { className: p()(Un.defaultScroll, t), onWheel: u.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: p()(Un.area, r) },
                                o().createElement($n, { className: i, classNames: s, api: _ }, e),
                            ),
                            o().createElement(Gn, { getStepByRailClick: l, api: u, onDrag: c, classNames: E }),
                        );
                    },
                    $n = ({ className: e, classNames: u, children: t, api: n }) => (
                        (0, a.useEffect)(() => Qt(n.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: p()(Un.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: p()(Un.content, null == u ? void 0 : u.content), ref: n.contentRef },
                                t,
                            ),
                        )
                    );
                $n.Default = jn;
                const zn = { Vertical: r, Horizontal: n },
                    Xn = { type: 'idle' };
                const Yn = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    qn = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function Kn(e) {
                    let u = '';
                    for (let t = qn.length - 1; t >= 0; t--) for (; e >= qn[t]; ) (u += Yn[t]), (e -= qn[t]);
                    return u;
                }
                const Zn = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    Qn = 'TankName_base_8a',
                    Jn = 'TankName_level_f8',
                    er = 'TankName_type_80',
                    ur = 'TankName_type__elite_82',
                    tr = 'TankName_name_49',
                    nr = ({ isElite: e, vehicleName: u, vehicleType: t, vehicleLvl: n }) => {
                        const r = `${ce(t)}${e ? '_elite' : ''}`,
                            a = R.images.gui.maps.icons.vehicleTypes.big.$dyn(r),
                            i = p()(er, e && ur);
                        return o().createElement(
                            'div',
                            { className: Qn },
                            o().createElement(Le, { className: Jn, text: ((s = n), Zn ? `${s}` : Kn(s)) }),
                            o().createElement('div', { className: i, style: { backgroundImage: `url(${a})` } }),
                            o().createElement(Le, { className: tr, text: u }),
                        );
                        var s;
                    },
                    rr = 'CardContent_imgWrapper_fb',
                    ar = 'CardContent_vehicleImg_f8',
                    or = 'CardContent_vehicleImg__withOpacity_2d',
                    ir = 'CardContent_vehicleImg__selected_fc',
                    sr = 'CardContent_vehicleState_f4',
                    lr = 'CardContent_vehicleName_78',
                    cr = 'CardContent_postProgressImg_a3',
                    Er = 'CardContent_vehiclePrice_fa',
                    _r = 'CardContent_vehiclePrice__withOpacity_16',
                    mr = 'CardContent_vehiclePrice__purchasable_2a',
                    dr = 'CardContent_token_e6',
                    Ar = 'CardContent_token__purchasable_f0',
                    Fr = 'CardContent_token__inInventory_f5',
                    Dr = R.images.gui.maps,
                    Cr = o().memo(
                        ({
                            name: e,
                            techName: u,
                            tier: t,
                            type: n,
                            price: r,
                            commonPrice: a,
                            isPremium: i,
                            isPostProgression: s,
                            isSelected: l,
                            state: c,
                        }) => {
                            const E = p()(ar, l ? ir : or),
                                _ = p()(Er, c === ke.Locked && _r, c === ke.Purchasable && mr),
                                m = p()(dr, c === ke.Purchasable && Ar, c === ke.InInventory && Fr),
                                d = Dr.icons.early_access.carousel.tankPlaceHolder(),
                                A = Dr.shop.vehicles.c_180x135.$dyn(ce(u)),
                                F = c === ke.InInventory ? '' : String(r),
                                D =
                                    c === ke.Purchasable
                                        ? String(a.price[0].value.value).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')
                                        : F;
                            return o().createElement(
                                o().Fragment,
                                null,
                                o().createElement(
                                    'div',
                                    { className: rr },
                                    o().createElement('div', {
                                        className: E,
                                        style: { backgroundImage: `url(${A || d})` },
                                    }),
                                ),
                                s &&
                                    o().createElement(
                                        Ut,
                                        {
                                            body: R.strings.early_access.tankView.vehicleCarousel.postProgressTooltip.body(),
                                            isEnabled: !0,
                                            ignoreShowDelay: !0,
                                        },
                                        o().createElement('div', { className: cr }),
                                    ),
                                o().createElement(
                                    'div',
                                    { className: sr },
                                    o().createElement(Le, { className: _, text: D }),
                                    o().createElement('div', { className: m }),
                                ),
                                o().createElement(
                                    'div',
                                    { className: lr },
                                    o().createElement(nr, {
                                        vehicleLvl: t,
                                        isElite: i,
                                        vehicleName: e,
                                        vehicleType: n,
                                    }),
                                ),
                            );
                        },
                    ),
                    gr = 'Pointer_base_1b',
                    hr = 'Pointer_pointerBg_2a',
                    Br = 'Pointer_pointerBg__stick_25',
                    pr = 'Pointer_pointerText_67',
                    fr = R.strings.early_access.tankView.vehicleCarousel.tokenTooltip,
                    vr = ({ progressStatus: e, value: u, className: t, style: n }) => {
                        const r = 269 * (e / 100);
                        return o().createElement(
                            Ut,
                            { header: fr.header(), body: fr.body(), isEnabled: !0, ignoreShowDelay: !0 },
                            o().createElement(
                                'div',
                                {
                                    className: p()(gr, t),
                                    style: Object.assign({}, n, { transform: `translateX(${r}rem)` }),
                                },
                                o().createElement('div', { className: hr }),
                                o().createElement('div', { className: p()(hr, Br) }),
                                o().createElement(Le, { className: pr, text: u.toString() }),
                            ),
                        );
                    },
                    br = 'ProgressLine_defaultShadow_79',
                    yr = 'ProgressLine_yellowProgress_7f',
                    wr = 'ProgressLine_progressShadow_2d',
                    xr = 'ProgressLine_progressLine_0d',
                    Sr = ({ defaultShadowWidth: e, progressWidth: u, transitionDuration: t }) =>
                        o().createElement(
                            o().Fragment,
                            null,
                            o().createElement('div', {
                                className: br,
                                style: { width: `${e}%`, transitionDuration: `${t}ms` },
                            }),
                            o().createElement('div', {
                                className: yr,
                                style: { width: `${u}%`, transitionDuration: `${t}ms` },
                            }),
                            o().createElement('div', {
                                className: wr,
                                style: { width: `${u}%`, transitionDuration: `${t}ms` },
                            }),
                            o().createElement('div', {
                                className: xr,
                                style: { width: `${u}%`, transitionDuration: `${t}ms` },
                            }),
                        ),
                    Mr = 'VehicleProgress_base_3c',
                    Tr = 'VehicleProgress_progressBg_1b',
                    Lr = 'VehicleProgress_progressBg__done_4a',
                    kr = 'VehicleProgress_doneShadow_57',
                    Rr = 'VehicleProgress_pointerCentering_ca',
                    Pr = 'VehicleProgress_pointerCentering__show_ab',
                    Nr = 2e3,
                    Or = o().memo(
                        ({
                            value: e,
                            price: u,
                            state: t,
                            currAnimation: n = { index: -1, pointerIndex: -1, end: -1, start: -1, type: Co.Default },
                            isPointerStart: r,
                        }) => {
                            const i = n.start !== n.end,
                                s = n.type ? 0 : 950,
                                l = i ? n.start : e,
                                c = r ? n.pointerIndex * Nr : 0,
                                E = (0, a.useState)(t === ke.InInventory || t === ke.Purchasable),
                                _ = E[0],
                                m = E[1],
                                d = (0, a.useState)(t === ke.InProgress),
                                A = d[0],
                                F = d[1],
                                D = (0, a.useState)(A),
                                C = D[0],
                                g = D[1],
                                h = (0, a.useState)(Math.round(((t === ke.Locked ? 0 : l) / u) * 100)),
                                B = h[0],
                                f = h[1],
                                v = (0, a.useState)(B),
                                b = v[0],
                                y = v[1],
                                w = (0, a.useState)(100 - B),
                                x = w[0],
                                S = w[1];
                            (0, a.useEffect)(() => {
                                if (n.index >= 0 && i) {
                                    const e = 0 === n.index ? 1 : Nr * n.index;
                                    return Pe(() => {
                                        F(!0), g(!1), W(R.sounds.comp_7_progressbar_start());
                                        const e = Math.round((n.end / u) * 100);
                                        f(e), y(e), S(100 - e);
                                        const t = n.type ? 1 : 1980;
                                        return Pe(() => {
                                            n.end === u ? (F(!1), m(!0)) : g(!0), W(R.sounds.comp_7_progressbar_stop());
                                        }, t);
                                    }, e);
                                }
                            }, [n, i, u]);
                            const M = p()(Tr, _ && Lr),
                                T = p()(Rr, (C || r) && Pr);
                            return o().createElement(
                                'div',
                                { className: Mr },
                                o().createElement('div', { className: M }),
                                _
                                    ? o().createElement('div', { className: kr })
                                    : o().createElement(Sr, {
                                          progressWidth: b,
                                          defaultShadowWidth: x,
                                          transitionDuration: s,
                                      }),
                                o().createElement(vr, {
                                    progressStatus: B,
                                    value: e,
                                    className: T,
                                    style: { transitionDelay: `${c}ms` },
                                }),
                            );
                        },
                    ),
                    Hr = 'VehicleCard_base_f4',
                    Ir = 'VehicleCard_cardContent_52',
                    Wr = 'VehicleCard_tankCard_1c',
                    Vr = 'VehicleCard_hoverBg_a6',
                    Gr = 'VehicleCard_selected_6e',
                    Ur = 'VehicleCard_cardContentWrapper_ce',
                    jr = 'VehicleCard_separator_d7';
                function $r() {
                    return (
                        ($r =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        $r.apply(this, arguments)
                    );
                }
                const zr = o().memo(
                        ({
                            vehicleData: e,
                            isSelected: u,
                            state: t,
                            balance: n,
                            isLast: r,
                            currAnimation: a,
                            isPointerStart: i,
                        }) => {
                            const s = p()(u ? Gr : Vr);
                            return o().createElement(
                                'div',
                                { className: Hr },
                                o().createElement(
                                    'div',
                                    { className: Ir },
                                    o().createElement(Or, {
                                        value: n,
                                        price: e.price,
                                        state: t,
                                        currAnimation: a,
                                        isPointerStart: i,
                                    }),
                                    o().createElement(
                                        'div',
                                        { className: Wr },
                                        o().createElement('div', { className: s }),
                                        o().createElement(
                                            'div',
                                            { className: Ur },
                                            o().createElement(Cr, $r({ isSelected: u }, e)),
                                        ),
                                    ),
                                ),
                                !r && o().createElement('div', { className: jr }),
                            );
                        },
                    ),
                    Xr = 'VehicleCarousel_base_73',
                    Yr = 'VehicleCarousel_vehicleCarouselWrapper_ea',
                    qr = 'VehicleCarousel_arrow_56',
                    Kr = 'VehicleCarousel_arrow__enabled_b8',
                    Zr = 'VehicleCarousel_arrow__left_d1',
                    Qr = 'VehicleCarousel_arrow__right_da',
                    Jr = 'VehicleCarousel_arrow__disabled_c4',
                    ea = 'VehicleCarousel_arrow__hidden_6f',
                    ua = 'VehicleCarousel_vehicleCardsSlider_09',
                    ta = 'VehicleCarousel_borderCard_32',
                    na = 'VehicleCarousel_borderCard__left_23',
                    ra = 'VehicleCarousel_borderCard__right_23',
                    aa = o().memo(
                        ({ vehicles: e, currentVehicle: u, selectVehicle: t, balance: n, currentAnimations: r }) => {
                            const i = En(),
                                l = (0, a.useState)(0),
                                c = l[0],
                                E = l[1],
                                _ = (0, a.useState)([0, 0]),
                                m = _[0],
                                d = _[1],
                                A = { left: m[0], right: m[1] };
                            !(function (e, u) {
                                const t = e.contentRef,
                                    n = e.wrapperRef,
                                    r = e.scrollPosition,
                                    o = e.clampPosition,
                                    i = e.animationScroll,
                                    l = e.events,
                                    c = (0, a.useState)(Xn),
                                    E = c[0],
                                    _ = c[1];
                                (0, a.useEffect)(() => {
                                    const e = t.current;
                                    e && (e.style.cursor = 'dragging' === E.type ? 'move' : 'grab');
                                }, [t, E.type]),
                                    (0, a.useEffect)(() => {
                                        if ('dragging' !== E.type) return;
                                        const e = s.O.client.events.mouse.move(([e, a]) => {
                                                const s = t.current,
                                                    l = n.current;
                                                if (!s || !l) return;
                                                if ('inside' === a && e.clientX < 0) return;
                                                const c = 'inside' === a ? e.clientX : e.clientX - l.offsetLeft,
                                                    _ = E.positionFrom - c,
                                                    m = E.previousScrollPosition + _;
                                                r.start(
                                                    Object.assign(
                                                        {
                                                            scrollPosition: o(s, m),
                                                            from: { scrollPosition: i.scrollPosition.get() },
                                                        },
                                                        u && { config: u },
                                                    ),
                                                );
                                            }),
                                            a = s.O.client.events.mouse.up(function () {
                                                _({ type: 'scrollingToEnd' });
                                            });
                                        return () => {
                                            e(), a();
                                        };
                                    }, [i.scrollPosition, o, t, E, r, n, u]),
                                    (0, a.useEffect)(() => {
                                        if ('scrollingToEnd' !== E.type) return;
                                        const e = () => {
                                            _(Xn);
                                        };
                                        return i.scrollPosition.idle && e(), l.on('rest', e), () => l.off('rest', e);
                                    }, [i.scrollPosition, E.type, l]),
                                    (0, a.useEffect)(() => {
                                        const e = t.current;
                                        if (!e) return;
                                        const u = (e) => {
                                            _({
                                                type: 'dragging',
                                                positionFrom: e.screenX,
                                                previousScrollPosition: i.scrollPosition.get(),
                                            });
                                        };
                                        return (
                                            e.addEventListener('mousedown', u),
                                            () => e.removeEventListener('mousedown', u)
                                        );
                                    }, [i.scrollPosition, t]);
                            })(i);
                            const F = (0, a.useState)(() => e.findIndex((e) => e.vehicleCD === u)),
                                D = F[0],
                                C = F[1];
                            (0, a.useEffect)(() => {
                                const e = () => {
                                    const e = i.animationScroll.scrollPosition.goal;
                                    E(e);
                                    const u = i.getBounds(),
                                        t = u[0],
                                        n = u[1];
                                    (t === A.left && n === A.right) || d([t, n]);
                                };
                                return (
                                    i.events.on('change', e),
                                    i.events.on('recalculateContent', e),
                                    i.events.on('resizeHandled', e),
                                    () => {
                                        i.events.off('change', e),
                                            i.events.off('recalculateContent', e),
                                            i.events.off('resizeHandled', e);
                                    }
                                );
                            }, [i, A.left, A.right]),
                                (0, a.useEffect)(() => {
                                    i.applyScroll(269 * (D - 1) + 134.5);
                                }, [i, D]);
                            const g = p()(qr, Zr, c === A.left ? Jr : Kr, A.right <= 0 && ea),
                                h = p()(qr, Qr, c === A.right ? Jr : Kr, A.right <= 0 && ea),
                                B = (0, a.useCallback)(
                                    (e, u) => () => {
                                        V.playClick(), C(u), t(e);
                                    },
                                    [t],
                                ),
                                f = () => {
                                    V.playHighlight();
                                },
                                v = p()(ta, na),
                                b = p()(ta, ra),
                                y = p()(A.right > 0 && Yr);
                            return o().createElement(
                                'div',
                                { className: Xr },
                                o().createElement(
                                    zn.Horizontal.Area,
                                    { api: i, className: y },
                                    o().createElement(
                                        'div',
                                        { className: ua },
                                        o().createElement('div', { className: v }),
                                        e.map((t, a, i) => {
                                            const s = a - 1,
                                                l =
                                                    !!i[s] &&
                                                    (i[s].state === ke.InInventory || i[s].state === ke.Purchasable),
                                                c = t.state !== ke.InInventory && t.state !== ke.Purchasable,
                                                E = !!r[a] && l && c && 0 === r[a].end;
                                            return o().createElement(
                                                'div',
                                                {
                                                    key: `vehicleCard-${t.vehicleCD}`,
                                                    onClick: B(t.vehicleCD, a),
                                                    onMouseEnter: f,
                                                },
                                                o().createElement(zr, {
                                                    vehicleData: t,
                                                    isSelected: t.vehicleCD === u,
                                                    state: t.state,
                                                    balance: n,
                                                    isLast: a === e.length - 1,
                                                    currAnimation: r[a],
                                                    isPointerStart: E,
                                                }),
                                            );
                                        }),
                                        o().createElement('div', { className: b }),
                                    ),
                                ),
                                o().createElement('div', {
                                    className: g,
                                    onClick: () => {
                                        i.applyStepTo(sn.Next);
                                    },
                                }),
                                o().createElement('div', {
                                    className: h,
                                    onClick: () => {
                                        i.applyStepTo(sn.Prev);
                                    },
                                }),
                            );
                        },
                    ),
                    oa = ['children'];
                function ia() {
                    return (
                        (ia =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        ia.apply(this, arguments)
                    );
                }
                const sa = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, oa);
                        return o().createElement(
                            st,
                            ia(
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
                    la = {
                        base: 'VehicleRole_base_04',
                        base__22x22: 'VehicleRole_base__22x22_d4',
                        iconContainer: 'VehicleRole_iconContainer_0e',
                        icon: 'VehicleRole_icon_61',
                    };
                let ca;
                !(function (e) {
                    e.x22 = '22x22';
                })(ca || (ca = {}));
                const Ea = R.images.gui.maps.icons.roleExp.roles,
                    _a = R.strings.menu.roleExp,
                    ma = (0, a.memo)(
                        ({
                            role: e,
                            size: u = ca.x22,
                            roleIconFolderPath: t = Ea.$dyn(`c_${u}`),
                            className: n,
                            classNames: r,
                        }) => {
                            const a = ce(e);
                            return o().createElement(
                                'div',
                                { className: p()(la.base, la[`base__${u}`], n) },
                                o().createElement(
                                    'div',
                                    { className: p()(la.iconContainer, null == r ? void 0 : r.iconContainer) },
                                    o().createElement('div', {
                                        className: p()(la.icon, null == r ? void 0 : r.icon),
                                        style: { backgroundImage: `url(${null == t ? void 0 : t.$dyn(a)})` },
                                    }),
                                ),
                                o().createElement(
                                    'div',
                                    { className: p()(la.label, null == r ? void 0 : r.label) },
                                    o().createElement(ge, {
                                        text: `${_a.roleName.$dyn(a)}`,
                                        binding: { groupName: _a.roleGroupName.$dyn(a) },
                                    }),
                                ),
                            );
                        },
                    ),
                    da = {
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
                let Aa, Fa;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(Aa || (Aa = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
                    })(Fa || (Fa = {}));
                const Da = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: n,
                    disabled: r,
                    mixClass: i,
                    soundHover: s,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: E,
                    onMouseDown: _,
                    onMouseUp: m,
                    onMouseLeave: d,
                    onClick: A,
                }) => {
                    const F = (0, a.useRef)(null),
                        D = (0, a.useState)(t),
                        C = D[0],
                        g = D[1],
                        h = (0, a.useState)(!1),
                        B = h[0],
                        f = h[1],
                        v = (0, a.useState)(!1),
                        b = v[0],
                        y = v[1],
                        w = (0, a.useCallback)(() => {
                            r || (F.current && (F.current.focus(), g(!0)));
                        }, [r]),
                        x = (0, a.useCallback)(
                            (e) => {
                                C && null !== F.current && !F.current.contains(e.target) && g(!1);
                            },
                            [C],
                        ),
                        S = (0, a.useCallback)(
                            (e) => {
                                r || (A && A(e));
                            },
                            [r, A],
                        ),
                        M = (0, a.useCallback)(
                            (e) => {
                                r || (null !== s && W(s), c && c(e), y(!0));
                            },
                            [r, s, c],
                        ),
                        T = (0, a.useCallback)(
                            (e) => {
                                E && E(e);
                            },
                            [E],
                        ),
                        L = (0, a.useCallback)(
                            (e) => {
                                r || (m && m(e), f(!1));
                            },
                            [r, m],
                        ),
                        k = (0, a.useCallback)(
                            (e) => {
                                r || (null !== l && W(l), _ && _(e), t && w(), f(!0));
                            },
                            [r, l, _, w, t],
                        ),
                        P = (0, a.useCallback)(
                            (e) => {
                                r || (d && d(e), f(!1));
                            },
                            [r, d],
                        ),
                        N = p()(
                            da.base,
                            da[`base__${n}`],
                            {
                                [da.base__disabled]: r,
                                [da[`base__${u}`]]: u,
                                [da.base__focus]: C,
                                [da.base__highlightActive]: B,
                                [da.base__firstHover]: b,
                            },
                            i,
                        ),
                        O = p()(da.state, da.state__default);
                    return (
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mousedown', x),
                                () => {
                                    document.removeEventListener('mousedown', x);
                                }
                            ),
                            [x],
                        ),
                        (0, a.useEffect)(() => {
                            g(t);
                        }, [t]),
                        o().createElement(
                            'div',
                            {
                                ref: F,
                                className: N,
                                onMouseEnter: M,
                                onMouseMove: T,
                                onMouseUp: L,
                                onMouseDown: k,
                                onMouseLeave: P,
                                onClick: S,
                            },
                            n !== Aa.ghost &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: da.back }),
                                    o().createElement('span', { className: da.texture }),
                                ),
                            o().createElement(
                                'span',
                                { className: O },
                                o().createElement('span', { className: da.stateDisabled }),
                                o().createElement('span', { className: da.stateHighlightHover }),
                                o().createElement('span', { className: da.stateHighlightActive }),
                            ),
                            o().createElement(
                                'span',
                                { className: da.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                Da.defaultProps = { type: Aa.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const Ca = (0, a.memo)(Da);
                let ga, ha, Ba;
                !(function (e) {
                    (e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                })(ga || (ga = {})),
                    (function (e) {
                        (e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.equipCoin = 'equipCoin');
                    })(ha || (ha = {})),
                    (function (e) {
                        (e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG');
                    })(Ba || (Ba = {}));
                const pa = ({ format: e, value: u }) => {
                        const t = ((e, u = 'integral') => {
                            let t;
                            t = 'gold' === u ? Ue.B3.GOLD : Ue.B3.INTEGRAL;
                            return void 0 === e ? '' : Ue.Z5.getNumberFormat(e, t);
                        })(u, e);
                        return t ? o().createElement('span', null, t) : null;
                    },
                    fa = {
                        base: 'Currency_base_57',
                        icon: 'Currency_icon_c5',
                        base__small: 'Currency_base__small_af',
                        base__big: 'Currency_base__big_bc',
                        base__large: 'Currency_base__large_65',
                        base__extraLarge: 'Currency_base__extraLarge_4d',
                        'icon__credits-small': 'Currency_icon__credits-small_9b',
                        'icon__credits-big': 'Currency_icon__credits-big_96',
                        'icon__credits-large': 'Currency_icon__credits-large_ac',
                        'icon__credits-extraLarge': 'Currency_icon__credits-extraLarge_16',
                        'icon__gold-small': 'Currency_icon__gold-small_86',
                        'icon__gold-big': 'Currency_icon__gold-big_15',
                        'icon__gold-large': 'Currency_icon__gold-large_36',
                        'icon__gold-extraLarge': 'Currency_icon__gold-extraLarge_a0',
                        'icon__crystal-small': 'Currency_icon__crystal-small_27',
                        'icon__crystal-big': 'Currency_icon__crystal-big_cd',
                        'icon__crystal-large': 'Currency_icon__crystal-large_d3',
                        'icon__crystal-extraLarge': 'Currency_icon__crystal-extraLarge_09',
                        'icon__xp-small': 'Currency_icon__xp-small_a7',
                        'icon__xp-big': 'Currency_icon__xp-big_97',
                        'icon__xp-large': 'Currency_icon__xp-large_6b',
                        'icon__xp-extraLarge': 'Currency_icon__xp-extraLarge_67',
                        'icon__freeXP-small': 'Currency_icon__freeXP-small_ca',
                        'icon__freeXP-big': 'Currency_icon__freeXP-big_21',
                        'icon__freeXP-large': 'Currency_icon__freeXP-large_c8',
                        'icon__freeXP-extraLarge': 'Currency_icon__freeXP-extraLarge_58',
                        'icon__equipCoin-small': 'Currency_icon__equipCoin-small_32',
                        'icon__equipCoin-big': 'Currency_icon__equipCoin-big_79',
                        'icon__equipCoin-large': 'Currency_icon__equipCoin-large_2c',
                        'icon__equipCoin-extraLarge': 'Currency_icon__equipCoin-extraLarge_8a',
                        value: 'Currency_value_e1',
                        value__freeXP: 'Currency_value__freeXP_cb',
                        value__credits: 'Currency_value__credits_76',
                        value__gold: 'Currency_value__gold_dd',
                        value__xp: 'Currency_value__xp_b0',
                        value__crystal: 'Currency_value__crystal_19',
                        value__equipCoin: 'Currency_value__equipCoin_d0',
                        value__notEnough: 'Currency_value__notEnough_56',
                        stock: 'Currency_stock_87',
                        stock__indent: 'Currency_stock__indent_a1',
                        stock__interactive: 'Currency_stock__interactive_93',
                        stockBackground: 'Currency_stockBackground_82',
                    },
                    va = ({
                        isDiscount: e,
                        isInteractiveDiscount: u,
                        size: t,
                        type: n,
                        isEnough: r,
                        value: a,
                        discountValue: i,
                        showPlus: s,
                        stockBackgroundName: l = Ba.Red,
                    }) => {
                        const c = p()(fa.value, fa[`value__${n}`], !r && fa.value__notEnough),
                            E = p()(fa.icon, fa[`icon__${n}-${t}`]),
                            _ = p()(fa.stock, i && fa.stock__indent, u && fa.stock__interactive),
                            m = s && a > 0 && '+',
                            d = p()(fa.base, fa[`base__${t}`]);
                        return o().createElement(
                            'span',
                            { className: d },
                            o().createElement(
                                'span',
                                { className: c },
                                m,
                                o().createElement(pa, { value: a, format: n === ha.gold ? 'gold' : 'integral' }),
                            ),
                            o().createElement('span', { className: E }),
                            e &&
                                o().createElement(
                                    'span',
                                    { className: _ },
                                    o().createElement('span', {
                                        className: fa.stockBackground,
                                        style: { backgroundImage: `url(R.images.gui.maps.icons.library.${l})` },
                                    }),
                                    Boolean(i) && i,
                                ),
                        );
                    };
                va.defaultProps = { isEnough: !0 };
                const ba = o().memo(va),
                    ya = 'BuyProgress_base_15',
                    wa = 'BuyProgress_inInventory_b8',
                    xa = 'BuyProgress_checkIcon_a2',
                    Sa = 'BuyProgress_checkText_f1',
                    Ma = 'BuyProgress_showInHangarButton_10',
                    Ta = 'BuyProgress_purchasable_56',
                    La = 'BuyProgress_buyButton_99',
                    ka = 'BuyProgress_unReached_6c',
                    Ra = 'BuyProgress_unReachedText_7e',
                    Pa = 'BuyProgress_remainTokens_65',
                    Na = 'BuyProgress_lockIcon_11';
                function Oa() {
                    return (
                        (Oa =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Oa.apply(this, arguments)
                    );
                }
                const Ha = R.strings.early_access.tankView.vehicleInfo.buyProgress,
                    Ia = R.strings.tooltips.vehiclePreview.buyButton.notEnoughCredits,
                    Wa = (e) => {
                        const u = wu(),
                            t = u.model,
                            n = u.controls,
                            r = t.root.get().tokensBalance,
                            i = t.computes.getCurrentVehicle(),
                            s = i.commonPrice,
                            l = i.price,
                            c = i.state,
                            E = i.vehicleCD,
                            _ = i.isAffordable,
                            m = {
                                backgroundImage: `url(${R.images.gui.maps.icons.early_access.vehicle_info.$dyn(c === ke.Locked ? 'bottom_locked_background' : 'bottom_available_background')})`,
                            },
                            d = (0, a.useCallback)(() => {
                                n.showInHangar(E);
                            }, [n, E]),
                            A = (0, a.useCallback)(() => {
                                n.buyVehicle(E);
                            }, [n, E]);
                        return o().createElement(
                            'div',
                            { className: ya, style: m },
                            c === ke.InInventory &&
                                o().createElement(
                                    'div',
                                    { className: wa },
                                    o().createElement('div', { className: xa }),
                                    o().createElement(Le, { className: Sa, text: Ha.inInventory.label() }),
                                    o().createElement(
                                        Ca,
                                        Oa({ mixClass: Ma, onClick: d, size: Fa.medium, type: Aa.secondary }, e),
                                        o().createElement(Le, { text: Ha.inInventory.buttonText() }),
                                    ),
                                ),
                            c === ke.Purchasable &&
                                o().createElement(
                                    'div',
                                    { className: Ta },
                                    o().createElement(ba, {
                                        size: ga.big,
                                        type: s.price[0].value.name,
                                        value: s.price[0].value.value,
                                    }),
                                    o().createElement(
                                        Ut,
                                        { header: Ia.header(), body: Ia.body(), isEnabled: !_, ignoreShowDelay: !0 },
                                        o().createElement(
                                            'div',
                                            null,
                                            o().createElement(
                                                Ca,
                                                Oa(
                                                    {
                                                        disabled: !_,
                                                        onClick: A,
                                                        mixClass: La,
                                                        size: Fa.medium,
                                                        type: Aa.main,
                                                    },
                                                    e,
                                                ),
                                                o().createElement(Le, { text: Ha.purchasable.buttonText() }),
                                            ),
                                        ),
                                    ),
                                ),
                            (c === ke.Locked || c === ke.InProgress) &&
                                o().createElement(
                                    'div',
                                    { className: ka },
                                    o().createElement('div', { className: Na }),
                                    c === ke.Locked && o().createElement(Le, { className: Ra, text: Ha.locked() }),
                                    c === ke.InProgress &&
                                        o().createElement(
                                            o().Fragment,
                                            null,
                                            o().createElement(Le, { className: Ra, text: Ha.inProgress() }),
                                            o().createElement(Le, { className: Pa, text: (l - r).toString() }),
                                        ),
                                ),
                        );
                    },
                    Va = 'ResearchCondition_base_dd',
                    Ga = 'ResearchCondition_header_2b',
                    Ua = 'ResearchCondition_headerText_e4',
                    ja = 'ResearchCondition_headerBorder_85',
                    $a = 'ResearchCondition_content_2c',
                    za = 'ResearchCondition_tokensValueWithIcon_85',
                    Xa = 'ResearchCondition_tokensValue_e5',
                    Ya = 'ResearchCondition_tokensIcon_b5',
                    qa = 'ResearchCondition_experienceTextValue_c0',
                    Ka = 'ResearchCondition_experienceText_64',
                    Za = 'ResearchCondition_experienceValue_10',
                    Qa = ['price', 'unlockPriceAfterEA'];
                function Ja() {
                    return (
                        (Ja =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Ja.apply(this, arguments)
                    );
                }
                const eo = R.strings.early_access.tankView.vehicleInfo.researchCondition,
                    uo = (e) => {
                        let u = e.price,
                            t = e.unlockPriceAfterEA,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, Qa);
                        return o().createElement(
                            'div',
                            { className: Va },
                            o().createElement(
                                'div',
                                { className: Ga },
                                o().createElement(Le, { className: Ua, text: eo.header() }),
                                o().createElement('div', { className: ja }),
                            ),
                            o().createElement(
                                'div',
                                { className: $a },
                                o().createElement(
                                    'div',
                                    { className: za },
                                    o().createElement(Le, { className: Xa, text: u.toString() }),
                                    o().createElement(
                                        st,
                                        {
                                            contentId:
                                                R.views.lobby.early_access.tooltips.EarlyAccessCurrencyTooltipView(
                                                    'resId',
                                                ),
                                            isEnabled: !0,
                                            ignoreShowDelay: !0,
                                        },
                                        o().createElement('div', Ja({ className: Ya }, n)),
                                    ),
                                ),
                                o().createElement(
                                    'div',
                                    { className: qa },
                                    o().createElement(Le, { className: Ka, text: eo.experienceText() }),
                                    o().createElement(
                                        'span',
                                        { className: Za },
                                        o().createElement(ba, { size: ga.small, type: ha.xp, value: t }),
                                    ),
                                ),
                            ),
                        );
                    },
                    to = 'VehicleInfo_base_84',
                    no = 'VehicleInfo_containerBackground_43',
                    ro = 'VehicleInfo_mainInfo_35',
                    ao = 'VehicleInfo_mainInfoText_1d',
                    oo = 'VehicleInfo_infoIcon_67',
                    io = 'VehicleInfo_vehicleType_aa',
                    so = 'VehicleInfo_vehicleType__elite_ac',
                    lo = 'VehicleInfo_descriptionText_b6',
                    co = ['className'];
                function Eo() {
                    return (
                        (Eo =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Eo.apply(this, arguments)
                    );
                }
                const _o = R.images.gui.maps.icons.vehicleTypes,
                    mo = (0, Oe.Pi)((e) => {
                        let u = e.className,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, co);
                        const n = wu().model,
                            r = x().mediaSize,
                            a = n.computes.getCurrentVehicle(),
                            i = a.techName,
                            s = a.type,
                            l = a.isPremium,
                            c = a.tier,
                            E = a.name,
                            _ = a.roleKey,
                            m = a.state,
                            d = a.price,
                            A = a.unlockPriceAfterEA,
                            F = a.vehicleCD,
                            D = a.nation,
                            C = ((e, u, t) => {
                                const n = `${ce(e)}${u ? '_elite' : ''}`;
                                return { backgroundImage: `url(${(t ? _o.c_64x64 : _o.c_48x48).$dyn(n)})` };
                            })(s, l, r >= b.Medium),
                            g = Kn(c),
                            h = p()(to, u),
                            B = D + '_vehicles',
                            f = i + '_early_access',
                            v = R.strings.$dyn(B);
                        return o().createElement(
                            'div',
                            { className: h },
                            o().createElement(
                                'div',
                                { className: no },
                                o().createElement(
                                    sa,
                                    { args: { vehicleCD: F } },
                                    o().createElement(
                                        'div',
                                        Eo({ className: ro }, t),
                                        o().createElement(Le, { className: ao, text: g }),
                                        o().createElement('div', { style: C, className: p()(io, l && so) }),
                                        o().createElement(Le, { className: ao, text: E }),
                                        o().createElement('div', { className: oo }),
                                    ),
                                ),
                                'NotDefined' !== _ && o().createElement(ma, { role: _ }),
                                o().createElement(Le, { className: lo, text: v.$dyn(f) }),
                                (m === ke.InProgress || m === ke.Locked) &&
                                    o().createElement(uo, Eo({ price: d, unlockPriceAfterEA: A }, t)),
                            ),
                            o().createElement(Wa, t),
                        );
                    }),
                    Ao = (0, a.memo)(mo);
                function Fo() {
                    return (
                        (Fo =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Fo.apply(this, arguments)
                    );
                }
                const Do = R.strings.early_access;
                let Co;
                !(function (e) {
                    (e.Clear = 'clear'), (e.Default = '');
                })(Co || (Co = {}));
                const go = (0, Oe.Pi)(() => {
                    const e = wu(),
                        u = e.controls,
                        t = e.model,
                        n = t.root.get(),
                        r = n.currentDate,
                        i = n.endProgressionDate,
                        s = n.featureState,
                        l = n.tokensBalance,
                        c = n.startDate,
                        E = n.endDate,
                        _ = n.currentVehicleCD,
                        m = n.isFromTechTree,
                        d = n.isQuestWidgetEnabled,
                        A = t.computes.getVehicles(),
                        F = t.computes.getCurrentVehicle().state === ke.InInventory,
                        D = (0, a.useState)(!1),
                        C = D[0],
                        g = D[1],
                        h = (0, a.useState)(!1),
                        B = h[0],
                        f = h[1],
                        v = Ne(),
                        b = (0, a.useMemo)(() => ({ onMouseEnter: () => f(!0), onMouseLeave: () => f(!1) }), []),
                        y = (0, a.useCallback)(
                            (e) => {
                                u.moveSpace(e);
                            },
                            [u],
                        ),
                        w = (0, a.useCallback)(() => {
                            u.aboutEvent();
                        }, [u]),
                        x = m ? u.backToPrevScreen : void 0,
                        S = (0, a.useCallback)(() => {
                            g(!0),
                                v.run(() => {
                                    u.showVehiclePreview(_);
                                }, 50);
                        }, [v, u, _]);
                    (0, a.useEffect)(() => {
                        if (v.isRunning) return () => v.clear();
                    });
                    const M = (0, a.useCallback)(() => {
                            u.compareVehicle(_);
                        }, [u, _]),
                        T = A[0].nation,
                        L = { backgroundImage: `url(R.images.gui.maps.icons.early_access.flags.${T})` },
                        k = p()(Ru, C && Pu),
                        R = p()(Lu, C && ku),
                        P = p()(Mu, C && Tu),
                        N = p()(Ou, C && Iu, d && Hu),
                        O = p()(Wu, C && Vu, F && Gu),
                        H = p()(Uu, C && ju),
                        I = p()($u, d && zu),
                        W = (0, a.useState)([]),
                        G = W[0],
                        j = W[1],
                        $ = (0, a.useRef)(0),
                        z = (0, a.useMemo)(() => {
                            let e = 0;
                            return A.map((u) => {
                                const t = u.animationParams.end !== u.animationParams.start,
                                    n = {
                                        end: u.animationParams.end,
                                        start: u.animationParams.start,
                                        pointerIndex: e,
                                        index: t ? e : 0,
                                    };
                                return t && (e += 1), ($.current = 2030 * e), n;
                            });
                        }, [A]),
                        X = (0, a.useCallback)(() => {
                            const e = A.map((e) => ({
                                end: e.animationParams.end,
                                start: e.animationParams.start,
                                index: 0,
                                pointerIndex: 0,
                                type: Co.Clear,
                            }));
                            ($.current = 0), j(e);
                        }, [A]);
                    (0, a.useEffect)(() => {
                        j(z);
                    }, [z]),
                        (0, a.useEffect)(() => {
                            if ($.current > 0)
                                return Pe(() => {
                                    u.onAnimationFinished();
                                }, $.current);
                        }, [u, G]);
                    const q = () => {
                            V.playHighlight(), f(!0);
                        },
                        K = () => {
                            f(!1);
                        },
                        Z = s === Ye.POST_PROGRESSION || s === Ye.BUY ? E : i;
                    return o().createElement(
                        It,
                        { moveSpace: y, isDisabled: B, onStartMoving: u.startMoving },
                        o().createElement(
                            'div',
                            { className: xu },
                            o().createElement('div', { className: Su }),
                            o().createElement('div', { style: L, className: k }),
                            o().createElement(
                                'div',
                                { className: Nu },
                                o().createElement(
                                    Cu,
                                    Fo(
                                        {
                                            className: P,
                                            featureState: s,
                                            startDate: c,
                                            endDate: Z,
                                            handleAbout: w,
                                            handleBackToTree: x,
                                            nation: T,
                                            handleClose: u.backToHangar,
                                            titleText: Do.header.title.vehicleView(),
                                        },
                                        b,
                                    ),
                                ),
                                o().createElement(
                                    'div',
                                    { className: R },
                                    o().createElement(Zt, {
                                        handleClick: () => {
                                            V.playClick(), X(), u.buyTokens();
                                        },
                                        handleMouseEnter: q,
                                        handleMouseLeave: K,
                                    }),
                                ),
                                o().createElement(Ao, Fo({ className: N }, b)),
                                o().createElement(
                                    'div',
                                    Fo({ className: O }, b),
                                    o().createElement(Y, {
                                        onClick: M,
                                        type: U.COMPARE,
                                        label: o().createElement(Le, { text: Ee(Do.tankView.compare.label()) }),
                                    }),
                                    !F &&
                                        o().createElement(Y, {
                                            onClick: S,
                                            type: U.PREVIEW,
                                            label: o().createElement(Le, { text: Do.tankView.preview.label() }),
                                        }),
                                ),
                                o().createElement(
                                    'div',
                                    { className: H },
                                    o().createElement(
                                        'div',
                                        Fo({ className: I }, b),
                                        o().createElement(aa, {
                                            vehicles: A,
                                            currentVehicle: _,
                                            selectVehicle: u.selectVehicle,
                                            balance: l,
                                            currentAnimations: G,
                                        }),
                                    ),
                                    d &&
                                        o().createElement(
                                            'div',
                                            { className: Xu },
                                            o().createElement(Pt, {
                                                handleClick: () => {
                                                    V.playClick(), u.goToQuests();
                                                },
                                                handleMouseEnter: q,
                                                handleMouseLeave: K,
                                                featureState: s,
                                                currentDate: r,
                                                endDate: Z,
                                            }),
                                        ),
                                ),
                            ),
                        ),
                    );
                });
                engine.whenReady.then(() => {
                    I().render(
                        o().createElement(yu, null, o().createElement(O, null, o().createElement(go, null))),
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
        (__webpack_require__.O = (e, u, t, n) => {
            if (!u) {
                var r = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [u, t, n] = deferred[s], a = !0, o = 0; o < u.length; o++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[o]))
                            ? u.splice(o--, 1)
                            : ((a = !1), n < r && (r = n));
                    if (a) {
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
        (__webpack_require__.j = 344),
        (() => {
            var e = { 344: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        r,
                        [a, o, i] = t,
                        s = 0;
                    if (a.some((u) => 0 !== e[u])) {
                        for (n in o) __webpack_require__.o(o, n) && (__webpack_require__.m[n] = o[n]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (u && u(t); s < a.length; s++)
                        (r = a[s]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [617], () => __webpack_require__(6029));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
