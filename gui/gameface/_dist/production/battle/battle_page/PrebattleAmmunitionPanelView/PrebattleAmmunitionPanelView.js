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
                        addModelObserver: () => y,
                        addPreloadTexture: () => v,
                        children: () => i,
                        displayStatus: () => D,
                        displayStatusIs: () => U,
                        events: () => b,
                        extraSize: () => j,
                        forceTriggerMouseMove: () => W,
                        freezeTextureBeforeResize: () => O,
                        getBrowserTexturePath: () => x,
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
                        whenTutorialReady: () => X,
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
                function x(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function y(e, u, t) {
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
                    j = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    X = Promise.all([
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
            811: (e, u, t) => {
                'use strict';
                var n = t(179),
                    a = t.n(n),
                    i = t(493),
                    s = t.n(i),
                    r = t(483),
                    l = t.n(r);
                let o;
                function _(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(o || (o = {}));
                const c = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    d = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    E = (e, u, t = o.left) => e.split(u).reduce(t === o.left ? c : d, []),
                    m = (() => {
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
                    A = ['zh_cn', 'zh_sg', 'zh_tw'],
                    F = (e, u = o.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        return A.includes(t)
                            ? m(e)
                            : ((e, u = o.left) => {
                                  let t = [];
                                  const n =
                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                      a = e.replace(/&nbsp;/g, ' ');
                                  return E(a, /( )/, u).forEach((e) => (t = t.concat(E(e, n, o.left)))), t;
                              })(e, u);
                    };
                let D;
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
                })(D || (D = {}));
                var b = t(364);
                const p = 60;
                Date.now();
                const g = () => {},
                    C = (e = 0, u, t = 0, a = g) => {
                        const i = (0, n.useState)(e),
                            s = i[0],
                            r = i[1];
                        return (
                            (0, n.useEffect)(() => {
                                if (e > 0) {
                                    r(e);
                                    const n = Date.now(),
                                        i = setInterval(
                                            () => {
                                                const u = e - Math.floor((Date.now() - n) / 1e3);
                                                null !== t && u <= t ? (r(t), a && a(), clearInterval(i)) : r(u);
                                            },
                                            1e3 * (u || (e > 120 ? p : 1)),
                                        );
                                    return () => {
                                        clearInterval(i);
                                    };
                                }
                            }, [e, u, t, a]),
                            s
                        );
                    };
                var B = t(67);
                const h = (e = 1) => {
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
                    f = (e, u) => e.split('.').reduce((e, u) => e && e[u], u),
                    S = (e) => {
                        const u = (0, n.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    },
                    v = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    w = (e, u) => (e.length > 0 ? `${e}.${u}` : u),
                    x = (e) =>
                        ((e, u) =>
                            e.split('.').reduce((e, t) => {
                                const n = f(`${e}.${t}`, window);
                                return v(n) ? u(e, t, n) : `${e}.${t}`;
                            }))(e, (e, u) => `${e}.${u}.value`),
                    y = (e) => {
                        const u = ((e) => {
                                const u = h(),
                                    t = u.caller,
                                    n = u.resId,
                                    a = window.__feature && window.__feature !== t && t ? `subViews.${t}` : '';
                                return { modelPrefix: a, modelPath: w(a, e || ''), resId: n };
                            })(),
                            t = u.modelPrefix,
                            n = e.split('.');
                        if (n.length > 0) {
                            const e = [n[0]];
                            return (
                                n.reduce((u, n) => {
                                    const a = f(w(t, `${u}.${n}`), window);
                                    return v(a) ? (e.push(a.id), `${u}.${n}.value`) : (e.push(n), `${u}.${n}`);
                                }),
                                e.reduce((e, u) => e + '.' + u)
                            );
                        }
                        return '';
                    },
                    T = b.Sw.instance;
                let k;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(k || (k = {}));
                const I = (e = 'model', u = k.Deep) => {
                        const t = (0, n.useState)(0),
                            a = (t[0], t[1]),
                            i = (0, n.useMemo)(() => h(), []),
                            s = i.caller,
                            r = i.resId,
                            l = (0, n.useMemo)(
                                () => (window.__feature && window.__feature !== s ? `subViews.${s}.${e}` : e),
                                [s, e],
                            ),
                            o = (0, n.useState)(() =>
                                ((e) => {
                                    const u = f(e, window);
                                    for (const e in u) 'function' == typeof u[e] && (u[e] = u[e].bind(u));
                                    return v(u) ? u.value : u;
                                })(x(l)),
                            ),
                            _ = o[0],
                            c = o[1],
                            d = (0, n.useRef)(-1);
                        return (
                            S(() => {
                                if (
                                    ('boolean' == typeof u &&
                                        ((u = u ? k.Deep : k.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    u !== k.None)
                                ) {
                                    const t = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            u === k.Deep
                                                ? (e === _ && a((e) => e + 1), c(e))
                                                : c(Object.assign([], e));
                                        },
                                        n = y(e);
                                    d.current = T.addCallback(n, t, r, u === k.Deep);
                                }
                            }),
                            (0, n.useEffect)(() => {
                                if (u !== k.None)
                                    return () => {
                                        T.removeCallback(d.current, r);
                                    };
                            }, [r, u]),
                            _
                        );
                    },
                    O = b.Sw.instance,
                    M = (e = 'model', u = !0) => {
                        const t = (0, n.useState)(0),
                            a = (t[0], t[1]),
                            i = (0, n.useMemo)(() => h(), []),
                            s = i.caller,
                            r = i.resId,
                            l = (0, n.useMemo)(
                                () => (window.__feature && window.__feature !== s ? `children.${s}.${e}` : e),
                                [s, e],
                            ),
                            o = (0, n.useMemo)(
                                () =>
                                    ((e) => {
                                        const u = f(e, window);
                                        for (const e in u) 'function' == typeof u[e] && (u[e] = u[e].bind(u));
                                        return u;
                                    })(l),
                                [l],
                            );
                        return (
                            (0, n.useEffect)(() => {
                                if (u) {
                                    const u = () => {
                                            a((e) => e + 1);
                                        },
                                        t = O.addCallback(e, u, r);
                                    return () => O.removeCallback(t, r);
                                }
                            }, [e, u, r]),
                            o
                        );
                    },
                    L = C;
                let N;
                !(function (e) {
                    (e[(e.BattleLoading = 0)] = 'BattleLoading'),
                        (e[(e.PreBattle = 1)] = 'PreBattle'),
                        (e[(e.PreBattleNotConfirmed = 2)] = 'PreBattleNotConfirmed');
                })(N || (N = {}));
                const P = (e) => {
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
                const H = (0, n.createContext)(null);
                function G() {
                    return (0, n.useContext)(H);
                }
                const $ = (e, u, t) =>
                        u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                            ? (u.extraLargeHeight && t.extraLarge) ||
                              (u.largeHeight && t.large) ||
                              (u.mediumHeight && t.medium) ||
                              (u.smallHeight && t.small) ||
                              (u.extraSmallHeight && t.extraSmall)
                                ? e
                                : null
                            : e,
                    W = {
                        extraLarge: { weight: 4, width: 2560, height: 1440 },
                        large: { weight: 3, width: 1920, height: 1080 },
                        medium: { weight: 2, width: 1600, height: 900 },
                        small: { weight: 1, width: 1366, height: 768 },
                        extraSmall: { weight: 0, width: 1024, height: 768 },
                    };
                var z;
                function U(e, u, t) {
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
                })(z || (z = {}));
                const j = B.O.client.getSize('rem'),
                    X = j.width,
                    V = j.height,
                    K = Object.assign({ width: X, height: V }, U(X, V, W)),
                    q = (0, n.createContext)(K),
                    Y = ['children'];
                const Z = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                            return a;
                        })(e, Y);
                    const a = (0, n.useContext)(q),
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
                        if (t.extraLargeWidth && _) return $(u, t, g);
                        if (t.largeWidth && c) return $(u, t, g);
                        if (t.mediumWidth && d) return $(u, t, g);
                        if (t.smallWidth && E) return $(u, t, g);
                        if (t.extraSmallWidth && m) return $(u, t, g);
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
                Z.defaultProps = {
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
                (0, n.memo)(Z),
                    (0, n.memo)(({ children: e }) => {
                        const u = (0, n.useContext)(q),
                            t = (0, n.useState)(u),
                            i = t[0],
                            s = t[1],
                            r = (0, n.useCallback)((e, u) => {
                                const t = B.O.view.pxToRem(e),
                                    n = B.O.view.pxToRem(u);
                                s(Object.assign({ width: t, height: n }, U(t, n, W)));
                            }, []);
                        S(() => {
                            engine.on('clientResized', r);
                        }),
                            (0, n.useEffect)(() => () => engine.off('clientResized', r), [r]);
                        const l = (0, n.useMemo)(() => Object.assign({}, i), [i]);
                        return a().createElement(q.Provider, { value: l }, e);
                    });
                function Q(e, u, t) {
                    const a = (0, n.useContext)(q);
                    let i = Object.entries(a).filter(([e, u]) => !0 === u && e in z);
                    return (
                        t && (i = i.filter((e) => t.includes(e[0]))),
                        e.reduce((e, t) => {
                            const n = i.map((e) =>
                                l()(u[((e, u) => e + '__' + u)(t, e[0])], u[((e, u) => e + _(u))(t, e[0])]),
                            );
                            return (e[t] = l()(u[t], ...n)), e;
                        }, {})
                    );
                }
                function J(e) {
                    return (
                        !1 ===
                        (function (e) {
                            return null == e;
                        })(e)
                    );
                }
                function ee(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                const ue = ee;
                function te(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, n) => u(null == e ? void 0 : e.value, t, n));
                }
                function ne(e, u, t) {
                    const n = [];
                    for (let a = 0; a < e.length; a++) {
                        const i = ue(e, a);
                        u(i, a, e) && n.push(t(i, a, e));
                    }
                    return n;
                }
                function ae(e, u) {
                    return ne(e, J, u);
                }
                const ie = (e, u, t, a = []) => {
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
                            P(() =>
                                P(() => {
                                    if (e.current) {
                                        const t = e.current.getBoundingClientRect(),
                                            n = {
                                                width: B.O.view.pxToRem(t.width),
                                                height: B.O.view.pxToRem(t.height),
                                                offsetX: B.O.view.pxToRem(t.left),
                                                offsetY: B.O.view.pxToRem(t.top),
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
                var se = t(887),
                    re = t.n(se);
                let le, oe, _e;
                !(function (e) {
                    (e[(e.ExtraSmall = W.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = W.small.width)] = 'Small'),
                        (e[(e.Medium = W.medium.width)] = 'Medium'),
                        (e[(e.Large = W.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = W.extraLarge.width)] = 'ExtraLarge');
                })(le || (le = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = W.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = W.small.width)] = 'Small'),
                            (e[(e.Medium = W.medium.width)] = 'Medium'),
                            (e[(e.Large = W.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = W.extraLarge.width)] = 'ExtraLarge');
                    })(oe || (oe = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = W.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = W.small.height)] = 'Small'),
                            (e[(e.Medium = W.medium.height)] = 'Medium'),
                            (e[(e.Large = W.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = W.extraLarge.height)] = 'ExtraLarge');
                    })(_e || (_e = {}));
                const ce = () => {
                        const e = (0, n.useContext)(q),
                            u = e.width,
                            t = e.height,
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return le.ExtraLarge;
                                    case e.large:
                                        return le.Large;
                                    case e.medium:
                                        return le.Medium;
                                    case e.small:
                                        return le.Small;
                                    case e.extraSmall:
                                        return le.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), le.ExtraSmall;
                                }
                            })(e),
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return oe.ExtraLarge;
                                    case e.largeWidth:
                                        return oe.Large;
                                    case e.mediumWidth:
                                        return oe.Medium;
                                    case e.smallWidth:
                                        return oe.Small;
                                    case e.extraSmallWidth:
                                        return oe.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), oe.ExtraSmall;
                                }
                            })(e),
                            s = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return _e.ExtraLarge;
                                    case e.largeHeight:
                                        return _e.Large;
                                    case e.mediumHeight:
                                        return _e.Medium;
                                    case e.smallHeight:
                                        return _e.Small;
                                    case e.extraSmallHeight:
                                        return _e.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), _e.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: a, mediaWidth: i, mediaHeight: s, remScreenWidth: u, remScreenHeight: t };
                    },
                    de = ['xl', 'lg', 'md', 'sm', 'xs'],
                    Ee = (e) => e.includes('_') && ((e) => de.includes(e))(e.split('_').at(-1)),
                    me = [le.ExtraLarge, le.Large, le.Medium, le.Small, le.ExtraSmall],
                    Ae = (e, u) =>
                        Object.keys(e).reduce((t, n) => {
                            if (n in t) return t;
                            if (Ee(n)) {
                                const a = n.split('_').slice(0, -1).join('_');
                                if (a in t) return t;
                                const i = me.indexOf(u),
                                    s = (-1 !== i ? de.slice(i) : [])
                                        .map((e) => a + '_' + e)
                                        .find((u) => void 0 !== e[u]),
                                    r = s ? e[s] : void 0;
                                return (t[a] = void 0 !== r ? r : e[a]), t;
                            }
                            const a = e[n];
                            return (
                                void 0 === a ||
                                    ((e, u) => de.some((t) => void 0 !== u[`${e}_${t}`]))(n, e) ||
                                    (t[n] = a),
                                t
                            );
                        }, {}),
                    Fe = (e, u = Ae) => {
                        const t = (
                            (e, u = Ae) =>
                            (t) => {
                                const i = ce().mediaSize,
                                    s = (0, n.useMemo)(() => u(t, i), [t, i]);
                                return a().createElement(e, s);
                            }
                        )(e, u);
                        return a().memo((u) =>
                            Object.keys(u).some((e) => Ee(e) && void 0 !== u[e])
                                ? a().createElement(t, u)
                                : a().createElement(e, u),
                        );
                    },
                    De = {
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
                    be = [
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
                function pe() {
                    return (
                        (pe =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        pe.apply(this, arguments)
                    );
                }
                Object.keys(re());
                const ge = {
                        XL: { mt: De.mt__XL, mr: De.mr__XL, mb: De.mb__XL, ml: De.ml__XL },
                        LG: { mt: De.mt__LG, mr: De.mr__LG, mb: De.mb__LG, ml: De.ml__LG },
                        MDp: { mt: De.mt__MDp, mr: De.mr__MDp, mb: De.mb__MDp, ml: De.ml__MDp },
                        MD: { mt: De.mt__MD, mr: De.mr__MD, mb: De.mb__MD, ml: De.ml__MD },
                        SMp: { mt: De.mt__SMp, mr: De.mr__SMp, mb: De.mb__SMp, ml: De.ml__SMp },
                        SM: { mt: De.mt__SM, mr: De.mr__SM, mb: De.mb__SM, ml: De.ml__SM },
                        XS: { mt: De.mt__XS, mr: De.mr__XS, mb: De.mb__XS, ml: De.ml__XS },
                    },
                    Ce = (Object.keys(ge), ['mt', 'mr', 'mb', 'ml']),
                    Be = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    he = Fe((e) => {
                        let u = e.className,
                            t = e.width,
                            i = e.height,
                            s = e.m,
                            r = e.mt,
                            o = void 0 === r ? s : r,
                            _ = e.mr,
                            c = void 0 === _ ? s : _,
                            d = e.mb,
                            E = void 0 === d ? s : d,
                            m = e.ml,
                            A = void 0 === m ? s : m,
                            F = e.column,
                            D = e.row,
                            b = e.flexDirection,
                            p = void 0 === b ? (F ? 'column' : D && 'row') || void 0 : b,
                            g = e.flexStart,
                            C = e.center,
                            B = e.flexEnd,
                            h = e.spaceBetween,
                            f = e.spaceAround,
                            S = e.justifyContent,
                            v =
                                void 0 === S
                                    ? (g ? 'flex-start' : C && 'center') ||
                                      (B && 'flex-end') ||
                                      (h && 'space-between') ||
                                      (f && 'space-around') ||
                                      void 0
                                    : S,
                            w = e.alignItems,
                            x = void 0 === w ? (g ? 'flex-start' : C && 'center') || (B && 'flex-end') || void 0 : w,
                            y = e.alignSelf,
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
                            })(e, be);
                        const G = (0, n.useMemo)(() => {
                                const e = { mt: o, mr: c, mb: E, ml: A },
                                    u = ((e) =>
                                        Ce.reduce((u, t) => {
                                            const n = e[t];
                                            return n && 'number' != typeof n ? u.concat(ge[!0 === n ? 'MD' : n][t]) : u;
                                        }, []))(e),
                                    n = ((e) =>
                                        Ce.reduce((u, t) => {
                                            const n = e[t];
                                            return 'number' == typeof n && (u[Be[t]] = n + 'rem'), u;
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, N, n, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== i && 'number' == typeof i ? i + 'rem' : i,
                                        flex: L,
                                        alignSelf: y,
                                        display: p || x ? 'flex' : void 0,
                                        flexDirection: p,
                                        flexWrap: I,
                                        justifyContent: v,
                                        alignItems: x,
                                    }),
                                    computedClassNames: u,
                                };
                            }, [t, i, o, c, E, A, N, L, y, p, I, v, x]),
                            $ = G.computedStyle,
                            W = G.computedClassNames;
                        return a().createElement('div', pe({ className: l()(De.base, ...W, u), style: $ }, H), P);
                    }),
                    fe = 'FormatText_base_d0',
                    Se = ({ binding: e, text: u = '', classMix: t, alignment: i = o.left }) =>
                        null === u
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : a().createElement(
                                  n.Fragment,
                                  null,
                                  u.split('\n').map((u, s) =>
                                      a().createElement(
                                          'div',
                                          { className: l()(fe, t), key: `${u}-${s}` },
                                          ((e, u, t) =>
                                              e
                                                  .split(/%\((.*?)\)(?:[sd])?/g)
                                                  .map((e) => (t && e in t ? t[e] : F(e, u))))(u, i, e).map((e, u) =>
                                              a().createElement(n.Fragment, { key: `${u}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              );
                var ve = t(532),
                    we = t.n(ve);
                const xe = {
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
                    ye = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function Te() {
                    return (
                        (Te =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Te.apply(this, arguments)
                    );
                }
                Object.keys(re());
                const ke = Object.keys(we()),
                    Ie = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    Re = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Oe = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Me = {
                        XL: { mt: 'XL', mr: 'XL', mb: 'XL', ml: 'XL' },
                        LG: { mt: 'LG', mr: 'LG', mb: 'LG', ml: 'LG' },
                        MDp: { mt: 'MDp', mr: 'MDp', mb: 'MDp', ml: 'MDp' },
                        MD: { mt: 'MD', mr: 'MD', mb: 'MD', ml: 'MD' },
                        SMp: { mt: 'SMp', mr: 'SMp', mb: 'SMp', ml: 'SMp' },
                        SM: { mt: 'SM', mr: 'SM', mb: 'SM', ml: 'SM' },
                        XS: { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    },
                    Le =
                        (Object.keys(Me),
                        {
                            'heading-H144': { mt: 'XL', mr: 'LG', mb: 'LG', ml: 'LG' },
                            'heading-H73': { mt: 'LG', mr: 'MD', mb: 'MD', ml: 'MD' },
                            'heading-H56': Ie,
                            'heading-H36': Ie,
                            'heading-H28': Re,
                            'heading-H24': Re,
                            'heading-H24R': Re,
                            'heading-H22': Re,
                            'heading-H20R': Re,
                            'heading-H18': Re,
                            'heading-H15': Oe,
                            'heading-H14': Oe,
                            'paragraph-P24': Re,
                            'paragraph-P18': Re,
                            'paragraph-P16': Re,
                            'paragraph-P14': Oe,
                            'paragraph-P12': Oe,
                            'paragraph-P10': Oe,
                        }),
                    Ne =
                        (Object.keys(Le),
                        (e) =>
                            e
                                ? ((e) => ke.includes(e))(e)
                                    ? { colorClassName: xe[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    Pe = Fe((e) => {
                        let u = e.text,
                            t = e.variant,
                            i = e.className,
                            s = e.color,
                            r = e.m,
                            o = e.mt,
                            _ = void 0 === o ? r : o,
                            c = e.mr,
                            d = void 0 === c ? r : c,
                            E = e.mb,
                            m = void 0 === E ? r : E,
                            A = e.ml,
                            F = void 0 === A ? r : A,
                            D = e.style,
                            b = e.format,
                            p = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, ye);
                        const g = (0, n.useMemo)(() => {
                                const e = Ne(s),
                                    u = e.colorClassName,
                                    t = e.colorStyle,
                                    n = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, D, n), colorClassName: u };
                            }, [D, s]),
                            C = g.computedStyle,
                            B = g.colorClassName;
                        return a().createElement(
                            he,
                            Te(
                                {
                                    className: l()(xe.base, t && xe[t], B, i),
                                    style: C,
                                    mt: !0 === _ ? Le[t || 'paragraph-P16'].mt : _,
                                    mr: !0 === d ? Le[t || 'paragraph-P16'].mr : d,
                                    mb: !0 === m ? Le[t || 'paragraph-P16'].mb : m,
                                    ml: !0 === F ? Le[t || 'paragraph-P16'].ml : F,
                                },
                                p,
                            ),
                            void 0 !== b ? a().createElement(Se, Te({}, b, { text: u })) : u,
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
                function Ge(e) {
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
                const $e = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: b.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    We = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            a = e.args,
                            i = e.onMouseEnter,
                            s = e.onMouseLeave,
                            r = e.onMouseDown,
                            l = e.onClick,
                            o = e.ignoreShowDelay,
                            _ = void 0 !== o && o,
                            c = e.ignoreMouseClick,
                            d = void 0 !== c && c,
                            E = e.decoratorId,
                            m = void 0 === E ? 0 : E,
                            A = e.isEnabled,
                            F = void 0 === A || A,
                            D = e.targetId,
                            b = void 0 === D ? 0 : D,
                            p = e.onShow,
                            g = e.onHide,
                            C = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, He);
                        const B = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            f = (0, n.useMemo)(() => b || h().resId, [b]),
                            S = (0, n.useCallback)(() => {
                                (B.current.isVisible && B.current.timeoutId) ||
                                    ($e(t, m, { isMouseEvent: !0, on: !0, arguments: Ge(a) }, f),
                                    p && p(),
                                    (B.current.isVisible = !0));
                            }, [t, m, a, f, p]),
                            v = (0, n.useCallback)(() => {
                                if (B.current.isVisible || B.current.timeoutId) {
                                    const e = B.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (B.current.timeoutId = 0)),
                                        $e(t, m, { on: !1 }, f),
                                        B.current.isVisible && g && g(),
                                        (B.current.isVisible = !1);
                                }
                            }, [t, m, f, g]),
                            w = (0, n.useCallback)((e) => {
                                B.current.isVisible &&
                                    ((B.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (B.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(B.current.prevTarget) && v();
                                    }, 200)));
                            }, []);
                        (0, n.useEffect)(() => {
                            const e = B.current.hideTimerId;
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
                            );
                        return F
                            ? (0, n.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((x = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((B.current.timeoutId = window.setTimeout(S, _ ? 100 : 400)),
                                                      i && i(e),
                                                      x && x(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              v(), null == s || s(u), null == e || e(u);
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              !1 === d && v(), null == l || l(u), null == e || e(u);
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              !1 === d && v(), null == r || r(u), null == e || e(u);
                                          })(u.props.onMouseDown),
                                      },
                                      C,
                                  ),
                              )
                            : u;
                        var x;
                    },
                    ze = ['children'];
                function Ue() {
                    return (
                        (Ue =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Ue.apply(this, arguments)
                    );
                }
                const je = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, ze);
                        return a().createElement(
                            We,
                            Ue(
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
                    Xe = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Ve() {
                    return (
                        (Ve =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Ve.apply(this, arguments)
                    );
                }
                const Ke = R.views.common.tooltip_window.simple_tooltip_content,
                    qe = (e) => {
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
                            })(e, Xe);
                        const _ = (0, n.useMemo)(() => {
                            const e = Object.assign({}, l, { body: t, header: i, note: s, alert: r });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [r, t, i, s, l]);
                        return a().createElement(
                            We,
                            Ve(
                                {
                                    contentId:
                                        ((c = null == l ? void 0 : l.hasHtmlContent),
                                        c ? Ke.SimpleTooltipHtmlContent('resId') : Ke.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: _,
                                },
                                o,
                            ),
                            u,
                        );
                        var c;
                    };
                function Ye() {
                    return (
                        (Ye =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Ye.apply(this, arguments)
                    );
                }
                const Ze = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const n = a().createElement('div', { className: t }, e);
                        if (u.header || u.body) return a().createElement(qe, u, n);
                        const i = u.contentId,
                            s = u.args,
                            r = null == s ? void 0 : s.contentId;
                        return i || r
                            ? a().createElement(We, Ye({}, u, { contentId: i || r }), n)
                            : a().createElement(je, u, n);
                    },
                    Qe = 'AbilitySkillSlot_base_d7',
                    Je = 'AbilitySkillSlot_slotText_1e',
                    eu = 'AbilitySkillSlot_icon_d2',
                    uu = ({ skillName: e, tooltipId: u, tooltipHeader: t, tooltipBody: i, className: s }) => {
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
                            Ze,
                            { tooltipArgs: r, className: l()(Qe, s) },
                            a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(Pe, {
                                    className: Je,
                                    text: R.strings.tank_setup.tooltips.abilitySlot.title(),
                                }),
                                a().createElement('div', {
                                    className: eu,
                                    style: {
                                        backgroundImage: `url(${R.images.gui.maps.icons.roleSkills.c_48x48.$dyn(e)})`,
                                    },
                                }),
                            ),
                        );
                    },
                    tu = {
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
                    nu = 'Border_base_f9',
                    au = 'Border_border_83',
                    iu = 'Border_wrapper_17',
                    su = 'Border_active_e8',
                    ru = (0, n.memo)(({ slotOffset: e, slotWidth: u, onAnimationEnd: t }) => {
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
                            { className: nu },
                            a().createElement(
                                'div',
                                { ref: i, className: au, style: l },
                                a().createElement(
                                    'div',
                                    { className: iu },
                                    a().createElement('div', { className: su, style: o }),
                                ),
                            ),
                        );
                    });
                function lu(e) {
                    engine.call('PlaySound', e);
                }
                const ou = {
                    playHighlight() {
                        lu('highlight');
                    },
                    playClick() {
                        lu('play');
                    },
                    playYes() {
                        lu('yes1');
                    },
                };
                let _u;
                !(function (e) {
                    (e[(e.NORMAL = 0)] = 'NORMAL'), (e[(e.WARNING = 1)] = 'WARNING');
                })(_u || (_u = {}));
                const cu = 'SwitchButton_base_23',
                    du = 'SwitchButton_base__active_31',
                    Eu = 'SwitchButton_base__warning_71',
                    mu = 'SwitchButton_buttonBack_ce',
                    Au = 'SwitchButton_buttonBackHovered_45',
                    Fu = 'SwitchButton_base__hovered_b4',
                    Du = 'SwitchButton_buttonGlow_4c',
                    bu = 'SwitchButton_buttonIcon_d3',
                    pu = 'SwitchButton_buttonWarning_3f',
                    gu = 'SwitchButton_number_8a',
                    Cu = ({ id: e, state: u, currentIndex: t, isHovered: i }) => {
                        const s = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url('${R.images.gui.maps.icons.tanksetup.panel.indexes.$dyn(`setup_${e + 1}`)}')`,
                                }),
                                [e],
                            ),
                            r = e === t,
                            o = !r && u === _u.WARNING;
                        return a().createElement(
                            'div',
                            { className: l()(cu, { [du]: r, [Eu]: o, [Fu]: i }) },
                            a().createElement('div', { className: mu }),
                            a().createElement('div', { className: Au }),
                            a().createElement('div', { className: bu }),
                            a().createElement('div', { className: Du }),
                            a().createElement('div', { className: pu }),
                            a().createElement('div', { style: s, className: gu }),
                        );
                    },
                    Bu = 'SwitchEquipment_base_1a',
                    hu = 'SwitchEquipment_base__disabled_73',
                    fu = 'SwitchEquipment_cover_b3',
                    Su = ({ onClick: e, totalCount: u, currentIndex: t, states: i, isDisabled: s, groupId: r }) => {
                        const o = (0, n.useRef)(null),
                            _ = (0, n.useState)(!1),
                            c = _[0],
                            d = _[1],
                            E = (t + 1) % u,
                            m = (0, n.useCallback)(() => {
                                s || e({ groupId: r, currentIndex: E });
                            }, [r, s, E, e]),
                            A = (0, n.useCallback)(() => {
                                s || (d(!0), ou.playHighlight());
                            }, [s]),
                            F = (0, n.useCallback)(() => {
                                s || d(!1);
                            }, [s]),
                            D = l()(Bu, s && hu);
                        return a().createElement(
                            'div',
                            {
                                id: `switch-equipment-group-${r}`,
                                className: D,
                                onClick: m,
                                onMouseEnter: A,
                                onMouseLeave: F,
                                ref: o,
                            },
                            Array.from({ length: u }, (e, u) =>
                                a().createElement(Cu, {
                                    key: u,
                                    id: u,
                                    state: ue(i, u),
                                    currentIndex: t,
                                    isHovered: c,
                                }),
                            ),
                            s && a().createElement('div', { className: fu }),
                        );
                    };
                var vu = t(558),
                    wu = t(934);
                const xu = {
                        base__enterUp: 'GroupAnimation_base__enterUp_b3',
                        animationEnterTop: 'GroupAnimation_animationEnterTop_92',
                        base__enterDown: 'GroupAnimation_base__enterDown_f0',
                        animationEnterDown: 'GroupAnimation_animationEnterDown_73',
                        base__exitUp: 'GroupAnimation_base__exitUp_92',
                        animationExitTop: 'GroupAnimation_animationExitTop_89',
                        base__exitDown: 'GroupAnimation_base__exitDown_67',
                        animationExitDown: 'GroupAnimation_animationExitDown_02',
                    },
                    yu = 'up',
                    Tu = 'down',
                    ku = ({ children: e, index: u, setSetupSwitching: t, disabled: i = !1 }) => {
                        const s = (0, n.useRef)(1 - u),
                            r = (0, n.useMemo)(() => {
                                const e = ((t = u), (n = s.current), t === n ? '' : t > n ? Tu : yu);
                                var t, n;
                                const a = e && _(e);
                                return i ? {} : { enter: xu[`base__enter${a}`], exit: xu[`base__exit${a}`] };
                            }, [u, i]);
                        return (
                            (s.current = u),
                            a().createElement(
                                vu.Z,
                                { className: xu.base },
                                a().createElement(
                                    wu.Z,
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
                let Iu;
                !(function (e) {
                    (e.Hangar = 'hangar'),
                        (e.Setup = 'setup'),
                        (e.Compare = 'compare'),
                        (e.Battle = 'battle'),
                        (e.Respawn = 'respawn'),
                        (e.Prebattle = 'prebattle');
                })(Iu || (Iu = {}));
                const Ru = (e) => e.imageSource === R.images.gui.maps.icons.tanksetup.panel.empty(),
                    Ou = (e) => e === Iu.Battle || e === Iu.Prebattle,
                    Mu = (e) => !Ou(e),
                    Lu = (e) => Ou(e) || e === Iu.Respawn,
                    Nu = 'shells',
                    Pu = 'consumables',
                    Hu = 'battleAbilities',
                    Gu = 'toggleShells',
                    $u = 'toggleCamouflage',
                    Wu = {
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
                    zu = [
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
                class ju extends a().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && lu(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && lu(this.props.soundClick);
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
                            o = e.onMouseEnter,
                            _ = e.onMouseLeave,
                            c = e.onMouseDown,
                            d = e.onMouseUp,
                            E =
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
                                })(e, zu)),
                            m = l()(Wu.base, Wu[`base__${s}`], Wu[`base__${i}`], null == r ? void 0 : r.base),
                            A = l()(Wu.icon, Wu[`icon__${s}`], Wu[`icon__${i}`], null == r ? void 0 : r.icon),
                            F = l()(Wu.glow, null == r ? void 0 : r.glow),
                            D = l()(Wu.caption, Wu[`caption__${s}`], null == r ? void 0 : r.caption),
                            b = l()(Wu.goto, null == r ? void 0 : r.goto);
                        return a().createElement(
                            'div',
                            Uu(
                                {
                                    className: m,
                                    onMouseEnter: this._onMouseEnter(o),
                                    onMouseLeave: this._onMouseLeave(_),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(d),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                E,
                            ),
                            'info' !== s && a().createElement('div', { className: Wu.shine }),
                            a().createElement('div', { className: A }, a().createElement('div', { className: F })),
                            a().createElement('div', { className: D }, u),
                            n && a().createElement('div', { className: b }, n),
                        );
                    }
                }
                ju.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var Xu = t(521);
                const Vu = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function Ku(e = Xu.n.NONE, u = Vu, t = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== Xu.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (B.O.view.isEventHandled()) return;
                                B.O.view.setEventHandled(), u(n), t && n.stopPropagation();
                            }
                        }
                    }, [u, e, t]);
                }
                let qu;
                !(function (e) {
                    (e.None = ''),
                        (e.Tiny = 'tiny'),
                        (e.Small = 'small'),
                        (e.Medium = 'medium'),
                        (e.Large = 'large'),
                        (e.Huge = 'huge');
                })(qu || (qu = {}));
                const Yu = 'setup-content';
                function Zu(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return Qu(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return Qu(e, u);
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
                function Qu(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const Ju = (e, u = []) => {
                        const t = document.getElementById('root');
                        t && (t.style.cursor = e ? 'grabbing' : 'default');
                        for (var n, a = Zu(u); !(n = a()).done; ) {
                            const u = n.value,
                                t = document.getElementById(u);
                            t && (t.style.pointerEvents = e ? 'none' : 'auto');
                        }
                    },
                    et = (e, u, t) => {
                        let n = '',
                            a = 8e3;
                        for (var i, s = Zu(t); !(i = s()).done; ) {
                            const e = i.value,
                                t = Math.abs(e.centerX - u);
                            t < a && ((n = e.id), (a = t));
                        }
                        return n;
                    },
                    ut = (e, u) => {
                        const t = u.find((u) => u.id === e);
                        return t ? t.centerX : 0;
                    };
                let tt, nt;
                !(function (e) {
                    (e.Waiting = 'waiting'), (e.Active = 'active'), (e.InEffect = 'in'), (e.Rollback = 'rollback');
                })(tt || (tt = {})),
                    (function (e) {
                        (e.Ready = 'ready'),
                            (e.DragStart = 'start'),
                            (e.Drag = 'drag'),
                            (e.Drop = 'drop'),
                            (e.DropExit = 'exit');
                    })(nt || (nt = {}));
                const at = (e) => `panel-${e}-section`,
                    it = (e, u) => {
                        const t = at(e),
                            n = u.filter((e) => e !== t);
                        return { selfId: t, blockOnGrabIds: [Yu, ...n] };
                    },
                    st = ({ baseId: e, slotsLength: u, handleSwap: t, setIsExitBlocked: a, syncInitiator: i }) => {
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
                                            const t = et(0, u, a.current);
                                            t !== i.current.prevPotentialDropId &&
                                                ((i.current.prevPotentialDropId = t),
                                                l({ activeDragId: e, potentialDropId: t }));
                                        }
                                    }, []),
                                    c = (0, n.useCallback)((e, u) => {
                                        if (a.current && u) {
                                            const t = i.current,
                                                n = et(0, u, a.current);
                                            (t.dropId = n),
                                                (t.dragId = e),
                                                (t.prevPotentialDropId = ''),
                                                l({ activeDragId: e, potentialDropId: '' }),
                                                n !== e && lu('cons_equipment_swipe');
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
                                                case nt.Ready:
                                                    return m(t, n);
                                                case nt.DragStart:
                                                    return o(t);
                                                case nt.Drag:
                                                    return _(t, n);
                                                case nt.Drop:
                                                    return c(t, n);
                                                case nt.DropExit:
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
                                            return e === t ? ut(n, a.current) : e === n ? ut(t, a.current) : 0;
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
                                            case nt.DragStart:
                                            case nt.Drag:
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
                    rt = {
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
                    lt = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function ot() {
                    return (
                        (ot =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        ot.apply(this, arguments)
                    );
                }
                const _t = (e) => {
                    let u = e.size,
                        t = e.value,
                        n = e.isEmpty,
                        i = e.fadeInAnimation,
                        s = e.hide,
                        r = e.maximumNumber,
                        o = e.className,
                        _ = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                            return a;
                        })(e, lt);
                    const c = n ? null : t,
                        d = 'string' == typeof c;
                    if ((c && !d && c < 0) || 0 === c) return null;
                    const E = c && !d && c > r,
                        m = l()(
                            rt.base,
                            rt[`base__${u}`],
                            i && rt.base__animated,
                            s && rt.base__hidden,
                            !c && rt.base__pattern,
                            n && rt.base__empty,
                            o,
                        );
                    return a().createElement(
                        'div',
                        ot({ className: m }, _),
                        a().createElement('div', { className: rt.bg }),
                        a().createElement('div', { className: rt.pattern }),
                        a().createElement(
                            'div',
                            { className: l()(rt.value, d && rt.value__text) },
                            E ? r : c,
                            E && a().createElement('span', { className: rt.plus }, '+'),
                        ),
                    );
                };
                _t.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
                const ct = 'display',
                    dt = 'visible_change',
                    Et = dt,
                    mt = 'TopLabel_base_7f',
                    At = 'TopLabel_base__ready_00',
                    Ft = 'TopLabel_text_d0',
                    Dt = 'TopLabel_text__hangar_36',
                    bt = 'TopLabel_text__shown_25',
                    pt = 'TopLabel_text__hidden_79',
                    gt = 'TopLabel_text__truncated_29',
                    Ct = (0, n.memo)(({ panelType: e, text: u, parentRef: t, isTruncated: i = !1, show: s = !1 }) => {
                        const r = (0, n.useRef)(!1),
                            o = (0, n.useState)(!1),
                            _ = o[0],
                            c = o[1];
                        (0, n.useEffect)(() => {
                            t || (s && !r.current && (r.current = !0), c(s));
                        }, [s, t]);
                        const d = (0, n.useCallback)(() => {
                                (r.current = !0), c(!0);
                            }, []),
                            E = (0, n.useCallback)(() => {
                                c(!1);
                            }, []);
                        (0, n.useEffect)(() => {
                            const e = t && t.current;
                            if (e)
                                return (
                                    e.addEventListener('mouseenter', d),
                                    e.addEventListener('mouseleave', E),
                                    () => {
                                        e.removeEventListener('mouseenter', d), e.removeEventListener('mouseleave', E);
                                    }
                                );
                        }, [t, d, E]);
                        const m = l()(mt, r.current && At),
                            A = l()(Ft, e !== Iu.Setup && Dt, i && gt, s && _ ? bt : pt);
                        return a().createElement(
                            'div',
                            { className: m },
                            a().createElement('div', { className: A }, u),
                        );
                    }),
                    Bt = 'notUsableSection',
                    ht = 'Section_base_8a',
                    ft = 'Section_base__hidden_f0',
                    St = 'Section_label_73',
                    vt = 'Section_counter_8a',
                    wt = 'Section_configLabel_c9',
                    xt = 'Section_configText_eb',
                    yt = 'Section_configVehicleIcon_20';
                let Tt;
                !(function (e) {
                    (e[(e.NonSet = 0)] = 'NonSet'),
                        (e[(e.Debug = 10)] = 'Debug'),
                        (e[(e.Info = 20)] = 'Info'),
                        (e[(e.Warning = 30)] = 'Warning');
                })(Tt || (Tt = {}));
                const kt = 'tooltip_watched';
                let It;
                !(function (e) {
                    (e.Click = 'click'), (e.KeyDown = 'keydown');
                })(It || (It = {}));
                let Rt, Ot, Mt;
                !(function (e) {
                    (e.HangarView = 'hangar'),
                        (e.SetupView = 'setup_view'),
                        (e.ProgressView = 'progress_view'),
                        (e.RewardsView = 'rewards_view'),
                        (e.RewardsSelectionView = 'rewards_selection_view'),
                        (e.SkillsView = 'skills_view'),
                        (e.AwardsView = 'awards_view'),
                        (e.ContainerView = 'container_view');
                })(Rt || (Rt = {})),
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
                    })(Ot || (Ot = {})),
                    (function (e) {
                        (e.Click = 'click'), (e.Close = 'close');
                    })(Mt || (Mt = {}));
                const Lt = 'metrics',
                    Nt = () => Date.now(),
                    Pt = ({ partnerID: e, item: u, parentScreen: t, itemState: n, info: a }) => ({
                        item: u,
                        partnerID: e || null,
                        parent_screen: t || null,
                        item_state: n || null,
                        additional_info: a || null,
                    }),
                    Ht = (e, u) => {
                        const t = (0, n.useCallback)(
                            (t, n = Tt.Info, a) => {
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
                    Gt = (e, u) => {
                        const t = Ht(e, u),
                            a = (0, n.useRef)(new Map()),
                            i = (0, n.useRef)(new Map()),
                            s = (0, n.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const u = a.current.get(e);
                                    (void 0 !== u && u > 0) || a.current.set(e, Nt());
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
                                        i.current.set(e, Nt());
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
                                    const n = Nt() - t;
                                    a.current.set(e, u + n);
                                },
                                [a, i],
                            ),
                            _ = (0, n.useCallback)(
                                (e, u = 0, n, s) => {
                                    const r = a.current.get(e);
                                    if (void 0 === r) return;
                                    void 0 !== i.current.get(e) && o(e), a.current.delete(e);
                                    const l = (Nt() - r) / 1e3;
                                    l <= u ||
                                        ((s = ((e, u) => (void 0 === e && (e = {}), (e.timeSpent = u), e))(s, l)),
                                        t(e, n, s));
                                },
                                [a, i, t, o],
                            );
                        return [(e) => s(e), (e, u, t, n) => _(e, u, t, n), () => r(), (e) => l(e), (e) => o(e)];
                    },
                    $t = (e) => {
                        const u = Gt(e, Lt),
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
                                    a(u, t, n, Pt(e));
                                },
                                [a],
                            );
                        return [(e) => t(e), (e) => l(e), () => i(), (e) => s(e), (e) => r(e)];
                    },
                    Wt = a().memo(function ({ className: e, children: u }) {
                        const t = ((e, u, t, a) => {
                                const i = $t('epic_battle'),
                                    s = i[0],
                                    r = i[1];
                                return [
                                    (0, n.useCallback)(() => s(kt), [s]),
                                    (0, n.useCallback)(
                                        () =>
                                            r({
                                                action: kt,
                                                timeLimit: 2,
                                                item: e,
                                                parentScreen: u,
                                                itemState: t,
                                                info: a,
                                            }),
                                        [r, e, u, t, a],
                                    ),
                                ];
                            })(Ot.SkillOrderTooltip, Rt.SetupView),
                            i = t[0],
                            s = t[1];
                        return a().createElement(
                            We,
                            {
                                contentId: R.views.frontline.lobby.tooltips.SkillOrderTooltip('resId'),
                                onMouseEnter: i,
                                onMouseLeave: s,
                            },
                            a().createElement('div', { className: e }, u),
                        );
                    }),
                    zt = 'SlotDivider_base_60',
                    Ut = () => a().createElement('div', { className: zt }),
                    jt = ({ wrapper: e, children: u, when: t, withProps: n }) =>
                        t ? a().createElement(e, n, u) : a().createElement(a().Fragment, null, u),
                    Xt = {
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
                    Vt = ({
                        activeDragId: e,
                        slotType: u,
                        isSelected: t,
                        isBorderActive: n,
                        children: i,
                        panelType: s,
                        isDisabled: r,
                        isPotentialDrop: o,
                        onClick: _,
                    }) => {
                        const c = l()(
                            Xt.base,
                            !e && Xt[`base__${s}`],
                            u && Xt[`base__${u}`],
                            t && !o && !n && Xt.base__selected,
                            o && Xt['base__dragIn' + (t ? 'Active' : '')],
                            r && Xt.base__disabled,
                        );
                        return a().createElement('div', { className: c, onClick: _ }, i);
                    },
                    Kt = {
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
                    qt = a().memo(({ isTemporary: e, overlayType: u, overlaySource: t }) => {
                        const i = l()(Kt.base, e && Kt.base__fitting),
                            s = l()(Kt.icon, Kt[`icon__${u}`]),
                            r = (0, n.useMemo)(() => ({ backgroundImage: `url(${t})` }), [t]);
                        return a().createElement(
                            'div',
                            { className: i },
                            a().createElement('div', { className: s, style: r }),
                        );
                    }),
                    Yt = {
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
                    Zt = ({ level: e }) => {
                        const u = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url(${R.images.gui.maps.icons.levels.$dyn(`tank_level_${e}`)})`,
                                }),
                                [e],
                            ),
                            t = l()(Yt.base, Yt[`base__level${e}`]);
                        return a().createElement('div', { style: u, className: t });
                    },
                    Qt = 'Inside_image_e5',
                    Jt = 'Inside_image__fitting_11',
                    en = 'Inside_warning_e4',
                    un = 'Inside_change_5a',
                    tn = ({
                        level: e,
                        overlayType: u,
                        isTemporary: t,
                        withAttention: i,
                        imageSource: s,
                        isIncompatible: r,
                    }) => {
                        const o = (0, n.useMemo)(() => {
                                const t = 'equipmentModernized' === u ? `${u}_${e}_overlay` : `${u}_overlay`;
                                return R.images.gui.maps.icons.quests.bonuses.small.$dyn(t);
                            }, [u, e]),
                            _ = (0, n.useMemo)(() => ({ backgroundImage: `url(${s})` }), [s]),
                            c = !o && Boolean(u) && e;
                        return a().createElement(
                            'div',
                            null,
                            c && a().createElement(Zt, { level: e }),
                            a().createElement('div', { className: l()(Qt, (t || i) && Jt), style: _ }),
                            i && a().createElement('div', { className: en }),
                            r && a().createElement('div', { className: un }),
                            o && a().createElement(qt, { isTemporary: t, overlaySource: o, overlayType: u }),
                        );
                    },
                    nn = 'Grabber_base_cf',
                    an = 'Grabber_base__enabled_b0',
                    sn = 'Grabber_base__waitingUpdate_1d',
                    rn = 'Grabber_base__updating_f1',
                    ln = 'Grabber_base__active_71',
                    on = 'Grabber_base__exit_1f',
                    _n = 'Grabber_base__showAnimation_d9',
                    cn = a().memo(
                        ({
                            children: e,
                            id: u,
                            containerRef: t,
                            isEnabled: i = !0,
                            onClick: s,
                            forceCenterX: r,
                            isUpdateAvailable: o,
                            handleAction: _,
                            blockOnGrabIds: c = [],
                        }) => {
                            const d = ce().mediaSize,
                                E = (0, n.useRef)({
                                    actualX: 0,
                                    clickCenterOffset: 0,
                                    dropCenterX: 0,
                                    grabActivationPassed: !1,
                                    isDragActive: !1,
                                    id: u,
                                }),
                                m = (0, n.useRef)({
                                    isValid: !1,
                                    startX: 0,
                                    startCenterX: 0,
                                    minXRestriction: 0,
                                    maxXRestriction: 8e3,
                                }),
                                A = (0, n.useRef)(null),
                                F = (0, n.useState)(!1),
                                D = F[0],
                                b = F[1],
                                p = (0, n.useState)(0),
                                g = p[0],
                                C = p[1],
                                h = 0 !== r && i;
                            (0, n.useEffect)(() => {
                                if (((m.current.isValid = !1), u))
                                    return P(() => {
                                        const e = A.current,
                                            n = t.current;
                                        if (n && e) {
                                            const t = e.getBoundingClientRect(),
                                                a = n.getBoundingClientRect(),
                                                i = t.left + 0.5 * t.width;
                                            (m.current = {
                                                isValid: !0,
                                                minXRestriction: a.left,
                                                maxXRestriction: a.left + a.width,
                                                startX: t.left,
                                                startCenterX: i,
                                            }),
                                                _(nt.Ready, { dragId: u, currentCenterX: i });
                                        }
                                    });
                            }, [d]);
                            const f = (0, n.useCallback)(
                                    (e) => {
                                        (E.current.isDragActive = e),
                                            b(e),
                                            E.current.grabActivationPassed && !e && Ju(!1, c);
                                    },
                                    [c],
                                ),
                                S = (0, n.useCallback)(() => {
                                    _(nt.DragStart, { dragId: E.current.id }),
                                        (E.current.grabActivationPassed = !0),
                                        Ju(!0, c);
                                }, [_, c]),
                                v = (0, n.useCallback)((e) => {
                                    const u = E.current,
                                        t = m.current,
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
                                w = (0, n.useCallback)(
                                    (e) => {
                                        const u = E.current,
                                            t = m.current;
                                        0 === e.button &&
                                            !u.isDragActive &&
                                            t.isValid &&
                                            i &&
                                            !o &&
                                            A.current &&
                                            ((u.actualX = e.clientX),
                                            (u.clickCenterOffset = u.actualX - t.startCenterX),
                                            f(!0));
                                    },
                                    [i, o, f],
                                ),
                                x = (0, n.useCallback)(() => {
                                    !s || (i && m.current.isValid) || s();
                                }, [i, s]),
                                y = (0, n.useCallback)(
                                    (e) => {
                                        const u = E.current;
                                        e.target === A.current &&
                                            u.grabActivationPassed &&
                                            ((u.grabActivationPassed = !1),
                                            setTimeout(() => _(nt.DropExit, { dragId: u.id })));
                                    },
                                    [_],
                                );
                            Ku(Xu.n.ESCAPE, () => f(!1)),
                                (0, n.useEffect)(() => {
                                    i && r && C(0);
                                }, [r, i]);
                            const T = !D && E.current.grabActivationPassed;
                            (0, n.useEffect)(() => {
                                E.current.id = u;
                            }, [u]),
                                (0, n.useEffect)(() => {
                                    T && _(nt.Drop, { dragId: E.current.id, currentCenterX: E.current.dropCenterX });
                                }, [T, _]),
                                (0, n.useEffect)(() => {
                                    const e = A.current;
                                    if (h && e)
                                        return (
                                            e.addEventListener('transitionend', y),
                                            () => {
                                                e.removeEventListener('transitionend', y);
                                            }
                                        );
                                }, [h, y]),
                                (0, n.useEffect)(() => {
                                    if (i && D && E.current.id) {
                                        const e = B.O.client.events.mouse.up(([e, u]) => {
                                                if ('outside' === u) return f(!1);
                                                const t = E.current,
                                                    n = e.clientX;
                                                n === t.actualX && 0 === e.button && !E.current.grabActivationPassed
                                                    ? s && s()
                                                    : E.current.grabActivationPassed && v(n),
                                                    E.current.isDragActive && f(!1);
                                            }),
                                            u = B.O.client.events.mouse.move(([e]) => {
                                                const u = E.current;
                                                if ((0 === e.clientX && 0 === e.clientY) || !u.isDragActive) return;
                                                const t = e.clientX,
                                                    n = u.grabActivationPassed;
                                                !n && S(),
                                                    t !== u.actualX &&
                                                        ((u.actualX = t),
                                                        v(t),
                                                        n &&
                                                            _(nt.Drag, { dragId: u.id, currentCenterX: u.dropCenterX }),
                                                        C(u.dropCenterX - m.current.startCenterX));
                                            });
                                        return () => {
                                            u(), e();
                                        };
                                    }
                                }, [S, _, D, i, s, f, v]);
                            const k = (0, n.useMemo)(
                                    () => (r ? { left: r - m.current.startCenterX } : { left: g }),
                                    [g, r],
                                ),
                                I = i ? l()(nn, an, D && ln, T && on, h && sn, r && rn) : l()(nn, r && _n);
                            return a().createElement(
                                'div',
                                { id: u, ref: A, onClick: x, onMouseDown: w, className: I, style: k },
                                e,
                            );
                        },
                    );
                let dn;
                !(function (e) {
                    (e[(e.Normal = 0)] = 'Normal'), (e[(e.Current = 1)] = 'Current'), (e[(e.Next = 2)] = 'Next');
                })(dn || (dn = {}));
                const En = 'KeyLabel_base_ec',
                    mn = 'KeyLabel_base__current_c2',
                    An = 'KeyLabel_base__next_fa',
                    Fn = ({ text: e, show: u, panelType: t, shellState: n }) => {
                        if (!e) return null;
                        e = 'KEY_NONE' === e ? '..' : R.strings.readable_key_names.$dyn(e);
                        const i = l()(En, n === dn.Current && mn, n === dn.Next && An);
                        return a().createElement(
                            'div',
                            { className: i },
                            a().createElement(Ct, { isTruncated: !0, text: e, show: u, panelType: t }),
                        );
                    },
                    Dn = ({ children: e, slotType: u, slotId: t, isEnabled: i = !0 }) => {
                        const s = (0, n.useMemo)(() => ({ slotType: u, slotId: t }), [u, t]);
                        return a().createElement(je, { isEnabled: i, args: s }, a().createElement('div', null, e));
                    },
                    bn = 'Close_base_f3',
                    pn = 'Close_base__invisible_0e',
                    gn = 'Close_base__shown_a2',
                    Cn = 'Close_base__hover_6d',
                    Bn = 'Close_base__down_2b',
                    hn = (0, n.memo)(
                        ({ id: e, show: u = !0, onClick: t, soundHover: i = 'highlight', soundClick: s = 'play' }) => {
                            const r = (0, n.useState)(!1),
                                o = r[0],
                                _ = r[1],
                                c = (0, n.useState)(!1),
                                d = c[0],
                                E = c[1],
                                m = (0, n.useState)(!1),
                                A = m[0],
                                F = m[1],
                                D = (0, n.useCallback)((e) => {
                                    e.stopPropagation();
                                }, []),
                                b = (0, n.useCallback)(() => {
                                    E(!0), i && lu(i);
                                }, [i]),
                                p = (0, n.useCallback)(() => {
                                    _(!1), E(!1);
                                }, []),
                                g = (0, n.useCallback)(
                                    (e) => {
                                        u && 0 === e.button && (_(!0), s && lu(s));
                                    },
                                    [u, s],
                                ),
                                C = (0, n.useCallback)(
                                    (e) => {
                                        u && 0 === e.button && t && t();
                                    },
                                    [u, t],
                                );
                            (0, n.useEffect)(
                                () =>
                                    P(() => {
                                        F(!0);
                                    }),
                                [],
                            );
                            const B = l()(bn, !A && pn, A && u && gn, o && Bn, d && Cn);
                            return a().createElement('div', {
                                id: e,
                                onMouseOver: b,
                                onMouseLeave: p,
                                onMouseDown: g,
                                onMouseUp: C,
                                className: B,
                                onClick: D,
                            });
                        },
                    ),
                    fn = 'Slot_base_3a',
                    Sn = 'Slot_label_e6',
                    vn = 'Slot_close_bb',
                    wn = 'Slot_disabled_5d',
                    xn = 'Slot_shadow_a7',
                    yn = 'Slot_category_2c';
                let Tn;
                !(function (e) {
                    (e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH');
                })(Tn || (Tn = {}));
                const kn = ({
                        children: e,
                        contentID: u,
                        decoratorID: t = 0,
                        targetId: a = 0,
                        args: i,
                        isEnabled: s = !0,
                        onMouseDown: r,
                    }) => {
                        const l = (0, n.useCallback)(() => {
                                (0, b.c9)(b.B0.CONTEXT_MENU, {
                                    contentID: u,
                                    decoratorID: t,
                                    targetID: a,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: i,
                                }),
                                    ou.playYes();
                            }, [i, u, t, a]),
                            o = (0, n.useCallback)(() => {
                                (0, b.c9)(b.B0.CONTEXT_MENU, {
                                    contentID: u,
                                    decoratorID: t,
                                    targetID: a,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [u, t, a]),
                            _ = (0, n.useCallback)(
                                (e) => {
                                    r && r(e), ((e) => e.button === Tn.RIGHT)(e) && l();
                                },
                                [r, l],
                            );
                        return (
                            (0, n.useEffect)(() => {
                                !1 === s && o();
                            }, [s, o]),
                            s ? (0, n.cloneElement)(e, { onMouseDown: _ }) : e
                        );
                    },
                    In = ['children'];
                function Rn() {
                    return (
                        (Rn =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Rn.apply(this, arguments)
                    );
                }
                const On = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, In);
                        return a().createElement(
                            kn,
                            Rn({}, t, { contentID: R.views.common.BackportContextMenu('resId') }),
                            u,
                        );
                    },
                    Mn = 'select',
                    Ln = 'undo',
                    Nn = 'swap',
                    Pn = 'demount',
                    Hn = 'demount_from_setups',
                    Gn = 'destroy',
                    $n = 1600;
                let Wn;
                !(function (e) {
                    (e.RIGHT = 'Right'),
                        (e.LEFT = 'Left'),
                        (e.SWAP = 'Swap'),
                        (e.FITTING = 'Fitting'),
                        (e.FITTING_REMOVE = 'FittingRemove'),
                        (e.FADE = 'Fade'),
                        (e.DESTROY = 'Destroy'),
                        (e.DEMOUNT = 'Demount');
                })(Wn || (Wn = {}));
                const zn = { [Nn]: 200, [Ln]: 250, [Mn]: 250, [Gn]: 1400, [Pn]: $n, [Hn]: $n, demount_from_setup: $n },
                    Un = 'BackEffects_shine_f6',
                    jn = 'BackEffects_sparks_55',
                    Xn = 'BackEffects_nut_79',
                    Vn = 'BackEffects_wrench_5a',
                    Kn = { enterActive: 'BackEffects_shine__enterActive_54' },
                    qn = { enterActive: 'BackEffects_sparks__enterActive_79' },
                    Yn = { enterActive: 'BackEffects_nut__enterActive_b8' },
                    Zn = { enterActive: 'BackEffects_wrench__enterActive_ca' },
                    Qn = [Pn, Hn],
                    Jn = a().memo(({ in: e, actionType: u }) =>
                        a().createElement(
                            a().Fragment,
                            null,
                            a().createElement(
                                wu.Z,
                                { in: e, timeout: 200, classNames: Kn },
                                a().createElement('div', { className: Un }),
                            ),
                            a().createElement(
                                wu.Z,
                                { in: e, timeout: 400, classNames: qn },
                                a().createElement('div', { className: jn }),
                            ),
                            Qn.includes(u) &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement(
                                        wu.Z,
                                        { in: e, timeout: 600, classNames: Yn },
                                        a().createElement('div', { className: Xn }),
                                    ),
                                    a().createElement(
                                        wu.Z,
                                        { in: e, timeout: 600, classNames: Zn },
                                        a().createElement('div', { className: Vn }),
                                    ),
                                ),
                        ),
                    ),
                    ea = 'ColorMask_base_60',
                    ua = 'ColorMask_base__enterActive_62',
                    ta = ({ in: e, maskImage: u }) => {
                        const t = (0, n.useMemo)(() => ({ enterActive: ua }), []),
                            i = (0, n.useMemo)(() => ({ maskImage: `url(${u})` }), [u]);
                        return a().createElement(
                            wu.Z,
                            { in: e, timeout: 1200, classNames: t },
                            a().createElement('div', { className: ea, style: i }),
                        );
                    },
                    na = {
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
                    aa = { enter: na.base__enter, exit: na.base__enter },
                    ia = a().memo(
                        ({
                            children: e,
                            slotIndex: u,
                            uniqueKey: t,
                            slotType: i,
                            isEmpty: s = !1,
                            imageSource: r,
                            itemInstalledSetupIdx: l,
                        }) => {
                            const o = M('model.lastSlotAction'),
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
                                x = (0, n.useState)(l),
                                y = x[0],
                                T = x[1],
                                k = (0, n.useRef)(),
                                I = (0, n.useRef)(),
                                R = (A === t || A === v) && y !== l && [Gn, Pn, Hn].includes(m),
                                O = -1 === d || -1 === E,
                                L = i ? `base${i[0].toUpperCase() + i.slice(1)}` : 'base',
                                N = zn[m] || 0;
                            (0, n.useEffect)(
                                () => () => {
                                    k.current && clearTimeout(k.current), I.current && clearTimeout(I.current);
                                },
                                [],
                            ),
                                (0, n.useEffect)(() => {
                                    s || f(r);
                                }, [s, r]);
                            const P = (0, n.useCallback)(
                                    (e) => {
                                        const t = Object.assign({}, aa);
                                        switch (m) {
                                            case Nn: {
                                                const e = _ === u ? Wn.RIGHT : Wn.LEFT,
                                                    n = c - _ != 1 ? Wn.SWAP : '';
                                                (t.enterDone = na[`${L}__enter${e}${n}`]),
                                                    (t.exit = na[`${L}__exit${e}${n}`]),
                                                    O &&
                                                        (s
                                                            ? (t.enterDone = na[`${L}__enter${Wn.FADE}`])
                                                            : (t.exit = na[`${L}__exit${Wn.FADE}`]));
                                                break;
                                            }
                                            case Gn:
                                                (t.enterDone = na[`${L}__enter${Wn.DESTROY}`]),
                                                    (t.exit = na[`${L}__exit${Wn.DESTROY}`]),
                                                    (k.current = setTimeout(() => b(!0), 900)),
                                                    C(!0);
                                                break;
                                            case Hn:
                                            case Pn:
                                                (t.enter = na[`${L}__enter${Wn.DEMOUNT}${Wn.FADE}`]),
                                                    (t.exit = na[`${L}__exit${Wn.DEMOUNT}`]),
                                                    (k.current = setTimeout(() => b(!0), 900));
                                                break;
                                            case Mn:
                                            case Ln:
                                                if (i !== Nu) {
                                                    const e = m === Mn ? Wn.FITTING : Wn.FITTING_REMOVE;
                                                    (t.enter = na[`${L}__enter${e}`]),
                                                        (t.exit = na[`${L}__exit${e}`]),
                                                        (t.exitActive = na[`${L}__exitActive${Wn.FITTING}`]);
                                                } else
                                                    (t.enterDone = na[`${L}__enter${Wn.FADE}`]),
                                                        (t.exit = na[`${L}__exit${Wn.FADE}`]);
                                                break;
                                            default:
                                                return e;
                                        }
                                        return a().cloneElement(e, { classNames: t, timeout: N });
                                    },
                                    [m, i, L, N, _, u, c, s, O],
                                ),
                                H = (0, n.useCallback)(
                                    (e) => {
                                        I.current = setTimeout(() => {
                                            (e.className = ''), e.classList.add(na.base), w(t), T(l);
                                        }, N);
                                    },
                                    [N, t, l],
                                ),
                                G = (0, n.useCallback)(() => {
                                    b(!1), C(!1);
                                }, []);
                            return a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(
                                    vu.Z,
                                    { component: null, childFactory: P },
                                    a().createElement(
                                        wu.Z,
                                        {
                                            key: t,
                                            timeout: N,
                                            classNames: aa,
                                            onEntered: H,
                                            onExiting: G,
                                            unmountOnExit: !0,
                                        },
                                        a().createElement('div', { className: na.base }, e),
                                    ),
                                ),
                                R &&
                                    a().createElement(
                                        a().Fragment,
                                        null,
                                        a().createElement(Jn, { in: D, actionType: m }),
                                        a().createElement(ta, { in: g, maskImage: h }),
                                    ),
                            );
                        },
                    ),
                    sa = a().memo(
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
                                ia,
                                {
                                    uniqueKey: e,
                                    isEmpty: o,
                                    slotIndex: _,
                                    slotType: c,
                                    imageSource: l,
                                    itemInstalledSetupIdx: t,
                                },
                                a().createElement(
                                    On,
                                    { isEnabled: !(m || E || r || o || d), args: F },
                                    a().createElement('div', null, A),
                                ),
                            );
                        },
                    ),
                    ra = ({
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
                        grabberId: v,
                        containerRef: w,
                        activeDragId: x,
                        handleGrabberAction: y,
                        forceLeftUpdate: T,
                        potentialDropId: k,
                        blockOnGrabIds: I,
                        categoryImgSource: R,
                        contextMenuDisabled: O,
                    }) => {
                        const M = B === Iu.Setup,
                            L = !Lu(B),
                            N = B === Iu.Compare,
                            H = M && F && L,
                            G = (0, n.useRef)(!1),
                            $ = (0, n.useRef)(null),
                            W = -1 === u;
                        (0, n.useEffect)(() => {
                            if (!G.current && F && m)
                                return P(() => {
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
                            })((0, n.useCallback)(() => (!m && L && !A && p(t, e), 500), [e, L, m, A, p, t])),
                            U = (0, n.useCallback)(() => {
                                h || z('');
                            }, [z, h]),
                            j = (0, n.useCallback)(() => {
                                !m && !x && !h && ou.playHighlight();
                            }, [m, x, h]);
                        (0, n.useEffect)(() => {
                            k && ou.playHighlight();
                        }, [k]);
                        const X = (0, n.useCallback)(() => {
                                null == C || C(e, t);
                            }, [e, C, t]),
                            V = M && !s,
                            K = Boolean(v && k === v),
                            q = v && (H || N),
                            Y = `${t}-slot-${e}`,
                            Z = R && R.length > 0,
                            Q = Z ? { backgroundImage: `url(${R})` } : {},
                            J = {
                                id: v,
                                containerRef: w,
                                isEnabled: !W,
                                onClick: U,
                                isUpdateAvailable: Boolean(x),
                                handleAction: y,
                                forceCenterX: T,
                                blockOnGrabIds: I,
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
                                contextMenuDisabled: O,
                                isSetupSwitching: A,
                            };
                        return a().createElement(
                            'div',
                            { className: fn, onMouseEnter: j, id: Y },
                            (F || N) &&
                                !s &&
                                a().createElement(
                                    'div',
                                    { className: vn },
                                    a().createElement(hn, { id: `close-${Y}`, show: !x, onClick: X }),
                                ),
                            a().createElement(
                                Dn,
                                { slotType: t, slotId: e, isEnabled: !x && Mu(B) },
                                a().createElement(
                                    'div',
                                    { ref: $ },
                                    a().createElement(
                                        Vt,
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
                                        L &&
                                            a().createElement(
                                                'div',
                                                { className: Sn },
                                                a().createElement(Fn, { text: _, show: Boolean(F), panelType: B }),
                                            ),
                                        a().createElement(
                                            jt,
                                            { when: Boolean(q), wrapper: cn, withProps: J },
                                            a().createElement(
                                                jt,
                                                { when: L, wrapper: sa, withProps: ee },
                                                a().createElement(tn, {
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
                                                a().createElement('span', { className: xn }),
                                                a().createElement('span', { className: yn, style: Q }),
                                            ),
                                        h && a().createElement('div', { className: wn }),
                                    ),
                                ),
                            ),
                        );
                    },
                    la = 'BattleAbilitySlot_base_74',
                    oa = 'BattleAbilitySlot_rank_01',
                    _a = ['rank'];
                const ca = (0, n.memo)((e) => {
                        let u = e.rank,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, _a);
                        const i = (0, n.useMemo)(() => ({ backgroundImage: `url(${u})` }), [u]),
                            s = l()(la);
                        return a().createElement(
                            'div',
                            { className: s },
                            a().createElement(ra, t),
                            u && a().createElement('div', { className: oa, style: i }),
                        );
                    }),
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
                let Ea, ma;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(Ea || (Ea = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
                    })(ma || (ma = {}));
                const Aa = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: i,
                    disabled: s,
                    mixClass: r,
                    soundHover: o,
                    soundClick: _,
                    onMouseEnter: c,
                    onMouseMove: d,
                    onMouseDown: E,
                    onMouseUp: m,
                    onMouseLeave: A,
                    onClick: F,
                }) => {
                    const D = (0, n.useRef)(null),
                        b = (0, n.useState)(t),
                        p = b[0],
                        g = b[1],
                        C = (0, n.useState)(!1),
                        B = C[0],
                        h = C[1],
                        f = (0, n.useState)(!1),
                        S = f[0],
                        v = f[1],
                        w = (0, n.useCallback)(() => {
                            s || (D.current && (D.current.focus(), g(!0)));
                        }, [s]),
                        x = (0, n.useCallback)(
                            (e) => {
                                p && null !== D.current && !D.current.contains(e.target) && g(!1);
                            },
                            [p],
                        ),
                        y = (0, n.useCallback)(
                            (e) => {
                                s || (F && F(e));
                            },
                            [s, F],
                        ),
                        T = (0, n.useCallback)(
                            (e) => {
                                s || (null !== o && lu(o), c && c(e), v(!0));
                            },
                            [s, o, c],
                        ),
                        k = (0, n.useCallback)(
                            (e) => {
                                d && d(e);
                            },
                            [d],
                        ),
                        I = (0, n.useCallback)(
                            (e) => {
                                s || (m && m(e), h(!1));
                            },
                            [s, m],
                        ),
                        O = (0, n.useCallback)(
                            (e) => {
                                s || (null !== _ && lu(_), E && E(e), t && w(), h(!0));
                            },
                            [s, _, E, w, t],
                        ),
                        M = (0, n.useCallback)(
                            (e) => {
                                s || (A && A(e), h(!1));
                            },
                            [s, A],
                        ),
                        L = l()(
                            da.base,
                            da[`base__${i}`],
                            {
                                [da.base__disabled]: s,
                                [da[`base__${u}`]]: u,
                                [da.base__focus]: p,
                                [da.base__highlightActive]: B,
                                [da.base__firstHover]: S,
                            },
                            r,
                        ),
                        N = l()(da.state, da.state__default);
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
                            g(t);
                        }, [t]),
                        a().createElement(
                            'div',
                            {
                                ref: D,
                                className: L,
                                onMouseEnter: T,
                                onMouseMove: k,
                                onMouseUp: I,
                                onMouseDown: O,
                                onMouseLeave: M,
                                onClick: y,
                            },
                            i !== Ea.ghost &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement('div', { className: da.back }),
                                    a().createElement('span', { className: da.texture }),
                                ),
                            a().createElement(
                                'span',
                                { className: N },
                                a().createElement('span', { className: da.stateDisabled }),
                                a().createElement('span', { className: da.stateHighlightHover }),
                                a().createElement('span', { className: da.stateHighlightActive }),
                            ),
                            a().createElement(
                                'span',
                                { className: da.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                Aa.defaultProps = { type: Ea.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const Fa = (0, n.memo)(Aa),
                    Da = {
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
                    ba = ({
                        name: e,
                        isCorrect: u,
                        isSpecializationActive: t = !0,
                        isDynamic: i,
                        mediaSize: s,
                        isClickable: r,
                        onSpecializationClick: o,
                        index: _,
                    }) => {
                        const c = s !== qu.None,
                            d = (0, n.useCallback)(() => {
                                r && t && o && o(_);
                            }, [_, r, t, o]),
                            E = (0, n.useMemo)(() => {
                                let t = '';
                                c && (t = (s === qu.Large || s === qu.Huge ? qu.Large : qu.Medium) + '_');
                                const n = `${t}${e}_${u ? 'on' : 'off'}`,
                                    a = R.images.gui.maps.icons.specialization.$dyn(n);
                                return a && { backgroundImage: `url(${a})` };
                            }, [e, u, s, c]),
                            m = (0, n.useMemo)(
                                () => ({ spec: e, isDyn: i, isClickable: r, tooltip: 'hangarSlotSpec' }),
                                [e, i, r],
                            );
                        if (!E) return null;
                        const A = l()(
                                `specialization-${e}`,
                                Da.base,
                                c && Da[`base__${s}`],
                                t && Da.base__setup,
                                u && Da.base__correct,
                            ),
                            F = l()(Da.icon, c && Da[`icon__${s}`]),
                            D = c ? '' : Da.specializationWrapper,
                            b = a().createElement(
                                'div',
                                { key: e, className: A },
                                a().createElement('div', { className: Da.glow }),
                                a().createElement('div', { className: F, style: E }),
                            );
                        return a().createElement(
                            je,
                            { args: m },
                            r && t
                                ? a().createElement(
                                      Fa,
                                      { size: ma.small, type: Ea.ghost, mixClass: Da.specializationButton, onClick: d },
                                      b,
                                  )
                                : a().createElement('div', { className: D }, b),
                        );
                    },
                    pa = 'Specializations_base_ab';
                function ga() {
                    return (
                        (ga =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        ga.apply(this, arguments)
                    );
                }
                const Ca = ({
                        specializations: e,
                        isSpecializationActive: u = !0,
                        isDynamic: t,
                        mediaSize: n = qu.None,
                        activeSpecsMask: i,
                        onSpecializationClick: s,
                    }) =>
                        e.length
                            ? a().createElement(
                                  'div',
                                  { className: pa, key: i },
                                  te(e, (e, i) =>
                                      a().createElement(
                                          ba,
                                          ga({ index: i, key: e.name }, e, {
                                              isSpecializationActive: u,
                                              isDynamic: t,
                                              mediaSize: n,
                                              onSpecializationClick: s,
                                          }),
                                      ),
                                  ),
                              )
                            : null,
                    Ba = 'OptDeviceSlot_base_14',
                    ha = 'OptDeviceSlot_specializations_c3',
                    fa = ['specializations', 'activeSpecsMask', 'isChangeSetupIndex', 'isDynamic'];
                const Sa = (e) => {
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
                            })(e, fa);
                        const r = I('model.ammunitionPanel', k.None).onSpecializationSelect,
                            o = s.panelType === Iu.Setup || s.panelType === Iu.Compare,
                            _ = !Lu(s.panelType);
                        return a().createElement(
                            'div',
                            { className: l()(Ba, u.length && !i && !n && 'specializationsSlot') },
                            _ &&
                                a().createElement(
                                    'div',
                                    { className: ha },
                                    a().createElement(Ca, {
                                        specializations: u,
                                        isDynamic: i,
                                        activeSpecsMask: t,
                                        isSpecializationActive: o,
                                        onSpecializationClick: (e) => {
                                            r({ slotId: s.id, specializationIndex: e });
                                        },
                                    }),
                                ),
                            a().createElement(ra, s),
                        );
                    },
                    va = {
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
                    wa = ({ id: e, isSelected: u, isLocked: t, onSlotSelected: i, panelType: s }) => {
                        const r = $u,
                            o = (0, n.useCallback)(() => {
                                i(r, e);
                            }, [e, i, r]),
                            _ = l()(va.base, va[`base__${s}`], t && va.base__disabled, u && va.base__toggle),
                            c = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: 'url(R.images.gui.maps.icons.quests.bonuses.small.camouflage)',
                                }),
                                [],
                            ),
                            d = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url(R.images.gui.maps.icons.tanksetup.shells.icon_selected_${u ? 'on' : 'off'})`,
                                }),
                                [u],
                            ),
                            E = `toggle-camouflage-slot-${e}`;
                        return a().createElement(
                            Dn,
                            { slotType: r, slotId: e },
                            a().createElement(
                                'div',
                                { id: E, className: _, onClick: o, onMouseEnter: ou.playHighlight },
                                u && a().createElement('div', { className: va.glow }),
                                a().createElement('div', { className: va.image, style: c }),
                                a().createElement('div', { className: va.toggle, style: d }),
                            ),
                        );
                    },
                    xa = ['value', 'sectionType'];
                function ya() {
                    return (
                        (ya =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        ya.apply(this, arguments)
                    );
                }
                const Ta = (e) => {
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
                            })(e, xa);
                        switch (t) {
                            case 'optDevices': {
                                const e = u;
                                return a().createElement(
                                    Sa,
                                    ya({}, e, n, {
                                        specializations: e.specializations.specializations,
                                        isDynamic: e.specializations.isDynamic,
                                    }),
                                );
                            }
                            case $u: {
                                const e = u;
                                return a().createElement(wa, ya({}, n, e));
                            }
                            case Hu: {
                                const e = u;
                                return a().createElement(ca, ya({}, n, e));
                            }
                            default:
                                return a().createElement(ra, ya({}, n, u));
                        }
                    },
                    ka = 'Slots_base_27',
                    Ia = ({
                        slots: e,
                        sectionType: u,
                        panelType: t,
                        isBorderActive: i,
                        onActiveSlotChanged: s,
                        isDisabled: r,
                        isBootCamp: o,
                        selectedSection: _,
                        selectedSlot: c,
                        syncInitiator: d,
                        blockOnGrabIds: E,
                        isChangeSetupIndex: m,
                        setIsExitBlocked: A,
                    }) => {
                        const F = (0, n.useRef)(null),
                            D = (0, n.useRef)(null),
                            b = I('model.ammunitionPanel', k.None),
                            p = b.onSectionSelect,
                            g = b.onDragDropSwap,
                            C = b.onSlotClear,
                            B = (0, n.useCallback)(
                                (e, t) => {
                                    g({
                                        sectionType: u,
                                        dragId: Number(e[e.length - 1]),
                                        dropId: Number(t[t.length - 1]),
                                    });
                                },
                                [g, u],
                            ),
                            h = _ === u,
                            f = h ? c : -1,
                            S = `${u}-${e.length}slots`,
                            v = st({
                                baseId: S,
                                slotsLength: e.length,
                                handleSwap: B,
                                setIsExitBlocked: A,
                                syncInitiator: d,
                            }),
                            w = v.handleGrabberAction,
                            x = v.dragState,
                            y = v.getForceCenterX;
                        (0, n.useEffect)(() => {
                            h && -1 !== f && F.current && s(F, _, f);
                        }, [s, h, _, f]);
                        const T = (e, u) => {
                                if ((r || ou.playClick(), 'number' != typeof u))
                                    return console.warn('selectedSlot is not a number');
                                p({ selectedSlot: u, selectedSection: e });
                            },
                            R = (e) => {
                                F.current = e ? e.current : null;
                            },
                            O = (e, u) => {
                                C({ slotId: e, sectionType: u });
                            };
                        return a().createElement(
                            'div',
                            { id: S, ref: D, className: l()(ka, u) },
                            ae(e, (l, _) => {
                                const c = u === Hu,
                                    d = !c && e.length > 1 ? `${S}-${_}` : '';
                                return a().createElement(
                                    n.Fragment,
                                    { key: `${l.id}-${_}` },
                                    _ > 0 && a().createElement(Ut, null),
                                    a().createElement(Ta, {
                                        value: l,
                                        sectionType: u,
                                        panelType: t,
                                        isSelected: f === l.id,
                                        isSectionSelected: h,
                                        isDisabled: r,
                                        isBootCamp: o,
                                        isBorderActive: i,
                                        contextMenuDisabled: c,
                                        slotType: u,
                                        onActiveSlotChanged: s,
                                        onSlotSelected: T,
                                        onActiveSlotRefChanged: R,
                                        onSlotClear: O,
                                        slotIndex: _,
                                        grabberId: d,
                                        containerRef: D,
                                        forceLeftUpdate: y(d),
                                        activeDragId: x.activeDragId,
                                        handleGrabberAction: w,
                                        potentialDropId: x.potentialDropId,
                                        blockOnGrabIds: E,
                                        isSetupSwitching: m,
                                        isChangeSetupIndex: m,
                                    }),
                                );
                            }),
                        );
                    },
                    Ra = ({
                        type: e,
                        slots: u,
                        newItemsCount: t,
                        isDisabled: i,
                        panelType: s,
                        onActiveSlotChanged: r,
                        isBorderActive: o,
                        isBootCamp: _ = !0,
                        selectedSection: c,
                        selectedSlot: d,
                        syncInitiator: E,
                        sectionsIds: m,
                        onBootcampPanelAppear: A,
                        vehicle: F,
                        vehicleType: D,
                        isSetupSwitching: b,
                        isChangeSetupIndex: p,
                        classMix: g,
                        setIsExitBlocked: C,
                    }) => {
                        const B = (0, n.useRef)(null),
                            h = (0, n.useState)(_),
                            f = h[0],
                            S = h[1],
                            v = (0, n.useMemo)(
                                () =>
                                    s === Iu.Setup
                                        ? e === Pu
                                            ? 'AmmunitionSetupHangarEquipmentSlots'
                                            : 'AmmunitionSetupOptionalDeviceSlots'
                                        : e === Pu
                                          ? 'HangarEquipmentSlots'
                                          : 'HangarOptionalDeviceSlots',
                                [s, e],
                            ),
                            w = ((e, u) => {
                                const t = I('tutorialModel.effects.items').filter((t) => {
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
                                            u === ct && window.tutorialApi && window.tutorialApi.updateComponents();
                                    },
                                };
                            })(v, ct);
                        (0, n.useEffect)(
                            () => (
                                null !== w && S(!w.effect.visible),
                                P(() => {
                                    null !== w && w.completeEffect();
                                })
                            ),
                            [w, e],
                        );
                        const x = G();
                        (0, n.useEffect)(() => {
                            x && (x.freeze(), x.resize());
                        }, [u.length, x, v, f]);
                        const y = ((e, u) => {
                            const t = I('tutorialModel.triggers.items').filter((t) => {
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
                        })('AmmunitionPanelBattleAbilities', Et);
                        (0, n.useEffect)(() => {
                            null == y || y.runTrigger(!0);
                        }, [y]);
                        const T = c === e,
                            k = it(e, m),
                            O = k.selfId,
                            M = k.blockOnGrabIds;
                        (0, n.useEffect)(() => {
                            s === Iu.Hangar && S(_);
                        }, [s, _]),
                            (0, n.useEffect)(() => {
                                if (_ && !f && A)
                                    return P(() => {
                                        A(), x && x.resize();
                                    });
                            }, [f, _, A, x]);
                        const L =
                                E >= 0 &&
                                (function (e, u) {
                                    if (Array.isArray(e)) return e.some(u);
                                    for (let t = 0; t < e.length; t++) if (u(ue(e, t), t, e)) return !0;
                                    return !1;
                                })(u, (e) => e.intCD > 0),
                            N = l()(
                                ht,
                                g,
                                f && ft,
                                T && 'sectionSelected',
                                u.length > 1 && 'multiSlot',
                                L && 'existFilledSlots',
                            ),
                            H = ((F && F.length > 0) || (D && D.length > 0)) && s !== Iu.Battle && s !== Iu.Respawn,
                            $ = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: D
                                        ? `url(${R.images.gui.maps.icons.vehicleTypes.extraSmall.$dyn(D)})`
                                        : '',
                                }),
                                [D],
                            ),
                            W = (0, n.useMemo)(
                                () => ({ icon: a().createElement('span', { className: yt, style: $ }), vehicle: F }),
                                [$, F],
                            ),
                            z = u.length > 0 && s !== Iu.Compare && s !== Iu.Battle && s !== Iu.Respawn && u.length > 0,
                            U = R.strings.tank_setup.section.$dyn(e);
                        if ('string' != typeof U)
                            throw new Error(`No top label text for section type ${e} or it's not a string`);
                        return a().createElement(
                            'div',
                            { id: b ? Bt : O, ref: B, className: N },
                            H &&
                                a().createElement(
                                    Wt,
                                    { className: wt },
                                    a().createElement(Se, {
                                        classMix: xt,
                                        text: R.strings.tank_setup.categories.reserves.config(),
                                        binding: W,
                                    }),
                                ),
                            z &&
                                a().createElement(
                                    'div',
                                    { className: St },
                                    a().createElement(Ct, { text: U, parentRef: B, show: !T, panelType: s }),
                                ),
                            a().createElement(Ia, {
                                slots: u,
                                sectionType: e,
                                panelType: s,
                                isBorderActive: o,
                                onActiveSlotChanged: r,
                                isDisabled: i,
                                isBootCamp: _,
                                syncInitiator: E,
                                selectedSection: c,
                                selectedSlot: d,
                                blockOnGrabIds: M,
                                isChangeSetupIndex: p,
                                setIsExitBlocked: C,
                            }),
                            Boolean(t) &&
                                a().createElement(
                                    'div',
                                    { className: vt },
                                    a().createElement(_t, { value: t, size: 'small', fadeInAnimation: !0 }),
                                ),
                        );
                    },
                    Oa = 'Count_base_e4',
                    Ma = 'Count_base__zero_64',
                    La = ({ count: e }) => {
                        const u = l()(Oa, !e && Ma);
                        return a().createElement('div', { className: u }, e);
                    },
                    Na = 'ShellsSlot_base_05',
                    Pa = 'ShellsSlot_shell_ab',
                    Ha = 'ShellsSlot_shell__grabbing_98',
                    Ga = 'ShellsSlot_shell__active_7e',
                    $a = 'ShellsSlot_shell__potential_30',
                    Wa = 'ShellsSlot_label_da',
                    za = 'ShellsSlot_image_3f',
                    Ua = ({
                        id: e,
                        itemInstalledSetupIdx: u,
                        isMountedMoreThanOne: t,
                        imageSource: i,
                        count: s,
                        isSelected: r,
                        keyName: o,
                        panelType: _,
                        intCD: c,
                        slotIndex: d,
                        grabberId: E,
                        isSetupSwitching: m,
                        containerRef: A,
                        activeDragId: F,
                        handleGrabberAction: D,
                        forceLeftUpdate: b,
                        potentialDropId: p,
                        blockOnGrabIds: g,
                        shellState: C,
                        isDisabled: B,
                    }) => {
                        const h = !Lu(_),
                            f = (0, n.useMemo)(() => ({ backgroundImage: `url(${i})` }), [i]),
                            S = E && E === p,
                            v = E && E === F,
                            w = (0, n.useMemo)(() => {
                                const n = { slotType: Nu, slotId: e, fieldType: 1, intCD: c };
                                return [
                                    n,
                                    Object.assign({}, n, {
                                        installedSlotId: e,
                                        itemInstalledSetupIdx: u,
                                        itemInstalledSetupSlotIdx: e,
                                        isMountedMoreThanOne: t,
                                    }),
                                ];
                            }, [c, e, u, t]),
                            x = w[0],
                            y = w[1],
                            T = l()(Pa, !F && h && !B && Ga, v && Ha, !v && S && $a),
                            k = (0, n.useMemo)(
                                () => ({
                                    id: E,
                                    containerRef: A,
                                    isEnabled: Boolean(E) && r,
                                    isUpdateAvailable: Boolean(F),
                                    handleAction: D,
                                    forceCenterX: b,
                                    blockOnGrabIds: g,
                                }),
                                [F, g, A, b, E, D, r],
                            ),
                            I = (0, n.useMemo)(
                                () => ({ slotIndex: d, uniqueKey: c, slotType: Nu, imageSource: null }),
                                [c, d],
                            );
                        return a().createElement(
                            On,
                            { isEnabled: h && !m && !B, args: y },
                            a().createElement(
                                je,
                                { args: x, isEnabled: !F && Mu(_) },
                                a().createElement(
                                    'div',
                                    { id: `shell-slot-${d}`, className: Na },
                                    o &&
                                        a().createElement(
                                            'div',
                                            { className: Wa },
                                            a().createElement(Fn, {
                                                text: o,
                                                show: r || _ === Iu.Battle || _ === Iu.Respawn,
                                                shellState: C,
                                                panelType: _,
                                            }),
                                        ),
                                    a().createElement(
                                        'div',
                                        { className: T },
                                        a().createElement(
                                            jt,
                                            { when: h, wrapper: cn, withProps: k },
                                            a().createElement(
                                                jt,
                                                { when: h, wrapper: ia, withProps: I },
                                                a().createElement('div', { className: za, style: f }),
                                                a().createElement(La, { count: s }),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    },
                    ja = {
                        base: 'ToggleSlot_base_93',
                        slot: 'ToggleSlot_slot_cd',
                        slot__grabbing: 'ToggleSlot_slot__grabbing_df',
                        image: 'ToggleSlot_image_e0',
                        slot__active: 'ToggleSlot_slot__active_15',
                        glow: 'ToggleSlot_glow_48',
                        toggle: 'ToggleSlot_toggle_73',
                    },
                    Xa = ({ id: e, isSelected: u, imageSource: t, onSlotSelected: i }) => {
                        const s = (0, n.useCallback)(() => {
                                !u && i(e);
                            }, [e, u, i]),
                            r = l()(ja.slot, !u && ja.slot__active, ja.slot__compare),
                            o = (0, n.useMemo)(() => ({ backgroundImage: `url(${t})` }), [t]),
                            _ = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url(R.images.gui.maps.icons.tanksetup.shells.icon_selected_${u ? 'on' : 'off'})`,
                                }),
                                [u],
                            );
                        return a().createElement(
                            Dn,
                            { slotType: Gu, slotId: e },
                            a().createElement(
                                'div',
                                { className: ja.base },
                                a().createElement(
                                    'div',
                                    { className: r, onClick: s, id: `shell-slot-${e}` },
                                    u && a().createElement('div', { className: ja.glow }),
                                    a().createElement('div', { className: ja.image, style: o }),
                                    a().createElement('div', { className: ja.toggle, style: _ }),
                                ),
                            ),
                        );
                    },
                    Va = 'Shells_base_f9',
                    Ka = 'Shells_shell_3f',
                    qa = 'Shells_shell__compressed_2e';
                function Ya() {
                    return (
                        (Ya =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Ya.apply(this, arguments)
                    );
                }
                const Za = ({
                        shells: e,
                        panelType: u,
                        onSelected: t,
                        isCompare: i,
                        isSelected: s,
                        syncInitiator: r,
                        blockOnGrabIds: o,
                        isDisabled: _,
                        isSetupSwitching: c,
                        setIsExitBlocked: d,
                    }) => {
                        const E = I('model.ammunitionPanel', k.None),
                            m = E.onSectionSelect,
                            A = E.onDragDropSwap,
                            F = (0, n.useRef)(!1),
                            D = (0, n.useRef)(null),
                            b = i ? Gu : Nu,
                            p = `${b}-${e.length}shells`,
                            g = (0, n.useCallback)(
                                (e) => {
                                    m({ selectedSlot: e, selectedSection: b }), ou.playClick();
                                },
                                [m, b],
                            ),
                            C = (0, n.useCallback)(() => {
                                s || i || _ || c || g(0);
                            }, [s, i, c, _, g]),
                            B = (0, n.useCallback)(
                                (e, u) => {
                                    A({
                                        sectionType: b,
                                        dragId: Number(e[e.length - 1]),
                                        dropId: Number(u[u.length - 1]),
                                    });
                                },
                                [A, b],
                            ),
                            h = st({
                                baseId: p,
                                slotsLength: e.length,
                                handleSwap: B,
                                setIsExitBlocked: d,
                                syncInitiator: r,
                            }),
                            f = h.handleGrabberAction,
                            S = h.dragState,
                            v = h.getForceCenterX;
                        return (
                            (0, n.useEffect)(
                                () =>
                                    P(() => {
                                        F.current = !0;
                                    }),
                                [],
                            ),
                            (0, n.useEffect)(() => {
                                if (s && u === Iu.Setup) {
                                    if (!F.current)
                                        return P(() => {
                                            t();
                                        });
                                    t();
                                }
                            }, [s, u, t]),
                            a().createElement(
                                'div',
                                {
                                    id: p,
                                    ref: D,
                                    className: Va,
                                    onClick: C,
                                    onMouseEnter: () => {
                                        _ || ou.playHighlight();
                                    },
                                },
                                ae(e, (t, n) => {
                                    if (Ru(t)) return null;
                                    const r = !i && e.length > 1 ? `${p}-${t.id}` : '';
                                    return a().createElement(
                                        'div',
                                        { key: t.id, className: l()(Ka, !i && 0 !== n && qa) },
                                        i
                                            ? a().createElement(Xa, Ya({}, t, { onSlotSelected: g }))
                                            : a().createElement(
                                                  Ua,
                                                  Ya({}, t, {
                                                      slotIndex: n,
                                                      isSetupSwitching: c,
                                                      isSelected: s,
                                                      panelType: u,
                                                      grabberId: r,
                                                      containerRef: D,
                                                      forceLeftUpdate: v(r),
                                                      activeDragId: S.activeDragId,
                                                      handleGrabberAction: f,
                                                      potentialDropId: S.potentialDropId,
                                                      blockOnGrabIds: o,
                                                      isDisabled: _,
                                                  }),
                                              ),
                                    );
                                }),
                            )
                        );
                    },
                    Qa = {
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
                    Ja = [Iu.Hangar, Iu.Battle, Iu.Prebattle, Iu.Respawn],
                    ei = ({
                        slots: e,
                        ammoNotFull: u,
                        type: t,
                        sectionsIds: i,
                        panelType: s,
                        onActiveSlotChanged: r,
                        isDisabled: o,
                        isBorderActive: _,
                        selectedSection: c,
                        syncInitiator: d,
                        classMix: E,
                        isSetupSwitching: m,
                        setIsExitBlocked: A,
                        newItemsCount: F,
                    }) => {
                        const D = (0, n.useRef)(null),
                            b = s === Iu.Compare,
                            p = c === t,
                            g = (0, n.useCallback)(() => {
                                r(D, c, 0);
                            }, [r, c]),
                            C = it(t, i),
                            B = C.selfId,
                            h = C.blockOnGrabIds,
                            f = ((e) => Ja.includes(e))(s) && !o && u,
                            S = (function (e, u) {
                                if (Array.isArray(e)) return e.filter(u);
                                const t = [];
                                for (let a = 0; a < e.length; a++) {
                                    var n;
                                    const i = null == (n = e[a]) ? void 0 : n.value;
                                    u(i, a, e) && t.push(i);
                                }
                                return t;
                            })(e, (e) => Boolean(e) && !Ru(e)).length,
                            v = (0, n.useMemo)(() => {
                                if (!f) return null;
                                const e = l()(Qa.border, 2 === S && Qa.border__double, 3 === S && Qa.border__triple);
                                return a().createElement('div', { className: e });
                            }, [f, S]),
                            w = l()(
                                Qa.base,
                                E,
                                Qa[`base__${s}`],
                                !_ && p && Qa.base__selected,
                                b && Qa.base__compare,
                                o && Qa.base__disabled,
                            ),
                            x = !b && s !== Iu.Battle && s !== Iu.Respawn;
                        return a().createElement(
                            'div',
                            { id: m ? Bt : B, className: w, ref: D },
                            f && a().createElement('div', { className: Qa.attention }),
                            x &&
                                a().createElement(
                                    'div',
                                    { className: Qa.label },
                                    a().createElement(Ct, {
                                        text: R.strings.tank_setup.section.shells(),
                                        parentRef: D,
                                        show: !p,
                                        panelType: s,
                                    }),
                                ),
                            v,
                            a().createElement(Za, {
                                shells: e,
                                panelType: s,
                                onSelected: g,
                                isSelected: p,
                                isCompare: b,
                                syncInitiator: d,
                                blockOnGrabIds: h,
                                isDisabled: o,
                                isSetupSwitching: m,
                                setIsExitBlocked: A,
                            }),
                            Boolean(F) &&
                                a().createElement(
                                    'div',
                                    { className: Qa.counter },
                                    a().createElement(_t, { value: F, size: 'small', fadeInAnimation: !0 }),
                                ),
                            o && a().createElement('div', { className: Qa.disabled }),
                        );
                    },
                    ui = {
                        base: 'Sections_base_13',
                        section: 'Sections_section_35',
                        section__battle: 'Sections_section__battle_d3',
                        section__small: 'Sections_section__small_73',
                        section__extraSmall: 'Sections_section__extraSmall_5f',
                        section__first: 'Sections_section__first_e2',
                    };
                function ti() {
                    return (
                        (ti =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        ti.apply(this, arguments)
                    );
                }
                const ni = ({
                        panelType: e,
                        isDisabled: u = !1,
                        onActiveSlotChanged: t,
                        isBorderActive: n,
                        isBootCamp: i = !1,
                        sections: s,
                        selectedSection: r,
                        selectedSlot: o,
                        syncInitiator: _,
                        ammoNotFull: c,
                        onBootcampPanelAppear: d,
                        isChangeSetupIndex: E,
                        setIsExitBlocked: m,
                    }) => {
                        const A = Q(['section'], ui),
                            F = ae(s, (e) => at(e.type)),
                            D = {
                                panelType: e,
                                isDisabled: u,
                                onActiveSlotChanged: t,
                                isBorderActive: n,
                                selectedSection: r,
                                selectedSlot: o,
                                syncInitiator: _,
                                sectionsIds: F,
                                isChangeSetupIndex: E,
                                setIsExitBlocked: m,
                            };
                        return a().createElement(
                            'div',
                            { className: ui.base },
                            ae(s, (u, t) => {
                                if (!u.slots || !u.slots.length) return null;
                                const n = l()(
                                        A.section,
                                        0 !== t && Lu(e) && ui.section__battle,
                                        0 === t && ui.section__first,
                                    ),
                                    s = te(u.slots, (e) => Object.assign({}, e));
                                if (u.type === Nu || u.type === Gu) {
                                    const e = u;
                                    return a().createElement(
                                        ei,
                                        ti({}, e, D, {
                                            isSetupSwitching: E,
                                            slots: s,
                                            key: `${u.name}${t}${u.slots.length}`,
                                            classMix: n,
                                            ammoNotFull: c,
                                        }),
                                    );
                                }
                                return a().createElement(
                                    Ra,
                                    ti({}, u, D, {
                                        isSetupSwitching: E,
                                        slots: s,
                                        key: `${u.name}${t}${u.slots.length}`,
                                        classMix: n,
                                        isBootCamp: i,
                                        onBootcampPanelAppear: d,
                                    }),
                                );
                            }),
                        );
                    },
                    ai = 'KeyboardKey_base_57',
                    ii = 'KeyboardKey_back_43',
                    si = a().memo(({ text: e }) =>
                        a().createElement('div', { className: ai }, a().createElement('div', { className: ii }, e)),
                    ),
                    ri = 'SetupSwitchHotkey_base_4c',
                    li = 'SetupSwitchHotkey_hotKeyWrapper_8d',
                    oi = 'SetupSwitchHotkey_plusWrapper_f0',
                    _i = 'SetupSwitchHotkey_plus_f0',
                    ci = 'SetupSwitchHotkey_plus__horizontal_e0',
                    di = 'SetupSwitchHotkey_plus__vertical_5b',
                    Ei = a().memo(({ hotKeys: e }) =>
                        a().createElement(
                            'div',
                            { className: ri },
                            e.map((e, u) => {
                                if (!e) return null;
                                const t = e.value;
                                return 0 === u
                                    ? a().createElement(si, { key: u, text: t })
                                    : a().createElement(
                                          'div',
                                          { key: u, className: li },
                                          a().createElement(
                                              'div',
                                              { className: oi },
                                              a().createElement('div', { className: `${_i} ${ci}` }),
                                              a().createElement('div', { className: `${_i} ${di}` }),
                                          ),
                                          a().createElement(si, { text: t }),
                                      );
                            }),
                        ),
                    ),
                    mi = {
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
                function Ai() {
                    return (
                        (Ai =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Ai.apply(this, arguments)
                    );
                }
                const Fi = (e) => e.setupSelector.hotKeys,
                    Di = (e) =>
                        Object.assign({}, e, {
                            slots: ae(e.slots, (e) => {
                                if ('specializations' in e) {
                                    const u = e;
                                    return Object.assign({}, u, {
                                        specializations: Object.assign({}, u.specializations, {
                                            specializations: ae(u.specializations.specializations, (e) =>
                                                Object.assign({}, e),
                                            ),
                                        }),
                                    });
                                }
                                return Object.assign({}, e);
                            }),
                        }),
                    bi = (e) =>
                        ne(
                            e,
                            (e) => {
                                var u;
                                const t = (function (e, u) {
                                    if (Array.isArray(e)) return e.every(u);
                                    for (let t = 0; t < e.length; t++) if (!u(ue(e, t), t, e)) return !1;
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
                                        states: te(e.setupSelector.states, (e) => e),
                                    }),
                                    sections: ae(e.sections, Di),
                                }),
                        ),
                    pi = ({ sectionProps: e, isSetupSwitching: u, isReady: t, setSetupSwitching: i, children: s }) => {
                        const r = Q(['switch'], mi),
                            o = I('model'),
                            _ = o.isDisabled,
                            c = o.vehicleInfo,
                            d = I('model.ammunitionPanel'),
                            E = d.sectionGroups,
                            m = d.onChangeSetupIndex,
                            A = d.selectedSection,
                            F = d.selectedSlot,
                            D = d.syncInitiator,
                            b = d.ammoNotFull,
                            p = null == c ? void 0 : c.vehicleName,
                            g = bi(E);
                        (0, n.useEffect)(() => {
                            (e.panelType !== Iu.Hangar && e.panelType !== Iu.Setup) || !t || i(!1);
                        }, [t, e.panelType, i]),
                            (0, n.useEffect)(() => {
                                e.panelType === Iu.Respawn && i(!1);
                            }, [p, e.panelType, i]);
                        const C = (0, n.useCallback)(
                                (u) => {
                                    e.panelType === Iu.Respawn && i(!0), m(u);
                                },
                                [m, e.panelType, i],
                            ),
                            B = (e.panelType !== Iu.Respawn && t) || (e.panelType === Iu.Respawn && u);
                        return a().createElement(
                            'div',
                            { className: mi.base },
                            te(g, (t) => {
                                const n = R.strings.tank_setup.tooltips.prebattleSwitchIndicator.desc.$dyn(
                                    `c_${t.groupId}`,
                                );
                                return a().createElement(
                                    'div',
                                    { key: t.groupId, className: mi.group },
                                    a().createElement(
                                        'div',
                                        { className: mi.groupWrapper },
                                        a().createElement(
                                            ku,
                                            Ai(
                                                { disabled: !B && Boolean(e.isBootCamp) },
                                                ((e, u) => ({ index: e.currentIndex, setSetupSwitching: u }))(t, i),
                                            ),
                                            a().createElement(
                                                ni,
                                                Ai({}, e, {
                                                    sections: t.sections,
                                                    selectedSection: A,
                                                    selectedSlot: F,
                                                    syncInitiator: D,
                                                    ammoNotFull: b,
                                                    isChangeSetupIndex: u,
                                                }),
                                            ),
                                        ),
                                        t.setupSelector.isSwitchEnabled &&
                                            a().createElement(
                                                'div',
                                                { className: l()(r.switch, Ou(e.panelType) && mi.switch__battle) },
                                                a().createElement(Su, {
                                                    states: t.setupSelector.states,
                                                    onClick: C,
                                                    totalCount: t.totalCount,
                                                    currentIndex: t.currentIndex,
                                                    groupId: t.groupId,
                                                    isDisabled: e.isDisabled,
                                                }),
                                                t.setupSelector.isPrebattleSwitchDisabled &&
                                                    a().createElement(
                                                        qe,
                                                        {
                                                            header: R.strings.tank_setup.tooltips.prebattleSwitchIndicator.title(),
                                                            body: 'string' == typeof n ? n : void 0,
                                                        },
                                                        a().createElement('div', {
                                                            className: mi.prebattleSwitchIndicator,
                                                        }),
                                                    ),
                                            ),
                                    ),
                                    ((s = t),
                                    ((o = e.panelType) === Iu.Battle || o === Iu.Respawn) &&
                                        s.setupSelector.isSwitchEnabled &&
                                        Fi(s) &&
                                        a().createElement(
                                            'div',
                                            { className: l()(mi.hint, _ && mi.hint__disabled) },
                                            a().createElement(Ei, { hotKeys: Fi(t) }),
                                        )),
                                );
                                var s, o;
                            }),
                            s,
                        );
                    },
                    gi = 'RoleSkillSlot_base_c4',
                    Ci = 'RoleSkillSlot_icon_79',
                    Bi = ({
                        roleSkill: e,
                        roleName: u,
                        tooltipId: t,
                        tooltipHeader: i,
                        tooltipBody: s,
                        className: r,
                    }) => {
                        const o = (0, n.useMemo)(
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
                            Ze,
                            { tooltipArgs: o, className: l()(gi, r) },
                            a().createElement('div', {
                                className: Ci,
                                style: {
                                    backgroundImage: `url(${R.images.gui.maps.icons.roleSkills.c_48x48.$dyn(e)})`,
                                },
                            }),
                        );
                    },
                    hi = 'SlotGlow_base_40',
                    fi = 'SlotGlow_glow_a9',
                    Si = 'SlotGlow_glow__shown_f2',
                    vi = 'SlotGlow_glow__hidden_94',
                    wi = (0, n.memo)(({ slotOffset: e, slotWidth: u, isAnimationRunning: t }) => {
                        const i = (0, n.useState)({ offset: e, slotWidth: u }),
                            s = i[0],
                            r = i[1],
                            o = (0, n.useRef)({ initialized: !1, offset: e, slotWidth: u });
                        (0, n.useEffect)(() => {
                            let t = o.current.initialized;
                            !t && e && ((t = !0), r({ offset: e, slotWidth: u })),
                                (o.current = { initialized: t, offset: e, slotWidth: u });
                        }, [e, u]),
                            (0, n.useEffect)(() => {
                                t || r(o.current);
                            }, [t]);
                        const _ = (0, n.useMemo)(() => {
                                const e = s.slotWidth + 25;
                                return { left: s.offset, width: e, backgroundSize: `${B.O.view.pxToRem(e)}rem 100%` };
                            }, [s.offset, s.slotWidth]),
                            c = !t && s.offset === o.current.offset,
                            d = l()(fi, c ? Si : vi);
                        return a().createElement(
                            'div',
                            { className: hi },
                            o.current.initialized && a().createElement('div', { className: d, style: _ }),
                        );
                    }),
                    xi = ({
                        show: e = !0,
                        isReady: u = !0,
                        panelType: t,
                        isBootCamp: i = !1,
                        isDisabled: s = !1,
                        onBootcampPanelAppear: r,
                        onResize: o,
                        setIsExitBlocked: _,
                    }) => {
                        const c = I('model.ammunitionPanel'),
                            d = c.isSetupSwitchInProgress,
                            E = c.syncInitiator,
                            m = c.sectionGroups,
                            A = c.onSectionResized,
                            F = (function (e, u, t) {
                                if (Array.isArray(e)) return e.reduce(u, t);
                                let n = t;
                                for (let t = 0; t < e.length; t++) n = u(n, ue(e, t), t, e);
                                return n;
                            })(m, (e, u) => e + u.sections.length, 0),
                            D = I('model.roleSkillSlot'),
                            b = I('model.abilitySlot'),
                            p = (0, n.useState)(!1),
                            g = p[0],
                            C = p[1],
                            B = (0, n.useRef)(!1),
                            h = (0, n.useState)({ slotWidth: 0, slotOffset: 0 }),
                            f = h[0],
                            S = h[1],
                            v = (0, n.useState)(!1),
                            w = v[0],
                            x = v[1],
                            y = (0, n.useRef)(null),
                            T = G(),
                            k = (0, n.useRef)({ element: null, generation: 0, slotIndex: null, sectionIndex: null }),
                            R = (0, n.useCallback)(
                                (e, u) => {
                                    if (g || d || i || t !== Iu.Hangar) return;
                                    const n = u || { width: 0, height: 0, offsetX: 0, offsetY: 0 };
                                    A(Object.assign({ sectionType: e }, n)), T && (T.freeze(), T.resize());
                                },
                                [g, d, i, t, A, T],
                            ),
                            O = (0, n.useCallback)(
                                (e) => {
                                    R('main', e);
                                },
                                [R],
                            );
                        ie(y, O, !0, [E]), (0, n.useEffect)(() => () => O(), [O]);
                        const M = (0, n.useCallback)(() => {
                                x(!1);
                            }, []),
                            L = (0, n.useCallback)(() => {
                                if (k.current.element && y.current) {
                                    const e = k.current.element.getBoundingClientRect(),
                                        u = y.current.getBoundingClientRect();
                                    S({ slotWidth: e.width, slotOffset: e.left - u.left + 0.5 * e.width });
                                }
                            }, []),
                            N = (0, n.useCallback)(
                                (e, u, t) => {
                                    if (e.current && y.current) {
                                        const n = ((e, u, t) =>
                                            e !== t.current.slotIndex || u !== t.current.sectionIndex)(t, u, k);
                                        (k.current.element = e.current),
                                            (k.current.slotIndex = t),
                                            (k.current.sectionIndex = u),
                                            B.current && n ? x(!0) : (B.current = !0),
                                            k.current.generation && L();
                                    }
                                },
                                [L],
                            ),
                            H = (0, n.useCallback)(
                                () =>
                                    P(() => {
                                        (k.current.generation += 1), L();
                                    }),
                                [k, L],
                            );
                        (0, n.useEffect)(() => P(H), [H]),
                            (0, n.useEffect)(
                                () => (
                                    engine.on('clientResized', H),
                                    () => {
                                        engine.off('clientResized', H);
                                    }
                                ),
                                [H],
                            );
                        const $ = (0, n.useCallback)(() => {
                                (k.current.generation += 1),
                                    F >= k.current.generation && (null == r || r(), null == o || o()),
                                    L();
                            }, [r, o, F, L]),
                            W = f.slotWidth,
                            z = f.slotOffset,
                            U = l()(tu.base, !u && tu.base__locked, !e && tu.base__hidden, s && tu.base__disabled),
                            j = l()(tu.border, !w && tu.border__hidden),
                            X = t === Iu.Setup || t === Iu.Compare,
                            V = {
                                panelType: t,
                                isDisabled: s,
                                onActiveSlotChanged: N,
                                isBorderActive: w,
                                isBootCamp: i,
                                onBootcampPanelAppear: $,
                                setIsExitBlocked: _,
                            };
                        (0, n.useEffect)(() => {
                            !1 === i && (null == o || o());
                        }, [o, D.roleSkill, b.ability, i]);
                        const K = Q(['roleSkillSlot', 'abilitySkillSlot'], tu);
                        return a().createElement(
                            'div',
                            { ref: y, className: U },
                            X &&
                                a().createElement(wi, {
                                    key: k.current.generation,
                                    slotOffset: z,
                                    slotWidth: W,
                                    isAnimationRunning: w,
                                }),
                            a().createElement(
                                pi,
                                { isSetupSwitching: d || g, sectionProps: V, isReady: u, setSetupSwitching: C },
                                D.roleSkill &&
                                    a().createElement(Bi, {
                                        roleSkill: D.roleSkill,
                                        roleName: D.roleName,
                                        tooltipId: D.tooltipId,
                                        tooltipHeader: D.tooltipHeader,
                                        tooltipBody: D.tooltipBody,
                                        className: l()(tu.roleSkillSlot, tu[`roleSkillSlot__${t}`], K.roleSkillSlot),
                                    }),
                                b.ability &&
                                    a().createElement(uu, {
                                        skillName: b.ability,
                                        tooltipId: b.tooltipId,
                                        tooltipHeader: b.tooltipHeader,
                                        tooltipBody: b.tooltipBody,
                                        className: l()(
                                            tu.abilitySkillSlot,
                                            tu[`abilitySkillSlot__${t}`],
                                            K.abilitySkillSlot,
                                        ),
                                    }),
                            ),
                            X &&
                                a().createElement(
                                    'div',
                                    { className: j },
                                    a().createElement(ru, { slotWidth: W, slotOffset: z, onAnimationEnd: M }),
                                ),
                        );
                    },
                    yi = 'Content_base_51',
                    Ti = () => {
                        const e = I('model'),
                            u = e.isDisabled,
                            t = e.isReady,
                            i = e.isBootcamp,
                            s = e.state,
                            r = (0, n.useRef)(null);
                        return (
                            (0, n.useEffect)(
                                () =>
                                    P(() => {
                                        const e = r.current;
                                        if (e) {
                                            const u = e.firstElementChild.getBoundingClientRect();
                                            viewEnv.setInputArea(
                                                viewEnv.pxToRem(u.x),
                                                viewEnv.pxToRem(u.y),
                                                viewEnv.pxToRem(u.width),
                                                viewEnv.remToPx(54),
                                            );
                                        }
                                    }),
                                [s, t],
                            ),
                            a().createElement(
                                'div',
                                { className: yi, ref: r },
                                a().createElement(xi, {
                                    panelType: s === N.PreBattleNotConfirmed ? Iu.Prebattle : Iu.Battle,
                                    isDisabled: u,
                                    isReady: t,
                                    isBootCamp: i,
                                }),
                            )
                        );
                    },
                    ki = 'Footer_base_51',
                    Ii = 'Footer_title_28',
                    Ri = () =>
                        a().createElement(
                            'div',
                            { className: ki },
                            a().createElement(
                                'span',
                                { className: Ii },
                                R.strings.ingame_gui.prebattleAmmunitionPanel.footer(),
                            ),
                        ),
                    Oi = 'Header_base_70',
                    Mi = 'Header_title_f3',
                    Li = 'Header_base__loading_c9',
                    Ni = R.strings.ingame_gui.prebattleAmmunitionPanel,
                    Pi = () => {
                        const e = I('model'),
                            u = e.state,
                            t = e.timeTillBattleStart,
                            i = e.isDisabled,
                            s = l()(Oi, u === N.BattleLoading && Li),
                            r = L(t),
                            o = r >= 0,
                            _ = (0, n.useMemo)(() => ({ seconds: Math.floor(r) }), [r]);
                        const c =
                            u === N.BattleLoading
                                ? i
                                    ? Ni.currentSetup()
                                    : o
                                      ? ((d = Ni.loadingTimer()),
                                        (E = _),
                                        d.replace(/\{\w+\}/g, (e) => String(E[e.slice(1, -1)])))
                                      : Ni.waitinForPlayers()
                                : Ni.header();
                        var d, E;
                        return a().createElement(
                            'div',
                            { className: s },
                            a().createElement('span', { className: Mi }, c),
                        );
                    },
                    Hi = 'App_base_5f',
                    Gi = 'App_base__loading_98',
                    $i = 'App_content_f3',
                    Wi = () => {
                        const e = I('model').state,
                            u = l()(Hi, e === N.BattleLoading && Gi);
                        return a().createElement(
                            'div',
                            { className: u },
                            e !== N.PreBattleNotConfirmed && a().createElement(Pi, null),
                            a().createElement('div', { className: $i }, a().createElement(Ti, null)),
                            e === N.PreBattle && a().createElement(Ri, null),
                        );
                    };
                engine.whenReady.then(() => {
                    s().render(a().createElement(Wi, null), document.getElementById('root'));
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
        (__webpack_require__.j = 421),
        (() => {
            var e = { 421: 0 };
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
    var __webpack_exports__ = __webpack_require__.O(void 0, [532], () => __webpack_require__(811));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
