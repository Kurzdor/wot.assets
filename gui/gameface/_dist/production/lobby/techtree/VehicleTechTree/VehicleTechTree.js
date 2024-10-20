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
                t.r(u), t.d(u, { mouse: () => i, onResize: () => a });
                var n = t(472),
                    r = t(176);
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
            959: (e, u, t) => {
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
            176: (e, u, t) => {
                'use strict';
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => n });
            },
            472: (e, u, t) => {
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
            138: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => r });
                var n = t(959);
                const r = { view: t(641), client: n };
            },
            722: (e, u, t) => {
                'use strict';
                function n(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function r(e, u, t) {
                    return `url(${n(e, u, t)})`;
                }
                t.r(u), t.d(u, { getBgUrl: () => r, getTextureUrl: () => n });
            },
            112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => r });
                var n = t(472);
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
            641: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => i,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => b,
                        events: () => a.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => f,
                        getScale: () => F,
                        getSize: () => d,
                        getViewGlobalPosition: () => m,
                        isEventHandled: () => p,
                        isFocused: () => C,
                        pxToRem: () => D,
                        remToPx: () => B,
                        resize: () => E,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => g,
                        setEventHandled: () => h,
                        setInputPaddingsRem: () => s,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => y,
                    });
                var n = t(722),
                    r = t(112),
                    a = t(538),
                    o = t(566);
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
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function d(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function E(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function m(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: B(u.x), y: B(u.y) };
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
                function B(e) {
                    return viewEnv.remToPx(e);
                }
                function g(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function C() {
                    return viewEnv.isFocused();
                }
                function h() {
                    return viewEnv.setEventHandled();
                }
                function p() {
                    return viewEnv.isEventHandled();
                }
                function v() {
                    viewEnv.forceTriggerMouseMove();
                }
                function f() {
                    return viewEnv.getShowingStatus();
                }
                const b = Object.keys(r.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === r.W[u]), e),
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
                    y = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : a.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            566: (e, u, t) => {
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
            521: (e, u, t) => {
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
            358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => a });
                var n = t(138);
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
                t.d(u, { Sw: () => a.Z, B3: () => l, Z5: () => o, B0: () => s, c9: () => g, ry: () => B });
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
                var a = t(358);
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
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var E = t(521),
                    m = t(138);
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
                    B = (function () {
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
                    C = () => g(s.CLOSE),
                    h = (e, u) => {
                        e.keyCode === E.n.ESCAPE && u();
                    };
                var p = t(572);
                const v = r.instance,
                    f = {
                        DataTracker: a.Z,
                        ViewModel: p.Z,
                        ViewEventType: s,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: _,
                        DateFormatType: d,
                        makeGlobalBoundingBox: D,
                        sendMoveEvent: (e) => g(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: C,
                        sendClosePopOverEvent: () => g(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            g(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, r = R.invalid('resId'), a) => {
                            const o = m.O.view.getViewGlobalPosition(),
                                i = t.getBoundingClientRect(),
                                l = i.x,
                                c = i.y,
                                _ = i.width,
                                d = i.height,
                                E = {
                                    x: m.O.view.pxToRem(l) + o.x,
                                    y: m.O.view.pxToRem(c) + o.y,
                                    width: m.O.view.pxToRem(_),
                                    height: m.O.view.pxToRem(d),
                                };
                            g(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: u,
                                bbox: D(E),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => h(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            h(e, C);
                        },
                        handleViewEvent: g,
                        onBindingsReady: B,
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
                        ClickOutsideManager: v,
                        SystemLocale: o,
                        UserLocale: i,
                    };
                window.ViewEnvHelper = f;
            },
            157: (e, u, t) => {
                'use strict';
                var n = {};
                t.r(n),
                    t.d(n, {
                        Area: () => Bo,
                        Bar: () => Ao,
                        DefaultScroll: () => Do,
                        Direction: () => Qa,
                        defaultSettings: () => Ja,
                        useHorizontalScrollApi: () => uo,
                    });
                var r = {};
                t.r(r), t.d(r, { Area: () => ko, Bar: () => Mo, Default: () => Ro, useVerticalScrollApi: () => go });
                var a = t(179),
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
                var s = t(138);
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var c;
                function _(e, u, t) {
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
                const d = s.O.client.getSize('rem'),
                    E = d.width,
                    m = d.height,
                    A = Object.assign({ width: E, height: m }, _(E, m, l)),
                    F = (0, a.createContext)(A),
                    D = ['children'];
                const B = (e) => {
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
                        _ = n.extraLargeWidth,
                        d = n.largeWidth,
                        E = n.mediumWidth,
                        m = n.smallWidth,
                        A = n.extraSmallWidth,
                        B = n.extraLargeHeight,
                        g = n.largeHeight,
                        C = n.mediumHeight,
                        h = n.smallHeight,
                        p = n.extraSmallHeight,
                        v = { extraLarge: B, large: g, medium: C, small: h, extraSmall: p };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && r) return u;
                        if (t.large && o) return u;
                        if (t.medium && s) return u;
                        if (t.small && l) return u;
                        if (t.extraSmall && c) return u;
                    } else {
                        if (t.extraLargeWidth && _) return i(u, t, v);
                        if (t.largeWidth && d) return i(u, t, v);
                        if (t.mediumWidth && E) return i(u, t, v);
                        if (t.smallWidth && m) return i(u, t, v);
                        if (t.extraSmallWidth && A) return i(u, t, v);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && B) return u;
                            if (t.largeHeight && g) return u;
                            if (t.mediumHeight && C) return u;
                            if (t.smallHeight && h) return u;
                            if (t.extraSmallHeight && p) return u;
                        }
                    }
                    return null;
                };
                B.defaultProps = {
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
                (0, a.memo)(B);
                const g = (e) => {
                        const u = (0, a.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    },
                    C = (0, a.memo)(({ children: e }) => {
                        const u = (0, a.useContext)(F),
                            t = (0, a.useState)(u),
                            n = t[0],
                            r = t[1],
                            i = (0, a.useCallback)((e, u) => {
                                const t = s.O.view.pxToRem(e),
                                    n = s.O.view.pxToRem(u);
                                r(Object.assign({ width: t, height: n }, _(t, n, l)));
                            }, []);
                        g(() => {
                            engine.on('clientResized', i);
                        }),
                            (0, a.useEffect)(() => () => engine.off('clientResized', i), [i]);
                        const c = (0, a.useMemo)(() => Object.assign({}, n), [n]);
                        return o().createElement(F.Provider, { value: c }, e);
                    });
                var h = t(483),
                    p = t.n(h),
                    v = t(926),
                    f = t.n(v);
                let b, w, y;
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
                    })(w || (w = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = l.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.height)] = 'Small'),
                            (e[(e.Medium = l.medium.height)] = 'Medium'),
                            (e[(e.Large = l.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.height)] = 'ExtraLarge');
                    })(y || (y = {}));
                const T = () => {
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
                                        return w.ExtraLarge;
                                    case e.largeWidth:
                                        return w.Large;
                                    case e.mediumWidth:
                                        return w.Medium;
                                    case e.smallWidth:
                                        return w.Small;
                                    case e.extraSmallWidth:
                                        return w.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), w.ExtraSmall;
                                }
                            })(e),
                            o = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return y.ExtraLarge;
                                    case e.largeHeight:
                                        return y.Large;
                                    case e.mediumHeight:
                                        return y.Medium;
                                    case e.smallHeight:
                                        return y.Small;
                                    case e.extraSmallHeight:
                                        return y.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), y.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: n, mediaWidth: r, mediaHeight: o, remScreenWidth: u, remScreenHeight: t };
                    },
                    N = ['children', 'className'];
                function S() {
                    return (
                        (S =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        S.apply(this, arguments)
                    );
                }
                const x = {
                        [w.ExtraSmall]: '',
                        [w.Small]: f().SMALL_WIDTH,
                        [w.Medium]: `${f().SMALL_WIDTH} ${f().MEDIUM_WIDTH}`,
                        [w.Large]: `${f().SMALL_WIDTH} ${f().MEDIUM_WIDTH} ${f().LARGE_WIDTH}`,
                        [w.ExtraLarge]: `${f().SMALL_WIDTH} ${f().MEDIUM_WIDTH} ${f().LARGE_WIDTH} ${f().EXTRA_LARGE_WIDTH}`,
                    },
                    L = {
                        [y.ExtraSmall]: '',
                        [y.Small]: f().SMALL_HEIGHT,
                        [y.Medium]: `${f().SMALL_HEIGHT} ${f().MEDIUM_HEIGHT}`,
                        [y.Large]: `${f().SMALL_HEIGHT} ${f().MEDIUM_HEIGHT} ${f().LARGE_HEIGHT}`,
                        [y.ExtraLarge]: `${f().SMALL_HEIGHT} ${f().MEDIUM_HEIGHT} ${f().LARGE_HEIGHT} ${f().EXTRA_LARGE_HEIGHT}`,
                    },
                    M = {
                        [b.ExtraSmall]: '',
                        [b.Small]: f().SMALL,
                        [b.Medium]: `${f().SMALL} ${f().MEDIUM}`,
                        [b.Large]: `${f().SMALL} ${f().MEDIUM} ${f().LARGE}`,
                        [b.ExtraLarge]: `${f().SMALL} ${f().MEDIUM} ${f().LARGE} ${f().EXTRA_LARGE}`,
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
                            })(e, N);
                        const r = T(),
                            a = r.mediaWidth,
                            i = r.mediaHeight,
                            s = r.mediaSize;
                        return o().createElement('div', S({ className: p()(t, x[a], L[i], M[s]) }, n), u);
                    },
                    k = ['children'];
                const I = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                            return r;
                        })(e, k);
                    return o().createElement(C, null, o().createElement(P, t, u));
                };
                var O = t(493),
                    H = t.n(O);
                const W = (e = 1) => {
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
                var V = t(364);
                const z = [
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
                function G(e) {
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
                const U = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: V.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    $ = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            n = e.args,
                            r = e.onMouseEnter,
                            o = e.onMouseLeave,
                            i = e.onMouseDown,
                            s = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            _ = e.ignoreMouseClick,
                            d = void 0 !== _ && _,
                            E = e.decoratorId,
                            m = void 0 === E ? 0 : E,
                            A = e.isEnabled,
                            F = void 0 === A || A,
                            D = e.targetId,
                            B = void 0 === D ? 0 : D,
                            g = e.onShow,
                            C = e.onHide,
                            h = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, z);
                        const p = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            v = (0, a.useMemo)(() => B || W().resId, [B]),
                            f = (0, a.useCallback)(() => {
                                (p.current.isVisible && p.current.timeoutId) ||
                                    (U(t, m, { isMouseEvent: !0, on: !0, arguments: G(n) }, v),
                                    g && g(),
                                    (p.current.isVisible = !0));
                            }, [t, m, n, v, g]),
                            b = (0, a.useCallback)(() => {
                                if (p.current.isVisible || p.current.timeoutId) {
                                    const e = p.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (p.current.timeoutId = 0)),
                                        U(t, m, { on: !1 }, v),
                                        p.current.isVisible && C && C(),
                                        (p.current.isVisible = !1);
                                }
                            }, [t, m, v, C]),
                            w = (0, a.useCallback)((e) => {
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
                                document.addEventListener('wheel', w, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', w, { capture: !0 }),
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
                                              ((y = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((p.current.timeoutId = window.setTimeout(f, c ? 100 : 400)),
                                                      r && r(e),
                                                      y && y(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              b(), null == o || o(u), null == e || e(u);
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              !1 === d && b(), null == s || s(u), null == e || e(u);
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              !1 === d && b(), null == i || i(u), null == e || e(u);
                                          })(u.props.onMouseDown),
                                      },
                                      h,
                                  ),
                              )
                            : u;
                        var y;
                    },
                    j = ['children'];
                function X() {
                    return (
                        (X =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        X.apply(this, arguments)
                    );
                }
                const q = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, j);
                        return o().createElement(
                            $,
                            X(
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
                    Y = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function K() {
                    return (
                        (K =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        K.apply(this, arguments)
                    );
                }
                const Z = R.views.common.tooltip_window.simple_tooltip_content,
                    Q = (e) => {
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
                            })(e, Y);
                        const c = (0, a.useMemo)(() => {
                            const e = Object.assign({}, s, { body: t, header: n, note: r, alert: i });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [i, t, n, r, s]);
                        return o().createElement(
                            $,
                            K(
                                {
                                    contentId:
                                        ((_ = null == s ? void 0 : s.hasHtmlContent),
                                        _ ? Z.SimpleTooltipHtmlContent('resId') : Z.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var _;
                    };
                function J() {
                    return (
                        (J =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        J.apply(this, arguments)
                    );
                }
                const ee = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const n = o().createElement('div', { className: t }, e);
                        if (u.header || u.body) return o().createElement(Q, u, n);
                        const r = u.contentId,
                            a = u.args,
                            i = null == a ? void 0 : a.contentId;
                        return r || i
                            ? o().createElement($, J({}, u, { contentId: r || i }), n)
                            : o().createElement(q, u, n);
                    },
                    ue = (e) => {
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
                function te() {}
                function ne(e) {
                    return e;
                }
                function re() {
                    return !1;
                }
                console.log;
                function ae(e, u, t, n) {
                    let r,
                        a = !1,
                        o = 0;
                    function i() {
                        r && clearTimeout(r);
                    }
                    function s(...s) {
                        const l = this,
                            c = Date.now() - o;
                        function _() {
                            (o = Date.now()), t.apply(l, s);
                        }
                        a ||
                            (n && !r && _(),
                            i(),
                            void 0 === n && c > e
                                ? _()
                                : !0 !== u &&
                                  (r = setTimeout(
                                      n
                                          ? function () {
                                                r = void 0;
                                            }
                                          : _,
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
                }
                function oe(e, u, t) {
                    const n = (0, a.useMemo)(
                        () =>
                            (function (e, u, t) {
                                return void 0 === t ? ae(e, u, !1) : ae(e, t, !1 !== u);
                            })(t, e),
                        u,
                    );
                    return (0, a.useEffect)(() => n.cancel, [n]), n;
                }
                var ie = t(521);
                const se = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function le(e = ie.n.NONE, u = se, t = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== ie.n.NONE)
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
                const ce = () => {
                        const e = (0, a.useState)(s.O.view.getScale()),
                            u = e[0],
                            t = e[1];
                        return (
                            (0, a.useEffect)(() => {
                                const e = () => {
                                    t(s.O.view.getScale());
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
                    },
                    _e = (e, u) => e.split('.').reduce((e, u) => e && e[u], u),
                    de = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    Ee = (e, u) => (e.length > 0 ? `${e}.${u}` : u),
                    me = (e) =>
                        ((e, u) =>
                            e.split('.').reduce((e, t) => {
                                const n = _e(`${e}.${t}`, window);
                                return de(n) ? u(e, t, n) : `${e}.${t}`;
                            }))(e, (e, u) => `${e}.${u}.value`),
                    Ae = (e) => {
                        const u = ((e) => {
                                const u = W(),
                                    t = u.caller,
                                    n = u.resId,
                                    r = window.__feature && window.__feature !== t && t ? `subViews.${t}` : '';
                                return { modelPrefix: r, modelPath: Ee(r, e || ''), resId: n };
                            })(),
                            t = u.modelPrefix,
                            n = e.split('.');
                        if (n.length > 0) {
                            const e = [n[0]];
                            return (
                                n.reduce((u, n) => {
                                    const r = _e(Ee(t, `${u}.${n}`), window);
                                    return de(r) ? (e.push(r.id), `${u}.${n}.value`) : (e.push(n), `${u}.${n}`);
                                }),
                                e.reduce((e, u) => e + '.' + u)
                            );
                        }
                        return '';
                    },
                    Fe = V.Sw.instance;
                let De;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(De || (De = {}));
                const Be = (e = 'model', u = De.Deep) => {
                        const t = (0, a.useState)(0),
                            n = (t[0], t[1]),
                            r = (0, a.useMemo)(() => W(), []),
                            o = r.caller,
                            i = r.resId,
                            s = (0, a.useMemo)(
                                () => (window.__feature && window.__feature !== o ? `subViews.${o}.${e}` : e),
                                [o, e],
                            ),
                            l = (0, a.useState)(() =>
                                ((e) => {
                                    const u = _e(e, window);
                                    for (const e in u) 'function' == typeof u[e] && (u[e] = u[e].bind(u));
                                    return de(u) ? u.value : u;
                                })(me(s)),
                            ),
                            c = l[0],
                            _ = l[1],
                            d = (0, a.useRef)(-1);
                        return (
                            g(() => {
                                if (
                                    ('boolean' == typeof u &&
                                        ((u = u ? De.Deep : De.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    u !== De.None)
                                ) {
                                    const t = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            u === De.Deep
                                                ? (e === c && n((e) => e + 1), _(e))
                                                : _(Object.assign([], e));
                                        },
                                        r = Ae(e);
                                    d.current = Fe.addCallback(r, t, i, u === De.Deep);
                                }
                            }),
                            (0, a.useEffect)(() => {
                                if (u !== De.None)
                                    return () => {
                                        Fe.removeCallback(d.current, i);
                                    };
                            }, [i, u]),
                            c
                        );
                    },
                    ge = 'display',
                    Ce = 'enabled',
                    he = 'enabled_change',
                    pe = (e, u) => {
                        const t = Be('tutorialModel.triggers.items').filter((t) => {
                            if (!t) return !1;
                            const n = t.value,
                                r = n.triggers.filter((e) => e.value === u);
                            return n.componentId === e && r.length > 0;
                        });
                        if (0 === t.length) return null;
                        if (!window.tutorialModel.foundComponents.items.some((u) => u.value.componentId === e))
                            return null;
                        return {
                            trigger: t[0].value,
                            runTrigger: (t) => {
                                window.tutorialModel.onTriggerActivated({ componentId: e, triggerType: u, state: t });
                            },
                        };
                    };
                function ve(e) {
                    engine.call('PlaySound', e);
                }
                const fe = {
                    playHighlight() {
                        ve('highlight');
                    },
                    playClick() {
                        ve('play');
                    },
                    playYes() {
                        ve('yes1');
                    },
                };
                var be = t(403),
                    we = t(30);
                let ye;
                !(function (e) {
                    (e.BlueprintsConvert = 'BlueprintsTechtreeConvertButtonHint'),
                        (e.TechTreeAction = 'TechTreeActionStartNodeHint');
                })(ye || (ye = {}));
                var Te = t(174);
                function Ne(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return Se(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return Se(e, u);
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
                function Se(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const xe = (e) => (0 === e ? window : window.subViews.get(e));
                function Le(e) {
                    var u;
                    return e && 'value' in e && null != (u = e.constructor) && u.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function Me(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, n) => u(null == e ? void 0 : e.value, t, n));
                }
                function Pe(e, u) {
                    if (Array.isArray(e)) return e.filter(u);
                    const t = [];
                    for (let r = 0; r < e.length; r++) {
                        var n;
                        const a = null == (n = e[r]) ? void 0 : n.value;
                        u(a, r, e) && t.push(a);
                    }
                    return t;
                }
                function Re(e, u) {
                    for (let t = 0; t < e.length; t++) {
                        const n = Le(e[t]);
                        if (u(n, t, e)) return n;
                    }
                }
                var ke = t(946);
                const Ie = (e) => (2 & e) > 0,
                    Oe = (e) => (4 & e) > 0,
                    He = (e) => (256 & e) > 0,
                    We = (e) => 0 == (256 & e),
                    Ve = (e) => (1073741824 & e) > 0,
                    ze = (e) => (536870912 & e) > 0;
                let Ge, Ue;
                !(function (e) {
                    (e.CONVERT = 'convert-hint'), (e.IN_BATTLE = 'in-battle-hint');
                })(Ge || (Ge = {})),
                    (function (e) {
                        (e.LEFT_TO_RIGHT = 'leftToRight'), (e.RIGHT_TO_LEFT = 'rightToLeft');
                    })(Ue || (Ue = {}));
                const $e = ((e, u) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: n = 'real', options: r, children: i, mocks: l }) {
                                const c = (0, a.useRef)([]),
                                    _ = (t, n, r) => {
                                        var a;
                                        const o = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = xe,
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
                                                        for (var e, t = Ne(r.keys()); !(e = t()).done; ) a(e.value, u);
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
                                            _ = (e) => c.current.push(e),
                                            d = e({
                                                mode: t,
                                                readByPath: l,
                                                externalModel: i,
                                                observableModel: {
                                                    array: (e, u) => {
                                                        const n = null != u ? u : l(e),
                                                            r = Te.LO.box(n, { equals: re });
                                                        return (
                                                            'real' === t &&
                                                                i.subscribe(
                                                                    (0, Te.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (e, u) => {
                                                        const n = null != u ? u : l(e),
                                                            r = Te.LO.box(n, { equals: re });
                                                        return (
                                                            'real' === t &&
                                                                i.subscribe(
                                                                    (0, Te.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (e, u) => {
                                                        const n = l(u);
                                                        if (Array.isArray(e)) {
                                                            const r = e.reduce(
                                                                (e, u) => ((e[u] = Te.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    i.subscribe(
                                                                        (0, Te.aD)((u) => {
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
                                                                    (e, [u, t]) => ((e[t] = Te.LO.box(n[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    i.subscribe(
                                                                        (0, Te.aD)((e) => {
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
                                                cleanup: _,
                                            }),
                                            E = { mode: t, model: d, externalModel: i, cleanup: _ };
                                        return {
                                            model: d,
                                            controls: 'mocks' === t && r ? r.controls(E) : u(E),
                                            externalModel: i,
                                            mode: t,
                                        };
                                    },
                                    d = (0, a.useRef)(!1),
                                    E = (0, a.useState)(n),
                                    m = E[0],
                                    A = E[1],
                                    F = (0, a.useState)(() => _(n, r, l)),
                                    D = F[0],
                                    B = F[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        d.current ? B(_(m, r, l)) : (d.current = !0);
                                    }, [l, m, r]),
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
                                    settings: e.object('settings'),
                                    nodes: e.array('nodes'),
                                    hints: e.array('hints'),
                                    nodesRelation: e.array('nodesRelation'),
                                    vehiclesData: e.array('vehiclesData'),
                                    selectedNation: e.primitives(['selectedNation']),
                                    availableNations: e.array('availableNations'),
                                    isEarlyAccessButtonHovered: Te.LO.box(!1),
                                    isOnView: Te.LO.box(!0),
                                    hintProperties: Te.LO.box({
                                        [Ge.CONVERT]: { direction: Ue.LEFT_TO_RIGHT, isInView: !0 },
                                        [Ge.IN_BATTLE]: { direction: Ue.LEFT_TO_RIGHT, isInView: !0 },
                                    }),
                                },
                                t = (0, ke.Om)(() => Me(u.nodes.get(), (e) => Object.assign({}, e)), { equals: re }),
                                n = (0, ke.Om)(() => Me(u.hints.get().activeHints, (e) => Object.assign({}, e)), {
                                    equals: re,
                                }),
                                r = (0, ke.Om)(() => n().find((e) => e.hintID === ye.BlueprintsConvert)),
                                a = (0, ke.Om)(() => n().find((e) => e.hintID === ye.TechTreeAction)),
                                o = (0, ke.Om)(() => Pe(t(), (e) => We(e.state)), { equals: re }),
                                i = (0, ke.Om)(() => Pe(t(), (e) => Ve(e.state)), { equals: re }),
                                s = (0, ke.Om)(() => Re(t(), (e) => e.blueprintCanConvert), { equals: re }),
                                l = (0, ke.Om)(() => Pe(t(), (e) => He(e.state)), { equals: re }),
                                c = (0, ke.Om)((e) => Pe(t(), (u) => u.row === e && We(u.state)), { equals: re }),
                                _ = (0, ke.Om)(() => Re(t(), (e) => 1 === e.column), { equals: re }),
                                d = (0, ke.Om)((e) => Pe(u.nodesRelation.get(), (u) => u.nodeOutId === e), {
                                    equals: re,
                                }),
                                E = (0, ke.Om)((e) => Re(t(), (u) => u.id === e), { equals: re }),
                                m = (0, ke.Om)(() => Me(u.availableNations.get(), ne), { equals: re }),
                                A = (0, ke.Om)(() => u.vehiclesData.get(), { equals: re }),
                                F = (0, ke.Om)(
                                    (e) => {
                                        var u, t, n, r, a, o, i;
                                        const s = Re(A(), (u) => u.nodeId === e);
                                        return s
                                            ? {
                                                  buyPrice:
                                                      null == (u = s.price.price[0]) || null == (t = u.value)
                                                          ? void 0
                                                          : t.value,
                                                  buyDiscount:
                                                      null == (n = s.price.discount[0]) || null == (r = n.value)
                                                          ? void 0
                                                          : r.value,
                                                  unlockPrice:
                                                      null == (a = s.unlock.xpCost.price[0].value) ? void 0 : a.value,
                                                  unlockDiscount:
                                                      null == (o = s.unlock.xpCost.discount[0]) || null == (i = o.value)
                                                          ? void 0
                                                          : i.value,
                                                  vehicleType: s.vehicleType,
                                                  vehicleNation: s.vehicleNation,
                                                  vehicleTechName: s.vehicleTechName,
                                                  isElite: s.isElite,
                                                  vehicleLvl: s.vehicleLvl,
                                                  vehicleCD: s.vehicleCD,
                                                  vehicleName: s.vehicleName,
                                              }
                                            : null;
                                    },
                                    { equals: re },
                                ),
                                D = (0, ke.Om)(
                                    () =>
                                        Pe(u.availableNations.get(), (e) => e.hasNewDiscountEvent).map((e) => e.nation),
                                    { equals: re },
                                ),
                                B = (0, ke.Om)(() => o().filter((e) => ze(e.state)), { equals: re }),
                                g = (0, ke.Om)(
                                    () => {
                                        var e;
                                        return (null == (e = B()[0]) ? void 0 : e.column) - 1;
                                    },
                                    { equals: re },
                                ),
                                C = (0, ke.Om)(() => B().map((e) => ({ id: e.id, index: e.column - g() }))),
                                h = (0, ke.Om)(
                                    () => {
                                        const e = i();
                                        return e && e.length ? e[0].id : void 0;
                                    },
                                    { equals: re },
                                ),
                                p = (0, ke.Om)(
                                    () => {
                                        const e = i();
                                        return e && e.length ? e[e.length - 1].id : void 0;
                                    },
                                    { equals: re },
                                ),
                                v = (0, ke.Om)(
                                    () => {
                                        const e = C();
                                        return e && e.length ? e[0].id : void 0;
                                    },
                                    { equals: re },
                                ),
                                f = (0, ke.Om)(
                                    () => {
                                        const e = C();
                                        return e && e.length ? e[e.length - 1].id : void 0;
                                    },
                                    { equals: re },
                                );
                            return Object.assign({}, u, {
                                computes: {
                                    getNodes: t,
                                    getAvailableNations: m,
                                    getFirstNode: _,
                                    getMainNodes: o,
                                    getPremiumNodes: l,
                                    getRowData: c,
                                    getNodeById: E,
                                    getNodeConnectors: d,
                                    getVehicles: A,
                                    getVehicleByNodeId: F,
                                    getEarlyAccessNodes: i,
                                    getInBattleNations: D,
                                    getFirstNodeWithAddBlueprintButton: s,
                                    getHints: n,
                                    getBlueprintConvertHint: r,
                                    getTreeActionHint: a,
                                    getFormattedInBattleNodes: C,
                                    getFirstEarlyAccessNodeId: h,
                                    getLastEarlyAccessNodeId: p,
                                    getFirstInBattleNodeId: v,
                                    getLastInBattleNodeId: f,
                                },
                            });
                        },
                        ({ externalModel: e, model: u }) => ({
                            onNationChange: e.createCallback((e) => ({ nationName: e }), 'onNationChange'),
                            onAddVehicleToCompare: e.createCallback((e) => ({ vehicleCD: e }), 'addVehicleToCompare'),
                            onBuyVehicle: e.createCallback((e) => ({ vehicleCD: e }), 'buyVehicle'),
                            onUnlockVehicle: e.createCallback((e) => ({ vehicleCD: e }), 'unlockVehicle'),
                            onGoToCollectionVehicle: e.createCallback(
                                (e) => ({ nationName: e }),
                                'goToCollectionVehicle',
                            ),
                            onGoToModulesTechTree: e.createCallback((e) => ({ vehicleCD: e }), 'goToModulesTechTree'),
                            onGoToBlueprintView: e.createCallback((e) => ({ vehicleCD: e }), 'goToBlueprintView'),
                            onGoToEarlyAccess: e.createCallbackNoArgs('goToEarlyAccess'),
                            setEarlyAccessButtonHovered: (0, Te.aD)((e) => {
                                u.isEarlyAccessButtonHovered.set(e);
                            }),
                            setIsOnView: (0, Te.aD)((e) => {
                                u.isOnView.set(e);
                            }),
                            setHintConvertProperties: (0, Te.aD)((e) => {
                                u.hintProperties.set(
                                    Object.assign({}, u.hintProperties.get(), {
                                        [Ge.CONVERT]: Object.assign({}, u.hintProperties.get()[Ge.IN_BATTLE], e),
                                    }),
                                );
                            }),
                            setHintInBattleProperties: (0, Te.aD)((e) => {
                                u.hintProperties.set(
                                    Object.assign({}, u.hintProperties.get(), {
                                        [Ge.IN_BATTLE]: Object.assign({}, u.hintProperties.get()[Ge.IN_BATTLE], e),
                                    }),
                                );
                            }),
                            onBlueprintModeChanged: e.createCallback(
                                (e) => ({ isEnabled: e }),
                                'onBlueprintModeChanged',
                            ),
                            onClose: e.createCallbackNoArgs('onClose'),
                            onHintClick: e.createCallback((e) => ({ hintID: e }), 'hints.onHintShown'),
                        }),
                    ),
                    je = $e[0],
                    Xe = $e[1],
                    qe = 'App_base_3e',
                    Ye = 'App_premiumPanelWrapper_2b',
                    Ke = 'App_premiumPanelWrapper__active_47',
                    Ze = 'App_premiumPanelWrapper__effects_fa',
                    Qe = 'App_premiumPanelWrapper__noScroll_92',
                    Je = 'App_treeContainer_b0',
                    eu = 'App_treeHolder_23',
                    uu = 'App_blueprintIcon_41',
                    tu = 'App_tabs_93',
                    nu = 'App_tabs__dragging_e1',
                    ru = 'App_scrollHolderHorizontal_5c',
                    au = 'App_scrollHolderVertical_a9',
                    ou = 'App_scrollHolderVertical__withoutBottom_45',
                    iu = 'App_scrollHolderVertical__hidden_af',
                    su = 'App_verticalContent_8e',
                    lu = 'App_verticalContent__withPremiumPanel_78',
                    cu = 'App_verticalContent__withVerticalScrollBar_40',
                    _u = 'App_mainLine_37',
                    du = 'App_blueprintBalance_4d',
                    Eu = 'App_nationTitle_f4',
                    mu = 'App_base__blueprints_fd',
                    Au = 'App_paragonsEntryPoint_ce',
                    Fu = 'App_levels_01',
                    Du = 'App_background_9f',
                    Bu = 'Background_base_7e',
                    gu = 'Background_blueprints_aa',
                    Cu = 'Background_blueprints__active_ac',
                    hu = 'Background_blueprintsGrid_da',
                    pu = 'Background_blueprintsGrid__scale_2f',
                    vu = (0, a.memo)(({ isBlueprintMode: e }) => {
                        const u = ce();
                        return o().createElement(
                            'div',
                            { className: Bu },
                            o().createElement(
                                'div',
                                { className: p()(gu, e && Cu) },
                                o().createElement('div', { className: p()(hu, 2 === u && pu) }),
                            ),
                        );
                    });
                var fu = t(887),
                    bu = t.n(fu);
                const wu = ['xl', 'lg', 'md', 'sm', 'xs'],
                    yu = (e) => e.includes('_') && ((e) => wu.includes(e))(e.split('_').at(-1)),
                    Tu = [b.ExtraLarge, b.Large, b.Medium, b.Small, b.ExtraSmall],
                    Nu = (e, u) =>
                        Object.keys(e).reduce((t, n) => {
                            if (n in t) return t;
                            if (yu(n)) {
                                const r = n.split('_').slice(0, -1).join('_');
                                if (r in t) return t;
                                const a = Tu.indexOf(u),
                                    o = (-1 !== a ? wu.slice(a) : [])
                                        .map((e) => r + '_' + e)
                                        .find((u) => void 0 !== e[u]),
                                    i = o ? e[o] : void 0;
                                return (t[r] = void 0 !== i ? i : e[r]), t;
                            }
                            const r = e[n];
                            return (
                                void 0 === r ||
                                    ((e, u) => wu.some((t) => void 0 !== u[`${e}_${t}`]))(n, e) ||
                                    (t[n] = r),
                                t
                            );
                        }, {}),
                    Su = (e, u = Nu) => {
                        const t = (
                            (e, u = Nu) =>
                            (t) => {
                                const n = T().mediaSize,
                                    r = (0, a.useMemo)(() => u(t, n), [t, n]);
                                return o().createElement(e, r);
                            }
                        )(e, u);
                        return o().memo((u) =>
                            Object.keys(u).some((e) => yu(e) && void 0 !== u[e])
                                ? o().createElement(t, u)
                                : o().createElement(e, u),
                        );
                    },
                    xu = {
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
                    Lu = [
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
                function Mu() {
                    return (
                        (Mu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Mu.apply(this, arguments)
                    );
                }
                Object.keys(bu());
                const Pu = {
                        XL: { mt: xu.mt__XL, mr: xu.mr__XL, mb: xu.mb__XL, ml: xu.ml__XL },
                        LG: { mt: xu.mt__LG, mr: xu.mr__LG, mb: xu.mb__LG, ml: xu.ml__LG },
                        MDp: { mt: xu.mt__MDp, mr: xu.mr__MDp, mb: xu.mb__MDp, ml: xu.ml__MDp },
                        MD: { mt: xu.mt__MD, mr: xu.mr__MD, mb: xu.mb__MD, ml: xu.ml__MD },
                        SMp: { mt: xu.mt__SMp, mr: xu.mr__SMp, mb: xu.mb__SMp, ml: xu.ml__SMp },
                        SM: { mt: xu.mt__SM, mr: xu.mr__SM, mb: xu.mb__SM, ml: xu.ml__SM },
                        XS: { mt: xu.mt__XS, mr: xu.mr__XS, mb: xu.mb__XS, ml: xu.ml__XS },
                    },
                    Ru = (Object.keys(Pu), ['mt', 'mr', 'mb', 'ml']),
                    ku = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    Iu = Su((e) => {
                        let u = e.className,
                            t = e.width,
                            n = e.height,
                            r = e.m,
                            i = e.mt,
                            s = void 0 === i ? r : i,
                            l = e.mr,
                            c = void 0 === l ? r : l,
                            _ = e.mb,
                            d = void 0 === _ ? r : _,
                            E = e.ml,
                            m = void 0 === E ? r : E,
                            A = e.column,
                            F = e.row,
                            D = e.flexDirection,
                            B = void 0 === D ? (A ? 'column' : F && 'row') || void 0 : D,
                            g = e.flexStart,
                            C = e.center,
                            h = e.flexEnd,
                            v = e.spaceBetween,
                            f = e.spaceAround,
                            b = e.justifyContent,
                            w =
                                void 0 === b
                                    ? (g ? 'flex-start' : C && 'center') ||
                                      (h && 'flex-end') ||
                                      (v && 'space-between') ||
                                      (f && 'space-around') ||
                                      void 0
                                    : b,
                            y = e.alignItems,
                            T = void 0 === y ? (g ? 'flex-start' : C && 'center') || (h && 'flex-end') || void 0 : y,
                            N = e.alignSelf,
                            S = e.wrap,
                            x = e.flexWrap,
                            L = void 0 === x ? (S ? 'wrap' : void 0) : x,
                            M = e.grow,
                            P = e.shrink,
                            R = e.flex,
                            k = void 0 === R ? (M || P ? `${M ? 1 : 0} ${P ? 1 : 0} auto` : void 0) : R,
                            I = e.style,
                            O = e.children,
                            H = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, Lu);
                        const W = (0, a.useMemo)(() => {
                                const e = { mt: s, mr: c, mb: d, ml: m },
                                    u = ((e) =>
                                        Ru.reduce((u, t) => {
                                            const n = e[t];
                                            return n && 'number' != typeof n ? u.concat(Pu[!0 === n ? 'MD' : n][t]) : u;
                                        }, []))(e),
                                    r = ((e) =>
                                        Ru.reduce((u, t) => {
                                            const n = e[t];
                                            return 'number' == typeof n && (u[ku[t]] = n + 'rem'), u;
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, I, r, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== n && 'number' == typeof n ? n + 'rem' : n,
                                        flex: k,
                                        alignSelf: N,
                                        display: B || T ? 'flex' : void 0,
                                        flexDirection: B,
                                        flexWrap: L,
                                        justifyContent: w,
                                        alignItems: T,
                                    }),
                                    computedClassNames: u,
                                };
                            }, [t, n, s, c, d, m, I, k, N, B, L, w, T]),
                            V = W.computedStyle,
                            z = W.computedClassNames;
                        return o().createElement('div', Mu({ className: p()(xu.base, ...z, u), style: V }, H), O);
                    });
                let Ou;
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(Ou || (Ou = {}));
                const Hu = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    Wu = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    Vu = (e, u, t = Ou.left) => e.split(u).reduce(t === Ou.left ? Hu : Wu, []),
                    zu = (() => {
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
                    Gu = ['zh_cn', 'zh_sg', 'zh_tw'],
                    Uu = (e, u = Ou.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        return Gu.includes(t)
                            ? zu(e)
                            : ((e, u = Ou.left) => {
                                  let t = [];
                                  const n =
                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                      r = e.replace(/&nbsp;/g, ' ');
                                  return Vu(r, /( )/, u).forEach((e) => (t = t.concat(Vu(e, n, Ou.left)))), t;
                              })(e, u);
                    },
                    $u = 'FormatText_base_d0',
                    ju = ({ binding: e, text: u = '', classMix: t, alignment: n = Ou.left }) =>
                        null === u
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : o().createElement(
                                  a.Fragment,
                                  null,
                                  u.split('\n').map((u, r) =>
                                      o().createElement(
                                          'div',
                                          { className: p()($u, t), key: `${u}-${r}` },
                                          ((e, u, t) =>
                                              e
                                                  .split(/%\((.*?)\)(?:[sd])?/g)
                                                  .map((e) => (t && e in t ? t[e] : Uu(e, u))))(u, n, e).map((e, u) =>
                                              o().createElement(a.Fragment, { key: `${u}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              );
                var Xu = t(532),
                    qu = t.n(Xu);
                const Yu = {
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
                    Ku = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function Zu() {
                    return (
                        (Zu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Zu.apply(this, arguments)
                    );
                }
                Object.keys(bu());
                const Qu = Object.keys(qu()),
                    Ju = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    et = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    ut = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    tt = {
                        XL: { mt: 'XL', mr: 'XL', mb: 'XL', ml: 'XL' },
                        LG: { mt: 'LG', mr: 'LG', mb: 'LG', ml: 'LG' },
                        MDp: { mt: 'MDp', mr: 'MDp', mb: 'MDp', ml: 'MDp' },
                        MD: { mt: 'MD', mr: 'MD', mb: 'MD', ml: 'MD' },
                        SMp: { mt: 'SMp', mr: 'SMp', mb: 'SMp', ml: 'SMp' },
                        SM: { mt: 'SM', mr: 'SM', mb: 'SM', ml: 'SM' },
                        XS: { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    },
                    nt =
                        (Object.keys(tt),
                        {
                            'heading-H144': { mt: 'XL', mr: 'LG', mb: 'LG', ml: 'LG' },
                            'heading-H73': { mt: 'LG', mr: 'MD', mb: 'MD', ml: 'MD' },
                            'heading-H56': Ju,
                            'heading-H36': Ju,
                            'heading-H28': et,
                            'heading-H24': et,
                            'heading-H24R': et,
                            'heading-H22': et,
                            'heading-H20R': et,
                            'heading-H18': et,
                            'heading-H15': ut,
                            'heading-H14': ut,
                            'paragraph-P24': et,
                            'paragraph-P18': et,
                            'paragraph-P16': et,
                            'paragraph-P14': ut,
                            'paragraph-P12': ut,
                            'paragraph-P10': ut,
                        }),
                    rt =
                        (Object.keys(nt),
                        (e) =>
                            e
                                ? ((e) => Qu.includes(e))(e)
                                    ? { colorClassName: Yu[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    at = Su((e) => {
                        let u = e.text,
                            t = e.variant,
                            n = e.className,
                            r = e.color,
                            i = e.m,
                            s = e.mt,
                            l = void 0 === s ? i : s,
                            c = e.mr,
                            _ = void 0 === c ? i : c,
                            d = e.mb,
                            E = void 0 === d ? i : d,
                            m = e.ml,
                            A = void 0 === m ? i : m,
                            F = e.style,
                            D = e.format,
                            B = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, Ku);
                        const g = (0, a.useMemo)(() => {
                                const e = rt(r),
                                    u = e.colorClassName,
                                    t = e.colorStyle,
                                    n = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, F, n), colorClassName: u };
                            }, [F, r]),
                            C = g.computedStyle,
                            h = g.colorClassName;
                        return o().createElement(
                            Iu,
                            Zu(
                                {
                                    className: p()(Yu.base, t && Yu[t], h, n),
                                    style: C,
                                    mt: !0 === l ? nt[t || 'paragraph-P16'].mt : l,
                                    mr: !0 === _ ? nt[t || 'paragraph-P16'].mr : _,
                                    mb: !0 === E ? nt[t || 'paragraph-P16'].mb : E,
                                    ml: !0 === A ? nt[t || 'paragraph-P16'].ml : A,
                                },
                                B,
                            ),
                            void 0 !== D ? o().createElement(ju, Zu({}, D, { text: u })) : u,
                        );
                    }),
                    ot = 'blueprintFragmentInfo',
                    it = 'BlueprintBalance_base_e5',
                    st = 'BlueprintBalance_text_2e',
                    lt = 'BlueprintBalance_amountWithFlag_70',
                    ct = 'BlueprintBalance_amount_5b',
                    _t = 'BlueprintBalance_icon_2d',
                    dt = 'BlueprintBalance_icon__national_48',
                    Et = (0, a.memo)(({ nationBlueprintsCount: e, universalBlueprintsCount: u, nation: t }) => {
                        const n = `url(R.images.gui.maps.icons.blueprints.fragment.special.${t})`;
                        return o().createElement(
                            'div',
                            { className: it },
                            o().createElement(at, {
                                className: st,
                                text: R.strings.techtree.vehicle_tree.header.blueprintBalance(),
                            }),
                            o().createElement(
                                ee,
                                { tooltipArgs: { args: { tooltipId: ot, isUniversal: !0 } } },
                                o().createElement(
                                    'div',
                                    { className: lt },
                                    o().createElement('div', { className: _t }),
                                    o().createElement(at, {
                                        className: ct,
                                        text: String(V.Z5.getNumberFormat(u, V.B3.INTEGRAL)),
                                    }),
                                ),
                            ),
                            o().createElement(
                                ee,
                                { tooltipArgs: { args: { tooltipId: ot } } },
                                o().createElement(
                                    'div',
                                    { className: lt },
                                    o().createElement('div', { className: p()(_t, dt), style: { backgroundImage: n } }),
                                    o().createElement(at, {
                                        className: ct,
                                        text: String(V.Z5.getNumberFormat(e, V.B3.INTEGRAL)),
                                    }),
                                ),
                            ),
                        );
                    }),
                    mt = 33,
                    At = 0,
                    Ft = !0,
                    Dt = 'play';
                const Bt = [
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
                function gt() {
                    return (
                        (gt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        gt.apply(this, arguments)
                    );
                }
                const Ct = (0, a.memo)(function (e) {
                        let u = e.width,
                            t = e.height,
                            n = e.getImageSource,
                            r = e.frameCount,
                            i = e.onAnimate,
                            s = e.frameTime,
                            l = void 0 === s ? mt : s,
                            c = e.initialFrameIndex,
                            _ = void 0 === c ? At : c,
                            d = e.lastFrameIndex,
                            E = void 0 === d ? r - 1 : d,
                            m = e.loop,
                            A = void 0 === m ? Ft : m,
                            F = e.state,
                            D = void 0 === F ? Dt : F,
                            B = e.onAnimationDone,
                            g = e.onAnimationComplete,
                            C = e.poster,
                            h = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, Bt);
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
                                            const e = vt(_, E, n),
                                                u = ht(_, E),
                                                r = window.setInterval(() => {
                                                    const n = u(),
                                                        a = e.get(n);
                                                    a
                                                        ? (null == i || i(n, a),
                                                          t(a),
                                                          n === E &&
                                                              (null == g || g(),
                                                              A || (null == B || B(), window.clearInterval(r))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, l);
                                            return () => window.clearInterval(r);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const e = 0 === _ && C ? { path: C, x: 0, y: 0 } : n(_),
                                                u = new Image();
                                            u.src = e.path;
                                            const r = () => t(pt(e, u));
                                            return (
                                                u.addEventListener('load', r), () => u.removeEventListener('load', r)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [l, n, _, E, A, i, g, B, C, D]),
                            o().createElement('canvas', gt({}, h, { width: u, height: t, ref: p }))
                        );
                    }),
                    ht = (e, u) => {
                        let t = e;
                        return () => {
                            const n = t;
                            return (t += 1), t > u && (t = e), n;
                        };
                    },
                    pt = (e, u) => Object.assign({}, e, { img: u }),
                    vt = (e, u, t) => {
                        const n = new Map(),
                            r = {};
                        for (let a = e; a <= u; a++) {
                            const e = t(a),
                                u = r[e.path];
                            if (u) n.set(a, pt(e, u));
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
                                    n.set(a, pt(e, u));
                            }
                        }
                        return n;
                    };
                function ft(e) {
                    return (u) => `${e}${u}`;
                }
                const bt = 'BlueprintSwitcher_base_b6',
                    wt = 'BlueprintSwitcher_base__disabled_bb',
                    yt = 'BlueprintSwitcher_hintBody_9f',
                    Tt = 'BlueprintSwitcher_icon_5d',
                    Nt = 'BlueprintSwitcher_sequence_d4',
                    St = 'BlueprintSwitcher_glow_f8',
                    xt = 'BlueprintSwitcher_glow__toBlueprintMode_7c';
                var Lt;
                !(function (e) {
                    (e.PLAY = 'play'), (e.STOP = 'stop');
                })(Lt || (Lt = {}));
                const Mt = R.strings.techtree.vehicle_tree.header,
                    Pt = 'R.images.gui.maps.icons.techtree.researchTree.blueprintsHeader.switcher',
                    Rt = (0, a.memo)(({ isBlueprintMode: e, isBlueprintModeEnabled: u, onClick: t }) => {
                        const n = (0, a.useState)(!0),
                            r = n[0],
                            i = n[1],
                            s = (0, a.useState)(!1),
                            l = s[0],
                            c = s[1],
                            _ = (0, a.useState)(!1),
                            d = _[0],
                            E = _[1],
                            m = (0, a.useState)(!e),
                            A = m[0],
                            F = m[1],
                            D = ((e) => ({
                                width: 80,
                                height: 80,
                                frameCount: 11,
                                chunk: { count: 1, columns: 11, rows: 1 },
                                getChunkPath: ft(e ? `${Pt}.bp_frames_to_blueprints_` : `${Pt}.bp_frames_to_common_`),
                            }))(A),
                            B = (function (e) {
                                const u = e.chunk,
                                    t = u.rows * u.columns;
                                return (n) => {
                                    const r = n % t,
                                        a = (r % u.columns) * e.width,
                                        o = Math.trunc(r / u.columns) * e.height;
                                    return { path: e.getChunkPath(Math.trunc(n / t)), x: a, y: o };
                                };
                            })(D),
                            g = pe('BlueprintsSwitchButton', he);
                        (0, a.useEffect)(() => {
                            g && g.runTrigger(!0);
                        }, [g]);
                        const C = u ? Mt.blueprintsSwitchTooltip() : Mt.blueprintsSwitchTooltipDisabled();
                        (0, a.useEffect)(() => {
                            E(e), r || c(!0);
                        }, [e, r]);
                        const h = (0, a.useCallback)(() => {
                            F(!e), c(!1);
                        }, [e]);
                        return o().createElement(
                            'div',
                            { className: p()(bt, !u && wt) },
                            o().createElement('div', { className: p()(St, d && xt) }),
                            o().createElement('div', { className: yt, id: 'blueprint-switcher' }),
                            o().createElement(
                                'div',
                                {
                                    className: Tt,
                                    onClick: () => {
                                        !l && u && (i(!1), t());
                                    },
                                },
                                o().createElement(
                                    Q,
                                    { body: C },
                                    o().createElement(Ct, {
                                        frameTime: 15,
                                        state: l ? Lt.PLAY : Lt.STOP,
                                        width: D.width,
                                        height: D.height,
                                        frameCount: D.frameCount,
                                        className: Nt,
                                        getImageSource: B,
                                        onAnimationDone: h,
                                        loop: !1,
                                    }),
                                ),
                            ),
                        );
                    }),
                    kt = 'Levels_base_e6',
                    It = 'Levels_levelNumberWrapper_d0',
                    Ot = 'Levels_levelNumberWrapper__lastColumn_30',
                    Ht = 'Levels_levelNumber_72',
                    Wt = 'Levels_levelNumber__active_32',
                    Vt = 'Levels_levelDividers_8a',
                    zt = 'Levels_levelDivider_7d',
                    Gt = (0, a.memo)(({ activeLevel: e, className: u = '', levels: t }) =>
                        o().createElement(
                            'div',
                            { className: p()(kt, u) },
                            t.map((u) =>
                                o().createElement(
                                    'div',
                                    { className: p()(It, u === t.length && Ot), key: `nodes-column-level-${u}` },
                                    o().createElement('div', {
                                        className: p()(Ht, e === u && Wt),
                                        style: {
                                            backgroundImage: `url('R.images.gui.maps.icons.techtree.researchTree.levels.l${u}')`,
                                        },
                                    }),
                                    u !== t.length &&
                                        o().createElement(
                                            'div',
                                            { className: Vt },
                                            o().createElement('div', { className: zt }),
                                            o().createElement('div', { className: zt }),
                                            o().createElement('div', { className: zt }),
                                            o().createElement('div', { className: zt }),
                                        ),
                                ),
                            ),
                        ),
                    );
                let Ut;
                !(function (e) {
                    (e.UP = 'up'), (e.DOWN = 'down'), (e.STRAIGHT = 'straight');
                })(Ut || (Ut = {}));
                const $t = 'TreeCell_base_e4',
                    jt = 'TreeCell_base__premium_87',
                    Xt = 'TreeCell_premiumBackground_50',
                    qt = 'TreeCell_base__premiumLastColumn_bf',
                    Yt = 'TreeCell_base__premiumLastRow_b2',
                    Kt = (0, a.memo)(({ children: e, isPremiumCell: u, isPremiumLastRow: t, isPremiumLastColumn: n }) =>
                        o().createElement(
                            'div',
                            { className: p()($t, u && jt, t && Yt, n && qt) },
                            u && o().createElement('div', { className: Xt }),
                            e,
                        ),
                    ),
                    Zt = 'TreeColumn_base_c8',
                    Qt = 'TreeColumn_base__withVerticalScrollBar_06',
                    Jt = 'TreeColumn_base__lastColumn_75',
                    en = 'TreeColumn_base__dragging_1e',
                    un = (0, a.memo)(({ children: e, isVerticalScrollBarShown: u, isLastColumn: t, isDragging: n }) =>
                        o().createElement('div', { className: p()(Zt, u && Qt, t && Jt, n && en) }, e),
                    );
                let tn;
                !(function (e) {
                    (e[(e.horizontal = 0)] = 'horizontal'),
                        (e[(e.vertical = 1)] = 'vertical'),
                        (e[(e.H_V = 2)] = 'H_V');
                })(tn || (tn = {}));
                const nn = 'HorizontalConnector_base_8e',
                    rn = 'HorizontalConnector_connector_b4',
                    an = 'HorizontalConnector_connector__down_ba',
                    on = 'HorizontalConnector_connector__withPadding_18',
                    sn = 'HorizontalConnector_part_93',
                    ln = 'HorizontalConnector_part__line_2d',
                    cn = 'HorizontalConnector_base__dashed_37',
                    _n = 'HorizontalConnector_base__thick_38',
                    dn = 'HorizontalConnector_base__inBattle_f0',
                    En = 'HorizontalConnector_base__blueprint_ca',
                    mn = 'HorizontalConnector_base__earlyAccess_2f',
                    An = 'HorizontalConnector_part__vertical_55',
                    Fn = 'HorizontalConnector_part__start_ed',
                    Dn = 'HorizontalConnector_part__middle_07',
                    Bn = 'HorizontalConnector_part__end_c7',
                    gn = 'HorizontalConnector_part__straight_4b',
                    Cn = 'HorizontalConnector_part__arrow_97',
                    hn = ({
                        direction: e,
                        size: u,
                        isThick: t,
                        isDashed: n,
                        isBlueprint: r,
                        isEarlyAccess: i,
                        isInBattle: s,
                    }) => {
                        const l = e === Ut.UP,
                            c = e === Ut.DOWN,
                            _ = e === Ut.STRAIGHT,
                            d = (0, a.useMemo)(() => p()(rn, c && an), [c]);
                        return o().createElement(
                            'div',
                            { className: p()(nn, t && _n, n && cn, r && En, i && mn, s && dn), style: { '--size': u } },
                            (l || c) &&
                                o().createElement(
                                    'div',
                                    { className: d },
                                    o().createElement('div', { className: p()(sn, ln, Fn) }),
                                    o().createElement('div', { className: p()(sn, ln, An, Dn) }),
                                    o().createElement('div', { className: p()(sn, ln, Bn) }),
                                    o().createElement('div', { className: p()(sn, Cn) }),
                                ),
                            _ &&
                                o().createElement(
                                    'div',
                                    { className: p()(rn, on) },
                                    o().createElement('div', { className: p()(sn, ln, gn) }),
                                    o().createElement('div', { className: p()(sn, Cn) }),
                                ),
                        );
                    },
                    pn = 'HorizontalVerticalConnector_base_01',
                    vn = 'HorizontalVerticalConnector_connector_29',
                    fn = 'HorizontalVerticalConnector_connector__down_10',
                    bn = 'HorizontalVerticalConnector_part_b9',
                    wn = 'HorizontalVerticalConnector_part__line_9e',
                    yn = 'HorizontalVerticalConnector_base__dashed_02',
                    Tn = 'HorizontalVerticalConnector_base__thick_90',
                    Nn = 'HorizontalVerticalConnector_base__inBattle_9e',
                    Sn = 'HorizontalVerticalConnector_base__blueprint_b8',
                    xn = 'HorizontalVerticalConnector_base__earlyAccess_cd',
                    Ln = 'HorizontalVerticalConnector_part__vertical_fa',
                    Mn = 'HorizontalVerticalConnector_part__start_94',
                    Pn = 'HorizontalVerticalConnector_part__end_42',
                    Rn = 'HorizontalVerticalConnector_part__arrow_06',
                    kn = ({
                        direction: e,
                        size: u,
                        isThick: t,
                        isDashed: n,
                        isBlueprint: r,
                        isEarlyAccess: i,
                        isInBattle: s,
                    }) => {
                        const l = e === Ut.DOWN,
                            c = (0, a.useMemo)(() => p()(vn, l && fn), [l]);
                        return o().createElement(
                            'div',
                            { className: p()(pn, t && Tn, n && yn, r && Sn, i && xn, s && Nn), style: { '--size': u } },
                            o().createElement(
                                'div',
                                { className: c },
                                o().createElement('div', { className: p()(bn, wn, Mn) }),
                                o().createElement('div', { className: p()(bn, wn, Ln, Pn) }),
                                o().createElement('div', { className: p()(bn, Rn) }),
                            ),
                        );
                    },
                    In = 'VerticalConnector_base_8d',
                    On = 'VerticalConnector_connector_4b',
                    Hn = 'VerticalConnector_connector__down_14',
                    Wn = 'VerticalConnector_part_bd',
                    Vn = 'VerticalConnector_part__line_2c',
                    zn = 'VerticalConnector_base__dashed_12',
                    Gn = 'VerticalConnector_base__thick_1a',
                    Un = 'VerticalConnector_base__inBattle_b8',
                    $n = 'VerticalConnector_base__blueprint_38',
                    jn = 'VerticalConnector_base__earlyAccess_79',
                    Xn = 'VerticalConnector_part__straight_59',
                    qn = 'VerticalConnector_part__arrow_e5',
                    Yn = ({
                        direction: e,
                        size: u,
                        isThick: t,
                        isDashed: n,
                        isBlueprint: r,
                        isEarlyAccess: i,
                        isInBattle: s,
                    }) => {
                        const l = e === Ut.DOWN,
                            c = (0, a.useMemo)(() => p()(On, l && Hn), [l]);
                        return o().createElement(
                            'div',
                            { className: p()(In, t && Gn, n && zn, r && $n, i && jn, s && Un), style: { '--size': u } },
                            o().createElement(
                                'div',
                                { className: c },
                                o().createElement('div', { className: p()(Wn, Vn, Xn) }),
                                o().createElement('div', { className: p()(Wn, qn) }),
                            ),
                        );
                    },
                    Kn = 'TreeConnectors_base_a6',
                    Zn = 'TreeConnectors_connectorWrapper_5b',
                    Qn = 'TreeConnectors_connectorWrapper__thick_47',
                    Jn = 'TreeConnectors_connectorWrapper__custom_d8',
                    er = (0, a.memo)(({ connectors: e, isBlueprintMode: u }) => {
                        const t = (0, a.useCallback)(
                            (e) => {
                                switch (e.lineType) {
                                    case tn.horizontal:
                                        return o().createElement(hn, {
                                            direction: e.direction,
                                            size: e.length,
                                            isThick: e.isThick,
                                            isDashed: e.isDashed,
                                            isBlueprint: u,
                                            isEarlyAccess: e.isEarlyAccessConnector,
                                            isInBattle: e.isInBattleConnector,
                                        });
                                    case tn.vertical:
                                        return o().createElement(Yn, {
                                            direction: e.direction,
                                            size: e.length,
                                            isThick: e.isThick,
                                            isDashed: e.isDashed,
                                            isBlueprint: u,
                                            isEarlyAccess: e.isEarlyAccessConnector,
                                            isInBattle: e.isInBattleConnector,
                                        });
                                    case tn.H_V:
                                        return o().createElement(kn, {
                                            direction: e.direction,
                                            size: e.length,
                                            isThick: e.isThick,
                                            isDashed: e.isDashed,
                                            isBlueprint: u,
                                            isEarlyAccess: e.isEarlyAccessConnector,
                                            isInBattle: e.isInBattleConnector,
                                        });
                                }
                            },
                            [u],
                        );
                        return o().createElement(
                            'div',
                            { className: Kn },
                            e.map((e) =>
                                o().createElement(
                                    'div',
                                    {
                                        className: p()(
                                            Zn,
                                            e.isThick && Qn,
                                            (e.isInBattleConnector || e.isEarlyAccessConnector) && Jn,
                                        ),
                                        key: `connector-${e.nodeInId}`,
                                    },
                                    t(e),
                                ),
                            ),
                        );
                    }),
                    ur = {
                        base: 'Hint_base_b8',
                        border: 'Hint_border_80',
                        base__hidden: 'Hint_base__hidden_8b',
                        hint: 'Hint_hint_70',
                        base__leftToRight: 'Hint_base__leftToRight_9a',
                        hintSubstrate: 'Hint_hintSubstrate_e9',
                        hintArrow: 'Hint_hintArrow_0f',
                        blink: 'Hint_blink_7e',
                        blinkLeftToRight: 'Hint_blinkLeftToRight_93',
                        hintText: 'Hint_hintText_b9',
                    },
                    tr = (0, a.memo)(
                        ({ id: e, className: u, isHidden: t = !1, text: n, isHideBorder: r = !1, properties: i }) => {
                            const s = i.isInView,
                                l = i.direction,
                                c = (0, a.useState)(!1),
                                _ = c[0],
                                d = c[1],
                                E = p()(
                                    ur.base,
                                    (t || _) && ur.base__hidden,
                                    u && u,
                                    l === Ue.LEFT_TO_RIGHT && ur[`base__${Ue.LEFT_TO_RIGHT}`],
                                );
                            return o().createElement(
                                'div',
                                { className: E, id: e },
                                !r && o().createElement('div', { className: ur.border }),
                                o().createElement(
                                    'div',
                                    {
                                        className: ur.hint,
                                        onClick: () => {
                                            _ || d(!0);
                                        },
                                    },
                                    o().createElement('div', { className: ur.hintSubstrate }),
                                    o().createElement('div', {
                                        className: p()(ur.hintArrow, !s && ur.hintArrow__notInView),
                                    }),
                                    o().createElement(at, { text: n, className: ur.hintText }),
                                ),
                            );
                        },
                    ),
                    nr = {
                        base__blueprintConvert: 'HintManager_base__blueprintConvert_4c',
                        base__inBattle: 'HintManager_base__inBattle_3c',
                    },
                    rr = (0, be.Pi)(({ nodeId: e }) => {
                        var u;
                        const t = Xe().model,
                            n = t.root.get(),
                            r = n.selectedNation,
                            a = n.isBlueprintMode,
                            i = t.hintProperties.get(),
                            s = t.computes,
                            l = s.getInBattleNations,
                            c = s.getFirstNodeWithAddBlueprintButton,
                            _ = s.getBlueprintConvertHint,
                            d = s.getTreeActionHint,
                            E = l().includes(r),
                            m = null == (u = c()) ? void 0 : u.id,
                            A = _(),
                            F = d(),
                            D = i[Ge.CONVERT],
                            B = i[Ge.IN_BATTLE];
                        return a && m === e && A
                            ? o().createElement(tr, {
                                  className: p()(nr.base, nr.base__blueprintConvert),
                                  text: A.hintText,
                                  id: Ge.CONVERT,
                                  properties: D,
                              })
                            : !a && E && F && F.nodeID === e
                              ? o().createElement(
                                    'div',
                                    { id: Ge.IN_BATTLE },
                                    o().createElement(tr, {
                                        className: p()(nr.base, nr.base__inBattle),
                                        text: F.hintText,
                                        isHideBorder: !0,
                                        id: Ge.CONVERT,
                                        properties: B,
                                    }),
                                )
                              : o().createElement(o().Fragment, null);
                    });
                let ar;
                !(function (e) {
                    (e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH');
                })(ar || (ar = {}));
                const or = ({
                        children: e,
                        contentID: u,
                        decoratorID: t = 0,
                        targetId: n = 0,
                        args: r,
                        isEnabled: o = !0,
                        onMouseDown: i,
                    }) => {
                        const s = (0, a.useCallback)(() => {
                                (0, V.c9)(V.B0.CONTEXT_MENU, {
                                    contentID: u,
                                    decoratorID: t,
                                    targetID: n,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: r,
                                }),
                                    fe.playYes();
                            }, [r, u, t, n]),
                            l = (0, a.useCallback)(() => {
                                (0, V.c9)(V.B0.CONTEXT_MENU, {
                                    contentID: u,
                                    decoratorID: t,
                                    targetID: n,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [u, t, n]),
                            c = (0, a.useCallback)(
                                (e) => {
                                    i && i(e), ((e) => e.button === ar.RIGHT)(e) && s();
                                },
                                [i, s],
                            );
                        return (
                            (0, a.useEffect)(() => {
                                !1 === o && l();
                            }, [o, l]),
                            o ? (0, a.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    ir = ['children'];
                function sr() {
                    return (
                        (sr =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        sr.apply(this, arguments)
                    );
                }
                const lr = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                            return r;
                        })(e, ir);
                    return o().createElement(
                        or,
                        sr({}, t, { contentID: R.views.common.BackportContextMenu('resId') }),
                        u,
                    );
                };
                let cr, _r, dr;
                !(function (e) {
                    (e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                })(cr || (cr = {})),
                    (function (e) {
                        (e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.equipCoin = 'equipCoin');
                    })(_r || (_r = {})),
                    (function (e) {
                        (e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG');
                    })(dr || (dr = {}));
                const Er = ({ format: e, value: u }) => {
                        const t = ((e, u = 'integral') => {
                            let t;
                            t = 'gold' === u ? V.B3.GOLD : V.B3.INTEGRAL;
                            return void 0 === e ? '' : V.Z5.getNumberFormat(e, t);
                        })(u, e);
                        return t ? o().createElement('span', null, t) : null;
                    },
                    mr = {
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
                    Ar = ({
                        isDiscount: e,
                        isInteractiveDiscount: u,
                        size: t,
                        type: n,
                        isEnough: r,
                        value: a,
                        discountValue: i,
                        showPlus: s,
                        stockBackgroundName: l = dr.Red,
                    }) => {
                        const c = p()(mr.value, mr[`value__${n}`], !r && mr.value__notEnough),
                            _ = p()(mr.icon, mr[`icon__${n}-${t}`]),
                            d = p()(mr.stock, i && mr.stock__indent, u && mr.stock__interactive),
                            E = s && a > 0 && '+',
                            m = p()(mr.base, mr[`base__${t}`]);
                        return o().createElement(
                            'span',
                            { className: m },
                            o().createElement(
                                'span',
                                { className: c },
                                E,
                                o().createElement(Er, { value: a, format: n === _r.gold ? 'gold' : 'integral' }),
                            ),
                            o().createElement('span', { className: _ }),
                            e &&
                                o().createElement(
                                    'span',
                                    { className: d },
                                    o().createElement('span', {
                                        className: mr.stockBackground,
                                        style: { backgroundImage: `url(R.images.gui.maps.icons.library.${l})` },
                                    }),
                                    Boolean(i) && i,
                                ),
                        );
                    };
                Ar.defaultProps = { isEnough: !0 };
                const Fr = o().memo(Ar),
                    Dr = 'EarlyAccessButton_base_52',
                    Br = 'EarlyAccessButton_background_0e',
                    gr = 'EarlyAccessButton_background__paused_7b',
                    Cr = 'EarlyAccessButton_hoverBackground_88',
                    hr = 'EarlyAccessButton_hoverBackground__visible_8e',
                    pr = 'EarlyAccessButton_content_fc',
                    vr = 'EarlyAccessButton_content__paused_f7',
                    fr = 'EarlyAccessButton_text_fb',
                    br = 'EarlyAccessButton_text__hovered_96',
                    wr = 'EarlyAccessButton_text__paused_29',
                    yr = ({ isPaused: e, children: u }) =>
                        e
                            ? o().createElement(
                                  $,
                                  {
                                      contentId:
                                          R.views.lobby.early_access.tooltips.EarlyAccessEntryPointPausedTooltip(
                                              'resId',
                                          ),
                                  },
                                  u,
                              )
                            : o().createElement(
                                  Q,
                                  {
                                      header: R.strings.tooltips.techTreePage.earlyAccessEntryPointTooltip.header(),
                                      body: R.strings.tooltips.techTreePage.earlyAccessEntryPointTooltip.body(),
                                  },
                                  u,
                              ),
                    Tr = (0, be.Pi)(({ isPaused: e }) => {
                        const u = Xe(),
                            t = u.model,
                            n = u.controls,
                            r = t.isEarlyAccessButtonHovered.get();
                        return o().createElement(
                            'div',
                            { className: Dr },
                            !e && o().createElement('div', { className: p()(Cr, r && hr) }),
                            o().createElement('div', { className: p()(Br, e && gr) }),
                            o().createElement(
                                yr,
                                { isPaused: e },
                                o().createElement(
                                    'div',
                                    {
                                        className: p()(pr, e && vr),
                                        onMouseEnter: () => {
                                            e || (ve(R.sounds.highlight()), n.setEarlyAccessButtonHovered(!0));
                                        },
                                        onMouseLeave: () => {
                                            e || n.setEarlyAccessButtonHovered(!1);
                                        },
                                        onClick: () => {
                                            e || (ve(R.sounds.play()), n.onGoToEarlyAccess());
                                        },
                                    },
                                    o().createElement(at, {
                                        className: p()(fr, r && br, e && wr),
                                        text: R.strings.techtree.vehicle_tree.earlyAccessButton(),
                                    }),
                                ),
                            ),
                        );
                    }),
                    Nr = 'ActionButton_base_8b',
                    Sr = 'ActionButton_base__scaled_c3',
                    xr = 'ActionButton_base__buyGold_9b',
                    Lr = 'ActionButton_base__buySilver_08',
                    Mr = 'ActionButton_base__buyDisabled_83',
                    Pr = 'ActionButton_base__explore_ba',
                    Rr = 'ActionButton_base__exploreDisabled_41',
                    kr = 'ActionButton_actionButtonHover_ae',
                    Ir = 'ActionButton_actionButtonHover__visible_7d',
                    Or = 'ActionButton_recoveryText_c1',
                    Hr = (0, be.Pi)(
                        ({
                            vehicleCD: e,
                            buyPrice: u,
                            explorePrice: t,
                            isTop: n,
                            isPremiumNode: r,
                            isHovered: i,
                            isBlueprintMode: s,
                            isEnoughMoneyToBuy: l,
                            isUnlockedNode: c,
                            isAllNextUnlocked: _,
                            isEnoughXpToUnlock: d,
                            isAvailableToUnlockNode: E,
                            isRecoveryEnableNode: m,
                        }) => {
                            const A = Xe().controls,
                                F = 2 === ce(),
                                D = (0, we.useSpring)({
                                    to: { opacity: n || !_ || i ? 1 : 0 },
                                    config: { duration: 150 },
                                }),
                                B = p()(
                                    Nr,
                                    F && Sr,
                                    r && l && c && !s && xr,
                                    !r && l && c && !s && Lr,
                                    !l && c && !s && Mr,
                                    d && E && Pr,
                                    !d && E && Rr,
                                ),
                                g = (0, a.useState)(!1),
                                C = g[0],
                                h = g[1];
                            return o().createElement(
                                we.animated.div,
                                {
                                    style: D,
                                    className: B,
                                    onMouseEnter: () => {
                                        ((l && c) || (d && E)) && (ve(R.sounds.highlight()), h(!0));
                                    },
                                    onMouseLeave: () => {
                                        h(!1);
                                    },
                                    onClick: (u) => {
                                        u.stopPropagation(),
                                            ve(R.sounds.play()),
                                            l && c ? A.onBuyVehicle(e) : d && E && A.onUnlockVehicle(e);
                                    },
                                },
                                (!s || (d && E)) && o().createElement('div', { className: p()(kr, C && Ir) }),
                                c &&
                                    !s &&
                                    (m
                                        ? o().createElement(at, {
                                              className: Or,
                                              text: R.strings.techtree.vehicle_tree.actionButton.recovery(),
                                          })
                                        : o().createElement(Fr, {
                                              size: cr.small,
                                              type: r ? _r.gold : _r.credits,
                                              value: u,
                                          })),
                                E && o().createElement(Fr, { size: cr.small, type: _r.xp, value: t }),
                            );
                        },
                    ),
                    Wr = (0, a.memo)(Hr),
                    Vr = 'AddBluePrintButton_base_2b',
                    zr = 'AddBluePrintButton_hovered_5f',
                    Gr = 'AddBluePrintButton_hovered__visible_cb',
                    Ur = (0, a.memo)(({ onClick: e, nodeId: u }) => {
                        const t = (0, a.useState)(!1),
                            n = t[0],
                            r = t[1];
                        return o().createElement(
                            ee,
                            { tooltipArgs: { args: { tooltipId: 'TOOLTIP_BLUEPRINT_CONVERT_COUNT', nodeId: u } } },
                            o().createElement(
                                'div',
                                {
                                    className: Vr,
                                    onClick: e,
                                    onMouseEnter: () => {
                                        ve(R.sounds.highlight()), r(!0);
                                    },
                                    onMouseLeave: () => {
                                        r(!1);
                                    },
                                },
                                o().createElement('div', { className: p()(zr, n && Gr) }),
                            ),
                        );
                    }),
                    $r = {
                        base: 'CompareButton_base_9e',
                        base__hovered: 'CompareButton_base__hovered_6a',
                        compareButtonActiveZone: 'CompareButton_compareButtonActiveZone_86',
                    },
                    jr = (0, be.Pi)(({ isHovered: e, vehicleCD: u }) => {
                        const t = Xe().controls,
                            n = (0, a.useState)(!1),
                            r = n[0],
                            i = n[1],
                            s = p()($r.base, !e && $r.base__hidden, r && $r.base__hovered);
                        return o().createElement(
                            Q,
                            { body: R.strings.techtree.vehicle_tree.tank_node.compareButtonTooltip.body() },
                            o().createElement('div', {
                                className: s,
                                onMouseEnter: () => {
                                    ve(R.sounds.highlight()), i(!0);
                                },
                                onMouseLeave: () => {
                                    i(!1);
                                },
                                onClick: (e) => {
                                    e.stopPropagation(), ve(R.sounds.yes1()), t.onAddVehicleToCompare(u);
                                },
                            }),
                        );
                    }),
                    Xr = (0, a.memo)(jr),
                    qr = {
                        base: 'TreeNode_base_e4',
                        background: 'TreeNode_background_3a',
                        background__locked: 'TreeNode_background__locked_9a',
                        background__unlocked: 'TreeNode_background__unlocked_8f',
                        background__inInventory: 'TreeNode_background__inInventory_36',
                        background__premium: 'TreeNode_background__premium_04',
                        blueprints: 'TreeNode_blueprints_80',
                        blueprints__availableToUnlock: 'TreeNode_blueprints__availableToUnlock_3d',
                        border: 'TreeNode_border_72',
                        border__blueprint: 'TreeNode_border__blueprint_bc',
                        border__blueprintScaled: 'TreeNode_border__blueprintScaled_6b',
                        border__earlyAccess: 'TreeNode_border__earlyAccess_ec',
                        border__earlyAccessLocked: 'TreeNode_border__earlyAccessLocked_65',
                        border__earlyAccessPaused: 'TreeNode_border__earlyAccessPaused_cc',
                        border__inBattle: 'TreeNode_border__inBattle_ee',
                        border__inBattleFirstEntry: 'TreeNode_border__inBattleFirstEntry_2b',
                        hover: 'TreeNode_hover_41',
                        base__hovered: 'TreeNode_base__hovered_f4',
                        hover__earlyAccess: 'TreeNode_hover__earlyAccess_94',
                        hover__earlyAccessLocked: 'TreeNode_hover__earlyAccessLocked_c4',
                        hover__earlyAccessPaused: 'TreeNode_hover__earlyAccessPaused_6b',
                        earlyAccessMainButtonHover: 'TreeNode_earlyAccessMainButtonHover_e2',
                        earlyAccessMainButtonHover__visible: 'TreeNode_earlyAccessMainButtonHover__visible_f7',
                        actionButton: 'TreeNode_actionButton_21',
                        addBlueprintButtonContainer: 'TreeNode_addBlueprintButtonContainer_db',
                        content: 'TreeNode_content_7c',
                        title: 'TreeNode_title_d9',
                        base__gold: 'TreeNode_base__gold_46',
                        content__locked: 'TreeNode_content__locked_46',
                        vehicleLevel: 'TreeNode_vehicleLevel_51',
                        base__elite: 'TreeNode_base__elite_2d',
                        vehicleTypeWrapper: 'TreeNode_vehicleTypeWrapper_23',
                        vehicleType: 'TreeNode_vehicleType_5f',
                        vehicleType__lightTank: 'TreeNode_vehicleType__lightTank_e4',
                        vehicleType__mediumTank: 'TreeNode_vehicleType__mediumTank_ba',
                        vehicleType__heavyTank: 'TreeNode_vehicleType__heavyTank_af',
                        'vehicleType__AT-SPG': 'TreeNode_vehicleType__AT-SPG_d7',
                        vehicleType__SPG: 'TreeNode_vehicleType__SPG_6a',
                        vehicleIcon: 'TreeNode_vehicleIcon_71',
                        base__blueprint: 'TreeNode_base__blueprint_8f',
                        tradeIn: 'TreeNode_tradeIn_84',
                        inInventoryIcon: 'TreeNode_inInventoryIcon_75',
                        inInventoryIcon__rent: 'TreeNode_inInventoryIcon__rent_37',
                        inInventoryIcon__blueprint: 'TreeNode_inInventoryIcon__blueprint_d2',
                        earlyAccessLocked: 'TreeNode_earlyAccessLocked_16',
                        xpCost: 'TreeNode_xpCost_e5',
                        xpCost__discount: 'TreeNode_xpCost__discount_f5',
                        xpCost__earned: 'TreeNode_xpCost__earned_ef',
                        xpCost__earned__elite: 'TreeNode_xpCost__earned__elite_0d',
                        discount: 'TreeNode_discount_61',
                        discount__buy: 'TreeNode_discount__buy_a4',
                        discount__research: 'TreeNode_discount__research_fe',
                        discount__locked: 'TreeNode_discount__locked_46',
                        tokenBalance: 'TreeNode_tokenBalance_cd',
                        tokenBalance__earlyAccess: 'TreeNode_tokenBalance__earlyAccess_a3',
                        earlyAccessTokenIcon: 'TreeNode_earlyAccessTokenIcon_58',
                        compareButton: 'TreeNode_compareButton_f1',
                        earlyAccessButton: 'TreeNode_earlyAccessButton_1f',
                        earlyAccessGlowContainer: 'TreeNode_earlyAccessGlowContainer_17',
                        earlyAccessGlow: 'TreeNode_earlyAccessGlow_a8',
                    },
                    Yr = { lightTank: 'lt', mediumTank: 'st', heavyTank: 'tt', SPG: 'sau', 'AT-SPG': 'pt' },
                    Kr = R.images.gui.maps.icons.techtree.researchTree.node,
                    Zr = (0, be.Pi)(
                        ({
                            earnedXp: e,
                            state: u,
                            id: t,
                            vehicle: n,
                            earlyAccessBalance: r,
                            earlyAccessPrice: i,
                            isAllNextUnlocked: s,
                            blueprintConvertHint: l,
                            isEarlyAccessBlocked: c,
                            isBlueprintMode: _,
                            blueprintMaxCount: d,
                            blueprintBalance: E,
                            canAddBlueprint: m,
                            shouldInBattleShow: A,
                            onMouseEnter: F,
                            onMouseLeave: D,
                        }) => {
                            const B = Xe(),
                                g = B.model,
                                C = B.controls,
                                h = (0, a.useState)(!1),
                                v = h[0],
                                f = h[1],
                                b = g.computes,
                                w = b.getEarlyAccessNodes,
                                y = b.getFormattedInBattleNodes,
                                T = b.getFirstEarlyAccessNodeId,
                                N = b.getLastEarlyAccessNodeId,
                                S = b.getFirstInBattleNodeId,
                                x = b.getLastInBattleNodeId,
                                L = g.isEarlyAccessButtonHovered.get(),
                                M = g.root.get(),
                                P = M.isEarlyAccessFirstTimeShown,
                                k = M.isEarlyAccessPaused,
                                I = w(),
                                O = y(),
                                H = He(u),
                                W = ((e) => (128 & e) > 0)(u),
                                V = ((e) => (1 & e) > 0)(u),
                                z = Oe(u),
                                G = ((e) => (32 & e) > 0)(u),
                                U = Ie(u),
                                $ = ((e) => (16 & e) > 0)(u),
                                j = ((e) => (8 & e) > 0)(u),
                                X = ((e) => (32768 & e) > 0)(u),
                                q = ((e) => (2097152 & e) > 0)(u),
                                Y = Ve(u),
                                K = ze(u),
                                Z = ((e) => (262144 & e) > 0)(u),
                                Q = 2 === ce(),
                                J = (0, a.useMemo)(
                                    () =>
                                        p()(
                                            qr.background,
                                            V && qr.background__locked,
                                            z && qr.background__unlocked,
                                            H && qr.background__premium,
                                            G && qr.background__inInventory,
                                            !V && _ && qr.background__blueprints,
                                        ),
                                    [_, G, V, H, z],
                                ),
                                ue = Yr[n.vehicleType],
                                te = Boolean(n.buyDiscount) && !G,
                                ne = Boolean(n.unlockDiscount) && !z,
                                re = ne || te,
                                ae = {
                                    backgroundImage: n
                                        ? `url(R.images.gui.maps.icons.vehicle.small.${((oe = `${n.vehicleNation}-${n.vehicleTechName}`), oe.replace(/-/g, '_'))})`
                                        : void 0,
                                };
                            var oe;
                            const ie = {
                                    backgroundImage: `url(${Kr.vehicleTypeIcons.$dyn(`${ue}${n.isElite ? '_gold' : ''}${Q ? '_x2' : ''}`)})`,
                                },
                                se = {
                                    backgroundImage: `url(${Kr.levels.$dyn(`c_${n.vehicleLvl}${Q ? '_x2' : ''}`)})`,
                                },
                                le = p()(
                                    qr.discount,
                                    te && qr.discount__buy,
                                    ne && qr.discount__research,
                                    V && qr.discount__locked,
                                ),
                                _e = p()(
                                    qr.border,
                                    _ && U && qr.border__blueprint,
                                    _ && U && Q && qr.border__blueprintScaled,
                                    Y && qr.border__earlyAccess,
                                    Y && !z && qr.border__earlyAccessLocked,
                                    Y && k && qr.border__earlyAccessPaused,
                                    !_ && K && qr.border__inBattle,
                                    !_ && K && A && qr.border__inBattleFirstEntry,
                                ),
                                de = p()(
                                    qr.hover,
                                    Y && qr.hover__earlyAccess,
                                    Y && !z && qr.hover__earlyAccessLocked,
                                    Y && k && qr.hover__earlyAccessPaused,
                                ),
                                Ee = () => {
                                    F(), ve(R.sounds.highlight()), f(!0);
                                },
                                me = () => {
                                    D(), f(!1);
                                },
                                Ae = (E / d) * 100,
                                Fe = T(),
                                De = N(),
                                Be = (0, a.useMemo)(() => (Y ? 300 * I.findIndex((e) => e.id === t) : 0), [I, Y, t]),
                                ge = (0, a.useMemo)(() => {
                                    var e;
                                    return K
                                        ? 300 * ((null == (e = O.find((e) => e.id === t)) ? void 0 : e.index) || 0)
                                        : 0;
                                }, [O, K, t]),
                                Ce = S(),
                                he = x();
                            return o().createElement(
                                o().Fragment,
                                null,
                                !Y &&
                                    m &&
                                    _ &&
                                    o().createElement(
                                        'div',
                                        { className: qr.addBlueprintButtonContainer },
                                        o().createElement(Ur, {
                                            onClick: () => {
                                                ve(R.sounds.play()),
                                                    l && C.onHintClick(l.hintID),
                                                    C.onGoToBlueprintView(n.vehicleCD);
                                            },
                                            nodeId: t,
                                        }),
                                    ),
                                Fe === t &&
                                    o().createElement(
                                        'div',
                                        { className: qr.earlyAccessButton },
                                        o().createElement(Tr, { isPaused: k }),
                                    ),
                                !_ &&
                                    o().createElement(
                                        'div',
                                        { className: qr.compareButton, onMouseEnter: Ee, onMouseLeave: me },
                                        v && o().createElement(Xr, { isHovered: v, vehicleCD: n.vehicleCD }),
                                    ),
                                ((!G && !V && !Y) || (Y && z && !G)) &&
                                    o().createElement(
                                        'div',
                                        { className: qr.actionButton, onMouseEnter: Ee, onMouseLeave: me },
                                        o().createElement(Wr, {
                                            vehicleCD: n.vehicleCD,
                                            buyPrice: n.buyPrice,
                                            explorePrice: n.unlockPrice,
                                            isPremiumNode: H,
                                            isTop: 10 === n.vehicleLvl,
                                            isHovered: v,
                                            isBlueprintMode: _,
                                            isEnoughMoneyToBuy: $,
                                            isUnlockedNode: z,
                                            isAllNextUnlocked: s,
                                            isEnoughXpToUnlock: j,
                                            isAvailableToUnlockNode: U,
                                            isRecoveryEnableNode: Z,
                                        }),
                                    ),
                                o().createElement(
                                    ee,
                                    {
                                        tooltipArgs: {
                                            args: {
                                                tooltipId: _ ? 'TOOLTIP_BLUEPRINT' : 'techtreeVehicleTooltip',
                                                nodeId: t,
                                            },
                                        },
                                    },
                                    o().createElement(
                                        lr,
                                        { args: { nodeId: t } },
                                        o().createElement(
                                            'div',
                                            {
                                                className: p()(
                                                    qr.base,
                                                    v && qr.base__hovered,
                                                    H && qr.base__gold,
                                                    _ && qr.base__blueprint,
                                                    W && qr.base__elite,
                                                    Y && qr.base__earlyAccess,
                                                ),
                                                onMouseEnter: Ee,
                                                onMouseLeave: me,
                                                onClick: () => {
                                                    ve(R.sounds.play()), C.onGoToModulesTechTree(n.vehicleCD);
                                                },
                                            },
                                            o().createElement('div', { className: _e }),
                                            o().createElement('div', { className: de }),
                                            Y &&
                                                o().createElement('div', {
                                                    className: p()(
                                                        qr.earlyAccessMainButtonHover,
                                                        L && qr.earlyAccessMainButtonHover__visible,
                                                    ),
                                                }),
                                            o().createElement('div', { className: J }),
                                            (V || j) &&
                                                o().createElement('div', {
                                                    className: p()(
                                                        qr.blueprints,
                                                        j && qr.blueprints__availableToUnlock,
                                                    ),
                                                    style: _ ? { width: `${Ae}%` } : { width: '0%' },
                                                }),
                                            o().createElement(
                                                'div',
                                                { className: p()(qr.content, V && qr.content__locked) },
                                                o().createElement('div', { className: qr.vehicleIcon, style: ae }),
                                                o().createElement(at, { className: qr.title, text: n.vehicleName }),
                                                o().createElement(
                                                    'div',
                                                    { className: qr.vehicleTypeWrapper },
                                                    o().createElement('div', {
                                                        className: p()(
                                                            qr.vehicleType,
                                                            qr[`vehicleType__${n.vehicleType}`],
                                                        ),
                                                        style: ie,
                                                    }),
                                                    o().createElement('div', { className: qr.vehicleLevel, style: se }),
                                                ),
                                                o().createElement('div', { className: qr.discount }),
                                                !_ && re && o().createElement('div', { className: le }),
                                                !Y &&
                                                    V &&
                                                    !_ &&
                                                    o().createElement(
                                                        'div',
                                                        { className: p()(qr.xpCost, re && qr.xpCost__discount) },
                                                        o().createElement(Fr, {
                                                            size: cr.small,
                                                            type: _r.xp,
                                                            value: Number(n.unlockPrice),
                                                        }),
                                                    ),
                                                !Z &&
                                                    !V &&
                                                    !_ &&
                                                    Boolean(e) &&
                                                    o().createElement(
                                                        'div',
                                                        {
                                                            className: p()(
                                                                qr.xpCost,
                                                                qr.xpCost__earned,
                                                                W && qr.xpCost__earned__elite,
                                                            ),
                                                        },
                                                        o().createElement(Fr, {
                                                            size: cr.small,
                                                            type: W ? _r.freeXP : _r.xp,
                                                            value: e,
                                                        }),
                                                    ),
                                                !Y &&
                                                    _ &&
                                                    o().createElement(at, {
                                                        className: qr.tokenBalance,
                                                        text: R.strings.techtree.vehicle_tree.blueprints.node.tokenBalance(),
                                                        format: { binding: { earned: E, max: d } },
                                                    }),
                                                Y &&
                                                    !c &&
                                                    !z &&
                                                    o().createElement(
                                                        o().Fragment,
                                                        null,
                                                        o().createElement(at, {
                                                            className: p()(
                                                                qr.tokenBalance,
                                                                Y && qr.tokenBalance__earlyAccess,
                                                            ),
                                                            text: V
                                                                ? String(i)
                                                                : R.strings.techtree.vehicle_tree.blueprints.node.tokenBalance(),
                                                            format: { binding: { earned: r, max: i } },
                                                        }),
                                                        o().createElement('div', {
                                                            className: qr.earlyAccessTokenIcon,
                                                        }),
                                                    ),
                                            ),
                                            (G || (_ && z)) &&
                                                o().createElement('div', {
                                                    className: p()(
                                                        qr.inInventoryIcon,
                                                        X && qr.inInventoryIcon__rent,
                                                        _ && qr.inInventoryIcon__blueprint,
                                                    ),
                                                }),
                                            q && o().createElement('div', { className: qr.tradeIn }),
                                            c && o().createElement('div', { className: qr.earlyAccessLocked }),
                                            ((!k && P && Y) || (K && A)) &&
                                                o().createElement(
                                                    'div',
                                                    { className: qr.earlyAccessGlowContainer },
                                                    o().createElement('div', {
                                                        className: qr.earlyAccessGlow,
                                                        style: { animationDelay: `${Be || ge}ms` },
                                                        onAnimationStart: () => {
                                                            ((Y && t === Fe) || (K && t === Ce)) &&
                                                                ve('researches_top_of_the_tree_start');
                                                        },
                                                        onAnimationEnd: () => {
                                                            ((Y && t === De) || (K && t === he)) &&
                                                                ve('researches_top_of_the_tree_stop');
                                                        },
                                                    }),
                                                ),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    Qr = { base: 'TreeNodeHolder_base_5a', base__premiumEmpty: 'TreeNodeHolder_base__premiumEmpty_07' },
                    Jr = (0, be.Pi)(
                        ({
                            columnIndex: e,
                            isPremium: u,
                            isAllNextUnlocked: t = !1,
                            node: n,
                            levels: r,
                            onSetActiveLevel: a,
                        }) => {
                            const i = Xe().model,
                                s = i.root.get(),
                                l = s.isBlueprintMode,
                                c = s.earlyAccessCurrentTokens,
                                _ = s.selectedNation,
                                d = i.computes,
                                E = d.getInBattleNations,
                                m = d.getBlueprintConvertHint,
                                A = d.getVehicleByNodeId;
                            if (!n && u)
                                return o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: p()(Qr.base, Qr.base__premiumEmpty) }),
                                    e !== r.length && o().createElement('div', { className: Qr.connectors }),
                                );
                            if (!n) return null;
                            const F = A(n.id);
                            if (!F) return null;
                            const D = E().includes(_),
                                B = m();
                            return o().createElement(
                                'div',
                                {
                                    id: 'node-container',
                                    'data-cd': F.vehicleCD,
                                    'data-tech-name': F.vehicleTechName,
                                    'data-is-premium': u,
                                    'data-level': F.vehicleLvl,
                                    'data-vehicle-type': F.vehicleType,
                                },
                                o().createElement(rr, { nodeId: n.id }),
                                o().createElement(
                                    'div',
                                    { className: Qr.base },
                                    o().createElement(Zr, {
                                        earnedXp: n.earnedXP,
                                        state: n.state,
                                        id: n.id,
                                        isAllNextUnlocked: t,
                                        blueprintConvertHint: B,
                                        isBlueprintMode: l,
                                        vehicle: F,
                                        isEarlyAccessBlocked: n.isEarlyAccessLocked,
                                        canAddBlueprint: n.blueprintCanConvert,
                                        blueprintBalance: n.blueprintBalance,
                                        blueprintMaxCount: n.blueprintMaxCount,
                                        earlyAccessBalance: c,
                                        earlyAccessPrice: n.earlyAccessPrice,
                                        shouldInBattleShow: D,
                                        onMouseEnter: () => a(e),
                                        onMouseLeave: () => a(0),
                                    }),
                                ),
                            );
                        },
                    ),
                    ea = 'MainNodesWithConnectors_connectors_06',
                    ua = (0, a.memo)(
                        ({
                            checkIsEmptyRow: e,
                            columnIndex: u,
                            isDragging: t,
                            isVerticalScrollBarShown: n,
                            levels: r,
                            treeRows: a,
                            mainNodes: i,
                            shouldInBattleShow: s,
                            setActiveLevel: l,
                            getNodeById: c,
                            getNodeConnectors: _,
                            isEarlyAccessFirstTimeShown: d,
                            isBlueprintMode: E,
                            isEarlyAccessPaused: m,
                        }) =>
                            o().createElement(
                                un,
                                {
                                    key: `nodes-column-${u}`,
                                    isLastColumn: u === r.length,
                                    isVerticalScrollBarShown: n,
                                    isDragging: t,
                                },
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    a.map((t) => {
                                        const n = i.find((e) => e.row === t && e.column === u),
                                            a =
                                                u !== r.length && n
                                                    ? ((e, u, t, n, r, a) =>
                                                          t(e.id).map((t) => {
                                                              const o = e,
                                                                  i = u(t.nodeInId);
                                                              let s = Ut.STRAIGHT,
                                                                  l = 0,
                                                                  c = !1,
                                                                  _ = !1,
                                                                  d = !1,
                                                                  E = !1;
                                                              return (
                                                                  i &&
                                                                      ((c =
                                                                          Oe(o.state) &&
                                                                          (Oe(i.state) || Ie(i.state)) &&
                                                                          !(!Ve(o.state) && Ve(i.state))),
                                                                      (d = Ve(o.state) && Ve(i.state) && r),
                                                                      (_ = n
                                                                          ? Ve(o.state) && Ve(i.state)
                                                                          : i.isEarlyAccessLocked),
                                                                      (E = a && ze(o.state) && ze(i.state)),
                                                                      o.row > i.row
                                                                          ? ((s = Ut.UP), (l = o.row - i.row))
                                                                          : o.row < i.row
                                                                            ? ((s = Ut.DOWN), (l = i.row - o.row))
                                                                            : ((s = Ut.STRAIGHT), (l = 0))),
                                                                  Object.assign({}, t, {
                                                                      direction: s,
                                                                      length: l,
                                                                      isThick: c,
                                                                      isDashed: _,
                                                                      isEarlyAccessConnector: d,
                                                                      isInBattleConnector: E,
                                                                  })
                                                              );
                                                          }))(n, c, _, m, d, s)
                                                    : null,
                                            A = !(null != a && a.some((e) => !e.isThick));
                                        return (
                                            e(t) &&
                                            o().createElement(
                                                Kt,
                                                { key: `node-cell-${t}` },
                                                o().createElement(
                                                    o().Fragment,
                                                    null,
                                                    o().createElement(Jr, {
                                                        columnIndex: u,
                                                        isPremium: !1,
                                                        node: n,
                                                        levels: r,
                                                        isAllNextUnlocked: A,
                                                        onSetActiveLevel: l,
                                                    }),
                                                    a &&
                                                        o().createElement(
                                                            'div',
                                                            { className: ea },
                                                            o().createElement(er, {
                                                                connectors: a,
                                                                isBlueprintMode: E,
                                                            }),
                                                        ),
                                                ),
                                            )
                                        );
                                    }),
                                ),
                            ),
                    );
                const ta = 'Frame_base_dc',
                    na = 'Frame_base__scaled_74',
                    ra = 'Frame_arrow_ec',
                    aa = o().forwardRef(function ({ arrowRef: e }, u) {
                        const t = 2 === ce();
                        return o().createElement(
                            'div',
                            { className: p()(ta, t && na), ref: u },
                            o().createElement('div', { className: ra, ref: e }),
                        );
                    }),
                    oa = {
                        base: 'Tab_base_d9',
                        base__scaled: 'Tab_base__scaled_bf',
                        base__active: 'Tab_base__active_da',
                        earlyAccessIcon: 'Tab_earlyAccessIcon_cc',
                        discountIcon: 'Tab_discountIcon_6e',
                        discountIcon__scaled: 'Tab_discountIcon__scaled_4c',
                        highlight: 'Tab_highlight_1d',
                        icon: 'Tab_icon_0f',
                    },
                    ia = { mouseEnter: R.sounds.highlight(), click: R.sounds.tabb() },
                    sa = o().forwardRef(function (
                        {
                            id: e,
                            isActive: u,
                            sounds: t = ia,
                            title: n,
                            icon: r,
                            hasNewDiscountEvent: a,
                            isEarlyAccess: i,
                            onClick: s,
                            onMouseEnter: l,
                            onMouseLeave: c,
                        },
                        _,
                    ) {
                        const d = 2 === ce(),
                            E = (e) => {
                                !u && t[e] && ve(t[e]);
                            };
                        return o().createElement(
                            q,
                            { args: { tooltipId: 'techtreeNationTooltip', nation: n } },
                            o().createElement(
                                'div',
                                {
                                    className: p()(oa.base, u && oa.base__active, d && oa.base__scaled),
                                    onClick:
                                        ((m = n),
                                        () => {
                                            E('click'), null == s || s(m);
                                        }),
                                    onMouseEnter: ((e) => () => {
                                        E('mouseEnter'), null == l || l(e);
                                    })(e),
                                    onMouseLeave: ((e) => () => {
                                        E('mouseLeave'), null == c || c(e);
                                    })(e),
                                    ref: u ? _ : null,
                                },
                                i && !u && o().createElement('div', { className: oa.earlyAccessIcon }),
                                a &&
                                    o().createElement('div', {
                                        className: p()(oa.discountIcon, d && oa.discountIcon__scaled),
                                    }),
                                o().createElement('div', { className: p()(oa.highlight, d && oa.highlight__scaled) }),
                                o().createElement('div', {
                                    className: oa.icon,
                                    style: { backgroundImage: `url(${r})` },
                                }),
                            ),
                        );
                        var m;
                    }),
                    la = 'VerticalTabs_base_a6',
                    ca = 'VerticalTabs_group_e1';
                function _a() {
                    return (
                        (_a =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        _a.apply(this, arguments)
                    );
                }
                const da = (0, a.memo)(
                        ({ active: e, tabs: u, sounds: t, onClick: n, onMouseEnter: r, onMouseLeave: i }) => {
                            const l = (0, a.useRef)(null),
                                c = (0, a.useRef)(null),
                                _ = (0, a.useRef)(null),
                                d = (0, a.useRef)(null),
                                E = (0, we.useSpring)(() => ({
                                    marginLeft: 0,
                                    onChange: (e) => {
                                        const u = l.current;
                                        u && (u.style.marginLeft = `${e.value.marginLeft}rem`);
                                    },
                                }))[1],
                                m = (0, we.useSpring)(() => ({
                                    opacity: 0,
                                    onChange: (e) => {
                                        const u = l.current;
                                        u && (u.style.opacity = `${e.value.opacity}`);
                                    },
                                }))[1],
                                A = (0, we.useSpring)(() => ({
                                    position: 0,
                                    onChange: (e) => {
                                        const u = c.current;
                                        u &&
                                            (u.style.transform = `translateY(${e.value.position / s.O.view.getScale()}rem)`);
                                    },
                                    onStart: () => {
                                        E.start({
                                            from: { marginLeft: 12 },
                                            to: { marginLeft: 0 },
                                            config: { duration: 50 },
                                        }),
                                            m.start({
                                                from: { opacity: 1 },
                                                to: { opacity: 0 },
                                                config: { duration: 50 },
                                            });
                                    },
                                    onRest: () => {
                                        E.start({
                                            from: { marginLeft: 0 },
                                            to: { marginLeft: 12 },
                                            config: { duration: 150 },
                                        }),
                                            m.start({
                                                from: { opacity: 0 },
                                                to: { opacity: 1 },
                                                config: { duration: 150 },
                                            });
                                    },
                                }))[1],
                                F = (0, a.useCallback)((e) => {
                                    if (null !== _.current && null !== d.current) {
                                        e(
                                            _.current.getBoundingClientRect().top -
                                                d.current.getBoundingClientRect().top,
                                        );
                                    }
                                }, []);
                            var D, B;
                            return (
                                (0, a.useEffect)(() => {
                                    F((e) => {
                                        A.start({ position: e, config: { duration: 200 } });
                                    });
                                }, [A, e, F]),
                                (0, a.useEffect)(
                                    () =>
                                        ue(() => {
                                            F((e) => {
                                                A.start({ position: e, immediate: !0 });
                                            });
                                        }),
                                    [A, F],
                                ),
                                (D = () => {
                                    F((e) => {
                                        A.start({ position: e, config: { duration: 200 } });
                                    });
                                }),
                                (B = [A, F]),
                                (0, a.useEffect)(() => {
                                    let e = () => {};
                                    const u = () => {
                                        e(), (e = ue(D));
                                    };
                                    return (
                                        window.addEventListener('resize', u),
                                        () => {
                                            e(), window.removeEventListener('resize', u);
                                        }
                                    );
                                }, B),
                                o().createElement(
                                    'div',
                                    { className: la, ref: d },
                                    u.map(({ id: u, items: a }) =>
                                        o().createElement(
                                            'div',
                                            { key: u, className: ca },
                                            a.map((u) =>
                                                o().createElement(
                                                    sa,
                                                    _a(
                                                        {
                                                            key: u.id,
                                                            ref: _,
                                                            sounds: t,
                                                            isActive: e === u.title,
                                                            onMouseEnter: r,
                                                            onMouseLeave: i,
                                                            onClick: n,
                                                        },
                                                        u,
                                                    ),
                                                ),
                                            ),
                                        ),
                                    ),
                                    o().createElement(aa, { arrowRef: l, ref: c }),
                                )
                            );
                        },
                    ),
                    Ea = 'NationsMenu_base_98',
                    ma = 'NationsMenu_shadowContainer_2b',
                    Aa = 'NationsMenu_shadow_b5',
                    Fa = 'NationsMenu_shadow__scaled_68',
                    Da = (0, be.Pi)(() => {
                        const e = Xe(),
                            u = e.controls,
                            t = e.model,
                            n = t.root.get(),
                            r = n.selectedNation,
                            i = n.isEarlyAccessFirstTimeShown,
                            s = n.earlyAccessNation,
                            l = t.computes.getAvailableNations,
                            c = ce(),
                            _ = (0, a.useCallback)(
                                (e) => {
                                    r !== e && u.onNationChange(e);
                                },
                                [u, r],
                            ),
                            d = l(),
                            E = (0, a.useMemo)(
                                () => [
                                    {
                                        id: 0,
                                        items: d.map((e) => ({
                                            id: e.nationIndex,
                                            isEarlyAccess: i && e.nation === s,
                                            hasNewDiscountEvent: e.hasNewDiscountEvent,
                                            title: e.nation,
                                            icon: R.images.gui.maps.icons.flags.c_60x40.$dyn(e.nation),
                                        })),
                                    },
                                ],
                                [s, d, i],
                            ),
                            m = 2 === c;
                        return o().createElement(
                            'div',
                            { className: Ea },
                            o().createElement(
                                'div',
                                { className: ma },
                                o().createElement('div', { className: p()(Aa, m && Fa) }),
                            ),
                            o().createElement(da, { tabs: E, active: r, onClick: _ }),
                        );
                    }),
                    Ba = (0, a.memo)(Da),
                    ga = 'NationTitle_base_60',
                    Ca = 'NationTitle_nationTitle_06',
                    ha = 'NationTitle_collectionVehicles_5a',
                    pa = R.strings.techtree,
                    va = (0, be.Pi)(() => {
                        const e = Xe(),
                            u = e.model,
                            t = e.controls,
                            n = u.root.get(),
                            r = n.selectedNation,
                            a = n.isBlueprintMode,
                            i = n.hasCollectibleVehicles;
                        return o().createElement(
                            'div',
                            { className: ga },
                            o().createElement(at, {
                                className: Ca,
                                text: pa.vehicle_tree.header.title.$dyn(a ? `${r}_blueprints` : r),
                            }),
                            i &&
                                !a &&
                                o().createElement(
                                    ee,
                                    { tooltipArgs: { args: { tooltipId: 'vehicleCollectorTooltip', nation: r } } },
                                    o().createElement('div', {
                                        className: ha,
                                        onClick: () => {
                                            ve(R.sounds.play()), t.onGoToCollectionVehicle(r);
                                        },
                                        onMouseEnter: () => {
                                            ve(R.sounds.highlight());
                                        },
                                    }),
                                ),
                        );
                    }),
                    fa = 'ParagonsEntryPoint_base_ab',
                    ba = 'ParagonsEntryPoint_entryPointIcon_ac',
                    wa = (0, a.memo)(() =>
                        o().createElement('div', { className: fa }, o().createElement('div', { className: ba })),
                    ),
                    ya = 'PremiumPanel_base_90',
                    Ta = 'PremiumPanel_backgroundWrapper_a5',
                    Na = 'PremiumPanel_background_50',
                    Sa = 'PremiumPanel_topBorder_b3',
                    xa = 'PremiumPanel_base__active_05',
                    La = 'PremiumPanel_contentWrapper_a7',
                    Ma = 'PremiumPanel_content_63',
                    Pa = (0, a.memo)(
                        ({
                            isPremiumAreaActive: e,
                            isDragging: u,
                            levels: t,
                            premiumRows: n,
                            premiumNodes: r,
                            isVerticalScrollBarShown: a,
                            onSetActiveLevel: i,
                            onShowPremiumPanel: s,
                        }) =>
                            o().createElement(
                                'div',
                                { className: p()(ya, e && xa) },
                                o().createElement(
                                    'div',
                                    { className: Ta },
                                    o().createElement(
                                        'div',
                                        { className: Na },
                                        o().createElement('div', { className: Sa }),
                                    ),
                                ),
                                o().createElement(
                                    'div',
                                    { className: La, onMouseEnter: s },
                                    o().createElement(
                                        'div',
                                        { className: Ma },
                                        t.map((e) =>
                                            o().createElement(
                                                un,
                                                {
                                                    key: `nodes-column-${e}`,
                                                    isLastColumn: e === t.length,
                                                    isVerticalScrollBarShown: a,
                                                    isDragging: u,
                                                },
                                                o().createElement(
                                                    o().Fragment,
                                                    null,
                                                    n.map((u) => {
                                                        const a = r.find((t) => t.row === u + 1 && t.column === e);
                                                        return o().createElement(
                                                            Kt,
                                                            {
                                                                key: `node-cell-${null != a && a.id ? a.id : `${u}-${e}`}`,
                                                                isPremiumCell: !0,
                                                                isPremiumLastRow: u + 1 === n.length,
                                                                isPremiumLastColumn: e === t.length,
                                                            },
                                                            o().createElement(Jr, {
                                                                columnIndex: e,
                                                                isPremium: !0,
                                                                node: a,
                                                                levels: t,
                                                                onSetActiveLevel: i,
                                                            }),
                                                        );
                                                    }),
                                                ),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                    ),
                    Ra = 'PremiumPanelEffects_base_41',
                    ka = 'PremiumPanelEffects_shadow_63',
                    Ia = 'PremiumPanelEffects_base__active_6a',
                    Oa = 'PremiumPanelEffects_topGlow_b7',
                    Ha = 'PremiumPanelEffects_wreathWrapper_96',
                    Wa = 'PremiumPanelEffects_wreathContent_bb',
                    Va = 'PremiumPanelEffects_wreath_d8',
                    za = 'PremiumPanelEffects_titleGlow_bd',
                    Ga = 'PremiumPanelEffects_header_72',
                    Ua = R.strings.techtree,
                    $a = (0, a.memo)(({ isPremiumAreaActive: e }) => {
                        const u = viewEnv.getGraphicsQuality() < 1;
                        return o().createElement(
                            'div',
                            { className: p()(Ra, e && Ia) },
                            u &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: ka }),
                                    o().createElement('div', { className: Oa }),
                                ),
                            o().createElement(
                                'div',
                                { className: Ha },
                                o().createElement(
                                    'div',
                                    { className: Wa },
                                    o().createElement('div', { className: Va }),
                                    o().createElement('div', { className: za }),
                                    o().createElement(at, { className: Ga, text: Ua.vehicle_tree.premium.title() }),
                                ),
                            ),
                        );
                    }),
                    ja = (e, u, t) => (t < e ? e : t > u ? u : t),
                    Xa = [];
                function qa(e) {
                    const u = (0, a.useRef)(e);
                    return (
                        (0, a.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, a.useCallback)((...e) => (0, u.current)(...e), Xa)
                    );
                }
                function Ya(e, u, t = []) {
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
                function Ka(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return Za(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return Za(e, u);
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
                function Za(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                let Qa;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(Qa || (Qa = {}));
                const Ja = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: {},
                    },
                    eo = ({
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
                            return ja(r, a, t);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                _ = void 0 === c ? Ja : c,
                                d = (0, a.useRef)(null),
                                E = (0, a.useRef)(null),
                                m = (() => {
                                    const e = (0, a.useMemo)(() => ({}), []),
                                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                        t = (e, t) => {
                                            u(e).set(t, t);
                                        },
                                        n = (e, t) => {
                                            u(e).delete(t);
                                        },
                                        r = (e, ...t) => {
                                            for (var n, r = Ka(u(e).values()); !(n = r()).done; ) (0, n.value)(...t);
                                        };
                                    return (0, a.useMemo)(() => ({ on: t, off: n, trigger: r }), []);
                                })(),
                                A = (function (e, u, t) {
                                    const n = (0, a.useMemo)(() => ae(t, e), u);
                                    return (0, a.useEffect)(() => n.cancel, [n]), n;
                                })(
                                    () => {
                                        s.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    0,
                                ),
                                F = (0, we.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = d.current;
                                        u && (t(u, e), m.trigger('change', e), o && A());
                                    },
                                    onRest: (e) => m.trigger('rest', e),
                                    onStart: (e) => m.trigger('start', e),
                                    onPause: (e) => m.trigger('pause', e),
                                })),
                                D = F[0],
                                B = F[1],
                                g = (0, a.useCallback)(
                                    (e, u, t) => {
                                        var n;
                                        const r = D.scrollPosition.get(),
                                            a = (null != (n = D.scrollPosition.goal) ? n : 0) - r;
                                        return i(e, u * t + a + r);
                                    },
                                    [D.scrollPosition],
                                ),
                                C = (0, a.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const n = d.current;
                                        n &&
                                            B.start({
                                                scrollPosition: i(n, e),
                                                immediate: u,
                                                reset: t,
                                                config: _.animationConfig,
                                                from: { scrollPosition: i(n, D.scrollPosition.get()) },
                                            });
                                    },
                                    [B, _.animationConfig, D.scrollPosition],
                                ),
                                h = (0, a.useCallback)(
                                    (e) => {
                                        const u = d.current,
                                            t = E.current;
                                        if (!u || !t) return;
                                        const n = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return r(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, _.step),
                                            a = g(u, e, n);
                                        C(a);
                                    },
                                    [C, g, _.step],
                                ),
                                p = (0, a.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && h(n(e)),
                                            d.current && m.trigger('mouseWheel', e, D.scrollPosition, u(d.current));
                                    },
                                    [D.scrollPosition, h, m],
                                ),
                                v = ((e, u = []) => {
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
                                        ue(() => {
                                            const e = d.current;
                                            e &&
                                                (C(i(e, D.scrollPosition.goal), { immediate: !0 }),
                                                m.trigger('resizeHandled'));
                                        }),
                                    [C, D.scrollPosition.goal],
                                ),
                                f = qa(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const u = i(e, D.scrollPosition.goal);
                                    u !== D.scrollPosition.goal && C(u, { immediate: !0 }),
                                        m.trigger('recalculateContent');
                                });
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('resize', v),
                                    () => {
                                        window.removeEventListener('resize', v);
                                    }
                                ),
                                [v],
                            );
                            return (0, a.useMemo)(
                                () => ({
                                    getWrapperSize: () => (E.current ? r(E.current) : void 0),
                                    getContainerSize: () => (d.current ? e(d.current) : void 0),
                                    getBounds: () =>
                                        d.current
                                            ? u(d.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: _.step.clampedArrowStepTimeout,
                                    clampPosition: i,
                                    handleMouseWheel: p,
                                    applyScroll: C,
                                    applyStepTo: h,
                                    contentRef: d,
                                    wrapperRef: E,
                                    scrollPosition: B,
                                    animationScroll: D,
                                    recalculateContent: f,
                                    events: { on: m.on, off: m.off },
                                }),
                                [D.scrollPosition, C, h, m.off, m.on, f, p, B, _.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    uo = eo({
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
                        getDirection: (e) => (e.deltaY > 1 ? Qa.Next : Qa.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    to = 'HorizontalBar_base_72',
                    no = 'HorizontalBar_base__nonActive_8b',
                    ro = 'HorizontalBar_leftButton_14',
                    ao = 'HorizontalBar_rightButton_88',
                    oo = 'HorizontalBar_track_bc',
                    io = 'HorizontalBar_thumb_63',
                    so = 'HorizontalBar_rail_3b',
                    lo = 'disable',
                    co = { pending: !1, offset: 0 },
                    _o = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    Eo = () => {},
                    mo = (e, u) => Math.max(20, e.offsetWidth * u),
                    Ao = (0, a.memo)(
                        ({ api: e, classNames: u = {}, getStepByRailClick: t = _o, onDrag: n = Eo, isOnView: r }) => {
                            const i = (0, a.useRef)(null),
                                s = (0, a.useRef)(null),
                                l = (0, a.useRef)(null),
                                c = (0, a.useRef)(null),
                                _ = (0, a.useRef)(null),
                                d = e.stepTimeout || 100,
                                E = (0, a.useState)(co),
                                m = E[0],
                                A = E[1],
                                F = (0, a.useCallback)(
                                    (e) => {
                                        A(e),
                                            _.current &&
                                                n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: _.current });
                                    },
                                    [n],
                                ),
                                D = () => {
                                    const u = c.current,
                                        t = _.current,
                                        n = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(n && u && t && r)) return;
                                    const a = e.animationScroll.scrollPosition.get(),
                                        o = Math.min(1, n / r),
                                        i = ja(0, 1, a / (r - n)),
                                        d = (u.offsetWidth - mo(u, o)) * i;
                                    (t.style.transform = `translateX(${0 | d}px)`),
                                        ((e) => {
                                            if (s.current && l.current && c.current && _.current) {
                                                if (0 === e)
                                                    return (
                                                        s.current.classList.add(lo), void l.current.classList.remove(lo)
                                                    );
                                                if (
                                                    ((u = c.current),
                                                    (t = _.current),
                                                    e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                                )
                                                    return (
                                                        s.current.classList.remove(lo), void l.current.classList.add(lo)
                                                    );
                                                var u, t;
                                                s.current.classList.remove(lo), l.current.classList.remove(lo);
                                            }
                                        })(d);
                                },
                                B = qa(() => {
                                    (() => {
                                        const u = _.current,
                                            t = c.current,
                                            n = e.getWrapperSize(),
                                            r = e.getContainerSize();
                                        if (!(r && u && n && t)) return;
                                        const a = Math.min(1, n / r);
                                        (u.style.width = `${mo(t, a)}px`),
                                            i.current &&
                                                (1 === a
                                                    ? i.current.classList.add(no)
                                                    : i.current.classList.remove(no));
                                    })(),
                                        D();
                                });
                            (0, a.useEffect)(() => ue(B)),
                                (0, a.useEffect)(
                                    () =>
                                        ue(() => {
                                            const u = () => {
                                                D();
                                            };
                                            let t = Eo;
                                            const n = () => {
                                                t(), (t = ue(B));
                                            };
                                            return (
                                                e.events.on('recalculateContent', B),
                                                e.events.on('rest', u),
                                                e.events.on('change', u),
                                                e.events.on('resizeHandled', n),
                                                () => {
                                                    t(),
                                                        e.events.off('recalculateContent', B),
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
                                            if (!r) return;
                                            const a = e.contentRef.current;
                                            if (!a) return;
                                            const o = c.current,
                                                i = _.current;
                                            if (!a || !o || !i) return;
                                            const s = u.screenX - m.offset - o.getBoundingClientRect().x,
                                                l = (s / o.offsetWidth) * (null != (t = e.getContainerSize()) ? t : 0);
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(a, l),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                            }),
                                                n({ type: 'dragging', thumb: i, thumbOffset: s, contentOffset: l });
                                        },
                                        t = () => {
                                            window.removeEventListener('mousemove', u), F(co);
                                        };
                                    return (
                                        window.addEventListener('mousemove', u),
                                        window.addEventListener('mouseup', t),
                                        () => {
                                            window.removeEventListener('mousemove', u),
                                                window.removeEventListener('mouseup', t);
                                        }
                                    );
                                }, [e, m.offset, m.pending, r, n, F]);
                            const g = Ya((u) => e.applyStepTo(u), d, [e]),
                                C = g[0],
                                h = g[1];
                            (0, a.useEffect)(
                                () => (
                                    document.addEventListener('mouseup', h, !0),
                                    () => document.removeEventListener('mouseup', h, !0)
                                ),
                                [h],
                            );
                            const v = (e) => {
                                e.target.classList.contains(lo) || ve(R.sounds.highlight());
                            };
                            return o().createElement(
                                'div',
                                { className: p()(to, u.base), ref: i, onWheel: e.handleMouseWheel },
                                o().createElement('div', {
                                    className: p()(ro, u.leftButton),
                                    onMouseDown: (e) => {
                                        e.target.classList.contains(lo) ||
                                            0 !== e.button ||
                                            (ve(R.sounds.play()), C(Qa.Next));
                                    },
                                    onMouseUp: h,
                                    ref: s,
                                    onMouseEnter: v,
                                }),
                                o().createElement(
                                    'div',
                                    {
                                        className: p()(oo, u.track),
                                        onMouseDown: (u) => {
                                            const n = _.current;
                                            if (n && 0 === u.button)
                                                if ((ve(R.sounds.play()), u.target === n))
                                                    F({ pending: !0, offset: u.screenX - n.getBoundingClientRect().x });
                                                else {
                                                    ((u) => {
                                                        const n = _.current,
                                                            r = e.contentRef.current;
                                                        if (!n || !r) return;
                                                        const a = t(e);
                                                        e.applyScroll(e.animationScroll.scrollPosition.get() + a * u);
                                                    })(u.screenX > n.getBoundingClientRect().x ? Qa.Prev : Qa.Next);
                                                }
                                        },
                                        ref: c,
                                        onMouseEnter: v,
                                    },
                                    o().createElement('div', { ref: _, className: p()(io, u.thumb) }),
                                    o().createElement('div', { className: p()(so, u.rail) }),
                                ),
                                o().createElement('div', {
                                    className: p()(ao, u.rightButton),
                                    onMouseDown: (e) => {
                                        e.target.classList.contains(lo) ||
                                            0 !== e.button ||
                                            (ve(R.sounds.play()), C(Qa.Prev));
                                    },
                                    onMouseUp: h,
                                    ref: l,
                                    onMouseEnter: v,
                                }),
                            );
                        },
                    ),
                    Fo = {
                        base: 'HorizontalScroll_base_f2',
                        wrapper: 'HorizontalScroll_wrapper_89',
                        content: 'HorizontalScroll_content_0e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8f',
                    },
                    Do = ({
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
                        const _ = (0, a.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: p()(Fo.base, e.base) });
                            }, [n]),
                            d = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return o().createElement(
                            'div',
                            { className: p()(Fo.defaultScroll, t), onWheel: u.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: p()(Fo.defaultScrollArea, r) },
                                o().createElement(Bo, { className: s, api: d, classNames: i }, e),
                            ),
                            o().createElement(Ao, { getStepByRailClick: l, api: u, onDrag: c, classNames: _ }),
                        );
                    },
                    Bo = ({ api: e, className: u, children: t }) => (
                        (0, a.useEffect)(() => ue(e.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: p()(Fo.base, u) },
                            o().createElement(
                                'div',
                                { className: Fo.wrapper, onWheel: e.handleMouseWheel, ref: e.wrapperRef },
                                o().createElement('div', { className: Fo.content, ref: e.contentRef }, t),
                            ),
                        )
                    );
                (Bo.Bar = Ao),
                    (Bo.Default = Do),
                    (Bo.SeniorityAwards = ({ api: e, className: u, classNames: t, children: n }) => (
                        (0, a.useEffect)(() => ue(e.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: p()(Fo.base, u) },
                            o().createElement(
                                'div',
                                { className: p()(Fo.wrapper, null == t ? void 0 : t.wrapper), ref: e.wrapperRef },
                                o().createElement(
                                    'div',
                                    { className: p()(Fo.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    ));
                const go = eo({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Qa.Next : Qa.Prev),
                    }),
                    Co = 'VerticalBar_base_d6',
                    ho = 'VerticalBar_base__nonActive_3c',
                    po = 'VerticalBar_topButton_6f',
                    vo = 'VerticalBar_bottomButton_db',
                    fo = 'VerticalBar_track_ab',
                    bo = 'VerticalBar_thumb_f8',
                    wo = 'VerticalBar_rail_cd',
                    yo = 'disable',
                    To = () => {},
                    No = { pending: !1, offset: 0 },
                    So = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    xo = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    Lo = (e, u) => Math.max(20, e.offsetHeight * u),
                    Mo = (0, a.memo)(
                        ({ api: e, classNames: u = {}, getStepByRailClick: t = So, onDrag: n = To, isOnView: r }) => {
                            const i = (0, a.useRef)(null),
                                s = (0, a.useRef)(null),
                                l = (0, a.useRef)(null),
                                c = (0, a.useRef)(null),
                                _ = (0, a.useRef)(null),
                                d = e.stepTimeout || 100,
                                E = (0, a.useState)(No),
                                m = E[0],
                                A = E[1],
                                F = (0, a.useCallback)(
                                    (e) => {
                                        A(e),
                                            _.current &&
                                                n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: _.current });
                                    },
                                    [n],
                                ),
                                D = qa(() => {
                                    const u = _.current,
                                        t = c.current,
                                        n = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(n && r && u && t)) return;
                                    const a = Math.min(1, n / r);
                                    return (
                                        (u.style.height = `${Lo(t, a)}px`),
                                        u.classList.add(bo),
                                        i.current &&
                                            (1 === a ? i.current.classList.add(ho) : i.current.classList.remove(ho)),
                                        a
                                    );
                                }),
                                B = qa(() => {
                                    const u = c.current,
                                        t = _.current,
                                        n = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(n && u && t && r)) return;
                                    const a = e.animationScroll.scrollPosition.get(),
                                        o = Math.min(1, n / r),
                                        i = ja(0, 1, a / (r - n)),
                                        d = (u.offsetHeight - Lo(u, o)) * i;
                                    (t.style.transform = `translateY(${0 | d}px)`),
                                        ((e) => {
                                            if (s.current && l.current && c.current && _.current) {
                                                if (0 === e)
                                                    return (
                                                        s.current.classList.add(yo), void l.current.classList.remove(yo)
                                                    );
                                                if (
                                                    ((u = c.current),
                                                    (t = _.current),
                                                    e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                                )
                                                    return (
                                                        s.current.classList.remove(yo), void l.current.classList.add(yo)
                                                    );
                                                var u, t;
                                                s.current.classList.remove(yo), l.current.classList.remove(yo);
                                            }
                                        })(d);
                                }),
                                g = qa(() => {
                                    xo(e, () => {
                                        D(), B();
                                    });
                                });
                            (0, a.useEffect)(() => ue(g)),
                                (0, a.useEffect)(() => {
                                    const u = () => {
                                        xo(e, () => {
                                            B();
                                        });
                                    };
                                    let t = To;
                                    const n = () => {
                                        t(), (t = ue(g));
                                    };
                                    return (
                                        e.events.on('recalculateContent', g),
                                        e.events.on('rest', u),
                                        e.events.on('change', u),
                                        e.events.on('resizeHandled', n),
                                        () => {
                                            t(),
                                                e.events.off('recalculateContent', g),
                                                e.events.off('rest', u),
                                                e.events.off('change', u),
                                                e.events.off('resizeHandled', n);
                                        }
                                    );
                                }, [e]),
                                (0, a.useEffect)(() => {
                                    if (!m.pending) return;
                                    const u = (u) => {
                                            r &&
                                                xo(e, (t) => {
                                                    const r = c.current,
                                                        a = _.current,
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
                                                        n({
                                                            type: 'dragging',
                                                            thumb: a,
                                                            thumbOffset: i,
                                                            contentOffset: s,
                                                        });
                                                });
                                        },
                                        t = () => {
                                            window.removeEventListener('mousemove', u), F(No);
                                        };
                                    return (
                                        window.addEventListener('mousemove', u),
                                        window.addEventListener('mouseup', t),
                                        () => {
                                            window.removeEventListener('mousemove', u),
                                                window.removeEventListener('mouseup', t);
                                        }
                                    );
                                }, [e, m.offset, m.pending, r, n, F]);
                            const C = Ya((u) => e.applyStepTo(u), d, [e]),
                                h = C[0],
                                v = C[1];
                            (0, a.useEffect)(
                                () => (
                                    document.addEventListener('mouseup', v, !0),
                                    () => document.removeEventListener('mouseup', v, !0)
                                ),
                                [v],
                            );
                            const f = (e) => {
                                e.target.classList.contains(yo) || ve(R.sounds.highlight());
                            };
                            return o().createElement(
                                'div',
                                { className: p()(Co, u.base), ref: i, onWheel: e.handleMouseWheel },
                                o().createElement('div', {
                                    className: p()(po, u.topButton),
                                    onMouseDown: (e) => {
                                        e.target.classList.contains(yo) ||
                                            0 !== e.button ||
                                            (ve(R.sounds.play()), h(Qa.Next));
                                    },
                                    ref: s,
                                    onMouseEnter: f,
                                }),
                                o().createElement(
                                    'div',
                                    {
                                        className: p()(fo, u.track),
                                        onMouseDown: (u) => {
                                            const n = _.current;
                                            if (n && 0 === u.button)
                                                if ((ve(R.sounds.play()), u.target === n))
                                                    F({ pending: !0, offset: u.screenY - n.getBoundingClientRect().y });
                                                else {
                                                    ((u) => {
                                                        _.current &&
                                                            xo(e, (n) => {
                                                                if (!n) return;
                                                                const r = t(e),
                                                                    a = e.clampPosition(n, n.scrollTop + r * u);
                                                                e.applyScroll(a);
                                                            });
                                                    })(u.screenY > n.getBoundingClientRect().y ? Qa.Prev : Qa.Next);
                                                }
                                        },
                                        ref: c,
                                        onMouseEnter: f,
                                    },
                                    o().createElement('div', { ref: _, className: u.thumb }),
                                    o().createElement('div', { className: p()(wo, u.rail) }),
                                ),
                                o().createElement('div', {
                                    className: p()(vo, u.bottomButton),
                                    onMouseDown: (e) => {
                                        e.target.classList.contains(yo) ||
                                            0 !== e.button ||
                                            (ve(R.sounds.play()), h(Qa.Prev));
                                    },
                                    onMouseUp: v,
                                    ref: l,
                                    onMouseEnter: f,
                                }),
                            );
                        },
                    ),
                    Po = {
                        content: 'VerticalScroll_content_dc',
                        defaultScroll: 'VerticalScroll_defaultScroll_3b',
                        bar: 'VerticalScroll_bar_bb',
                        area: 'VerticalScroll_area_d6',
                    },
                    Ro = ({
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
                        const _ = (0, a.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: p()(Po.base, e.base) });
                            }, [n]),
                            d = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return o().createElement(
                            'div',
                            { className: p()(Po.defaultScroll, t), onWheel: u.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: p()(Po.area, r) },
                                o().createElement(ko, { className: i, classNames: s, api: d }, e),
                            ),
                            o().createElement(Mo, { getStepByRailClick: l, api: u, onDrag: c, classNames: _ }),
                        );
                    },
                    ko = ({ className: e, classNames: u, children: t, api: n }) => (
                        (0, a.useEffect)(() => ue(n.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: p()(Po.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: p()(Po.content, null == u ? void 0 : u.content), ref: n.contentRef },
                                t,
                            ),
                        )
                    );
                ko.Default = Ro;
                const Io = { Vertical: r, Horizontal: n },
                    Oo = 'ScrollDrag_base_55',
                    Ho = 'ScrollDrag_base__grabbing_12',
                    Wo = 'ScrollDrag_base__noDrag_02',
                    Vo = ({
                        isPremiumAreaActive: e,
                        isHorizontalScrollbarShown: u,
                        isVerticalScrollBarShown: t,
                        isDragging: n,
                        horizontalApi: r,
                        verticalApi: i,
                        children: s,
                        setIsDragging: l,
                        onDrag: c,
                    }) => {
                        const _ = (0, a.useState)(0),
                            d = _[0],
                            E = _[1],
                            m = (0, a.useState)(0),
                            A = m[0],
                            F = m[1],
                            D = (0, a.useState)(0),
                            B = D[0],
                            g = D[1],
                            C = (0, a.useState)(0),
                            h = C[0],
                            v = C[1],
                            f = (0, a.useState)(!1),
                            b = f[0],
                            w = f[1];
                        (0, a.useEffect)(
                            () =>
                                ue(() => {
                                    const e = (e) => {
                                            const u = e.value.scrollPosition;
                                            n || E(-u);
                                        },
                                        u = (e) => {
                                            const u = e.value.scrollPosition;
                                            n || g(-u);
                                        };
                                    return (
                                        r.events.on('change', e),
                                        i.events.on('change', u),
                                        () => {
                                            r.events.off('change', e), i.events.off('change', u);
                                        }
                                    );
                                }),
                            [r, i, n],
                        );
                        return o().createElement(
                            'div',
                            {
                                className: p()(Oo, n && Ho, !t && !u && Wo),
                                onMouseDown: (e) => {
                                    0 === e.nativeEvent.button && (w(!0), F(e.clientX), v(e.clientY));
                                },
                                onMouseUp: () => {
                                    l(!1), w(!1), F(0), v(0);
                                },
                                onMouseMove: (u) => {
                                    if (b) {
                                        l(!0);
                                        const t = ja(-(r.getBounds()[1] || 0), 0, d + u.clientX - A);
                                        if ((r.applyScroll(-t, !0), !e)) {
                                            const e = ja(-(i.getBounds()[1] || 0), 0, B + u.clientY - h);
                                            i.applyScroll(-e, !0), v(u.clientY), g(e);
                                        }
                                        F(u.clientX), E(t), c();
                                    }
                                },
                            },
                            s,
                        );
                    },
                    zo = (e) => (e < 0.5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2);
                viewEnv.clearInternalCacheAfterFinalize();
                const Go = (0, be.Pi)(() => {
                    const e = Xe(),
                        u = e.model,
                        t = e.controls,
                        n = u.root.get(),
                        r = n.selectedNation,
                        i = n.nationBlueprintsCount,
                        l = n.universalBlueprintsCount,
                        c = n.isBlueprintMode,
                        _ = n.isBlueprintModeEnabled,
                        d = n.isEarlyAccessPaused,
                        E = n.isEarlyAccessFirstTimeShown,
                        m = n.isParagonsEnabled,
                        A = n.closePremiumPanelTrigger,
                        F = u.isOnView.get(),
                        D = u.hintProperties.get(),
                        B = u.settings.get(),
                        g = B.columnsNumber,
                        C = B.rowsNumber,
                        h = B.premiumRowsNumber,
                        v = u.computes,
                        f = v.getMainNodes,
                        w = v.getPremiumNodes,
                        y = v.getNodeById,
                        N = v.getNodeConnectors,
                        S = v.getRowData,
                        x = v.getFirstNode,
                        L = v.getInBattleNations,
                        M = f(),
                        P = w(),
                        k = (0, a.useMemo)(() => [...Array(g).keys()].map((e) => e + 1), [g]),
                        I = (0, a.useMemo)(() => [...Array(C).keys()].map((e) => e + 1), [C]),
                        O = (0, a.useMemo)(() => [...Array(h).keys()], [h]),
                        H = ce(),
                        W = T().mediaSize >= b.Medium;
                    var V;
                    (V = t.onClose), le(ie.n.ESCAPE, V);
                    const z = (0, a.useState)(!1),
                        G = z[0],
                        U = z[1],
                        $ = (0, a.useState)(0),
                        j = $[0],
                        X = $[1],
                        q = (0, a.useState)(!1),
                        Y = q[0],
                        K = q[1],
                        Z = (0, a.useState)({ emptyRows: [], topEmptyRows: [] }),
                        Q = Z[0],
                        J = Z[1],
                        ne = (0, a.useState)(0),
                        re = ne[0],
                        ae = ne[1],
                        se = (0, a.useState)(!1),
                        _e = se[0],
                        de = se[1],
                        Ee = (0, a.useState)(!1),
                        me = Ee[0],
                        Ae = Ee[1];
                    (0, a.useEffect)(() => {
                        G && (ve('researches_premium_panel_slide_out'), U(!1));
                    }, [A]);
                    const Fe = document.getElementById(Ge.CONVERT),
                        De = Io.Horizontal.useHorizontalScrollApi(),
                        fe = Io.Vertical.useVerticalScrollApi(),
                        be = (0, a.useCallback)(
                            () =>
                                (({ convertHint: e, setHintConvertProperties: u, convertHintProperties: t }) => {
                                    e &&
                                        (e.getBoundingClientRect().left > 160
                                            ? (e.getBoundingClientRect().left > s.O.view.getSize().width &&
                                                  t.isInView &&
                                                  u({ isInView: !1 }),
                                              e.getBoundingClientRect().left < s.O.view.getSize().width &&
                                                  !t.isInView &&
                                                  u({ isInView: !0 }),
                                              t.direction !== Ue.LEFT_TO_RIGHT && u({ direction: Ue.LEFT_TO_RIGHT }))
                                            : t.direction !== Ue.RIGHT_TO_LEFT && u({ direction: Ue.RIGHT_TO_LEFT }));
                                })({
                                    convertHint: Fe,
                                    setHintConvertProperties: t.setHintConvertProperties,
                                    convertHintProperties: D[Ge.CONVERT],
                                }),
                            [t.setHintConvertProperties, Fe, D],
                        ),
                        ye = oe(be, [be], 500);
                    (0, a.useEffect)(() => {
                        be();
                    }, []);
                    const Te = (0, a.useMemo)(
                            () =>
                                Object.assign({}, De, {
                                    handleMouseWheel: (e) => {
                                        De.handleMouseWheel(e), ye();
                                    },
                                }),
                            [ye, De],
                        ),
                        Ne = (Te.contentRef.current ? Te.getBounds() : [0, 0])[1],
                        Se = Boolean(Ne),
                        xe = (0, a.useMemo)(
                            () =>
                                Object.assign({}, fe, {
                                    handleMouseWheel: Se
                                        ? (e) => {
                                              e.preventDefault();
                                          }
                                        : fe.handleMouseWheel,
                                }),
                            [fe, Se],
                        ),
                        Le = ((e, u) => {
                            const t = Be('tutorialModel.effects.items').filter((t) => {
                                if (!t) return !1;
                                const n = t.value,
                                    r = window.__featureId.toString();
                                return n.componentId === e && n.type === u && n.viewId === r;
                            });
                            if (0 === t.length) return null;
                            const n = Object.assign({}, t[0].value);
                            return {
                                effect: n,
                                completeEffect: () => {
                                    tutorialModel.onEffectCompleted({
                                        componentId: e,
                                        viewId: window.__featureId.toFixed(0),
                                        effectType: u,
                                        effectBuilder: n.builder,
                                    }),
                                        u === ge && window.tutorialApi && window.tutorialApi.updateComponents();
                                },
                            };
                        })('BlueprintsTechtreeConvertButton', Ce);
                    (0, a.useEffect)(
                        () =>
                            ue(() => {
                                null !== Le && Le.completeEffect();
                            }),
                        [Le],
                    );
                    const Me = pe('BlueprintsTechtreeConvertButton', he);
                    (0, a.useEffect)(() => {
                        Me && Me.runTrigger(!0);
                    }, [Me]),
                        (0, a.useEffect)(() => {
                            let e = -1,
                                u = -1;
                            const t = x();
                            I.forEach((t) => {
                                const n = S(t),
                                    r = S(I.length - t);
                                -1 === e && n.length && (e = t - 1), -1 === u && r.length && (u = I.length - t + 1);
                            });
                            const n = Array.from({ length: e }, (e, u) => u + 1),
                                r = Array.from({ length: I.length - u }, (e, u) => I.length - u);
                            ae(((null == t ? void 0 : t.row) || Math.floor(C / 2)) - n.length),
                                J({ emptyRows: [...n, ...r], topEmptyRows: n });
                        }, [r]);
                    const Pe = () => {
                        Ae(!0), !P.length || c || _e || G || (ve('researches_premium_panel_slide_in'), U(!0));
                    };
                    (0, a.useEffect)(() => {
                        _e || me || U(!1);
                    }, [_e]);
                    const Re = (0, a.useCallback)(() => {
                            t.onBlueprintModeChanged(!c), G && U(!1);
                        }, [t, c, G]),
                        ke = L().includes(r),
                        Ie = (0, a.useCallback)((e) => !Q.emptyRows.some((u) => e === u), [Q.emptyRows]),
                        Oe = (0, we.useTransition)(r, {
                            from: { opacity: 0 },
                            enter: { opacity: 1 },
                            config: { duration: 400, easing: zo },
                            key: r,
                        });
                    (0, a.useEffect)(() => {
                        const e = () => {
                            const e = xe.getWrapperSize() || 0,
                                u = I.length - Q.emptyRows.length;
                            K(53 * u > e / H - (P.length ? 110 : 0) - (W ? 123 : 107));
                        };
                        let u = te;
                        const t = () => {
                            u = ue(() => {
                                const u = Te.getWrapperSize(),
                                    t = Te.getContainerSize(),
                                    n = xe.getWrapperSize(),
                                    r = xe.getContainerSize();
                                t && u && n && r && e();
                            });
                        };
                        return (
                            t(),
                            Te.events.on('change', e),
                            Te.events.on('resizeHandled', t),
                            xe.events.on('change', e),
                            xe.events.on('resizeHandled', t),
                            () => {
                                Te.events.off('change', e),
                                    Te.events.off('resizeHandled', t),
                                    xe.events.off('change', e),
                                    xe.events.off('resizeHandled', t),
                                    u();
                            }
                        );
                    }, [W, c, H, Q.emptyRows.length]);
                    const He = (0, we.useSpring)({ to: { opacity: c ? 1 : 0 }, config: { duration: 150 } }),
                        We = (0, we.useSpring)({ to: { opacity: m && !c ? 1 : 0 }, config: { duration: 150 } });
                    return (
                        document.addEventListener('mouseout', (e) => {
                            const u = e.relatedTarget;
                            u && 'HTML' !== (null == u ? void 0 : u.nodeName)
                                ? F || t.setIsOnView(!0)
                                : F && (t.setIsOnView(!1), G && (Ae(!1), U(!1)));
                        }),
                        o().createElement(
                            'div',
                            { className: p()(qe, c && mu) },
                            o().createElement('div', { className: Du }, o().createElement(vu, { isBlueprintMode: c })),
                            o().createElement(
                                Vo,
                                {
                                    isHorizontalScrollbarShown: Se,
                                    isVerticalScrollBarShown: Y,
                                    isDragging: _e,
                                    isPremiumAreaActive: G,
                                    setIsDragging: de,
                                    horizontalApi: Te,
                                    verticalApi: xe,
                                    onDrag: be,
                                },
                                o().createElement(
                                    Io.Horizontal.Area,
                                    { api: Te },
                                    o().createElement(
                                        'div',
                                        { className: Je },
                                        o().createElement(
                                            Io.Vertical.Area,
                                            { api: xe, classNames: { content: p()(su, Y && cu, P.length && lu) } },
                                            Oe((e) =>
                                                o().createElement(
                                                    we.animated.div,
                                                    { style: e },
                                                    o().createElement(
                                                        'div',
                                                        { className: eu },
                                                        o().createElement('div', {
                                                            className: _u,
                                                            style: { '--rows-from-top': re },
                                                        }),
                                                        k.map((e) =>
                                                            o().createElement(ua, {
                                                                key: e,
                                                                checkIsEmptyRow: Ie,
                                                                columnIndex: e,
                                                                isVerticalScrollBarShown: Y,
                                                                levels: k,
                                                                treeRows: I,
                                                                mainNodes: M,
                                                                setActiveLevel: X,
                                                                isBlueprintMode: c,
                                                                isEarlyAccessPaused: d,
                                                                isEarlyAccessFirstTimeShown: E,
                                                                shouldInBattleShow: ke,
                                                                getNodeById: y,
                                                                getNodeConnectors: N,
                                                                isDragging: _e,
                                                            }),
                                                        ),
                                                    ),
                                                ),
                                            ),
                                        ),
                                        !c &&
                                            Boolean(P.length) &&
                                            o().createElement(
                                                'div',
                                                {
                                                    className: p()(Ye, G && Ke, _e && !G && Ze, !Se && Qe),
                                                    onMouseLeave: () => {
                                                        Ae(!1),
                                                            P.length &&
                                                                !_e &&
                                                                G &&
                                                                (ve('researches_premium_panel_slide_out'), U(!1));
                                                    },
                                                },
                                                o().createElement(Pa, {
                                                    isPremiumAreaActive: G,
                                                    isVerticalScrollBarShown: Y,
                                                    levels: k,
                                                    premiumRows: O,
                                                    premiumNodes: P,
                                                    onSetActiveLevel: X,
                                                    onShowPremiumPanel: Pe,
                                                    isDragging: _e,
                                                }),
                                            ),
                                    ),
                                    o().createElement(
                                        'div',
                                        { className: Fu },
                                        o().createElement(Gt, { activeLevel: j, levels: k }),
                                    ),
                                ),
                            ),
                            Boolean(P.length) &&
                                !c &&
                                o().createElement(
                                    'div',
                                    { className: p()(Ye, Ze, G && Ke) },
                                    o().createElement($a, { isPremiumAreaActive: G }),
                                ),
                            o().createElement(
                                'div',
                                { className: ru, onMouseEnter: Pe },
                                o().createElement(Io.Horizontal.Bar, { api: Te, onDrag: be, isOnView: F }),
                            ),
                            o().createElement(
                                'div',
                                { className: p()(au, (c || !P) && ou, (G || !Y) && iu) },
                                o().createElement(Io.Vertical.Bar, { api: xe, isOnView: F }),
                            ),
                            o().createElement(
                                'div',
                                { className: Eu },
                                o().createElement(va, null),
                                m &&
                                    !c &&
                                    o().createElement(
                                        we.animated.div,
                                        { style: We, className: Au },
                                        o().createElement(
                                            ee,
                                            {
                                                tooltipArgs: {
                                                    contentId:
                                                        R.views.lobby.techtree.tooltips.ParagonsEntryPointTooltip(
                                                            'resId',
                                                        ),
                                                },
                                            },
                                            o().createElement(wa, null),
                                        ),
                                    ),
                            ),
                            o().createElement(
                                'div',
                                { className: uu },
                                o().createElement(Rt, { isBlueprintMode: c, isBlueprintModeEnabled: _, onClick: Re }),
                            ),
                            o().createElement('div', { className: p()(tu, _e && nu) }, o().createElement(Ba, null)),
                            c &&
                                o().createElement(
                                    we.animated.div,
                                    { style: He, className: du },
                                    o().createElement(Et, {
                                        nationBlueprintsCount: i,
                                        universalBlueprintsCount: l,
                                        nation: r,
                                    }),
                                ),
                        )
                    );
                });
                engine.whenReady.then(() => {
                    H().render(
                        o().createElement(I, null, o().createElement(je, null, o().createElement(Go, null))),
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
        (__webpack_require__.j = 210),
        (() => {
            var e = { 210: 0 };
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
    var __webpack_exports__ = __webpack_require__.O(void 0, [904], () => __webpack_require__(157));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
