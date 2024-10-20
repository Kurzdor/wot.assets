(() => {
    var __webpack_modules__ = {
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
            67: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => V });
                var n = {};
                t.r(n), t.d(n, { mouse: () => c, onResize: () => o });
                var a = {};
                t.r(a),
                    t.d(a, {
                        events: () => n,
                        getMouseGlobalPosition: () => E,
                        getSize: () => d,
                        graphicsQuality: () => m,
                    });
                var i = {};
                t.r(i), t.d(i, { getBgUrl: () => F, getTextureUrl: () => A });
                var s = {};
                function r(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                function l(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.r(s),
                    t.d(s, {
                        addModelObserver: () => x,
                        addPreloadTexture: () => v,
                        children: () => i,
                        displayStatus: () => D,
                        displayStatusIs: () => U,
                        events: () => b,
                        extraSize: () => X,
                        forceTriggerMouseMove: () => W,
                        freezeTextureBeforeResize: () => O,
                        getBrowserTexturePath: () => y,
                        getDisplayStatus: () => z,
                        getScale: () => M,
                        getSize: () => k,
                        getViewGlobalPosition: () => R,
                        isEventHandled: () => $,
                        isFocused: () => H,
                        pxToRem: () => L,
                        remToPx: () => N,
                        resize: () => I,
                        sendEvent: () => S,
                        setAnimateWindow: () => P,
                        setEventHandled: () => G,
                        setInputPaddingsRem: () => w,
                        setSidePaddingsRem: () => T,
                        whenTutorialReady: () => j,
                    });
                const o = r('clientResized'),
                    _ = { down: r('mousedown'), up: r('mouseup'), move: r('mousemove') };
                const c = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function u() {
                        e.enabled && l(!1);
                    }
                    function t() {
                        e.enabled && l(!0);
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
                            : l(!1);
                    }
                    const a = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let a = !0;
                                    const i = `mouse${u}`,
                                        s = _[u]((e) => t([e, 'outside']));
                                    function r(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, r),
                                        n(),
                                        () => {
                                            a &&
                                                (s(),
                                                window.removeEventListener(i, r),
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
                            e.enabled && l(!0);
                        },
                        disableOutside() {
                            e.enabled && l(!1);
                        },
                    });
                })();
                function d(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function E(e = 'px') {
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
                    b = {
                        onTextureFrozen: r('self.onTextureFrozen'),
                        onTextureReady: r('self.onTextureReady'),
                        onDomBuilt: r('self.onDomBuilt'),
                        onLoaded: r('self.onLoaded'),
                        onDisplayChanged: r('self.onShowingStatusChanged'),
                        onFocusUpdated: r('self.onFocusChanged'),
                        children: {
                            onAdded: r('children.onAdded'),
                            onLoaded: r('children.onLoaded'),
                            onRemoved: r('children.onRemoved'),
                            onAttached: r('children.onAttached'),
                            onTextureReady: r('children.onTextureReady'),
                            onRequestPosition: r('children.requestPosition'),
                        },
                    },
                    p = ['args'];
                const g = 2,
                    C = 16,
                    B = 32,
                    h = 64,
                    f = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                i = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        a = {},
                                        i = Object.keys(e);
                                    for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                    return a;
                                })(u, p);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, i, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    S = {
                        close(e) {
                            f('popover' === e ? g : B);
                        },
                        minimize() {
                            f(h);
                        },
                        move(e) {
                            f(C, { isMouseEvent: !0, on: e });
                        },
                    };
                function v(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function w(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function y(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function x(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function T(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function k(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function I(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function R(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: N(u.x), y: N(u.y) };
                }
                function O() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function M() {
                    return viewEnv.getScale();
                }
                function L(e) {
                    return viewEnv.pxToRem(e);
                }
                function N(e) {
                    return viewEnv.remToPx(e);
                }
                function P(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function H() {
                    return viewEnv.isFocused();
                }
                function G() {
                    return viewEnv.setEventHandled();
                }
                function $() {
                    return viewEnv.isEventHandled();
                }
                function W() {
                    viewEnv.forceTriggerMouseMove();
                }
                function z() {
                    return viewEnv.getShowingStatus();
                }
                const U = Object.keys(D).reduce((e, u) => ((e[u] = () => viewEnv.getShowingStatus() === D[u]), e), {}),
                    X = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    j = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : b.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    V = { view: s, client: a };
            },
            521: (e, u, t) => {
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
            358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => i });
                var n = t(67);
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
                        const i = n.O.view.addModelObserver(e, t, a);
                        return (
                            i > 0
                                ? ((this._callbacks[i] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(i) : (this._views[t] = [i])))
                                : console.error("Can't add callback for model:", e),
                            i
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
                const i = a;
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
                t.d(u, { Sw: () => i.Z, B0: () => l, c9: () => p, ry: () => b });
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
                var i = t(358);
                const s = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    r = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    };
                let l;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(l || (l = {}));
                const o = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    _ = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var E = t(521),
                    m = t(67);
                const A = ['args'];
                function F(e, u, t, n, a, i, s) {
                    try {
                        var r = e[i](s),
                            l = r.value;
                    } catch (e) {
                        return void t(e);
                    }
                    r.done ? u(l) : Promise.resolve(l).then(n, a);
                }
                const D = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    b = (function () {
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
                                        var i = e.apply(u, t);
                                        function s(e) {
                                            F(i, n, a, s, r, 'next', e);
                                        }
                                        function r(e) {
                                            F(i, n, a, s, r, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    p = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                i = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        a = {},
                                        i = Object.keys(e);
                                    for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                    return a;
                                })(u, A);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, i, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, i));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    g = () => p(l.CLOSE),
                    C = (e, u) => {
                        e.keyCode === E.n.ESCAPE && u();
                    };
                var B = t(572);
                const h = a.instance,
                    f = {
                        DataTracker: i.Z,
                        ViewModel: B.Z,
                        ViewEventType: l,
                        NumberFormatType: o,
                        RealFormatType: _,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: D,
                        sendMoveEvent: (e) => p(l.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: g,
                        sendClosePopOverEvent: () => p(l.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            p(l.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, a = R.invalid('resId'), i) => {
                            const s = m.O.view.getViewGlobalPosition(),
                                r = t.getBoundingClientRect(),
                                o = r.x,
                                _ = r.y,
                                c = r.width,
                                d = r.height,
                                E = {
                                    x: m.O.view.pxToRem(o) + s.x,
                                    y: m.O.view.pxToRem(_) + s.y,
                                    width: m.O.view.pxToRem(c),
                                    height: m.O.view.pxToRem(d),
                                };
                            p(l.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: u,
                                bbox: D(E),
                                on: !0,
                                args: i,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => C(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            C(e, g);
                        },
                        handleViewEvent: p,
                        onBindingsReady: b,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(l.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(l.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(l.POP_OVER),
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
                        ClickOutsideManager: h,
                        SystemLocale: s,
                        UserLocale: r,
                    };
                window.ViewEnvHelper = f;
            },
            447: (e, u, t) => {
                'use strict';
                var n = t(179),
                    a = t.n(n),
                    i = t(493),
                    s = t.n(i);
                const r = (e = 1) => {
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
                    },
                    l = (e, u) => e.split('.').reduce((e, u) => e && e[u], u),
                    o = (e) => {
                        const u = (0, n.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    };
                var _ = t(364);
                const c = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    d = (e, u) => (e.length > 0 ? `${e}.${u}` : u),
                    E = (e) =>
                        ((e, u) =>
                            e.split('.').reduce((e, t) => {
                                const n = l(`${e}.${t}`, window);
                                return c(n) ? u(e, t, n) : `${e}.${t}`;
                            }))(e, (e, u) => `${e}.${u}.value`),
                    m = (e) => {
                        const u = ((e) => {
                                const u = r(),
                                    t = u.caller,
                                    n = u.resId,
                                    a = window.__feature && window.__feature !== t && t ? `subViews.${t}` : '';
                                return { modelPrefix: a, modelPath: d(a, e || ''), resId: n };
                            })(),
                            t = u.modelPrefix,
                            n = e.split('.');
                        if (n.length > 0) {
                            const e = [n[0]];
                            return (
                                n.reduce((u, n) => {
                                    const a = l(d(t, `${u}.${n}`), window);
                                    return c(a) ? (e.push(a.id), `${u}.${n}.value`) : (e.push(n), `${u}.${n}`);
                                }),
                                e.reduce((e, u) => e + '.' + u)
                            );
                        }
                        return '';
                    },
                    A = _.Sw.instance;
                let F;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(F || (F = {}));
                const D = (e = 'model', u = F.Deep) => {
                    const t = (0, n.useState)(0),
                        a = (t[0], t[1]),
                        i = (0, n.useMemo)(() => r(), []),
                        s = i.caller,
                        _ = i.resId,
                        d = (0, n.useMemo)(
                            () => (window.__feature && window.__feature !== s ? `subViews.${s}.${e}` : e),
                            [s, e],
                        ),
                        D = (0, n.useState)(() =>
                            ((e) => {
                                const u = l(e, window);
                                for (const e in u) 'function' == typeof u[e] && (u[e] = u[e].bind(u));
                                return c(u) ? u.value : u;
                            })(E(d)),
                        ),
                        b = D[0],
                        p = D[1],
                        g = (0, n.useRef)(-1);
                    return (
                        o(() => {
                            if (
                                ('boolean' == typeof u &&
                                    ((u = u ? F.Deep : F.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                u !== F.None)
                            ) {
                                const t = (e) => {
                                        ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                        u === F.Deep
                                            ? (e === b && a((e) => e + 1), p(e))
                                            : p(Object.assign([], e));
                                    },
                                    n = m(e);
                                g.current = A.addCallback(n, t, _, u === F.Deep);
                            }
                        }),
                        (0, n.useEffect)(() => {
                            if (u !== F.None)
                                return () => {
                                    A.removeCallback(g.current, _);
                                };
                        }, [_, u]),
                        b
                    );
                };
                var b = t(67),
                    p = t(521);
                const g = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function C(e = p.n.NONE, u = g, t = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== p.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (b.O.view.isEventHandled()) return;
                                b.O.view.setEventHandled(), u(n), t && n.stopPropagation();
                            }
                        }
                    }, [u, e, t]);
                }
                var B = t(483),
                    h = t.n(B);
                const f = (0, n.createContext)(null);
                function S() {
                    return (0, n.useContext)(f);
                }
                const v = (e) => {
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
                    w = (e, u, t) =>
                        u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                            ? (u.extraLargeHeight && t.extraLarge) ||
                              (u.largeHeight && t.large) ||
                              (u.mediumHeight && t.medium) ||
                              (u.smallHeight && t.small) ||
                              (u.extraSmallHeight && t.extraSmall)
                                ? e
                                : null
                            : e,
                    y = {
                        extraLarge: { weight: 4, width: 2560, height: 1440 },
                        large: { weight: 3, width: 1920, height: 1080 },
                        medium: { weight: 2, width: 1600, height: 900 },
                        small: { weight: 1, width: 1366, height: 768 },
                        extraSmall: { weight: 0, width: 1024, height: 768 },
                    };
                var x;
                function T(e, u, t) {
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
                        i = Math.min(n, a);
                    return {
                        extraLarge: i === t.extraLarge.weight,
                        large: i === t.large.weight,
                        medium: i === t.medium.weight,
                        small: i === t.small.weight,
                        extraSmall: i === t.extraSmall.weight,
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
                })(x || (x = {}));
                const k = b.O.client.getSize('rem'),
                    I = k.width,
                    O = k.height,
                    M = Object.assign({ width: I, height: O }, T(I, O, y)),
                    L = (0, n.createContext)(M),
                    N = ['children'];
                const P = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                            return a;
                        })(e, N);
                    const a = (0, n.useContext)(L),
                        i = a.extraLarge,
                        s = a.large,
                        r = a.medium,
                        l = a.small,
                        o = a.extraSmall,
                        _ = a.extraLargeWidth,
                        c = a.largeWidth,
                        d = a.mediumWidth,
                        E = a.smallWidth,
                        m = a.extraSmallWidth,
                        A = a.extraLargeHeight,
                        F = a.largeHeight,
                        D = a.mediumHeight,
                        b = a.smallHeight,
                        p = a.extraSmallHeight,
                        g = { extraLarge: A, large: F, medium: D, small: b, extraSmall: p };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && i) return u;
                        if (t.large && s) return u;
                        if (t.medium && r) return u;
                        if (t.small && l) return u;
                        if (t.extraSmall && o) return u;
                    } else {
                        if (t.extraLargeWidth && _) return w(u, t, g);
                        if (t.largeWidth && c) return w(u, t, g);
                        if (t.mediumWidth && d) return w(u, t, g);
                        if (t.smallWidth && E) return w(u, t, g);
                        if (t.extraSmallWidth && m) return w(u, t, g);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && A) return u;
                            if (t.largeHeight && F) return u;
                            if (t.mediumHeight && D) return u;
                            if (t.smallHeight && b) return u;
                            if (t.extraSmallHeight && p) return u;
                        }
                    }
                    return null;
                };
                P.defaultProps = {
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
                (0, n.memo)(P),
                    (0, n.memo)(({ children: e }) => {
                        const u = (0, n.useContext)(L),
                            t = (0, n.useState)(u),
                            i = t[0],
                            s = t[1],
                            r = (0, n.useCallback)((e, u) => {
                                const t = b.O.view.pxToRem(e),
                                    n = b.O.view.pxToRem(u);
                                s(Object.assign({ width: t, height: n }, T(t, n, y)));
                            }, []);
                        o(() => {
                            engine.on('clientResized', r);
                        }),
                            (0, n.useEffect)(() => () => engine.off('clientResized', r), [r]);
                        const l = (0, n.useMemo)(() => Object.assign({}, i), [i]);
                        return a().createElement(L.Provider, { value: l }, e);
                    });
                let H;
                function G(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(H || (H = {}));
                const $ = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    W = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    z = (e, u, t = H.left) => e.split(u).reduce(t === H.left ? $ : W, []),
                    U = (() => {
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
                    X = ['zh_cn', 'zh_sg', 'zh_tw'],
                    j = (e, u = H.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        return X.includes(t)
                            ? U(e)
                            : ((e, u = H.left) => {
                                  let t = [];
                                  const n =
                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                      a = e.replace(/&nbsp;/g, ' ');
                                  return z(a, /( )/, u).forEach((e) => (t = t.concat(z(e, n, H.left)))), t;
                              })(e, u);
                    };
                function V(e, u, t) {
                    const a = (0, n.useContext)(L);
                    let i = Object.entries(a).filter(([e, u]) => !0 === u && e in x);
                    return (
                        t && (i = i.filter((e) => t.includes(e[0]))),
                        e.reduce((e, t) => {
                            const n = i.map((e) =>
                                h()(u[((e, u) => e + '__' + u)(t, e[0])], u[((e, u) => e + G(u))(t, e[0])]),
                            );
                            return (e[t] = h()(u[t], ...n)), e;
                        }, {})
                    );
                }
                function K(e) {
                    return (
                        !1 ===
                        (function (e) {
                            return null == e;
                        })(e)
                    );
                }
                function q(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                const Y = q;
                function Z(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, n) => u(null == e ? void 0 : e.value, t, n));
                }
                function Q(e, u, t) {
                    const n = [];
                    for (let a = 0; a < e.length; a++) {
                        const i = Y(e, a);
                        u(i, a, e) && n.push(t(i, a, e));
                    }
                    return n;
                }
                function J(e, u) {
                    return Q(e, K, u);
                }
                const ee = (e, u, t, a = []) => {
                    const i = ((e, u = []) => {
                        const t = (0, n.useRef)(),
                            a = (0, n.useCallback)((...u) => {
                                t.current && t.current(), (t.current = e(...u));
                            }, u);
                        return (
                            (0, n.useEffect)(
                                () => () => {
                                    t.current && t.current();
                                },
                                [a],
                            ),
                            a
                        );
                    })(
                        () =>
                            v(() =>
                                v(() => {
                                    if (e.current) {
                                        const t = e.current.getBoundingClientRect(),
                                            n = {
                                                width: b.O.view.pxToRem(t.width),
                                                height: b.O.view.pxToRem(t.height),
                                                offsetX: b.O.view.pxToRem(t.left),
                                                offsetY: b.O.view.pxToRem(t.top),
                                            };
                                        window.tutorialApi.updateComponents(), u(n);
                                    }
                                }),
                            ),
                        [u, e],
                    );
                    return (
                        (0, n.useEffect)(() => {
                            i();
                        }, [i, ...a]),
                        (0, n.useEffect)(() => {
                            if (t)
                                return (
                                    engine.on('clientResized', i),
                                    () => {
                                        engine.off('clientResized', i);
                                    }
                                );
                        }, [t, i]),
                        i
                    );
                };
                var ue = t(887),
                    te = t.n(ue);
                let ne, ae, ie;
                !(function (e) {
                    (e[(e.ExtraSmall = y.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = y.small.width)] = 'Small'),
                        (e[(e.Medium = y.medium.width)] = 'Medium'),
                        (e[(e.Large = y.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = y.extraLarge.width)] = 'ExtraLarge');
                })(ne || (ne = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = y.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = y.small.width)] = 'Small'),
                            (e[(e.Medium = y.medium.width)] = 'Medium'),
                            (e[(e.Large = y.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = y.extraLarge.width)] = 'ExtraLarge');
                    })(ae || (ae = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = y.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = y.small.height)] = 'Small'),
                            (e[(e.Medium = y.medium.height)] = 'Medium'),
                            (e[(e.Large = y.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = y.extraLarge.height)] = 'ExtraLarge');
                    })(ie || (ie = {}));
                const se = () => {
                        const e = (0, n.useContext)(L),
                            u = e.width,
                            t = e.height,
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return ne.ExtraLarge;
                                    case e.large:
                                        return ne.Large;
                                    case e.medium:
                                        return ne.Medium;
                                    case e.small:
                                        return ne.Small;
                                    case e.extraSmall:
                                        return ne.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), ne.ExtraSmall;
                                }
                            })(e),
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return ae.ExtraLarge;
                                    case e.largeWidth:
                                        return ae.Large;
                                    case e.mediumWidth:
                                        return ae.Medium;
                                    case e.smallWidth:
                                        return ae.Small;
                                    case e.extraSmallWidth:
                                        return ae.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), ae.ExtraSmall;
                                }
                            })(e),
                            s = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return ie.ExtraLarge;
                                    case e.largeHeight:
                                        return ie.Large;
                                    case e.mediumHeight:
                                        return ie.Medium;
                                    case e.smallHeight:
                                        return ie.Small;
                                    case e.extraSmallHeight:
                                        return ie.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), ie.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: a, mediaWidth: i, mediaHeight: s, remScreenWidth: u, remScreenHeight: t };
                    },
                    re = ['xl', 'lg', 'md', 'sm', 'xs'],
                    le = (e) => e.includes('_') && ((e) => re.includes(e))(e.split('_').at(-1)),
                    oe = [ne.ExtraLarge, ne.Large, ne.Medium, ne.Small, ne.ExtraSmall],
                    _e = (e, u) =>
                        Object.keys(e).reduce((t, n) => {
                            if (n in t) return t;
                            if (le(n)) {
                                const a = n.split('_').slice(0, -1).join('_');
                                if (a in t) return t;
                                const i = oe.indexOf(u),
                                    s = (-1 !== i ? re.slice(i) : [])
                                        .map((e) => a + '_' + e)
                                        .find((u) => void 0 !== e[u]),
                                    r = s ? e[s] : void 0;
                                return (t[a] = void 0 !== r ? r : e[a]), t;
                            }
                            const a = e[n];
                            return (
                                void 0 === a ||
                                    ((e, u) => re.some((t) => void 0 !== u[`${e}_${t}`]))(n, e) ||
                                    (t[n] = a),
                                t
                            );
                        }, {}),
                    ce = (e, u = _e) => {
                        const t = (
                            (e, u = _e) =>
                            (t) => {
                                const i = se().mediaSize,
                                    s = (0, n.useMemo)(() => u(t, i), [t, i]);
                                return a().createElement(e, s);
                            }
                        )(e, u);
                        return a().memo((u) =>
                            Object.keys(u).some((e) => le(e) && void 0 !== u[e])
                                ? a().createElement(t, u)
                                : a().createElement(e, u),
                        );
                    },
                    de = {
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
                    Ee = [
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
                function me() {
                    return (
                        (me =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        me.apply(this, arguments)
                    );
                }
                Object.keys(te());
                const Ae = {
                        XL: { mt: de.mt__XL, mr: de.mr__XL, mb: de.mb__XL, ml: de.ml__XL },
                        LG: { mt: de.mt__LG, mr: de.mr__LG, mb: de.mb__LG, ml: de.ml__LG },
                        MDp: { mt: de.mt__MDp, mr: de.mr__MDp, mb: de.mb__MDp, ml: de.ml__MDp },
                        MD: { mt: de.mt__MD, mr: de.mr__MD, mb: de.mb__MD, ml: de.ml__MD },
                        SMp: { mt: de.mt__SMp, mr: de.mr__SMp, mb: de.mb__SMp, ml: de.ml__SMp },
                        SM: { mt: de.mt__SM, mr: de.mr__SM, mb: de.mb__SM, ml: de.ml__SM },
                        XS: { mt: de.mt__XS, mr: de.mr__XS, mb: de.mb__XS, ml: de.ml__XS },
                    },
                    Fe = (Object.keys(Ae), ['mt', 'mr', 'mb', 'ml']),
                    De = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    be = ce((e) => {
                        let u = e.className,
                            t = e.width,
                            i = e.height,
                            s = e.m,
                            r = e.mt,
                            l = void 0 === r ? s : r,
                            o = e.mr,
                            _ = void 0 === o ? s : o,
                            c = e.mb,
                            d = void 0 === c ? s : c,
                            E = e.ml,
                            m = void 0 === E ? s : E,
                            A = e.column,
                            F = e.row,
                            D = e.flexDirection,
                            b = void 0 === D ? (A ? 'column' : F && 'row') || void 0 : D,
                            p = e.flexStart,
                            g = e.center,
                            C = e.flexEnd,
                            B = e.spaceBetween,
                            f = e.spaceAround,
                            S = e.justifyContent,
                            v =
                                void 0 === S
                                    ? (p ? 'flex-start' : g && 'center') ||
                                      (C && 'flex-end') ||
                                      (B && 'space-between') ||
                                      (f && 'space-around') ||
                                      void 0
                                    : S,
                            w = e.alignItems,
                            y = void 0 === w ? (p ? 'flex-start' : g && 'center') || (C && 'flex-end') || void 0 : w,
                            x = e.alignSelf,
                            T = e.wrap,
                            k = e.flexWrap,
                            I = void 0 === k ? (T ? 'wrap' : void 0) : k,
                            R = e.grow,
                            O = e.shrink,
                            M = e.flex,
                            L = void 0 === M ? (R || O ? `${R ? 1 : 0} ${O ? 1 : 0} auto` : void 0) : M,
                            N = e.style,
                            P = e.children,
                            H = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, Ee);
                        const G = (0, n.useMemo)(() => {
                                const e = { mt: l, mr: _, mb: d, ml: m },
                                    u = ((e) =>
                                        Fe.reduce((u, t) => {
                                            const n = e[t];
                                            return n && 'number' != typeof n ? u.concat(Ae[!0 === n ? 'MD' : n][t]) : u;
                                        }, []))(e),
                                    n = ((e) =>
                                        Fe.reduce((u, t) => {
                                            const n = e[t];
                                            return 'number' == typeof n && (u[De[t]] = n + 'rem'), u;
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, N, n, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== i && 'number' == typeof i ? i + 'rem' : i,
                                        flex: L,
                                        alignSelf: x,
                                        display: b || y ? 'flex' : void 0,
                                        flexDirection: b,
                                        flexWrap: I,
                                        justifyContent: v,
                                        alignItems: y,
                                    }),
                                    computedClassNames: u,
                                };
                            }, [t, i, l, _, d, m, N, L, x, b, I, v, y]),
                            $ = G.computedStyle,
                            W = G.computedClassNames;
                        return a().createElement('div', me({ className: h()(de.base, ...W, u), style: $ }, H), P);
                    }),
                    pe = 'FormatText_base_d0',
                    ge = ({ binding: e, text: u = '', classMix: t, alignment: i = H.left }) =>
                        null === u
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : a().createElement(
                                  n.Fragment,
                                  null,
                                  u.split('\n').map((u, s) =>
                                      a().createElement(
                                          'div',
                                          { className: h()(pe, t), key: `${u}-${s}` },
                                          ((e, u, t) =>
                                              e
                                                  .split(/%\((.*?)\)(?:[sd])?/g)
                                                  .map((e) => (t && e in t ? t[e] : j(e, u))))(u, i, e).map((e, u) =>
                                              a().createElement(n.Fragment, { key: `${u}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              );
                var Ce = t(532),
                    Be = t.n(Ce);
                const he = {
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
                function Se() {
                    return (
                        (Se =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Se.apply(this, arguments)
                    );
                }
                Object.keys(te());
                const ve = Object.keys(Be()),
                    we = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    ye = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    xe = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Te = {
                        XL: { mt: 'XL', mr: 'XL', mb: 'XL', ml: 'XL' },
                        LG: { mt: 'LG', mr: 'LG', mb: 'LG', ml: 'LG' },
                        MDp: { mt: 'MDp', mr: 'MDp', mb: 'MDp', ml: 'MDp' },
                        MD: { mt: 'MD', mr: 'MD', mb: 'MD', ml: 'MD' },
                        SMp: { mt: 'SMp', mr: 'SMp', mb: 'SMp', ml: 'SMp' },
                        SM: { mt: 'SM', mr: 'SM', mb: 'SM', ml: 'SM' },
                        XS: { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    },
                    ke =
                        (Object.keys(Te),
                        {
                            'heading-H144': { mt: 'XL', mr: 'LG', mb: 'LG', ml: 'LG' },
                            'heading-H73': { mt: 'LG', mr: 'MD', mb: 'MD', ml: 'MD' },
                            'heading-H56': we,
                            'heading-H36': we,
                            'heading-H28': ye,
                            'heading-H24': ye,
                            'heading-H24R': ye,
                            'heading-H22': ye,
                            'heading-H20R': ye,
                            'heading-H18': ye,
                            'heading-H15': xe,
                            'heading-H14': xe,
                            'paragraph-P24': ye,
                            'paragraph-P18': ye,
                            'paragraph-P16': ye,
                            'paragraph-P14': xe,
                            'paragraph-P12': xe,
                            'paragraph-P10': xe,
                        }),
                    Ie =
                        (Object.keys(ke),
                        (e) =>
                            e
                                ? ((e) => ve.includes(e))(e)
                                    ? { colorClassName: he[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    Re = ce((e) => {
                        let u = e.text,
                            t = e.variant,
                            i = e.className,
                            s = e.color,
                            r = e.m,
                            l = e.mt,
                            o = void 0 === l ? r : l,
                            _ = e.mr,
                            c = void 0 === _ ? r : _,
                            d = e.mb,
                            E = void 0 === d ? r : d,
                            m = e.ml,
                            A = void 0 === m ? r : m,
                            F = e.style,
                            D = e.format,
                            b = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, fe);
                        const p = (0, n.useMemo)(() => {
                                const e = Ie(s),
                                    u = e.colorClassName,
                                    t = e.colorStyle,
                                    n = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, F, n), colorClassName: u };
                            }, [F, s]),
                            g = p.computedStyle,
                            C = p.colorClassName;
                        return a().createElement(
                            be,
                            Se(
                                {
                                    className: h()(he.base, t && he[t], C, i),
                                    style: g,
                                    mt: !0 === o ? ke[t || 'paragraph-P16'].mt : o,
                                    mr: !0 === c ? ke[t || 'paragraph-P16'].mr : c,
                                    mb: !0 === E ? ke[t || 'paragraph-P16'].mb : E,
                                    ml: !0 === A ? ke[t || 'paragraph-P16'].ml : A,
                                },
                                b,
                            ),
                            void 0 !== D ? a().createElement(ge, Se({}, D, { text: u })) : u,
                        );
                    }),
                    Oe = [
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
                function Me(e) {
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
                const Le = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: _.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    Ne = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            a = e.args,
                            i = e.onMouseEnter,
                            s = e.onMouseLeave,
                            l = e.onMouseDown,
                            o = e.onClick,
                            _ = e.ignoreShowDelay,
                            c = void 0 !== _ && _,
                            d = e.ignoreMouseClick,
                            E = void 0 !== d && d,
                            m = e.decoratorId,
                            A = void 0 === m ? 0 : m,
                            F = e.isEnabled,
                            D = void 0 === F || F,
                            b = e.targetId,
                            p = void 0 === b ? 0 : b,
                            g = e.onShow,
                            C = e.onHide,
                            B = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, Oe);
                        const h = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            f = (0, n.useMemo)(() => p || r().resId, [p]),
                            S = (0, n.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (Le(t, A, { isMouseEvent: !0, on: !0, arguments: Me(a) }, f),
                                    g && g(),
                                    (h.current.isVisible = !0));
                            }, [t, A, a, f, g]),
                            v = (0, n.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const e = h.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (h.current.timeoutId = 0)),
                                        Le(t, A, { on: !1 }, f),
                                        h.current.isVisible && C && C(),
                                        (h.current.isVisible = !1);
                                }
                            }, [t, A, f, C]),
                            w = (0, n.useCallback)((e) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(h.current.prevTarget) && v();
                                    }, 200)));
                            }, []);
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
                                !1 === D && v();
                            }, [D, v]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', v),
                                    () => {
                                        window.removeEventListener('mouseleave', v), v();
                                    }
                                ),
                                [v],
                            );
                        return D
                            ? (0, n.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((y = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((h.current.timeoutId = window.setTimeout(S, c ? 100 : 400)),
                                                      i && i(e),
                                                      y && y(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              v(), null == s || s(u), null == e || e(u);
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              !1 === E && v(), null == o || o(u), null == e || e(u);
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              !1 === E && v(), null == l || l(u), null == e || e(u);
                                          })(u.props.onMouseDown),
                                      },
                                      B,
                                  ),
                              )
                            : u;
                        var y;
                    },
                    Pe = ['children'];
                function He() {
                    return (
                        (He =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        He.apply(this, arguments)
                    );
                }
                const Ge = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, Pe);
                        return a().createElement(
                            Ne,
                            He(
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
                    $e = ['children', 'body', 'header', 'note', 'alert', 'args'];
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
                const ze = R.views.common.tooltip_window.simple_tooltip_content,
                    Ue = (e) => {
                        let u = e.children,
                            t = e.body,
                            i = e.header,
                            s = e.note,
                            r = e.alert,
                            l = e.args,
                            o = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, $e);
                        const _ = (0, n.useMemo)(() => {
                            const e = Object.assign({}, l, { body: t, header: i, note: s, alert: r });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [r, t, i, s, l]);
                        return a().createElement(
                            Ne,
                            We(
                                {
                                    contentId:
                                        ((c = null == l ? void 0 : l.hasHtmlContent),
                                        c ? ze.SimpleTooltipHtmlContent('resId') : ze.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: _,
                                },
                                o,
                            ),
                            u,
                        );
                        var c;
                    };
                function Xe() {
                    return (
                        (Xe =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Xe.apply(this, arguments)
                    );
                }
                const je = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const n = a().createElement('div', { className: t }, e);
                        if (u.header || u.body) return a().createElement(Ue, u, n);
                        const i = u.contentId,
                            s = u.args,
                            r = null == s ? void 0 : s.contentId;
                        return i || r
                            ? a().createElement(Ne, Xe({}, u, { contentId: i || r }), n)
                            : a().createElement(Ge, u, n);
                    },
                    Ve = 'AbilitySkillSlot_base_d7',
                    Ke = 'AbilitySkillSlot_slotText_1e',
                    qe = 'AbilitySkillSlot_icon_d2',
                    Ye = ({ skillName: e, tooltipId: u, tooltipHeader: t, tooltipBody: i, className: s }) => {
                        const r = (0, n.useMemo)(
                            () => ({
                                args: { tooltipId: u, skillName: e, header: t, body: i, hasHtmlContent: !0 },
                                header: t,
                                body: i,
                                ignoreShowDelay: !0,
                            }),
                            [e, t, i, u],
                        );
                        return a().createElement(
                            je,
                            { tooltipArgs: r, className: h()(Ve, s) },
                            a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(Re, {
                                    className: Ke,
                                    text: R.strings.tank_setup.tooltips.abilitySlot.title(),
                                }),
                                a().createElement('div', {
                                    className: qe,
                                    style: {
                                        backgroundImage: `url(${R.images.gui.maps.icons.roleSkills.c_48x48.$dyn(e)})`,
                                    },
                                }),
                            ),
                        );
                    },
                    Ze = {
                        base: 'AmmunitionPanel_base_f8',
                        base__locked: 'AmmunitionPanel_base__locked_71',
                        base__disabled: 'AmmunitionPanel_base__disabled_41',
                        base__hidden: 'AmmunitionPanel_base__hidden_10',
                        border: 'AmmunitionPanel_border_38',
                        border__hidden: 'AmmunitionPanel_border__hidden_7d',
                        roleSkillSlot: 'AmmunitionPanel_roleSkillSlot_21',
                        roleSkillSlot__battle: 'AmmunitionPanel_roleSkillSlot__battle_e4',
                        roleSkillSlot__small: 'AmmunitionPanel_roleSkillSlot__small_8b',
                        roleSkillSlot__extraSmall: 'AmmunitionPanel_roleSkillSlot__extraSmall_7a',
                        roleSkillSlot__prebattle: 'AmmunitionPanel_roleSkillSlot__prebattle_00',
                        abilitySkillSlot: 'AmmunitionPanel_abilitySkillSlot_50',
                        abilitySkillSlot__battle: 'AmmunitionPanel_abilitySkillSlot__battle_ac',
                        abilitySkillSlot__small: 'AmmunitionPanel_abilitySkillSlot__small_c1',
                        abilitySkillSlot__extraSmall: 'AmmunitionPanel_abilitySkillSlot__extraSmall_bd',
                        abilitySkillSlot__prebattle: 'AmmunitionPanel_abilitySkillSlot__prebattle_f0',
                    },
                    Qe = 'Border_base_f9',
                    Je = 'Border_border_83',
                    eu = 'Border_wrapper_17',
                    uu = 'Border_active_e8',
                    tu = (0, n.memo)(({ slotOffset: e, slotWidth: u, onAnimationEnd: t }) => {
                        const i = (0, n.useRef)(null),
                            s = (0, n.useRef)(!1);
                        (0, n.useEffect)(() => {
                            s.current = !0;
                        }, [e, u]);
                        const r = (0, n.useCallback)(() => {
                            s.current && t(), (s.current = !1);
                        }, [t]);
                        (0, n.useEffect)(() => {
                            const e = i.current;
                            return (
                                e && e.addEventListener('transitionend', r),
                                () => {
                                    e && e.removeEventListener('transitionend', r);
                                }
                            );
                        }, [r]);
                        const l = (0, n.useMemo)(() => ({ left: e }), [e]),
                            o = (0, n.useMemo)(() => ({ width: u }), [u]);
                        return a().createElement(
                            'div',
                            { className: Qe },
                            a().createElement(
                                'div',
                                { ref: i, className: Je, style: l },
                                a().createElement(
                                    'div',
                                    { className: eu },
                                    a().createElement('div', { className: uu, style: o }),
                                ),
                            ),
                        );
                    });
                let nu;
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
                })(nu || (nu = {}));
                Date.now();
                const au = _.Sw.instance,
                    iu = (e = 'model', u = !0) => {
                        const t = (0, n.useState)(0),
                            a = (t[0], t[1]),
                            i = (0, n.useMemo)(() => r(), []),
                            s = i.caller,
                            o = i.resId,
                            _ = (0, n.useMemo)(
                                () => (window.__feature && window.__feature !== s ? `children.${s}.${e}` : e),
                                [s, e],
                            ),
                            c = (0, n.useMemo)(
                                () =>
                                    ((e) => {
                                        const u = l(e, window);
                                        for (const e in u) 'function' == typeof u[e] && (u[e] = u[e].bind(u));
                                        return u;
                                    })(_),
                                [_],
                            );
                        return (
                            (0, n.useEffect)(() => {
                                if (u) {
                                    const u = () => {
                                            a((e) => e + 1);
                                        },
                                        t = au.addCallback(e, u, o);
                                    return () => au.removeCallback(t, o);
                                }
                            }, [e, u, o]),
                            c
                        );
                    };
                function su(e) {
                    engine.call('PlaySound', e);
                }
                const ru = {
                    playHighlight() {
                        su('highlight');
                    },
                    playClick() {
                        su('play');
                    },
                    playYes() {
                        su('yes1');
                    },
                };
                let lu;
                !(function (e) {
                    (e[(e.NORMAL = 0)] = 'NORMAL'), (e[(e.WARNING = 1)] = 'WARNING');
                })(lu || (lu = {}));
                const ou = 'SwitchButton_base_23',
                    _u = 'SwitchButton_base__active_31',
                    cu = 'SwitchButton_base__warning_71',
                    du = 'SwitchButton_buttonBack_ce',
                    Eu = 'SwitchButton_buttonBackHovered_45',
                    mu = 'SwitchButton_base__hovered_b4',
                    Au = 'SwitchButton_buttonGlow_4c',
                    Fu = 'SwitchButton_buttonIcon_d3',
                    Du = 'SwitchButton_buttonWarning_3f',
                    bu = 'SwitchButton_number_8a',
                    pu = ({ id: e, state: u, currentIndex: t, isHovered: i }) => {
                        const s = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url('${R.images.gui.maps.icons.tanksetup.panel.indexes.$dyn(`setup_${e + 1}`)}')`,
                                }),
                                [e],
                            ),
                            r = e === t,
                            l = !r && u === lu.WARNING;
                        return a().createElement(
                            'div',
                            { className: h()(ou, { [_u]: r, [cu]: l, [mu]: i }) },
                            a().createElement('div', { className: du }),
                            a().createElement('div', { className: Eu }),
                            a().createElement('div', { className: Fu }),
                            a().createElement('div', { className: Au }),
                            a().createElement('div', { className: Du }),
                            a().createElement('div', { style: s, className: bu }),
                        );
                    },
                    gu = 'SwitchEquipment_base_1a',
                    Cu = 'SwitchEquipment_base__disabled_73',
                    Bu = 'SwitchEquipment_cover_b3',
                    hu = ({ onClick: e, totalCount: u, currentIndex: t, states: i, isDisabled: s, groupId: r }) => {
                        const l = (0, n.useRef)(null),
                            o = (0, n.useState)(!1),
                            _ = o[0],
                            c = o[1],
                            d = (t + 1) % u,
                            E = (0, n.useCallback)(() => {
                                s || e({ groupId: r, currentIndex: d });
                            }, [r, s, d, e]),
                            m = (0, n.useCallback)(() => {
                                s || (c(!0), ru.playHighlight());
                            }, [s]),
                            A = (0, n.useCallback)(() => {
                                s || c(!1);
                            }, [s]),
                            F = h()(gu, s && Cu);
                        return a().createElement(
                            'div',
                            {
                                id: `switch-equipment-group-${r}`,
                                className: F,
                                onClick: E,
                                onMouseEnter: m,
                                onMouseLeave: A,
                                ref: l,
                            },
                            Array.from({ length: u }, (e, u) =>
                                a().createElement(pu, { key: u, id: u, state: Y(i, u), currentIndex: t, isHovered: _ }),
                            ),
                            s && a().createElement('div', { className: Bu }),
                        );
                    };
                var fu = t(558),
                    Su = t(934);
                const vu = {
                        base__enterUp: 'GroupAnimation_base__enterUp_b3',
                        animationEnterTop: 'GroupAnimation_animationEnterTop_92',
                        base__enterDown: 'GroupAnimation_base__enterDown_f0',
                        animationEnterDown: 'GroupAnimation_animationEnterDown_73',
                        base__exitUp: 'GroupAnimation_base__exitUp_92',
                        animationExitTop: 'GroupAnimation_animationExitTop_89',
                        base__exitDown: 'GroupAnimation_base__exitDown_67',
                        animationExitDown: 'GroupAnimation_animationExitDown_02',
                    },
                    wu = 'up',
                    yu = 'down',
                    xu = ({ children: e, index: u, setSetupSwitching: t, disabled: i = !1 }) => {
                        const s = (0, n.useRef)(1 - u),
                            r = (0, n.useMemo)(() => {
                                const e = ((t = u), (n = s.current), t === n ? '' : t > n ? yu : wu);
                                var t, n;
                                const a = e && G(e);
                                return i ? {} : { enter: vu[`base__enter${a}`], exit: vu[`base__exit${a}`] };
                            }, [u, i]);
                        return (
                            (s.current = u),
                            a().createElement(
                                fu.Z,
                                { className: vu.base },
                                a().createElement(
                                    Su.Z,
                                    {
                                        timeout: 300,
                                        key: u,
                                        classNames: r,
                                        onEnter: () => t(!0),
                                        onExited: () => t(!1),
                                    },
                                    e,
                                ),
                            )
                        );
                    };
                let Tu;
                !(function (e) {
                    (e.Hangar = 'hangar'),
                        (e.Setup = 'setup'),
                        (e.Compare = 'compare'),
                        (e.Battle = 'battle'),
                        (e.Respawn = 'respawn'),
                        (e.Prebattle = 'prebattle');
                })(Tu || (Tu = {}));
                const ku = (e) => e.imageSource === R.images.gui.maps.icons.tanksetup.panel.empty(),
                    Iu = (e) => e === Tu.Battle || e === Tu.Prebattle,
                    Ru = (e) => !Iu(e),
                    Ou = (e) => Iu(e) || e === Tu.Respawn,
                    Mu = 'shells',
                    Lu = 'consumables',
                    Nu = 'battleAbilities',
                    Pu = 'toggleShells',
                    Hu = 'toggleCamouflage',
                    Gu = {
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
                    $u = [
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
                function Wu() {
                    return (
                        (Wu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Wu.apply(this, arguments)
                    );
                }
                class zu extends a().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && su(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && su(this.props.soundClick);
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
                            i = e.side,
                            s = e.type,
                            r = e.classNames,
                            l = e.onMouseEnter,
                            o = e.onMouseLeave,
                            _ = e.onMouseDown,
                            c = e.onMouseUp,
                            d =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        a = {},
                                        i = Object.keys(e);
                                    for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                    return a;
                                })(e, $u)),
                            E = h()(Gu.base, Gu[`base__${s}`], Gu[`base__${i}`], null == r ? void 0 : r.base),
                            m = h()(Gu.icon, Gu[`icon__${s}`], Gu[`icon__${i}`], null == r ? void 0 : r.icon),
                            A = h()(Gu.glow, null == r ? void 0 : r.glow),
                            F = h()(Gu.caption, Gu[`caption__${s}`], null == r ? void 0 : r.caption),
                            D = h()(Gu.goto, null == r ? void 0 : r.goto);
                        return a().createElement(
                            'div',
                            Wu(
                                {
                                    className: E,
                                    onMouseEnter: this._onMouseEnter(l),
                                    onMouseLeave: this._onMouseLeave(o),
                                    onMouseDown: this._onMouseDown(_),
                                    onMouseUp: this._onMouseUp(c),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                d,
                            ),
                            'info' !== s && a().createElement('div', { className: Gu.shine }),
                            a().createElement('div', { className: m }, a().createElement('div', { className: A })),
                            a().createElement('div', { className: F }, u),
                            n && a().createElement('div', { className: D }, n),
                        );
                    }
                }
                zu.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                let Uu;
                !(function (e) {
                    (e.None = ''),
                        (e.Tiny = 'tiny'),
                        (e.Small = 'small'),
                        (e.Medium = 'medium'),
                        (e.Large = 'large'),
                        (e.Huge = 'huge');
                })(Uu || (Uu = {}));
                const Xu = 'setup-content';
                function ju(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return Vu(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return Vu(e, u);
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
                function Vu(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const Ku = (e, u = []) => {
                        const t = document.getElementById('root');
                        t && (t.style.cursor = e ? 'grabbing' : 'default');
                        for (var n, a = ju(u); !(n = a()).done; ) {
                            const u = n.value,
                                t = document.getElementById(u);
                            t && (t.style.pointerEvents = e ? 'none' : 'auto');
                        }
                    },
                    qu = (e, u, t) => {
                        let n = '',
                            a = 8e3;
                        for (var i, s = ju(t); !(i = s()).done; ) {
                            const e = i.value,
                                t = Math.abs(e.centerX - u);
                            t < a && ((n = e.id), (a = t));
                        }
                        return n;
                    },
                    Yu = (e, u) => {
                        const t = u.find((u) => u.id === e);
                        return t ? t.centerX : 0;
                    };
                let Zu, Qu;
                !(function (e) {
                    (e.Waiting = 'waiting'), (e.Active = 'active'), (e.InEffect = 'in'), (e.Rollback = 'rollback');
                })(Zu || (Zu = {})),
                    (function (e) {
                        (e.Ready = 'ready'),
                            (e.DragStart = 'start'),
                            (e.Drag = 'drag'),
                            (e.Drop = 'drop'),
                            (e.DropExit = 'exit');
                    })(Qu || (Qu = {}));
                const Ju = (e) => `panel-${e}-section`,
                    et = (e, u) => {
                        const t = Ju(e),
                            n = u.filter((e) => e !== t);
                        return { selfId: t, blockOnGrabIds: [Xu, ...n] };
                    },
                    ut = ({ baseId: e, slotsLength: u, handleSwap: t, setIsExitBlocked: a, syncInitiator: i }) => {
                        const s = ((e, u, t) => {
                                const a = (0, n.useRef)([]),
                                    i = (0, n.useRef)({ dragId: '', dropId: '', prevPotentialDropId: '' }),
                                    s = (0, n.useState)({ activeDragId: '', potentialDropId: '' }),
                                    r = s[0],
                                    l = s[1],
                                    o = (0, n.useCallback)((e) => {
                                        i.current.dropId ||
                                            i.current.prevPotentialDropId ||
                                            ((i.current.prevPotentialDropId = e),
                                            l({ activeDragId: e, potentialDropId: e }));
                                    }, []),
                                    _ = (0, n.useCallback)((e, u) => {
                                        if (a.current) {
                                            const t = qu(0, u, a.current);
                                            t !== i.current.prevPotentialDropId &&
                                                ((i.current.prevPotentialDropId = t),
                                                l({ activeDragId: e, potentialDropId: t }));
                                        }
                                    }, []),
                                    c = (0, n.useCallback)((e, u) => {
                                        if (a.current && u) {
                                            const t = i.current,
                                                n = qu(0, u, a.current);
                                            (t.dropId = n),
                                                (t.dragId = e),
                                                (t.prevPotentialDropId = ''),
                                                l({ activeDragId: e, potentialDropId: '' }),
                                                n !== e && su('cons_equipment_swipe');
                                        }
                                    }, []),
                                    d = (0, n.useCallback)(() => {
                                        const e = i.current,
                                            u = e.dragId,
                                            t = e.dropId,
                                            n = e.prevPotentialDropId;
                                        (u || t || n) &&
                                            ((i.current = { dragId: '', dropId: '', prevPotentialDropId: '' }),
                                            l({ activeDragId: '', potentialDropId: '' }));
                                    }, []),
                                    E = (0, n.useCallback)(
                                        (e) => {
                                            const u = i.current.dropId;
                                            u && u !== e ? t(e, u) : d();
                                        },
                                        [d, t],
                                    ),
                                    m = (0, n.useCallback)((e, u) => {
                                        const t = a.current.find((u) => u.id === e);
                                        t && u && (t.centerX = u);
                                    }, []),
                                    A = (0, n.useCallback)(
                                        (e, u) => {
                                            const t = u.dragId,
                                                n = u.currentCenterX;
                                            switch (e) {
                                                case Qu.Ready:
                                                    return m(t, n);
                                                case Qu.DragStart:
                                                    return o(t);
                                                case Qu.Drag:
                                                    return _(t, n);
                                                case Qu.Drop:
                                                    return c(t, n);
                                                case Qu.DropExit:
                                                    return E(t);
                                                default:
                                                    return;
                                            }
                                        },
                                        [o, _, c, E, m],
                                    );
                                return (
                                    (0, n.useEffect)(() => {
                                        if (e !== a.current.length) {
                                            const t = new Array(e).fill(null);
                                            a.current = t.map((e, t) => ({ id: `${u}-${t}`, centerX: 0 }));
                                        }
                                    }, [e, u]),
                                    {
                                        dragState: r,
                                        handleGrabberAction: A,
                                        getForceCenterX: (0, n.useCallback)((e) => {
                                            const u = i.current,
                                                t = u.dragId,
                                                n = u.dropId;
                                            return e === t ? Yu(n, a.current) : e === n ? Yu(t, a.current) : 0;
                                        }, []),
                                        resetDragResults: d,
                                    }
                                );
                            })(u, e, t),
                            r = s.dragState,
                            l = s.handleGrabberAction,
                            o = s.getForceCenterX,
                            _ = s.resetDragResults,
                            c = (0, n.useCallback)(
                                (e, u) => {
                                    if (a)
                                        switch (e) {
                                            case Qu.DragStart:
                                            case Qu.Drag:
                                                a(!0);
                                                break;
                                            default:
                                                a(!1);
                                        }
                                    l(e, u);
                                },
                                [l, a],
                            );
                        return (
                            (0, n.useEffect)(() => {
                                a && a(!1);
                            }, [a]),
                            (0, n.useEffect)(() => {
                                _();
                            }, [i, _]),
                            { handleGrabberAction: c, dragState: r, getForceCenterX: o }
                        );
                    },
                    tt = {
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
                    nt = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function at() {
                    return (
                        (at =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        at.apply(this, arguments)
                    );
                }
                const it = (e) => {
                    let u = e.size,
                        t = e.value,
                        n = e.isEmpty,
                        i = e.fadeInAnimation,
                        s = e.hide,
                        r = e.maximumNumber,
                        l = e.className,
                        o = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                            return a;
                        })(e, nt);
                    const _ = n ? null : t,
                        c = 'string' == typeof _;
                    if ((_ && !c && _ < 0) || 0 === _) return null;
                    const d = _ && !c && _ > r,
                        E = h()(
                            tt.base,
                            tt[`base__${u}`],
                            i && tt.base__animated,
                            s && tt.base__hidden,
                            !_ && tt.base__pattern,
                            n && tt.base__empty,
                            l,
                        );
                    return a().createElement(
                        'div',
                        at({ className: E }, o),
                        a().createElement('div', { className: tt.bg }),
                        a().createElement('div', { className: tt.pattern }),
                        a().createElement(
                            'div',
                            { className: h()(tt.value, c && tt.value__text) },
                            d ? r : _,
                            d && a().createElement('span', { className: tt.plus }, '+'),
                        ),
                    );
                };
                it.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
                const st = 'display',
                    rt = 'visible_change',
                    lt = rt,
                    ot = 'TopLabel_base_7f',
                    _t = 'TopLabel_base__ready_00',
                    ct = 'TopLabel_text_d0',
                    dt = 'TopLabel_text__hangar_36',
                    Et = 'TopLabel_text__shown_25',
                    mt = 'TopLabel_text__hidden_79',
                    At = 'TopLabel_text__truncated_29',
                    Ft = (0, n.memo)(({ panelType: e, text: u, parentRef: t, isTruncated: i = !1, show: s = !1 }) => {
                        const r = (0, n.useRef)(!1),
                            l = (0, n.useState)(!1),
                            o = l[0],
                            _ = l[1];
                        (0, n.useEffect)(() => {
                            t || (s && !r.current && (r.current = !0), _(s));
                        }, [s, t]);
                        const c = (0, n.useCallback)(() => {
                                (r.current = !0), _(!0);
                            }, []),
                            d = (0, n.useCallback)(() => {
                                _(!1);
                            }, []);
                        (0, n.useEffect)(() => {
                            const e = t && t.current;
                            if (e)
                                return (
                                    e.addEventListener('mouseenter', c),
                                    e.addEventListener('mouseleave', d),
                                    () => {
                                        e.removeEventListener('mouseenter', c), e.removeEventListener('mouseleave', d);
                                    }
                                );
                        }, [t, c, d]);
                        const E = h()(ot, r.current && _t),
                            m = h()(ct, e !== Tu.Setup && dt, i && At, s && o ? Et : mt);
                        return a().createElement(
                            'div',
                            { className: E },
                            a().createElement('div', { className: m }, u),
                        );
                    }),
                    Dt = 'notUsableSection',
                    bt = 'Section_base_8a',
                    pt = 'Section_base__hidden_f0',
                    gt = 'Section_label_73',
                    Ct = 'Section_counter_8a',
                    Bt = 'Section_configLabel_c9',
                    ht = 'Section_configText_eb',
                    ft = 'Section_configVehicleIcon_20';
                let St;
                !(function (e) {
                    (e[(e.NonSet = 0)] = 'NonSet'),
                        (e[(e.Debug = 10)] = 'Debug'),
                        (e[(e.Info = 20)] = 'Info'),
                        (e[(e.Warning = 30)] = 'Warning');
                })(St || (St = {}));
                const vt = 'tooltip_watched';
                let wt;
                !(function (e) {
                    (e.Click = 'click'), (e.KeyDown = 'keydown');
                })(wt || (wt = {}));
                let yt, xt, Tt;
                !(function (e) {
                    (e.HangarView = 'hangar'),
                        (e.SetupView = 'setup_view'),
                        (e.ProgressView = 'progress_view'),
                        (e.RewardsView = 'rewards_view'),
                        (e.RewardsSelectionView = 'rewards_selection_view'),
                        (e.SkillsView = 'skills_view'),
                        (e.AwardsView = 'awards_view'),
                        (e.ContainerView = 'container_view');
                })(yt || (yt = {})),
                    (function (e) {
                        (e.AbilitiesCheckboxTooltip = 'abilities_checkbox_tooltip'),
                            (e.EpicWidgetTooltip = 'epic_widget_tooltip'),
                            (e.BannerPerformance = 'banner_performance_tooltip'),
                            (e.SkillPointsTooltip = 'skill_points_tooltip'),
                            (e.AbilityLevelsTooltip = 'ability_levels_tooltip'),
                            (e.SkillOrderTooltip = 'skill_order_tooltip'),
                            (e.SkillLevelTab = 'skill_level_tab'),
                            (e.RewardsButton = 'rewards_button'),
                            (e.RewardsButtonTooltip = 'rewards_button_tooltip'),
                            (e.RewardTooltip = 'reward_tooltip'),
                            (e.AwardsOkButton = 'awards_ok'),
                            (e.AwardsView = 'awards_view'),
                            (e.RewardsSelectionView = 'rewards_selection_view');
                    })(xt || (xt = {})),
                    (function (e) {
                        (e.Click = 'click'), (e.Close = 'close');
                    })(Tt || (Tt = {}));
                const kt = 'metrics',
                    It = () => Date.now(),
                    Rt = ({ partnerID: e, item: u, parentScreen: t, itemState: n, info: a }) => ({
                        item: u,
                        partnerID: e || null,
                        parent_screen: t || null,
                        item_state: n || null,
                        additional_info: a || null,
                    }),
                    Ot = (e, u) => {
                        const t = (0, n.useCallback)(
                            (t, n = St.Info, a) => {
                                a || (a = {}),
                                    Object.keys(a).length >= 200 ||
                                        window.uiLoggerModel.log({
                                            feature: e,
                                            group: u,
                                            action: t,
                                            logLevel: n,
                                            params: JSON.stringify(a),
                                        });
                            },
                            [e, u],
                        );
                        return (e, u, n) => t(e, u, n);
                    },
                    Mt = (e, u) => {
                        const t = Ot(e, u),
                            a = (0, n.useRef)(new Map()),
                            i = (0, n.useRef)(new Map()),
                            s = (0, n.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const u = a.current.get(e);
                                    (void 0 !== u && u > 0) || a.current.set(e, It());
                                },
                                [a],
                            ),
                            r = (0, n.useCallback)(() => {
                                a.current.clear(), i.current.clear();
                            }, [a, i]),
                            l = (0, n.useCallback)(
                                (e) => {
                                    e &&
                                        void 0 !== a.current.get(e) &&
                                        void 0 === i.current.get(e) &&
                                        i.current.set(e, It());
                                },
                                [a, i],
                            ),
                            o = (0, n.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const u = a.current.get(e);
                                    if (void 0 === u) return;
                                    const t = i.current.get(e);
                                    if (void 0 === t) return;
                                    i.current.delete(e);
                                    const n = It() - t;
                                    a.current.set(e, u + n);
                                },
                                [a, i],
                            ),
                            _ = (0, n.useCallback)(
                                (e, u = 0, n, s) => {
                                    const r = a.current.get(e);
                                    if (void 0 === r) return;
                                    void 0 !== i.current.get(e) && o(e), a.current.delete(e);
                                    const l = (It() - r) / 1e3;
                                    l <= u ||
                                        ((s = ((e, u) => (void 0 === e && (e = {}), (e.timeSpent = u), e))(s, l)),
                                        t(e, n, s));
                                },
                                [a, i, t, o],
                            );
                        return [(e) => s(e), (e, u, t, n) => _(e, u, t, n), () => r(), (e) => l(e), (e) => o(e)];
                    },
                    Lt = (e) => {
                        const u = Mt(e, kt),
                            t = u[0],
                            a = u[1],
                            i = u[2],
                            s = u[3],
                            r = u[4],
                            l = (0, n.useCallback)(
                                (e) => {
                                    const u = e.action,
                                        t = e.timeLimit,
                                        n = e.logLevel;
                                    a(u, t, n, Rt(e));
                                },
                                [a],
                            );
                        return [(e) => t(e), (e) => l(e), () => i(), (e) => s(e), (e) => r(e)];
                    },
                    Nt = a().memo(function ({ className: e, children: u }) {
                        const t = ((e, u, t, a) => {
                                const i = Lt('epic_battle'),
                                    s = i[0],
                                    r = i[1];
                                return [
                                    (0, n.useCallback)(() => s(vt), [s]),
                                    (0, n.useCallback)(
                                        () =>
                                            r({
                                                action: vt,
                                                timeLimit: 2,
                                                item: e,
                                                parentScreen: u,
                                                itemState: t,
                                                info: a,
                                            }),
                                        [r, e, u, t, a],
                                    ),
                                ];
                            })(xt.SkillOrderTooltip, yt.SetupView),
                            i = t[0],
                            s = t[1];
                        return a().createElement(
                            Ne,
                            {
                                contentId: R.views.frontline.lobby.tooltips.SkillOrderTooltip('resId'),
                                onMouseEnter: i,
                                onMouseLeave: s,
                            },
                            a().createElement('div', { className: e }, u),
                        );
                    }),
                    Pt = 'SlotDivider_base_60',
                    Ht = () => a().createElement('div', { className: Pt }),
                    Gt = ({ wrapper: e, children: u, when: t, withProps: n }) =>
                        t ? a().createElement(e, n, u) : a().createElement(a().Fragment, null, u),
                    $t = {
                        base: 'Container_base_9a',
                        base__grabbing: 'Container_base__grabbing_73',
                        base__hangar: 'Container_base__hangar_ab',
                        base__setup: 'Container_base__setup_1c',
                        base__compare: 'Container_base__compare_0b',
                        base__selected: 'Container_base__selected_17',
                        base__dragIn: 'Container_base__dragIn_a6',
                        base__dragInActive: 'Container_base__dragInActive_e5',
                        base__toggle: 'Container_base__toggle_94',
                        base__disabled: 'Container_base__disabled_22',
                    },
                    Wt = ({
                        activeDragId: e,
                        slotType: u,
                        isSelected: t,
                        isBorderActive: n,
                        children: i,
                        panelType: s,
                        isDisabled: r,
                        isPotentialDrop: l,
                        onClick: o,
                    }) => {
                        const _ = h()(
                            $t.base,
                            !e && $t[`base__${s}`],
                            u && $t[`base__${u}`],
                            t && !l && !n && $t.base__selected,
                            l && $t['base__dragIn' + (t ? 'Active' : '')],
                            r && $t.base__disabled,
                        );
                        return a().createElement('div', { className: _, onClick: o }, i);
                    },
                    zt = {
                        base: 'Bonus_base_dd',
                        base__fitting: 'Bonus_base__fitting_d1',
                        icon: 'Bonus_icon_3b',
                        icon__battleBooster: 'Bonus_icon__battleBooster_66',
                        icon__battleBoosterReplace: 'Bonus_icon__battleBoosterReplace_8d',
                        icon__equipmentPlus: 'Bonus_icon__equipmentPlus_48',
                        icon__builtInEquipment: 'Bonus_icon__builtInEquipment_77',
                        icon__equipmentModernized: 'Bonus_icon__equipmentModernized_76',
                        icon__equipmentTrophyBasic: 'Bonus_icon__equipmentTrophyBasic_a4',
                        icon__equipmentTrophyUpgraded: 'Bonus_icon__equipmentTrophyUpgraded_6d',
                    },
                    Ut = a().memo(({ isTemporary: e, overlayType: u, overlaySource: t }) => {
                        const i = h()(zt.base, e && zt.base__fitting),
                            s = h()(zt.icon, zt[`icon__${u}`]),
                            r = (0, n.useMemo)(() => ({ backgroundImage: `url(${t})` }), [t]);
                        return a().createElement(
                            'div',
                            { className: i },
                            a().createElement('div', { className: s, style: r }),
                        );
                    }),
                    Xt = {
                        base: 'Level_base_57',
                        base__level1: 'Level_base__level1_c4',
                        base__level2: 'Level_base__level2_9c',
                        base__level3: 'Level_base__level3_39',
                        base__level4: 'Level_base__level4_e3',
                        base__level5: 'Level_base__level5_ea',
                        base__level6: 'Level_base__level6_5d',
                        base__level7: 'Level_base__level7_03',
                        base__level8: 'Level_base__level8_b5',
                        base__level9: 'Level_base__level9_d6',
                        base__level10: 'Level_base__level10_89',
                    },
                    jt = ({ level: e }) => {
                        const u = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url(${R.images.gui.maps.icons.levels.$dyn(`tank_level_${e}`)})`,
                                }),
                                [e],
                            ),
                            t = h()(Xt.base, Xt[`base__level${e}`]);
                        return a().createElement('div', { style: u, className: t });
                    },
                    Vt = 'Inside_image_e5',
                    Kt = 'Inside_image__fitting_11',
                    qt = 'Inside_warning_e4',
                    Yt = 'Inside_change_5a',
                    Zt = ({
                        level: e,
                        overlayType: u,
                        isTemporary: t,
                        withAttention: i,
                        imageSource: s,
                        isIncompatible: r,
                    }) => {
                        const l = (0, n.useMemo)(() => {
                                const t = 'equipmentModernized' === u ? `${u}_${e}_overlay` : `${u}_overlay`;
                                return R.images.gui.maps.icons.quests.bonuses.small.$dyn(t);
                            }, [u, e]),
                            o = (0, n.useMemo)(() => ({ backgroundImage: `url(${s})` }), [s]),
                            _ = !l && Boolean(u) && e;
                        return a().createElement(
                            'div',
                            null,
                            _ && a().createElement(jt, { level: e }),
                            a().createElement('div', { className: h()(Vt, (t || i) && Kt), style: o }),
                            i && a().createElement('div', { className: qt }),
                            r && a().createElement('div', { className: Yt }),
                            l && a().createElement(Ut, { isTemporary: t, overlaySource: l, overlayType: u }),
                        );
                    },
                    Qt = 'Grabber_base_cf',
                    Jt = 'Grabber_base__enabled_b0',
                    en = 'Grabber_base__waitingUpdate_1d',
                    un = 'Grabber_base__updating_f1',
                    tn = 'Grabber_base__active_71',
                    nn = 'Grabber_base__exit_1f',
                    an = 'Grabber_base__showAnimation_d9',
                    sn = a().memo(
                        ({
                            children: e,
                            id: u,
                            containerRef: t,
                            isEnabled: i = !0,
                            onClick: s,
                            forceCenterX: r,
                            isUpdateAvailable: l,
                            handleAction: o,
                            blockOnGrabIds: _ = [],
                        }) => {
                            const c = se().mediaSize,
                                d = (0, n.useRef)({
                                    actualX: 0,
                                    clickCenterOffset: 0,
                                    dropCenterX: 0,
                                    grabActivationPassed: !1,
                                    isDragActive: !1,
                                    id: u,
                                }),
                                E = (0, n.useRef)({
                                    isValid: !1,
                                    startX: 0,
                                    startCenterX: 0,
                                    minXRestriction: 0,
                                    maxXRestriction: 8e3,
                                }),
                                m = (0, n.useRef)(null),
                                A = (0, n.useState)(!1),
                                F = A[0],
                                D = A[1],
                                g = (0, n.useState)(0),
                                B = g[0],
                                f = g[1],
                                S = 0 !== r && i;
                            (0, n.useEffect)(() => {
                                if (((E.current.isValid = !1), u))
                                    return v(() => {
                                        const e = m.current,
                                            n = t.current;
                                        if (n && e) {
                                            const t = e.getBoundingClientRect(),
                                                a = n.getBoundingClientRect(),
                                                i = t.left + 0.5 * t.width;
                                            (E.current = {
                                                isValid: !0,
                                                minXRestriction: a.left,
                                                maxXRestriction: a.left + a.width,
                                                startX: t.left,
                                                startCenterX: i,
                                            }),
                                                o(Qu.Ready, { dragId: u, currentCenterX: i });
                                        }
                                    });
                            }, [c]);
                            const w = (0, n.useCallback)(
                                    (e) => {
                                        (d.current.isDragActive = e),
                                            D(e),
                                            d.current.grabActivationPassed && !e && Ku(!1, _);
                                    },
                                    [_],
                                ),
                                y = (0, n.useCallback)(() => {
                                    o(Qu.DragStart, { dragId: d.current.id }),
                                        (d.current.grabActivationPassed = !0),
                                        Ku(!0, _);
                                }, [o, _]),
                                x = (0, n.useCallback)((e) => {
                                    const u = d.current,
                                        t = E.current,
                                        n = t.startX,
                                        a = t.startCenterX,
                                        i = t.minXRestriction,
                                        s = t.maxXRestriction,
                                        r = a - n,
                                        l = e - u.clickCenterOffset;
                                    u.dropCenterX = ((e, u, t, n) => {
                                        const a = t + u,
                                            i = n - u;
                                        return e < a ? a : e > i ? i : e;
                                    })(l, r, i, s);
                                }, []),
                                T = (0, n.useCallback)(
                                    (e) => {
                                        const u = d.current,
                                            t = E.current;
                                        0 === e.button &&
                                            !u.isDragActive &&
                                            t.isValid &&
                                            i &&
                                            !l &&
                                            m.current &&
                                            ((u.actualX = e.clientX),
                                            (u.clickCenterOffset = u.actualX - t.startCenterX),
                                            w(!0));
                                    },
                                    [i, l, w],
                                ),
                                k = (0, n.useCallback)(() => {
                                    !s || (i && E.current.isValid) || s();
                                }, [i, s]),
                                I = (0, n.useCallback)(
                                    (e) => {
                                        const u = d.current;
                                        e.target === m.current &&
                                            u.grabActivationPassed &&
                                            ((u.grabActivationPassed = !1),
                                            setTimeout(() => o(Qu.DropExit, { dragId: u.id })));
                                    },
                                    [o],
                                );
                            C(p.n.ESCAPE, () => w(!1)),
                                (0, n.useEffect)(() => {
                                    i && r && f(0);
                                }, [r, i]);
                            const R = !F && d.current.grabActivationPassed;
                            (0, n.useEffect)(() => {
                                d.current.id = u;
                            }, [u]),
                                (0, n.useEffect)(() => {
                                    R && o(Qu.Drop, { dragId: d.current.id, currentCenterX: d.current.dropCenterX });
                                }, [R, o]),
                                (0, n.useEffect)(() => {
                                    const e = m.current;
                                    if (S && e)
                                        return (
                                            e.addEventListener('transitionend', I),
                                            () => {
                                                e.removeEventListener('transitionend', I);
                                            }
                                        );
                                }, [S, I]),
                                (0, n.useEffect)(() => {
                                    if (i && F && d.current.id) {
                                        const e = b.O.client.events.mouse.up(([e, u]) => {
                                                if ('outside' === u) return w(!1);
                                                const t = d.current,
                                                    n = e.clientX;
                                                n === t.actualX && 0 === e.button && !d.current.grabActivationPassed
                                                    ? s && s()
                                                    : d.current.grabActivationPassed && x(n),
                                                    d.current.isDragActive && w(!1);
                                            }),
                                            u = b.O.client.events.mouse.move(([e]) => {
                                                const u = d.current;
                                                if ((0 === e.clientX && 0 === e.clientY) || !u.isDragActive) return;
                                                const t = e.clientX,
                                                    n = u.grabActivationPassed;
                                                !n && y(),
                                                    t !== u.actualX &&
                                                        ((u.actualX = t),
                                                        x(t),
                                                        n &&
                                                            o(Qu.Drag, { dragId: u.id, currentCenterX: u.dropCenterX }),
                                                        f(u.dropCenterX - E.current.startCenterX));
                                            });
                                        return () => {
                                            u(), e();
                                        };
                                    }
                                }, [y, o, F, i, s, w, x]);
                            const O = (0, n.useMemo)(
                                    () => (r ? { left: r - E.current.startCenterX } : { left: B }),
                                    [B, r],
                                ),
                                M = i ? h()(Qt, Jt, F && tn, R && nn, S && en, r && un) : h()(Qt, r && an);
                            return a().createElement(
                                'div',
                                { id: u, ref: m, onClick: k, onMouseDown: T, className: M, style: O },
                                e,
                            );
                        },
                    );
                let rn;
                !(function (e) {
                    (e[(e.Normal = 0)] = 'Normal'), (e[(e.Current = 1)] = 'Current'), (e[(e.Next = 2)] = 'Next');
                })(rn || (rn = {}));
                const ln = 'KeyLabel_base_ec',
                    on = 'KeyLabel_base__current_c2',
                    _n = 'KeyLabel_base__next_fa',
                    cn = ({ text: e, show: u, panelType: t, shellState: n }) => {
                        if (!e) return null;
                        e = 'KEY_NONE' === e ? '..' : R.strings.readable_key_names.$dyn(e);
                        const i = h()(ln, n === rn.Current && on, n === rn.Next && _n);
                        return a().createElement(
                            'div',
                            { className: i },
                            a().createElement(Ft, { isTruncated: !0, text: e, show: u, panelType: t }),
                        );
                    },
                    dn = ({ children: e, slotType: u, slotId: t, isEnabled: i = !0 }) => {
                        const s = (0, n.useMemo)(() => ({ slotType: u, slotId: t }), [u, t]);
                        return a().createElement(Ge, { isEnabled: i, args: s }, a().createElement('div', null, e));
                    },
                    En = 'Close_base_f3',
                    mn = 'Close_base__invisible_0e',
                    An = 'Close_base__shown_a2',
                    Fn = 'Close_base__hover_6d',
                    Dn = 'Close_base__down_2b',
                    bn = (0, n.memo)(
                        ({ id: e, show: u = !0, onClick: t, soundHover: i = 'highlight', soundClick: s = 'play' }) => {
                            const r = (0, n.useState)(!1),
                                l = r[0],
                                o = r[1],
                                _ = (0, n.useState)(!1),
                                c = _[0],
                                d = _[1],
                                E = (0, n.useState)(!1),
                                m = E[0],
                                A = E[1],
                                F = (0, n.useCallback)((e) => {
                                    e.stopPropagation();
                                }, []),
                                D = (0, n.useCallback)(() => {
                                    d(!0), i && su(i);
                                }, [i]),
                                b = (0, n.useCallback)(() => {
                                    o(!1), d(!1);
                                }, []),
                                p = (0, n.useCallback)(
                                    (e) => {
                                        u && 0 === e.button && (o(!0), s && su(s));
                                    },
                                    [u, s],
                                ),
                                g = (0, n.useCallback)(
                                    (e) => {
                                        u && 0 === e.button && t && t();
                                    },
                                    [u, t],
                                );
                            (0, n.useEffect)(
                                () =>
                                    v(() => {
                                        A(!0);
                                    }),
                                [],
                            );
                            const C = h()(En, !m && mn, m && u && An, l && Dn, c && Fn);
                            return a().createElement('div', {
                                id: e,
                                onMouseOver: D,
                                onMouseLeave: b,
                                onMouseDown: p,
                                onMouseUp: g,
                                className: C,
                                onClick: F,
                            });
                        },
                    ),
                    pn = 'Slot_base_3a',
                    gn = 'Slot_label_e6',
                    Cn = 'Slot_close_bb',
                    Bn = 'Slot_disabled_5d',
                    hn = 'Slot_shadow_a7',
                    fn = 'Slot_category_2c';
                let Sn;
                !(function (e) {
                    (e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH');
                })(Sn || (Sn = {}));
                const vn = ({
                        children: e,
                        contentID: u,
                        decoratorID: t = 0,
                        targetId: a = 0,
                        args: i,
                        isEnabled: s = !0,
                        onMouseDown: r,
                    }) => {
                        const l = (0, n.useCallback)(() => {
                                (0, _.c9)(_.B0.CONTEXT_MENU, {
                                    contentID: u,
                                    decoratorID: t,
                                    targetID: a,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: i,
                                }),
                                    ru.playYes();
                            }, [i, u, t, a]),
                            o = (0, n.useCallback)(() => {
                                (0, _.c9)(_.B0.CONTEXT_MENU, {
                                    contentID: u,
                                    decoratorID: t,
                                    targetID: a,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [u, t, a]),
                            c = (0, n.useCallback)(
                                (e) => {
                                    r && r(e), ((e) => e.button === Sn.RIGHT)(e) && l();
                                },
                                [r, l],
                            );
                        return (
                            (0, n.useEffect)(() => {
                                !1 === s && o();
                            }, [s, o]),
                            s ? (0, n.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    wn = ['children'];
                function yn() {
                    return (
                        (yn =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        yn.apply(this, arguments)
                    );
                }
                const xn = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, wn);
                        return a().createElement(
                            vn,
                            yn({}, t, { contentID: R.views.common.BackportContextMenu('resId') }),
                            u,
                        );
                    },
                    Tn = 'select',
                    kn = 'undo',
                    In = 'swap',
                    Rn = 'demount',
                    On = 'demount_from_setups',
                    Mn = 'destroy',
                    Ln = 1600;
                let Nn;
                !(function (e) {
                    (e.RIGHT = 'Right'),
                        (e.LEFT = 'Left'),
                        (e.SWAP = 'Swap'),
                        (e.FITTING = 'Fitting'),
                        (e.FITTING_REMOVE = 'FittingRemove'),
                        (e.FADE = 'Fade'),
                        (e.DESTROY = 'Destroy'),
                        (e.DEMOUNT = 'Demount');
                })(Nn || (Nn = {}));
                const Pn = { [In]: 200, [kn]: 250, [Tn]: 250, [Mn]: 1400, [Rn]: Ln, [On]: Ln, demount_from_setup: Ln },
                    Hn = 'BackEffects_shine_f6',
                    Gn = 'BackEffects_sparks_55',
                    $n = 'BackEffects_nut_79',
                    Wn = 'BackEffects_wrench_5a',
                    zn = { enterActive: 'BackEffects_shine__enterActive_54' },
                    Un = { enterActive: 'BackEffects_sparks__enterActive_79' },
                    Xn = { enterActive: 'BackEffects_nut__enterActive_b8' },
                    jn = { enterActive: 'BackEffects_wrench__enterActive_ca' },
                    Vn = [Rn, On],
                    Kn = a().memo(({ in: e, actionType: u }) =>
                        a().createElement(
                            a().Fragment,
                            null,
                            a().createElement(
                                Su.Z,
                                { in: e, timeout: 200, classNames: zn },
                                a().createElement('div', { className: Hn }),
                            ),
                            a().createElement(
                                Su.Z,
                                { in: e, timeout: 400, classNames: Un },
                                a().createElement('div', { className: Gn }),
                            ),
                            Vn.includes(u) &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement(
                                        Su.Z,
                                        { in: e, timeout: 600, classNames: Xn },
                                        a().createElement('div', { className: $n }),
                                    ),
                                    a().createElement(
                                        Su.Z,
                                        { in: e, timeout: 600, classNames: jn },
                                        a().createElement('div', { className: Wn }),
                                    ),
                                ),
                        ),
                    ),
                    qn = 'ColorMask_base_60',
                    Yn = 'ColorMask_base__enterActive_62',
                    Zn = ({ in: e, maskImage: u }) => {
                        const t = (0, n.useMemo)(() => ({ enterActive: Yn }), []),
                            i = (0, n.useMemo)(() => ({ maskImage: `url(${u})` }), [u]);
                        return a().createElement(
                            Su.Z,
                            { in: e, timeout: 1200, classNames: t },
                            a().createElement('div', { className: qn, style: i }),
                        );
                    },
                    Qn = {
                        base__exitLeft: 'SlotTransitions_base__exitLeft_d8',
                        'animation-left': 'SlotTransitions_animation-left_27',
                        base__exitLeftFade: 'SlotTransitions_base__exitLeftFade_53',
                        'animation-fade': 'SlotTransitions_animation-fade_ce',
                        base__enterRight: 'SlotTransitions_base__enterRight_bb',
                        'animation-right': 'SlotTransitions_animation-right_31',
                        base__enterRightFade: 'SlotTransitions_base__enterRightFade_63',
                        base__exitRight: 'SlotTransitions_base__exitRight_b9',
                        base__enterLeft: 'SlotTransitions_base__enterLeft_e9',
                        base__exitRightSwap: 'SlotTransitions_base__exitRightSwap_64',
                        'animation-right-long': 'SlotTransitions_animation-right-long_bd',
                        base__enterRightSwap: 'SlotTransitions_base__enterRightSwap_5e',
                        base__enterLeftSwap: 'SlotTransitions_base__enterLeftSwap_da',
                        'animation-left-long': 'SlotTransitions_animation-left-long_ec',
                        base__exitLeftSwap: 'SlotTransitions_base__exitLeftSwap_c3',
                        base__exitFade: 'SlotTransitions_base__exitFade_4c',
                        base__enterFade: 'SlotTransitions_base__enterFade_77',
                        base: 'SlotTransitions_base_6d',
                        base__enter: 'SlotTransitions_base__enter_54',
                        base__enterFitting: 'SlotTransitions_base__enterFitting_c7',
                        baseShells__exitLeft: 'SlotTransitions_baseShells__exitLeft_1e',
                        'animation-left-shells': 'SlotTransitions_animation-left-shells_0d',
                        baseShells__enterRight: 'SlotTransitions_baseShells__enterRight_66',
                        'animation-right-shells': 'SlotTransitions_animation-right-shells_7c',
                        baseShells__exitRight: 'SlotTransitions_baseShells__exitRight_e4',
                        baseShells__enterLeft: 'SlotTransitions_baseShells__enterLeft_94',
                        baseShells__exitRightSwap: 'SlotTransitions_baseShells__exitRightSwap_fd',
                        'animation-right-long-shells': 'SlotTransitions_animation-right-long-shells_41',
                        baseShells__enterRightSwap: 'SlotTransitions_baseShells__enterRightSwap_41',
                        baseShells__enterLeftSwap: 'SlotTransitions_baseShells__enterLeftSwap_19',
                        'animation-left-long-shells': 'SlotTransitions_animation-left-long-shells_00',
                        baseShells__exitLeftSwap: 'SlotTransitions_baseShells__exitLeftSwap_04',
                        baseShells__exitFade: 'SlotTransitions_baseShells__exitFade_1b',
                        baseShells__enterFade: 'SlotTransitions_baseShells__enterFade_72',
                        baseOptDevices__exitLeft: 'SlotTransitions_baseOptDevices__exitLeft_fe',
                        baseOptDevices__exitLeftFade: 'SlotTransitions_baseOptDevices__exitLeftFade_8a',
                        baseOptDevices__enterRight: 'SlotTransitions_baseOptDevices__enterRight_5d',
                        baseOptDevices__enterRightFade: 'SlotTransitions_baseOptDevices__enterRightFade_2c',
                        baseOptDevices__exitRight: 'SlotTransitions_baseOptDevices__exitRight_72',
                        baseOptDevices__enterLeft: 'SlotTransitions_baseOptDevices__enterLeft_0f',
                        baseOptDevices__exitRightSwap: 'SlotTransitions_baseOptDevices__exitRightSwap_09',
                        baseOptDevices__enterRightSwap: 'SlotTransitions_baseOptDevices__enterRightSwap_04',
                        baseOptDevices__enterLeftSwap: 'SlotTransitions_baseOptDevices__enterLeftSwap_52',
                        baseOptDevices__exitLeftSwap: 'SlotTransitions_baseOptDevices__exitLeftSwap_e9',
                        baseOptDevices__enterFitting: 'SlotTransitions_baseOptDevices__enterFitting_8b',
                        'animation-fitting': 'SlotTransitions_animation-fitting_24',
                        baseOptDevices__exitFittingRemove: 'SlotTransitions_baseOptDevices__exitFittingRemove_fc',
                        'animation-fitting-remove': 'SlotTransitions_animation-fitting-remove_e0',
                        baseOptDevices__exitActiveFitting: 'SlotTransitions_baseOptDevices__exitActiveFitting_d0',
                        baseOptDevices__exitDestroy: 'SlotTransitions_baseOptDevices__exitDestroy_c9',
                        'animation-destroy': 'SlotTransitions_animation-destroy_12',
                        baseOptDevices__enterDestroy: 'SlotTransitions_baseOptDevices__enterDestroy_19',
                        baseOptDevices__exitDemount: 'SlotTransitions_baseOptDevices__exitDemount_e3',
                        'animation-bright-up': 'SlotTransitions_animation-bright-up_8e',
                        'animation-demount': 'SlotTransitions_animation-demount_d8',
                        baseOptDevices__enterDemount: 'SlotTransitions_baseOptDevices__enterDemount_8a',
                        baseOptDevices__exitFade: 'SlotTransitions_baseOptDevices__exitFade_10',
                        baseOptDevices__enterFade: 'SlotTransitions_baseOptDevices__enterFade_cf',
                        baseOptDevices__enterDemountFade: 'SlotTransitions_baseOptDevices__enterDemountFade_57',
                        baseConsumables__exitLeft: 'SlotTransitions_baseConsumables__exitLeft_d9',
                        baseConsumables__exitLeftFade: 'SlotTransitions_baseConsumables__exitLeftFade_4f',
                        baseConsumables__enterRight: 'SlotTransitions_baseConsumables__enterRight_02',
                        baseConsumables__enterRightFade: 'SlotTransitions_baseConsumables__enterRightFade_c6',
                        baseConsumables__exitRight: 'SlotTransitions_baseConsumables__exitRight_39',
                        baseConsumables__enterLeft: 'SlotTransitions_baseConsumables__enterLeft_97',
                        baseConsumables__exitRightSwap: 'SlotTransitions_baseConsumables__exitRightSwap_8a',
                        baseConsumables__enterRightSwap: 'SlotTransitions_baseConsumables__enterRightSwap_28',
                        baseConsumables__enterLeftSwap: 'SlotTransitions_baseConsumables__enterLeftSwap_8e',
                        baseConsumables__exitLeftSwap: 'SlotTransitions_baseConsumables__exitLeftSwap_0e',
                        baseConsumables__enterFitting: 'SlotTransitions_baseConsumables__enterFitting_13',
                        baseConsumables__exitFittingRemove: 'SlotTransitions_baseConsumables__exitFittingRemove_01',
                        baseConsumables__exitActiveFitting: 'SlotTransitions_baseConsumables__exitActiveFitting_10',
                        baseConsumables__exitFade: 'SlotTransitions_baseConsumables__exitFade_5b',
                        baseConsumables__enterFade: 'SlotTransitions_baseConsumables__enterFade_bd',
                        baseBattleAbilities__exitLeft: 'SlotTransitions_baseBattleAbilities__exitLeft_52',
                        baseBattleAbilities__exitLeftFade: 'SlotTransitions_baseBattleAbilities__exitLeftFade_a9',
                        baseBattleAbilities__enterRight: 'SlotTransitions_baseBattleAbilities__enterRight_7b',
                        baseBattleAbilities__enterRightFade: 'SlotTransitions_baseBattleAbilities__enterRightFade_d3',
                        baseBattleAbilities__exitRight: 'SlotTransitions_baseBattleAbilities__exitRight_fc',
                        baseBattleAbilities__enterLeft: 'SlotTransitions_baseBattleAbilities__enterLeft_97',
                        baseBattleAbilities__exitRightSwap: 'SlotTransitions_baseBattleAbilities__exitRightSwap_7d',
                        baseBattleAbilities__enterRightSwap: 'SlotTransitions_baseBattleAbilities__enterRightSwap_e5',
                        baseBattleAbilities__enterLeftSwap: 'SlotTransitions_baseBattleAbilities__enterLeftSwap_ca',
                        baseBattleAbilities__exitLeftSwap: 'SlotTransitions_baseBattleAbilities__exitLeftSwap_c0',
                        baseBattleAbilities__enterFitting: 'SlotTransitions_baseBattleAbilities__enterFitting_de',
                        baseBattleAbilities__exitFittingRemove:
                            'SlotTransitions_baseBattleAbilities__exitFittingRemove_bc',
                        baseBattleAbilities__exitActiveFitting:
                            'SlotTransitions_baseBattleAbilities__exitActiveFitting_3d',
                        baseBattleAbilities__exitFade: 'SlotTransitions_baseBattleAbilities__exitFade_21',
                        baseBattleAbilities__enterFade: 'SlotTransitions_baseBattleAbilities__enterFade_15',
                        baseBattleBoosters__enterFitting: 'SlotTransitions_baseBattleBoosters__enterFitting_56',
                        baseBattleBoosters__exitFittingRemove:
                            'SlotTransitions_baseBattleBoosters__exitFittingRemove_e5',
                        baseBattleBoosters__exitActiveFitting:
                            'SlotTransitions_baseBattleBoosters__exitActiveFitting_f1',
                    },
                    Jn = { enter: Qn.base__enter, exit: Qn.base__enter },
                    ea = a().memo(
                        ({
                            children: e,
                            slotIndex: u,
                            uniqueKey: t,
                            slotType: i,
                            isEmpty: s = !1,
                            imageSource: r,
                            itemInstalledSetupIdx: l,
                        }) => {
                            const o = iu('model.lastSlotAction'),
                                _ = o.leftID,
                                c = o.rightID,
                                d = o.leftIntCD,
                                E = o.rightIntCD,
                                m = o.actionType,
                                A = o.intCD,
                                F = (0, n.useState)(!0),
                                D = F[0],
                                b = F[1],
                                p = (0, n.useState)(!0),
                                g = p[0],
                                C = p[1],
                                B = (0, n.useState)(r),
                                h = B[0],
                                f = B[1],
                                S = (0, n.useState)(t),
                                v = S[0],
                                w = S[1],
                                y = (0, n.useState)(l),
                                x = y[0],
                                T = y[1],
                                k = (0, n.useRef)(),
                                I = (0, n.useRef)(),
                                R = (A === t || A === v) && x !== l && [Mn, Rn, On].includes(m),
                                O = -1 === d || -1 === E,
                                M = i ? `base${i[0].toUpperCase() + i.slice(1)}` : 'base',
                                L = Pn[m] || 0;
                            (0, n.useEffect)(
                                () => () => {
                                    k.current && clearTimeout(k.current), I.current && clearTimeout(I.current);
                                },
                                [],
                            ),
                                (0, n.useEffect)(() => {
                                    s || f(r);
                                }, [s, r]);
                            const N = (0, n.useCallback)(
                                    (e) => {
                                        const t = Object.assign({}, Jn);
                                        switch (m) {
                                            case In: {
                                                const e = _ === u ? Nn.RIGHT : Nn.LEFT,
                                                    n = c - _ != 1 ? Nn.SWAP : '';
                                                (t.enterDone = Qn[`${M}__enter${e}${n}`]),
                                                    (t.exit = Qn[`${M}__exit${e}${n}`]),
                                                    O &&
                                                        (s
                                                            ? (t.enterDone = Qn[`${M}__enter${Nn.FADE}`])
                                                            : (t.exit = Qn[`${M}__exit${Nn.FADE}`]));
                                                break;
                                            }
                                            case Mn:
                                                (t.enterDone = Qn[`${M}__enter${Nn.DESTROY}`]),
                                                    (t.exit = Qn[`${M}__exit${Nn.DESTROY}`]),
                                                    (k.current = setTimeout(() => b(!0), 900)),
                                                    C(!0);
                                                break;
                                            case On:
                                            case Rn:
                                                (t.enter = Qn[`${M}__enter${Nn.DEMOUNT}${Nn.FADE}`]),
                                                    (t.exit = Qn[`${M}__exit${Nn.DEMOUNT}`]),
                                                    (k.current = setTimeout(() => b(!0), 900));
                                                break;
                                            case Tn:
                                            case kn:
                                                if (i !== Mu) {
                                                    const e = m === Tn ? Nn.FITTING : Nn.FITTING_REMOVE;
                                                    (t.enter = Qn[`${M}__enter${e}`]),
                                                        (t.exit = Qn[`${M}__exit${e}`]),
                                                        (t.exitActive = Qn[`${M}__exitActive${Nn.FITTING}`]);
                                                } else
                                                    (t.enterDone = Qn[`${M}__enter${Nn.FADE}`]),
                                                        (t.exit = Qn[`${M}__exit${Nn.FADE}`]);
                                                break;
                                            default:
                                                return e;
                                        }
                                        return a().cloneElement(e, { classNames: t, timeout: L });
                                    },
                                    [m, i, M, L, _, u, c, s, O],
                                ),
                                P = (0, n.useCallback)(
                                    (e) => {
                                        I.current = setTimeout(() => {
                                            (e.className = ''), e.classList.add(Qn.base), w(t), T(l);
                                        }, L);
                                    },
                                    [L, t, l],
                                ),
                                H = (0, n.useCallback)(() => {
                                    b(!1), C(!1);
                                }, []);
                            return a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(
                                    fu.Z,
                                    { component: null, childFactory: N },
                                    a().createElement(
                                        Su.Z,
                                        {
                                            key: t,
                                            timeout: L,
                                            classNames: Jn,
                                            onEntered: P,
                                            onExiting: H,
                                            unmountOnExit: !0,
                                        },
                                        a().createElement('div', { className: Qn.base }, e),
                                    ),
                                ),
                                R &&
                                    a().createElement(
                                        a().Fragment,
                                        null,
                                        a().createElement(Kn, { in: D, actionType: m }),
                                        a().createElement(Zn, { in: g, maskImage: h }),
                                    ),
                            );
                        },
                    ),
                    ua = a().memo(
                        ({
                            intCD: e,
                            id: u,
                            itemInstalledSetupIdx: t,
                            isMountedMoreThanOne: i,
                            isInstalled: s,
                            isDisabled: r,
                            imageSource: l,
                            isEmpty: o,
                            slotIndex: _,
                            slotType: c,
                            isBootCamp: d,
                            contextMenuDisabled: E,
                            isSetupSwitching: m,
                            children: A,
                        }) => {
                            const F = (0, n.useMemo)(
                                () => ({
                                    intCD: e,
                                    slotType: c,
                                    installedSlotId: u,
                                    isMounted: s,
                                    fieldType: 1,
                                    itemInstalledSetupIdx: t,
                                    itemInstalledSetupSlotIdx: u,
                                    isMountedMoreThanOne: i,
                                }),
                                [e, c, u, t, s, i],
                            );
                            return a().createElement(
                                ea,
                                {
                                    uniqueKey: e,
                                    isEmpty: o,
                                    slotIndex: _,
                                    slotType: c,
                                    imageSource: l,
                                    itemInstalledSetupIdx: t,
                                },
                                a().createElement(
                                    xn,
                                    { isEnabled: !(m || E || r || o || d), args: F },
                                    a().createElement('div', null, A),
                                ),
                            );
                        },
                    ),
                    ta = ({
                        id: e,
                        intCD: u,
                        slotType: t,
                        imageSource: i,
                        isInstalled: s,
                        itemInstalledSetupIdx: r,
                        isMountedMoreThanOne: l,
                        overlayType: o,
                        keyName: _,
                        slotIndex: c,
                        level: d,
                        isBootCamp: E,
                        isSelected: m,
                        isSetupSwitching: A,
                        isSectionSelected: F,
                        withAttention: D,
                        onActiveSlotChanged: b,
                        onSlotSelected: p,
                        onActiveSlotRefChanged: g,
                        onSlotClear: C,
                        panelType: B,
                        isDisabled: h = !1,
                        isBorderActive: f,
                        isIncompatible: S = !1,
                        grabberId: w,
                        containerRef: y,
                        activeDragId: x,
                        handleGrabberAction: T,
                        forceLeftUpdate: k,
                        potentialDropId: I,
                        blockOnGrabIds: R,
                        categoryImgSource: O,
                        contextMenuDisabled: M,
                    }) => {
                        const L = B === Tu.Setup,
                            N = !Ou(B),
                            P = B === Tu.Compare,
                            H = L && F && N,
                            G = (0, n.useRef)(!1),
                            $ = (0, n.useRef)(null),
                            W = -1 === u;
                        (0, n.useEffect)(() => {
                            if (!G.current && F && m)
                                return v(() => {
                                    b && b($, t, e), (G.current = !0);
                                });
                            G.current = !0;
                        }, [e, F, m, b, t]),
                            (0, n.useEffect)(() => {
                                m && g($);
                            }, [m, g]);
                        const z = ((e) => {
                                const u = (0, n.useRef)(-1),
                                    t = (0, n.useCallback)(
                                        (t) => {
                                            if (-1 === u.current) {
                                                const n = e(t);
                                                n &&
                                                    (u.current = window.setTimeout(() => {
                                                        u.current = -1;
                                                    }, n));
                                            }
                                        },
                                        [e],
                                    );
                                return (0, n.useEffect)(() => () => clearTimeout(u.current), []), t;
                            })((0, n.useCallback)(() => (!m && N && !A && p(t, e), 500), [e, N, m, A, p, t])),
                            U = (0, n.useCallback)(() => {
                                h || z('');
                            }, [z, h]),
                            X = (0, n.useCallback)(() => {
                                !m && !x && !h && ru.playHighlight();
                            }, [m, x, h]);
                        (0, n.useEffect)(() => {
                            I && ru.playHighlight();
                        }, [I]);
                        const j = (0, n.useCallback)(() => {
                                null == C || C(e, t);
                            }, [e, C, t]),
                            V = L && !s,
                            K = Boolean(w && I === w),
                            q = w && (H || P),
                            Y = `${t}-slot-${e}`,
                            Z = O && O.length > 0,
                            Q = Z ? { backgroundImage: `url(${O})` } : {},
                            J = {
                                id: w,
                                containerRef: y,
                                isEnabled: !W,
                                onClick: U,
                                isUpdateAvailable: Boolean(x),
                                handleAction: T,
                                forceCenterX: k,
                                blockOnGrabIds: R,
                            },
                            ee = {
                                isEmpty: W,
                                intCD: u,
                                slotType: t,
                                slotIndex: c,
                                imageSource: i,
                                isBootCamp: E,
                                isDisabled: h,
                                isInstalled: s,
                                id: e,
                                itemInstalledSetupIdx: r,
                                isMountedMoreThanOne: l,
                                contextMenuDisabled: M,
                                isSetupSwitching: A,
                            };
                        return a().createElement(
                            'div',
                            { className: pn, onMouseEnter: X, id: Y },
                            (F || P) &&
                                !s &&
                                a().createElement(
                                    'div',
                                    { className: Cn },
                                    a().createElement(bn, { id: `close-${Y}`, show: !x, onClick: j }),
                                ),
                            a().createElement(
                                dn,
                                { slotType: t, slotId: e, isEnabled: !x && Ru(B) },
                                a().createElement(
                                    'div',
                                    { ref: $ },
                                    a().createElement(
                                        Wt,
                                        {
                                            activeDragId: x,
                                            slotType: t,
                                            isSelected: m,
                                            isBorderActive: Boolean(f),
                                            panelType: B,
                                            isDisabled: h,
                                            isPotentialDrop: K,
                                            onClick: q ? void 0 : U,
                                        },
                                        N &&
                                            a().createElement(
                                                'div',
                                                { className: gn },
                                                a().createElement(cn, { text: _, show: Boolean(F), panelType: B }),
                                            ),
                                        a().createElement(
                                            Gt,
                                            { when: Boolean(q), wrapper: sn, withProps: J },
                                            a().createElement(
                                                Gt,
                                                { when: N, wrapper: ua, withProps: ee },
                                                a().createElement(Zt, {
                                                    imageSource: i,
                                                    isIncompatible: S,
                                                    overlayType: o,
                                                    level: d,
                                                    isTemporary: V,
                                                    withAttention: D,
                                                }),
                                            ),
                                        ),
                                        Z &&
                                            a().createElement(
                                                a().Fragment,
                                                null,
                                                a().createElement('span', { className: hn }),
                                                a().createElement('span', { className: fn, style: Q }),
                                            ),
                                        h && a().createElement('div', { className: Bn }),
                                    ),
                                ),
                            ),
                        );
                    },
                    na = 'BattleAbilitySlot_base_74',
                    aa = 'BattleAbilitySlot_rank_01',
                    ia = ['rank'];
                const sa = (0, n.memo)((e) => {
                        let u = e.rank,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, ia);
                        const i = (0, n.useMemo)(() => ({ backgroundImage: `url(${u})` }), [u]),
                            s = h()(na);
                        return a().createElement(
                            'div',
                            { className: s },
                            a().createElement(ta, t),
                            u && a().createElement('div', { className: aa, style: i }),
                        );
                    }),
                    ra = {
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
                let la, oa;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(la || (la = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
                    })(oa || (oa = {}));
                const _a = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: i,
                    disabled: s,
                    mixClass: r,
                    soundHover: l,
                    soundClick: o,
                    onMouseEnter: _,
                    onMouseMove: c,
                    onMouseDown: d,
                    onMouseUp: E,
                    onMouseLeave: m,
                    onClick: A,
                }) => {
                    const F = (0, n.useRef)(null),
                        D = (0, n.useState)(t),
                        b = D[0],
                        p = D[1],
                        g = (0, n.useState)(!1),
                        C = g[0],
                        B = g[1],
                        f = (0, n.useState)(!1),
                        S = f[0],
                        v = f[1],
                        w = (0, n.useCallback)(() => {
                            s || (F.current && (F.current.focus(), p(!0)));
                        }, [s]),
                        y = (0, n.useCallback)(
                            (e) => {
                                b && null !== F.current && !F.current.contains(e.target) && p(!1);
                            },
                            [b],
                        ),
                        x = (0, n.useCallback)(
                            (e) => {
                                s || (A && A(e));
                            },
                            [s, A],
                        ),
                        T = (0, n.useCallback)(
                            (e) => {
                                s || (null !== l && su(l), _ && _(e), v(!0));
                            },
                            [s, l, _],
                        ),
                        k = (0, n.useCallback)(
                            (e) => {
                                c && c(e);
                            },
                            [c],
                        ),
                        I = (0, n.useCallback)(
                            (e) => {
                                s || (E && E(e), B(!1));
                            },
                            [s, E],
                        ),
                        O = (0, n.useCallback)(
                            (e) => {
                                s || (null !== o && su(o), d && d(e), t && w(), B(!0));
                            },
                            [s, o, d, w, t],
                        ),
                        M = (0, n.useCallback)(
                            (e) => {
                                s || (m && m(e), B(!1));
                            },
                            [s, m],
                        ),
                        L = h()(
                            ra.base,
                            ra[`base__${i}`],
                            {
                                [ra.base__disabled]: s,
                                [ra[`base__${u}`]]: u,
                                [ra.base__focus]: b,
                                [ra.base__highlightActive]: C,
                                [ra.base__firstHover]: S,
                            },
                            r,
                        ),
                        N = h()(ra.state, ra.state__default);
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
                            p(t);
                        }, [t]),
                        a().createElement(
                            'div',
                            {
                                ref: F,
                                className: L,
                                onMouseEnter: T,
                                onMouseMove: k,
                                onMouseUp: I,
                                onMouseDown: O,
                                onMouseLeave: M,
                                onClick: x,
                            },
                            i !== la.ghost &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement('div', { className: ra.back }),
                                    a().createElement('span', { className: ra.texture }),
                                ),
                            a().createElement(
                                'span',
                                { className: N },
                                a().createElement('span', { className: ra.stateDisabled }),
                                a().createElement('span', { className: ra.stateHighlightHover }),
                                a().createElement('span', { className: ra.stateHighlightActive }),
                            ),
                            a().createElement(
                                'span',
                                { className: ra.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                _a.defaultProps = { type: la.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const ca = (0, n.memo)(_a),
                    da = {
                        base: 'Specialization_base_ec',
                        base__tiny: 'Specialization_base__tiny_fe',
                        base__small: 'Specialization_base__small_a3',
                        base__medium: 'Specialization_base__medium_85',
                        base__large: 'Specialization_base__large_07',
                        base__huge: 'Specialization_base__huge_33',
                        base__setup: 'Specialization_base__setup_5e',
                        base__correct: 'Specialization_base__correct_4c',
                        glow: 'Specialization_glow_f0',
                        icon: 'Specialization_icon_3a',
                        icon__tiny: 'Specialization_icon__tiny_05',
                        icon__small: 'Specialization_icon__small_cf',
                        icon__medium: 'Specialization_icon__medium_ed',
                        icon__large: 'Specialization_icon__large_98',
                        icon__huge: 'Specialization_icon__huge_f7',
                        specializationWrapper: 'Specialization_specializationWrapper_bf',
                        specializationButton: 'Specialization_specializationButton_45',
                    },
                    Ea = ({
                        name: e,
                        isCorrect: u,
                        isSpecializationActive: t = !0,
                        isDynamic: i,
                        mediaSize: s,
                        isClickable: r,
                        onSpecializationClick: l,
                        index: o,
                    }) => {
                        const _ = s !== Uu.None,
                            c = (0, n.useCallback)(() => {
                                r && t && l && l(o);
                            }, [o, r, t, l]),
                            d = (0, n.useMemo)(() => {
                                let t = '';
                                _ && (t = (s === Uu.Large || s === Uu.Huge ? Uu.Large : Uu.Medium) + '_');
                                const n = `${t}${e}_${u ? 'on' : 'off'}`,
                                    a = R.images.gui.maps.icons.specialization.$dyn(n);
                                return a && { backgroundImage: `url(${a})` };
                            }, [e, u, s, _]),
                            E = (0, n.useMemo)(
                                () => ({ spec: e, isDyn: i, isClickable: r, tooltip: 'hangarSlotSpec' }),
                                [e, i, r],
                            );
                        if (!d) return null;
                        const m = h()(
                                `specialization-${e}`,
                                da.base,
                                _ && da[`base__${s}`],
                                t && da.base__setup,
                                u && da.base__correct,
                            ),
                            A = h()(da.icon, _ && da[`icon__${s}`]),
                            F = _ ? '' : da.specializationWrapper,
                            D = a().createElement(
                                'div',
                                { key: e, className: m },
                                a().createElement('div', { className: da.glow }),
                                a().createElement('div', { className: A, style: d }),
                            );
                        return a().createElement(
                            Ge,
                            { args: E },
                            r && t
                                ? a().createElement(
                                      ca,
                                      { size: oa.small, type: la.ghost, mixClass: da.specializationButton, onClick: c },
                                      D,
                                  )
                                : a().createElement('div', { className: F }, D),
                        );
                    },
                    ma = 'Specializations_base_ab';
                function Aa() {
                    return (
                        (Aa =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Aa.apply(this, arguments)
                    );
                }
                const Fa = ({
                        specializations: e,
                        isSpecializationActive: u = !0,
                        isDynamic: t,
                        mediaSize: n = Uu.None,
                        activeSpecsMask: i,
                        onSpecializationClick: s,
                    }) =>
                        e.length
                            ? a().createElement(
                                  'div',
                                  { className: ma, key: i },
                                  Z(e, (e, i) =>
                                      a().createElement(
                                          Ea,
                                          Aa({ index: i, key: e.name }, e, {
                                              isSpecializationActive: u,
                                              isDynamic: t,
                                              mediaSize: n,
                                              onSpecializationClick: s,
                                          }),
                                      ),
                                  ),
                              )
                            : null,
                    Da = 'OptDeviceSlot_base_14',
                    ba = 'OptDeviceSlot_specializations_c3',
                    pa = ['specializations', 'activeSpecsMask', 'isChangeSetupIndex', 'isDynamic'];
                const ga = (e) => {
                        let u = e.specializations,
                            t = e.activeSpecsMask,
                            n = e.isChangeSetupIndex,
                            i = e.isDynamic,
                            s = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, pa);
                        const r = D('model.ammunitionPanel', F.None).onSpecializationSelect,
                            l = s.panelType === Tu.Setup || s.panelType === Tu.Compare,
                            o = !Ou(s.panelType);
                        return a().createElement(
                            'div',
                            { className: h()(Da, u.length && !i && !n && 'specializationsSlot') },
                            o &&
                                a().createElement(
                                    'div',
                                    { className: ba },
                                    a().createElement(Fa, {
                                        specializations: u,
                                        isDynamic: i,
                                        activeSpecsMask: t,
                                        isSpecializationActive: l,
                                        onSpecializationClick: (e) => {
                                            r({ slotId: s.id, specializationIndex: e });
                                        },
                                    }),
                                ),
                            a().createElement(ta, s),
                        );
                    },
                    Ca = {
                        base: 'ToggleCamouflageSlot_base_17',
                        base__grabbing: 'ToggleCamouflageSlot_base__grabbing_79',
                        base__hangar: 'ToggleCamouflageSlot_base__hangar_e7',
                        base__setup: 'ToggleCamouflageSlot_base__setup_44',
                        base__compare: 'ToggleCamouflageSlot_base__compare_0d',
                        base__selected: 'ToggleCamouflageSlot_base__selected_0c',
                        base__dragIn: 'ToggleCamouflageSlot_base__dragIn_68',
                        base__dragInActive: 'ToggleCamouflageSlot_base__dragInActive_b1',
                        base__toggle: 'ToggleCamouflageSlot_base__toggle_fc',
                        base__disabled: 'ToggleCamouflageSlot_base__disabled_1e',
                        image: 'ToggleCamouflageSlot_image_ee',
                        glow: 'ToggleCamouflageSlot_glow_45',
                        toggle: 'ToggleCamouflageSlot_toggle_c2',
                    },
                    Ba = ({ id: e, isSelected: u, isLocked: t, onSlotSelected: i, panelType: s }) => {
                        const r = Hu,
                            l = (0, n.useCallback)(() => {
                                i(r, e);
                            }, [e, i, r]),
                            o = h()(Ca.base, Ca[`base__${s}`], t && Ca.base__disabled, u && Ca.base__toggle),
                            _ = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: 'url(R.images.gui.maps.icons.quests.bonuses.small.camouflage)',
                                }),
                                [],
                            ),
                            c = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url(R.images.gui.maps.icons.tanksetup.shells.icon_selected_${u ? 'on' : 'off'})`,
                                }),
                                [u],
                            ),
                            d = `toggle-camouflage-slot-${e}`;
                        return a().createElement(
                            dn,
                            { slotType: r, slotId: e },
                            a().createElement(
                                'div',
                                { id: d, className: o, onClick: l, onMouseEnter: ru.playHighlight },
                                u && a().createElement('div', { className: Ca.glow }),
                                a().createElement('div', { className: Ca.image, style: _ }),
                                a().createElement('div', { className: Ca.toggle, style: c }),
                            ),
                        );
                    },
                    ha = ['value', 'sectionType'];
                function fa() {
                    return (
                        (fa =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        fa.apply(this, arguments)
                    );
                }
                const Sa = (e) => {
                        let u = e.value,
                            t = e.sectionType,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, ha);
                        switch (t) {
                            case 'optDevices': {
                                const e = u;
                                return a().createElement(
                                    ga,
                                    fa({}, e, n, {
                                        specializations: e.specializations.specializations,
                                        isDynamic: e.specializations.isDynamic,
                                    }),
                                );
                            }
                            case Hu: {
                                const e = u;
                                return a().createElement(Ba, fa({}, n, e));
                            }
                            case Nu: {
                                const e = u;
                                return a().createElement(sa, fa({}, n, e));
                            }
                            default:
                                return a().createElement(ta, fa({}, n, u));
                        }
                    },
                    va = 'Slots_base_27',
                    wa = ({
                        slots: e,
                        sectionType: u,
                        panelType: t,
                        isBorderActive: i,
                        onActiveSlotChanged: s,
                        isDisabled: r,
                        isBootCamp: l,
                        selectedSection: o,
                        selectedSlot: _,
                        syncInitiator: c,
                        blockOnGrabIds: d,
                        isChangeSetupIndex: E,
                        setIsExitBlocked: m,
                    }) => {
                        const A = (0, n.useRef)(null),
                            b = (0, n.useRef)(null),
                            p = D('model.ammunitionPanel', F.None),
                            g = p.onSectionSelect,
                            C = p.onDragDropSwap,
                            B = p.onSlotClear,
                            f = (0, n.useCallback)(
                                (e, t) => {
                                    C({
                                        sectionType: u,
                                        dragId: Number(e[e.length - 1]),
                                        dropId: Number(t[t.length - 1]),
                                    });
                                },
                                [C, u],
                            ),
                            S = o === u,
                            v = S ? _ : -1,
                            w = `${u}-${e.length}slots`,
                            y = ut({
                                baseId: w,
                                slotsLength: e.length,
                                handleSwap: f,
                                setIsExitBlocked: m,
                                syncInitiator: c,
                            }),
                            x = y.handleGrabberAction,
                            T = y.dragState,
                            k = y.getForceCenterX;
                        (0, n.useEffect)(() => {
                            S && -1 !== v && A.current && s(A, o, v);
                        }, [s, S, o, v]);
                        const I = (e, u) => {
                                if ((r || ru.playClick(), 'number' != typeof u))
                                    return console.warn('selectedSlot is not a number');
                                g({ selectedSlot: u, selectedSection: e });
                            },
                            R = (e) => {
                                A.current = e ? e.current : null;
                            },
                            O = (e, u) => {
                                B({ slotId: e, sectionType: u });
                            };
                        return a().createElement(
                            'div',
                            { id: w, ref: b, className: h()(va, u) },
                            J(e, (o, _) => {
                                const c = u === Nu,
                                    m = !c && e.length > 1 ? `${w}-${_}` : '';
                                return a().createElement(
                                    n.Fragment,
                                    { key: `${o.id}-${_}` },
                                    _ > 0 && a().createElement(Ht, null),
                                    a().createElement(Sa, {
                                        value: o,
                                        sectionType: u,
                                        panelType: t,
                                        isSelected: v === o.id,
                                        isSectionSelected: S,
                                        isDisabled: r,
                                        isBootCamp: l,
                                        isBorderActive: i,
                                        contextMenuDisabled: c,
                                        slotType: u,
                                        onActiveSlotChanged: s,
                                        onSlotSelected: I,
                                        onActiveSlotRefChanged: R,
                                        onSlotClear: O,
                                        slotIndex: _,
                                        grabberId: m,
                                        containerRef: b,
                                        forceLeftUpdate: k(m),
                                        activeDragId: T.activeDragId,
                                        handleGrabberAction: x,
                                        potentialDropId: T.potentialDropId,
                                        blockOnGrabIds: d,
                                        isSetupSwitching: E,
                                        isChangeSetupIndex: E,
                                    }),
                                );
                            }),
                        );
                    },
                    ya = ({
                        type: e,
                        slots: u,
                        newItemsCount: t,
                        isDisabled: i,
                        panelType: s,
                        onActiveSlotChanged: r,
                        isBorderActive: l,
                        isBootCamp: o = !0,
                        selectedSection: _,
                        selectedSlot: c,
                        syncInitiator: d,
                        sectionsIds: E,
                        onBootcampPanelAppear: m,
                        vehicle: A,
                        vehicleType: F,
                        isSetupSwitching: b,
                        isChangeSetupIndex: p,
                        classMix: g,
                        setIsExitBlocked: C,
                    }) => {
                        const B = (0, n.useRef)(null),
                            f = (0, n.useState)(o),
                            w = f[0],
                            y = f[1],
                            x = (0, n.useMemo)(
                                () =>
                                    s === Tu.Setup
                                        ? e === Lu
                                            ? 'AmmunitionSetupHangarEquipmentSlots'
                                            : 'AmmunitionSetupOptionalDeviceSlots'
                                        : e === Lu
                                          ? 'HangarEquipmentSlots'
                                          : 'HangarOptionalDeviceSlots',
                                [s, e],
                            ),
                            T = ((e, u) => {
                                const t = D('tutorialModel.effects.items').filter((t) => {
                                    if (!t) return !1;
                                    const n = t.value,
                                        a = window.__featureId.toString();
                                    return n.componentId === e && n.type === u && n.viewId === a;
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
                                            u === st && window.tutorialApi && window.tutorialApi.updateComponents();
                                    },
                                };
                            })(x, st);
                        (0, n.useEffect)(
                            () => (
                                null !== T && y(!T.effect.visible),
                                v(() => {
                                    null !== T && T.completeEffect();
                                })
                            ),
                            [T, e],
                        );
                        const k = S();
                        (0, n.useEffect)(() => {
                            k && (k.freeze(), k.resize());
                        }, [u.length, k, x, w]);
                        const I = ((e, u) => {
                            const t = D('tutorialModel.triggers.items').filter((t) => {
                                if (!t) return !1;
                                const n = t.value,
                                    a = n.triggers.filter((e) => e.value === u);
                                return n.componentId === e && a.length > 0;
                            });
                            return 0 === t.length
                                ? null
                                : window.tutorialModel.foundComponents.items.some((u) => u.value.componentId === e)
                                  ? {
                                        trigger: t[0].value,
                                        runTrigger: (t) => {
                                            window.tutorialModel.onTriggerActivated({
                                                componentId: e,
                                                triggerType: u,
                                                state: t,
                                            });
                                        },
                                    }
                                  : null;
                        })('AmmunitionPanelBattleAbilities', lt);
                        (0, n.useEffect)(() => {
                            null == I || I.runTrigger(!0);
                        }, [I]);
                        const O = _ === e,
                            M = et(e, E),
                            L = M.selfId,
                            N = M.blockOnGrabIds;
                        (0, n.useEffect)(() => {
                            s === Tu.Hangar && y(o);
                        }, [s, o]),
                            (0, n.useEffect)(() => {
                                if (o && !w && m)
                                    return v(() => {
                                        m(), k && k.resize();
                                    });
                            }, [w, o, m, k]);
                        const P =
                                d >= 0 &&
                                (function (e, u) {
                                    if (Array.isArray(e)) return e.some(u);
                                    for (let t = 0; t < e.length; t++) if (u(Y(e, t), t, e)) return !0;
                                    return !1;
                                })(u, (e) => e.intCD > 0),
                            H = h()(
                                bt,
                                g,
                                w && pt,
                                O && 'sectionSelected',
                                u.length > 1 && 'multiSlot',
                                P && 'existFilledSlots',
                            ),
                            G = ((A && A.length > 0) || (F && F.length > 0)) && s !== Tu.Battle && s !== Tu.Respawn,
                            $ = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: F
                                        ? `url(${R.images.gui.maps.icons.vehicleTypes.extraSmall.$dyn(F)})`
                                        : '',
                                }),
                                [F],
                            ),
                            W = (0, n.useMemo)(
                                () => ({ icon: a().createElement('span', { className: ft, style: $ }), vehicle: A }),
                                [$, A],
                            ),
                            z = u.length > 0 && s !== Tu.Compare && s !== Tu.Battle && s !== Tu.Respawn && u.length > 0,
                            U = R.strings.tank_setup.section.$dyn(e);
                        if ('string' != typeof U)
                            throw new Error(`No top label text for section type ${e} or it's not a string`);
                        return a().createElement(
                            'div',
                            { id: b ? Dt : L, ref: B, className: H },
                            G &&
                                a().createElement(
                                    Nt,
                                    { className: Bt },
                                    a().createElement(ge, {
                                        classMix: ht,
                                        text: R.strings.tank_setup.categories.reserves.config(),
                                        binding: W,
                                    }),
                                ),
                            z &&
                                a().createElement(
                                    'div',
                                    { className: gt },
                                    a().createElement(Ft, { text: U, parentRef: B, show: !O, panelType: s }),
                                ),
                            a().createElement(wa, {
                                slots: u,
                                sectionType: e,
                                panelType: s,
                                isBorderActive: l,
                                onActiveSlotChanged: r,
                                isDisabled: i,
                                isBootCamp: o,
                                syncInitiator: d,
                                selectedSection: _,
                                selectedSlot: c,
                                blockOnGrabIds: N,
                                isChangeSetupIndex: p,
                                setIsExitBlocked: C,
                            }),
                            Boolean(t) &&
                                a().createElement(
                                    'div',
                                    { className: Ct },
                                    a().createElement(it, { value: t, size: 'small', fadeInAnimation: !0 }),
                                ),
                        );
                    },
                    xa = 'Count_base_e4',
                    Ta = 'Count_base__zero_64',
                    ka = ({ count: e }) => {
                        const u = h()(xa, !e && Ta);
                        return a().createElement('div', { className: u }, e);
                    },
                    Ia = 'ShellsSlot_base_05',
                    Ra = 'ShellsSlot_shell_ab',
                    Oa = 'ShellsSlot_shell__grabbing_98',
                    Ma = 'ShellsSlot_shell__active_7e',
                    La = 'ShellsSlot_shell__potential_30',
                    Na = 'ShellsSlot_label_da',
                    Pa = 'ShellsSlot_image_3f',
                    Ha = ({
                        id: e,
                        itemInstalledSetupIdx: u,
                        isMountedMoreThanOne: t,
                        imageSource: i,
                        count: s,
                        isSelected: r,
                        keyName: l,
                        panelType: o,
                        intCD: _,
                        slotIndex: c,
                        grabberId: d,
                        isSetupSwitching: E,
                        containerRef: m,
                        activeDragId: A,
                        handleGrabberAction: F,
                        forceLeftUpdate: D,
                        potentialDropId: b,
                        blockOnGrabIds: p,
                        shellState: g,
                        isDisabled: C,
                    }) => {
                        const B = !Ou(o),
                            f = (0, n.useMemo)(() => ({ backgroundImage: `url(${i})` }), [i]),
                            S = d && d === b,
                            v = d && d === A,
                            w = (0, n.useMemo)(() => {
                                const n = { slotType: Mu, slotId: e, fieldType: 1, intCD: _ };
                                return [
                                    n,
                                    Object.assign({}, n, {
                                        installedSlotId: e,
                                        itemInstalledSetupIdx: u,
                                        itemInstalledSetupSlotIdx: e,
                                        isMountedMoreThanOne: t,
                                    }),
                                ];
                            }, [_, e, u, t]),
                            y = w[0],
                            x = w[1],
                            T = h()(Ra, !A && B && !C && Ma, v && Oa, !v && S && La),
                            k = (0, n.useMemo)(
                                () => ({
                                    id: d,
                                    containerRef: m,
                                    isEnabled: Boolean(d) && r,
                                    isUpdateAvailable: Boolean(A),
                                    handleAction: F,
                                    forceCenterX: D,
                                    blockOnGrabIds: p,
                                }),
                                [A, p, m, D, d, F, r],
                            ),
                            I = (0, n.useMemo)(
                                () => ({ slotIndex: c, uniqueKey: _, slotType: Mu, imageSource: null }),
                                [_, c],
                            );
                        return a().createElement(
                            xn,
                            { isEnabled: B && !E && !C, args: x },
                            a().createElement(
                                Ge,
                                { args: y, isEnabled: !A && Ru(o) },
                                a().createElement(
                                    'div',
                                    { id: `shell-slot-${c}`, className: Ia },
                                    l &&
                                        a().createElement(
                                            'div',
                                            { className: Na },
                                            a().createElement(cn, {
                                                text: l,
                                                show: r || o === Tu.Battle || o === Tu.Respawn,
                                                shellState: g,
                                                panelType: o,
                                            }),
                                        ),
                                    a().createElement(
                                        'div',
                                        { className: T },
                                        a().createElement(
                                            Gt,
                                            { when: B, wrapper: sn, withProps: k },
                                            a().createElement(
                                                Gt,
                                                { when: B, wrapper: ea, withProps: I },
                                                a().createElement('div', { className: Pa, style: f }),
                                                a().createElement(ka, { count: s }),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    },
                    Ga = {
                        base: 'ToggleSlot_base_93',
                        slot: 'ToggleSlot_slot_cd',
                        slot__grabbing: 'ToggleSlot_slot__grabbing_df',
                        image: 'ToggleSlot_image_e0',
                        slot__active: 'ToggleSlot_slot__active_15',
                        glow: 'ToggleSlot_glow_48',
                        toggle: 'ToggleSlot_toggle_73',
                    },
                    $a = ({ id: e, isSelected: u, imageSource: t, onSlotSelected: i }) => {
                        const s = (0, n.useCallback)(() => {
                                !u && i(e);
                            }, [e, u, i]),
                            r = h()(Ga.slot, !u && Ga.slot__active, Ga.slot__compare),
                            l = (0, n.useMemo)(() => ({ backgroundImage: `url(${t})` }), [t]),
                            o = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url(R.images.gui.maps.icons.tanksetup.shells.icon_selected_${u ? 'on' : 'off'})`,
                                }),
                                [u],
                            );
                        return a().createElement(
                            dn,
                            { slotType: Pu, slotId: e },
                            a().createElement(
                                'div',
                                { className: Ga.base },
                                a().createElement(
                                    'div',
                                    { className: r, onClick: s, id: `shell-slot-${e}` },
                                    u && a().createElement('div', { className: Ga.glow }),
                                    a().createElement('div', { className: Ga.image, style: l }),
                                    a().createElement('div', { className: Ga.toggle, style: o }),
                                ),
                            ),
                        );
                    },
                    Wa = 'Shells_base_f9',
                    za = 'Shells_shell_3f',
                    Ua = 'Shells_shell__compressed_2e';
                function Xa() {
                    return (
                        (Xa =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Xa.apply(this, arguments)
                    );
                }
                const ja = ({
                        shells: e,
                        panelType: u,
                        onSelected: t,
                        isCompare: i,
                        isSelected: s,
                        syncInitiator: r,
                        blockOnGrabIds: l,
                        isDisabled: o,
                        isSetupSwitching: _,
                        setIsExitBlocked: c,
                    }) => {
                        const d = D('model.ammunitionPanel', F.None),
                            E = d.onSectionSelect,
                            m = d.onDragDropSwap,
                            A = (0, n.useRef)(!1),
                            b = (0, n.useRef)(null),
                            p = i ? Pu : Mu,
                            g = `${p}-${e.length}shells`,
                            C = (0, n.useCallback)(
                                (e) => {
                                    E({ selectedSlot: e, selectedSection: p }), ru.playClick();
                                },
                                [E, p],
                            ),
                            B = (0, n.useCallback)(() => {
                                s || i || o || _ || C(0);
                            }, [s, i, _, o, C]),
                            f = (0, n.useCallback)(
                                (e, u) => {
                                    m({
                                        sectionType: p,
                                        dragId: Number(e[e.length - 1]),
                                        dropId: Number(u[u.length - 1]),
                                    });
                                },
                                [m, p],
                            ),
                            S = ut({
                                baseId: g,
                                slotsLength: e.length,
                                handleSwap: f,
                                setIsExitBlocked: c,
                                syncInitiator: r,
                            }),
                            w = S.handleGrabberAction,
                            y = S.dragState,
                            x = S.getForceCenterX;
                        return (
                            (0, n.useEffect)(
                                () =>
                                    v(() => {
                                        A.current = !0;
                                    }),
                                [],
                            ),
                            (0, n.useEffect)(() => {
                                if (s && u === Tu.Setup) {
                                    if (!A.current)
                                        return v(() => {
                                            t();
                                        });
                                    t();
                                }
                            }, [s, u, t]),
                            a().createElement(
                                'div',
                                {
                                    id: g,
                                    ref: b,
                                    className: Wa,
                                    onClick: B,
                                    onMouseEnter: () => {
                                        o || ru.playHighlight();
                                    },
                                },
                                J(e, (t, n) => {
                                    if (ku(t)) return null;
                                    const r = !i && e.length > 1 ? `${g}-${t.id}` : '';
                                    return a().createElement(
                                        'div',
                                        { key: t.id, className: h()(za, !i && 0 !== n && Ua) },
                                        i
                                            ? a().createElement($a, Xa({}, t, { onSlotSelected: C }))
                                            : a().createElement(
                                                  Ha,
                                                  Xa({}, t, {
                                                      slotIndex: n,
                                                      isSetupSwitching: _,
                                                      isSelected: s,
                                                      panelType: u,
                                                      grabberId: r,
                                                      containerRef: b,
                                                      forceLeftUpdate: x(r),
                                                      activeDragId: y.activeDragId,
                                                      handleGrabberAction: w,
                                                      potentialDropId: y.potentialDropId,
                                                      blockOnGrabIds: l,
                                                      isDisabled: o,
                                                  }),
                                              ),
                                    );
                                }),
                            )
                        );
                    },
                    Va = {
                        base: 'ShellsSection_base_08',
                        base__grabbing: 'ShellsSection_base__grabbing_2e',
                        base__hangar: 'ShellsSection_base__hangar_24',
                        base__setup: 'ShellsSection_base__setup_c8',
                        base__compare: 'ShellsSection_base__compare_e3',
                        base__selected: 'ShellsSection_base__selected_fd',
                        base__dragIn: 'ShellsSection_base__dragIn_39',
                        base__dragInActive: 'ShellsSection_base__dragInActive_96',
                        base__toggle: 'ShellsSection_base__toggle_bd',
                        base__disabled: 'ShellsSection_base__disabled_7e',
                        label: 'ShellsSection_label_38',
                        attention: 'ShellsSection_attention_7e',
                        blinking: 'ShellsSection_blinking_57',
                        border: 'ShellsSection_border_0d',
                        border__double: 'ShellsSection_border__double_a1',
                        border__triple: 'ShellsSection_border__triple_f2',
                        counter: 'ShellsSection_counter_74',
                        disabled: 'ShellsSection_disabled_c2',
                    },
                    Ka = [Tu.Hangar, Tu.Battle, Tu.Prebattle, Tu.Respawn],
                    qa = ({
                        slots: e,
                        ammoNotFull: u,
                        type: t,
                        sectionsIds: i,
                        panelType: s,
                        onActiveSlotChanged: r,
                        isDisabled: l,
                        isBorderActive: o,
                        selectedSection: _,
                        syncInitiator: c,
                        classMix: d,
                        isSetupSwitching: E,
                        setIsExitBlocked: m,
                        newItemsCount: A,
                    }) => {
                        const F = (0, n.useRef)(null),
                            D = s === Tu.Compare,
                            b = _ === t,
                            p = (0, n.useCallback)(() => {
                                r(F, _, 0);
                            }, [r, _]),
                            g = et(t, i),
                            C = g.selfId,
                            B = g.blockOnGrabIds,
                            f = ((e) => Ka.includes(e))(s) && !l && u,
                            S = (function (e, u) {
                                if (Array.isArray(e)) return e.filter(u);
                                const t = [];
                                for (let a = 0; a < e.length; a++) {
                                    var n;
                                    const i = null == (n = e[a]) ? void 0 : n.value;
                                    u(i, a, e) && t.push(i);
                                }
                                return t;
                            })(e, (e) => Boolean(e) && !ku(e)).length,
                            v = (0, n.useMemo)(() => {
                                if (!f) return null;
                                const e = h()(Va.border, 2 === S && Va.border__double, 3 === S && Va.border__triple);
                                return a().createElement('div', { className: e });
                            }, [f, S]),
                            w = h()(
                                Va.base,
                                d,
                                Va[`base__${s}`],
                                !o && b && Va.base__selected,
                                D && Va.base__compare,
                                l && Va.base__disabled,
                            ),
                            y = !D && s !== Tu.Battle && s !== Tu.Respawn;
                        return a().createElement(
                            'div',
                            { id: E ? Dt : C, className: w, ref: F },
                            f && a().createElement('div', { className: Va.attention }),
                            y &&
                                a().createElement(
                                    'div',
                                    { className: Va.label },
                                    a().createElement(Ft, {
                                        text: R.strings.tank_setup.section.shells(),
                                        parentRef: F,
                                        show: !b,
                                        panelType: s,
                                    }),
                                ),
                            v,
                            a().createElement(ja, {
                                shells: e,
                                panelType: s,
                                onSelected: p,
                                isSelected: b,
                                isCompare: D,
                                syncInitiator: c,
                                blockOnGrabIds: B,
                                isDisabled: l,
                                isSetupSwitching: E,
                                setIsExitBlocked: m,
                            }),
                            Boolean(A) &&
                                a().createElement(
                                    'div',
                                    { className: Va.counter },
                                    a().createElement(it, { value: A, size: 'small', fadeInAnimation: !0 }),
                                ),
                            l && a().createElement('div', { className: Va.disabled }),
                        );
                    },
                    Ya = {
                        base: 'Sections_base_13',
                        section: 'Sections_section_35',
                        section__battle: 'Sections_section__battle_d3',
                        section__small: 'Sections_section__small_73',
                        section__extraSmall: 'Sections_section__extraSmall_5f',
                        section__first: 'Sections_section__first_e2',
                    };
                function Za() {
                    return (
                        (Za =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Za.apply(this, arguments)
                    );
                }
                const Qa = ({
                        panelType: e,
                        isDisabled: u = !1,
                        onActiveSlotChanged: t,
                        isBorderActive: n,
                        isBootCamp: i = !1,
                        sections: s,
                        selectedSection: r,
                        selectedSlot: l,
                        syncInitiator: o,
                        ammoNotFull: _,
                        onBootcampPanelAppear: c,
                        isChangeSetupIndex: d,
                        setIsExitBlocked: E,
                    }) => {
                        const m = V(['section'], Ya),
                            A = J(s, (e) => Ju(e.type)),
                            F = {
                                panelType: e,
                                isDisabled: u,
                                onActiveSlotChanged: t,
                                isBorderActive: n,
                                selectedSection: r,
                                selectedSlot: l,
                                syncInitiator: o,
                                sectionsIds: A,
                                isChangeSetupIndex: d,
                                setIsExitBlocked: E,
                            };
                        return a().createElement(
                            'div',
                            { className: Ya.base },
                            J(s, (u, t) => {
                                if (!u.slots || !u.slots.length) return null;
                                const n = h()(
                                        m.section,
                                        0 !== t && Ou(e) && Ya.section__battle,
                                        0 === t && Ya.section__first,
                                    ),
                                    s = Z(u.slots, (e) => Object.assign({}, e));
                                if (u.type === Mu || u.type === Pu) {
                                    const e = u;
                                    return a().createElement(
                                        qa,
                                        Za({}, e, F, {
                                            isSetupSwitching: d,
                                            slots: s,
                                            key: `${u.name}${t}${u.slots.length}`,
                                            classMix: n,
                                            ammoNotFull: _,
                                        }),
                                    );
                                }
                                return a().createElement(
                                    ya,
                                    Za({}, u, F, {
                                        isSetupSwitching: d,
                                        slots: s,
                                        key: `${u.name}${t}${u.slots.length}`,
                                        classMix: n,
                                        isBootCamp: i,
                                        onBootcampPanelAppear: c,
                                    }),
                                );
                            }),
                        );
                    },
                    Ja = 'KeyboardKey_base_57',
                    ei = 'KeyboardKey_back_43',
                    ui = a().memo(({ text: e }) =>
                        a().createElement('div', { className: Ja }, a().createElement('div', { className: ei }, e)),
                    ),
                    ti = 'SetupSwitchHotkey_base_4c',
                    ni = 'SetupSwitchHotkey_hotKeyWrapper_8d',
                    ai = 'SetupSwitchHotkey_plusWrapper_f0',
                    ii = 'SetupSwitchHotkey_plus_f0',
                    si = 'SetupSwitchHotkey_plus__horizontal_e0',
                    ri = 'SetupSwitchHotkey_plus__vertical_5b',
                    li = a().memo(({ hotKeys: e }) =>
                        a().createElement(
                            'div',
                            { className: ti },
                            e.map((e, u) => {
                                if (!e) return null;
                                const t = e.value;
                                return 0 === u
                                    ? a().createElement(ui, { key: u, text: t })
                                    : a().createElement(
                                          'div',
                                          { key: u, className: ni },
                                          a().createElement(
                                              'div',
                                              { className: ai },
                                              a().createElement('div', { className: `${ii} ${si}` }),
                                              a().createElement('div', { className: `${ii} ${ri}` }),
                                          ),
                                          a().createElement(ui, { text: t }),
                                      );
                            }),
                        ),
                    ),
                    oi = {
                        base: 'Groups_base_de',
                        group: 'Groups_group_1f',
                        groupWrapper: 'Groups_groupWrapper_70',
                        switch: 'Groups_switch_98',
                        switch__battle: 'Groups_switch__battle_0f',
                        switch__small: 'Groups_switch__small_45',
                        switch__extraSmall: 'Groups_switch__extraSmall_b5',
                        prebattleSwitchIndicator: 'Groups_prebattleSwitchIndicator_da',
                        hint: 'Groups_hint_49',
                        hint__disabled: 'Groups_hint__disabled_17',
                    };
                function _i() {
                    return (
                        (_i =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        _i.apply(this, arguments)
                    );
                }
                const ci = (e) => e.setupSelector.hotKeys,
                    di = (e) =>
                        Object.assign({}, e, {
                            slots: J(e.slots, (e) => {
                                if ('specializations' in e) {
                                    const u = e;
                                    return Object.assign({}, u, {
                                        specializations: Object.assign({}, u.specializations, {
                                            specializations: J(u.specializations.specializations, (e) =>
                                                Object.assign({}, e),
                                            ),
                                        }),
                                    });
                                }
                                return Object.assign({}, e);
                            }),
                        }),
                    Ei = (e) =>
                        Q(
                            e,
                            (e) => {
                                var u;
                                const t = (function (e, u) {
                                    if (Array.isArray(e)) return e.every(u);
                                    for (let t = 0; t < e.length; t++) if (!u(Y(e, t), t, e)) return !1;
                                    return !0;
                                })(null != (u = null == e ? void 0 : e.sections) ? u : [], (e) => {
                                    var u, t;
                                    return 0 === (null != (u = null == (t = e.slots) ? void 0 : t.length) ? u : 0);
                                });
                                return !(!e || t);
                            },
                            (e) =>
                                Object.assign({}, e, {
                                    setupSelector: Object.assign({}, e.setupSelector, {
                                        states: Z(e.setupSelector.states, (e) => e),
                                    }),
                                    sections: J(e.sections, di),
                                }),
                        ),
                    mi = ({ sectionProps: e, isSetupSwitching: u, isReady: t, setSetupSwitching: i, children: s }) => {
                        const r = V(['switch'], oi),
                            l = D('model'),
                            o = l.isDisabled,
                            _ = l.vehicleInfo,
                            c = D('model.ammunitionPanel'),
                            d = c.sectionGroups,
                            E = c.onChangeSetupIndex,
                            m = c.selectedSection,
                            A = c.selectedSlot,
                            F = c.syncInitiator,
                            b = c.ammoNotFull,
                            p = null == _ ? void 0 : _.vehicleName,
                            g = Ei(d);
                        (0, n.useEffect)(() => {
                            (e.panelType !== Tu.Hangar && e.panelType !== Tu.Setup) || !t || i(!1);
                        }, [t, e.panelType, i]),
                            (0, n.useEffect)(() => {
                                e.panelType === Tu.Respawn && i(!1);
                            }, [p, e.panelType, i]);
                        const C = (0, n.useCallback)(
                                (u) => {
                                    e.panelType === Tu.Respawn && i(!0), E(u);
                                },
                                [E, e.panelType, i],
                            ),
                            B = (e.panelType !== Tu.Respawn && t) || (e.panelType === Tu.Respawn && u);
                        return a().createElement(
                            'div',
                            { className: oi.base },
                            Z(g, (t) => {
                                const n = R.strings.tank_setup.tooltips.prebattleSwitchIndicator.desc.$dyn(
                                    `c_${t.groupId}`,
                                );
                                return a().createElement(
                                    'div',
                                    { key: t.groupId, className: oi.group },
                                    a().createElement(
                                        'div',
                                        { className: oi.groupWrapper },
                                        a().createElement(
                                            xu,
                                            _i(
                                                { disabled: !B && Boolean(e.isBootCamp) },
                                                ((e, u) => ({ index: e.currentIndex, setSetupSwitching: u }))(t, i),
                                            ),
                                            a().createElement(
                                                Qa,
                                                _i({}, e, {
                                                    sections: t.sections,
                                                    selectedSection: m,
                                                    selectedSlot: A,
                                                    syncInitiator: F,
                                                    ammoNotFull: b,
                                                    isChangeSetupIndex: u,
                                                }),
                                            ),
                                        ),
                                        t.setupSelector.isSwitchEnabled &&
                                            a().createElement(
                                                'div',
                                                { className: h()(r.switch, Iu(e.panelType) && oi.switch__battle) },
                                                a().createElement(hu, {
                                                    states: t.setupSelector.states,
                                                    onClick: C,
                                                    totalCount: t.totalCount,
                                                    currentIndex: t.currentIndex,
                                                    groupId: t.groupId,
                                                    isDisabled: e.isDisabled,
                                                }),
                                                t.setupSelector.isPrebattleSwitchDisabled &&
                                                    a().createElement(
                                                        Ue,
                                                        {
                                                            header: R.strings.tank_setup.tooltips.prebattleSwitchIndicator.title(),
                                                            body: 'string' == typeof n ? n : void 0,
                                                        },
                                                        a().createElement('div', {
                                                            className: oi.prebattleSwitchIndicator,
                                                        }),
                                                    ),
                                            ),
                                    ),
                                    ((s = t),
                                    ((l = e.panelType) === Tu.Battle || l === Tu.Respawn) &&
                                        s.setupSelector.isSwitchEnabled &&
                                        ci(s) &&
                                        a().createElement(
                                            'div',
                                            { className: h()(oi.hint, o && oi.hint__disabled) },
                                            a().createElement(li, { hotKeys: ci(t) }),
                                        )),
                                );
                                var s, l;
                            }),
                            s,
                        );
                    },
                    Ai = 'RoleSkillSlot_base_c4',
                    Fi = 'RoleSkillSlot_icon_79',
                    Di = ({
                        roleSkill: e,
                        roleName: u,
                        tooltipId: t,
                        tooltipHeader: i,
                        tooltipBody: s,
                        className: r,
                    }) => {
                        const l = (0, n.useMemo)(
                            () => ({
                                args: {
                                    tooltipId: t,
                                    roleSkill: e,
                                    roleName: u,
                                    header: i,
                                    body: s,
                                    hasHtmlContent: !0,
                                },
                                header: i,
                                body: s,
                                ignoreShowDelay: !0,
                            }),
                            [e, u, i, s, t],
                        );
                        return a().createElement(
                            je,
                            { tooltipArgs: l, className: h()(Ai, r) },
                            a().createElement('div', {
                                className: Fi,
                                style: {
                                    backgroundImage: `url(${R.images.gui.maps.icons.roleSkills.c_48x48.$dyn(e)})`,
                                },
                            }),
                        );
                    },
                    bi = 'SlotGlow_base_40',
                    pi = 'SlotGlow_glow_a9',
                    gi = 'SlotGlow_glow__shown_f2',
                    Ci = 'SlotGlow_glow__hidden_94',
                    Bi = (0, n.memo)(({ slotOffset: e, slotWidth: u, isAnimationRunning: t }) => {
                        const i = (0, n.useState)({ offset: e, slotWidth: u }),
                            s = i[0],
                            r = i[1],
                            l = (0, n.useRef)({ initialized: !1, offset: e, slotWidth: u });
                        (0, n.useEffect)(() => {
                            let t = l.current.initialized;
                            !t && e && ((t = !0), r({ offset: e, slotWidth: u })),
                                (l.current = { initialized: t, offset: e, slotWidth: u });
                        }, [e, u]),
                            (0, n.useEffect)(() => {
                                t || r(l.current);
                            }, [t]);
                        const o = (0, n.useMemo)(() => {
                                const e = s.slotWidth + 25;
                                return { left: s.offset, width: e, backgroundSize: `${b.O.view.pxToRem(e)}rem 100%` };
                            }, [s.offset, s.slotWidth]),
                            _ = !t && s.offset === l.current.offset,
                            c = h()(pi, _ ? gi : Ci);
                        return a().createElement(
                            'div',
                            { className: bi },
                            l.current.initialized && a().createElement('div', { className: c, style: o }),
                        );
                    }),
                    hi = ({
                        show: e = !0,
                        isReady: u = !0,
                        panelType: t,
                        isBootCamp: i = !1,
                        isDisabled: s = !1,
                        onBootcampPanelAppear: r,
                        onResize: l,
                        setIsExitBlocked: o,
                    }) => {
                        const _ = D('model.ammunitionPanel'),
                            c = _.isSetupSwitchInProgress,
                            d = _.syncInitiator,
                            E = _.sectionGroups,
                            m = _.onSectionResized,
                            A = (function (e, u, t) {
                                if (Array.isArray(e)) return e.reduce(u, t);
                                let n = t;
                                for (let t = 0; t < e.length; t++) n = u(n, Y(e, t), t, e);
                                return n;
                            })(E, (e, u) => e + u.sections.length, 0),
                            F = D('model.roleSkillSlot'),
                            b = D('model.abilitySlot'),
                            p = (0, n.useState)(!1),
                            g = p[0],
                            C = p[1],
                            B = (0, n.useRef)(!1),
                            f = (0, n.useState)({ slotWidth: 0, slotOffset: 0 }),
                            w = f[0],
                            y = f[1],
                            x = (0, n.useState)(!1),
                            T = x[0],
                            k = x[1],
                            I = (0, n.useRef)(null),
                            R = S(),
                            O = (0, n.useRef)({ element: null, generation: 0, slotIndex: null, sectionIndex: null }),
                            M = (0, n.useCallback)(
                                (e, u) => {
                                    if (g || c || i || t !== Tu.Hangar) return;
                                    const n = u || { width: 0, height: 0, offsetX: 0, offsetY: 0 };
                                    m(Object.assign({ sectionType: e }, n)), R && (R.freeze(), R.resize());
                                },
                                [g, c, i, t, m, R],
                            ),
                            L = (0, n.useCallback)(
                                (e) => {
                                    M('main', e);
                                },
                                [M],
                            );
                        ee(I, L, !0, [d]), (0, n.useEffect)(() => () => L(), [L]);
                        const N = (0, n.useCallback)(() => {
                                k(!1);
                            }, []),
                            P = (0, n.useCallback)(() => {
                                if (O.current.element && I.current) {
                                    const e = O.current.element.getBoundingClientRect(),
                                        u = I.current.getBoundingClientRect();
                                    y({ slotWidth: e.width, slotOffset: e.left - u.left + 0.5 * e.width });
                                }
                            }, []),
                            H = (0, n.useCallback)(
                                (e, u, t) => {
                                    if (e.current && I.current) {
                                        const n = ((e, u, t) =>
                                            e !== t.current.slotIndex || u !== t.current.sectionIndex)(t, u, O);
                                        (O.current.element = e.current),
                                            (O.current.slotIndex = t),
                                            (O.current.sectionIndex = u),
                                            B.current && n ? k(!0) : (B.current = !0),
                                            O.current.generation && P();
                                    }
                                },
                                [P],
                            ),
                            G = (0, n.useCallback)(
                                () =>
                                    v(() => {
                                        (O.current.generation += 1), P();
                                    }),
                                [O, P],
                            );
                        (0, n.useEffect)(() => v(G), [G]),
                            (0, n.useEffect)(
                                () => (
                                    engine.on('clientResized', G),
                                    () => {
                                        engine.off('clientResized', G);
                                    }
                                ),
                                [G],
                            );
                        const $ = (0, n.useCallback)(() => {
                                (O.current.generation += 1),
                                    A >= O.current.generation && (null == r || r(), null == l || l()),
                                    P();
                            }, [r, l, A, P]),
                            W = w.slotWidth,
                            z = w.slotOffset,
                            U = h()(Ze.base, !u && Ze.base__locked, !e && Ze.base__hidden, s && Ze.base__disabled),
                            X = h()(Ze.border, !T && Ze.border__hidden),
                            j = t === Tu.Setup || t === Tu.Compare,
                            K = {
                                panelType: t,
                                isDisabled: s,
                                onActiveSlotChanged: H,
                                isBorderActive: T,
                                isBootCamp: i,
                                onBootcampPanelAppear: $,
                                setIsExitBlocked: o,
                            };
                        (0, n.useEffect)(() => {
                            !1 === i && (null == l || l());
                        }, [l, F.roleSkill, b.ability, i]);
                        const q = V(['roleSkillSlot', 'abilitySkillSlot'], Ze);
                        return a().createElement(
                            'div',
                            { ref: I, className: U },
                            j &&
                                a().createElement(Bi, {
                                    key: O.current.generation,
                                    slotOffset: z,
                                    slotWidth: W,
                                    isAnimationRunning: T,
                                }),
                            a().createElement(
                                mi,
                                { isSetupSwitching: c || g, sectionProps: K, isReady: u, setSetupSwitching: C },
                                F.roleSkill &&
                                    a().createElement(Di, {
                                        roleSkill: F.roleSkill,
                                        roleName: F.roleName,
                                        tooltipId: F.tooltipId,
                                        tooltipHeader: F.tooltipHeader,
                                        tooltipBody: F.tooltipBody,
                                        className: h()(Ze.roleSkillSlot, Ze[`roleSkillSlot__${t}`], q.roleSkillSlot),
                                    }),
                                b.ability &&
                                    a().createElement(Ye, {
                                        skillName: b.ability,
                                        tooltipId: b.tooltipId,
                                        tooltipHeader: b.tooltipHeader,
                                        tooltipBody: b.tooltipBody,
                                        className: h()(
                                            Ze.abilitySkillSlot,
                                            Ze[`abilitySkillSlot__${t}`],
                                            q.abilitySkillSlot,
                                        ),
                                    }),
                            ),
                            j &&
                                a().createElement(
                                    'div',
                                    { className: X },
                                    a().createElement(tu, { slotWidth: W, slotOffset: z, onAnimationEnd: N }),
                                ),
                        );
                    },
                    fi = 'Content_base_1a',
                    Si = () => {
                        const e = D('model'),
                            u = e.isDisabled,
                            t = e.isReady,
                            i = e.isBootcamp,
                            s = e.onEscKeyDown,
                            r = (0, n.useCallback)(() => s(), [s]);
                        return (
                            C(p.n.ESCAPE, r),
                            a().createElement(
                                'div',
                                { className: fi },
                                a().createElement(hi, {
                                    panelType: Tu.Respawn,
                                    isDisabled: u,
                                    isReady: t,
                                    isBootCamp: i,
                                }),
                            )
                        );
                    },
                    vi = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    wi = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const yi = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    xi = (e) =>
                        yi
                            ? `${e}`
                            : (function (e) {
                                  let u = '';
                                  for (let t = wi.length - 1; t >= 0; t--)
                                      for (; e >= wi[t]; ) (u += vi[t]), (e -= wi[t]);
                                  return u;
                              })(e),
                    Ti = {
                        base: 'TankName_base_f1',
                        base__sizeMedium: 'TankName_base__sizeMedium_3a',
                        base__sizBig: 'TankName_base__sizBig_a9',
                        base__typeWhite: 'TankName_base__typeWhite_32',
                        base__typeWhiteSpanish: 'TankName_base__typeWhiteSpanish_e2',
                        base__typeColored: 'TankName_base__typeColored_bc',
                        level: 'TankName_level_bb',
                        type: 'TankName_type_3c',
                        type__elite: 'TankName_type__elite_cc',
                        base__sizeBig: 'TankName_base__sizeBig_2b',
                        name: 'TankName_name_56',
                        base__tagPremiumIGR: 'TankName_base__tagPremiumIGR_26',
                        premiumIGR: 'TankName_premiumIGR_25',
                    };
                let ki, Ii;
                !(function (e) {
                    (e.extraSmall = 'extraSmall'), (e.medium = 'medium'), (e.big = 'big');
                })(ki || (ki = {})),
                    (function (e) {
                        (e.colored = 'colored'), (e.white = 'white'), (e.whiteSpanish = 'whiteSpanish');
                    })(Ii || (Ii = {}));
                const Ri = ({
                        isElite: e,
                        vehicleName: u,
                        vehicleShortName: t,
                        vehicleType: n,
                        vehicleLvl: i,
                        tags: s,
                        isPremiumIGR: r,
                        size: l = ki.extraSmall,
                        type: o = Ii.colored,
                        className: _,
                        classNames: c,
                        isShortName: d = !1,
                    }) => {
                        const E = `${((m = n), m.replace(/-/g, '_'))}${e ? '_elite' : ''}`;
                        var m;
                        const A = R.images.gui.maps.icons.vehicleTypes.big.$dyn(E);
                        return a().createElement(
                            'div',
                            {
                                className: h()(
                                    Ti.base,
                                    Ti[`base__size${G(l)}`],
                                    Ti[`base__type${G(o)}`],
                                    s && Z(s, (e) => Ti[`base__tag${G(e)}`]),
                                    _,
                                ),
                            },
                            a().createElement('div', { className: h()(Ti.level, null == c ? void 0 : c.level) }, xi(i)),
                            a().createElement('div', {
                                className: h()(Ti.type, e && Ti.type__elite, null == c ? void 0 : c.typeIcon),
                                style: { backgroundImage: `url(${A})` },
                            }),
                            r && a().createElement('div', { className: Ti.premiumIGR }),
                            a().createElement(
                                'div',
                                { className: h()(Ti.name, null == c ? void 0 : c.name) },
                                d ? t : u,
                            ),
                        );
                    },
                    Oi = 'Header_base_bc';
                function Mi() {
                    return (
                        (Mi =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Mi.apply(this, arguments)
                    );
                }
                const Li = () => {
                        const e = D('model.vehicleInfo');
                        return a().createElement(
                            'div',
                            { className: Oi },
                            a().createElement(Ri, Mi({}, e, { size: ki.medium, type: Ii.white })),
                        );
                    },
                    Ni = 'App_base_55',
                    Pi = () =>
                        a().createElement(
                            'div',
                            { className: Ni },
                            a().createElement(Li, null),
                            a().createElement(Si, null),
                        );
                engine.whenReady.then(() => {
                    s().render(a().createElement(Pi, null), document.getElementById('root'));
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
                var a = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [u, t, n] = deferred[l], i = !0, s = 0; s < u.length; s++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[s]))
                            ? u.splice(s--, 1)
                            : ((i = !1), n < a && (a = n));
                    if (i) {
                        deferred.splice(l--, 1);
                        var r = t();
                        void 0 !== r && (e = r);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > n; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [u, t, n];
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
        (__webpack_require__.j = 876),
        (() => {
            var e = { 876: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        a,
                        [i, s, r] = t,
                        l = 0;
                    if (i.some((u) => 0 !== e[u])) {
                        for (n in s) __webpack_require__.o(s, n) && (__webpack_require__.m[n] = s[n]);
                        if (r) var o = r(__webpack_require__);
                    }
                    for (u && u(t); l < i.length; l++)
                        (a = i[l]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return __webpack_require__.O(o);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [532], () => __webpack_require__(447));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
