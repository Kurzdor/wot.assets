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
            527: (e, t, a) => {
                'use strict';
                a.r(t), a.d(t, { mouse: () => i, onResize: () => s });
                var n = a(2472),
                    r = a(1176);
                const s = (0, n.E)('clientResized'),
                    u = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const i = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, r.R)(!1);
                    }
                    function a() {
                        e.enabled && (0, r.R)(!0);
                    }
                    function n() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', a))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', a))
                            : (0, r.R)(!1);
                    }
                    const s = ['down', 'up', 'move'].reduce(
                        (t, a) => (
                            (t[a] = (function (t) {
                                return (a) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const s = `mouse${t}`,
                                        i = u[t]((e) => a([e, 'outside']));
                                    function o(e) {
                                        a([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(s, o),
                                        n(),
                                        () => {
                                            r &&
                                                (i(),
                                                window.removeEventListener(s, o),
                                                (e.listeners -= 1),
                                                n(),
                                                (r = !1));
                                        }
                                    );
                                };
                            })(a)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, s, {
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
            5959: (e, t, a) => {
                'use strict';
                a.r(t),
                    a.d(t, {
                        events: () => n,
                        getMouseGlobalPosition: () => s,
                        getSize: () => r,
                        graphicsQuality: () => u,
                    });
                var n = a(527);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function s(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const u = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, a) => {
                'use strict';
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                a.d(t, { R: () => n });
            },
            2472: (e, t, a) => {
                'use strict';
                function n(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                a.d(t, { E: () => n });
            },
            3138: (e, t, a) => {
                'use strict';
                a.d(t, { O: () => r });
                var n = a(5959);
                const r = { view: a(7641), client: n };
            },
            3722: (e, t, a) => {
                'use strict';
                function n(e, t, a = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, a);
                }
                function r(e, t, a) {
                    return `url(${n(e, t, a)})`;
                }
                a.r(t), a.d(t, { getBgUrl: () => r, getTextureUrl: () => n });
            },
            6112: (e, t, a) => {
                'use strict';
                a.d(t, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, a) => {
                'use strict';
                a.d(t, { U: () => r });
                var n = a(2472);
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
            7641: (e, t, a) => {
                'use strict';
                a.r(t),
                    a.d(t, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => i,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => B,
                        events: () => s.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => F,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => D,
                        getScale: () => p,
                        getSize: () => m,
                        getViewGlobalPosition: () => E,
                        isEventHandled: () => C,
                        isFocused: () => f,
                        pxToRem: () => h,
                        remToPx: () => b,
                        resize: () => _,
                        sendEvent: () => u.qP,
                        setAnimateWindow: () => A,
                        setEventHandled: () => v,
                        setInputPaddingsRem: () => o,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => R,
                    });
                var n = a(3722),
                    r = a(6112),
                    s = a(6538),
                    u = a(8566);
                function i(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function o(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, t, a, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, a, n);
                }
                function c(e, t, a) {
                    return viewEnv.addDataChangedCallback(e, t, a);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function _(e, t, a = 'px') {
                    return 'rem' === a ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function E(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: b(t.x), y: b(t.y) };
                }
                function g() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function p() {
                    return viewEnv.getScale();
                }
                function h(e) {
                    return viewEnv.pxToRem(e);
                }
                function b(e) {
                    return viewEnv.remToPx(e);
                }
                function A(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function f() {
                    return viewEnv.isFocused();
                }
                function v() {
                    return viewEnv.setEventHandled();
                }
                function C() {
                    return viewEnv.isEventHandled();
                }
                function F() {
                    viewEnv.forceTriggerMouseMove();
                }
                function D() {
                    return viewEnv.getShowingStatus();
                }
                const B = Object.keys(r.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === r.W[t]), e),
                        {},
                    ),
                    w = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    R = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : s.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, a) => {
                'use strict';
                a.d(t, { qP: () => l });
                const n = ['args'];
                const r = 2,
                    s = 16,
                    u = 32,
                    i = 64,
                    o = (e, t) => {
                        const a = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const s = t.args,
                                u = (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        n,
                                        r = {},
                                        s = Object.keys(e);
                                    for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                    return r;
                                })(t, n);
                            return void 0 !== s
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: a, type: e }, u, {
                                          arguments:
                                              ((r = s),
                                              Object.entries(r).map(([e, t]) => {
                                                  const a = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: a, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: a, name: e, bool: t };
                                                      default:
                                                          return { __Type: a, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: a, type: e }, u));
                        }
                        return viewEnv.handleViewEvent({ __Type: a, type: e });
                        var r;
                    },
                    l = {
                        close(e) {
                            o('popover' === e ? r : u);
                        },
                        minimize() {
                            o(i);
                        },
                        move(e) {
                            o(s, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, t, a) => {
                'use strict';
                let n, r;
                a.d(t, { n: () => n }),
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
            1358: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => s });
                var n = a(3138);
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
                    addCallback(e, t, a = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const s = n.O.view.addModelObserver(e, a, r);
                        return (
                            s > 0
                                ? ((this._callbacks[s] = t),
                                  a > 0 && (this._views[a] ? this._views[a].push(s) : (this._views[a] = [s])))
                                : console.error("Can't add callback for model:", e),
                            s
                        );
                    }
                    removeCallback(e, t = 0) {
                        let a = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((a = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            a || console.error("Can't remove callback by id:", e),
                            a
                        );
                    }
                    _emmitDataChanged(e, t, a) {
                        a.forEach((a) => {
                            const n = this._callbacks[a];
                            void 0 !== n && n(e, t);
                        });
                    }
                }
                r.__instance = void 0;
                const s = r;
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
            4179: (e, t, a) => {
                'use strict';
                a.d(t, {
                    Sw: () => s.Z,
                    kH: () => m,
                    B3: () => l,
                    Z5: () => u,
                    lf: () => d,
                    cy: () => i,
                    B0: () => o,
                    c9: () => A,
                    ry: () => b,
                });
                class n {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: a }) => {
                                    let n = e.target;
                                    do {
                                        if (n === t) return;
                                        n = n.parentNode;
                                    } while (n);
                                    a();
                                });
                            });
                    }
                    static get instance() {
                        return n.__instance || (n.__instance = new n()), n.__instance;
                    }
                    register(e, t) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: t });
                    }
                    unregister(e, t) {
                        const a = e,
                            n = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== a || t !== n)),
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
                var s = a(1358);
                const u = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    i = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, a) => userLocale.getTimeFormat(e, t, void 0 === a || a),
                        getTimeString: (e, t, a) => userLocale.getTimeString(e, t, void 0 === a || a),
                    };
                let o;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(o || (o = {}));
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = a(5521),
                    E = a(3138);
                const g = ['args'];
                function p(e, t, a, n, r, s, u) {
                    try {
                        var i = e[s](u),
                            o = i.value;
                    } catch (e) {
                        return void a(e);
                    }
                    i.done ? t(o) : Promise.resolve(o).then(n, r);
                }
                const h = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    b = (function () {
                        var e,
                            t =
                                ((e = function* () {
                                    return (
                                        !(!engine._BindingsReady || !engine._WindowLoaded) ||
                                        new Promise((e) => {
                                            engine.on('Ready', e);
                                        })
                                    );
                                }),
                                function () {
                                    var t = this,
                                        a = arguments;
                                    return new Promise(function (n, r) {
                                        var s = e.apply(t, a);
                                        function u(e) {
                                            p(s, n, r, u, i, 'next', e);
                                        }
                                        function i(e) {
                                            p(s, n, r, u, i, 'throw', e);
                                        }
                                        u(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    A = (e, t) => {
                        const a = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        n,
                                        r = {},
                                        s = Object.keys(e);
                                    for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                    return r;
                                })(t, g);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: a, type: e }, s, {
                                          arguments:
                                              ((n = r),
                                              Object.entries(n).map(([e, t]) => {
                                                  const a = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          a.number = t;
                                                          break;
                                                      case 'boolean':
                                                          a.bool = t;
                                                          break;
                                                      default:
                                                          a.string = t.toString();
                                                  }
                                                  return a;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: a, type: e }, s));
                        } else viewEnv.handleViewEvent({ __Type: a, type: e });
                        var n;
                    },
                    f = () => A(o.CLOSE),
                    v = (e, t) => {
                        e.keyCode === _.n.ESCAPE && t();
                    };
                var C = a(7572);
                const F = r.instance,
                    D = {
                        DataTracker: s.Z,
                        ViewModel: C.Z,
                        ViewEventType: o,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: d,
                        DateFormatType: m,
                        makeGlobalBoundingBox: h,
                        sendMoveEvent: (e) => A(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: () => A(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, a = 0) => {
                            A(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: a, args: t });
                        },
                        sendShowPopOverEvent: (e, t, a, n, r = R.invalid('resId'), s) => {
                            const u = E.O.view.getViewGlobalPosition(),
                                i = a.getBoundingClientRect(),
                                l = i.x,
                                c = i.y,
                                d = i.width,
                                m = i.height,
                                _ = {
                                    x: E.O.view.pxToRem(l) + u.x,
                                    y: E.O.view.pxToRem(c) + u.y,
                                    width: E.O.view.pxToRem(d),
                                    height: E.O.view.pxToRem(m),
                                };
                            A(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: t,
                                bbox: h(_),
                                on: !0,
                                args: s,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => v(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            v(e, f);
                        },
                        handleViewEvent: A,
                        onBindingsReady: b,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
                        dumpViewModel: function e(t) {
                            const a = {};
                            if ('object' != typeof t) return t;
                            for (const n in t)
                                if (Object.prototype.hasOwnProperty.call(t, n)) {
                                    const r = Object.prototype.toString.call(t[n]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = t[n];
                                        a[n] = [];
                                        for (let t = 0; t < r.length; t++) a[n].push({ value: e(r[t].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (a[n] = e(t[n]))
                                            : (a[n] = t[n]);
                                }
                            return a;
                        },
                        ClickOutsideManager: F,
                        SystemLocale: u,
                        UserLocale: i,
                    };
                window.ViewEnvHelper = D;
            },
            5617: (e, t, a) => {
                'use strict';
                var n = a(6179),
                    r = a.n(n);
                const s = (e, t, a) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && a.extraLarge) ||
                          (t.largeHeight && a.large) ||
                          (t.mediumHeight && a.medium) ||
                          (t.smallHeight && a.small) ||
                          (t.extraSmallHeight && a.extraSmall)
                            ? e
                            : null
                        : e;
                var u = a(3138);
                const i = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var o;
                function l(e, t, a) {
                    const n = (function (e, t) {
                            switch (!0) {
                                case e >= t.extraLarge.width:
                                    return t.extraLarge.weight;
                                case e >= t.large.width && e < t.extraLarge.width:
                                    return t.large.weight;
                                case e >= t.medium.width && e < t.large.width:
                                    return t.medium.weight;
                                case e >= t.small.width && e < t.medium.width:
                                    return t.small.weight;
                                default:
                                    return t.extraSmall.weight;
                            }
                        })(e, a),
                        r = (function (e, t) {
                            switch (!0) {
                                case e >= t.extraLarge.height:
                                    return t.extraLarge.weight;
                                case e >= t.large.height && e < t.extraLarge.height:
                                    return t.large.weight;
                                case e >= t.medium.height && e < t.large.height:
                                    return t.medium.weight;
                                case e >= t.small.height && e < t.medium.height:
                                    return t.small.weight;
                                default:
                                    return t.extraSmall.weight;
                            }
                        })(t, a),
                        s = Math.min(n, r);
                    return {
                        extraLarge: s === a.extraLarge.weight,
                        large: s === a.large.weight,
                        medium: s === a.medium.weight,
                        small: s === a.small.weight,
                        extraSmall: s === a.extraSmall.weight,
                        extraLargeWidth: n === a.extraLarge.weight,
                        largeWidth: n === a.large.weight,
                        mediumWidth: n === a.medium.weight,
                        smallWidth: n === a.small.weight,
                        extraSmallWidth: n === a.extraSmall.weight,
                        extraLargeHeight: r === a.extraLarge.weight,
                        largeHeight: r === a.large.weight,
                        mediumHeight: r === a.medium.weight,
                        smallHeight: r === a.small.weight,
                        extraSmallHeight: r === a.extraSmall.weight,
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
                })(o || (o = {}));
                const c = u.O.client.getSize('rem'),
                    d = c.width,
                    m = c.height,
                    _ = Object.assign({ width: d, height: m }, l(d, m, i)),
                    E = (0, n.createContext)(_),
                    g = ['children'];
                const p = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                r = {},
                                s = Object.keys(e);
                            for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                            return r;
                        })(e, g);
                    const r = (0, n.useContext)(E),
                        u = r.extraLarge,
                        i = r.large,
                        o = r.medium,
                        l = r.small,
                        c = r.extraSmall,
                        d = r.extraLargeWidth,
                        m = r.largeWidth,
                        _ = r.mediumWidth,
                        p = r.smallWidth,
                        h = r.extraSmallWidth,
                        b = r.extraLargeHeight,
                        A = r.largeHeight,
                        f = r.mediumHeight,
                        v = r.smallHeight,
                        C = r.extraSmallHeight,
                        F = { extraLarge: b, large: A, medium: f, small: v, extraSmall: C };
                    if (a.extraLarge || a.large || a.medium || a.small || a.extraSmall) {
                        if (a.extraLarge && u) return t;
                        if (a.large && i) return t;
                        if (a.medium && o) return t;
                        if (a.small && l) return t;
                        if (a.extraSmall && c) return t;
                    } else {
                        if (a.extraLargeWidth && d) return s(t, a, F);
                        if (a.largeWidth && m) return s(t, a, F);
                        if (a.mediumWidth && _) return s(t, a, F);
                        if (a.smallWidth && p) return s(t, a, F);
                        if (a.extraSmallWidth && h) return s(t, a, F);
                        if (
                            !(a.extraLargeWidth || a.largeWidth || a.mediumWidth || a.smallWidth || a.extraSmallWidth)
                        ) {
                            if (a.extraLargeHeight && b) return t;
                            if (a.largeHeight && A) return t;
                            if (a.mediumHeight && f) return t;
                            if (a.smallHeight && v) return t;
                            if (a.extraSmallHeight && C) return t;
                        }
                    }
                    return null;
                };
                p.defaultProps = {
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
                (0, n.memo)(p);
                const h = (e) => {
                        const t = (0, n.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    b = (0, n.memo)(({ children: e }) => {
                        const t = (0, n.useContext)(E),
                            a = (0, n.useState)(t),
                            s = a[0],
                            o = a[1],
                            c = (0, n.useCallback)((e, t) => {
                                const a = u.O.view.pxToRem(e),
                                    n = u.O.view.pxToRem(t);
                                o(Object.assign({ width: a, height: n }, l(a, n, i)));
                            }, []);
                        h(() => {
                            engine.on('clientResized', c);
                        }),
                            (0, n.useEffect)(() => () => engine.off('clientResized', c), [c]);
                        const d = (0, n.useMemo)(() => Object.assign({}, s), [s]);
                        return r().createElement(E.Provider, { value: d }, e);
                    });
                var A = a(6483),
                    f = a.n(A),
                    v = a(926),
                    C = a.n(v);
                let F, D, B;
                !(function (e) {
                    (e[(e.ExtraSmall = i.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = i.small.width)] = 'Small'),
                        (e[(e.Medium = i.medium.width)] = 'Medium'),
                        (e[(e.Large = i.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = i.extraLarge.width)] = 'ExtraLarge');
                })(F || (F = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = i.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = i.small.width)] = 'Small'),
                            (e[(e.Medium = i.medium.width)] = 'Medium'),
                            (e[(e.Large = i.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = i.extraLarge.width)] = 'ExtraLarge');
                    })(D || (D = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = i.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = i.small.height)] = 'Small'),
                            (e[(e.Medium = i.medium.height)] = 'Medium'),
                            (e[(e.Large = i.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = i.extraLarge.height)] = 'ExtraLarge');
                    })(B || (B = {}));
                const w = () => {
                        const e = (0, n.useContext)(E),
                            t = e.width,
                            a = e.height,
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return F.ExtraLarge;
                                    case e.large:
                                        return F.Large;
                                    case e.medium:
                                        return F.Medium;
                                    case e.small:
                                        return F.Small;
                                    case e.extraSmall:
                                        return F.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), F.ExtraSmall;
                                }
                            })(e),
                            s = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return D.ExtraLarge;
                                    case e.largeWidth:
                                        return D.Large;
                                    case e.mediumWidth:
                                        return D.Medium;
                                    case e.smallWidth:
                                        return D.Small;
                                    case e.extraSmallWidth:
                                        return D.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), D.ExtraSmall;
                                }
                            })(e),
                            u = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return B.ExtraLarge;
                                    case e.largeHeight:
                                        return B.Large;
                                    case e.mediumHeight:
                                        return B.Medium;
                                    case e.smallHeight:
                                        return B.Small;
                                    case e.extraSmallHeight:
                                        return B.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), B.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: r, mediaWidth: s, mediaHeight: u, remScreenWidth: t, remScreenHeight: a };
                    },
                    y = ['children', 'className'];
                function x() {
                    return (
                        (x =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        x.apply(this, arguments)
                    );
                }
                const S = {
                        [D.ExtraSmall]: '',
                        [D.Small]: C().SMALL_WIDTH,
                        [D.Medium]: `${C().SMALL_WIDTH} ${C().MEDIUM_WIDTH}`,
                        [D.Large]: `${C().SMALL_WIDTH} ${C().MEDIUM_WIDTH} ${C().LARGE_WIDTH}`,
                        [D.ExtraLarge]: `${C().SMALL_WIDTH} ${C().MEDIUM_WIDTH} ${C().LARGE_WIDTH} ${C().EXTRA_LARGE_WIDTH}`,
                    },
                    k = {
                        [B.ExtraSmall]: '',
                        [B.Small]: C().SMALL_HEIGHT,
                        [B.Medium]: `${C().SMALL_HEIGHT} ${C().MEDIUM_HEIGHT}`,
                        [B.Large]: `${C().SMALL_HEIGHT} ${C().MEDIUM_HEIGHT} ${C().LARGE_HEIGHT}`,
                        [B.ExtraLarge]: `${C().SMALL_HEIGHT} ${C().MEDIUM_HEIGHT} ${C().LARGE_HEIGHT} ${C().EXTRA_LARGE_HEIGHT}`,
                    },
                    N = {
                        [F.ExtraSmall]: '',
                        [F.Small]: C().SMALL,
                        [F.Medium]: `${C().SMALL} ${C().MEDIUM}`,
                        [F.Large]: `${C().SMALL} ${C().MEDIUM} ${C().LARGE}`,
                        [F.ExtraLarge]: `${C().SMALL} ${C().MEDIUM} ${C().LARGE} ${C().EXTRA_LARGE}`,
                    },
                    P = (e) => {
                        let t = e.children,
                            a = e.className,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, y);
                        const s = w(),
                            u = s.mediaWidth,
                            i = s.mediaHeight,
                            o = s.mediaSize;
                        return r().createElement('div', x({ className: f()(a, S[u], k[i], N[o]) }, n), t);
                    },
                    T = ['children'];
                const I = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                r = {},
                                s = Object.keys(e);
                            for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                            return r;
                        })(e, T);
                    return r().createElement(b, null, r().createElement(P, a, t));
                };
                var L = a(493),
                    M = a.n(L);
                function O(e) {
                    engine.call('PlaySound', e);
                }
                const H = {
                        playHighlight() {
                            O('highlight');
                        },
                        playClick() {
                            O('play');
                        },
                        playYes() {
                            O('yes1');
                        },
                    },
                    $ = {
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
                    U = [
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
                function W() {
                    return (
                        (W =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        W.apply(this, arguments)
                    );
                }
                class z extends r().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && O(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && O(this.props.soundClick);
                            }),
                            (this._onMouseUp = (e) => (t) => {
                                e && e(t), this.setState({ click: !1 });
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 }));
                    }
                    render() {
                        const e = this.props,
                            t = e.caption,
                            a = e.onClick,
                            n = e.goto,
                            s = e.side,
                            u = e.type,
                            i = e.classNames,
                            o = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            d = e.onMouseUp,
                            m =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        n,
                                        r = {},
                                        s = Object.keys(e);
                                    for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                    return r;
                                })(e, U)),
                            _ = f()($.base, $[`base__${u}`], $[`base__${s}`], null == i ? void 0 : i.base),
                            E = f()($.icon, $[`icon__${u}`], $[`icon__${s}`], null == i ? void 0 : i.icon),
                            g = f()($.glow, null == i ? void 0 : i.glow),
                            p = f()($.caption, $[`caption__${u}`], null == i ? void 0 : i.caption),
                            h = f()($.goto, null == i ? void 0 : i.goto);
                        return r().createElement(
                            'div',
                            W(
                                {
                                    className: _,
                                    onMouseEnter: this._onMouseEnter(o),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(d),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: a,
                                },
                                m,
                            ),
                            'info' !== u && r().createElement('div', { className: $.shine }),
                            r().createElement('div', { className: E }, r().createElement('div', { className: g })),
                            r().createElement('div', { className: p }, t),
                            n && r().createElement('div', { className: h }, n),
                        );
                    }
                }
                z.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var G = a(3403),
                    j = a(5521),
                    q = a(4179);
                const V = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function Q(e = j.n.NONE, t = V, a = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== j.n.NONE)
                            return (
                                window.addEventListener('keydown', n, a),
                                () => {
                                    window.removeEventListener('keydown', n, a);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (u.O.view.isEventHandled()) return;
                                u.O.view.setEventHandled(), t(n), a && n.stopPropagation();
                            }
                        }
                    }, [t, e, a]);
                }
                const X = 'page_heading_05',
                    Y = 'page_close_a4',
                    K = ({ onClose: e, className: t }) => {
                        var a;
                        return (
                            (a = e),
                            Q(j.n.ESCAPE, a),
                            r().createElement(
                                'div',
                                { className: f()(Y, t) },
                                r().createElement(z, {
                                    caption: R.strings.comp7.closeButtonLabel(),
                                    type: 'close',
                                    side: 'right',
                                    onClick: e,
                                }),
                            )
                        );
                    },
                    Z = () => u.O.client.graphicsQuality.isHigh();
                function J() {}
                function ee(e) {
                    return e;
                }
                function te() {
                    return !1;
                }
                console.log;
                var ae = a(9174);
                function ne(e, t) {
                    var a = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (a) return (a = a.call(e)).next.bind(a);
                    if (
                        Array.isArray(e) ||
                        (a = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return re(e, t);
                            var a = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === a && e.constructor && (a = e.constructor.name);
                            if ('Map' === a || 'Set' === a) return Array.from(e);
                            if ('Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
                                return re(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        a && (e = a);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function re(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                    return n;
                }
                const se = (e) => (0 === e ? window : window.subViews.get(e));
                const ue = () => (e, t) => {
                        const a = (0, n.createContext)({});
                        return [
                            function ({ mode: s = 'real', options: i, children: o, mocks: l }) {
                                const c = (0, n.useRef)([]),
                                    d = (a, n, r) => {
                                        var s;
                                        const i = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: a = se,
                                                context: n = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function s(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? r.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, a) => {
                                                        a.forEach((t) => {
                                                            const a = r.get(t);
                                                            void 0 !== a && a(e);
                                                        });
                                                    });
                                                });
                                                const i = (e) => {
                                                    const r = a(t),
                                                        s = n.split('.').reduce((e, t) => e[t], r);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? s
                                                        : e.split('.').reduce((e, t) => {
                                                              const a = e[t];
                                                              return 'function' == typeof a ? a.bind(e) : a;
                                                          }, s);
                                                };
                                                return {
                                                    subscribe: (a, s) => {
                                                        const o = 'string' == typeof s ? `${n}.${s}` : n,
                                                            l = u.O.view.addModelObserver(o, t, !0);
                                                        return r.set(l, a), e && a(i(s)), l;
                                                    },
                                                    readByPath: i,
                                                    createCallback: (e, t) => {
                                                        const a = i(t);
                                                        return (...t) => {
                                                            a(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = i(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, a = ne(r.keys()); !(e = a()).done; ) s(e.value, t);
                                                    },
                                                    unsubscribe: s,
                                                };
                                            })(n),
                                            o =
                                                'real' === a
                                                    ? i
                                                    : Object.assign({}, i, {
                                                          readByPath:
                                                              null != (s = null == r ? void 0 : r.getter)
                                                                  ? s
                                                                  : () => {},
                                                      }),
                                            l = (e) =>
                                                'mocks' === a ? (null == r ? void 0 : r.getter(e)) : o.readByPath(e),
                                            d = (e) => c.current.push(e),
                                            m = e({
                                                mode: a,
                                                readByPath: l,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const n = null != t ? t : l(e),
                                                            r = ae.LO.box(n, { equals: te });
                                                        return (
                                                            'real' === a &&
                                                                o.subscribe(
                                                                    (0, ae.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const n = null != t ? t : l(e),
                                                            r = ae.LO.box(n, { equals: te });
                                                        return (
                                                            'real' === a &&
                                                                o.subscribe(
                                                                    (0, ae.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const n = l(t);
                                                        if (Array.isArray(e)) {
                                                            const r = e.reduce(
                                                                (e, t) => ((e[t] = ae.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === a &&
                                                                    o.subscribe(
                                                                        (0, ae.aD)((t) => {
                                                                            e.forEach((e) => {
                                                                                r[e].set(t[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                r
                                                            );
                                                        }
                                                        {
                                                            const r = e,
                                                                s = Object.entries(r),
                                                                u = s.reduce(
                                                                    (e, [t, a]) => ((e[a] = ae.LO.box(n[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === a &&
                                                                    o.subscribe(
                                                                        (0, ae.aD)((e) => {
                                                                            s.forEach(([t, a]) => {
                                                                                u[a].set(e[t]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                u
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: d,
                                            }),
                                            _ = { mode: a, model: m, externalModel: o, cleanup: d };
                                        return {
                                            model: m,
                                            controls: 'mocks' === a && r ? r.controls(_) : t(_),
                                            externalModel: o,
                                            mode: a,
                                        };
                                    },
                                    m = (0, n.useRef)(!1),
                                    _ = (0, n.useState)(s),
                                    E = _[0],
                                    g = _[1],
                                    p = (0, n.useState)(() => d(s, i, l)),
                                    h = p[0],
                                    b = p[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        m.current ? b(d(E, i, l)) : (m.current = !0);
                                    }, [l, E, i]),
                                    (0, n.useEffect)(() => {
                                        g(s);
                                    }, [s]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            h.externalModel.dispose(), c.current.forEach((e) => e());
                                        },
                                        [h],
                                    ),
                                    r().createElement(a.Provider, { value: h }, o)
                                );
                            },
                            () => (0, n.useContext)(a),
                        ];
                    },
                    ie = ue()(
                        ({ observableModel: e }) => ({
                            root: e.object(),
                            season: e.primitives(
                                ['startTimestamp', 'endTimestamp', 'serverTimestamp', 'state'],
                                'season',
                            ),
                            year: e.primitives(['state'], 'year'),
                        }),
                        ({ externalModel: e }) => ({ pollServerTime: e.createCallbackNoArgs('season.pollServerTime') }),
                    ),
                    oe = ie[0],
                    le = ie[1];
                let ce;
                !(function (e) {
                    (e[(e.Progression = 0)] = 'Progression'),
                        (e[(e.RankRewards = 1)] = 'RankRewards'),
                        (e[(e.WeeklyQuests = 2)] = 'WeeklyQuests'),
                        (e[(e.Leaderboard = 3)] = 'Leaderboard');
                })(ce || (ce = {}));
                const de = {
                        [ce.Progression]: 'progression',
                        [ce.RankRewards]: 'rankRewards',
                        [ce.WeeklyQuests]: 'weeklyQuests',
                        [ce.Leaderboard]: 'leaderboard',
                        [ce.YearlyRewards]: 'yearlyRewards',
                        [ce.YearlyStatistics]: 'yearlyStatistics',
                    },
                    me = { from: { opacity: 0 }, to: { opacity: 1 }, delay: 300, config: { duration: 300 } };
                var _e = a(3946);
                const Ee = ue()(
                        ({ observableModel: e }) => {
                            const t = { root: e.object() },
                                a = e.object('progressionModel.qualificationModel'),
                                n = (0, _e.Om)(() => t.root.get().pageViewId === ce.Progression && a.get().isActive);
                            return Object.assign({}, t, { computes: { isProgressionInQualification: n } });
                        },
                        ({ externalModel: e }) => ({
                            close: e.createCallbackNoArgs('onClose'),
                            openInfoPage: e.createCallbackNoArgs('onInfoPageOpen'),
                        }),
                    ),
                    ge = Ee[0],
                    pe = Ee[1];
                function he(e, t) {
                    var a;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (a = e[t]) ? void 0 : a.value;
                }
                const be = he;
                function Ae(e) {
                    var t;
                    return e && 'value' in e && null != (t = e.constructor) && t.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function fe(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, a, n) => t(null == e ? void 0 : e.value, a, n));
                }
                function ve(e, t = 0, a = e.length - 1) {
                    return {
                        [Symbol.iterator]() {
                            let n = Math.max(t, 0);
                            const r = Math.min(
                                a,
                                (function (e) {
                                    return Math.max(0, e.length - 1);
                                })(e),
                            );
                            return {
                                next: function () {
                                    if (n > r) return { done: !0, value: null };
                                    const t = e[n++];
                                    return t ? { value: Ae(t), done: !1 } : { done: !0, value: null };
                                },
                            };
                        },
                    };
                }
                function Ce(e, t) {
                    for (let a = 0; a < e.length; a++) {
                        const n = Ae(e[a]);
                        if (t(n, a, e)) return n;
                    }
                }
                function Fe(e, t) {
                    for (let a = 0; a < e.length; a++) {
                        if (t(be(e, a), a, e)) return a;
                    }
                }
                function De(e, t) {
                    for (let a = e.length - 1; a >= 0; a--) {
                        if (t(be(e, a), a, e)) return a;
                    }
                }
                const Be = R.images.gui.maps.icons.comp7.metaTabs,
                    we = (e, t) => {
                        const a = de[e];
                        return t ? `${Be.$dyn(a)}` : `${Be.small.$dyn(a)}`;
                    },
                    Re = ue()(
                        ({ observableModel: e }) => {
                            const t = { root: e.object() },
                                a = e.array('items'),
                                n = (0, _e.Om)(
                                    (e) => [
                                        {
                                            id: 0,
                                            items: fe(a.get(), ({ id: t, hasNotification: a }) =>
                                                Object.assign(
                                                    { id: t, icon: we(t, e) },
                                                    a && { notification: { type: 'dot' } },
                                                ),
                                            ),
                                        },
                                    ],
                                    { equals: te },
                                );
                            return Object.assign({}, t, { computes: { tabs: n } });
                        },
                        ({ externalModel: e }) => ({
                            changeSidebarTab: e.createCallback((e) => ({ tabId: e }), 'onSideBarTabChange'),
                        }),
                    ),
                    ye = Re[0],
                    xe = Re[1],
                    Se = (e) => {
                        let t,
                            a = null;
                        return (
                            (a = requestAnimationFrame(() => {
                                a = requestAnimationFrame(() => {
                                    (a = null), (t = e());
                                });
                            })),
                            () => {
                                'function' == typeof t && t(), null !== a && cancelAnimationFrame(a);
                            }
                        );
                    };
                var ke = a(7030);
                const Ne = {
                        base: 'Frame_base_af',
                        base__small: 'Frame_base__small_f0',
                        base__medium: 'Frame_base__medium_05',
                        border: 'Frame_border_17',
                        border__top: 'Frame_border__top_f7',
                        border__bottom: 'Frame_border__bottom_52',
                        arrow: 'Frame_arrow_c3',
                    },
                    Pe = r().forwardRef(function ({ classNames: e, arrowRef: t, size: a = 'medium', className: n }, s) {
                        return r().createElement(
                            'div',
                            { className: f()(Ne.base, Ne[`base__${a}`], n), ref: s },
                            r().createElement('div', {
                                className: f()(
                                    Ne.border,
                                    Ne.border__top,
                                    null == e ? void 0 : e.border,
                                    null == e ? void 0 : e.borderTop,
                                ),
                            }),
                            r().createElement('div', {
                                className: f()(
                                    Ne.border,
                                    Ne.border__bottom,
                                    null == e ? void 0 : e.border,
                                    null == e ? void 0 : e.borderBottom,
                                ),
                            }),
                            r().createElement('div', {
                                className: f()(Ne.arrow, null == e ? void 0 : e.arrow),
                                ref: t,
                            }),
                        );
                    }),
                    Te = {
                        base: 'Tab_base_cd',
                        base__small: 'Tab_base__small_bf',
                        base__medium: 'Tab_base__medium_96',
                        base__active: 'Tab_base__active_7e',
                        highlight: 'Tab_highlight_b6',
                        icon: 'Tab_icon_28',
                        icon__small: 'Tab_icon__small_48',
                        icon__medium: 'Tab_icon__medium_73',
                        notification: 'Tab_notification_86',
                        notification__symbol: 'Tab_notification__symbol_9b',
                        notification__small: 'Tab_notification__small_92',
                        notification__dot: 'Tab_notification__dot_51',
                        notification__medium: 'Tab_notification__medium_e6',
                        notification__large: 'Tab_notification__large_6b',
                    },
                    Ie = { mouseEnter: 'highlight', click: 'play' },
                    Le = r().forwardRef(function (
                        {
                            id: e,
                            isActive: t,
                            className: a,
                            classNames: n,
                            sounds: s = Ie,
                            notification: u,
                            icon: i,
                            size: o,
                            additionContent: l,
                            onClick: c,
                            onMouseEnter: d,
                            onMouseLeave: m,
                            WrapperElement: _,
                        },
                        E,
                    ) {
                        const g = (e, a) => {
                                !t && s[a] && O(s[a]);
                            },
                            p = r().createElement(
                                'div',
                                {
                                    className: f()(
                                        Te.base,
                                        Te[`base__${o}`],
                                        t && f()(Te.base__active, null == n ? void 0 : n.activeTab),
                                        a,
                                    ),
                                    onClick: ((e) => () => {
                                        g(0, 'click'), null == c || c(e);
                                    })(e),
                                    onMouseEnter: ((e) => () => {
                                        g(0, 'mouseEnter'), null == d || d(e);
                                    })(e),
                                    onMouseLeave: ((e) => () => {
                                        g(0, 'mouseLeave'), null == m || m(e);
                                    })(e),
                                    ref: t ? E : null,
                                },
                                r().createElement('div', {
                                    className: f()(Te.highlight, null == n ? void 0 : n.highlight),
                                }),
                                'function' == typeof i && o
                                    ? i(o)
                                    : r().createElement('div', {
                                          className: f()(Te.icon, Te[`icon__${o}`], null == n ? void 0 : n.icon),
                                          style: { backgroundImage: `url(${i})` },
                                      }),
                                l && l({ id: e, isActive: t, size: o }),
                                u &&
                                    r().createElement(
                                        'div',
                                        {
                                            className: f()(
                                                Te.notification,
                                                Te[`notification__${u.type}`],
                                                u.size ? Te[`notification__${u.size}`] : Te.notification__medium,
                                                null == n ? void 0 : n.notification,
                                            ),
                                        },
                                        'dot' !== u.type && u.value,
                                    ),
                            );
                        return _ ? r().createElement(_, { key: e, id: e }, p) : p;
                    }),
                    Me = {
                        base: 'VerticalTabs_base_41',
                        title: 'VerticalTabs_title_8c',
                        group: 'VerticalTabs_group_08',
                        group__small: 'VerticalTabs_group__small_69',
                        group__medium: 'VerticalTabs_group__medium_68',
                    },
                    Oe = r().memo(function ({
                        active: e,
                        tabs: t,
                        sounds: a,
                        className: s,
                        classNames: i,
                        size: o = 'medium',
                        additionContent: l,
                        onClick: c,
                        onMouseEnter: d,
                        onMouseLeave: m,
                        WrapperElement: _,
                    }) {
                        const E = (0, n.useRef)(null),
                            g = (0, n.useRef)(null),
                            p = (0, n.useRef)(null),
                            h = (0, n.useRef)(null),
                            b = (0, ke.useSpring)(() => ({
                                marginLeft: 0,
                                onChange: (e) => {
                                    const t = E.current;
                                    t && (t.style.marginLeft = `${e.value.marginLeft}rem`);
                                },
                            }))[1],
                            A = (0, ke.useSpring)(() => ({
                                opacity: 0,
                                onChange: (e) => {
                                    const t = E.current;
                                    t && (t.style.opacity = `${e.value.opacity}`);
                                },
                            }))[1],
                            v = (0, ke.useSpring)(() => ({
                                position: 0,
                                onChange: (e) => {
                                    const t = g.current;
                                    t &&
                                        (t.style.transform = `translateY(${e.value.position / u.O.view.getScale()}rem)`);
                                },
                                onStart: () => {
                                    b.start({
                                        from: { marginLeft: 12 },
                                        to: { marginLeft: 0 },
                                        config: { duration: 50 },
                                    }),
                                        A.start({ from: { opacity: 1 }, to: { opacity: 0 }, config: { duration: 50 } });
                                },
                                onRest: () => {
                                    b.start({
                                        from: { marginLeft: 0 },
                                        to: { marginLeft: 12 },
                                        config: { duration: 150 },
                                    }),
                                        A.start({
                                            from: { opacity: 0 },
                                            to: { opacity: 1 },
                                            config: { duration: 150 },
                                        });
                                },
                            }))[1],
                            C = (0, n.useCallback)((e) => {
                                if (null !== p.current && null !== h.current) {
                                    e(p.current.getBoundingClientRect().top - h.current.getBoundingClientRect().top);
                                }
                            }, []);
                        var F, D;
                        return (
                            (0, n.useEffect)(() => {
                                C((e) => {
                                    v.start({ position: e, config: { duration: 200 } });
                                });
                            }, [v, e, C]),
                            (0, n.useEffect)(
                                () =>
                                    Se(() => {
                                        C((e) => {
                                            v.start({ position: e, immediate: !0 });
                                        });
                                    }),
                                [v, C, o],
                            ),
                            (F = () => {
                                C((e) => {
                                    v.start({ position: e, config: { duration: 200 } });
                                });
                            }),
                            (D = [v, C]),
                            (0, n.useEffect)(() => {
                                let e = () => {};
                                const t = () => {
                                    e(), (e = Se(F));
                                };
                                return (
                                    window.addEventListener('resize', t),
                                    () => {
                                        e(), window.removeEventListener('resize', t);
                                    }
                                );
                            }, D),
                            r().createElement(
                                'div',
                                { className: f()(Me.base, s), ref: h },
                                t.map(({ id: t, items: n, title: s, groupClassNames: u }) =>
                                    r().createElement(
                                        'div',
                                        {
                                            key: t,
                                            className: f()(Me.group, Me[`group__${o}`], null == u ? void 0 : u.group),
                                        },
                                        s &&
                                            r().createElement(
                                                'div',
                                                { className: f()(Me.title, null == u ? void 0 : u.title) },
                                                s,
                                            ),
                                        n.map(({ id: t, icon: n, notification: s }) =>
                                            r().createElement(Le, {
                                                key: t,
                                                id: t,
                                                icon: n,
                                                notification: s,
                                                ref: p,
                                                sounds: a,
                                                isActive: e === t,
                                                size: o,
                                                className: null == i ? void 0 : i.tab,
                                                classNames: i,
                                                additionContent: l,
                                                onMouseEnter: d,
                                                onMouseLeave: m,
                                                onClick: c,
                                                WrapperElement: _,
                                            }),
                                        ),
                                    ),
                                ),
                                r().createElement(Pe, {
                                    arrowRef: E,
                                    ref: g,
                                    size: o,
                                    className: null == i ? void 0 : i.frame,
                                    classNames: i,
                                }),
                            )
                        );
                    }),
                    He = [
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
                function $e(e) {
                    return Object.entries(e || {}).map(([e, t]) => {
                        const a = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                a.number = t;
                                break;
                            case 'boolean':
                                a.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                a.string = t.toString();
                        }
                        return a;
                    });
                }
                const Ue = (e, t, a = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: q.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: n,
                                },
                                a,
                            ),
                        );
                    },
                    We = (e) => {
                        let t = e.children,
                            a = e.contentId,
                            r = e.args,
                            s = e.onMouseEnter,
                            u = e.onMouseLeave,
                            i = e.onMouseDown,
                            o = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            d = e.ignoreMouseClick,
                            m = void 0 !== d && d,
                            _ = e.decoratorId,
                            E = void 0 === _ ? 0 : _,
                            g = e.isEnabled,
                            p = void 0 === g || g,
                            h = e.targetId,
                            b = void 0 === h ? 0 : h,
                            A = e.onShow,
                            f = e.onHide,
                            v = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, He);
                        const C = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            F = (0, n.useMemo)(
                                () =>
                                    b ||
                                    ((e = 1) => {
                                        const t = new Error().stack;
                                        let a,
                                            n = R.invalid('resId');
                                        return (
                                            t &&
                                                ((a = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== a &&
                                                    window.subViews[a] &&
                                                    (n = window.subViews[a].id)),
                                            { caller: a, stack: t, resId: n }
                                        );
                                    })().resId,
                                [b],
                            ),
                            D = (0, n.useCallback)(() => {
                                (C.current.isVisible && C.current.timeoutId) ||
                                    (Ue(a, E, { isMouseEvent: !0, on: !0, arguments: $e(r) }, F),
                                    A && A(),
                                    (C.current.isVisible = !0));
                            }, [a, E, r, F, A]),
                            B = (0, n.useCallback)(() => {
                                if (C.current.isVisible || C.current.timeoutId) {
                                    const e = C.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (C.current.timeoutId = 0)),
                                        Ue(a, E, { on: !1 }, F),
                                        C.current.isVisible && f && f(),
                                        (C.current.isVisible = !1);
                                }
                            }, [a, E, F, f]),
                            w = (0, n.useCallback)((e) => {
                                C.current.isVisible &&
                                    ((C.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (C.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(C.current.prevTarget) && B();
                                    }, 200)));
                            }, []);
                        (0, n.useEffect)(() => {
                            const e = C.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', w, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', w, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, n.useEffect)(() => {
                                !1 === p && B();
                            }, [p, B]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', B),
                                    () => {
                                        window.removeEventListener('mouseleave', B), B();
                                    }
                                ),
                                [B],
                            );
                        return p
                            ? (0, n.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((y = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((C.current.timeoutId = window.setTimeout(D, c ? 100 : 400)),
                                                      s && s(e),
                                                      y && y(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              B(), null == u || u(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === m && B(), null == o || o(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === m && B(), null == i || i(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      v,
                                  ),
                              )
                            : t;
                        var y;
                    },
                    ze = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Ge() {
                    return (
                        (Ge =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Ge.apply(this, arguments)
                    );
                }
                const je = R.views.common.tooltip_window.simple_tooltip_content,
                    qe = (e) => {
                        let t = e.children,
                            a = e.body,
                            s = e.header,
                            u = e.note,
                            i = e.alert,
                            o = e.args,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, ze);
                        const c = (0, n.useMemo)(() => {
                            const e = Object.assign({}, o, { body: a, header: s, note: u, alert: i });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [i, a, s, u, o]);
                        return r().createElement(
                            We,
                            Ge(
                                {
                                    contentId:
                                        ((d = null == o ? void 0 : o.hasHtmlContent),
                                        d ? je.SimpleTooltipHtmlContent('resId') : je.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            t,
                        );
                        var d;
                    },
                    Ve = R.strings.comp7.sidebar.tabs.tooltip,
                    Qe = ({ children: e, id: t }) => {
                        const a = de[t];
                        return r().createElement(qe, { header: `${Ve.header.$dyn(a)}`, body: `${Ve.body.$dyn(a)}` }, e);
                    },
                    Xe = { icon: 'Tabs_icon_78' },
                    Ye = (0, G.Pi)(({ pageView: e, className: t }) => {
                        const a = xe(),
                            s = a.model,
                            u = a.controls,
                            i = w().mediaSize >= F.Medium,
                            o = (0, n.useCallback)((e) => u.changeSidebarTab(e), [u]),
                            l = s.computes.tabs(i);
                        return r().createElement(Oe, {
                            tabs: l,
                            onClick: o,
                            active: e,
                            size: i ? 'medium' : 'small',
                            className: t,
                            classNames: Xe,
                            WrapperElement: Qe,
                        });
                    }),
                    Ke = 'Spinner_base_87',
                    Ze = 'Spinner_caption_cf',
                    Je = 'Spinner_gear_c4',
                    et = 'Spinner_logo_bf',
                    tt = ({ message: e, className: t, classNames: a }) =>
                        r().createElement(
                            'div',
                            { className: f()(Ke, t) },
                            e && r().createElement('div', { className: f()(Ze, null == a ? void 0 : a.caption) }, e),
                            r().createElement('div', { className: f()(Je, null == a ? void 0 : a.gear) }),
                            r().createElement('div', { className: f()(et, null == a ? void 0 : a.logo) }),
                        );
                let at;
                !(function (e) {
                    (e[(e.Initial = 0)] = 'Initial'), (e[(e.Success = 1)] = 'Success'), (e[(e.Error = 2)] = 'Error');
                })(at || (at = {}));
                const nt = 'Heading_base_74',
                    rt = ({ children: e, className: t }) => r().createElement('div', { className: f()(nt, t) }, e),
                    st = {
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
                let ut, it;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(ut || (ut = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
                    })(it || (it = {}));
                const ot = ({
                    children: e,
                    size: t,
                    isFocused: a,
                    type: s,
                    disabled: u,
                    mixClass: i,
                    soundHover: o,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: d,
                    onMouseDown: m,
                    onMouseUp: _,
                    onMouseLeave: E,
                    onClick: g,
                }) => {
                    const p = (0, n.useRef)(null),
                        h = (0, n.useState)(a),
                        b = h[0],
                        A = h[1],
                        v = (0, n.useState)(!1),
                        C = v[0],
                        F = v[1],
                        D = (0, n.useState)(!1),
                        B = D[0],
                        w = D[1],
                        y = (0, n.useCallback)(() => {
                            u || (p.current && (p.current.focus(), A(!0)));
                        }, [u]),
                        x = (0, n.useCallback)(
                            (e) => {
                                b && null !== p.current && !p.current.contains(e.target) && A(!1);
                            },
                            [b],
                        ),
                        S = (0, n.useCallback)(
                            (e) => {
                                u || (g && g(e));
                            },
                            [u, g],
                        ),
                        k = (0, n.useCallback)(
                            (e) => {
                                u || (null !== o && O(o), c && c(e), w(!0));
                            },
                            [u, o, c],
                        ),
                        N = (0, n.useCallback)(
                            (e) => {
                                d && d(e);
                            },
                            [d],
                        ),
                        P = (0, n.useCallback)(
                            (e) => {
                                u || (_ && _(e), F(!1));
                            },
                            [u, _],
                        ),
                        T = (0, n.useCallback)(
                            (e) => {
                                u || (null !== l && O(l), m && m(e), a && y(), F(!0));
                            },
                            [u, l, m, y, a],
                        ),
                        I = (0, n.useCallback)(
                            (e) => {
                                u || (E && E(e), F(!1));
                            },
                            [u, E],
                        ),
                        L = f()(
                            st.base,
                            st[`base__${s}`],
                            {
                                [st.base__disabled]: u,
                                [st[`base__${t}`]]: t,
                                [st.base__focus]: b,
                                [st.base__highlightActive]: C,
                                [st.base__firstHover]: B,
                            },
                            i,
                        ),
                        M = f()(st.state, st.state__default);
                    return (
                        (0, n.useEffect)(
                            () => (
                                document.addEventListener('mousedown', x),
                                () => {
                                    document.removeEventListener('mousedown', x);
                                }
                            ),
                            [x],
                        ),
                        (0, n.useEffect)(() => {
                            A(a);
                        }, [a]),
                        r().createElement(
                            'div',
                            {
                                ref: p,
                                className: L,
                                onMouseEnter: k,
                                onMouseMove: N,
                                onMouseUp: P,
                                onMouseDown: T,
                                onMouseLeave: I,
                                onClick: S,
                            },
                            s !== ut.ghost &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement('div', { className: st.back }),
                                    r().createElement('span', { className: st.texture }),
                                ),
                            r().createElement(
                                'span',
                                { className: M },
                                r().createElement('span', { className: st.stateDisabled }),
                                r().createElement('span', { className: st.stateHighlightHover }),
                                r().createElement('span', { className: st.stateHighlightActive }),
                            ),
                            r().createElement(
                                'span',
                                { className: st.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                ot.defaultProps = { type: ut.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const lt = (0, n.memo)(ot),
                    ct = (e, t) =>
                        Object.keys(e).length === Object.keys(t).length &&
                        Object.keys(e).every((a) => Object.prototype.hasOwnProperty.call(t, a) && e[a] === t[a]),
                    dt = ue()(
                        ({ observableModel: e, mode: t }) => {
                            const a = { root: e.object() },
                                n = e.array('items'),
                                r = (0, _e.Om)(() => n.get().length),
                                s = (0, _e.Om)(
                                    (e) => {
                                        const t = he(n.get(), e);
                                        if (!t) throw new Error(`leaderboard item with index ${e} was not found`);
                                        return Object.assign({}, t);
                                    },
                                    { equals: te },
                                ),
                                u = (0, _e.Om)(() => {
                                    const e = a.root.get(),
                                        t = e.state,
                                        n = e.leaderboardUpdateTimestamp;
                                    return t !== at.Initial && n > 0;
                                }),
                                i = (0, _e.Om)(() => r() > 0),
                                o = (0, _e.Om)(() => s(0).rank),
                                l = (0, _e.Om)(() => a.root.get().lastBestUserPosition + 1),
                                c = (0, _e.Om)((e) => a.root.get().ownSpaID === s(e).spaID),
                                d = (0, _e.Om)(() => -1 !== a.root.get().lastBestUserPosition),
                                m = (0, _e.Om)(() => ({ first: s(0).position, last: s(0).position + r() }), {
                                    equals: ct,
                                }),
                                _ = (0, _e.Om)(() => d() && l() >= m().first && l() <= m().last),
                                E = (0, _e.Om)(
                                    (e) => {
                                        const t = Math.ceil(a.root.get().recordsCount / e);
                                        return {
                                            amount: t,
                                            hasPagination: t > 1,
                                            active: Math.floor(m().first / e) + 1,
                                        };
                                    },
                                    { equals: ct },
                                ),
                                g = (0, _e.Om)((e) => s(e).position < 3),
                                p = (0, _e.Om)(() => -1 === a.root.get().personalPosition);
                            return Object.assign(
                                {},
                                a,
                                {
                                    computes: {
                                        leaderboardItemsLength: r,
                                        leaderboardItem: s,
                                        hasUpdateInfo: u,
                                        hasRecords: i,
                                        firstItemRank: o,
                                        rowsDividerPosition: l,
                                        hasRowsDivider: _,
                                        isPersonalRow: c,
                                        hasPositionIcon: g,
                                        isDefaultPersonalPosition: p,
                                        hasLastBestUserPosition: d,
                                        pages: E,
                                        pagePositions: m,
                                    },
                                },
                                'mocks' === t && { internal: { items: n } },
                            );
                        },
                        ({ externalModel: e }) => ({
                            refresh: e.createCallbackNoArgs('onRefresh'),
                            getTableRecords: e.createCallback((e, t) => ({ limit: e, offset: t }), 'getTableRecords'),
                        }),
                    ),
                    mt = dt[0],
                    _t = dt[1],
                    Et = 'ErrorState_base_eb',
                    gt = 'ErrorState_titleContainer_ca',
                    pt = 'ErrorState_alertIcon_76',
                    ht = 'ErrorState_title_c1',
                    bt = 'ErrorState_description_d9',
                    At = 'ErrorState_buttonWrapper_5e',
                    ft = 'ErrorState_button_23',
                    vt = R.strings.comp7.leaderboard.error,
                    Ct = (0, G.Pi)(({ className: e }) => {
                        const t = _t(),
                            a = t.model,
                            n = t.controls,
                            s = a.root.get().isLoading,
                            u = w().mediaSize;
                        return r().createElement(
                            'div',
                            { className: f()(Et, e) },
                            r().createElement(
                                'div',
                                { className: gt },
                                r().createElement('div', { className: pt }),
                                r().createElement('div', { className: ht }, vt.title()),
                            ),
                            r().createElement('div', { className: bt }, vt.description()),
                            r().createElement(
                                'div',
                                { className: At },
                                r().createElement(
                                    lt,
                                    {
                                        type: ut.secondary,
                                        disabled: s,
                                        size: ((i = u), i >= F.Medium ? it.medium : it.small),
                                        mixClass: ft,
                                        onClick: n.refresh,
                                    },
                                    vt.buttonText(),
                                ),
                            ),
                        );
                        var i;
                    });
                let Ft;
                !(function (e) {
                    (e[(e.First = 6)] = 'First'),
                        (e[(e.Second = 5)] = 'Second'),
                        (e[(e.Third = 4)] = 'Third'),
                        (e[(e.Fourth = 3)] = 'Fourth'),
                        (e[(e.Fifth = 2)] = 'Fifth'),
                        (e[(e.Sixth = 1)] = 'Sixth');
                })(Ft || (Ft = {}));
                const Dt = (e, t, a) => (a < e ? e : a > t ? t : a);
                function Bt(e, t) {
                    var a = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (a) return (a = a.call(e)).next.bind(a);
                    if (
                        Array.isArray(e) ||
                        (a = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return wt(e, t);
                            var a = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === a && e.constructor && (a = e.constructor.name);
                            if ('Map' === a || 'Set' === a) return Array.from(e);
                            if ('Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
                                return wt(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        a && (e = a);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function wt(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                    return n;
                }
                const Rt = [];
                function yt(e) {
                    const t = (0, n.useRef)(e);
                    return (
                        (0, n.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, n.useCallback)((...e) => (0, t.current)(...e), Rt)
                    );
                }
                function xt(e, t, a) {
                    const r = (0, n.useMemo)(
                        () =>
                            (function (e, t, a, n) {
                                let r,
                                    s = !1,
                                    u = 0;
                                function i() {
                                    r && clearTimeout(r);
                                }
                                function o(...o) {
                                    const l = this,
                                        c = Date.now() - u;
                                    function d() {
                                        (u = Date.now()), a.apply(l, o);
                                    }
                                    s ||
                                        (n && !r && d(),
                                        i(),
                                        void 0 === n && c > e
                                            ? d()
                                            : !0 !== t &&
                                              (r = setTimeout(
                                                  n
                                                      ? function () {
                                                            r = void 0;
                                                        }
                                                      : d,
                                                  void 0 === n ? e - c : e,
                                              )));
                                }
                                return (
                                    'boolean' != typeof t && ((n = a), (a = t), (t = void 0)),
                                    (o.cancel = function () {
                                        i(), (s = !0);
                                    }),
                                    o
                                );
                            })(a, e),
                        t,
                    );
                    return (0, n.useEffect)(() => r.cancel, [r]), r;
                }
                let St;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(St || (St = {}));
                const kt = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    Nt = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: a,
                        getDirection: r,
                        getWrapperSize: s,
                        triggerMouseMoveOnUpdate: i = !1,
                    }) => {
                        const o = (e, a) => {
                            const n = t(e),
                                r = n[0],
                                s = n[1];
                            return Dt(r, s, a);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                d = void 0 === c ? kt : c,
                                m = (0, n.useRef)(null),
                                _ = (0, n.useRef)(null),
                                E = (() => {
                                    const e = (0, n.useMemo)(() => ({}), []),
                                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                                        a = (e, a) => {
                                            t(e).set(a, a);
                                        },
                                        r = (e, a) => {
                                            t(e).delete(a);
                                        },
                                        s = (e, ...a) => {
                                            for (var n, r = Bt(t(e).values()); !(n = r()).done; ) (0, n.value)(...a);
                                        };
                                    return (0, n.useMemo)(() => ({ on: a, off: r, trigger: s }), []);
                                })(),
                                g = xt(
                                    () => {
                                        u.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                p = (0, ke.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = m.current;
                                        t && (a(t, e), E.trigger('change', e), i && g());
                                    },
                                    onRest: (e) => E.trigger('rest', e),
                                    onStart: (e) => E.trigger('start', e),
                                    onPause: (e) => E.trigger('pause', e),
                                })),
                                h = p[0],
                                b = p[1],
                                A = (0, n.useCallback)(
                                    (e, t, a) => {
                                        var n;
                                        const r = h.scrollPosition.get(),
                                            s = (null != (n = h.scrollPosition.goal) ? n : 0) - r;
                                        return o(e, t * a + s + r);
                                    },
                                    [h.scrollPosition],
                                ),
                                f = (0, n.useCallback)(
                                    (e, { immediate: t = !1, reset: a = !0 } = {}) => {
                                        const n = m.current;
                                        n &&
                                            b.start({
                                                scrollPosition: o(n, e),
                                                immediate: t,
                                                reset: a,
                                                config: d.animationConfig,
                                                from: { scrollPosition: o(n, h.scrollPosition.get()) },
                                            });
                                    },
                                    [b, d.animationConfig, h.scrollPosition],
                                ),
                                v = (0, n.useCallback)(
                                    (e) => {
                                        const t = m.current,
                                            a = _.current;
                                        if (!t || !a) return;
                                        const n = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return s(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(a, d.step),
                                            r = A(t, e, n);
                                        f(r);
                                    },
                                    [f, A, d.step],
                                ),
                                C = (0, n.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && v(r(e)),
                                            m.current && E.trigger('mouseWheel', e, h.scrollPosition, t(m.current));
                                    },
                                    [h.scrollPosition, v, E],
                                ),
                                F = ((e, t = []) => {
                                    const a = (0, n.useRef)(),
                                        r = (0, n.useCallback)((...t) => {
                                            a.current && a.current(), (a.current = e(...t));
                                        }, t);
                                    return (
                                        (0, n.useEffect)(
                                            () => () => {
                                                a.current && a.current();
                                            },
                                            [r],
                                        ),
                                        r
                                    );
                                })(
                                    () =>
                                        Se(() => {
                                            const e = m.current;
                                            e &&
                                                (f(o(e, h.scrollPosition.goal), { immediate: !0 }),
                                                E.trigger('resizeHandled'));
                                        }),
                                    [f, h.scrollPosition.goal],
                                ),
                                D = yt(() => {
                                    const e = m.current;
                                    if (!e) return;
                                    const t = o(e, h.scrollPosition.goal);
                                    t !== h.scrollPosition.goal && f(t, { immediate: !0 }),
                                        E.trigger('recalculateContent');
                                });
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('resize', F),
                                    () => {
                                        window.removeEventListener('resize', F);
                                    }
                                ),
                                [F],
                            );
                            return (0, n.useMemo)(
                                () => ({
                                    getWrapperSize: () => (_.current ? s(_.current) : void 0),
                                    getContainerSize: () => (m.current ? e(m.current) : void 0),
                                    getBounds: () =>
                                        m.current
                                            ? t(m.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: d.step.clampedArrowStepTimeout,
                                    clampPosition: o,
                                    handleMouseWheel: C,
                                    applyScroll: f,
                                    applyStepTo: v,
                                    contentRef: m,
                                    wrapperRef: _,
                                    scrollPosition: b,
                                    animationScroll: h,
                                    recalculateContent: D,
                                    events: { on: E.on, off: E.off },
                                }),
                                [h.scrollPosition, f, v, E.off, E.on, D, C, b, d.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    Pt = Nt({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? St.Next : St.Prev),
                    });
                class Tt extends r().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = q.B3.GOLD;
                        else e = q.B3.INTEGRAL;
                        const t = q.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== t ? t : null;
                    }
                }
                Tt.defaultProps = { format: 'integral' };
                const It = {
                    '--pageContentWidth': '78vw',
                    base: 'CurrentPositionPanel_base_92',
                    base__active: 'CurrentPositionPanel_base__active_8c',
                    cell: 'CurrentPositionPanel_cell_be',
                    cell__order: 'CurrentPositionPanel_cell__order_be',
                    cell__currentPosition: 'CurrentPositionPanel_cell__currentPosition_c5',
                    cell__battles: 'CurrentPositionPanel_cell__battles_8f',
                    cell__score: 'CurrentPositionPanel_cell__score_d2',
                    screwIcon: 'CurrentPositionPanel_screwIcon_8f',
                    screwIcon__left: 'CurrentPositionPanel_screwIcon__left_cb',
                    screwIcon__right: 'CurrentPositionPanel_screwIcon__right_6e',
                };
                let Lt;
                !(function (e) {
                    (e.None = 'None'), (e.Active = 'Active');
                })(Lt || (Lt = {}));
                const Mt = R.strings.comp7.leaderboard.currentPosition,
                    Ot = { [Lt.None]: 'none', [Lt.Active]: 'active' },
                    Ht = (0, G.Pi)(({ state: e, height: t, onClick: a, className: n }) => {
                        const s = _t().model.root.get(),
                            u = s.personalPosition,
                            i = s.personalBattlesCount,
                            o = s.personalScore;
                        return r().createElement(
                            'div',
                            {
                                className: f()(It.base, It[`base__${Ot[e]}`], n),
                                onClick: a,
                                style: { '--height': t ? `${t}rem` : 'auto' },
                            },
                            r().createElement('div', { className: f()(It.screwIcon, It.screwIcon__left) }),
                            {
                                [Lt.None]: r().createElement('div', { className: f()(It.cell) }, Mt.none()),
                                [Lt.Active]: r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement('div', { className: f()(It.cell, It.cell__order) }, u + 1),
                                    r().createElement(
                                        'div',
                                        { className: f()(It.cell, It.cell__currentPosition) },
                                        Mt.body(),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: f()(It.cell, It.cell__battles) },
                                        r().createElement(Tt, { value: i }),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: f()(It.cell, It.cell__score) },
                                        r().createElement(Tt, { value: o }),
                                    ),
                                ),
                            }[e],
                            r().createElement('div', { className: f()(It.screwIcon, It.screwIcon__right) }),
                        );
                    });
                function $t(e, t, a = []) {
                    const r = (0, n.useRef)(0),
                        s = (0, n.useCallback)(() => window.clearInterval(r.current), a || []);
                    (0, n.useEffect)(() => s, [s]);
                    const u = (null != a ? a : []).concat([t]);
                    return [
                        (0, n.useCallback)((a) => {
                            (r.current = window.setInterval(() => e(a, !0), t)), e(a, !1);
                        }, u),
                        s,
                    ];
                }
                const Ut = 'VerticalBar_base_f3',
                    Wt = 'VerticalBar_base__nonActive_42',
                    zt = 'VerticalBar_topButton_d7',
                    Gt = 'VerticalBar_bottomButton_06',
                    jt = 'VerticalBar_track_df',
                    qt = 'VerticalBar_thumb_32',
                    Vt = 'VerticalBar_rail_43',
                    Qt = 'disable',
                    Xt = () => {},
                    Yt = { pending: !1, offset: 0 },
                    Kt = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Zt = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    Jt = (e, t) => Math.max(20, e.offsetHeight * t),
                    ea = (0, n.memo)(({ api: e, classNames: t = {}, getStepByRailClick: a = Kt, onDrag: s = Xt }) => {
                        const u = (0, n.useRef)(null),
                            i = (0, n.useRef)(null),
                            o = (0, n.useRef)(null),
                            l = (0, n.useRef)(null),
                            c = (0, n.useRef)(null),
                            d = e.stepTimeout || 100,
                            m = (0, n.useState)(Yt),
                            _ = m[0],
                            E = m[1],
                            g = (0, n.useCallback)(
                                (e) => {
                                    E(e),
                                        c.current && s({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current });
                                },
                                [s],
                            ),
                            p = yt(() => {
                                const t = c.current,
                                    a = l.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && r && t && a)) return;
                                const s = Math.min(1, n / r);
                                return (
                                    (t.style.height = `${Jt(a, s)}px`),
                                    t.classList.add(qt),
                                    u.current &&
                                        (1 === s ? u.current.classList.add(Wt) : u.current.classList.remove(Wt)),
                                    s
                                );
                            }),
                            h = yt(() => {
                                const t = l.current,
                                    a = c.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && t && a && r)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    u = Math.min(1, n / r),
                                    d = Dt(0, 1, s / (r - n)),
                                    m = (t.offsetHeight - Jt(t, u)) * d;
                                (a.style.transform = `translateY(${0 | m}px)`),
                                    ((e) => {
                                        if (i.current && o.current && l.current && c.current) {
                                            if (0 === e)
                                                return i.current.classList.add(Qt), void o.current.classList.remove(Qt);
                                            if (
                                                ((t = l.current),
                                                (a = c.current),
                                                e - (t.offsetHeight - a.offsetHeight) >= -0.5)
                                            )
                                                return i.current.classList.remove(Qt), void o.current.classList.add(Qt);
                                            var t, a;
                                            i.current.classList.remove(Qt), o.current.classList.remove(Qt);
                                        }
                                    })(m);
                            }),
                            b = yt(() => {
                                Zt(e, () => {
                                    p(), h();
                                });
                            });
                        (0, n.useEffect)(() => Se(b)),
                            (0, n.useEffect)(() => {
                                const t = () => {
                                    Zt(e, () => {
                                        h();
                                    });
                                };
                                let a = Xt;
                                const n = () => {
                                    a(), (a = Se(b));
                                };
                                return (
                                    e.events.on('recalculateContent', b),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        a(),
                                            e.events.off('recalculateContent', b),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', n);
                                    }
                                );
                            }, [e]),
                            (0, n.useEffect)(() => {
                                if (!_.pending) return;
                                const t = (t) => {
                                        Zt(e, (a) => {
                                            const n = l.current,
                                                r = c.current,
                                                u = e.getContainerSize();
                                            if (!n || !r || !u) return;
                                            const i = t.screenY - _.offset - n.getBoundingClientRect().y,
                                                o = (i / n.offsetHeight) * u;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(a, o),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: a.scrollTop },
                                            }),
                                                s({ type: 'dragging', thumb: r, thumbOffset: i, contentOffset: o });
                                        });
                                    },
                                    a = () => {
                                        window.removeEventListener('mousemove', t), g(Yt);
                                    };
                                return (
                                    window.addEventListener('mousemove', t),
                                    window.addEventListener('mouseup', a),
                                    () => {
                                        window.removeEventListener('mousemove', t),
                                            window.removeEventListener('mouseup', a);
                                    }
                                );
                            }, [e, _.offset, _.pending, s, g]);
                        const A = $t((t) => e.applyStepTo(t), d, [e]),
                            v = A[0],
                            C = A[1];
                        (0, n.useEffect)(
                            () => (
                                document.addEventListener('mouseup', C, !0),
                                () => document.removeEventListener('mouseup', C, !0)
                            ),
                            [C],
                        );
                        const F = (e) => {
                            e.target.classList.contains(Qt) || O('highlight');
                        };
                        return r().createElement(
                            'div',
                            { className: f()(Ut, t.base), ref: u, onWheel: e.handleMouseWheel },
                            r().createElement('div', {
                                className: f()(zt, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Qt) || 0 !== e.button || (O('play'), v(St.Next));
                                },
                                ref: i,
                                onMouseEnter: F,
                            }),
                            r().createElement(
                                'div',
                                {
                                    className: f()(jt, t.track),
                                    onMouseDown: (t) => {
                                        const n = c.current;
                                        if (n && 0 === t.button)
                                            if ((O('play'), t.target === n))
                                                g({ pending: !0, offset: t.screenY - n.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    c.current &&
                                                        Zt(e, (n) => {
                                                            if (!n) return;
                                                            const r = a(e),
                                                                s = e.clampPosition(n, n.scrollTop + r * t);
                                                            e.applyScroll(s);
                                                        });
                                                })(t.screenY > n.getBoundingClientRect().y ? St.Prev : St.Next);
                                            }
                                    },
                                    ref: l,
                                    onMouseEnter: F,
                                },
                                r().createElement('div', { ref: c, className: t.thumb }),
                                r().createElement('div', { className: f()(Vt, t.rail) }),
                            ),
                            r().createElement('div', {
                                className: f()(Gt, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Qt) || 0 !== e.button || (O('play'), v(St.Prev));
                                },
                                onMouseUp: C,
                                ref: o,
                                onMouseEnter: F,
                            }),
                        );
                    }),
                    ta = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    aa = ({ className: e, classNames: t, children: a, api: s }) => (
                        (0, n.useEffect)(() => Se(s.recalculateContent)),
                        r().createElement(
                            'div',
                            { className: f()(ta.base, e), ref: s.wrapperRef, onWheel: s.handleMouseWheel },
                            r().createElement(
                                'div',
                                { className: f()(ta.content, null == t ? void 0 : t.content), ref: s.contentRef },
                                a,
                            ),
                        )
                    );
                aa.Default = ({
                    children: e,
                    api: t,
                    className: a,
                    barClassNames: s,
                    areaClassName: u,
                    scrollClassName: i,
                    scrollClassNames: o,
                    getStepByRailClick: l,
                    onDrag: c,
                }) => {
                    const d = (0, n.useMemo)(() => {
                            const e = s || {};
                            return Object.assign({}, e, { base: f()(ta.base, e.base) });
                        }, [s]),
                        m = (0, n.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                    return r().createElement(
                        'div',
                        { className: f()(ta.defaultScroll, a), onWheel: t.handleMouseWheel },
                        r().createElement(
                            'div',
                            { className: f()(ta.area, u) },
                            r().createElement(aa, { className: i, classNames: o, api: m }, e),
                        ),
                        r().createElement(ea, { getStepByRailClick: l, api: t, onDrag: c, classNames: d }),
                    );
                };
                const na = (e, t) => {
                    const a = [];
                    for (let n = 0; n < e; n++) a.push(t(n));
                    return a;
                };
                let ra, sa, ua;
                function ia(e, t) {
                    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
                }
                function oa(e, t) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const a = 0 === e.indexOf('%') ? 2 : 1;
                        return String(t[e.slice(a, -a)]);
                    });
                }
                !(function (e) {
                    (e[(e.A = 1)] = 'A'),
                        (e[(e.B = 2)] = 'B'),
                        (e[(e.C = 3)] = 'C'),
                        (e[(e.D = 4)] = 'D'),
                        (e[(e.E = 5)] = 'E');
                })(ra || (ra = {})),
                    (function (e) {
                        (e[(e.Achieved = 0)] = 'Achieved'),
                            (e[(e.Current = 1)] = 'Current'),
                            (e[(e.Inactive = 2)] = 'Inactive');
                    })(sa || (sa = {})),
                    (function (e) {
                        (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                    })(ua || (ua = {}));
                const la = (e, t, a) => {
                        if (a % 2) {
                            const a = e.pop();
                            return [...e, a + t];
                        }
                        return [...e, t];
                    },
                    ca = (e, t, a) => {
                        if (0 === a) return [t];
                        if (a % 2) return [...e, ' ' === t ? ' ' : t];
                        {
                            const a = e.pop();
                            return [...e, a + t];
                        }
                    },
                    da = (e, t, a = ua.left) => e.split(t).reduce(a === ua.left ? la : ca, []),
                    ma = (() => {
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
                        return (t) =>
                            t
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(e);
                    })(),
                    _a = ['zh_cn', 'zh_sg', 'zh_tw'],
                    Ea = (e, t = ua.left) => {
                        const a = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        return _a.includes(a)
                            ? ma(e)
                            : ((e, t = ua.left) => {
                                  let a = [];
                                  const n =
                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                      r = e.replace(/&nbsp;/g, ' ');
                                  return da(r, /( )/, t).forEach((e) => (a = a.concat(da(e, n, ua.left)))), a;
                              })(e, t);
                    },
                    ga = R.strings.comp7.division,
                    pa = { [ra.A]: 'A', [ra.B]: 'B', [ra.C]: 'C', [ra.D]: 'D', [ra.E]: 'E' },
                    ha = (e) => ga.$dyn(pa[e]);
                let ba;
                !(function (e) {
                    (e[(e.First = 6)] = 'First'),
                        (e[(e.Second = 5)] = 'Second'),
                        (e[(e.Third = 4)] = 'Third'),
                        (e[(e.Fourth = 3)] = 'Fourth'),
                        (e[(e.Fifth = 2)] = 'Fifth'),
                        (e[(e.Sixth = 1)] = 'Sixth');
                })(ba || (ba = {}));
                const Aa = {
                        [ba.First]: 'first',
                        [ba.Second]: 'second',
                        [ba.Third]: 'third',
                        [ba.Fourth]: 'fourth',
                        [ba.Fifth]: 'fifth',
                        [ba.Sixth]: 'sixth',
                    },
                    fa = (e) => Aa[e],
                    va = [ba.First, ba.Second, ba.Third, ba.Fourth],
                    Ca = (e) => va.includes(e),
                    Fa = 'RankEmblem_base_ec';
                let Da;
                !(function (e) {
                    (e[(e.x22 = 22)] = 'x22'),
                        (e[(e.x40 = 40)] = 'x40'),
                        (e[(e.x48 = 48)] = 'x48'),
                        (e[(e.x64 = 64)] = 'x64'),
                        (e[(e.x84 = 84)] = 'x84'),
                        (e[(e.x110 = 110)] = 'x110'),
                        (e[(e.x150 = 150)] = 'x150'),
                        (e[(e.x200 = 200)] = 'x200'),
                        (e[(e.x260 = 260)] = 'x260'),
                        (e[(e.x320 = 320)] = 'x320'),
                        (e[(e.x420 = 420)] = 'x420'),
                        (e[(e.x600 = 600)] = 'x600');
                })(Da || (Da = {}));
                const Ba = ({ rank: e, size: t, division: a, className: s }) => {
                        const u = (0, n.useMemo)(() => {
                            const n = R.images.gui.maps.icons.comp7.ranks.$num(t),
                                r = Ca(e) && void 0 !== a ? `_${ha(a)}` : '';
                            return { backgroundImage: `url(${n.$dyn(`${fa(e)}${r}`)})`, '--imageSize': `${t}rem` };
                        }, [e, t, a]);
                        return r().createElement('div', { className: f()(Fa, s), style: u });
                    },
                    wa = {
                        [ba.First]: 'first',
                        [ba.Second]: 'second',
                        [ba.Third]: 'third',
                        [ba.Fourth]: 'fourth',
                        [ba.Fifth]: 'fifth',
                        [ba.Sixth]: 'sixth',
                    },
                    Ra = (e, t) => `${e.$dyn(wa[t])}`,
                    ya = (e) => Ra(R.strings.comp7.rank, e),
                    xa = (e) => oa(R.strings.comp7.rank.text(), { rank: ya(e) }),
                    Sa = 'RowsDivider_base_0a',
                    ka = 'RowsDivider_rankText_96',
                    Na = (0, G.Pi)(({ index: e, className: t, onClick: a }) => {
                        const n = _t().model.computes.leaderboardItem(e).rank;
                        return r().createElement(
                            'div',
                            { className: f()(Sa, t), onClick: a },
                            r().createElement(Ba, { rank: n, size: Da.x64 }),
                            r().createElement('div', { className: ka }, xa(n)),
                        );
                    }),
                    Pa = 'Header_base_83',
                    Ta = 'Header_separator_14',
                    Ia = 'Header_cell_0e',
                    La = 'Header_cell__order_7d',
                    Ma = 'Header_cell__player_c5',
                    Oa = 'Header_cell__score_3e',
                    Ha = R.strings.comp7.leaderboard.table.header,
                    $a = R.strings.comp7.leaderboard.table.tooltip,
                    Ua = () =>
                        r().createElement(
                            'div',
                            { className: Pa },
                            r().createElement(
                                qe,
                                { header: $a.order.header(), body: $a.order.body() },
                                r().createElement('div', { className: f()(Ia, La) }, Ha.order()),
                            ),
                            r().createElement('div', { className: Ta }),
                            r().createElement(
                                qe,
                                { header: $a.player.header(), body: $a.player.body() },
                                r().createElement('div', { className: f()(Ia, Ma) }, Ha.player()),
                            ),
                            r().createElement('div', { className: Ta }),
                            r().createElement(
                                qe,
                                { header: $a.battlesCount.header(), body: $a.battlesCount.body() },
                                r().createElement('div', { className: f()(Ia, Oa) }, Ha.battlesCount()),
                            ),
                            r().createElement('div', { className: Ta }),
                            r().createElement(
                                qe,
                                { header: $a.score.header(), body: $a.score.body() },
                                r().createElement('div', { className: f()(Ia, Oa) }, Ha.score()),
                            ),
                        );
                let Wa;
                !(function (e) {
                    (e.default = 'default'), (e.x48 = 'x48'), (e.x80 = 'x80'), (e.x220 = 'x220');
                })(Wa || (Wa = {}));
                const za = 'TextOverflow_base_3b',
                    Ga = ({ content: e, classMix: t }) => {
                        const a = (0, n.useRef)(null),
                            s = (0, n.useState)(!0),
                            u = s[0],
                            i = s[1];
                        return (
                            (0, n.useEffect)(() =>
                                Se(() => {
                                    const e = a.current;
                                    e && e.offsetWidth >= e.scrollWidth && i(!1);
                                }),
                            ),
                            r().createElement(
                                qe,
                                { isEnabled: u, body: e },
                                r().createElement('div', { ref: a, className: f()(za, t) }, e),
                            )
                        );
                    },
                    ja = {
                        base: 'Badge_base_ac',
                        base__default: 'Badge_base__default_c9',
                        base__x48: 'Badge_base__x48_e4',
                    },
                    qa = { [Wa.default]: 'c_24x24', [Wa.x48]: 'c_48x48', [Wa.x80]: 'c_80x80', [Wa.x220]: 'c_220x220' },
                    Va = ({ badgeID: e, size: t = Wa.default, className: a }) => {
                        const n = R.images.gui.maps.icons.library.badges.$dyn(qa[t]);
                        return r().createElement('div', {
                            className: f()(ja.base, ja[`base__${t}`], a),
                            style: { backgroundImage: `url(${n.$dyn(`badge_${e}`)})` },
                        });
                    },
                    Qa = {
                        base: 'PlayerNickname_base_32',
                        userName: 'PlayerNickname_userName_cc',
                        igrIcon: 'PlayerNickname_igrIcon_34',
                        base__default: 'PlayerNickname_base__default_8d',
                        base__x48: 'PlayerNickname_base__x48_84',
                        suffixBadgeWrapper: 'PlayerNickname_suffixBadgeWrapper_cc',
                        suffixBadgeStripe: 'PlayerNickname_suffixBadgeStripe_8a',
                        base__inverted: 'PlayerNickname_base__inverted_34',
                        suffixBadge: 'PlayerNickname_suffixBadge_bd',
                        anonymizedIcon: 'PlayerNickname_anonymizedIcon_80',
                    },
                    Xa = (0, n.memo)(({ tooltipHeaderName: e }) => {
                        const t = (0, n.useMemo)(
                                () => oa(R.strings.tooltips.anonymizer.teamStats.header(), { name: e }),
                                [e],
                            ),
                            a = R.strings.tooltips.anonymizer.teamStats.body();
                        return r().createElement(
                            qe,
                            { header: t, body: a },
                            r().createElement('div', { className: Qa.anonymizedIcon }),
                        );
                    });
                function Ya() {
                    return (
                        (Ya =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Ya.apply(this, arguments)
                    );
                }
                const Ka = { [Wa.default]: 'c_64x24', [Wa.x48]: 'c_68x28' },
                    Za = { [Wa.default]: 'c_48x48', [Wa.x48]: 'c_48x48' },
                    Ja = ({
                        userName: e,
                        clanAbbrev: t = '',
                        igrType: a = 0,
                        badge: s = { badgeID: '' },
                        suffixBadge: u = { badgeID: '' },
                        isInverted: i = !1,
                        isFakeNameVisible: o = !1,
                        isAnonymizerShown: l = !1,
                        hiddenUserName: c = '',
                        size: d = Wa.default,
                        userNameClassName: m = '',
                        clanTagClassName: _ = '',
                    }) => {
                        const E = R.images.gui.maps.icons.library.badges.strips.$dyn(Ka[d]),
                            g = (0, n.useMemo)(
                                () => ({ backgroundImage: `url(${E.$dyn(`strip_${u.badgeID}`)})` }),
                                [u, E],
                            ),
                            p = R.images.gui.maps.icons.library.badges.$dyn(Za[d]),
                            h = (0, n.useMemo)(
                                () => ({ backgroundImage: `url(${p.$dyn(`badge_${u.badgeID}`)})` }),
                                [u, p],
                            ),
                            b = t ? `[${t}]` : '',
                            A = f()(Qa.base, Qa[`base__${d}`], i && Qa.base__inverted),
                            v = f()(Qa.userName, m),
                            C = f()(Qa.clanTag, _),
                            F = e !== c,
                            D = o ? `${c}${b}` : c,
                            B = Boolean(s.badgeID) && r().createElement(Va, Ya({ size: d }, s, { key: 'badge' })),
                            w = Date.now(),
                            y = [
                                B,
                                [
                                    r().createElement(
                                        'div',
                                        { className: v, key: 'userName' },
                                        r().createElement(Ga, { content: e, key: w }),
                                    ),
                                    !o && Boolean(b) && r().createElement('div', { className: C, key: 'clanTag' }, b),
                                ],
                                0 !== a && r().createElement('div', { className: Qa.igrIcon, key: 'igrType' }),
                                Boolean(u.badgeID) &&
                                    r().createElement(
                                        'div',
                                        { className: Qa.suffixBadgeWrapper, key: 'suffixBadge' },
                                        r().createElement('div', { className: Qa.suffixBadgeStripe, style: g }),
                                        r().createElement('div', { className: Qa.suffixBadge, style: h }),
                                    ),
                                l && F && r().createElement(Xa, { tooltipHeaderName: D, key: 'anonymizer' }),
                            ];
                        return r().createElement('div', { className: A }, i ? y.reverse() : y);
                    };
                let en;
                !(function (e) {
                    (e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH');
                })(en || (en = {}));
                const tn = ({
                        children: e,
                        contentID: t,
                        decoratorID: a = 0,
                        targetId: r = 0,
                        args: s,
                        isEnabled: u = !0,
                        onMouseDown: i,
                    }) => {
                        const o = (0, n.useCallback)(() => {
                                (0, q.c9)(q.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: a,
                                    targetID: r,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: s,
                                }),
                                    H.playYes();
                            }, [s, t, a, r]),
                            l = (0, n.useCallback)(() => {
                                (0, q.c9)(q.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: a,
                                    targetID: r,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [t, a, r]),
                            c = (0, n.useCallback)(
                                (e) => {
                                    i && i(e), ((e) => e.button === en.RIGHT)(e) && o();
                                },
                                [i, o],
                            );
                        return (
                            (0, n.useEffect)(() => {
                                !1 === u && l();
                            }, [u, l]),
                            u ? (0, n.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    an = ['children'];
                function nn() {
                    return (
                        (nn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        nn.apply(this, arguments)
                    );
                }
                const rn = (e) => {
                        let t = e.children,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, an);
                        return r().createElement(
                            tn,
                            nn({}, a, { contentID: R.views.common.BackportContextMenu('resId') }),
                            t,
                        );
                    },
                    sn = ({ children: e, isEnabled: t, contextMenuArgs: a }) =>
                        t ? r().createElement(rn, { args: a }, e) : e,
                    un = {
                        base: 'Row_base_fc',
                        base__personal: 'Row_base__personal_1c',
                        order: 'Row_order_30',
                        order__first: 'Row_order__first_53',
                        order__second: 'Row_order__second_cb',
                        order__third: 'Row_order__third_c6',
                        playerContainer: 'Row_playerContainer_9e',
                        player: 'Row_player_f9',
                        clanTag: 'Row_clanTag_73',
                        battles: 'Row_battles_61',
                        score: 'Row_score_55',
                    },
                    on = R.strings.comp7.leaderboard.table.tooltip,
                    ln = { 0: 'first', 1: 'second', 2: 'third' },
                    cn = (0, G.Pi)(({ index: e, className: t }) => {
                        const a = _t().model,
                            n = a.computes.leaderboardItem(e),
                            s = n.position,
                            u = n.battlesCount,
                            i = n.userName,
                            o = n.clanTag,
                            l = n.clanTagColor,
                            c = n.score,
                            d = n.spaID,
                            m = a.computes.isPersonalRow(e),
                            _ = a.computes.hasPositionIcon(e);
                        return r().createElement(
                            'div',
                            { className: f()(un.base, m && un.base__personal, t), style: { '--clanTagColor': l } },
                            r().createElement(
                                qe,
                                { header: on.order.header(), body: on.order.body() },
                                r().createElement(
                                    'div',
                                    { className: f()(un.order, _ && un[`order__${ln[s]}`]) },
                                    !_ && s + 1,
                                ),
                            ),
                            r().createElement(
                                sn,
                                { contextMenuArgs: { spaID: d, userName: i }, isEnabled: !m },
                                r().createElement(
                                    'div',
                                    { className: un.playerContainer },
                                    r().createElement(
                                        qe,
                                        { header: on.player.header(), body: on.player.body() },
                                        r().createElement(
                                            'div',
                                            { className: un.player },
                                            r().createElement(Ja, {
                                                userName: i,
                                                clanAbbrev: o,
                                                clanTagClassName: l && un.clanTag,
                                            }),
                                        ),
                                    ),
                                ),
                            ),
                            r().createElement(
                                qe,
                                { header: on.battlesCount.header(), body: on.battlesCount.body() },
                                r().createElement(
                                    'div',
                                    { className: un.battles },
                                    r().createElement(Tt, { value: u }),
                                ),
                            ),
                            r().createElement(
                                qe,
                                { header: on.score.header(), body: on.score.body() },
                                r().createElement('div', { className: un.score }, r().createElement(Tt, { value: c })),
                            ),
                        );
                    }),
                    dn = 'Leaderboard_base_ec',
                    mn = 'Leaderboard_content_a5',
                    _n = 'Leaderboard_shadowsContainer_bc',
                    En = 'Leaderboard_shadowsContainer__bottom_b4',
                    gn = 'Leaderboard_shadow_3f',
                    pn = 'Leaderboard_shadow__left_ee',
                    hn = 'Leaderboard_shadow__center_37',
                    bn = 'Leaderboard_shadow__right_ee',
                    An = 'Leaderboard_area_c7',
                    fn = 'Leaderboard_row_06',
                    vn = 'Leaderboard_rowsDivider_2c',
                    Cn = { base: 'Leaderboard_bar_69' },
                    Fn = (0, G.Pi)(({ limit: e, api: t, rowHeight: a = 0, rowsDividerHeight: n = 0 }) => {
                        const s = _t().model,
                            u = s.computes.hasRowsDivider(),
                            i = s.computes.rowsDividerPosition() % e;
                        return r().createElement(
                            'div',
                            {
                                className: dn,
                                style: { '--rowHeight': a ? `${a}rem` : 'auto', '--rowsDividerHeight': `${n}rem` },
                            },
                            r().createElement(Ua, null),
                            r().createElement(
                                'div',
                                { className: mn },
                                r().createElement(
                                    'div',
                                    { className: _n },
                                    r().createElement('div', { className: f()(gn, pn) }),
                                    r().createElement('div', { className: f()(gn, hn) }),
                                    r().createElement('div', { className: f()(gn, bn) }),
                                ),
                                r().createElement(
                                    aa,
                                    { api: t, className: An },
                                    na(s.computes.leaderboardItemsLength(), (e) =>
                                        r().createElement(
                                            r().Fragment,
                                            { key: e },
                                            u && e === i && r().createElement(Na, { index: e, className: vn }),
                                            r().createElement(cn, { className: fn, index: e }),
                                        ),
                                    ),
                                ),
                                r().createElement(
                                    'div',
                                    { className: f()(_n, En) },
                                    r().createElement('div', { className: f()(gn, pn) }),
                                    r().createElement('div', { className: f()(gn, hn) }),
                                    r().createElement('div', { className: f()(gn, bn) }),
                                ),
                                r().createElement(ea, { api: t, classNames: Cn }),
                            ),
                        );
                    }),
                    Dn = {
                        base: 'Pagination_base_49',
                        pageButton: 'Pagination_pageButton_27',
                        pageButton__active: 'Pagination_pageButton__active_0b',
                        pageButton__inactive: 'Pagination_pageButton__inactive_4c',
                        pageButton__disabled: 'Pagination_pageButton__disabled_e4',
                        pageValue: 'Pagination_pageValue_b2',
                        control: 'Pagination_control_4f',
                        control__active: 'Pagination_control__active_25',
                        control__prev: 'Pagination_control__prev_8e',
                        control__next: 'Pagination_control__next_86',
                    };
                let Bn;
                !(function (e) {
                    (e.Active = 'active'), (e.Inactive = 'inactive'), (e.Disabled = 'disabled');
                })(Bn || (Bn = {}));
                const wn = R.strings.comp7.pagination,
                    Rn = Math.trunc(4),
                    yn = ({ pagesAmount: e, activePage: t, className: a, onPageClick: n, onControlEvent: s }) => {
                        const u = t > 1,
                            i = t < e,
                            o = e < 9 ? e : 9,
                            l = (e) => () => {
                                null == n || n(e);
                            },
                            c = (e) => () => {
                                null == s || s(e);
                            };
                        return r().createElement(
                            'div',
                            { className: f()(Dn.base, a) },
                            r().createElement(
                                'div',
                                {
                                    className: f()(Dn.control, Dn.control__prev, u && Dn.control__active),
                                    onClick: u ? c('prevClick') : void 0,
                                },
                                wn.prev(),
                            ),
                            na(o, (a) => {
                                const n = ((e, t, a) => {
                                        const n = t > Rn + 1,
                                            r = a > 9 && t + Rn < a;
                                        return a <= 9
                                            ? e + 1
                                            : 0 === e
                                              ? 1
                                              : (1 === e && n) || (7 === e && r)
                                                ? wn.dots()
                                                : 8 === e
                                                  ? a
                                                  : n && !r
                                                    ? a - 8 + e
                                                    : !n && r
                                                      ? e + 1
                                                      : e - Rn + t;
                                    })(a, t, e),
                                    s = ((e, t) =>
                                        Number.isInteger(e) ? (t === e ? Bn.Active : Bn.Inactive) : Bn.Disabled)(n, t);
                                return r().createElement(
                                    'div',
                                    {
                                        key: a,
                                        className: f()(Dn.pageButton, Dn[`pageButton__${s}`]),
                                        onClick: s !== Bn.Disabled && 'number' == typeof n ? l(n) : void 0,
                                    },
                                    r().createElement('div', { className: Dn.pageValue }, n),
                                );
                            }),
                            r().createElement(
                                'div',
                                {
                                    className: f()(Dn.control, Dn.control__next, i && Dn.control__active),
                                    onClick: i ? c('nextClick') : void 0,
                                },
                                wn.next(),
                            ),
                        );
                    },
                    xn = 'HasRecordsState_base_bb',
                    Sn = 'HasRecordsState_base__withoutPagination_ad',
                    kn = 'HasRecordsState_tableContainer_02',
                    Nn = 'HasRecordsState_pagination_cb',
                    Pn = {
                        settings: Object.assign({}, kt, {
                            animationConfig: Object.assign({}, kt.animationConfig, { round: 1 }),
                        }),
                    },
                    Tn = (0, G.Pi)(
                        ({
                            limit: e,
                            onCurrentRankTabChange: t,
                            positionToScroll: a,
                            onPositionToScrollChange: s,
                            className: u,
                        }) => {
                            const i = _t(),
                                o = i.model,
                                l = i.controls,
                                c = o.root.get(),
                                d = c.personalPosition,
                                m = c.lastBestUserPosition,
                                _ = Pt(Pn),
                                E = _.animationScroll.scrollPosition,
                                g = _.applyScroll,
                                p = _.events,
                                h = _.getBounds,
                                b = o.computes.isDefaultPersonalPosition() ? Lt.None : Lt.Active,
                                A = o.computes.pages(e),
                                v = o.computes.pagePositions(),
                                C = o.computes.rowsDividerPosition(),
                                F = o.computes.hasRowsDivider(),
                                D = ((e, t) => viewEnv.remToPx(44) * ((e + 1) % t))(m, e);
                            (0, n.useEffect)(
                                () =>
                                    Se(() => {
                                        if (void 0 !== a) {
                                            switch (a.type) {
                                                case 'rank': {
                                                    const e = a.rank === Ft.Fifth ? D : 0;
                                                    g(e);
                                                    break;
                                                }
                                                case 'personalPosition': {
                                                    const t = viewEnv.remToPx(44) * (d % e),
                                                        a = F && d > m ? t + viewEnv.remToPx(70) : t;
                                                    g(a);
                                                    break;
                                                }
                                                case 'page':
                                                    g(0);
                                            }
                                            s(void 0);
                                        }
                                    }),
                                [g, F, m, e, d, a, D, s],
                            );
                            const B = (0, n.useCallback)(() => {
                                const e = v.first > m ? Ft.Fifth : Ft.Sixth;
                                t(e);
                            }, [v.first, m, t]);
                            (0, n.useEffect)(() => {
                                B();
                            }, [B]),
                                (0, n.useEffect)(() => {
                                    const e = () => {
                                        if (F && C > v.first) {
                                            const e = h()[1],
                                                a = 0 !== e && E.goal === e && D >= e;
                                            t(E.goal >= D || a ? Ft.Fifth : Ft.Sixth);
                                        } else d >= v.first && d <= v.last ? t(d > m ? Ft.Fifth : Ft.Sixth) : B();
                                    };
                                    return p.on('change', e), () => p.off('change', e);
                                }, [p, v.first, F, m, v.last, e, d, D, C, E.goal, t, B, h]);
                            const w = (0, n.useCallback)(() => {
                                    b !== Lt.None &&
                                        (H.playYes(),
                                        l.getTableRecords(e, d - (d % e)),
                                        s({ type: 'personalPosition' }));
                                }, [l, e, b, d, s]),
                                R = (0, n.useCallback)(
                                    (t) => {
                                        H.playYes(), l.getTableRecords(e, (t - 1) * e), s({ type: 'page' });
                                    },
                                    [l, e, s],
                                ),
                                y = (0, n.useCallback)(
                                    (t) => {
                                        H.playYes();
                                        const a = (() => {
                                            switch (t) {
                                                case 'prevClick':
                                                    return A.active - 1;
                                                case 'nextClick':
                                                    return A.active + 1;
                                                default:
                                                    return 1;
                                            }
                                        })();
                                        l.getTableRecords(e, (a - 1) * e), s({ type: 'page' });
                                    },
                                    [A.active, l, e, s],
                                );
                            return r().createElement(
                                'div',
                                { className: f()(xn, !A.hasPagination && Sn, u) },
                                r().createElement(
                                    'div',
                                    { className: kn },
                                    r().createElement(Fn, { limit: e, api: _, rowHeight: 44, rowsDividerHeight: 70 }),
                                ),
                                r().createElement(Ht, { state: b, onClick: w, height: 44 }),
                                A.hasPagination &&
                                    r().createElement(yn, {
                                        pagesAmount: A.amount,
                                        activePage: A.active,
                                        className: Nn,
                                        onPageClick: R,
                                        onControlEvent: y,
                                    }),
                            );
                        },
                    ),
                    In = R.views.lobby.comp7.tooltips,
                    Ln = ['rank', 'divisions', 'from', 'to', 'topPercentage', 'children', 'className'];
                function Mn() {
                    return (
                        (Mn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Mn.apply(this, arguments)
                    );
                }
                const On = (e) => {
                        let t = e.rank,
                            a = e.divisions,
                            n = e.from,
                            s = e.to,
                            u = e.topPercentage,
                            i = e.children,
                            o = e.className,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, Ln);
                        const c = (({ rank: e, topPercentage: t, from: a, to: n, divisions: r = '' }) => {
                            switch (e) {
                                case ba.Sixth:
                                    return { contentId: In.SixthRankTooltip('resId'), args: { topPercentage: t } };
                                case ba.Fifth:
                                    return { contentId: In.FifthRankTooltip('resId'), args: { from: a } };
                                default:
                                    return {
                                        contentId: In.GeneralRankTooltip('resId'),
                                        args: { rank: e, divisions: r, from: a, to: n },
                                    };
                            }
                        })({ rank: t, divisions: a, from: n, to: s, topPercentage: u });
                        return r().createElement(We, Mn({}, c, l), r().createElement('div', { className: o }, i));
                    },
                    Hn = {
                        '--pageContentWidth': '78vw',
                        base: 'RankTabs_base_c4',
                        line: 'RankTabs_line_0e',
                        line__toRight: 'RankTabs_line__toRight_43',
                        line__toLeft: 'RankTabs_line__toLeft_cd',
                        ranksContainer: 'RankTabs_ranksContainer_86',
                        dividersDot: 'RankTabs_dividersDot_b9',
                        rank: 'RankTabs_rank_6f',
                        rankEmblem: 'RankTabs_rankEmblem_d6',
                        rank__disabled: 'RankTabs_rank__disabled_55',
                        label: 'RankTabs_label_cc',
                        rank__active: 'RankTabs_rank__active_38',
                        rankTabHighlight: 'RankTabs_rankTabHighlight_c1',
                        fadeIn: 'RankTabs_fadeIn_42',
                        fadeInThreeQuarters: 'RankTabs_fadeInThreeQuarters_0c',
                        fadeInHalf: 'RankTabs_fadeInHalf_ca',
                        fadeOut: 'RankTabs_fadeOut_3e',
                        fadeInWithScale: 'RankTabs_fadeInWithScale_d0',
                        slideUp: 'RankTabs_slideUp_d1',
                        scale: 'RankTabs_scale_a5',
                        raysAppearance: 'RankTabs_raysAppearance_39',
                        rotate: 'RankTabs_rotate_b0',
                        'reverse-rotate': 'RankTabs_reverse-rotate_85',
                        glowAppearance: 'RankTabs_glowAppearance_c7',
                        highlightAppearance: 'RankTabs_highlightAppearance_67',
                        blink: 'RankTabs_blink_8a',
                        slideUpIn: 'RankTabs_slideUpIn_c8',
                    };
                let $n;
                !(function (e) {
                    (e.Active = 'active'), (e.Inactive = 'inactive'), (e.Disabled = 'disabled');
                })($n || ($n = {}));
                const Un = ({ tabs: e, className: t, onTabClick: a }) => {
                        const n = (e) => () => {
                            null == a || a(e);
                        };
                        return r().createElement(
                            'div',
                            { className: f()(Hn.base, t) },
                            r().createElement('div', { className: Hn.dividersDot }),
                            r().createElement('div', { className: f()(Hn.line, Hn.line__toRight) }),
                            r().createElement(
                                'div',
                                { className: Hn.ranksContainer },
                                e.map(({ rank: e, state: t, args: a = {} }) => {
                                    const s = t !== $n.Disabled;
                                    return r().createElement(
                                        'div',
                                        { className: f()(Hn.rank, Hn[`rank__${t}`]), key: e },
                                        r().createElement(
                                            On,
                                            {
                                                rank: e,
                                                from: null == a ? void 0 : a.from,
                                                topPercentage: null == a ? void 0 : a.topPercentage,
                                                onClick: s ? n(e) : void 0,
                                                onMouseEnter: s ? H.playHighlight : void 0,
                                            },
                                            r().createElement('div', { className: Hn.rankTabHighlight }),
                                            r().createElement(Ba, { rank: e, size: Da.x64, className: Hn.rankEmblem }),
                                        ),
                                        t !== $n.Disabled && r().createElement('div', { className: Hn.label }, xa(e)),
                                    );
                                }),
                            ),
                            r().createElement('div', { className: f()(Hn.line, Hn.line__toLeft) }),
                        );
                    },
                    Wn = 'HasRecordsStateContainer_base_ee',
                    zn = 'HasRecordsStateContainer_content_b4',
                    Gn = ({ rank: e, lastBestUserPosition: t, currentRankTab: a, recordsCount: n }) =>
                        (e === Ft.Sixth && -1 === t) || 0 === n ? $n.Disabled : e === a ? $n.Active : $n.Inactive,
                    jn = [Ft.Fifth, Ft.Sixth],
                    qn = (0, G.Pi)(({ className: e }) => {
                        const t = _t(),
                            a = t.model,
                            s = t.controls,
                            u = a.root.get(),
                            i = u.lastBestUserPosition,
                            o = u.recordsCount,
                            l = u.from,
                            c = u.topPercentage,
                            d = a.computes.hasLastBestUserPosition(),
                            m = a.computes.rowsDividerPosition(),
                            _ = (0, n.useState)(a.computes.firstItemRank()),
                            E = _[0],
                            g = _[1],
                            p = (0, n.useState)(),
                            h = p[0],
                            b = p[1],
                            A = jn.map((e) => ({
                                rank: e,
                                state: Gn({ rank: e, lastBestUserPosition: i, currentRankTab: E, recordsCount: o }),
                                args: { from: l, topPercentage: c },
                            })),
                            v = (0, n.useCallback)(
                                (e) => {
                                    const t = e === Ft.Fifth && d ? m - (m % 50) : 0;
                                    H.playClick(), s.getTableRecords(50, t), b({ type: 'rank', rank: e });
                                },
                                [s, m, d, 50],
                            );
                        return r().createElement(
                            'div',
                            { className: f()(Wn, e) },
                            r().createElement(Un, { tabs: A, onTabClick: v }),
                            r().createElement(Tn, {
                                limit: 50,
                                positionToScroll: h,
                                onCurrentRankTabChange: g,
                                onPositionToScrollChange: b,
                                className: zn,
                            }),
                        );
                    }),
                    Vn = 'FormatText_base_d0',
                    Qn = ({ binding: e, text: t = '', classMix: a, alignment: s = ua.left }) =>
                        null === t
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : r().createElement(
                                  n.Fragment,
                                  null,
                                  t.split('\n').map((t, u) =>
                                      r().createElement(
                                          'div',
                                          { className: f()(Vn, a), key: `${t}-${u}` },
                                          ((e, t, a) =>
                                              e
                                                  .split(/%\((.*?)\)(?:[sd])?/g)
                                                  .map((e) => (a && e in a ? a[e] : Ea(e, t))))(t, s, e).map((e, t) =>
                                              r().createElement(n.Fragment, { key: `${t}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              ),
                    Xn = {
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
                    Yn = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    Kn = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    Zn = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    Jn = (0, n.memo)(({ text: e, binding: t, classMix: a }) => {
                        const s = (0, n.useCallback)((e) => ({ color: `#${e}` }), []),
                            u = (0, n.useMemo)(() => t || {}, [t]);
                        let i = Yn.exec(e),
                            o = e,
                            l = 0;
                        for (; i; ) {
                            const a = i[0],
                                n = Kn.exec(a),
                                c = Zn.exec(a),
                                d = i[1];
                            if (n && c) {
                                const e = n[0],
                                    i = e + l++ + e;
                                (o = o.replace(a, `%(${i})`)),
                                    (u[i] = Xn[e]
                                        ? r().createElement(
                                              'span',
                                              { className: Xn[e] },
                                              r().createElement(Qn, { text: d, binding: t }),
                                          )
                                        : r().createElement(
                                              'span',
                                              { style: s(e) },
                                              r().createElement(Qn, { text: d, binding: t }),
                                          ));
                            }
                            i = Yn.exec(e);
                        }
                        return r().createElement(Qn, { text: o, classMix: a, binding: u });
                    }),
                    er = 'NoRecordsState_base_9b',
                    tr = 'NoRecordsState_imageContainer_13',
                    ar = 'NoRecordsState_image_fe',
                    nr = 'NoRecordsState_title_f4',
                    rr = 'NoRecordsState_subtitle_5b',
                    sr = R.strings.comp7.leaderboard.noRecords,
                    ur = (0, G.Pi)(({ className: e }) => {
                        const t = _t().model.root.get().from;
                        return r().createElement(
                            'div',
                            { className: f()(er, e) },
                            r().createElement('div', { className: tr }, r().createElement('div', { className: ar })),
                            r().createElement('div', { className: nr }, sr.title()),
                            r().createElement(Jn, {
                                text: sr.subtitle(),
                                binding: { pointsCount: r().createElement(Tt, { value: t }) },
                                classMix: rr,
                            }),
                        );
                    });
                let ir;
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
                })(ir || (ir = {}));
                const or = 60,
                    lr = 3600,
                    cr = 86400;
                Date.now();
                const dr = (0, n.memo)(({ datetime: e, format: t = ir.SHORT_DATE, localize: a = !0 }) =>
                        ((e, t, a) => {
                            switch (t) {
                                case ir.SHORT_DATE:
                                    return a
                                        ? q.Z5.getDateFormat(e, q.kH.SHORT_FORMAT)
                                        : q.cy.getTimeFormat('%d.%m.%y', e, !0);
                                case ir.SHORT_TIME:
                                    return a
                                        ? q.Z5.getTimeFormat(e, q.lf.SHORT_FORMAT)
                                        : q.cy.getTimeFormat('%I:%M %p', e, !0);
                                case ir.SHORT_DATE_TIME:
                                    return a
                                        ? `${q.Z5.getDateFormat(e, q.kH.SHORT_FORMAT)}, ${q.Z5.getTimeFormat(e, q.lf.SHORT_FORMAT)}`
                                        : q.cy.getTimeFormat('%d.%m.%y, %I:%M %p', e, !0);
                                case ir.FULL_DATE:
                                    return a
                                        ? q.Z5.getDateFormat(e, q.kH.LONG_FORMAT)
                                        : q.cy.getTimeFormat('%B %d, %Y', e, !0);
                                case ir.FULL_DATE_TIME:
                                    return a
                                        ? `${q.Z5.getDateFormat(e, q.kH.LONG_FORMAT)}, ${q.Z5.getTimeFormat(e, q.lf.SHORT_FORMAT)}`
                                        : q.cy.getTimeFormat('%B %d, %Y, %I:%M %p', e, !0);
                                case ir.MONTH:
                                    return q.cy.getTimeFormat('%B', e, !0);
                                case ir.MONTH_DATE:
                                    return q.cy.getTimeFormat('%B %e', e, !0);
                                case ir.DATE_MONTH:
                                    return q.cy.getTimeFormat('%e %B', e, !0);
                                case ir.MONTH_YEAR:
                                    return q.cy.getTimeFormat('%B %Y', e, !0);
                                case ir.WEEK_DAY:
                                    return q.cy.getTimeFormat('%A', e, !0);
                                case ir.WEEK_DAY_TIME:
                                    return a
                                        ? `${q.cy.getTimeFormat('%A', e, !0)} ${q.Z5.getTimeFormat(e, q.lf.SHORT_FORMAT)}`
                                        : q.cy.getTimeFormat('%A, %I:%M %p', e, !0);
                                case ir.YEAR:
                                    return q.cy.getTimeFormat('%Y', e, !0);
                                case ir.DATE_YEAR:
                                    return q.cy.getTimeFormat('%d, %Y', e, !0);
                            }
                        })(e, t, a),
                    ),
                    mr = oa(R.strings.comp7.lastUpdateNote.lastBestUserPoints.description(), { count: 15 }),
                    _r = 'LastUpdateNote_base_7f',
                    Er = 'LastUpdateNote_infoIcon_5c',
                    gr = ['timestamp', 'className', 'classNames', 'dateTimeFormat', 'contentId', 'tooltipDescription'];
                function pr() {
                    return (
                        (pr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        pr.apply(this, arguments)
                    );
                }
                const hr = R.strings.comp7.lastUpdateNote,
                    br = (e) => {
                        let t = e.timestamp,
                            a = e.className,
                            n = e.classNames,
                            s = e.dateTimeFormat,
                            u = void 0 === s ? ir.SHORT_TIME : s,
                            i = e.contentId,
                            o = void 0 === i ? R.views.lobby.comp7.tooltips.LastUpdateTooltip('resId') : i,
                            l = e.tooltipDescription,
                            c = void 0 === l ? mr : l,
                            d = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, gr);
                        return r().createElement(
                            'div',
                            { className: f()(_r, a) },
                            r().createElement(Qn, {
                                text: hr.info(),
                                binding: { date: r().createElement(dr, { datetime: t, format: u }) },
                            }),
                            r().createElement(
                                We,
                                pr({ ignoreShowDelay: !0, contentId: o, args: { description: c } }, d),
                                r().createElement('div', { className: f()(Er, null == n ? void 0 : n.icon) }),
                            ),
                        );
                    },
                    Ar = (e, t) => {
                        let a;
                        const n = setTimeout(() => {
                            a = e();
                        }, t);
                        return () => {
                            'function' == typeof a && a(), clearTimeout(n);
                        };
                    };
                const fr = ['children'];
                function vr() {
                    return (
                        (vr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        vr.apply(this, arguments)
                    );
                }
                const Cr = (e) => {
                        let t = e.children,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, fr);
                        return r().createElement(
                            We,
                            vr(
                                {
                                    contentId:
                                        R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                            'resId',
                                        ),
                                    ignoreShowDelay: !0,
                                },
                                a,
                            ),
                            t,
                        );
                    },
                    Fr = (e) => {
                        const t = Math.floor(e);
                        return {
                            totalSecondsLeft: t,
                            seconds: Math.floor(t % 60),
                            minutes: Math.floor(t / 60) % 60,
                            hours: Math.floor((t / 3600) % 24),
                            totalDays: Math.floor(t / 86400),
                        };
                    },
                    Dr = 'ActiveSeasonState_base_55',
                    Br = 'ActiveSeasonState_calendarIcon_df',
                    wr = 'ActiveSeasonState_divider_5b',
                    Rr = R.strings.comp7.season,
                    yr = (e, t) => ({
                        startDate: r().createElement(dr, { datetime: e, format: ir.SHORT_DATE }),
                        endDate: r().createElement(dr, { datetime: t, format: ir.SHORT_DATE }),
                    }),
                    xr = (e, t, a) => {
                        const n = t - a,
                            s = ((e, t) => Fr(e - t))(t, a);
                        return n >= 604800
                            ? r().createElement(Qn, { text: Rr.range(), binding: yr(e, t) })
                            : n >= cr
                              ? r().createElement(Qn, { text: Rr.daysLeft(), binding: s })
                              : n >= lr
                                ? r().createElement(Qn, { text: Rr.hoursLeft(), binding: s })
                                : n >= or
                                  ? r().createElement(Qn, { text: Rr.minutesLeft(), binding: s })
                                  : n >= 1
                                    ? r().createElement(Qn, { text: Rr.secondsLeft(), binding: s })
                                    : void 0;
                    },
                    Sr = ({
                        startTimestamp: e,
                        endTimestamp: t,
                        currentTimestamp: a,
                        tooltipId: n = '',
                        hasSeasonName: s = !0,
                    }) =>
                        r().createElement(
                            Cr,
                            { args: { tooltipId: n }, isEnabled: Boolean(n) },
                            r().createElement(
                                'div',
                                { className: Dr },
                                r().createElement('div', { className: Br }),
                                s &&
                                    r().createElement(
                                        r().Fragment,
                                        null,
                                        Rr.name(),
                                        r().createElement('div', { className: wr }),
                                    ),
                                xr(e, t, a),
                            ),
                        ),
                    kr = 'ScheduleSubheading_base_f7',
                    Nr = (0, G.Pi)(({ className: e, hasSeasonName: t = !0 }) => {
                        const a = le(),
                            s = a.model,
                            u = a.controls,
                            i = s.season.startTimestamp.get(),
                            o = s.season.endTimestamp.get(),
                            l = s.season.serverTimestamp.get();
                        return (
                            (function (e, t, a) {
                                (0, n.useEffect)(() => {
                                    if (!(e >= t))
                                        return Ar(() => {
                                            a();
                                        }, 950);
                                }, [t, a, e]);
                            })(l, o, u.pollServerTime),
                            r().createElement(
                                'div',
                                { className: f()(kr, e) },
                                l < o
                                    ? r().createElement(Sr, {
                                          startTimestamp: i,
                                          endTimestamp: o,
                                          currentTimestamp: l,
                                          tooltipId: s.root.get().tooltipId,
                                          hasSeasonName: t,
                                      })
                                    : R.strings.comp7.season.over(),
                            )
                        );
                    }),
                    Pr = 'SubheadingContainer_base_a6',
                    Tr = 'SubheadingContainer_updateInfo_9a',
                    Ir = 'SubheadingContainer_updateInfoText_40',
                    Lr = (0, G.Pi)(({ className: e }) => {
                        const t = _t().model,
                            a = t.root.get().leaderboardUpdateTimestamp,
                            n = t.computes.hasUpdateInfo(),
                            s = oa(R.strings.comp7.lastUpdateNote.ratingPositions.description(), { count: 15 });
                        return r().createElement(
                            'div',
                            { className: f()(Pr, e) },
                            r().createElement(Nr, null),
                            n &&
                                r().createElement(
                                    'div',
                                    { className: Tr },
                                    r().createElement(br, { timestamp: a, className: Ir, tooltipDescription: s }),
                                ),
                        );
                    }),
                    Mr = {
                        '--pageContentWidth': '78vw',
                        base: 'LeaderboardPage_base_4a',
                        animationContainer: 'LeaderboardPage_animationContainer_94',
                        subHeading: 'LeaderboardPage_subHeading_ae',
                        content: 'LeaderboardPage_content_46',
                        base__loading: 'LeaderboardPage_base__loading_12',
                        hasRecords: 'LeaderboardPage_hasRecords_9f',
                        error: 'LeaderboardPage_error_7d',
                        noRecords: 'LeaderboardPage_noRecords_6b',
                        spinner: 'LeaderboardPage_spinner_67',
                        fadeIn: 'LeaderboardPage_fadeIn_46',
                        fadeInThreeQuarters: 'LeaderboardPage_fadeInThreeQuarters_98',
                        fadeInHalf: 'LeaderboardPage_fadeInHalf_30',
                        fadeOut: 'LeaderboardPage_fadeOut_e8',
                        fadeInWithScale: 'LeaderboardPage_fadeInWithScale_07',
                        slideUp: 'LeaderboardPage_slideUp_9c',
                        scale: 'LeaderboardPage_scale_5d',
                        raysAppearance: 'LeaderboardPage_raysAppearance_c3',
                        rotate: 'LeaderboardPage_rotate_db',
                        'reverse-rotate': 'LeaderboardPage_reverse-rotate_1d',
                        glowAppearance: 'LeaderboardPage_glowAppearance_4f',
                        highlightAppearance: 'LeaderboardPage_highlightAppearance_23',
                        blink: 'LeaderboardPage_blink_7e',
                        slideUpIn: 'LeaderboardPage_slideUpIn_37',
                    },
                    Or = { [at.Initial]: 'initial', [at.Success]: 'success', [at.Error]: 'error' },
                    Hr = (0, G.Pi)(() => {
                        const e = _t().model,
                            t = e.root.get(),
                            a = t.state,
                            n = t.isLoading,
                            s = e.computes.hasRecords(),
                            u = (0, ke.useSpring)(me);
                        return r().createElement(
                            'div',
                            { className: f()(Mr.base, Mr[`base__${Or[a]}`], n && Mr.base__loading) },
                            r().createElement(rt, { className: X }, R.strings.comp7.page.heading.leaderboard()),
                            r().createElement(Lr, { className: Mr.subHeading }),
                            r().createElement(
                                ke.animated.div,
                                { className: Mr.animationContainer, style: u },
                                r().createElement(
                                    'div',
                                    { className: Mr.content },
                                    (() => {
                                        switch (a) {
                                            case at.Initial:
                                                return null;
                                            case at.Success:
                                                return s
                                                    ? r().createElement(qn, { className: Mr.hasRecords })
                                                    : r().createElement(ur, { className: Mr.noRecords });
                                            case at.Error:
                                                return r().createElement(Ct, { className: Mr.error });
                                            default:
                                                console.error(
                                                    'Unreachable branch: add component for proper leaderboard state',
                                                );
                                        }
                                    })(),
                                ),
                                n &&
                                    r().createElement(tt, {
                                        message: R.strings.comp7.waitingSpinner.message(),
                                        className: Mr.spinner,
                                    }),
                            ),
                        );
                    }),
                    $r = { context: 'model.leaderboardModel' },
                    Ur = (e) => fe(e, (e) => ha(e.name)).join(R.strings.comp7.listSeparator());
                let Wr;
                !(function (e) {
                    (e.Previous = 'previous'), (e.Current = 'current'), (e.Future = 'future');
                })(Wr || (Wr = {}));
                const zr = (e, t, a) => (e > t || a ? Wr.Future : e < t ? Wr.Previous : Wr.Current),
                    Gr = [ba.Fifth, ba.Sixth],
                    jr = ue()(
                        ({ observableModel: e }) => {
                            const t = {
                                    root: e.object(),
                                    qualificationModel: e.primitives(
                                        ['isActive', 'battlesCount', 'maxBattlesCount', 'isRatingCalculation'],
                                        'qualificationModel',
                                    ),
                                    isRewardLayerVisible: ae.LO.box(!1),
                                    isParallaxPreloaded: ae.LO.box(!1),
                                },
                                a = e.array('items'),
                                n = e.array('qualificationModel.battles'),
                                r = (0, _e.Om)(
                                    (e) => {
                                        const t = he(a.get(), e);
                                        if (!t) throw new Error(`item with index ${e} was not found`);
                                        return {
                                            hasRankInactivity: t.hasRankInactivity,
                                            rank: t.rank,
                                            from: t.from,
                                            to: t.to,
                                        };
                                    },
                                    { equals: ct },
                                ),
                                s = (0, _e.Om)(
                                    (e) => {
                                        const t = he(a.get(), e);
                                        if (!t) throw new Error(`item with index ${e} was not found`);
                                        return fe(t.divisions, (e) => Object.assign({}, e));
                                    },
                                    { equals: te },
                                ),
                                u = (0, _e.Om)(
                                    (e) => {
                                        const t = s(e);
                                        return {
                                            list: Ur(t),
                                            count: t.length,
                                            currentDivisionIndex: Fe(t, (e) => e.state === sa.Current),
                                        };
                                    },
                                    { equals: ct },
                                ),
                                i = (0, _e.Om)(() => {
                                    const e = t.root.get().currentItemIndex,
                                        n = he(a.get(), e);
                                    if (!n) throw new Error(`current item with currentItemIndex ${e} was not found`);
                                    return n.hasRankInactivity;
                                }),
                                o = (0, _e.Om)(
                                    (e, a) => {
                                        var n;
                                        const u = zr(e, t.root.get().currentItemIndex, a);
                                        return {
                                            state: u,
                                            division:
                                                null == (n = Ce(s(e), (e) => e.state === sa.Current)) ? void 0 : n.name,
                                            hasInfo: u === Wr.Current && Gr.includes(r(e).rank),
                                        };
                                    },
                                    { equals: ct },
                                ),
                                l = (0, _e.Om)(
                                    (e) => {
                                        const t = he(n.get(), e);
                                        if (!t) throw new Error(`qualification battle with index ${e} was not found`);
                                        return t;
                                    },
                                    { equals: te },
                                );
                            return Object.assign({}, t, {
                                computes: {
                                    item: r,
                                    qualificationBattle: l,
                                    itemsLength: (0, _e.Om)(() => a.get().length),
                                    qualificationBattlesLength: (0, _e.Om)(() => n.get().length),
                                    rankSettings: o,
                                    hasCurrentItemRankInactivity: i,
                                    divisions: s,
                                    divisionsConfig: u,
                                },
                            });
                        },
                        ({ externalModel: e, model: t }) => {
                            const a = (0, ae.aD)((e) => t.isRewardLayerVisible.set(e));
                            return {
                                setIsParallaxPreloaded: (0, ae.aD)((e) => t.isParallaxPreloaded.set(e)),
                                setRewardLayerVisible: a,
                                goToRankRewardsPage: e.createCallbackNoArgs('qualificationModel.onRankRewardsPageOpen'),
                            };
                        },
                    ),
                    qr = jr[0],
                    Vr = jr[1],
                    Qr = 'RatingScore_base_bd',
                    Xr = 'RatingScore_rating_c9',
                    Yr = 'RatingScore_score_33',
                    Kr = 'RatingScore_rankInactivity_17',
                    Zr = 'RatingScore_rankInactivityCount_31',
                    Jr = 'RatingScore_rankInactivityIconContainer_32',
                    es = 'RatingScore_rankInactivityIcon_05',
                    ts = 'RatingScore_title_e4',
                    as = ({ currentScore: e, hasRankInactivity: t, rankInactivityCount: a, className: n }) =>
                        r().createElement(
                            'div',
                            { className: f()(Qr, n) },
                            r().createElement(
                                'div',
                                { className: Xr },
                                r().createElement('div', { className: Yr }, e),
                                t &&
                                    r().createElement(
                                        We,
                                        {
                                            ignoreShowDelay: !0,
                                            contentId: R.views.lobby.comp7.tooltips.RankInactivityTooltip('resId'),
                                            args: { rankInactivityCount: a },
                                        },
                                        r().createElement(
                                            'div',
                                            { className: Kr },
                                            r().createElement('div', { className: Zr }, a),
                                            r().createElement(
                                                'div',
                                                { className: Jr },
                                                r().createElement('div', { className: es }),
                                            ),
                                        ),
                                    ),
                            ),
                            r().createElement('div', { className: ts }, R.strings.comp7.ratingScore.title()),
                        ),
                    ns = 'ItemFooter_base_0f',
                    rs = 'ItemFooter_background_bf',
                    ss = 'ItemFooter_divider_bb',
                    us = 'ItemFooter_light_79',
                    is = 'ItemFooter_footer_e7',
                    os = 'ItemFooter_rankItemFooter_e6',
                    ls = (0, G.Pi)(({ className: e }) => {
                        const t = Vr().model,
                            a = t.root.get(),
                            n = a.currentScore,
                            s = a.rankInactivityCount;
                        return r().createElement(
                            'div',
                            { className: f()(ns, e) },
                            r().createElement('div', { className: rs }),
                            r().createElement('div', { className: ss }),
                            r().createElement('div', { className: us }),
                            r().createElement(
                                'div',
                                { className: is },
                                r().createElement(as, {
                                    currentScore: n,
                                    hasRankInactivity: t.computes.hasCurrentItemRankInactivity(),
                                    rankInactivityCount: s,
                                    className: os,
                                }),
                            ),
                        );
                    }),
                    cs = [
                        {
                            path: R.images.gui.maps.icons.comp7.qualificationParallax.c_6(),
                            speedX: -0.053,
                            speedY: -0.01,
                        },
                    ],
                    ds = 'Parallax_base_c9',
                    ms = 'Parallax_layer_15',
                    _s = (0, G.Pi)(({ className: e }) => {
                        const t = (0, n.createRef)();
                        return r().createElement(
                            'div',
                            { ref: t, className: f()(ds, e) },
                            r().createElement('div', { className: ms }),
                        );
                    }),
                    Es = 'ParallaxContainer_base_17',
                    gs = cs.map((e) => e.path),
                    ps = (0, G.Pi)(({ className: e }) => {
                        const t = Vr(),
                            a = t.model,
                            s = t.controls,
                            u = a.isParallaxPreloaded.get(),
                            i = (0, ke.useSpring)({ to: { opacity: u ? 1 : 0 }, config: { duration: 300 } });
                        return (
                            'success' ===
                                ((e) => {
                                    const t = (0, n.useState)('pending'),
                                        a = t[0],
                                        r = t[1];
                                    return (
                                        (0, n.useLayoutEffect)(() => {
                                            let t = 0,
                                                a = 0;
                                            const n = () => {
                                                t + a === e.length && r(0 === t ? 'success' : 'error');
                                            };
                                            e.forEach((e) => {
                                                const r = new Image();
                                                (r.src = e),
                                                    r.addEventListener('load', () => {
                                                        a++, n();
                                                    }),
                                                    r.addEventListener('error', () => {
                                                        t++, n();
                                                    });
                                            });
                                        }, [e]),
                                        a
                                    );
                                })(gs) && s.setIsParallaxPreloaded(!0),
                            r().createElement(
                                ke.animated.div,
                                { className: f()(Es, e), style: i },
                                r().createElement(_s, null),
                            )
                        );
                    }),
                    hs = { type: 'idle' };
                const bs = (e, t = 100) => ((viewEnv.pxToRem(u.O.client.getSize('px').width) * t) / 100 - e) / 2,
                    As = Nt({
                        getBounds: (e) => {
                            var t, a;
                            return [
                                0,
                                e.offsetWidth -
                                    (null != (t = null == (a = e.parentElement) ? void 0 : a.offsetWidth) ? t : 0),
                            ];
                        },
                        getContainerSize: (e) => e.offsetWidth,
                        getWrapperSize: (e) => e.offsetWidth,
                        setScrollPosition: (e, t) => {
                            e.style.transform = `translateX(-${t.value.scrollPosition}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? St.Next : St.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    fs = 'HorizontalBar_base_49',
                    vs = 'HorizontalBar_base__nonActive_82',
                    Cs = 'HorizontalBar_leftButton_5f',
                    Fs = 'HorizontalBar_rightButton_03',
                    Ds = 'HorizontalBar_track_0d',
                    Bs = 'HorizontalBar_thumb_fd',
                    ws = 'HorizontalBar_rail_32',
                    Rs = 'disable',
                    ys = { pending: !1, offset: 0 },
                    xs = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Ss = () => {},
                    ks = (e, t) => Math.max(20, e.offsetWidth * t),
                    Ns = (0, n.memo)(({ api: e, classNames: t = {}, getStepByRailClick: a = xs, onDrag: s = Ss }) => {
                        const u = (0, n.useRef)(null),
                            i = (0, n.useRef)(null),
                            o = (0, n.useRef)(null),
                            l = (0, n.useRef)(null),
                            c = (0, n.useRef)(null),
                            d = e.stepTimeout || 100,
                            m = (0, n.useState)(ys),
                            _ = m[0],
                            E = m[1],
                            g = (0, n.useCallback)(
                                (e) => {
                                    E(e),
                                        c.current && s({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current });
                                },
                                [s],
                            ),
                            p = () => {
                                const t = l.current,
                                    a = c.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && t && a && r)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    u = Math.min(1, n / r),
                                    d = Dt(0, 1, s / (r - n)),
                                    m = (t.offsetWidth - ks(t, u)) * d;
                                (a.style.transform = `translateX(${0 | m}px)`),
                                    ((e) => {
                                        if (i.current && o.current && l.current && c.current) {
                                            if (0 === e)
                                                return i.current.classList.add(Rs), void o.current.classList.remove(Rs);
                                            if (
                                                ((t = l.current),
                                                (a = c.current),
                                                e - (t.offsetWidth - a.offsetWidth) >= -0.5)
                                            )
                                                return i.current.classList.remove(Rs), void o.current.classList.add(Rs);
                                            var t, a;
                                            i.current.classList.remove(Rs), o.current.classList.remove(Rs);
                                        }
                                    })(m);
                            },
                            h = yt(() => {
                                (() => {
                                    const t = c.current,
                                        a = l.current,
                                        n = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(r && t && n && a)) return;
                                    const s = Math.min(1, n / r);
                                    (t.style.width = `${ks(a, s)}px`),
                                        (t.style.display = 'flex'),
                                        u.current &&
                                            (1 === s ? u.current.classList.add(vs) : u.current.classList.remove(vs));
                                })(),
                                    p();
                            });
                        (0, n.useEffect)(() => Se(h)),
                            (0, n.useEffect)(
                                () =>
                                    Se(() => {
                                        const t = () => {
                                            p();
                                        };
                                        let a = Ss;
                                        const n = () => {
                                            a(), (a = Se(h));
                                        };
                                        return (
                                            e.events.on('recalculateContent', h),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', n),
                                            () => {
                                                a(),
                                                    e.events.off('recalculateContent', h),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', n);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, n.useEffect)(() => {
                                if (!_.pending) return;
                                const t = (t) => {
                                        var a;
                                        const n = e.contentRef.current;
                                        if (!n) return;
                                        const r = l.current,
                                            u = c.current;
                                        if (!n || !r || !u) return;
                                        const i = t.screenX - _.offset - r.getBoundingClientRect().x,
                                            o = (i / r.offsetWidth) * (null != (a = e.getContainerSize()) ? a : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(n, o),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            s({ type: 'dragging', thumb: u, thumbOffset: i, contentOffset: o });
                                    },
                                    a = () => {
                                        window.removeEventListener('mousemove', t), g(ys);
                                    };
                                return (
                                    window.addEventListener('mousemove', t),
                                    window.addEventListener('mouseup', a),
                                    () => {
                                        window.removeEventListener('mousemove', t),
                                            window.removeEventListener('mouseup', a);
                                    }
                                );
                            }, [e, _.offset, _.pending, s, g]);
                        const b = $t((t) => e.applyStepTo(t), d, [e]),
                            A = b[0],
                            v = b[1];
                        (0, n.useEffect)(
                            () => (
                                document.addEventListener('mouseup', v, !0),
                                () => document.removeEventListener('mouseup', v, !0)
                            ),
                            [v],
                        );
                        const C = (e) => {
                            e.target.classList.contains(Rs) || O('highlight');
                        };
                        return r().createElement(
                            'div',
                            { className: f()(fs, t.base), ref: u, onWheel: e.handleMouseWheel },
                            r().createElement('div', {
                                className: f()(Cs, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Rs) || 0 !== e.button || (O('play'), A(St.Next));
                                },
                                onMouseUp: v,
                                ref: i,
                                onMouseEnter: C,
                            }),
                            r().createElement(
                                'div',
                                {
                                    className: f()(Ds, t.track),
                                    onMouseDown: (t) => {
                                        const n = c.current;
                                        if (n && 0 === t.button)
                                            if ((O('play'), t.target === n))
                                                g({ pending: !0, offset: t.screenX - n.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const n = c.current,
                                                        r = e.contentRef.current;
                                                    if (!n || !r) return;
                                                    const s = a(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + s * t);
                                                })(t.screenX > n.getBoundingClientRect().x ? St.Prev : St.Next);
                                            }
                                    },
                                    ref: l,
                                    onMouseEnter: C,
                                },
                                r().createElement('div', { ref: c, className: f()(Bs, t.thumb) }),
                                r().createElement('div', { className: f()(ws, t.rail) }),
                            ),
                            r().createElement('div', {
                                className: f()(Fs, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Rs) || 0 !== e.button || (O('play'), A(St.Prev));
                                },
                                onMouseUp: v,
                                ref: o,
                                onMouseEnter: C,
                            }),
                        );
                    }),
                    Ps = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Ts = ({ api: e, className: t, classNames: a, children: s }) => (
                        (0, n.useEffect)(() => Se(e.recalculateContent)),
                        r().createElement(
                            'div',
                            { className: f()(Ps.base, t) },
                            r().createElement(
                                'div',
                                {
                                    className: f()(Ps.wrapper, null == a ? void 0 : a.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                r().createElement(
                                    'div',
                                    { className: f()(Ps.content, null == a ? void 0 : a.content), ref: e.contentRef },
                                    s,
                                ),
                            ),
                        )
                    );
                (Ts.Bar = Ns),
                    (Ts.Default = ({
                        children: e,
                        api: t,
                        className: a,
                        barClassNames: s,
                        areaClassName: u,
                        classNames: i,
                        scrollClassName: o,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const d = (0, n.useMemo)(() => {
                                const e = s || {};
                                return Object.assign({}, e, { base: f()(Ps.base, e.base) });
                            }, [s]),
                            m = (0, n.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return r().createElement(
                            'div',
                            { className: f()(Ps.defaultScroll, a), onWheel: t.handleMouseWheel },
                            r().createElement(
                                'div',
                                { className: f()(Ps.defaultScrollArea, u) },
                                r().createElement(Ts, { className: o, api: m, classNames: i }, e),
                            ),
                            r().createElement(Ns, { getStepByRailClick: l, api: t, onDrag: c, classNames: d }),
                        );
                    }),
                    (Ts.SeniorityAwards = ({ api: e, className: t, classNames: a, children: s }) => (
                        (0, n.useEffect)(() => Se(e.recalculateContent)),
                        r().createElement(
                            'div',
                            { className: f()(Ps.base, t) },
                            r().createElement(
                                'div',
                                { className: f()(Ps.wrapper, null == a ? void 0 : a.wrapper), ref: e.wrapperRef },
                                r().createElement(
                                    'div',
                                    { className: f()(Ps.content, null == a ? void 0 : a.content), ref: e.contentRef },
                                    s,
                                ),
                            ),
                        )
                    ));
                const Is = 'ProgressionScroll_base_0f',
                    Ls = 'ProgressionScroll_areaWrapper_dc',
                    Ms = 'ProgressionScroll_areaContent_2f',
                    Os = ({
                        api: e,
                        stuckIndex: t,
                        itemWidth: a,
                        itemsOffset: s = 0,
                        children: i,
                        onStick: o,
                        className: l,
                        areaClassNames: c,
                        barClassNames: d,
                        staticContent: m,
                    }) => {
                        const _ = viewEnv.remToPx(a),
                            E = e.animationScroll,
                            g = e.events,
                            p = e.applyScroll,
                            h = (function (e, t) {
                                const a = e.contentRef,
                                    r = e.wrapperRef,
                                    s = e.scrollPosition,
                                    i = e.clampPosition,
                                    o = e.animationScroll,
                                    l = e.events,
                                    c = (0, n.useState)(hs),
                                    d = c[0],
                                    m = c[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        const e = a.current;
                                        e && (e.style.cursor = 'dragging' === d.type ? 'move' : 'grab');
                                    }, [a, d.type]),
                                    (0, n.useEffect)(() => {
                                        if ('dragging' !== d.type) return;
                                        const e = u.O.client.events.mouse.move(([e, n]) => {
                                                const u = a.current,
                                                    l = r.current;
                                                if (!u || !l) return;
                                                if ('inside' === n && e.clientX < 0) return;
                                                const c = 'inside' === n ? e.clientX : e.clientX - l.offsetLeft,
                                                    m = d.positionFrom - c,
                                                    _ = d.previousScrollPosition + m;
                                                s.start(
                                                    Object.assign(
                                                        {
                                                            scrollPosition: i(u, _),
                                                            from: { scrollPosition: o.scrollPosition.get() },
                                                        },
                                                        t && { config: t },
                                                    ),
                                                );
                                            }),
                                            n = u.O.client.events.mouse.up(function () {
                                                m({ type: 'scrollingToEnd' });
                                            });
                                        return () => {
                                            e(), n();
                                        };
                                    }, [o.scrollPosition, i, a, d, s, r, t]),
                                    (0, n.useEffect)(() => {
                                        if ('scrollingToEnd' !== d.type) return;
                                        const e = () => {
                                            m(hs);
                                        };
                                        return o.scrollPosition.idle && e(), l.on('rest', e), () => l.off('rest', e);
                                    }, [o.scrollPosition, d.type, l]),
                                    (0, n.useEffect)(() => {
                                        const e = a.current;
                                        if (!e) return;
                                        const t = (e) => {
                                            m({
                                                type: 'dragging',
                                                positionFrom: e.screenX,
                                                previousScrollPosition: o.scrollPosition.get(),
                                            });
                                        };
                                        return (
                                            e.addEventListener('mousedown', t),
                                            () => e.removeEventListener('mousedown', t)
                                        );
                                    }, [o.scrollPosition, a]),
                                    d
                                );
                            })(e),
                            b = (0, n.useCallback)(
                                (e) => {
                                    p(t * _, e);
                                },
                                [p, _, t],
                            ),
                            A = (0, n.useCallback)(() => {
                                null == o || o(Math.round(E.scrollPosition.goal / _));
                            }, [o, E.scrollPosition, _]);
                        (0, n.useEffect)(() => (g.on('rest', A), () => g.off('rest', A)), [g, A]),
                            (0, n.useEffect)(() => {
                                const e = () => {
                                    b({ immediate: !0, reset: !0 });
                                };
                                return (
                                    g.on('resizeHandled', e),
                                    () => {
                                        g.off('resizeHandled', e);
                                    }
                                );
                            }, [b, g]),
                            (0, n.useEffect)(
                                () =>
                                    Se(() => {
                                        'idle' === h.type && E.scrollPosition.idle && b();
                                    }),
                                [E.scrollPosition, h, b],
                            );
                        const v = (0, n.useCallback)(
                            (e) => {
                                'dragEnd' === e.type && p(t * _);
                            },
                            [p, _, t],
                        );
                        return r().createElement(
                            'div',
                            { className: f()(Is, l), style: { '--offset': `${s}rem` } },
                            r().createElement(
                                Ts,
                                {
                                    api: e,
                                    className: null == c ? void 0 : c.base,
                                    classNames: {
                                        wrapper: f()(Ls, null == c ? void 0 : c.wrapper),
                                        content: f()(Ms, null == c ? void 0 : c.content),
                                    },
                                },
                                i,
                            ),
                            m,
                            r().createElement(Ns, { api: e, onDrag: v, classNames: d }),
                        );
                    },
                    Hs = (e, t = 150, a) => {
                        const r = viewEnv.remToPx(e),
                            s = (0, n.useMemo)(
                                () => ({
                                    settings: {
                                        step: { type: 'fixed', value: r, clampedArrowStepTimeout: t },
                                        animationConfig: Object.assign({ frequency: 0.5 }, a),
                                    },
                                }),
                                [a, r, t],
                            );
                        return As(s);
                    },
                    $s = {
                        '--pageContentWidth': '78vw',
                        base: 'HighlightedRankEmblem_base_e2',
                        highlights: 'HighlightedRankEmblem_highlights_cc',
                        highlights__gold: 'HighlightedRankEmblem_highlights__gold_9f',
                        highlights__silver: 'HighlightedRankEmblem_highlights__silver_f4',
                        highlights__hidden: 'HighlightedRankEmblem_highlights__hidden_10',
                        highlight: 'HighlightedRankEmblem_highlight_72',
                        highlightAppearance: 'HighlightedRankEmblem_highlightAppearance_60',
                        rotate: 'HighlightedRankEmblem_rotate_0f',
                        highlight__second: 'HighlightedRankEmblem_highlight__second_91',
                        base__static: 'HighlightedRankEmblem_base__static_87',
                        rankEmblem: 'HighlightedRankEmblem_rankEmblem_29',
                        fadeIn: 'HighlightedRankEmblem_fadeIn_3a',
                        fadeInThreeQuarters: 'HighlightedRankEmblem_fadeInThreeQuarters_a4',
                        fadeInHalf: 'HighlightedRankEmblem_fadeInHalf_6e',
                        fadeOut: 'HighlightedRankEmblem_fadeOut_48',
                        fadeInWithScale: 'HighlightedRankEmblem_fadeInWithScale_a8',
                        slideUp: 'HighlightedRankEmblem_slideUp_82',
                        scale: 'HighlightedRankEmblem_scale_ec',
                        raysAppearance: 'HighlightedRankEmblem_raysAppearance_a6',
                        'reverse-rotate': 'HighlightedRankEmblem_reverse-rotate_e8',
                        glowAppearance: 'HighlightedRankEmblem_glowAppearance_2a',
                        blink: 'HighlightedRankEmblem_blink_ce',
                        slideUpIn: 'HighlightedRankEmblem_slideUpIn_80',
                    };
                let Us, Ws;
                !(function (e) {
                    (e.Silver = 'silver'), (e.Gold = 'gold'), (e.Hidden = 'hidden');
                })(Us || (Us = {})),
                    (function (e) {
                        (e.Dynamic = 'dynamic'), (e.Static = 'static');
                    })(Ws || (Ws = {}));
                const zs = {
                        [Da.x48]: 64,
                        [Da.x64]: 80,
                        [Da.x110]: 140,
                        [Da.x200]: 260,
                        [Da.x260]: 340,
                        [Da.x320]: 400,
                        [Da.x420]: 550,
                    },
                    Gs = ({ size: e, rank: t, division: a, type: n = Ws.Dynamic, state: s, classNames: u }) => {
                        const i = ((e) => ({
                            backgroundImage: `url(${R.images.gui.maps.icons.comp7.ranks.$num(e).$dyn('highlight')})`,
                        }))(e);
                        return r().createElement(
                            'div',
                            { className: f()($s.base, $s[`base__${n}`]) },
                            r().createElement(
                                'div',
                                {
                                    className: f()(
                                        $s.highlights,
                                        $s[`highlights__${s}`],
                                        null == u ? void 0 : u.highlights,
                                    ),
                                    style: { '--highlightsSize': `${zs[e]}rem` },
                                },
                                r().createElement('div', {
                                    className: f()($s.highlight, $s.highlight__first, null == u ? void 0 : u.highlight),
                                    style: i,
                                }),
                                n === Ws.Dynamic &&
                                    r().createElement('div', {
                                        className: f()(
                                            $s.highlight,
                                            $s.highlight__second,
                                            null == u ? void 0 : u.highlight,
                                        ),
                                        style: i,
                                    }),
                            ),
                            r().createElement(Ba, {
                                size: e,
                                rank: t,
                                division: a,
                                className: f()($s.rankEmblem, null == u ? void 0 : u.rankEmblem),
                            }),
                        );
                    },
                    js = [ba.Fifth, ba.Sixth],
                    qs = (e, t, a) => (e !== Wr.Current || a ? Us.Hidden : js.includes(t) ? Us.Gold : Us.Silver),
                    Vs = 'RankInfo_base_21',
                    Qs = 'RankInfo_highlight_1f',
                    Xs = 'RankInfo_formattedText_26',
                    Ys = ({ rank: e, from: t, topPercentage: a, className: n }) =>
                        r().createElement(
                            'div',
                            { className: f()(Vs, n) },
                            r().createElement('div', { className: Qs }),
                            r().createElement(Jn, {
                                text: String(R.strings.comp7.rankInfo.current.$dyn(fa(e))),
                                binding: { topPercentage: a, fromScore: t },
                                classMix: Xs,
                            }),
                        ),
                    Ks = 'RankItemDivider_base_c4',
                    Zs = () => r().createElement('div', { className: Ks }),
                    Js = {
                        base: 'ProgressBar_base_45',
                        base__medium: 'ProgressBar_base__medium_62',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__medium: 'ProgressBar_background__medium_6e',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let eu, tu;
                !(function (e) {
                    (e.Small = 'small'), (e.Medium = 'medium'), (e.Big = 'big'), (e.Default = 'big');
                })(eu || (eu = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(tu || (tu = {}));
                const au = ({ size: e = eu.Default }) =>
                        r().createElement('div', { className: f()(Js.background, Js[`background__${e}`]) }),
                    nu = {
                        base: 'ProgressBarBlink_base_24',
                        base__medium: 'ProgressBarBlink_base__medium_ec',
                        base__small: 'ProgressBarBlink_base__small_0f',
                    },
                    ru = ({ size: e }) => {
                        const t = f()(nu.base, nu[`base__${e}`]);
                        return r().createElement('div', { className: t });
                    },
                    su = {
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
                    uu = (0, n.memo)(
                        ({ size: e, lineRef: t, disabled: a, baseStyles: n, isComplete: s, withoutBounce: u }) => {
                            const i = f()(
                                    su.base,
                                    su[`base__${e}`],
                                    a && su.base__disabled,
                                    s && su.base__finished,
                                    u && su.base__withoutBounce,
                                ),
                                o = !a && !s;
                            return r().createElement(
                                'div',
                                { className: i, style: n, ref: t },
                                r().createElement('div', { className: su.pattern }),
                                r().createElement('div', { className: su.gradient }),
                                o && r().createElement(ru, { size: e }),
                            );
                        },
                    ),
                    iu = ({ size: e, value: t, lineRef: a, disabled: s, onComplete: u }) => {
                        const i = (0, n.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                            o = 100 === t;
                        return (
                            (0, n.useEffect)(() => {
                                o && u && u();
                            }, [o, u]),
                            r().createElement(uu, { size: e, disabled: s, baseStyles: i, isComplete: o, lineRef: a })
                        );
                    };
                let ou, lu;
                !(function (e) {
                    (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
                })(ou || (ou = {})),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                    })(lu || (lu = {}));
                const cu = 'ProgressBarDeltaSimple_base_6c',
                    du = 'ProgressBarDeltaSimple_delta_99',
                    mu = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: a,
                            from: s,
                            size: u,
                            to: i,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                        }) => {
                            const c = i < s,
                                d = (0, n.useState)(lu.Idle),
                                m = d[0],
                                _ = d[1],
                                E = m === lu.In,
                                g = m === lu.End,
                                p = m === lu.Idle,
                                h = (0, n.useCallback)(
                                    (e) => {
                                        _(e), l && l(e);
                                    },
                                    [l],
                                );
                            (0, n.useEffect)(() => {
                                if (p && !a) {
                                    return Ar(() => {
                                        h(lu.In);
                                    }, t);
                                }
                            }, [h, a, p, t]),
                                (0, n.useEffect)(() => {
                                    if (E) {
                                        return Ar(() => {
                                            o && o(), h(lu.End);
                                        }, e + t);
                                    }
                                }, [h, E, o, t, e]);
                            const b = (0, n.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, t, e],
                                ),
                                A = (0, n.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, t, e],
                                ),
                                f = (0, n.useMemo)(
                                    () => ({ width: `${Math.abs(s - i)}%`, left: `${c ? i : s}%` }),
                                    [s, c, i],
                                );
                            return g
                                ? null
                                : r().createElement(
                                      'div',
                                      { className: cu, style: f },
                                      r().createElement(
                                          'div',
                                          { style: p ? b : A, className: du },
                                          r().createElement(ru, { size: u }),
                                      ),
                                  );
                        },
                    ),
                    _u = (0, n.memo)(
                        ({
                            to: e,
                            size: t,
                            from: a,
                            lineRef: s,
                            disabled: u,
                            isComplete: i,
                            animationSettings: o,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const d = (0, n.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${o.line.duration}ms`,
                                    transitionDelay: `${o.line.delay}ms`,
                                }),
                                [o.line.delay, o.line.duration, e],
                            );
                            return r().createElement(
                                r().Fragment,
                                null,
                                r().createElement(uu, {
                                    size: t,
                                    lineRef: s,
                                    disabled: u,
                                    isComplete: i,
                                    baseStyles: d,
                                }),
                                a >= 0 &&
                                    r().createElement(mu, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        freezed: o.freezed,
                                        from: a,
                                        size: t,
                                        to: e,
                                        onChangeAnimationState: l,
                                        onEndAnimation: c,
                                    }),
                            );
                        },
                    ),
                    Eu = 'ProgressBarDeltaGrow_base_7e',
                    gu = 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    pu = 'ProgressBarDeltaGrow_glow_68',
                    hu = (e) => (e ? { left: 0 } : { right: 0 }),
                    bu = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    Au = (e) => ({ transitionDuration: `${e}ms` }),
                    fu = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: a,
                            from: s,
                            size: u,
                            to: i,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                            className: c,
                        }) => {
                            const d = i < s,
                                m = (0, n.useState)(ou.Idle),
                                _ = m[0],
                                E = m[1],
                                g = _ === ou.End,
                                p = _ === ou.Idle,
                                h = _ === ou.Grow,
                                b = _ === ou.Shrink,
                                A = (0, n.useCallback)(
                                    (e) => {
                                        E(e), l && l(e);
                                    },
                                    [l],
                                ),
                                v = (0, n.useCallback)(
                                    (e, t) =>
                                        Ar(() => {
                                            A(e);
                                        }, t),
                                    [A],
                                );
                            (0, n.useEffect)(() => {
                                if (!a)
                                    return p
                                        ? v(ou.Grow, t)
                                        : h
                                          ? v(ou.Shrink, e)
                                          : b
                                            ? v(ou.End, e)
                                            : void (g && o && o());
                            }, [v, a, g, h, p, b, o, t, e]);
                            const C = (0, n.useMemo)(() => Object.assign({ width: '100%' }, Au(e), hu(d)), [d, e]),
                                F = (0, n.useMemo)(() => Object.assign({ width: '0%' }, Au(e), hu(d)), [d, e]),
                                D = (0, n.useMemo)(() => Object.assign({ width: '0%' }, bu(d, s), Au(e)), [s, d, e]),
                                B = (0, n.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(i - s)}%` }, bu(d, s), Au(e)),
                                    [s, d, i, e],
                                );
                            if (g) return null;
                            const w = f()(Eu, c, d && 0 === i && gu);
                            return r().createElement(
                                'div',
                                { style: p ? D : B, className: w },
                                r().createElement(
                                    'div',
                                    { style: b ? F : C, className: pu },
                                    r().createElement(ru, { size: u }),
                                ),
                            );
                        },
                    ),
                    vu = (0, n.memo)(
                        ({
                            to: e,
                            size: t,
                            from: a,
                            lineRef: s,
                            disabled: u,
                            isComplete: i,
                            animationSettings: o,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const d = e < a,
                                m = (0, n.useState)(!1),
                                _ = m[0],
                                E = m[1],
                                g = (0, n.useCallback)(
                                    (e) => {
                                        e === ou.Shrink && E(!0), c && c(e);
                                    },
                                    [c],
                                ),
                                p = (0, n.useMemo)(() => ({ width: `${a}%`, transitionProperty: 'none' }), [a]),
                                h = (0, n.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${o.line.duration}ms` }),
                                    [o.line.duration, e],
                                );
                            return r().createElement(
                                r().Fragment,
                                null,
                                r().createElement(uu, {
                                    size: t,
                                    lineRef: s,
                                    disabled: u,
                                    isComplete: i,
                                    withoutBounce: d && 0 === e,
                                    baseStyles: _ ? h : p,
                                }),
                                a >= 0 &&
                                    r().createElement(fu, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        onChangeAnimationState: g,
                                        freezed: o.freezed,
                                        onEndAnimation: l,
                                        from: a,
                                        size: t,
                                        to: e,
                                        className: o.delta.className,
                                    }),
                            );
                        },
                    ),
                    Cu = ['onComplete', 'onEndAnimation'];
                function Fu() {
                    return (
                        (Fu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Fu.apply(this, arguments)
                    );
                }
                const Du = (0, n.memo)((e) => {
                        let t = e.onComplete,
                            a = e.onEndAnimation,
                            s = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, Cu);
                        const u = (0, n.useState)(!1),
                            i = u[0],
                            o = u[1],
                            l = (0, n.useCallback)(() => {
                                const e = 100 === s.to;
                                e !== i && o(e), e && t && t(), a && a();
                            }, [i, t, a, s.to]);
                        switch (s.animationSettings.type) {
                            case tu.Simple:
                                return r().createElement(_u, Fu({}, s, { onEndAnimation: l, isComplete: i }));
                            case tu.Growing:
                                return r().createElement(vu, Fu({}, s, { onEndAnimation: l, isComplete: i }));
                            default:
                                return null;
                        }
                    }),
                    Bu = ['onEndAnimation'];
                function wu() {
                    return (
                        (wu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        wu.apply(this, arguments)
                    );
                }
                const Ru = (0, n.memo)((e) => {
                    let t = e.onEndAnimation,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                r = {},
                                s = Object.keys(e);
                            for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                            return r;
                        })(e, Bu);
                    const s = (0, n.useRef)({}),
                        u = (0, n.useCallback)(() => {
                            (s.current.from = void 0), t && t();
                        }, [t]),
                        i = 'number' == typeof s.current.from ? s.current.from : a.from;
                    return (
                        (s.current.from = i),
                        r().createElement(Du, wu({}, a, { onEndAnimation: u, key: `${i}-${a.to}`, from: i }))
                    );
                });
                function yu() {
                    return (
                        (yu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        yu.apply(this, arguments)
                    );
                }
                const xu = (0, n.memo)(
                        ({
                            size: e,
                            value: t,
                            lineRef: a,
                            disabled: n,
                            deltaFrom: s,
                            animationSettings: u,
                            onEndAnimation: i,
                            onChangeAnimationState: o,
                            onComplete: l,
                        }) => {
                            if (s === t)
                                return r().createElement(iu, {
                                    key: `${s}-${t}`,
                                    size: e,
                                    value: t,
                                    lineRef: a,
                                    disabled: n,
                                    onComplete: l,
                                });
                            const c = {
                                from: s,
                                to: t,
                                size: e,
                                lineRef: a,
                                disabled: n,
                                animationSettings: u,
                                onComplete: l,
                                onEndAnimation: i,
                                onChangeAnimationState: o,
                            };
                            return u.withStack
                                ? r().createElement(Ru, c)
                                : r().createElement(Du, yu({ key: `${s}-${t}` }, c));
                        },
                    ),
                    Su = (e) => ({
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
                    ku = (e, t, a) => {
                        if ('number' == typeof a) {
                            return (Dt(0, t, a) / t) * 100;
                        }
                        return e;
                    },
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
                    Pu = {
                        freezed: !1,
                        withStack: !1,
                        type: tu.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    Tu = (0, n.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = Nu,
                            size: a = eu.Default,
                            animationSettings: s = Pu,
                            disabled: u = !1,
                            withoutBackground: i = !1,
                            value: o,
                            deltaFrom: l,
                            lineRef: c,
                            onChangeAnimationState: d,
                            onEndAnimation: m,
                            onComplete: _,
                        }) => {
                            const E = ((e, t, a) =>
                                (0, n.useMemo)(() => {
                                    const n = (Dt(0, t, e) / t) * 100;
                                    return { value: n, deltaFrom: ku(n, t, a) };
                                }, [a, t, e]))(o, e, l);
                            return r().createElement(
                                'div',
                                { className: f()(Js.base, Js[`base__${a}`]), style: Su(t) },
                                !i && r().createElement(au, { size: a }),
                                r().createElement(xu, {
                                    size: a,
                                    lineRef: c,
                                    disabled: u,
                                    value: E.value,
                                    deltaFrom: E.deltaFrom,
                                    animationSettings: s,
                                    onEndAnimation: m,
                                    onChangeAnimationState: d,
                                    onComplete: _,
                                }),
                            );
                        },
                    ),
                    Iu = ({ rank: e, division: t, from: a, to: n, className: s, children: u }) =>
                        r().createElement(
                            We,
                            {
                                contentId: R.views.lobby.comp7.tooltips.DivisionTooltip('resId'),
                                args: { rank: e, division: t, from: a, to: n },
                            },
                            r().createElement('div', { className: s }, u),
                        ),
                    Lu = 'RankProgressDivisions_base_54',
                    Mu = 'RankProgressDivisions_divisionItem_77',
                    Ou = 'RankProgressDivisions_divisionItem__current_84',
                    Hu = 'RankProgressDivisions_highlightContainer_53',
                    $u = 'RankProgressDivisions_radialBack_cc',
                    Uu = 'RankProgressDivisions_mainBack_38',
                    Wu = 'RankProgressDivisions_bottomLine_67',
                    zu = 'RankProgressDivisions_bottomLine__first_bd',
                    Gu = 'RankProgressDivisions_bottomLine__second_60',
                    ju = 'RankProgressDivisions_bottomLine__third_08',
                    qu = 'RankProgressDivisions_divisionText_ea',
                    Vu = 'RankProgressDivisions_note_e1',
                    Qu = (0, G.Pi)(({ itemIndex: e, rank: t, from: a, step: n }) => {
                        const s = Vr().model.computes.divisions(e);
                        return r().createElement(
                            'div',
                            { className: Lu },
                            fe(s, (e, s) => {
                                const u = e.state === sa.Current;
                                return r().createElement(
                                    Iu,
                                    {
                                        key: s,
                                        rank: t,
                                        division: e.name,
                                        from: a + n * s,
                                        to: a + n * (s + 1),
                                        className: f()(Mu, u && Ou),
                                    },
                                    u &&
                                        r().createElement(
                                            'div',
                                            { className: Hu },
                                            r().createElement('div', { className: $u }),
                                            r().createElement('div', { className: Uu }),
                                            r().createElement('div', { className: f()(Wu, zu) }),
                                            r().createElement('div', { className: f()(Wu, Gu) }),
                                            r().createElement('div', { className: f()(Wu, ju) }),
                                        ),
                                    r().createElement(
                                        'div',
                                        { className: qu },
                                        u &&
                                            r().createElement(
                                                'div',
                                                { className: Vu },
                                                R.strings.comp7.division.note(),
                                            ),
                                        ha(e.name),
                                    ),
                                );
                            }),
                        );
                    }),
                    Xu = {
                        '--pointLineWidth': '1rem',
                        base: 'RankProgressPoints_base_86',
                        point: 'RankProgressPoints_point_f9',
                        base__top: 'RankProgressPoints_base__top_78',
                        base__bottom: 'RankProgressPoints_base__bottom_fc',
                        pointLine: 'RankProgressPoints_pointLine_b3',
                        pointLine__extended: 'RankProgressPoints_pointLine__extended_6b',
                        pointValue: 'RankProgressPoints_pointValue_af',
                        pointValue__next: 'RankProgressPoints_pointValue__next_c5',
                    };
                let Yu;
                !(function (e) {
                    (e.Top = 'top'), (e.Bottom = 'bottom');
                })(Yu || (Yu = {}));
                const Ku = (e, t) => {
                        const a = t > 0 ? (100 / t) * e + '%' : '0%';
                        return e === t ? { left: a, transform: `translateX(-${Xu['--pointLineWidth']})` } : { left: a };
                    },
                    Zu = ({ step: e, divisionsCount: t, from: a, currentDivisionIndex: n, direction: s = Yu.Bottom }) =>
                        r().createElement(
                            'div',
                            { className: f()(Xu.base, Xu[`base__${s}`]) },
                            na(t + 1, (s) => {
                                const u = void 0 !== n && s === n + 1,
                                    i = void 0 === a && (s === n || u);
                                return r().createElement(
                                    'div',
                                    { className: Xu.point, style: Ku(s, t), key: s },
                                    r().createElement('div', {
                                        className: f()(Xu.pointLine, i && Xu.pointLine__extended),
                                    }),
                                    void 0 !== a &&
                                        r().createElement(
                                            'div',
                                            { className: f()(Xu.pointValue, u && Xu.pointValue__next) },
                                            a + e * s,
                                        ),
                                );
                            }),
                        ),
                    Ju = {
                        '--pageContentWidth': '78vw',
                        base: 'RankProgress_base_97',
                        base__hidden: 'RankProgress_base__hidden_b9',
                        base__inactive: 'RankProgress_base__inactive_49',
                        base__active: 'RankProgress_base__active_a2',
                        progressWrapper: 'RankProgress_progressWrapper_4e',
                    },
                    ei = {
                        freezed: !0,
                        withStack: !1,
                        type: tu.Simple,
                        delta: { duration: 0, delay: 0 },
                        line: { duration: 0, delay: 0 },
                    },
                    ti = (0, G.Pi)(({ rank: e, state: t, itemIndex: a, from: n, to: s, progressState: u }) => {
                        const i = Vr().model,
                            o = i.root.get().currentScore,
                            l = i.computes.divisionsConfig(a),
                            c = s - n,
                            d = ((e, t, a) => Math.round((t - e) / a))(n, s, l.count);
                        return r().createElement(
                            'div',
                            { className: f()(Ju.base, Ju[`base__${u}`]) },
                            r().createElement(Qu, { itemIndex: a, rank: e, from: n, step: d }),
                            r().createElement(Zu, {
                                step: d,
                                divisionsCount: l.count,
                                direction: Yu.Top,
                                currentDivisionIndex: l.currentDivisionIndex,
                            }),
                            r().createElement(
                                'div',
                                { className: Ju.progressWrapper },
                                t === Wr.Current
                                    ? r().createElement(Tu, { maxValue: c, value: o - n, animationSettings: ei })
                                    : r().createElement(Tu, { maxValue: c, value: o < n ? 0 : c, disabled: o < n }),
                            ),
                            r().createElement(Zu, {
                                step: d,
                                divisionsCount: l.count,
                                from: n,
                                currentDivisionIndex: l.currentDivisionIndex,
                            }),
                        );
                    }),
                    ai = 'RankStatusDescription_base_07',
                    ni = ({ text: e, binding: t, className: a }) => {
                        const n = ((e) =>
                            'number' == typeof (null == e ? void 0 : e.pointsCount)
                                ? Object.assign({}, e, { pointsCount: r().createElement(Tt, { value: e.pointsCount }) })
                                : e)(t);
                        return r().createElement(Jn, { text: e, binding: n, classMix: f()(ai, a) });
                    },
                    ri = 'AchievedRankStatus_base_70',
                    si = R.strings.comp7.rankItemStatus.previous,
                    ui = ({ rank: e, rankState: t, itemIndex: a, from: n, to: s, progressState: u }) => {
                        switch (e) {
                            case ba.First:
                            case ba.Second:
                            case ba.Third:
                            case ba.Fourth:
                                return r().createElement(ti, {
                                    rank: e,
                                    state: t,
                                    itemIndex: a,
                                    from: n,
                                    to: s,
                                    progressState: u,
                                });
                            case ba.Fifth:
                                return r().createElement(
                                    'div',
                                    { className: ri },
                                    r().createElement(ni, { text: Ra(si.description, e), binding: { fromScore: n } }),
                                );
                            default:
                                return (
                                    console.warn(`Status for rank '${e}' was not mapped to any react component.`), null
                                );
                        }
                    },
                    ii = 'LastUpdate_base_f7',
                    oi = 'LastUpdate_dataUpdate_90',
                    li = ({ timestamp: e, isLastBestUserPointsValueLoading: t = !1 }) =>
                        r().createElement(
                            'div',
                            { className: ii },
                            t
                                ? r().createElement(Qn, {
                                      text: R.strings.comp7.lastUpdateNote.lastBestUserPoints.update(),
                                      classMix: oi,
                                  })
                                : r().createElement(br, { timestamp: e }),
                        ),
                    ci = (e, t) => e > 0 || t;
                let di;
                !(function (e) {
                    (e.Active = 'active'), (e.Inactive = 'inactive'), (e.Hidden = 'hidden');
                })(di || (di = {}));
                const mi = 'CurrentRankStatus_base_d4',
                    _i = R.strings.comp7.rankItemStatus.current,
                    Ei = ({
                        rank: e,
                        rankState: t,
                        itemIndex: a,
                        from: s,
                        to: u,
                        progressState: i,
                        topPercentage: o,
                        pointsCount: l,
                        isLastBestUserPointsValueLoading: c,
                        timestamp: d,
                    }) => {
                        const m = { topPercentage: o, pointsCount: l };
                        return (
                            (0, n.useEffect)(() => {
                                i === di.Active && O('comp_7_progression_rank_active');
                            }, [i]),
                            r().createElement(
                                'div',
                                { className: mi },
                                (() => {
                                    switch (e) {
                                        case ba.First:
                                        case ba.Second:
                                        case ba.Third:
                                        case ba.Fourth:
                                            return r().createElement(ti, {
                                                rank: e,
                                                state: t,
                                                itemIndex: a,
                                                from: s,
                                                to: u,
                                                progressState: i,
                                            });
                                        case ba.Fifth:
                                        case ba.Sixth:
                                            return r().createElement(
                                                r().Fragment,
                                                null,
                                                r().createElement(ni, {
                                                    text: ci(l, c)
                                                        ? Ra(_i.extendedDescription, e)
                                                        : Ra(_i.description, e),
                                                    binding: m,
                                                }),
                                                r().createElement(li, {
                                                    timestamp: d,
                                                    isLastBestUserPointsValueLoading: c,
                                                }),
                                            );
                                        default:
                                            return (
                                                console.warn(
                                                    `Status for rank '${e}' was not mapped to any react component.`,
                                                ),
                                                null
                                            );
                                    }
                                })(),
                            )
                        );
                    },
                    gi = 'FutureRankStatus_base_c2',
                    pi = 'FutureRankStatus_lock_d0',
                    hi = R.strings.comp7.rankItemStatus.future,
                    bi = [ba.Sixth],
                    Ai = ({
                        rank: e,
                        topPercentage: t,
                        from: a,
                        to: s,
                        pointsCount: u,
                        isLastBestUserPointsValueLoading: i,
                        timestamp: o,
                    }) => {
                        const l = (0, n.useMemo)(
                                () =>
                                    e === ba.Sixth
                                        ? { topPercentage: t, pointsCount: u }
                                        : e === ba.Fifth
                                          ? { fromScore: a }
                                          : { fromScore: a, toScore: s },
                                [t, u, a, s, e],
                            ),
                            c = bi.includes(e) && ci(u, i);
                        return r().createElement(
                            'div',
                            { className: gi },
                            r().createElement('div', { className: pi }),
                            r().createElement(ni, {
                                text: Ra(c ? hi.extendedDescription : hi.description, e),
                                binding: l,
                            }),
                            c && r().createElement(li, { timestamp: o, isLastBestUserPointsValueLoading: i }),
                        );
                    },
                    fi = ({
                        rankState: e,
                        rank: t,
                        itemIndex: a,
                        from: n,
                        to: s,
                        progressState: u,
                        pointsCount: i,
                        isLastBestUserPointsValueLoading: o,
                        topPercentage: l,
                        timestamp: c,
                    }) => {
                        switch (e) {
                            case Wr.Previous:
                                return r().createElement(ui, {
                                    rank: t,
                                    rankState: e,
                                    itemIndex: a,
                                    from: n,
                                    to: s,
                                    progressState: u,
                                });
                            case Wr.Current:
                                return r().createElement(Ei, {
                                    rank: t,
                                    rankState: e,
                                    itemIndex: a,
                                    from: n,
                                    to: s,
                                    progressState: u,
                                    pointsCount: i,
                                    isLastBestUserPointsValueLoading: o,
                                    topPercentage: l,
                                    timestamp: c,
                                });
                            case Wr.Future:
                                return r().createElement(Ai, {
                                    rank: t,
                                    topPercentage: l,
                                    from: n,
                                    to: s,
                                    pointsCount: i,
                                    isLastBestUserPointsValueLoading: o,
                                    timestamp: c,
                                });
                            default:
                                return console.error(`Unreachable code for state '${e}' in RankStatusResolver.`), null;
                        }
                    };
                let vi;
                !(function (e) {
                    (e.Progress = 'progress'), (e.Text = 'text');
                })(vi || (vi = {}));
                const Ci = {
                        '--pageContentWidth': '78vw',
                        base: 'RankItem_base_60',
                        rankEmblem__future: 'RankItem_rankEmblem__future_08',
                        rankDescription: 'RankItem_rankDescription_32',
                        rankDescription__text: 'RankItem_rankDescription__text_90',
                        rankDescription__progress: 'RankItem_rankDescription__progress_e2',
                        rankDescription__viewed: 'RankItem_rankDescription__viewed_6b',
                        rankInfo: 'RankItem_rankInfo_6f',
                        dividerContainer: 'RankItem_dividerContainer_0f',
                        fadeIn: 'RankItem_fadeIn_95',
                        fadeInThreeQuarters: 'RankItem_fadeInThreeQuarters_f1',
                        fadeInHalf: 'RankItem_fadeInHalf_8a',
                        fadeOut: 'RankItem_fadeOut_56',
                        fadeInWithScale: 'RankItem_fadeInWithScale_68',
                        slideUp: 'RankItem_slideUp_74',
                        scale: 'RankItem_scale_6b',
                        raysAppearance: 'RankItem_raysAppearance_a8',
                        rotate: 'RankItem_rotate_da',
                        'reverse-rotate': 'RankItem_reverse-rotate_3e',
                        glowAppearance: 'RankItem_glowAppearance_90',
                        highlightAppearance: 'RankItem_highlightAppearance_5c',
                        blink: 'RankItem_blink_7e',
                        slideUpIn: 'RankItem_slideUpIn_ee',
                    },
                    Fi = (0, G.Pi)(({ itemIndex: e, isViewed: t, hasDivider: a = !0 }) => {
                        const n = Vr().model,
                            s = n.root.get(),
                            u = s.topPercentage,
                            i = s.lastBestUserPointsValue,
                            o = s.leaderboardUpdateTimestamp,
                            l = s.isLastBestUserPointsValueLoading,
                            c = n.qualificationModel.isActive.get(),
                            d = w().mediaSize,
                            m = n.computes.item(e),
                            _ = m.rank,
                            E = m.from,
                            g = m.to,
                            p = n.computes.divisionsConfig(e),
                            h = n.computes.rankSettings(e, c),
                            b = h.state,
                            A = h.division,
                            v = h.hasInfo,
                            C = ((e) => {
                                switch (!0) {
                                    case e >= F.ExtraLarge:
                                        return Da.x420;
                                    case e >= F.Large:
                                        return Da.x320;
                                    case e >= F.Medium:
                                        return Da.x260;
                                    default:
                                        return Da.x200;
                                }
                            })(d),
                            D = qs(b, _, c),
                            B = ((e, t) => (t ? (e === Wr.Current ? di.Active : di.Inactive) : di.Hidden))(b, t),
                            R = ((e, t) => {
                                const a = Ca(t);
                                switch (e) {
                                    case Wr.Previous:
                                    case Wr.Current:
                                        return a ? vi.Progress : vi.Text;
                                    default:
                                        return vi.Text;
                                }
                            })(b, _);
                        return r().createElement(
                            'div',
                            { className: Ci.base },
                            r().createElement(
                                On,
                                { rank: _, from: E, to: g, topPercentage: u, divisions: p.list },
                                r().createElement(Gs, {
                                    size: C,
                                    rank: _,
                                    division: A,
                                    state: D,
                                    classNames: { rankEmblem: Ci[`rankEmblem__${b}`] },
                                }),
                            ),
                            r().createElement(
                                'div',
                                {
                                    className: f()(
                                        Ci.rankDescription,
                                        Ci[`rankDescription__${R}`],
                                        t && Ci.rankDescription__viewed,
                                    ),
                                },
                                v &&
                                    r().createElement(
                                        'div',
                                        { className: Ci.rankInfo },
                                        r().createElement(Ys, { rank: _, from: E, topPercentage: u }),
                                    ),
                                r().createElement(fi, {
                                    rankState: b,
                                    rank: _,
                                    itemIndex: e,
                                    from: E,
                                    to: g,
                                    progressState: B,
                                    pointsCount: i,
                                    isLastBestUserPointsValueLoading: l,
                                    topPercentage: u,
                                    timestamp: o,
                                }),
                            ),
                            a &&
                                r().createElement(
                                    'div',
                                    { className: Ci.dividerContainer, style: { '--emblemSize': `${C}rem` } },
                                    r().createElement(Zs, null),
                                ),
                        );
                    }),
                    Di = 'RankItemContainer_base_b3',
                    Bi = 'RankItemContainer_title_d5',
                    wi = 'RankItemContainer_title__active_f0',
                    Ri = (0, G.Pi)(({ itemIndex: e, itemWidth: t, isViewed: a, onMouseDown: n, hasDivider: s }) => {
                        const u = Vr().model.computes.item(e);
                        return r().createElement(
                            'div',
                            { className: Di, style: { '--itemWidth': `${t}rem` }, onMouseDown: n },
                            r().createElement('div', { className: f()(Bi, a && wi) }, xa(u.rank)),
                            r().createElement(Fi, { itemIndex: e, isViewed: a, hasDivider: s }),
                        );
                    }),
                    yi = 'Progression_base_97',
                    xi = { base: 'Progression_areaContainer_09', wrapper: 'Progression_areaWrapper_5f' },
                    Si = { base: 'Progression_bar_4d' },
                    ki = (0, G.Pi)(({ staticContent: e, className: t }) => {
                        const a = Vr().model,
                            s = a.root.get().currentItemIndex,
                            u = a.computes.itemsLength(),
                            i = ((e) => (e >= F.ExtraLarge ? 640 : e >= F.Large ? 500 : e >= F.Medium ? 440 : 400))(
                                w().mediaSize,
                            ),
                            o = bs(i),
                            l = Hs(i),
                            c = (0, n.useState)(s),
                            d = c[0],
                            m = c[1],
                            _ = (0, n.useCallback)(
                                (e) => () => {
                                    H.playClick(), m(e);
                                },
                                [],
                            );
                        return (
                            (0, n.useLayoutEffect)(() => {
                                l.scrollPosition.start({ scrollPosition: viewEnv.remToPx(s * i), immediate: !0 });
                            }, []),
                            (0, n.useLayoutEffect)(() => {
                                m(s);
                            }, [s]),
                            r().createElement(
                                Os,
                                {
                                    api: l,
                                    stuckIndex: d,
                                    itemWidth: i,
                                    itemsOffset: o,
                                    staticContent: e,
                                    onStick: m,
                                    className: f()(yi, t),
                                    areaClassNames: xi,
                                    barClassNames: Si,
                                },
                                na(u, (e) =>
                                    r().createElement(Ri, {
                                        key: e,
                                        itemIndex: e,
                                        isViewed: d === e,
                                        hasDivider: e < u - 1,
                                        itemWidth: i,
                                        onMouseDown: _(e),
                                    }),
                                ),
                            )
                        );
                    }),
                    Ni = R.strings.comp7.qualification,
                    Pi = { hasHtmlContent: !0 },
                    Ti = ({ maxBattlesCount: e, children: t }) =>
                        r().createElement(
                            qe,
                            {
                                header: Ni.conditionTooltip.header(),
                                body: oa(Ni.conditionTooltip.body(e), { maxBattlesCount: e }),
                                args: Pi,
                            },
                            r().createElement('div', null, t),
                        ),
                    Ii = 'BattlesCounter_base_f1',
                    Li = 'BattlesCounter_battlesCount_ef',
                    Mi = ({ battlesCount: e, maxBattlesCount: t, className: a }) =>
                        r().createElement(Qn, {
                            text: R.strings.comp7.qualification.counter(),
                            binding: {
                                battlesCount: r().createElement('div', { className: Li }, e),
                                maxBattlesCount: t,
                            },
                            classMix: f()(Ii, a),
                        }),
                    Oi = {
                        '--pageContentWidth': '78vw',
                        base: 'QualificationBattleItem_base_0d',
                        base__size_234: 'QualificationBattleItem_base__size_234_ab',
                        battleBackground: 'QualificationBattleItem_battleBackground_67',
                        base__inProgress: 'QualificationBattleItem_base__inProgress_2a',
                        blink: 'QualificationBattleItem_blink_3b',
                        fadeIn: 'QualificationBattleItem_fadeIn_c9',
                        fadeInThreeQuarters: 'QualificationBattleItem_fadeInThreeQuarters_20',
                        fadeInHalf: 'QualificationBattleItem_fadeInHalf_89',
                        fadeOut: 'QualificationBattleItem_fadeOut_c3',
                        fadeInWithScale: 'QualificationBattleItem_fadeInWithScale_4f',
                        slideUp: 'QualificationBattleItem_slideUp_1f',
                        scale: 'QualificationBattleItem_scale_37',
                        raysAppearance: 'QualificationBattleItem_raysAppearance_8f',
                        rotate: 'QualificationBattleItem_rotate_2d',
                        'reverse-rotate': 'QualificationBattleItem_reverse-rotate_9d',
                        glowAppearance: 'QualificationBattleItem_glowAppearance_56',
                        highlightAppearance: 'QualificationBattleItem_highlightAppearance_a0',
                        slideUpIn: 'QualificationBattleItem_slideUpIn_be',
                    },
                    Hi = { notPlayed: 'notFinished', inProgress: 'notFinished', victory: 'victory', defeat: 'defeat' },
                    $i = { x173: 173, x234: 234 },
                    Ui = ({ className: e, state: t, size: a = 'x173' }) => {
                        const n = $i[a],
                            s = R.images.gui.maps.icons.comp7.icons.$dyn(`battle_${Hi[t]}`);
                        return r().createElement(
                            'div',
                            { className: f()(Oi.base, e, Oi[`base__${t}`], Oi[`base__size_${n}`]) },
                            r().createElement('div', {
                                className: Oi.battleBackground,
                                style: { backgroundImage: `url(${s})`, '--imageSize': `${n}rem` },
                            }),
                        );
                    },
                    Wi = (0, G.Pi)(({ index: e, className: t }) => {
                        const a = Vr().model,
                            n = w().mediaSize,
                            s = a.computes.qualificationBattle(e);
                        return r().createElement(Ui, {
                            state: s.state,
                            className: t,
                            key: e,
                            size: n >= F.ExtraLarge ? 'x234' : 'x173',
                        });
                    }),
                    zi = 'BattlesProgression_base_a1',
                    Gi = 'BattlesProgression_item_73',
                    ji = (0, G.Pi)(({ className: e }) => {
                        const t = Vr().model;
                        return r().createElement(
                            'div',
                            { className: f()(zi, e) },
                            na(t.computes.qualificationBattlesLength(), (e) =>
                                r().createElement(Wi, { index: e, className: Gi, key: e }),
                            ),
                        );
                    }),
                    qi = 'Qualification_base_0f',
                    Vi = 'Qualification_content_64',
                    Qi = 'Qualification_footer_8f',
                    Xi = 'Qualification_qualificationEmblem_e2',
                    Yi = 'Qualification_battlesProgression_51',
                    Ki = 'Qualification_counterDescription_20',
                    Zi = 'Qualification_ratingCalculationDescription_7a',
                    Ji = 'Qualification_timerIcon_35',
                    eo = 'Qualification_conditionContainer_c4',
                    to = 'Qualification_condition_23',
                    ao = 'Qualification_rewardsDescription_c2',
                    no = 'Qualification_infoIcon_fe',
                    ro = 'Qualification_rewardsButton_db',
                    so = 'Qualification_buttonIcon_39',
                    uo = 'Qualification_waiting_de',
                    io = R.strings.comp7.qualification,
                    oo = { base: ro, icon: so },
                    lo = (0, G.Pi)(({ className: e }) => {
                        const t = Vr(),
                            a = t.model,
                            n = t.controls,
                            s = a.qualificationModel.battlesCount.get(),
                            u = a.qualificationModel.maxBattlesCount.get(),
                            i = a.qualificationModel.isRatingCalculation.get(),
                            o = a.isParallaxPreloaded.get(),
                            l = (0, ke.useSpring)({
                                from: { opacity: 0 },
                                to: Z() ? { opacity: o ? 1 : 0 } : { opacity: 1 },
                                delay: 300,
                                config: { duration: 300 },
                            });
                        return Z() && !o
                            ? r().createElement('div', { className: uo }, r().createElement(tt, null))
                            : r().createElement(
                                  ke.animated.div,
                                  { style: l, className: f()(qi, e) },
                                  r().createElement(
                                      'div',
                                      { className: Vi },
                                      r().createElement('div', { className: Xi }),
                                      i
                                          ? r().createElement(
                                                r().Fragment,
                                                null,
                                                r().createElement(Mi, { battlesCount: s, maxBattlesCount: u }),
                                                r().createElement(
                                                    qe,
                                                    { body: R.strings.comp7.qualification.ratingCalculationTooltip() },
                                                    r().createElement(
                                                        'div',
                                                        null,
                                                        r().createElement(Qn, {
                                                            text: io.ratingCalculationDescription(),
                                                            binding: {
                                                                timerIcon: r().createElement('div', { className: Ji }),
                                                            },
                                                            classMix: Zi,
                                                        }),
                                                    ),
                                                ),
                                            )
                                          : r().createElement(Jn, {
                                                text: io.counterWithDescription(),
                                                classMix: Ki,
                                                binding: {
                                                    counter: r().createElement(Mi, {
                                                        battlesCount: s,
                                                        maxBattlesCount: u,
                                                    }),
                                                },
                                            }),
                                      r().createElement(ji, { className: Yi }),
                                  ),
                                  r().createElement(
                                      'div',
                                      { className: Qi },
                                      r().createElement(
                                          'div',
                                          { className: eo },
                                          r().createElement(Jn, {
                                              text: io.condition(u),
                                              classMix: to,
                                              binding: { maxBattlesCount: u },
                                          }),
                                          r().createElement(
                                              Ti,
                                              { maxBattlesCount: u },
                                              r().createElement('div', { className: no }),
                                          ),
                                      ),
                                      r().createElement(Qn, { text: io.rewardsDescription(), classMix: ao }),
                                      r().createElement(z, {
                                          caption: io.rewardsButton(),
                                          classNames: oo,
                                          onMouseEnter: () => n.setRewardLayerVisible(!0),
                                          onMouseLeave: () => n.setRewardLayerVisible(!1),
                                          onClick: () => n.goToRankRewardsPage(),
                                          soundHover: 'comp_7_rank_rewards_hover',
                                      }),
                                  ),
                              );
                    }),
                    co = 'ProgressionPage_base_fa',
                    mo = 'ProgressionPage_parallaxContainer_c4',
                    _o = 'ProgressionPage_contentWrapper_cf',
                    Eo = 'ProgressionPage_content_4a',
                    go = 'ProgressionPage_content__progression_c5',
                    po = 'ProgressionPage_footer_d1',
                    ho = R.strings.comp7.page.heading,
                    bo = (0, G.Pi)(() => {
                        const e = Vr().model.qualificationModel.isActive.get(),
                            t = (0, ke.useSpring)(me);
                        return r().createElement(
                            'div',
                            { className: co },
                            Z() && e && r().createElement(ps, { className: mo }),
                            r().createElement(rt, { className: X }, e ? ho.qualification() : ho.progression()),
                            r().createElement(Nr, null),
                            e
                                ? r().createElement('div', { className: _o }, r().createElement(lo, { className: Eo }))
                                : r().createElement(
                                      ke.animated.div,
                                      { style: t, className: _o },
                                      r().createElement(ki, {
                                          className: f()(Eo, go),
                                          staticContent: r().createElement(ls, { className: po }),
                                      }),
                                  ),
                        );
                    }),
                    Ao = { context: 'model.progressionModel' },
                    fo = ue()(
                        ({ observableModel: e }) => {
                            const t = {
                                    root: e.object(),
                                    qualification: e.primitives(['isActive'], 'qualificationModel'),
                                },
                                a = e.array('items'),
                                n = (0, _e.Om)(() => a.get().length),
                                r = (0, _e.Om)(
                                    (e) => {
                                        const t = he(a.get(), e);
                                        if (!t) throw new Error(`rank rewards item with index ${e} was not found`);
                                        return {
                                            hasRewardsReceived: t.hasRewardsReceived,
                                            rank: t.rank,
                                            from: t.from,
                                            to: t.to,
                                        };
                                    },
                                    { equals: te },
                                ),
                                s = (0, _e.Om)(
                                    (e) => {
                                        const t = he(a.get(), e);
                                        if (!t) throw new Error(`rank rewards item with index ${e} was not found`);
                                        return fe(t.rewards, (e) => Object.assign({}, e));
                                    },
                                    { equals: te },
                                ),
                                u = (0, _e.Om)(
                                    (e) => {
                                        const t = he(s(e), 0);
                                        if (!t)
                                            throw new Error(
                                                `rank rewards item with index ${e} has no any main reward at index: 0`,
                                            );
                                        return t;
                                    },
                                    { equals: te },
                                ),
                                i = (0, _e.Om)((e) => [...ve(s(e), 1)], { equals: te }),
                                o = (0, _e.Om)((e) => {
                                    const t = he(a.get(), e);
                                    if (!t) throw new Error(`item with index ${e} was not found`);
                                    const n = fe(t.divisions, (e) => Object.assign({}, e));
                                    return Ur(n);
                                }),
                                l = (0, _e.Om)(
                                    () => {
                                        const e = Fe(a.get(), (e) => !e.hasRewardsReceived);
                                        return {
                                            nextNotAchievedItemIndex: null != e ? e : n(),
                                            hasForceScroll: -1 !== t.root.get().initialItemIndex,
                                        };
                                    },
                                    { equals: ct },
                                );
                            return Object.assign({}, t, {
                                computes: {
                                    rankRewardsItemsLength: n,
                                    rankRewardsItem: r,
                                    mainReward: u,
                                    additionalRewards: i,
                                    additionalRewardsCount: (0, _e.Om)((e) => i(e).length),
                                    divisionsString: o,
                                    scrollingSettings: l,
                                },
                            });
                        },
                        ({ externalModel: e, model: t }) => {
                            const a = e.createCallback((e, t) => ({ rank: e, index: t }), 'onPreviewOpen');
                            return {
                                goToPreview: (0, ae.aD)((e, n) => {
                                    const r = t.computes.rankRewardsItem(e).rank;
                                    a(r, n);
                                }),
                            };
                        },
                    ),
                    vo = fo[0],
                    Co = fo[1];
                var Fo = a(9887),
                    Do = a.n(Fo);
                const Bo = ['xl', 'lg', 'md', 'sm', 'xs'],
                    wo = (e) => e.includes('_') && ((e) => Bo.includes(e))(e.split('_').at(-1)),
                    Ro = [F.ExtraLarge, F.Large, F.Medium, F.Small, F.ExtraSmall],
                    yo = (e, t) =>
                        Object.keys(e).reduce((a, n) => {
                            if (n in a) return a;
                            if (wo(n)) {
                                const r = n.split('_').slice(0, -1).join('_');
                                if (r in a) return a;
                                const s = Ro.indexOf(t),
                                    u = (-1 !== s ? Bo.slice(s) : [])
                                        .map((e) => r + '_' + e)
                                        .find((t) => void 0 !== e[t]),
                                    i = u ? e[u] : void 0;
                                return (a[r] = void 0 !== i ? i : e[r]), a;
                            }
                            const r = e[n];
                            return (
                                void 0 === r ||
                                    ((e, t) => Bo.some((a) => void 0 !== t[`${e}_${a}`]))(n, e) ||
                                    (a[n] = r),
                                a
                            );
                        }, {}),
                    xo = (e, t = yo) => {
                        const a = (
                            (e, t = yo) =>
                            (a) => {
                                const s = w().mediaSize,
                                    u = (0, n.useMemo)(() => t(a, s), [a, s]);
                                return r().createElement(e, u);
                            }
                        )(e, t);
                        return r().memo((t) =>
                            Object.keys(t).some((e) => wo(e) && void 0 !== t[e])
                                ? r().createElement(a, t)
                                : r().createElement(e, t),
                        );
                    },
                    So = {
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
                    ko = [
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
                function No() {
                    return (
                        (No =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        No.apply(this, arguments)
                    );
                }
                Object.keys(Do());
                const Po = {
                        XL: { mt: So.mt__XL, mr: So.mr__XL, mb: So.mb__XL, ml: So.ml__XL },
                        LG: { mt: So.mt__LG, mr: So.mr__LG, mb: So.mb__LG, ml: So.ml__LG },
                        MDp: { mt: So.mt__MDp, mr: So.mr__MDp, mb: So.mb__MDp, ml: So.ml__MDp },
                        MD: { mt: So.mt__MD, mr: So.mr__MD, mb: So.mb__MD, ml: So.ml__MD },
                        SMp: { mt: So.mt__SMp, mr: So.mr__SMp, mb: So.mb__SMp, ml: So.ml__SMp },
                        SM: { mt: So.mt__SM, mr: So.mr__SM, mb: So.mb__SM, ml: So.ml__SM },
                        XS: { mt: So.mt__XS, mr: So.mr__XS, mb: So.mb__XS, ml: So.ml__XS },
                    },
                    To = (Object.keys(Po), ['mt', 'mr', 'mb', 'ml']),
                    Io = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    Lo = xo((e) => {
                        let t = e.className,
                            a = e.width,
                            s = e.height,
                            u = e.m,
                            i = e.mt,
                            o = void 0 === i ? u : i,
                            l = e.mr,
                            c = void 0 === l ? u : l,
                            d = e.mb,
                            m = void 0 === d ? u : d,
                            _ = e.ml,
                            E = void 0 === _ ? u : _,
                            g = e.column,
                            p = e.row,
                            h = e.flexDirection,
                            b = void 0 === h ? (g ? 'column' : p && 'row') || void 0 : h,
                            A = e.flexStart,
                            v = e.center,
                            C = e.flexEnd,
                            F = e.spaceBetween,
                            D = e.spaceAround,
                            B = e.justifyContent,
                            w =
                                void 0 === B
                                    ? (A ? 'flex-start' : v && 'center') ||
                                      (C && 'flex-end') ||
                                      (F && 'space-between') ||
                                      (D && 'space-around') ||
                                      void 0
                                    : B,
                            R = e.alignItems,
                            y = void 0 === R ? (A ? 'flex-start' : v && 'center') || (C && 'flex-end') || void 0 : R,
                            x = e.alignSelf,
                            S = e.wrap,
                            k = e.flexWrap,
                            N = void 0 === k ? (S ? 'wrap' : void 0) : k,
                            P = e.grow,
                            T = e.shrink,
                            I = e.flex,
                            L = void 0 === I ? (P || T ? `${P ? 1 : 0} ${T ? 1 : 0} auto` : void 0) : I,
                            M = e.style,
                            O = e.children,
                            H = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, ko);
                        const $ = (0, n.useMemo)(() => {
                                const e = { mt: o, mr: c, mb: m, ml: E },
                                    t = ((e) =>
                                        To.reduce((t, a) => {
                                            const n = e[a];
                                            return n && 'number' != typeof n ? t.concat(Po[!0 === n ? 'MD' : n][a]) : t;
                                        }, []))(e),
                                    n = ((e) =>
                                        To.reduce((t, a) => {
                                            const n = e[a];
                                            return 'number' == typeof n && (t[Io[a]] = n + 'rem'), t;
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, M, n, {
                                        width: void 0 !== a && 'number' == typeof a ? a + 'rem' : a,
                                        height: void 0 !== s && 'number' == typeof s ? s + 'rem' : s,
                                        flex: L,
                                        alignSelf: x,
                                        display: b || y ? 'flex' : void 0,
                                        flexDirection: b,
                                        flexWrap: N,
                                        justifyContent: w,
                                        alignItems: y,
                                    }),
                                    computedClassNames: t,
                                };
                            }, [a, s, o, c, m, E, M, L, x, b, N, w, y]),
                            U = $.computedStyle,
                            W = $.computedClassNames;
                        return r().createElement('div', No({ className: f()(So.base, ...W, t), style: U }, H), O);
                    });
                var Mo = a(3532),
                    Oo = a.n(Mo);
                const Ho = {
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
                    $o = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function Uo() {
                    return (
                        (Uo =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Uo.apply(this, arguments)
                    );
                }
                Object.keys(Do());
                const Wo = Object.keys(Oo()),
                    zo = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    Go = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    jo = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    qo = {
                        XL: { mt: 'XL', mr: 'XL', mb: 'XL', ml: 'XL' },
                        LG: { mt: 'LG', mr: 'LG', mb: 'LG', ml: 'LG' },
                        MDp: { mt: 'MDp', mr: 'MDp', mb: 'MDp', ml: 'MDp' },
                        MD: { mt: 'MD', mr: 'MD', mb: 'MD', ml: 'MD' },
                        SMp: { mt: 'SMp', mr: 'SMp', mb: 'SMp', ml: 'SMp' },
                        SM: { mt: 'SM', mr: 'SM', mb: 'SM', ml: 'SM' },
                        XS: { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    },
                    Vo =
                        (Object.keys(qo),
                        {
                            'heading-H144': { mt: 'XL', mr: 'LG', mb: 'LG', ml: 'LG' },
                            'heading-H73': { mt: 'LG', mr: 'MD', mb: 'MD', ml: 'MD' },
                            'heading-H56': zo,
                            'heading-H36': zo,
                            'heading-H28': Go,
                            'heading-H24': Go,
                            'heading-H24R': Go,
                            'heading-H22': Go,
                            'heading-H20R': Go,
                            'heading-H18': Go,
                            'heading-H15': jo,
                            'heading-H14': jo,
                            'paragraph-P24': Go,
                            'paragraph-P18': Go,
                            'paragraph-P16': Go,
                            'paragraph-P14': jo,
                            'paragraph-P12': jo,
                            'paragraph-P10': jo,
                        }),
                    Qo =
                        (Object.keys(Vo),
                        (e) =>
                            e
                                ? ((e) => Wo.includes(e))(e)
                                    ? { colorClassName: Ho[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    Xo = xo((e) => {
                        let t = e.text,
                            a = e.variant,
                            s = e.className,
                            u = e.color,
                            i = e.m,
                            o = e.mt,
                            l = void 0 === o ? i : o,
                            c = e.mr,
                            d = void 0 === c ? i : c,
                            m = e.mb,
                            _ = void 0 === m ? i : m,
                            E = e.ml,
                            g = void 0 === E ? i : E,
                            p = e.style,
                            h = e.format,
                            b = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, $o);
                        const A = (0, n.useMemo)(() => {
                                const e = Qo(u),
                                    t = e.colorClassName,
                                    a = e.colorStyle,
                                    n = void 0 === a ? {} : a;
                                return { computedStyle: Object.assign({}, p, n), colorClassName: t };
                            }, [p, u]),
                            v = A.computedStyle,
                            C = A.colorClassName;
                        return r().createElement(
                            Lo,
                            Uo(
                                {
                                    className: f()(Ho.base, a && Ho[a], C, s),
                                    style: v,
                                    mt: !0 === l ? Vo[a || 'paragraph-P16'].mt : l,
                                    mr: !0 === d ? Vo[a || 'paragraph-P16'].mr : d,
                                    mb: !0 === _ ? Vo[a || 'paragraph-P16'].mb : _,
                                    ml: !0 === g ? Vo[a || 'paragraph-P16'].ml : g,
                                },
                                b,
                            ),
                            void 0 !== h ? r().createElement(Qn, Uo({}, h, { text: t })) : t,
                        );
                    });
                let Yo, Ko, Zo, Jo, el, tl, al;
                function nl() {
                    return (
                        (nl =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        nl.apply(this, arguments)
                    );
                }
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
                })(Yo || (Yo = {})),
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
                    })(Ko || (Ko = {})),
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
                    })(Zo || (Zo = {})),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(Jo || (Jo = {})),
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
                    })(el || (el = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(tl || (tl = {})),
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
                    })(al || (al = {}));
                const rl = ({ children: e, tooltipArgs: t, className: a }) => {
                        if (!t) return e;
                        const n = r().createElement('div', { className: a }, e);
                        if (t.header || t.body) return r().createElement(qe, t, n);
                        const s = t.contentId,
                            u = t.args,
                            i = null == u ? void 0 : u.contentId;
                        return s || i
                            ? r().createElement(We, nl({}, t, { contentId: s || i }), n)
                            : r().createElement(Cr, t, n);
                    },
                    sl = [
                        Yo.Items,
                        Yo.Equipment,
                        Yo.Xp,
                        Yo.XpFactor,
                        Yo.Blueprints,
                        Yo.BlueprintsAny,
                        Yo.Goodies,
                        Yo.Berths,
                        Yo.Slots,
                        Yo.Tokens,
                        Yo.CrewSkins,
                        Yo.CrewBooks,
                        Yo.Customizations,
                        Yo.CreditsFactor,
                        Yo.TankmenXp,
                        Yo.TankmenXpFactor,
                        Yo.FreeXpFactor,
                        Yo.BattleToken,
                        Yo.HBVehicleUnlock,
                        Yo.PremiumUniversal,
                        Yo.NaturalCover,
                        Yo.BpCoin,
                        Yo.BattlePassSelectToken,
                        Yo.BattlaPassFinalAchievement,
                        Yo.BattleBadge,
                        Yo.BonusX5,
                        Yo.CrewBonusX3,
                        Yo.NewYearFillers,
                        Yo.NewYearInvoice,
                        Yo.EpicSelectToken,
                        Yo.Comp7TokenWeeklyReward,
                        Yo.BattleBoosterGift,
                        Yo.CosmicLootboxCommon,
                        Yo.CosmicLootboxSilver,
                    ],
                    ul = [Yo.Gold, Yo.Credits, Yo.Crystal, Yo.FreeXp],
                    il = [Yo.BattlePassPoints],
                    ol = [Yo.PremiumPlus, Yo.Premium],
                    ll = ['engravings', 'backgrounds'],
                    cl = ['engraving', 'background'],
                    dl = (e, t = Zo.Small) => {
                        const a = e.name,
                            n = e.type,
                            r = e.value,
                            s = e.icon,
                            u = e.item,
                            i = e.dogTagType,
                            o = e.iconSmall,
                            l = ((e) => {
                                switch (e) {
                                    case Zo.S600x450:
                                        return 'c_600x450';
                                    case Zo.S400x300:
                                        return 'c_400x300';
                                    case Zo.S296x222:
                                        return 'c_296x222';
                                    case Zo.S232x174:
                                        return 'c_232x174';
                                    case Zo.Big:
                                        return 'c_80x80';
                                    case Zo.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(t);
                        switch (a) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${n}_${r}`;
                            case 'premium':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${a}_plus_${r}`;
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${a}_${r}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${u}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${t}.${s}`;
                            case 'tokens':
                            case 'battleToken':
                                return 'big' === t
                                    ? e.iconBig.replace('..', 'img://gui')
                                    : e.iconSmall.replace('..', 'img://gui');
                            case 'hbUnlockVehicles':
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${a}`;
                            case 'lootBoxToken':
                            case 'customizations':
                            case 'styleProgress':
                            case 'crewSkins':
                            case 'goodies':
                            case 'groups':
                            case 'tmanToken':
                            case 'battlePassSelectToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${s}`;
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${t}.${s}`;
                            case 'entitlements':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${o}`;
                            case 'dogTagComponents':
                                return ((e, t, a) => {
                                    const n = ll[e];
                                    if (n) {
                                        const r = R.images.gui.maps.icons.dogtags.$dyn(t).$dyn(n),
                                            s = r.$dyn(a);
                                        return s ? `${s}` : `${r.$dyn(cl[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(i, t, s);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${l}.${s}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${l}.${s}`;
                            case 'xp':
                            case 'xpFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.exp`;
                            case 'creditsFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.credits`;
                            case 'tankmenXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.tankmenXP`;
                            case 'dailyXPFactor':
                            case 'freeXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.freeXP`;
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${l}.${s}`;
                        }
                    },
                    ml = {
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
                    _l = ({
                        name: e,
                        image: t,
                        isPeriodic: a = !1,
                        size: n = Zo.Big,
                        special: s,
                        value: u,
                        valueType: i,
                        style: o,
                        className: l,
                        classNames: c,
                        tooltipArgs: d,
                        periodicIconTooltipArgs: m,
                    }) => {
                        const _ = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case el.BATTLE_BOOSTER:
                                    case el.BATTLE_BOOSTER_REPLACE:
                                        return tl.BATTLE_BOOSTER;
                                }
                            })(s),
                            E = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case el.BATTLE_BOOSTER:
                                        return al.BATTLE_BOOSTER;
                                    case el.BATTLE_BOOSTER_REPLACE:
                                        return al.BATTLE_BOOSTER_REPLACE;
                                    case el.BUILT_IN_EQUIPMENT:
                                        return al.BUILT_IN_EQUIPMENT;
                                    case el.EQUIPMENT_PLUS:
                                        return al.EQUIPMENT_PLUS;
                                    case el.EQUIPMENT_TROPHY_BASIC:
                                        return al.EQUIPMENT_TROPHY_BASIC;
                                    case el.EQUIPMENT_TROPHY_UPGRADED:
                                        return al.EQUIPMENT_TROPHY_UPGRADED;
                                    case el.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return al.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case el.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return al.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case el.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return al.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case el.PROGRESSION_STYLE_UPGRADED_1:
                                        return al.PROGRESSION_STYLE_UPGRADED_1;
                                    case el.PROGRESSION_STYLE_UPGRADED_2:
                                        return al.PROGRESSION_STYLE_UPGRADED_2;
                                    case el.PROGRESSION_STYLE_UPGRADED_3:
                                        return al.PROGRESSION_STYLE_UPGRADED_3;
                                    case el.PROGRESSION_STYLE_UPGRADED_4:
                                        return al.PROGRESSION_STYLE_UPGRADED_4;
                                }
                            })(s),
                            g = ((e, t) => {
                                if (void 0 === e) return null;
                                switch (t) {
                                    case Jo.MULTI: {
                                        const t = Number(e);
                                        return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
                                    }
                                    case Jo.CURRENCY:
                                    case Jo.NUMBER:
                                        return r().createElement(Tt, { format: 'integral', value: Number(e) });
                                    case Jo.PREMIUM_PLUS: {
                                        const t = Number(e);
                                        return isNaN(t) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(u, i);
                        return r().createElement(
                            'div',
                            { className: f()(ml.base, ml[`base__${n}`], l), style: o },
                            r().createElement(
                                rl,
                                { tooltipArgs: d, className: ml.tooltipWrapper },
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement(
                                        'div',
                                        { className: f()(ml.image, null == c ? void 0 : c.image) },
                                        _ &&
                                            r().createElement('div', {
                                                className: f()(ml.highlight, null == c ? void 0 : c.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${_}_highlight)`,
                                                },
                                            }),
                                        t &&
                                            r().createElement('div', {
                                                className: f()(ml.icon, null == c ? void 0 : c.rewardIcon),
                                                style: { backgroundImage: `url(${t})` },
                                            }),
                                        E &&
                                            r().createElement('div', {
                                                className: f()(ml.overlay, null == c ? void 0 : c.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${E}_overlay)`,
                                                },
                                            }),
                                    ),
                                    g &&
                                        r().createElement(
                                            'div',
                                            {
                                                className: f()(
                                                    ml.info,
                                                    ml[`info__${e}`],
                                                    i === Jo.MULTI && ml.info__multi,
                                                    null == c ? void 0 : c.info,
                                                ),
                                            },
                                            g,
                                        ),
                                ),
                            ),
                            a &&
                                r().createElement(
                                    rl,
                                    { tooltipArgs: m },
                                    r().createElement('div', {
                                        className: f()(ml.timer, null == c ? void 0 : c.periodicIcon),
                                    }),
                                ),
                        );
                    },
                    El = 'Rewards_base_26',
                    gl = 'Rewards_base__vertical_9f',
                    pl = 'Rewards_reward_7b',
                    hl = 'Rewards_reward__vertical_c6';
                function bl() {
                    return (
                        (bl =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        bl.apply(this, arguments)
                    );
                }
                const Al = r().memo(
                        ({
                            data: e,
                            size: t = Zo.Big,
                            isVertical: a = !1,
                            count: s,
                            classMix: u,
                            rewardItemClassMix: i,
                            boxRewardTooltip: o,
                            boxRewardValue: l,
                        }) => {
                            const c = (0, n.useMemo)(
                                    () =>
                                        s && s < e.length ? `R.images.gui.maps.icons.quests.bonuses.${t}.default` : '',
                                    [s, e.length, t],
                                ),
                                d =
                                    l ||
                                    oa(R.strings.tooltips.quests.awards.additional.bottom(), {
                                        count: e.length - (s || 0),
                                    }),
                                m = f()(El, a && gl, u),
                                _ = f()(pl, a && hl, i);
                            return r().createElement(
                                'div',
                                { className: m },
                                c
                                    ? r().createElement(
                                          r().Fragment,
                                          null,
                                          e
                                              .slice(0, s)
                                              .map((e, a) =>
                                                  r().createElement(
                                                      'div',
                                                      { key: a, className: _ },
                                                      r().createElement(_l, bl({ size: t }, e)),
                                                  ),
                                              ),
                                          r().createElement(
                                              'div',
                                              { className: _ },
                                              r().createElement(_l, {
                                                  name: 'more',
                                                  image: c,
                                                  size: t,
                                                  value: d,
                                                  tooltipArgs: o,
                                              }),
                                          ),
                                      )
                                    : e.map((e, a) =>
                                          r().createElement(
                                              'div',
                                              { key: a, className: _ },
                                              r().createElement(_l, bl({ size: t }, e)),
                                          ),
                                      ),
                            );
                        },
                    ),
                    fl = ['overlayType'];
                function vl() {
                    return (
                        (vl =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        vl.apply(this, arguments)
                    );
                }
                const Cl = (e, t) => {
                        if ('dogTagComponents' === e.name) {
                            if (t === Zo.Big) return Zo.S80x80;
                            if (t === Zo.Small) return Zo.S48x48;
                        }
                        return t;
                    },
                    Fl = (e) => ('vehicles_rent' === e.name ? e.label : e.value),
                    Dl = ({ reward: e, rank: t, index: a }) => {
                        const n = e.tooltipId,
                            r = e.tooltipContentId;
                        return ((e, t, a) => {
                            const n = t && { contentId: t };
                            return Object.assign(
                                {
                                    args: e,
                                    isEnabled: Boolean((e && e.tooltipId) || t),
                                    ignoreMouseClick: !0,
                                    ignoreShowDelay: !t,
                                },
                                n,
                                a,
                            );
                        })(
                            Object.assign({ tooltipId: n }, void 0 !== t && { rank: t }, void 0 !== a && { index: a }),
                            Number(r),
                            { ignoreShowDelay: !0 },
                        );
                    },
                    Bl = ({ reward: e, size: t, rank: a, index: n }) => {
                        const r = e.overlayType,
                            s = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, fl),
                            u = Cl(e, t);
                        return Object.assign({}, s, {
                            size: u,
                            image: dl(e, u),
                            value: Fl(e),
                            valueType:
                                ((i = e.name),
                                sl.includes(i)
                                    ? Jo.MULTI
                                    : ul.includes(i)
                                      ? Jo.CURRENCY
                                      : il.includes(i)
                                        ? Jo.NUMBER
                                        : ol.includes(i)
                                          ? Jo.PREMIUM_PLUS
                                          : Jo.STRING),
                            special: r,
                            tooltipArgs: Dl({ reward: e, rank: a, index: n }),
                            periodicIconTooltipArgs: {
                                header: R.strings.tooltips.periodicReward.header(),
                                body: R.strings.tooltips.periodicReward.comp7.body(),
                            },
                        });
                        var i;
                    },
                    wl = ({ rewards: e, size: t, rank: a, index: n }) =>
                        fe(e, (e) => Bl({ reward: e, size: t, rank: a, index: n })),
                    Rl = ({ reward: e, size: t }) => {
                        const a = vl({}, e),
                            n = Cl(e, t);
                        return Object.assign({}, a, {
                            size: n,
                            image: `R.images.gui.maps.icons.comp7.fakeRewards.${e.icon}${t === Zo.Small ? '' : `_${t}`}`,
                        });
                    },
                    yl = (e, t) => (e > t ? t - 1 : void 0),
                    xl = 'AdditionalRewards_reward_16',
                    Sl = 'AdditionalRewards_vehiclesRentBase_d4',
                    kl = 'AdditionalRewards_vehiclesRentLabel_3e',
                    Nl = Zo.Small,
                    Pl = (0, G.Pi)(({ rank: e, itemIndex: t, visibleRewardsCount: a, className: n }) => {
                        const s = Co().model,
                            u = s.computes.additionalRewards(t),
                            i = s.computes.additionalRewardsCount(t),
                            o = fe(u, (t) => {
                                const a = 'vehicles_rent' === t.name;
                                return Object.assign({}, Bl({ reward: t, size: Nl, rank: e }), {
                                    className: f()(a && Sl),
                                    classNames: { info: f()(a && kl) },
                                });
                            });
                        return r().createElement(Al, {
                            data: o,
                            size: Nl,
                            count: yl(i, a),
                            rewardItemClassMix: xl,
                            boxRewardTooltip: {
                                contentId: R.views.lobby.tooltips.AdditionalRewardsTooltip('resId'),
                                args: { fromIndex: a, rank: e },
                            },
                            classMix: n,
                        });
                    });
                let Tl;
                !(function (e) {
                    (e[(e.NotStarted = 0)] = 'NotStarted'),
                        (e[(e.Active = 1)] = 'Active'),
                        (e[(e.OffSeason = 3)] = 'OffSeason'),
                        (e[(e.Finished = 4)] = 'Finished');
                })(Tl || (Tl = {}));
                const Il = {
                        base: 'Heading_base_99',
                        tooltipArea: 'Heading_tooltipArea_c9',
                        rankEmblem__future: 'Heading_rankEmblem__future_6d',
                        lock: 'Heading_lock_a8',
                        description: 'Heading_description_6f',
                        rankName: 'Heading_rankName_05',
                        rankStatus: 'Heading_rankStatus_63',
                    },
                    Ll = (0, G.Pi)(
                        ({
                            rank: e,
                            from: t,
                            to: a,
                            topPercentage: n,
                            divisions: s,
                            rankEmblemSize: u,
                            rankState: i,
                        }) => {
                            const o = Co().model,
                                l = le().model,
                                c = o.qualification.isActive.get(),
                                d = qs(i, e, c),
                                m = i === Wr.Current && !c;
                            return r().createElement(
                                'div',
                                { className: Il.base },
                                r().createElement(
                                    On,
                                    {
                                        rank: e,
                                        from: t,
                                        to: a,
                                        topPercentage: n,
                                        divisions: s,
                                        className: Il.tooltipArea,
                                        ignoreShowDelay: !0,
                                    },
                                    r().createElement(Gs, {
                                        rank: e,
                                        size: u,
                                        type: Ws.Static,
                                        state: d,
                                        classNames: { rankEmblem: Il[`rankEmblem__${i}`] },
                                    }),
                                    i === Wr.Future && r().createElement('div', { className: Il.lock }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: Il.description },
                                    r().createElement('div', { className: Il.rankName }, xa(e)),
                                    m &&
                                        r().createElement(
                                            'div',
                                            { className: Il.rankStatus },
                                            ((e) => {
                                                switch (e) {
                                                    case Tl.OffSeason:
                                                    case Tl.Finished:
                                                        return R.strings.comp7.rank.achieved();
                                                    case Tl.Active:
                                                        return R.strings.comp7.rank.current();
                                                    default:
                                                        return '';
                                                }
                                            })(l.year.state.get()),
                                        ),
                                ),
                            );
                        },
                    ),
                    Ml = {
                        base: 'Preview_base_1f',
                        base__hovered: 'Preview_base__hovered_ee',
                        icon: 'Preview_icon_f3',
                        icon__small: 'Preview_icon__small_a1',
                        icon__normal: 'Preview_icon__normal_5c',
                        base__mouseDown: 'Preview_base__mouseDown_d0',
                        label: 'Preview_label_2e',
                        base__visibleLabel: 'Preview_base__visibleLabel_92',
                    },
                    Ol = [
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
                    ];
                function Hl() {
                    return (
                        (Hl =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Hl.apply(this, arguments)
                    );
                }
                let $l;
                !(function (e) {
                    (e.SMALL = 'small'), (e.NORMAL = 'normal');
                })($l || ($l = {}));
                const Ul = (0, n.memo)((e) => {
                        let t = e.label,
                            a = e.isVisibleLabel,
                            s = void 0 !== a && a,
                            u = e.autofocus,
                            i = void 0 !== u && u,
                            o = e.soundHover,
                            l = void 0 === o ? 'highlight' : o,
                            c = e.soundClick,
                            d = void 0 === c ? 'play' : c,
                            m = e.size,
                            _ = void 0 === m ? $l.NORMAL : m,
                            E = e.onClick,
                            g = e.onMouseEnter,
                            p = e.onMouseLeave,
                            h = e.onMouseDown,
                            b = e.onMouseUp,
                            A = e.onFocus,
                            v = e.onBlur,
                            C = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, Ol);
                        const F = (0, n.useState)(!1),
                            D = F[0],
                            B = F[1],
                            w = (0, n.useState)(!1),
                            R = w[0],
                            y = w[1],
                            x = (0, n.useState)(i),
                            S = x[0],
                            k = x[1],
                            N = (0, n.useRef)(null),
                            P = (0, n.useCallback)(() => {
                                N.current && (N.current.focus(), k(!0));
                            }, []),
                            T = (0, n.useCallback)(
                                (e) => {
                                    S && null !== N.current && !N.current.contains(e.target) && k(!1);
                                },
                                [S],
                            );
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
                                k(i);
                            }, [i]);
                        const I = (0, n.useCallback)(
                                (e) => {
                                    E && E(e);
                                },
                                [E],
                            ),
                            L = (0, n.useCallback)(
                                (e) => {
                                    B(!0), h && h(e), d && O(d), i && P();
                                },
                                [i, h, P, d],
                            ),
                            M = (0, n.useCallback)(
                                (e) => {
                                    B(!1), b && b(e);
                                },
                                [b],
                            ),
                            H = (0, n.useCallback)(
                                (e) => {
                                    g && g(e), l && O(l), y(!0);
                                },
                                [g, l],
                            ),
                            $ = (0, n.useCallback)(
                                (e) => {
                                    B(!1), y(!1), p && p(e);
                                },
                                [p],
                            ),
                            U = (0, n.useCallback)(
                                (e) => {
                                    k(!0), A && A(e);
                                },
                                [A],
                            ),
                            W = (0, n.useCallback)(
                                (e) => {
                                    k(!1), v && v(e);
                                },
                                [v],
                            ),
                            z = f()(
                                Ml.base,
                                s && Ml.base__visibleLabel,
                                D && Ml.base__mouseDown,
                                R && Ml.base__hovered,
                                S && Ml.base__focused,
                            ),
                            G = f()(Ml.icon, Ml[`icon__${_}`]);
                        return r().createElement(
                            'div',
                            Hl(
                                {
                                    ref: N,
                                    className: z,
                                    onClick: I,
                                    onMouseEnter: H,
                                    onMouseLeave: $,
                                    onMouseDown: L,
                                    onMouseUp: M,
                                    onFocus: U,
                                    onBlur: W,
                                },
                                C,
                            ),
                            r().createElement('div', { className: G }),
                            r().createElement('div', { className: Ml.label }, t),
                        );
                    }),
                    Wl = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    zl = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const Gl = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    jl = (e) =>
                        Gl
                            ? `${e}`
                            : (function (e) {
                                  let t = '';
                                  for (let a = zl.length - 1; a >= 0; a--)
                                      for (; e >= zl[a]; ) (t += Wl[a]), (e -= zl[a]);
                                  return t;
                              })(e),
                    ql = 'MainReward_base_32',
                    Vl = 'MainReward_imageContainer_37',
                    Ql = 'MainReward_highlightContainer_cf',
                    Xl = 'MainReward_highlight_06',
                    Yl = 'MainReward_preview_7a',
                    Kl = 'MainReward_info_58',
                    Zl = 'MainReward_title_6d',
                    Jl = 'MainReward_subTitle_e2',
                    ec = (0, G.Pi)(
                        ({ index: e, rank: t, size: a, hasHighlight: n, onPreviewClick: s, className: u }) => {
                            const i = Co().model.computes.mainReward(e);
                            return r().createElement(
                                'div',
                                { className: f()(ql, u) },
                                r().createElement(
                                    'div',
                                    { className: Vl },
                                    n &&
                                        r().createElement(
                                            'div',
                                            { className: Ql },
                                            r().createElement('div', { className: Xl }),
                                        ),
                                    r().createElement(_l, Bl({ reward: i, size: a, rank: t })),
                                    ((e) => 'styleProgress' === e.name)(i) &&
                                        r().createElement(
                                            'div',
                                            { className: Yl },
                                            r().createElement(Ul, {
                                                label: R.strings.comp7.rewards.preview(),
                                                onClick: s,
                                            }),
                                        ),
                                ),
                                r().createElement(
                                    'div',
                                    { className: Kl },
                                    r().createElement('div', { className: Zl }, i.label),
                                    r().createElement(Jn, {
                                        text: String(R.strings.comp7.rewards.subtitle.$dyn(i.name)),
                                        binding: { vehicleLevel: jl(10) },
                                        classMix: Jl,
                                    }),
                                ),
                            );
                        },
                    ),
                    tc = 'RankRewardsItem_base_a7',
                    ac = 'RankRewardsItem_mainRewardContainer_e0',
                    nc = 'RankRewardsItem_rewardsContainer_69',
                    rc = 'RankRewardsItem_rewardsContainer__qualification_b0',
                    sc = 'RankRewardsItem_statusContainer_bf',
                    uc = 'RankRewardsItem_statusContainer__hidden_c8',
                    ic = 'RankRewardsItem_icon_7d',
                    oc = (0, G.Pi)(
                        ({
                            itemIndex: e,
                            itemWidth: t,
                            rankState: a,
                            mainRewardSize: n,
                            hasHighlight: s,
                            visibleRewardsCount: u,
                            rankEmblemSize: i,
                            isQualification: o,
                            onPreviewClick: l,
                        }) => {
                            const c = Co().model,
                                d = c.root.get().topPercentage,
                                m = c.computes.rankRewardsItem(e),
                                _ = m.rank,
                                E = m.from,
                                g = m.to,
                                p = m.hasRewardsReceived,
                                h = c.computes.divisionsString(e);
                            return r().createElement(
                                'div',
                                { className: tc, style: { '--itemWidth': `${t}rem` } },
                                r().createElement(Ll, {
                                    rank: _,
                                    from: E,
                                    to: g,
                                    divisions: h,
                                    topPercentage: d,
                                    rankEmblemSize: i,
                                    rankState: a,
                                }),
                                r().createElement(ec, {
                                    index: e,
                                    rank: _,
                                    size: n,
                                    hasHighlight: s,
                                    onPreviewClick: l,
                                    className: ac,
                                }),
                                r().createElement(
                                    'div',
                                    { className: f()(nc, o && rc) },
                                    r().createElement(Pl, { itemIndex: e, visibleRewardsCount: u, rank: _ }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: f()(sc, !p && uc) },
                                    r().createElement('div', { className: ic }),
                                    R.strings.comp7.rewards.status.achieved(),
                                ),
                            );
                        },
                    ),
                    lc = (e) => (e >= F.Large ? Da.x110 : e >= F.Medium ? Da.x64 : Da.x48),
                    cc = (e) =>
                        e >= F.ExtraLarge
                            ? Zo.S600x450
                            : e >= F.Large
                              ? Zo.S400x300
                              : e >= F.Medium
                                ? Zo.S296x222
                                : Zo.S232x174,
                    dc = (e) => (e >= D.Medium ? 5 : 4),
                    mc = 'RankRewardsPage_base_fd',
                    _c = 'RankRewardsPage_content_3f',
                    Ec = 'RankRewardsPage_scrollContainer_f2',
                    gc = 'RankRewardsPage_areaContainer_9e',
                    pc = 'RankRewardsPage_areaWrapper_fb',
                    hc = 'RankRewardsPage_bar_59',
                    bc = 'RankRewardsPage_qualificationFooter_71',
                    Ac = { duration: 700, easing: (e) => Math.pow(e, 4) },
                    fc = R.strings.comp7.rewards,
                    vc = (0, G.Pi)(() => {
                        const e = w(),
                            t = e.mediaSize,
                            a = e.mediaWidth,
                            s = Co(),
                            u = s.model,
                            i = s.controls,
                            o = u.root.get(),
                            l = o.currentItemIndex,
                            c = o.initialItemIndex,
                            d = u.qualification.isActive.get(),
                            m = u.computes.rankRewardsItemsLength(),
                            _ = u.computes.scrollingSettings(),
                            E = _.nextNotAchievedItemIndex,
                            g = _.hasForceScroll,
                            p = (0, n.useState)(g ? 'idle' : 'initial'),
                            h = p[0],
                            b = p[1],
                            A = (0, n.useState)(g ? c : E),
                            f = A[0],
                            v = A[1],
                            C = ((e) =>
                                e >= F.ExtraLarge
                                    ? 600
                                    : e >= F.Large
                                      ? 460
                                      : e >= F.Medium
                                        ? 400
                                        : e >= F.Small
                                          ? 340
                                          : 300)(t),
                            D = m * C,
                            B = Hs(C),
                            y = B.scrollPosition,
                            x = B.clampPosition,
                            S = B.contentRef,
                            k = (function () {
                                const e = (0, n.useRef)(!1);
                                return (
                                    (0, n.useEffect)(
                                        () => () => {
                                            e.current = !0;
                                        },
                                        [],
                                    ),
                                    e
                                );
                            })();
                        (0, n.useLayoutEffect)(() => {
                            'idle' === h
                                ? y.start({ scrollPosition: viewEnv.remToPx(c * C), immediate: !0 })
                                : 'initial' === h && y.start({ scrollPosition: viewEnv.remToPx(D), immediate: !0 });
                        }, []),
                            (0, n.useEffect)(
                                () =>
                                    Se(() => {
                                        const e = S.current;
                                        if (e && 'initial' === h) {
                                            const t = x(e, viewEnv.remToPx(E * C - C)),
                                                a = x(e, viewEnv.remToPx(D));
                                            if (t === a) return void b('idle');
                                            y.start({
                                                scrollPosition: t,
                                                from: { scrollPosition: a },
                                                config: Ac,
                                                onStart: () => {
                                                    b('scrolling');
                                                },
                                                onRest: () => {
                                                    k.current || b('idle');
                                                },
                                            });
                                        }
                                    }),
                                [x, S, k, C, E, h, D, y],
                            );
                        const N = (e) => 'idle' === h && e === E && !d,
                            P = (0, ke.useSpring)(me),
                            T = { lineHeight: 1.5 },
                            I = bs(C) - C;
                        return r().createElement(
                            'div',
                            { className: mc },
                            r().createElement(rt, { className: X }, R.strings.comp7.page.heading.rankRewards()),
                            r().createElement(Nr, null),
                            r().createElement(
                                ke.animated.div,
                                { className: _c, style: P },
                                r().createElement(
                                    Os,
                                    {
                                        api: B,
                                        stuckIndex: f,
                                        itemWidth: C,
                                        itemsOffset: I,
                                        onStick: v,
                                        className: Ec,
                                        areaClassNames: { base: gc, wrapper: pc },
                                        barClassNames: { base: hc },
                                    },
                                    na(m, (e) =>
                                        r().createElement(oc, {
                                            key: e,
                                            itemIndex: e,
                                            visibleRewardsCount: dc(a),
                                            rankState: zr(e, l, d),
                                            rankEmblemSize: lc(t),
                                            mainRewardSize: cc(t),
                                            itemWidth: C,
                                            hasHighlight: N(e),
                                            isQualification: d,
                                            onPreviewClick: () => i.goToPreview(e, f),
                                        }),
                                    ),
                                ),
                            ),
                            d &&
                                r().createElement(
                                    'div',
                                    { className: bc },
                                    r().createElement(Xo, {
                                        text: fc.qualification.condition.first(),
                                        color: 'WHITE_REAL',
                                        variant: 'paragraph-P14',
                                        variant_md: 'paragraph-P16',
                                        style: T,
                                    }),
                                    r().createElement(Xo, {
                                        text: fc.qualification.condition.second(),
                                        color: 'WHITE_REAL',
                                        variant: 'paragraph-P14',
                                        variant_md: 'paragraph-P16',
                                        style: T,
                                    }),
                                ),
                        );
                    }),
                    Cc = { context: 'model.rankRewardsModel' };
                let Fc, Dc;
                !(function (e) {
                    (e.LockedByNoXVehicles = 'lockedByNoXVehicles'),
                        (e.LockedByInactiveSeason = 'lockedByInactiveSeason'),
                        (e.LockedByPreviousQuest = 'lockedByPreviousQuest'),
                        (e.Active = 'active'),
                        (e.Completed = 'completed');
                })(Fc || (Fc = {})),
                    (function (e) {
                        (e.NotStarted = 'notStarted'),
                            (e.Active = 'active'),
                            (e.LastWeek = 'lastWeek'),
                            (e.Finished = 'finished');
                    })(Dc || (Dc = {}));
                const Bc = [Fc.LockedByNoXVehicles, Fc.LockedByInactiveSeason, Fc.LockedByPreviousQuest],
                    wc = ue()(
                        ({ observableModel: e }) => {
                            const t = {
                                    root: e.object(),
                                    questCards: e.array('questCards'),
                                    progressPoints: e.array('progressPoints'),
                                },
                                a = (0, _e.Om)(
                                    (e) => {
                                        const a = he(t.questCards.get(), e);
                                        if (!a) throw new Error(`Unexpected card index: ${e}`);
                                        return Object.assign({}, a);
                                    },
                                    { equals: te },
                                ),
                                n = (0, _e.Om)(
                                    (e, t) => {
                                        const n = a(e).rewards;
                                        return wl({ rewards: n, size: t });
                                    },
                                    { equals: te },
                                ),
                                r = (0, _e.Om)(() =>
                                    (function (e, t) {
                                        if (Array.isArray(e)) return e.every(t);
                                        for (let a = 0; a < e.length; a++) if (!t(be(e, a), a, e)) return !1;
                                        return !0;
                                    })(t.questCards.get(), (e) => e.state === Fc.Completed),
                                ),
                                s = (0, _e.Om)(() => t.root.get().seasonState === Dc.LastWeek && r()),
                                u = (0, _e.Om)((e) => Bc.includes(a(e).state));
                            return Object.assign({}, t, {
                                computes: {
                                    questCardsLength: (0, _e.Om)(() => t.questCards.get().length),
                                    questCard: a,
                                    questRewards: n,
                                    isQuestLocked: u,
                                    isQuestsCompletedOnLastWeek: s,
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            animationStart: e.createCallbackNoArgs('onAnimationStart'),
                            animationEnd: e.createCallbackNoArgs('onAnimationEnd'),
                        }),
                    ),
                    Rc = wc[0],
                    yc = wc[1],
                    xc = 'Progress_base_d5',
                    Sc = 'Progress_counter_3b',
                    kc = 'Progress_current_fd',
                    Nc = 'Progress_progressBar_d2',
                    Pc = R.strings.comp7.weeklyQuests.card.progress,
                    Tc = ({ current: e, total: t, isDisabled: a, className: n }) =>
                        r().createElement(
                            'div',
                            { className: f()(xc, n) },
                            r().createElement(Qn, {
                                classMix: Sc,
                                text: Pc.counter(),
                                binding: {
                                    current: r().createElement(
                                        'div',
                                        { className: kc },
                                        r().createElement(Tt, { value: e }),
                                    ),
                                    total: r().createElement(Tt, { value: t }),
                                },
                            }),
                            r().createElement(
                                'div',
                                { className: Nc },
                                r().createElement(Tu, { size: eu.Small, value: e, maxValue: t, disabled: a }),
                            ),
                        ),
                    Ic = {
                        base: 'QuestCard_base_27',
                        highlight: 'QuestCard_highlight_08',
                        icon: 'QuestCard_icon_81',
                        base__completed: 'QuestCard_base__completed_e3',
                        base__locked: 'QuestCard_base__locked_e9',
                        content: 'QuestCard_content_36',
                        progress: 'QuestCard_progress_63',
                        description: 'QuestCard_description_ba',
                        reward: 'QuestCard_reward_d5',
                        status: 'QuestCard_status_26',
                    },
                    Lc = {
                        base: 'Status_base_78',
                        base__locked: 'Status_base__locked_1f',
                        icon: 'Status_icon_9c',
                        base__completed: 'Status_base__completed_66',
                        text: 'Status_text_b3',
                    },
                    Mc = R.strings.comp7.weeklyQuests.card,
                    Oc = (0, G.Pi)(({ index: e, className: t }) => {
                        const a = yc().model,
                            n = a.computes.questCard(e).state,
                            s = a.computes.isQuestLocked(e);
                        return r().createElement(
                            qe,
                            {
                                isEnabled: s,
                                header: Mc.statusLockedTooltip.header(),
                                body: String(Mc.statusLockedTooltip.body.$dyn(n)),
                            },
                            r().createElement(
                                'div',
                                { className: f()(Lc.base, s ? Lc.base__locked : Lc[`base__${n}`], t) },
                                r().createElement('div', { className: Lc.icon }),
                                r().createElement(
                                    'div',
                                    { className: Lc.text },
                                    s ? Mc.status.locked() : Mc.status.$dyn(n),
                                ),
                            ),
                        );
                    }),
                    Hc = (0, G.Pi)(({ index: e }) => {
                        const t = yc().model,
                            a = t.computes.questCard(e),
                            n = a.state,
                            s = a.currentProgress,
                            u = a.totalProgress,
                            i = a.description,
                            o = a.iconKey,
                            l = w().mediaSize > F.Large ? Zo.Big : Zo.Small;
                        return r().createElement(
                            'div',
                            { className: f()(Ic.base, Ic[`base__${n}`]) },
                            n === Fc.Active && r().createElement('div', { className: Ic.highlight }),
                            r().createElement('div', {
                                className: Ic.icon,
                                style: { backgroundImage: `url(R.images.gui.maps.icons.comp7.weekly_quests.${o})` },
                            }),
                            r().createElement(
                                'div',
                                { className: Ic.content },
                                r().createElement(Tc, {
                                    current: s,
                                    total: u,
                                    isDisabled: n !== Fc.Active,
                                    className: Ic.progress,
                                }),
                                r().createElement('div', { className: Ic.description }, i),
                                r().createElement(Al, {
                                    data: t.computes.questRewards(e, l),
                                    size: l,
                                    rewardItemClassMix: Ic.reward,
                                }),
                            ),
                            r().createElement(Oc, { index: e, className: Ic.status }),
                        );
                    }),
                    $c = 'QuestsList_base_a9',
                    Uc = 'QuestsList_card_f7',
                    Wc = {
                        base: 'Separator_base_f3',
                        line: 'Separator_line_03',
                        line__top: 'Separator_line__top_ba',
                        line__bottom: 'Separator_line__bottom_95',
                        arrowContainer: 'Separator_arrowContainer_f9',
                        arrow: 'Separator_arrow_3d',
                        base__highlighted: 'Separator_base__highlighted_6a',
                    };
                let zc;
                !(function (e) {
                    (e.Normal = 'normal'), (e.Highlighted = 'highlighted');
                })(zc || (zc = {}));
                const Gc = (0, n.memo)(function ({ arrowType: e }) {
                        return e
                            ? r().createElement(
                                  'div',
                                  { className: f()(Wc.base, Wc[`base__${e}`]) },
                                  r().createElement('div', { className: f()(Wc.line, Wc.line__top) }),
                                  r().createElement(
                                      'div',
                                      { className: Wc.arrowContainer },
                                      r().createElement('div', { className: Wc.arrow }),
                                  ),
                                  r().createElement('div', { className: f()(Wc.line, Wc.line__bottom) }),
                              )
                            : r().createElement('div', { className: Wc.line });
                    }),
                    jc = (0, G.Pi)(({ className: e }) => {
                        const t = yc().model.computes;
                        return r().createElement(
                            'div',
                            { className: f()($c, e) },
                            r().createElement(Gc, null),
                            na(t.questCardsLength(), (e) =>
                                r().createElement(
                                    n.Fragment,
                                    { key: e },
                                    e > 0 &&
                                        r().createElement(Gc, {
                                            arrowType: t.isQuestLocked(e) ? zc.Normal : zc.Highlighted,
                                        }),
                                    r().createElement('div', { className: Uc }, r().createElement(Hc, { index: e })),
                                ),
                            ),
                            r().createElement(Gc, null),
                        );
                    });
                let qc, Vc;
                !(function (e) {
                    (e.Timer = 'timer'), (e.Countdown = 'countdown'), (e.Cooldown = 'cooldown'), (e.None = 'none');
                })(qc || (qc = {})),
                    (function (e) {
                        (e.Description = 'description'),
                            (e.Short = 'short'),
                            (e.Long = 'long'),
                            (e.Extended = 'extended');
                    })(Vc || (Vc = {}));
                const Qc = () => {},
                    Xc = (e = 0, t, a = 0, r = Qc) => {
                        const s = (0, n.useState)(e),
                            u = s[0],
                            i = s[1];
                        return (
                            (0, n.useEffect)(() => {
                                if (e > 0) {
                                    i(e);
                                    const n = Date.now(),
                                        s = setInterval(
                                            () => {
                                                const t = e - Math.floor((Date.now() - n) / 1e3);
                                                null !== a && t <= a ? (i(a), r && r(), clearInterval(s)) : i(t);
                                            },
                                            1e3 * (t || (e > 120 ? or : 1)),
                                        );
                                    return () => {
                                        clearInterval(s);
                                    };
                                }
                            }, [e, t, a, r]),
                            u
                        );
                    };
                q.Sw.instance;
                let Yc;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(Yc || (Yc = {}));
                q.Sw.instance;
                const Kc = Xc,
                    Zc = 'Countdown_base_fe',
                    Jc = 'Countdown_icon_8b',
                    ed = 'Countdown_description_8d',
                    td = (e) => e.toString().padStart(2, '0'),
                    ad = (e, t) => {
                        switch (t) {
                            case Vc.Description:
                                return ((e, t = !0) =>
                                    e.days > 7 && t
                                        ? ia(R.strings.common.duration.days(), { days: e.days })
                                        : e.days >= 1
                                          ? 0 === e.hours
                                              ? ia(R.strings.common.duration.days(), { days: e.days })
                                              : `${ia(R.strings.common.duration.days(), { days: e.days })} ${ia(R.strings.common.duration.hours(), { hours: e.hours })}`
                                          : e.hours >= 1
                                            ? 0 === e.minutes
                                                ? ia(R.strings.common.duration.hours(), { hours: e.hours })
                                                : `${ia(R.strings.common.duration.hours(), { hours: e.hours })} ${ia(R.strings.common.duration.minutes(), { minutes: e.minutes })}`
                                            : ia(R.strings.common.duration.minutes(), { minutes: e.minutes || 1 }))(e);
                            case Vc.Short:
                                return `${td(e.minutes)}:${td(e.seconds)}`;
                            case Vc.Long:
                                return `${td(e.hours)}:${td(e.minutes)}:${td(e.seconds)}`;
                            case Vc.Extended:
                                return `${ia(R.strings.common.duration.days(), { days: e.days })} | ${td(e.hours)}:${td(e.minutes)}:${td(e.seconds)}`;
                        }
                    },
                    nd = R.images.gui.maps.icons.components.countdown,
                    rd = (e, t) => {
                        const a = 2 === t ? nd.big : nd;
                        switch (e) {
                            case qc.Timer:
                                return a.clock();
                            case qc.Countdown:
                                return a.hourglass();
                            case qc.Cooldown:
                                return a.lock();
                        }
                    },
                    sd = (0, n.memo)(
                        ({
                            duration: e,
                            icon: t = qc.Timer,
                            style: a = Vc.Description,
                            onTimeReached: s,
                            className: i = '',
                            classNames: o = {},
                            labelFormat: l = '',
                        }) => {
                            const c = a !== Vc.Description ? 1 : void 0,
                                d = Kc(e, c),
                                m = (() => {
                                    const e = (0, n.useState)(u.O.view.getScale()),
                                        t = e[0],
                                        a = e[1];
                                    return (
                                        (0, n.useEffect)(() => {
                                            const e = () => {
                                                a(u.O.view.getScale());
                                            };
                                            return (
                                                window.addEventListener('resize', e),
                                                () => {
                                                    window.removeEventListener('resize', e);
                                                }
                                            );
                                        }, []),
                                        t
                                    );
                                })();
                            s && s[d] && s[d]();
                            const _ = ad(
                                (function (e = 0) {
                                    let t = e;
                                    const a = Math.trunc(t / cr);
                                    t -= a * cr;
                                    const n = Math.trunc(t / lr);
                                    t -= n * lr;
                                    const r = Math.trunc(t / or);
                                    return (t -= r * or), { days: a, hours: n, minutes: r, seconds: t };
                                })(d),
                                a,
                            );
                            return r().createElement(
                                'div',
                                { className: f()(Zc, i) },
                                t !== qc.None &&
                                    r().createElement('div', {
                                        className: f()(Jc, o.icon),
                                        style: { backgroundImage: `url('${rd(t, m)}')` },
                                    }),
                                l
                                    ? r().createElement(
                                          'div',
                                          { className: f()(ed, o.text) },
                                          r().createElement(Qn, { text: l, binding: { timerText: _ } }),
                                      )
                                    : r().createElement('div', { className: f()(ed, o.text) }, _),
                            );
                        },
                    ),
                    ud = 'ResetStatus_base_25',
                    id = 'ResetStatus_text_83',
                    od = 'ResetStatus_timer_0b',
                    ld = 'ResetStatus_icon_9c',
                    cd = R.strings.comp7.weeklyQuests.resetStatus,
                    dd = { text: od, icon: ld },
                    md = (0, G.Pi)(({ className: e }) => {
                        const t = yc().model,
                            a = t.root.get(),
                            n = a.seasonState,
                            s = a.resetTimeLeft;
                        return n === Dc.Finished || t.computes.isQuestsCompletedOnLastWeek()
                            ? r().createElement('div', { className: ud }, r().createElement(Qn, { text: cd.ended() }))
                            : n === Dc.LastWeek
                              ? r().createElement(
                                    'div',
                                    { className: ud },
                                    r().createElement(Qn, { text: cd.lastWeek() }),
                                )
                              : r().createElement(
                                    'div',
                                    { className: f()(ud, e) },
                                    r().createElement(Qn, {
                                        text: cd.timer(),
                                        binding: { countdown: r().createElement(sd, { duration: s, classNames: dd }) },
                                        classMix: id,
                                    }),
                                );
                    }),
                    _d = 'TokenPoint_base_fb',
                    Ed = 'TokenPoint_tokenValue_b8',
                    gd = 'TokenPoint_tokenValue__hide_6e',
                    pd = 'TokenPoint_tokenIcon_0d',
                    hd = 'TokenPoint_serif_c1',
                    bd = 'TokenPoint_rewards_46',
                    Ad = 'TokenPoint_rewards__passed_97',
                    fd = 'TokenPoint_reward_85',
                    vd = 'TokenPoint_rewardsWrapper_79',
                    Cd = 'TokenPoint_iconDone_24',
                    Fd = Zo.Small,
                    Dd = R.strings.tooltips.awardItem.comp7TokenWeeklyReward,
                    Bd = (0, G.Pi)(({ tokenValue: e, rewards: t }) => {
                        const a = yc().model.root.get().currentTokenValue,
                            n = a >= e;
                        return r().createElement(
                            'div',
                            { className: _d },
                            r().createElement(
                                qe,
                                { header: Dd.header(), body: Dd.body(), isEnabled: a !== e },
                                r().createElement(
                                    'div',
                                    { className: f()(Ed, a === e && gd) },
                                    e,
                                    r().createElement('div', { className: pd }),
                                ),
                            ),
                            r().createElement('div', { className: hd }),
                            t &&
                                r().createElement(
                                    'div',
                                    { className: vd },
                                    r().createElement(Al, {
                                        data: wl({ rewards: t, size: Fd }),
                                        size: Fd,
                                        classMix: f()(bd, n && Ad),
                                        rewardItemClassMix: fd,
                                    }),
                                    n && r().createElement('div', { className: Cd }),
                                ),
                        );
                    }),
                    wd = 'TokenProgress_base_d7',
                    Rd = 'TokenProgress_content_8d',
                    yd = 'TokenProgress_progress_7f',
                    xd = 'TokenProgress_progressBar_56',
                    Sd = 'TokenProgress_points_75',
                    kd = 'TokenProgress_point_55',
                    Nd = 'TokenProgress_currentTokenValue_44',
                    Pd = 'TokenProgress_tokenIcon_5e',
                    Td = 'TokenProgress_finalRewards_7d',
                    Id = 'TokenProgress_finalRewards__passed_ac',
                    Ld = 'TokenProgress_description_b8',
                    Md = 'TokenProgress_description__done_75',
                    Od = 'TokenProgress_iconDone_8f',
                    Hd = (e, t) => ({ left: `${Math.round((100 / e) * t)}%` }),
                    $d = Zo.Big,
                    Ud = R.strings.comp7.weeklyQuests.tokenProgress.description,
                    Wd = R.strings.tooltips.awardItem.comp7TokenWeeklyReward,
                    zd = (0, G.Pi)(({ className: e }) => {
                        var t;
                        const a = yc(),
                            s = a.model,
                            u = a.controls,
                            i = s.root.get(),
                            o = i.previousTokenValue,
                            l = i.currentTokenValue,
                            c = s.progressPoints.get(),
                            d = he(c, c.length - 1),
                            m = null != (t = null == d ? void 0 : d.count) ? t : 0,
                            _ = l === m,
                            E = (0, n.useRef)(ou.Idle),
                            g = (0, ke.useSpring)({ from: Hd(m, o), to: Hd(m, l) });
                        return r().createElement(
                            'div',
                            { className: f()(wd, e) },
                            r().createElement(
                                'div',
                                { className: Rd },
                                r().createElement(
                                    'div',
                                    { className: yd },
                                    r().createElement(
                                        'div',
                                        { className: xd },
                                        r().createElement(Tu, {
                                            value: l,
                                            maxValue: m,
                                            deltaFrom: o,
                                            onChangeAnimationState: (e) => {
                                                (E.current = e), e === ou.Shrink && u.animationStart();
                                            },
                                            onEndAnimation: u.animationEnd,
                                        }),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: Sd },
                                        r().createElement(
                                            'div',
                                            { className: kd },
                                            r().createElement(Bd, { tokenValue: 0 }),
                                        ),
                                        fe(c, (e, t) =>
                                            r().createElement(
                                                'div',
                                                { key: t, className: kd, style: Hd(m, e.count) },
                                                r().createElement(Bd, {
                                                    tokenValue: e.count,
                                                    rewards: t === c.length - 1 ? void 0 : e.rewards,
                                                }),
                                            ),
                                        ),
                                    ),
                                    r().createElement(
                                        qe,
                                        { header: Wd.header(), body: Wd.body() },
                                        r().createElement(
                                            ke.animated.div,
                                            { className: Nd, style: g },
                                            l,
                                            r().createElement('div', { className: Pd }),
                                        ),
                                    ),
                                ),
                                d &&
                                    r().createElement(Al, {
                                        data: wl({ rewards: d.rewards, size: $d }),
                                        size: $d,
                                        classMix: f()(Td, l >= m && Id),
                                    }),
                            ),
                            r().createElement(
                                'div',
                                { className: f()(Ld, _ && Md) },
                                _
                                    ? r().createElement(
                                          r().Fragment,
                                          null,
                                          r().createElement('div', { className: Od }),
                                          Ud.done(),
                                      )
                                    : Ud.normal(),
                            ),
                        );
                    }),
                    Gd = 'WeeklyQuestsPage_base_6c',
                    jd = 'WeeklyQuestsPage_content_cc',
                    qd = 'WeeklyQuestsPage_questsList_78',
                    Vd = 'WeeklyQuestsPage_progression_25',
                    Qd = 'WeeklyQuestsPage_resetStatus_8a',
                    Xd = () => {
                        const e = (0, ke.useSpring)(me);
                        return r().createElement(
                            'div',
                            { className: Gd },
                            r().createElement(rt, { className: X }, R.strings.comp7.page.heading.weeklyQuests()),
                            r().createElement(Nr, null),
                            r().createElement(md, { className: Qd }),
                            r().createElement(
                                ke.animated.div,
                                { className: jd, style: e },
                                r().createElement(jc, { className: qd }),
                                r().createElement(zd, { className: Vd }),
                            ),
                        );
                    },
                    Yd = { context: 'model.weeklyQuestsModel' };
                let Kd, Zd;
                !(function (e) {
                    (e.Guaranteed = 'guaranteed'),
                        (e.Possible = 'possible'),
                        (e.NotAvailable = 'notAvailable'),
                        (e.Claimed = 'claimed');
                })(Kd || (Kd = {})),
                    (function (e) {
                        (e.Achieved = 'achieved'), (e.Possible = 'possible'), (e.NotAchieved = 'notAchieved');
                    })(Zd || (Zd = {}));
                let Jd;
                !(function (e) {
                    (e[(e.First = 6)] = 'First'),
                        (e[(e.Second = 5)] = 'Second'),
                        (e[(e.Third = 4)] = 'Third'),
                        (e[(e.Fourth = 3)] = 'Fourth'),
                        (e[(e.Fifth = 2)] = 'Fifth'),
                        (e[(e.Sixth = 1)] = 'Sixth');
                })(Jd || (Jd = {}));
                const em = R.strings.comp7.yearlyRewards,
                    tm = R.strings.comp7.yearlyRewardsTooltip,
                    am = [
                        {
                            rewards: [
                                {
                                    icon: 'first_main',
                                    label: em.main.first(),
                                    tooltipArgs: { body: tm.main.first.body(), header: tm.main.first.header() },
                                    name: 'styleProgress',
                                },
                                {
                                    icon: 'first_additional_1',
                                    tooltipArgs: {
                                        body: tm.additional.first_1.body(),
                                        header: tm.additional.first_1.header(),
                                    },
                                },
                            ],
                            seasonPoints: [Zd.Achieved, Zd.Achieved, Zd.Achieved],
                            rewardsState: Kd.Guaranteed,
                        },
                        {
                            rewards: [
                                {
                                    icon: 'second_main',
                                    label: em.main.second(),
                                    tooltipArgs: { body: tm.main.second.body(), header: tm.main.second.header() },
                                    name: 'styleProgress',
                                },
                                {
                                    icon: 'second_additional_1',
                                    tooltipArgs: {
                                        body: tm.additional.second_1.body(),
                                        header: tm.additional.second_1.header(),
                                    },
                                },
                                {
                                    icon: 'second_additional_2',
                                    tooltipArgs: {
                                        body: tm.additional.second_2.body(),
                                        header: tm.additional.second_2.header(),
                                    },
                                },
                            ],
                            seasonPoints: [Zd.Achieved, Zd.Achieved, Zd.Achieved],
                            rewardsState: Kd.Guaranteed,
                        },
                        {
                            rewards: [
                                {
                                    icon: 'third_main',
                                    label: em.main.third(),
                                    tooltipArgs: { body: tm.main.third.body(), header: tm.main.third.header() },
                                    name: 'styleProgress',
                                },
                                {
                                    icon: 'third_additional_1',
                                    tooltipArgs: {
                                        body: tm.additional.third_1.body(),
                                        header: tm.additional.third_1.header(),
                                    },
                                },
                                {
                                    icon: 'third_additional_2',
                                    tooltipArgs: {
                                        body: tm.additional.third_2.body(),
                                        header: tm.additional.third_2.header(),
                                    },
                                },
                            ],
                            seasonPoints: [Zd.Achieved, Zd.Achieved, Zd.Possible],
                            rewardsState: Kd.Possible,
                        },
                        {
                            rewards: [
                                {
                                    icon: 'fourth_main',
                                    label: em.main.fourth(),
                                    tooltipArgs: { body: tm.main.fourth.body(), header: tm.main.fourth.header() },
                                    name: 'styleProgress',
                                },
                                {
                                    icon: 'fourth_additional_1',
                                    tooltipArgs: {
                                        body: tm.additional.fourth_1.body(),
                                        header: tm.additional.fourth_1.header(),
                                    },
                                },
                                {
                                    icon: 'fourth_additional_2',
                                    tooltipArgs: {
                                        body: tm.additional.fourth_2.body(),
                                        header: tm.additional.fourth_2.header(),
                                    },
                                },
                            ],
                            seasonPoints: [Zd.Possible, Zd.Possible, Zd.NotAchieved],
                            rewardsState: Kd.NotAvailable,
                        },
                        {
                            rewards: [
                                {
                                    icon: 'fifth_main',
                                    label: em.main.fifth(),
                                    tooltipArgs: { body: tm.main.fifth.body(), header: tm.main.fifth.header() },
                                    name: 'styleProgress',
                                },
                                {
                                    icon: 'fifth_additional_1',
                                    tooltipArgs: {
                                        body: tm.additional.fifth_1.body(),
                                        header: tm.additional.fifth_1.header(),
                                    },
                                },
                                {
                                    icon: 'fifth_additional_2',
                                    tooltipArgs: {
                                        body: tm.additional.fifth_2.body(),
                                        header: tm.additional.fifth_2.header(),
                                    },
                                },
                                {
                                    icon: 'fifth_additional_3',
                                    tooltipArgs: {
                                        body: tm.additional.fifth_3.body(),
                                        header: tm.additional.fifth_3.header(),
                                    },
                                },
                            ],
                            seasonPoints: [Zd.NotAchieved, Zd.NotAchieved, Zd.NotAchieved],
                            rewardsState: Kd.NotAvailable,
                        },
                        {
                            rewards: [
                                {
                                    icon: 'sixth_main',
                                    label: em.main.sixth(),
                                    tooltipArgs: { body: tm.main.sixth.body(), header: tm.main.sixth.header() },
                                    name: 'styleProgress',
                                },
                                {
                                    icon: 'sixth_additional_1',
                                    tooltipArgs: {
                                        body: tm.additional.sixth_1.body(),
                                        header: tm.additional.sixth_1.header(),
                                    },
                                },
                                {
                                    icon: 'sixth_additional_2',
                                    tooltipArgs: {
                                        body: tm.additional.sixth_2.body(),
                                        header: tm.additional.sixth_2.header(),
                                    },
                                },
                                {
                                    icon: 'sixth_additional_3',
                                    tooltipArgs: {
                                        body: tm.additional.sixth_3.body(),
                                        header: tm.additional.sixth_3.header(),
                                    },
                                },
                                {
                                    icon: 'sixth_additional_4',
                                    tooltipArgs: {
                                        body: tm.additional.sixth_4.body(),
                                        header: tm.additional.sixth_4.header(),
                                    },
                                },
                            ],
                            seasonPoints: [Zd.NotAchieved, Zd.NotAchieved, Zd.NotAchieved],
                            rewardsState: Kd.Claimed,
                        },
                    ],
                    nm = {
                        getter: (e) => {
                            if ('cards' === e) return am;
                            return { currentRank: Jd.Third, seasonPointsReceived: !1, hasDataError: !1 };
                        },
                        controls: J,
                    },
                    rm = ue()(({ observableModel: e }) => {
                        const t = { root: e.object() },
                            a = e.array('cards'),
                            n = (0, _e.Om)(
                                (e) => {
                                    const t = he(a.get(), e);
                                    if (!t) throw new Error(`card with index ${e} was not found`);
                                    return { rewardsState: t.rewardsState };
                                },
                                { equals: ct },
                            ),
                            r = (0, _e.Om)(
                                (e) => {
                                    const t = he(a.get(), e);
                                    if (!t) throw new Error(`card with index ${e} was not found`);
                                    return fe(t.rewards, (e) => Object.assign({}, e));
                                },
                                { equals: te },
                            ),
                            s = (0, _e.Om)(
                                (e) => {
                                    const t = he(a.get(), e);
                                    if (!t) throw new Error(`card with index ${e} was not found`);
                                    return fe(t.seasonPoints, ee);
                                },
                                { equals: te },
                            ),
                            u = (0, _e.Om)((e, t) => {
                                const a = s(e);
                                if (!a) throw new Error(`points array with card index ${e} was not found`);
                                const n = he(a, t);
                                if (!n) throw new Error(`point with index ${t} in card with index ${e} was not found`);
                                return n;
                            }),
                            i = (0, _e.Om)((e) => {
                                const t = s(e);
                                if (!t) throw new Error(`points array with card index ${e} was not found`);
                                return t.every((e) => e === Zd.Achieved);
                            }),
                            o = (0, _e.Om)(
                                () => {
                                    const e = a.get();
                                    return {
                                        possible: De(e, (e) => e.rewardsState === Kd.Possible),
                                        guaranteed: De(e, (e) => e.rewardsState === Kd.Guaranteed),
                                    };
                                },
                                { equals: ct },
                            ),
                            l = (0, _e.Om)(
                                (e) => {
                                    const t = he(r(e), 0);
                                    if (!t) throw new Error(`card with index ${e} has no any main reward at index: 0`);
                                    return t;
                                },
                                { equals: te },
                            ),
                            c = (0, _e.Om)((e) => [...ve(r(e), 1)], { equals: te });
                        return Object.assign({}, t, {
                            computes: {
                                card: n,
                                pointState: u,
                                isEnabledCard: i,
                                mainReward: l,
                                additionalRewards: c,
                                bestRewardsCardIndex: o,
                                additionalRewardsCount: (0, _e.Om)((e) => c(e).length),
                                cardsLength: (0, _e.Om)(() => a.get().length),
                                seasonPointsLength: (0, _e.Om)((e) => s(e).length),
                            },
                        });
                    }, J),
                    sm = rm[0],
                    um = rm[1],
                    im = ue()(({ observableModel: e }) => {
                        const t = { root: e.object() },
                            a = e.array('cards'),
                            n = (0, _e.Om)(
                                (e) => {
                                    const t = he(a.get(), e);
                                    if (!t) throw new Error(`card with index ${e} was not found`);
                                    return { rewardsState: t.rewardsState };
                                },
                                { equals: ct },
                            ),
                            r = (0, _e.Om)(
                                (e) => {
                                    const t = he(a.get(), e);
                                    if (!t) throw new Error(`card with index ${e} was not found`);
                                    return fe(t.rewards, (e) => Object.assign({}, e));
                                },
                                { equals: te },
                            ),
                            s = (0, _e.Om)(
                                (e) => {
                                    const t = he(a.get(), e);
                                    if (!t) throw new Error(`card with index ${e} was not found`);
                                    return fe(t.seasonPoints, ee);
                                },
                                { equals: te },
                            ),
                            u = (0, _e.Om)((e, t) => {
                                const a = s(e);
                                if (!a) throw new Error(`points array with card index ${e} was not found`);
                                const n = he(a, t);
                                if (!n) throw new Error(`point with index ${t} in card with index ${e} was not found`);
                                return n;
                            }),
                            i = (0, _e.Om)((e) => {
                                const t = s(e);
                                if (!t) throw new Error(`points array with card index ${e} was not found`);
                                return t.every((e) => e === Zd.Achieved);
                            }),
                            o = (0, _e.Om)(
                                () => {
                                    const e = a.get();
                                    return {
                                        possible: De(e, (e) => e.rewardsState === Kd.Possible),
                                        guaranteed: De(e, (e) => e.rewardsState === Kd.Guaranteed),
                                    };
                                },
                                { equals: ct },
                            ),
                            l = (0, _e.Om)(
                                (e) => {
                                    const t = he(r(e), 0);
                                    if (!t) throw new Error(`card with index ${e} has no any main reward at index: 0`);
                                    return t;
                                },
                                { equals: te },
                            ),
                            c = (0, _e.Om)((e) => [...ve(r(e), 1)], { equals: te });
                        return Object.assign({}, t, {
                            computes: {
                                card: n,
                                pointState: u,
                                isEnabledCard: i,
                                mainReward: l,
                                additionalRewards: c,
                                bestRewardsCardIndex: o,
                                additionalRewardsCount: (0, _e.Om)((e) => c(e).length),
                                cardsLength: (0, _e.Om)(() => a.get().length),
                                seasonPointsLength: (0, _e.Om)((e) => s(e).length),
                            },
                        });
                    }, J),
                    om = im[0],
                    lm = im[1];
                function cm() {
                    const e = (0, n.useRef)(0);
                    var t;
                    return (
                        (t = () => {
                            window.clearTimeout(e.current);
                        }),
                        (0, n.useEffect)(() => t, []),
                        (0, n.useMemo)(
                            () => ({
                                run: (t, a) => {
                                    window.clearTimeout(e.current),
                                        (e.current = window.setTimeout(() => {
                                            t(), (e.current = 0);
                                        }, a));
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
                const dm = {
                    base: 'VehicleName_base_3b',
                    base__24x24: 'VehicleName_base__24x24_a7',
                    base__24x24_metal: 'VehicleName_base__24x24_metal_92',
                    base__48x48: 'VehicleName_base__48x48_6a',
                    base__64x64: 'VehicleName_base__64x64_d2',
                    base__83x74: 'VehicleName_base__83x74_ba',
                    vehicleTypeContainer: 'VehicleName_vehicleTypeContainer_f2',
                    base__60x54: 'VehicleName_base__60x54_08',
                    vehicleType: 'VehicleName_vehicleType_c3',
                };
                let mm;
                !(function (e) {
                    (e.x24 = '24x24'),
                        (e.x24Metal = '24x24_metal'),
                        (e.x48 = '48x48'),
                        (e.x60 = '60x54'),
                        (e.x64 = '64x64'),
                        (e.x80 = '80x80'),
                        (e.x83 = '83x74'),
                        (e.x180 = '180x135');
                })(mm || (mm = {}));
                const _m = R.images.gui.maps.icons.vehicleTypes,
                    Em = (e) => {
                        switch (e) {
                            case mm.x80:
                                return _m.large;
                            case mm.x83:
                                return _m.big;
                            case mm.x180:
                                return _m.huge;
                            default:
                                return _m.$dyn(`c_${e}`);
                        }
                    },
                    gm = (0, n.memo)(
                        ({
                            name: e,
                            level: t,
                            type: a,
                            size: n = mm.x24Metal,
                            typeIconFolderPath: s = Em(n),
                            isPremium: u = !1,
                            nation: i,
                            className: o,
                            classNames: l,
                        }) => {
                            const c = `${((d = a), d.replace(/-/g, '_'))}${u ? '_elite' : ''}`;
                            var d;
                            return r().createElement(
                                'div',
                                { className: f()(dm.base, dm[`base__${n}`], o) },
                                i,
                                r().createElement('div', { className: null == l ? void 0 : l.level }, jl(t)),
                                r().createElement(
                                    'div',
                                    {
                                        className: f()(
                                            dm.vehicleTypeContainer,
                                            null == l ? void 0 : l.vehicleTypeContainer,
                                        ),
                                    },
                                    r().createElement('div', {
                                        className: f()(dm.vehicleType, null == l ? void 0 : l.type),
                                        style: { backgroundImage: `url(${null == s ? void 0 : s.$dyn(c)})` },
                                    }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: f()(dm.shortName, null == l ? void 0 : l.shortName) },
                                    e,
                                ),
                            );
                        },
                    ),
                    pm = {
                        name: R.strings.comp7.yearlyRewards.vehicle(),
                        type: 'mediumTank',
                        level: 10,
                        isPremium: !0,
                        tooltipArgs: {
                            header: R.strings.comp7.yearlyRewards.vehicleTooltip.header(),
                            body: R.strings.comp7.yearlyRewards.vehicleTooltip.body(),
                        },
                    },
                    hm = [
                        { rank: Jd.First, count: 1 },
                        { rank: Jd.Second, count: 2 },
                        { rank: Jd.Third, count: 3 },
                        { rank: Jd.Fourth, count: 4 },
                        { rank: Jd.Fifth, count: 5 },
                        { rank: Jd.Sixth, count: 6 },
                    ],
                    bm = 'AdditionalRewards_reward_e8',
                    Am = Zo.Small,
                    fm = (0, G.Pi)(({ cardIndex: e, visibleRewardsCount: t, className: a }) => {
                        const n = um().model,
                            s = n.computes.additionalRewards(e),
                            u = n.computes.additionalRewardsCount(e),
                            i = (({ rewards: e, size: t }) => fe(e, (e) => Rl({ reward: e, size: t })))({
                                rewards: s,
                                size: Am,
                            });
                        return r().createElement(Al, {
                            data: i,
                            size: Am,
                            count: yl(u, t),
                            rewardItemClassMix: bm,
                            boxRewardTooltip: {
                                contentId: R.views.lobby.tooltips.AdditionalRewardsTooltip('resId'),
                                args: { fromIndex: t, index: e },
                            },
                            classMix: a,
                        });
                    }),
                    vm = {
                        base: 'SeasonPoint_base_a1',
                        base__x16: 'SeasonPoint_base__x16_06',
                        base__x24: 'SeasonPoint_base__x24_b6',
                        base__x32: 'SeasonPoint_base__x32_f0',
                        base__x48: 'SeasonPoint_base__x48_8a',
                        base__x62: 'SeasonPoint_base__x62_b1',
                        highlight: 'SeasonPoint_highlight_87',
                        icon: 'SeasonPoint_icon_b6',
                        base__notAchieved: 'SeasonPoint_base__notAchieved_02',
                    };
                let Cm;
                !(function (e) {
                    (e.x16 = 'x16'), (e.x24 = 'x24'), (e.x32 = 'x32'), (e.x48 = 'x48'), (e.x62 = 'x62');
                })(Cm || (Cm = {}));
                const Fm = R.images.gui.maps.icons.comp7.icons,
                    Dm = (0, G.Pi)(({ state: e, className: t, size: a = Cm.x48 }) =>
                        r().createElement(
                            'div',
                            { className: f()(vm.base, vm[`base__${e}`], vm[`base__${a}`], t) },
                            e === Zd.Possible && r().createElement('div', { className: vm.highlight }),
                            r().createElement('div', {
                                className: vm.icon,
                                style: { backgroundImage: `url(${Fm.$dyn(`season_point_${e}_${a}`)})` },
                            }),
                        ),
                    ),
                    Bm = (0, G.Pi)(({ cardIndex: e, pointIndex: t, size: a, className: n, classNames: s }) => {
                        const u = lm().model.computes.pointState(e, t);
                        return r().createElement(
                            We,
                            {
                                contentId: R.views.lobby.comp7.tooltips.SeasonPointTooltip('resId'),
                                args: { state: u },
                                ignoreShowDelay: !0,
                            },
                            r().createElement(
                                'div',
                                { className: n },
                                r().createElement(Dm, { state: u, className: null == s ? void 0 : s.point, size: a }),
                            ),
                        );
                    }),
                    wm = 'CardSeasonPoints_base_8c',
                    Rm = (0, G.Pi)(({ cardIndex: e, size: t, className: a, classNames: n }) => {
                        const s = lm().model;
                        return r().createElement(
                            'div',
                            { className: f()(wm, a) },
                            na(s.computes.seasonPointsLength(e), (a) =>
                                r().createElement(Bm, {
                                    cardIndex: e,
                                    pointIndex: a,
                                    size: t,
                                    className: null == n ? void 0 : n.pointWrapper,
                                    classNames: { point: null == n ? void 0 : n.point },
                                    key: a,
                                }),
                            ),
                        );
                    });
                function ym() {
                    return (
                        (ym =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        ym.apply(this, arguments)
                    );
                }
                const xm = (0, G.Pi)(({ cardIndex: e, size: t, className: a, classNames: n }) => {
                        const s = um().model.computes.mainReward(e);
                        return r().createElement(
                            _l,
                            ym({}, Rl({ reward: s, size: t }), {
                                className: a,
                                classNames: {
                                    rewardIcon: null == n ? void 0 : n.icon,
                                    image: null == n ? void 0 : n.iconContainer,
                                },
                            }),
                        );
                    }),
                    Sm = {
                        base: 'RewardsStatus_base_49',
                        status: 'RewardsStatus_status_48',
                        venzel: 'RewardsStatus_venzel_80',
                        venzel__right: 'RewardsStatus_venzel__right_b6',
                        icon: 'RewardsStatus_icon_9f',
                        line: 'RewardsStatus_line_d8',
                        base__guaranteed: 'RewardsStatus_base__guaranteed_4f',
                        base__claimed: 'RewardsStatus_base__claimed_0f',
                        base__possible: 'RewardsStatus_base__possible_67',
                        base__notAvailable: 'RewardsStatus_base__notAvailable_b1',
                        statusIcon: 'RewardsStatus_statusIcon_72',
                        description: 'RewardsStatus_description_f6',
                    },
                    km = R.strings.comp7.yearlyRewards.rewardsState,
                    Nm = ({ rewardsState: e, className: t }) =>
                        r().createElement(
                            qe,
                            { body: `${km.tooltip.$dyn(e)}`, isEnabled: e !== Kd.Claimed },
                            r().createElement(
                                'div',
                                { className: f()(Sm.base, Sm[`base__${e}`], t) },
                                r().createElement(
                                    'div',
                                    { className: Sm.status },
                                    r().createElement(
                                        'div',
                                        { className: Sm.venzel },
                                        r().createElement('div', { className: Sm.icon }),
                                        r().createElement('div', { className: Sm.line }),
                                    ),
                                    r().createElement('div', { className: Sm.statusIcon }),
                                    r().createElement(
                                        'div',
                                        { className: f()(Sm.venzel, Sm.venzel__right) },
                                        r().createElement('div', { className: Sm.icon }),
                                        r().createElement('div', { className: Sm.line }),
                                    ),
                                ),
                                r().createElement(
                                    'div',
                                    { className: Sm.description },
                                    R.strings.comp7.yearlyRewards.rewardsState.$dyn(e),
                                ),
                            ),
                        ),
                    Pm = {
                        base: 'CardContent_base_be',
                        base__withVehicle: 'CardContent_base__withVehicle_b1',
                        base__collapsed: 'CardContent_base__collapsed_a6',
                        bigLock: 'CardContent_bigLock_fb',
                        bigLock__visible: 'CardContent_bigLock__visible_00',
                        lock: 'CardContent_lock_a5',
                        lock__visible: 'CardContent_lock__visible_2e',
                        vehicleContainer: 'CardContent_vehicleContainer_43',
                        base__selected: 'CardContent_base__selected_ce',
                        vehicleImage: 'CardContent_vehicleImage_a2',
                        mainReward: 'CardContent_mainReward_2d',
                        mainRewardIcon: 'CardContent_mainRewardIcon_e2',
                        rewardImageContainer: 'CardContent_rewardImageContainer_3c',
                        cardInfoContainer: 'CardContent_cardInfoContainer_91',
                        cardInfo: 'CardContent_cardInfo_03',
                        vehicleName: 'CardContent_vehicleName_89',
                        vehicleTypeContainer: 'CardContent_vehicleTypeContainer_29',
                        title: 'CardContent_title_c4',
                        subTitle: 'CardContent_subTitle_83',
                        additionalRewards: 'CardContent_additionalRewards_2a',
                        rewardsStatus: 'CardContent_rewardsStatus_99',
                        seasonPointsContainer: 'CardContent_seasonPointsContainer_fb',
                        seasonPoints: 'CardContent_seasonPoints_41',
                        seasonPointWrapper: 'CardContent_seasonPointWrapper_20',
                        venzel: 'CardContent_venzel_09',
                        venzel__right: 'CardContent_venzel__right_27',
                        peak: 'CardContent_peak_05',
                        lines: 'CardContent_lines_f4',
                        line: 'CardContent_line_ba',
                    },
                    Tm = (e, t) => {
                        switch (e) {
                            case 'collapsed':
                                return ((e) => (e >= F.Medium ? Cm.x32 : Cm.x24))(t);
                            case 'selected':
                                return ((e) => (e >= F.Large ? Cm.x62 : e >= F.Medium ? Cm.x48 : Cm.x32))(t);
                        }
                    },
                    Im = (e) => (e >= F.Large ? mm.x83 : e >= F.Medium ? mm.x48 : mm.x24Metal),
                    Lm = (e) => (e >= F.Medium ? 5 : 4);
                function Mm() {
                    return (
                        (Mm =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Mm.apply(this, arguments)
                    );
                }
                const Om = (0, G.Pi)(({ cardIndex: e, className: t, cardState: a }) => {
                        const n = w().mediaSize,
                            s = lm().model,
                            u = um().model,
                            i = s.computes.isEnabledCard(e),
                            o = 3 === e,
                            l = ((e) => (e >= F.Large ? Zo.S600x450 : e >= F.Medium ? Zo.S400x300 : Zo.S232x174))(n),
                            c = u.computes.mainReward(e),
                            d = s.computes.card(e).rewardsState,
                            m = 'selected' === a,
                            _ = 'collapsed' === a;
                        return r().createElement(
                            'div',
                            {
                                className: f()(Pm.base, Pm[`base__${a}`], o && Pm.base__withVehicle, t),
                                onClick: _ ? H.playYes : void 0,
                                onMouseEnter: _ ? H.playHighlight : void 0,
                            },
                            r().createElement('div', { className: f()(Pm.bigLock, !i && m && Pm.bigLock__visible) }),
                            o &&
                                r().createElement(
                                    qe,
                                    { body: pm.tooltipArgs.body, header: pm.tooltipArgs.header },
                                    r().createElement(
                                        'div',
                                        { className: Pm.vehicleContainer },
                                        r().createElement('div', { className: Pm.vehicleImage }),
                                    ),
                                ),
                            r().createElement(xm, {
                                cardIndex: e,
                                size: l,
                                className: Pm.mainReward,
                                classNames: { icon: Pm.mainRewardIcon, iconContainer: Pm.rewardImageContainer },
                            }),
                            m &&
                                r().createElement(
                                    'div',
                                    { className: Pm.cardInfoContainer },
                                    r().createElement(
                                        'div',
                                        { className: Pm.cardInfo },
                                        o &&
                                            r().createElement(
                                                gm,
                                                Mm({}, pm, {
                                                    size: Im(n),
                                                    className: Pm.vehicleName,
                                                    classNames: { vehicleTypeContainer: Pm.vehicleTypeContainer },
                                                }),
                                            ),
                                        r().createElement('div', { className: Pm.title }, c.label),
                                        r().createElement(Jn, {
                                            text: String(R.strings.comp7.yearlyRewards.subtitle.$dyn(c.name)),
                                            classMix: Pm.subTitle,
                                        }),
                                        r().createElement(fm, {
                                            cardIndex: e,
                                            visibleRewardsCount: Lm(n),
                                            className: Pm.additionalRewards,
                                        }),
                                        r().createElement(Nm, { rewardsState: d, className: Pm.rewardsStatus }),
                                    ),
                                ),
                            r().createElement(
                                'div',
                                { className: Pm.seasonPointsContainer },
                                m &&
                                    r().createElement(
                                        'div',
                                        { className: Pm.venzel },
                                        r().createElement('div', { className: Pm.peak }),
                                        r().createElement(
                                            'div',
                                            { className: Pm.lines },
                                            r().createElement('div', { className: Pm.line }),
                                            r().createElement('div', { className: Pm.line }),
                                        ),
                                    ),
                                r().createElement(Rm, {
                                    cardIndex: e,
                                    size: Tm(a, n),
                                    className: Pm.seasonPoints,
                                    classNames: { pointWrapper: Pm.seasonPointWrapper },
                                }),
                                m &&
                                    r().createElement(
                                        'div',
                                        { className: f()(Pm.venzel, Pm.venzel__right) },
                                        r().createElement('div', { className: Pm.peak }),
                                        r().createElement(
                                            'div',
                                            { className: Pm.lines },
                                            r().createElement('div', { className: Pm.line }),
                                            r().createElement('div', { className: Pm.line }),
                                        ),
                                    ),
                            ),
                            r().createElement('div', { className: f()(Pm.lock, !i && _ && Pm.lock__visible) }),
                        );
                    }),
                    Hm = {
                        base: 'Card_base_4c',
                        cardContent: 'Card_cardContent_83',
                        cardContentInner: 'Card_cardContentInner_b9',
                        cardContentInner__selected: 'Card_cardContentInner__selected_f6',
                    },
                    $m = ({ cardIndex: e, cardState: t, className: a }) =>
                        r().createElement(
                            'div',
                            { className: f()(Hm.base, a) },
                            r().createElement(
                                'div',
                                { className: Hm.cardContent },
                                r().createElement(Om, {
                                    cardIndex: e,
                                    cardState: t,
                                    className: f()(Hm.cardContentInner, Hm[`cardContentInner__${t}`]),
                                }),
                            ),
                        ),
                    Um = {
                        '--pageContentWidth': '78vw',
                        base: 'Cards_base_b0',
                        card: 'Cards_card_18',
                        card__collapsed: 'Cards_card__collapsed_9b',
                        card__selected: 'Cards_card__selected_1b',
                        highlight: 'Cards_highlight_28',
                        highlight__visible: 'Cards_highlight__visible_f9',
                        fadeIn: 'Cards_fadeIn_52',
                        divider: 'Cards_divider_06',
                        divider__left: 'Cards_divider__left_c1',
                        divider__right: 'Cards_divider__right_c2',
                        shadow: 'Cards_shadow_39',
                        fadeInThreeQuarters: 'Cards_fadeInThreeQuarters_8d',
                        fadeInHalf: 'Cards_fadeInHalf_bd',
                        fadeOut: 'Cards_fadeOut_55',
                        fadeInWithScale: 'Cards_fadeInWithScale_0c',
                        slideUp: 'Cards_slideUp_39',
                        scale: 'Cards_scale_60',
                        raysAppearance: 'Cards_raysAppearance_32',
                        rotate: 'Cards_rotate_7c',
                        'reverse-rotate': 'Cards_reverse-rotate_67',
                        glowAppearance: 'Cards_glowAppearance_d8',
                        highlightAppearance: 'Cards_highlightAppearance_c3',
                        blink: 'Cards_blink_2e',
                        slideUpIn: 'Cards_slideUpIn_6a',
                    },
                    Wm = (0, G.Pi)(() => {
                        const e = lm().model,
                            t = le().model,
                            a = (0, n.useState)(!0),
                            s = a[0],
                            u = a[1],
                            i = cm(),
                            o = t.year.state.get(),
                            l = e.computes.cardsLength(),
                            c = e.computes.bestRewardsCardIndex(),
                            d = c.possible,
                            m = c.guaranteed,
                            _ = l - 1,
                            E = (0, n.useState)(_),
                            g = E[0],
                            p = E[1],
                            h = ((e, t, a, n) =>
                                e === Tl.Finished
                                    ? null != n
                                        ? n
                                        : 0
                                    : void 0 !== a
                                      ? Dt(0, t, a + 1)
                                      : void 0 !== n
                                        ? Dt(0, t, n + 1)
                                        : 0)(o, _, d, m),
                            b = (0, n.useCallback)(() => {
                                i.clear(), u(!1);
                            }, [i]);
                        (0, n.useEffect)(
                            () =>
                                Se(() => {
                                    if (!s) return;
                                    if (g === h) return void b();
                                    const e = g === _ ? 800 : 400;
                                    i.run(() => {
                                        s && p((e) => Dt(0, _, e - 1));
                                    }, e);
                                }),
                            [i, s, _, h, g, b],
                        );
                        const A = (0, n.useCallback)(
                            (e) => () => {
                                b(), p(e);
                            },
                            [b],
                        );
                        return r().createElement(
                            'div',
                            { className: Um.base },
                            na(l, (e) => {
                                const t = e === g ? 'selected' : 'collapsed';
                                return r().createElement(
                                    'div',
                                    { className: f()(Um.card, Um[`card__${t}`]), onClick: A(e), key: e },
                                    r().createElement('div', {
                                        className: f()(Um.highlight, !s && 'selected' === t && Um.highlight__visible),
                                    }),
                                    0 === e &&
                                        r().createElement('div', { className: f()(Um.divider, Um.divider__left) }),
                                    r().createElement($m, { cardIndex: e, cardState: t }),
                                    r().createElement('div', { className: Um.shadow }),
                                    r().createElement('div', { className: f()(Um.divider, Um.divider__right) }),
                                );
                            }),
                        );
                    }),
                    zm = 'ErrorState_base_27',
                    Gm = 'ErrorState_titleContainer_56',
                    jm = 'ErrorState_alertIcon_7a',
                    qm = 'ErrorState_title_55',
                    Vm = 'ErrorState_description_57',
                    Qm = R.strings.comp7.yearlyRewards.error,
                    Xm = () =>
                        r().createElement(
                            'div',
                            { className: zm },
                            r().createElement(
                                'div',
                                { className: Gm },
                                r().createElement('div', { className: jm }),
                                r().createElement('div', { className: qm }, Qm.title()),
                            ),
                            r().createElement('div', { className: Vm }, Qm.description()),
                        ),
                    Ym = '500ms',
                    Km = (e, t) => (e >= F.Medium ? (t ? Da.x110 : Da.x84) : t ? Da.x84 : Da.x64),
                    Zm = (e) => {
                        switch (e) {
                            case Tl.Active:
                                return R.strings.comp7.yearlyRewards.rank.current();
                            case Tl.OffSeason:
                            case Tl.Finished:
                                return R.strings.comp7.yearlyRewards.rank.achieved();
                            default:
                                return (
                                    console.error(`Provide string for current/achieved rank for YearState: ${e}`), ''
                                );
                        }
                    },
                    Jm = 'LegendItem_base_10',
                    e_ = 'LegendItem_pointsContainer_02',
                    t_ = 'LegendItem_pointsCount_ff',
                    a_ = 'LegendItem_pointsCount__current_43',
                    n_ = 'LegendItem_currentRankContainer_38',
                    r_ = 'LegendItem_currentRankContainer__visible_ea',
                    s_ = 'LegendItem_rankString_9f',
                    u_ = 'LegendItem_rank_95',
                    i_ = 'LegendItem_seasonPoint_a7',
                    o_ = 'LegendItem_seasonPoint__current_3e',
                    l_ = (0, G.Pi)(({ rank: e, count: t, isHovered: a, className: n }) => {
                        const s = w().mediaSize,
                            u = lm().model.root.get(),
                            i = u.currentRank,
                            o = u.seasonPointsReceived,
                            l = e === i,
                            c = le().model.year.state.get(),
                            d = l ? ((e) => (e ? Zd.Achieved : Zd.Possible))(o) : Zd.Achieved;
                        return r().createElement(
                            'div',
                            { className: f()(Jm, n) },
                            r().createElement(Ba, { rank: e, size: Km(s, e === i) }),
                            r().createElement(
                                'div',
                                { className: e_ },
                                r().createElement('div', { className: f()(t_, l && a_) }, t),
                                r().createElement(Dm, {
                                    state: d,
                                    size: l ? Cm.x24 : Cm.x16,
                                    className: f()(i_, l && o_),
                                }),
                            ),
                            l &&
                                r().createElement(
                                    'div',
                                    { className: f()(n_, a && r_) },
                                    r().createElement(Qn, {
                                        text: Zm(c),
                                        binding: { rank: r().createElement('div', { className: u_ }, ya(e)) },
                                        classMix: s_,
                                    }),
                                ),
                        );
                    }),
                    c_ = {
                        '--pageContentWidth': '78vw',
                        '--legendAnimationDuration': '500ms',
                        base: 'Legend_base_af',
                        items: 'Legend_items_20',
                        items__mask_left: 'Legend_items__mask_left_2f',
                        items__mask_center: 'Legend_items__mask_center_4e',
                        items__mask_right: 'Legend_items__mask_right_b7',
                        items__mask_none: 'Legend_items__mask_none_4f',
                        items__withCurrentRank: 'Legend_items__withCurrentRank_ba',
                        items__hovered: 'Legend_items__hovered_67',
                        items__noOverflow: 'Legend_items__noOverflow_3b',
                        inner: 'Legend_inner_35',
                        'inner__-1': 'Legend_inner__-1_1c',
                        inner__0: 'Legend_inner__0_8d',
                        inner__1: 'Legend_inner__1_7e',
                        inner__2: 'Legend_inner__2_f5',
                        inner__3: 'Legend_inner__3_4d',
                        inner__4: 'Legend_inner__4_22',
                        inner__5: 'Legend_inner__5_43',
                        item: 'Legend_item_27',
                        item__current: 'Legend_item__current_7f',
                        item__ghost: 'Legend_item__ghost_a6',
                        description: 'Legend_description_f0',
                        fadeIn: 'Legend_fadeIn_ae',
                        fadeInThreeQuarters: 'Legend_fadeInThreeQuarters_6e',
                        fadeInHalf: 'Legend_fadeInHalf_b2',
                        fadeOut: 'Legend_fadeOut_60',
                        fadeInWithScale: 'Legend_fadeInWithScale_a7',
                        slideUp: 'Legend_slideUp_57',
                        scale: 'Legend_scale_c6',
                        raysAppearance: 'Legend_raysAppearance_6d',
                        rotate: 'Legend_rotate_c5',
                        'reverse-rotate': 'Legend_reverse-rotate_75',
                        glowAppearance: 'Legend_glowAppearance_f6',
                        highlightAppearance: 'Legend_highlightAppearance_17',
                        blink: 'Legend_blink_fe',
                        slideUpIn: 'Legend_slideUpIn_f1',
                    },
                    d_ = (e, t) =>
                        t
                            ? 'none'
                            : -1 === e || 0 === e
                              ? 'left'
                              : e >= 1 && e <= 4
                                ? 'center'
                                : 5 === e
                                  ? 'right'
                                  : 'none',
                    m_ = (0, G.Pi)(({ className: e }) => {
                        const t = lm().model.root.get().currentRank,
                            a = (0, n.useRef)(null),
                            s = (0, n.useState)(!1),
                            u = s[0],
                            i = s[1],
                            o = hm.findIndex((e) => e.rank === t);
                        return (
                            (0, n.useEffect)(() => {
                                var e;
                                const t = c_.items__noOverflow;
                                if (u) {
                                    const e = parseInt(Ym, 10);
                                    return Ar(() => {
                                        var e;
                                        null == (e = a.current) || e.classList.add(t);
                                    }, e);
                                }
                                null == (e = a.current) || e.classList.remove(t);
                            }, [u]),
                            r().createElement(
                                'div',
                                { className: f()(c_.base, e) },
                                r().createElement(
                                    'div',
                                    {
                                        ref: a,
                                        className: f()(
                                            c_.items,
                                            c_[`items__mask_${d_(o, u)}`],
                                            -1 !== o && c_.items__withCurrentRank,
                                            u && c_.items__hovered,
                                        ),
                                        onMouseEnter: () => {
                                            O('comp_7_yearly_reward_slide'), i(!0);
                                        },
                                        onMouseLeave: () => i(!1),
                                    },
                                    r().createElement(
                                        'div',
                                        { className: f()(c_.inner, !u && c_[`inner__${o}`]) },
                                        hm.map(({ rank: e, count: a }) =>
                                            r().createElement(l_, {
                                                rank: e,
                                                count: a,
                                                isHovered: u,
                                                key: e,
                                                className: f()(c_.item, e === t && c_.item__current),
                                            }),
                                        ),
                                    ),
                                ),
                                r().createElement(
                                    'div',
                                    { className: c_.description },
                                    R.strings.comp7.yearlyRewards.description(),
                                ),
                            )
                        );
                    }),
                    __ = 'StatusBanner_base_af',
                    E_ = 'StatusBanner_line_81',
                    g_ = 'StatusBanner_description_46',
                    p_ = ({ className: e }) =>
                        r().createElement(
                            'div',
                            { className: f()(__, e) },
                            r().createElement('div', { className: E_ }),
                            r().createElement(
                                'div',
                                { className: g_ },
                                R.strings.comp7.yearlyRewards.banner.willReceived(),
                            ),
                        ),
                    h_ = 'YearlyRewardsPage_base_39',
                    b_ = 'YearlyRewardsPage_headersWrapper_8e',
                    A_ = 'YearlyRewardsPage_contentWrapper_73',
                    f_ = 'YearlyRewardsPage_cardsContainer_90',
                    v_ = 'YearlyRewardsPage_legend_2b',
                    C_ = R.strings.comp7.page.heading,
                    F_ = (0, G.Pi)(() => {
                        const e = lm().model,
                            t = (0, ke.useSpring)(me);
                        return r().createElement(
                            'div',
                            { className: h_ },
                            r().createElement(
                                'div',
                                { className: b_ },
                                r().createElement(rt, { className: X }, C_.yearlyRewards()),
                                r().createElement(Nr, null),
                            ),
                            r().createElement(
                                ke.animated.div,
                                { style: t, className: A_ },
                                e.root.get().hasDataError
                                    ? r().createElement(Xm, null)
                                    : r().createElement(
                                          r().Fragment,
                                          null,
                                          r().createElement('div', { className: f_ }, r().createElement(Wm, null)),
                                          r().createElement('div', { className: v_ }, r().createElement(m_, null)),
                                          r().createElement(p_, null),
                                      ),
                            ),
                        );
                    }),
                    D_ = { context: 'model.yearlyRewardsModel' },
                    B_ = ue()(({ observableModel: e }) => ({ root: e.object() }), J),
                    w_ = B_[0];
                B_[1];
                let R_;
                !(function (e) {
                    (e[(e.NotStarted = 0)] = 'NotStarted'),
                        (e[(e.JustStarted = 1)] = 'JustStarted'),
                        (e[(e.Active = 2)] = 'Active'),
                        (e[(e.EndSoon = 3)] = 'EndSoon'),
                        (e[(e.End = 4)] = 'End'),
                        (e[(e.Disabled = 5)] = 'Disabled');
                })(R_ || (R_ = {}));
                const y_ = 'Row_base_de',
                    x_ = 'Row_base__secondary_0a',
                    S_ = 'Row_dashes_87',
                    k_ = 'Row_dash_0a',
                    N_ = ({ text: e, isSecondaryText: t = !1 }) =>
                        r().createElement(
                            'div',
                            { className: f()(y_, t && x_) },
                            e,
                            r().createElement('div', { className: S_ }),
                            r().createElement('div', { className: k_ }, R.strings.common.common.dash()),
                        ),
                    P_ = 'Separator_base_93',
                    T_ = 'Separator_base_active_37',
                    I_ = ({ isActive: e }) => r().createElement('div', { className: f()(P_, e && T_) }),
                    L_ = 'SeasonCard_base_ad',
                    M_ = 'SeasonCard_heading_bd',
                    O_ = 'SeasonCard_base__muffled_c4',
                    H_ = 'SeasonCard_name_8e',
                    $_ = 'SeasonCard_status_93',
                    U_ = 'SeasonCard_rankImage_26',
                    W_ = 'SeasonCard_rankStatus_16',
                    z_ = 'SeasonCard_table_17',
                    G_ = 'SeasonCard_container_28',
                    j_ = 'SeasonCard_condition_6b',
                    q_ = 'SeasonCard_glow_54',
                    V_ = 'SeasonCard_statisticsAvailability_15',
                    Q_ = 'SeasonCard_generationOfStatistics_96',
                    X_ = R.strings.comp7.yearlyStatistics,
                    Y_ = R.images.gui.maps.icons.comp7.ranks,
                    K_ = (0, G.Pi)(({ index: e, season: t }) => {
                        const a = le().model,
                            n = a.season.endTimestamp.get(),
                            s = a.season.startTimestamp.get(),
                            u = a.season.state.get(),
                            i = a.season.serverTimestamp.get(),
                            o = ((e) => {
                                switch (e) {
                                    case F.Medium:
                                        return Y_.c_200;
                                    case F.Large:
                                        return Y_.c_260;
                                    case F.ExtraLarge:
                                        return Y_.c_420;
                                    default:
                                        return Y_.c_150;
                                }
                            })(w().mediaSize),
                            l = 0 === e;
                        return r().createElement(
                            'div',
                            { className: f()(L_, 0 !== e && O_) },
                            r().createElement(
                                'div',
                                { className: M_ },
                                r().createElement('div', { className: H_ }, X_.seasonName.$num(e)),
                                l
                                    ? r().createElement(
                                          'div',
                                          { className: $_ },
                                          i < n ? xr(s, n, i) : R.strings.comp7.season.over(),
                                      )
                                    : r().createElement('div', { className: $_ }, X_.seasonStatus.$num(e)),
                            ),
                            r().createElement('div', {
                                className: U_,
                                style: { backgroundImage: `url('${o.$dyn('qualification' + (l ? '' : `_${t}`))}')` },
                            }),
                            r().createElement('div', { className: W_ }, X_.rankStatus()),
                            r().createElement(
                                'div',
                                { className: z_ },
                                r().createElement(
                                    'div',
                                    { className: G_ },
                                    r().createElement(N_, { text: X_.rating() }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: G_ },
                                    r().createElement(N_, { text: X_.battles() }),
                                    r().createElement(N_, { text: X_.wins(), isSecondaryText: !0 }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: G_ },
                                    r().createElement(N_, { text: X_.superPlatoonBattles() }),
                                    r().createElement(N_, { text: X_.wins(), isSecondaryText: !0 }),
                                ),
                            ),
                            r().createElement(I_, { isActive: l }),
                            l &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement('div', { className: q_ }),
                                    r().createElement(
                                        'div',
                                        { className: j_ },
                                        u === R_.End
                                            ? r().createElement(Qn, { text: X_.generationOfStatistics(), classMix: Q_ })
                                            : r().createElement(Qn, {
                                                  text: X_.statisticsAvailability(),
                                                  classMix: V_,
                                              }),
                                    ),
                                ),
                        );
                    }),
                    Z_ = 'YearlyStatisticsPage_base_87',
                    J_ = 'YearlyStatisticsPage_contentWrapper_24',
                    eE = 'YearlyStatisticsPage_cardWrapper_dd',
                    tE = 'YearlyStatisticsPage_divider_a2',
                    aE = 'YearlyStatisticsPage_divider__left_bf',
                    nE = 'YearlyStatisticsPage_divider__right_92',
                    rE = ['blue', 'red', 'green'],
                    sE = (0, G.Pi)(() => {
                        const e = (0, ke.useSpring)(me);
                        return r().createElement(
                            'div',
                            { className: Z_ },
                            r().createElement(rt, { className: X }, R.strings.comp7.page.heading.yearlyStatistics()),
                            r().createElement(Nr, null),
                            r().createElement(
                                ke.animated.div,
                                { style: e, className: J_ },
                                rE.map((e, t) =>
                                    r().createElement(
                                        'div',
                                        { key: t, className: eE },
                                        0 === t && r().createElement('div', { className: f()(tE, aE) }),
                                        r().createElement(K_, { index: t, season: e }),
                                        r().createElement('div', { className: f()(tE, nE) }),
                                    ),
                                ),
                            ),
                        );
                    }),
                    uE = { context: 'model.yearlyRewardsModel' },
                    iE = {
                        [ce.Progression]: () => r().createElement(qr, { options: Ao }, r().createElement(bo, null)),
                        [ce.RankRewards]: () => r().createElement(vo, { options: Cc }, r().createElement(vc, null)),
                        [ce.WeeklyQuests]: () => r().createElement(Rc, { options: Yd }, r().createElement(Xd, null)),
                        [ce.Leaderboard]: () => r().createElement(mt, { options: $r }, r().createElement(Hr, null)),
                        [ce.YearlyRewards]: () =>
                            r().createElement(
                                om,
                                { options: D_ },
                                r().createElement(
                                    sm,
                                    { options: { context: 'model.yearlyRewardsModel' }, mocks: nm, mode: 'mocks' },
                                    r().createElement(F_, null),
                                ),
                            ),
                        [ce.YearlyStatistics]: () =>
                            r().createElement(w_, { options: uE }, r().createElement(sE, null)),
                    },
                    oE = ({ pageView: e }) => {
                        const t = iE[e];
                        return t ? r().createElement(t, null) : (console.error('Unreachable code: ViewResolver'), null);
                    },
                    lE = {
                        '--pageContentWidth': '78vw',
                        base: 'App_base_ef',
                        base__qualification: 'App_base__qualification_73',
                        base__progression: 'App_base__progression_3b',
                        base__leaderboard: 'App_base__leaderboard_da',
                        base__rankRewards: 'App_base__rankRewards_55',
                        base__weeklyQuests: 'App_base__weeklyQuests_58',
                        viewContainer: 'App_viewContainer_81',
                        sidebar: 'App_sidebar_95',
                        info: 'App_info_e9',
                    },
                    cE = { context: 'model.sidebar' },
                    dE = { context: 'model.scheduleInfo' },
                    mE = (0, G.Pi)(() => {
                        const e = pe(),
                            t = e.model,
                            a = e.controls,
                            n = t.root.get().pageViewId,
                            s = t.computes.isProgressionInQualification();
                        return r().createElement(
                            'div',
                            {
                                className: f()(
                                    lE.base,
                                    s && !Z() && lE.base__qualification,
                                    !s && lE[`base__${de[n]}`],
                                ),
                            },
                            r().createElement(
                                'div',
                                { className: lE.viewContainer },
                                r().createElement(oe, { options: dE }, r().createElement(oE, { pageView: n })),
                            ),
                            r().createElement(
                                ye,
                                { options: cE },
                                r().createElement(Ye, { pageView: n, className: lE.sidebar }),
                            ),
                            r().createElement(
                                'div',
                                { className: lE.info },
                                r().createElement(z, {
                                    caption: R.strings.comp7.infoPageButtonLabel(),
                                    type: 'info',
                                    side: 'left',
                                    onClick: a.openInfoPage,
                                }),
                            ),
                            r().createElement(K, { onClose: a.close }),
                        );
                    });
                engine.whenReady.then(() => {
                    M().render(
                        r().createElement(I, null, r().createElement(ge, null, r().createElement(mE, null))),
                        document.getElementById('root'),
                    );
                });
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(e) {
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var a = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](a, a.exports, __webpack_require__), a.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, a, n) => {
            if (!t) {
                var r = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [t, a, n] = deferred[o], s = !0, u = 0; u < t.length; u++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[u]))
                            ? t.splice(u--, 1)
                            : ((s = !1), n < r && (r = n));
                    if (s) {
                        deferred.splice(o--, 1);
                        var i = a();
                        void 0 !== i && (e = i);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > n; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [t, a, n];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(t, { a: t }), t;
        }),
        (__webpack_require__.d = (e, t) => {
            for (var a in t)
                __webpack_require__.o(t, a) &&
                    !__webpack_require__.o(e, a) &&
                    Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
        }),
        (__webpack_require__.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (__webpack_require__.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (__webpack_require__.r = (e) => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (__webpack_require__.j = 992),
        (() => {
            var e = { 992: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, a) => {
                    var n,
                        r,
                        [s, u, i] = a,
                        o = 0;
                    if (s.some((t) => 0 !== e[t])) {
                        for (n in u) __webpack_require__.o(u, n) && (__webpack_require__.m[n] = u[n]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (t && t(a); o < s.length; o++)
                        (r = s[o]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(l);
                },
                a = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [926], () => __webpack_require__(5617));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
