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
                        isFocused: () => v,
                        pxToRem: () => h,
                        remToPx: () => b,
                        resize: () => _,
                        sendEvent: () => u.qP,
                        setAnimateWindow: () => f,
                        setEventHandled: () => A,
                        setInputPaddingsRem: () => o,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => y,
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
                function f(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function v() {
                    return viewEnv.isFocused();
                }
                function A() {
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
                    y = Promise.all([
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
                    c9: () => v,
                    ry: () => b,
                    Eu: () => f,
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
                    f = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    v = (e, t) => {
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
                    A = () => v(o.CLOSE),
                    C = (e, t) => {
                        e.keyCode === _.n.ESCAPE && t();
                    };
                var F = a(7572);
                const D = r.instance,
                    B = {
                        DataTracker: s.Z,
                        ViewModel: F.Z,
                        ViewEventType: o,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: d,
                        DateFormatType: m,
                        makeGlobalBoundingBox: h,
                        sendMoveEvent: (e) => v(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: A,
                        sendClosePopOverEvent: () => v(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, a = 0) => {
                            v(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: a, args: t });
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
                            v(o.POP_OVER, {
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
                            const t = (t) => C(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            C(e, A);
                        },
                        handleViewEvent: v,
                        onBindingsReady: b,
                        onLayoutReady: f,
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
                        ClickOutsideManager: D,
                        SystemLocale: u,
                        UserLocale: i,
                    };
                window.ViewEnvHelper = B;
            },
            13: (e, t, a) => {
                'use strict';
                var n = {};
                a.r(n), a.d(n, { Area: () => sa, Bar: () => aa, Default: () => ra, useVerticalScrollApi: () => Lt });
                var r = {};
                a.r(r),
                    a.d(r, {
                        Area: () => Hs,
                        Bar: () => Is,
                        DefaultScroll: () => Os,
                        Direction: () => Nt,
                        defaultSettings: () => Pt,
                        useHorizontalScrollApi: () => Fs,
                    });
                var s = a(6179),
                    u = a.n(s);
                const i = (e, t, a) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && a.extraLarge) ||
                          (t.largeHeight && a.large) ||
                          (t.mediumHeight && a.medium) ||
                          (t.smallHeight && a.small) ||
                          (t.extraSmallHeight && a.extraSmall)
                            ? e
                            : null
                        : e;
                var o = a(3138);
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var c;
                function d(e, t, a) {
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
                })(c || (c = {}));
                const m = o.O.client.getSize('rem'),
                    _ = m.width,
                    E = m.height,
                    g = Object.assign({ width: _, height: E }, d(_, E, l)),
                    p = (0, s.createContext)(g),
                    h = ['children'];
                const b = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                r = {},
                                s = Object.keys(e);
                            for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                            return r;
                        })(e, h);
                    const n = (0, s.useContext)(p),
                        r = n.extraLarge,
                        u = n.large,
                        o = n.medium,
                        l = n.small,
                        c = n.extraSmall,
                        d = n.extraLargeWidth,
                        m = n.largeWidth,
                        _ = n.mediumWidth,
                        E = n.smallWidth,
                        g = n.extraSmallWidth,
                        b = n.extraLargeHeight,
                        f = n.largeHeight,
                        v = n.mediumHeight,
                        A = n.smallHeight,
                        C = n.extraSmallHeight,
                        F = { extraLarge: b, large: f, medium: v, small: A, extraSmall: C };
                    if (a.extraLarge || a.large || a.medium || a.small || a.extraSmall) {
                        if (a.extraLarge && r) return t;
                        if (a.large && u) return t;
                        if (a.medium && o) return t;
                        if (a.small && l) return t;
                        if (a.extraSmall && c) return t;
                    } else {
                        if (a.extraLargeWidth && d) return i(t, a, F);
                        if (a.largeWidth && m) return i(t, a, F);
                        if (a.mediumWidth && _) return i(t, a, F);
                        if (a.smallWidth && E) return i(t, a, F);
                        if (a.extraSmallWidth && g) return i(t, a, F);
                        if (
                            !(a.extraLargeWidth || a.largeWidth || a.mediumWidth || a.smallWidth || a.extraSmallWidth)
                        ) {
                            if (a.extraLargeHeight && b) return t;
                            if (a.largeHeight && f) return t;
                            if (a.mediumHeight && v) return t;
                            if (a.smallHeight && A) return t;
                            if (a.extraSmallHeight && C) return t;
                        }
                    }
                    return null;
                };
                b.defaultProps = {
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
                (0, s.memo)(b);
                const f = (e) => {
                        const t = (0, s.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    v = (0, s.memo)(({ children: e }) => {
                        const t = (0, s.useContext)(p),
                            a = (0, s.useState)(t),
                            n = a[0],
                            r = a[1],
                            i = (0, s.useCallback)((e, t) => {
                                const a = o.O.view.pxToRem(e),
                                    n = o.O.view.pxToRem(t);
                                r(Object.assign({ width: a, height: n }, d(a, n, l)));
                            }, []);
                        f(() => {
                            engine.on('clientResized', i);
                        }),
                            (0, s.useEffect)(() => () => engine.off('clientResized', i), [i]);
                        const c = (0, s.useMemo)(() => Object.assign({}, n), [n]);
                        return u().createElement(p.Provider, { value: c }, e);
                    });
                var A = a(6483),
                    C = a.n(A),
                    F = a(926),
                    D = a.n(F);
                let B, w, y;
                !(function (e) {
                    (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = l.small.width)] = 'Small'),
                        (e[(e.Medium = l.medium.width)] = 'Medium'),
                        (e[(e.Large = l.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                })(B || (B = {})),
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
                const S = () => {
                        const e = (0, s.useContext)(p),
                            t = e.width,
                            a = e.height,
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return B.ExtraLarge;
                                    case e.large:
                                        return B.Large;
                                    case e.medium:
                                        return B.Medium;
                                    case e.small:
                                        return B.Small;
                                    case e.extraSmall:
                                        return B.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), B.ExtraSmall;
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
                            u = ((e) => {
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
                        return { mediaSize: n, mediaWidth: r, mediaHeight: u, remScreenWidth: t, remScreenHeight: a };
                    },
                    k = ['children', 'className'];
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
                const N = {
                        [w.ExtraSmall]: '',
                        [w.Small]: D().SMALL_WIDTH,
                        [w.Medium]: `${D().SMALL_WIDTH} ${D().MEDIUM_WIDTH}`,
                        [w.Large]: `${D().SMALL_WIDTH} ${D().MEDIUM_WIDTH} ${D().LARGE_WIDTH}`,
                        [w.ExtraLarge]: `${D().SMALL_WIDTH} ${D().MEDIUM_WIDTH} ${D().LARGE_WIDTH} ${D().EXTRA_LARGE_WIDTH}`,
                    },
                    P = {
                        [y.ExtraSmall]: '',
                        [y.Small]: D().SMALL_HEIGHT,
                        [y.Medium]: `${D().SMALL_HEIGHT} ${D().MEDIUM_HEIGHT}`,
                        [y.Large]: `${D().SMALL_HEIGHT} ${D().MEDIUM_HEIGHT} ${D().LARGE_HEIGHT}`,
                        [y.ExtraLarge]: `${D().SMALL_HEIGHT} ${D().MEDIUM_HEIGHT} ${D().LARGE_HEIGHT} ${D().EXTRA_LARGE_HEIGHT}`,
                    },
                    T = {
                        [B.ExtraSmall]: '',
                        [B.Small]: D().SMALL,
                        [B.Medium]: `${D().SMALL} ${D().MEDIUM}`,
                        [B.Large]: `${D().SMALL} ${D().MEDIUM} ${D().LARGE}`,
                        [B.ExtraLarge]: `${D().SMALL} ${D().MEDIUM} ${D().LARGE} ${D().EXTRA_LARGE}`,
                    },
                    L = (e) => {
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
                            })(e, k);
                        const r = S(),
                            s = r.mediaWidth,
                            i = r.mediaHeight,
                            o = r.mediaSize;
                        return u().createElement('div', x({ className: C()(a, N[s], P[i], T[o]) }, n), t);
                    },
                    I = ['children'];
                const M = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                r = {},
                                s = Object.keys(e);
                            for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                            return r;
                        })(e, I);
                    return u().createElement(v, null, u().createElement(L, a, t));
                };
                var O = a(493),
                    H = a.n(O);
                function W(e) {
                    engine.call('PlaySound', e);
                }
                const $ = {
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
                    U = {
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
                    z = [
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
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        G.apply(this, arguments)
                    );
                }
                class j extends u().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && W(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && W(this.props.soundClick);
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
                            r = e.side,
                            s = e.type,
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
                                })(e, z)),
                            _ = C()(U.base, U[`base__${s}`], U[`base__${r}`], null == i ? void 0 : i.base),
                            E = C()(U.icon, U[`icon__${s}`], U[`icon__${r}`], null == i ? void 0 : i.icon),
                            g = C()(U.glow, null == i ? void 0 : i.glow),
                            p = C()(U.caption, U[`caption__${s}`], null == i ? void 0 : i.caption),
                            h = C()(U.goto, null == i ? void 0 : i.goto);
                        return u().createElement(
                            'div',
                            G(
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
                            'info' !== s && u().createElement('div', { className: U.shine }),
                            u().createElement('div', { className: E }, u().createElement('div', { className: g })),
                            u().createElement('div', { className: p }, t),
                            n && u().createElement('div', { className: h }, n),
                        );
                    }
                }
                j.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var q = a(3403),
                    V = a(5521),
                    Q = a(4179);
                const X = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function Y(e = V.n.NONE, t = X, a = !1) {
                    (0, s.useEffect)(() => {
                        if (e !== V.n.NONE)
                            return (
                                window.addEventListener('keydown', n, a),
                                () => {
                                    window.removeEventListener('keydown', n, a);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (o.O.view.isEventHandled()) return;
                                o.O.view.setEventHandled(), t(n), a && n.stopPropagation();
                            }
                        }
                    }, [t, e, a]);
                }
                const K = 'page_heading_05',
                    Z = 'page_close_a4',
                    J = ({ onClose: e, className: t }) => {
                        var a;
                        return (
                            (a = e),
                            Y(V.n.ESCAPE, a),
                            u().createElement(
                                'div',
                                { className: C()(Z, t) },
                                u().createElement(j, {
                                    caption: R.strings.comp7.closeButtonLabel(),
                                    type: 'close',
                                    side: 'right',
                                    onClick: e,
                                }),
                            )
                        );
                    },
                    ee = () => o.O.client.graphicsQuality.isHigh();
                function te() {}
                function ae(e) {
                    return e;
                }
                function ne() {
                    return !1;
                }
                console.log;
                var re = a(9174);
                function se(e, t) {
                    var a = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (a) return (a = a.call(e)).next.bind(a);
                    if (
                        Array.isArray(e) ||
                        (a = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return ue(e, t);
                            var a = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === a && e.constructor && (a = e.constructor.name);
                            if ('Map' === a || 'Set' === a) return Array.from(e);
                            if ('Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
                                return ue(e, t);
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
                function ue(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                    return n;
                }
                const ie = (e) => (0 === e ? window : window.subViews.get(e));
                const oe = () => (e, t) => {
                        const a = (0, s.createContext)({});
                        return [
                            function ({ mode: n = 'real', options: r, children: i, mocks: l }) {
                                const c = (0, s.useRef)([]),
                                    d = (a, n, r) => {
                                        var s;
                                        const u = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: a = ie,
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
                                                const u = (e) => {
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
                                                        const i = 'string' == typeof s ? `${n}.${s}` : n,
                                                            l = o.O.view.addModelObserver(i, t, !0);
                                                        return r.set(l, a), e && a(u(s)), l;
                                                    },
                                                    readByPath: u,
                                                    createCallback: (e, t) => {
                                                        const a = u(t);
                                                        return (...t) => {
                                                            a(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = u(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, a = se(r.keys()); !(e = a()).done; ) s(e.value, t);
                                                    },
                                                    unsubscribe: s,
                                                };
                                            })(n),
                                            i =
                                                'real' === a
                                                    ? u
                                                    : Object.assign({}, u, {
                                                          readByPath:
                                                              null != (s = null == r ? void 0 : r.getter)
                                                                  ? s
                                                                  : () => {},
                                                      }),
                                            l = (e) =>
                                                'mocks' === a ? (null == r ? void 0 : r.getter(e)) : i.readByPath(e),
                                            d = (e) => c.current.push(e),
                                            m = e({
                                                mode: a,
                                                readByPath: l,
                                                externalModel: i,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const n = null != t ? t : l(e),
                                                            r = re.LO.box(n, { equals: ne });
                                                        return (
                                                            'real' === a &&
                                                                i.subscribe(
                                                                    (0, re.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const n = null != t ? t : l(e),
                                                            r = re.LO.box(n, { equals: ne });
                                                        return (
                                                            'real' === a &&
                                                                i.subscribe(
                                                                    (0, re.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const n = l(t);
                                                        if (Array.isArray(e)) {
                                                            const r = e.reduce(
                                                                (e, t) => ((e[t] = re.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === a &&
                                                                    i.subscribe(
                                                                        (0, re.aD)((t) => {
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
                                                                    (e, [t, a]) => ((e[a] = re.LO.box(n[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === a &&
                                                                    i.subscribe(
                                                                        (0, re.aD)((e) => {
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
                                            _ = { mode: a, model: m, externalModel: i, cleanup: d };
                                        return {
                                            model: m,
                                            controls: 'mocks' === a && r ? r.controls(_) : t(_),
                                            externalModel: i,
                                            mode: a,
                                        };
                                    },
                                    m = (0, s.useRef)(!1),
                                    _ = (0, s.useState)(n),
                                    E = _[0],
                                    g = _[1],
                                    p = (0, s.useState)(() => d(n, r, l)),
                                    h = p[0],
                                    b = p[1];
                                return (
                                    (0, s.useEffect)(() => {
                                        m.current ? b(d(E, r, l)) : (m.current = !0);
                                    }, [l, E, r]),
                                    (0, s.useEffect)(() => {
                                        g(n);
                                    }, [n]),
                                    (0, s.useEffect)(
                                        () => () => {
                                            h.externalModel.dispose(), c.current.forEach((e) => e());
                                        },
                                        [h],
                                    ),
                                    u().createElement(a.Provider, { value: h }, i)
                                );
                            },
                            () => (0, s.useContext)(a),
                        ];
                    },
                    le = oe()(
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
                    ce = le[0],
                    de = le[1];
                let me;
                !(function (e) {
                    (e[(e.Progression = 0)] = 'Progression'),
                        (e[(e.RankRewards = 1)] = 'RankRewards'),
                        (e[(e.WeeklyQuests = 2)] = 'WeeklyQuests'),
                        (e[(e.Leaderboard = 3)] = 'Leaderboard');
                })(me || (me = {}));
                const _e = {
                        [me.Progression]: 'progression',
                        [me.RankRewards]: 'rankRewards',
                        [me.WeeklyQuests]: 'weeklyQuests',
                        [me.Leaderboard]: 'leaderboard',
                        [me.YearlyRewards]: 'yearlyRewards',
                        [me.YearlyStatistics]: 'yearlyStatistics',
                    },
                    Ee = { from: { opacity: 0 }, to: { opacity: 1 }, delay: 300, config: { duration: 300 } };
                var ge = a(3946);
                const pe = oe()(
                        ({ observableModel: e }) => {
                            const t = { root: e.object() },
                                a = e.object('progressionModel.qualificationModel'),
                                n = (0, ge.Om)(() => t.root.get().pageViewId === me.Progression && a.get().isActive);
                            return Object.assign({}, t, { computes: { isProgressionInQualification: n } });
                        },
                        ({ externalModel: e }) => ({
                            close: e.createCallbackNoArgs('onClose'),
                            openInfoPage: e.createCallbackNoArgs('onInfoPageOpen'),
                        }),
                    ),
                    he = pe[0],
                    be = pe[1];
                function fe(e, t) {
                    var a;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (a = e[t]) ? void 0 : a.value;
                }
                const ve = fe;
                function Ae(e) {
                    var t;
                    return e && 'value' in e && null != (t = e.constructor) && t.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function Ce(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, a, n) => t(null == e ? void 0 : e.value, a, n));
                }
                function Fe(e, t = 0, a = e.length - 1) {
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
                function De(e, t) {
                    for (let a = 0; a < e.length; a++) {
                        const n = Ae(e[a]);
                        if (t(n, a, e)) return n;
                    }
                }
                function Be(e, t) {
                    for (let a = 0; a < e.length; a++) {
                        if (t(ve(e, a), a, e)) return a;
                    }
                }
                function we(e, t) {
                    for (let a = e.length - 1; a >= 0; a--) {
                        if (t(ve(e, a), a, e)) return a;
                    }
                }
                const ye = R.images.comp7.gui.maps.icons.comp7.metaTabs,
                    Se = (e, t) => {
                        const a = _e[e];
                        return t ? `${ye.$dyn(a)}` : `${ye.small.$dyn(a)}`;
                    },
                    ke = oe()(
                        ({ observableModel: e }) => {
                            const t = { root: e.object() },
                                a = e.array('items'),
                                n = (0, ge.Om)(
                                    (e) => [
                                        {
                                            id: 0,
                                            items: Ce(a.get(), ({ id: t, hasNotification: a }) =>
                                                Object.assign(
                                                    { id: t, icon: Se(t, e) },
                                                    a && { notification: { type: 'dot' } },
                                                ),
                                            ),
                                        },
                                    ],
                                    { equals: ne },
                                );
                            return Object.assign({}, t, { computes: { tabs: n } });
                        },
                        ({ externalModel: e }) => ({
                            changeSidebarTab: e.createCallback((e) => ({ tabId: e }), 'onSideBarTabChange'),
                        }),
                    ),
                    Re = ke[0],
                    xe = ke[1],
                    Ne = (e) => {
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
                var Pe = a(7030);
                const Te = {
                        base: 'Frame_base_af',
                        base__small: 'Frame_base__small_f0',
                        base__medium: 'Frame_base__medium_05',
                        border: 'Frame_border_17',
                        border__top: 'Frame_border__top_f7',
                        border__bottom: 'Frame_border__bottom_52',
                        arrow: 'Frame_arrow_c3',
                    },
                    Le = u().forwardRef(function ({ classNames: e, arrowRef: t, size: a = 'medium', className: n }, r) {
                        return u().createElement(
                            'div',
                            { className: C()(Te.base, Te[`base__${a}`], n), ref: r },
                            u().createElement('div', {
                                className: C()(
                                    Te.border,
                                    Te.border__top,
                                    null == e ? void 0 : e.border,
                                    null == e ? void 0 : e.borderTop,
                                ),
                            }),
                            u().createElement('div', {
                                className: C()(
                                    Te.border,
                                    Te.border__bottom,
                                    null == e ? void 0 : e.border,
                                    null == e ? void 0 : e.borderBottom,
                                ),
                            }),
                            u().createElement('div', {
                                className: C()(Te.arrow, null == e ? void 0 : e.arrow),
                                ref: t,
                            }),
                        );
                    }),
                    Ie = {
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
                    Me = { mouseEnter: 'highlight', click: 'play' },
                    Oe = u().forwardRef(function (
                        {
                            id: e,
                            isActive: t,
                            className: a,
                            classNames: n,
                            sounds: r = Me,
                            notification: s,
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
                                !t && r[a] && W(r[a]);
                            },
                            p = u().createElement(
                                'div',
                                {
                                    className: C()(
                                        Ie.base,
                                        Ie[`base__${o}`],
                                        t && C()(Ie.base__active, null == n ? void 0 : n.activeTab),
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
                                u().createElement('div', {
                                    className: C()(Ie.highlight, null == n ? void 0 : n.highlight),
                                }),
                                'function' == typeof i && o
                                    ? i(o)
                                    : u().createElement('div', {
                                          className: C()(Ie.icon, Ie[`icon__${o}`], null == n ? void 0 : n.icon),
                                          style: { backgroundImage: `url(${i})` },
                                      }),
                                l && l({ id: e, isActive: t, size: o }),
                                s &&
                                    u().createElement(
                                        'div',
                                        {
                                            className: C()(
                                                Ie.notification,
                                                Ie[`notification__${s.type}`],
                                                s.size ? Ie[`notification__${s.size}`] : Ie.notification__medium,
                                                null == n ? void 0 : n.notification,
                                            ),
                                        },
                                        'dot' !== s.type && s.value,
                                    ),
                            );
                        return _ ? u().createElement(_, { key: e, id: e }, p) : p;
                    }),
                    He = {
                        base: 'VerticalTabs_base_41',
                        title: 'VerticalTabs_title_8c',
                        group: 'VerticalTabs_group_08',
                        group__small: 'VerticalTabs_group__small_69',
                        group__medium: 'VerticalTabs_group__medium_68',
                    },
                    We = u().memo(function ({
                        active: e,
                        tabs: t,
                        sounds: a,
                        className: n,
                        classNames: r,
                        size: i = 'medium',
                        additionContent: l,
                        onClick: c,
                        onMouseEnter: d,
                        onMouseLeave: m,
                        WrapperElement: _,
                    }) {
                        const E = (0, s.useRef)(null),
                            g = (0, s.useRef)(null),
                            p = (0, s.useRef)(null),
                            h = (0, s.useRef)(null),
                            b = (0, Pe.useSpring)(() => ({
                                marginLeft: 0,
                                onChange: (e) => {
                                    const t = E.current;
                                    t && (t.style.marginLeft = `${e.value.marginLeft}rem`);
                                },
                            }))[1],
                            f = (0, Pe.useSpring)(() => ({
                                opacity: 0,
                                onChange: (e) => {
                                    const t = E.current;
                                    t && (t.style.opacity = `${e.value.opacity}`);
                                },
                            }))[1],
                            v = (0, Pe.useSpring)(() => ({
                                position: 0,
                                onChange: (e) => {
                                    const t = g.current;
                                    t &&
                                        (t.style.transform = `translateY(${e.value.position / o.O.view.getScale()}rem)`);
                                },
                                onStart: () => {
                                    b.start({
                                        from: { marginLeft: 12 },
                                        to: { marginLeft: 0 },
                                        config: { duration: 50 },
                                    }),
                                        f.start({ from: { opacity: 1 }, to: { opacity: 0 }, config: { duration: 50 } });
                                },
                                onRest: () => {
                                    b.start({
                                        from: { marginLeft: 0 },
                                        to: { marginLeft: 12 },
                                        config: { duration: 150 },
                                    }),
                                        f.start({
                                            from: { opacity: 0 },
                                            to: { opacity: 1 },
                                            config: { duration: 150 },
                                        });
                                },
                            }))[1],
                            A = (0, s.useCallback)((e) => {
                                if (null !== p.current && null !== h.current) {
                                    e(p.current.getBoundingClientRect().top - h.current.getBoundingClientRect().top);
                                }
                            }, []);
                        var F, D;
                        return (
                            (0, s.useEffect)(() => {
                                A((e) => {
                                    v.start({ position: e, config: { duration: 200 } });
                                });
                            }, [v, e, A]),
                            (0, s.useEffect)(
                                () =>
                                    Ne(() => {
                                        A((e) => {
                                            v.start({ position: e, immediate: !0 });
                                        });
                                    }),
                                [v, A, i],
                            ),
                            (F = () => {
                                A((e) => {
                                    v.start({ position: e, config: { duration: 200 } });
                                });
                            }),
                            (D = [v, A]),
                            (0, s.useEffect)(() => {
                                let e = () => {};
                                const t = () => {
                                    e(), (e = Ne(F));
                                };
                                return (
                                    window.addEventListener('resize', t),
                                    () => {
                                        e(), window.removeEventListener('resize', t);
                                    }
                                );
                            }, D),
                            u().createElement(
                                'div',
                                { className: C()(He.base, n), ref: h },
                                t.map(({ id: t, items: n, title: s, groupClassNames: o }) =>
                                    u().createElement(
                                        'div',
                                        {
                                            key: t,
                                            className: C()(He.group, He[`group__${i}`], null == o ? void 0 : o.group),
                                        },
                                        s &&
                                            u().createElement(
                                                'div',
                                                { className: C()(He.title, null == o ? void 0 : o.title) },
                                                s,
                                            ),
                                        n.map(({ id: t, icon: n, notification: s }) =>
                                            u().createElement(Oe, {
                                                key: t,
                                                id: t,
                                                icon: n,
                                                notification: s,
                                                ref: p,
                                                sounds: a,
                                                isActive: e === t,
                                                size: i,
                                                className: null == r ? void 0 : r.tab,
                                                classNames: r,
                                                additionContent: l,
                                                onMouseEnter: d,
                                                onMouseLeave: m,
                                                onClick: c,
                                                WrapperElement: _,
                                            }),
                                        ),
                                    ),
                                ),
                                u().createElement(Le, {
                                    arrowRef: E,
                                    ref: g,
                                    size: i,
                                    className: null == r ? void 0 : r.frame,
                                    classNames: r,
                                }),
                            )
                        );
                    }),
                    $e = [
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
                function Ue(e) {
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
                const ze = (e, t, a = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: Q.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: n,
                                },
                                a,
                            ),
                        );
                    },
                    Ge = (e) => {
                        let t = e.children,
                            a = e.contentId,
                            n = e.args,
                            r = e.onMouseEnter,
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
                            f = e.onShow,
                            v = e.onHide,
                            A = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, $e);
                        const C = (0, s.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            F = (0, s.useMemo)(
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
                            D = (0, s.useCallback)(() => {
                                (C.current.isVisible && C.current.timeoutId) ||
                                    (ze(a, E, { isMouseEvent: !0, on: !0, arguments: Ue(n) }, F),
                                    f && f(),
                                    (C.current.isVisible = !0));
                            }, [a, E, n, F, f]),
                            B = (0, s.useCallback)(() => {
                                if (C.current.isVisible || C.current.timeoutId) {
                                    const e = C.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (C.current.timeoutId = 0)),
                                        ze(a, E, { on: !1 }, F),
                                        C.current.isVisible && v && v(),
                                        (C.current.isVisible = !1);
                                }
                            }, [a, E, F, v]),
                            w = (0, s.useCallback)((e) => {
                                C.current.isVisible &&
                                    ((C.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (C.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(C.current.prevTarget) && B();
                                    }, 200)));
                            }, []);
                        (0, s.useEffect)(() => {
                            const e = C.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', w, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', w, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, s.useEffect)(() => {
                                !1 === p && B();
                            }, [p, B]),
                            (0, s.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', B),
                                    () => {
                                        window.removeEventListener('mouseleave', B), B();
                                    }
                                ),
                                [B],
                            );
                        return p
                            ? (0, s.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((y = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((C.current.timeoutId = window.setTimeout(D, c ? 100 : 400)),
                                                      r && r(e),
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
                                      A,
                                  ),
                              )
                            : t;
                        var y;
                    },
                    je = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function qe() {
                    return (
                        (qe =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        qe.apply(this, arguments)
                    );
                }
                const Ve = R.views.common.tooltip_window.simple_tooltip_content,
                    Qe = (e) => {
                        let t = e.children,
                            a = e.body,
                            n = e.header,
                            r = e.note,
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
                            })(e, je);
                        const c = (0, s.useMemo)(() => {
                            const e = Object.assign({}, o, { body: a, header: n, note: r, alert: i });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [i, a, n, r, o]);
                        return u().createElement(
                            Ge,
                            qe(
                                {
                                    contentId:
                                        ((d = null == o ? void 0 : o.hasHtmlContent),
                                        d ? Ve.SimpleTooltipHtmlContent('resId') : Ve.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            t,
                        );
                        var d;
                    },
                    Xe = R.strings.comp7.sidebar.tabs.tooltip,
                    Ye = ({ children: e, id: t }) => {
                        const a = _e[t];
                        return u().createElement(Qe, { header: `${Xe.header.$dyn(a)}`, body: `${Xe.body.$dyn(a)}` }, e);
                    },
                    Ke = { icon: 'Tabs_icon_78' },
                    Ze = (0, q.Pi)(({ pageView: e, className: t }) => {
                        const a = xe(),
                            n = a.model,
                            r = a.controls,
                            i = S().mediaSize >= B.Medium,
                            o = (0, s.useCallback)((e) => r.changeSidebarTab(e), [r]),
                            l = n.computes.tabs(i);
                        return u().createElement(We, {
                            tabs: l,
                            onClick: o,
                            active: e,
                            size: i ? 'medium' : 'small',
                            className: t,
                            classNames: Ke,
                            WrapperElement: Ye,
                        });
                    }),
                    Je = 'Spinner_base_87',
                    et = 'Spinner_caption_cf',
                    tt = 'Spinner_gear_c4',
                    at = 'Spinner_logo_bf',
                    nt = ({ message: e, className: t, classNames: a }) =>
                        u().createElement(
                            'div',
                            { className: C()(Je, t) },
                            e && u().createElement('div', { className: C()(et, null == a ? void 0 : a.caption) }, e),
                            u().createElement('div', { className: C()(tt, null == a ? void 0 : a.gear) }),
                            u().createElement('div', { className: C()(at, null == a ? void 0 : a.logo) }),
                        );
                let rt;
                !(function (e) {
                    (e[(e.Initial = 0)] = 'Initial'), (e[(e.Success = 1)] = 'Success'), (e[(e.Error = 2)] = 'Error');
                })(rt || (rt = {}));
                const st = 'Heading_base_74',
                    ut = ({ children: e, className: t }) => u().createElement('div', { className: C()(st, t) }, e),
                    it = {
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
                let ot, lt;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(ot || (ot = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
                    })(lt || (lt = {}));
                const ct = ({
                    children: e,
                    size: t,
                    isFocused: a,
                    type: n,
                    disabled: r,
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
                    const p = (0, s.useRef)(null),
                        h = (0, s.useState)(a),
                        b = h[0],
                        f = h[1],
                        v = (0, s.useState)(!1),
                        A = v[0],
                        F = v[1],
                        D = (0, s.useState)(!1),
                        B = D[0],
                        w = D[1],
                        y = (0, s.useCallback)(() => {
                            r || (p.current && (p.current.focus(), f(!0)));
                        }, [r]),
                        S = (0, s.useCallback)(
                            (e) => {
                                b && null !== p.current && !p.current.contains(e.target) && f(!1);
                            },
                            [b],
                        ),
                        k = (0, s.useCallback)(
                            (e) => {
                                r || (g && g(e));
                            },
                            [r, g],
                        ),
                        x = (0, s.useCallback)(
                            (e) => {
                                r || (null !== o && W(o), c && c(e), w(!0));
                            },
                            [r, o, c],
                        ),
                        N = (0, s.useCallback)(
                            (e) => {
                                d && d(e);
                            },
                            [d],
                        ),
                        P = (0, s.useCallback)(
                            (e) => {
                                r || (_ && _(e), F(!1));
                            },
                            [r, _],
                        ),
                        T = (0, s.useCallback)(
                            (e) => {
                                r || (null !== l && W(l), m && m(e), a && y(), F(!0));
                            },
                            [r, l, m, y, a],
                        ),
                        L = (0, s.useCallback)(
                            (e) => {
                                r || (E && E(e), F(!1));
                            },
                            [r, E],
                        ),
                        I = C()(
                            it.base,
                            it[`base__${n}`],
                            {
                                [it.base__disabled]: r,
                                [it[`base__${t}`]]: t,
                                [it.base__focus]: b,
                                [it.base__highlightActive]: A,
                                [it.base__firstHover]: B,
                            },
                            i,
                        ),
                        M = C()(it.state, it.state__default);
                    return (
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mousedown', S),
                                () => {
                                    document.removeEventListener('mousedown', S);
                                }
                            ),
                            [S],
                        ),
                        (0, s.useEffect)(() => {
                            f(a);
                        }, [a]),
                        u().createElement(
                            'div',
                            {
                                ref: p,
                                className: I,
                                onMouseEnter: x,
                                onMouseMove: N,
                                onMouseUp: P,
                                onMouseDown: T,
                                onMouseLeave: L,
                                onClick: k,
                            },
                            n !== ot.ghost &&
                                u().createElement(
                                    u().Fragment,
                                    null,
                                    u().createElement('div', { className: it.back }),
                                    u().createElement('span', { className: it.texture }),
                                ),
                            u().createElement(
                                'span',
                                { className: M },
                                u().createElement('span', { className: it.stateDisabled }),
                                u().createElement('span', { className: it.stateHighlightHover }),
                                u().createElement('span', { className: it.stateHighlightActive }),
                            ),
                            u().createElement(
                                'span',
                                { className: it.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                ct.defaultProps = { type: ot.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const dt = (0, s.memo)(ct),
                    mt = (e, t) =>
                        Object.keys(e).length === Object.keys(t).length &&
                        Object.keys(e).every((a) => Object.prototype.hasOwnProperty.call(t, a) && e[a] === t[a]),
                    _t = oe()(
                        ({ observableModel: e, mode: t }) => {
                            const a = { root: e.object() },
                                n = e.array('items'),
                                r = (0, ge.Om)(() => n.get().length),
                                s = (0, ge.Om)(
                                    (e) => {
                                        const t = fe(n.get(), e);
                                        if (!t) throw new Error(`leaderboard item with index ${e} was not found`);
                                        return Object.assign({}, t);
                                    },
                                    { equals: ne },
                                ),
                                u = (0, ge.Om)(() => {
                                    const e = a.root.get(),
                                        t = e.state,
                                        n = e.leaderboardUpdateTimestamp;
                                    return t !== rt.Initial && n > 0;
                                }),
                                i = (0, ge.Om)(() => r() > 0),
                                o = (0, ge.Om)(() => s(0).rank),
                                l = (0, ge.Om)(() => a.root.get().lastBestUserPosition + 1),
                                c = (0, ge.Om)((e) => a.root.get().ownSpaID === s(e).spaID),
                                d = (0, ge.Om)(() => -1 !== a.root.get().lastBestUserPosition),
                                m = (0, ge.Om)(() => ({ first: s(0).position, last: s(0).position + r() }), {
                                    equals: mt,
                                }),
                                _ = (0, ge.Om)(() => d() && l() >= m().first && l() <= m().last),
                                E = (0, ge.Om)(
                                    (e) => {
                                        const t = Math.ceil(a.root.get().recordsCount / e);
                                        return {
                                            amount: t,
                                            hasPagination: t > 1,
                                            active: Math.floor(m().first / e) + 1,
                                        };
                                    },
                                    { equals: mt },
                                ),
                                g = (0, ge.Om)((e) => s(e).position < 3),
                                p = (0, ge.Om)(() => -1 === a.root.get().personalPosition);
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
                    Et = _t[0],
                    gt = _t[1],
                    pt = 'ErrorState_base_eb',
                    ht = 'ErrorState_titleContainer_ca',
                    bt = 'ErrorState_alertIcon_76',
                    ft = 'ErrorState_title_c1',
                    vt = 'ErrorState_description_d9',
                    At = 'ErrorState_buttonWrapper_5e',
                    Ct = 'ErrorState_button_23',
                    Ft = R.strings.comp7.leaderboard.error,
                    Dt = (0, q.Pi)(({ className: e }) => {
                        const t = gt(),
                            a = t.model,
                            n = t.controls,
                            r = a.root.get().isLoading,
                            s = S().mediaSize;
                        return u().createElement(
                            'div',
                            { className: C()(pt, e) },
                            u().createElement(
                                'div',
                                { className: ht },
                                u().createElement('div', { className: bt }),
                                u().createElement('div', { className: ft }, Ft.title()),
                            ),
                            u().createElement('div', { className: vt }, Ft.description()),
                            u().createElement(
                                'div',
                                { className: At },
                                u().createElement(
                                    dt,
                                    {
                                        type: ot.secondary,
                                        disabled: r,
                                        size: ((i = s), i >= B.Medium ? lt.medium : lt.small),
                                        mixClass: Ct,
                                        onClick: n.refresh,
                                    },
                                    Ft.buttonText(),
                                ),
                            ),
                        );
                        var i;
                    });
                let Bt;
                !(function (e) {
                    (e[(e.First = 6)] = 'First'),
                        (e[(e.Second = 5)] = 'Second'),
                        (e[(e.Third = 4)] = 'Third'),
                        (e[(e.Fourth = 3)] = 'Fourth'),
                        (e[(e.Fifth = 2)] = 'Fifth'),
                        (e[(e.Sixth = 1)] = 'Sixth');
                })(Bt || (Bt = {}));
                const wt = (e, t, a) => (a < e ? e : a > t ? t : a);
                function yt(e, t) {
                    var a = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (a) return (a = a.call(e)).next.bind(a);
                    if (
                        Array.isArray(e) ||
                        (a = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return St(e, t);
                            var a = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === a && e.constructor && (a = e.constructor.name);
                            if ('Map' === a || 'Set' === a) return Array.from(e);
                            if ('Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
                                return St(e, t);
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
                function St(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                    return n;
                }
                const kt = [];
                function Rt(e) {
                    const t = (0, s.useRef)(e);
                    return (
                        (0, s.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, s.useCallback)((...e) => (0, t.current)(...e), kt)
                    );
                }
                function xt(e, t, a) {
                    const n = (0, s.useMemo)(
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
                    return (0, s.useEffect)(() => n.cancel, [n]), n;
                }
                let Nt;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(Nt || (Nt = {}));
                const Pt = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    Tt = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: a,
                        getDirection: n,
                        getWrapperSize: r,
                        triggerMouseMoveOnUpdate: u = !1,
                    }) => {
                        const i = (e, a) => {
                            const n = t(e),
                                r = n[0],
                                s = n[1];
                            return wt(r, s, a);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                d = void 0 === c ? Pt : c,
                                m = (0, s.useRef)(null),
                                _ = (0, s.useRef)(null),
                                E = (() => {
                                    const e = (0, s.useMemo)(() => ({}), []),
                                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                                        a = (e, a) => {
                                            t(e).set(a, a);
                                        },
                                        n = (e, a) => {
                                            t(e).delete(a);
                                        },
                                        r = (e, ...a) => {
                                            for (var n, r = yt(t(e).values()); !(n = r()).done; ) (0, n.value)(...a);
                                        };
                                    return (0, s.useMemo)(() => ({ on: a, off: n, trigger: r }), []);
                                })(),
                                g = xt(
                                    () => {
                                        o.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                p = (0, Pe.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = m.current;
                                        t && (a(t, e), E.trigger('change', e), u && g());
                                    },
                                    onRest: (e) => E.trigger('rest', e),
                                    onStart: (e) => E.trigger('start', e),
                                    onPause: (e) => E.trigger('pause', e),
                                })),
                                h = p[0],
                                b = p[1],
                                f = (0, s.useCallback)(
                                    (e, t, a) => {
                                        var n;
                                        const r = h.scrollPosition.get(),
                                            s = (null != (n = h.scrollPosition.goal) ? n : 0) - r;
                                        return i(e, t * a + s + r);
                                    },
                                    [h.scrollPosition],
                                ),
                                v = (0, s.useCallback)(
                                    (e, { immediate: t = !1, reset: a = !0 } = {}) => {
                                        const n = m.current;
                                        n &&
                                            b.start({
                                                scrollPosition: i(n, e),
                                                immediate: t,
                                                reset: a,
                                                config: d.animationConfig,
                                                from: { scrollPosition: i(n, h.scrollPosition.get()) },
                                            });
                                    },
                                    [b, d.animationConfig, h.scrollPosition],
                                ),
                                A = (0, s.useCallback)(
                                    (e) => {
                                        const t = m.current,
                                            a = _.current;
                                        if (!t || !a) return;
                                        const n = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return r(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(a, d.step),
                                            s = f(t, e, n);
                                        v(s);
                                    },
                                    [v, f, d.step],
                                ),
                                C = (0, s.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && A(n(e)),
                                            m.current && E.trigger('mouseWheel', e, h.scrollPosition, t(m.current));
                                    },
                                    [h.scrollPosition, A, E],
                                ),
                                F = ((e, t = []) => {
                                    const a = (0, s.useRef)(),
                                        n = (0, s.useCallback)((...t) => {
                                            a.current && a.current(), (a.current = e(...t));
                                        }, t);
                                    return (
                                        (0, s.useEffect)(
                                            () => () => {
                                                a.current && a.current();
                                            },
                                            [n],
                                        ),
                                        n
                                    );
                                })(
                                    () =>
                                        Ne(() => {
                                            const e = m.current;
                                            e &&
                                                (v(i(e, h.scrollPosition.goal), { immediate: !0 }),
                                                E.trigger('resizeHandled'));
                                        }),
                                    [v, h.scrollPosition.goal],
                                ),
                                D = Rt(() => {
                                    const e = m.current;
                                    if (!e) return;
                                    const t = i(e, h.scrollPosition.goal);
                                    t !== h.scrollPosition.goal && v(t, { immediate: !0 }),
                                        E.trigger('recalculateContent');
                                });
                            (0, s.useEffect)(
                                () => (
                                    window.addEventListener('resize', F),
                                    () => {
                                        window.removeEventListener('resize', F);
                                    }
                                ),
                                [F],
                            );
                            return (0, s.useMemo)(
                                () => ({
                                    getWrapperSize: () => (_.current ? r(_.current) : void 0),
                                    getContainerSize: () => (m.current ? e(m.current) : void 0),
                                    getBounds: () =>
                                        m.current
                                            ? t(m.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: d.step.clampedArrowStepTimeout,
                                    clampPosition: i,
                                    handleMouseWheel: C,
                                    applyScroll: v,
                                    applyStepTo: A,
                                    contentRef: m,
                                    wrapperRef: _,
                                    scrollPosition: b,
                                    animationScroll: h,
                                    recalculateContent: D,
                                    events: { on: E.on, off: E.off },
                                }),
                                [h.scrollPosition, v, A, E.off, E.on, D, C, b, d.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    Lt = Tt({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Nt.Next : Nt.Prev),
                    });
                class It extends u().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = Q.B3.GOLD;
                        else e = Q.B3.INTEGRAL;
                        const t = Q.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== t ? t : null;
                    }
                }
                It.defaultProps = { format: 'integral' };
                const Mt = {
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
                let Ot;
                !(function (e) {
                    (e.None = 'None'), (e.Active = 'Active');
                })(Ot || (Ot = {}));
                const Ht = R.strings.comp7.leaderboard.currentPosition,
                    Wt = { [Ot.None]: 'none', [Ot.Active]: 'active' },
                    $t = (0, q.Pi)(({ state: e, height: t, onClick: a, className: n }) => {
                        const r = gt().model.root.get(),
                            s = r.personalPosition,
                            i = r.personalBattlesCount,
                            o = r.personalScore;
                        return u().createElement(
                            'div',
                            {
                                className: C()(Mt.base, Mt[`base__${Wt[e]}`], n),
                                onClick: a,
                                style: { '--height': t ? `${t}rem` : 'auto' },
                            },
                            u().createElement('div', { className: C()(Mt.screwIcon, Mt.screwIcon__left) }),
                            {
                                [Ot.None]: u().createElement('div', { className: C()(Mt.cell) }, Ht.none()),
                                [Ot.Active]: u().createElement(
                                    u().Fragment,
                                    null,
                                    u().createElement('div', { className: C()(Mt.cell, Mt.cell__order) }, s + 1),
                                    u().createElement(
                                        'div',
                                        { className: C()(Mt.cell, Mt.cell__currentPosition) },
                                        Ht.body(),
                                    ),
                                    u().createElement(
                                        'div',
                                        { className: C()(Mt.cell, Mt.cell__battles) },
                                        u().createElement(It, { value: i }),
                                    ),
                                    u().createElement(
                                        'div',
                                        { className: C()(Mt.cell, Mt.cell__score) },
                                        u().createElement(It, { value: o }),
                                    ),
                                ),
                            }[e],
                            u().createElement('div', { className: C()(Mt.screwIcon, Mt.screwIcon__right) }),
                        );
                    });
                function Ut(e, t, a = []) {
                    const n = (0, s.useRef)(0),
                        r = (0, s.useCallback)(() => window.clearInterval(n.current), a || []);
                    (0, s.useEffect)(() => r, [r]);
                    const u = (null != a ? a : []).concat([t]);
                    return [
                        (0, s.useCallback)((a) => {
                            (n.current = window.setInterval(() => e(a, !0), t)), e(a, !1);
                        }, u),
                        r,
                    ];
                }
                const zt = 'VerticalBar_base_f3',
                    Gt = 'VerticalBar_base__nonActive_42',
                    jt = 'VerticalBar_topButton_d7',
                    qt = 'VerticalBar_bottomButton_06',
                    Vt = 'VerticalBar_track_df',
                    Qt = 'VerticalBar_thumb_32',
                    Xt = 'VerticalBar_rail_43',
                    Yt = 'disable',
                    Kt = () => {},
                    Zt = { pending: !1, offset: 0 },
                    Jt = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    ea = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    ta = (e, t) => Math.max(20, e.offsetHeight * t),
                    aa = (0, s.memo)(({ api: e, classNames: t = {}, getStepByRailClick: a = Jt, onDrag: n = Kt }) => {
                        const r = (0, s.useRef)(null),
                            i = (0, s.useRef)(null),
                            o = (0, s.useRef)(null),
                            l = (0, s.useRef)(null),
                            c = (0, s.useRef)(null),
                            d = e.stepTimeout || 100,
                            m = (0, s.useState)(Zt),
                            _ = m[0],
                            E = m[1],
                            g = (0, s.useCallback)(
                                (e) => {
                                    E(e),
                                        c.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current });
                                },
                                [n],
                            ),
                            p = Rt(() => {
                                const t = c.current,
                                    a = l.current,
                                    n = e.getWrapperSize(),
                                    s = e.getContainerSize();
                                if (!(n && s && t && a)) return;
                                const u = Math.min(1, n / s);
                                return (
                                    (t.style.height = `${ta(a, u)}px`),
                                    t.classList.add(Qt),
                                    r.current &&
                                        (1 === u ? r.current.classList.add(Gt) : r.current.classList.remove(Gt)),
                                    u
                                );
                            }),
                            h = Rt(() => {
                                const t = l.current,
                                    a = c.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && t && a && r)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    u = Math.min(1, n / r),
                                    d = wt(0, 1, s / (r - n)),
                                    m = (t.offsetHeight - ta(t, u)) * d;
                                (a.style.transform = `translateY(${0 | m}px)`),
                                    ((e) => {
                                        if (i.current && o.current && l.current && c.current) {
                                            if (0 === e)
                                                return i.current.classList.add(Yt), void o.current.classList.remove(Yt);
                                            if (
                                                ((t = l.current),
                                                (a = c.current),
                                                e - (t.offsetHeight - a.offsetHeight) >= -0.5)
                                            )
                                                return i.current.classList.remove(Yt), void o.current.classList.add(Yt);
                                            var t, a;
                                            i.current.classList.remove(Yt), o.current.classList.remove(Yt);
                                        }
                                    })(m);
                            }),
                            b = Rt(() => {
                                ea(e, () => {
                                    p(), h();
                                });
                            });
                        (0, s.useEffect)(() => Ne(b)),
                            (0, s.useEffect)(() => {
                                const t = () => {
                                    ea(e, () => {
                                        h();
                                    });
                                };
                                let a = Kt;
                                const n = () => {
                                    a(), (a = Ne(b));
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
                            (0, s.useEffect)(() => {
                                if (!_.pending) return;
                                const t = (t) => {
                                        ea(e, (a) => {
                                            const r = l.current,
                                                s = c.current,
                                                u = e.getContainerSize();
                                            if (!r || !s || !u) return;
                                            const i = t.screenY - _.offset - r.getBoundingClientRect().y,
                                                o = (i / r.offsetHeight) * u;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(a, o),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: a.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: s, thumbOffset: i, contentOffset: o });
                                        });
                                    },
                                    a = () => {
                                        window.removeEventListener('mousemove', t), g(Zt);
                                    };
                                return (
                                    window.addEventListener('mousemove', t),
                                    window.addEventListener('mouseup', a),
                                    () => {
                                        window.removeEventListener('mousemove', t),
                                            window.removeEventListener('mouseup', a);
                                    }
                                );
                            }, [e, _.offset, _.pending, n, g]);
                        const f = Ut((t) => e.applyStepTo(t), d, [e]),
                            v = f[0],
                            A = f[1];
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mouseup', A, !0),
                                () => document.removeEventListener('mouseup', A, !0)
                            ),
                            [A],
                        );
                        const F = (e) => {
                            e.target.classList.contains(Yt) || W('highlight');
                        };
                        return u().createElement(
                            'div',
                            { className: C()(zt, t.base), ref: r, onWheel: e.handleMouseWheel },
                            u().createElement('div', {
                                className: C()(jt, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Yt) || 0 !== e.button || (W('play'), v(Nt.Next));
                                },
                                ref: i,
                                onMouseEnter: F,
                            }),
                            u().createElement(
                                'div',
                                {
                                    className: C()(Vt, t.track),
                                    onMouseDown: (t) => {
                                        const n = c.current;
                                        if (n && 0 === t.button)
                                            if ((W('play'), t.target === n))
                                                g({ pending: !0, offset: t.screenY - n.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    c.current &&
                                                        ea(e, (n) => {
                                                            if (!n) return;
                                                            const r = a(e),
                                                                s = e.clampPosition(n, n.scrollTop + r * t);
                                                            e.applyScroll(s);
                                                        });
                                                })(t.screenY > n.getBoundingClientRect().y ? Nt.Prev : Nt.Next);
                                            }
                                    },
                                    ref: l,
                                    onMouseEnter: F,
                                },
                                u().createElement('div', { ref: c, className: t.thumb }),
                                u().createElement('div', { className: C()(Xt, t.rail) }),
                            ),
                            u().createElement('div', {
                                className: C()(qt, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Yt) || 0 !== e.button || (W('play'), v(Nt.Prev));
                                },
                                onMouseUp: A,
                                ref: o,
                                onMouseEnter: F,
                            }),
                        );
                    }),
                    na = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    ra = ({
                        children: e,
                        api: t,
                        className: a,
                        barClassNames: n,
                        areaClassName: r,
                        scrollClassName: i,
                        scrollClassNames: o,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const d = (0, s.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: C()(na.base, e.base) });
                            }, [n]),
                            m = (0, s.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return u().createElement(
                            'div',
                            { className: C()(na.defaultScroll, a), onWheel: t.handleMouseWheel },
                            u().createElement(
                                'div',
                                { className: C()(na.area, r) },
                                u().createElement(sa, { className: i, classNames: o, api: m }, e),
                            ),
                            u().createElement(aa, { getStepByRailClick: l, api: t, onDrag: c, classNames: d }),
                        );
                    },
                    sa = ({ className: e, classNames: t, children: a, api: n }) => (
                        (0, s.useEffect)(() => Ne(n.recalculateContent)),
                        u().createElement(
                            'div',
                            { className: C()(na.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            u().createElement(
                                'div',
                                { className: C()(na.content, null == t ? void 0 : t.content), ref: n.contentRef },
                                a,
                            ),
                        )
                    );
                sa.Default = ra;
                const ua = (e, t) => {
                    const a = [];
                    for (let n = 0; n < e; n++) a.push(t(n));
                    return a;
                };
                let ia, oa, la;
                function ca(e, t) {
                    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
                }
                function da(e, t) {
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
                })(ia || (ia = {})),
                    (function (e) {
                        (e[(e.Achieved = 0)] = 'Achieved'),
                            (e[(e.Current = 1)] = 'Current'),
                            (e[(e.Inactive = 2)] = 'Inactive');
                    })(oa || (oa = {})),
                    (function (e) {
                        (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                    })(la || (la = {}));
                const ma = (e, t, a) => {
                        if (a % 2) {
                            const a = e.pop();
                            return [...e, a + t];
                        }
                        return [...e, t];
                    },
                    _a = (e, t, a) => {
                        if (0 === a) return [t];
                        if (a % 2) return [...e, ' ' === t ? ' ' : t];
                        {
                            const a = e.pop();
                            return [...e, a + t];
                        }
                    },
                    Ea = (e, t, a = la.left) => e.split(t).reduce(a === la.left ? ma : _a, []),
                    ga = (() => {
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
                    pa = ['zh_cn', 'zh_sg', 'zh_tw'],
                    ha = (e, t = la.left) => {
                        const a = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        return pa.includes(a)
                            ? ga(e)
                            : ((e, t = la.left) => {
                                  let a = [];
                                  const n =
                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                      r = e.replace(/&nbsp;/g, ' ');
                                  return Ea(r, /( )/, t).forEach((e) => (a = a.concat(Ea(e, n, la.left)))), a;
                              })(e, t);
                    },
                    ba = R.strings.comp7.division,
                    fa = { [ia.A]: 'A', [ia.B]: 'B', [ia.C]: 'C', [ia.D]: 'D', [ia.E]: 'E' },
                    va = (e) => ba.$dyn(fa[e]);
                let Aa;
                !(function (e) {
                    (e[(e.First = 6)] = 'First'),
                        (e[(e.Second = 5)] = 'Second'),
                        (e[(e.Third = 4)] = 'Third'),
                        (e[(e.Fourth = 3)] = 'Fourth'),
                        (e[(e.Fifth = 2)] = 'Fifth'),
                        (e[(e.Sixth = 1)] = 'Sixth');
                })(Aa || (Aa = {}));
                const Ca = {
                        [Aa.First]: 'first',
                        [Aa.Second]: 'second',
                        [Aa.Third]: 'third',
                        [Aa.Fourth]: 'fourth',
                        [Aa.Fifth]: 'fifth',
                        [Aa.Sixth]: 'sixth',
                    },
                    Fa = (e) => Ca[e],
                    Da = [Aa.First, Aa.Second, Aa.Third, Aa.Fourth],
                    Ba = (e) => Da.includes(e),
                    wa = 'RankEmblem_base_ec';
                let ya;
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
                })(ya || (ya = {}));
                const Sa = ({ rank: e, size: t, division: a, className: n }) => {
                        const r = (0, s.useMemo)(() => {
                            const n = R.images.comp7.gui.maps.icons.comp7.ranks.$num(t),
                                r = Ba(e) && void 0 !== a ? `_${va(a)}` : '';
                            return { backgroundImage: `url(${n.$dyn(`${Fa(e)}${r}`)})`, '--imageSize': `${t}rem` };
                        }, [e, t, a]);
                        return u().createElement('div', { className: C()(wa, n), style: r });
                    },
                    ka = {
                        [Aa.First]: 'first',
                        [Aa.Second]: 'second',
                        [Aa.Third]: 'third',
                        [Aa.Fourth]: 'fourth',
                        [Aa.Fifth]: 'fifth',
                        [Aa.Sixth]: 'sixth',
                    },
                    Ra = (e, t) => `${e.$dyn(ka[t])}`,
                    xa = (e) => Ra(R.strings.comp7.rank, e),
                    Na = (e) => da(R.strings.comp7.rank.text(), { rank: xa(e) }),
                    Pa = 'RowsDivider_base_0a',
                    Ta = 'RowsDivider_rankText_96',
                    La = (0, q.Pi)(({ index: e, className: t, onClick: a }) => {
                        const n = gt().model.computes.leaderboardItem(e).rank;
                        return u().createElement(
                            'div',
                            { className: C()(Pa, t), onClick: a },
                            u().createElement(Sa, { rank: n, size: ya.x64 }),
                            u().createElement('div', { className: Ta }, Na(n)),
                        );
                    }),
                    Ia = 'Header_base_83',
                    Ma = 'Header_separator_14',
                    Oa = 'Header_cell_0e',
                    Ha = 'Header_cell__order_7d',
                    Wa = 'Header_cell__player_c5',
                    $a = 'Header_cell__score_3e',
                    Ua = R.strings.comp7.leaderboard.table.header,
                    za = R.strings.comp7.leaderboard.table.tooltip,
                    Ga = () =>
                        u().createElement(
                            'div',
                            { className: Ia },
                            u().createElement(
                                Qe,
                                { header: za.order.header(), body: za.order.body() },
                                u().createElement('div', { className: C()(Oa, Ha) }, Ua.order()),
                            ),
                            u().createElement('div', { className: Ma }),
                            u().createElement(
                                Qe,
                                { header: za.player.header(), body: za.player.body() },
                                u().createElement('div', { className: C()(Oa, Wa) }, Ua.player()),
                            ),
                            u().createElement('div', { className: Ma }),
                            u().createElement(
                                Qe,
                                { header: za.battlesCount.header(), body: za.battlesCount.body() },
                                u().createElement('div', { className: C()(Oa, $a) }, Ua.battlesCount()),
                            ),
                            u().createElement('div', { className: Ma }),
                            u().createElement(
                                Qe,
                                { header: za.score.header(), body: za.score.body() },
                                u().createElement('div', { className: C()(Oa, $a) }, Ua.score()),
                            ),
                        );
                let ja;
                !(function (e) {
                    (e.default = 'default'), (e.x48 = 'x48'), (e.x80 = 'x80'), (e.x220 = 'x220');
                })(ja || (ja = {}));
                const qa = 'TextOverflow_base_3b',
                    Va = ({ content: e, classMix: t }) => {
                        const a = (0, s.useRef)(null),
                            n = (0, s.useState)(!0),
                            r = n[0],
                            i = n[1];
                        return (
                            (0, s.useEffect)(() =>
                                Ne(() => {
                                    const e = a.current;
                                    e && e.offsetWidth >= e.scrollWidth && i(!1);
                                }),
                            ),
                            u().createElement(
                                Qe,
                                { isEnabled: r, body: e },
                                u().createElement('div', { ref: a, className: C()(qa, t) }, e),
                            )
                        );
                    },
                    Qa = {
                        base: 'Badge_base_ac',
                        base__default: 'Badge_base__default_c9',
                        base__x48: 'Badge_base__x48_e4',
                    },
                    Xa = { [ja.default]: 'c_24x24', [ja.x48]: 'c_48x48', [ja.x80]: 'c_80x80', [ja.x220]: 'c_220x220' },
                    Ya = ({ badgeID: e, size: t = ja.default, className: a }) => {
                        const n = R.images.gui.maps.icons.library.badges.$dyn(Xa[t]);
                        return u().createElement('div', {
                            className: C()(Qa.base, Qa[`base__${t}`], a),
                            style: { backgroundImage: `url(${n.$dyn(`badge_${e}`)})` },
                        });
                    },
                    Ka = {
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
                    Za = (0, s.memo)(({ tooltipHeaderName: e }) => {
                        const t = (0, s.useMemo)(
                                () => da(R.strings.tooltips.anonymizer.teamStats.header(), { name: e }),
                                [e],
                            ),
                            a = R.strings.tooltips.anonymizer.teamStats.body();
                        return u().createElement(
                            Qe,
                            { header: t, body: a },
                            u().createElement('div', { className: Ka.anonymizedIcon }),
                        );
                    });
                function Ja() {
                    return (
                        (Ja =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Ja.apply(this, arguments)
                    );
                }
                const en = { [ja.default]: 'c_64x24', [ja.x48]: 'c_68x28' },
                    tn = { [ja.default]: 'c_48x48', [ja.x48]: 'c_48x48' },
                    an = ({
                        userName: e,
                        clanAbbrev: t = '',
                        igrType: a = 0,
                        badge: n = { badgeID: '' },
                        suffixBadge: r = { badgeID: '' },
                        isInverted: i = !1,
                        isFakeNameVisible: o = !1,
                        isAnonymizerShown: l = !1,
                        hiddenUserName: c = '',
                        size: d = ja.default,
                        userNameClassName: m = '',
                        clanTagClassName: _ = '',
                    }) => {
                        const E = R.images.gui.maps.icons.library.badges.strips.$dyn(en[d]),
                            g = (0, s.useMemo)(
                                () => ({ backgroundImage: `url(${E.$dyn(`strip_${r.badgeID}`)})` }),
                                [r, E],
                            ),
                            p = R.images.gui.maps.icons.library.badges.$dyn(tn[d]),
                            h = (0, s.useMemo)(
                                () => ({ backgroundImage: `url(${p.$dyn(`badge_${r.badgeID}`)})` }),
                                [r, p],
                            ),
                            b = t ? `[${t}]` : '',
                            f = C()(Ka.base, Ka[`base__${d}`], i && Ka.base__inverted),
                            v = C()(Ka.userName, m),
                            A = C()(Ka.clanTag, _),
                            F = e !== c,
                            D = o ? `${c}${b}` : c,
                            B = Boolean(n.badgeID) && u().createElement(Ya, Ja({ size: d }, n, { key: 'badge' })),
                            w = Date.now(),
                            y = [
                                B,
                                [
                                    u().createElement(
                                        'div',
                                        { className: v, key: 'userName' },
                                        u().createElement(Va, { content: e, key: w }),
                                    ),
                                    !o && Boolean(b) && u().createElement('div', { className: A, key: 'clanTag' }, b),
                                ],
                                0 !== a && u().createElement('div', { className: Ka.igrIcon, key: 'igrType' }),
                                Boolean(r.badgeID) &&
                                    u().createElement(
                                        'div',
                                        { className: Ka.suffixBadgeWrapper, key: 'suffixBadge' },
                                        u().createElement('div', { className: Ka.suffixBadgeStripe, style: g }),
                                        u().createElement('div', { className: Ka.suffixBadge, style: h }),
                                    ),
                                l && F && u().createElement(Za, { tooltipHeaderName: D, key: 'anonymizer' }),
                            ];
                        return u().createElement('div', { className: f }, i ? y.reverse() : y);
                    };
                let nn;
                !(function (e) {
                    (e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH');
                })(nn || (nn = {}));
                const rn = ({
                        children: e,
                        contentID: t,
                        decoratorID: a = 0,
                        targetId: n = 0,
                        args: r,
                        isEnabled: u = !0,
                        onMouseDown: i,
                    }) => {
                        const o = (0, s.useCallback)(() => {
                                (0, Q.c9)(Q.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: a,
                                    targetID: n,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: r,
                                }),
                                    $.playYes();
                            }, [r, t, a, n]),
                            l = (0, s.useCallback)(() => {
                                (0, Q.c9)(Q.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: a,
                                    targetID: n,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [t, a, n]),
                            c = (0, s.useCallback)(
                                (e) => {
                                    i && i(e), ((e) => e.button === nn.RIGHT)(e) && o();
                                },
                                [i, o],
                            );
                        return (
                            (0, s.useEffect)(() => {
                                !1 === u && l();
                            }, [u, l]),
                            u ? (0, s.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    sn = ['children'];
                function un() {
                    return (
                        (un =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        un.apply(this, arguments)
                    );
                }
                const on = (e) => {
                        let t = e.children,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, sn);
                        return u().createElement(
                            rn,
                            un({}, a, { contentID: R.views.common.BackportContextMenu('resId') }),
                            t,
                        );
                    },
                    ln = ({ children: e, isEnabled: t, contextMenuArgs: a }) =>
                        t ? u().createElement(on, { args: a }, e) : e,
                    cn = {
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
                    dn = R.strings.comp7.leaderboard.table.tooltip,
                    mn = { 0: 'first', 1: 'second', 2: 'third' },
                    _n = (0, q.Pi)(({ index: e, className: t }) => {
                        const a = gt().model,
                            n = a.computes.leaderboardItem(e),
                            r = n.position,
                            s = n.battlesCount,
                            i = n.userName,
                            o = n.clanTag,
                            l = n.clanTagColor,
                            c = n.score,
                            d = n.spaID,
                            m = a.computes.isPersonalRow(e),
                            _ = a.computes.hasPositionIcon(e);
                        return u().createElement(
                            'div',
                            { className: C()(cn.base, m && cn.base__personal, t), style: { '--clanTagColor': l } },
                            u().createElement(
                                Qe,
                                { header: dn.order.header(), body: dn.order.body() },
                                u().createElement(
                                    'div',
                                    { className: C()(cn.order, _ && cn[`order__${mn[r]}`]) },
                                    !_ && r + 1,
                                ),
                            ),
                            u().createElement(
                                ln,
                                { contextMenuArgs: { spaID: d, userName: i }, isEnabled: !m },
                                u().createElement(
                                    'div',
                                    { className: cn.playerContainer },
                                    u().createElement(
                                        Qe,
                                        { header: dn.player.header(), body: dn.player.body() },
                                        u().createElement(
                                            'div',
                                            { className: cn.player },
                                            u().createElement(an, {
                                                userName: i,
                                                clanAbbrev: o,
                                                clanTagClassName: l && cn.clanTag,
                                            }),
                                        ),
                                    ),
                                ),
                            ),
                            u().createElement(
                                Qe,
                                { header: dn.battlesCount.header(), body: dn.battlesCount.body() },
                                u().createElement(
                                    'div',
                                    { className: cn.battles },
                                    u().createElement(It, { value: s }),
                                ),
                            ),
                            u().createElement(
                                Qe,
                                { header: dn.score.header(), body: dn.score.body() },
                                u().createElement('div', { className: cn.score }, u().createElement(It, { value: c })),
                            ),
                        );
                    }),
                    En = 'Leaderboard_base_ec',
                    gn = 'Leaderboard_content_a5',
                    pn = 'Leaderboard_shadowsContainer_bc',
                    hn = 'Leaderboard_shadowsContainer__bottom_b4',
                    bn = 'Leaderboard_shadow_3f',
                    fn = 'Leaderboard_shadow__left_ee',
                    vn = 'Leaderboard_shadow__center_37',
                    An = 'Leaderboard_shadow__right_ee',
                    Cn = 'Leaderboard_area_c7',
                    Fn = 'Leaderboard_row_06',
                    Dn = 'Leaderboard_rowsDivider_2c',
                    Bn = { base: 'Leaderboard_bar_69' },
                    wn = (0, q.Pi)(({ limit: e, api: t, rowHeight: a = 0, rowsDividerHeight: n = 0 }) => {
                        const r = gt().model,
                            s = r.computes.hasRowsDivider(),
                            i = r.computes.rowsDividerPosition() % e;
                        return u().createElement(
                            'div',
                            {
                                className: En,
                                style: { '--rowHeight': a ? `${a}rem` : 'auto', '--rowsDividerHeight': `${n}rem` },
                            },
                            u().createElement(Ga, null),
                            u().createElement(
                                'div',
                                { className: gn },
                                u().createElement(
                                    'div',
                                    { className: pn },
                                    u().createElement('div', { className: C()(bn, fn) }),
                                    u().createElement('div', { className: C()(bn, vn) }),
                                    u().createElement('div', { className: C()(bn, An) }),
                                ),
                                u().createElement(
                                    sa,
                                    { api: t, className: Cn },
                                    ua(r.computes.leaderboardItemsLength(), (e) =>
                                        u().createElement(
                                            u().Fragment,
                                            { key: e },
                                            s && e === i && u().createElement(La, { index: e, className: Dn }),
                                            u().createElement(_n, { className: Fn, index: e }),
                                        ),
                                    ),
                                ),
                                u().createElement(
                                    'div',
                                    { className: C()(pn, hn) },
                                    u().createElement('div', { className: C()(bn, fn) }),
                                    u().createElement('div', { className: C()(bn, vn) }),
                                    u().createElement('div', { className: C()(bn, An) }),
                                ),
                                u().createElement(aa, { api: t, classNames: Bn }),
                            ),
                        );
                    }),
                    yn = {
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
                let Sn;
                !(function (e) {
                    (e.Active = 'active'), (e.Inactive = 'inactive'), (e.Disabled = 'disabled');
                })(Sn || (Sn = {}));
                const kn = R.strings.comp7.pagination,
                    Rn = Math.trunc(4),
                    xn = ({ pagesAmount: e, activePage: t, className: a, onPageClick: n, onControlEvent: r }) => {
                        const s = t > 1,
                            i = t < e,
                            o = e < 9 ? e : 9,
                            l = (e) => () => {
                                null == n || n(e);
                            },
                            c = (e) => () => {
                                null == r || r(e);
                            };
                        return u().createElement(
                            'div',
                            { className: C()(yn.base, a) },
                            u().createElement(
                                'div',
                                {
                                    className: C()(yn.control, yn.control__prev, s && yn.control__active),
                                    onClick: s ? c('prevClick') : void 0,
                                },
                                kn.prev(),
                            ),
                            ua(o, (a) => {
                                const n = ((e, t, a) => {
                                        const n = t > Rn + 1,
                                            r = a > 9 && t + Rn < a;
                                        return a <= 9
                                            ? e + 1
                                            : 0 === e
                                              ? 1
                                              : (1 === e && n) || (7 === e && r)
                                                ? kn.dots()
                                                : 8 === e
                                                  ? a
                                                  : n && !r
                                                    ? a - 8 + e
                                                    : !n && r
                                                      ? e + 1
                                                      : e - Rn + t;
                                    })(a, t, e),
                                    r = ((e, t) =>
                                        Number.isInteger(e) ? (t === e ? Sn.Active : Sn.Inactive) : Sn.Disabled)(n, t);
                                return u().createElement(
                                    'div',
                                    {
                                        key: a,
                                        className: C()(yn.pageButton, yn[`pageButton__${r}`]),
                                        onClick: r !== Sn.Disabled && 'number' == typeof n ? l(n) : void 0,
                                    },
                                    u().createElement('div', { className: yn.pageValue }, n),
                                );
                            }),
                            u().createElement(
                                'div',
                                {
                                    className: C()(yn.control, yn.control__next, i && yn.control__active),
                                    onClick: i ? c('nextClick') : void 0,
                                },
                                kn.next(),
                            ),
                        );
                    },
                    Nn = 'HasRecordsState_base_bb',
                    Pn = 'HasRecordsState_base__withoutPagination_ad',
                    Tn = 'HasRecordsState_tableContainer_02',
                    Ln = 'HasRecordsState_pagination_cb',
                    In = {
                        settings: Object.assign({}, Pt, {
                            animationConfig: Object.assign({}, Pt.animationConfig, { round: 1 }),
                        }),
                    },
                    Mn = (0, q.Pi)(
                        ({
                            limit: e,
                            onCurrentRankTabChange: t,
                            positionToScroll: a,
                            onPositionToScrollChange: n,
                            className: r,
                        }) => {
                            const i = gt(),
                                o = i.model,
                                l = i.controls,
                                c = o.root.get(),
                                d = c.personalPosition,
                                m = c.lastBestUserPosition,
                                _ = Lt(In),
                                E = _.animationScroll.scrollPosition,
                                g = _.applyScroll,
                                p = _.events,
                                h = _.getBounds,
                                b = o.computes.isDefaultPersonalPosition() ? Ot.None : Ot.Active,
                                f = o.computes.pages(e),
                                v = o.computes.pagePositions(),
                                A = o.computes.rowsDividerPosition(),
                                F = o.computes.hasRowsDivider(),
                                D = ((e, t) => viewEnv.remToPx(44) * ((e + 1) % t))(m, e);
                            (0, s.useEffect)(
                                () =>
                                    Ne(() => {
                                        if (void 0 !== a) {
                                            switch (a.type) {
                                                case 'rank': {
                                                    const e = a.rank === Bt.Fifth ? D : 0;
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
                                            n(void 0);
                                        }
                                    }),
                                [g, F, m, e, d, a, D, n],
                            );
                            const B = (0, s.useCallback)(() => {
                                const e = v.first > m ? Bt.Fifth : Bt.Sixth;
                                t(e);
                            }, [v.first, m, t]);
                            (0, s.useEffect)(() => {
                                B();
                            }, [B]),
                                (0, s.useEffect)(() => {
                                    const e = () => {
                                        if (F && A > v.first) {
                                            const e = h()[1],
                                                a = 0 !== e && E.goal === e && D >= e;
                                            t(E.goal >= D || a ? Bt.Fifth : Bt.Sixth);
                                        } else d >= v.first && d <= v.last ? t(d > m ? Bt.Fifth : Bt.Sixth) : B();
                                    };
                                    return p.on('change', e), () => p.off('change', e);
                                }, [p, v.first, F, m, v.last, e, d, D, A, E.goal, t, B, h]);
                            const w = (0, s.useCallback)(() => {
                                    b !== Ot.None &&
                                        ($.playYes(),
                                        l.getTableRecords(e, d - (d % e)),
                                        n({ type: 'personalPosition' }));
                                }, [l, e, b, d, n]),
                                y = (0, s.useCallback)(
                                    (t) => {
                                        $.playYes(), l.getTableRecords(e, (t - 1) * e), n({ type: 'page' });
                                    },
                                    [l, e, n],
                                ),
                                S = (0, s.useCallback)(
                                    (t) => {
                                        $.playYes();
                                        const a = (() => {
                                            switch (t) {
                                                case 'prevClick':
                                                    return f.active - 1;
                                                case 'nextClick':
                                                    return f.active + 1;
                                                default:
                                                    return 1;
                                            }
                                        })();
                                        l.getTableRecords(e, (a - 1) * e), n({ type: 'page' });
                                    },
                                    [f.active, l, e, n],
                                );
                            return u().createElement(
                                'div',
                                { className: C()(Nn, !f.hasPagination && Pn, r) },
                                u().createElement(
                                    'div',
                                    { className: Tn },
                                    u().createElement(wn, { limit: e, api: _, rowHeight: 44, rowsDividerHeight: 70 }),
                                ),
                                u().createElement($t, { state: b, onClick: w, height: 44 }),
                                f.hasPagination &&
                                    u().createElement(xn, {
                                        pagesAmount: f.amount,
                                        activePage: f.active,
                                        className: Ln,
                                        onPageClick: y,
                                        onControlEvent: S,
                                    }),
                            );
                        },
                    ),
                    On = R.views.lobby.comp7.tooltips,
                    Hn = ['rank', 'divisions', 'from', 'to', 'topPercentage', 'children', 'className'];
                function Wn() {
                    return (
                        (Wn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Wn.apply(this, arguments)
                    );
                }
                const $n = (e) => {
                        let t = e.rank,
                            a = e.divisions,
                            n = e.from,
                            r = e.to,
                            s = e.topPercentage,
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
                            })(e, Hn);
                        const c = (({ rank: e, topPercentage: t, from: a, to: n, divisions: r = '' }) => {
                            switch (e) {
                                case Aa.Sixth:
                                    return { contentId: On.SixthRankTooltip('resId'), args: { topPercentage: t } };
                                case Aa.Fifth:
                                    return { contentId: On.FifthRankTooltip('resId'), args: { from: a } };
                                default:
                                    return {
                                        contentId: On.GeneralRankTooltip('resId'),
                                        args: { rank: e, divisions: r, from: a, to: n },
                                    };
                            }
                        })({ rank: t, divisions: a, from: n, to: r, topPercentage: s });
                        return u().createElement(Ge, Wn({}, c, l), u().createElement('div', { className: o }, i));
                    },
                    Un = {
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
                let zn;
                !(function (e) {
                    (e.Active = 'active'), (e.Inactive = 'inactive'), (e.Disabled = 'disabled');
                })(zn || (zn = {}));
                const Gn = ({ tabs: e, className: t, onTabClick: a }) => {
                        const n = (e) => () => {
                            null == a || a(e);
                        };
                        return u().createElement(
                            'div',
                            { className: C()(Un.base, t) },
                            u().createElement('div', { className: Un.dividersDot }),
                            u().createElement('div', { className: C()(Un.line, Un.line__toRight) }),
                            u().createElement(
                                'div',
                                { className: Un.ranksContainer },
                                e.map(({ rank: e, state: t, args: a = {} }) => {
                                    const r = t !== zn.Disabled;
                                    return u().createElement(
                                        'div',
                                        { className: C()(Un.rank, Un[`rank__${t}`]), key: e },
                                        u().createElement(
                                            $n,
                                            {
                                                rank: e,
                                                from: null == a ? void 0 : a.from,
                                                topPercentage: null == a ? void 0 : a.topPercentage,
                                                onClick: r ? n(e) : void 0,
                                                onMouseEnter: r ? $.playHighlight : void 0,
                                            },
                                            u().createElement('div', { className: Un.rankTabHighlight }),
                                            u().createElement(Sa, { rank: e, size: ya.x64, className: Un.rankEmblem }),
                                        ),
                                        t !== zn.Disabled && u().createElement('div', { className: Un.label }, Na(e)),
                                    );
                                }),
                            ),
                            u().createElement('div', { className: C()(Un.line, Un.line__toLeft) }),
                        );
                    },
                    jn = 'HasRecordsStateContainer_base_ee',
                    qn = 'HasRecordsStateContainer_content_b4',
                    Vn = ({ rank: e, lastBestUserPosition: t, currentRankTab: a, recordsCount: n }) =>
                        (e === Bt.Sixth && -1 === t) || 0 === n ? zn.Disabled : e === a ? zn.Active : zn.Inactive,
                    Qn = [Bt.Fifth, Bt.Sixth],
                    Xn = (0, q.Pi)(({ className: e }) => {
                        const t = gt(),
                            a = t.model,
                            n = t.controls,
                            r = a.root.get(),
                            i = r.lastBestUserPosition,
                            o = r.recordsCount,
                            l = r.from,
                            c = r.topPercentage,
                            d = a.computes.hasLastBestUserPosition(),
                            m = a.computes.rowsDividerPosition(),
                            _ = (0, s.useState)(a.computes.firstItemRank()),
                            E = _[0],
                            g = _[1],
                            p = (0, s.useState)(),
                            h = p[0],
                            b = p[1],
                            f = Qn.map((e) => ({
                                rank: e,
                                state: Vn({ rank: e, lastBestUserPosition: i, currentRankTab: E, recordsCount: o }),
                                args: { from: l, topPercentage: c },
                            })),
                            v = (0, s.useCallback)(
                                (e) => {
                                    const t = e === Bt.Fifth && d ? m - (m % 50) : 0;
                                    $.playClick(), n.getTableRecords(50, t), b({ type: 'rank', rank: e });
                                },
                                [n, m, d, 50],
                            );
                        return u().createElement(
                            'div',
                            { className: C()(jn, e) },
                            u().createElement(Gn, { tabs: f, onTabClick: v }),
                            u().createElement(Mn, {
                                limit: 50,
                                positionToScroll: h,
                                onCurrentRankTabChange: g,
                                onPositionToScrollChange: b,
                                className: qn,
                            }),
                        );
                    }),
                    Yn = 'FormatText_base_d0',
                    Kn = ({ binding: e, text: t = '', classMix: a, alignment: n = la.left }) =>
                        null === t
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : u().createElement(
                                  s.Fragment,
                                  null,
                                  t.split('\n').map((t, r) =>
                                      u().createElement(
                                          'div',
                                          { className: C()(Yn, a), key: `${t}-${r}` },
                                          ((e, t, a) =>
                                              e
                                                  .split(/%\((.*?)\)(?:[sd])?/g)
                                                  .map((e) => (a && e in a ? a[e] : ha(e, t))))(t, n, e).map((e, t) =>
                                              u().createElement(s.Fragment, { key: `${t}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              ),
                    Zn = {
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
                    Jn = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    er = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    tr = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    ar = (0, s.memo)(({ text: e, binding: t, classMix: a }) => {
                        const n = (0, s.useCallback)((e) => ({ color: `#${e}` }), []),
                            r = (0, s.useMemo)(() => t || {}, [t]);
                        let i = Jn.exec(e),
                            o = e,
                            l = 0;
                        for (; i; ) {
                            const a = i[0],
                                s = er.exec(a),
                                c = tr.exec(a),
                                d = i[1];
                            if (s && c) {
                                const e = s[0],
                                    i = e + l++ + e;
                                (o = o.replace(a, `%(${i})`)),
                                    (r[i] = Zn[e]
                                        ? u().createElement(
                                              'span',
                                              { className: Zn[e] },
                                              u().createElement(Kn, { text: d, binding: t }),
                                          )
                                        : u().createElement(
                                              'span',
                                              { style: n(e) },
                                              u().createElement(Kn, { text: d, binding: t }),
                                          ));
                            }
                            i = Jn.exec(e);
                        }
                        return u().createElement(Kn, { text: o, classMix: a, binding: r });
                    }),
                    nr = 'NoRecordsState_base_9b',
                    rr = 'NoRecordsState_imageContainer_13',
                    sr = 'NoRecordsState_image_fe',
                    ur = 'NoRecordsState_title_f4',
                    ir = 'NoRecordsState_subtitle_5b',
                    or = R.strings.comp7.leaderboard.noRecords,
                    lr = (0, q.Pi)(({ className: e }) => {
                        const t = gt().model.root.get().from;
                        return u().createElement(
                            'div',
                            { className: C()(nr, e) },
                            u().createElement('div', { className: rr }, u().createElement('div', { className: sr })),
                            u().createElement('div', { className: ur }, or.title()),
                            u().createElement(ar, {
                                text: or.subtitle(),
                                binding: { pointsCount: u().createElement(It, { value: t }) },
                                classMix: ir,
                            }),
                        );
                    });
                let cr;
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
                })(cr || (cr = {}));
                const dr = 60,
                    mr = 3600,
                    _r = 86400;
                Date.now();
                const Er = (0, s.memo)(({ datetime: e, format: t = cr.SHORT_DATE, localize: a = !0 }) =>
                        ((e, t, a) => {
                            switch (t) {
                                case cr.SHORT_DATE:
                                    return a
                                        ? Q.Z5.getDateFormat(e, Q.kH.SHORT_FORMAT)
                                        : Q.cy.getTimeFormat('%d.%m.%y', e, !0);
                                case cr.SHORT_TIME:
                                    return a
                                        ? Q.Z5.getTimeFormat(e, Q.lf.SHORT_FORMAT)
                                        : Q.cy.getTimeFormat('%I:%M %p', e, !0);
                                case cr.SHORT_DATE_TIME:
                                    return a
                                        ? `${Q.Z5.getDateFormat(e, Q.kH.SHORT_FORMAT)}, ${Q.Z5.getTimeFormat(e, Q.lf.SHORT_FORMAT)}`
                                        : Q.cy.getTimeFormat('%d.%m.%y, %I:%M %p', e, !0);
                                case cr.FULL_DATE:
                                    return a
                                        ? Q.Z5.getDateFormat(e, Q.kH.LONG_FORMAT)
                                        : Q.cy.getTimeFormat('%B %d, %Y', e, !0);
                                case cr.FULL_DATE_TIME:
                                    return a
                                        ? `${Q.Z5.getDateFormat(e, Q.kH.LONG_FORMAT)}, ${Q.Z5.getTimeFormat(e, Q.lf.SHORT_FORMAT)}`
                                        : Q.cy.getTimeFormat('%B %d, %Y, %I:%M %p', e, !0);
                                case cr.MONTH:
                                    return Q.cy.getTimeFormat('%B', e, !0);
                                case cr.MONTH_DATE:
                                    return Q.cy.getTimeFormat('%B %e', e, !0);
                                case cr.DATE_MONTH:
                                    return Q.cy.getTimeFormat('%e %B', e, !0);
                                case cr.MONTH_YEAR:
                                    return Q.cy.getTimeFormat('%B %Y', e, !0);
                                case cr.WEEK_DAY:
                                    return Q.cy.getTimeFormat('%A', e, !0);
                                case cr.WEEK_DAY_TIME:
                                    return a
                                        ? `${Q.cy.getTimeFormat('%A', e, !0)} ${Q.Z5.getTimeFormat(e, Q.lf.SHORT_FORMAT)}`
                                        : Q.cy.getTimeFormat('%A, %I:%M %p', e, !0);
                                case cr.YEAR:
                                    return Q.cy.getTimeFormat('%Y', e, !0);
                                case cr.DATE_YEAR:
                                    return Q.cy.getTimeFormat('%d, %Y', e, !0);
                            }
                        })(e, t, a),
                    ),
                    gr = da(R.strings.comp7.lastUpdateNote.lastBestUserPoints.description(), { count: 15 }),
                    pr = 'LastUpdateNote_base_7f',
                    hr = 'LastUpdateNote_infoIcon_5c',
                    br = ['timestamp', 'className', 'classNames', 'dateTimeFormat', 'contentId', 'tooltipDescription'];
                function fr() {
                    return (
                        (fr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        fr.apply(this, arguments)
                    );
                }
                const vr = R.strings.comp7.lastUpdateNote,
                    Ar = (e) => {
                        let t = e.timestamp,
                            a = e.className,
                            n = e.classNames,
                            r = e.dateTimeFormat,
                            s = void 0 === r ? cr.SHORT_TIME : r,
                            i = e.contentId,
                            o = void 0 === i ? R.views.lobby.comp7.tooltips.LastUpdateTooltip('resId') : i,
                            l = e.tooltipDescription,
                            c = void 0 === l ? gr : l,
                            d = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, br);
                        return u().createElement(
                            'div',
                            { className: C()(pr, a) },
                            u().createElement(Kn, {
                                text: vr.info(),
                                binding: { date: u().createElement(Er, { datetime: t, format: s }) },
                            }),
                            u().createElement(
                                Ge,
                                fr({ ignoreShowDelay: !0, contentId: o, args: { description: c } }, d),
                                u().createElement('div', { className: C()(hr, null == n ? void 0 : n.icon) }),
                            ),
                        );
                    },
                    Cr = (e, t) => {
                        let a;
                        const n = setTimeout(() => {
                            a = e();
                        }, t);
                        return () => {
                            'function' == typeof a && a(), clearTimeout(n);
                        };
                    };
                const Fr = ['children'];
                function Dr() {
                    return (
                        (Dr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Dr.apply(this, arguments)
                    );
                }
                const Br = (e) => {
                        let t = e.children,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, Fr);
                        return u().createElement(
                            Ge,
                            Dr(
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
                    wr = (e) => {
                        const t = Math.floor(e);
                        return {
                            totalSecondsLeft: t,
                            seconds: Math.floor(t % 60),
                            minutes: Math.floor(t / 60) % 60,
                            hours: Math.floor((t / 3600) % 24),
                            totalDays: Math.floor(t / 86400),
                        };
                    },
                    yr = 'ActiveSeasonState_base_55',
                    Sr = 'ActiveSeasonState_calendarIcon_df',
                    kr = 'ActiveSeasonState_divider_5b',
                    Rr = R.strings.comp7.season,
                    xr = (e, t) => ({
                        startDate: u().createElement(Er, { datetime: e, format: cr.SHORT_DATE }),
                        endDate: u().createElement(Er, { datetime: t, format: cr.SHORT_DATE }),
                    }),
                    Nr = (e, t, a) => {
                        const n = t - a,
                            r = ((e, t) => wr(e - t))(t, a);
                        return n >= 604800
                            ? u().createElement(Kn, { text: Rr.range(), binding: xr(e, t) })
                            : n >= _r
                              ? u().createElement(Kn, { text: Rr.daysLeft(), binding: r })
                              : n >= mr
                                ? u().createElement(Kn, { text: Rr.hoursLeft(), binding: r })
                                : n >= dr
                                  ? u().createElement(Kn, { text: Rr.minutesLeft(), binding: r })
                                  : n >= 1
                                    ? u().createElement(Kn, { text: Rr.secondsLeft(), binding: r })
                                    : void 0;
                    },
                    Pr = ({
                        startTimestamp: e,
                        endTimestamp: t,
                        currentTimestamp: a,
                        tooltipId: n = '',
                        hasSeasonName: r = !0,
                    }) =>
                        u().createElement(
                            Br,
                            { args: { tooltipId: n }, isEnabled: Boolean(n) },
                            u().createElement(
                                'div',
                                { className: yr },
                                u().createElement('div', { className: Sr }),
                                r &&
                                    u().createElement(
                                        u().Fragment,
                                        null,
                                        Rr.name(),
                                        u().createElement('div', { className: kr }),
                                    ),
                                Nr(e, t, a),
                            ),
                        ),
                    Tr = 'ScheduleSubheading_base_f7',
                    Lr = (0, q.Pi)(({ className: e, hasSeasonName: t = !0 }) => {
                        const a = de(),
                            n = a.model,
                            r = a.controls,
                            i = n.season.startTimestamp.get(),
                            o = n.season.endTimestamp.get(),
                            l = n.season.serverTimestamp.get();
                        return (
                            (function (e, t, a) {
                                (0, s.useEffect)(() => {
                                    if (!(e >= t))
                                        return Cr(() => {
                                            a();
                                        }, 950);
                                }, [t, a, e]);
                            })(l, o, r.pollServerTime),
                            u().createElement(
                                'div',
                                { className: C()(Tr, e) },
                                l < o
                                    ? u().createElement(Pr, {
                                          startTimestamp: i,
                                          endTimestamp: o,
                                          currentTimestamp: l,
                                          tooltipId: n.root.get().tooltipId,
                                          hasSeasonName: t,
                                      })
                                    : R.strings.comp7.season.over(),
                            )
                        );
                    }),
                    Ir = 'SubheadingContainer_base_a6',
                    Mr = 'SubheadingContainer_updateInfo_9a',
                    Or = 'SubheadingContainer_updateInfoText_40',
                    Hr = (0, q.Pi)(({ className: e }) => {
                        const t = gt().model,
                            a = t.root.get().leaderboardUpdateTimestamp,
                            n = t.computes.hasUpdateInfo(),
                            r = da(R.strings.comp7.lastUpdateNote.ratingPositions.description(), { count: 15 });
                        return u().createElement(
                            'div',
                            { className: C()(Ir, e) },
                            u().createElement(Lr, null),
                            n &&
                                u().createElement(
                                    'div',
                                    { className: Mr },
                                    u().createElement(Ar, { timestamp: a, className: Or, tooltipDescription: r }),
                                ),
                        );
                    }),
                    Wr = {
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
                    $r = { [rt.Initial]: 'initial', [rt.Success]: 'success', [rt.Error]: 'error' },
                    Ur = (0, q.Pi)(() => {
                        const e = gt().model,
                            t = e.root.get(),
                            a = t.state,
                            n = t.isLoading,
                            r = e.computes.hasRecords(),
                            s = (0, Pe.useSpring)(Ee);
                        return u().createElement(
                            'div',
                            { className: C()(Wr.base, Wr[`base__${$r[a]}`], n && Wr.base__loading) },
                            u().createElement(ut, { className: K }, R.strings.comp7.page.heading.leaderboard()),
                            u().createElement(Hr, { className: Wr.subHeading }),
                            u().createElement(
                                Pe.animated.div,
                                { className: Wr.animationContainer, style: s },
                                u().createElement(
                                    'div',
                                    { className: Wr.content },
                                    (() => {
                                        switch (a) {
                                            case rt.Initial:
                                                return null;
                                            case rt.Success:
                                                return r
                                                    ? u().createElement(Xn, { className: Wr.hasRecords })
                                                    : u().createElement(lr, { className: Wr.noRecords });
                                            case rt.Error:
                                                return u().createElement(Dt, { className: Wr.error });
                                            default:
                                                console.error(
                                                    'Unreachable branch: add component for proper leaderboard state',
                                                );
                                        }
                                    })(),
                                ),
                                n &&
                                    u().createElement(nt, {
                                        message: R.strings.comp7.waitingSpinner.message(),
                                        className: Wr.spinner,
                                    }),
                            ),
                        );
                    }),
                    zr = { context: 'model.leaderboardModel' },
                    Gr = (e) => Ce(e, (e) => va(e.name)).join(R.strings.comp7.listSeparator());
                let jr, qr;
                !(function (e) {
                    (e.Previous = 'previous'), (e.Current = 'current'), (e.Future = 'future');
                })(jr || (jr = {})),
                    (function (e) {
                        (e[(e.Page = 0)] = 'Page'),
                            (e[(e.Maps = 1)] = 'Maps'),
                            (e[(e.SeasonVehicles = 2)] = 'SeasonVehicles');
                    })(qr || (qr = {}));
                const Vr = (e, t, a) => (e > t || a ? jr.Future : e < t ? jr.Previous : jr.Current),
                    Qr = [Aa.Fifth, Aa.Sixth],
                    Xr = oe()(
                        ({ observableModel: e }) => {
                            const t = {
                                    root: e.object(),
                                    qualificationModel: e.primitives(
                                        ['isActive', 'battlesCount', 'maxBattlesCount', 'isRatingCalculation'],
                                        'qualificationModel',
                                    ),
                                    isRewardLayerVisible: re.LO.box(!1),
                                    isParallaxPreloaded: re.LO.box(!1),
                                },
                                a = e.array('items'),
                                n = e.array('qualificationModel.battles'),
                                r = (0, ge.Om)(
                                    (e) => {
                                        const t = fe(a.get(), e);
                                        if (!t) throw new Error(`item with index ${e} was not found`);
                                        return {
                                            hasRankInactivity: t.hasRankInactivity,
                                            rank: t.rank,
                                            from: t.from,
                                            to: t.to,
                                        };
                                    },
                                    { equals: mt },
                                ),
                                s = (0, ge.Om)(
                                    (e) => {
                                        const t = fe(a.get(), e);
                                        if (!t) throw new Error(`item with index ${e} was not found`);
                                        return Ce(t.divisions, (e) => Object.assign({}, e));
                                    },
                                    { equals: ne },
                                ),
                                u = (0, ge.Om)(
                                    (e) => {
                                        const t = s(e);
                                        return {
                                            list: Gr(t),
                                            count: t.length,
                                            currentDivisionIndex: Be(t, (e) => e.state === oa.Current),
                                        };
                                    },
                                    { equals: mt },
                                ),
                                i = (0, ge.Om)(() => {
                                    const e = t.root.get().currentItemIndex,
                                        n = fe(a.get(), e);
                                    if (!n) throw new Error(`current item with currentItemIndex ${e} was not found`);
                                    return n.hasRankInactivity;
                                }),
                                o = (0, ge.Om)(
                                    (e, a) => {
                                        var n;
                                        const u = Vr(e, t.root.get().currentItemIndex, a);
                                        return {
                                            state: u,
                                            division:
                                                null == (n = De(s(e), (e) => e.state === oa.Current)) ? void 0 : n.name,
                                            hasInfo: u === jr.Current && Qr.includes(r(e).rank),
                                        };
                                    },
                                    { equals: mt },
                                ),
                                l = (0, ge.Om)(
                                    (e) => {
                                        const t = fe(n.get(), e);
                                        if (!t) throw new Error(`qualification battle with index ${e} was not found`);
                                        return t;
                                    },
                                    { equals: ne },
                                );
                            return Object.assign({}, t, {
                                computes: {
                                    item: r,
                                    qualificationBattle: l,
                                    itemsLength: (0, ge.Om)(() => a.get().length),
                                    qualificationBattlesLength: (0, ge.Om)(() => n.get().length),
                                    rankSettings: o,
                                    hasCurrentItemRankInactivity: i,
                                    divisions: s,
                                    divisionsConfig: u,
                                },
                            });
                        },
                        ({ externalModel: e, model: t }) => {
                            const a = (0, re.aD)((e) => t.isRewardLayerVisible.set(e));
                            return {
                                setIsParallaxPreloaded: (0, re.aD)((e) => t.isParallaxPreloaded.set(e)),
                                setRewardLayerVisible: a,
                                goToRankRewardsPage: e.createCallbackNoArgs('qualificationModel.onRankRewardsPageOpen'),
                            };
                        },
                    ),
                    Yr = Xr[0],
                    Kr = Xr[1],
                    Zr = 'RatingScore_base_bd',
                    Jr = 'RatingScore_rating_c9',
                    es = 'RatingScore_score_33',
                    ts = 'RatingScore_rankInactivity_17',
                    as = 'RatingScore_rankInactivityCount_31',
                    ns = 'RatingScore_rankInactivityIconContainer_32',
                    rs = 'RatingScore_rankInactivityIcon_05',
                    ss = 'RatingScore_title_e4',
                    us = ({ currentScore: e, hasRankInactivity: t, rankInactivityCount: a, className: n }) =>
                        u().createElement(
                            'div',
                            { className: C()(Zr, n) },
                            u().createElement(
                                'div',
                                { className: Jr },
                                u().createElement('div', { className: es }, e),
                                t &&
                                    u().createElement(
                                        Ge,
                                        {
                                            ignoreShowDelay: !0,
                                            contentId: R.views.lobby.comp7.tooltips.RankInactivityTooltip('resId'),
                                            args: { rankInactivityCount: a },
                                        },
                                        u().createElement(
                                            'div',
                                            { className: ts },
                                            u().createElement('div', { className: as }, a),
                                            u().createElement(
                                                'div',
                                                { className: ns },
                                                u().createElement('div', { className: rs }),
                                            ),
                                        ),
                                    ),
                            ),
                            u().createElement('div', { className: ss }, R.strings.comp7.ratingScore.title()),
                        ),
                    is = 'ItemFooter_base_0f',
                    os = 'ItemFooter_background_bf',
                    ls = 'ItemFooter_divider_bb',
                    cs = 'ItemFooter_light_79',
                    ds = 'ItemFooter_footer_e7',
                    ms = 'ItemFooter_rankItemFooter_e6',
                    _s = (0, q.Pi)(({ className: e }) => {
                        const t = Kr().model,
                            a = t.root.get(),
                            n = a.currentScore,
                            r = a.rankInactivityCount;
                        return u().createElement(
                            'div',
                            { className: C()(is, e) },
                            u().createElement('div', { className: os }),
                            u().createElement('div', { className: ls }),
                            u().createElement('div', { className: cs }),
                            u().createElement(
                                'div',
                                { className: ds },
                                u().createElement(us, {
                                    currentScore: n,
                                    hasRankInactivity: t.computes.hasCurrentItemRankInactivity(),
                                    rankInactivityCount: r,
                                    className: ms,
                                }),
                            ),
                        );
                    }),
                    Es = [
                        {
                            path: R.images.comp7.gui.maps.icons.comp7.qualificationParallax.c_6(),
                            speedX: -0.053,
                            speedY: -0.01,
                        },
                    ],
                    gs = 'Parallax_base_c9',
                    ps = 'Parallax_layer_15',
                    hs = (0, q.Pi)(({ className: e }) => {
                        const t = (0, s.createRef)();
                        return u().createElement(
                            'div',
                            { ref: t, className: C()(gs, e) },
                            u().createElement('div', { className: ps }),
                        );
                    }),
                    bs = 'ParallaxContainer_base_17',
                    fs = Es.map((e) => e.path),
                    vs = (0, q.Pi)(({ className: e }) => {
                        const t = Kr(),
                            a = t.model,
                            n = t.controls,
                            r = a.isParallaxPreloaded.get(),
                            i = (0, Pe.useSpring)({ to: { opacity: r ? 1 : 0 }, config: { duration: 300 } });
                        return (
                            'success' ===
                                ((e) => {
                                    const t = (0, s.useState)('pending'),
                                        a = t[0],
                                        n = t[1];
                                    return (
                                        (0, s.useLayoutEffect)(() => {
                                            let t = 0,
                                                a = 0;
                                            const r = () => {
                                                t + a === e.length && n(0 === t ? 'success' : 'error');
                                            };
                                            e.forEach((e) => {
                                                const n = new Image();
                                                (n.src = e),
                                                    n.addEventListener('load', () => {
                                                        a++, r();
                                                    }),
                                                    n.addEventListener('error', () => {
                                                        t++, r();
                                                    });
                                            });
                                        }, [e]),
                                        a
                                    );
                                })(fs) && n.setIsParallaxPreloaded(!0),
                            u().createElement(
                                Pe.animated.div,
                                { className: C()(bs, e), style: i },
                                u().createElement(hs, null),
                            )
                        );
                    }),
                    As = { type: 'idle' };
                const Cs = (e, t = 100) => ((viewEnv.pxToRem(o.O.client.getSize('px').width) * t) / 100 - e) / 2,
                    Fs = Tt({
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
                        getDirection: (e) => (e.deltaY > 1 ? Nt.Next : Nt.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    Ds = 'HorizontalBar_base_49',
                    Bs = 'HorizontalBar_base__nonActive_82',
                    ws = 'HorizontalBar_leftButton_5f',
                    ys = 'HorizontalBar_rightButton_03',
                    Ss = 'HorizontalBar_track_0d',
                    ks = 'HorizontalBar_thumb_fd',
                    Rs = 'HorizontalBar_rail_32',
                    xs = 'disable',
                    Ns = { pending: !1, offset: 0 },
                    Ps = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Ts = () => {},
                    Ls = (e, t) => Math.max(20, e.offsetWidth * t),
                    Is = (0, s.memo)(({ api: e, classNames: t = {}, getStepByRailClick: a = Ps, onDrag: n = Ts }) => {
                        const r = (0, s.useRef)(null),
                            i = (0, s.useRef)(null),
                            o = (0, s.useRef)(null),
                            l = (0, s.useRef)(null),
                            c = (0, s.useRef)(null),
                            d = e.stepTimeout || 100,
                            m = (0, s.useState)(Ns),
                            _ = m[0],
                            E = m[1],
                            g = (0, s.useCallback)(
                                (e) => {
                                    E(e),
                                        c.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current });
                                },
                                [n],
                            ),
                            p = () => {
                                const t = l.current,
                                    a = c.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && t && a && r)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    u = Math.min(1, n / r),
                                    d = wt(0, 1, s / (r - n)),
                                    m = (t.offsetWidth - Ls(t, u)) * d;
                                (a.style.transform = `translateX(${0 | m}px)`),
                                    ((e) => {
                                        if (i.current && o.current && l.current && c.current) {
                                            if (0 === e)
                                                return i.current.classList.add(xs), void o.current.classList.remove(xs);
                                            if (
                                                ((t = l.current),
                                                (a = c.current),
                                                e - (t.offsetWidth - a.offsetWidth) >= -0.5)
                                            )
                                                return i.current.classList.remove(xs), void o.current.classList.add(xs);
                                            var t, a;
                                            i.current.classList.remove(xs), o.current.classList.remove(xs);
                                        }
                                    })(m);
                            },
                            h = Rt(() => {
                                (() => {
                                    const t = c.current,
                                        a = l.current,
                                        n = e.getWrapperSize(),
                                        s = e.getContainerSize();
                                    if (!(s && t && n && a)) return;
                                    const u = Math.min(1, n / s);
                                    (t.style.width = `${Ls(a, u)}px`),
                                        (t.style.display = 'flex'),
                                        r.current &&
                                            (1 === u ? r.current.classList.add(Bs) : r.current.classList.remove(Bs));
                                })(),
                                    p();
                            });
                        (0, s.useEffect)(() => Ne(h)),
                            (0, s.useEffect)(
                                () =>
                                    Ne(() => {
                                        const t = () => {
                                            p();
                                        };
                                        let a = Ts;
                                        const n = () => {
                                            a(), (a = Ne(h));
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
                            (0, s.useEffect)(() => {
                                if (!_.pending) return;
                                const t = (t) => {
                                        var a;
                                        const r = e.contentRef.current;
                                        if (!r) return;
                                        const s = l.current,
                                            u = c.current;
                                        if (!r || !s || !u) return;
                                        const i = t.screenX - _.offset - s.getBoundingClientRect().x,
                                            o = (i / s.offsetWidth) * (null != (a = e.getContainerSize()) ? a : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(r, o),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: u, thumbOffset: i, contentOffset: o });
                                    },
                                    a = () => {
                                        window.removeEventListener('mousemove', t), g(Ns);
                                    };
                                return (
                                    window.addEventListener('mousemove', t),
                                    window.addEventListener('mouseup', a),
                                    () => {
                                        window.removeEventListener('mousemove', t),
                                            window.removeEventListener('mouseup', a);
                                    }
                                );
                            }, [e, _.offset, _.pending, n, g]);
                        const b = Ut((t) => e.applyStepTo(t), d, [e]),
                            f = b[0],
                            v = b[1];
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mouseup', v, !0),
                                () => document.removeEventListener('mouseup', v, !0)
                            ),
                            [v],
                        );
                        const A = (e) => {
                            e.target.classList.contains(xs) || W('highlight');
                        };
                        return u().createElement(
                            'div',
                            { className: C()(Ds, t.base), ref: r, onWheel: e.handleMouseWheel },
                            u().createElement('div', {
                                className: C()(ws, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(xs) || 0 !== e.button || (W('play'), f(Nt.Next));
                                },
                                onMouseUp: v,
                                ref: i,
                                onMouseEnter: A,
                            }),
                            u().createElement(
                                'div',
                                {
                                    className: C()(Ss, t.track),
                                    onMouseDown: (t) => {
                                        const n = c.current;
                                        if (n && 0 === t.button)
                                            if ((W('play'), t.target === n))
                                                g({ pending: !0, offset: t.screenX - n.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const n = c.current,
                                                        r = e.contentRef.current;
                                                    if (!n || !r) return;
                                                    const s = a(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + s * t);
                                                })(t.screenX > n.getBoundingClientRect().x ? Nt.Prev : Nt.Next);
                                            }
                                    },
                                    ref: l,
                                    onMouseEnter: A,
                                },
                                u().createElement('div', { ref: c, className: C()(ks, t.thumb) }),
                                u().createElement('div', { className: C()(Rs, t.rail) }),
                            ),
                            u().createElement('div', {
                                className: C()(ys, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(xs) || 0 !== e.button || (W('play'), f(Nt.Prev));
                                },
                                onMouseUp: v,
                                ref: o,
                                onMouseEnter: A,
                            }),
                        );
                    }),
                    Ms = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Os = ({
                        children: e,
                        api: t,
                        className: a,
                        barClassNames: n,
                        areaClassName: r,
                        classNames: i,
                        scrollClassName: o,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const d = (0, s.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: C()(Ms.base, e.base) });
                            }, [n]),
                            m = (0, s.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return u().createElement(
                            'div',
                            { className: C()(Ms.defaultScroll, a), onWheel: t.handleMouseWheel },
                            u().createElement(
                                'div',
                                { className: C()(Ms.defaultScrollArea, r) },
                                u().createElement(Hs, { className: o, api: m, classNames: i }, e),
                            ),
                            u().createElement(Is, { getStepByRailClick: l, api: t, onDrag: c, classNames: d }),
                        );
                    },
                    Hs = ({ api: e, className: t, classNames: a, children: n }) => (
                        (0, s.useEffect)(() => Ne(e.recalculateContent)),
                        u().createElement(
                            'div',
                            { className: C()(Ms.base, t) },
                            u().createElement(
                                'div',
                                {
                                    className: C()(Ms.wrapper, null == a ? void 0 : a.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                u().createElement(
                                    'div',
                                    { className: C()(Ms.content, null == a ? void 0 : a.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    );
                (Hs.Bar = Is),
                    (Hs.Default = Os),
                    (Hs.SeniorityAwards = ({ api: e, className: t, classNames: a, children: n }) => (
                        (0, s.useEffect)(() => Ne(e.recalculateContent)),
                        u().createElement(
                            'div',
                            { className: C()(Ms.base, t) },
                            u().createElement(
                                'div',
                                { className: C()(Ms.wrapper, null == a ? void 0 : a.wrapper), ref: e.wrapperRef },
                                u().createElement(
                                    'div',
                                    { className: C()(Ms.content, null == a ? void 0 : a.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    ));
                const Ws = 'ProgressionScroll_base_0f',
                    $s = 'ProgressionScroll_areaWrapper_dc',
                    Us = 'ProgressionScroll_areaContent_2f',
                    zs = ({
                        api: e,
                        stuckIndex: t,
                        itemWidth: a,
                        itemsOffset: n = 0,
                        children: r,
                        onStick: i,
                        className: l,
                        areaClassNames: c,
                        barClassNames: d,
                        staticContent: m,
                        containerMaxWidth: _,
                    }) => {
                        const E = viewEnv.remToPx(a),
                            g = e.animationScroll,
                            p = e.events,
                            h = e.applyScroll,
                            b = (function (e, t) {
                                const a = e.contentRef,
                                    n = e.wrapperRef,
                                    r = e.scrollPosition,
                                    u = e.clampPosition,
                                    i = e.animationScroll,
                                    l = e.events,
                                    c = (0, s.useState)(As),
                                    d = c[0],
                                    m = c[1];
                                return (
                                    (0, s.useEffect)(() => {
                                        const e = a.current;
                                        e && (e.style.cursor = 'dragging' === d.type ? 'move' : 'grab');
                                    }, [a, d.type]),
                                    (0, s.useEffect)(() => {
                                        if ('dragging' !== d.type) return;
                                        const e = o.O.client.events.mouse.move(([e, s]) => {
                                                const o = a.current,
                                                    l = n.current;
                                                if (!o || !l) return;
                                                if ('inside' === s && e.clientX < 0) return;
                                                const c = 'inside' === s ? e.clientX : e.clientX - l.offsetLeft,
                                                    m = d.positionFrom - c,
                                                    _ = d.previousScrollPosition + m;
                                                r.start(
                                                    Object.assign(
                                                        {
                                                            scrollPosition: u(o, _),
                                                            from: { scrollPosition: i.scrollPosition.get() },
                                                        },
                                                        t && { config: t },
                                                    ),
                                                );
                                            }),
                                            s = o.O.client.events.mouse.up(function () {
                                                m({ type: 'scrollingToEnd' });
                                            });
                                        return () => {
                                            e(), s();
                                        };
                                    }, [i.scrollPosition, u, a, d, r, n, t]),
                                    (0, s.useEffect)(() => {
                                        if ('scrollingToEnd' !== d.type) return;
                                        const e = () => {
                                            m(As);
                                        };
                                        return i.scrollPosition.idle && e(), l.on('rest', e), () => l.off('rest', e);
                                    }, [i.scrollPosition, d.type, l]),
                                    (0, s.useEffect)(() => {
                                        const e = a.current;
                                        if (!e) return;
                                        const t = (e) => {
                                            m({
                                                type: 'dragging',
                                                positionFrom: e.screenX,
                                                previousScrollPosition: i.scrollPosition.get(),
                                            });
                                        };
                                        return (
                                            e.addEventListener('mousedown', t),
                                            () => e.removeEventListener('mousedown', t)
                                        );
                                    }, [i.scrollPosition, a]),
                                    d
                                );
                            })(e),
                            f = (0, s.useCallback)(
                                (e) => {
                                    h(t * E, e);
                                },
                                [h, E, t],
                            ),
                            v = (0, s.useCallback)(() => {
                                null == i || i(Math.round(g.scrollPosition.goal / E));
                            }, [i, g.scrollPosition, E]);
                        (0, s.useEffect)(() => (p.on('rest', v), () => p.off('rest', v)), [p, v]),
                            (0, s.useEffect)(() => {
                                const e = () => {
                                    f({ immediate: !0, reset: !0 });
                                };
                                return (
                                    p.on('resizeHandled', e),
                                    () => {
                                        p.off('resizeHandled', e);
                                    }
                                );
                            }, [f, p]),
                            (0, s.useEffect)(
                                () =>
                                    Ne(() => {
                                        'idle' === b.type && g.scrollPosition.idle && f();
                                    }),
                                [g.scrollPosition, b, f],
                            );
                        const A = (0, s.useCallback)(
                            (e) => {
                                'dragEnd' === e.type && h(t * E);
                            },
                            [h, E, t],
                        );
                        return u().createElement(
                            'div',
                            {
                                className: C()(Ws, l),
                                style: { '--offset': `${n}rem`, maxWidth: _ ? `${_}rem` : '100%' },
                            },
                            u().createElement(
                                Hs,
                                {
                                    api: e,
                                    className: null == c ? void 0 : c.base,
                                    classNames: {
                                        wrapper: C()($s, null == c ? void 0 : c.wrapper),
                                        content: C()(Us, null == c ? void 0 : c.content),
                                    },
                                },
                                r,
                            ),
                            m,
                            u().createElement(Is, { api: e, onDrag: A, classNames: d }),
                        );
                    },
                    Gs = (e, t = 150, a) => {
                        const n = viewEnv.remToPx(e),
                            r = (0, s.useMemo)(
                                () => ({
                                    settings: {
                                        step: { type: 'fixed', value: n, clampedArrowStepTimeout: t },
                                        animationConfig: Object.assign({ frequency: 0.5 }, a),
                                    },
                                }),
                                [a, n, t],
                            );
                        return Fs(r);
                    },
                    js = {
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
                let qs, Vs;
                !(function (e) {
                    (e.Silver = 'silver'), (e.Gold = 'gold'), (e.Hidden = 'hidden');
                })(qs || (qs = {})),
                    (function (e) {
                        (e.Dynamic = 'dynamic'), (e.Static = 'static');
                    })(Vs || (Vs = {}));
                const Qs = {
                        [ya.x48]: 64,
                        [ya.x64]: 80,
                        [ya.x110]: 140,
                        [ya.x200]: 260,
                        [ya.x260]: 340,
                        [ya.x320]: 400,
                        [ya.x420]: 550,
                    },
                    Xs = ({ size: e, rank: t, division: a, type: n = Vs.Dynamic, state: r, classNames: s }) => {
                        const i = ((e) => ({
                            backgroundImage: `url(${R.images.comp7.gui.maps.icons.comp7.ranks.$num(e).$dyn('highlight')})`,
                        }))(e);
                        return u().createElement(
                            'div',
                            { className: C()(js.base, js[`base__${n}`]) },
                            u().createElement(
                                'div',
                                {
                                    className: C()(
                                        js.highlights,
                                        js[`highlights__${r}`],
                                        null == s ? void 0 : s.highlights,
                                    ),
                                    style: { '--highlightsSize': `${Qs[e]}rem` },
                                },
                                u().createElement('div', {
                                    className: C()(js.highlight, js.highlight__first, null == s ? void 0 : s.highlight),
                                    style: i,
                                }),
                                n === Vs.Dynamic &&
                                    u().createElement('div', {
                                        className: C()(
                                            js.highlight,
                                            js.highlight__second,
                                            null == s ? void 0 : s.highlight,
                                        ),
                                        style: i,
                                    }),
                            ),
                            u().createElement(Sa, {
                                size: e,
                                rank: t,
                                division: a,
                                className: C()(js.rankEmblem, null == s ? void 0 : s.rankEmblem),
                            }),
                        );
                    },
                    Ys = [Aa.Fifth, Aa.Sixth],
                    Ks = (e, t, a) => (e !== jr.Current || a ? qs.Hidden : Ys.includes(t) ? qs.Gold : qs.Silver),
                    Zs = 'RankInfo_base_21',
                    Js = 'RankInfo_highlight_1f',
                    eu = 'RankInfo_formattedText_26',
                    tu = ({ rank: e, from: t, topPercentage: a, className: n }) =>
                        u().createElement(
                            'div',
                            { className: C()(Zs, n) },
                            u().createElement('div', { className: Js }),
                            u().createElement(ar, {
                                text: String(R.strings.comp7.rankInfo.current.$dyn(Fa(e))),
                                binding: { topPercentage: a, fromScore: t },
                                classMix: eu,
                            }),
                        ),
                    au = 'RankItemDivider_base_c4',
                    nu = () => u().createElement('div', { className: au }),
                    ru = {
                        base: 'ProgressBar_base_45',
                        base__medium: 'ProgressBar_base__medium_62',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__medium: 'ProgressBar_background__medium_6e',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let su, uu;
                !(function (e) {
                    (e.Small = 'small'), (e.Medium = 'medium'), (e.Big = 'big'), (e.Default = 'big');
                })(su || (su = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(uu || (uu = {}));
                const iu = ({ size: e = su.Default }) =>
                        u().createElement('div', { className: C()(ru.background, ru[`background__${e}`]) }),
                    ou = {
                        base: 'ProgressBarBlink_base_24',
                        base__medium: 'ProgressBarBlink_base__medium_ec',
                        base__small: 'ProgressBarBlink_base__small_0f',
                    },
                    lu = ({ size: e }) => {
                        const t = C()(ou.base, ou[`base__${e}`]);
                        return u().createElement('div', { className: t });
                    },
                    cu = {
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
                    du = (0, s.memo)(
                        ({ size: e, lineRef: t, disabled: a, baseStyles: n, isComplete: r, withoutBounce: s }) => {
                            const i = C()(
                                    cu.base,
                                    cu[`base__${e}`],
                                    a && cu.base__disabled,
                                    r && cu.base__finished,
                                    s && cu.base__withoutBounce,
                                ),
                                o = !a && !r;
                            return u().createElement(
                                'div',
                                { className: i, style: n, ref: t },
                                u().createElement('div', { className: cu.pattern }),
                                u().createElement('div', { className: cu.gradient }),
                                o && u().createElement(lu, { size: e }),
                            );
                        },
                    ),
                    mu = ({ size: e, value: t, lineRef: a, disabled: n, onComplete: r }) => {
                        const i = (0, s.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                            o = 100 === t;
                        return (
                            (0, s.useEffect)(() => {
                                o && r && r();
                            }, [o, r]),
                            u().createElement(du, { size: e, disabled: n, baseStyles: i, isComplete: o, lineRef: a })
                        );
                    };
                let _u, Eu;
                !(function (e) {
                    (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
                })(_u || (_u = {})),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                    })(Eu || (Eu = {}));
                const gu = 'ProgressBarDeltaSimple_base_6c',
                    pu = 'ProgressBarDeltaSimple_delta_99',
                    hu = (0, s.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: a,
                            from: n,
                            size: r,
                            to: i,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                        }) => {
                            const c = i < n,
                                d = (0, s.useState)(Eu.Idle),
                                m = d[0],
                                _ = d[1],
                                E = m === Eu.In,
                                g = m === Eu.End,
                                p = m === Eu.Idle,
                                h = (0, s.useCallback)(
                                    (e) => {
                                        _(e), l && l(e);
                                    },
                                    [l],
                                );
                            (0, s.useEffect)(() => {
                                if (p && !a) {
                                    return Cr(() => {
                                        h(Eu.In);
                                    }, t);
                                }
                            }, [h, a, p, t]),
                                (0, s.useEffect)(() => {
                                    if (E) {
                                        return Cr(() => {
                                            o && o(), h(Eu.End);
                                        }, e + t);
                                    }
                                }, [h, E, o, t, e]);
                            const b = (0, s.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, t, e],
                                ),
                                f = (0, s.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, t, e],
                                ),
                                v = (0, s.useMemo)(
                                    () => ({ width: `${Math.abs(n - i)}%`, left: `${c ? i : n}%` }),
                                    [n, c, i],
                                );
                            return g
                                ? null
                                : u().createElement(
                                      'div',
                                      { className: gu, style: v },
                                      u().createElement(
                                          'div',
                                          { style: p ? b : f, className: pu },
                                          u().createElement(lu, { size: r }),
                                      ),
                                  );
                        },
                    ),
                    bu = (0, s.memo)(
                        ({
                            to: e,
                            size: t,
                            from: a,
                            lineRef: n,
                            disabled: r,
                            isComplete: i,
                            animationSettings: o,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const d = (0, s.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${o.line.duration}ms`,
                                    transitionDelay: `${o.line.delay}ms`,
                                }),
                                [o.line.delay, o.line.duration, e],
                            );
                            return u().createElement(
                                u().Fragment,
                                null,
                                u().createElement(du, {
                                    size: t,
                                    lineRef: n,
                                    disabled: r,
                                    isComplete: i,
                                    baseStyles: d,
                                }),
                                a >= 0 &&
                                    u().createElement(hu, {
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
                    fu = 'ProgressBarDeltaGrow_base_7e',
                    vu = 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    Au = 'ProgressBarDeltaGrow_glow_68',
                    Cu = (e) => (e ? { left: 0 } : { right: 0 }),
                    Fu = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    Du = (e) => ({ transitionDuration: `${e}ms` }),
                    Bu = (0, s.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: a,
                            from: n,
                            size: r,
                            to: i,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                            className: c,
                        }) => {
                            const d = i < n,
                                m = (0, s.useState)(_u.Idle),
                                _ = m[0],
                                E = m[1],
                                g = _ === _u.End,
                                p = _ === _u.Idle,
                                h = _ === _u.Grow,
                                b = _ === _u.Shrink,
                                f = (0, s.useCallback)(
                                    (e) => {
                                        E(e), l && l(e);
                                    },
                                    [l],
                                ),
                                v = (0, s.useCallback)(
                                    (e, t) =>
                                        Cr(() => {
                                            f(e);
                                        }, t),
                                    [f],
                                );
                            (0, s.useEffect)(() => {
                                if (!a)
                                    return p
                                        ? v(_u.Grow, t)
                                        : h
                                          ? v(_u.Shrink, e)
                                          : b
                                            ? v(_u.End, e)
                                            : void (g && o && o());
                            }, [v, a, g, h, p, b, o, t, e]);
                            const A = (0, s.useMemo)(() => Object.assign({ width: '100%' }, Du(e), Cu(d)), [d, e]),
                                F = (0, s.useMemo)(() => Object.assign({ width: '0%' }, Du(e), Cu(d)), [d, e]),
                                D = (0, s.useMemo)(() => Object.assign({ width: '0%' }, Fu(d, n), Du(e)), [n, d, e]),
                                B = (0, s.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(i - n)}%` }, Fu(d, n), Du(e)),
                                    [n, d, i, e],
                                );
                            if (g) return null;
                            const w = C()(fu, c, d && 0 === i && vu);
                            return u().createElement(
                                'div',
                                { style: p ? D : B, className: w },
                                u().createElement(
                                    'div',
                                    { style: b ? F : A, className: Au },
                                    u().createElement(lu, { size: r }),
                                ),
                            );
                        },
                    ),
                    wu = (0, s.memo)(
                        ({
                            to: e,
                            size: t,
                            from: a,
                            lineRef: n,
                            disabled: r,
                            isComplete: i,
                            animationSettings: o,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const d = e < a,
                                m = (0, s.useState)(!1),
                                _ = m[0],
                                E = m[1],
                                g = (0, s.useCallback)(
                                    (e) => {
                                        e === _u.Shrink && E(!0), c && c(e);
                                    },
                                    [c],
                                ),
                                p = (0, s.useMemo)(() => ({ width: `${a}%`, transitionProperty: 'none' }), [a]),
                                h = (0, s.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${o.line.duration}ms` }),
                                    [o.line.duration, e],
                                );
                            return u().createElement(
                                u().Fragment,
                                null,
                                u().createElement(du, {
                                    size: t,
                                    lineRef: n,
                                    disabled: r,
                                    isComplete: i,
                                    withoutBounce: d && 0 === e,
                                    baseStyles: _ ? h : p,
                                }),
                                a >= 0 &&
                                    u().createElement(Bu, {
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
                    yu = ['onComplete', 'onEndAnimation'];
                function Su() {
                    return (
                        (Su =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Su.apply(this, arguments)
                    );
                }
                const ku = (0, s.memo)((e) => {
                        let t = e.onComplete,
                            a = e.onEndAnimation,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, yu);
                        const r = (0, s.useState)(!1),
                            i = r[0],
                            o = r[1],
                            l = (0, s.useCallback)(() => {
                                const e = 100 === n.to;
                                e !== i && o(e), e && t && t(), a && a();
                            }, [i, t, a, n.to]);
                        switch (n.animationSettings.type) {
                            case uu.Simple:
                                return u().createElement(bu, Su({}, n, { onEndAnimation: l, isComplete: i }));
                            case uu.Growing:
                                return u().createElement(wu, Su({}, n, { onEndAnimation: l, isComplete: i }));
                            default:
                                return null;
                        }
                    }),
                    Ru = ['onEndAnimation'];
                function xu() {
                    return (
                        (xu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        xu.apply(this, arguments)
                    );
                }
                const Nu = (0, s.memo)((e) => {
                    let t = e.onEndAnimation,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                r = {},
                                s = Object.keys(e);
                            for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                            return r;
                        })(e, Ru);
                    const n = (0, s.useRef)({}),
                        r = (0, s.useCallback)(() => {
                            (n.current.from = void 0), t && t();
                        }, [t]),
                        i = 'number' == typeof n.current.from ? n.current.from : a.from;
                    return (
                        (n.current.from = i),
                        u().createElement(ku, xu({}, a, { onEndAnimation: r, key: `${i}-${a.to}`, from: i }))
                    );
                });
                function Pu() {
                    return (
                        (Pu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Pu.apply(this, arguments)
                    );
                }
                const Tu = (0, s.memo)(
                        ({
                            size: e,
                            value: t,
                            lineRef: a,
                            disabled: n,
                            deltaFrom: r,
                            animationSettings: s,
                            onEndAnimation: i,
                            onChangeAnimationState: o,
                            onComplete: l,
                        }) => {
                            if (r === t)
                                return u().createElement(mu, {
                                    key: `${r}-${t}`,
                                    size: e,
                                    value: t,
                                    lineRef: a,
                                    disabled: n,
                                    onComplete: l,
                                });
                            const c = {
                                from: r,
                                to: t,
                                size: e,
                                lineRef: a,
                                disabled: n,
                                animationSettings: s,
                                onComplete: l,
                                onEndAnimation: i,
                                onChangeAnimationState: o,
                            };
                            return s.withStack
                                ? u().createElement(Nu, c)
                                : u().createElement(ku, Pu({ key: `${r}-${t}` }, c));
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
                    Iu = (e, t, a) => {
                        if ('number' == typeof a) {
                            return (wt(0, t, a) / t) * 100;
                        }
                        return e;
                    },
                    Mu = {
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
                    Ou = {
                        freezed: !1,
                        withStack: !1,
                        type: uu.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    Hu = (0, s.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = Mu,
                            size: a = su.Default,
                            animationSettings: n = Ou,
                            disabled: r = !1,
                            withoutBackground: i = !1,
                            value: o,
                            deltaFrom: l,
                            lineRef: c,
                            onChangeAnimationState: d,
                            onEndAnimation: m,
                            onComplete: _,
                        }) => {
                            const E = ((e, t, a) =>
                                (0, s.useMemo)(() => {
                                    const n = (wt(0, t, e) / t) * 100;
                                    return { value: n, deltaFrom: Iu(n, t, a) };
                                }, [a, t, e]))(o, e, l);
                            return u().createElement(
                                'div',
                                { className: C()(ru.base, ru[`base__${a}`]), style: Lu(t) },
                                !i && u().createElement(iu, { size: a }),
                                u().createElement(Tu, {
                                    size: a,
                                    lineRef: c,
                                    disabled: r,
                                    value: E.value,
                                    deltaFrom: E.deltaFrom,
                                    animationSettings: n,
                                    onEndAnimation: m,
                                    onChangeAnimationState: d,
                                    onComplete: _,
                                }),
                            );
                        },
                    ),
                    Wu = ({ rank: e, division: t, from: a, to: n, className: r, children: s }) =>
                        u().createElement(
                            Ge,
                            {
                                contentId: R.views.lobby.comp7.tooltips.DivisionTooltip('resId'),
                                args: { rank: e, division: t, from: a, to: n },
                            },
                            u().createElement('div', { className: r }, s),
                        ),
                    $u = 'RankProgressDivisions_base_54',
                    Uu = 'RankProgressDivisions_divisionItem_77',
                    zu = 'RankProgressDivisions_divisionItem__current_84',
                    Gu = 'RankProgressDivisions_highlightContainer_53',
                    ju = 'RankProgressDivisions_radialBack_cc',
                    qu = 'RankProgressDivisions_mainBack_38',
                    Vu = 'RankProgressDivisions_bottomLine_67',
                    Qu = 'RankProgressDivisions_bottomLine__first_bd',
                    Xu = 'RankProgressDivisions_bottomLine__second_60',
                    Yu = 'RankProgressDivisions_bottomLine__third_08',
                    Ku = 'RankProgressDivisions_divisionText_ea',
                    Zu = 'RankProgressDivisions_note_e1',
                    Ju = (0, q.Pi)(({ itemIndex: e, rank: t, from: a, step: n }) => {
                        const r = Kr().model.computes.divisions(e);
                        return u().createElement(
                            'div',
                            { className: $u },
                            Ce(r, (e, r) => {
                                const s = e.state === oa.Current;
                                return u().createElement(
                                    Wu,
                                    {
                                        key: r,
                                        rank: t,
                                        division: e.name,
                                        from: a + n * r,
                                        to: a + n * (r + 1),
                                        className: C()(Uu, s && zu),
                                    },
                                    s &&
                                        u().createElement(
                                            'div',
                                            { className: Gu },
                                            u().createElement('div', { className: ju }),
                                            u().createElement('div', { className: qu }),
                                            u().createElement('div', { className: C()(Vu, Qu) }),
                                            u().createElement('div', { className: C()(Vu, Xu) }),
                                            u().createElement('div', { className: C()(Vu, Yu) }),
                                        ),
                                    u().createElement(
                                        'div',
                                        { className: Ku },
                                        s &&
                                            u().createElement(
                                                'div',
                                                { className: Zu },
                                                R.strings.comp7.division.note(),
                                            ),
                                        va(e.name),
                                    ),
                                );
                            }),
                        );
                    }),
                    ei = {
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
                let ti;
                !(function (e) {
                    (e.Top = 'top'), (e.Bottom = 'bottom');
                })(ti || (ti = {}));
                const ai = (e, t) => {
                        const a = t > 0 ? (100 / t) * e + '%' : '0%';
                        return e === t ? { left: a, transform: `translateX(-${ei['--pointLineWidth']})` } : { left: a };
                    },
                    ni = ({ step: e, divisionsCount: t, from: a, currentDivisionIndex: n, direction: r = ti.Bottom }) =>
                        u().createElement(
                            'div',
                            { className: C()(ei.base, ei[`base__${r}`]) },
                            ua(t + 1, (r) => {
                                const s = void 0 !== n && r === n + 1,
                                    i = void 0 === a && (r === n || s);
                                return u().createElement(
                                    'div',
                                    { className: ei.point, style: ai(r, t), key: r },
                                    u().createElement('div', {
                                        className: C()(ei.pointLine, i && ei.pointLine__extended),
                                    }),
                                    void 0 !== a &&
                                        u().createElement(
                                            'div',
                                            { className: C()(ei.pointValue, s && ei.pointValue__next) },
                                            a + e * r,
                                        ),
                                );
                            }),
                        ),
                    ri = {
                        '--pageContentWidth': '78vw',
                        base: 'RankProgress_base_97',
                        base__hidden: 'RankProgress_base__hidden_b9',
                        base__inactive: 'RankProgress_base__inactive_49',
                        base__active: 'RankProgress_base__active_a2',
                        progressWrapper: 'RankProgress_progressWrapper_4e',
                    },
                    si = {
                        freezed: !0,
                        withStack: !1,
                        type: uu.Simple,
                        delta: { duration: 0, delay: 0 },
                        line: { duration: 0, delay: 0 },
                    },
                    ui = (0, q.Pi)(({ rank: e, state: t, itemIndex: a, from: n, to: r, progressState: s }) => {
                        const i = Kr().model,
                            o = i.root.get().currentScore,
                            l = i.computes.divisionsConfig(a),
                            c = r - n,
                            d = ((e, t, a) => Math.round((t - e) / a))(n, r, l.count);
                        return u().createElement(
                            'div',
                            { className: C()(ri.base, ri[`base__${s}`]) },
                            u().createElement(Ju, { itemIndex: a, rank: e, from: n, step: d }),
                            u().createElement(ni, {
                                step: d,
                                divisionsCount: l.count,
                                direction: ti.Top,
                                currentDivisionIndex: l.currentDivisionIndex,
                            }),
                            u().createElement(
                                'div',
                                { className: ri.progressWrapper },
                                t === jr.Current
                                    ? u().createElement(Hu, { maxValue: c, value: o - n, animationSettings: si })
                                    : u().createElement(Hu, { maxValue: c, value: o < n ? 0 : c, disabled: o < n }),
                            ),
                            u().createElement(ni, {
                                step: d,
                                divisionsCount: l.count,
                                from: n,
                                currentDivisionIndex: l.currentDivisionIndex,
                            }),
                        );
                    }),
                    ii = 'RankStatusDescription_base_07',
                    oi = ({ text: e, binding: t, className: a }) => {
                        const n = ((e) =>
                            'number' == typeof (null == e ? void 0 : e.pointsCount)
                                ? Object.assign({}, e, { pointsCount: u().createElement(It, { value: e.pointsCount }) })
                                : e)(t);
                        return u().createElement(ar, { text: e, binding: n, classMix: C()(ii, a) });
                    },
                    li = 'AchievedRankStatus_base_70',
                    ci = R.strings.comp7.rankItemStatus.previous,
                    di = ({ rank: e, rankState: t, itemIndex: a, from: n, to: r, progressState: s }) => {
                        switch (e) {
                            case Aa.First:
                            case Aa.Second:
                            case Aa.Third:
                            case Aa.Fourth:
                                return u().createElement(ui, {
                                    rank: e,
                                    state: t,
                                    itemIndex: a,
                                    from: n,
                                    to: r,
                                    progressState: s,
                                });
                            case Aa.Fifth:
                                return u().createElement(
                                    'div',
                                    { className: li },
                                    u().createElement(oi, { text: Ra(ci.description, e), binding: { fromScore: n } }),
                                );
                            default:
                                return (
                                    console.warn(`Status for rank '${e}' was not mapped to any react component.`), null
                                );
                        }
                    },
                    mi = 'LastUpdate_base_f7',
                    _i = 'LastUpdate_dataUpdate_90',
                    Ei = ({ timestamp: e, isLastBestUserPointsValueLoading: t = !1 }) =>
                        u().createElement(
                            'div',
                            { className: mi },
                            t
                                ? u().createElement(Kn, {
                                      text: R.strings.comp7.lastUpdateNote.lastBestUserPoints.update(),
                                      classMix: _i,
                                  })
                                : u().createElement(Ar, { timestamp: e }),
                        ),
                    gi = (e, t) => e > 0 || t;
                let pi;
                !(function (e) {
                    (e.Active = 'active'), (e.Inactive = 'inactive'), (e.Hidden = 'hidden');
                })(pi || (pi = {}));
                const hi = 'CurrentRankStatus_base_d4',
                    bi = R.strings.comp7.rankItemStatus.current,
                    fi = ({
                        rank: e,
                        rankState: t,
                        itemIndex: a,
                        from: n,
                        to: r,
                        progressState: i,
                        topPercentage: o,
                        pointsCount: l,
                        isLastBestUserPointsValueLoading: c,
                        timestamp: d,
                    }) => {
                        const m = { topPercentage: o, pointsCount: l };
                        return (
                            (0, s.useEffect)(() => {
                                i === pi.Active && W('comp_7_progression_rank_active');
                            }, [i]),
                            u().createElement(
                                'div',
                                { className: hi },
                                (() => {
                                    switch (e) {
                                        case Aa.First:
                                        case Aa.Second:
                                        case Aa.Third:
                                        case Aa.Fourth:
                                            return u().createElement(ui, {
                                                rank: e,
                                                state: t,
                                                itemIndex: a,
                                                from: n,
                                                to: r,
                                                progressState: i,
                                            });
                                        case Aa.Fifth:
                                        case Aa.Sixth:
                                            return u().createElement(
                                                u().Fragment,
                                                null,
                                                u().createElement(oi, {
                                                    text: gi(l, c)
                                                        ? Ra(bi.extendedDescription, e)
                                                        : Ra(bi.description, e),
                                                    binding: m,
                                                }),
                                                u().createElement(Ei, {
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
                    vi = 'FutureRankStatus_base_c2',
                    Ai = 'FutureRankStatus_lock_d0',
                    Ci = R.strings.comp7.rankItemStatus.future,
                    Fi = [Aa.Sixth],
                    Di = ({
                        rank: e,
                        topPercentage: t,
                        from: a,
                        to: n,
                        pointsCount: r,
                        isLastBestUserPointsValueLoading: i,
                        timestamp: o,
                    }) => {
                        const l = (0, s.useMemo)(
                                () =>
                                    e === Aa.Sixth
                                        ? { topPercentage: t, pointsCount: r }
                                        : e === Aa.Fifth
                                          ? { fromScore: a }
                                          : { fromScore: a, toScore: n },
                                [t, r, a, n, e],
                            ),
                            c = Fi.includes(e) && gi(r, i);
                        return u().createElement(
                            'div',
                            { className: vi },
                            u().createElement('div', { className: Ai }),
                            u().createElement(oi, {
                                text: Ra(c ? Ci.extendedDescription : Ci.description, e),
                                binding: l,
                            }),
                            c && u().createElement(Ei, { timestamp: o, isLastBestUserPointsValueLoading: i }),
                        );
                    },
                    Bi = ({
                        rankState: e,
                        rank: t,
                        itemIndex: a,
                        from: n,
                        to: r,
                        progressState: s,
                        pointsCount: i,
                        isLastBestUserPointsValueLoading: o,
                        topPercentage: l,
                        timestamp: c,
                    }) => {
                        switch (e) {
                            case jr.Previous:
                                return u().createElement(di, {
                                    rank: t,
                                    rankState: e,
                                    itemIndex: a,
                                    from: n,
                                    to: r,
                                    progressState: s,
                                });
                            case jr.Current:
                                return u().createElement(fi, {
                                    rank: t,
                                    rankState: e,
                                    itemIndex: a,
                                    from: n,
                                    to: r,
                                    progressState: s,
                                    pointsCount: i,
                                    isLastBestUserPointsValueLoading: o,
                                    topPercentage: l,
                                    timestamp: c,
                                });
                            case jr.Future:
                                return u().createElement(Di, {
                                    rank: t,
                                    topPercentage: l,
                                    from: n,
                                    to: r,
                                    pointsCount: i,
                                    isLastBestUserPointsValueLoading: o,
                                    timestamp: c,
                                });
                            default:
                                return console.error(`Unreachable code for state '${e}' in RankStatusResolver.`), null;
                        }
                    };
                let wi;
                !(function (e) {
                    (e.Progress = 'progress'), (e.Text = 'text');
                })(wi || (wi = {}));
                const yi = {
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
                    Si = (0, q.Pi)(({ itemIndex: e, isViewed: t, hasDivider: a = !0 }) => {
                        const n = Kr().model,
                            r = n.root.get(),
                            s = r.topPercentage,
                            i = r.lastBestUserPointsValue,
                            o = r.leaderboardUpdateTimestamp,
                            l = r.isLastBestUserPointsValueLoading,
                            c = n.qualificationModel.isActive.get(),
                            d = S().mediaSize,
                            m = n.computes.item(e),
                            _ = m.rank,
                            E = m.from,
                            g = m.to,
                            p = n.computes.divisionsConfig(e),
                            h = n.computes.rankSettings(e, c),
                            b = h.state,
                            f = h.division,
                            v = h.hasInfo,
                            A = ((e) => {
                                switch (!0) {
                                    case e >= B.ExtraLarge:
                                        return ya.x420;
                                    case e >= B.Large:
                                        return ya.x320;
                                    case e >= B.Medium:
                                        return ya.x260;
                                    default:
                                        return ya.x200;
                                }
                            })(d),
                            F = Ks(b, _, c),
                            D = ((e, t) => (t ? (e === jr.Current ? pi.Active : pi.Inactive) : pi.Hidden))(b, t),
                            w = ((e, t) => {
                                const a = Ba(t);
                                switch (e) {
                                    case jr.Previous:
                                    case jr.Current:
                                        return a ? wi.Progress : wi.Text;
                                    default:
                                        return wi.Text;
                                }
                            })(b, _);
                        return u().createElement(
                            'div',
                            { className: yi.base },
                            u().createElement(
                                $n,
                                { rank: _, from: E, to: g, topPercentage: s, divisions: p.list },
                                u().createElement(Xs, {
                                    size: A,
                                    rank: _,
                                    division: f,
                                    state: F,
                                    classNames: { rankEmblem: yi[`rankEmblem__${b}`] },
                                }),
                            ),
                            u().createElement(
                                'div',
                                {
                                    className: C()(
                                        yi.rankDescription,
                                        yi[`rankDescription__${w}`],
                                        t && yi.rankDescription__viewed,
                                    ),
                                },
                                v &&
                                    u().createElement(
                                        'div',
                                        { className: yi.rankInfo },
                                        u().createElement(tu, { rank: _, from: E, topPercentage: s }),
                                    ),
                                u().createElement(Bi, {
                                    rankState: b,
                                    rank: _,
                                    itemIndex: e,
                                    from: E,
                                    to: g,
                                    progressState: D,
                                    pointsCount: i,
                                    isLastBestUserPointsValueLoading: l,
                                    topPercentage: s,
                                    timestamp: o,
                                }),
                            ),
                            a &&
                                u().createElement(
                                    'div',
                                    { className: yi.dividerContainer, style: { '--emblemSize': `${A}rem` } },
                                    u().createElement(nu, null),
                                ),
                        );
                    }),
                    ki = 'RankItemContainer_base_b3',
                    Ri = 'RankItemContainer_title_d5',
                    xi = 'RankItemContainer_title__active_f0',
                    Ni = (0, q.Pi)(({ itemIndex: e, itemWidth: t, isViewed: a, onMouseDown: n, hasDivider: r }) => {
                        const s = Kr().model.computes.item(e);
                        return u().createElement(
                            'div',
                            { className: ki, style: { '--itemWidth': `${t}rem` }, onMouseDown: n },
                            u().createElement('div', { className: C()(Ri, a && xi) }, Na(s.rank)),
                            u().createElement(Si, { itemIndex: e, isViewed: a, hasDivider: r }),
                        );
                    }),
                    Pi = 'Progression_base_97',
                    Ti = { base: 'Progression_areaContainer_09', wrapper: 'Progression_areaWrapper_5f' },
                    Li = { base: 'Progression_bar_4d' },
                    Ii = (0, q.Pi)(({ staticContent: e, className: t }) => {
                        const a = Kr().model,
                            n = a.root.get().currentItemIndex,
                            r = a.computes.itemsLength(),
                            i = ((e) => (e >= B.ExtraLarge ? 640 : e >= B.Large ? 500 : e >= B.Medium ? 440 : 400))(
                                S().mediaSize,
                            ),
                            o = Cs(i),
                            l = Gs(i),
                            c = (0, s.useState)(n),
                            d = c[0],
                            m = c[1],
                            _ = (0, s.useCallback)(
                                (e) => () => {
                                    $.playClick(), m(e);
                                },
                                [],
                            );
                        return (
                            (0, s.useLayoutEffect)(() => {
                                l.scrollPosition.start({ scrollPosition: viewEnv.remToPx(n * i), immediate: !0 });
                            }, []),
                            (0, s.useLayoutEffect)(() => {
                                m(n);
                            }, [n]),
                            u().createElement(
                                zs,
                                {
                                    api: l,
                                    stuckIndex: d,
                                    itemWidth: i,
                                    itemsOffset: o,
                                    staticContent: e,
                                    onStick: m,
                                    className: C()(Pi, t),
                                    areaClassNames: Ti,
                                    barClassNames: Li,
                                },
                                ua(r, (e) =>
                                    u().createElement(Ni, {
                                        key: e,
                                        itemIndex: e,
                                        isViewed: d === e,
                                        hasDivider: e < r - 1,
                                        itemWidth: i,
                                        onMouseDown: _(e),
                                    }),
                                ),
                            )
                        );
                    }),
                    Mi = R.strings.comp7.qualification,
                    Oi = { hasHtmlContent: !0 },
                    Hi = ({ maxBattlesCount: e, children: t }) =>
                        u().createElement(
                            Qe,
                            {
                                header: Mi.conditionTooltip.header(),
                                body: da(Mi.conditionTooltip.body(e), { maxBattlesCount: e }),
                                args: Oi,
                            },
                            u().createElement('div', null, t),
                        ),
                    Wi = 'BattlesCounter_base_f1',
                    $i = 'BattlesCounter_battlesCount_ef',
                    Ui = ({ battlesCount: e, maxBattlesCount: t, className: a }) =>
                        u().createElement(Kn, {
                            text: R.strings.comp7.qualification.counter(),
                            binding: {
                                battlesCount: u().createElement('div', { className: $i }, e),
                                maxBattlesCount: t,
                            },
                            classMix: C()(Wi, a),
                        }),
                    zi = {
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
                    Gi = { notPlayed: 'notFinished', inProgress: 'notFinished', victory: 'victory', defeat: 'defeat' },
                    ji = { x173: 173, x234: 234 },
                    qi = ({ className: e, state: t, size: a = 'x173' }) => {
                        const n = ji[a],
                            r = R.images.comp7.gui.maps.icons.comp7.icons.$dyn(`battle_${Gi[t]}`);
                        return u().createElement(
                            'div',
                            { className: C()(zi.base, e, zi[`base__${t}`], zi[`base__size_${n}`]) },
                            u().createElement('div', {
                                className: zi.battleBackground,
                                style: { backgroundImage: `url(${r})`, '--imageSize': `${n}rem` },
                            }),
                        );
                    },
                    Vi = (0, q.Pi)(({ index: e, className: t }) => {
                        const a = Kr().model,
                            n = S().mediaSize,
                            r = a.computes.qualificationBattle(e);
                        return u().createElement(qi, {
                            state: r.state,
                            className: t,
                            key: e,
                            size: n >= B.ExtraLarge ? 'x234' : 'x173',
                        });
                    }),
                    Qi = 'BattlesProgression_base_a1',
                    Xi = 'BattlesProgression_item_73',
                    Yi = (0, q.Pi)(({ className: e }) => {
                        const t = Kr().model;
                        return u().createElement(
                            'div',
                            { className: C()(Qi, e) },
                            ua(t.computes.qualificationBattlesLength(), (e) =>
                                u().createElement(Vi, { index: e, className: Xi, key: e }),
                            ),
                        );
                    }),
                    Ki = 'Qualification_base_0f',
                    Zi = 'Qualification_content_64',
                    Ji = 'Qualification_footer_8f',
                    eo = 'Qualification_qualificationEmblem_e2',
                    to = 'Qualification_battlesProgression_51',
                    ao = 'Qualification_counterDescription_20',
                    no = 'Qualification_ratingCalculationDescription_7a',
                    ro = 'Qualification_timerIcon_35',
                    so = 'Qualification_conditionContainer_c4',
                    uo = 'Qualification_condition_23',
                    io = 'Qualification_rewardsDescription_c2',
                    oo = 'Qualification_infoIcon_fe',
                    lo = 'Qualification_rewardsButton_db',
                    co = 'Qualification_buttonIcon_39',
                    mo = 'Qualification_waiting_de',
                    _o = R.strings.comp7.qualification,
                    Eo = { base: lo, icon: co },
                    go = (0, q.Pi)(({ className: e }) => {
                        const t = Kr(),
                            a = t.model,
                            n = t.controls,
                            r = a.qualificationModel.battlesCount.get(),
                            s = a.qualificationModel.maxBattlesCount.get(),
                            i = a.qualificationModel.isRatingCalculation.get(),
                            o = a.isParallaxPreloaded.get(),
                            l = (0, Pe.useSpring)({
                                from: { opacity: 0 },
                                to: ee() ? { opacity: o ? 1 : 0 } : { opacity: 1 },
                                delay: 300,
                                config: { duration: 300 },
                            });
                        return ee() && !o
                            ? u().createElement('div', { className: mo }, u().createElement(nt, null))
                            : u().createElement(
                                  Pe.animated.div,
                                  { style: l, className: C()(Ki, e) },
                                  u().createElement(
                                      'div',
                                      { className: Zi },
                                      u().createElement('div', { className: eo }),
                                      i
                                          ? u().createElement(
                                                u().Fragment,
                                                null,
                                                u().createElement(Ui, { battlesCount: r, maxBattlesCount: s }),
                                                u().createElement(
                                                    Qe,
                                                    { body: R.strings.comp7.qualification.ratingCalculationTooltip() },
                                                    u().createElement(
                                                        'div',
                                                        null,
                                                        u().createElement(Kn, {
                                                            text: _o.ratingCalculationDescription(),
                                                            binding: {
                                                                timerIcon: u().createElement('div', { className: ro }),
                                                            },
                                                            classMix: no,
                                                        }),
                                                    ),
                                                ),
                                            )
                                          : u().createElement(ar, {
                                                text: _o.counterWithDescription(),
                                                classMix: ao,
                                                binding: {
                                                    counter: u().createElement(Ui, {
                                                        battlesCount: r,
                                                        maxBattlesCount: s,
                                                    }),
                                                },
                                            }),
                                      u().createElement(Yi, { className: to }),
                                  ),
                                  u().createElement(
                                      'div',
                                      { className: Ji },
                                      u().createElement(
                                          'div',
                                          { className: so },
                                          u().createElement(ar, {
                                              text: _o.condition(s),
                                              classMix: uo,
                                              binding: { maxBattlesCount: s },
                                          }),
                                          u().createElement(
                                              Hi,
                                              { maxBattlesCount: s },
                                              u().createElement('div', { className: oo }),
                                          ),
                                      ),
                                      u().createElement(Kn, { text: _o.rewardsDescription(), classMix: io }),
                                      u().createElement(j, {
                                          caption: _o.rewardsButton(),
                                          classNames: Eo,
                                          onMouseEnter: () => n.setRewardLayerVisible(!0),
                                          onMouseLeave: () => n.setRewardLayerVisible(!1),
                                          onClick: () => n.goToRankRewardsPage(),
                                          soundHover: 'comp_7_rank_rewards_hover',
                                      }),
                                  ),
                              );
                    }),
                    po = 'ProgressionPage_base_fa',
                    ho = 'ProgressionPage_parallaxContainer_c4',
                    bo = 'ProgressionPage_contentWrapper_cf',
                    fo = 'ProgressionPage_content_4a',
                    vo = 'ProgressionPage_content__progression_c5',
                    Ao = 'ProgressionPage_footer_d1',
                    Co = R.strings.comp7.page.heading,
                    Fo = (0, q.Pi)(() => {
                        const e = Kr().model.qualificationModel.isActive.get(),
                            t = (0, Pe.useSpring)(Ee);
                        return u().createElement(
                            'div',
                            { className: po },
                            ee() && e && u().createElement(vs, { className: ho }),
                            u().createElement(ut, { className: K }, e ? Co.qualification() : Co.progression()),
                            u().createElement(Lr, null),
                            e
                                ? u().createElement('div', { className: bo }, u().createElement(go, { className: fo }))
                                : u().createElement(
                                      Pe.animated.div,
                                      { style: t, className: bo },
                                      u().createElement(Ii, {
                                          className: C()(fo, vo),
                                          staticContent: u().createElement(_s, { className: Ao }),
                                      }),
                                  ),
                        );
                    }),
                    Do = { context: 'model.progressionModel' },
                    Bo = oe()(
                        ({ observableModel: e }) => {
                            const t = {
                                    root: e.object(),
                                    qualification: e.primitives(['isActive'], 'qualificationModel'),
                                },
                                a = e.array('items'),
                                n = (0, ge.Om)(() => a.get().length),
                                r = (0, ge.Om)(
                                    (e) => {
                                        const t = fe(a.get(), e);
                                        if (!t) throw new Error(`rank rewards item with index ${e} was not found`);
                                        return {
                                            hasRewardsReceived: t.hasRewardsReceived,
                                            rank: t.rank,
                                            from: t.from,
                                            to: t.to,
                                        };
                                    },
                                    { equals: ne },
                                ),
                                s = (0, ge.Om)(
                                    (e) => {
                                        const t = fe(a.get(), e);
                                        if (!t) throw new Error(`rank rewards item with index ${e} was not found`);
                                        return Ce(t.rewards, (e) => Object.assign({}, e));
                                    },
                                    { equals: ne },
                                ),
                                u = (0, ge.Om)(
                                    (e) => {
                                        const t = fe(s(e), 0);
                                        if (!t)
                                            throw new Error(
                                                `rank rewards item with index ${e} has no any main reward at index: 0`,
                                            );
                                        return t;
                                    },
                                    { equals: ne },
                                ),
                                i = (0, ge.Om)((e) => [...Fe(s(e), 1)], { equals: ne }),
                                o = (0, ge.Om)((e) => {
                                    const t = fe(a.get(), e);
                                    if (!t) throw new Error(`item with index ${e} was not found`);
                                    const n = Ce(t.divisions, (e) => Object.assign({}, e));
                                    return Gr(n);
                                }),
                                l = (0, ge.Om)(
                                    () => {
                                        const e = Be(a.get(), (e) => !e.hasRewardsReceived);
                                        return {
                                            nextNotAchievedItemIndex: null != e ? e : n(),
                                            hasForceScroll: -1 !== t.root.get().initialItemIndex,
                                        };
                                    },
                                    { equals: mt },
                                );
                            return Object.assign({}, t, {
                                computes: {
                                    rankRewardsItemsLength: n,
                                    rankRewardsItem: r,
                                    mainReward: u,
                                    additionalRewards: i,
                                    additionalRewardsCount: (0, ge.Om)((e) => i(e).length),
                                    divisionsString: o,
                                    scrollingSettings: l,
                                },
                            });
                        },
                        ({ externalModel: e, model: t }) => {
                            const a = e.createCallback((e, t) => ({ rank: e, index: t }), 'onPreviewOpen');
                            return {
                                openComp7Shop: e.createCallbackNoArgs('onComp7ShopOpen'),
                                goToPreview: (0, re.aD)((e, n) => {
                                    const r = t.computes.rankRewardsItem(e).rank;
                                    a(r, n);
                                }),
                            };
                        },
                    ),
                    wo = Bo[0],
                    yo = Bo[1];
                var So = a(9887),
                    ko = a.n(So);
                const Ro = ['xl', 'lg', 'md', 'sm', 'xs'],
                    xo = (e) => e.includes('_') && ((e) => Ro.includes(e))(e.split('_').at(-1)),
                    No = [B.ExtraLarge, B.Large, B.Medium, B.Small, B.ExtraSmall],
                    Po = (e, t) =>
                        Object.keys(e).reduce((a, n) => {
                            if (n in a) return a;
                            if (xo(n)) {
                                const r = n.split('_').slice(0, -1).join('_');
                                if (r in a) return a;
                                const s = No.indexOf(t),
                                    u = (-1 !== s ? Ro.slice(s) : [])
                                        .map((e) => r + '_' + e)
                                        .find((t) => void 0 !== e[t]),
                                    i = u ? e[u] : void 0;
                                return (a[r] = void 0 !== i ? i : e[r]), a;
                            }
                            const r = e[n];
                            return (
                                void 0 === r ||
                                    ((e, t) => Ro.some((a) => void 0 !== t[`${e}_${a}`]))(n, e) ||
                                    (a[n] = r),
                                a
                            );
                        }, {}),
                    To = (e, t = Po) => {
                        const a = (
                            (e, t = Po) =>
                            (a) => {
                                const n = S().mediaSize,
                                    r = (0, s.useMemo)(() => t(a, n), [a, n]);
                                return u().createElement(e, r);
                            }
                        )(e, t);
                        return u().memo((t) =>
                            Object.keys(t).some((e) => xo(e) && void 0 !== t[e])
                                ? u().createElement(a, t)
                                : u().createElement(e, t),
                        );
                    },
                    Lo = {
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
                    Io = [
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
                function Mo() {
                    return (
                        (Mo =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Mo.apply(this, arguments)
                    );
                }
                Object.keys(ko());
                const Oo = {
                        XL: { mt: Lo.mt__XL, mr: Lo.mr__XL, mb: Lo.mb__XL, ml: Lo.ml__XL },
                        LG: { mt: Lo.mt__LG, mr: Lo.mr__LG, mb: Lo.mb__LG, ml: Lo.ml__LG },
                        MDp: { mt: Lo.mt__MDp, mr: Lo.mr__MDp, mb: Lo.mb__MDp, ml: Lo.ml__MDp },
                        MD: { mt: Lo.mt__MD, mr: Lo.mr__MD, mb: Lo.mb__MD, ml: Lo.ml__MD },
                        SMp: { mt: Lo.mt__SMp, mr: Lo.mr__SMp, mb: Lo.mb__SMp, ml: Lo.ml__SMp },
                        SM: { mt: Lo.mt__SM, mr: Lo.mr__SM, mb: Lo.mb__SM, ml: Lo.ml__SM },
                        XS: { mt: Lo.mt__XS, mr: Lo.mr__XS, mb: Lo.mb__XS, ml: Lo.ml__XS },
                    },
                    Ho = (Object.keys(Oo), ['mt', 'mr', 'mb', 'ml']),
                    Wo = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    $o = To((e) => {
                        let t = e.className,
                            a = e.width,
                            n = e.height,
                            r = e.m,
                            i = e.mt,
                            o = void 0 === i ? r : i,
                            l = e.mr,
                            c = void 0 === l ? r : l,
                            d = e.mb,
                            m = void 0 === d ? r : d,
                            _ = e.ml,
                            E = void 0 === _ ? r : _,
                            g = e.column,
                            p = e.row,
                            h = e.flexDirection,
                            b = void 0 === h ? (g ? 'column' : p && 'row') || void 0 : h,
                            f = e.flexStart,
                            v = e.center,
                            A = e.flexEnd,
                            F = e.spaceBetween,
                            D = e.spaceAround,
                            B = e.justifyContent,
                            w =
                                void 0 === B
                                    ? (f ? 'flex-start' : v && 'center') ||
                                      (A && 'flex-end') ||
                                      (F && 'space-between') ||
                                      (D && 'space-around') ||
                                      void 0
                                    : B,
                            y = e.alignItems,
                            S = void 0 === y ? (f ? 'flex-start' : v && 'center') || (A && 'flex-end') || void 0 : y,
                            k = e.alignSelf,
                            R = e.wrap,
                            x = e.flexWrap,
                            N = void 0 === x ? (R ? 'wrap' : void 0) : x,
                            P = e.grow,
                            T = e.shrink,
                            L = e.flex,
                            I = void 0 === L ? (P || T ? `${P ? 1 : 0} ${T ? 1 : 0} auto` : void 0) : L,
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
                            })(e, Io);
                        const W = (0, s.useMemo)(() => {
                                const e = { mt: o, mr: c, mb: m, ml: E },
                                    t = ((e) =>
                                        Ho.reduce((t, a) => {
                                            const n = e[a];
                                            return n && 'number' != typeof n ? t.concat(Oo[!0 === n ? 'MD' : n][a]) : t;
                                        }, []))(e),
                                    r = ((e) =>
                                        Ho.reduce((t, a) => {
                                            const n = e[a];
                                            return 'number' == typeof n && (t[Wo[a]] = n + 'rem'), t;
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, M, r, {
                                        width: void 0 !== a && 'number' == typeof a ? a + 'rem' : a,
                                        height: void 0 !== n && 'number' == typeof n ? n + 'rem' : n,
                                        flex: I,
                                        alignSelf: k,
                                        display: b || S ? 'flex' : void 0,
                                        flexDirection: b,
                                        flexWrap: N,
                                        justifyContent: w,
                                        alignItems: S,
                                    }),
                                    computedClassNames: t,
                                };
                            }, [a, n, o, c, m, E, M, I, k, b, N, w, S]),
                            $ = W.computedStyle,
                            U = W.computedClassNames;
                        return u().createElement('div', Mo({ className: C()(Lo.base, ...U, t), style: $ }, H), O);
                    });
                var Uo = a(3532),
                    zo = a.n(Uo);
                const Go = {
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
                    jo = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function qo() {
                    return (
                        (qo =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        qo.apply(this, arguments)
                    );
                }
                Object.keys(ko());
                const Vo = Object.keys(zo()),
                    Qo = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    Xo = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Yo = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Ko = {
                        XL: { mt: 'XL', mr: 'XL', mb: 'XL', ml: 'XL' },
                        LG: { mt: 'LG', mr: 'LG', mb: 'LG', ml: 'LG' },
                        MDp: { mt: 'MDp', mr: 'MDp', mb: 'MDp', ml: 'MDp' },
                        MD: { mt: 'MD', mr: 'MD', mb: 'MD', ml: 'MD' },
                        SMp: { mt: 'SMp', mr: 'SMp', mb: 'SMp', ml: 'SMp' },
                        SM: { mt: 'SM', mr: 'SM', mb: 'SM', ml: 'SM' },
                        XS: { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    },
                    Zo =
                        (Object.keys(Ko),
                        {
                            'heading-H144': { mt: 'XL', mr: 'LG', mb: 'LG', ml: 'LG' },
                            'heading-H73': { mt: 'LG', mr: 'MD', mb: 'MD', ml: 'MD' },
                            'heading-H56': Qo,
                            'heading-H36': Qo,
                            'heading-H28': Xo,
                            'heading-H24': Xo,
                            'heading-H24R': Xo,
                            'heading-H22': Xo,
                            'heading-H20R': Xo,
                            'heading-H18': Xo,
                            'heading-H15': Yo,
                            'heading-H14': Yo,
                            'paragraph-P24': Xo,
                            'paragraph-P18': Xo,
                            'paragraph-P16': Xo,
                            'paragraph-P14': Yo,
                            'paragraph-P12': Yo,
                            'paragraph-P10': Yo,
                        }),
                    Jo =
                        (Object.keys(Zo),
                        (e) =>
                            e
                                ? ((e) => Vo.includes(e))(e)
                                    ? { colorClassName: Go[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    el = To((e) => {
                        let t = e.text,
                            a = e.variant,
                            n = e.className,
                            r = e.color,
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
                            })(e, jo);
                        const f = (0, s.useMemo)(() => {
                                const e = Jo(r),
                                    t = e.colorClassName,
                                    a = e.colorStyle,
                                    n = void 0 === a ? {} : a;
                                return { computedStyle: Object.assign({}, p, n), colorClassName: t };
                            }, [p, r]),
                            v = f.computedStyle,
                            A = f.colorClassName;
                        return u().createElement(
                            $o,
                            qo(
                                {
                                    className: C()(Go.base, a && Go[a], A, n),
                                    style: v,
                                    mt: !0 === l ? Zo[a || 'paragraph-P16'].mt : l,
                                    mr: !0 === d ? Zo[a || 'paragraph-P16'].mr : d,
                                    mb: !0 === _ ? Zo[a || 'paragraph-P16'].mb : _,
                                    ml: !0 === g ? Zo[a || 'paragraph-P16'].ml : g,
                                },
                                b,
                            ),
                            void 0 !== h ? u().createElement(Kn, qo({}, h, { text: t })) : t,
                        );
                    });
                let tl, al, nl, rl, sl, ul, il;
                function ol() {
                    return (
                        (ol =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        ol.apply(this, arguments)
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
                        (e.CosmicLootboxCommon = 'cosmic_2024_2');
                })(tl || (tl = {})),
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
                    })(al || (al = {})),
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
                    })(nl || (nl = {})),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(rl || (rl = {})),
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
                    })(sl || (sl = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(ul || (ul = {})),
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
                    })(il || (il = {}));
                const ll = ({ children: e, tooltipArgs: t, className: a }) => {
                        if (!t) return e;
                        const n = u().createElement('div', { className: a }, e);
                        if (t.header || t.body) return u().createElement(Qe, t, n);
                        const r = t.contentId,
                            s = t.args,
                            i = null == s ? void 0 : s.contentId;
                        return r || i
                            ? u().createElement(Ge, ol({}, t, { contentId: r || i }), n)
                            : u().createElement(Br, t, n);
                    },
                    cl = [
                        tl.Items,
                        tl.Equipment,
                        tl.Xp,
                        tl.XpFactor,
                        tl.Blueprints,
                        tl.BlueprintsAny,
                        tl.Goodies,
                        tl.Berths,
                        tl.Slots,
                        tl.Tokens,
                        tl.CrewSkins,
                        tl.CrewBooks,
                        tl.Customizations,
                        tl.CreditsFactor,
                        tl.TankmenXp,
                        tl.TankmenXpFactor,
                        tl.FreeXpFactor,
                        tl.BattleToken,
                        tl.PremiumUniversal,
                        tl.NaturalCover,
                        tl.BpCoin,
                        tl.BattlePassSelectToken,
                        tl.BattlaPassFinalAchievement,
                        tl.BattleBadge,
                        tl.BonusX5,
                        tl.CrewBonusX3,
                        tl.NewYearFillers,
                        tl.NewYearInvoice,
                        tl.EpicSelectToken,
                        tl.Comp7TokenWeeklyReward,
                        tl.Comp7TokenCouponReward,
                        tl.BattleBoosterGift,
                        tl.CosmicLootboxCommon,
                        tl.CosmicLootboxSilver,
                    ],
                    dl = [tl.Gold, tl.Credits, tl.Crystal, tl.FreeXp],
                    ml = [tl.BattlePassPoints],
                    _l = [tl.PremiumPlus, tl.Premium],
                    El = ['engravings', 'backgrounds'],
                    gl = ['engraving', 'background'],
                    pl = (e, t = nl.Small) => {
                        const a = e.name,
                            n = e.type,
                            r = e.value,
                            s = e.icon,
                            u = e.item,
                            i = e.dogTagType,
                            o = ((e) => {
                                switch (e) {
                                    case nl.S600x450:
                                        return 'c_600x450';
                                    case nl.S400x300:
                                        return 'c_400x300';
                                    case nl.S296x222:
                                        return 'c_296x222';
                                    case nl.S232x174:
                                        return 'c_232x174';
                                    case nl.Big:
                                        return 'c_80x80';
                                    case nl.Small:
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
                                return ((e, t) => {
                                    switch (t) {
                                        case nl.Big:
                                            return e.iconBig.replace('..', 'img://gui');
                                        case nl.Small:
                                            return e.iconSmall.replace('..', 'img://gui');
                                        default:
                                            return `R.images.gui.maps.icons.quests.bonuses.${t}.${e.icon}`;
                                    }
                                })(e, t);
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
                            case 'dogTagComponents':
                                return ((e, t, a) => {
                                    const n = El[e];
                                    if (n) {
                                        const r = R.images.gui.maps.icons.dogtags.$dyn(t).$dyn(n),
                                            s = r.$dyn(a);
                                        return s ? `${s}` : `${r.$dyn(gl[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(i, t, s);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${o}.${s}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${o}.${s}`;
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
                                return `R.images.gui.maps.icons.collectionItems.${o}.${s}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${a}`;
                        }
                    },
                    hl = {
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
                    bl = ({
                        name: e,
                        image: t,
                        isPeriodic: a = !1,
                        size: n = nl.Big,
                        special: r,
                        value: s,
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
                                    case sl.BATTLE_BOOSTER:
                                    case sl.BATTLE_BOOSTER_REPLACE:
                                        return ul.BATTLE_BOOSTER;
                                }
                            })(r),
                            E = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case sl.BATTLE_BOOSTER:
                                        return il.BATTLE_BOOSTER;
                                    case sl.BATTLE_BOOSTER_REPLACE:
                                        return il.BATTLE_BOOSTER_REPLACE;
                                    case sl.BUILT_IN_EQUIPMENT:
                                        return il.BUILT_IN_EQUIPMENT;
                                    case sl.EQUIPMENT_PLUS:
                                        return il.EQUIPMENT_PLUS;
                                    case sl.EQUIPMENT_TROPHY_BASIC:
                                        return il.EQUIPMENT_TROPHY_BASIC;
                                    case sl.EQUIPMENT_TROPHY_UPGRADED:
                                        return il.EQUIPMENT_TROPHY_UPGRADED;
                                    case sl.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return il.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case sl.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return il.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case sl.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return il.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case sl.PROGRESSION_STYLE_UPGRADED_1:
                                        return il.PROGRESSION_STYLE_UPGRADED_1;
                                    case sl.PROGRESSION_STYLE_UPGRADED_2:
                                        return il.PROGRESSION_STYLE_UPGRADED_2;
                                    case sl.PROGRESSION_STYLE_UPGRADED_3:
                                        return il.PROGRESSION_STYLE_UPGRADED_3;
                                    case sl.PROGRESSION_STYLE_UPGRADED_4:
                                        return il.PROGRESSION_STYLE_UPGRADED_4;
                                }
                            })(r),
                            g = ((e, t) => {
                                if (void 0 === e) return null;
                                switch (t) {
                                    case rl.MULTI: {
                                        const t = Number(e);
                                        return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
                                    }
                                    case rl.CURRENCY:
                                    case rl.NUMBER:
                                        return u().createElement(It, { format: 'integral', value: Number(e) });
                                    case rl.PREMIUM_PLUS: {
                                        const t = Number(e);
                                        return isNaN(t) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(s, i);
                        return u().createElement(
                            'div',
                            { className: C()(hl.base, hl[`base__${n}`], l), style: o },
                            u().createElement(
                                ll,
                                { tooltipArgs: d, className: hl.tooltipWrapper },
                                u().createElement(
                                    u().Fragment,
                                    null,
                                    u().createElement(
                                        'div',
                                        { className: C()(hl.image, null == c ? void 0 : c.image) },
                                        _ &&
                                            u().createElement('div', {
                                                className: C()(hl.highlight, null == c ? void 0 : c.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${_}_highlight)`,
                                                },
                                            }),
                                        t &&
                                            u().createElement('div', {
                                                className: C()(hl.icon, null == c ? void 0 : c.rewardIcon),
                                                style: { backgroundImage: `url(${t})` },
                                            }),
                                        E &&
                                            u().createElement('div', {
                                                className: C()(hl.overlay, null == c ? void 0 : c.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${E}_overlay)`,
                                                },
                                            }),
                                    ),
                                    g &&
                                        u().createElement(
                                            'div',
                                            {
                                                className: C()(
                                                    hl.info,
                                                    hl[`info__${e}`],
                                                    i === rl.MULTI && hl.info__multi,
                                                    null == c ? void 0 : c.info,
                                                ),
                                            },
                                            g,
                                        ),
                                ),
                            ),
                            a &&
                                u().createElement(
                                    ll,
                                    { tooltipArgs: m },
                                    u().createElement('div', {
                                        className: C()(hl.timer, null == c ? void 0 : c.periodicIcon),
                                    }),
                                ),
                        );
                    },
                    fl = 'Rewards_base_26',
                    vl = 'Rewards_base__vertical_9f',
                    Al = 'Rewards_reward_7b',
                    Cl = 'Rewards_reward__vertical_c6';
                function Fl() {
                    return (
                        (Fl =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Fl.apply(this, arguments)
                    );
                }
                const Dl = u().memo(
                        ({
                            data: e,
                            size: t = nl.Big,
                            isVertical: a = !1,
                            count: n,
                            classMix: r,
                            rewardItemClassMix: i,
                            boxRewardTooltip: o,
                            boxRewardValue: l,
                        }) => {
                            const c = (0, s.useMemo)(
                                    () =>
                                        n && n < e.length ? `R.images.gui.maps.icons.quests.bonuses.${t}.default` : '',
                                    [n, e.length, t],
                                ),
                                d =
                                    l ||
                                    da(R.strings.tooltips.quests.awards.additional.bottom(), {
                                        count: e.length - (n || 0),
                                    }),
                                m = C()(fl, a && vl, r),
                                _ = C()(Al, a && Cl, i);
                            return u().createElement(
                                'div',
                                { className: m },
                                c
                                    ? u().createElement(
                                          u().Fragment,
                                          null,
                                          e
                                              .slice(0, n)
                                              .map((e, a) =>
                                                  u().createElement(
                                                      'div',
                                                      { key: a, className: _ },
                                                      u().createElement(bl, Fl({ size: t }, e)),
                                                  ),
                                              ),
                                          u().createElement(
                                              'div',
                                              { className: _ },
                                              u().createElement(bl, {
                                                  name: 'more',
                                                  image: c,
                                                  size: t,
                                                  value: d,
                                                  tooltipArgs: o,
                                              }),
                                          ),
                                      )
                                    : e.map((e, a) =>
                                          u().createElement(
                                              'div',
                                              { key: a, className: _ },
                                              u().createElement(bl, Fl({ size: t }, e)),
                                          ),
                                      ),
                            );
                        },
                    ),
                    Bl = ['overlayType'];
                function wl() {
                    return (
                        (wl =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        wl.apply(this, arguments)
                    );
                }
                const yl = (e, t) => {
                        if ('dogTagComponents' === e.name) {
                            if (t === nl.Big) return nl.S80x80;
                            if (t === nl.Small) return nl.S48x48;
                        }
                        return t;
                    },
                    Sl = (e) => ('vehicles_rent' === e.name ? e.label : e.value),
                    kl = ({ reward: e, rank: t, index: a }) => {
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
                    Rl = ({ reward: e, size: t, rank: a, index: n }) => {
                        const r = e.overlayType,
                            s = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, Bl),
                            u = yl(e, t);
                        return Object.assign({}, s, {
                            size: u,
                            image: pl(e, u),
                            value: Sl(e),
                            valueType:
                                ((i = e.name),
                                cl.includes(i)
                                    ? rl.MULTI
                                    : dl.includes(i)
                                      ? rl.CURRENCY
                                      : ml.includes(i)
                                        ? rl.NUMBER
                                        : _l.includes(i)
                                          ? rl.PREMIUM_PLUS
                                          : rl.STRING),
                            special: r,
                            tooltipArgs: kl({ reward: e, rank: a, index: n }),
                            periodicIconTooltipArgs: {
                                header: R.strings.tooltips.periodicReward.header(),
                                body: R.strings.tooltips.periodicReward.comp7.body(),
                            },
                        });
                        var i;
                    },
                    xl = ({ rewards: e, size: t, rank: a, index: n }) =>
                        Ce(e, (e) => Rl({ reward: e, size: t, rank: a, index: n })),
                    Nl = ({ reward: e, size: t }) => {
                        const a = wl({}, e),
                            n = yl(e, t);
                        return Object.assign({}, a, {
                            size: n,
                            image: `R.images.comp7.gui.maps.icons.comp7.fakeRewards.${e.icon}${t === nl.Small ? '' : `_${t}`}`,
                        });
                    },
                    Pl = (e, t) => (e > t ? t - 1 : void 0),
                    Tl = 'AdditionalRewards_reward_16',
                    Ll = 'AdditionalRewards_vehiclesRentBase_d4',
                    Il = 'AdditionalRewards_vehiclesRentLabel_3e',
                    Ml = nl.Small,
                    Ol = (0, q.Pi)(({ rank: e, itemIndex: t, visibleRewardsCount: a, className: n }) => {
                        const r = yo().model,
                            s = r.computes.additionalRewards(t),
                            i = r.computes.additionalRewardsCount(t),
                            o = Ce(s, (t) => {
                                const a = 'vehicles_rent' === t.name;
                                return Object.assign({}, Rl({ reward: t, size: Ml, rank: e }), {
                                    className: C()(a && Ll),
                                    classNames: { info: C()(a && Il) },
                                });
                            });
                        return u().createElement(Dl, {
                            data: o,
                            size: Ml,
                            count: Pl(i, a),
                            rewardItemClassMix: Tl,
                            boxRewardTooltip: {
                                contentId: R.views.lobby.tooltips.AdditionalRewardsTooltip('resId'),
                                args: { fromIndex: a, rank: e },
                            },
                            classMix: n,
                        });
                    });
                let Hl;
                !(function (e) {
                    (e[(e.NotStarted = 0)] = 'NotStarted'),
                        (e[(e.Active = 1)] = 'Active'),
                        (e[(e.OffSeason = 3)] = 'OffSeason'),
                        (e[(e.Finished = 4)] = 'Finished');
                })(Hl || (Hl = {}));
                const Wl = {
                        base: 'Heading_base_99',
                        tooltipArea: 'Heading_tooltipArea_c9',
                        rankEmblem__future: 'Heading_rankEmblem__future_6d',
                        lock: 'Heading_lock_a8',
                        description: 'Heading_description_6f',
                        rankName: 'Heading_rankName_05',
                        rankStatus: 'Heading_rankStatus_63',
                    },
                    $l = (0, q.Pi)(
                        ({
                            rank: e,
                            from: t,
                            to: a,
                            topPercentage: n,
                            divisions: r,
                            rankEmblemSize: s,
                            rankState: i,
                        }) => {
                            const o = yo().model,
                                l = de().model,
                                c = o.qualification.isActive.get(),
                                d = Ks(i, e, c),
                                m = i === jr.Current && !c;
                            return u().createElement(
                                'div',
                                { className: Wl.base },
                                u().createElement(
                                    $n,
                                    {
                                        rank: e,
                                        from: t,
                                        to: a,
                                        topPercentage: n,
                                        divisions: r,
                                        className: Wl.tooltipArea,
                                        ignoreShowDelay: !0,
                                    },
                                    u().createElement(Xs, {
                                        rank: e,
                                        size: s,
                                        type: Vs.Static,
                                        state: d,
                                        classNames: { rankEmblem: Wl[`rankEmblem__${i}`] },
                                    }),
                                    i === jr.Future && u().createElement('div', { className: Wl.lock }),
                                ),
                                u().createElement(
                                    'div',
                                    { className: Wl.description },
                                    u().createElement('div', { className: Wl.rankName }, Na(e)),
                                    m &&
                                        u().createElement(
                                            'div',
                                            { className: Wl.rankStatus },
                                            ((e) => {
                                                switch (e) {
                                                    case Hl.OffSeason:
                                                    case Hl.Finished:
                                                        return R.strings.comp7.rank.achieved();
                                                    case Hl.Active:
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
                    Ul = {
                        base: 'Preview_base_1f',
                        base__hovered: 'Preview_base__hovered_ee',
                        icon: 'Preview_icon_f3',
                        icon__small: 'Preview_icon__small_a1',
                        icon__normal: 'Preview_icon__normal_5c',
                        base__mouseDown: 'Preview_base__mouseDown_d0',
                        label: 'Preview_label_2e',
                        base__visibleLabel: 'Preview_base__visibleLabel_92',
                    },
                    zl = [
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
                function Gl() {
                    return (
                        (Gl =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Gl.apply(this, arguments)
                    );
                }
                let jl;
                !(function (e) {
                    (e.SMALL = 'small'), (e.NORMAL = 'normal');
                })(jl || (jl = {}));
                const ql = (0, s.memo)((e) => {
                        let t = e.label,
                            a = e.isVisibleLabel,
                            n = void 0 !== a && a,
                            r = e.autofocus,
                            i = void 0 !== r && r,
                            o = e.soundHover,
                            l = void 0 === o ? 'highlight' : o,
                            c = e.soundClick,
                            d = void 0 === c ? 'play' : c,
                            m = e.size,
                            _ = void 0 === m ? jl.NORMAL : m,
                            E = e.onClick,
                            g = e.onMouseEnter,
                            p = e.onMouseLeave,
                            h = e.onMouseDown,
                            b = e.onMouseUp,
                            f = e.onFocus,
                            v = e.onBlur,
                            A = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, zl);
                        const F = (0, s.useState)(!1),
                            D = F[0],
                            B = F[1],
                            w = (0, s.useState)(!1),
                            y = w[0],
                            S = w[1],
                            k = (0, s.useState)(i),
                            R = k[0],
                            x = k[1],
                            N = (0, s.useRef)(null),
                            P = (0, s.useCallback)(() => {
                                N.current && (N.current.focus(), x(!0));
                            }, []),
                            T = (0, s.useCallback)(
                                (e) => {
                                    R && null !== N.current && !N.current.contains(e.target) && x(!1);
                                },
                                [R],
                            );
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mousedown', T),
                                () => {
                                    document.removeEventListener('mousedown', T);
                                }
                            ),
                            [T],
                        ),
                            (0, s.useEffect)(() => {
                                x(i);
                            }, [i]);
                        const L = (0, s.useCallback)(
                                (e) => {
                                    E && E(e);
                                },
                                [E],
                            ),
                            I = (0, s.useCallback)(
                                (e) => {
                                    B(!0), h && h(e), d && W(d), i && P();
                                },
                                [i, h, P, d],
                            ),
                            M = (0, s.useCallback)(
                                (e) => {
                                    B(!1), b && b(e);
                                },
                                [b],
                            ),
                            O = (0, s.useCallback)(
                                (e) => {
                                    g && g(e), l && W(l), S(!0);
                                },
                                [g, l],
                            ),
                            H = (0, s.useCallback)(
                                (e) => {
                                    B(!1), S(!1), p && p(e);
                                },
                                [p],
                            ),
                            $ = (0, s.useCallback)(
                                (e) => {
                                    x(!0), f && f(e);
                                },
                                [f],
                            ),
                            U = (0, s.useCallback)(
                                (e) => {
                                    x(!1), v && v(e);
                                },
                                [v],
                            ),
                            z = C()(
                                Ul.base,
                                n && Ul.base__visibleLabel,
                                D && Ul.base__mouseDown,
                                y && Ul.base__hovered,
                                R && Ul.base__focused,
                            ),
                            G = C()(Ul.icon, Ul[`icon__${_}`]);
                        return u().createElement(
                            'div',
                            Gl(
                                {
                                    ref: N,
                                    className: z,
                                    onClick: L,
                                    onMouseEnter: O,
                                    onMouseLeave: H,
                                    onMouseDown: I,
                                    onMouseUp: M,
                                    onFocus: $,
                                    onBlur: U,
                                },
                                A,
                            ),
                            u().createElement('div', { className: G }),
                            u().createElement('div', { className: Ul.label }, t),
                        );
                    }),
                    Vl = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    Ql = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const Xl = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    Yl = (e) =>
                        Xl
                            ? `${e}`
                            : (function (e) {
                                  let t = '';
                                  for (let a = Ql.length - 1; a >= 0; a--)
                                      for (; e >= Ql[a]; ) (t += Vl[a]), (e -= Ql[a]);
                                  return t;
                              })(e),
                    Kl = 'MainReward_base_32',
                    Zl = 'MainReward_imageContainer_37',
                    Jl = 'MainReward_highlightContainer_cf',
                    ec = 'MainReward_highlight_06',
                    tc = 'MainReward_preview_7a',
                    ac = 'MainReward_info_58',
                    nc = 'MainReward_title_6d',
                    rc = 'MainReward_subTitle_e2',
                    sc = (0, q.Pi)(
                        ({ index: e, rank: t, size: a, hasHighlight: n, onPreviewClick: r, className: s }) => {
                            const i = yo().model.computes.mainReward(e);
                            return u().createElement(
                                'div',
                                { className: C()(Kl, s) },
                                u().createElement(
                                    'div',
                                    { className: Zl },
                                    n &&
                                        u().createElement(
                                            'div',
                                            { className: Jl },
                                            u().createElement('div', { className: ec }),
                                        ),
                                    u().createElement(bl, Rl({ reward: i, size: a, rank: t })),
                                    ((e) => 'styleProgress' === e.name)(i) &&
                                        u().createElement(
                                            'div',
                                            { className: tc },
                                            u().createElement(ql, {
                                                label: R.strings.comp7.rewards.preview(),
                                                onClick: r,
                                            }),
                                        ),
                                ),
                                u().createElement(
                                    'div',
                                    { className: ac },
                                    u().createElement('div', { className: nc }, i.label),
                                    u().createElement(ar, {
                                        text: String(R.strings.comp7.rewards.subtitle.$dyn(i.name)),
                                        binding: { vehicleLevel: Yl(10) },
                                        classMix: rc,
                                    }),
                                ),
                            );
                        },
                    ),
                    uc = 'RankRewardsItem_base_a7',
                    ic = 'RankRewardsItem_mainRewardContainer_e0',
                    oc = 'RankRewardsItem_rewardsContainer_69',
                    lc = 'RankRewardsItem_rewardsContainer__qualification_b0',
                    cc = 'RankRewardsItem_statusContainer_bf',
                    dc = 'RankRewardsItem_statusContainer__hidden_c8',
                    mc = 'RankRewardsItem_icon_7d',
                    _c = (0, q.Pi)(
                        ({
                            itemIndex: e,
                            itemWidth: t,
                            rankState: a,
                            mainRewardSize: n,
                            hasHighlight: r,
                            visibleRewardsCount: s,
                            rankEmblemSize: i,
                            isQualification: o,
                            onPreviewClick: l,
                        }) => {
                            const c = yo().model,
                                d = c.root.get().topPercentage,
                                m = c.computes.rankRewardsItem(e),
                                _ = m.rank,
                                E = m.from,
                                g = m.to,
                                p = m.hasRewardsReceived,
                                h = c.computes.divisionsString(e);
                            return u().createElement(
                                'div',
                                { className: uc, style: { '--itemWidth': `${t}rem` } },
                                u().createElement($l, {
                                    rank: _,
                                    from: E,
                                    to: g,
                                    divisions: h,
                                    topPercentage: d,
                                    rankEmblemSize: i,
                                    rankState: a,
                                }),
                                u().createElement(sc, {
                                    index: e,
                                    rank: _,
                                    size: n,
                                    hasHighlight: r,
                                    onPreviewClick: l,
                                    className: ic,
                                }),
                                u().createElement(
                                    'div',
                                    { className: C()(oc, o && lc) },
                                    u().createElement(Ol, { itemIndex: e, visibleRewardsCount: s, rank: _ }),
                                ),
                                u().createElement(
                                    'div',
                                    { className: C()(cc, !p && dc) },
                                    u().createElement('div', { className: mc }),
                                    R.strings.comp7.rewards.status.achieved(),
                                ),
                            );
                        },
                    ),
                    Ec = (e) => (e >= B.Large ? ya.x110 : e >= B.Medium ? ya.x64 : ya.x48),
                    gc = (e) =>
                        e >= B.ExtraLarge
                            ? nl.S600x450
                            : e >= B.Large
                              ? nl.S400x300
                              : e >= B.Medium
                                ? nl.S296x222
                                : nl.S232x174,
                    pc = (e) => (e >= w.Medium ? 5 : 4),
                    hc = 'RankRewardsPage_base_fd',
                    bc = 'RankRewardsPage_content_3f',
                    fc = 'RankRewardsPage_scrollContainer_f2',
                    vc = 'RankRewardsPage_areaContainer_9e',
                    Ac = 'RankRewardsPage_areaWrapper_fb',
                    Cc = 'RankRewardsPage_bar_59',
                    Fc = 'RankRewardsPage_qualificationFooter_71',
                    Dc = 'RankRewardsPage_shopButtonContainer_90',
                    Bc = 'RankRewardsPage_shopButton_4e',
                    wc = 'RankRewardsPage_comp7ShopButtonBackground_cc',
                    yc = 'RankRewardsPage_shopButtonIcon_51',
                    Sc = { duration: 700, easing: (e) => Math.pow(e, 4) },
                    kc = R.strings.comp7.rewards,
                    Rc = (0, q.Pi)(() => {
                        const e = S(),
                            t = e.mediaSize,
                            a = e.mediaWidth,
                            n = yo(),
                            r = n.model,
                            i = n.controls,
                            o = r.root.get(),
                            l = o.currentItemIndex,
                            c = o.initialItemIndex,
                            d = r.qualification.isActive.get(),
                            m = r.computes.rankRewardsItemsLength(),
                            _ = r.computes.scrollingSettings(),
                            E = _.nextNotAchievedItemIndex,
                            g = _.hasForceScroll,
                            p = (0, s.useState)(g ? 'idle' : 'initial'),
                            h = p[0],
                            b = p[1],
                            f = (0, s.useState)(g ? c : E),
                            v = f[0],
                            A = f[1],
                            C = ((e) =>
                                e >= B.ExtraLarge
                                    ? 600
                                    : e >= B.Large
                                      ? 460
                                      : e >= B.Medium
                                        ? 400
                                        : e >= B.Small
                                          ? 340
                                          : 300)(t),
                            F = m * C,
                            D = Gs(C),
                            w = D.scrollPosition,
                            y = D.clampPosition,
                            k = D.contentRef,
                            x = (function () {
                                const e = (0, s.useRef)(!1);
                                return (
                                    (0, s.useEffect)(
                                        () => () => {
                                            e.current = !0;
                                        },
                                        [],
                                    ),
                                    e
                                );
                            })();
                        (0, s.useLayoutEffect)(() => {
                            'idle' === h
                                ? w.start({ scrollPosition: viewEnv.remToPx(c * C), immediate: !0 })
                                : 'initial' === h && w.start({ scrollPosition: viewEnv.remToPx(F), immediate: !0 });
                        }, []),
                            (0, s.useEffect)(
                                () =>
                                    Ne(() => {
                                        const e = k.current;
                                        if (e && 'initial' === h) {
                                            const t = y(e, viewEnv.remToPx(E * C - C)),
                                                a = y(e, viewEnv.remToPx(F));
                                            if (t === a) return void b('idle');
                                            w.start({
                                                scrollPosition: t,
                                                from: { scrollPosition: a },
                                                config: Sc,
                                                onStart: () => {
                                                    b('scrolling');
                                                },
                                                onRest: () => {
                                                    x.current || b('idle');
                                                },
                                            });
                                        }
                                    }),
                                [y, k, x, C, E, h, F, w],
                            );
                        const N = (e) => 'idle' === h && e === E && !d,
                            P = (0, Pe.useSpring)(Ee),
                            T = { lineHeight: 1.5 },
                            L = Cs(C) - C;
                        return u().createElement(
                            'div',
                            { className: hc },
                            u().createElement(ut, { className: K }, R.strings.comp7.page.heading.rankRewards()),
                            u().createElement(Lr, null),
                            u().createElement(
                                Pe.animated.div,
                                { className: bc, style: P },
                                u().createElement(
                                    zs,
                                    {
                                        api: D,
                                        stuckIndex: v,
                                        itemWidth: C,
                                        itemsOffset: L,
                                        onStick: A,
                                        className: fc,
                                        areaClassNames: { base: vc, wrapper: Ac },
                                        barClassNames: { base: Cc },
                                    },
                                    ua(m, (e) =>
                                        u().createElement(_c, {
                                            key: e,
                                            itemIndex: e,
                                            visibleRewardsCount: pc(a),
                                            rankState: Vr(e, l, d),
                                            rankEmblemSize: Ec(t),
                                            mainRewardSize: gc(t),
                                            itemWidth: C,
                                            hasHighlight: N(e),
                                            isQualification: d,
                                            onPreviewClick: () => i.goToPreview(e, v),
                                        }),
                                    ),
                                ),
                            ),
                            !d &&
                                u().createElement(
                                    'div',
                                    { className: Dc },
                                    u().createElement(
                                        dt,
                                        { type: ot.ghost, size: lt.medium, mixClass: Bc, onClick: i.openComp7Shop },
                                        u().createElement('div', { className: wc }),
                                        u().createElement('div', { className: yc }),
                                        u().createElement(el, {
                                            text: kc.shopButton(),
                                            color: 'WHITE',
                                            variant: 'paragraph-P14',
                                            variant_md: 'paragraph-P18',
                                            style: { fontWeight: 700 },
                                        }),
                                    ),
                                ),
                            d &&
                                u().createElement(
                                    'div',
                                    { className: Fc },
                                    u().createElement(el, {
                                        text: kc.qualification.condition.first(),
                                        color: 'WHITE_REAL',
                                        variant: 'paragraph-P14',
                                        variant_md: 'paragraph-P16',
                                        style: T,
                                    }),
                                    u().createElement(el, {
                                        text: kc.qualification.condition.second(),
                                        color: 'WHITE_REAL',
                                        variant: 'paragraph-P14',
                                        variant_md: 'paragraph-P16',
                                        style: T,
                                    }),
                                ),
                        );
                    }),
                    xc = { context: 'model.rankRewardsModel' };
                let Nc;
                !(function (e) {
                    (e.LockedByNoXVehicles = 'lockedByNoXVehicles'),
                        (e.LockedByInactiveSeason = 'lockedByInactiveSeason'),
                        (e.LockedByPreviousQuest = 'lockedByPreviousQuest'),
                        (e.Active = 'active'),
                        (e.Completed = 'completed');
                })(Nc || (Nc = {}));
                const Pc = [Nc.LockedByNoXVehicles, Nc.LockedByInactiveSeason, Nc.LockedByPreviousQuest];
                let Tc;
                !(function (e) {
                    (e[(e.Scrolling = 0)] = 'Scrolling'),
                        (e[(e.ProgressChange = 1)] = 'ProgressChange'),
                        (e[(e.HighlightCard = 2)] = 'HighlightCard'),
                        (e[(e.ChangeCompleted = 3)] = 'ChangeCompleted'),
                        (e[(e.ProgressFinished = 4)] = 'ProgressFinished'),
                        (e[(e.ProgressAlreadyFinished = 5)] = 'ProgressAlreadyFinished');
                })(Tc || (Tc = {}));
                const Lc = 2140,
                    Ic = 1500,
                    Mc = 1264,
                    Oc = 1104,
                    Hc = 804,
                    Wc = 187,
                    $c = 158,
                    Uc = oe()(
                        ({ observableModel: e }) => {
                            const t = Object.assign(
                                    {
                                        root: e.object(),
                                        questCards: e.array('questCards'),
                                        progressPoints: e.array('progressPoints'),
                                    },
                                    e.primitives(['currentTokenValue', 'previousTokenValue']),
                                    { progressAnimationState: re.LO.box(Tc.Scrolling) },
                                ),
                                a = (0, ge.Om)(
                                    (e) => {
                                        const a = fe(t.questCards.get(), e);
                                        if (!a) throw new Error(`Unexpected card index: ${e}`);
                                        return Object.assign({}, a);
                                    },
                                    { equals: ne },
                                ),
                                n = (0, ge.Om)(
                                    (e, t) => {
                                        const n = a(e).rewards;
                                        return xl({ rewards: n, size: t });
                                    },
                                    { equals: ne },
                                ),
                                r = (0, ge.Om)(() =>
                                    (function (e, t) {
                                        if (Array.isArray(e)) return e.every(t);
                                        for (let a = 0; a < e.length; a++) if (!t(ve(e, a), a, e)) return !1;
                                        return !0;
                                    })(t.questCards.get(), (e) => e.state === Nc.Completed),
                                ),
                                s = (0, ge.Om)((e) => Pc.includes(a(e).state)),
                                u = (0, ge.Om)(() => t.questCards.get().length),
                                i = (0, ge.Om)(() => 5 >= u(), { equals: ne }),
                                o = (0, ge.Om)(() => (r() ? Nc.Completed : Nc.Active), { equals: ne }),
                                l = (0, ge.Om)(() => t.currentTokenValue.get(), { equals: ne }),
                                c = (0, ge.Om)(() => t.previousTokenValue.get(), { equals: ne }),
                                d = (0, ge.Om)(
                                    (e) => ({
                                        wasProgressionVisited: c() === l(),
                                        isRecentlyCompletedLevel: c() <= e && e <= l(),
                                        isPrevLevel: e <= c(),
                                    }),
                                    { equals: ne },
                                ),
                                m = (0, ge.Om)(
                                    () => {
                                        const e = t.currentTokenValue.get(),
                                            a = t.progressPoints.get();
                                        return Ce(a, ({ rewards: t }, n) => ({
                                            level: n + 1,
                                            isCompleted: n < e,
                                            isActive: n === e,
                                            isLast: n === a.length - 1,
                                            rewards: t,
                                        }));
                                    },
                                    { equals: ne },
                                ),
                                _ = (0, ge.Om)(
                                    () => {
                                        const e = 1 * t.progressPoints.get().length;
                                        return t.currentTokenValue.get() >= e;
                                    },
                                    { equals: ne },
                                ),
                                E = (0, ge.Om)(() => _() && t.currentTokenValue.get() === t.previousTokenValue.get(), {
                                    equals: ne,
                                }),
                                g = (0, ge.Om)(
                                    () => {
                                        var e;
                                        const a = t.progressPoints.get(),
                                            n = fe(a, a.length - 1),
                                            r = null != (e = null == n ? void 0 : n.count) ? e : 0;
                                        return t.currentTokenValue.get() >= r;
                                    },
                                    { equals: ne },
                                ),
                                p = (0, ge.Om)(
                                    () => {
                                        var e;
                                        return null != (e = Be(t.questCards.get(), (e) => e.state === Nc.Active))
                                            ? e
                                            : 0;
                                    },
                                    { equals: ne },
                                ),
                                h = (0, ge.Om)(
                                    (e, t, a, n) => {
                                        if (t && t.length) {
                                            const r = t.length * a + (t.length - 1) * n,
                                                s = (e, t) => (e >= t ? t : e);
                                            switch (!0) {
                                                case e >= B.ExtraLarge:
                                                    return s(r, Lc);
                                                case e >= B.Large:
                                                    return s(r, Ic);
                                                case e >= B.Medium:
                                                    return s(r, Mc);
                                                case e >= B.Small:
                                                    return s(r, Oc);
                                                default:
                                                    return s(r, Hc);
                                            }
                                        }
                                        return 0;
                                    },
                                    { equals: ne },
                                );
                            return Object.assign({}, t, {
                                computes: {
                                    questCardsLength: u,
                                    questCard: a,
                                    questCards: t.questCards,
                                    questRewards: n,
                                    isQuestLocked: s,
                                    areDefaultNumberQuests: i,
                                    battleTasksStatus: o,
                                    isAllQuestsCompleted: r,
                                    levels: m,
                                    currentLevel: l,
                                    levelStatus: d,
                                    isProgressionCompleted: _,
                                    wasProgressionCompletedBeforeStart: E,
                                    initialItemScrollIndex: p,
                                    getScrollContainerMaxWidth: h,
                                    isDoneProgression: g,
                                },
                            });
                        },
                        ({ externalModel: e, model: t }) => {
                            const a = (function (e) {
                                const t = {};
                                for (const a in e)
                                    if (Object.prototype.hasOwnProperty.call(e, a)) {
                                        const n = e[a];
                                        t[a] = (0, re.aD)(n);
                                    }
                                return t;
                            })({
                                finishScrolling: () => t.progressAnimationState.set(Tc.ProgressChange),
                                finishProgressionChange: () => t.progressAnimationState.set(Tc.HighlightCard),
                                finishHighlightCard: () => t.progressAnimationState.set(Tc.ChangeCompleted),
                                completeProgression: (e) =>
                                    t.progressAnimationState.set(e ? Tc.ProgressAlreadyFinished : Tc.ProgressFinished),
                            });
                            return Object.assign({}, a, {
                                animationStart: e.createCallbackNoArgs('onAnimationStart'),
                                animationEnd: e.createCallbackNoArgs('onAnimationEnd'),
                            });
                        },
                    ),
                    zc = Uc[0],
                    Gc = Uc[1],
                    jc = {
                        base: 'Prompt_base_74',
                        defaultText: 'Prompt_defaultText_05',
                        defaultText__done: 'Prompt_defaultText__done_b0',
                    },
                    qc = R.strings.comp7.weeklyQuests.tokenProgress.description,
                    Vc = (0, q.Pi)(({ className: e }) => {
                        const t = Gc().model.computes.isDoneProgression();
                        return u().createElement(
                            'div',
                            { className: C()(jc.base, t && jc.base__done, e) },
                            t
                                ? u().createElement(el, {
                                      text: qc.done(),
                                      variant: 'paragraph-P14',
                                      className: jc.defaultText__done,
                                  })
                                : u().createElement(el, {
                                      text: qc.normal(),
                                      variant: 'paragraph-P14',
                                      className: jc.defaultText,
                                  }),
                        );
                    }),
                    Qc = { Vertical: n, Horizontal: r };
                'undefined' != typeof Element &&
                    (Element.prototype.matches ||
                        Element.prototype.webkitMatchesSelector ||
                        Element.prototype.mozMatchesSelector ||
                        Element.prototype.msMatchesSelector);
                'undefined' != typeof document && document.documentElement.style,
                    'undefined' != typeof window &&
                        ('ontouchstart' in window || (window.DocumentTouch && (document, window.DocumentTouch))),
                    'undefined' != typeof navigator && navigator.msMaxTouchPoints,
                    'undefined' != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent);
                const Xc = {
                        base: 'LevelCard_base_cd',
                        bgCompleted: 'LevelCard_bgCompleted_e8',
                        bgCompleted__completed: 'LevelCard_bgCompleted__completed_53',
                        bgCompleted__fast: 'LevelCard_bgCompleted__fast_2a',
                        completedIconContainer: 'LevelCard_completedIconContainer_28',
                        completedIconContainer__completed: 'LevelCard_completedIconContainer__completed_47',
                        completedIconContainer__prevLevel: 'LevelCard_completedIconContainer__prevLevel_05',
                        completedIcon: 'LevelCard_completedIcon_40',
                        completedIconGlow: 'LevelCard_completedIconGlow_27',
                        border: 'LevelCard_border_b4',
                        border__right: 'LevelCard_border__right_c1',
                    },
                    Yc = 'LevelLabel_base_10',
                    Kc = 'LevelLabel_activeGlow_6d',
                    Zc = 'LevelLabel_activeGlow__completed_b9',
                    Jc = 'LevelLabel_level_4c',
                    ed = 'LevelLabel_level__completed_c4',
                    td = 'LevelLabel_level__active_85',
                    ad = 'LevelLabel_tokenIcon_67',
                    nd = 'LevelLabel_tokenIcon__active_7a',
                    rd = 'LevelLabel_levelCurrent_ce',
                    sd = 'LevelLabel_levelCurrent__completed_97',
                    ud = R.strings.tooltips.awardItem.comp7TokenWeeklyReward,
                    id = ({ level: e, isActive: t, isCompleted: a }) => {
                        const n = C()(Jc, a && ed, t && td);
                        return u().createElement(
                            Qe,
                            { header: ud.header(), body: ud.body() },
                            u().createElement(
                                'div',
                                { className: Yc },
                                u().createElement('div', { className: C()(Kc, t && Zc) }),
                                t && u().createElement('div', { className: C()(rd, t && sd) }, e),
                                !t && u().createElement('div', { className: n }, e),
                                u().createElement('div', { className: C()(ad, { [nd]: t }) }),
                            ),
                        );
                    },
                    od = 'prevLevel',
                    ld = 'completed',
                    cd = 'inProgress',
                    dd = (e, t, a) => (e ? ld : t ? cd : a),
                    md = (0, q.Pi)(({ level: e, isActive: t, isCompleted: a, isLast: n }) => {
                        const r = (0, s.useState)(),
                            i = r[0],
                            o = r[1],
                            l = Gc().model,
                            c = (0, s.useRef)(null),
                            d = l.computes.levelStatus(e),
                            m = d.wasProgressionVisited,
                            _ = d.isRecentlyCompletedLevel,
                            E = d.isPrevLevel;
                        (0, s.useEffect)(() => {
                            a && !m && _ && o(od);
                        }, [a, m, _]);
                        const g = (0, s.useCallback)(() => {
                            W('pr_progress_tick');
                        }, []);
                        return (
                            (0, s.useEffect)(() => {
                                const e = c.current;
                                return Ne(() => {
                                    if (e)
                                        return (
                                            e.addEventListener('transitionstart', g),
                                            () => {
                                                e.removeEventListener('transitionstart', g);
                                            }
                                        );
                                });
                            }, [c, g]),
                            u().createElement(
                                'div',
                                { className: Xc.base },
                                u().createElement('div', {
                                    className: C()(Xc.bgCompleted, (t || a) && Xc.bgCompleted__completed),
                                    ref: c,
                                }),
                                u().createElement(
                                    'div',
                                    {
                                        className: C()(
                                            Xc.completedIconContainer,
                                            Xc[`completedIconContainer__${dd(E, !a, i)}`],
                                        ),
                                    },
                                    u().createElement('div', { className: Xc.completedIconGlow }),
                                    u().createElement('div', { className: Xc.completedIcon }),
                                ),
                                u().createElement(id, { level: e, isCompleted: a, isActive: t }),
                                u().createElement('div', { className: Xc.border }),
                                n && u().createElement('div', { className: C()(Xc.border, Xc.border__right) }),
                            )
                        );
                    }),
                    _d = 'LevelCards_base_b9';
                function Ed() {
                    return (
                        (Ed =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Ed.apply(this, arguments)
                    );
                }
                const gd = (0, q.Pi)(
                        ({ levelRef: e }) => {
                            const t = Gc().model.computes.levels();
                            return u().createElement(
                                'div',
                                { className: _d, ref: e },
                                t.map((e) => u().createElement(md, Ed({ key: e.level }, e))),
                            );
                        },
                        { forwardRef: !0 },
                    ),
                    pd = {
                        base: 'RewardCard_base_1f',
                        base__mediaLarge: 'RewardCard_base__mediaLarge_1a',
                        base__mediaExtraExtraLarge: 'RewardCard_base__mediaExtraExtraLarge_c5',
                        activeBlock: 'RewardCard_activeBlock_0f',
                        activeBlock__completed: 'RewardCard_activeBlock__completed_7c',
                        activeBlock__fast: 'RewardCard_activeBlock__fast_1a',
                        bgCompleted: 'RewardCard_bgCompleted_3c',
                        bgCompleted__completed: 'RewardCard_bgCompleted__completed_c9',
                        bgCompleted__fast: 'RewardCard_bgCompleted__fast_93',
                        border: 'RewardCard_border_ab',
                        border__right: 'RewardCard_border__right_55',
                    },
                    hd = 'Rewards_base_76',
                    bd = 'Rewards_base__completed_f5',
                    fd = 'Rewards_base__wide_f7',
                    vd = 'Rewards_reward_24';
                function Ad() {
                    return (
                        (Ad =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Ad.apply(this, arguments)
                    );
                }
                const Cd = (0, q.Pi)(({ isCompleted: e, isActive: t, rewards: a, fixedSize: n }) => {
                        const r = S(),
                            s = null != n ? n : r.mediaSize < B.Medium ? nl.Small : nl.Big,
                            i = (e) => xl({ rewards: e, size: s }),
                            o = C()(hd, s === nl.Small && i(a).length > 2 && fd, e && !t && bd);
                        return u().createElement(
                            'div',
                            { className: o },
                            Ce(i(a), (e) => u().createElement(bl, Ad({ className: vd, key: e.name }, e))),
                        );
                    }),
                    Fd = (0, q.Pi)(({ isCompleted: e, isActive: t, isLast: a, rewards: n }) => {
                        const r = S(),
                            s = C()(
                                pd.base,
                                r.mediaSize === B.Medium && pd.base__mediaMedium,
                                r.mediaSize === B.Large && pd.base__mediaLarge,
                                r.remScreenHeight >= 1200 && pd.base__mediaExtraExtraLarge,
                            ),
                            i = C()(pd.activeBlock, t && pd.activeBlock__completed),
                            o = C()(pd.bgCompleted, (t || e) && pd.bgCompleted__completed);
                        return u().createElement(
                            'div',
                            { className: s },
                            u().createElement('div', { className: i }),
                            u().createElement('div', { className: o }),
                            u().createElement(Cd, { rewards: n, isActive: t, isCompleted: e, fixedSize: nl.Small }),
                            u().createElement('div', { className: pd.border }),
                            a && u().createElement('div', { className: C()(pd.border, pd.border__right) }),
                        );
                    }),
                    Dd = 'RewardCards_base_07',
                    Bd = (0, q.Pi)(() => {
                        const e = Gc().model.computes.levels();
                        return u().createElement(
                            'div',
                            { className: Dd },
                            e.map(({ isCompleted: e, isActive: t, isLast: a, rewards: n }, r) =>
                                u().createElement(Fd, { key: r, isCompleted: e, isActive: t, isLast: a, rewards: n }),
                            ),
                        );
                    }),
                    wd = 'OptimizedProgressBar_base_1f',
                    yd = 'OptimizedProgressBar_wrapper_ab',
                    Sd = 'OptimizedProgressBar_background_ce',
                    kd = ['api', 'value', 'maxValue', 'theme'];
                function Rd() {
                    return (
                        (Rd =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Rd.apply(this, arguments)
                    );
                }
                const xd = (e, t) => ('number' == typeof t ? t : e.offsetLeft),
                    Nd = (e) => {
                        let t = e.api,
                            a = e.value,
                            n = e.maxValue,
                            r = void 0 === n ? 100 : n,
                            i = e.theme,
                            o = void 0 === i ? Mu : i,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    n,
                                    r = {},
                                    s = Object.keys(e);
                                for (n = 0; n < s.length; n++) (a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, kd);
                        const c = (0, s.useRef)(null),
                            d = (0, s.useRef)(null),
                            m = (0, s.useRef)(null),
                            _ = wt(0, a, r) / r,
                            E = (0, s.useCallback)(
                                (e) => {
                                    m.current &&
                                        c.current &&
                                        (({ horizontalScrollPosition: e, leftOffset: t }, a, n) => {
                                            const r = a.offsetWidth - n.offsetWidth,
                                                s = e - xd(a, t),
                                                u = wt(0, r, s);
                                            n.style.left = `${u}px`;
                                        })(e, c.current, m.current),
                                        d.current &&
                                            c.current &&
                                            ((
                                                { horizontalScrollPosition: e, leftOffset: t },
                                                a,
                                                { container: n, line: r },
                                            ) => {
                                                const s = Math.max(0, Math.floor(n.offsetWidth * a) - 8e3),
                                                    u = e - xd(n, t),
                                                    i = wt(0, s, u);
                                                r.style.left = `${i}px`;
                                            })(e, _, { line: d.current, container: c.current });
                                },
                                [_],
                            ),
                            g = (0, s.useMemo)(() => Lu(o), [o]);
                        return (
                            (t.current.update = E),
                            u().createElement(
                                'div',
                                { className: wd, ref: c },
                                u().createElement(
                                    'div',
                                    { className: yd },
                                    u().createElement(
                                        'div',
                                        { style: g, className: Sd, ref: m },
                                        u().createElement(iu, { size: l.size }),
                                    ),
                                    u().createElement(
                                        Hu,
                                        Rd({}, l, {
                                            lineRef: d,
                                            value: a,
                                            theme: o,
                                            maxValue: r,
                                            withoutBackground: !0,
                                        }),
                                    ),
                                ),
                            )
                        );
                    },
                    Pd = (e, t, a) =>
                        C()(
                            e[a],
                            t === Tc.ProgressAlreadyFinished
                                ? e[`${a}__fast`]
                                : t >= Tc.ProgressFinished
                                  ? e[`${a}__completed`]
                                  : void 0,
                        ),
                    Td = {
                        base: 'Container_base_31',
                        progressWrapper: 'Container_progressWrapper_e1',
                        progressWrapper__completed: 'Container_progressWrapper__completed_9e',
                        progressWrapper__fast: 'Container_progressWrapper__fast_af',
                        bg: 'Container_bg_d7',
                    },
                    Ld = (0, q.Pi)(({ api: e, theme: t }) => {
                        const a = Gc(),
                            n = a.model,
                            r = a.controls,
                            i = n.progressAnimationState.get(),
                            o = n.computes,
                            l = n.previousTokenValue.get(),
                            c = n.currentTokenValue.get(),
                            d = (0, s.useRef)({ update: () => {} });
                        e.current.moveProgressBars = (0, s.useCallback)((e) => {
                            d.current.update(e);
                        }, []);
                        const m = (0, s.useState)({
                                maxPoints: 1 * o.levels().length,
                                previousEarnedPoints: l,
                                progressionSize: l,
                            }),
                            _ = m[0],
                            E = _.previousEarnedPoints,
                            g = _.maxPoints,
                            p = _.progressionSize,
                            h = m[1];
                        (0, s.useEffect)(() => {
                            h((e) => {
                                const t = 0 === e.progressionSize ? l : e.progressionSize;
                                return {
                                    maxPoints: 1 * o.levels().length,
                                    previousEarnedPoints: t,
                                    progressionSize: c,
                                };
                            }),
                                l !== c && W('pr_progress_bar');
                        }, [l, c, o]);
                        const b = (0, s.useMemo)(
                            () =>
                                Object.assign({}, Ou, {
                                    withStack: !0,
                                    type: uu.Growing,
                                    delta: { duration: 400, delay: 300 },
                                    line: { duration: 400, delay: 300 },
                                }),
                            [],
                        );
                        return (
                            (0, s.useEffect)(() => {
                                if (i === Tc.ProgressChange)
                                    return Cr(() => {
                                        r.finishProgressionChange();
                                    }, 700);
                            }, [r, i]),
                            u().createElement(
                                'div',
                                { className: Td.base },
                                u().createElement('div', { className: Td.bg }),
                                u().createElement(
                                    'div',
                                    { className: Pd(Td, i, 'progressWrapper') },
                                    u().createElement(Nd, {
                                        animationSettings: b,
                                        deltaFrom: E,
                                        value: p,
                                        maxValue: g,
                                        api: d,
                                        theme: t,
                                    }),
                                ),
                            )
                        );
                    }),
                    Id = 'Content_base_d5',
                    Md = 'Content_base__centered_e6',
                    Od = 'Content_base__layoutReady_84',
                    Hd = 'Content_horizontalContent_91',
                    Wd = 'Content_wrapper_d8',
                    $d = 'Content_progress_35',
                    Ud = 'Content_progressArea_68',
                    zd = 'Content_bar_ae',
                    Gd = 'ScrollDrag_base_bd',
                    jd = 'ScrollDrag_base__grabbing_1f',
                    qd = ({ api: e, children: t, updateProgressBarPosition: a }) => {
                        const n = (0, s.useState)(0),
                            r = n[0],
                            i = n[1],
                            o = (0, s.useState)(0),
                            l = o[0],
                            c = o[1],
                            d = (0, s.useState)(!1),
                            m = d[0],
                            _ = d[1];
                        (0, s.useEffect)(
                            () =>
                                Ne(() => {
                                    const t = (e) => {
                                        const t = e.value.scrollPosition;
                                        m || i(-t);
                                    };
                                    return (
                                        e.events.on('change', t),
                                        () => {
                                            e.events.off('change', t);
                                        }
                                    );
                                }),
                            [e, m],
                        );
                        const E = (0, s.useCallback)(
                                (e) => {
                                    _(!0), c(e.clientX), a();
                                },
                                [a],
                            ),
                            g = (0, s.useCallback)(() => {
                                _(!1), c(0), a();
                            }, [a]),
                            p = (0, s.useCallback)(
                                (t) => {
                                    if (m) {
                                        const n = wt(-(e.getBounds()[1] || 0), 0, r + t.clientX - l);
                                        e.applyScroll(-n, !0), c(t.clientX), i(n), a();
                                    }
                                },
                                [m, e, r, l, a],
                            );
                        return u().createElement(
                            'div',
                            { className: C()(Gd, m && jd), onMouseDown: E, onMouseUp: g, onMouseMove: p },
                            t,
                        );
                    };
                function Vd(e, t, a, n, r, s, u) {
                    try {
                        var i = e[s](u),
                            o = i.value;
                    } catch (e) {
                        return void a(e);
                    }
                    i.done ? t(o) : Promise.resolve(o).then(n, r);
                }
                const Qd = (0, q.Pi)(({ api: e }) => {
                        const t = Gc().model,
                            a = t.computes,
                            n = a.levels,
                            r = a.getScrollContainerMaxWidth,
                            i = a.currentLevel,
                            o = S(),
                            l = (0, s.useState)(!1),
                            c = l[0],
                            d = l[1],
                            m = (0, s.useState)(!1),
                            _ = m[0],
                            E = m[1],
                            g = n().length,
                            p = t.progressAnimationState.get(),
                            h = t.currentTokenValue.get(),
                            b = r(o.mediaSize, t.computes.levels(), o.mediaSize >= B.Large ? Wc : $c, 0),
                            f = (0, s.useRef)({ moveProgressBars: te }),
                            v = (0, s.useRef)(null),
                            A = (0, s.useRef)(null),
                            F = e.animationScroll.scrollPosition,
                            D = e.getWrapperSize,
                            w = e.contentRef,
                            y = e.wrapperRef,
                            k = e.getContainerSize,
                            R = e.applyScroll;
                        (0, s.useLayoutEffect)(
                            () =>
                                Ne(() => {
                                    const e = y.current,
                                        t = A.current;
                                    if (!e || !t) return;
                                    const a = parseFloat(getComputedStyle(t.children[0]).width),
                                        n = parseFloat(getComputedStyle(t).paddingRight),
                                        r = parseFloat(getComputedStyle(e).paddingLeft);
                                    d(o.remScreenWidth >= g * a + n + r), E(!0);
                                }),
                            [o.remScreenWidth, y, g],
                        );
                        const x = (0, s.useCallback)(
                                (e) => {
                                    if (v.current) {
                                        const t = D();
                                        f.current.moveProgressBars({
                                            viewPort: v.current,
                                            horizontalScrollPosition: t ? e - t : e,
                                        });
                                    }
                                },
                                [D],
                            ),
                            N = () => {
                                x(F.goal);
                            },
                            P = (0, s.useCallback)(() => {
                                const e = w.current,
                                    t = n().length;
                                if (e && t > 0) {
                                    const a = k() || 0,
                                        n = D() || 0,
                                        r = a / t,
                                        s = i() * r,
                                        u = (n - e.offsetLeft - r) / 2;
                                    R(wt(0, a - n, s - u), { immediate: p === Tc.ProgressAlreadyFinished });
                                }
                                0 === F.goal && x(F.goal);
                            }, [R, i, n, w, k, D, p, F.goal, x]);
                        return (
                            (0, s.useEffect)(() => {
                                P();
                            }, [h, P]),
                            (0, s.useEffect)(() => {
                                const e = (function () {
                                    var e,
                                        t =
                                            ((e = function* () {
                                                const e = k(),
                                                    t = F.goal;
                                                yield (0, Q.Eu)(),
                                                    yield new Promise((e) => {
                                                        requestAnimationFrame(() => {
                                                            requestAnimationFrame(() => {
                                                                e();
                                                            });
                                                        });
                                                    });
                                                const a = k();
                                                x(a && e && a !== e ? (t * a) / e : t), P();
                                            }),
                                            function () {
                                                var t = this,
                                                    a = arguments;
                                                return new Promise(function (n, r) {
                                                    var s = e.apply(t, a);
                                                    function u(e) {
                                                        Vd(s, n, r, u, i, 'next', e);
                                                    }
                                                    function i(e) {
                                                        Vd(s, n, r, u, i, 'throw', e);
                                                    }
                                                    u(void 0);
                                                });
                                            });
                                    return function () {
                                        return t.apply(this, arguments);
                                    };
                                })();
                                return (
                                    engine.on('clientResized', e),
                                    () => {
                                        engine.off('clientResized', e);
                                    }
                                );
                            }, []),
                            (0, s.useEffect)(() => Cr(() => x(F.goal), 0), [h, F.goal, x]),
                            u().createElement(
                                'div',
                                {
                                    className: C()(Id, c && Md, _ && Od),
                                    ref: v,
                                    onWheel: () => x(F.goal),
                                    style: { maxWidth: `${b}rem` },
                                },
                                u().createElement(
                                    Qc.Horizontal.Area.Default,
                                    {
                                        api: e,
                                        className: Hd,
                                        classNames: { wrapper: Wd },
                                        barClassNames: { base: zd },
                                        onDrag: N,
                                    },
                                    u().createElement(
                                        qd,
                                        { api: e, updateProgressBarPosition: N },
                                        u().createElement(gd, { levelRef: A }),
                                        u().createElement(
                                            'div',
                                            { className: $d },
                                            u().createElement(
                                                'div',
                                                { className: Ud },
                                                u().createElement(Ld, { api: f }),
                                            ),
                                        ),
                                        u().createElement(Bd, null),
                                    ),
                                ),
                            )
                        );
                    }),
                    Xd = {
                        base: 'Progression_base_d2',
                        contentWrapper: 'Progression_contentWrapper_6f',
                        progressionContentWrapper: 'Progression_progressionContentWrapper_59',
                        progressionContentWrapper__completed: 'Progression_progressionContentWrapper__completed_a7',
                        progressionContentWrapper__fast: 'Progression_progressionContentWrapper__fast_58',
                        prompt: 'Progression_prompt_7b',
                        'add-blur': 'Progression_add-blur_31',
                        hide: 'Progression_hide_32',
                        show: 'Progression_show_89',
                    },
                    Yd = (0, q.Pi)(({ className: e }) => {
                        const t = Gc(),
                            a = t.model,
                            n = t.controls,
                            r = a.progressAnimationState.get(),
                            i = a.computes.isProgressionCompleted(),
                            o = a.computes.wasProgressionCompletedBeforeStart(),
                            l = Fs();
                        return (
                            (0, s.useEffect)(
                                () =>
                                    o
                                        ? n.completeProgression(!0)
                                        : r === Tc.ChangeCompleted && i
                                          ? Cr(() => {
                                                n.completeProgression(!1);
                                            }, 1600)
                                          : r !== Tc.Scrolling || o
                                            ? r === Tc.HighlightCard
                                                ? Cr(() => {
                                                      n.finishHighlightCard();
                                                  }, 500)
                                                : void 0
                                            : Cr(() => {
                                                  n.finishScrolling();
                                              }, 1200),
                                [r, o, i, n],
                            ),
                            u().createElement(
                                'div',
                                { className: C()(Xd.base, e) },
                                u().createElement(
                                    'div',
                                    { className: Xd.contentWrapper },
                                    u().createElement(
                                        'div',
                                        { className: Pd(Xd, r, 'progressionContentWrapper') },
                                        u().createElement(Qd, { api: l }),
                                    ),
                                    u().createElement(Vc, { className: Xd.prompt }),
                                ),
                            )
                        );
                    });
                let Kd, Zd, Jd;
                !(function (e) {
                    (e.NotStarted = 'notStarted'),
                        (e.Active = 'active'),
                        (e.LastWeek = 'lastWeek'),
                        (e.Finished = 'finished');
                })(Kd || (Kd = {})),
                    (function (e) {
                        (e.Timer = 'timer'), (e.Countdown = 'countdown'), (e.Cooldown = 'cooldown'), (e.None = 'none');
                    })(Zd || (Zd = {})),
                    (function (e) {
                        (e.Description = 'description'),
                            (e.Short = 'short'),
                            (e.Long = 'long'),
                            (e.Extended = 'extended');
                    })(Jd || (Jd = {}));
                const em = () => {},
                    tm = (e = 0, t, a = 0, n = em) => {
                        const r = (0, s.useState)(e),
                            u = r[0],
                            i = r[1];
                        return (
                            (0, s.useEffect)(() => {
                                if (e > 0) {
                                    i(e);
                                    const r = Date.now(),
                                        s = setInterval(
                                            () => {
                                                const t = e - Math.floor((Date.now() - r) / 1e3);
                                                null !== a && t <= a ? (i(a), n && n(), clearInterval(s)) : i(t);
                                            },
                                            1e3 * (t || (e > 120 ? dr : 1)),
                                        );
                                    return () => {
                                        clearInterval(s);
                                    };
                                }
                            }, [e, t, a, n]),
                            u
                        );
                    };
                Q.Sw.instance;
                let am;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(am || (am = {}));
                Q.Sw.instance;
                const nm = tm,
                    rm = 'Countdown_base_fe',
                    sm = 'Countdown_icon_8b',
                    um = 'Countdown_description_8d',
                    im = (e) => e.toString().padStart(2, '0'),
                    om = (e, t) => {
                        switch (t) {
                            case Jd.Description:
                                return ((e, t = !0) =>
                                    e.days > 7 && t
                                        ? ca(R.strings.common.duration.days(), { days: e.days })
                                        : e.days >= 1
                                          ? 0 === e.hours
                                              ? ca(R.strings.common.duration.days(), { days: e.days })
                                              : `${ca(R.strings.common.duration.days(), { days: e.days })} ${ca(R.strings.common.duration.hours(), { hours: e.hours })}`
                                          : e.hours >= 1
                                            ? 0 === e.minutes
                                                ? ca(R.strings.common.duration.hours(), { hours: e.hours })
                                                : `${ca(R.strings.common.duration.hours(), { hours: e.hours })} ${ca(R.strings.common.duration.minutes(), { minutes: e.minutes })}`
                                            : ca(R.strings.common.duration.minutes(), { minutes: e.minutes || 1 }))(e);
                            case Jd.Short:
                                return `${im(e.minutes)}:${im(e.seconds)}`;
                            case Jd.Long:
                                return `${im(e.hours)}:${im(e.minutes)}:${im(e.seconds)}`;
                            case Jd.Extended:
                                return `${ca(R.strings.common.duration.days(), { days: e.days })} | ${im(e.hours)}:${im(e.minutes)}:${im(e.seconds)}`;
                        }
                    },
                    lm = R.images.gui.maps.icons.components.countdown,
                    cm = (e, t) => {
                        const a = 2 === t ? lm.big : lm;
                        switch (e) {
                            case Zd.Timer:
                                return a.clock();
                            case Zd.Countdown:
                                return a.hourglass();
                            case Zd.Cooldown:
                                return a.lock();
                        }
                    },
                    dm = (0, s.memo)(
                        ({
                            duration: e,
                            icon: t = Zd.Timer,
                            style: a = Jd.Description,
                            onTimeReached: n,
                            className: r = '',
                            classNames: i = {},
                            labelFormat: l = '',
                        }) => {
                            const c = a !== Jd.Description ? 1 : void 0,
                                d = nm(e, c),
                                m = (() => {
                                    const e = (0, s.useState)(o.O.view.getScale()),
                                        t = e[0],
                                        a = e[1];
                                    return (
                                        (0, s.useEffect)(() => {
                                            const e = () => {
                                                a(o.O.view.getScale());
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
                            n && n[d] && n[d]();
                            const _ = om(
                                (function (e = 0) {
                                    let t = e;
                                    const a = Math.trunc(t / _r);
                                    t -= a * _r;
                                    const n = Math.trunc(t / mr);
                                    t -= n * mr;
                                    const r = Math.trunc(t / dr);
                                    return (t -= r * dr), { days: a, hours: n, minutes: r, seconds: t };
                                })(d),
                                a,
                            );
                            return u().createElement(
                                'div',
                                { className: C()(rm, r) },
                                t !== Zd.None &&
                                    u().createElement('div', {
                                        className: C()(sm, i.icon),
                                        style: { backgroundImage: `url('${cm(t, m)}')` },
                                    }),
                                l
                                    ? u().createElement(
                                          'div',
                                          { className: C()(um, i.text) },
                                          u().createElement(Kn, { text: l, binding: { timerText: _ } }),
                                      )
                                    : u().createElement('div', { className: C()(um, i.text) }, _),
                            );
                        },
                    ),
                    mm = {
                        base: 'Separator_base_81',
                        separator: 'Separator_separator_9e',
                        base__completedBattleQuests: 'Separator_base__completedBattleQuests_ef',
                        separator__left: 'Separator_separator__left_74',
                        base__inProgressBattleQuests: 'Separator_base__inProgressBattleQuests_4d',
                        base__condition: 'Separator_base__condition_d9',
                        base__awards: 'Separator_base__awards_d6',
                        base__lockedByNoXVehicles: 'Separator_base__lockedByNoXVehicles_00',
                        base__lockedByInactiveSeason: 'Separator_base__lockedByInactiveSeason_66',
                        base__lockedByPreviousQuest: 'Separator_base__lockedByPreviousQuest_75',
                        base__completed: 'Separator_base__completed_5f',
                        show: 'Separator_show_ca',
                        separator__right: 'Separator_separator__right_3d',
                        ellipse: 'Separator_ellipse_c0',
                        firstLayer: 'Separator_firstLayer_34',
                        secondLayer: 'Separator_secondLayer_54',
                        'add-blur': 'Separator_add-blur_ba',
                        hide: 'Separator_hide_0e',
                    };
                let _m;
                !(function (e) {
                    (e.Awards = 'awards'),
                        (e.Condition = 'condition'),
                        (e.CompletedBattleQuests = 'completedBattleQuests'),
                        (e.InProgressBattleQuests = 'inProgressBattleQuests');
                })(_m || (_m = {}));
                const Em = ({ children: e, statusAnimation: t, type: a }) =>
                        u().createElement(
                            'div',
                            { className: C()(mm.base, mm[`base__${a}`], mm[`base__${t}`]) },
                            u().createElement(
                                'div',
                                { className: C()(mm.separator, mm.separator__left) },
                                u().createElement(
                                    'div',
                                    { className: mm.ellipse },
                                    u().createElement(
                                        'div',
                                        { className: mm.firstLayer },
                                        u().createElement('div', { className: mm.secondLayer }),
                                    ),
                                ),
                            ),
                            e,
                            u().createElement(
                                'div',
                                { className: C()(mm.separator, mm.separator__right) },
                                u().createElement(
                                    'div',
                                    { className: mm.ellipse },
                                    u().createElement(
                                        'div',
                                        { className: mm.firstLayer },
                                        u().createElement('div', { className: mm.secondLayer }),
                                    ),
                                ),
                            ),
                        ),
                    gm = {
                        base: 'Timer_base_ad',
                        timer: 'Timer_timer_4c',
                        block: 'Timer_block_de',
                        base__small: 'Timer_base__small_5a',
                        base__big: 'Timer_base__big_03',
                        text: 'Timer_text_35',
                        bgCountdown: 'Timer_bgCountdown_86',
                        description: 'Timer_description_bc',
                        countdown: 'Timer_countdown_e1',
                        'add-blur': 'Timer_add-blur_c0',
                        hide: 'Timer_hide_7d',
                        show: 'Timer_show_1b',
                    };
                let pm;
                !(function (e) {
                    (e.Big = 'big'), (e.Small = 'small');
                })(pm || (pm = {}));
                const hm = ({ size: e, currentTimerDate: t, text: a, onlyText: n = !1 }) => {
                        const r = e === pm.Big;
                        return u().createElement(
                            'div',
                            { className: C()(gm.base, gm[`base__${e}`]) },
                            u().createElement(
                                'div',
                                { className: gm.timer },
                                u().createElement(
                                    Em,
                                    { type: r ? _m.CompletedBattleQuests : _m.InProgressBattleQuests },
                                    u().createElement(
                                        'div',
                                        { className: gm.block },
                                        a && u().createElement('div', { className: gm.text }, a),
                                        !n &&
                                            t &&
                                            u().createElement(
                                                'div',
                                                { className: gm.countdown },
                                                u().createElement('div', { className: gm.bgCountdown }),
                                                u().createElement(dm, {
                                                    duration: t,
                                                    style: Jd.Description,
                                                    classNames: { text: gm.description },
                                                    className: gm.countdown,
                                                }),
                                            ),
                                    ),
                                ),
                            ),
                        );
                    },
                    bm = 'ResetStatus_base_25',
                    fm = 'ResetStatus_base__ended_5e',
                    vm = 'ResetStatus_endedTextTitle_20',
                    Am = 'ResetStatus_endedTextSubtitle_6e',
                    Cm = R.strings.comp7.weeklyQuests.resetStatus,
                    Fm = (0, q.Pi)(({ className: e }) => {
                        const t = Gc().model,
                            a = t.root.get(),
                            n = a.seasonState,
                            r = a.resetTimeLeft,
                            s = t.computes.isAllQuestsCompleted;
                        return s() && n === Kd.LastWeek
                            ? u().createElement(
                                  'div',
                                  { className: C()(bm, fm, e) },
                                  u().createElement(Kn, { text: Cm.ended.lastWeek.title(), classMix: vm }),
                              )
                            : s()
                              ? u().createElement(
                                    'div',
                                    { className: C()(bm, fm, e) },
                                    u().createElement(Kn, { text: Cm.ended.title(), classMix: vm }),
                                    u().createElement(Kn, { text: Cm.ended.subtitle(), classMix: Am }),
                                    u().createElement(hm, {
                                        size: pm.Big,
                                        currentTimerDate: r,
                                        text: Cm.ended.title(),
                                    }),
                                )
                              : n === Kd.LastWeek
                                ? u().createElement(
                                      'div',
                                      { className: C()(bm, e) },
                                      u().createElement(hm, {
                                          size: pm.Small,
                                          currentTimerDate: r,
                                          text: Cm.lastWeek(),
                                      }),
                                  )
                                : u().createElement(
                                      'div',
                                      { className: C()(bm, e) },
                                      u().createElement(hm, { size: pm.Small, currentTimerDate: r, text: Cm.timer() }),
                                  );
                    }),
                    Dm = 'Progress_base_d5',
                    Bm = 'Progress_counter_3b',
                    wm = 'Progress_current_fd',
                    ym = 'Progress_progressBar_d2',
                    Sm = R.strings.comp7.weeklyQuests.card.progress,
                    km = ({ current: e, total: t, isDisabled: a, className: n }) =>
                        u().createElement(
                            'div',
                            { className: C()(Dm, n) },
                            u().createElement(Kn, {
                                classMix: Bm,
                                text: Sm.counter(),
                                binding: {
                                    current: u().createElement(
                                        'div',
                                        { className: wm },
                                        u().createElement(It, { value: e }),
                                    ),
                                    total: u().createElement(It, { value: t }),
                                },
                            }),
                            u().createElement(
                                'div',
                                { className: ym },
                                u().createElement(Hu, { size: su.Small, value: e, maxValue: t, disabled: a }),
                            ),
                        ),
                    Rm = {
                        nextArrowWrapper: 'TaskBattle_nextArrowWrapper_bb',
                        nextArrow: 'TaskBattle_nextArrow_32',
                        nextArrow__completed: 'TaskBattle_nextArrow__completed_0d',
                        nextArrow__active: 'TaskBattle_nextArrow__active_0a',
                        base: 'TaskBattle_base_44',
                        base__completed: 'TaskBattle_base__completed_96',
                        'add-shadow': 'TaskBattle_add-shadow_a9',
                        base__lockedByNoXVehicles: 'TaskBattle_base__lockedByNoXVehicles_65',
                        base__lockedByInactiveSeason: 'TaskBattle_base__lockedByInactiveSeason_b0',
                        base__lockedByPreviousQuest: 'TaskBattle_base__lockedByPreviousQuest_34',
                        base__mediaMediumHeight: 'TaskBattle_base__mediaMediumHeight_96',
                        taskType: 'TaskBattle_taskType_94',
                        conditions: 'TaskBattle_conditions_2d',
                        description: 'TaskBattle_description_f6',
                        description__completed: 'TaskBattle_description__completed_a2',
                        'update-condition': 'TaskBattle_update-condition_a0',
                        description__completedWasVisited: 'TaskBattle_description__completedWasVisited_42',
                        awards: 'TaskBattle_awards_0a',
                        'add-blur': 'TaskBattle_add-blur_68',
                        base__completedWasVisited: 'TaskBattle_base__completedWasVisited_8a',
                        awardsList: 'TaskBattle_awardsList_bf',
                        award: 'TaskBattle_award_8b',
                        hide: 'TaskBattle_hide_e0',
                        show: 'TaskBattle_show_4d',
                    },
                    xm = {
                        base: 'TaskType_base_d9',
                        ellipse: 'TaskType_ellipse_95',
                        base__completed: 'TaskType_base__completed_00',
                        hide: 'TaskType_hide_4e',
                        base__completedWasVisited: 'TaskType_base__completedWasVisited_28',
                        base__lockedByNoXVehicles: 'TaskType_base__lockedByNoXVehicles_99',
                        base__lockedByInactiveSeason: 'TaskType_base__lockedByInactiveSeason_c5',
                        base__lockedByPreviousQuest: 'TaskType_base__lockedByPreviousQuest_42',
                        typeIcon: 'TaskType_typeIcon_0c',
                        completedIcon: 'TaskType_completedIcon_cf',
                        lockIcon: 'TaskType_lockIcon_20',
                        'slide-down': 'TaskType_slide-down_53',
                        'add-blur': 'TaskType_add-blur_1d',
                        show: 'TaskType_show_a3',
                    },
                    Nm = ({ taskBattleIcon: e, statusAnimation: t }) =>
                        u().createElement(
                            'div',
                            { className: C()(xm.base, xm[`base__${t}`]) },
                            u().createElement('div', { className: xm.ellipse }),
                            u().createElement('div', {
                                className: xm.typeIcon,
                                style: {
                                    backgroundImage: `url('${R.images.comp7.gui.maps.icons.comp7.weekly_quests.$dyn(e)}')`,
                                },
                            }),
                            u().createElement('div', { className: xm.completedIcon }),
                            u().createElement('div', { className: xm.lockIcon }),
                        );
                function Pm() {
                    return (
                        (Pm =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        Pm.apply(this, arguments)
                    );
                }
                const Tm = (0, q.Pi)(({ index: e }) => {
                        const t = (0, s.useState)(Nc.Active),
                            a = t[0],
                            n = t[1],
                            r = Gc().model,
                            i = r.computes.questRewards,
                            o = r.computes.questCard(e),
                            l = o.state,
                            c = o.currentProgress,
                            d = o.totalProgress,
                            m = o.description,
                            _ = o.iconKey,
                            E = S();
                        return (
                            (0, s.useEffect)(() => {
                                n(l);
                            }, [l]),
                            u().createElement(
                                u().Fragment,
                                null,
                                Boolean(e) &&
                                    u().createElement(
                                        'div',
                                        { className: Rm.nextArrowWrapper },
                                        u().createElement('div', {
                                            className: C()(Rm.nextArrow, Rm[`nextArrow__${a}`]),
                                        }),
                                    ),
                                u().createElement(
                                    'div',
                                    {
                                        className: C()(
                                            Rm.base,
                                            Rm[`base__${a}`],
                                            E.mediaSize === B.Medium &&
                                                E.remScreenHeight >= 1024 &&
                                                Rm.base__mediaMediumHeight,
                                        ),
                                    },
                                    u().createElement(
                                        'div',
                                        { className: Rm.taskType },
                                        u().createElement(Nm, { taskBattleIcon: _, statusAnimation: a }),
                                    ),
                                    u().createElement(
                                        'div',
                                        { className: Rm.conditions },
                                        u().createElement(
                                            'div',
                                            { className: C()(Rm.description, Rm[`description__${a}`]) },
                                            m,
                                        ),
                                        l === Nc.Active &&
                                            u().createElement(km, {
                                                current: c,
                                                total: d,
                                                isDisabled: l !== Nc.Active,
                                            }),
                                    ),
                                    u().createElement(
                                        'div',
                                        { className: Rm.awards },
                                        u().createElement(
                                            Em,
                                            { statusAnimation: a, type: _m.Awards },
                                            u().createElement(
                                                'div',
                                                { className: Rm.awardsList },
                                                Ce(i(e, nl.Small), (e) =>
                                                    u().createElement(bl, Pm({ className: Rm.award, key: e.name }, e)),
                                                ),
                                            ),
                                        ),
                                    ),
                                ),
                            )
                        );
                    }),
                    Lm = {
                        '--pageContentWidth': '78vw',
                        base__completed: 'TaskBattleList_base__completed_e6',
                        'hidden-tasks-list': 'TaskBattleList_hidden-tasks-list_39',
                        base: 'TaskBattleList_base_c6',
                        scroll: 'TaskBattleList_scroll_73',
                        timerWithQuestsTotal: 'TaskBattleList_timerWithQuestsTotal_39',
                        timer: 'TaskBattleList_timer_fe',
                        taskList: 'TaskBattleList_taskList_d4',
                        scrollContainer: 'TaskBattleList_scrollContainer_e0',
                        areaContainer: 'TaskBattleList_areaContainer_fb',
                        areaWrapper: 'TaskBattleList_areaWrapper_04',
                        bar: 'TaskBattleList_bar_d9',
                        'add-blur': 'TaskBattleList_add-blur_67',
                        hide: 'TaskBattleList_hide_56',
                        show: 'TaskBattleList_show_f9',
                        fadeIn: 'TaskBattleList_fadeIn_38',
                        fadeInThreeQuarters: 'TaskBattleList_fadeInThreeQuarters_b4',
                        fadeInHalf: 'TaskBattleList_fadeInHalf_5a',
                        fadeOut: 'TaskBattleList_fadeOut_f6',
                        fadeInWithScale: 'TaskBattleList_fadeInWithScale_0a',
                        slideUp: 'TaskBattleList_slideUp_dd',
                        scale: 'TaskBattleList_scale_d4',
                        raysAppearance: 'TaskBattleList_raysAppearance_32',
                        rotate: 'TaskBattleList_rotate_3f',
                        'reverse-rotate': 'TaskBattleList_reverse-rotate_56',
                        glowAppearance: 'TaskBattleList_glowAppearance_55',
                        highlightAppearance: 'TaskBattleList_highlightAppearance_7c',
                        blink: 'TaskBattleList_blink_1d',
                        slideUpIn: 'TaskBattleList_slideUpIn_33',
                    },
                    Im = (0, q.Pi)(() => {
                        const e = Gc().model.computes,
                            t = e.questCards,
                            a = e.battleTasksStatus,
                            n = e.initialItemScrollIndex,
                            r = e.getScrollContainerMaxWidth,
                            i = S(),
                            o = (0, s.useState)(n()),
                            l = o[0],
                            c = o[1],
                            d = Gs(268),
                            m = t.get();
                        return u().createElement(
                            'div',
                            { className: C()(Lm.base, Lm[`base__${a()}`]) },
                            u().createElement(
                                'div',
                                { className: Lm.taskList },
                                u().createElement(
                                    zs,
                                    {
                                        api: d,
                                        stuckIndex: l,
                                        itemWidth: 268,
                                        onStick: c,
                                        className: Lm.scrollContainer,
                                        areaClassNames: { base: Lm.areaContainer, wrapper: Lm.areaWrapper },
                                        barClassNames: { base: Lm.bar },
                                        containerMaxWidth: r(i.mediaSize, m, 268, 38),
                                    },
                                    Ce(m, (e, t) => u().createElement(Tm, { key: t, index: t })),
                                ),
                            ),
                        );
                    }),
                    Mm = 'WeeklyQuestsPage_base_6c',
                    Om = 'WeeklyQuestsPage_content_cc',
                    Hm = 'WeeklyQuestsPage_resetStatus_8a',
                    Wm = 'WeeklyQuestsPage_progression_25',
                    $m = () => {
                        const e = (0, Pe.useSpring)(Ee);
                        return u().createElement(
                            'div',
                            { className: Mm },
                            u().createElement(ut, { className: K }, R.strings.comp7.page.heading.weeklyQuests()),
                            u().createElement(Lr, null),
                            u().createElement(
                                Pe.animated.div,
                                { className: Om, style: e },
                                u().createElement(Fm, { className: Hm }),
                                u().createElement(Im, null),
                                u().createElement(Yd, { className: Wm }),
                            ),
                        );
                    },
                    Um = { context: 'model.weeklyQuestsModel' };
                let zm, Gm;
                !(function (e) {
                    (e.Guaranteed = 'guaranteed'),
                        (e.Possible = 'possible'),
                        (e.NotAvailable = 'notAvailable'),
                        (e.Claimed = 'claimed');
                })(zm || (zm = {})),
                    (function (e) {
                        (e.Achieved = 'achieved'), (e.Possible = 'possible'), (e.NotAchieved = 'notAchieved');
                    })(Gm || (Gm = {}));
                let jm;
                !(function (e) {
                    (e[(e.First = 6)] = 'First'),
                        (e[(e.Second = 5)] = 'Second'),
                        (e[(e.Third = 4)] = 'Third'),
                        (e[(e.Fourth = 3)] = 'Fourth'),
                        (e[(e.Fifth = 2)] = 'Fifth'),
                        (e[(e.Sixth = 1)] = 'Sixth');
                })(jm || (jm = {}));
                const qm = R.strings.comp7.yearlyRewards,
                    Vm = R.strings.comp7.yearlyRewardsTooltip,
                    Qm = [
                        {
                            rewards: [
                                {
                                    icon: 'first_main',
                                    label: qm.main.first(),
                                    tooltipArgs: { body: Vm.main.first.body(), header: Vm.main.first.header() },
                                    name: 'styleProgress',
                                },
                                {
                                    icon: 'first_additional_1',
                                    tooltipArgs: {
                                        body: Vm.additional.first_1.body(),
                                        header: Vm.additional.first_1.header(),
                                    },
                                },
                            ],
                            seasonPoints: [Gm.Achieved, Gm.Achieved, Gm.Achieved],
                            rewardsState: zm.Guaranteed,
                        },
                        {
                            rewards: [
                                {
                                    icon: 'second_main',
                                    label: qm.main.second(),
                                    tooltipArgs: { body: Vm.main.second.body(), header: Vm.main.second.header() },
                                    name: 'styleProgress',
                                },
                                {
                                    icon: 'second_additional_1',
                                    tooltipArgs: {
                                        body: Vm.additional.second_1.body(),
                                        header: Vm.additional.second_1.header(),
                                    },
                                },
                                {
                                    icon: 'second_additional_2',
                                    tooltipArgs: {
                                        body: Vm.additional.second_2.body(),
                                        header: Vm.additional.second_2.header(),
                                    },
                                },
                            ],
                            seasonPoints: [Gm.Achieved, Gm.Achieved, Gm.Achieved],
                            rewardsState: zm.Guaranteed,
                        },
                        {
                            rewards: [
                                {
                                    icon: 'third_main',
                                    label: qm.main.third(),
                                    tooltipArgs: { body: Vm.main.third.body(), header: Vm.main.third.header() },
                                    name: 'styleProgress',
                                },
                                {
                                    icon: 'third_additional_1',
                                    tooltipArgs: {
                                        body: Vm.additional.third_1.body(),
                                        header: Vm.additional.third_1.header(),
                                    },
                                },
                                {
                                    icon: 'third_additional_2',
                                    tooltipArgs: {
                                        body: Vm.additional.third_2.body(),
                                        header: Vm.additional.third_2.header(),
                                    },
                                },
                            ],
                            seasonPoints: [Gm.Achieved, Gm.Achieved, Gm.Possible],
                            rewardsState: zm.Possible,
                        },
                        {
                            rewards: [
                                {
                                    icon: 'fourth_main',
                                    label: qm.main.fourth(),
                                    tooltipArgs: { body: Vm.main.fourth.body(), header: Vm.main.fourth.header() },
                                    name: 'styleProgress',
                                },
                                {
                                    icon: 'fourth_additional_1',
                                    tooltipArgs: {
                                        body: Vm.additional.fourth_1.body(),
                                        header: Vm.additional.fourth_1.header(),
                                    },
                                },
                                {
                                    icon: 'fourth_additional_2',
                                    tooltipArgs: {
                                        body: Vm.additional.fourth_2.body(),
                                        header: Vm.additional.fourth_2.header(),
                                    },
                                },
                            ],
                            seasonPoints: [Gm.Possible, Gm.Possible, Gm.NotAchieved],
                            rewardsState: zm.NotAvailable,
                        },
                        {
                            rewards: [
                                {
                                    icon: 'fifth_main',
                                    label: qm.main.fifth(),
                                    tooltipArgs: { body: Vm.main.fifth.body(), header: Vm.main.fifth.header() },
                                    name: 'styleProgress',
                                },
                                {
                                    icon: 'fifth_additional_1',
                                    tooltipArgs: {
                                        body: Vm.additional.fifth_1.body(),
                                        header: Vm.additional.fifth_1.header(),
                                    },
                                },
                                {
                                    icon: 'fifth_additional_2',
                                    tooltipArgs: {
                                        body: Vm.additional.fifth_2.body(),
                                        header: Vm.additional.fifth_2.header(),
                                    },
                                },
                                {
                                    icon: 'fifth_additional_3',
                                    tooltipArgs: {
                                        body: Vm.additional.fifth_3.body(),
                                        header: Vm.additional.fifth_3.header(),
                                    },
                                },
                            ],
                            seasonPoints: [Gm.NotAchieved, Gm.NotAchieved, Gm.NotAchieved],
                            rewardsState: zm.NotAvailable,
                        },
                        {
                            rewards: [
                                {
                                    icon: 'sixth_main',
                                    label: qm.main.sixth(),
                                    tooltipArgs: { body: Vm.main.sixth.body(), header: Vm.main.sixth.header() },
                                    name: 'styleProgress',
                                },
                                {
                                    icon: 'sixth_additional_1',
                                    tooltipArgs: {
                                        body: Vm.additional.sixth_1.body(),
                                        header: Vm.additional.sixth_1.header(),
                                    },
                                },
                                {
                                    icon: 'sixth_additional_2',
                                    tooltipArgs: {
                                        body: Vm.additional.sixth_2.body(),
                                        header: Vm.additional.sixth_2.header(),
                                    },
                                },
                                {
                                    icon: 'sixth_additional_3',
                                    tooltipArgs: {
                                        body: Vm.additional.sixth_3.body(),
                                        header: Vm.additional.sixth_3.header(),
                                    },
                                },
                                {
                                    icon: 'sixth_additional_4',
                                    tooltipArgs: {
                                        body: Vm.additional.sixth_4.body(),
                                        header: Vm.additional.sixth_4.header(),
                                    },
                                },
                            ],
                            seasonPoints: [Gm.NotAchieved, Gm.NotAchieved, Gm.NotAchieved],
                            rewardsState: zm.Claimed,
                        },
                    ],
                    Xm = {
                        getter: (e) => {
                            if ('cards' === e) return Qm;
                            return { currentRank: jm.Third, seasonPointsReceived: !1, hasDataError: !1 };
                        },
                        controls: te,
                    },
                    Ym = oe()(({ observableModel: e }) => {
                        const t = { root: e.object() },
                            a = e.array('cards'),
                            n = (0, ge.Om)(
                                (e) => {
                                    const t = fe(a.get(), e);
                                    if (!t) throw new Error(`card with index ${e} was not found`);
                                    return { rewardsState: t.rewardsState };
                                },
                                { equals: mt },
                            ),
                            r = (0, ge.Om)(
                                (e) => {
                                    const t = fe(a.get(), e);
                                    if (!t) throw new Error(`card with index ${e} was not found`);
                                    return Ce(t.rewards, (e) => Object.assign({}, e));
                                },
                                { equals: ne },
                            ),
                            s = (0, ge.Om)(
                                (e) => {
                                    const t = fe(a.get(), e);
                                    if (!t) throw new Error(`card with index ${e} was not found`);
                                    return Ce(t.seasonPoints, ae);
                                },
                                { equals: ne },
                            ),
                            u = (0, ge.Om)((e, t) => {
                                const a = s(e);
                                if (!a) throw new Error(`points array with card index ${e} was not found`);
                                const n = fe(a, t);
                                if (!n) throw new Error(`point with index ${t} in card with index ${e} was not found`);
                                return n;
                            }),
                            i = (0, ge.Om)((e) => {
                                const t = s(e);
                                if (!t) throw new Error(`points array with card index ${e} was not found`);
                                return t.every((e) => e === Gm.Achieved);
                            }),
                            o = (0, ge.Om)(
                                () => {
                                    const e = a.get();
                                    return {
                                        possible: we(e, (e) => e.rewardsState === zm.Possible),
                                        guaranteed: we(e, (e) => e.rewardsState === zm.Guaranteed),
                                    };
                                },
                                { equals: mt },
                            ),
                            l = (0, ge.Om)(
                                (e) => {
                                    const t = fe(r(e), 0);
                                    if (!t) throw new Error(`card with index ${e} has no any main reward at index: 0`);
                                    return t;
                                },
                                { equals: ne },
                            ),
                            c = (0, ge.Om)((e) => [...Fe(r(e), 1)], { equals: ne });
                        return Object.assign({}, t, {
                            computes: {
                                card: n,
                                pointState: u,
                                isEnabledCard: i,
                                mainReward: l,
                                additionalRewards: c,
                                bestRewardsCardIndex: o,
                                additionalRewardsCount: (0, ge.Om)((e) => c(e).length),
                                cardsLength: (0, ge.Om)(() => a.get().length),
                                seasonPointsLength: (0, ge.Om)((e) => s(e).length),
                            },
                        });
                    }, te),
                    Km = Ym[0],
                    Zm = Ym[1],
                    Jm = oe()(({ observableModel: e }) => {
                        const t = { root: e.object() },
                            a = e.array('cards'),
                            n = (0, ge.Om)(
                                (e) => {
                                    const t = fe(a.get(), e);
                                    if (!t) throw new Error(`card with index ${e} was not found`);
                                    return { rewardsState: t.rewardsState };
                                },
                                { equals: mt },
                            ),
                            r = (0, ge.Om)(
                                (e) => {
                                    const t = fe(a.get(), e);
                                    if (!t) throw new Error(`card with index ${e} was not found`);
                                    return Ce(t.rewards, (e) => Object.assign({}, e));
                                },
                                { equals: ne },
                            ),
                            s = (0, ge.Om)(
                                (e) => {
                                    const t = fe(a.get(), e);
                                    if (!t) throw new Error(`card with index ${e} was not found`);
                                    return Ce(t.seasonPoints, ae);
                                },
                                { equals: ne },
                            ),
                            u = (0, ge.Om)((e, t) => {
                                const a = s(e);
                                if (!a) throw new Error(`points array with card index ${e} was not found`);
                                const n = fe(a, t);
                                if (!n) throw new Error(`point with index ${t} in card with index ${e} was not found`);
                                return n;
                            }),
                            i = (0, ge.Om)((e) => {
                                const t = s(e);
                                if (!t) throw new Error(`points array with card index ${e} was not found`);
                                return t.every((e) => e === Gm.Achieved);
                            }),
                            o = (0, ge.Om)(
                                () => {
                                    const e = a.get();
                                    return {
                                        possible: we(e, (e) => e.rewardsState === zm.Possible),
                                        guaranteed: we(e, (e) => e.rewardsState === zm.Guaranteed),
                                    };
                                },
                                { equals: mt },
                            ),
                            l = (0, ge.Om)(
                                (e) => {
                                    const t = fe(r(e), 0);
                                    if (!t) throw new Error(`card with index ${e} has no any main reward at index: 0`);
                                    return t;
                                },
                                { equals: ne },
                            ),
                            c = (0, ge.Om)((e) => [...Fe(r(e), 1)], { equals: ne });
                        return Object.assign({}, t, {
                            computes: {
                                card: n,
                                pointState: u,
                                isEnabledCard: i,
                                mainReward: l,
                                additionalRewards: c,
                                bestRewardsCardIndex: o,
                                additionalRewardsCount: (0, ge.Om)((e) => c(e).length),
                                cardsLength: (0, ge.Om)(() => a.get().length),
                                seasonPointsLength: (0, ge.Om)((e) => s(e).length),
                            },
                        });
                    }, te),
                    e_ = Jm[0],
                    t_ = Jm[1];
                function a_() {
                    const e = (0, s.useRef)(0);
                    var t;
                    return (
                        (t = () => {
                            window.clearTimeout(e.current);
                        }),
                        (0, s.useEffect)(() => t, []),
                        (0, s.useMemo)(
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
                const n_ = {
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
                let r_;
                !(function (e) {
                    (e.x24 = '24x24'),
                        (e.x24Metal = '24x24_metal'),
                        (e.x48 = '48x48'),
                        (e.x60 = '60x54'),
                        (e.x64 = '64x64'),
                        (e.x80 = '80x80'),
                        (e.x83 = '83x74'),
                        (e.x180 = '180x135');
                })(r_ || (r_ = {}));
                const s_ = R.images.gui.maps.icons.vehicleTypes,
                    u_ = (e) => {
                        switch (e) {
                            case r_.x80:
                                return s_.large;
                            case r_.x83:
                                return s_.big;
                            case r_.x180:
                                return s_.huge;
                            default:
                                return s_.$dyn(`c_${e}`);
                        }
                    },
                    i_ = (0, s.memo)(
                        ({
                            name: e,
                            level: t,
                            type: a,
                            size: n = r_.x24Metal,
                            typeIconFolderPath: r = u_(n),
                            isPremium: s = !1,
                            nation: i,
                            className: o,
                            classNames: l,
                        }) => {
                            const c = `${((d = a), d.replace(/-/g, '_'))}${s ? '_elite' : ''}`;
                            var d;
                            return u().createElement(
                                'div',
                                { className: C()(n_.base, n_[`base__${n}`], o) },
                                i,
                                u().createElement('div', { className: null == l ? void 0 : l.level }, Yl(t)),
                                u().createElement(
                                    'div',
                                    {
                                        className: C()(
                                            n_.vehicleTypeContainer,
                                            null == l ? void 0 : l.vehicleTypeContainer,
                                        ),
                                    },
                                    u().createElement('div', {
                                        className: C()(n_.vehicleType, null == l ? void 0 : l.type),
                                        style: { backgroundImage: `url(${null == r ? void 0 : r.$dyn(c)})` },
                                    }),
                                ),
                                u().createElement(
                                    'div',
                                    { className: C()(n_.shortName, null == l ? void 0 : l.shortName) },
                                    e,
                                ),
                            );
                        },
                    ),
                    o_ = {
                        name: R.strings.comp7.yearlyRewards.vehicle(),
                        type: 'mediumTank',
                        level: 10,
                        isPremium: !0,
                        tooltipArgs: {
                            header: R.strings.comp7.yearlyRewards.vehicleTooltip.header(),
                            body: R.strings.comp7.yearlyRewards.vehicleTooltip.body(),
                        },
                    },
                    l_ = [
                        { rank: jm.First, count: 1 },
                        { rank: jm.Second, count: 2 },
                        { rank: jm.Third, count: 3 },
                        { rank: jm.Fourth, count: 4 },
                        { rank: jm.Fifth, count: 5 },
                        { rank: jm.Sixth, count: 6 },
                    ],
                    c_ = 'AdditionalRewards_reward_e8',
                    d_ = nl.Small,
                    m_ = (0, q.Pi)(({ cardIndex: e, visibleRewardsCount: t, className: a }) => {
                        const n = Zm().model,
                            r = n.computes.additionalRewards(e),
                            s = n.computes.additionalRewardsCount(e),
                            i = (({ rewards: e, size: t }) => Ce(e, (e) => Nl({ reward: e, size: t })))({
                                rewards: r,
                                size: d_,
                            });
                        return u().createElement(Dl, {
                            data: i,
                            size: d_,
                            count: Pl(s, t),
                            rewardItemClassMix: c_,
                            boxRewardTooltip: {
                                contentId: R.views.lobby.tooltips.AdditionalRewardsTooltip('resId'),
                                args: { fromIndex: t, index: e },
                            },
                            classMix: a,
                        });
                    }),
                    __ = {
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
                let E_;
                !(function (e) {
                    (e.x16 = 'x16'), (e.x24 = 'x24'), (e.x32 = 'x32'), (e.x48 = 'x48'), (e.x62 = 'x62');
                })(E_ || (E_ = {}));
                const g_ = R.images.comp7.gui.maps.icons.comp7.icons,
                    p_ = (0, q.Pi)(({ state: e, className: t, size: a = E_.x48 }) =>
                        u().createElement(
                            'div',
                            { className: C()(__.base, __[`base__${e}`], __[`base__${a}`], t) },
                            e === Gm.Possible && u().createElement('div', { className: __.highlight }),
                            u().createElement('div', {
                                className: __.icon,
                                style: { backgroundImage: `url(${g_.$dyn(`season_point_${e}_${a}`)})` },
                            }),
                        ),
                    ),
                    h_ = (0, q.Pi)(({ cardIndex: e, pointIndex: t, size: a, className: n, classNames: r }) => {
                        const s = t_().model.computes.pointState(e, t);
                        return u().createElement(
                            Ge,
                            {
                                contentId: R.views.lobby.comp7.tooltips.SeasonPointTooltip('resId'),
                                args: { state: s },
                                ignoreShowDelay: !0,
                            },
                            u().createElement(
                                'div',
                                { className: n },
                                u().createElement(p_, { state: s, className: null == r ? void 0 : r.point, size: a }),
                            ),
                        );
                    }),
                    b_ = 'CardSeasonPoints_base_8c',
                    f_ = (0, q.Pi)(({ cardIndex: e, size: t, className: a, classNames: n }) => {
                        const r = t_().model;
                        return u().createElement(
                            'div',
                            { className: C()(b_, a) },
                            ua(r.computes.seasonPointsLength(e), (a) =>
                                u().createElement(h_, {
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
                function v_() {
                    return (
                        (v_ =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        v_.apply(this, arguments)
                    );
                }
                const A_ = (0, q.Pi)(({ cardIndex: e, size: t, className: a, classNames: n }) => {
                        const r = Zm().model.computes.mainReward(e);
                        return u().createElement(
                            bl,
                            v_({}, Nl({ reward: r, size: t }), {
                                className: a,
                                classNames: {
                                    rewardIcon: null == n ? void 0 : n.icon,
                                    image: null == n ? void 0 : n.iconContainer,
                                },
                            }),
                        );
                    }),
                    C_ = {
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
                    F_ = R.strings.comp7.yearlyRewards.rewardsState,
                    D_ = ({ rewardsState: e, className: t }) =>
                        u().createElement(
                            Qe,
                            { body: `${F_.tooltip.$dyn(e)}`, isEnabled: e !== zm.Claimed },
                            u().createElement(
                                'div',
                                { className: C()(C_.base, C_[`base__${e}`], t) },
                                u().createElement(
                                    'div',
                                    { className: C_.status },
                                    u().createElement(
                                        'div',
                                        { className: C_.venzel },
                                        u().createElement('div', { className: C_.icon }),
                                        u().createElement('div', { className: C_.line }),
                                    ),
                                    u().createElement('div', { className: C_.statusIcon }),
                                    u().createElement(
                                        'div',
                                        { className: C()(C_.venzel, C_.venzel__right) },
                                        u().createElement('div', { className: C_.icon }),
                                        u().createElement('div', { className: C_.line }),
                                    ),
                                ),
                                u().createElement(
                                    'div',
                                    { className: C_.description },
                                    R.strings.comp7.yearlyRewards.rewardsState.$dyn(e),
                                ),
                            ),
                        ),
                    B_ = {
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
                    w_ = (e, t) => {
                        switch (e) {
                            case 'collapsed':
                                return ((e) => (e >= B.Medium ? E_.x32 : E_.x24))(t);
                            case 'selected':
                                return ((e) => (e >= B.Large ? E_.x62 : e >= B.Medium ? E_.x48 : E_.x32))(t);
                        }
                    },
                    y_ = (e) => (e >= B.Large ? r_.x83 : e >= B.Medium ? r_.x48 : r_.x24Metal),
                    S_ = (e) => (e >= B.Medium ? 5 : 4);
                function k_() {
                    return (
                        (k_ =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                                }
                                return e;
                            }),
                        k_.apply(this, arguments)
                    );
                }
                const R_ = (0, q.Pi)(({ cardIndex: e, className: t, cardState: a }) => {
                        const n = S().mediaSize,
                            r = t_().model,
                            s = Zm().model,
                            i = r.computes.isEnabledCard(e),
                            o = 3 === e,
                            l = ((e) => (e >= B.Large ? nl.S600x450 : e >= B.Medium ? nl.S400x300 : nl.S232x174))(n),
                            c = s.computes.mainReward(e),
                            d = r.computes.card(e).rewardsState,
                            m = 'selected' === a,
                            _ = 'collapsed' === a;
                        return u().createElement(
                            'div',
                            {
                                className: C()(B_.base, B_[`base__${a}`], o && B_.base__withVehicle, t),
                                onClick: _ ? $.playYes : void 0,
                                onMouseEnter: _ ? $.playHighlight : void 0,
                            },
                            u().createElement('div', { className: C()(B_.bigLock, !i && m && B_.bigLock__visible) }),
                            o &&
                                u().createElement(
                                    Qe,
                                    { body: o_.tooltipArgs.body, header: o_.tooltipArgs.header },
                                    u().createElement(
                                        'div',
                                        { className: B_.vehicleContainer },
                                        u().createElement('div', { className: B_.vehicleImage }),
                                    ),
                                ),
                            u().createElement(A_, {
                                cardIndex: e,
                                size: l,
                                className: B_.mainReward,
                                classNames: { icon: B_.mainRewardIcon, iconContainer: B_.rewardImageContainer },
                            }),
                            m &&
                                u().createElement(
                                    'div',
                                    { className: B_.cardInfoContainer },
                                    u().createElement(
                                        'div',
                                        { className: B_.cardInfo },
                                        o &&
                                            u().createElement(
                                                i_,
                                                k_({}, o_, {
                                                    size: y_(n),
                                                    className: B_.vehicleName,
                                                    classNames: { vehicleTypeContainer: B_.vehicleTypeContainer },
                                                }),
                                            ),
                                        u().createElement('div', { className: B_.title }, c.label),
                                        u().createElement(ar, {
                                            text: String(R.strings.comp7.yearlyRewards.subtitle.$dyn(c.name)),
                                            classMix: B_.subTitle,
                                        }),
                                        u().createElement(m_, {
                                            cardIndex: e,
                                            visibleRewardsCount: S_(n),
                                            className: B_.additionalRewards,
                                        }),
                                        u().createElement(D_, { rewardsState: d, className: B_.rewardsStatus }),
                                    ),
                                ),
                            u().createElement(
                                'div',
                                { className: B_.seasonPointsContainer },
                                m &&
                                    u().createElement(
                                        'div',
                                        { className: B_.venzel },
                                        u().createElement('div', { className: B_.peak }),
                                        u().createElement(
                                            'div',
                                            { className: B_.lines },
                                            u().createElement('div', { className: B_.line }),
                                            u().createElement('div', { className: B_.line }),
                                        ),
                                    ),
                                u().createElement(f_, {
                                    cardIndex: e,
                                    size: w_(a, n),
                                    className: B_.seasonPoints,
                                    classNames: { pointWrapper: B_.seasonPointWrapper },
                                }),
                                m &&
                                    u().createElement(
                                        'div',
                                        { className: C()(B_.venzel, B_.venzel__right) },
                                        u().createElement('div', { className: B_.peak }),
                                        u().createElement(
                                            'div',
                                            { className: B_.lines },
                                            u().createElement('div', { className: B_.line }),
                                            u().createElement('div', { className: B_.line }),
                                        ),
                                    ),
                            ),
                            u().createElement('div', { className: C()(B_.lock, !i && _ && B_.lock__visible) }),
                        );
                    }),
                    x_ = {
                        base: 'Card_base_4c',
                        cardContent: 'Card_cardContent_83',
                        cardContentInner: 'Card_cardContentInner_b9',
                        cardContentInner__selected: 'Card_cardContentInner__selected_f6',
                    },
                    N_ = ({ cardIndex: e, cardState: t, className: a }) =>
                        u().createElement(
                            'div',
                            { className: C()(x_.base, a) },
                            u().createElement(
                                'div',
                                { className: x_.cardContent },
                                u().createElement(R_, {
                                    cardIndex: e,
                                    cardState: t,
                                    className: C()(x_.cardContentInner, x_[`cardContentInner__${t}`]),
                                }),
                            ),
                        ),
                    P_ = {
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
                    T_ = (0, q.Pi)(() => {
                        const e = t_().model,
                            t = de().model,
                            a = (0, s.useState)(!0),
                            n = a[0],
                            r = a[1],
                            i = a_(),
                            o = t.year.state.get(),
                            l = e.computes.cardsLength(),
                            c = e.computes.bestRewardsCardIndex(),
                            d = c.possible,
                            m = c.guaranteed,
                            _ = l - 1,
                            E = (0, s.useState)(_),
                            g = E[0],
                            p = E[1],
                            h = ((e, t, a, n) =>
                                e === Hl.Finished
                                    ? null != n
                                        ? n
                                        : 0
                                    : void 0 !== a
                                      ? wt(0, t, a + 1)
                                      : void 0 !== n
                                        ? wt(0, t, n + 1)
                                        : 0)(o, _, d, m),
                            b = (0, s.useCallback)(() => {
                                i.clear(), r(!1);
                            }, [i]);
                        (0, s.useEffect)(
                            () =>
                                Ne(() => {
                                    if (!n) return;
                                    if (g === h) return void b();
                                    const e = g === _ ? 800 : 400;
                                    i.run(() => {
                                        n && p((e) => wt(0, _, e - 1));
                                    }, e);
                                }),
                            [i, n, _, h, g, b],
                        );
                        const f = (0, s.useCallback)(
                            (e) => () => {
                                b(), p(e);
                            },
                            [b],
                        );
                        return u().createElement(
                            'div',
                            { className: P_.base },
                            ua(l, (e) => {
                                const t = e === g ? 'selected' : 'collapsed';
                                return u().createElement(
                                    'div',
                                    { className: C()(P_.card, P_[`card__${t}`]), onClick: f(e), key: e },
                                    u().createElement('div', {
                                        className: C()(P_.highlight, !n && 'selected' === t && P_.highlight__visible),
                                    }),
                                    0 === e &&
                                        u().createElement('div', { className: C()(P_.divider, P_.divider__left) }),
                                    u().createElement(N_, { cardIndex: e, cardState: t }),
                                    u().createElement('div', { className: P_.shadow }),
                                    u().createElement('div', { className: C()(P_.divider, P_.divider__right) }),
                                );
                            }),
                        );
                    }),
                    L_ = 'ErrorState_base_27',
                    I_ = 'ErrorState_titleContainer_56',
                    M_ = 'ErrorState_alertIcon_7a',
                    O_ = 'ErrorState_title_55',
                    H_ = 'ErrorState_description_57',
                    W_ = R.strings.comp7.yearlyRewards.error,
                    $_ = () =>
                        u().createElement(
                            'div',
                            { className: L_ },
                            u().createElement(
                                'div',
                                { className: I_ },
                                u().createElement('div', { className: M_ }),
                                u().createElement('div', { className: O_ }, W_.title()),
                            ),
                            u().createElement('div', { className: H_ }, W_.description()),
                        ),
                    U_ = '500ms',
                    z_ = (e, t) => (e >= B.Medium ? (t ? ya.x110 : ya.x84) : t ? ya.x84 : ya.x64),
                    G_ = (e) => {
                        switch (e) {
                            case Hl.Active:
                                return R.strings.comp7.yearlyRewards.rank.current();
                            case Hl.OffSeason:
                            case Hl.Finished:
                                return R.strings.comp7.yearlyRewards.rank.achieved();
                            default:
                                return (
                                    console.error(`Provide string for current/achieved rank for YearState: ${e}`), ''
                                );
                        }
                    },
                    j_ = 'LegendItem_base_10',
                    q_ = 'LegendItem_pointsContainer_02',
                    V_ = 'LegendItem_pointsCount_ff',
                    Q_ = 'LegendItem_pointsCount__current_43',
                    X_ = 'LegendItem_currentRankContainer_38',
                    Y_ = 'LegendItem_currentRankContainer__visible_ea',
                    K_ = 'LegendItem_rankString_9f',
                    Z_ = 'LegendItem_rank_95',
                    J_ = 'LegendItem_seasonPoint_a7',
                    eE = 'LegendItem_seasonPoint__current_3e',
                    tE = (0, q.Pi)(({ rank: e, count: t, isHovered: a, className: n }) => {
                        const r = S().mediaSize,
                            s = t_().model.root.get(),
                            i = s.currentRank,
                            o = s.seasonPointsReceived,
                            l = e === i,
                            c = de().model.year.state.get(),
                            d = l ? ((e) => (e ? Gm.Achieved : Gm.Possible))(o) : Gm.Achieved;
                        return u().createElement(
                            'div',
                            { className: C()(j_, n) },
                            u().createElement(Sa, { rank: e, size: z_(r, e === i) }),
                            u().createElement(
                                'div',
                                { className: q_ },
                                u().createElement('div', { className: C()(V_, l && Q_) }, t),
                                u().createElement(p_, {
                                    state: d,
                                    size: l ? E_.x24 : E_.x16,
                                    className: C()(J_, l && eE),
                                }),
                            ),
                            l &&
                                u().createElement(
                                    'div',
                                    { className: C()(X_, a && Y_) },
                                    u().createElement(Kn, {
                                        text: G_(c),
                                        binding: { rank: u().createElement('div', { className: Z_ }, xa(e)) },
                                        classMix: K_,
                                    }),
                                ),
                        );
                    }),
                    aE = {
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
                    nE = (e, t) =>
                        t
                            ? 'none'
                            : -1 === e || 0 === e
                              ? 'left'
                              : e >= 1 && e <= 4
                                ? 'center'
                                : 5 === e
                                  ? 'right'
                                  : 'none',
                    rE = (0, q.Pi)(({ className: e }) => {
                        const t = t_().model.root.get().currentRank,
                            a = (0, s.useRef)(null),
                            n = (0, s.useState)(!1),
                            r = n[0],
                            i = n[1],
                            o = l_.findIndex((e) => e.rank === t);
                        return (
                            (0, s.useEffect)(() => {
                                var e;
                                const t = aE.items__noOverflow;
                                if (r) {
                                    const e = parseInt(U_, 10);
                                    return Cr(() => {
                                        var e;
                                        null == (e = a.current) || e.classList.add(t);
                                    }, e);
                                }
                                null == (e = a.current) || e.classList.remove(t);
                            }, [r]),
                            u().createElement(
                                'div',
                                { className: C()(aE.base, e) },
                                u().createElement(
                                    'div',
                                    {
                                        ref: a,
                                        className: C()(
                                            aE.items,
                                            aE[`items__mask_${nE(o, r)}`],
                                            -1 !== o && aE.items__withCurrentRank,
                                            r && aE.items__hovered,
                                        ),
                                        onMouseEnter: () => {
                                            W('comp_7_yearly_reward_slide'), i(!0);
                                        },
                                        onMouseLeave: () => i(!1),
                                    },
                                    u().createElement(
                                        'div',
                                        { className: C()(aE.inner, !r && aE[`inner__${o}`]) },
                                        l_.map(({ rank: e, count: a }) =>
                                            u().createElement(tE, {
                                                rank: e,
                                                count: a,
                                                isHovered: r,
                                                key: e,
                                                className: C()(aE.item, e === t && aE.item__current),
                                            }),
                                        ),
                                    ),
                                ),
                                u().createElement(
                                    'div',
                                    { className: aE.description },
                                    R.strings.comp7.yearlyRewards.description(),
                                ),
                            )
                        );
                    }),
                    sE = 'StatusBanner_base_af',
                    uE = 'StatusBanner_line_81',
                    iE = 'StatusBanner_description_46',
                    oE = ({ className: e }) =>
                        u().createElement(
                            'div',
                            { className: C()(sE, e) },
                            u().createElement('div', { className: uE }),
                            u().createElement(
                                'div',
                                { className: iE },
                                R.strings.comp7.yearlyRewards.banner.willReceived(),
                            ),
                        ),
                    lE = 'YearlyRewardsPage_base_39',
                    cE = 'YearlyRewardsPage_headersWrapper_8e',
                    dE = 'YearlyRewardsPage_contentWrapper_73',
                    mE = 'YearlyRewardsPage_cardsContainer_90',
                    _E = 'YearlyRewardsPage_legend_2b',
                    EE = R.strings.comp7.page.heading,
                    gE = (0, q.Pi)(() => {
                        const e = t_().model,
                            t = (0, Pe.useSpring)(Ee);
                        return u().createElement(
                            'div',
                            { className: lE },
                            u().createElement(
                                'div',
                                { className: cE },
                                u().createElement(ut, { className: K }, EE.yearlyRewards()),
                                u().createElement(Lr, null),
                            ),
                            u().createElement(
                                Pe.animated.div,
                                { style: t, className: dE },
                                e.root.get().hasDataError
                                    ? u().createElement($_, null)
                                    : u().createElement(
                                          u().Fragment,
                                          null,
                                          u().createElement('div', { className: mE }, u().createElement(T_, null)),
                                          u().createElement('div', { className: _E }, u().createElement(rE, null)),
                                          u().createElement(oE, null),
                                      ),
                            ),
                        );
                    }),
                    pE = { context: 'model.yearlyRewardsModel' },
                    hE = oe()(({ observableModel: e }) => ({ root: e.object() }), te),
                    bE = hE[0];
                hE[1];
                let fE;
                !(function (e) {
                    (e[(e.NotStarted = 0)] = 'NotStarted'),
                        (e[(e.JustStarted = 1)] = 'JustStarted'),
                        (e[(e.Active = 2)] = 'Active'),
                        (e[(e.EndSoon = 3)] = 'EndSoon'),
                        (e[(e.End = 4)] = 'End'),
                        (e[(e.Disabled = 5)] = 'Disabled');
                })(fE || (fE = {}));
                const vE = 'Row_base_de',
                    AE = 'Row_base__secondary_0a',
                    CE = 'Row_dashes_87',
                    FE = 'Row_dash_0a',
                    DE = ({ text: e, isSecondaryText: t = !1 }) =>
                        u().createElement(
                            'div',
                            { className: C()(vE, t && AE) },
                            e,
                            u().createElement('div', { className: CE }),
                            u().createElement('div', { className: FE }, R.strings.common.common.dash()),
                        ),
                    BE = 'Separator_base_93',
                    wE = 'Separator_base_active_37',
                    yE = ({ isActive: e }) => u().createElement('div', { className: C()(BE, e && wE) }),
                    SE = 'SeasonCard_base_ad',
                    kE = 'SeasonCard_heading_bd',
                    RE = 'SeasonCard_base__muffled_c4',
                    xE = 'SeasonCard_name_8e',
                    NE = 'SeasonCard_status_93',
                    PE = 'SeasonCard_rankImage_26',
                    TE = 'SeasonCard_rankStatus_16',
                    LE = 'SeasonCard_table_17',
                    IE = 'SeasonCard_container_28',
                    ME = 'SeasonCard_condition_6b',
                    OE = 'SeasonCard_glow_54',
                    HE = 'SeasonCard_statisticsAvailability_15',
                    WE = 'SeasonCard_generationOfStatistics_96',
                    $E = R.strings.comp7.yearlyStatistics,
                    UE = R.images.comp7.gui.maps.icons.comp7.ranks,
                    zE = (0, q.Pi)(({ index: e, season: t }) => {
                        const a = de().model,
                            n = a.season.endTimestamp.get(),
                            r = a.season.startTimestamp.get(),
                            s = a.season.state.get(),
                            i = a.season.serverTimestamp.get(),
                            o = ((e) => {
                                switch (e) {
                                    case B.Medium:
                                        return UE.c_200;
                                    case B.Large:
                                        return UE.c_260;
                                    case B.ExtraLarge:
                                        return UE.c_420;
                                    default:
                                        return UE.c_150;
                                }
                            })(S().mediaSize),
                            l = 0 === e;
                        return u().createElement(
                            'div',
                            { className: C()(SE, 0 !== e && RE) },
                            u().createElement(
                                'div',
                                { className: kE },
                                u().createElement('div', { className: xE }, $E.seasonName.$num(e)),
                                l
                                    ? u().createElement(
                                          'div',
                                          { className: NE },
                                          i < n ? Nr(r, n, i) : R.strings.comp7.season.over(),
                                      )
                                    : u().createElement('div', { className: NE }, $E.seasonStatus.$num(e)),
                            ),
                            u().createElement('div', {
                                className: PE,
                                style: { backgroundImage: `url('${o.$dyn('qualification' + (l ? '' : `_${t}`))}')` },
                            }),
                            u().createElement('div', { className: TE }, $E.rankStatus()),
                            u().createElement(
                                'div',
                                { className: LE },
                                u().createElement(
                                    'div',
                                    { className: IE },
                                    u().createElement(DE, { text: $E.rating() }),
                                ),
                                u().createElement(
                                    'div',
                                    { className: IE },
                                    u().createElement(DE, { text: $E.battles() }),
                                    u().createElement(DE, { text: $E.wins(), isSecondaryText: !0 }),
                                ),
                                u().createElement(
                                    'div',
                                    { className: IE },
                                    u().createElement(DE, { text: $E.superPlatoonBattles() }),
                                    u().createElement(DE, { text: $E.wins(), isSecondaryText: !0 }),
                                ),
                            ),
                            u().createElement(yE, { isActive: l }),
                            l &&
                                u().createElement(
                                    u().Fragment,
                                    null,
                                    u().createElement('div', { className: OE }),
                                    u().createElement(
                                        'div',
                                        { className: ME },
                                        s === fE.End
                                            ? u().createElement(Kn, { text: $E.generationOfStatistics(), classMix: WE })
                                            : u().createElement(Kn, {
                                                  text: $E.statisticsAvailability(),
                                                  classMix: HE,
                                              }),
                                    ),
                                ),
                        );
                    }),
                    GE = 'YearlyStatisticsPage_base_87',
                    jE = 'YearlyStatisticsPage_contentWrapper_24',
                    qE = 'YearlyStatisticsPage_cardWrapper_dd',
                    VE = 'YearlyStatisticsPage_divider_a2',
                    QE = 'YearlyStatisticsPage_divider__left_bf',
                    XE = 'YearlyStatisticsPage_divider__right_92',
                    YE = ['blue', 'red', 'green'],
                    KE = (0, q.Pi)(() => {
                        const e = (0, Pe.useSpring)(Ee);
                        return u().createElement(
                            'div',
                            { className: GE },
                            u().createElement(ut, { className: K }, R.strings.comp7.page.heading.yearlyStatistics()),
                            u().createElement(Lr, null),
                            u().createElement(
                                Pe.animated.div,
                                { style: e, className: jE },
                                YE.map((e, t) =>
                                    u().createElement(
                                        'div',
                                        { key: t, className: qE },
                                        0 === t && u().createElement('div', { className: C()(VE, QE) }),
                                        u().createElement(zE, { index: t, season: e }),
                                        u().createElement('div', { className: C()(VE, XE) }),
                                    ),
                                ),
                            ),
                        );
                    }),
                    ZE = { context: 'model.yearlyRewardsModel' },
                    JE = {
                        [me.Progression]: () => u().createElement(Yr, { options: Do }, u().createElement(Fo, null)),
                        [me.RankRewards]: () => u().createElement(wo, { options: xc }, u().createElement(Rc, null)),
                        [me.WeeklyQuests]: () => u().createElement(zc, { options: Um }, u().createElement($m, null)),
                        [me.Leaderboard]: () => u().createElement(Et, { options: zr }, u().createElement(Ur, null)),
                        [me.YearlyRewards]: () =>
                            u().createElement(
                                e_,
                                { options: pE },
                                u().createElement(
                                    Km,
                                    { options: { context: 'model.yearlyRewardsModel' }, mocks: Xm, mode: 'mocks' },
                                    u().createElement(gE, null),
                                ),
                            ),
                        [me.YearlyStatistics]: () =>
                            u().createElement(bE, { options: ZE }, u().createElement(KE, null)),
                    },
                    eg = ({ pageView: e }) => {
                        const t = JE[e];
                        return t ? u().createElement(t, null) : (console.error('Unreachable code: ViewResolver'), null);
                    },
                    tg = {
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
                    ag = { context: 'model.sidebar' },
                    ng = { context: 'model.scheduleInfo' },
                    rg = (0, q.Pi)(() => {
                        const e = be(),
                            t = e.model,
                            a = e.controls,
                            n = t.root.get().pageViewId,
                            r = t.computes.isProgressionInQualification();
                        return u().createElement(
                            'div',
                            {
                                className: C()(
                                    tg.base,
                                    r && !ee() && tg.base__qualification,
                                    !r && tg[`base__${_e[n]}`],
                                ),
                            },
                            u().createElement(
                                'div',
                                { className: tg.viewContainer },
                                u().createElement(ce, { options: ng }, u().createElement(eg, { pageView: n })),
                            ),
                            u().createElement(
                                Re,
                                { options: ag },
                                u().createElement(Ze, { pageView: n, className: tg.sidebar }),
                            ),
                            u().createElement(
                                'div',
                                { className: tg.info },
                                u().createElement(j, {
                                    caption: R.strings.comp7.infoPageButtonLabel(),
                                    type: 'info',
                                    side: 'left',
                                    onClick: a.openInfoPage,
                                }),
                            ),
                            u().createElement(J, { onClose: a.close }),
                        );
                    });
                engine.whenReady.then(() => {
                    H().render(
                        u().createElement(M, null, u().createElement(he, null, u().createElement(rg, null))),
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
    var __webpack_exports__ = __webpack_require__.O(void 0, [926], () => __webpack_require__(13));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
