(() => {
    'use strict';
    var __webpack_modules__ = {
            67: (u, e, t) => {
                t.d(e, { O: () => z });
                var n = {};
                t.r(n), t.d(n, { mouse: () => A, onResize: () => E });
                var a = {};
                t.r(a),
                    t.d(a, {
                        events: () => n,
                        getMouseGlobalPosition: () => D,
                        getSize: () => l,
                        graphicsQuality: () => c,
                    });
                var o = {};
                t.r(o), t.d(o, { getBgUrl: () => _, getTextureUrl: () => C });
                var r = {};
                function i(u) {
                    return (e) => (
                        engine.on(u, e),
                        () => {
                            engine.off(u, e);
                        }
                    );
                }
                function s(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                t.r(r),
                    t.d(r, {
                        addModelObserver: () => M,
                        addPreloadTexture: () => f,
                        children: () => o,
                        displayStatus: () => B,
                        displayStatusIs: () => $,
                        events: () => d,
                        extraSize: () => j,
                        forceTriggerMouseMove: () => V,
                        freezeTextureBeforeResize: () => L,
                        getBrowserTexturePath: () => T,
                        getDisplayStatus: () => G,
                        getScale: () => N,
                        getSize: () => O,
                        getViewGlobalPosition: () => S,
                        isEventHandled: () => U,
                        isFocused: () => H,
                        pxToRem: () => P,
                        remToPx: () => R,
                        resize: () => y,
                        sendEvent: () => p,
                        setAnimateWindow: () => I,
                        setEventHandled: () => W,
                        setInputPaddingsRem: () => x,
                        setSidePaddingsRem: () => k,
                        whenTutorialReady: () => K,
                    });
                const E = i('clientResized'),
                    F = { down: i('mousedown'), up: i('mouseup'), move: i('mousemove') };
                const A = (function () {
                    const u = { listeners: 0, enabled: !0, initialized: !1 };
                    function e() {
                        u.enabled && s(!1);
                    }
                    function t() {
                        u.enabled && s(!0);
                    }
                    function n() {
                        u.enabled
                            ? u.listeners < 1
                                ? ((u.initialized = !1),
                                  document.body.removeEventListener('mouseenter', e),
                                  document.body.removeEventListener('mouseleave', t))
                                : u.initialized ||
                                  ((u.initialized = !0),
                                  document.body.addEventListener('mouseenter', e),
                                  document.body.addEventListener('mouseleave', t))
                            : s(!1);
                    }
                    const a = ['down', 'up', 'move'].reduce(
                        (e, t) => (
                            (e[t] = (function (e) {
                                return (t) => {
                                    u.listeners += 1;
                                    let a = !0;
                                    const o = `mouse${e}`,
                                        r = F[e]((u) => t([u, 'outside']));
                                    function i(u) {
                                        t([u, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(o, i),
                                        n(),
                                        () => {
                                            a &&
                                                (r(),
                                                window.removeEventListener(o, i),
                                                (u.listeners -= 1),
                                                n(),
                                                (a = !1));
                                        }
                                    );
                                };
                            })(t)),
                            e
                        ),
                        {},
                    );
                    return Object.assign({}, a, {
                        disable() {
                            (u.enabled = !1), n();
                        },
                        enable() {
                            (u.enabled = !0), n();
                        },
                        enableOutside() {
                            u.enabled && s(!0);
                        },
                        disableOutside() {
                            u.enabled && s(!1);
                        },
                    });
                })();
                function l(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function D(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const c = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function C(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function _(u, e, t) {
                    return `url(${C(u, e, t)})`;
                }
                const B = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    d = {
                        onTextureFrozen: i('self.onTextureFrozen'),
                        onTextureReady: i('self.onTextureReady'),
                        onDomBuilt: i('self.onDomBuilt'),
                        onLoaded: i('self.onLoaded'),
                        onDisplayChanged: i('self.onShowingStatusChanged'),
                        onFocusUpdated: i('self.onFocusChanged'),
                        children: {
                            onAdded: i('children.onAdded'),
                            onLoaded: i('children.onLoaded'),
                            onRemoved: i('children.onRemoved'),
                            onAttached: i('children.onAttached'),
                            onTextureReady: i('children.onTextureReady'),
                            onRequestPosition: i('children.requestPosition'),
                        },
                    },
                    m = ['args'];
                const h = 2,
                    g = 16,
                    b = 32,
                    w = 64,
                    v = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const a = e.args,
                                o = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        n,
                                        a = {},
                                        o = Object.keys(u);
                                    for (n = 0; n < o.length; n++) (t = o[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                    return a;
                                })(e, m);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, o, {
                                          arguments:
                                              ((n = a),
                                              Object.entries(n).map(([u, e]) => {
                                                  const t = 'GFValueProxy';
                                                  switch (typeof e) {
                                                      case 'number':
                                                          return { __Type: t, name: u, number: e };
                                                      case 'boolean':
                                                          return { __Type: t, name: u, bool: e };
                                                      default:
                                                          return { __Type: t, name: u, string: e.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: u });
                        var n;
                    },
                    p = {
                        close(u) {
                            v('popover' === u ? h : b);
                        },
                        minimize() {
                            v(w);
                        },
                        move(u) {
                            v(g, { isMouseEvent: !0, on: u });
                        },
                    };
                function f(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function x(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, 15);
                }
                function T(u, e, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, n);
                }
                function M(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function k(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, 15);
                }
                function O(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function y(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function S(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: R(e.x), y: R(e.y) };
                }
                function L() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function N() {
                    return viewEnv.getScale();
                }
                function P(u) {
                    return viewEnv.pxToRem(u);
                }
                function R(u) {
                    return viewEnv.remToPx(u);
                }
                function I(u, e) {
                    viewEnv.setAnimateWindow(u, e);
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
                function V() {
                    viewEnv.forceTriggerMouseMove();
                }
                function G() {
                    return viewEnv.getShowingStatus();
                }
                const $ = Object.keys(B).reduce((u, e) => ((u[e] = () => viewEnv.getShowingStatus() === B[e]), u), {}),
                    j = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    K = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : d.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]),
                    z = { view: r, client: a };
            },
            521: (u, e, t) => {
                let n, a;
                t.d(e, { n: () => n }),
                    (function (u) {
                        (u[(u.NONE = -1)] = 'NONE'),
                            (u[(u.ALT = 165)] = 'ALT'),
                            (u[(u.ENTER = 13)] = 'ENTER'),
                            (u[(u.ESCAPE = 27)] = 'ESCAPE'),
                            (u[(u.SPACE = 32)] = 'SPACE'),
                            (u[(u.END = 35)] = 'END'),
                            (u[(u.HOME = 36)] = 'HOME'),
                            (u[(u.ARROW_LEFT = 37)] = 'ARROW_LEFT'),
                            (u[(u.ARROW_UP = 38)] = 'ARROW_UP'),
                            (u[(u.ARROW_RIGHT = 39)] = 'ARROW_RIGHT'),
                            (u[(u.ARROW_DOWN = 40)] = 'ARROW_DOWN'),
                            (u[(u.NUM_PLUS = 107)] = 'NUM_PLUS'),
                            (u[(u.NUM_MINUS = 109)] = 'NUM_MINUS'),
                            (u[(u.PLUS = 187)] = 'PLUS'),
                            (u[(u.MINUS = 189)] = 'MINUS'),
                            (u[(u.PAGE_UP = 33)] = 'PAGE_UP'),
                            (u[(u.PAGE_DOWN = 34)] = 'PAGE_DOWN'),
                            (u[(u.BACKSPACE = 8)] = 'BACKSPACE'),
                            (u[(u.DELETE = 46)] = 'DELETE'),
                            (u[(u.TAB = 9)] = 'TAB'),
                            (u[(u.KEY_N = 78)] = 'KEY_N'),
                            (u[(u.KEY_1 = 49)] = 'KEY_1'),
                            (u[(u.KEY_2 = 50)] = 'KEY_2'),
                            (u[(u.KEY_3 = 51)] = 'KEY_3'),
                            (u[(u.KEY_4 = 52)] = 'KEY_4'),
                            (u[(u.KEY_5 = 53)] = 'KEY_5'),
                            (u[(u.KEY_6 = 54)] = 'KEY_6'),
                            (u[(u.KEY_7 = 55)] = 'KEY_7'),
                            (u[(u.KEY_8 = 56)] = 'KEY_8'),
                            (u[(u.KEY_9 = 57)] = 'KEY_9'),
                            (u[(u.CAPS_LOCK = 20)] = 'CAPS_LOCK'),
                            (u[(u.INSERT = 45)] = 'INSERT'),
                            (u[(u.F1 = 112)] = 'F1'),
                            (u[(u.F2 = 113)] = 'F2'),
                            (u[(u.F3 = 114)] = 'F3'),
                            (u[(u.F4 = 115)] = 'F4'),
                            (u[(u.F5 = 116)] = 'F5'),
                            (u[(u.F6 = 117)] = 'F6'),
                            (u[(u.F7 = 118)] = 'F7'),
                            (u[(u.F8 = 119)] = 'F8'),
                            (u[(u.F9 = 120)] = 'F9'),
                            (u[(u.F10 = 121)] = 'F10'),
                            (u[(u.F11 = 122)] = 'F11'),
                            (u[(u.F12 = 123)] = 'F12'),
                            (u[(u.SELECT = 93)] = 'SELECT'),
                            (u[(u.NUMPAD_0 = 96)] = 'NUMPAD_0'),
                            (u[(u.NUMPAD_1 = 97)] = 'NUMPAD_1'),
                            (u[(u.NUMPAD_2 = 98)] = 'NUMPAD_2'),
                            (u[(u.NUMPAD_3 = 99)] = 'NUMPAD_3'),
                            (u[(u.NUMPAD_4 = 100)] = 'NUMPAD_4'),
                            (u[(u.NUMPAD_5 = 101)] = 'NUMPAD_5'),
                            (u[(u.NUMPAD_6 = 102)] = 'NUMPAD_6'),
                            (u[(u.NUMPAD_7 = 103)] = 'NUMPAD_7'),
                            (u[(u.NUMPAD_8 = 104)] = 'NUMPAD_8'),
                            (u[(u.NUMPAD_9 = 105)] = 'NUMPAD_9'),
                            (u[(u.NUM_DECIMAL = 110)] = 'NUM_DECIMAL'),
                            (u[(u.STAR = 106)] = 'STAR'),
                            (u[(u.NUM_SLASH = 111)] = 'NUM_SLASH'),
                            (u[(u.FORWARD_SLASH = 191)] = 'FORWARD_SLASH'),
                            (u[(u.COMMA = 188)] = 'COMMA'),
                            (u[(u.DASH = 189)] = 'DASH'),
                            (u[(u.PERIOD = 190)] = 'PERIOD');
                    })(n || (n = {})),
                    (function (u) {
                        (u.ALT = 'Alt'),
                            (u.ALT_GRAPH = 'AltGraph'),
                            (u.CAPS_LOCK = 'CapsLock'),
                            (u.CONTROL = 'Control'),
                            (u.FN = 'Fn'),
                            (u.FN_LOCK = 'FnLock'),
                            (u.META = 'Meta'),
                            (u.NUM_LOCK = 'NumLock'),
                            (u.SCROLL_LOCK = 'ScrollLock'),
                            (u.SHIFT = 'Shift'),
                            (u.SYMBOL = 'Symbol'),
                            (u.SYMBOL_LOCK = 'SymbolLock');
                    })(a || (a = {}));
            },
            358: (u, e, t) => {
                t.d(e, { Z: () => o });
                var n = t(67);
                class a {
                    constructor() {
                        (this._callbacks = void 0),
                            (this._updateHandler = void 0),
                            (this._views = void 0),
                            (this.clearViewCallbacks = (u) => {
                                this._views[u] &&
                                    (this._views[u].forEach((u) => {
                                        delete this._callbacks[u];
                                    }),
                                    delete this._views[u]);
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
                    addCallback(u, e, t = 0, a = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const o = n.O.view.addModelObserver(u, t, a);
                        return (
                            o > 0
                                ? ((this._callbacks[o] = e),
                                  t > 0 && (this._views[t] ? this._views[t].push(o) : (this._views[t] = [o])))
                                : console.error("Can't add callback for model:", u),
                            o
                        );
                    }
                    removeCallback(u, e = 0) {
                        let t = !1;
                        return (
                            void 0 !== u &&
                                void 0 !== this._callbacks[u] &&
                                ((t = viewEnv.removeDataChangedCallback(u, e)), delete this._callbacks[u]),
                            t || console.error("Can't remove callback by id:", u),
                            t
                        );
                    }
                    _emmitDataChanged(u, e, t) {
                        t.forEach((t) => {
                            const n = this._callbacks[t];
                            void 0 !== n && n(u, e);
                        });
                    }
                }
                a.__instance = void 0;
                const o = a;
            },
            572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
                                    this.callbacks.forEach((u) => {
                                        u(this.data);
                                    });
                            }),
                            (this.dataTracker = new _DataTracker__WEBPACK_IMPORTED_MODULE_0__.Z()),
                            (this.modelPath = path),
                            (this.callbacks = new Set()),
                            (0, _index__WEBPACK_IMPORTED_MODULE_1__.ry)().then(() => {
                                this._addCallback(path),
                                    watchingFields.forEach((u) => {
                                        this._addCallback(path + '.' + u);
                                    }),
                                    this._notifyObservers();
                            });
                    }
                    subscribe(u) {
                        this.callbacks.add(u), null !== this.data && void 0 !== this.data && u(this.data);
                    }
                    unsubscribe(u) {
                        this.callbacks.delete(u);
                    }
                    destroy() {
                        this.dataTracker.clear(), this.callbacks.clear();
                    }
                    _addCallback(u) {
                        this.dataTracker.addCallback(u, this._notifyObservers);
                    }
                }
                const __WEBPACK_DEFAULT_EXPORT__ = ViewModel;
            },
            364: (u, e, t) => {
                t.d(e, { Sw: () => o.Z, B0: () => s, ry: () => d });
                class n {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (u) => {
                                this.entries.forEach(({ container: e, callback: t }) => {
                                    let n = u.target;
                                    do {
                                        if (n === e) return;
                                        n = n.parentNode;
                                    } while (n);
                                    t();
                                });
                            });
                    }
                    static get instance() {
                        return n.__instance || (n.__instance = new n()), n.__instance;
                    }
                    register(u, e) {
                        this.addMouseListener(), this.entries.push({ container: u, callback: e });
                    }
                    unregister(u, e) {
                        const t = u,
                            n = e;
                        (this.entries = this.entries.filter(({ container: u, callback: e }) => u !== t || e !== n)),
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
                var o = t(358);
                const r = {
                        getNumberFormat: (u, e) => systemLocale.getNumberFormat(u, e),
                        getRealFormat: (u, e) => systemLocale.getRealFormat(u, e),
                        getTimeFormat: (u, e) => systemLocale.getTimeFormat(u, e),
                        getDateFormat: (u, e) => systemLocale.getDateFormat(u, e),
                        toUpperCase: (u) => systemLocale.toUpperCase(u),
                        toLowerCase: (u) => systemLocale.toUpperCase(u),
                    },
                    i = {
                        getNumberFormat: (u) => userLocale.getNumberFormat(u),
                        getTimeFormat: (u, e, t) => userLocale.getTimeFormat(u, e, void 0 === t || t),
                        getTimeString: (u, e, t) => userLocale.getTimeString(u, e, void 0 === t || t),
                    };
                let s;
                !(function (u) {
                    (u[(u.UNDEFINED = 0)] = 'UNDEFINED'),
                        (u[(u.TOOLTIP = 1)] = 'TOOLTIP'),
                        (u[(u.POP_OVER = 2)] = 'POP_OVER'),
                        (u[(u.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (u[(u.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (u[(u.MOVE = 16)] = 'MOVE'),
                        (u[(u.CLOSE = 32)] = 'CLOSE'),
                        (u[(u.MINIMIZE = 64)] = 'MINIMIZE');
                })(s || (s = {}));
                const E = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    F = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    A = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    l = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var D = t(521),
                    c = t(67);
                const C = ['args'];
                function _(u, e, t, n, a, o, r) {
                    try {
                        var i = u[o](r),
                            s = i.value;
                    } catch (u) {
                        return void t(u);
                    }
                    i.done ? e(s) : Promise.resolve(s).then(n, a);
                }
                const B = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
                    d = (function () {
                        var u,
                            e =
                                ((u = function* () {
                                    return (
                                        !(!engine._BindingsReady || !engine._WindowLoaded) ||
                                        new Promise((u) => {
                                            engine.on('Ready', u);
                                        })
                                    );
                                }),
                                function () {
                                    var e = this,
                                        t = arguments;
                                    return new Promise(function (n, a) {
                                        var o = u.apply(e, t);
                                        function r(u) {
                                            _(o, n, a, r, i, 'next', u);
                                        }
                                        function i(u) {
                                            _(o, n, a, r, i, 'throw', u);
                                        }
                                        r(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    m = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const a = e.args,
                                o = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        n,
                                        a = {},
                                        o = Object.keys(u);
                                    for (n = 0; n < o.length; n++) (t = o[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                    return a;
                                })(e, C);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, o, {
                                          arguments:
                                              ((n = a),
                                              Object.entries(n).map(([u, e]) => {
                                                  const t = { __Type: 'GFValueProxy', name: u };
                                                  switch (typeof e) {
                                                      case 'number':
                                                          t.number = e;
                                                          break;
                                                      case 'boolean':
                                                          t.bool = e;
                                                          break;
                                                      default:
                                                          t.string = e.toString();
                                                  }
                                                  return t;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, o));
                        } else viewEnv.handleViewEvent({ __Type: t, type: u });
                        var n;
                    },
                    h = () => m(s.CLOSE),
                    g = (u, e) => {
                        u.keyCode === D.n.ESCAPE && e();
                    };
                var b = t(572);
                const w = a.instance,
                    v = {
                        DataTracker: o.Z,
                        ViewModel: b.Z,
                        ViewEventType: s,
                        NumberFormatType: E,
                        RealFormatType: F,
                        TimeFormatType: A,
                        DateFormatType: l,
                        makeGlobalBoundingBox: B,
                        sendMoveEvent: (u) => m(s.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: h,
                        sendClosePopOverEvent: () => m(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            m(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, n, a = R.invalid('resId'), o) => {
                            const r = c.O.view.getViewGlobalPosition(),
                                i = t.getBoundingClientRect(),
                                E = i.x,
                                F = i.y,
                                A = i.width,
                                l = i.height,
                                D = {
                                    x: c.O.view.pxToRem(E) + r.x,
                                    y: c.O.view.pxToRem(F) + r.y,
                                    width: c.O.view.pxToRem(A),
                                    height: c.O.view.pxToRem(l),
                                };
                            m(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: e,
                                bbox: B(D),
                                on: !0,
                                args: o,
                            });
                        },
                        addEscapeListener: (u) => {
                            const e = (e) => g(e, u);
                            return (
                                window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e)
                            );
                        },
                        closeOnEsc: (u) => {
                            g(u, h);
                        },
                        handleViewEvent: m,
                        onBindingsReady: d,
                        onLayoutReady: () =>
                            new Promise((u) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        u();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
                        dumpViewModel: function u(e) {
                            const t = {};
                            if ('object' != typeof e) return e;
                            for (const n in e)
                                if (Object.prototype.hasOwnProperty.call(e, n)) {
                                    const a = Object.prototype.toString.call(e[n]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = e[n];
                                        t[n] = [];
                                        for (let e = 0; e < a.length; e++) t[n].push({ value: u(a[e].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = u(e[n]))
                                            : (t[n] = e[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: w,
                        SystemLocale: r,
                        UserLocale: i,
                    };
                window.ViewEnvHelper = v;
            },
            303: (u, e, t) => {
                var n = t(179),
                    a = t.n(n),
                    o = t(493),
                    r = t.n(o);
                const i = ({ name: u, children: e }) => {
                        const t = (0, n.useState)(!0),
                            o = t[0],
                            r = t[1];
                        return (
                            a().useEffect(() => {
                                const e = ({ viewName: t }) => {
                                    t === u && (r(!1), engine.off('subView:destroy', e));
                                };
                                engine.on('subView:destroy', e);
                            }, [u]),
                            o ? e : null
                        );
                    },
                    s = (u, e, t) =>
                        e.extraLargeHeight || e.largeHeight || e.mediumHeight || e.smallHeight || e.extraSmallHeight
                            ? (e.extraLargeHeight && t.extraLarge) ||
                              (e.largeHeight && t.large) ||
                              (e.mediumHeight && t.medium) ||
                              (e.smallHeight && t.small) ||
                              (e.extraSmallHeight && t.extraSmall)
                                ? u
                                : null
                            : u;
                var E = t(67);
                const F = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var A;
                function l(u, e, t) {
                    const n = (function (u, e) {
                            switch (!0) {
                                case u >= e.extraLarge.width:
                                    return e.extraLarge.weight;
                                case u >= e.large.width && u < e.extraLarge.width:
                                    return e.large.weight;
                                case u >= e.medium.width && u < e.large.width:
                                    return e.medium.weight;
                                case u >= e.small.width && u < e.medium.width:
                                    return e.small.weight;
                                default:
                                    return e.extraSmall.weight;
                            }
                        })(u, t),
                        a = (function (u, e) {
                            switch (!0) {
                                case u >= e.extraLarge.height:
                                    return e.extraLarge.weight;
                                case u >= e.large.height && u < e.extraLarge.height:
                                    return e.large.weight;
                                case u >= e.medium.height && u < e.large.height:
                                    return e.medium.weight;
                                case u >= e.small.height && u < e.medium.height:
                                    return e.small.weight;
                                default:
                                    return e.extraSmall.weight;
                            }
                        })(e, t),
                        o = Math.min(n, a);
                    return {
                        extraLarge: o === t.extraLarge.weight,
                        large: o === t.large.weight,
                        medium: o === t.medium.weight,
                        small: o === t.small.weight,
                        extraSmall: o === t.extraSmall.weight,
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
                !(function (u) {
                    (u.extraLarge = 'extraLarge'),
                        (u.large = 'large'),
                        (u.medium = 'medium'),
                        (u.small = 'small'),
                        (u.extraSmall = 'extraSmall'),
                        (u.extraLargeWidth = 'extraLargeWidth'),
                        (u.largeWidth = 'largeWidth'),
                        (u.mediumWidth = 'mediumWidth'),
                        (u.smallWidth = 'smallWidth'),
                        (u.extraSmallWidth = 'extraSmallWidth'),
                        (u.extraLargeHeight = 'extraLargeHeight'),
                        (u.largeHeight = 'largeHeight'),
                        (u.mediumHeight = 'mediumHeight'),
                        (u.smallHeight = 'smallHeight'),
                        (u.extraSmallHeight = 'extraSmallHeight');
                })(A || (A = {}));
                const D = E.O.client.getSize('rem'),
                    c = D.width,
                    C = D.height,
                    _ = Object.assign({ width: c, height: C }, l(c, C, F)),
                    B = (0, n.createContext)(_),
                    d = ['children'];
                const m = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                n,
                                a = {},
                                o = Object.keys(u);
                            for (n = 0; n < o.length; n++) (t = o[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                            return a;
                        })(u, d);
                    const a = (0, n.useContext)(B),
                        o = a.extraLarge,
                        r = a.large,
                        i = a.medium,
                        E = a.small,
                        F = a.extraSmall,
                        A = a.extraLargeWidth,
                        l = a.largeWidth,
                        D = a.mediumWidth,
                        c = a.smallWidth,
                        C = a.extraSmallWidth,
                        _ = a.extraLargeHeight,
                        m = a.largeHeight,
                        h = a.mediumHeight,
                        g = a.smallHeight,
                        b = a.extraSmallHeight,
                        w = { extraLarge: _, large: m, medium: h, small: g, extraSmall: b };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && o) return e;
                        if (t.large && r) return e;
                        if (t.medium && i) return e;
                        if (t.small && E) return e;
                        if (t.extraSmall && F) return e;
                    } else {
                        if (t.extraLargeWidth && A) return s(e, t, w);
                        if (t.largeWidth && l) return s(e, t, w);
                        if (t.mediumWidth && D) return s(e, t, w);
                        if (t.smallWidth && c) return s(e, t, w);
                        if (t.extraSmallWidth && C) return s(e, t, w);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && _) return e;
                            if (t.largeHeight && m) return e;
                            if (t.mediumHeight && h) return e;
                            if (t.smallHeight && g) return e;
                            if (t.extraSmallHeight && b) return e;
                        }
                    }
                    return null;
                };
                m.defaultProps = {
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
                (0, n.memo)(m);
                const h = (u) => {
                        const e = (0, n.useRef)(!1);
                        e.current || (u(), (e.current = !0));
                    },
                    g = (0, n.memo)(({ children: u }) => {
                        const e = (0, n.useContext)(B),
                            t = (0, n.useState)(e),
                            o = t[0],
                            r = t[1],
                            i = (0, n.useCallback)((u, e) => {
                                const t = E.O.view.pxToRem(u),
                                    n = E.O.view.pxToRem(e);
                                r(Object.assign({ width: t, height: n }, l(t, n, F)));
                            }, []);
                        h(() => {
                            engine.on('clientResized', i);
                        }),
                            (0, n.useEffect)(() => () => engine.off('clientResized', i), [i]);
                        const s = (0, n.useMemo)(() => Object.assign({}, o), [o]);
                        return a().createElement(B.Provider, { value: s }, u);
                    }),
                    b = (u = 1) => {
                        const e = new Error().stack;
                        let t,
                            n = R.invalid('resId');
                        return (
                            e &&
                                ((t = e.split('\n')[u].split('.js')[0].split('/').pop() || ''),
                                window.__feature &&
                                    window.__feature !== t &&
                                    window.subViews[t] &&
                                    (n = window.subViews[t].id)),
                            { caller: t, stack: e, resId: n }
                        );
                    },
                    w = (u, e) => u.split('.').reduce((u, e) => u && u[e], e);
                var v = t(364);
                const p = (u) => u && 'ArrayItem' === u.__proto__.constructor.name,
                    f = (u, e) => (u.length > 0 ? `${u}.${e}` : e),
                    x = (u) =>
                        ((u, e) =>
                            u.split('.').reduce((u, t) => {
                                const n = w(`${u}.${t}`, window);
                                return p(n) ? e(u, t, n) : `${u}.${t}`;
                            }))(u, (u, e) => `${u}.${e}.value`),
                    T = (u) => {
                        const e = ((u) => {
                                const e = b(),
                                    t = e.caller,
                                    n = e.resId,
                                    a = window.__feature && window.__feature !== t && t ? `subViews.${t}` : '';
                                return { modelPrefix: a, modelPath: f(a, u || ''), resId: n };
                            })(),
                            t = e.modelPrefix,
                            n = u.split('.');
                        if (n.length > 0) {
                            const u = [n[0]];
                            return (
                                n.reduce((e, n) => {
                                    const a = w(f(t, `${e}.${n}`), window);
                                    return p(a) ? (u.push(a.id), `${e}.${n}.value`) : (u.push(n), `${e}.${n}`);
                                }),
                                u.reduce((u, e) => u + '.' + e)
                            );
                        }
                        return '';
                    },
                    M = v.Sw.instance;
                let k;
                !(function (u) {
                    (u.None = 'None'), (u.Shallow = 'Shallow'), (u.Deep = 'Deep');
                })(k || (k = {}));
                const O = (u = 'model', e = k.Deep) => {
                    const t = (0, n.useState)(0),
                        a = (t[0], t[1]),
                        o = (0, n.useMemo)(() => b(), []),
                        r = o.caller,
                        i = o.resId,
                        s = (0, n.useMemo)(
                            () => (window.__feature && window.__feature !== r ? `subViews.${r}.${u}` : u),
                            [r, u],
                        ),
                        E = (0, n.useState)(() =>
                            ((u) => {
                                const e = w(u, window);
                                for (const u in e) 'function' == typeof e[u] && (e[u] = e[u].bind(e));
                                return p(e) ? e.value : e;
                            })(x(s)),
                        ),
                        F = E[0],
                        A = E[1],
                        l = (0, n.useRef)(-1);
                    return (
                        h(() => {
                            if (
                                ('boolean' == typeof e &&
                                    ((e = e ? k.Deep : k.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                e !== k.None)
                            ) {
                                const t = (u) => {
                                        ((u) => u && 'CoherentArrayProxy' === u.__proto__.constructor.name)(u) &&
                                        e === k.Deep
                                            ? (u === F && a((u) => u + 1), A(u))
                                            : A(Object.assign([], u));
                                    },
                                    n = T(u);
                                l.current = M.addCallback(n, t, i, e === k.Deep);
                            }
                        }),
                        (0, n.useEffect)(() => {
                            if (e !== k.None)
                                return () => {
                                    M.removeCallback(l.current, i);
                                };
                        }, [i, e]),
                        F
                    );
                };
                var y = t(483),
                    S = t.n(y);
                let L;
                function N(u, e) {
                    return u.replace(/\{\w+\}/g, (u) => String(e[u.slice(1, -1)]));
                }
                !(function (u) {
                    (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
                })(L || (L = {}));
                const P = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    I = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    H = (u, e, t = L.left) => u.split(e).reduce(t === L.left ? P : I, []),
                    W = (() => {
                        const u = new RegExp(
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
                        return (e) =>
                            e
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(u);
                    })(),
                    U = ['zh_cn', 'zh_sg', 'zh_tw'],
                    V = (u, e = L.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        return U.includes(t)
                            ? W(u)
                            : ((u, e = L.left) => {
                                  let t = [];
                                  const n =
                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                      a = u.replace(/&nbsp;/g, ' ');
                                  return H(a, /( )/, e).forEach((u) => (t = t.concat(H(u, n, L.left)))), t;
                              })(u, e);
                    };
                function G(u, e, t) {
                    const a = (0, n.useContext)(B);
                    let o = Object.entries(a).filter(([u, e]) => !0 === e && u in A);
                    return (
                        t && (o = o.filter((u) => t.includes(u[0]))),
                        u.reduce((u, t) => {
                            const n = o.map((u) =>
                                S()(
                                    e[((u, e) => u + '__' + e)(t, u[0])],
                                    e[
                                        ((u, e) => {
                                            return u + ((t = e)[0].toUpperCase() + t.slice(1));
                                            var t;
                                        })(t, u[0])
                                    ],
                                ),
                            );
                            return (u[t] = S()(e[t], ...n)), u;
                        }, {})
                    );
                }
                var $ = t(521);
                const j = 'default',
                    K = 'search',
                    z = 'email',
                    q = 'password',
                    Y = 'normal',
                    Z = 'disabled',
                    X = 'error',
                    Q = 'medium',
                    J = 'monoSmall',
                    uu = 'monoLarge',
                    eu = { [j]: 'text', [z]: 'text', [K]: 'text', [q]: 'password' };
                R.images.gui.maps.icons.components.input;
                const tu = {
                        base: 'InputControl_base_38',
                        base__focused: 'InputControl_base__focused_07',
                        base__alert: 'InputControl_base__alert_e6',
                        base__error: 'InputControl_base__error_34',
                        base__done: 'InputControl_base__done_2e',
                        base__disabled: 'InputControl_base__disabled_96',
                        input: 'InputControl_input_98',
                        base__small: 'InputControl_base__small_78',
                        base__medium: 'InputControl_base__medium_c9',
                        base__large: 'InputControl_base__large_42',
                        base__extraMedium: 'InputControl_base__extraMedium_41',
                        base__extraLarge: 'InputControl_base__extraLarge_a6',
                        base__monoLarge: 'InputControl_base__monoLarge_e8',
                        base__monoSmall: 'InputControl_base__monoSmall_e8',
                        base__withIcon: 'InputControl_base__withIcon_39',
                        input__search: 'InputControl_input__search_a7',
                        disabled: 'InputControl_disabled_e7',
                        placeholder: 'InputControl_placeholder_fe',
                        placeholder__search: 'InputControl_placeholder__search_b4',
                        icon: 'InputControl_icon_78',
                        icon__search: 'InputControl_icon__search_37',
                        clear: 'InputControl_clear_a8',
                    },
                    nu = a().memo(
                        ({
                            componentId: u,
                            value: e = '',
                            type: t = j,
                            size: o = Q,
                            variant: r = Y,
                            placeholder: i = '',
                            highlighted: s,
                            withClear: E,
                            selectOnFocus: F = !0,
                            isFocused: A,
                            iconSource: l,
                            classMix: D,
                            inputClassMix: c,
                            onMouseEnter: C,
                            onMouseLeave: _,
                            onMouseDown: B,
                            onMouseUp: d,
                            onClick: m,
                            onChange: h,
                            onKeyUp: g,
                            onKeyDown: b,
                            onClear: w,
                            onFocus: v,
                            onBlur: p,
                        }) => {
                            const f = (0, n.useState)(A),
                                x = f[0],
                                T = f[1],
                                M = (0, n.useRef)(null),
                                k = (0, n.useRef)({ mouseOver: !1, mouseDown: !1 }),
                                O = r !== Z,
                                y = (0, n.useCallback)(
                                    (u) => {
                                        O && (T(!0), v && v(u));
                                    },
                                    [O, v],
                                ),
                                L = (0, n.useCallback)(
                                    (u) => {
                                        O && !k.current.mouseOver && (T(!1), p && p(u));
                                    },
                                    [O, p],
                                );
                            (0, n.useEffect)(() => {
                                O && x && F && M.current && M.current.select(), x && M.current && M.current.focus();
                            }, [F, x, O]);
                            const N = (0, n.useCallback)(
                                    (u) => {
                                        O && h && h(u.target.value);
                                    },
                                    [O, h],
                                ),
                                P = (0, n.useCallback)(
                                    (u) => {
                                        O && g && g(u);
                                    },
                                    [O, g],
                                ),
                                R = (0, n.useCallback)(
                                    (u) => {
                                        O && b && b(u);
                                    },
                                    [O, b],
                                ),
                                I = (0, n.useCallback)(
                                    (u) => {
                                        O && ((k.current.mouseOver = !0), C && C(u));
                                    },
                                    [O, C],
                                ),
                                H = (0, n.useCallback)(
                                    (u) => {
                                        O &&
                                            M.current &&
                                            (k.current.mouseDown && M.current.focus(),
                                            (k.current.mouseOver = !1),
                                            _ && _(u));
                                    },
                                    [O, _],
                                ),
                                W = (0, n.useCallback)(
                                    (u) => {
                                        O && ((k.current.mouseDown = !0), B && B(u));
                                    },
                                    [O, B],
                                ),
                                U = (0, n.useCallback)(
                                    (u) => {
                                        O && ((k.current.mouseDown = !1), d && d(u));
                                    },
                                    [O, d],
                                ),
                                V = (0, n.useCallback)(
                                    (u) => {
                                        if (O && M.current) {
                                            (!x || (x && u.target !== M.current)) && M.current.focus(), m && m(u);
                                        }
                                    },
                                    [x, O, m],
                                ),
                                G = Boolean(l),
                                $ = S()(
                                    tu.base,
                                    tu[`base__${o}`],
                                    s && tu[`base__${r}`],
                                    x && tu.base__focused,
                                    G && tu.base__withIcon,
                                    D,
                                ),
                                K = (0, n.useMemo)(() => (l ? { backgroundImage: `url(${l})` } : null), [l]),
                                z = S()(tu.input, tu[`input__${t}`], c),
                                q = S()(tu.icon, tu[`icon__${t}`]),
                                X = S()(tu.placeholder, tu[`placeholder__${t}`]);
                            return a().createElement(
                                'div',
                                {
                                    id: u,
                                    className: $,
                                    onMouseEnter: I,
                                    onMouseDown: W,
                                    onMouseUp: U,
                                    onMouseLeave: H,
                                    onClick: V,
                                },
                                !O && a().createElement('div', { className: tu.disabled }),
                                K && a().createElement('div', { style: K, className: q }),
                                a().createElement('input', {
                                    ref: M,
                                    className: z,
                                    type: eu[t],
                                    value: e,
                                    onChange: N,
                                    onKeyUp: P,
                                    onKeyDown: R,
                                    disabled: !O,
                                    onFocus: y,
                                    onBlur: L,
                                }),
                                i && !e && a().createElement('div', { className: X }, i),
                                E && a().createElement('div', { className: tu.clear, onClick: w }),
                            );
                        },
                    ),
                    au = {
                        base: 'Cell_base_4f',
                        base__small: 'Cell_base__small_bc',
                        base__extraSmall: 'Cell_base__extraSmall_09',
                        showIn: 'Cell_showIn_0c',
                        showOut: 'Cell_showOut_86',
                        fadeIn: 'Cell_fadeIn_20',
                        fadeOut: 'Cell_fadeOut_d1',
                        windowIn: 'Cell_windowIn_76',
                    },
                    ou = (0, n.memo)(
                        ({
                            index: u,
                            value: e,
                            isError: t,
                            isFocused: o = !1,
                            onFocusChange: r,
                            onValueChange: i,
                            onMoveFocus: s,
                        }) => {
                            const E = (0, n.useContext)(B),
                                F = E.small || E.extraSmall,
                                A = (0, n.useState)(!1),
                                l = A[0],
                                D = A[1],
                                c = (0, n.useCallback)((e) => i(e, u), [u, i]),
                                C = (0, n.useCallback)(() => r(!0), [r]),
                                _ = (0, n.useCallback)(() => D(!0), []),
                                d = (0, n.useCallback)(
                                    ({ keyCode: t }) => {
                                        (t === $.n.BACKSPACE && !e.length) || t === $.n.ARROW_LEFT
                                            ? s(!0, u)
                                            : t === $.n.ARROW_RIGHT && s(!1, u);
                                    },
                                    [u, e, s],
                                );
                            (0, n.useEffect)(() => {
                                l && (r(!1), D(!1));
                            }, [l, r]);
                            const m = G(['base'], au);
                            return a().createElement(
                                'div',
                                { className: m.base },
                                a().createElement(nu, {
                                    size: F ? J : uu,
                                    value: e,
                                    isFocused: o,
                                    highlighted: !0,
                                    variant: t ? X : Y,
                                    onChange: c,
                                    onKeyUp: d,
                                    onFocus: C,
                                    onBlur: _,
                                }),
                            );
                        },
                    ),
                    ru = 'FormatText_base_d0',
                    iu = ({ binding: u, text: e = '', classMix: t, alignment: o = L.left }) =>
                        null === e
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : a().createElement(
                                  n.Fragment,
                                  null,
                                  e.split('\n').map((e, r) =>
                                      a().createElement(
                                          'div',
                                          { className: S()(ru, t), key: `${e}-${r}` },
                                          ((u, e, t) =>
                                              u
                                                  .split(/%\((.*?)\)(?:[sd])?/g)
                                                  .map((u) => (t && u in t ? t[u] : V(u, e))))(e, o, u).map((u, e) =>
                                              a().createElement(n.Fragment, { key: `${e}-${u}` }, u),
                                          ),
                                      ),
                                  ),
                              ),
                    su = 'FieldError_base_02',
                    Eu = 'FieldError_base__show_46',
                    Fu = (0, n.memo)(({ isShow: u, text: e, binding: t, classMix: n }) => {
                        const o = S()(su, n, u && Eu);
                        return a().createElement(iu, { classMix: o, text: e || '', binding: t });
                    }),
                    Au = (u) => u.isFocused,
                    lu = (u) => u.reduce((u, e) => (e && '' !== e.trim() ? (u += 1) : u), 0),
                    Du = (u, e) => e.map((e, t) => u.split('')[t]),
                    cu = 'FieldSeparate_base_fe',
                    Cu = 'FieldSeparate_content_28',
                    _u = /\d+/,
                    Bu = (0, n.memo)(
                        ({
                            focusingItems: u,
                            value: e,
                            errorMessage: t,
                            classMix: o,
                            onChange: r,
                            onAllDigitsFilled: i,
                        }) => {
                            const s = u.findIndex(Au),
                                E = -1 !== s,
                                F = Boolean(t),
                                A = Array.from(Array(4)),
                                l = (0, n.useState)(A.map((u, t) => (e[t] ? e[t] : ''))),
                                D = l[0],
                                c = l[1],
                                C = (0, n.useCallback)(
                                    (e, t, n) => {
                                        const a = lu(e),
                                            o = ((u, e) => {
                                                const t = u ? e + 1 : e - 1;
                                                return t < 0 ? 0 : t;
                                            })(t <= a, n),
                                            s = 4 === a;
                                        c(e),
                                            r({ value: e.join('') }),
                                            i(s),
                                            4 === o ? u[0].dropFocus() : u[o].onFocusChange(!0);
                                    },
                                    [r, u, i],
                                ),
                                _ = (0, n.useCallback)(
                                    (u, e) => {
                                        let t = e || 0;
                                        const n = _u.exec(u),
                                            a = (n && n.length ? n[0] : '').substr(0, 4),
                                            o = u !== a;
                                        if (!/^[0-9]+$/.test(a) && '' !== a) return;
                                        let r = [...D];
                                        const i = a.length,
                                            s = lu(r);
                                        o || (1 !== i && 0 !== i)
                                            ? 4 === i
                                                ? ((r = Du(a, r)), (t = 3))
                                                : ((r = Du(a, r)), (t = i - 1))
                                            : (r[t] = a),
                                            C(r, s, t);
                                    },
                                    [D, C],
                                ),
                                B = (0, n.useCallback)(
                                    (e, t) => {
                                        const n = ((u, e, t) => (t < u ? u : t > e ? e : t))(
                                            0,
                                            u.length - 1,
                                            t + (e ? -1 : 1),
                                        );
                                        u[n].onFocusChange(!0);
                                    },
                                    [u],
                                ),
                                d = S()(cu, o);
                            return a().createElement(
                                'div',
                                { className: d },
                                a().createElement(
                                    'div',
                                    { className: Cu, key: `${s}_${E}` },
                                    D.map((e, t) =>
                                        a().createElement(ou, {
                                            key: `fields_${t}`,
                                            index: t,
                                            value: e || '',
                                            isFocused: u[t].isFocused,
                                            isError: F,
                                            onValueChange: _,
                                            onFocusChange: u[t].onFocusChange,
                                            onMoveFocus: B,
                                        }),
                                    ),
                                ),
                                E,
                                a().createElement(Fu, { isShow: F, text: t }),
                            );
                        },
                    ),
                    du = (u) => {
                        console.error(u.type + ': useKeydownListener hook :: Callback is not defined');
                    };
                function mu(u = $.n.NONE, e = du, t = !1) {
                    (0, n.useEffect)(() => {
                        if (u !== $.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === u) {
                                if (E.O.view.isEventHandled()) return;
                                E.O.view.setEventHandled(), e(n), t && n.stopPropagation();
                            }
                        }
                    }, [e, u, t]);
                }
                const hu = (u, e, t) => {
                    const n = (u + e) % t;
                    return n < 0 ? t + n : n;
                };
                let gu, bu;
                function wu(u) {
                    engine.call('PlaySound', u);
                }
                !(function (u) {
                    (u.main = 'main'),
                        (u.primary = 'primary'),
                        (u.primaryGreen = 'primaryGreen'),
                        (u.primaryRed = 'primaryRed'),
                        (u.secondary = 'secondary'),
                        (u.ghost = 'ghost');
                })(gu || (gu = {})),
                    (function (u) {
                        (u.extraSmall = 'extraSmall'), (u.small = 'small'), (u.medium = 'medium');
                    })(bu || (bu = {}));
                const vu = {
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
                    pu = [
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
                function fu() {
                    return (
                        (fu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        fu.apply(this, arguments)
                    );
                }
                class xu extends a().PureComponent {
                    constructor(...u) {
                        super(...u),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (u) => (e) => {
                                u && u(e),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && wu(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (u) => (e) => {
                                u && u(e), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (u) => (e) => {
                                u && u(e),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && wu(this.props.soundClick);
                            }),
                            (this._onMouseUp = (u) => (e) => {
                                u && u(e), this.setState({ click: !1 });
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 }));
                    }
                    render() {
                        const u = this.props,
                            e = u.caption,
                            t = u.onClick,
                            n = u.goto,
                            o = u.side,
                            r = u.type,
                            i = u.classNames,
                            s = u.onMouseEnter,
                            E = u.onMouseLeave,
                            F = u.onMouseDown,
                            A = u.onMouseUp,
                            l =
                                (u.soundClick,
                                u.soundHover,
                                (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        n,
                                        a = {},
                                        o = Object.keys(u);
                                    for (n = 0; n < o.length; n++) (t = o[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                    return a;
                                })(u, pu)),
                            D = S()(vu.base, vu[`base__${r}`], vu[`base__${o}`], null == i ? void 0 : i.base),
                            c = S()(vu.icon, vu[`icon__${r}`], vu[`icon__${o}`], null == i ? void 0 : i.icon),
                            C = S()(vu.glow, null == i ? void 0 : i.glow),
                            _ = S()(vu.caption, vu[`caption__${r}`], null == i ? void 0 : i.caption),
                            B = S()(vu.goto, null == i ? void 0 : i.goto);
                        return a().createElement(
                            'div',
                            fu(
                                {
                                    className: D,
                                    onMouseEnter: this._onMouseEnter(s),
                                    onMouseLeave: this._onMouseLeave(E),
                                    onMouseDown: this._onMouseDown(F),
                                    onMouseUp: this._onMouseUp(A),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                l,
                            ),
                            'info' !== r && a().createElement('div', { className: vu.shine }),
                            a().createElement('div', { className: c }, a().createElement('div', { className: C })),
                            a().createElement('div', { className: _ }, e),
                            n && a().createElement('div', { className: B }, n),
                        );
                    }
                }
                xu.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const Tu = {
                        base: 'CurtainSubViewTemplate_base_a7',
                        base__small: 'CurtainSubViewTemplate_base__small_53',
                        base__extraSmall: 'CurtainSubViewTemplate_base__extraSmall_2d',
                        closeButton: 'CurtainSubViewTemplate_closeButton_40',
                    },
                    Mu = (0, n.memo)(
                        ({
                            children: u,
                            onCloseClicked: e,
                            isCloseVisible: t,
                            onEscapePressed: o,
                            escapeHandler: r,
                        }) => {
                            const i = (0, n.useCallback)(() => e(), [e]),
                                s = (0, n.useCallback)(
                                    (u) => {
                                        (r && r()) || (t ? (u.stopImmediatePropagation(), i()) : o());
                                    },
                                    [t, i, o, r],
                                );
                            mu($.n.ESCAPE, s);
                            const E = G(['base'], Tu);
                            return a().createElement(
                                'div',
                                { className: E.base },
                                t &&
                                    a().createElement(
                                        'div',
                                        { className: Tu.closeButton },
                                        a().createElement(xu, {
                                            caption: R.strings.menu.viewHeader.closeBtn.label(),
                                            type: 'close',
                                            side: 'right',
                                            onClick: i,
                                        }),
                                    ),
                                u,
                            );
                        },
                    ),
                    ku = [
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
                function Ou(u) {
                    return Object.entries(u || {}).map(([u, e]) => {
                        const t = { __Type: 'GFValueProxy', name: u };
                        switch (typeof e) {
                            case 'number':
                                t.number = e;
                                break;
                            case 'boolean':
                                t.bool = e;
                                break;
                            case 'undefined':
                                break;
                            default:
                                t.string = e.toString();
                        }
                        return t;
                    });
                }
                const yu = (u, e, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: v.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    Su = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            a = u.args,
                            o = u.onMouseEnter,
                            r = u.onMouseLeave,
                            i = u.onMouseDown,
                            s = u.onClick,
                            E = u.ignoreShowDelay,
                            F = void 0 !== E && E,
                            A = u.ignoreMouseClick,
                            l = void 0 !== A && A,
                            D = u.decoratorId,
                            c = void 0 === D ? 0 : D,
                            C = u.isEnabled,
                            _ = void 0 === C || C,
                            B = u.targetId,
                            d = void 0 === B ? 0 : B,
                            m = u.onShow,
                            h = u.onHide,
                            g = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    a = {},
                                    o = Object.keys(u);
                                for (n = 0; n < o.length; n++) (t = o[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                return a;
                            })(u, ku);
                        const w = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            v = (0, n.useMemo)(() => d || b().resId, [d]),
                            p = (0, n.useCallback)(() => {
                                (w.current.isVisible && w.current.timeoutId) ||
                                    (yu(t, c, { isMouseEvent: !0, on: !0, arguments: Ou(a) }, v),
                                    m && m(),
                                    (w.current.isVisible = !0));
                            }, [t, c, a, v, m]),
                            f = (0, n.useCallback)(() => {
                                if (w.current.isVisible || w.current.timeoutId) {
                                    const u = w.current.timeoutId;
                                    u > 0 && (clearTimeout(u), (w.current.timeoutId = 0)),
                                        yu(t, c, { on: !1 }, v),
                                        w.current.isVisible && h && h(),
                                        (w.current.isVisible = !1);
                                }
                            }, [t, c, v, h]),
                            x = (0, n.useCallback)((u) => {
                                w.current.isVisible &&
                                    ((w.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (w.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(w.current.prevTarget) && f();
                                    }, 200)));
                            }, []);
                        (0, n.useEffect)(() => {
                            const u = w.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', x, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', x, { capture: !0 }),
                                        u && window.clearTimeout(u);
                                }
                            );
                        }, []),
                            (0, n.useEffect)(() => {
                                !1 === _ && f();
                            }, [_, f]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', f),
                                    () => {
                                        window.removeEventListener('mouseleave', f), f();
                                    }
                                ),
                                [f],
                            );
                        return _
                            ? (0, n.cloneElement)(
                                  e,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((T = e.props.onMouseEnter),
                                              (u) => {
                                                  (u.clientX === window.innerWidth &&
                                                      u.clientY === window.innerHeight) ||
                                                      ((w.current.timeoutId = window.setTimeout(p, F ? 100 : 400)),
                                                      o && o(u),
                                                      T && T(u));
                                              }),
                                          onMouseLeave: ((u) => (e) => {
                                              f(), null == r || r(e), null == u || u(e);
                                          })(e.props.onMouseLeave),
                                          onClick: ((u) => (e) => {
                                              !1 === l && f(), null == s || s(e), null == u || u(e);
                                          })(e.props.onClick),
                                          onMouseDown: ((u) => (e) => {
                                              !1 === l && f(), null == i || i(e), null == u || u(e);
                                          })(e.props.onMouseDown),
                                      },
                                      g,
                                  ),
                              )
                            : e;
                        var T;
                    },
                    Lu = 'EmailIcon_base_57',
                    Nu = { tooltipId: 'TOOLTIP_SUBTITLE_ID' },
                    Pu = () =>
                        a().createElement(
                            Su,
                            {
                                contentId:
                                    R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                        'resId',
                                    ),
                                decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                args: Nu,
                            },
                            a().createElement('div', { className: Lu }),
                        ),
                    Ru = {
                        base: 'Title_base_eb',
                        icon: 'Title_icon_01',
                        base__small: 'Title_base__small_0d',
                        base__extraSmall: 'Title_base__extraSmall_66',
                        title: 'Title_title_9f',
                        br: 'Title_br_3d',
                        subTitle: 'Title_subTitle_af',
                        subTitle__binding: 'Title_subTitle__binding_30',
                        showIn: 'Title_showIn_6a',
                        showOut: 'Title_showOut_62',
                        fadeIn: 'Title_fadeIn_93',
                        fadeOut: 'Title_fadeOut_06',
                        windowIn: 'Title_windowIn_bc',
                    },
                    Iu = (0, n.memo)(({ title: u, subTitle: e, iconOverlay: t }) => {
                        const o = (0, n.useMemo)(
                                () => ({
                                    emailIcon: a().createElement(Pu, null),
                                    br: a().createElement('div', { className: Ru.br }),
                                }),
                                [],
                            ),
                            r = G(['base'], Ru);
                        return a().createElement(
                            'div',
                            { className: r.base },
                            a().createElement('div', { className: Ru.icon }, t),
                            a().createElement('div', { className: Ru.title }, u),
                            Boolean(e) && a().createElement(iu, { classMix: Ru.subTitle, text: e || '', binding: o }),
                        );
                    });
                let Hu;
                !(function (u) {
                    (u.SHORT_DATE = 'short-date'),
                        (u.SHORT_TIME = 'short-time'),
                        (u.SHORT_DATE_TIME = 'short-date-time'),
                        (u.FULL_DATE = 'full-date'),
                        (u.FULL_DATE_TIME = 'full-date-time'),
                        (u.MONTH = 'month'),
                        (u.MONTH_DATE = 'month-date'),
                        (u.DATE_MONTH = 'date-month'),
                        (u.MONTH_YEAR = 'month-year'),
                        (u.WEEK_DAY = 'week-day'),
                        (u.WEEK_DAY_TIME = 'week-day-time'),
                        (u.YEAR = 'year'),
                        (u.DATE_YEAR = 'date-year');
                })(Hu || (Hu = {}));
                const Wu = 60,
                    Uu = 3600,
                    Vu = 86400;
                Date.now();
                function Gu(u = 0) {
                    let e = u;
                    const t = Math.trunc(e / Vu);
                    e -= t * Vu;
                    const n = Math.trunc(e / Uu);
                    e -= n * Uu;
                    const a = Math.trunc(e / Wu);
                    return (e -= a * Wu), { days: t, hours: n, minutes: a, seconds: e };
                }
                let $u;
                const ju = (u, e) => {
                        const t = (0, n.useState)(u),
                            a = t[0],
                            o = t[1],
                            r = e || (u > 120 ? Wu : 1);
                        return (
                            (0, n.useEffect)(() => {
                                $u = performance.now();
                            }, []),
                            (0, n.useEffect)(() => {
                                ($u = performance.now()), o(u);
                            }, [u]),
                            (0, n.useEffect)(() => {
                                let u;
                                return (
                                    a > 0 &&
                                        (u = setTimeout(() => {
                                            const u = Math.max(Math.trunc((performance.now() - $u) / 1e3), 1),
                                                e = Math.max(a - u, 0);
                                            ($u = performance.now()), o(e);
                                        }, 1e3 * r)),
                                    () => clearTimeout(u)
                                );
                            }, [a, o, r]),
                            a
                        );
                    },
                    Ku = {
                        base: 'WarningMessage_base_b9',
                        fadeIn: 'WarningMessage_fadeIn_76',
                        icon: 'WarningMessage_icon_3e',
                        base__large: 'WarningMessage_base__large_f8',
                        br: 'WarningMessage_br_98',
                        showIn: 'WarningMessage_showIn_39',
                        showOut: 'WarningMessage_showOut_a8',
                        fadeOut: 'WarningMessage_fadeOut_a2',
                        windowIn: 'WarningMessage_windowIn_c5',
                    },
                    zu = (0, n.memo)(
                        ({ isLarge: u, text: e, classMix: t, countDown: o = 0, onCountDownComplete: r }) => {
                            const i = ju(o, 1),
                                s = (0, n.useMemo)(() => {
                                    return {
                                        icon: a().createElement('div', { className: Ku.icon }),
                                        br: a().createElement('div', { className: Ku.br }),
                                        time: a().createElement(
                                            'div',
                                            { className: Ku.inner },
                                            ((u = Gu(i)),
                                            u.days > 7
                                                ? N(R.strings.common.duration.days(), { days: u.days })
                                                : u.days >= 1
                                                  ? 0 === u.hours
                                                      ? N(R.strings.common.duration.days(), { days: u.days })
                                                      : `${N(R.strings.common.duration.days(), { days: u.days })} ${N(R.strings.common.duration.hours(), { hours: u.hours })}`
                                                  : u.hours >= 1
                                                    ? 0 === u.minutes
                                                        ? N(R.strings.common.duration.hours(), { hours: u.hours })
                                                        : `${N(R.strings.common.duration.hours(), { hours: u.hours })} ${N(R.strings.common.duration.minutes(), { minutes: u.minutes })} ${N(R.strings.common.duration.seconds(), { seconds: u.seconds })}`
                                                    : u.minutes >= 1
                                                      ? 0 === u.minutes
                                                          ? N(R.strings.common.duration.seconds(), {
                                                                seconds: u.seconds,
                                                            })
                                                          : 0 === u.seconds
                                                            ? `${N(R.strings.common.duration.minutes(), { minutes: u.minutes })}`
                                                            : `${N(R.strings.common.duration.minutes(), { minutes: u.minutes })} ${N(R.strings.common.duration.seconds(), { seconds: u.seconds })}`
                                                      : N(R.strings.common.duration.seconds(), { seconds: u.seconds })),
                                        ),
                                    };
                                    var u;
                                }, [i]);
                            (0, n.useEffect)(() => {
                                o > 0 && 0 === i && r && r();
                            }, [o, i, r]);
                            const E = S()(Ku.base, u && Ku.base__large);
                            return a().createElement(
                                'div',
                                { className: t },
                                a().createElement(iu, { classMix: E, text: e, binding: s }),
                            );
                        },
                    ),
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
                    },
                    Yu = ({
                        children: u,
                        size: e,
                        isFocused: t,
                        type: o,
                        disabled: r,
                        mixClass: i,
                        soundHover: s,
                        soundClick: E,
                        onMouseEnter: F,
                        onMouseDown: A,
                        onMouseUp: l,
                        onMouseLeave: D,
                        onClick: c,
                        onFocusChange: C,
                    }) => {
                        const _ = (0, n.useRef)(null),
                            B = (0, n.useState)(!1),
                            d = B[0],
                            m = B[1],
                            h = (0, n.useState)(!1),
                            g = h[0],
                            b = h[1],
                            w = (0, n.useCallback)(() => {
                                r || (_.current && (_.current.focus(), C && C(!0)));
                            }, [r, C]),
                            v = (0, n.useCallback)(
                                (u) => {
                                    t && null !== _.current && !_.current.contains(u.target) && C && C(!1);
                                },
                                [t, C],
                            ),
                            p = (0, n.useCallback)(
                                (u) => {
                                    r || (c && c(u));
                                },
                                [r, c],
                            ),
                            f = (0, n.useCallback)(
                                (u) => {
                                    r || (null !== s && wu(s), F && F(u), b(!0));
                                },
                                [r, s, F],
                            ),
                            x = (0, n.useCallback)(
                                (u) => {
                                    r || (l && l(u), m(!1));
                                },
                                [r, l],
                            ),
                            T = (0, n.useCallback)(
                                (u) => {
                                    r || (null !== E && wu(E), A && A(u), t && w(), m(!0));
                                },
                                [r, E, A, w, t],
                            ),
                            M = (0, n.useCallback)(
                                (u) => {
                                    r || (D && D(u), m(!1));
                                },
                                [r, D],
                            ),
                            k = S()(
                                qu.base,
                                qu[`base__${o}`],
                                {
                                    [qu.base__disabled]: r,
                                    [qu[`base__${e}`]]: e,
                                    [qu.base__focus]: t,
                                    [qu.base__highlightActive]: d,
                                    [qu.base__firstHover]: g,
                                },
                                i,
                            ),
                            O = S()(qu.state, qu.state__default);
                        return (
                            (0, n.useEffect)(
                                () => (
                                    document.addEventListener('mousedown', v),
                                    () => {
                                        document.removeEventListener('mousedown', v);
                                    }
                                ),
                                [v],
                            ),
                            a().createElement(
                                'div',
                                {
                                    ref: _,
                                    className: k,
                                    onMouseEnter: f,
                                    onMouseUp: x,
                                    onMouseDown: T,
                                    onMouseLeave: M,
                                    onClick: p,
                                },
                                o !== gu.ghost &&
                                    a().createElement(
                                        a().Fragment,
                                        null,
                                        a().createElement('div', { className: qu.back }),
                                        a().createElement('span', { className: qu.texture }),
                                    ),
                                a().createElement(
                                    'span',
                                    { className: O },
                                    a().createElement('span', { className: qu.stateDisabled }),
                                    a().createElement('span', { className: qu.stateHighlightHover }),
                                    a().createElement('span', { className: qu.stateHighlightActive }),
                                ),
                                a().createElement(
                                    'span',
                                    { className: qu.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                    u,
                                ),
                            )
                        );
                    };
                Yu.defaultProps = { type: gu.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const Zu = (0, n.memo)(Yu),
                    Xu = {
                        base: 'WGNPCurtainTemplate_base_33',
                        base__small: 'WGNPCurtainTemplate_base__small_35',
                        base__extraSmall: 'WGNPCurtainTemplate_base__extraSmall_7c',
                        content: 'WGNPCurtainTemplate_content_50',
                        footer: 'WGNPCurtainTemplate_footer_ea',
                        divider: 'WGNPCurtainTemplate_divider_ce',
                        warningBox: 'WGNPCurtainTemplate_warningBox_4c',
                        warning: 'WGNPCurtainTemplate_warning_3f',
                        button: 'WGNPCurtainTemplate_button_ea',
                        showIn: 'WGNPCurtainTemplate_showIn_e1',
                        showOut: 'WGNPCurtainTemplate_showOut_27',
                        fadeIn: 'WGNPCurtainTemplate_fadeIn_c6',
                        fadeOut: 'WGNPCurtainTemplate_fadeOut_bd',
                        windowIn: 'WGNPCurtainTemplate_windowIn_58',
                    },
                    Qu = [
                        'title',
                        'subTitle',
                        'isTitleOnly',
                        'aboveContentCmp',
                        'children',
                        'warningText',
                        'warningCountdown',
                        'aboveButtonCmp',
                        'underButtonCmp',
                        'isFocused',
                        'canFocusToken',
                        'onFocusChange',
                        'isConfirmEnabled',
                        'isConfirmVisible',
                        'onConfirmClicked',
                        'onWarningTimer',
                    ];
                const Ju = (0, n.memo)((u) => {
                        let e = u.title,
                            t = u.subTitle,
                            o = u.isTitleOnly,
                            r = u.aboveContentCmp,
                            i = u.children,
                            s = u.warningText,
                            E = u.warningCountdown,
                            F = u.aboveButtonCmp,
                            A = u.underButtonCmp,
                            l = u.isFocused,
                            D = void 0 === l || l,
                            c = u.canFocusToken,
                            C = u.onFocusChange,
                            _ = u.isConfirmEnabled,
                            B = u.isConfirmVisible,
                            d = u.onConfirmClicked,
                            m = u.onWarningTimer,
                            h = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    a = {},
                                    o = Object.keys(u);
                                for (n = 0; n < o.length; n++) (t = o[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                return a;
                            })(u, Qu);
                        c && (c.value = _);
                        const g = (0, n.useCallback)(() => d(), [d]),
                            b = (0, n.useCallback)(() => m(), [m]),
                            w = G(['base'], Xu);
                        return a().createElement(
                            Mu,
                            h,
                            a().createElement(
                                'div',
                                { className: w.base },
                                a().createElement(Iu, { title: e, subTitle: t }),
                                !o &&
                                    a().createElement(
                                        a().Fragment,
                                        null,
                                        Boolean(r) && r,
                                        a().createElement(
                                            'div',
                                            { className: Xu.content },
                                            i,
                                            a().createElement(
                                                'div',
                                                { className: Xu.warningBox },
                                                Boolean(s) &&
                                                    a().createElement(zu, {
                                                        text: s,
                                                        countDown: E,
                                                        classMix: Xu.warning,
                                                        onCountDownComplete: b,
                                                    }),
                                            ),
                                        ),
                                        a().createElement(
                                            'div',
                                            { className: Xu.footer },
                                            Boolean(F) && F,
                                            a().createElement('div', { className: Xu.divider }),
                                            B &&
                                                a().createElement(
                                                    Zu,
                                                    {
                                                        mixClass: Xu.button,
                                                        onClick: g,
                                                        size: bu.medium,
                                                        type: gu.main,
                                                        isFocused: D,
                                                        onFocusChange: C,
                                                        disabled: !_,
                                                    },
                                                    R.strings.dialogs.accountCompletion.submit(),
                                                ),
                                            Boolean(A) && A,
                                        ),
                                    ),
                            ),
                        );
                    }),
                    ue = 'Timer_base_81',
                    ee = 'Timer_text_b7',
                    te = 'Timer_textInner_62',
                    ne = 'Timer_button_82',
                    ae = (0, n.memo)(
                        ({
                            timer: u,
                            onResentCode: e,
                            isFocused: t,
                            canFocusToken: o,
                            onFocusChange: r,
                            buttonLabel: i,
                        }) => {
                            const s = ju(u),
                                E = s > 0,
                                F = (0, n.useMemo)(
                                    () => ({ timer: a().createElement('div', { className: te }, Math.floor(s)) }),
                                    [s],
                                );
                            return (
                                (0, n.useEffect)(() => {
                                    o && (o.value = !E);
                                }, [o, E]),
                                a().createElement(
                                    'div',
                                    { className: ue },
                                    E &&
                                        a().createElement(iu, {
                                            classMix: ee,
                                            text: R.strings.dialogs.accountCompletion.activate.coundownText(),
                                            binding: F,
                                        }),
                                    !E &&
                                        i &&
                                        a().createElement(
                                            Zu,
                                            {
                                                mixClass: ne,
                                                type: gu.secondary,
                                                size: bu.medium,
                                                onClick: e,
                                                isFocused: t,
                                                onFocusChange: r,
                                            },
                                            i,
                                        ),
                                )
                            );
                        },
                    ),
                    oe = 'LargeStringFormat_base_35',
                    re = (0, n.memo)(({ text: u, classMix: e }) => {
                        const t = S()(oe, e);
                        return a().createElement(
                            'div',
                            { className: t },
                            u.split('').map((u, e) => a().createElement(n.Fragment, { key: `${e}-${u}` }, u)),
                        );
                    }),
                    ie = {
                        base: 'Text_base_5d',
                        text: 'Text_text_a6',
                        base__small: 'Text_base__small_73',
                        base__extraSmall: 'Text_base__extraSmall_cc',
                        line: 'Text_line_7d',
                        line__bottom: 'Text_line__bottom_86',
                        inner: 'Text_inner_df',
                        br: 'Text_br_79',
                        showIn: 'Text_showIn_92',
                        showOut: 'Text_showOut_4c',
                        fadeIn: 'Text_fadeIn_0f',
                        fadeOut: 'Text_fadeOut_1c',
                        windowIn: 'Text_windowIn_c4',
                    },
                    se = (0, n.memo)(({ text: u, payload: e, classMix: t }) => {
                        const o = (0, n.useMemo)(
                                () => ({
                                    email: e && a().createElement(re, { classMix: ie.inner, text: e }),
                                    br: a().createElement('div', { className: ie.br }),
                                }),
                                [e],
                            ),
                            r = G(['base'], ie),
                            i = S()(r.base, t),
                            s = S()(ie.line, ie.line__bottom);
                        return a().createElement(
                            'div',
                            { className: i },
                            a().createElement('div', { className: ie.line }),
                            a().createElement('div', { className: s }),
                            a().createElement(iu, { classMix: ie.text, text: u || '', binding: o }),
                        );
                    }),
                    Ee = 'ConfirmCredentialsViewApp_text_98',
                    Fe = [
                        'timer',
                        'onResendClicked',
                        'email',
                        'isConfirmEnabled',
                        'onConfirmClicked',
                        'resendButtonLabel',
                    ];
                function Ae() {
                    return (
                        (Ae =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        Ae.apply(this, arguments)
                    );
                }
                const le = () => {
                    const u = O(),
                        e = u.timer,
                        t = u.onResendClicked,
                        o = u.email,
                        r = u.isConfirmEnabled,
                        i = u.onConfirmClicked,
                        s = u.resendButtonLabel,
                        E = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                n,
                                a = {},
                                o = Object.keys(u);
                            for (n = 0; n < o.length; n++) (t = o[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                            return a;
                        })(u, Fe),
                        F = Ae({}, O('model.field')),
                        A = (0, n.useState)(!1),
                        l = A[0],
                        D = A[1],
                        c = E.warningText,
                        C = E.warningCountdown,
                        _ = E.isConfirmVisible,
                        B = r && !(c && 0 !== C) && l,
                        d = (0, n.useRef)(B),
                        m = ((u = 2) => {
                            const e = (0, n.useState)(0),
                                t = e[0],
                                a = e[1],
                                o = (0, n.useMemo)(() => new Array(u).fill(null).map(() => ({ value: !0 })), [u]),
                                r = (0, n.useCallback)(
                                    (e) => {
                                        let n = hu(t, e, u);
                                        for (; n !== t; ) {
                                            if (o[n].value) {
                                                a(n);
                                                break;
                                            }
                                            n = hu(n, e, u);
                                        }
                                    },
                                    [u, t, o],
                                ),
                                i = (0, n.useMemo)(
                                    () =>
                                        o.map((u, e) => ({
                                            canFocusToken: u,
                                            isFocused: e === t,
                                            onFocusChange: (u) => {
                                                u ? a(e) : t === e && a(-1);
                                            },
                                            dropFocus: () => a(-1),
                                        })),
                                    [o, t],
                                ),
                                s = (0, n.useCallback)(
                                    (u) => {
                                        r(u.shiftKey ? -1 : 1);
                                    },
                                    [r],
                                );
                            return mu($.n.TAB, s), i;
                        })(6),
                        h = (0, n.useMemo)(() => m.slice(0, 4), [m]),
                        g = (0, n.useCallback)(() => !!h.find(Au) && (h[0].dropFocus(), !0), [h]),
                        b = (0, n.useCallback)(() => t(), [t]),
                        w = (0, n.useCallback)(() => {
                            m[5].isFocused ? b() : B && _ && i();
                        }, [m, b, B, i, _]);
                    return (
                        ((u) => {
                            const e = (0, n.useCallback)(
                                (e) => {
                                    !e.altKey && u && u();
                                },
                                [u],
                            );
                            mu($.n.ENTER, e, !0);
                        })(w),
                        (0, n.useEffect)(() => {
                            d.current !== B && ((d.current = B), B && m[4].onFocusChange(!0));
                        }, [B, m]),
                        a().createElement(
                            Ju,
                            Ae({}, E, m[4], {
                                onConfirmClicked: w,
                                isConfirmEnabled: B,
                                escapeHandler: g,
                                aboveContentCmp: a().createElement(se, {
                                    classMix: Ee,
                                    payload: o,
                                    text: R.strings.dialogs.accountCompletion.activate.text(),
                                }),
                                underButtonCmp: a().createElement(
                                    ae,
                                    Ae({ buttonLabel: s, timer: e, onResentCode: b }, m[5]),
                                ),
                            }),
                            a().createElement(Bu, Ae({}, F, { onAllDigitsFilled: D, focusingItems: h })),
                        )
                    );
                };
                var De;
                ((De = 'ConfirmCredentialsView'),
                (u, e, t) => {
                    engine.whenReady.then(() => {
                        r().render(a().createElement(i, { name: De }, u), e, t);
                    });
                })(a().createElement(g, null, a().createElement(le, null)), document.getElementById('root'));
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(u) {
        var e = __webpack_module_cache__[u];
        if (void 0 !== e) return e.exports;
        var t = (__webpack_module_cache__[u] = { exports: {} });
        return __webpack_modules__[u](t, t.exports, __webpack_require__), t.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (u, e, t, n) => {
            if (!e) {
                var a = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [e, t, n] = deferred[s], o = !0, r = 0; r < e.length; r++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[r]))
                            ? e.splice(r--, 1)
                            : ((o = !1), n < a && (a = n));
                    if (o) {
                        deferred.splice(s--, 1);
                        var i = t();
                        void 0 !== i && (u = i);
                    }
                }
                return u;
            }
            n = n || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > n; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [e, t, n];
        }),
        (__webpack_require__.n = (u) => {
            var e = u && u.__esModule ? () => u.default : () => u;
            return __webpack_require__.d(e, { a: e }), e;
        }),
        (__webpack_require__.d = (u, e) => {
            for (var t in e)
                __webpack_require__.o(e, t) &&
                    !__webpack_require__.o(u, t) &&
                    Object.defineProperty(u, t, { enumerable: !0, get: e[t] });
        }),
        (__webpack_require__.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (u) {
                if ('object' == typeof window) return window;
            }
        })()),
        (__webpack_require__.o = (u, e) => Object.prototype.hasOwnProperty.call(u, e)),
        (__webpack_require__.r = (u) => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(u, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(u, '__esModule', { value: !0 });
        }),
        (() => {
            var u = { 499: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var n,
                        a,
                        [o, r, i] = t,
                        s = 0;
                    if (o.some((e) => 0 !== u[e])) {
                        for (n in r) __webpack_require__.o(r, n) && (__webpack_require__.m[n] = r[n]);
                        if (i) var E = i(__webpack_require__);
                    }
                    for (e && e(t); s < o.length; s++)
                        (a = o[s]), __webpack_require__.o(u, a) && u[a] && u[a][0](), (u[a] = 0);
                    return __webpack_require__.O(E);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [235], () => __webpack_require__(303));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
