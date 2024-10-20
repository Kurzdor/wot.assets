(() => {
    var __webpack_modules__ = {
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
                t.r(u), t.d(u, { mouse: () => o, onResize: () => r });
                var a = t(2472),
                    n = t(1176);
                const r = (0, a.E)('clientResized'),
                    i = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') },
                    o = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function u() {
                            e.enabled && (0, n.R)(!1);
                        }
                        function t() {
                            e.enabled && (0, n.R)(!0);
                        }
                        function a() {
                            e.enabled
                                ? e.listeners < 1
                                    ? ((e.initialized = !1),
                                      document.body.removeEventListener('mouseenter', u),
                                      document.body.removeEventListener('mouseleave', t))
                                    : e.initialized ||
                                      ((e.initialized = !0),
                                      document.body.addEventListener('mouseenter', u),
                                      document.body.addEventListener('mouseleave', t))
                                : (0, n.R)(!1);
                        }
                        const r = ['down', 'up', 'move'].reduce(
                            (u, t) => (
                                (u[t] = (function (u) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let n = !0;
                                        const r = `mouse${u}`,
                                            o = i[u]((e) => t([e, 'outside']));
                                        function s(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(r, s),
                                            a(),
                                            () => {
                                                n &&
                                                    (o(),
                                                    window.removeEventListener(r, s),
                                                    (e.listeners -= 1),
                                                    a(),
                                                    (n = !1));
                                            }
                                        );
                                    };
                                })(t)),
                                u
                            ),
                            {},
                        );
                        return Object.assign({}, r, {
                            disable() {
                                (e.enabled = !1), a();
                            },
                            enable() {
                                (e.enabled = !0), a();
                            },
                            enableOutside() {
                                e.enabled && (0, n.R)(!0);
                            },
                            disableOutside() {
                                e.enabled && (0, n.R)(!1);
                            },
                        });
                    })();
            },
            5959: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        events: () => a,
                        getMouseGlobalPosition: () => r,
                        getSize: () => n,
                        graphicsQuality: () => i,
                    });
                var a = t(527);
                function n(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const i = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, u, t) => {
                'use strict';
                function a(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => a });
            },
            2472: (e, u, t) => {
                'use strict';
                function a(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                t.d(u, { E: () => a });
            },
            3138: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => n });
                var a = t(5959);
                const n = { view: t(7641), client: a };
            },
            3722: (e, u, t) => {
                'use strict';
                function a(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function n(e, u, t) {
                    return `url(${a(e, u, t)})`;
                }
                t.r(u), t.d(u, { getBgUrl: () => n, getTextureUrl: () => a });
            },
            6112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => n });
                var a = t(2472);
                const n = {
                    onTextureFrozen: (0, a.E)('self.onTextureFrozen'),
                    onTextureReady: (0, a.E)('self.onTextureReady'),
                    onDomBuilt: (0, a.E)('self.onDomBuilt'),
                    onLoaded: (0, a.E)('self.onLoaded'),
                    onDisplayChanged: (0, a.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, a.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, a.E)('children.onAdded'),
                        onLoaded: (0, a.E)('children.onLoaded'),
                        onRemoved: (0, a.E)('children.onRemoved'),
                        onAttached: (0, a.E)('children.onAttached'),
                        onTextureReady: (0, a.E)('children.onTextureReady'),
                        onRequestPosition: (0, a.E)('children.requestPosition'),
                    },
                };
            },
            7641: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        addModelObserver: () => E,
                        addPreloadTexture: () => o,
                        children: () => a,
                        displayStatus: () => n.W,
                        displayStatusIs: () => w,
                        events: () => r.U,
                        extraSize: () => f,
                        forceTriggerMouseMove: () => b,
                        freezeTextureBeforeResize: () => d,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => v,
                        getScale: () => F,
                        getSize: () => c,
                        getViewGlobalPosition: () => A,
                        isEventHandled: () => g,
                        isFocused: () => h,
                        pxToRem: () => D,
                        remToPx: () => B,
                        resize: () => m,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => C,
                        setEventHandled: () => p,
                        setInputPaddingsRem: () => s,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => T,
                    });
                var a = t(3722),
                    n = t(6112),
                    r = t(6538),
                    i = t(8566);
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function s(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, u, t, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, a);
                }
                function E(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function c(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function A(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: B(u.x), y: B(u.y) };
                }
                function d() {
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
                function C(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function h() {
                    return viewEnv.isFocused();
                }
                function p() {
                    return viewEnv.setEventHandled();
                }
                function g() {
                    return viewEnv.isEventHandled();
                }
                function b() {
                    viewEnv.forceTriggerMouseMove();
                }
                function v() {
                    return viewEnv.getShowingStatus();
                }
                const w = Object.keys(n.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === n.W[u]), e),
                        {},
                    ),
                    f = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    T = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : r.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => r });
                const a = ['args'],
                    n = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                i = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        n = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                    return n;
                                })(u, a);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, i, {
                                          arguments:
                                              ((n = r),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    r = {
                        close(e) {
                            n('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            n(64);
                        },
                        move(e) {
                            n(16, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, u, t) => {
                'use strict';
                let a, n;
                t.d(u, { n: () => a }),
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
                    })(a || (a = {})),
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
                t.d(u, { Z: () => r });
                var a = t(3138);
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
                        const r = a.O.view.addModelObserver(e, t, n);
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
                            const a = this._callbacks[t];
                            void 0 !== a && a(e, u);
                        });
                    }
                }
                n.__instance = void 0;
                const r = n;
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
                t.d(u, { Sw: () => r.Z, B3: () => E, Z5: () => i, B0: () => s, ry: () => C, Sy: () => p });
                class a {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: u, callback: t }) => {
                                    let a = e.target;
                                    do {
                                        if (a === u) return;
                                        a = a.parentNode;
                                    } while (a);
                                    t();
                                });
                            });
                    }
                    static get instance() {
                        return a.__instance || (a.__instance = new a()), a.__instance;
                    }
                    register(e, u) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: u });
                    }
                    unregister(e, u) {
                        const t = e,
                            a = u;
                        (this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== a)),
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
                a.__instance = void 0;
                const n = a;
                var r = t(1358);
                const i = {
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
                const E = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    _ = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var A = t(5521),
                    d = t(3138);
                const F = ['args'];
                function D(e, u, t, a, n, r, i) {
                    try {
                        var o = e[r](i),
                            s = o.value;
                    } catch (e) {
                        return void t(e);
                    }
                    o.done ? u(s) : Promise.resolve(s).then(a, n);
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
                                    return new Promise(function (a, n) {
                                        var r = e.apply(u, t);
                                        function i(e) {
                                            D(r, a, n, i, o, 'next', e);
                                        }
                                        function o(e) {
                                            D(r, a, n, i, o, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    h = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const n = u.args,
                                r = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        n = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                    return n;
                                })(u, F);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, r, {
                                          arguments:
                                              ((a = n),
                                              Object.entries(a).map(([e, u]) => {
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
                        var a;
                    },
                    p = () => h(s.CLOSE),
                    g = (e, u) => {
                        e.keyCode === A.n.ESCAPE && u();
                    };
                var b = t(7572);
                const v = n.instance,
                    w = {
                        DataTracker: r.Z,
                        ViewModel: b.Z,
                        ViewEventType: s,
                        NumberFormatType: E,
                        RealFormatType: _,
                        TimeFormatType: c,
                        DateFormatType: m,
                        makeGlobalBoundingBox: B,
                        sendMoveEvent: (e) => h(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: p,
                        sendClosePopOverEvent: () => h(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            h(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, a, n = R.invalid('resId'), r) => {
                            const i = d.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                E = o.y,
                                _ = o.width,
                                c = o.height,
                                m = {
                                    x: d.O.view.pxToRem(l) + i.x,
                                    y: d.O.view.pxToRem(E) + i.y,
                                    width: d.O.view.pxToRem(_),
                                    height: d.O.view.pxToRem(c),
                                };
                            h(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: n,
                                direction: u,
                                bbox: B(m),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => g(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            g(e, p);
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
                            for (const a in u)
                                if (Object.prototype.hasOwnProperty.call(u, a)) {
                                    const n = Object.prototype.toString.call(u[a]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = u[a];
                                        t[a] = [];
                                        for (let u = 0; u < n.length; u++) t[a].push({ value: e(n[u].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[a] = e(u[a]))
                                            : (t[a] = u[a]);
                                }
                            return t;
                        },
                        ClickOutsideManager: v,
                        SystemLocale: i,
                        UserLocale: o,
                    };
                window.ViewEnvHelper = w;
            },
            6863: (e, u, t) => {
                'use strict';
                var a = t(6179),
                    n = t.n(a),
                    r = t(493),
                    i = t.n(r);
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
                var s = t(3138);
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var E;
                function _(e, u, t) {
                    const a = (function (e, u) {
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
                        r = Math.min(a, n);
                    return {
                        extraLarge: r === t.extraLarge.weight,
                        large: r === t.large.weight,
                        medium: r === t.medium.weight,
                        small: r === t.small.weight,
                        extraSmall: r === t.extraSmall.weight,
                        extraLargeWidth: a === t.extraLarge.weight,
                        largeWidth: a === t.large.weight,
                        mediumWidth: a === t.medium.weight,
                        smallWidth: a === t.small.weight,
                        extraSmallWidth: a === t.extraSmall.weight,
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
                })(E || (E = {}));
                const c = s.O.client.getSize('rem'),
                    m = c.width,
                    A = c.height,
                    d = Object.assign({ width: m, height: A }, _(m, A, l)),
                    F = (0, a.createContext)(d),
                    D = ['children'],
                    B = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, D);
                        const n = (0, a.useContext)(F),
                            r = n.extraLarge,
                            i = n.large,
                            s = n.medium,
                            l = n.small,
                            E = n.extraSmall,
                            _ = n.extraLargeWidth,
                            c = n.largeWidth,
                            m = n.mediumWidth,
                            A = n.smallWidth,
                            d = n.extraSmallWidth,
                            B = n.extraLargeHeight,
                            C = n.largeHeight,
                            h = n.mediumHeight,
                            p = n.smallHeight,
                            g = n.extraSmallHeight,
                            b = { extraLarge: B, large: C, medium: h, small: p, extraSmall: g };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && r) return u;
                            if (t.large && i) return u;
                            if (t.medium && s) return u;
                            if (t.small && l) return u;
                            if (t.extraSmall && E) return u;
                        } else {
                            if (t.extraLargeWidth && _) return o(u, t, b);
                            if (t.largeWidth && c) return o(u, t, b);
                            if (t.mediumWidth && m) return o(u, t, b);
                            if (t.smallWidth && A) return o(u, t, b);
                            if (t.extraSmallWidth && d) return o(u, t, b);
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
                                if (t.smallHeight && p) return u;
                                if (t.extraSmallHeight && g) return u;
                            }
                        }
                        return null;
                    };
                (B.defaultProps = {
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
                    (0, a.memo)(B);
                const C = (e) => {
                        const u = (0, a.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    },
                    h = (0, a.memo)(({ children: e }) => {
                        const u = (0, a.useContext)(F),
                            t = (0, a.useState)(u),
                            r = t[0],
                            i = t[1],
                            o = (0, a.useCallback)((e, u) => {
                                const t = s.O.view.pxToRem(e),
                                    a = s.O.view.pxToRem(u);
                                i(Object.assign({ width: t, height: a }, _(t, a, l)));
                            }, []);
                        C(() => {
                            engine.on('clientResized', o);
                        }),
                            (0, a.useEffect)(() => () => engine.off('clientResized', o), [o]);
                        const E = (0, a.useMemo)(() => Object.assign({}, r), [r]);
                        return n().createElement(F.Provider, { value: E }, e);
                    });
                var p = t(6483),
                    g = t.n(p),
                    b = t(5521),
                    v = t(4179);
                const w = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function f(e = b.n.NONE, u = w, t = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== b.n.NONE)
                            return (
                                window.addEventListener('keydown', a, t),
                                () => {
                                    window.removeEventListener('keydown', a, t);
                                }
                            );
                        function a(a) {
                            if (a.keyCode === e) {
                                if (s.O.view.isEventHandled()) return;
                                s.O.view.setEventHandled(), u(a), t && a.stopPropagation();
                            }
                        }
                    }, [u, e, t]);
                }
                let T;
                function x(e) {
                    return e.replace(/-/g, '_');
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(T || (T = {}));
                const y = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    S = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    k = (e, u, t = T.left) => e.split(u).reduce(t === T.left ? y : S, []),
                    M = (() => {
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
                    P = ['zh_cn', 'zh_sg', 'zh_tw'];
                let L;
                var N;
                ((N = L || (L = {})).SHORT_DATE = 'short-date'),
                    (N.SHORT_TIME = 'short-time'),
                    (N.SHORT_DATE_TIME = 'short-date-time'),
                    (N.FULL_DATE = 'full-date'),
                    (N.FULL_DATE_TIME = 'full-date-time'),
                    (N.MONTH = 'month'),
                    (N.MONTH_DATE = 'month-date'),
                    (N.DATE_MONTH = 'date-month'),
                    (N.MONTH_YEAR = 'month-year'),
                    (N.WEEK_DAY = 'week-day'),
                    (N.WEEK_DAY_TIME = 'week-day-time'),
                    (N.YEAR = 'year'),
                    (N.DATE_YEAR = 'date-year'),
                    Date.now();
                const O = (e = 1) => {
                        const u = new Error().stack;
                        let t,
                            a = R.invalid('resId');
                        return (
                            u &&
                                ((t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                window.__feature &&
                                    window.__feature !== t &&
                                    window.subViews[t] &&
                                    (a = window.subViews[t].id)),
                            { caller: t, stack: u, resId: a }
                        );
                    },
                    I = (e, u) => e.split('.').reduce((e, u) => e && e[u], u),
                    H = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    U = (e, u) => (e.length > 0 ? `${e}.${u}` : u),
                    W = v.Sw.instance;
                let G;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(G || (G = {}));
                const X = (e = 'model', u = G.Deep) => {
                    const t = (0, a.useState)(0),
                        n = (t[0], t[1]),
                        r = (0, a.useMemo)(() => O(), []),
                        i = r.caller,
                        o = r.resId,
                        s = (0, a.useMemo)(
                            () => (window.__feature && window.__feature !== i ? `subViews.${i}.${e}` : e),
                            [i, e],
                        ),
                        l = (0, a.useState)(() =>
                            ((e) => {
                                const u = I(e, window);
                                for (const e in u) 'function' == typeof u[e] && (u[e] = u[e].bind(u));
                                return H(u) ? u.value : u;
                            })(
                                ((e) =>
                                    ((e, u) =>
                                        e.split('.').reduce((e, u) => {
                                            const t = I(`${e}.${u}`, window);
                                            return H(t) ? ((e, u) => `${e}.${u}.value`)(e, u) : `${e}.${u}`;
                                        }))(e))(s),
                            ),
                        ),
                        E = l[0],
                        _ = l[1],
                        c = (0, a.useRef)(-1);
                    return (
                        C(() => {
                            if (
                                ('boolean' == typeof u &&
                                    ((u = u ? G.Deep : G.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                u !== G.None)
                            ) {
                                const t = (e) => {
                                        ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                        u === G.Deep
                                            ? (e === E && n((e) => e + 1), _(e))
                                            : _(Object.assign([], e));
                                    },
                                    a = ((e) => {
                                        const u = ((e) => {
                                                const u = O(),
                                                    t = u.caller,
                                                    a = u.resId,
                                                    n =
                                                        window.__feature && window.__feature !== t && t
                                                            ? `subViews.${t}`
                                                            : '';
                                                return { modelPrefix: n, modelPath: U(n, ''), resId: a };
                                            })(),
                                            t = u.modelPrefix,
                                            a = e.split('.');
                                        if (a.length > 0) {
                                            const e = [a[0]];
                                            return (
                                                a.reduce((u, a) => {
                                                    const n = I(U(t, `${u}.${a}`), window);
                                                    return H(n)
                                                        ? (e.push(n.id), `${u}.${a}.value`)
                                                        : (e.push(a), `${u}.${a}`);
                                                }),
                                                e.reduce((e, u) => e + '.' + u)
                                            );
                                        }
                                        return '';
                                    })(e);
                                c.current = W.addCallback(a, t, o, u === G.Deep);
                            }
                        }),
                        (0, a.useEffect)(() => {
                            if (u !== G.None)
                                return () => {
                                    W.removeCallback(c.current, o);
                                };
                        }, [o, u]),
                        E
                    );
                };
                v.Sw.instance;
                var Y = t(9887),
                    V = t.n(Y);
                let j, z, K;
                !(function (e) {
                    (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = l.small.width)] = 'Small'),
                        (e[(e.Medium = l.medium.width)] = 'Medium'),
                        (e[(e.Large = l.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                })(j || (j = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.width)] = 'Small'),
                            (e[(e.Medium = l.medium.width)] = 'Medium'),
                            (e[(e.Large = l.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                    })(z || (z = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = l.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.height)] = 'Small'),
                            (e[(e.Medium = l.medium.height)] = 'Medium'),
                            (e[(e.Large = l.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.height)] = 'ExtraLarge');
                    })(K || (K = {}));
                const $ = () => {
                        const e = (0, a.useContext)(F),
                            u = e.width,
                            t = e.height,
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return j.ExtraLarge;
                                    case e.large:
                                        return j.Large;
                                    case e.medium:
                                        return j.Medium;
                                    case e.small:
                                        return j.Small;
                                    case e.extraSmall:
                                        return j.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), j.ExtraSmall;
                                }
                            })(e),
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return z.ExtraLarge;
                                    case e.largeWidth:
                                        return z.Large;
                                    case e.mediumWidth:
                                        return z.Medium;
                                    case e.smallWidth:
                                        return z.Small;
                                    case e.extraSmallWidth:
                                        return z.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), z.ExtraSmall;
                                }
                            })(e),
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return K.ExtraLarge;
                                    case e.largeHeight:
                                        return K.Large;
                                    case e.mediumHeight:
                                        return K.Medium;
                                    case e.smallHeight:
                                        return K.Small;
                                    case e.extraSmallHeight:
                                        return K.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), K.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: n, mediaWidth: r, mediaHeight: i, remScreenWidth: u, remScreenHeight: t };
                    },
                    q = ['xl', 'lg', 'md', 'sm', 'xs'],
                    Q = (e) => e.includes('_') && ((e) => q.includes(e))(e.split('_').at(-1)),
                    Z = [j.ExtraLarge, j.Large, j.Medium, j.Small, j.ExtraSmall],
                    J = (e, u) =>
                        Object.keys(e).reduce((t, a) => {
                            if (a in t) return t;
                            if (Q(a)) {
                                const n = a.split('_').slice(0, -1).join('_');
                                if (n in t) return t;
                                const r = Z.indexOf(u),
                                    i = (-1 !== r ? q.slice(r) : [])
                                        .map((e) => n + '_' + e)
                                        .find((u) => void 0 !== e[u]),
                                    o = i ? e[i] : void 0;
                                return (t[n] = void 0 !== o ? o : e[n]), t;
                            }
                            const n = e[a];
                            return (
                                void 0 === n ||
                                    ((e, u) => q.some((t) => void 0 !== u[`${e}_${t}`]))(a, e) ||
                                    (t[a] = n),
                                t
                            );
                        }, {}),
                    ee = (e, u = J) => {
                        const t = (
                            (e, u = J) =>
                            (t) => {
                                const r = $().mediaSize,
                                    i = (0, a.useMemo)(() => u(t, r), [t, r]);
                                return n().createElement(e, i);
                            }
                        )(e, u);
                        return n().memo((u) =>
                            Object.keys(u).some((e) => Q(e) && void 0 !== u[e])
                                ? n().createElement(t, u)
                                : n().createElement(e, u),
                        );
                    },
                    ue = {
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
                    te = [
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
                function ae() {
                    return (
                        (ae =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        ae.apply(this, arguments)
                    );
                }
                Object.keys(V());
                const ne = {
                        XL: { mt: ue.mt__XL, mr: ue.mr__XL, mb: ue.mb__XL, ml: ue.ml__XL },
                        LG: { mt: ue.mt__LG, mr: ue.mr__LG, mb: ue.mb__LG, ml: ue.ml__LG },
                        MDp: { mt: ue.mt__MDp, mr: ue.mr__MDp, mb: ue.mb__MDp, ml: ue.ml__MDp },
                        MD: { mt: ue.mt__MD, mr: ue.mr__MD, mb: ue.mb__MD, ml: ue.ml__MD },
                        SMp: { mt: ue.mt__SMp, mr: ue.mr__SMp, mb: ue.mb__SMp, ml: ue.ml__SMp },
                        SM: { mt: ue.mt__SM, mr: ue.mr__SM, mb: ue.mb__SM, ml: ue.ml__SM },
                        XS: { mt: ue.mt__XS, mr: ue.mr__XS, mb: ue.mb__XS, ml: ue.ml__XS },
                    },
                    re = (Object.keys(ne), ['mt', 'mr', 'mb', 'ml']),
                    ie = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    oe = ee((e) => {
                        let u = e.className,
                            t = e.width,
                            r = e.height,
                            i = e.m,
                            o = e.mt,
                            s = void 0 === o ? i : o,
                            l = e.mr,
                            E = void 0 === l ? i : l,
                            _ = e.mb,
                            c = void 0 === _ ? i : _,
                            m = e.ml,
                            A = void 0 === m ? i : m,
                            d = e.column,
                            F = e.row,
                            D = e.flexDirection,
                            B = void 0 === D ? (d ? 'column' : F && 'row') || void 0 : D,
                            C = e.flexStart,
                            h = e.center,
                            p = e.flexEnd,
                            b = e.spaceBetween,
                            v = e.spaceAround,
                            w = e.justifyContent,
                            f =
                                void 0 === w
                                    ? (C ? 'flex-start' : h && 'center') ||
                                      (p && 'flex-end') ||
                                      (b && 'space-between') ||
                                      (v && 'space-around') ||
                                      void 0
                                    : w,
                            T = e.alignItems,
                            x = void 0 === T ? (C ? 'flex-start' : h && 'center') || (p && 'flex-end') || void 0 : T,
                            R = e.alignSelf,
                            y = e.wrap,
                            S = e.flexWrap,
                            k = void 0 === S ? (y ? 'wrap' : void 0) : S,
                            M = e.grow,
                            P = e.shrink,
                            L = e.flex,
                            N = void 0 === L ? (M || P ? `${M ? 1 : 0} ${P ? 1 : 0} auto` : void 0) : L,
                            O = e.style,
                            I = e.children,
                            H = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, te);
                        const U = (0, a.useMemo)(() => {
                                const e = { mt: s, mr: E, mb: c, ml: A },
                                    u = ((e) =>
                                        re.reduce((u, t) => {
                                            const a = e[t];
                                            return a && 'number' != typeof a ? u.concat(ne[!0 === a ? 'MD' : a][t]) : u;
                                        }, []))(e),
                                    a = ((e) =>
                                        re.reduce((u, t) => {
                                            const a = e[t];
                                            return 'number' == typeof a && (u[ie[t]] = a + 'rem'), u;
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, O, a, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== r && 'number' == typeof r ? r + 'rem' : r,
                                        flex: N,
                                        alignSelf: R,
                                        display: B || x ? 'flex' : void 0,
                                        flexDirection: B,
                                        flexWrap: k,
                                        justifyContent: f,
                                        alignItems: x,
                                    }),
                                    computedClassNames: u,
                                };
                            }, [t, r, s, E, c, A, O, N, R, B, k, f, x]),
                            W = U.computedStyle,
                            G = U.computedClassNames;
                        return n().createElement('div', ae({ className: g()(ue.base, ...G, u), style: W }, H), I);
                    }),
                    se = ({ binding: e, text: u = '', classMix: t, alignment: r = T.left }) =>
                        null === u
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : n().createElement(
                                  a.Fragment,
                                  null,
                                  u.split('\n').map((u, i) =>
                                      n().createElement(
                                          'div',
                                          { className: g()('FormatText_base_d0', t), key: `${u}-${i}` },
                                          ((e, u, t) =>
                                              e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                                                  t && e in t
                                                      ? t[e]
                                                      : ((e, u = T.left) => {
                                                            const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                            return P.includes(t)
                                                                ? M(e)
                                                                : ((e, u = T.left) => {
                                                                      let t = [];
                                                                      const a =
                                                                              /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                          n = e.replace(/&nbsp;/g, ' ');
                                                                      return (
                                                                          k(n, /( )/, u).forEach(
                                                                              (e) => (t = t.concat(k(e, a, T.left))),
                                                                          ),
                                                                          t
                                                                      );
                                                                  })(e, u);
                                                        })(e, u),
                                              ))(u, r, e).map((e, u) =>
                                              n().createElement(a.Fragment, { key: `${u}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              );
                var le = t(3532),
                    Ee = t.n(le);
                const _e = {
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
                    ce = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function me() {
                    return (
                        (me =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        me.apply(this, arguments)
                    );
                }
                Object.keys(V());
                const Ae = Object.keys(Ee()),
                    de = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    Fe = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    De = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Be =
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
                            'heading-H56': de,
                            'heading-H36': de,
                            'heading-H28': Fe,
                            'heading-H24': Fe,
                            'heading-H24R': Fe,
                            'heading-H22': Fe,
                            'heading-H20R': Fe,
                            'heading-H18': Fe,
                            'heading-H15': De,
                            'heading-H14': De,
                            'paragraph-P24': Fe,
                            'paragraph-P18': Fe,
                            'paragraph-P16': Fe,
                            'paragraph-P14': De,
                            'paragraph-P12': De,
                            'paragraph-P10': De,
                        }),
                    Ce =
                        (Object.keys(Be),
                        (e) =>
                            e
                                ? ((e) => Ae.includes(e))(e)
                                    ? { colorClassName: _e[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    he = ee((e) => {
                        let u = e.text,
                            t = e.variant,
                            r = e.className,
                            i = e.color,
                            o = e.m,
                            s = e.mt,
                            l = void 0 === s ? o : s,
                            E = e.mr,
                            _ = void 0 === E ? o : E,
                            c = e.mb,
                            m = void 0 === c ? o : c,
                            A = e.ml,
                            d = void 0 === A ? o : A,
                            F = e.style,
                            D = e.format,
                            B = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, ce);
                        const C = (0, a.useMemo)(() => {
                                const e = Ce(i),
                                    u = e.colorClassName,
                                    t = e.colorStyle,
                                    a = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, F, a), colorClassName: u };
                            }, [F, i]),
                            h = C.computedStyle,
                            p = C.colorClassName;
                        return n().createElement(
                            oe,
                            me(
                                {
                                    className: g()(_e.base, t && _e[t], p, r),
                                    style: h,
                                    mt: !0 === l ? Be[t || 'paragraph-P16'].mt : l,
                                    mr: !0 === _ ? Be[t || 'paragraph-P16'].mr : _,
                                    mb: !0 === m ? Be[t || 'paragraph-P16'].mb : m,
                                    ml: !0 === d ? Be[t || 'paragraph-P16'].ml : d,
                                },
                                B,
                            ),
                            void 0 !== D ? n().createElement(se, me({}, D, { text: u })) : u,
                        );
                    });
                function pe(e) {
                    engine.call('PlaySound', e);
                }
                const ge = {
                        base: 'Preview_base_1f',
                        base__hovered: 'Preview_base__hovered_ee',
                        icon: 'Preview_icon_f3',
                        icon__small: 'Preview_icon__small_a1',
                        icon__normal: 'Preview_icon__normal_5c',
                        base__mouseDown: 'Preview_base__mouseDown_d0',
                        label: 'Preview_label_2e',
                        base__visibleLabel: 'Preview_base__visibleLabel_92',
                    },
                    be = [
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
                function ve() {
                    return (
                        (ve =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        ve.apply(this, arguments)
                    );
                }
                let we;
                !(function (e) {
                    (e.SMALL = 'small'), (e.NORMAL = 'normal');
                })(we || (we = {}));
                const fe = (0, a.memo)((e) => {
                        let u = e.label,
                            t = e.isVisibleLabel,
                            r = void 0 !== t && t,
                            i = e.autofocus,
                            o = void 0 !== i && i,
                            s = e.soundHover,
                            l = void 0 === s ? 'highlight' : s,
                            E = e.soundClick,
                            _ = void 0 === E ? 'play' : E,
                            c = e.size,
                            m = void 0 === c ? we.NORMAL : c,
                            A = e.onClick,
                            d = e.onMouseEnter,
                            F = e.onMouseLeave,
                            D = e.onMouseDown,
                            B = e.onMouseUp,
                            C = e.onFocus,
                            h = e.onBlur,
                            p = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, be);
                        const b = (0, a.useState)(!1),
                            v = b[0],
                            w = b[1],
                            f = (0, a.useState)(!1),
                            T = f[0],
                            x = f[1],
                            R = (0, a.useState)(o),
                            y = R[0],
                            S = R[1],
                            k = (0, a.useRef)(null),
                            M = (0, a.useCallback)(() => {
                                k.current && (k.current.focus(), S(!0));
                            }, []),
                            P = (0, a.useCallback)(
                                (e) => {
                                    y && null !== k.current && !k.current.contains(e.target) && S(!1);
                                },
                                [y],
                            );
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mousedown', P),
                                () => {
                                    document.removeEventListener('mousedown', P);
                                }
                            ),
                            [P],
                        ),
                            (0, a.useEffect)(() => {
                                S(o);
                            }, [o]);
                        const L = (0, a.useCallback)(
                                (e) => {
                                    A && A(e);
                                },
                                [A],
                            ),
                            N = (0, a.useCallback)(
                                (e) => {
                                    w(!0), D && D(e), _ && pe(_), o && M();
                                },
                                [o, D, M, _],
                            ),
                            O = (0, a.useCallback)(
                                (e) => {
                                    w(!1), B && B(e);
                                },
                                [B],
                            ),
                            I = (0, a.useCallback)(
                                (e) => {
                                    d && d(e), l && pe(l), x(!0);
                                },
                                [d, l],
                            ),
                            H = (0, a.useCallback)(
                                (e) => {
                                    w(!1), x(!1), F && F(e);
                                },
                                [F],
                            ),
                            U = (0, a.useCallback)(
                                (e) => {
                                    S(!0), C && C(e);
                                },
                                [C],
                            ),
                            W = (0, a.useCallback)(
                                (e) => {
                                    S(!1), h && h(e);
                                },
                                [h],
                            ),
                            G = g()(
                                ge.base,
                                r && ge.base__visibleLabel,
                                v && ge.base__mouseDown,
                                T && ge.base__hovered,
                                y && ge.base__focused,
                            ),
                            X = g()(ge.icon, ge[`icon__${m}`]);
                        return n().createElement(
                            'div',
                            ve(
                                {
                                    ref: k,
                                    className: G,
                                    onClick: L,
                                    onMouseEnter: I,
                                    onMouseLeave: H,
                                    onMouseDown: N,
                                    onMouseUp: O,
                                    onFocus: U,
                                    onBlur: W,
                                },
                                p,
                            ),
                            n().createElement('div', { className: X }),
                            n().createElement('div', { className: ge.label }, u),
                        );
                    }),
                    Te = [
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
                function xe(e) {
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
                const Re = (e, u, t = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: v.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: a,
                                },
                                t,
                            ),
                        );
                    },
                    ye = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            n = e.args,
                            r = e.onMouseEnter,
                            i = e.onMouseLeave,
                            o = e.onMouseDown,
                            s = e.onClick,
                            l = e.ignoreShowDelay,
                            E = void 0 !== l && l,
                            _ = e.ignoreMouseClick,
                            c = void 0 !== _ && _,
                            m = e.decoratorId,
                            A = void 0 === m ? 0 : m,
                            d = e.isEnabled,
                            F = void 0 === d || d,
                            D = e.targetId,
                            B = void 0 === D ? 0 : D,
                            C = e.onShow,
                            h = e.onHide,
                            p = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, Te);
                        const g = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            b = (0, a.useMemo)(() => B || O().resId, [B]),
                            v = (0, a.useCallback)(() => {
                                (g.current.isVisible && g.current.timeoutId) ||
                                    (Re(t, A, { isMouseEvent: !0, on: !0, arguments: xe(n) }, b),
                                    C && C(),
                                    (g.current.isVisible = !0));
                            }, [t, A, n, b, C]),
                            w = (0, a.useCallback)(() => {
                                if (g.current.isVisible || g.current.timeoutId) {
                                    const e = g.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (g.current.timeoutId = 0)),
                                        Re(t, A, { on: !1 }, b),
                                        g.current.isVisible && h && h(),
                                        (g.current.isVisible = !1);
                                }
                            }, [t, A, b, h]),
                            f = (0, a.useCallback)((e) => {
                                g.current.isVisible &&
                                    ((g.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (g.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(g.current.prevTarget) && w();
                                    }, 200)));
                            }, []);
                        return (
                            (0, a.useEffect)(() => {
                                const e = g.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', f, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', f, { capture: !0 }),
                                            e && window.clearTimeout(e);
                                    }
                                );
                            }, []),
                            (0, a.useEffect)(() => {
                                !1 === F && w();
                            }, [F, w]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', w),
                                    () => {
                                        window.removeEventListener('mouseleave', w), w();
                                    }
                                ),
                                [w],
                            ),
                            F
                                ? (0, a.cloneElement)(
                                      u,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((T = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((g.current.timeoutId = window.setTimeout(v, E ? 100 : 400)),
                                                          r && r(e),
                                                          T && T(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  w(), null == i || i(u), null == e || e(u);
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  !1 === c && w(), null == s || s(u), null == e || e(u);
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  !1 === c && w(), null == o || o(u), null == e || e(u);
                                              })(u.props.onMouseDown),
                                          },
                                          p,
                                      ),
                                  )
                                : u
                        );
                        var T;
                    },
                    Se = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function ke() {
                    return (
                        (ke =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        ke.apply(this, arguments)
                    );
                }
                const Me = R.views.common.tooltip_window.simple_tooltip_content,
                    Pe = (e) => {
                        let u = e.children,
                            t = e.body,
                            r = e.header,
                            i = e.note,
                            o = e.alert,
                            s = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, Se);
                        const E = (0, a.useMemo)(() => {
                            const e = Object.assign({}, s, { body: t, header: r, note: i, alert: o });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [o, t, r, i, s]);
                        return n().createElement(
                            ye,
                            ke(
                                {
                                    contentId:
                                        ((_ = null == s ? void 0 : s.hasHtmlContent),
                                        _ ? Me.SimpleTooltipHtmlContent('resId') : Me.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: E,
                                },
                                l,
                            ),
                            u,
                        );
                        var _;
                    },
                    Le = ['children'];
                function Ne() {
                    return (
                        (Ne =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Ne.apply(this, arguments)
                    );
                }
                const Oe = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, Le);
                        return n().createElement(
                            ye,
                            Ne(
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
                    Ie = ['tooltipType'],
                    He = ['children', 'wrap'];
                function Ue(e, u) {
                    if (null == e) return {};
                    var t,
                        a,
                        n = {},
                        r = Object.keys(e);
                    for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                    return n;
                }
                let We;
                !(function (e) {
                    (e.Simple = 'simple'), (e.Backport = 'backport'), (e.Base = 'base');
                })(We || (We = {}));
                const Ge = (e) => (e.tooltipType, Ue(e, Ie)),
                    Xe = (e) => {
                        let u = e.children,
                            t = e.wrap,
                            a = Ue(e, He);
                        const r = t ? n().createElement('div', null, u) : u;
                        return a.tooltipType === We.Simple
                            ? n().createElement(Pe, Ge(a), r)
                            : a.tooltipType === We.Backport
                              ? n().createElement(Oe, Ge(a), r)
                              : ((e) => e.tooltipType === We.Base)(a)
                                ? n().createElement(ye, Ge(a), r)
                                : u;
                    },
                    Ye = R.strings.event.WtEventPortals,
                    Ve = ({ onBuyButtonClick: e }) => {
                        const u = (0, a.useState)(0),
                            t = u[0],
                            r = u[1],
                            i = $().mediaSize >= j.Medium,
                            o = (0, a.useCallback)(() => {
                                e(), pe('play');
                            }, [e]),
                            s = (0, a.useCallback)(() => {
                                pe('highlight');
                            }, []),
                            l = (0, a.useRef)(null),
                            E = (0, a.useRef)(null),
                            _ = () => {
                                const e = [l, E].sort(
                                    (e, u) =>
                                        (u.current ? u.current.offsetWidth : 0) -
                                        (e.current ? e.current.offsetWidth : 0),
                                )[0];
                                window.requestAnimationFrame(() => {
                                    e.current && r(e.current.offsetWidth);
                                });
                            };
                        (0, a.useEffect)(
                            () => (
                                _(),
                                window.addEventListener('resize', _),
                                () => {
                                    window.removeEventListener('resize', _);
                                }
                            ),
                            [],
                        );
                        const c = { tooltipType: We.Simple, body: Ye.buyButtonTooltip() },
                            m = (0, a.useMemo)(() => ({ width: `${t}px` }), [t]);
                        return n().createElement(
                            Xe,
                            c,
                            n().createElement(
                                'div',
                                { className: 'BuyButton_base_33', style: m, onMouseEnter: s, onClick: o },
                                n().createElement('div', { className: 'BuyButton_image_9e', ref: l }),
                                n().createElement('div', { className: 'BuyButton_imageClickArea_81' }),
                                n().createElement('div', { className: 'BuyButton_text_da', ref: E }, Ye.buyButton()),
                                n().createElement(
                                    'div',
                                    {
                                        className: 'BuyButton_flareWrapper_58',
                                        style: {
                                            maskImage: `url('R.images.white_tiger.gui.maps.icons.portals.buy_key_button${i ? '_large' : ''}')`,
                                        },
                                    },
                                    n().createElement('div', { className: 'BuyButton_flare_ed' }),
                                ),
                            ),
                        );
                    },
                    je = {
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
                    ze = [
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
                function Ke() {
                    return (
                        (Ke =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Ke.apply(this, arguments)
                    );
                }
                class $e extends n().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && pe(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && pe(this.props.soundClick);
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
                            a = e.goto,
                            r = e.side,
                            i = e.type,
                            o = e.classNames,
                            s = e.onMouseEnter,
                            l = e.onMouseLeave,
                            E = e.onMouseDown,
                            _ = e.onMouseUp,
                            c =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        n = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                    return n;
                                })(e, ze)),
                            m = g()(je.base, je[`base__${i}`], je[`base__${r}`], null == o ? void 0 : o.base),
                            A = g()(je.icon, je[`icon__${i}`], je[`icon__${r}`], null == o ? void 0 : o.icon),
                            d = g()(je.glow, null == o ? void 0 : o.glow),
                            F = g()(je.caption, je[`caption__${i}`], null == o ? void 0 : o.caption),
                            D = g()(je.goto, null == o ? void 0 : o.goto);
                        return n().createElement(
                            'div',
                            Ke(
                                {
                                    className: m,
                                    onMouseEnter: this._onMouseEnter(s),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(E),
                                    onMouseUp: this._onMouseUp(_),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                c,
                            ),
                            'info' !== i && n().createElement('div', { className: je.shine }),
                            n().createElement('div', { className: A }, n().createElement('div', { className: d })),
                            n().createElement('div', { className: F }, u),
                            a && n().createElement('div', { className: D }, a),
                        );
                    }
                }
                $e.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const qe = ({ onClose: e }) =>
                        n().createElement(
                            'div',
                            { className: 'CloseButton_base_1c' },
                            n().createElement($e, {
                                caption: R.strings.menu.viewHeader.closeBtn.label(),
                                type: 'close',
                                side: 'right',
                                onClick: e,
                            }),
                        ),
                    Qe = ({ onClick: e, goto: u }) =>
                        n().createElement(
                            'div',
                            { className: 'BackButton_base_2f' },
                            n().createElement($e, {
                                caption: R.strings.menu.viewHeader.backBtn.label(),
                                type: 'back',
                                side: 'left',
                                onClick: e,
                                goto: u,
                            }),
                        ),
                    Ze = 100,
                    Je = R.strings.event.WtEventPortals,
                    eu = ({ animationDelayStepsCount: e = 1 }) => {
                        const u = (0, a.useMemo)(() => ({ animationDelay: e * Ze + 'ms' }), [e]);
                        return n().createElement(
                            'div',
                            { className: 'LootBoxDisabledWarning_basePortal_47', style: u },
                            n().createElement(
                                'div',
                                { className: 'LootBoxDisabledWarning_wrapper_ce' },
                                n().createElement('div', { className: 'LootBoxDisabledWarning_hintIcon_8c' }),
                                n().createElement(
                                    'div',
                                    { className: 'LootBoxDisabledWarning_textWrapper_2d' },
                                    Je.warning(),
                                ),
                            ),
                        );
                    },
                    uu = ({ animationDelayStepsCount: e = 1, children: u }) =>
                        n().createElement(
                            'div',
                            { className: 'DelayedAnimationWrapper_base_af', style: { animationDelay: e * Ze + 'ms' } },
                            u,
                        );
                let tu, au, nu, ru;
                !(function (e) {
                    (e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH');
                })(tu || (tu = {})),
                    (function (e) {
                        (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                    })(au || (au = {})),
                    (function (e) {
                        (e.primary = 'primary'), (e.main = 'main');
                    })(nu || (nu = {})),
                    (function (e) {
                        (e.Center = 'center'), (e.Bottom = 'bottom');
                    })(ru || (ru = {}));
                const iu = {
                        base: 'Checkbox_base_36',
                        base__disabled: 'Checkbox_base__disabled_08',
                        base__center: 'Checkbox_base__center_52',
                        base__bottom: 'Checkbox_base__bottom_28',
                        input: 'Checkbox_input_37',
                        base__mouseDown: 'Checkbox_base__mouseDown_45',
                        base__small: 'Checkbox_base__small_18',
                        base__medium: 'Checkbox_base__medium_12',
                        base__large: 'Checkbox_base__large_f7',
                        base__extraLarge: 'Checkbox_base__extraLarge_c9',
                        alertOverlay: 'Checkbox_alertOverlay_52',
                        base__alert: 'Checkbox_base__alert_b7',
                        blink: 'Checkbox_blink_5e',
                        base__checked: 'Checkbox_base__checked_a2',
                        inputHoverOverlay: 'Checkbox_inputHoverOverlay_36',
                        highlight: 'Checkbox_highlight_b8',
                        base__main: 'Checkbox_base__main_3a',
                        base__primary: 'Checkbox_base__primary_ab',
                        checkmark: 'Checkbox_checkmark_60',
                        fadeIn: 'Checkbox_fadeIn_1a',
                        label: 'Checkbox_label_bc',
                        labelContent: 'Checkbox_labelContent_64',
                    },
                    ou = [
                        'id',
                        'isChecked',
                        'isDisabled',
                        'isAlert',
                        'size',
                        'type',
                        'soundHover',
                        'soundClick',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseUp',
                        'onMouseDown',
                        'onClick',
                        'onChange',
                        'onFocus',
                        'onBlur',
                        'text',
                        'contentStyles',
                        'children',
                        'alignment',
                    ];
                function su() {
                    return (
                        (su =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        su.apply(this, arguments)
                    );
                }
                const lu = (e) => {
                        let u = e.id,
                            t = e.isChecked,
                            r = void 0 !== t && t,
                            i = e.isDisabled,
                            o = void 0 !== i && i,
                            s = e.isAlert,
                            l = void 0 !== s && s,
                            E = e.size,
                            _ = void 0 === E ? au.medium : E,
                            c = e.type,
                            m = void 0 === c ? nu.primary : c,
                            A = e.soundHover,
                            d = void 0 === A ? 'highlight' : A,
                            F = e.soundClick,
                            D = void 0 === F ? 'play' : F,
                            B = e.onMouseEnter,
                            C = e.onMouseLeave,
                            h = e.onMouseUp,
                            p = e.onMouseDown,
                            b = e.onClick,
                            v = e.onChange,
                            w = e.onFocus,
                            f = e.onBlur,
                            T = e.text,
                            x = e.contentStyles,
                            R = e.children,
                            y = e.alignment,
                            S = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, ou);
                        const k = (0, a.useState)(!1),
                            M = k[0],
                            P = k[1],
                            L = (0, a.useState)(!1),
                            N = (L[0], L[1]),
                            O = (0, a.useCallback)(
                                (e) => {
                                    o || (v && v(), b && b(e));
                                },
                                [o, v, b],
                            ),
                            I = (0, a.useCallback)(
                                (e) => {
                                    const u = e.button === tu.LEFT;
                                    o || (u && P(!0), u && p && p(e), D && pe(D));
                                },
                                [o, p, D],
                            ),
                            H = (0, a.useCallback)(
                                (e) => {
                                    o || (P(!1), h && h(e));
                                },
                                [o, h],
                            ),
                            U = (0, a.useCallback)(
                                (e) => {
                                    o || (B && B(e), d && pe(d));
                                },
                                [o, B, d],
                            ),
                            W = (0, a.useCallback)(
                                (e) => {
                                    o || (P(!1), C && C(e));
                                },
                                [o, C],
                            ),
                            G = (0, a.useCallback)(
                                (e) => {
                                    o || (N(!0), w && w(e));
                                },
                                [o, w],
                            ),
                            X = (0, a.useCallback)(
                                (e) => {
                                    o || (N(!1), f && f(e));
                                },
                                [o, f],
                            ),
                            Y = n().createElement(
                                'div',
                                { className: iu.label },
                                n().createElement(
                                    'div',
                                    { className: g()(iu.labelContent, 's-labelContent'), style: x },
                                    T || R,
                                ),
                            );
                        return n().createElement(
                            'div',
                            su(
                                {
                                    id: u,
                                    className: g()(iu.base, iu[`base__${_}`], iu[`base__${m}`], {
                                        [iu.base__checked]: r,
                                        [iu.base__disabled]: o,
                                        [iu.base__mouseDown]: M,
                                        [iu.base__alert]: l,
                                        [iu.base__center]: y === ru.Center,
                                        [iu.base__bottom]: y === ru.Bottom,
                                    }),
                                    onClick: O,
                                    onMouseEnter: U,
                                    onMouseLeave: W,
                                    onMouseDown: I,
                                    onMouseUp: H,
                                    onFocus: G,
                                    onBlur: X,
                                },
                                S,
                            ),
                            n().createElement(
                                'div',
                                { className: iu.input },
                                n().createElement('div', { className: iu.alertOverlay }),
                                n().createElement('div', { className: iu.inputHoverOverlay }),
                                n().createElement('div', { className: iu.highlight }),
                            ),
                            n().createElement('div', { className: iu.checkmark }),
                            ((T || R) && Y) || null,
                        );
                    },
                    Eu = ({ isChecked: e, onClick: u }) =>
                        n().createElement(
                            'div',
                            { className: 'AnimationCheckbox_animationCheckbox_c5' },
                            n().createElement(lu, {
                                text: R.strings.event.WtEventPortals.inside.showAnimation(),
                                size: au.large,
                                onClick: u,
                                isChecked: e,
                            }),
                        );
                let _u, cu, mu, Au, du, Fu, Du, Bu, Cu, hu;
                function pu() {
                    return (
                        (pu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        pu.apply(this, arguments)
                    );
                }
                var gu, bu;
                !(function (e) {
                    (e.HUNTER = 'hunter'), (e.BOSS = 'boss'), (e.TANK = 'tank');
                })(_u || (_u = {})),
                    (function (e) {
                        (e.HUNTER = 'hunter'), (e.BOSS = 'boss'), (e.TANK = 'tank');
                    })(cu || (cu = {})),
                    (function (e) {
                        (e.PRIMARY = 'G168_KJpz_T_III'),
                            (e.SECONDARY = 'R212_Object_265T'),
                            (e.MAIN = 'Pl26_Czolg_P_Wz_46'),
                            (e.BOSS = 'Pl26_Czolg_P_Wz_46_Verbesserter');
                    })(mu || (mu = {})),
                    (function (e) {
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
                    })(Au || (Au = {})),
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
                    })(du || (du = {})),
                    ((bu = Fu || (Fu = {})).Big = 'big'),
                    (bu.Small = 'small'),
                    (bu.Mini = 'mini'),
                    (bu.S600x450 = 's600x450'),
                    (bu.S400x300 = 's400x300'),
                    (bu.S296x222 = 's296x222'),
                    (bu.S232x174 = 's232x174'),
                    (bu.S180x135 = 's180x135'),
                    (bu.S128x100 = 's128x100'),
                    (bu.S80x80 = 's80x80'),
                    (bu.S48x48 = 's48x48'),
                    ((gu = Du || (Du = {})).MULTI = 'multi'),
                    (gu.CURRENCY = 'currency'),
                    (gu.PREMIUM_PLUS = 'premium_plus'),
                    (gu.NUMBER = 'number'),
                    (gu.STRING = 'string'),
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
                    })(Bu || (Bu = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(Cu || (Cu = {})),
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
                    })(hu || (hu = {}));
                const vu = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const a = n().createElement('div', { className: t }, e);
                        if (u.header || u.body) return n().createElement(Pe, u, a);
                        const r = u.contentId,
                            i = u.args,
                            o = null == i ? void 0 : i.contentId;
                        return r || o
                            ? n().createElement(ye, pu({}, u, { contentId: r || o }), a)
                            : n().createElement(Oe, u, a);
                    },
                    wu = ({ format: e, value: u }) => {
                        const t = ((e, u = 'integral') => {
                            let t;
                            return (
                                (t = 'gold' === u ? v.B3.GOLD : v.B3.INTEGRAL),
                                void 0 === e ? '' : v.Z5.getNumberFormat(e, t)
                            );
                        })(u, e);
                        return t ? n().createElement('span', null, t) : null;
                    },
                    fu =
                        (Au.Items,
                        Au.Equipment,
                        Au.Xp,
                        Au.XpFactor,
                        Au.Blueprints,
                        Au.BlueprintsAny,
                        Au.Goodies,
                        Au.Berths,
                        Au.Slots,
                        Au.Tokens,
                        Au.CrewSkins,
                        Au.CrewBooks,
                        Au.Customizations,
                        Au.CreditsFactor,
                        Au.TankmenXp,
                        Au.TankmenXpFactor,
                        Au.FreeXpFactor,
                        Au.BattleToken,
                        Au.PremiumUniversal,
                        Au.NaturalCover,
                        Au.BpCoin,
                        Au.BattlePassSelectToken,
                        Au.BattlaPassFinalAchievement,
                        Au.BattleBadge,
                        Au.BonusX5,
                        Au.CrewBonusX3,
                        Au.NewYearFillers,
                        Au.NewYearInvoice,
                        Au.EpicSelectToken,
                        Au.Comp7TokenWeeklyReward,
                        Au.Comp7TokenCouponReward,
                        Au.BattleBoosterGift,
                        Au.CosmicLootboxCommon,
                        Au.CosmicLootboxSilver,
                        Au.SelectableBonus,
                        Au.WtStamp,
                        Au.WtTicket,
                        Au.WtMainPrizeDiscount,
                        Au.WtHunter,
                        Au.WtHunterCollection,
                        Au.Gold,
                        Au.Credits,
                        Au.Crystal,
                        Au.FreeXp,
                        Au.BattlePassPoints,
                        Au.PremiumPlus,
                        Au.Premium,
                        {
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
                        }),
                    Tu = ({
                        name: e,
                        image: u,
                        isPeriodic: t = !1,
                        size: a = Fu.Big,
                        special: r,
                        value: i,
                        valueType: o,
                        style: s,
                        className: l,
                        classNames: E,
                        tooltipArgs: _,
                        periodicIconTooltipArgs: c,
                    }) => {
                        const m = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case Bu.BATTLE_BOOSTER:
                                    case Bu.BATTLE_BOOSTER_REPLACE:
                                        return Cu.BATTLE_BOOSTER;
                                }
                            })(r),
                            A = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case Bu.BATTLE_BOOSTER:
                                        return hu.BATTLE_BOOSTER;
                                    case Bu.BATTLE_BOOSTER_REPLACE:
                                        return hu.BATTLE_BOOSTER_REPLACE;
                                    case Bu.BUILT_IN_EQUIPMENT:
                                        return hu.BUILT_IN_EQUIPMENT;
                                    case Bu.EQUIPMENT_PLUS:
                                        return hu.EQUIPMENT_PLUS;
                                    case Bu.EQUIPMENT_TROPHY_BASIC:
                                        return hu.EQUIPMENT_TROPHY_BASIC;
                                    case Bu.EQUIPMENT_TROPHY_UPGRADED:
                                        return hu.EQUIPMENT_TROPHY_UPGRADED;
                                    case Bu.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return hu.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case Bu.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return hu.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case Bu.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return hu.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case Bu.PROGRESSION_STYLE_UPGRADED_1:
                                        return hu.PROGRESSION_STYLE_UPGRADED_1;
                                    case Bu.PROGRESSION_STYLE_UPGRADED_2:
                                        return hu.PROGRESSION_STYLE_UPGRADED_2;
                                    case Bu.PROGRESSION_STYLE_UPGRADED_3:
                                        return hu.PROGRESSION_STYLE_UPGRADED_3;
                                    case Bu.PROGRESSION_STYLE_UPGRADED_4:
                                        return hu.PROGRESSION_STYLE_UPGRADED_4;
                                }
                            })(r),
                            d = ((e, u) => {
                                if (void 0 === e) return null;
                                switch (u) {
                                    case Du.MULTI: {
                                        const u = Number(e);
                                        return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                                    }
                                    case Du.CURRENCY:
                                    case Du.NUMBER:
                                        return n().createElement(wu, { format: 'integral', value: Number(e) });
                                    case Du.PREMIUM_PLUS: {
                                        const u = Number(e);
                                        return isNaN(u) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(i, o);
                        return n().createElement(
                            'div',
                            { className: g()(fu.base, fu[`base__${a}`], l), style: s },
                            n().createElement(
                                vu,
                                { tooltipArgs: _, className: fu.tooltipWrapper },
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement(
                                        'div',
                                        { className: g()(fu.image, null == E ? void 0 : E.image) },
                                        m &&
                                            n().createElement('div', {
                                                className: g()(fu.highlight, null == E ? void 0 : E.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${m}_highlight)`,
                                                },
                                            }),
                                        u &&
                                            n().createElement('div', {
                                                className: g()(fu.icon, null == E ? void 0 : E.rewardIcon),
                                                style: { backgroundImage: `url(${u})` },
                                            }),
                                        A &&
                                            n().createElement('div', {
                                                className: g()(fu.overlay, null == E ? void 0 : E.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${A}_overlay)`,
                                                },
                                            }),
                                    ),
                                    d &&
                                        n().createElement(
                                            'div',
                                            {
                                                className: g()(
                                                    fu.info,
                                                    fu[`info__${e}`],
                                                    o === Du.MULTI && fu.info__multi,
                                                    null == E ? void 0 : E.info,
                                                ),
                                            },
                                            d,
                                        ),
                                ),
                            ),
                            t &&
                                n().createElement(
                                    vu,
                                    { tooltipArgs: c },
                                    n().createElement('div', {
                                        className: g()(fu.timer, null == E ? void 0 : E.periodicIcon),
                                    }),
                                ),
                        );
                    };
                let xu;
                !(function (e) {
                    (e.STYLE_3D = 'randomStyle3d'),
                        (e.STYLE_2D = 'randomStyle2d'),
                        (e.DECAL = 'randomDecal'),
                        (e.DEFAULT = 'default');
                })(xu || (xu = {}));
                const Ru = ({ children: e, checked: u, classMix: t }) => {
                        const a = g()('CheckMark_base_d1', t);
                        return n().createElement(
                            'div',
                            { className: a },
                            e,
                            u && n().createElement('div', { className: 'CheckMark_checkMark_20' }),
                        );
                    },
                    yu = ({
                        classMix: e,
                        reward: { isCollected: u, icon: t, index: r, tooltipType: i },
                        hasTooltip: o = !0,
                    }) => {
                        const s = (0, a.useMemo)(() => {
                            if (o)
                                return i === xu.DEFAULT
                                    ? {
                                          contentId:
                                              R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                                  'resId',
                                              ),
                                          args: { tooltipId: r },
                                      }
                                    : {
                                          contentId: R.views.white_tiger.lobby.tooltips.InfoTooltipView('resId'),
                                          args: { tooltipType: i },
                                      };
                        }, [o, r, i]);
                        return n().createElement(
                            Ru,
                            { checked: u, classMix: e },
                            n().createElement(Tu, { size: Fu.Small, image: t || '', name: '', tooltipArgs: s }),
                        );
                    },
                    Su = R.strings.event.WtEventPortals.inside,
                    ku = ({ reward: e, portalType: u }) =>
                        n().createElement(
                            n().Fragment,
                            null,
                            e.items.map(({ value: e }, t) => {
                                const a = R.views.white_tiger.lobby.tooltips.InfoTooltipView('resId'),
                                    r = { tooltipType: e.tooltipType },
                                    i = ((e) =>
                                        u === _u.HUNTER
                                            ? Su.rewards.hunterCollectionElement()
                                            : e.tooltipType === xu.STYLE_3D
                                              ? Su.rewards.style3d()
                                              : '')(e),
                                    o = e.tooltipType === xu.STYLE_3D,
                                    s = n().createElement(
                                        'div',
                                        { className: 'CollectionReward_base_52' },
                                        n().createElement(yu, {
                                            reward: e,
                                            hasTooltip: !1,
                                            classMix: 'CollectionReward_reward_ff',
                                        }),
                                        i,
                                        n().createElement('div', { className: o ? 'CollectionReward_info_df' : '' }),
                                    );
                                return n().createElement(
                                    'div',
                                    { key: t },
                                    n().createElement(ye, { contentId: a, args: r }, s),
                                );
                            }),
                        ),
                    Mu = R.strings.event.WtEventPortals.inside,
                    Pu = (0, a.memo)(({ title: e, index: u, isHunterPortal: t }) =>
                        n().createElement(se, {
                            classMix: g()('Title_base_6b', t && 'Title_base__hunter_7e'),
                            text: Mu.numbering(),
                            binding: { number: u + 1, title: e },
                        }),
                    ),
                    Lu = R.strings.gui_lootboxes,
                    Nu = ({
                        title: e,
                        halfWidth: u,
                        index: t,
                        probability: r,
                        portalType: i,
                        doubleLine: o = !1,
                        children: s,
                    }) => {
                        const l = g()(
                                'RewardListItem_base_44',
                                u && 'RewardListItem_base__halfWidth_14',
                                o && 'RewardListItem_base__doubleLine_17',
                                i === _u.HUNTER && 'RewardListItem_base__hunter_1a',
                            ),
                            E = (0, a.useMemo)(() => ({ animationDelay: (t + 2) * Ze + 'ms' }), [t]);
                        return n().createElement(
                            'div',
                            { className: l, key: t, style: E },
                            n().createElement(Pu, { title: e, index: t, isHunterPortal: i === _u.HUNTER }),
                            n().createElement(
                                'div',
                                { className: 'RewardListItem_rewardSlot_94' },
                                n().createElement(
                                    'div',
                                    { className: 'RewardListItem_probability_ae' },
                                    Boolean(r) &&
                                        n().createElement(
                                            n().Fragment,
                                            null,
                                            n().createElement(
                                                Pe,
                                                {
                                                    header: Lu.tooltips.probability.header(),
                                                    body: Lu.tooltips.probability.body(),
                                                },
                                                n().createElement('div', {
                                                    className: 'RewardListItem_probabilityIcon_30',
                                                }),
                                            ),
                                            n().createElement(se, {
                                                text: Lu.probabilitiesOverlay.optional.procentProbability(),
                                                binding: { probability: r },
                                                classMix: 'RewardListItem_probabilityValue_7d',
                                            }),
                                        ),
                                ),
                                n().createElement(
                                    'div',
                                    { className: 'RewardListItem_content_7c' },
                                    n().createElement('div', { className: 'RewardListItem_border_90' }),
                                    s,
                                ),
                            ),
                        );
                    },
                    Ou = 'TankRewards_premiumTankItem_91',
                    Iu = R.strings.event.WtEventPortals.inside.rewards,
                    Hu = {
                        [mu.PRIMARY]: R.images.white_tiger.gui.maps.icons.portals[mu.PRIMARY](),
                        [mu.SECONDARY]: R.images.white_tiger.gui.maps.icons.portals[mu.SECONDARY](),
                    },
                    Uu = { [mu.PRIMARY]: Iu.primaryTank(), [mu.SECONDARY]: Iu.secondaryTank() },
                    Wu = () => {
                        const e = X('model').tanks,
                            u = X('model.rewardTanks.items', G.Shallow),
                            t = (0, a.useMemo)(
                                () => ({
                                    tanks: e.items.map(({ value: { name: u } }, t) =>
                                        t === e.items.length - 1
                                            ? n().createElement('div', { className: Ou, key: t }, u)
                                            : n().createElement(se, {
                                                  text: Iu.tanksSeparator(),
                                                  binding: { tank: u },
                                                  classMix: Ou,
                                                  key: t,
                                              }),
                                    ),
                                }),
                                [e.items],
                            );
                        return n().createElement(
                            'div',
                            { className: 'TankRewards_base_0b' },
                            n().createElement(
                                'div',
                                { className: 'TankRewards_baseWrapper_84' },
                                u.map(({ value: e }) => {
                                    const u = x(e.tankName);
                                    return n().createElement(
                                        Oe,
                                        { args: { tooltipId: e.tooltipId }, key: e.tooltipId },
                                        n().createElement(
                                            'div',
                                            { className: 'TankRewards_tankWrapper_39' },
                                            n().createElement(
                                                Ru,
                                                { checked: e.isCollected },
                                                n().createElement('div', {
                                                    className: 'TankRewards_tankIcon_b5',
                                                    style: { backgroundImage: `url('${Hu[u]}')` },
                                                }),
                                            ),
                                            n().createElement('div', { className: 'TankRewards_tankText_91' }, Uu[u]),
                                        ),
                                    );
                                }),
                            ),
                            n().createElement(
                                Pe,
                                { header: Iu.tanksTooltip.header(), body: Iu.tanksTooltip.body() },
                                n().createElement(
                                    'div',
                                    { className: 'TankRewards_premiumTank_74' },
                                    n().createElement(
                                        'div',
                                        { className: 'TankRewards_premiumTankTextWrapper_ac' },
                                        n().createElement(se, { text: Iu.tanks(), binding: t }),
                                    ),
                                ),
                            ),
                        );
                    },
                    Gu = {},
                    Xu = R.strings.event.WtEventPortals.inside,
                    Yu = (function (e, u, t, a = G.Deep) {
                        const r = (r) => {
                            const i = r.path || u || void 0,
                                o = X(i, i && Gu[i] ? G.None : a),
                                s = Object.assign({}, t(o, r), r);
                            return n().createElement(e, s);
                        };
                        var i;
                        return (r.displayName = `WithModel(${((i = e), i.displayName || i.name || 'Component')})`), r;
                    })(
                        (e) =>
                            n().createElement(
                                Oe,
                                { args: { tooltipId: e.tooltipId } },
                                n().createElement(
                                    'div',
                                    { className: 'TankRent_base_5c' },
                                    n().createElement(
                                        Ru,
                                        { checked: e.isCollected },
                                        n().createElement('div', {
                                            className: 'TankRent_tankIcon_6b',
                                            style: {
                                                backgroundImage: `url('R.images.white_tiger.gui.maps.icons.portals.${x(e.tankName)}')`,
                                            },
                                        }),
                                    ),
                                    n().createElement(
                                        'div',
                                        { className: 'TankRent_tankText_6a' },
                                        n().createElement(se, {
                                            classMix: 'TankRent_header_09',
                                            text: Xu.rent.header(),
                                        }),
                                        n().createElement(se, {
                                            classMix: 'TankRent_description_f0',
                                            text: Xu.rent.description(),
                                        }),
                                    ),
                                ),
                            ),
                        'model.rewardTank',
                        (e, u) => Object.assign({}, u, e),
                    ),
                    Vu = R.strings.event.WtEventPortals.inside,
                    ju = ({ reward: e }) =>
                        n().createElement(
                            'div',
                            { className: 'CustomizationReward_base_d5' },
                            e.items.map(({ value: e }, u) =>
                                n().createElement(yu, { classMix: 'CustomizationReward_reward_93', key: u, reward: e }),
                            ),
                            n().createElement(
                                'div',
                                { className: 'CustomizationReward_description_4c' },
                                Vu.rewards.hunterCollectionElement(),
                            ),
                        );
                function zu() {
                    return (
                        (zu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        zu.apply(this, arguments)
                    );
                }
                const Ku = R.strings.event.WtEventPortals.inside,
                    $u = ({ portalType: e }) => {
                        const u = X('model'),
                            t = u.rewards,
                            r = u.tanksProbability,
                            i = u.rewardsProbability,
                            o = u.customizationProbability,
                            s = X('model.collectionReward'),
                            l = X('model.customizationReward'),
                            E = g()('RewardList_base_ac', e === _u.HUNTER && 'RewardList_base__hunter_4c'),
                            _ = (0, a.useMemo)(() => {
                                const u = {
                                    title: Ku.highProbability(),
                                    children: t.items.map(({ value: e }, u) =>
                                        n().createElement(yu, { classMix: 'RewardList_reward_3f', key: u, reward: e }),
                                    ),
                                    probability: i,
                                    doubleLine: !0,
                                };
                                return {
                                    [_u.HUNTER]: () => [
                                        u,
                                        {
                                            title: Ku.lowProbability(),
                                            children: n().createElement(ju, {
                                                reward: l,
                                                portalType: e,
                                                key: 'customization',
                                            }),
                                            halfWidth: !0,
                                            probability: o,
                                        },
                                    ],
                                    [_u.BOSS]: () => [
                                        Object.assign({}, u, {
                                            children: [
                                                ...(Array.isArray(u.children) ? u.children : [u.children]),
                                                n().createElement(
                                                    'div',
                                                    { className: 'RewardList_tankRentWrapper_5d', key: 'tank-rent' },
                                                    n().createElement(Yu, null),
                                                ),
                                            ],
                                        }),
                                        {
                                            title: Ku.mediumProbability(),
                                            children: n().createElement(ku, {
                                                reward: s,
                                                portalType: e,
                                                key: 'collection',
                                            }),
                                            halfWidth: !0,
                                            probability: o,
                                        },
                                        {
                                            title: Ku.lowProbabilityTank(),
                                            children: n().createElement(Wu, { key: 'tank-rewards' }),
                                            probability: r,
                                        },
                                    ],
                                    [_u.TANK]: () => [],
                                }
                                    [e]()
                                    .map((u, t) =>
                                        n().createElement(Nu, zu({}, u, { key: t, index: t, portalType: e })),
                                    );
                            }, [s, l, e, t.items, r, i, o]);
                        return n().createElement(
                            'div',
                            { className: E },
                            n().createElement('div', { className: 'RewardList_subtitle_72' }, Ku.subtitle()),
                            _,
                        );
                    },
                    qu = {
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
                let Qu, Zu;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(Qu || (Qu = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
                    })(Zu || (Zu = {}));
                const Ju = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: r,
                    disabled: i,
                    mixClass: o,
                    soundHover: s,
                    soundClick: l,
                    onMouseEnter: E,
                    onMouseMove: _,
                    onMouseDown: c,
                    onMouseUp: m,
                    onMouseLeave: A,
                    onClick: d,
                }) => {
                    const F = (0, a.useRef)(null),
                        D = (0, a.useState)(t),
                        B = D[0],
                        C = D[1],
                        h = (0, a.useState)(!1),
                        p = h[0],
                        b = h[1],
                        v = (0, a.useState)(!1),
                        w = v[0],
                        f = v[1],
                        T = (0, a.useCallback)(() => {
                            i || (F.current && (F.current.focus(), C(!0)));
                        }, [i]),
                        x = (0, a.useCallback)(
                            (e) => {
                                B && null !== F.current && !F.current.contains(e.target) && C(!1);
                            },
                            [B],
                        ),
                        y = (0, a.useCallback)(
                            (e) => {
                                i || (d && d(e));
                            },
                            [i, d],
                        ),
                        S = (0, a.useCallback)(
                            (e) => {
                                i || (null !== s && pe(s), E && E(e), f(!0));
                            },
                            [i, s, E],
                        ),
                        k = (0, a.useCallback)(
                            (e) => {
                                _ && _(e);
                            },
                            [_],
                        ),
                        M = (0, a.useCallback)(
                            (e) => {
                                i || (m && m(e), b(!1));
                            },
                            [i, m],
                        ),
                        P = (0, a.useCallback)(
                            (e) => {
                                i || (null !== l && pe(l), c && c(e), t && T(), b(!0));
                            },
                            [i, l, c, T, t],
                        ),
                        L = (0, a.useCallback)(
                            (e) => {
                                i || (A && A(e), b(!1));
                            },
                            [i, A],
                        ),
                        N = g()(
                            qu.base,
                            qu[`base__${r}`],
                            {
                                [qu.base__disabled]: i,
                                [qu[`base__${u}`]]: u,
                                [qu.base__focus]: B,
                                [qu.base__highlightActive]: p,
                                [qu.base__firstHover]: w,
                            },
                            o,
                        ),
                        O = g()(qu.state, qu.state__default);
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
                            C(t);
                        }, [t]),
                        n().createElement(
                            'div',
                            {
                                ref: F,
                                className: N,
                                onMouseEnter: S,
                                onMouseMove: k,
                                onMouseUp: M,
                                onMouseDown: P,
                                onMouseLeave: L,
                                onClick: y,
                            },
                            r !== Qu.ghost &&
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement('div', { className: qu.back }),
                                    n().createElement('span', { className: qu.texture }),
                                ),
                            n().createElement(
                                'span',
                                { className: O },
                                n().createElement('span', { className: qu.stateDisabled }),
                                n().createElement('span', { className: qu.stateHighlightHover }),
                                n().createElement('span', { className: qu.stateHighlightActive }),
                            ),
                            n().createElement(
                                'span',
                                { className: qu.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                Ju.defaultProps = { type: Qu.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const et = (0, a.memo)(Ju),
                    ut = R.strings.event.WtEventPortals,
                    tt = ({ type: e, lootBoxesCount: u, animationDelayStepsCount: t = 0 }) => {
                        const r = e === cu.HUNTER,
                            i = (0, a.useMemo)(() => ({ isHunterLootBox: r }), [r]),
                            o = (0, a.useMemo)(
                                () => ({
                                    number: n().createElement(
                                        ye,
                                        {
                                            contentId: R.views.white_tiger.lobby.tooltips.LootBoxTooltipView('resId'),
                                            args: i,
                                        },
                                        n().createElement(
                                            'div',
                                            { className: 'LootBoxesCount_valueWrapper_a1' },
                                            n().createElement('div', {
                                                className: g()(
                                                    'LootBoxesCount_value_41',
                                                    r && 'LootBoxesCount_value__hunter_57',
                                                ),
                                            }),
                                            u,
                                        ),
                                    ),
                                }),
                                [r, i, u],
                            ),
                            s = (0, a.useMemo)(() => ({ animationDelay: t * Ze + 'ms' }), [t]);
                        return n().createElement(
                            'div',
                            { className: 'LootBoxesCount_base_37', style: s },
                            0 === u
                                ? ut.inside.currentKeysAmountIs0[e]()
                                : n().createElement(se, { text: ut.inside.currentKeysAmount[e](), binding: o }),
                        );
                    },
                    at = {
                        base: 'AttemptsLeft_base_15',
                        show: 'AttemptsLeft_show_fa',
                        iconContainer: 'AttemptsLeft_iconContainer_02',
                        highlight: 'AttemptsLeft_highlight_32',
                        'translate-down': 'AttemptsLeft_translate-down_fe',
                        'translate-up': 'AttemptsLeft_translate-up_11',
                    },
                    nt = R.strings.event.WtEventPortals,
                    rt = R.strings.event.portalAward,
                    it = ({
                        leftAttemptsCount: e,
                        animationDelayStepsCount: u = 0,
                        displayText: t = nt.boss.left(),
                        isTextChangable: r = !0,
                        isBossLootBox: i,
                    }) => {
                        const o = r && 1 === e,
                            s = (0, a.useMemo)(
                                () => ({
                                    attemptsCount: n().createElement('div', { className: at.highlight }, e),
                                    leftAttemptsCount: n().createElement('div', { className: at.highlight }, e),
                                }),
                                [e],
                            ),
                            l = (0, a.useMemo)(() => ({ animationDelay: u * Ze + 'ms' }), [u]);
                        return void 0 === i
                            ? n().createElement(
                                  ye,
                                  {
                                      contentId:
                                          R.views.white_tiger.lobby.tooltips.GuaranteedRewardTooltipView('resId'),
                                  },
                                  n().createElement(
                                      'div',
                                      { style: l, className: at.base },
                                      o
                                          ? n().createElement('div', { className: at.attemptsLeft }, nt.boss.oneLeft())
                                          : n().createElement(se, { text: t, binding: s, classMix: at.attemptsLeft }),
                                      n().createElement('div', { className: at.iconContainer }),
                                  ),
                              )
                            : n().createElement(
                                  Pe,
                                  {
                                      header: rt.reRollTooltipHeader(),
                                      body: i ? rt.reRollTooltipBossBody() : rt.reRollTooltipHunterBody(),
                                  },
                                  n().createElement(
                                      'div',
                                      { style: l, className: at.base },
                                      o
                                          ? n().createElement('div', { className: at.attemptsLeft }, nt.boss.oneLeft())
                                          : n().createElement(se, { text: t, binding: s, classMix: at.attemptsLeft }),
                                      n().createElement('div', { className: at.iconContainer }),
                                  ),
                              );
                    },
                    ot = 'Footer_runPrice_ad',
                    st = R.strings.event.WtEventPortals,
                    lt = ({ lootBoxType: e }) => {
                        const u = X('model'),
                            t = u.isBoxesEnabled,
                            r = u.portalType,
                            i = u.onRunPortalClick,
                            o = u.mainVehiclePrize,
                            s = u.defaultRunPortalTimes,
                            l = X('model.guaranteedAward'),
                            E = l.attemptsCount,
                            _ = l.leftAttemptsCount,
                            c = l.isIgnored,
                            m = X('model.portalAvailability'),
                            A = m.attemptPrice,
                            d = m.lootBoxesCount,
                            F = X('model').discount,
                            D = (0, a.useCallback)(() => i({ defaultRunPortalTimes: s }), [i, s]),
                            B = s * A,
                            C = Math.round(B * (1 - F / 100)),
                            h = C > d,
                            p = r === _u.TANK,
                            b = (0, a.useMemo)(() => ({ isHunterLootBox: e === cu.HUNTER }), [e]),
                            v = (0, a.useMemo)(() => ({ animationDelay: Tt[r] * Ze + 'ms' }), [r]),
                            w = {
                                currentStartersCount: n().createElement(
                                    'div',
                                    { className: 'Footer_startersCount_55' },
                                    o.discountTokenCount,
                                ),
                                maxStartersCount: o.maxDiscountTokenCount,
                                icon: n().createElement('div', { className: 'Footer_startersIcon_be' }),
                            },
                            f = g()('Footer_base_9e', e === cu.HUNTER && 'Footer_base__hunter_d8'),
                            T = p ? st.inside.buttonGetTank() : st.inside.buttonRunPortal();
                        return n().createElement(
                            'div',
                            { className: f },
                            t &&
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    p &&
                                        n().createElement(se, {
                                            text: st.tank.discount(),
                                            classMix: 'Footer_discount_2c',
                                            binding: w,
                                        }),
                                    n().createElement('div', { className: 'Footer_gradient_94' }),
                                    r === _u.BOSS &&
                                        n().createElement(it, {
                                            animationDelayStepsCount: ft,
                                            displayText: c ? st.boss.notGuaranteed() : void 0,
                                            attemptsCount: c ? void 0 : E,
                                            leftAttemptsCount: c ? void 0 : _,
                                        }),
                                    n().createElement(
                                        'div',
                                        { className: 'Footer_controlsSection_75', style: v },
                                        n().createElement(
                                            ye,
                                            {
                                                contentId:
                                                    R.views.white_tiger.lobby.tooltips.LootBoxTooltipView('resId'),
                                                args: b,
                                            },
                                            n().createElement(
                                                'div',
                                                { className: 'Footer_priceContainer_69' },
                                                p && Boolean(F)
                                                    ? n().createElement(
                                                          'div',
                                                          { className: 'Footer_priceWrapper_a3' },
                                                          n().createElement(he, {
                                                              className: 'Footer_oldPrice_f2',
                                                              text: B.toString(),
                                                          }),
                                                          n().createElement(he, { className: ot, text: C.toString() }),
                                                      )
                                                    : n().createElement(he, { className: ot, text: B.toString() }),
                                                n().createElement('div', { className: 'Footer_priceValue_8b' }),
                                            ),
                                        ),
                                        n().createElement(
                                            et,
                                            {
                                                type: Qu.main,
                                                size: Zu.medium,
                                                onClick: D,
                                                mixClass: 'Footer_runPortalButton_b4',
                                                disabled: h,
                                                soundClick: R.sounds.ev_white_tiger_hangar_lootbox_portals_launch(),
                                            },
                                            T,
                                        ),
                                    ),
                                    n().createElement(tt, {
                                        type: e,
                                        lootBoxesCount: d,
                                        animationDelayStepsCount: Tt[r],
                                    }),
                                ),
                        );
                    },
                    Et = 1.6,
                    _t = (e) => (u, t) =>
                        u / t >= 2.4000000000000004
                            ? e(viewEnv.remToPx(t) * Et, viewEnv.remToPx(t), u, t)
                            : e(viewEnv.remToPx(u), 0.625 * viewEnv.remToPx(u), u, t),
                    ct =
                        (_t((e, u, t, a) => {
                            const n = { width: viewEnv.remToPx(900) * Et, height: viewEnv.remToPx(900) },
                                r = { width: viewEnv.remToPx(1200) * Et, height: viewEnv.remToPx(1200) };
                            return e < n.width
                                ? n
                                : t > l.medium.width && a > l.medium.height && e < r.width
                                  ? r
                                  : { width: e, height: u };
                        }),
                        _t((e, u) => {
                            const t = { width: viewEnv.remToPx(700) * Et, height: viewEnv.remToPx(700) };
                            return e < t.width ? t : { width: e, height: u };
                        })),
                    mt = 'SwfPortalVideo_wrapper_a3',
                    At = 'wt_portal_idle_swf',
                    dt = {
                        [_u.HUNTER]: '../../videos/wt_event/hunter_portal_idle.usm',
                        [_u.BOSS]: '../../videos/wt_event/boss_portal_idle.usm',
                        [_u.TANK]: '../../videos/wt_event/boss_portal_idle.usm',
                    },
                    Ft = ({ portalType: e, onVideoReady: u }) => {
                        const t = (0, a.useContext)(F),
                            r = (0, a.useState)(!1),
                            i = r[0],
                            o = r[1],
                            s = (0, a.useCallback)((e, ...u) => {
                                const t = JSON.stringify({ command: e, data: u });
                                swfPlayer.gotoAndPlayLabel(At, t);
                            }, []),
                            l = (0, a.useCallback)(
                                (e) => {
                                    s(e ? 'pauseVideo' : 'playVideo');
                                },
                                [s],
                            ),
                            E = (0, a.useCallback)(
                                (e) => {
                                    'onPlaybackReady' === e && (o(!0), u());
                                },
                                [u],
                            );
                        (0, a.useEffect)(
                            () => (
                                engine.on('clientMinimized', l),
                                () => {
                                    engine.off('clientMinimized', l);
                                }
                            ),
                            [l],
                        ),
                            (0, a.useEffect)(() => {
                                let u;
                                const t = ((t) => {
                                    let a,
                                        n = null;
                                    return (
                                        (n = requestAnimationFrame(() => {
                                            n = requestAnimationFrame(() => {
                                                (n = null),
                                                    (u = swfPlayer.addEventListener(At, 'onPlaybackReady', !1, 0)),
                                                    s('autoPlay'),
                                                    s('loadVideo', dt[e]),
                                                    s('loop'),
                                                    (a = void engine.on('viewEnv.onSwfEvent', E));
                                            });
                                        })),
                                        () => {
                                            'function' == typeof a && a(), null !== n && cancelAnimationFrame(n);
                                        }
                                    );
                                })();
                                return () => {
                                    t(), engine.off('viewEnv.onSwfEvent', E), u && swfPlayer.removeEventListener(At, u);
                                };
                            }, [e, s, E]);
                        const _ = g()(mt, !i && 'SwfPortalVideo_wrapper__hidden_48'),
                            c = (0, a.useMemo)(() => ct(t.width, t.height), [t.width, t.height]);
                        return n().createElement(
                            'div',
                            { className: 'SwfPortalVideo_base_c5' },
                            n().createElement(
                                'div',
                                { className: _ },
                                n().createElement('img', {
                                    style: c,
                                    src: `swf://gui/flash/animations/wt_event/usm_video_player.swf?name=${At}`,
                                }),
                                e === _u.TANK &&
                                    n().createElement('div', {
                                        className: 'SwfPortalVideo_backgroundTank_03',
                                        style: c,
                                    }),
                            ),
                            n().createElement(
                                'div',
                                { className: mt },
                                n().createElement('div', { className: 'SwfPortalVideo_vignette_40', style: c }),
                            ),
                        );
                    },
                    Dt = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    Bt = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3],
                    Ct = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                let ht;
                !(function (e) {
                    (e.Primary = 'primary'), (e.Secondary = 'secondary');
                })(ht || (ht = {}));
                const pt = ({
                        level: e,
                        type: u,
                        name: t,
                        isLarge: r,
                        isSingle: i,
                        animationDelayStepsCount: o,
                        nation: s,
                        color: l = ht.Primary,
                    }) => {
                        const E = (0, a.useMemo)(
                                () => ({
                                    backgroundImage: `url('R.images.gui.maps.icons.vehicleTypes.big.${x(u)}_elite')`,
                                }),
                                [u],
                            ),
                            _ = g()(
                                'Vehicle_base_95',
                                l === ht.Primary ? 'Vehicle_base__primary_47' : 'Vehicle_base__secondary_0e',
                                r && 'Vehicle_base__large_e9',
                                i && 'Vehicle_base__single_eb',
                                void 0 !== o && 'Vehicle_base__hasAnimation_56',
                            ),
                            c = (0, a.useMemo)(() => (void 0 !== o ? { animationDelay: o * Ze + 'ms' } : void 0), [o]);
                        return n().createElement(
                            'span',
                            { className: _, style: c },
                            s &&
                                n().createElement('span', {
                                    className: 'Vehicle_flag_f9',
                                    style: { backgroundImage: `url(R.images.gui.maps.icons.flags.c_60x40.${s})` },
                                }),
                            n().createElement(
                                'span',
                                { className: 'Vehicle_level_df' },
                                ((m = e),
                                Ct
                                    ? `${m}`
                                    : (function (e) {
                                          let u = '';
                                          for (let t = Bt.length - 1; t >= 0; t--)
                                              for (; e >= Bt[t]; ) (u += Dt[t]), (e -= Bt[t]);
                                          return u;
                                      })(m)),
                            ),
                            n().createElement('span', { className: 'Vehicle_type_11', style: E }),
                            n().createElement('span', { className: 'Vehicle_name_63' }, t),
                        );
                        var m;
                    },
                    gt = R.strings.event.WtEventPortals,
                    bt = () => {
                        const e = X('model').mainVehiclePrize,
                            u = X('model').discount,
                            t = (0, a.useMemo)(
                                () => ({
                                    backgroundImage: `url(${R.images.white_tiger.gui.maps.icons.flags.$dyn(e.tankNation)})`,
                                }),
                                [e.tankNation],
                            );
                        return n().createElement(
                            'div',
                            { className: 'TankPortal_base_39' },
                            n().createElement('div', { style: t, className: 'TankPortal_tankNation_b8' }),
                            n().createElement(
                                'div',
                                { className: 'TankPortal_textBlock_69' },
                                n().createElement(
                                    'div',
                                    { className: 'TankPortal_titleWrapper_91' },
                                    n().createElement(pt, {
                                        level: e.tankLevel,
                                        type: e.tankType,
                                        name: e.shortTankName,
                                        isSingle: !0,
                                    }),
                                ),
                                Boolean(u) &&
                                    n().createElement(
                                        'div',
                                        { className: 'TankPortal_tankDiscount_06' },
                                        n().createElement('div', { className: 'TankPortal_discountBg_44' }),
                                        n().createElement(se, {
                                            classMix: 'TankPortal_discountTitle_a1',
                                            text: gt.text.discount(),
                                            binding: { discount: u },
                                        }),
                                    ),
                                n().createElement(se, {
                                    text: gt.description.tank(),
                                    classMix: 'TankPortal_description_6e',
                                }),
                            ),
                        );
                    },
                    vt = {
                        base: 'App_base_8d',
                        gradient: 'App_gradient_d7',
                        preview: 'App_preview_6e',
                        title: 'App_title_76',
                        show: 'App_show_70',
                        errorHint: 'App_errorHint_af',
                        'translate-down': 'App_translate-down_11',
                        'translate-up': 'App_translate-up_94',
                    },
                    wt = R.strings.event.WtEventPortals,
                    ft = 6,
                    Tt = { [_u.HUNTER]: 5, [_u.BOSS]: ft + 1, [_u.TANK]: 4 },
                    xt = Object.entries(Tt).reduce((e, [u, t]) => Object.assign({}, e, { [u]: t + 1 }), {}),
                    Rt = () => {
                        const e = X('model'),
                            u = e.isBoxesEnabled,
                            t = e.portalType,
                            r = e.availableLootBoxesPurchase,
                            i = e.backButtonText,
                            o = e.onBackButtonClick,
                            s = e.onBuyButtonClick,
                            l = e.onClose,
                            E = e.isLaunchAnimated,
                            _ = e.onAnimationSettingChange,
                            c = e.onPreviewTankClick;
                        var m;
                        (m = () => {
                            o({ isEsc: !0 });
                        }),
                            f(b.n.ESCAPE, m);
                        const A = (0, a.useCallback)(() => {
                                l(), (0, v.Sy)();
                            }, [l]),
                            d = t === _u.HUNTER,
                            D = t === _u.TANK,
                            B = (0, a.useState)(!1),
                            C = B[0],
                            h = B[1],
                            p = (0, a.useCallback)(() => h(!0), []),
                            w = (0, a.useCallback)(() => _(), [_]),
                            T = (0, a.useCallback)(() => c(), [c]),
                            x = (0, a.useCallback)(() => o({ isEsc: !1 }), [o]),
                            R = (() => {
                                const e = (() => {
                                        const e = (0, a.useContext)(F),
                                            u = e.small,
                                            t = e.medium,
                                            n = e.large,
                                            r = e.extraLarge,
                                            i = r || n,
                                            o = i || t;
                                        return {
                                            isMediaSmall: o || u,
                                            isMediaMedium: o,
                                            isMediaLarge: i,
                                            isMediaExtraLarge: r,
                                        };
                                    })(),
                                    u = e.isMediaSmall,
                                    t = e.isMediaMedium,
                                    n = e.isMediaLarge,
                                    r = e.isMediaExtraLarge;
                                return g()(
                                    u && 'mediaSmall',
                                    t && 'mediaMedium',
                                    n && 'mediaLarge',
                                    r && 'mediaExtraLarge',
                                );
                            })(),
                            y = g()(vt.base, d && vt.base__hunter, R),
                            S = xt[t];
                        return n().createElement(
                            'div',
                            { className: y },
                            n().createElement(Ft, { portalType: t, onVideoReady: p }),
                            D &&
                                n().createElement(
                                    'div',
                                    { className: vt.preview },
                                    n().createElement(fe, { onClick: T }),
                                ),
                            n().createElement('div', { className: vt.gradient }),
                            n().createElement(he, { text: wt.title[t](), className: vt.title }),
                            C && !D && n().createElement($u, { portalType: t }),
                            n().createElement(lt, { lootBoxType: t }),
                            n().createElement(
                                uu,
                                { animationDelayStepsCount: S },
                                D && n().createElement(bt, null),
                                n().createElement(Qe, { onClick: x, goto: i }),
                                n().createElement(qe, { onClose: A }),
                                !D && n().createElement(Eu, { isChecked: E, onClick: w }),
                                u &&
                                    !d &&
                                    n().createElement(Ve, { onBuyButtonClick: s, availableLootBoxesPurchase: r }),
                            ),
                            n().createElement('div', { className: vt.errorHint }, !u && n().createElement(eu, null)),
                        );
                    };
                engine.whenReady.then(() => {
                    i().render(
                        n().createElement(h, null, n().createElement(Rt, null)),
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
        (__webpack_require__.O = (e, u, t, a) => {
            if (!u) {
                var n = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [u, t, a] = deferred[s], r = !0, i = 0; i < u.length; i++)
                        (!1 & a || n >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[i]))
                            ? u.splice(i--, 1)
                            : ((r = !1), a < n && (n = a));
                    if (r) {
                        deferred.splice(s--, 1);
                        var o = t();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > a; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [u, t, a];
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
            var e = { 83: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var a,
                        n,
                        [r, i, o] = t,
                        s = 0;
                    if (r.some((u) => 0 !== e[u])) {
                        for (a in i) __webpack_require__.o(i, a) && (__webpack_require__.m[a] = i[a]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (u && u(t); s < r.length; s++)
                        (n = r[s]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(6863));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
