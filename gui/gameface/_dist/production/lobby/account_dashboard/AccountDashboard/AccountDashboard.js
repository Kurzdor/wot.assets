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
            67: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => V });
                var a = {};
                t.r(a), t.d(a, { mouse: () => d, onResize: () => l });
                var n = {};
                t.r(n),
                    t.d(n, {
                        events: () => a,
                        getMouseGlobalPosition: () => _,
                        getSize: () => E,
                        graphicsQuality: () => m,
                    });
                var r = {};
                t.r(r), t.d(r, { getBgUrl: () => F, getTextureUrl: () => A });
                var o = {};
                function s(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                function i(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.r(o),
                    t.d(o, {
                        addModelObserver: () => x,
                        addPreloadTexture: () => w,
                        children: () => r,
                        displayStatus: () => D,
                        displayStatusIs: () => G,
                        events: () => B,
                        extraSize: () => z,
                        forceTriggerMouseMove: () => $,
                        freezeTextureBeforeResize: () => R,
                        getBrowserTexturePath: () => y,
                        getDisplayStatus: () => j,
                        getScale: () => P,
                        getSize: () => N,
                        getViewGlobalPosition: () => M,
                        isEventHandled: () => U,
                        isFocused: () => H,
                        pxToRem: () => L,
                        remToPx: () => O,
                        resize: () => T,
                        sendEvent: () => f,
                        setAnimateWindow: () => I,
                        setEventHandled: () => W,
                        setInputPaddingsRem: () => k,
                        setSidePaddingsRem: () => S,
                        whenTutorialReady: () => X,
                    });
                const l = s('clientResized'),
                    c = { down: s('mousedown'), up: s('mouseup'), move: s('mousemove') };
                const d = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function u() {
                        e.enabled && i(!1);
                    }
                    function t() {
                        e.enabled && i(!0);
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
                            : i(!1);
                    }
                    const n = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let n = !0;
                                    const r = `mouse${u}`,
                                        o = c[u]((e) => t([e, 'outside']));
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
                    return Object.assign({}, n, {
                        disable() {
                            (e.enabled = !1), a();
                        },
                        enable() {
                            (e.enabled = !0), a();
                        },
                        enableOutside() {
                            e.enabled && i(!0);
                        },
                        disableOutside() {
                            e.enabled && i(!1);
                        },
                    });
                })();
                function E(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function _(e = 'px') {
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
                        onTextureFrozen: s('self.onTextureFrozen'),
                        onTextureReady: s('self.onTextureReady'),
                        onDomBuilt: s('self.onDomBuilt'),
                        onLoaded: s('self.onLoaded'),
                        onDisplayChanged: s('self.onShowingStatusChanged'),
                        onFocusUpdated: s('self.onFocusChanged'),
                        children: {
                            onAdded: s('children.onAdded'),
                            onLoaded: s('children.onLoaded'),
                            onRemoved: s('children.onRemoved'),
                            onAttached: s('children.onAttached'),
                            onTextureReady: s('children.onTextureReady'),
                            onRequestPosition: s('children.requestPosition'),
                        },
                    },
                    C = ['args'];
                const g = 2,
                    p = 16,
                    b = 32,
                    h = 64,
                    v = (e, u) => {
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
                                })(u, C);
                            return void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, r, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, r));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var a;
                    },
                    f = {
                        close(e) {
                            v('popover' === e ? g : b);
                        },
                        minimize() {
                            v(h);
                        },
                        move(e) {
                            v(p, { isMouseEvent: !0, on: e });
                        },
                    };
                function w(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function k(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function y(e, u, t, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, a);
                }
                function x(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function S(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function N(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function T(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function M(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: O(u.x), y: O(u.y) };
                }
                function R() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function P() {
                    return viewEnv.getScale();
                }
                function L(e) {
                    return viewEnv.pxToRem(e);
                }
                function O(e) {
                    return viewEnv.remToPx(e);
                }
                function I(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function H() {
                    return viewEnv.isFocused();
                }
                function W() {
                    return viewEnv.setEventHandled();
                }
                function U() {
                    return viewEnv.isEventHandled();
                }
                function $() {
                    viewEnv.forceTriggerMouseMove();
                }
                function j() {
                    return viewEnv.getShowingStatus();
                }
                const G = Object.keys(D).reduce((e, u) => ((e[u] = () => viewEnv.getShowingStatus() === D[u]), e), {}),
                    z = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    X = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : B.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    V = { view: o, client: n };
            },
            521: (e, u, t) => {
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
            358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                var a = t(67);
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
                t.d(u, {
                    Sw: () => r.Z,
                    B3: () => l,
                    Z5: () => o,
                    B0: () => i,
                    wU: () => v,
                    ry: () => B,
                    Eu: () => C,
                    SW: () => b,
                    P3: () => h,
                });
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
                var r = t(358);
                const o = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    s = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    };
                let i;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(i || (i = {}));
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = t(521),
                    m = t(67);
                const A = ['args'];
                function F(e, u, t, a, n, r, o) {
                    try {
                        var s = e[r](o),
                            i = s.value;
                    } catch (e) {
                        return void t(e);
                    }
                    s.done ? u(i) : Promise.resolve(i).then(a, n);
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
                                    return new Promise(function (a, n) {
                                        var r = e.apply(u, t);
                                        function o(e) {
                                            F(r, a, n, o, s, 'next', e);
                                        }
                                        function s(e) {
                                            F(r, a, n, o, s, 'throw', e);
                                        }
                                        o(void 0);
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
                    g = (e, u) => {
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
                                })(u, A);
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
                    p = () => g(i.CLOSE),
                    b = () => g(i.POP_OVER, { on: !1 }),
                    h = (e, u, t, a, n = R.invalid('resId'), r) => {
                        const o = m.O.view.getViewGlobalPosition(),
                            s = t.getBoundingClientRect(),
                            l = s.x,
                            c = s.y,
                            d = s.width,
                            E = s.height,
                            _ = {
                                x: m.O.view.pxToRem(l) + o.x,
                                y: m.O.view.pxToRem(c) + o.y,
                                width: m.O.view.pxToRem(d),
                                height: m.O.view.pxToRem(E),
                            };
                        g(i.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: e,
                            decoratorID: a || R.invalid('resId'),
                            targetID: n,
                            direction: u,
                            bbox: D(_),
                            on: !0,
                            args: r,
                        });
                    },
                    v = () => viewEnv.isWindowShownByViewEvent(i.POP_OVER),
                    f = (e, u) => {
                        e.keyCode === _.n.ESCAPE && u();
                    };
                var w = t(572);
                const k = n.instance,
                    y = {
                        DataTracker: r.Z,
                        ViewModel: w.Z,
                        ViewEventType: i,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: d,
                        DateFormatType: E,
                        makeGlobalBoundingBox: D,
                        sendMoveEvent: (e) => g(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: p,
                        sendClosePopOverEvent: b,
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            g(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: h,
                        addEscapeListener: (e) => {
                            const u = (u) => f(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            f(e, p);
                        },
                        handleViewEvent: g,
                        onBindingsReady: B,
                        onLayoutReady: C,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(i.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(i.CONTEXT_MENU),
                        isPopOverShown: v,
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
                        ClickOutsideManager: k,
                        SystemLocale: o,
                        UserLocale: s,
                    };
                window.ViewEnvHelper = y;
            },
            816: (e, u, t) => {
                'use strict';
                var a = t(179),
                    n = t.n(a);
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
                var o = t(67);
                const s = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var i;
                function l(e, u, t) {
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
                })(i || (i = {}));
                const c = o.O.client.getSize('rem'),
                    d = c.width,
                    E = c.height,
                    _ = Object.assign({ width: d, height: E }, l(d, E, s)),
                    m = (0, a.createContext)(_),
                    A = ['children'];
                const F = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                            return n;
                        })(e, A);
                    const n = (0, a.useContext)(m),
                        o = n.extraLarge,
                        s = n.large,
                        i = n.medium,
                        l = n.small,
                        c = n.extraSmall,
                        d = n.extraLargeWidth,
                        E = n.largeWidth,
                        _ = n.mediumWidth,
                        F = n.smallWidth,
                        D = n.extraSmallWidth,
                        B = n.extraLargeHeight,
                        C = n.largeHeight,
                        g = n.mediumHeight,
                        p = n.smallHeight,
                        b = n.extraSmallHeight,
                        h = { extraLarge: B, large: C, medium: g, small: p, extraSmall: b };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && o) return u;
                        if (t.large && s) return u;
                        if (t.medium && i) return u;
                        if (t.small && l) return u;
                        if (t.extraSmall && c) return u;
                    } else {
                        if (t.extraLargeWidth && d) return r(u, t, h);
                        if (t.largeWidth && E) return r(u, t, h);
                        if (t.mediumWidth && _) return r(u, t, h);
                        if (t.smallWidth && F) return r(u, t, h);
                        if (t.extraSmallWidth && D) return r(u, t, h);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && B) return u;
                            if (t.largeHeight && C) return u;
                            if (t.mediumHeight && g) return u;
                            if (t.smallHeight && p) return u;
                            if (t.extraSmallHeight && b) return u;
                        }
                    }
                    return null;
                };
                F.defaultProps = {
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
                (0, a.memo)(F);
                const D = (e) => {
                        const u = (0, a.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    },
                    B = (0, a.memo)(({ children: e }) => {
                        const u = (0, a.useContext)(m),
                            t = (0, a.useState)(u),
                            r = t[0],
                            i = t[1],
                            c = (0, a.useCallback)((e, u) => {
                                const t = o.O.view.pxToRem(e),
                                    a = o.O.view.pxToRem(u);
                                i(Object.assign({ width: t, height: a }, l(t, a, s)));
                            }, []);
                        D(() => {
                            engine.on('clientResized', c);
                        }),
                            (0, a.useEffect)(() => () => engine.off('clientResized', c), [c]);
                        const d = (0, a.useMemo)(() => Object.assign({}, r), [r]);
                        return n().createElement(m.Provider, { value: d }, e);
                    });
                var C = t(483),
                    g = t.n(C),
                    p = t(926),
                    b = t.n(p);
                let h, v, f;
                !(function (e) {
                    (e[(e.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = s.small.width)] = 'Small'),
                        (e[(e.Medium = s.medium.width)] = 'Medium'),
                        (e[(e.Large = s.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge');
                })(h || (h = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.width)] = 'Small'),
                            (e[(e.Medium = s.medium.width)] = 'Medium'),
                            (e[(e.Large = s.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge');
                    })(v || (v = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = s.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.height)] = 'Small'),
                            (e[(e.Medium = s.medium.height)] = 'Medium'),
                            (e[(e.Large = s.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.height)] = 'ExtraLarge');
                    })(f || (f = {}));
                const w = () => {
                        const e = (0, a.useContext)(m),
                            u = e.width,
                            t = e.height,
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return h.ExtraLarge;
                                    case e.large:
                                        return h.Large;
                                    case e.medium:
                                        return h.Medium;
                                    case e.small:
                                        return h.Small;
                                    case e.extraSmall:
                                        return h.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), h.ExtraSmall;
                                }
                            })(e),
                            r = ((e) => {
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
                            o = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return f.ExtraLarge;
                                    case e.largeHeight:
                                        return f.Large;
                                    case e.mediumHeight:
                                        return f.Medium;
                                    case e.smallHeight:
                                        return f.Small;
                                    case e.extraSmallHeight:
                                        return f.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), f.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: n, mediaWidth: r, mediaHeight: o, remScreenWidth: u, remScreenHeight: t };
                    },
                    k = ['children', 'className'];
                function y() {
                    return (
                        (y =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
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
                    S = {
                        [f.ExtraSmall]: '',
                        [f.Small]: b().SMALL_HEIGHT,
                        [f.Medium]: `${b().SMALL_HEIGHT} ${b().MEDIUM_HEIGHT}`,
                        [f.Large]: `${b().SMALL_HEIGHT} ${b().MEDIUM_HEIGHT} ${b().LARGE_HEIGHT}`,
                        [f.ExtraLarge]: `${b().SMALL_HEIGHT} ${b().MEDIUM_HEIGHT} ${b().LARGE_HEIGHT} ${b().EXTRA_LARGE_HEIGHT}`,
                    },
                    N = {
                        [h.ExtraSmall]: '',
                        [h.Small]: b().SMALL,
                        [h.Medium]: `${b().SMALL} ${b().MEDIUM}`,
                        [h.Large]: `${b().SMALL} ${b().MEDIUM} ${b().LARGE}`,
                        [h.ExtraLarge]: `${b().SMALL} ${b().MEDIUM} ${b().LARGE} ${b().EXTRA_LARGE}`,
                    },
                    T = (e) => {
                        let u = e.children,
                            t = e.className,
                            a = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, k);
                        const r = w(),
                            o = r.mediaWidth,
                            s = r.mediaHeight,
                            i = r.mediaSize;
                        return n().createElement('div', y({ className: g()(t, x[o], S[s], N[i]) }, a), u);
                    },
                    M = ['children'];
                const P = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                            return n;
                        })(e, M);
                    return n().createElement(B, null, n().createElement(T, t, u));
                };
                var L = t(493),
                    O = t.n(L);
                function I(e) {
                    engine.call('PlaySound', e);
                }
                const H = {
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
                function $() {
                    return (
                        ($ =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        $.apply(this, arguments)
                    );
                }
                class j extends n().PureComponent {
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
                            a = e.goto,
                            r = e.side,
                            o = e.type,
                            s = e.classNames,
                            i = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            d = e.onMouseUp,
                            E =
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
                                })(e, U)),
                            _ = g()(W.base, W[`base__${o}`], W[`base__${r}`], null == s ? void 0 : s.base),
                            m = g()(W.icon, W[`icon__${o}`], W[`icon__${r}`], null == s ? void 0 : s.icon),
                            A = g()(W.glow, null == s ? void 0 : s.glow),
                            F = g()(W.caption, W[`caption__${o}`], null == s ? void 0 : s.caption),
                            D = g()(W.goto, null == s ? void 0 : s.goto);
                        return n().createElement(
                            'div',
                            $(
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
                                E,
                            ),
                            'info' !== o && n().createElement('div', { className: W.shine }),
                            n().createElement('div', { className: m }, n().createElement('div', { className: A })),
                            n().createElement('div', { className: F }, u),
                            a && n().createElement('div', { className: D }, a),
                        );
                    }
                }
                j.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                let G;
                function z(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(G || (G = {}));
                const X = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    V = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    q = (e, u, t = G.left) => e.split(u).reduce(t === G.left ? X : V, []),
                    K = (() => {
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
                    Y = ['zh_cn', 'zh_sg', 'zh_tw'],
                    Q = (e, u = G.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        return Y.includes(t)
                            ? K(e)
                            : ((e, u = G.left) => {
                                  let t = [];
                                  const a =
                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                      n = e.replace(/&nbsp;/g, ' ');
                                  return q(n, /( )/, u).forEach((e) => (t = t.concat(q(e, a, G.left)))), t;
                              })(e, u);
                    };
                let Z;
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
                })(Z || (Z = {}));
                var J = t(364);
                const ee = 1e3,
                    ue = 60,
                    te = 3600,
                    ae = 86400;
                Date.now();
                function ne(e = 0) {
                    let u = e;
                    const t = Math.trunc(u / ae);
                    u -= t * ae;
                    const a = Math.trunc(u / te);
                    u -= a * te;
                    const n = Math.trunc(u / ue);
                    return (u -= n * ue), { days: t, hours: a, minutes: n, seconds: u };
                }
                const re = () => {},
                    oe = (e = 0, u, t = 0, n = re) => {
                        const r = (0, a.useState)(e),
                            o = r[0],
                            s = r[1];
                        return (
                            (0, a.useEffect)(() => {
                                if (e > 0) {
                                    s(e);
                                    const a = Date.now(),
                                        r = setInterval(
                                            () => {
                                                const u = e - Math.floor((Date.now() - a) / ee);
                                                null !== t && u <= t ? (s(t), n && n(), clearInterval(r)) : s(u);
                                            },
                                            (u || (e > 120 ? ue : 1)) * ee,
                                        );
                                    return () => {
                                        clearInterval(r);
                                    };
                                }
                            }, [e, u, t, n]),
                            o
                        );
                    },
                    se = (e = 1) => {
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
                    ie = (e, u) => e.split('.').reduce((e, u) => e && e[u], u),
                    le = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    ce = (e, u) => (e.length > 0 ? `${e}.${u}` : u),
                    de = (e) =>
                        ((e, u) =>
                            e.split('.').reduce((e, t) => {
                                const a = ie(`${e}.${t}`, window);
                                return le(a) ? u(e, t, a) : `${e}.${t}`;
                            }))(e, (e, u) => `${e}.${u}.value`),
                    Ee = (e) => {
                        const u = ((e) => {
                                const u = se(),
                                    t = u.caller,
                                    a = u.resId,
                                    n = window.__feature && window.__feature !== t && t ? `subViews.${t}` : '';
                                return { modelPrefix: n, modelPath: ce(n, e || ''), resId: a };
                            })(),
                            t = u.modelPrefix,
                            a = e.split('.');
                        if (a.length > 0) {
                            const e = [a[0]];
                            return (
                                a.reduce((u, a) => {
                                    const n = ie(ce(t, `${u}.${a}`), window);
                                    return le(n) ? (e.push(n.id), `${u}.${a}.value`) : (e.push(a), `${u}.${a}`);
                                }),
                                e.reduce((e, u) => e + '.' + u)
                            );
                        }
                        return '';
                    },
                    _e = J.Sw.instance;
                let me;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(me || (me = {}));
                const Ae = (e = 'model', u = me.Deep) => {
                        const t = (0, a.useState)(0),
                            n = (t[0], t[1]),
                            r = (0, a.useMemo)(() => se(), []),
                            o = r.caller,
                            s = r.resId,
                            i = (0, a.useMemo)(
                                () => (window.__feature && window.__feature !== o ? `subViews.${o}.${e}` : e),
                                [o, e],
                            ),
                            l = (0, a.useState)(() =>
                                ((e) => {
                                    const u = ie(e, window);
                                    for (const e in u) 'function' == typeof u[e] && (u[e] = u[e].bind(u));
                                    return le(u) ? u.value : u;
                                })(de(i)),
                            ),
                            c = l[0],
                            d = l[1],
                            E = (0, a.useRef)(-1);
                        return (
                            D(() => {
                                if (
                                    ('boolean' == typeof u &&
                                        ((u = u ? me.Deep : me.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    u !== me.None)
                                ) {
                                    const t = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            u === me.Deep
                                                ? (e === c && n((e) => e + 1), d(e))
                                                : d(Object.assign([], e));
                                        },
                                        a = Ee(e);
                                    E.current = _e.addCallback(a, t, s, u === me.Deep);
                                }
                            }),
                            (0, a.useEffect)(() => {
                                if (u !== me.None)
                                    return () => {
                                        _e.removeCallback(E.current, s);
                                    };
                            }, [s, u]),
                            c
                        );
                    },
                    Fe = (J.Sw.instance, oe),
                    De = {};
                function Be(e, u, t, a = me.Deep) {
                    const r = (r) => {
                        const o = r.path || u || void 0,
                            s = Ae(o, (o && De[o]) || !1 ? me.None : a),
                            i = Object.assign({}, t(s, r), r);
                        return n().createElement(e, i);
                    };
                    var o;
                    return (r.displayName = `WithModel(${((o = e), o.displayName || o.name || 'Component')})`), r;
                }
                const Ce = (e) => {
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
                var ge = t(521);
                const pe = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function be(e = ge.n.NONE, u = pe, t = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== ge.n.NONE)
                            return (
                                window.addEventListener('keydown', a, t),
                                () => {
                                    window.removeEventListener('keydown', a, t);
                                }
                            );
                        function a(a) {
                            if (a.keyCode === e) {
                                if (o.O.view.isEventHandled()) return;
                                o.O.view.setEventHandled(), u(a), t && a.stopPropagation();
                            }
                        }
                    }, [u, e, t]);
                }
                const he = 'display',
                    ve = (e, u) => {
                        const t = Ae('tutorialModel.effects.items').filter((t) => {
                            if (!t) return !1;
                            const a = t.value,
                                n = window.__featureId.toString();
                            return a.componentId === e && a.type === u && a.viewId === n;
                        });
                        if (0 === t.length) return null;
                        const a = Object.assign({}, t[0].value);
                        return {
                            effect: a,
                            completeEffect: () => {
                                tutorialModel.onEffectCompleted({
                                    componentId: e,
                                    viewId: window.__featureId.toFixed(0),
                                    effectType: u,
                                    effectBuilder: a.builder,
                                }),
                                    u === he && window.tutorialApi && window.tutorialApi.updateComponents();
                            },
                        };
                    },
                    fe = 'visible_change',
                    we = fe,
                    ke = (e, u) => {
                        const t = Ae('tutorialModel.triggers.items').filter((t) => {
                            if (!t) return !1;
                            const a = t.value,
                                n = a.triggers.filter((e) => e.value === u);
                            return a.componentId === e && n.length > 0;
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
                    },
                    ye = 'FormatText_base_d0',
                    xe = ({ binding: e, text: u = '', classMix: t, alignment: r = G.left }) =>
                        null === u
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : n().createElement(
                                  a.Fragment,
                                  null,
                                  u.split('\n').map((u, o) =>
                                      n().createElement(
                                          'div',
                                          { className: g()(ye, t), key: `${u}-${o}` },
                                          ((e, u, t) =>
                                              e
                                                  .split(/%\((.*?)\)(?:[sd])?/g)
                                                  .map((e) => (t && e in t ? t[e] : Q(e, u))))(u, r, e).map((e, u) =>
                                              n().createElement(a.Fragment, { key: `${u}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              ),
                    Se = {
                        base: 'BonusXpBlock_base_91',
                        base__x1: 'BonusXpBlock_base__x1_a1',
                        base__x2: 'BonusXpBlock_base__x2_76',
                        base__x3: 'BonusXpBlock_base__x3_17',
                        base__x4: 'BonusXpBlock_base__x4_54',
                        base__x5: 'BonusXpBlock_base__x5_16',
                        base__locked: 'BonusXpBlock_base__locked_c9',
                        base__disabled: 'BonusXpBlock_base__disabled_a6',
                        disabled_overlay: 'BonusXpBlock_disabled_overlay_9b',
                        hover: 'BonusXpBlock_hover_43',
                        text: 'BonusXpBlock_text_97',
                        heading: 'BonusXpBlock_heading_a4',
                        description: 'BonusXpBlock_description_18',
                        temporarilyUnavailable: 'BonusXpBlock_temporarilyUnavailable_9e',
                        multiplier: 'BonusXpBlock_multiplier_e3',
                        multiplier_value: 'BonusXpBlock_multiplier_value_50',
                        uses: 'BonusXpBlock_uses_f2',
                        usesLeft: 'BonusXpBlock_usesLeft_fb',
                    },
                    Ne = {
                        get heading() {
                            return R.strings.account_dashboard.bonusXp.heading();
                        },
                        get description() {
                            return R.strings.account_dashboard.bonusXp.description();
                        },
                        get multiplier() {
                            return R.strings.account_dashboard.bonusXp.multiplier();
                        },
                        get multiplierFactor() {
                            return R.strings.account_dashboard.bonusXp.multiplierFactor();
                        },
                        get temporarilyUnavailable() {
                            return R.strings.account_dashboard.temporarilyUnavailable();
                        },
                    },
                    Te = [Se.base__x1, Se.base__x2, Se.base__x3, Se.base__x4, Se.base__x5],
                    Me = Be(
                        (e) => {
                            const u = e.className,
                                t = e.isEnabled,
                                r = e.multiplier,
                                o = e.totalUses,
                                s = e.usesLeft,
                                i = e.onClick,
                                l = t && 0 === o,
                                c = t && o > 0,
                                d = !t,
                                E = (0, a.useCallback)(() => {
                                    t && (i(), I('play'));
                                }, [i, t]),
                                _ = (0, a.useCallback)(() => {
                                    t && I('highlight');
                                }, [t]);
                            return n().createElement(
                                'div',
                                {
                                    className: g()(
                                        u,
                                        Se.base,
                                        l && Se.base__locked,
                                        c && Se.base__unlocked,
                                        d && Se.base__disabled,
                                        c && (Te[r - 1] || Te[0]),
                                    ),
                                    'data-testid': 'BonusXpBlock',
                                    onClick: E,
                                    onMouseEnter: _,
                                },
                                n().createElement('div', { className: Se.disabled_overlay }),
                                n().createElement('div', { className: Se.hover }),
                                l &&
                                    n().createElement(
                                        'div',
                                        { className: Se.text },
                                        n().createElement('h3', { className: Se.heading }, Ne.heading),
                                        n().createElement('p', { className: Se.description }, Ne.description),
                                    ),
                                c &&
                                    n().createElement(
                                        'div',
                                        { className: Se.text },
                                        n().createElement(
                                            'h3',
                                            { className: Se.multiplier },
                                            n().createElement(xe, {
                                                text: Ne.multiplier,
                                                binding: {
                                                    multiplierFactor: n().createElement(xe, {
                                                        text: Ne.multiplierFactor,
                                                        classMix: Se.multiplier_value,
                                                        binding: { multiplier: r },
                                                    }),
                                                },
                                            }),
                                        ),
                                        n().createElement(
                                            'h2',
                                            { className: Se.uses },
                                            n().createElement('span', { className: Se.usesLeft }, s),
                                            ' / ',
                                            o,
                                        ),
                                    ),
                                d &&
                                    n().createElement(
                                        n().Fragment,
                                        null,
                                        n().createElement(
                                            'div',
                                            { className: Se.text },
                                            n().createElement('h3', { className: Se.heading }, Ne.heading),
                                            n().createElement('p', { className: Se.description }, Ne.description),
                                        ),
                                        n().createElement(
                                            'p',
                                            { className: Se.temporarilyUnavailable },
                                            Ne.temporarilyUnavailable,
                                        ),
                                    ),
                            );
                        },
                        'model.bonusXp',
                        (e, u) => Object.assign({}, e, u),
                    ),
                    Re = 'ExcludedMapsBlock_base_6b',
                    Pe = 'ExcludedMapsBlock_base__disabled_68',
                    Le = 'ExcludedMapsBlock_header_d4',
                    Oe = 'ExcludedMapsBlock_base_background_03',
                    Ie = 'ExcludedMapsBlock_disabledPattern_09',
                    He = 'ExcludedMapsBlock_lock_e8',
                    We = 'ExcludedMapsBlock_hover_b0',
                    Ue = 'ExcludedMapsBlock_disabledContent_b4',
                    $e = 'ExcludedMapsBlock_unavailableText_d6',
                    je = 'ExcludedMapsBlock_slotContainer_b6';
                let Ge;
                !(function (e) {
                    (e.empty = 'empty'), (e.selected = 'selected'), (e.disabled = 'disabled');
                })(Ge || (Ge = {}));
                const ze = [
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
                function Xe(e) {
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
                const Ve = (e, u, t = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: J.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: a,
                                },
                                t,
                            ),
                        );
                    },
                    qe = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            n = e.args,
                            r = e.onMouseEnter,
                            o = e.onMouseLeave,
                            s = e.onMouseDown,
                            i = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            d = e.ignoreMouseClick,
                            E = void 0 !== d && d,
                            _ = e.decoratorId,
                            m = void 0 === _ ? 0 : _,
                            A = e.isEnabled,
                            F = void 0 === A || A,
                            D = e.targetId,
                            B = void 0 === D ? 0 : D,
                            C = e.onShow,
                            g = e.onHide,
                            p = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, ze);
                        const b = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            h = (0, a.useMemo)(() => B || se().resId, [B]),
                            v = (0, a.useCallback)(() => {
                                (b.current.isVisible && b.current.timeoutId) ||
                                    (Ve(t, m, { isMouseEvent: !0, on: !0, arguments: Xe(n) }, h),
                                    C && C(),
                                    (b.current.isVisible = !0));
                            }, [t, m, n, h, C]),
                            f = (0, a.useCallback)(() => {
                                if (b.current.isVisible || b.current.timeoutId) {
                                    const e = b.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (b.current.timeoutId = 0)),
                                        Ve(t, m, { on: !1 }, h),
                                        b.current.isVisible && g && g(),
                                        (b.current.isVisible = !1);
                                }
                            }, [t, m, h, g]),
                            w = (0, a.useCallback)((e) => {
                                b.current.isVisible &&
                                    ((b.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (b.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(b.current.prevTarget) && f();
                                    }, 200)));
                            }, []);
                        (0, a.useEffect)(() => {
                            const e = b.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', w, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', w, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, a.useEffect)(() => {
                                !1 === F && f();
                            }, [F, f]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', f),
                                    () => {
                                        window.removeEventListener('mouseleave', f), f();
                                    }
                                ),
                                [f],
                            );
                        return F
                            ? (0, a.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((k = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((b.current.timeoutId = window.setTimeout(v, c ? 100 : 400)),
                                                      r && r(e),
                                                      k && k(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              f(), null == o || o(u), null == e || e(u);
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              !1 === E && f(), null == i || i(u), null == e || e(u);
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              !1 === E && f(), null == s || s(u), null == e || e(u);
                                          })(u.props.onMouseDown),
                                      },
                                      p,
                                  ),
                              )
                            : u;
                        var k;
                    },
                    Ke = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Ye() {
                    return (
                        (Ye =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Ye.apply(this, arguments)
                    );
                }
                const Qe = R.views.common.tooltip_window.simple_tooltip_content,
                    Ze = (e) => {
                        let u = e.children,
                            t = e.body,
                            r = e.header,
                            o = e.note,
                            s = e.alert,
                            i = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, Ke);
                        const c = (0, a.useMemo)(() => {
                            const e = Object.assign({}, i, { body: t, header: r, note: o, alert: s });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [s, t, r, o, i]);
                        return n().createElement(
                            qe,
                            Ye(
                                {
                                    contentId:
                                        ((d = null == i ? void 0 : i.hasHtmlContent),
                                        d ? Qe.SimpleTooltipHtmlContent('resId') : Qe.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var d;
                    },
                    Je = 'SlotItem_base_5b',
                    eu = 'SlotItem_base__responsive_39',
                    uu = 'SlotItem_mapImage_6b',
                    tu = 'SlotItem_timerContainer_91',
                    au = 'SlotItem_base__select_15',
                    nu = 'SlotItem_base__disabled_88',
                    ru = 'SlotItem_base__replace_c5',
                    ou = 'SlotItem_base__cooldown_6a',
                    su = 'SlotItem_mapTitle_a4',
                    iu = 'SlotItem_removeButton_25',
                    lu = 'SlotItem_removeButton_icon_7e',
                    cu = 'SlotItem_timerText_11',
                    du = R.strings.excluded_maps.notSelected(),
                    Eu = ({ isEnabled: e = !0, isResponsive: u, isMapNameDisplayed: t, tooltipStrings: a }) =>
                        e
                            ? n().createElement(
                                  Ze,
                                  {
                                      header: (null == a ? void 0 : a.disabledTooltipHeader) || yu.selectTooltipHeader,
                                      body: (null == a ? void 0 : a.selectTooltipBody) || yu.selectTooltipBody,
                                  },
                                  n().createElement(
                                      'div',
                                      { className: g()(Je, au, u && eu), 'data-testid': 'slot' },
                                      t && n().createElement('div', { className: su }, du),
                                  ),
                              )
                            : n().createElement(
                                  Ze,
                                  {
                                      header:
                                          (null == a ? void 0 : a.disabledTooltipHeader) || yu.disabledTooltipHeader,
                                      body: (null == a ? void 0 : a.disabledTooltipBody) || yu.disabledTooltipBody,
                                  },
                                  n().createElement('div', { className: g()(Je, nu, u && eu), 'data-testid': 'slot' }),
                              ),
                    _u = {
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
                let mu, Au;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(mu || (mu = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
                    })(Au || (Au = {}));
                const Fu = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: r,
                    disabled: o,
                    mixClass: s,
                    soundHover: i,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: d,
                    onMouseDown: E,
                    onMouseUp: _,
                    onMouseLeave: m,
                    onClick: A,
                }) => {
                    const F = (0, a.useRef)(null),
                        D = (0, a.useState)(t),
                        B = D[0],
                        C = D[1],
                        p = (0, a.useState)(!1),
                        b = p[0],
                        h = p[1],
                        v = (0, a.useState)(!1),
                        f = v[0],
                        w = v[1],
                        k = (0, a.useCallback)(() => {
                            o || (F.current && (F.current.focus(), C(!0)));
                        }, [o]),
                        y = (0, a.useCallback)(
                            (e) => {
                                B && null !== F.current && !F.current.contains(e.target) && C(!1);
                            },
                            [B],
                        ),
                        x = (0, a.useCallback)(
                            (e) => {
                                o || (A && A(e));
                            },
                            [o, A],
                        ),
                        S = (0, a.useCallback)(
                            (e) => {
                                o || (null !== i && I(i), c && c(e), w(!0));
                            },
                            [o, i, c],
                        ),
                        N = (0, a.useCallback)(
                            (e) => {
                                d && d(e);
                            },
                            [d],
                        ),
                        T = (0, a.useCallback)(
                            (e) => {
                                o || (_ && _(e), h(!1));
                            },
                            [o, _],
                        ),
                        M = (0, a.useCallback)(
                            (e) => {
                                o || (null !== l && I(l), E && E(e), t && k(), h(!0));
                            },
                            [o, l, E, k, t],
                        ),
                        P = (0, a.useCallback)(
                            (e) => {
                                o || (m && m(e), h(!1));
                            },
                            [o, m],
                        ),
                        L = g()(
                            _u.base,
                            _u[`base__${r}`],
                            {
                                [_u.base__disabled]: o,
                                [_u[`base__${u}`]]: u,
                                [_u.base__focus]: B,
                                [_u.base__highlightActive]: b,
                                [_u.base__firstHover]: f,
                            },
                            s,
                        ),
                        O = g()(_u.state, _u.state__default);
                    return (
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mousedown', y),
                                () => {
                                    document.removeEventListener('mousedown', y);
                                }
                            ),
                            [y],
                        ),
                        (0, a.useEffect)(() => {
                            C(t);
                        }, [t]),
                        n().createElement(
                            'div',
                            {
                                ref: F,
                                className: L,
                                onMouseEnter: S,
                                onMouseMove: N,
                                onMouseUp: T,
                                onMouseDown: M,
                                onMouseLeave: P,
                                onClick: x,
                            },
                            r !== mu.ghost &&
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement('div', { className: _u.back }),
                                    n().createElement('span', { className: _u.texture }),
                                ),
                            n().createElement(
                                'span',
                                { className: O },
                                n().createElement('span', { className: _u.stateDisabled }),
                                n().createElement('span', { className: _u.stateHighlightHover }),
                                n().createElement('span', { className: _u.stateHighlightActive }),
                            ),
                            n().createElement(
                                'span',
                                { className: _u.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                Fu.defaultProps = { type: mu.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const Du = (0, a.memo)(Fu),
                    Bu = (e) =>
                        e.days > 0
                            ? z(R.strings.common.duration.days(), { days: e.days })
                            : e.hours > 0
                              ? z(R.strings.common.duration.hours(), { hours: e.hours })
                              : e.minutes > 0
                                ? z(R.strings.common.duration.minutes(), { minutes: e.minutes })
                                : z(R.strings.common.duration.seconds(), { seconds: e.seconds }),
                    Cu =
                        ((0, a.memo)(({ duration: e }) => {
                            const u = e >= 0 ? Bu(ne(e)) : R.strings.common.duration.unlimited();
                            return n().createElement('span', null, u);
                        }),
                        (e) => {
                            const u = R.images.gui.maps.icons.map;
                            return u[`c_${e.mapId}`] ? u[`c_${e.mapId}`]() : '';
                        }),
                    gu = (e) => {
                        const u = Object.assign({}, e);
                        return (
                            u.hours > 0 && u.minutes > 0 && u.hours++,
                            u.seconds > 0 && u.minutes++,
                            u.seconds < 0 && u.seconds,
                            Bu(u)
                        );
                    },
                    pu = (e) =>
                        e.hours > 0 && e.minutes > 0
                            ? `${z(R.strings.common.duration.hours(), { hours: e.hours })} ${z(R.strings.common.duration.minutes(), { minutes: e.minutes })}`
                            : gu(e),
                    bu = ({
                        map: e,
                        isMapNameDisplayed: u,
                        isResponsive: t,
                        onRemoveButtonClick: a,
                        tooltipStrings: r,
                    }) => {
                        const o = Math.floor(e.cooldownEndTimeInSecs - Date.now() / ee),
                            s = o <= 0 && '' !== e.mapId,
                            i = o > 0,
                            l = g()(Je, s && ru, i && ou, t && eu),
                            c = ((e) => {
                                const u = R.strings.arenas;
                                return u[`c_${e.mapId}`] && u[`c_${e.mapId}`].name ? u[`c_${e.mapId}`].name() : '';
                            })(e);
                        if (i) {
                            const t = ne(o),
                                a = gu(t),
                                r = z(yu.cooldownTooltipBody, { cooldownStr: pu(t) });
                            return n().createElement(
                                Ze,
                                { header: yu.cooldownTooltipHeader, body: r },
                                n().createElement(
                                    'div',
                                    { className: l, 'data-testid': 'slot' },
                                    n().createElement('img', { src: Cu(e), className: uu }),
                                    n().createElement(
                                        'div',
                                        { className: tu, 'data-testid': 'timer' },
                                        n().createElement('div', { className: cu }, a),
                                    ),
                                    u && n().createElement('div', { className: su }, c),
                                ),
                            );
                        }
                        return n().createElement(
                            Ze,
                            {
                                header: (null == r ? void 0 : r.replaceTooltipHeader) || yu.replaceTooltipHeader,
                                body: (null == r ? void 0 : r.replaceTooltipBody) || yu.replaceTooltipBody,
                            },
                            n().createElement(
                                'div',
                                { className: l, 'data-testid': 'slot' },
                                a &&
                                    n().createElement(
                                        Du,
                                        { type: 'ghost', mixClass: iu, onClick: () => a(e.mapId) },
                                        n().createElement('img', {
                                            src: R.images.gui.maps.icons.library.cross(),
                                            className: lu,
                                        }),
                                    ),
                                n().createElement('img', { src: Cu(e), className: uu }),
                                u && n().createElement('div', { className: su }, c),
                            ),
                        );
                    },
                    hu = ['map'];
                const vu = (e) => {
                        let u = e.map,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, hu);
                        const a = Math.floor(u.cooldownEndTimeInSecs - Date.now() / ee);
                        return oe(a), n().createElement(bu, Object.assign({ map: u }, t));
                    },
                    fu = ({
                        slotState: e,
                        cooldownEndTimeInSecs: u,
                        mapId: t,
                        isMapNameDisplayed: a,
                        onRemoveButtonClick: r,
                        isResponsive: o,
                        tooltipStrings: s,
                        MapSlotComponent: i = vu,
                    }) => {
                        if (e === Ge.selected)
                            return n().createElement(i, {
                                map: { slotState: e, cooldownEndTimeInSecs: u, mapId: t },
                                isMapNameDisplayed: a,
                                onRemoveButtonClick: r,
                                isResponsive: o,
                                tooltipStrings: s,
                            });
                        const l = e !== Ge.disabled;
                        return n().createElement(Eu, {
                            isEnabled: l,
                            isMapNameDisplayed: a,
                            isResponsive: o,
                            tooltipStrings: s,
                        });
                    },
                    wu = Be(
                        ({ className: e, path: u, excludedMaps: t, isResponsive: a, tooltipStrings: r }) =>
                            n().createElement(
                                'div',
                                { className: e },
                                t
                                    .slice(0, 3)
                                    .map(({ value: { cooldownEndTimeInSecs: e, mapId: t, slotState: o } }, s) =>
                                        n().createElement(fu, {
                                            cooldownEndTimeInSecs: e,
                                            mapId: t,
                                            slotState: o,
                                            key: `${u}.${s}.id`,
                                            isResponsive: a,
                                            tooltipStrings: r,
                                        }),
                                    ),
                            ),
                        null,
                        (e, u) => Object.assign({}, u, { excludedMaps: e }),
                    );
                function ku() {
                    return (
                        (ku =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        ku.apply(this, arguments)
                    );
                }
                const yu = {
                        get header() {
                            return R.strings.account_dashboard.excludedMaps.header();
                        },
                        get disabledTooltipHeader() {
                            return R.strings.account_dashboard.excludedMaps.disabledTooltipHeader();
                        },
                        get disabledTooltipBody() {
                            return R.strings.account_dashboard.excludedMaps.disabledTooltipBody();
                        },
                        get selectTooltipHeader() {
                            return R.strings.account_dashboard.excludedMaps.selectTooltipHeader();
                        },
                        get selectTooltipBody() {
                            return R.strings.account_dashboard.excludedMaps.selectTooltipBody();
                        },
                        get cooldownTooltipHeader() {
                            return R.strings.account_dashboard.excludedMaps.cooldownTooltipHeader();
                        },
                        get cooldownTooltipBody() {
                            return R.strings.account_dashboard.excludedMaps.cooldownTooltipBody();
                        },
                        get replaceTooltipHeader() {
                            return R.strings.account_dashboard.excludedMaps.replaceTooltipHeader();
                        },
                        get replaceTooltipBody() {
                            return R.strings.account_dashboard.excludedMaps.replaceTooltipBody();
                        },
                        get temporarilyUnavailable() {
                            return R.strings.account_dashboard.temporarilyUnavailable();
                        },
                    },
                    xu = {
                        get disabledTooltipBody() {
                            return R.strings.account_dashboard.excludedMaps.disabledTooltipBodyWotPlus();
                        },
                    },
                    Su = Be(
                        ({ className: e, isEnabled: u, isWotPlusEnabled: t, onClick: r }) => {
                            const o = (0, a.useCallback)(() => {
                                    r(), I('play');
                                }, [r]),
                                s = (0, a.useCallback)(() => {
                                    I('highlight');
                                }, []);
                            return u
                                ? n().createElement(
                                      'div',
                                      { className: g()(Re, e), onClick: o, onMouseEnter: s },
                                      n().createElement('div', { className: Oe }),
                                      n().createElement('div', { className: We }),
                                      n().createElement('div', { className: Le }, yu.header),
                                      n().createElement(wu, {
                                          path: 'model.excludedMaps.excludedMaps',
                                          className: je,
                                          tooltipStrings: t ? xu : void 0,
                                          isResponsive: !0,
                                      }),
                                  )
                                : n().createElement(
                                      'div',
                                      { className: g()(Re, Pe) },
                                      n().createElement('div', { className: Oe }),
                                      n().createElement('div', { className: Ie }),
                                      n().createElement(
                                          'div',
                                          { className: Ue },
                                          n().createElement('img', {
                                              src: R.images.gui.maps.icons.account_dashboard.premium_missions.lock(),
                                              alt: '',
                                              className: He,
                                          }),
                                          n().createElement('div', { className: Le }, yu.header),
                                          n().createElement('div', { className: $e }, yu.temporarilyUnavailable),
                                      ),
                                  );
                        },
                        'model.excludedMaps',
                        (e, u) => {
                            let t = ku({}, e);
                            return Object.assign({}, t, u, {
                                excludedMaps: t.excludedMaps ? t.excludedMaps.map((e) => e.value) : [],
                            });
                        },
                    ),
                    Nu = 'TextOverflow_base_3b',
                    Tu = ({ content: e, classMix: u }) => {
                        const t = (0, a.useRef)(null),
                            r = (0, a.useState)(!0),
                            o = r[0],
                            s = r[1];
                        return (
                            (0, a.useEffect)(() =>
                                Ce(() => {
                                    const e = t.current;
                                    e && e.offsetWidth >= e.scrollWidth && s(!1);
                                }),
                            ),
                            n().createElement(
                                Ze,
                                { isEnabled: o, body: e },
                                n().createElement('div', { ref: t, className: g()(Nu, u) }, e),
                            )
                        );
                    };
                let Mu;
                !(function (e) {
                    (e.RenameAvailable = 'renameAvailable'),
                        (e.RenameDisabled = 'renameDisabled'),
                        (e.RenameInProgress = 'renameInProgress'),
                        (e.EmailPending = 'emailPending'),
                        (e.Completed = 'completed');
                })(Mu || (Mu = {}));
                const Ru = 'Header_base_5a',
                    Pu = 'Header_accountTitleBlock_dc',
                    Lu = 'Header_base__withSubtitle_20',
                    Ou = 'Header_accountName_41',
                    Iu = 'Header_suffixBadge_c8',
                    Hu = 'Header_header_da',
                    Wu = 'Header_badge_86',
                    Uu = 'Header_badge_overlay_6c',
                    $u = 'Header_hover_a2',
                    ju = 'Header_suffixBadgeShadow_4d',
                    Gu = 'Header_plusIcon_69',
                    zu = 'Header_accountName__teamKiller_8c',
                    Xu = 'Header_accountName__overflow_dc',
                    Vu = 'Header_subtitle_3f',
                    qu = 'Header_alertIcon_c6',
                    Ku = 'Header_clanSubtitle_c0',
                    Yu = 'PendingInfoBlock_spinner_05',
                    Qu = 'PendingInfoBlock_renameInProgress_81',
                    Zu = 'PendingInfoBlock_separator_a2',
                    Ju = 'PendingInfoBlock_button_9e',
                    et = ({ emailButtonLabel: e, accountInfoState: u, isInClan: t, onClick: a }) =>
                        u === Mu.EmailPending
                            ? n().createElement(Du, { type: 'main', mixClass: Ju, size: 'small', onClick: a }, e)
                            : u === Mu.RenameAvailable
                              ? n().createElement(
                                    Du,
                                    { type: 'secondary', mixClass: Ju, size: 'small', onClick: a },
                                    R.strings.badge.badgesPage.accountCompletion.button.demoAccRename(),
                                )
                              : u === Mu.RenameInProgress
                                ? n().createElement(
                                      'div',
                                      { className: Qu },
                                      n().createElement('span', { className: Yu }),
                                      n().createElement(
                                          'div',
                                          null,
                                          R.strings.badge.badgesPage.accountCompletion.refreshing(),
                                      ),
                                      t && n().createElement('span', { className: Zu }, '|'),
                                  )
                                : u === Mu.RenameDisabled
                                  ? n().createElement(
                                        Ze,
                                        {
                                            header: R.strings.tooltips.demoAccountRenaming.notAvailable.header(),
                                            body: R.strings.tooltips.demoAccountRenaming.notAvailable.body(),
                                        },
                                        n().createElement(
                                            'div',
                                            null,
                                            n().createElement(
                                                Du,
                                                {
                                                    type: 'secondary',
                                                    mixClass: Ju,
                                                    size: 'small',
                                                    disabled: !0,
                                                    onClick: a,
                                                },
                                                R.strings.badge.badgesPage.accountCompletion.button.demoAccRename(),
                                            ),
                                        ),
                                    )
                                  : null,
                    ut = R.images.gui.maps.icons;
                function tt(e) {
                    return `url(${e})`;
                }
                function at(e, u, t) {
                    const a = e.$dyn(u);
                    return 'string' == typeof a ? tt(a) : t(e);
                }
                const nt = () => {},
                    rt = (e) => tt(e.badge_empty()),
                    ot = (e) => at(ut.library.badges.c_80x80, `badge_${e}`, rt),
                    st = (e) => at(ut.library.badges.c_80x80, `badge_${e}`, nt),
                    it = (e) => at(ut.library.badges.c_48x48, `badge_${e}`, nt),
                    lt = (e) => at(ut.library.badges.strips.c_100x40, `strip_${e}`, nt),
                    ct = (e) => at(ut.library.badges.strips.c_68x28, `strip_${e}`, nt);
                const dt = R.strings.account_dashboard.header.clanSubtitle(),
                    Et = R.strings.account_dashboard.header.badgeTooltip(),
                    _t = Be(
                        ({
                            badgeID: e,
                            userName: u,
                            isInClan: t,
                            className: r,
                            suffixBadgeID: o,
                            roleInClan: s,
                            clanAbbrev: i,
                            isTeamKiller: l,
                            accountInfoState: c,
                            emailButtonLabel: d,
                            onShowBadges: E,
                            onAccountInfoButtonClick: _,
                        }) => {
                            const m = c === Mu.EmailPending,
                                A = t || c !== Mu.Completed,
                                F = m || c === Mu.RenameInProgress,
                                D = g()(Ou, l && zu, m && Xu),
                                B = ((C = _), () => C());
                            var C;
                            const p = (0, a.useCallback)(() => {
                                    E(), I('play');
                                }, [E]),
                                b = (0, a.useCallback)(() => {
                                    I('highlight');
                                }, []),
                                h = n().createElement(
                                    qe,
                                    {
                                        contentId: R.views.lobby.tooltips.clans.ClanShortInfoTooltipContent('resId'),
                                        decoratorId:
                                            R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    },
                                    n().createElement('span', null, i),
                                );
                            return n().createElement(
                                'div',
                                {
                                    className: g()(Ru, A && Lu, r),
                                    style:
                                        ((v = e),
                                        (f = o),
                                        {
                                            '--badge-image-large': ot(v),
                                            '--badge-image-small': ot(v),
                                            '--suffix-image-large': st(f),
                                            '--suffix-image-small': it(f),
                                            '--shadow-image-large': lt(f),
                                            '--shadow-image-small': ct(f),
                                        }),
                                },
                                n().createElement(
                                    Ze,
                                    { body: Et },
                                    n().createElement(
                                        'div',
                                        { className: Wu, onClick: p, onMouseEnter: b, id: 'dashboard-header-badge' },
                                        n().createElement('div', { className: Uu }),
                                        n().createElement('div', { className: $u }),
                                        0 === e.length && n().createElement('div', { className: Gu }),
                                    ),
                                ),
                                n().createElement(
                                    'div',
                                    { className: Pu },
                                    m
                                        ? n().createElement(
                                              qe,
                                              {
                                                  contentId:
                                                      R.views.lobby.account_completion.tooltips.HangarTooltip('resId'),
                                              },
                                              n().createElement(
                                                  'div',
                                                  { className: Hu },
                                                  n().createElement('div', { className: D }, u),
                                                  F && n().createElement('div', { className: qu }),
                                                  o.length > 0 &&
                                                      n().createElement(
                                                          'div',
                                                          { className: Iu },
                                                          n().createElement('div', { className: ju }),
                                                      ),
                                              ),
                                          )
                                        : n().createElement(
                                              'div',
                                              { className: Hu },
                                              n().createElement(Tu, { content: u, classMix: D }),
                                              F && n().createElement('div', { className: qu }),
                                              o.length > 0 &&
                                                  n().createElement(
                                                      'div',
                                                      { className: Iu },
                                                      n().createElement('div', { className: ju }),
                                                  ),
                                          ),
                                    n().createElement(
                                        'div',
                                        { className: Vu },
                                        n().createElement(et, {
                                            accountInfoState: c,
                                            emailButtonLabel: d,
                                            isInClan: t,
                                            onClick: B,
                                        }),
                                        t &&
                                            n().createElement(xe, {
                                                classMix: Ku,
                                                binding: {
                                                    position: R.strings.menu.profile.header.clan.position.$dyn(s),
                                                    clanTag: h,
                                                },
                                                text: dt,
                                            }),
                                    ),
                                ),
                            );
                            var v, f;
                        },
                        'model.header',
                        (e, u) => Object.assign({}, u, e),
                    ),
                    mt = (e) => {
                        (0, a.useEffect)(e, []);
                    },
                    At = {
                        base: 'PopoverDecorator_base_ed',
                        decorator: 'PopoverDecorator_decorator_d3',
                        arrow: 'PopoverDecorator_arrow_8a',
                        arrow__bottom: 'PopoverDecorator_arrow__bottom_c3',
                        arrow__top: 'PopoverDecorator_arrow__top_6e',
                        arrow__left: 'PopoverDecorator_arrow__left_7a',
                        arrow__right: 'PopoverDecorator_arrow__right_b6',
                        closeBtn: 'PopoverDecorator_closeBtn_32',
                        content: 'PopoverDecorator_content_f0',
                    };
                var Ft;
                !(function (e) {
                    (e[(e.Left = 0)] = 'Left'),
                        (e[(e.Right = 1)] = 'Right'),
                        (e[(e.Top = 2)] = 'Top'),
                        (e[(e.Bottom = 3)] = 'Bottom');
                })(Ft || (Ft = {}));
                const Dt = ['__left', '__right', '__top', '__bottom'],
                    Bt =
                        ((0, a.forwardRef)(
                            ({ children: e, disableAutoSizeUpdate: u, onOutsideClick: t, customStyles: r = {} }, s) => {
                                const i = (0, a.useRef)(null),
                                    l = (0, a.useRef)(null),
                                    c = (0, a.useRef)(null),
                                    d = (0, a.useState)(window.decorator && window.decorator.directionType),
                                    E = d[0],
                                    _ = d[1],
                                    m = (0, a.useCallback)(() => {
                                        H.playClick(), o.O.view.sendEvent.close();
                                    }, []),
                                    A = (0, a.useCallback)(() => {
                                        H.playHighlight();
                                    }, []),
                                    F = g()(At.arrow, At[`arrow${Dt[E]}`]);
                                mt(
                                    () => (
                                        o.O.client.events.mouse.enableOutside(),
                                        o.O.client.events.mouse.down(([, e]) => {
                                            'outside' === e && (t ? t() : o.O.view.sendEvent.close('popover'));
                                        })
                                    ),
                                );
                                const D = (0, a.useCallback)(
                                        (e) => {
                                            let u = e.target;
                                            do {
                                                if (u === i.current || u === c.current) return;
                                                u = u.parentNode;
                                            } while (u);
                                            const a = window.decorator;
                                            if (void 0 !== window.decorator) {
                                                const e = o.O.client.getMouseGlobalPosition(),
                                                    u = ![a.boundX, a.boundY, a.boundWidth, a.boundHeight].includes(
                                                        void 0,
                                                    ),
                                                    t =
                                                        e.x < a.boundX ||
                                                        e.x > a.boundX + a.boundWidth ||
                                                        e.y > a.boundY + a.boundHeight ||
                                                        e.y < a.boundY;
                                                if (u && !t) return;
                                            }
                                            t ? t() : o.O.view.sendEvent.close('popover');
                                        },
                                        [i, c, t],
                                    ),
                                    B = (0, a.useCallback)(
                                        () => (
                                            o.O.view.freezeTextureBeforeResize(),
                                            Ce(() => {
                                                if (l.current) {
                                                    const e = l.current.scrollWidth,
                                                        u = l.current.scrollHeight;
                                                    o.O.view.resize(e, u), _(window.decorator.directionType);
                                                }
                                            })
                                        ),
                                        [],
                                    );
                                return (
                                    (0, a.useImperativeHandle)(s, () => ({ updateSize: B })),
                                    mt(() => {
                                        o.O.view.setInputPaddingsRem(58);
                                    }),
                                    (0, a.useEffect)(() => {
                                        document.addEventListener('mousedown', D, { capture: !0 });
                                        const e = ((e) => {
                                            let u = !1;
                                            return {
                                                promise: new Promise((t, a) => {
                                                    e.then((e) => !u && t(e)).catch((e) => !u && a(e));
                                                }),
                                                cancel() {
                                                    u = !0;
                                                },
                                            };
                                        })((0, J.Eu)());
                                        return (
                                            !u && e.promise.then(() => B()),
                                            () => {
                                                e.cancel(), document.removeEventListener('mousedown', D);
                                            }
                                        );
                                    }, [B, D, u]),
                                    n().createElement(
                                        'div',
                                        { className: At.base, ref: l },
                                        n().createElement(
                                            'div',
                                            { className: At.decorator },
                                            n().createElement(
                                                'div',
                                                { className: At.content, ref: i },
                                                e,
                                                window.decorator &&
                                                    window.decorator.isCloseBtnVisible &&
                                                    n().createElement(
                                                        Ze,
                                                        { body: R.strings.dialogs.common.error.cancel() },
                                                        n().createElement('div', {
                                                            className: At.closeBtn,
                                                            onClick: m,
                                                            onMouseEnter: A,
                                                            ref: c,
                                                        }),
                                                    ),
                                            ),
                                            n().createElement('div', { className: F, style: r.arrow }),
                                        ),
                                    )
                                );
                            },
                        ),
                        [
                            'contentId',
                            'decoratorId',
                            'direction',
                            'targetId',
                            'args',
                            'onClick',
                            'children',
                            'isEnabled',
                        ]);
                function Ct() {
                    return (
                        (Ct =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Ct.apply(this, arguments)
                    );
                }
                const gt = (e) => {
                        let u = e.contentId,
                            t = e.decoratorId,
                            r = e.direction,
                            o = void 0 === r ? Ft.Top : r,
                            s = e.targetId,
                            i = e.args,
                            l = e.onClick,
                            c = e.children,
                            d = e.isEnabled,
                            E = void 0 === d || d,
                            _ = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, Bt);
                        const m = (0, a.useRef)(null),
                            A = (0, a.useCallback)(() => {
                                if ((0, J.wU)()) return (0, J.SW)();
                                m.current && (0, J.P3)(u, o, m.current, t, s, i);
                            }, [u, o, i, t, s]);
                        return n().createElement(
                            'div',
                            Ct(
                                {
                                    ref: m,
                                    onClick:
                                        ((F = c.props.onClick),
                                        (e) => {
                                            E && (A(), l && l(e), F && F(e));
                                        }),
                                },
                                _,
                            ),
                            c,
                        );
                        var F;
                    },
                    pt = {
                        base: 'ParentalControlBlock_base_0c',
                        text: 'ParentalControlBlock_text_82',
                        heading: 'ParentalControlBlock_heading_f6',
                        icon: 'ParentalControlBlock_icon_9c',
                        description: 'ParentalControlBlock_description_38',
                        infoIcon: 'ParentalControlBlock_infoIcon_79',
                        glow: 'ParentalControlBlock_glow_d5',
                    },
                    bt = Be(
                        ({ className: e, popoverContentId: u }) =>
                            n().createElement(
                                'div',
                                { className: g()(pt.base, e) },
                                n().createElement('img', {
                                    className: pt.icon,
                                    src: R.images.gui.maps.icons.account_dashboard.parental_control.parental_icon(),
                                }),
                                n().createElement(
                                    'div',
                                    { className: pt.text },
                                    n().createElement(
                                        'h2',
                                        { className: pt.heading },
                                        R.strings.account_dashboard.parentalControl.important(),
                                    ),
                                    n().createElement(
                                        'div',
                                        { className: pt.description },
                                        n().createElement(
                                            'div',
                                            { className: pt.description_text },
                                            R.strings.account_dashboard.parentalControl.limitEnabled(),
                                        ),
                                        n().createElement(
                                            gt,
                                            {
                                                contentId: u,
                                                decoratorId:
                                                    R.views.common.pop_over_window.pop_over_window.PopOverWindow(
                                                        'resId',
                                                    ),
                                            },
                                            n().createElement('img', {
                                                src: R.images.gui.maps.icons.library.info(),
                                                className: pt.infoIcon,
                                            }),
                                        ),
                                    ),
                                ),
                                n().createElement('div', { className: pt.glow }),
                            ),
                        'model.parentalControl',
                        (e, u) => Object.assign({}, e, u),
                    ),
                    ht = {
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
                    vt = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function ft() {
                    return (
                        (ft =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        ft.apply(this, arguments)
                    );
                }
                const wt = (e) => {
                    let u = e.size,
                        t = e.value,
                        a = e.isEmpty,
                        r = e.fadeInAnimation,
                        o = e.hide,
                        s = e.maximumNumber,
                        i = e.className,
                        l = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                            return n;
                        })(e, vt);
                    const c = a ? null : t,
                        d = 'string' == typeof c;
                    if ((c && !d && c < 0) || 0 === c) return null;
                    const E = c && !d && c > s,
                        _ = g()(
                            ht.base,
                            ht[`base__${u}`],
                            r && ht.base__animated,
                            o && ht.base__hidden,
                            !c && ht.base__pattern,
                            a && ht.base__empty,
                            i,
                        );
                    return n().createElement(
                        'div',
                        ft({ className: _ }, l),
                        n().createElement('div', { className: ht.bg }),
                        n().createElement('div', { className: ht.pattern }),
                        n().createElement(
                            'div',
                            { className: g()(ht.value, d && ht.value__text) },
                            E ? s : c,
                            E && n().createElement('span', { className: ht.plus }, '+'),
                        ),
                    );
                };
                wt.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
                const kt = 'Flame_base_90',
                    yt = 'Flame_slides_58',
                    xt = 'Flame_frame_29',
                    St = (0, a.memo)(({ className: e }) => {
                        const u = (() => {
                            const e = R.images.gui.maps.icons.dogtags.icons.flame;
                            return Array(42)
                                .fill(null)
                                .map((u, t) => {
                                    const a = `flame_${`0${t}`.slice(-2)}`;
                                    return a in e ? e[a]() : e.flame_00();
                                });
                        })();
                        return n().createElement(
                            'div',
                            { className: g()(kt, e), 'data-testid': 'Flame' },
                            n().createElement(
                                'div',
                                { className: yt },
                                u.map((e) => n().createElement('img', { key: e, src: e, className: xt })),
                            ),
                        );
                    }),
                    Nt = {
                        base: 'PersonalDogTagBlock_base_3c',
                        base__disabled: 'PersonalDogTagBlock_base__disabled_30',
                        base_background: 'PersonalDogTagBlock_base_background_95',
                        hover: 'PersonalDogTagBlock_hover_79',
                        heading: 'PersonalDogTagBlock_heading_8e',
                        dogTag: 'PersonalDogTagBlock_dogTag_d8',
                        dogTag_engraving: 'PersonalDogTagBlock_dogTag_engraving_ee',
                        dogTag_background: 'PersonalDogTagBlock_dogTag_background_c1',
                        dogTag_highlight: 'PersonalDogTagBlock_dogTag_highlight_d3',
                        counter: 'PersonalDogTagBlock_counter_7c',
                        temporarilyUnavailable: 'PersonalDogTagBlock_temporarilyUnavailable_07',
                    },
                    Tt = ['className'];
                const Mt = {
                        get heading() {
                            return R.strings.account_dashboard.personalDogTag.heading();
                        },
                        get temporarilyUnavailable() {
                            return R.strings.account_dashboard.temporarilyUnavailable();
                        },
                    },
                    Rt = Be(
                        (e) => {
                            let u = e.className,
                                t = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        n = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                    return n;
                                })(e, Tt);
                            const r = t.isEnabled,
                                o = t.isHighlighted,
                                s = t.background,
                                i = t.engraving,
                                l = t.counter,
                                c = t.onClick,
                                d = !r,
                                E = (0, a.useCallback)(() => {
                                    r && (c(), I('play'));
                                }, [c, r]),
                                _ = (0, a.useCallback)(() => {
                                    r && I('highlight');
                                }, [r]);
                            return n().createElement(
                                'div',
                                {
                                    className: g()(Nt.base, d && Nt.base__disabled, o && Nt.base__highlighted, u),
                                    onClick: E,
                                    onMouseEnter: _,
                                    id: 'dashboard-dogtag-block',
                                },
                                n().createElement('div', { className: Nt.base_background }),
                                n().createElement('div', { className: Nt.hover }),
                                n().createElement('h2', { className: Nt.heading }, Mt.heading),
                                r &&
                                    n().createElement(
                                        'div',
                                        { className: Nt.dogTag },
                                        l > 0 &&
                                            n().createElement(
                                                'div',
                                                { className: Nt.counter },
                                                n().createElement(wt, { value: l }),
                                            ),
                                        n().createElement('img', {
                                            className: Nt.dogTag_background,
                                            src: ((A = s), R.images.gui.maps.icons.dogtags.small.backgrounds[A]()),
                                            alt: 'background',
                                        }),
                                        n().createElement('img', {
                                            className: Nt.dogTag_engraving,
                                            src: ((m = i), R.images.gui.maps.icons.dogtags.small.engravings[m]()),
                                            alt: 'engraving',
                                        }),
                                        o && n().createElement(St, { className: Nt.dogTag_highlight }),
                                    ),
                                d &&
                                    n().createElement(
                                        'p',
                                        { className: Nt.temporarilyUnavailable },
                                        Mt.temporarilyUnavailable,
                                    ),
                            );
                            var m, A;
                        },
                        'model.dogTags',
                        (e, u) => Object.assign({}, e, u),
                    ),
                    Pt = 'PlayerSubscriptionsBlock_base_47',
                    Lt = 'PlayerSubscriptionsBlock_base__disabled_aa',
                    Ot = 'PlayerSubscriptionsBlock_title_3b',
                    It = 'PlayerSubscriptionsBlock_base_background_0b',
                    Ht = 'PlayerSubscriptionsBlock_subtitle_5f',
                    Wt = 'PlayerSubscriptionsBlock_hover_7a',
                    Ut = 'PlayerSubscriptionsBlock_disabledPattern_92',
                    $t = Be(
                        ({ className: e, isEnabled: u, onClick: t }) => {
                            const r = (0, a.useCallback)(() => {
                                    u && (t(), I('play'));
                                }, [t, u]),
                                o = (0, a.useCallback)(() => {
                                    u && I('highlight');
                                }, [u]);
                            return n().createElement(
                                'div',
                                { className: g()(Pt, !u && Lt, e), onClick: r, onMouseEnter: o },
                                n().createElement('div', { className: It }),
                                n().createElement('div', { className: Wt }),
                                !u && n().createElement('div', { className: Ut }),
                                n().createElement(
                                    'div',
                                    { className: Ot },
                                    R.strings.player_subscriptions.dashboard.title(),
                                ),
                                n().createElement(
                                    'div',
                                    { className: Ht },
                                    u
                                        ? R.strings.player_subscriptions.dashboard.activate()
                                        : R.strings.player_subscriptions.dashboard.unavailable(),
                                ),
                            );
                        },
                        'model.subscriptions',
                        (e, u) => Object.assign({}, e, u),
                    );
                let jt, Gt, zt;
                !(function (e) {
                    (e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                })(jt || (jt = {})),
                    (function (e) {
                        (e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.equipCoin = 'equipCoin');
                    })(Gt || (Gt = {})),
                    (function (e) {
                        (e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG');
                    })(zt || (zt = {}));
                const Xt = ({ format: e, value: u }) => {
                        const t = ((e, u = 'integral') => {
                            let t;
                            t = 'gold' === u ? J.B3.GOLD : J.B3.INTEGRAL;
                            return void 0 === e ? '' : J.Z5.getNumberFormat(e, t);
                        })(u, e);
                        return t ? n().createElement('span', null, t) : null;
                    },
                    Vt = {
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
                    qt = ({
                        isDiscount: e,
                        isInteractiveDiscount: u,
                        size: t,
                        type: a,
                        isEnough: r,
                        value: o,
                        discountValue: s,
                        showPlus: i,
                        stockBackgroundName: l = zt.Red,
                    }) => {
                        const c = g()(Vt.value, Vt[`value__${a}`], !r && Vt.value__notEnough),
                            d = g()(Vt.icon, Vt[`icon__${a}-${t}`]),
                            E = g()(Vt.stock, s && Vt.stock__indent, u && Vt.stock__interactive),
                            _ = i && o > 0 && '+',
                            m = g()(Vt.base, Vt[`base__${t}`]);
                        return n().createElement(
                            'span',
                            { className: m },
                            n().createElement(
                                'span',
                                { className: c },
                                _,
                                n().createElement(Xt, { value: o, format: a === Gt.gold ? 'gold' : 'integral' }),
                            ),
                            n().createElement('span', { className: d }),
                            e &&
                                n().createElement(
                                    'span',
                                    { className: E },
                                    n().createElement('span', {
                                        className: Vt.stockBackground,
                                        style: { backgroundImage: `url(R.images.gui.maps.icons.library.${l})` },
                                    }),
                                    Boolean(s) && s,
                                ),
                        );
                    };
                qt.defaultProps = { isEnough: !0 };
                const Kt = n().memo(qt),
                    Yt = {
                        base: 'PremiumAccountBlock_base_2e',
                        base__wotPremiumActive: 'PremiumAccountBlock_base__wotPremiumActive_89',
                        base__onlyWgPremiumActive: 'PremiumAccountBlock_base__onlyWgPremiumActive_0d',
                        hover: 'PremiumAccountBlock_hover_95',
                        base__disabled: 'PremiumAccountBlock_base__disabled_69',
                        emblem: 'PremiumAccountBlock_emblem_89',
                        emblem_symbol: 'PremiumAccountBlock_emblem_symbol_5c',
                        header: 'PremiumAccountBlock_header_fd',
                        wotPremiumTimeLeft: 'PremiumAccountBlock_wotPremiumTimeLeft_7c',
                        wgPremiumTimeLeft: 'PremiumAccountBlock_wgPremiumTimeLeft_f1',
                        wotPremiumBenefits: 'PremiumAccountBlock_wotPremiumBenefits_be',
                        upgradeExperience: 'PremiumAccountBlock_upgradeExperience_b0',
                        upgradeCreditReserve: 'PremiumAccountBlock_upgradeCreditReserve_4f',
                        upgradePremiumMissions: 'PremiumAccountBlock_upgradePremiumMissions_96',
                        upgradeExcludeMapSlot: 'PremiumAccountBlock_upgradeExcludeMapSlot_23',
                        upgradePlatoonBonusCredits: 'PremiumAccountBlock_upgradePlatoonBonusCredits_70',
                        mainBenefits: 'PremiumAccountBlock_mainBenefits_68',
                        xpBonus: 'PremiumAccountBlock_xpBonus_bb',
                        creditBonus: 'PremiumAccountBlock_creditBonus_28',
                        platoonBonus: 'PremiumAccountBlock_platoonBonus_63',
                        otherBenefits: 'PremiumAccountBlock_otherBenefits_6a',
                        table: 'PremiumAccountBlock_table_39',
                        standardAccount: 'PremiumAccountBlock_standardAccount_ab',
                        premiumAccount: 'PremiumAccountBlock_premiumAccount_85',
                    };
                function Qt() {
                    return (
                        (Qt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Qt.apply(this, arguments)
                    );
                }
                const Zt = R.strings.account_dashboard.premiumAccount,
                    Jt = (e) => {
                        const u = ne(e),
                            t = ['days', 'hours'].find((e) => u[e] > 0);
                        return t ? z(R.strings.common.duration[t](), { [t]: u[t] + 1 }) : Zt.minimumTimeLeft();
                    },
                    ea = (e) =>
                        e
                            .split('\n')
                            .reduce(
                                (e, u, t) => (
                                    t > 0 && e.push(n().createElement('br', { key: `br-${t}` })),
                                    e.push(n().createElement('div', { className: Yt.header_line, key: t }, u)),
                                    e
                                ),
                                [],
                            ),
                    ua = Be(
                        ({
                            className: e,
                            wotPremiumSecondsLeft: u,
                            wgPremiumSecondsLeft: t,
                            xpBonus: r,
                            creditBonus: o,
                            platoonBonus: s,
                            standardAccountCredits: i,
                            standardAccountXp: l,
                            premiumAccountCredits: c,
                            premiumAccountXp: d,
                            onClick: E,
                        }) => {
                            const _ = oe(u),
                                m = oe(t),
                                A = u > 0,
                                F = t > 0,
                                D = !A && !F,
                                B = F && !A,
                                C = (0, a.useCallback)(() => {
                                    E(), I('play');
                                }, [E]),
                                p = (0, a.useCallback)(() => {
                                    I('highlight');
                                }, []);
                            return n().createElement(
                                'div',
                                {
                                    className: g()(
                                        Yt.base,
                                        e,
                                        A && Yt.base__wotPremiumActive,
                                        B && Yt.base__onlyWgPremiumActive,
                                    ),
                                    onClick: C,
                                    onMouseEnter: p,
                                },
                                n().createElement('div', { className: Yt.hover }),
                                A &&
                                    n().createElement(
                                        n().Fragment,
                                        null,
                                        n().createElement(
                                            'div',
                                            { className: Yt.emblem },
                                            n().createElement('div', { className: Yt.emblem_symbol }),
                                        ),
                                        n().createElement('h2', { className: Yt.header }, Zt.WoTPremiumAccount()),
                                        n().createElement('div', { className: Yt.wotPremiumTimeLeft }, Jt(_)),
                                        F &&
                                            n().createElement(
                                                'div',
                                                { className: Yt.wgPremiumTimeLeft, 'data-testid': 'wgPremiumTimeLeft' },
                                                Zt.WGPremium(),
                                                ' ',
                                                Jt(m),
                                            ),
                                    ),
                                B &&
                                    n().createElement(
                                        n().Fragment,
                                        null,
                                        n().createElement(
                                            'h2',
                                            { className: Yt.header, 'data-testid': 'onlyWgHeader' },
                                            ea(Zt.upgrade.toWoTPremiumAccount()),
                                        ),
                                        n().createElement(
                                            'div',
                                            { className: Yt.wotPremiumBenefits },
                                            n().createElement(
                                                'div',
                                                { className: Yt.upgradeExperience },
                                                Zt.upgrade.experience(),
                                            ),
                                            n().createElement(
                                                'div',
                                                { className: Yt.upgradeCreditReserve },
                                                Zt.upgrade.creditReserve(),
                                            ),
                                            n().createElement(
                                                'div',
                                                { className: Yt.upgradePremiumMissions },
                                                Zt.upgrade.premiumMissions(),
                                            ),
                                            n().createElement(
                                                'div',
                                                { className: Yt.upgradeExcludeMapSlot },
                                                Zt.upgrade.excludeMapSlot(),
                                            ),
                                            n().createElement(
                                                'div',
                                                { className: Yt.upgradePlatoonBonusCredits },
                                                Zt.upgrade.platoonBonusCredits(),
                                            ),
                                        ),
                                    ),
                                D &&
                                    n().createElement(
                                        n().Fragment,
                                        null,
                                        n().createElement(
                                            'h2',
                                            { className: Yt.header, 'data-testid': 'header' },
                                            ea(Zt.tryWoTPremiumAccount()),
                                        ),
                                        n().createElement(
                                            'div',
                                            { className: Yt.mainBenefits },
                                            n().createElement('div', { className: Yt.xpBonus }, '+', r, '%'),
                                            n().createElement('div', { className: Yt.creditBonus }, '+', o, '%'),
                                            n().createElement('div', { className: Yt.platoonBonus }, '+', s, '%'),
                                        ),
                                        n().createElement('div', { className: Yt.otherBenefits }, Zt.otherBenefits()),
                                    ),
                                !B &&
                                    n().createElement(
                                        'div',
                                        { className: Yt.table },
                                        n().createElement(
                                            'div',
                                            { className: Yt.standardAccount },
                                            n().createElement('p', null, Zt.standardAccount()),
                                            n().createElement(
                                                'p',
                                                null,
                                                n().createElement(Kt, { type: Gt.credits, size: jt.small, value: i }),
                                            ),
                                            n().createElement(
                                                'p',
                                                null,
                                                n().createElement(Kt, { type: Gt.xp, size: jt.small, value: l }),
                                            ),
                                        ),
                                        n().createElement(
                                            'div',
                                            { className: Yt.premiumAccount },
                                            n().createElement('p', null, Zt.WoTPremium()),
                                            n().createElement(
                                                'p',
                                                null,
                                                n().createElement(Kt, { type: Gt.credits, size: jt.small, value: c }),
                                            ),
                                            n().createElement(
                                                'p',
                                                null,
                                                n().createElement(Kt, { type: Gt.xp, size: jt.small, value: d }),
                                            ),
                                        ),
                                    ),
                            );
                        },
                        'model.premiumAccount',
                        (e, u) => {
                            let t = Qt({}, e);
                            return Object.assign({}, t, u);
                        },
                    ),
                    ta = 'PremiumQuestsBlock_base_1a',
                    aa = 'PremiumQuestsBlock_base__locked_e0',
                    na = 'PremiumQuestsBlock_base__disabled_07',
                    ra = 'PremiumQuestsBlock_base_background_a4',
                    oa = 'PremiumQuestsBlock_hover_ff',
                    sa = 'PremiumQuestsBlock_heading_e0',
                    ia = 'PremiumQuestsBlock_quests_9f',
                    la = 'PremiumQuestsBlock_quest1_63',
                    ca = 'PremiumQuestsBlock_quest2_27',
                    da = 'PremiumQuestsBlock_quest3_ce',
                    Ea = 'PremiumQuestsBlock_line_b0',
                    _a = 'PremiumQuestsBlock_temporarilyUnavailable_ef',
                    ma = ['className'];
                const Aa = {
                        get heading() {
                            return R.strings.account_dashboard.premiumQuests.heading();
                        },
                        get temporarilyUnavailable() {
                            return R.strings.account_dashboard.temporarilyUnavailable();
                        },
                    },
                    Fa = [
                        'PremiumQuestsBlock_quests__completed0_5d',
                        'PremiumQuestsBlock_quests__completed1_97',
                        'PremiumQuestsBlock_quests__completed2_0a',
                        'PremiumQuestsBlock_quests__completed3_fc',
                    ],
                    Da = Be(
                        (e) => {
                            let u = e.className,
                                t = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        n = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                    return n;
                                })(e, ma);
                            const r = t.isEnabled,
                                o = t.completedMissionsCount,
                                s = t.onClick,
                                i = !r,
                                l = o > -1 && r,
                                c = o <= -1 && r,
                                d = (0, a.useCallback)(() => {
                                    r && (s(), I('play'));
                                }, [s, r]),
                                E = (0, a.useCallback)(() => {
                                    r && I('highlight');
                                }, [r]);
                            return n().createElement(
                                'div',
                                { className: g()(ta, c && aa, i && na, u), onClick: d, onMouseEnter: E },
                                n().createElement('div', { className: ra }),
                                n().createElement('div', { className: oa }),
                                n().createElement('h2', { className: sa }, Aa.heading),
                                l &&
                                    n().createElement(
                                        'div',
                                        { className: g()(ia, Fa[o]), 'data-testid': 'quests' },
                                        n().createElement('div', { className: la }),
                                        n().createElement('div', { className: Ea }),
                                        n().createElement('div', { className: ca }),
                                        n().createElement('div', { className: Ea }),
                                        n().createElement('div', { className: da }),
                                    ),
                                i && n().createElement('p', { className: _a }, Aa.temporarilyUnavailable),
                            );
                        },
                        'model.premiumQuests',
                        (e, u) => Object.assign({}, e, u),
                    );
                let Ba, Ca;
                !(function (e) {
                    (e.Timer = 'timer'), (e.Countdown = 'countdown'), (e.Cooldown = 'cooldown'), (e.None = 'none');
                })(Ba || (Ba = {})),
                    (function (e) {
                        (e.Description = 'description'),
                            (e.Short = 'short'),
                            (e.Long = 'long'),
                            (e.Extended = 'extended');
                    })(Ca || (Ca = {}));
                const ga = 'Countdown_base_fe',
                    pa = 'Countdown_icon_8b',
                    ba = 'Countdown_description_8d',
                    ha = (e) => e.toString().padStart(2, '0'),
                    va = (e, u) => {
                        switch (u) {
                            case Ca.Description:
                                return ((e, u = !0) =>
                                    e.days > 7 && u
                                        ? z(R.strings.common.duration.days(), { days: e.days })
                                        : e.days >= 1
                                          ? 0 === e.hours
                                              ? z(R.strings.common.duration.days(), { days: e.days })
                                              : `${z(R.strings.common.duration.days(), { days: e.days })} ${z(R.strings.common.duration.hours(), { hours: e.hours })}`
                                          : e.hours >= 1
                                            ? 0 === e.minutes
                                                ? z(R.strings.common.duration.hours(), { hours: e.hours })
                                                : `${z(R.strings.common.duration.hours(), { hours: e.hours })} ${z(R.strings.common.duration.minutes(), { minutes: e.minutes })}`
                                            : z(R.strings.common.duration.minutes(), { minutes: e.minutes || 1 }))(e);
                            case Ca.Short:
                                return `${ha(e.minutes)}:${ha(e.seconds)}`;
                            case Ca.Long:
                                return `${ha(e.hours)}:${ha(e.minutes)}:${ha(e.seconds)}`;
                            case Ca.Extended:
                                return `${z(R.strings.common.duration.days(), { days: e.days })} | ${ha(e.hours)}:${ha(e.minutes)}:${ha(e.seconds)}`;
                        }
                    },
                    fa = R.images.gui.maps.icons.components.countdown,
                    wa = (e, u) => {
                        const t = 2 === u ? fa.big : fa;
                        switch (e) {
                            case Ba.Timer:
                                return t.clock();
                            case Ba.Countdown:
                                return t.hourglass();
                            case Ba.Cooldown:
                                return t.lock();
                        }
                    },
                    ka = (0, a.memo)(
                        ({
                            duration: e,
                            icon: u = Ba.Timer,
                            style: t = Ca.Description,
                            onTimeReached: r,
                            className: s = '',
                            classNames: i = {},
                            labelFormat: l = '',
                        }) => {
                            const c = t !== Ca.Description ? 1 : void 0,
                                d = Fe(e, c),
                                E = (() => {
                                    const e = (0, a.useState)(o.O.view.getScale()),
                                        u = e[0],
                                        t = e[1];
                                    return (
                                        (0, a.useEffect)(() => {
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
                            r && r[d] && r[d]();
                            const _ = va(ne(d), t);
                            return n().createElement(
                                'div',
                                { className: g()(ga, s) },
                                u !== Ba.None &&
                                    n().createElement('div', {
                                        className: g()(pa, i.icon),
                                        style: { backgroundImage: `url('${wa(u, E)}')` },
                                    }),
                                l
                                    ? n().createElement(
                                          'div',
                                          { className: g()(ba, i.text) },
                                          n().createElement(xe, { text: l, binding: { timerText: _ } }),
                                      )
                                    : n().createElement('div', { className: g()(ba, i.text) }, _),
                            );
                        },
                    );
                let ya;
                !(function (e) {
                    (e.PremiumActive = 'premium'),
                        (e.SubscriptionActive = 'subscription'),
                        (e.AllActive = 'allActive'),
                        (e.AllDisabled = 'allDisabled');
                })(ya || (ya = {}));
                const xa = {
                        base: 'ReserveStockBlock_base_68',
                        base__premium: 'ReserveStockBlock_base__premium_73',
                        base__subscription: 'ReserveStockBlock_base__subscription_47',
                        base__allActive: 'ReserveStockBlock_base__allActive_a6',
                        base__allDisabled: 'ReserveStockBlock_base__allDisabled_6b',
                        base_background: 'ReserveStockBlock_base_background_ee',
                        base__locked: 'ReserveStockBlock_base__locked_56',
                        footerContainer: 'ReserveStockBlock_footerContainer_78',
                        text: 'ReserveStockBlock_text_93',
                        title: 'ReserveStockBlock_title_15',
                        base__locked__full: 'ReserveStockBlock_base__locked__full_20',
                        base__locked__empty: 'ReserveStockBlock_base__locked__empty_d6',
                        cornerHighlight: 'ReserveStockBlock_cornerHighlight_74',
                        countdownContainer: 'ReserveStockBlock_countdownContainer_45',
                        base__disabled: 'ReserveStockBlock_base__disabled_c5',
                        blockTitle: 'ReserveStockBlock_blockTitle_13',
                        hover: 'ReserveStockBlock_hover_9c',
                        title__full: 'ReserveStockBlock_title__full_b6',
                        currencyContainer: 'ReserveStockBlock_currencyContainer_ed',
                        divider: 'ReserveStockBlock_divider_64',
                        disabled: 'ReserveStockBlock_disabled_f3',
                        disabledSubtitle: 'ReserveStockBlock_disabledSubtitle_87',
                        disabledSubtitle__empty: 'ReserveStockBlock_disabledSubtitle__empty_58',
                        disabledPattern: 'ReserveStockBlock_disabledPattern_ca',
                        lock: 'ReserveStockBlock_lock_6e',
                        checkmark: 'ReserveStockBlock_checkmark_6f',
                    },
                    Sa = 'ReserveCurrency_base_e0',
                    Na = 'ReserveCurrency_currencyHeader_5d',
                    Ta = 'ReserveCurrency_currencyHeader__disabled_94',
                    Ma = 'ReserveCurrency_currencyLocker_47',
                    Ra = 'ReserveCurrency_currencyValue_6a',
                    Pa = 'ReserveCurrency_currencyValue__locked_c0',
                    La = 'ReserveCurrency_currencyCheckmark_eb',
                    Oa = 'ReserveCurrency_disabledWrapper_99',
                    Ia = 'ReserveCurrency_disabledBg_ed',
                    Ha = 'ReserveCurrency_disabled_a9',
                    Wa = ({
                        isCurrencyLocked: e,
                        currencyMaxAmount: u,
                        currencyCurrentAmount: t,
                        title: a,
                        type: r,
                        isEnabled: o = !0,
                        isFullCurrency: s = !1,
                        size: i = 'small',
                    }) =>
                        n().createElement(
                            'div',
                            { className: Sa },
                            n().createElement('div', { className: g()(Na, !o && Ta) }, a),
                            o
                                ? n().createElement(
                                      n().Fragment,
                                      null,
                                      e && n().createElement('div', { className: Ma }),
                                      n().createElement(
                                          'div',
                                          { className: g()(Ra, e && Pa) },
                                          s && n().createElement('div', { className: La }),
                                          n().createElement(Kt, { size: i, type: r, value: s ? u : t }),
                                      ),
                                  )
                                : n().createElement(
                                      'div',
                                      { className: Oa },
                                      n().createElement('div', { className: Ia }),
                                      n().createElement('div', { className: Ha }),
                                  ),
                        ),
                    Ua = {
                        creditsTitle: R.strings.currency_reserves.credits.title(),
                        goldTitle: R.strings.currency_reserves.gold.title(),
                        reserveFull: R.strings.account_dashboard.reserveStock.reserveFull(),
                        suspended: R.strings.account_dashboard.reserveStock.suspended(),
                        emptyDisabledSubtitle: R.strings.account_dashboard.reserveStock.emptyDisabledSubtitle(),
                        unavailable: R.strings.account_dashboard.reserveStock.unavailable(),
                    },
                    $a = ({
                        countdownSeconds: e,
                        isOpeningSoon: u,
                        creditCurrentAmount: t,
                        creditMaxAmount: a,
                        goldCurrentAmount: r,
                        goldMaxAmount: o,
                        isPremiumActive: s,
                        isSubscriptionActive: i,
                        isEnabledCredits: l,
                        isEnabledGold: c,
                        handleClick: d,
                    }) => {
                        const E = t >= a,
                            _ = r >= o,
                            m = g()(
                                xa.base,
                                xa[
                                    `base__${((e, u) => (e && u ? ya.AllActive : e && !u ? ya.PremiumActive : !e && u ? ya.SubscriptionActive : ya.AllDisabled))(s, i)}`
                                ],
                            );
                        return n().createElement(
                            'div',
                            {
                                className: m,
                                onClick: d,
                                onMouseEnter: () => {
                                    l && I('highlight');
                                },
                                'data-testid': 'block',
                            },
                            n().createElement('div', { className: xa.base_background }),
                            n().createElement('div', { className: xa.hover }),
                            n().createElement(
                                'div',
                                { className: xa.countdownContainer },
                                n().createElement(ka, { duration: e }),
                            ),
                            u &&
                                n().createElement('div', {
                                    className: xa.cornerHighlight,
                                    'data-testid': 'openingSoon',
                                }),
                            n().createElement(
                                'div',
                                { className: xa.currencyContainer },
                                n().createElement(Wa, {
                                    title: Ua.creditsTitle,
                                    currencyCurrentAmount: t,
                                    currencyMaxAmount: a,
                                    type: 'credits',
                                    size: 'small',
                                    isFullCurrency: E,
                                    isCurrencyLocked: !s,
                                    isEnabled: l,
                                }),
                                n().createElement('div', { className: xa.divider }),
                                n().createElement(Wa, {
                                    title: Ua.goldTitle,
                                    currencyCurrentAmount: r,
                                    currencyMaxAmount: o,
                                    type: 'gold',
                                    size: 'small',
                                    isFullCurrency: _,
                                    isEnabled: c,
                                    isCurrencyLocked: !i,
                                }),
                            ),
                        );
                    },
                    ja = {
                        get blockTitle() {
                            return R.strings.account_dashboard.reserveStock.blockTitle();
                        },
                        get reserveFull() {
                            return R.strings.account_dashboard.reserveStock.reserveFull();
                        },
                        get suspended() {
                            return R.strings.account_dashboard.reserveStock.suspended();
                        },
                        get emptyDisabledSubtitle() {
                            return R.strings.account_dashboard.reserveStock.emptyDisabledSubtitle();
                        },
                        get unavailable() {
                            return R.strings.account_dashboard.reserveStock.unavailable();
                        },
                    },
                    Ga = Be(
                        ({
                            className: e,
                            creditCurrentAmount: u,
                            creditMaxAmount: t,
                            openingTime: r,
                            openingSoonThreshold: o,
                            isPremiumActive: s,
                            goldCurrentAmount: i,
                            goldMaxAmount: l,
                            isEnabled: c,
                            isEnabledGold: d,
                            isSubscriptionActive: E,
                            isSubscriptionAvailable: _,
                            onClick: m,
                        }) => {
                            const A = w().mediaSize >= h.Medium,
                                F = u >= t,
                                D = F && !s && c,
                                B = 0 === u && !s && c,
                                C = r - Math.floor(Date.now() / 1e3),
                                p = C > 0 ? C : 0,
                                b = p <= o,
                                v = n().createElement(Kt, { size: 'small', type: 'credits', value: t }),
                                f = g()(
                                    xa.base,
                                    (!s || !c) && xa.base__locked,
                                    D && xa.base__locked__full,
                                    (B || !c) && xa.base__locked__empty,
                                    !c && xa.base__disabled,
                                    e,
                                ),
                                k = (0, a.useCallback)(() => {
                                    m(), I('play');
                                }, [m]),
                                y = (0, a.useCallback)(() => {
                                    c && I('highlight');
                                }, [c]);
                            if (_)
                                return n().createElement($a, {
                                    countdownSeconds: p,
                                    isOpeningSoon: b,
                                    creditCurrentAmount: u,
                                    creditMaxAmount: t,
                                    goldCurrentAmount: i,
                                    goldMaxAmount: l,
                                    isSubscriptionActive: E,
                                    isPremiumActive: s,
                                    isEnabledCredits: c,
                                    isEnabledGold: d,
                                    handleClick: k,
                                });
                            return n().createElement(
                                'div',
                                { className: f, onClick: k, onMouseEnter: y, 'data-testid': 'block' },
                                n().createElement('div', { className: xa.base_background }),
                                n().createElement('div', { className: xa.hover }),
                                n().createElement(
                                    'div',
                                    { className: xa.countdownContainer },
                                    n().createElement(ka, { duration: p }),
                                ),
                                b &&
                                    n().createElement('div', {
                                        className: xa.cornerHighlight,
                                        'data-testid': 'openingSoon',
                                    }),
                                ((e, a) =>
                                    a && e
                                        ? n().createElement(
                                              'div',
                                              { className: xa.text },
                                              F
                                                  ? n().createElement(
                                                        'div',
                                                        { className: g()(xa.title, xa.title__full) },
                                                        ja.reserveFull,
                                                        n().createElement('div', { className: xa.checkmark }),
                                                    )
                                                  : n().createElement('div', { className: xa.title }, ja.blockTitle),
                                              n().createElement(
                                                  'div',
                                                  { className: xa.footerContainer, 'data-testid': 'footer' },
                                                  n().createElement(Kt, {
                                                      size: A ? 'large' : 'big',
                                                      type: 'credits',
                                                      value: F ? t : u,
                                                  }),
                                              ),
                                          )
                                        : n().createElement(
                                              n().Fragment,
                                              null,
                                              n().createElement(
                                                  'div',
                                                  { className: xa.text },
                                                  n().createElement(
                                                      'div',
                                                      { className: xa.title },
                                                      n().createElement(
                                                          'div',
                                                          { className: xa.blockTitle },
                                                          ja.blockTitle,
                                                      ),
                                                      n().createElement('div', { className: xa.lock }),
                                                  ),
                                                  n().createElement(
                                                      'div',
                                                      { className: xa.disabledSubtitle, 'data-testid': 'disabled' },
                                                      B || !e
                                                          ? n().createElement(xe, {
                                                                text: ja.emptyDisabledSubtitle,
                                                                binding: { creditMaxAmount: v },
                                                                classMix: xa.disabledSubtitle__empty,
                                                            })
                                                          : ja.suspended,
                                                  ),
                                              ),
                                              n().createElement(
                                                  'div',
                                                  { className: xa.footerContainer, 'data-testid': 'footer' },
                                                  e
                                                      ? n().createElement(Kt, {
                                                            size: A ? 'large' : 'big',
                                                            type: 'credits',
                                                            value: F ? t : u,
                                                        })
                                                      : n().createElement(
                                                            'div',
                                                            { className: xa.disabled },
                                                            ja.unavailable,
                                                        ),
                                              ),
                                          ))(c, s),
                            );
                        },
                        'model.reserveStock',
                        (e, u) => Object.assign({}, e, u),
                    ),
                    za = 'AccountDashboardApp_base_b3',
                    Xa = 'AccountDashboardApp_close_23',
                    Va = 'AccountDashboardApp_header_0f',
                    qa = 'AccountDashboardApp_cards_eb',
                    Ka = 'AccountDashboardApp_mainBlock_0a',
                    Ya = 'AccountDashboardApp_footer_56',
                    Qa = 'AccountDashboardApp_block_19',
                    Za = 'AccountDashboardApp_block__header_21',
                    Ja = 'AccountDashboardApp_block__playerSubscriptions_de',
                    en = 'AccountDashboardApp_block__premiumAccount_f0',
                    un = 'AccountDashboardApp_block__bonusXp_b3',
                    tn = 'AccountDashboardApp_block__reserveStock_c6',
                    an = 'AccountDashboardApp_block__personalDogTag_03',
                    nn = 'AccountDashboardApp_block__premiumQuests_1a',
                    rn = 'AccountDashboardApp_block__bannedMaps_68',
                    on = 'AccountDashboardApp_block__parentalControl_42',
                    sn = ['onClose'];
                function ln() {
                    return (
                        (ln =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        ln.apply(this, arguments)
                    );
                }
                const cn = { close: R.strings.account_dashboard.close() },
                    dn = (e) => () => e(),
                    En = Be(
                        (e) => {
                            let u = e.onClose,
                                t = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        n = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                    return n;
                                })(e, sn);
                            const r = t.isParentalControlEnabled,
                                o = t.isPlayerSubscriptionsEntrypointHidden;
                            var s;
                            (s = () => u()), be(ge.n.ESCAPE, s);
                            const i = w().mediaSize < h.Small,
                                l = ve('DogTagsWidget', he),
                                c = ve('NewBadgeHintBtn', he);
                            (0, a.useEffect)(
                                () =>
                                    Ce(() => {
                                        null !== l && l.completeEffect();
                                    }),
                                [l],
                            ),
                                (0, a.useEffect)(
                                    () =>
                                        Ce(() => {
                                            null !== c && c.completeEffect();
                                        }),
                                    [c],
                                );
                            const d = ke('DogTagsWidget', we);
                            (0, a.useEffect)(() => {
                                d && d.runTrigger(!0);
                            }, [d]);
                            const E = ke('NewBadgeHintBtn', we);
                            return (
                                (0, a.useEffect)(() => {
                                    E && E.runTrigger(!0);
                                }, [E]),
                                n().createElement(
                                    'div',
                                    { className: za },
                                    n().createElement(
                                        'div',
                                        { className: Xa },
                                        n().createElement(j, {
                                            caption: i ? '' : cn.close,
                                            type: 'close',
                                            side: 'right',
                                            onClick: dn(u),
                                        }),
                                    ),
                                    n().createElement(
                                        'div',
                                        { className: Ka },
                                        n().createElement(
                                            'div',
                                            { className: Va },
                                            n().createElement(_t, { className: g()(Qa, Za) }),
                                            !o && n().createElement($t, { className: g()(Qa, Ja) }),
                                        ),
                                        n().createElement(
                                            'div',
                                            { className: qa },
                                            n().createElement(ua, { className: g()(Qa, en) }),
                                            n().createElement(Me, { className: g()(Qa, un) }),
                                            n().createElement(Ga, { className: g()(Qa, tn) }),
                                            n().createElement(Rt, { className: g()(Qa, an) }),
                                            n().createElement(Da, { className: g()(Qa, nn) }),
                                            n().createElement(Su, { className: g()(Qa, rn) }),
                                        ),
                                    ),
                                    r &&
                                        n().createElement(
                                            'div',
                                            { className: Ya },
                                            n().createElement(bt, { className: g()(Qa, on) }),
                                        ),
                                )
                            );
                        },
                        'model',
                        (e, u) => {
                            let t = ln({}, e);
                            return Object.assign({}, t, u);
                        },
                    );
                engine.whenReady.then(() => {
                    O().render(
                        n().createElement(P, null, n().createElement(En, null)),
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
        (__webpack_require__.O = (e, u, t, a) => {
            if (!u) {
                var n = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [u, t, a] = deferred[i], r = !0, o = 0; o < u.length; o++)
                        (!1 & a || n >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[o]))
                            ? u.splice(o--, 1)
                            : ((r = !1), a < n && (n = a));
                    if (r) {
                        deferred.splice(i--, 1);
                        var s = t();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > a; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [u, t, a];
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
            var e = { 430: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var a,
                        n,
                        [r, o, s] = t,
                        i = 0;
                    if (r.some((u) => 0 !== e[u])) {
                        for (a in o) __webpack_require__.o(o, a) && (__webpack_require__.m[a] = o[a]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (u && u(t); i < r.length; i++)
                        (n = r[i]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [507], () => __webpack_require__(816));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
