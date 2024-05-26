(() => {
    'use strict';
    var __webpack_modules__ = {
            5067: (u, e, t) => {
                t.d(e, { O: () => U });
                var n = {};
                t.r(n), t.d(n, { mouse: () => c, onResize: () => l });
                var a = {};
                t.r(a),
                    t.d(a, {
                        events: () => n,
                        getMouseGlobalPosition: () => F,
                        getSize: () => A,
                        graphicsQuality: () => d,
                    });
                var o = {};
                t.r(o), t.d(o, { getBgUrl: () => _, getTextureUrl: () => D });
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
                        addModelObserver: () => f,
                        addPreloadTexture: () => v,
                        children: () => o,
                        displayStatus: () => m,
                        displayStatusIs: () => V,
                        events: () => B,
                        extraSize: () => W,
                        forceTriggerMouseMove: () => L,
                        freezeTextureBeforeResize: () => k,
                        getBrowserTexturePath: () => w,
                        getDisplayStatus: () => H,
                        getScale: () => M,
                        getSize: () => h,
                        getViewGlobalPosition: () => T,
                        isEventHandled: () => I,
                        isFocused: () => R,
                        pxToRem: () => O,
                        remToPx: () => P,
                        resize: () => N,
                        sendEvent: () => b,
                        setAnimateWindow: () => x,
                        setEventHandled: () => S,
                        setInputPaddingsRem: () => g,
                        setSidePaddingsRem: () => y,
                        whenTutorialReady: () => z,
                    });
                const l = i('clientResized'),
                    E = { down: i('mousedown'), up: i('mouseup'), move: i('mousemove') },
                    c = (function () {
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
                                            r = E[e]((u) => t([u, 'outside']));
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
                function A(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function F(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const d = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function D(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function _(u, e, t) {
                    return `url(${D(u, e, t)})`;
                }
                const m = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    B = {
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
                    C = ['args'],
                    p = (u, e) => {
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
                    b = {
                        close(u) {
                            p('popover' === u ? 2 : 32);
                        },
                        minimize() {
                            p(64);
                        },
                        move(u) {
                            p(16, { isMouseEvent: !0, on: u });
                        },
                    };
                function v(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function g(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, 15);
                }
                function w(u, e, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, n);
                }
                function f(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function y(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, 15);
                }
                function h(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function N(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function T(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: P(e.x), y: P(e.y) };
                }
                function k() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function M() {
                    return viewEnv.getScale();
                }
                function O(u) {
                    return viewEnv.pxToRem(u);
                }
                function P(u) {
                    return viewEnv.remToPx(u);
                }
                function x(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function R() {
                    return viewEnv.isFocused();
                }
                function S() {
                    return viewEnv.setEventHandled();
                }
                function I() {
                    return viewEnv.isEventHandled();
                }
                function L() {
                    viewEnv.forceTriggerMouseMove();
                }
                function H() {
                    return viewEnv.getShowingStatus();
                }
                const V = Object.keys(m).reduce((u, e) => ((u[e] = () => viewEnv.getShowingStatus() === m[e]), u), {}),
                    W = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    z = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : B.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]),
                    U = { view: r, client: a };
            },
            5521: (u, e, t) => {
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
            1358: (u, e, t) => {
                t.d(e, { Z: () => o });
                var n = t(5067);
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
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
            4179: (u, e, t) => {
                t.d(e, { Sw: () => o.Z, B0: () => s, c9: () => b, ry: () => C, Eu: () => p });
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
                var o = t(1358);
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
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    A = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    F = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = t(5521),
                    D = t(5067);
                const _ = ['args'];
                function m(u, e, t, n, a, o, r) {
                    try {
                        var i = u[o](r),
                            s = i.value;
                    } catch (u) {
                        return void t(u);
                    }
                    i.done ? e(s) : Promise.resolve(s).then(n, a);
                }
                const B = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
                    C = (function () {
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
                                            m(o, n, a, r, i, 'next', u);
                                        }
                                        function i(u) {
                                            m(o, n, a, r, i, 'throw', u);
                                        }
                                        r(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    p = () =>
                        new Promise((u) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    u();
                                });
                            });
                        }),
                    b = (u, e) => {
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
                                })(e, _);
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
                    v = () => b(s.CLOSE),
                    g = (u, e) => {
                        u.keyCode === d.n.ESCAPE && e();
                    };
                var w = t(7572);
                const f = a.instance,
                    y = {
                        DataTracker: o.Z,
                        ViewModel: w.Z,
                        ViewEventType: s,
                        NumberFormatType: E,
                        RealFormatType: c,
                        TimeFormatType: A,
                        DateFormatType: F,
                        makeGlobalBoundingBox: B,
                        sendMoveEvent: (u) => b(s.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: v,
                        sendClosePopOverEvent: () => b(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            b(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, n, a = R.invalid('resId'), o) => {
                            const r = D.O.view.getViewGlobalPosition(),
                                i = t.getBoundingClientRect(),
                                l = i.x,
                                E = i.y,
                                c = i.width,
                                A = i.height,
                                F = {
                                    x: D.O.view.pxToRem(l) + r.x,
                                    y: D.O.view.pxToRem(E) + r.y,
                                    width: D.O.view.pxToRem(c),
                                    height: D.O.view.pxToRem(A),
                                };
                            b(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: e,
                                bbox: B(F),
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
                            g(u, v);
                        },
                        handleViewEvent: b,
                        onBindingsReady: C,
                        onLayoutReady: p,
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
                        ClickOutsideManager: f,
                        SystemLocale: r,
                        UserLocale: i,
                    };
                window.ViewEnvHelper = y;
            },
            6850: (u, e, t) => {
                function n(u) {
                    engine.call('PlaySound', u);
                }
                const a = {
                    playHighlight() {
                        n('highlight');
                    },
                    playClick() {
                        n('play');
                    },
                    playYes() {
                        n('yes1');
                    },
                };
                var o = t(6179),
                    r = t.n(o),
                    i = t(493),
                    s = t.n(i),
                    l = t(6483),
                    E = t.n(l),
                    c = t(5067);
                const A = ['children'],
                    F = r().createContext(null),
                    d = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    a = {},
                                    o = Object.keys(u);
                                for (n = 0; n < o.length; n++) (t = o[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                return a;
                            })(u, A);
                        return r().createElement(F.Provider, { value: t }, e);
                    },
                    D = {
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
                let _, m;
                !(function (u) {
                    (u.main = 'main'),
                        (u.primary = 'primary'),
                        (u.primaryGreen = 'primaryGreen'),
                        (u.primaryRed = 'primaryRed'),
                        (u.secondary = 'secondary'),
                        (u.ghost = 'ghost');
                })(_ || (_ = {})),
                    (function (u) {
                        (u.extraSmall = 'extraSmall'), (u.small = 'small'), (u.medium = 'medium');
                    })(m || (m = {}));
                const B = ({
                    children: u,
                    size: e,
                    isFocused: t,
                    type: a,
                    disabled: i,
                    mixClass: s,
                    soundHover: l,
                    soundClick: c,
                    onMouseEnter: A,
                    onMouseMove: F,
                    onMouseDown: d,
                    onMouseUp: m,
                    onMouseLeave: B,
                    onClick: C,
                }) => {
                    const p = (0, o.useRef)(null),
                        b = (0, o.useState)(t),
                        v = b[0],
                        g = b[1],
                        w = (0, o.useState)(!1),
                        f = w[0],
                        y = w[1],
                        h = (0, o.useState)(!1),
                        N = h[0],
                        T = h[1],
                        k = (0, o.useCallback)(() => {
                            i || (p.current && (p.current.focus(), g(!0)));
                        }, [i]),
                        M = (0, o.useCallback)(
                            (u) => {
                                v && null !== p.current && !p.current.contains(u.target) && g(!1);
                            },
                            [v],
                        ),
                        O = (0, o.useCallback)(
                            (u) => {
                                i || (C && C(u));
                            },
                            [i, C],
                        ),
                        P = (0, o.useCallback)(
                            (u) => {
                                i || (null !== l && n(l), A && A(u), T(!0));
                            },
                            [i, l, A],
                        ),
                        x = (0, o.useCallback)(
                            (u) => {
                                F && F(u);
                            },
                            [F],
                        ),
                        S = (0, o.useCallback)(
                            (u) => {
                                i || (m && m(u), y(!1));
                            },
                            [i, m],
                        ),
                        I = (0, o.useCallback)(
                            (u) => {
                                i || (null !== c && n(c), d && d(u), t && k(), y(!0));
                            },
                            [i, c, d, k, t],
                        ),
                        L = (0, o.useCallback)(
                            (u) => {
                                i || (B && B(u), y(!1));
                            },
                            [i, B],
                        ),
                        H = E()(
                            D.base,
                            D[`base__${a}`],
                            {
                                [D.base__disabled]: i,
                                [D[`base__${e}`]]: e,
                                [D.base__focus]: v,
                                [D.base__highlightActive]: f,
                                [D.base__firstHover]: N,
                            },
                            s,
                        ),
                        V = E()(D.state, D.state__default);
                    return (
                        (0, o.useEffect)(
                            () => (
                                document.addEventListener('mousedown', M),
                                () => {
                                    document.removeEventListener('mousedown', M);
                                }
                            ),
                            [M],
                        ),
                        (0, o.useEffect)(() => {
                            g(t);
                        }, [t]),
                        r().createElement(
                            'div',
                            {
                                ref: p,
                                className: H,
                                onMouseEnter: P,
                                onMouseMove: x,
                                onMouseUp: S,
                                onMouseDown: I,
                                onMouseLeave: L,
                                onClick: O,
                            },
                            a !== _.ghost &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement('div', { className: D.back }),
                                    r().createElement('span', { className: D.texture }),
                                ),
                            r().createElement(
                                'span',
                                { className: V },
                                r().createElement('span', { className: D.stateDisabled }),
                                r().createElement('span', { className: D.stateHighlightHover }),
                                r().createElement('span', { className: D.stateHighlightActive }),
                            ),
                            r().createElement(
                                'span',
                                { className: D.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                u,
                            ),
                        )
                    );
                };
                B.defaultProps = { type: _.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const C = (0, o.memo)(B),
                    p = {
                        base: 'Button_base_8d',
                        base__close: 'Button_base__close_b1',
                        base__minimize: 'Button_base__minimize_f7',
                    };
                let b;
                !(function (u) {
                    (u.Minimize = 'minimize'), (u.Close = 'close');
                })(b || (b = {}));
                const v = ({ onClick: u, type: e }) => {
                        const t = (0, o.useCallback)(() => {
                                a.playHighlight();
                            }, []),
                            n = (0, o.useCallback)((u) => u.stopPropagation(), []),
                            i = E()(p.base, p[`base__${e}`]);
                        return r().createElement('div', { className: i, onClick: u, onMouseEnter: t, onMouseDown: n });
                    },
                    g = (u = 1) => {
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
                    };
                var w = t(4179);
                const f = [
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
                function y(u) {
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
                const h = (u, e, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: w.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    N = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            n = u.args,
                            a = u.onMouseEnter,
                            r = u.onMouseLeave,
                            i = u.onMouseDown,
                            s = u.onClick,
                            l = u.ignoreShowDelay,
                            E = void 0 !== l && l,
                            c = u.ignoreMouseClick,
                            A = void 0 !== c && c,
                            F = u.decoratorId,
                            d = void 0 === F ? 0 : F,
                            D = u.isEnabled,
                            _ = void 0 === D || D,
                            m = u.targetId,
                            B = void 0 === m ? 0 : m,
                            C = u.onShow,
                            p = u.onHide,
                            b = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    a = {},
                                    o = Object.keys(u);
                                for (n = 0; n < o.length; n++) (t = o[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                return a;
                            })(u, f);
                        const v = (0, o.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            w = (0, o.useMemo)(() => B || g().resId, [B]),
                            N = (0, o.useCallback)(() => {
                                (v.current.isVisible && v.current.timeoutId) ||
                                    (h(t, d, { isMouseEvent: !0, on: !0, arguments: y(n) }, w),
                                    C && C(),
                                    (v.current.isVisible = !0));
                            }, [t, d, n, w, C]),
                            T = (0, o.useCallback)(() => {
                                if (v.current.isVisible || v.current.timeoutId) {
                                    const u = v.current.timeoutId;
                                    u > 0 && (clearTimeout(u), (v.current.timeoutId = 0)),
                                        h(t, d, { on: !1 }, w),
                                        v.current.isVisible && p && p(),
                                        (v.current.isVisible = !1);
                                }
                            }, [t, d, w, p]),
                            k = (0, o.useCallback)((u) => {
                                v.current.isVisible &&
                                    ((v.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (v.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(v.current.prevTarget) && T();
                                    }, 200)));
                            }, []);
                        return (
                            (0, o.useEffect)(() => {
                                const u = v.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', k, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', k, { capture: !0 }),
                                            u && window.clearTimeout(u);
                                    }
                                );
                            }, []),
                            (0, o.useEffect)(() => {
                                !1 === _ && T();
                            }, [_, T]),
                            (0, o.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', T),
                                    () => {
                                        window.removeEventListener('mouseleave', T), T();
                                    }
                                ),
                                [T],
                            ),
                            _
                                ? (0, o.cloneElement)(
                                      e,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((M = e.props.onMouseEnter),
                                                  (u) => {
                                                      (u.clientX === window.innerWidth &&
                                                          u.clientY === window.innerHeight) ||
                                                          ((v.current.timeoutId = window.setTimeout(N, E ? 100 : 400)),
                                                          a && a(u),
                                                          M && M(u));
                                                  }),
                                              onMouseLeave: ((u) => (e) => {
                                                  T(), null == r || r(e), null == u || u(e);
                                              })(e.props.onMouseLeave),
                                              onClick: ((u) => (e) => {
                                                  !1 === A && T(), null == s || s(e), null == u || u(e);
                                              })(e.props.onClick),
                                              onMouseDown: ((u) => (e) => {
                                                  !1 === A && T(), null == i || i(e), null == u || u(e);
                                              })(e.props.onMouseDown),
                                          },
                                          b,
                                      ),
                                  )
                                : e
                        );
                        var M;
                    },
                    T = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function k() {
                    return (
                        (k =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        k.apply(this, arguments)
                    );
                }
                const M = R.views.common.tooltip_window.simple_tooltip_content,
                    O = (u) => {
                        let e = u.children,
                            t = u.body,
                            n = u.header,
                            a = u.note,
                            i = u.alert,
                            s = u.args,
                            l = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    a = {},
                                    o = Object.keys(u);
                                for (n = 0; n < o.length; n++) (t = o[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                return a;
                            })(u, T);
                        const E = (0, o.useMemo)(() => {
                            const u = Object.assign({}, s, { body: t, header: n, note: a, alert: i });
                            for (const e in u) void 0 === u[e] && delete u[e];
                            return u;
                        }, [i, t, n, a, s]);
                        return r().createElement(
                            N,
                            k(
                                {
                                    contentId:
                                        ((c = null == s ? void 0 : s.hasHtmlContent),
                                        c ? M.SimpleTooltipHtmlContent('resId') : M.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: E,
                                },
                                l,
                            ),
                            e,
                        );
                        var c;
                    },
                    P = ({ tooltipHeader: u, tooltipBody: e }) =>
                        r().createElement(
                            O,
                            { isEnabled: !0, header: u, body: e },
                            r().createElement('div', { className: 'Info_base_7b' }),
                        ),
                    x = ({ title: u, infoTooltipHeader: e, infoTooltipBody: t }) =>
                        r().createElement(
                            'div',
                            { className: 'Title_base_44' },
                            u,
                            e && t && r().createElement(P, { tooltipHeader: e, tooltipBody: t }),
                        ),
                    S = ({
                        title: u,
                        showMinimizeBtn: e,
                        onMinimize: t,
                        onClose: n,
                        onReload: i,
                        infoTooltipHeader: s,
                        infoTooltipBody: l,
                    }) => {
                        const A = (0, o.useState)(!1),
                            F = A[0],
                            d = A[1],
                            D = (0, o.useCallback)((u) => {
                                const e = () => {
                                    c.O.view.sendEvent.move(!1), d(!1), document.removeEventListener('mouseup', e);
                                };
                                0 === u.button &&
                                    (c.O.view.sendEvent.move(!0), d(!0), document.addEventListener('mouseup', e));
                            }, []);
                        return r().createElement(
                            'div',
                            { className: E()('Header_base_ff', F && 'Header_base__grabbing_dc'), onMouseDown: D },
                            r().createElement(x, { title: u, infoTooltipBody: l, infoTooltipHeader: s }),
                            i &&
                                r().createElement(
                                    C,
                                    {
                                        mixClass: 'Header_reloadButton_19',
                                        onClick: (u) => {
                                            a.playClick(), null == i || i(u);
                                        },
                                    },
                                    r().createElement('div', {
                                        className: E()('Header_icon_6e', 'Header_icon__reload_c2'),
                                    }),
                                ),
                            e &&
                                r().createElement(v, {
                                    type: b.Minimize,
                                    onClick: (u) => {
                                        a.playClick(), t ? t(u) : c.O.view.sendEvent.minimize();
                                    },
                                }),
                            r().createElement(v, {
                                type: b.Close,
                                onClick: (u) => {
                                    a.playClick(), n ? n(u) : c.O.view.sendEvent.close();
                                },
                            }),
                        );
                    },
                    I = r().forwardRef(
                        (
                            {
                                title: u,
                                showMinimizeBtn: e,
                                onClose: t,
                                onReload: n,
                                onMinimize: a,
                                onFocusChange: i,
                                infoTooltipHeader: s,
                                infoTooltipBody: l,
                                className: A,
                                children: F,
                            },
                            D,
                        ) => {
                            const _ = (0, o.useRef)(null),
                                m = (0, o.useRef)(null),
                                B = (0, o.useState)(!0),
                                C = B[0],
                                p = B[1],
                                b = (function () {
                                    const u = (0, o.useRef)(0);
                                    var e;
                                    return (
                                        (e = () => {
                                            window.cancelAnimationFrame(u.current);
                                        }),
                                        (0, o.useEffect)(() => e, []),
                                        (0, o.useMemo)(
                                            () => ({
                                                run: (e) => {
                                                    window.cancelAnimationFrame(u.current),
                                                        (u.current = window.requestAnimationFrame(() => {
                                                            u.current = window.requestAnimationFrame(() => {
                                                                e(), (u.current = 0);
                                                            });
                                                        }));
                                                },
                                                clear: () => {
                                                    window.cancelAnimationFrame(u.current), (u.current = 0);
                                                },
                                                get isRunning() {
                                                    return 0 !== u.current;
                                                },
                                            }),
                                            [],
                                        )
                                    );
                                })(),
                                v = () => {
                                    b.run(() => {
                                        const u = _.current,
                                            e = m.current;
                                        if (!u || !e) return;
                                        const t = c.O.view.pxToRem(u.offsetWidth),
                                            n = c.O.view.pxToRem(u.offsetHeight);
                                        (e.style.width = `${t}rem`), (e.style.height = `${n}rem`);
                                        const a = t + 10 + 26,
                                            o = 28 + n + 5 + 26;
                                        c.O.view.setInputPaddingsRem(13), c.O.view.resize(a, o, 'rem');
                                    });
                                };
                            var g;
                            return (
                                (g = () => {
                                    v();
                                }),
                                (0, o.useEffect)(g, []),
                                (0, o.useEffect)(
                                    () =>
                                        c.O.client.events.mouse.down(([, u]) => {
                                            'outside' === u && C
                                                ? (p(!1), null == i || i(!1))
                                                : 'inside' !== u || C || (p(!0), null == i || i(!0));
                                        }),
                                    [C, i],
                                ),
                                r().createElement(
                                    d,
                                    { updateSizes: v },
                                    r().createElement(
                                        'div',
                                        {
                                            className: E()('WindowDecorator_base_6a', A),
                                            style: { '--outer-shadow-width': '13rem' },
                                            ref: D,
                                        },
                                        r().createElement('div', {
                                            className: E()(
                                                'WindowDecorator_frame_b5',
                                                C && 'WindowDecorator_frame__focused_af',
                                            ),
                                        }),
                                        r().createElement(S, {
                                            title: u,
                                            infoTooltipHeader: s,
                                            infoTooltipBody: l,
                                            onClose: t,
                                            onMinimize: a,
                                            onReload: n,
                                            showMinimizeBtn: e,
                                        }),
                                        r().createElement(
                                            'div',
                                            { className: 'WindowDecorator_container_1d', ref: m },
                                            r().createElement('div', {
                                                className: 'WindowDecorator_contentDecorations_be',
                                            }),
                                            r().createElement(
                                                'div',
                                                { className: 'WindowDecorator_content_0b', ref: _ },
                                                F,
                                            ),
                                        ),
                                    ),
                                )
                            );
                        },
                    );
                var L = t(5521);
                const H = (u) => {
                    console.error(u.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function V(u = L.n.NONE, e = H, t = !1) {
                    (0, o.useEffect)(() => {
                        if (u !== L.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === u) {
                                if (c.O.view.isEventHandled()) return;
                                c.O.view.setEventHandled(), e(n), t && n.stopPropagation();
                            }
                        }
                    }, [e, u, t]);
                }
                const W = (u, e) => u.split('.').reduce((u, e) => u && u[e], e),
                    z = (u) => u && 'ArrayItem' === u.__proto__.constructor.name,
                    U = (u, e) => (u.length > 0 ? `${u}.${e}` : e),
                    $ = w.Sw.instance;
                let j;
                !(function (u) {
                    (u.None = 'None'), (u.Shallow = 'Shallow'), (u.Deep = 'Deep');
                })(j || (j = {}));
                const G = (u = 'model', e = j.Deep) => {
                        const t = (0, o.useState)(0),
                            n = (t[0], t[1]),
                            a = (0, o.useMemo)(() => g(), []),
                            r = a.caller,
                            i = a.resId,
                            s = (0, o.useMemo)(
                                () => (window.__feature && window.__feature !== r ? `subViews.${r}.${u}` : u),
                                [r, u],
                            ),
                            l = (0, o.useState)(() =>
                                ((u) => {
                                    const e = W(u, window);
                                    for (const u in e) 'function' == typeof e[u] && (e[u] = e[u].bind(e));
                                    return z(e) ? e.value : e;
                                })(
                                    ((u) =>
                                        ((u, e) =>
                                            u.split('.').reduce((u, e) => {
                                                const t = W(`${u}.${e}`, window);
                                                return z(t) ? ((u, e) => `${u}.${e}.value`)(u, e) : `${u}.${e}`;
                                            }))(u))(s),
                                ),
                            ),
                            E = l[0],
                            c = l[1],
                            A = (0, o.useRef)(-1);
                        return (
                            ((u) => {
                                const e = (0, o.useRef)(!1);
                                e.current || (u(), (e.current = !0));
                            })(() => {
                                if (
                                    ('boolean' == typeof e &&
                                        ((e = e ? j.Deep : j.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    e !== j.None)
                                ) {
                                    const t = (u) => {
                                            ((u) => u && 'CoherentArrayProxy' === u.__proto__.constructor.name)(u) &&
                                            e === j.Deep
                                                ? (u === E && n((u) => u + 1), c(u))
                                                : c(Object.assign([], u));
                                        },
                                        a = ((u) => {
                                            const e = ((u) => {
                                                    const e = g(),
                                                        t = e.caller,
                                                        n = e.resId,
                                                        a =
                                                            window.__feature && window.__feature !== t && t
                                                                ? `subViews.${t}`
                                                                : '';
                                                    return { modelPrefix: a, modelPath: U(a, ''), resId: n };
                                                })(),
                                                t = e.modelPrefix,
                                                n = u.split('.');
                                            if (n.length > 0) {
                                                const u = [n[0]];
                                                return (
                                                    n.reduce((e, n) => {
                                                        const a = W(U(t, `${e}.${n}`), window);
                                                        return z(a)
                                                            ? (u.push(a.id), `${e}.${n}.value`)
                                                            : (u.push(n), `${e}.${n}`);
                                                    }),
                                                    u.reduce((u, e) => u + '.' + e)
                                                );
                                            }
                                            return '';
                                        })(u);
                                    A.current = $.addCallback(a, t, i, e === j.Deep);
                                }
                            }),
                            (0, o.useEffect)(() => {
                                if (e !== j.None)
                                    return () => {
                                        $.removeCallback(A.current, i);
                                    };
                            }, [i, e]),
                            E
                        );
                    },
                    q = /<link.*?>/g,
                    K = /\.\.\//g,
                    Y = /<script.*?>/g,
                    X = 'default.css',
                    Z = (u) => {
                        const e = u.match(K);
                        return e && e.join('');
                    },
                    Q = () => {
                        for (
                            var u = 0, e = Array.from(document.head.querySelectorAll('link[rel="stylesheet"]'));
                            u < e.length;
                            u++
                        ) {
                            const t = e[u];
                            if (!t.href.includes(X)) return t.href;
                        }
                        return '';
                    },
                    J = (u) => {
                        const e = Q(),
                            t = Z(e);
                        let n,
                            a = u;
                        for (; null !== (n = Y.exec(u)); ) {
                            const u = n[0].match(/<script (defer|defer="defer") src="(.*?)">/);
                            if (u) {
                                const e = t + u[2].replace(K, '');
                                a = a.replace(u[2], e);
                            }
                        }
                        return a;
                    },
                    uu = 'subViews.onChanged',
                    eu = (() => {
                        const u = [];
                        let e = !1;
                        const t = () => {
                            if (!u.length) return void (e = !1);
                            const n = u.shift();
                            n && ((e = !0), n().then(() => t()));
                        };
                        return {
                            add: (n) => {
                                u.push(n), e || t();
                            },
                        };
                    })(),
                    tu = (0, o.memo)(({ id: u, fallback: e, onLoadCallback: t, mixClass: n }) => {
                        const a = (0, o.useState)(''),
                            i = a[0],
                            s = a[1],
                            l = (0, o.useMemo)(() => ({ __html: J(i) }), [i]),
                            c = (0, o.useMemo)(() => window.subViews.addChildChangedCallback(u), [u]),
                            A = (0, o.useState)(!1),
                            F = A[0],
                            d = A[1],
                            D = (0, o.useCallback)(
                                (u) => {
                                    u.includes(c) &&
                                        (d(!0), engine.off(uu, D), window.subViews.removeChildChangedCallback(c));
                                },
                                [c],
                            ),
                            _ = (0, o.useCallback)((u) => {
                                eu.add(
                                    () =>
                                        new Promise((e) => {
                                            s(u);
                                            const t = new MutationObserver(() => {
                                                    t.disconnect(), e();
                                                }),
                                                n = document.getElementById('root');
                                            n && t.observe(n, { childList: !0 });
                                        }),
                                );
                            }, []);
                        (0, o.useEffect)(() => {
                            if (window.subViews.ids().includes(u)) {
                                const e = window.subViews.get(u),
                                    t = e.path;
                                let n;
                                if ((n = t.split('/').pop()))
                                    return (
                                        (n = n.split('.')[0]),
                                        (window.subViews[n] = Object.assign({ id: u }, e)),
                                        engine.on(`subView:inject->${n}`, _),
                                        (({ path: u, name: e }) => {
                                            const t = new XMLHttpRequest();
                                            (t.onreadystatechange = () => {
                                                4 === t.readyState &&
                                                    (200 === t.status
                                                        ? (0, w.Eu)().then(() => {
                                                              console.info(`Sub view ${e} loaded: ${u}`),
                                                                  engine.TriggerEvent(
                                                                      `subView:inject->${e}`,
                                                                      t.responseText,
                                                                  );
                                                          })
                                                        : console.error(
                                                              `subView: status: ${t.status} - can't get bundle`,
                                                          ));
                                            }),
                                                t.open('GET', u),
                                                t.send();
                                        })({ name: n, path: t }),
                                        () => {
                                            n && window.subViews[n] && delete window.subViews[n],
                                                engine.trigger('subView:destroy', { viewName: n, viewId: u }),
                                                window.__dataTracker &&
                                                    window.__dataTracker.clearViewCallbacks &&
                                                    window.__dataTracker.clearViewCallbacks(u),
                                                engine.off(`subView:inject->${n}`, _),
                                                console.info(`Sub view ${n} is destroyed: ${t}`);
                                        }
                                    );
                                console.error("subView: can't get View component name");
                            } else engine.on(uu, D);
                        }, [D, _, u, F]),
                            (0, o.useEffect)(
                                () => () => {
                                    i &&
                                        ((u) => {
                                            const e = Z(Q());
                                            let t;
                                            for (; null !== (t = q.exec(u)); ) {
                                                const u = t[0].match(/href="(.*?)"/);
                                                if (u) {
                                                    const t = e + u[1].replace(K, ''),
                                                        n = document.head.querySelector(`[href="${t}"]`);
                                                    n && document.head.removeChild(n);
                                                }
                                            }
                                        })(i);
                                },
                                [i],
                            );
                        const m = E()('SubView_base_df', n);
                        if (i) {
                            let e;
                            return (
                                (e = document.getElementById('root')) && e.setAttribute('id', 'bugSubView'),
                                ((u) => {
                                    let e;
                                    const t = Q(),
                                        n = Z(t);
                                    for (; null !== (e = q.exec(u)); ) {
                                        const u = e[0].match(/href="(.*?)"/);
                                        if (u && !u[1].includes(X) && n) {
                                            const e = n + u[1].replace(K, ''),
                                                t = document.createElement('link');
                                            (t.href = e), (t.rel = 'stylesheet'), document.head.appendChild(t);
                                        }
                                    }
                                })(i),
                                t && t(u),
                                r().createElement('div', { className: m, dangerouslySetInnerHTML: l })
                            );
                        }
                        return e ? r().createElement('div', { className: m }, r().createElement(e, null)) : null;
                    }),
                    nu = (u) => ({ backgroundImage: `url('${u}')` }),
                    au = () => {
                        const u = (0, o.useMemo)(() => nu(R.images.gui.maps.icons.platoon.common.info()), []);
                        return r().createElement(
                            N,
                            {
                                isEnabled: !0,
                                contentId:
                                    R.views.lobby.premacc.squad_bonus_tooltip_content.SquadBonusTooltipContent('resId'),
                                decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                            },
                            r().createElement('div', { className: 'BonusInfoIcon_bonusInfoIcon_3d', style: u }),
                        );
                    };
                function ou() {
                    return (
                        (ou =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        ou.apply(this, arguments)
                    );
                }
                const ru = (0, o.memo)(
                    ({
                        caption: u,
                        isEnabled: e,
                        description: t,
                        children: n,
                        cButtonProps: a,
                        onClick: i,
                        className: s,
                    }) => {
                        const l = (0, o.useCallback)(() => i(), [i]);
                        return r().createElement(
                            O,
                            { isEnabled: !0, header: u, body: t },
                            r().createElement(
                                'div',
                                { className: s },
                                r().createElement(
                                    C,
                                    ou({ type: _.primary, size: m.small, onClick: l, disabled: !e }, a),
                                    n || u,
                                ),
                            ),
                        );
                    },
                );
                let iu;
                !(function (u) {
                    (u.left = 'left'), (u.top = 'top'), (u.right = 'right'), (u.bottom = 'bottom');
                })(iu || (iu = {}));
                const su = ({ position: u }) => {
                        const e = R.images.gui.maps.icons.platoon.common.separator.$dyn(u),
                            t = [iu.right, iu.left].includes(u),
                            n = E()(
                                'Separator_base_98',
                                t ? 'Separator_base__vertical_9d' : 'Separator_base__horizontal_34',
                            );
                        return r().createElement(
                            'div',
                            { className: n },
                            r().createElement('div', { className: 'Separator_image_5b', style: nu(e) }),
                        );
                    },
                    lu = ['active', 'className', 'children', 'size'];
                function Eu() {
                    return (
                        (Eu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        Eu.apply(this, arguments)
                    );
                }
                const cu = (u) => {
                        let e = u.active,
                            t = u.className,
                            n = u.children,
                            a = u.size,
                            o = void 0 === a ? m.small : a,
                            i = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    a = {},
                                    o = Object.keys(u);
                                for (n = 0; n < o.length; n++) (t = o[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                return a;
                            })(u, lu);
                        const s = E()('ToggleButton_base_b9', t, e && 'ToggleButton_base__active_68');
                        return r().createElement(
                            'div',
                            { className: s },
                            r().createElement(
                                C,
                                Eu({}, i, { type: 'secondary', size: o }),
                                r().createElement('span', { className: 'ToggleButton_content_85' }, n),
                            ),
                            r().createElement('div', { className: 'ToggleButton_overlay_0a' }),
                            r().createElement('div', { className: 'ToggleButton_indicator_85' }),
                        );
                    },
                    Au = ((0, o.memo)(cu), { contentId: R.views.lobby.platoon.AlertTooltip('resId'), isEnabled: !0 });
                function Fu() {
                    return (
                        (Fu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        Fu.apply(this, arguments)
                    );
                }
                const du = () => {
                        const u = G(),
                            e = u.shouldShowFindPlayersButton,
                            t = u.shouldShowInvitePlayersButton,
                            a = u.isEvent,
                            i = G('model.btnInviteFriends'),
                            s = G('model.btnFindPlayers'),
                            l = (0, o.useCallback)(() => {
                                s.onClick(), n(s.soundClickName);
                            }, [s]),
                            E = (0, o.useMemo)(() => ({ type: _.secondary }), []),
                            c = (0, o.useMemo)(
                                () =>
                                    ((u, e, t, n = !0) =>
                                        u && n
                                            ? Au
                                            : ((u, e, t) => ({
                                                  contentId:
                                                      R.views.common.tooltip_window.simple_tooltip_content.SimpleTooltipContent(
                                                          'resId',
                                                      ),
                                                  decoratorId:
                                                      R.views.common.tooltip_window.tooltip_window.TooltipWindow(
                                                          'resId',
                                                      ),
                                                  args: { header: u, body: e },
                                                  isEnabled: t,
                                              }))(e, t, n))(!s.isEnabled, s.caption, s.description, s.hasTooltip),
                                [s.caption, s.isEnabled, s.description, s.hasTooltip],
                            );
                        return r().createElement(
                            r().Fragment,
                            null,
                            !a &&
                                r().createElement(
                                    'div',
                                    { className: 'CommanderControls_left_11' },
                                    e &&
                                        r().createElement(
                                            r().Fragment,
                                            null,
                                            r().createElement(
                                                N,
                                                c,
                                                r().createElement(
                                                    'div',
                                                    null,
                                                    r().createElement(
                                                        C,
                                                        {
                                                            type: s.isLight ? _.primary : _.secondary,
                                                            size: m.small,
                                                            onClick: s.isEnabled ? l : void 0,
                                                            disabled: !s.isEnabled,
                                                            mixClass: 'CommanderControls_findPlayers_66',
                                                        },
                                                        s.caption,
                                                    ),
                                                ),
                                            ),
                                            r().createElement(tu, {
                                                id: R.views.lobby.platoon.subViews.TiersLimit('resId'),
                                                mixClass: 'CommanderControls_tiersLimit_85',
                                            }),
                                        ),
                                ),
                            t &&
                                r().createElement(
                                    ru,
                                    Fu({}, i, { classMix: 'CommanderControls_btnInvite_99', cButtonProps: E }),
                                ),
                        );
                    },
                    Du = () => {
                        const u = G('model.btnSwitchReady'),
                            e = u.onClick,
                            t = u.caption,
                            n = u.description,
                            a = u.tooltipHeader,
                            i = u.isRed,
                            s = u.isEnabled,
                            l = G(),
                            c = l.footerMessage,
                            A = l.isFooterMessageGrey,
                            F = Boolean(a && n),
                            d = (0, o.useCallback)(() => e(), [e]),
                            D = E()('Footer_message_55', !A && 'Footer_message__alert_ad');
                        return r().createElement(
                            'div',
                            { className: 'Footer_base_6c' },
                            r().createElement('div', { className: D }, c),
                            r().createElement(
                                O,
                                { header: a, body: n, isEnabled: F },
                                r().createElement(
                                    'div',
                                    null,
                                    r().createElement(
                                        C,
                                        { onClick: d, size: m.small, type: i ? _.primaryRed : _.primary, disabled: !s },
                                        t,
                                    ),
                                ),
                            ),
                        );
                    },
                    _u = (u) => ({ backgroundImage: `url('${u}')` }),
                    mu = ({ currency: u, amount: e }) => {
                        const t = R.images.gui.maps.icons.platoon.members_window.currencies.$dyn(u),
                            n = (0, o.useMemo)(() => _u(t), [t]);
                        return r().createElement(
                            'div',
                            { className: 'Bonus_base_00' },
                            r().createElement('div', { className: 'Bonus_currencyImage_61', style: n }),
                            r().createElement('span', { className: 'Bonus_caption_19' }, `+${e}%`),
                        );
                    },
                    Bu = () => {
                        const u = G('model.header.bonuses');
                        return 0 === u.length
                            ? null
                            : r().createElement(
                                  'div',
                                  { className: 'Bonuses_base_c0' },
                                  u
                                      .filter((u) => u)
                                      .map(({ value: u }) =>
                                          r().createElement(mu, {
                                              currency: u.currency,
                                              amount: u.amount,
                                              key: u.currency,
                                          }),
                                      ),
                              );
                    };
                let Cu;
                function pu(u) {
                    return u.replace(/-/g, '_');
                }
                !(function (u) {
                    (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
                })(Cu || (Cu = {}));
                const bu = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    vu = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    gu = (u, e, t = Cu.left) => u.split(e).reduce(t === Cu.left ? bu : vu, []),
                    wu = (() => {
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
                    fu = ['zh_cn', 'zh_sg', 'zh_tw'],
                    yu = ({ binding: u, text: e = '', classMix: t, alignment: n = Cu.left }) =>
                        null === e
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : r().createElement(
                                  o.Fragment,
                                  null,
                                  e.split('\n').map((e, a) =>
                                      r().createElement(
                                          'div',
                                          { className: E()('FormatText_base_d0', t), key: `${e}-${a}` },
                                          ((u, e, t) =>
                                              u.split(/%\((.*?)\)(?:[sd])?/g).map((u) =>
                                                  t && u in t
                                                      ? t[u]
                                                      : ((u, e = Cu.left) => {
                                                            const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                            return fu.includes(t)
                                                                ? wu(u)
                                                                : ((u, e = Cu.left) => {
                                                                      let t = [];
                                                                      const n =
                                                                              /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                          a = u.replace(/&nbsp;/g, ' ');
                                                                      return (
                                                                          gu(a, /( )/, e).forEach(
                                                                              (u) => (t = t.concat(gu(u, n, Cu.left))),
                                                                          ),
                                                                          t
                                                                      );
                                                                  })(u, e);
                                                        })(u, e),
                                              ))(e, n, u).map((u, e) =>
                                              r().createElement(o.Fragment, { key: `${e}-${u}` }, u),
                                          ),
                                      ),
                                  ),
                              );
                let hu;
                var Nu;
                ((Nu = hu || (hu = {})).SHORT_DATE = 'short-date'),
                    (Nu.SHORT_TIME = 'short-time'),
                    (Nu.SHORT_DATE_TIME = 'short-date-time'),
                    (Nu.FULL_DATE = 'full-date'),
                    (Nu.FULL_DATE_TIME = 'full-date-time'),
                    (Nu.MONTH = 'month'),
                    (Nu.MONTH_DATE = 'month-date'),
                    (Nu.DATE_MONTH = 'date-month'),
                    (Nu.MONTH_YEAR = 'month-year'),
                    (Nu.WEEK_DAY = 'week-day'),
                    (Nu.WEEK_DAY_TIME = 'week-day-time'),
                    (Nu.YEAR = 'year'),
                    (Nu.DATE_YEAR = 'date-year'),
                    Date.now(),
                    w.Sw.instance;
                const Tu = ({ isEvent: u }) => {
                    const e = G('model.header.noBonusPlaceholder'),
                        t = e.text,
                        n = e.icon,
                        a = n && _u(n),
                        o = E()('NoBonus_textContainer_18', u && 'NoBonus_textContainer__event_df'),
                        i = E()('NoBonus_icon_0e', u && 'NoBonus_icon__event_dd');
                    return r().createElement(
                        r().Fragment,
                        null,
                        t &&
                            r().createElement(
                                'div',
                                { className: o },
                                r().createElement(yu, { text: t, classMix: 'NoBonus_text_08', alignment: Cu.right }),
                            ),
                        a && r().createElement('div', { className: i, style: a }),
                    );
                };
                function ku() {
                    return (
                        (ku =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        ku.apply(this, arguments)
                    );
                }
                const Mu = ({ isEvent: u }) => {
                    const e = G('model.header.btnLeavePlatoon'),
                        t = G('model.header.btnMuteAll'),
                        a = G('model.header'),
                        i = a.showNoBonusPlaceholder,
                        s = a.showInfoIcon,
                        l = (0, o.useMemo)(() => ({ type: _.secondary }), []),
                        E = (0, o.useCallback)(() => {
                            e.onClick(), n(R.sounds.gui_platoon_2_leave());
                        }, [e]),
                        c = (0, o.useCallback)(() => t.onClick(), [t]);
                    return r().createElement(
                        'div',
                        { className: 'Header_base_8d' },
                        r().createElement(ru, ku({}, e, { onClick: E, cButtonProps: l })),
                        t.isVisible &&
                            r().createElement(
                                O,
                                { isEnabled: !0, header: t.tooltipHeader, body: t.tooltipBody },
                                r().createElement(
                                    'div',
                                    { className: 'Header_button_4f' },
                                    r().createElement(
                                        cu,
                                        { onClick: c, active: t.isSelected },
                                        r().createElement('div', { className: 'Header_buttonIcon_99' }),
                                    ),
                                ),
                            ),
                        r().createElement(
                            'div',
                            { className: 'Header_box_e4' },
                            i ? r().createElement(Tu, { isEvent: u }) : r().createElement(Bu, null),
                            s && !u && r().createElement(au, null),
                        ),
                    );
                };
                let Ou;
                !(function (u) {
                    (u[(u.LEFT = 0)] = 'LEFT'),
                        (u[(u.WHEEL = 1)] = 'WHEEL'),
                        (u[(u.RIGHT = 2)] = 'RIGHT'),
                        (u[(u.FOURTH = 3)] = 'FOURTH'),
                        (u[(u.FIFTH = 4)] = 'FIFTH');
                })(Ou || (Ou = {}));
                const Pu = ({
                        children: u,
                        contentID: e,
                        decoratorID: t = 0,
                        targetId: n = 0,
                        args: r,
                        isEnabled: i = !0,
                        onMouseDown: s,
                    }) => {
                        const l = (0, o.useCallback)(() => {
                                (0, w.c9)(w.B0.CONTEXT_MENU, {
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: n,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: r,
                                }),
                                    a.playYes();
                            }, [r, e, t, n]),
                            E = (0, o.useCallback)(() => {
                                (0, w.c9)(w.B0.CONTEXT_MENU, {
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: n,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [e, t, n]),
                            c = (0, o.useCallback)(
                                (u) => {
                                    s && s(u), ((u) => u.button === Ou.RIGHT)(u) && l();
                                },
                                [s, l],
                            );
                        return (
                            (0, o.useEffect)(() => {
                                !1 === i && E();
                            }, [i, E]),
                            i ? (0, o.cloneElement)(u, { onMouseDown: c }) : u
                        );
                    },
                    xu = ['children'];
                function Ru() {
                    return (
                        (Ru =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        Ru.apply(this, arguments)
                    );
                }
                const Su = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    a = {},
                                    o = Object.keys(u);
                                for (n = 0; n < o.length; n++) (t = o[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                return a;
                            })(u, xu);
                        return r().createElement(
                            Pu,
                            Ru({}, t, { contentID: R.views.common.BackportContextMenu('resId') }),
                            e,
                        );
                    },
                    Iu = ({ slotLabelElements: u }) => {
                        const e = (0, o.useMemo)(() => (u) => ('' === u ? {} : JSON.parse(u)), []);
                        return r().createElement(
                            r().Fragment,
                            null,
                            u.map(({ value: u }, t) =>
                                r().createElement(
                                    'div',
                                    { key: u.content + t, style: e(u.styleJson) },
                                    r().createElement(yu, { text: u.content }),
                                ),
                            ),
                        );
                    },
                    Lu = {
                        base: 'NoPlayer_base_88',
                        base__disabled: 'NoPlayer_base__disabled_78',
                        central: 'NoPlayer_central_3b',
                        image: 'NoPlayer_image_50',
                        image__disabled: 'NoPlayer_image__disabled_69',
                        image__empty: 'NoPlayer_image__empty_a2',
                        image__spinner: 'NoPlayer_image__spinner_0a',
                        spinner: 'NoPlayer_spinner_9e',
                        footer: 'NoPlayer_footer_7d',
                    };
                let Hu;
                !(function (u) {
                    (u.spinner = 'spinner'), (u.disabled = 'disabled'), (u.empty = 'empty');
                })(Hu || (Hu = {}));
                const Vu = ({ text: u, type: e, slotLabelElements: t }) => {
                        const n = E()(Lu.base, e === Hu.disabled && Lu.base__disabled),
                            a = E()(Lu.image, Lu[`image__${e}`]);
                        return r().createElement(
                            'div',
                            { className: n },
                            r().createElement(
                                'div',
                                { className: Lu.central },
                                r().createElement('div', { className: a }),
                                u,
                            ),
                            r().createElement(
                                'div',
                                { className: Lu.footer },
                                t.length > 0 && r().createElement(Iu, { slotLabelElements: t }),
                            ),
                        );
                    },
                    Wu = ({ estimatedTime: u }) =>
                        r().createElement(
                            r().Fragment,
                            null,
                            r().createElement('div', null, R.strings.platoon.members.card.searching()),
                            r().createElement('span', null, '(', u, ')'),
                        ),
                    zu = ({ rating: u }) =>
                        r().createElement(
                            'div',
                            { className: 'WTRInfo_wtr_5e' },
                            r().createElement('div', { className: 'WTRInfo_wtrIcon_a9' }),
                            r().createElement('span', { className: 'WTRInfo_wtrValue_80' }, u),
                        ),
                    Uu = () => {
                        const u = R.strings.platoon.members.card.muted.caption(),
                            e = R.strings.platoon.members.card.muted.description();
                        return r().createElement(
                            O,
                            { header: u, body: e },
                            r().createElement('div', { className: 'MutedIcon_base_50' }),
                        );
                    };
                let $u;
                !(function (u) {
                    (u.default = 'default'), (u.x48 = 'x48'), (u.x80 = 'x80'), (u.x220 = 'x220');
                })($u || ($u = {}));
                const ju = ({ content: u, classMix: e }) => {
                        const t = (0, o.useRef)(null),
                            n = (0, o.useState)(!0),
                            a = n[0],
                            i = n[1];
                        return (
                            (0, o.useEffect)(() =>
                                ((u) => {
                                    let e,
                                        n = null;
                                    return (
                                        (n = requestAnimationFrame(() => {
                                            n = requestAnimationFrame(() => {
                                                (n = null),
                                                    (e = (() => {
                                                        const u = t.current;
                                                        u && u.offsetWidth >= u.scrollWidth && i(!1);
                                                    })());
                                            });
                                        })),
                                        () => {
                                            'function' == typeof e && e(), null !== n && cancelAnimationFrame(n);
                                        }
                                    );
                                })(),
                            ),
                            r().createElement(
                                O,
                                { isEnabled: a, body: u },
                                r().createElement('div', { ref: t, className: E()('TextOverflow_base_3b', e) }, u),
                            )
                        );
                    },
                    Gu = {
                        base: 'Badge_base_ac',
                        base__default: 'Badge_base__default_c9',
                        base__x48: 'Badge_base__x48_e4',
                    },
                    qu = { [$u.default]: 'c_24x24', [$u.x48]: 'c_48x48', [$u.x80]: 'c_80x80', [$u.x220]: 'c_220x220' },
                    Ku = ({ badgeID: u, size: e = $u.default, className: t }) => {
                        const n = R.images.gui.maps.icons.library.badges.$dyn(qu[e]);
                        return r().createElement('div', {
                            className: E()(Gu.base, Gu[`base__${e}`], t),
                            style: { backgroundImage: `url(${n.$dyn(`badge_${u}`)})` },
                        });
                    },
                    Yu = {
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
                    Xu = (0, o.memo)(({ tooltipHeaderName: u }) => {
                        const e = (0, o.useMemo)(() => {
                                return (
                                    (e = R.strings.tooltips.anonymizer.teamStats.header()),
                                    (t = { name: u }),
                                    e.replace(/(\{|%\()\w+(\}|\)s)/g, (u) => {
                                        const e = 0 === u.indexOf('%') ? 2 : 1;
                                        return String(t[u.slice(e, -e)]);
                                    })
                                );
                                var e, t;
                            }, [u]),
                            t = R.strings.tooltips.anonymizer.teamStats.body();
                        return r().createElement(
                            O,
                            { header: e, body: t },
                            r().createElement('div', { className: Yu.anonymizedIcon }),
                        );
                    });
                function Zu() {
                    return (
                        (Zu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        Zu.apply(this, arguments)
                    );
                }
                const Qu = { [$u.default]: 'c_64x24', [$u.x48]: 'c_68x28' },
                    Ju = { [$u.default]: 'c_48x48', [$u.x48]: 'c_48x48' },
                    ue = ({
                        userName: u,
                        clanAbbrev: e = '',
                        igrType: t = 0,
                        badge: n = { badgeID: '' },
                        suffixBadge: a = { badgeID: '' },
                        isInverted: i = !1,
                        isFakeNameVisible: s = !1,
                        isAnonymizerShown: l = !1,
                        hiddenUserName: c = '',
                        size: A = $u.default,
                        userNameClassName: F = '',
                        clanTagClassName: d = '',
                    }) => {
                        const D = R.images.gui.maps.icons.library.badges.strips.$dyn(Qu[A]),
                            _ = (0, o.useMemo)(
                                () => ({ backgroundImage: `url(${D.$dyn(`strip_${a.badgeID}`)})` }),
                                [a, D],
                            ),
                            m = R.images.gui.maps.icons.library.badges.$dyn(Ju[A]),
                            B = (0, o.useMemo)(
                                () => ({ backgroundImage: `url(${m.$dyn(`badge_${a.badgeID}`)})` }),
                                [a, m],
                            ),
                            C = e ? `[${e}]` : '',
                            p = E()(Yu.base, Yu[`base__${A}`], i && Yu.base__inverted),
                            b = E()(Yu.userName, F),
                            v = E()(Yu.clanTag, d),
                            g = u !== c,
                            w = s ? `${c}${C}` : c,
                            f = Boolean(n.badgeID) && r().createElement(Ku, Zu({ size: A }, n, { key: 'badge' })),
                            y = Date.now(),
                            h = [
                                f,
                                [
                                    r().createElement(
                                        'div',
                                        { className: b, key: 'userName' },
                                        r().createElement(ju, { content: u, key: y }),
                                    ),
                                    !s && Boolean(C) && r().createElement('div', { className: v, key: 'clanTag' }, C),
                                ],
                                0 !== t && r().createElement('div', { className: Yu.igrIcon, key: 'igrType' }),
                                Boolean(a.badgeID) &&
                                    r().createElement(
                                        'div',
                                        { className: Yu.suffixBadgeWrapper, key: 'suffixBadge' },
                                        r().createElement('div', { className: Yu.suffixBadgeStripe, style: _ }),
                                        r().createElement('div', { className: Yu.suffixBadge, style: B }),
                                    ),
                                l && g && r().createElement(Xu, { tooltipHeaderName: w, key: 'anonymizer' }),
                            ];
                        return r().createElement('div', { className: p }, i ? h.reverse() : h);
                    },
                    ee = { badgeID: '' },
                    te = ({ name: u, badgeID: e, clanTag: t, color: n }) => {
                        const a = (0, o.useMemo)(() => ({ badgeID: e || '' }), [e]),
                            i = (0, o.useMemo)(() => ({ color: n }), [n]);
                        return r().createElement(
                            'div',
                            { style: i },
                            r().createElement(ue, {
                                userName: u,
                                badge: a,
                                suffixBadge: ee,
                                clanAbbrev: t,
                                userNameClassName: 'PlayerName_userName_1e',
                            }),
                        );
                    },
                    ne = R.images.historical_battles.gui.maps.icons.vehicleTypes.flat,
                    ae = ({ type: u, name: e, isProfiledVehicle: t }) => {
                        const n = (0, o.useMemo)(() => {
                                const e = t ? ne.elite.c_24x24.$dyn(pu(u)) : ne.silver.c_24x24.$dyn(pu(u));
                                return _u(String(e));
                            }, [u, t]),
                            a = E()('VehicleDescription_base_6a', t && 'VehicleDescription_base__isProfiledVehicle_93');
                        return r().createElement(
                            'div',
                            { className: a },
                            r().createElement('div', { className: 'VehicleDescription_vehicleType_d1', style: n }),
                            e,
                        );
                    },
                    oe = (0, o.memo)(({ src: u, className: e, autoPlay: t = !1, loop: n = !1 }) => {
                        const a = (0, o.useRef)(null);
                        return (
                            (0, o.useEffect)(() => {
                                engine.on('clientMinimized', (u) => {
                                    a.current && (u ? a.current.pause() : a.current.play());
                                });
                            }, []),
                            r().createElement('video', { ref: a, className: e, src: u, autoPlay: t, loop: n })
                        );
                    });
                oe.displayName = 'Video';
                const re = ({ visible: u }) => {
                        const e = E()(
                            'VoiceAnimation_talkingAnimation_44',
                            u && 'VoiceAnimation_talkingAnimation__visible_45',
                        );
                        return r().createElement(oe, {
                            src: R.videos.platoon.VoiceChat(),
                            autoPlay: !0,
                            loop: !0,
                            className: e,
                        });
                    },
                    ie = 'Player_flagImage_a4',
                    se = ({ player: u, isInBattle: e, infoText: t }) => {
                        const n = E()('Player_readiness_08', u.isReady && !e && 'Player_readiness__isReady_02'),
                            a = R.images.gui.maps.icons.platoon.members_window,
                            i = u.isReady
                                ? (u.vehicle.nation,
                                  (s = u.vehicle.techName),
                                  R.images.gui.maps.icons.vehicle.c_420x307.$dyn(
                                      ((l = s), l.replace('-', '_')).toLowerCase(),
                                  ))
                                : '';
                        var s, l;
                        const c = u.isReady ? a.tall_slot.flags.$dyn(u.vehicle.nation) : '',
                            A = (0, o.useMemo)(
                                () =>
                                    ((u, e, t) => {
                                        const n = R.images.gui.maps.icons.platoon.members_window.tall_slot.cards;
                                        return u
                                            ? n.in_battle()
                                            : e
                                              ? t
                                                  ? n.ready_player()
                                                  : n.ready()
                                              : t
                                                ? n.not_ready_player()
                                                : n.not_ready();
                                    })(e, u.isReady, u.isCurrentUser),
                                [e, u.isReady, u.isCurrentUser],
                            ),
                            F = E()(
                                'Player_topping_a2',
                                u.isCommander ? 'Player_topping__isCommander_47' : 'Player_topping__isPlayer_64',
                            );
                        return r().createElement(
                            'div',
                            { className: 'Player_base_dc', style: _u(A) },
                            r().createElement(
                                'div',
                                { className: F },
                                r().createElement('div', { className: 'Player_toppingBack_7a' }),
                                u.isPrem && r().createElement('div', { className: 'Player_toppingPremiumIcon_a4' }),
                                r().createElement(re, { visible: u.voice.isSpeaking }),
                                r().createElement('div', { className: 'Player_toppingPlayerIcon_5a' }),
                            ),
                            !e &&
                                u.isReady &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement('div', { className: ie, style: _u(c) }),
                                    r().createElement('div', { className: 'Player_vehicleImage_58', style: _u(i) }),
                                ),
                            u.isIgnored &&
                                r().createElement('div', {
                                    className: ie,
                                    style: _u(R.images.gui.maps.icons.platoon.members_window.tall_slot.cards.ignored()),
                                }),
                            r().createElement(
                                'div',
                                { className: 'Player_mutedContainer_0a' },
                                u.voice.isMutedByUser && r().createElement(Uu, null),
                            ),
                            r().createElement(
                                'div',
                                { className: 'Player_name_cc' },
                                r().createElement(te, u.commonData),
                            ),
                            '' !== u.commonData.rating && r().createElement(zu, { rating: u.commonData.rating }),
                            r().createElement(
                                'div',
                                { className: 'Player_footer_d6' },
                                u.isReady && !e ? r().createElement(ae, u.vehicle) : t,
                            ),
                            r().createElement('div', { className: n }),
                        );
                    },
                    le = (u) => {
                        const e = (0, o.useMemo)(
                            () =>
                                u.isEmpty
                                    ? ((u) =>
                                          u.isDisabled
                                              ? {
                                                    text: R.strings.platoon.members.card.disabled(),
                                                    type: Hu.disabled,
                                                    slotLabelElements: u.slotLabelElements,
                                                }
                                              : u.isSearching
                                                ? {
                                                      text: r().createElement(Wu, { estimatedTime: u.estimatedTime }),
                                                      type: Hu.spinner,
                                                      slotLabelElements: u.slotLabelElements,
                                                  }
                                                : {
                                                      text: R.strings.platoon.members.card.empty(),
                                                      type: Hu.empty,
                                                      slotLabelElements: u.slotLabelElements,
                                                  })(u)
                                    : { isInBattle: u.isInBattle, player: u.player, infoText: u.infoText },
                            [u],
                        );
                        return (0, o.useMemo)(() => (u) => void 0 !== u.isInBattle, [])(e)
                            ? r().createElement(se, e)
                            : r().createElement(Vu, e);
                    };
                function Ee() {
                    return (
                        (Ee =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        Ee.apply(this, arguments)
                    );
                }
                const ce = ({ vehicle: u, image: e, isProfiledVehicle: t }) => {
                        const n = _u(e);
                        return r().createElement(
                            'div',
                            { className: 'Vehicle_base_1f' },
                            r().createElement(ae, Ee({ isProfiledVehicle: t }, u)),
                            r().createElement('div', { className: 'Vehicle_vehicle_3f', style: n }),
                        );
                    },
                    Ae = {
                        base: 'WideSlot_base_99',
                        mutedContainer: 'WideSlot_mutedContainer_e3',
                        icon: 'WideSlot_icon_29',
                        icon__spinner: 'WideSlot_icon__spinner_e2',
                        spinner: 'WideSlot_spinner_20',
                        glow: 'WideSlot_glow_39',
                        memberType: 'WideSlot_memberType_f0',
                        badge: 'WideSlot_badge_f2',
                        mainContent: 'WideSlot_mainContent_2e',
                        mainContent__isEmpty: 'WideSlot_mainContent__isEmpty_f2',
                        flag: 'WideSlot_flag_9a',
                        detailsContainer: 'WideSlot_detailsContainer_76',
                        vehicle: 'WideSlot_vehicle_32',
                        readiness: 'WideSlot_readiness_30',
                        starIcon: 'WideSlot_starIcon_da',
                        speciality: 'WideSlot_speciality_f3',
                        message: 'WideSlot_message_05',
                    },
                    Fe = (u) => {
                        const e = u.player,
                            t = u.isInBattle,
                            n = u.slotId,
                            a = u.isEmpty,
                            i = u.bannedMessage,
                            s = u.speciality,
                            l = u.vehicleImage,
                            c = u.specialityTooltipHead,
                            A = u.specialityTooltipBody,
                            F = u.isProfiledVehicle,
                            d = e.isReady,
                            D = e.isCommander,
                            _ = e.vehicle,
                            m = e.voice,
                            B = Boolean(i),
                            C = (0, o.useMemo)(
                                () =>
                                    (({ slot: u, player: e }) => {
                                        const t = u.isInBattle,
                                            n = u.isEmpty,
                                            a = u.isDisabled,
                                            o = e.isReady,
                                            r = e.isCurrentUser,
                                            i = R.images.gui.maps.icons.platoon.members_window.wide_slot.cards;
                                        return t
                                            ? i.in_battle_wide()
                                            : n
                                              ? i.empty_wide()
                                              : a
                                                ? i.disable_wide()
                                                : o
                                                  ? r
                                                      ? i.ready_player()
                                                      : i.ready()
                                                  : o
                                                    ? void 0
                                                    : r
                                                      ? i.not_ready_player()
                                                      : i.not_ready_wide();
                                    })({ slot: u, player: e }),
                                [e, u],
                            ),
                            p = (0, o.useMemo)(
                                () =>
                                    (({ slot: u, player: e }) => {
                                        const t = u.isSearching,
                                            n = u.isEmpty,
                                            a = u.isDisabled,
                                            o = e.isCommander,
                                            r = e.isPrem,
                                            i = R.images.gui.maps.icons.platoon.members_window.wide_slot;
                                        return t
                                            ? i.spinner()
                                            : a
                                              ? i.disabled()
                                              : n
                                                ? i.empty()
                                                : o
                                                  ? r
                                                      ? i.commander_prem()
                                                      : i.commander()
                                                  : o
                                                    ? void 0
                                                    : r
                                                      ? i.member_prem()
                                                      : i.member();
                                    })({ slot: u, player: e }),
                                [e, u],
                            ),
                            b = (0, o.useMemo)(
                                () =>
                                    ((u) =>
                                        u.isSearching
                                            ? `${R.strings.platoon.members.card.searching()} (${u.estimatedTime})`
                                            : u.isDisabled
                                              ? R.strings.platoon.members.card.disabledVertical()
                                              : u.isEmpty
                                                ? R.strings.platoon.members.card.empty()
                                                : r().createElement(te, u.player.commonData))(u),
                                [u],
                            ),
                            v = (0, o.useMemo)(() => ({ slotId: n }), [n]),
                            g = (0, o.useMemo)(
                                () => ({ star: r().createElement('div', { className: Ae.starIcon }) }),
                                [],
                            ),
                            w = E()(Ae.readiness, d && Ae.readiness__isReady),
                            f = E()(Ae.memberType, u.isDisabled && Ae.isDisabled),
                            y = E()(Ae.icon, u.isSearching && Ae.icon__spinner),
                            h = E()(Ae.mainContent, a && Ae.mainContent__isEmpty),
                            T = (0, o.useMemo)(() => {
                                if (!s) return {};
                                const u = F
                                    ? R.images.historical_battles.gui.maps.icons.roles.orange.c_16x16.$dyn(s)
                                    : R.images.historical_battles.gui.maps.icons.roles.c_16x16.$dyn(s);
                                return _u(String(u));
                            }, [F, s]);
                        return r().createElement(
                            N,
                            {
                                contentId: R.views.lobby.platoon.WTRTooltip('resId'),
                                isEnabled: '' !== e.commonData.rating,
                                args: v,
                            },
                            r().createElement(
                                'div',
                                { className: Ae.base, style: _u(C) },
                                !t &&
                                    _.nation &&
                                    r().createElement('div', {
                                        className: Ae.flag,
                                        style: _u(
                                            R.images.gui.maps.icons.platoon.members_window.wide_slot.flags.$dyn(
                                                _.nation,
                                            ),
                                        ),
                                    }),
                                r().createElement(
                                    'div',
                                    { className: Ae.mutedContainer },
                                    m.isMutedByUser && r().createElement(Uu, null),
                                ),
                                r().createElement(
                                    'div',
                                    { className: f },
                                    r().createElement(re, { visible: m.isSpeaking }),
                                    r().createElement('div', { style: _u(p), className: y }),
                                    D && d && r().createElement('div', { className: Ae.glow }),
                                ),
                                r().createElement('div', { className: h }, b),
                                B && r().createElement('div', { className: Ae.message }, i),
                                !a &&
                                    r().createElement(
                                        'div',
                                        { className: Ae.detailsContainer },
                                        !d || t
                                            ? r().createElement(yu, { text: u.infoText, binding: g })
                                            : r().createElement(
                                                  r().Fragment,
                                                  null,
                                                  s
                                                      ? r().createElement(
                                                            O,
                                                            { header: c, body: A },
                                                            r().createElement('div', {
                                                                className: Ae.speciality,
                                                                style: T,
                                                            }),
                                                        )
                                                      : r().createElement('div', { className: Ae.speciality }),
                                                  r().createElement(
                                                      'div',
                                                      { className: Ae.vehicle },
                                                      r().createElement(ce, {
                                                          vehicle: _,
                                                          image: l,
                                                          isProfiledVehicle: F,
                                                      }),
                                                  ),
                                              ),
                                    ),
                                d && !u.isInBattle && r().createElement('div', { className: w }),
                            ),
                        );
                    };
                function de() {
                    return (
                        (de =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        de.apply(this, arguments)
                    );
                }
                const De = ({ slot: u, isHorizontal: e, isEvent: t }) => {
                        const n = e ? le : Fe,
                            a = u.player.commonData.name,
                            i = (0, o.useMemo)(() => ({ userName: a }), [a]),
                            s = r().createElement(
                                'div',
                                null,
                                r().createElement(n, de({ key: u.slotId, isEvent: t }, u)),
                            );
                        return u.player.isCurrentUser || u.isEmpty
                            ? s
                            : r().createElement(Su, { args: i, key: u.slotId }, s);
                    },
                    _e = { base: 'Slots_base_a8', base__isHorizontal: 'Slots_base__isHorizontal_28' },
                    me = () => {
                        const u = G().isHorizontal,
                            e = G('model.slots'),
                            t = E()(_e.base, u ? _e.base__isHorizontal : _e.base__isVertical);
                        return r().createElement(
                            'div',
                            { className: t },
                            e.map((e) =>
                                r().createElement(De, { slot: e.value, isHorizontal: u, key: e.value.slotId }),
                            ),
                        );
                    },
                    Be = () => {
                        const u = G(),
                            e = u.canMinimize,
                            t = u.isCommander,
                            n = u.isEvent,
                            a = u.isHorizontal,
                            i = u.onClosed,
                            s = u.onMinimized,
                            l = u.onFocusChange,
                            c = u.windowTooltipHeader,
                            A = u.windowTooltipBody,
                            F = u.rawTitle,
                            d = n ? 'MembersWindowApp_base__isEvent_c0' : 'MembersWindowApp_base__isVertical_b1',
                            D = E()('MembersWindowApp_base_ce', a ? 'MembersWindowApp_base__isHorizontal_b4' : d),
                            _ = E()(
                                'MembersWindowApp_commanderControls_e9',
                                n && 'MembersWindowApp_commanderControls__event_20',
                            ),
                            m = (0, o.useCallback)(() => i(), [i]),
                            B = (0, o.useCallback)(() => s(), [s]),
                            C = (0, o.useCallback)(
                                (u) => {
                                    l({ isFocused: u });
                                },
                                [l],
                            );
                        return (
                            V(L.n.ESCAPE, () => m()),
                            r().createElement(
                                I,
                                {
                                    showMinimizeBtn: e,
                                    title: F,
                                    infoTooltipHeader: c,
                                    infoTooltipBody: A,
                                    onClose: m,
                                    onMinimize: B,
                                    onFocusChange: C,
                                },
                                r().createElement(
                                    'div',
                                    { className: D },
                                    r().createElement(
                                        'div',
                                        { className: 'MembersWindowApp_platoon_3d' },
                                        r().createElement(Mu, { isEvent: n }),
                                        r().createElement(su, { position: iu.top }),
                                        r().createElement(me, null),
                                        r().createElement('div', { className: _ }, t && r().createElement(du, null)),
                                        r().createElement(su, { position: iu.bottom }),
                                        r().createElement(Du, null),
                                    ),
                                    r().createElement(su, { position: iu.left }),
                                    r().createElement(tu, {
                                        id: R.views.historical_battles.lobby.subViews.Chat('resId'),
                                        mixClass: 'MembersWindowApp_chatContainer_be',
                                    }),
                                ),
                            )
                        );
                    };
                engine.whenReady.then(() => {
                    s().render(r().createElement(Be, null), document.getElementById('root')),
                        n(R.sounds.gui_platoon_2_created());
                });
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(u) {
        var e = __webpack_module_cache__[u];
        if (void 0 !== e) return e.exports;
        var t = (__webpack_module_cache__[u] = { exports: {} });
        return __webpack_modules__[u].call(t.exports, t, t.exports, __webpack_require__), t.exports;
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
            var u = { 838: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var n,
                        a,
                        [o, r, i] = t,
                        s = 0;
                    if (o.some((e) => 0 !== u[e])) {
                        for (n in r) __webpack_require__.o(r, n) && (__webpack_require__.m[n] = r[n]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (e && e(t); s < o.length; s++)
                        (a = o[s]), __webpack_require__.o(u, a) && u[a] && u[a][0](), (u[a] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(6850));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
