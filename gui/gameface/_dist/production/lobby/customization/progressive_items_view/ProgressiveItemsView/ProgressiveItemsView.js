(() => {
    'use strict';
    var __webpack_modules__ = {
            67: (u, e, t) => {
                t.d(e, { O: () => q });
                var n = {};
                t.r(n), t.d(n, { mouse: () => E, onResize: () => l });
                var r = {};
                t.r(r),
                    t.d(r, {
                        events: () => n,
                        getMouseGlobalPosition: () => F,
                        getSize: () => A,
                        graphicsQuality: () => m,
                    });
                var a = {};
                t.r(a), t.d(a, { getBgUrl: () => D, getTextureUrl: () => d });
                var o = {};
                function s(u) {
                    return (e) => (
                        engine.on(u, e),
                        () => {
                            engine.off(u, e);
                        }
                    );
                }
                function i(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                t.r(o),
                    t.d(o, {
                        addModelObserver: () => k,
                        addPreloadTexture: () => b,
                        children: () => a,
                        displayStatus: () => _,
                        displayStatusIs: () => U,
                        events: () => C,
                        extraSize: () => $,
                        forceTriggerMouseMove: () => V,
                        freezeTextureBeforeResize: () => M,
                        getBrowserTexturePath: () => S,
                        getDisplayStatus: () => j,
                        getScale: () => O,
                        getSize: () => x,
                        getViewGlobalPosition: () => T,
                        isEventHandled: () => W,
                        isFocused: () => H,
                        pxToRem: () => L,
                        remToPx: () => R,
                        resize: () => P,
                        sendEvent: () => w,
                        setAnimateWindow: () => I,
                        setEventHandled: () => z,
                        setInputPaddingsRem: () => y,
                        setSidePaddingsRem: () => N,
                        whenTutorialReady: () => G,
                    });
                const l = s('clientResized'),
                    c = { down: s('mousedown'), up: s('mouseup'), move: s('mousemove') };
                const E = (function () {
                    const u = { listeners: 0, enabled: !0, initialized: !1 };
                    function e() {
                        u.enabled && i(!1);
                    }
                    function t() {
                        u.enabled && i(!0);
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
                            : i(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (e, t) => (
                            (e[t] = (function (e) {
                                return (t) => {
                                    u.listeners += 1;
                                    let r = !0;
                                    const a = `mouse${e}`,
                                        o = c[e]((u) => t([u, 'outside']));
                                    function s(u) {
                                        t([u, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, s),
                                        n(),
                                        () => {
                                            r &&
                                                (o(),
                                                window.removeEventListener(a, s),
                                                (u.listeners -= 1),
                                                n(),
                                                (r = !1));
                                        }
                                    );
                                };
                            })(t)),
                            e
                        ),
                        {},
                    );
                    return Object.assign({}, r, {
                        disable() {
                            (u.enabled = !1), n();
                        },
                        enable() {
                            (u.enabled = !0), n();
                        },
                        enableOutside() {
                            u.enabled && i(!0);
                        },
                        disableOutside() {
                            u.enabled && i(!1);
                        },
                    });
                })();
                function A(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function F(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const m = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function d(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function D(u, e, t) {
                    return `url(${d(u, e, t)})`;
                }
                const _ = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    C = {
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
                    B = ['args'];
                const g = 2,
                    f = 16,
                    p = 32,
                    h = 64,
                    v = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const r = e.args,
                                a = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        n,
                                        r = {},
                                        a = Object.keys(u);
                                    for (n = 0; n < a.length; n++) (t = a[n]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                    return r;
                                })(e, B);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, a, {
                                          arguments:
                                              ((n = r),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, a));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: u });
                        var n;
                    },
                    w = {
                        close(u) {
                            v('popover' === u ? g : p);
                        },
                        minimize() {
                            v(h);
                        },
                        move(u) {
                            v(f, { isMouseEvent: !0, on: u });
                        },
                    };
                function b(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function y(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, 15);
                }
                function S(u, e, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, n);
                }
                function k(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function N(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, 15);
                }
                function x(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function P(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function T(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: R(e.x), y: R(e.y) };
                }
                function M() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function O() {
                    return viewEnv.getScale();
                }
                function L(u) {
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
                function z() {
                    return viewEnv.setEventHandled();
                }
                function W() {
                    return viewEnv.isEventHandled();
                }
                function V() {
                    viewEnv.forceTriggerMouseMove();
                }
                function j() {
                    return viewEnv.getShowingStatus();
                }
                const U = Object.keys(_).reduce((u, e) => ((u[e] = () => viewEnv.getShowingStatus() === _[e]), u), {}),
                    $ = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    G = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : C.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]),
                    q = { view: o, client: r };
            },
            521: (u, e, t) => {
                let n, r;
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
                    })(r || (r = {}));
            },
            358: (u, e, t) => {
                t.d(e, { Z: () => a });
                var n = t(67);
                class r {
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
                        return window.__dataTracker || (window.__dataTracker = new r()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(u, e, t = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = n.O.view.addModelObserver(u, t, r);
                        return (
                            a > 0
                                ? ((this._callbacks[a] = e),
                                  t > 0 && (this._views[t] ? this._views[t].push(a) : (this._views[t] = [a])))
                                : console.error("Can't add callback for model:", u),
                            a
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
                r.__instance = void 0;
                const a = r;
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
                t.d(e, { Sw: () => a.Z, B0: () => i, ry: () => C, Sy: () => g });
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
                const r = n;
                var a = t(358);
                const o = {
                        getNumberFormat: (u, e) => systemLocale.getNumberFormat(u, e),
                        getRealFormat: (u, e) => systemLocale.getRealFormat(u, e),
                        getTimeFormat: (u, e) => systemLocale.getTimeFormat(u, e),
                        getDateFormat: (u, e) => systemLocale.getDateFormat(u, e),
                        toUpperCase: (u) => systemLocale.toUpperCase(u),
                        toLowerCase: (u) => systemLocale.toUpperCase(u),
                    },
                    s = {
                        getNumberFormat: (u) => userLocale.getNumberFormat(u),
                        getTimeFormat: (u, e, t) => userLocale.getTimeFormat(u, e, void 0 === t || t),
                        getTimeString: (u, e, t) => userLocale.getTimeString(u, e, void 0 === t || t),
                    };
                let i;
                !(function (u) {
                    (u[(u.UNDEFINED = 0)] = 'UNDEFINED'),
                        (u[(u.TOOLTIP = 1)] = 'TOOLTIP'),
                        (u[(u.POP_OVER = 2)] = 'POP_OVER'),
                        (u[(u.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (u[(u.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (u[(u.MOVE = 16)] = 'MOVE'),
                        (u[(u.CLOSE = 32)] = 'CLOSE'),
                        (u[(u.MINIMIZE = 64)] = 'MINIMIZE');
                })(i || (i = {}));
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    A = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var F = t(521),
                    m = t(67);
                const d = ['args'];
                function D(u, e, t, n, r, a, o) {
                    try {
                        var s = u[a](o),
                            i = s.value;
                    } catch (u) {
                        return void t(u);
                    }
                    s.done ? e(i) : Promise.resolve(i).then(n, r);
                }
                const _ = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
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
                                    return new Promise(function (n, r) {
                                        var a = u.apply(e, t);
                                        function o(u) {
                                            D(a, n, r, o, s, 'next', u);
                                        }
                                        function s(u) {
                                            D(a, n, r, o, s, 'throw', u);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    B = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const r = e.args,
                                a = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        n,
                                        r = {},
                                        a = Object.keys(u);
                                    for (n = 0; n < a.length; n++) (t = a[n]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                    return r;
                                })(e, d);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, a, {
                                          arguments:
                                              ((n = r),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, a));
                        } else viewEnv.handleViewEvent({ __Type: t, type: u });
                        var n;
                    },
                    g = () => B(i.CLOSE),
                    f = (u, e) => {
                        u.keyCode === F.n.ESCAPE && e();
                    };
                var p = t(572);
                const h = r.instance,
                    v = {
                        DataTracker: a.Z,
                        ViewModel: p.Z,
                        ViewEventType: i,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: E,
                        DateFormatType: A,
                        makeGlobalBoundingBox: _,
                        sendMoveEvent: (u) => B(i.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: g,
                        sendClosePopOverEvent: () => B(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            B(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, n, r = R.invalid('resId'), a) => {
                            const o = m.O.view.getViewGlobalPosition(),
                                s = t.getBoundingClientRect(),
                                l = s.x,
                                c = s.y,
                                E = s.width,
                                A = s.height,
                                F = {
                                    x: m.O.view.pxToRem(l) + o.x,
                                    y: m.O.view.pxToRem(c) + o.y,
                                    width: m.O.view.pxToRem(E),
                                    height: m.O.view.pxToRem(A),
                                };
                            B(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: e,
                                bbox: _(F),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (u) => {
                            const e = (e) => f(e, u);
                            return (
                                window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e)
                            );
                        },
                        closeOnEsc: (u) => {
                            f(u, g);
                        },
                        handleViewEvent: B,
                        onBindingsReady: C,
                        onLayoutReady: () =>
                            new Promise((u) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        u();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(i.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(i.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(i.POP_OVER),
                        dumpViewModel: function u(e) {
                            const t = {};
                            if ('object' != typeof e) return e;
                            for (const n in e)
                                if (Object.prototype.hasOwnProperty.call(e, n)) {
                                    const r = Object.prototype.toString.call(e[n]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = e[n];
                                        t[n] = [];
                                        for (let e = 0; e < r.length; e++) t[n].push({ value: u(r[e].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = u(e[n]))
                                            : (t[n] = e[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: h,
                        SystemLocale: o,
                        UserLocale: s,
                    };
                window.ViewEnvHelper = v;
            },
            34: (u, e, t) => {
                var n = {};
                t.r(n),
                    t.d(n, {
                        Area: () => bu,
                        Bar: () => hu,
                        DefaultScroll: () => wu,
                        Direction: () => su,
                        defaultSettings: () => iu,
                        useHorizontalScrollApi: () => cu,
                    });
                var r = {};
                t.r(r), t.d(r, { Area: () => Uu, Bar: () => Wu, Default: () => ju, useVerticalScrollApi: () => yu });
                var a = t(67),
                    o = t(179),
                    s = t.n(o),
                    i = t(493),
                    l = t.n(i);
                const c = (u, e, t) =>
                        e.extraLargeHeight || e.largeHeight || e.mediumHeight || e.smallHeight || e.extraSmallHeight
                            ? (e.extraLargeHeight && t.extraLarge) ||
                              (e.largeHeight && t.large) ||
                              (e.mediumHeight && t.medium) ||
                              (e.smallHeight && t.small) ||
                              (e.extraSmallHeight && t.extraSmall)
                                ? u
                                : null
                            : u,
                    E = {
                        extraLarge: { weight: 4, width: 2560, height: 1440 },
                        large: { weight: 3, width: 1920, height: 1080 },
                        medium: { weight: 2, width: 1600, height: 900 },
                        small: { weight: 1, width: 1366, height: 768 },
                        extraSmall: { weight: 0, width: 1024, height: 768 },
                    };
                var A;
                function F(u, e, t) {
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
                        r = (function (u, e) {
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
                const m = a.O.client.getSize('rem'),
                    d = m.width,
                    D = m.height,
                    _ = Object.assign({ width: d, height: D }, F(d, D, E)),
                    C = (0, o.createContext)(_),
                    B = ['children'];
                const g = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(u);
                            for (n = 0; n < a.length; n++) (t = a[n]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                            return r;
                        })(u, B);
                    const n = (0, o.useContext)(C),
                        r = n.extraLarge,
                        a = n.large,
                        s = n.medium,
                        i = n.small,
                        l = n.extraSmall,
                        E = n.extraLargeWidth,
                        A = n.largeWidth,
                        F = n.mediumWidth,
                        m = n.smallWidth,
                        d = n.extraSmallWidth,
                        D = n.extraLargeHeight,
                        _ = n.largeHeight,
                        g = n.mediumHeight,
                        f = n.smallHeight,
                        p = n.extraSmallHeight,
                        h = { extraLarge: D, large: _, medium: g, small: f, extraSmall: p };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && r) return e;
                        if (t.large && a) return e;
                        if (t.medium && s) return e;
                        if (t.small && i) return e;
                        if (t.extraSmall && l) return e;
                    } else {
                        if (t.extraLargeWidth && E) return c(e, t, h);
                        if (t.largeWidth && A) return c(e, t, h);
                        if (t.mediumWidth && F) return c(e, t, h);
                        if (t.smallWidth && m) return c(e, t, h);
                        if (t.extraSmallWidth && d) return c(e, t, h);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && D) return e;
                            if (t.largeHeight && _) return e;
                            if (t.mediumHeight && g) return e;
                            if (t.smallHeight && f) return e;
                            if (t.extraSmallHeight && p) return e;
                        }
                    }
                    return null;
                };
                g.defaultProps = {
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
                (0, o.memo)(g);
                const f = (u) => {
                        const e = (0, o.useRef)(!1);
                        e.current || (u(), (e.current = !0));
                    },
                    p = (0, o.memo)(({ children: u }) => {
                        const e = (0, o.useContext)(C),
                            t = (0, o.useState)(e),
                            n = t[0],
                            r = t[1],
                            i = (0, o.useCallback)((u, e) => {
                                const t = a.O.view.pxToRem(u),
                                    n = a.O.view.pxToRem(e);
                                r(Object.assign({ width: t, height: n }, F(t, n, E)));
                            }, []);
                        f(() => {
                            engine.on('clientResized', i);
                        }),
                            (0, o.useEffect)(() => () => engine.off('clientResized', i), [i]);
                        const l = (0, o.useMemo)(() => Object.assign({}, n), [n]);
                        return s().createElement(C.Provider, { value: l }, u);
                    }),
                    h = 'App_base_aa',
                    v = 'App_contentWrapper_bf',
                    w = 'App_offset_1c';
                var b = t(364);
                const y = (u = 1) => {
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
                    S = (u, e) => u.split('.').reduce((u, e) => u && u[e], e);
                let k;
                !(function (u) {
                    (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
                })(k || (k = {}));
                const N = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    x = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    P = (u, e, t = k.left) => u.split(e).reduce(t === k.left ? N : x, []),
                    T = (() => {
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
                    M = ['zh_cn', 'zh_sg', 'zh_tw'],
                    O = (u, e = k.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        return M.includes(t)
                            ? T(u)
                            : ((u, e = k.left) => {
                                  let t = [];
                                  const n =
                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                      r = u.replace(/&nbsp;/g, ' ');
                                  return P(r, /( )/, e).forEach((u) => (t = t.concat(P(u, n, k.left)))), t;
                              })(u, e);
                    };
                let L;
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
                })(L || (L = {}));
                Date.now();
                const I = (u) => u && 'ArrayItem' === u.__proto__.constructor.name,
                    H = (u, e) => (u.length > 0 ? `${u}.${e}` : e),
                    z = (u) =>
                        ((u, e) =>
                            u.split('.').reduce((u, t) => {
                                const n = S(`${u}.${t}`, window);
                                return I(n) ? e(u, t, n) : `${u}.${t}`;
                            }))(u, (u, e) => `${u}.${e}.value`),
                    W = (u) => {
                        const e = ((u) => {
                                const e = y(),
                                    t = e.caller,
                                    n = e.resId,
                                    r = window.__feature && window.__feature !== t && t ? `subViews.${t}` : '';
                                return { modelPrefix: r, modelPath: H(r, u || ''), resId: n };
                            })(),
                            t = e.modelPrefix,
                            n = u.split('.');
                        if (n.length > 0) {
                            const u = [n[0]];
                            return (
                                n.reduce((e, n) => {
                                    const r = S(H(t, `${e}.${n}`), window);
                                    return I(r) ? (u.push(r.id), `${e}.${n}.value`) : (u.push(n), `${e}.${n}`);
                                }),
                                u.reduce((u, e) => u + '.' + e)
                            );
                        }
                        return '';
                    },
                    V = b.Sw.instance;
                let j;
                !(function (u) {
                    (u.None = 'None'), (u.Shallow = 'Shallow'), (u.Deep = 'Deep');
                })(j || (j = {}));
                const U = (u = 'model', e = j.Deep) => {
                    const t = (0, o.useState)(0),
                        n = (t[0], t[1]),
                        r = (0, o.useMemo)(() => y(), []),
                        a = r.caller,
                        s = r.resId,
                        i = (0, o.useMemo)(
                            () => (window.__feature && window.__feature !== a ? `subViews.${a}.${u}` : u),
                            [a, u],
                        ),
                        l = (0, o.useState)(() =>
                            ((u) => {
                                const e = S(u, window);
                                for (const u in e) 'function' == typeof e[u] && (e[u] = e[u].bind(e));
                                return I(e) ? e.value : e;
                            })(z(i)),
                        ),
                        c = l[0],
                        E = l[1],
                        A = (0, o.useRef)(-1);
                    return (
                        f(() => {
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
                                            ? (u === c && n((u) => u + 1), E(u))
                                            : E(Object.assign([], u));
                                    },
                                    r = W(u);
                                A.current = V.addCallback(r, t, s, e === j.Deep);
                            }
                        }),
                        (0, o.useEffect)(() => {
                            if (e !== j.None)
                                return () => {
                                    V.removeCallback(A.current, s);
                                };
                        }, [s, e]),
                        c
                    );
                };
                b.Sw.instance;
                function $(u) {
                    return u.displayName || u.name || 'Component';
                }
                function G() {
                    return (
                        (G =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        G.apply(this, arguments)
                    );
                }
                const q = b.Sw.instance;
                var Y = t(483),
                    K = t.n(Y);
                const X = (u) => {
                        let e,
                            t = null;
                        return (
                            (t = requestAnimationFrame(() => {
                                t = requestAnimationFrame(() => {
                                    (t = null), (e = u());
                                });
                            })),
                            () => {
                                'function' == typeof e && e(), null !== t && cancelAnimationFrame(t);
                            }
                        );
                    },
                    Z = (u, e, t) => (t < u ? u : t > e ? e : t),
                    Q = [];
                function J(u) {
                    const e = (0, o.useRef)(u);
                    return (
                        (0, o.useLayoutEffect)(() => {
                            e.current = u;
                        }),
                        (0, o.useCallback)((...u) => (0, e.current)(...u), Q)
                    );
                }
                function uu(u, e, t = []) {
                    const n = (0, o.useRef)(0),
                        r = (0, o.useCallback)(() => window.clearInterval(n.current), t || []);
                    (0, o.useEffect)(() => r, [r]);
                    const a = (null != t ? t : []).concat([e]);
                    return [
                        (0, o.useCallback)((t) => {
                            (n.current = window.setInterval(() => u(t, !0), e)), u(t, !1);
                        }, a),
                        r,
                    ];
                }
                function eu(u) {
                    engine.call('PlaySound', u);
                }
                const tu = {
                    playHighlight() {
                        eu('highlight');
                    },
                    playClick() {
                        eu('play');
                    },
                    playYes() {
                        eu('yes1');
                    },
                };
                function nu(u, e) {
                    var t = ('undefined' != typeof Symbol && u[Symbol.iterator]) || u['@@iterator'];
                    if (t) return (t = t.call(u)).next.bind(t);
                    if (
                        Array.isArray(u) ||
                        (t = (function (u, e) {
                            if (!u) return;
                            if ('string' == typeof u) return ru(u, e);
                            var t = Object.prototype.toString.call(u).slice(8, -1);
                            'Object' === t && u.constructor && (t = u.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(u);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return ru(u, e);
                        })(u)) ||
                        (e && u && 'number' == typeof u.length)
                    ) {
                        t && (u = t);
                        var n = 0;
                        return function () {
                            return n >= u.length ? { done: !0 } : { done: !1, value: u[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function ru(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, n = new Array(e); t < e; t++) n[t] = u[t];
                    return n;
                }
                function au(u, e, t) {
                    const n = (0, o.useMemo)(
                        () =>
                            (function (u, e, t, n) {
                                let r,
                                    a = !1,
                                    o = 0;
                                function s() {
                                    r && clearTimeout(r);
                                }
                                function i(...i) {
                                    const l = this,
                                        c = Date.now() - o;
                                    function E() {
                                        (o = Date.now()), t.apply(l, i);
                                    }
                                    a ||
                                        (n && !r && E(),
                                        s(),
                                        void 0 === n && c > u
                                            ? E()
                                            : !0 !== e &&
                                              (r = setTimeout(
                                                  n
                                                      ? function () {
                                                            r = void 0;
                                                        }
                                                      : E,
                                                  void 0 === n ? u - c : u,
                                              )));
                                }
                                return (
                                    'boolean' != typeof e && ((n = t), (t = e), (e = void 0)),
                                    (i.cancel = function () {
                                        s(), (a = !0);
                                    }),
                                    i
                                );
                            })(t, u),
                        e,
                    );
                    return (0, o.useEffect)(() => n.cancel, [n]), n;
                }
                var ou = t(30);
                let su;
                !(function (u) {
                    (u[(u.Next = -1)] = 'Next'), (u[(u.Prev = 1)] = 'Prev');
                })(su || (su = {}));
                const iu = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    lu = ({
                        getContainerSize: u,
                        getBounds: e,
                        setScrollPosition: t,
                        getDirection: n,
                        getWrapperSize: r,
                        triggerMouseMoveOnUpdate: s = !1,
                    }) => {
                        const i = (u, t) => {
                            const n = e(u),
                                r = n[0],
                                a = n[1];
                            return Z(r, a, t);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                E = void 0 === c ? iu : c,
                                A = (0, o.useRef)(null),
                                F = (0, o.useRef)(null),
                                m = (() => {
                                    const u = (0, o.useMemo)(() => ({}), []),
                                        e = (e) => (u[e] || (u[e] = new Map()), u[e]),
                                        t = (u, t) => {
                                            e(u).set(t, t);
                                        },
                                        n = (u, t) => {
                                            e(u).delete(t);
                                        },
                                        r = (u, ...t) => {
                                            for (var n, r = nu(e(u).values()); !(n = r()).done; ) (0, n.value)(...t);
                                        };
                                    return (0, o.useMemo)(() => ({ on: t, off: n, trigger: r }), []);
                                })(),
                                d = au(
                                    () => {
                                        a.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                D = (0, ou.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (u) => {
                                        const e = A.current;
                                        e && (t(e, u), m.trigger('change', u), s && d());
                                    },
                                    onRest: (u) => m.trigger('rest', u),
                                    onStart: (u) => m.trigger('start', u),
                                    onPause: (u) => m.trigger('pause', u),
                                })),
                                _ = D[0],
                                C = D[1],
                                B = (0, o.useCallback)(
                                    (u, e, t) => {
                                        var n;
                                        const r = _.scrollPosition.get(),
                                            a = (null != (n = _.scrollPosition.goal) ? n : 0) - r;
                                        return i(u, e * t + a + r);
                                    },
                                    [_.scrollPosition],
                                ),
                                g = (0, o.useCallback)(
                                    (u, { immediate: e = !1, reset: t = !0 } = {}) => {
                                        const n = A.current;
                                        n &&
                                            C.start({
                                                scrollPosition: i(n, u),
                                                immediate: e,
                                                reset: t,
                                                config: E.animationConfig,
                                                from: { scrollPosition: i(n, _.scrollPosition.get()) },
                                            });
                                    },
                                    [C, E.animationConfig, _.scrollPosition],
                                ),
                                f = (0, o.useCallback)(
                                    (u) => {
                                        const e = A.current,
                                            t = F.current;
                                        if (!e || !t) return;
                                        const n = ((u, e) => {
                                                switch (e.type) {
                                                    case 'proportional':
                                                        return r(u) / e.factor;
                                                    case 'fixed':
                                                        return e.value;
                                                }
                                            })(t, E.step),
                                            a = B(e, u, n);
                                        g(a);
                                    },
                                    [g, B, E.step],
                                ),
                                p = (0, o.useCallback)(
                                    (u) => {
                                        0 !== u.deltaY && f(n(u)),
                                            A.current && m.trigger('mouseWheel', u, _.scrollPosition, e(A.current));
                                    },
                                    [_.scrollPosition, f, m],
                                ),
                                h = ((u, e = []) => {
                                    const t = (0, o.useRef)(),
                                        n = (0, o.useCallback)((...e) => {
                                            t.current && t.current(), (t.current = u(...e));
                                        }, e);
                                    return (
                                        (0, o.useEffect)(
                                            () => () => {
                                                t.current && t.current();
                                            },
                                            [n],
                                        ),
                                        n
                                    );
                                })(
                                    () =>
                                        X(() => {
                                            const u = A.current;
                                            u &&
                                                (g(i(u, _.scrollPosition.goal), { immediate: !0 }),
                                                m.trigger('resizeHandled'));
                                        }),
                                    [g, _.scrollPosition.goal],
                                ),
                                v = J(() => {
                                    const u = A.current;
                                    if (!u) return;
                                    const e = i(u, _.scrollPosition.goal);
                                    e !== _.scrollPosition.goal && g(e, { immediate: !0 }),
                                        m.trigger('recalculateContent');
                                });
                            (0, o.useEffect)(
                                () => (
                                    window.addEventListener('resize', h),
                                    () => {
                                        window.removeEventListener('resize', h);
                                    }
                                ),
                                [h],
                            );
                            return (0, o.useMemo)(
                                () => ({
                                    getWrapperSize: () => (F.current ? r(F.current) : void 0),
                                    getContainerSize: () => (A.current ? u(A.current) : void 0),
                                    getBounds: () =>
                                        A.current
                                            ? e(A.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: E.step.clampedArrowStepTimeout,
                                    clampPosition: i,
                                    handleMouseWheel: p,
                                    applyScroll: g,
                                    applyStepTo: f,
                                    contentRef: A,
                                    wrapperRef: F,
                                    scrollPosition: C,
                                    animationScroll: _,
                                    recalculateContent: v,
                                    events: { on: m.on, off: m.off },
                                }),
                                [_.scrollPosition, g, f, m.off, m.on, v, p, C, E.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    cu = lu({
                        getBounds: (u) => {
                            var e, t;
                            return [
                                0,
                                u.offsetWidth -
                                    (null != (e = null == (t = u.parentElement) ? void 0 : t.offsetWidth) ? e : 0),
                            ];
                        },
                        getContainerSize: (u) => u.offsetWidth,
                        getWrapperSize: (u) => u.offsetWidth,
                        setScrollPosition: (u, e) => {
                            u.style.transform = `translateX(-${e.value.scrollPosition}px)`;
                        },
                        getDirection: (u) => (u.deltaY > 1 ? su.Next : su.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    Eu = 'HorizontalBar_base_49',
                    Au = 'HorizontalBar_base__nonActive_82',
                    Fu = 'HorizontalBar_leftButton_5f',
                    mu = 'HorizontalBar_rightButton_03',
                    du = 'HorizontalBar_track_0d',
                    Du = 'HorizontalBar_thumb_fd',
                    _u = 'HorizontalBar_rail_32',
                    Cu = 'disable',
                    Bu = { pending: !1, offset: 0 },
                    gu = (u) => {
                        var e;
                        return 0.9 * (null != (e = u.getWrapperSize()) ? e : 0);
                    },
                    fu = () => {},
                    pu = (u, e) => Math.max(20, u.offsetWidth * e),
                    hu = (0, o.memo)(({ api: u, classNames: e = {}, getStepByRailClick: t = gu, onDrag: n = fu }) => {
                        const r = (0, o.useRef)(null),
                            a = (0, o.useRef)(null),
                            i = (0, o.useRef)(null),
                            l = (0, o.useRef)(null),
                            c = (0, o.useRef)(null),
                            E = u.stepTimeout || 100,
                            A = (0, o.useState)(Bu),
                            F = A[0],
                            m = A[1],
                            d = (0, o.useCallback)(
                                (u) => {
                                    m(u),
                                        c.current && n({ type: u.pending ? 'dragStart' : 'dragEnd', thumb: c.current });
                                },
                                [n],
                            ),
                            D = () => {
                                const e = l.current,
                                    t = c.current,
                                    n = u.getWrapperSize(),
                                    r = u.getContainerSize();
                                if (!(n && e && t && r)) return;
                                const o = u.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, n / r),
                                    E = Z(0, 1, o / (r - n)),
                                    A = (e.offsetWidth - pu(e, s)) * E;
                                (t.style.transform = `translateX(${0 | A}px)`),
                                    ((u) => {
                                        if (a.current && i.current && l.current && c.current) {
                                            if (0 === u)
                                                return a.current.classList.add(Cu), void i.current.classList.remove(Cu);
                                            if (
                                                ((e = l.current),
                                                (t = c.current),
                                                u - (e.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return a.current.classList.remove(Cu), void i.current.classList.add(Cu);
                                            var e, t;
                                            a.current.classList.remove(Cu), i.current.classList.remove(Cu);
                                        }
                                    })(A);
                            },
                            _ = J(() => {
                                (() => {
                                    const e = c.current,
                                        t = l.current,
                                        n = u.getWrapperSize(),
                                        a = u.getContainerSize();
                                    if (!(a && e && n && t)) return;
                                    const o = Math.min(1, n / a);
                                    (e.style.width = `${pu(t, o)}px`),
                                        (e.style.display = 'flex'),
                                        r.current &&
                                            (1 === o ? r.current.classList.add(Au) : r.current.classList.remove(Au));
                                })(),
                                    D();
                            });
                        (0, o.useEffect)(() => X(_)),
                            (0, o.useEffect)(
                                () =>
                                    X(() => {
                                        const e = () => {
                                            D();
                                        };
                                        let t = fu;
                                        const n = () => {
                                            t(), (t = X(_));
                                        };
                                        return (
                                            u.events.on('recalculateContent', _),
                                            u.events.on('rest', e),
                                            u.events.on('change', e),
                                            u.events.on('resizeHandled', n),
                                            () => {
                                                t(),
                                                    u.events.off('recalculateContent', _),
                                                    u.events.off('rest', e),
                                                    u.events.off('change', e),
                                                    u.events.off('resizeHandled', n);
                                            }
                                        );
                                    }),
                                [u],
                            ),
                            (0, o.useEffect)(() => {
                                if (!F.pending) return;
                                const e = (e) => {
                                        var t;
                                        const r = u.contentRef.current;
                                        if (!r) return;
                                        const a = l.current,
                                            o = c.current;
                                        if (!r || !a || !o) return;
                                        const s = e.screenX - F.offset - a.getBoundingClientRect().x,
                                            i = (s / a.offsetWidth) * (null != (t = u.getContainerSize()) ? t : 0);
                                        u.scrollPosition.start({
                                            scrollPosition: u.clampPosition(r, i),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: u.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: o, thumbOffset: s, contentOffset: i });
                                    },
                                    t = () => {
                                        window.removeEventListener('mousemove', e), d(Bu);
                                    };
                                return (
                                    window.addEventListener('mousemove', e),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        window.removeEventListener('mousemove', e),
                                            window.removeEventListener('mouseup', t);
                                    }
                                );
                            }, [u, F.offset, F.pending, n, d]);
                        const C = uu((e) => u.applyStepTo(e), E, [u]),
                            B = C[0],
                            g = C[1];
                        (0, o.useEffect)(
                            () => (
                                document.addEventListener('mouseup', g, !0),
                                () => document.removeEventListener('mouseup', g, !0)
                            ),
                            [g],
                        );
                        const f = (u) => {
                            u.target.classList.contains(Cu) || eu('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: K()(Eu, e.base), ref: r, onWheel: u.handleMouseWheel },
                            s().createElement('div', {
                                className: K()(Fu, e.leftButton),
                                onMouseDown: (u) => {
                                    u.target.classList.contains(Cu) || 0 !== u.button || (eu('play'), B(su.Next));
                                },
                                onMouseUp: g,
                                ref: a,
                                onMouseEnter: f,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: K()(du, e.track),
                                    onMouseDown: (e) => {
                                        const n = c.current;
                                        if (n && 0 === e.button)
                                            if ((eu('play'), e.target === n))
                                                d({ pending: !0, offset: e.screenX - n.getBoundingClientRect().x });
                                            else {
                                                ((e) => {
                                                    const n = c.current,
                                                        r = u.contentRef.current;
                                                    if (!n || !r) return;
                                                    const a = t(u);
                                                    u.applyScroll(u.animationScroll.scrollPosition.get() + a * e);
                                                })(e.screenX > n.getBoundingClientRect().x ? su.Prev : su.Next);
                                            }
                                    },
                                    ref: l,
                                    onMouseEnter: f,
                                },
                                s().createElement('div', { ref: c, className: K()(Du, e.thumb) }),
                                s().createElement('div', { className: K()(_u, e.rail) }),
                            ),
                            s().createElement('div', {
                                className: K()(mu, e.rightButton),
                                onMouseDown: (u) => {
                                    u.target.classList.contains(Cu) || 0 !== u.button || (eu('play'), B(su.Prev));
                                },
                                onMouseUp: g,
                                ref: i,
                                onMouseEnter: f,
                            }),
                        );
                    }),
                    vu = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    wu = ({
                        children: u,
                        api: e,
                        className: t,
                        barClassNames: n,
                        areaClassName: r,
                        classNames: a,
                        scrollClassName: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const E = (0, o.useMemo)(() => {
                                const u = n || {};
                                return Object.assign({}, u, { base: K()(vu.base, u.base) });
                            }, [n]),
                            A = (0, o.useMemo)(() => Object.assign({}, e, { handleMouseWheel: () => {} }), [e]);
                        return s().createElement(
                            'div',
                            { className: K()(vu.defaultScroll, t), onWheel: e.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: K()(vu.defaultScrollArea, r) },
                                s().createElement(bu, { className: i, api: A, classNames: a }, u),
                            ),
                            s().createElement(hu, { getStepByRailClick: l, api: e, onDrag: c, classNames: E }),
                        );
                    },
                    bu = ({ api: u, className: e, classNames: t, children: n }) => (
                        (0, o.useEffect)(() => X(u.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: K()(vu.base, e) },
                            s().createElement(
                                'div',
                                {
                                    className: K()(vu.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: u.handleMouseWheel,
                                    ref: u.wrapperRef,
                                },
                                s().createElement(
                                    'div',
                                    { className: K()(vu.content, null == t ? void 0 : t.content), ref: u.contentRef },
                                    n,
                                ),
                            ),
                        )
                    );
                (bu.Bar = hu),
                    (bu.Default = wu),
                    (bu.SeniorityAwards = ({ api: u, className: e, classNames: t, children: n }) => (
                        (0, o.useEffect)(() => X(u.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: K()(vu.base, e) },
                            s().createElement(
                                'div',
                                { className: K()(vu.wrapper, null == t ? void 0 : t.wrapper), ref: u.wrapperRef },
                                s().createElement(
                                    'div',
                                    { className: K()(vu.content, null == t ? void 0 : t.content), ref: u.contentRef },
                                    n,
                                ),
                            ),
                        )
                    ));
                const yu = lu({
                        getBounds: (u) => [0, u.scrollHeight - u.offsetHeight],
                        getContainerSize: (u) => u.scrollHeight,
                        getWrapperSize: (u) => u.offsetHeight,
                        setScrollPosition: (u, e) => {
                            u.scrollTop = e.value.scrollPosition;
                        },
                        getDirection: (u) => (u.deltaY > 1 ? su.Next : su.Prev),
                    }),
                    Su = 'VerticalBar_base_f3',
                    ku = 'VerticalBar_base__nonActive_42',
                    Nu = 'VerticalBar_topButton_d7',
                    xu = 'VerticalBar_bottomButton_06',
                    Pu = 'VerticalBar_track_df',
                    Tu = 'VerticalBar_thumb_32',
                    Mu = 'VerticalBar_rail_43',
                    Ou = 'disable',
                    Lu = () => {},
                    Ru = { pending: !1, offset: 0 },
                    Iu = (u) => {
                        var e;
                        return 0.9 * (null != (e = u.getWrapperSize()) ? e : 0);
                    },
                    Hu = (u, e) => {
                        u.contentRef.current && e(u.contentRef.current);
                    },
                    zu = (u, e) => Math.max(20, u.offsetHeight * e),
                    Wu = (0, o.memo)(({ api: u, classNames: e = {}, getStepByRailClick: t = Iu, onDrag: n = Lu }) => {
                        const r = (0, o.useRef)(null),
                            a = (0, o.useRef)(null),
                            i = (0, o.useRef)(null),
                            l = (0, o.useRef)(null),
                            c = (0, o.useRef)(null),
                            E = u.stepTimeout || 100,
                            A = (0, o.useState)(Ru),
                            F = A[0],
                            m = A[1],
                            d = (0, o.useCallback)(
                                (u) => {
                                    m(u),
                                        c.current && n({ type: u.pending ? 'dragStart' : 'dragEnd', thumb: c.current });
                                },
                                [n],
                            ),
                            D = J(() => {
                                const e = c.current,
                                    t = l.current,
                                    n = u.getWrapperSize(),
                                    a = u.getContainerSize();
                                if (!(n && a && e && t)) return;
                                const o = Math.min(1, n / a);
                                return (
                                    (e.style.height = `${zu(t, o)}px`),
                                    e.classList.add(Tu),
                                    r.current &&
                                        (1 === o ? r.current.classList.add(ku) : r.current.classList.remove(ku)),
                                    o
                                );
                            }),
                            _ = J(() => {
                                const e = l.current,
                                    t = c.current,
                                    n = u.getWrapperSize(),
                                    r = u.getContainerSize();
                                if (!(n && e && t && r)) return;
                                const o = u.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, n / r),
                                    E = Z(0, 1, o / (r - n)),
                                    A = (e.offsetHeight - zu(e, s)) * E;
                                (t.style.transform = `translateY(${0 | A}px)`),
                                    ((u) => {
                                        if (a.current && i.current && l.current && c.current) {
                                            if (0 === u)
                                                return a.current.classList.add(Ou), void i.current.classList.remove(Ou);
                                            if (
                                                ((e = l.current),
                                                (t = c.current),
                                                u - (e.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return a.current.classList.remove(Ou), void i.current.classList.add(Ou);
                                            var e, t;
                                            a.current.classList.remove(Ou), i.current.classList.remove(Ou);
                                        }
                                    })(A);
                            }),
                            C = J(() => {
                                Hu(u, () => {
                                    D(), _();
                                });
                            });
                        (0, o.useEffect)(() => X(C)),
                            (0, o.useEffect)(() => {
                                const e = () => {
                                    Hu(u, () => {
                                        _();
                                    });
                                };
                                let t = Lu;
                                const n = () => {
                                    t(), (t = X(C));
                                };
                                return (
                                    u.events.on('recalculateContent', C),
                                    u.events.on('rest', e),
                                    u.events.on('change', e),
                                    u.events.on('resizeHandled', n),
                                    () => {
                                        t(),
                                            u.events.off('recalculateContent', C),
                                            u.events.off('rest', e),
                                            u.events.off('change', e),
                                            u.events.off('resizeHandled', n);
                                    }
                                );
                            }, [u]),
                            (0, o.useEffect)(() => {
                                if (!F.pending) return;
                                const e = (e) => {
                                        Hu(u, (t) => {
                                            const r = l.current,
                                                a = c.current,
                                                o = u.getContainerSize();
                                            if (!r || !a || !o) return;
                                            const s = e.screenY - F.offset - r.getBoundingClientRect().y,
                                                i = (s / r.offsetHeight) * o;
                                            u.scrollPosition.start({
                                                scrollPosition: u.clampPosition(t, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: a, thumbOffset: s, contentOffset: i });
                                        });
                                    },
                                    t = () => {
                                        window.removeEventListener('mousemove', e), d(Ru);
                                    };
                                return (
                                    window.addEventListener('mousemove', e),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        window.removeEventListener('mousemove', e),
                                            window.removeEventListener('mouseup', t);
                                    }
                                );
                            }, [u, F.offset, F.pending, n, d]);
                        const B = uu((e) => u.applyStepTo(e), E, [u]),
                            g = B[0],
                            f = B[1];
                        (0, o.useEffect)(
                            () => (
                                document.addEventListener('mouseup', f, !0),
                                () => document.removeEventListener('mouseup', f, !0)
                            ),
                            [f],
                        );
                        const p = (u) => {
                            u.target.classList.contains(Ou) || eu('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: K()(Su, e.base), ref: r, onWheel: u.handleMouseWheel },
                            s().createElement('div', {
                                className: K()(Nu, e.topButton),
                                onMouseDown: (u) => {
                                    u.target.classList.contains(Ou) || 0 !== u.button || (eu('play'), g(su.Next));
                                },
                                ref: a,
                                onMouseEnter: p,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: K()(Pu, e.track),
                                    onMouseDown: (e) => {
                                        const n = c.current;
                                        if (n && 0 === e.button)
                                            if ((eu('play'), e.target === n))
                                                d({ pending: !0, offset: e.screenY - n.getBoundingClientRect().y });
                                            else {
                                                ((e) => {
                                                    c.current &&
                                                        Hu(u, (n) => {
                                                            if (!n) return;
                                                            const r = t(u),
                                                                a = u.clampPosition(n, n.scrollTop + r * e);
                                                            u.applyScroll(a);
                                                        });
                                                })(e.screenY > n.getBoundingClientRect().y ? su.Prev : su.Next);
                                            }
                                    },
                                    ref: l,
                                    onMouseEnter: p,
                                },
                                s().createElement('div', { ref: c, className: e.thumb }),
                                s().createElement('div', { className: K()(Mu, e.rail) }),
                            ),
                            s().createElement('div', {
                                className: K()(xu, e.bottomButton),
                                onMouseDown: (u) => {
                                    u.target.classList.contains(Ou) || 0 !== u.button || (eu('play'), g(su.Prev));
                                },
                                onMouseUp: f,
                                ref: i,
                                onMouseEnter: p,
                            }),
                        );
                    }),
                    Vu = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    ju = ({
                        children: u,
                        api: e,
                        className: t,
                        barClassNames: n,
                        areaClassName: r,
                        scrollClassName: a,
                        scrollClassNames: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const E = (0, o.useMemo)(() => {
                                const u = n || {};
                                return Object.assign({}, u, { base: K()(Vu.base, u.base) });
                            }, [n]),
                            A = (0, o.useMemo)(() => Object.assign({}, e, { handleMouseWheel: () => {} }), [e]);
                        return s().createElement(
                            'div',
                            { className: K()(Vu.defaultScroll, t), onWheel: e.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: K()(Vu.area, r) },
                                s().createElement(Uu, { className: a, classNames: i, api: A }, u),
                            ),
                            s().createElement(Wu, { getStepByRailClick: l, api: e, onDrag: c, classNames: E }),
                        );
                    },
                    Uu = ({ className: u, classNames: e, children: t, api: n }) => (
                        (0, o.useEffect)(() => X(n.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: K()(Vu.base, u), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: K()(Vu.content, null == e ? void 0 : e.content), ref: n.contentRef },
                                t,
                            ),
                        )
                    );
                Uu.Default = ju;
                const $u = { Vertical: r, Horizontal: n },
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
                    qu = [
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
                function Yu() {
                    return (
                        (Yu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        Yu.apply(this, arguments)
                    );
                }
                class Ku extends s().PureComponent {
                    constructor(...u) {
                        super(...u),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (u) => (e) => {
                                u && u(e),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && eu(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (u) => (e) => {
                                u && u(e), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (u) => (e) => {
                                u && u(e),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && eu(this.props.soundClick);
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
                            r = u.side,
                            a = u.type,
                            o = u.classNames,
                            i = u.onMouseEnter,
                            l = u.onMouseLeave,
                            c = u.onMouseDown,
                            E = u.onMouseUp,
                            A =
                                (u.soundClick,
                                u.soundHover,
                                (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        n,
                                        r = {},
                                        a = Object.keys(u);
                                    for (n = 0; n < a.length; n++) (t = a[n]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                    return r;
                                })(u, qu)),
                            F = K()(Gu.base, Gu[`base__${a}`], Gu[`base__${r}`], null == o ? void 0 : o.base),
                            m = K()(Gu.icon, Gu[`icon__${a}`], Gu[`icon__${r}`], null == o ? void 0 : o.icon),
                            d = K()(Gu.glow, null == o ? void 0 : o.glow),
                            D = K()(Gu.caption, Gu[`caption__${a}`], null == o ? void 0 : o.caption),
                            _ = K()(Gu.goto, null == o ? void 0 : o.goto);
                        return s().createElement(
                            'div',
                            Yu(
                                {
                                    className: F,
                                    onMouseEnter: this._onMouseEnter(i),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(E),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                A,
                            ),
                            'info' !== a && s().createElement('div', { className: Gu.shine }),
                            s().createElement('div', { className: m }, s().createElement('div', { className: d })),
                            s().createElement('div', { className: D }, e),
                            n && s().createElement('div', { className: _ }, n),
                        );
                    }
                }
                Ku.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var Xu = t(521);
                const Zu = (u) => {
                    console.error(u.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function Qu(u = Xu.n.NONE, e = Zu, t = !1) {
                    (0, o.useEffect)(() => {
                        if (u !== Xu.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === u) {
                                if (a.O.view.isEventHandled()) return;
                                a.O.view.setEventHandled(), e(n), t && n.stopPropagation();
                            }
                        }
                    }, [e, u, t]);
                }
                function Ju(u, e) {
                    var t;
                    if (!(e >= u.length)) return Array.isArray(u) ? u[e] : null == (t = u[e]) ? void 0 : t.value;
                }
                const ue = Ju;
                const ee = 'ProgressionHeader_base_d3',
                    te = 'ProgressionHeader_base__large_26',
                    ne = 'ProgressionHeader_line_60',
                    re = 'ProgressionHeader_title_3f',
                    ae = ({ title: u, className: e }) => {
                        const t = (0, o.useContext)(C),
                            n = K()(ee, (t.large || t.extraLarge) && te, e);
                        return s().createElement(
                            'div',
                            { className: n },
                            s().createElement('div', { className: ne }),
                            s().createElement(
                                'span',
                                { className: re },
                                R.strings.common.common.open_quotes(),
                                u,
                                R.strings.common.common.close_quotes(),
                            ),
                            s().createElement('div', { className: ne }),
                        );
                    };
                function oe() {
                    return (
                        (oe =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        oe.apply(this, arguments)
                    );
                }
                function se(u, e, t) {
                    if (!e && !t) throw new Error('You should define at least one helper function');
                    return function (n) {
                        var r, a;
                        return (
                            (a = r =
                                class extends s().Component {
                                    constructor(n) {
                                        super(n);
                                        let r = {};
                                        const a = y().caller,
                                            o = window.__feature && window.__feature !== a ? `subViews.${a}.${u}` : u,
                                            s = S(o, window);
                                        if ((e && (r = Object.assign({}, r, e(s))), t)) {
                                            const u = t(s);
                                            for (const e in u)
                                                Object.prototype.hasOwnProperty.call(u, e) && (r[e] = u[e].bind(s));
                                        }
                                        this.state = r;
                                    }
                                    render() {
                                        return s().createElement(n, oe({}, this.props, this.state));
                                    }
                                }),
                            (r.displayName = `InjectProps(${$(n)})`),
                            a
                        );
                    };
                }
                const ie = [
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
                function le(u) {
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
                const ce = (u, e, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: b.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    Ee = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            n = u.args,
                            r = u.onMouseEnter,
                            a = u.onMouseLeave,
                            s = u.onMouseDown,
                            i = u.onClick,
                            l = u.ignoreShowDelay,
                            c = void 0 !== l && l,
                            E = u.ignoreMouseClick,
                            A = void 0 !== E && E,
                            F = u.decoratorId,
                            m = void 0 === F ? 0 : F,
                            d = u.isEnabled,
                            D = void 0 === d || d,
                            _ = u.targetId,
                            C = void 0 === _ ? 0 : _,
                            B = u.onShow,
                            g = u.onHide,
                            f = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(u);
                                for (n = 0; n < a.length; n++) (t = a[n]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                return r;
                            })(u, ie);
                        const p = (0, o.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            h = (0, o.useMemo)(() => C || y().resId, [C]),
                            v = (0, o.useCallback)(() => {
                                (p.current.isVisible && p.current.timeoutId) ||
                                    (ce(t, m, { isMouseEvent: !0, on: !0, arguments: le(n) }, h),
                                    B && B(),
                                    (p.current.isVisible = !0));
                            }, [t, m, n, h, B]),
                            w = (0, o.useCallback)(() => {
                                if (p.current.isVisible || p.current.timeoutId) {
                                    const u = p.current.timeoutId;
                                    u > 0 && (clearTimeout(u), (p.current.timeoutId = 0)),
                                        ce(t, m, { on: !1 }, h),
                                        p.current.isVisible && g && g(),
                                        (p.current.isVisible = !1);
                                }
                            }, [t, m, h, g]),
                            b = (0, o.useCallback)((u) => {
                                p.current.isVisible &&
                                    ((p.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (p.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(p.current.prevTarget) && w();
                                    }, 200)));
                            }, []);
                        (0, o.useEffect)(() => {
                            const u = p.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', b, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', b, { capture: !0 }),
                                        u && window.clearTimeout(u);
                                }
                            );
                        }, []),
                            (0, o.useEffect)(() => {
                                !1 === D && w();
                            }, [D, w]),
                            (0, o.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', w),
                                    () => {
                                        window.removeEventListener('mouseleave', w), w();
                                    }
                                ),
                                [w],
                            );
                        return D
                            ? (0, o.cloneElement)(
                                  e,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((S = e.props.onMouseEnter),
                                              (u) => {
                                                  (u.clientX === window.innerWidth &&
                                                      u.clientY === window.innerHeight) ||
                                                      ((p.current.timeoutId = window.setTimeout(v, c ? 100 : 400)),
                                                      r && r(u),
                                                      S && S(u));
                                              }),
                                          onMouseLeave: ((u) => (e) => {
                                              w(), null == a || a(e), null == u || u(e);
                                          })(e.props.onMouseLeave),
                                          onClick: ((u) => (e) => {
                                              !1 === A && w(), null == i || i(e), null == u || u(e);
                                          })(e.props.onClick),
                                          onMouseDown: ((u) => (e) => {
                                              !1 === A && w(), null == s || s(e), null == u || u(e);
                                          })(e.props.onMouseDown),
                                      },
                                      f,
                                  ),
                              )
                            : e;
                        var S;
                    },
                    Ae = ['children'];
                function Fe() {
                    return (
                        (Fe =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        Fe.apply(this, arguments)
                    );
                }
                const me = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(u);
                                for (n = 0; n < a.length; n++) (t = a[n]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                return r;
                            })(u, Ae);
                        return s().createElement(
                            Ee,
                            Fe(
                                {
                                    contentId:
                                        R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                            'resId',
                                        ),
                                    ignoreShowDelay: !0,
                                },
                                t,
                            ),
                            e,
                        );
                    },
                    de = 'Separator_base_44',
                    De = 'Separator_lock_98',
                    _e = 'Separator_lockImage_6c',
                    Ce = 'Separator_arrow_12',
                    Be = ({ unlocked: u, className: e }) =>
                        s().createElement(
                            'span',
                            { className: K()(de, e) },
                            s().createElement('span', { className: Ce }),
                            !u &&
                                s().createElement(
                                    'span',
                                    { className: De },
                                    s().createElement('img', {
                                        src: 'R.images.gui.maps.icons.customization.progeression_screen.lockx2',
                                        className: _e,
                                    }),
                                ),
                        ),
                    ge = 'HoverContent_base_5c',
                    fe = 'HoverContent_icon_99',
                    pe = 'HoverContent_text_e7',
                    he = ({ className: u }) => {
                        const e = (0, o.useMemo)(() => R.strings.vehicle_customization.progression.item.hover(), []);
                        return s().createElement(
                            'span',
                            { className: K()(ge, u) },
                            s().createElement('span', { className: fe }),
                            s().createElement('span', { className: pe }, e),
                        );
                    },
                    ve = 'ItemBlockDone_base_b5',
                    we = 'ItemBlockDone_base__large_69',
                    be = 'ItemBlockDone_contentContainer_04',
                    ye = 'ItemBlockDone_contentContainer__small_61',
                    Se = 'ItemBlockDone_contentContainer__large_b2',
                    ke = ({ levelText: u }) => {
                        const e = (0, o.useContext)(C),
                            t = e.small,
                            n = e.large || e.extraLarge,
                            r = K()(ve, n && we),
                            a = K()(be, t && ye, n && Se);
                        return s().createElement(
                            'div',
                            { className: r },
                            s().createElement('div', { className: a }, u),
                        );
                    },
                    Ne = {
                        base: 'ProgressBar_base_45',
                        base__medium: 'ProgressBar_base__medium_62',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__medium: 'ProgressBar_background__medium_6e',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let xe, Pe;
                !(function (u) {
                    (u.Small = 'small'), (u.Medium = 'medium'), (u.Big = 'big'), (u.Default = 'big');
                })(xe || (xe = {})),
                    (function (u) {
                        (u[(u.Simple = 0)] = 'Simple'), (u[(u.Growing = 1)] = 'Growing');
                    })(Pe || (Pe = {}));
                const Te = ({ size: u = xe.Default }) =>
                        s().createElement('div', { className: K()(Ne.background, Ne[`background__${u}`]) }),
                    Me = {
                        base: 'ProgressBarBlink_base_24',
                        base__medium: 'ProgressBarBlink_base__medium_ec',
                        base__small: 'ProgressBarBlink_base__small_0f',
                    },
                    Oe = ({ size: u }) => {
                        const e = K()(Me.base, Me[`base__${u}`]);
                        return s().createElement('div', { className: e });
                    },
                    Le = {
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
                    Re = (0, o.memo)(
                        ({ size: u, lineRef: e, disabled: t, baseStyles: n, isComplete: r, withoutBounce: a }) => {
                            const o = K()(
                                    Le.base,
                                    Le[`base__${u}`],
                                    t && Le.base__disabled,
                                    r && Le.base__finished,
                                    a && Le.base__withoutBounce,
                                ),
                                i = !t && !r;
                            return s().createElement(
                                'div',
                                { className: o, style: n, ref: e },
                                s().createElement('div', { className: Le.pattern }),
                                s().createElement('div', { className: Le.gradient }),
                                i && s().createElement(Oe, { size: u }),
                            );
                        },
                    ),
                    Ie = ({ size: u, value: e, lineRef: t, disabled: n, onComplete: r }) => {
                        const a = (0, o.useMemo)(() => ({ width: `${e}%`, transitionProperty: 'none' }), [e]),
                            i = 100 === e;
                        return (
                            (0, o.useEffect)(() => {
                                i && r && r();
                            }, [i, r]),
                            s().createElement(Re, { size: u, disabled: n, baseStyles: a, isComplete: i, lineRef: t })
                        );
                    },
                    He = (u, e) => {
                        let t;
                        const n = setTimeout(() => {
                            t = u();
                        }, e);
                        return () => {
                            'function' == typeof t && t(), clearTimeout(n);
                        };
                    };
                let ze, We;
                !(function (u) {
                    (u.Idle = 'Idle'), (u.Grow = 'Grow'), (u.Shrink = 'Shrink'), (u.End = 'End');
                })(ze || (ze = {})),
                    (function (u) {
                        (u.Idle = 'Idle'), (u.In = 'In'), (u.End = 'End');
                    })(We || (We = {}));
                const Ve = 'ProgressBarDeltaSimple_base_6c',
                    je = 'ProgressBarDeltaSimple_delta_99',
                    Ue = (0, o.memo)(
                        ({
                            transitionDuration: u,
                            transitionDelay: e,
                            freezed: t,
                            from: n,
                            size: r,
                            to: a,
                            onEndAnimation: i,
                            onChangeAnimationState: l,
                        }) => {
                            const c = a < n,
                                E = (0, o.useState)(We.Idle),
                                A = E[0],
                                F = E[1],
                                m = A === We.In,
                                d = A === We.End,
                                D = A === We.Idle,
                                _ = (0, o.useCallback)(
                                    (u) => {
                                        F(u), l && l(u);
                                    },
                                    [l],
                                );
                            (0, o.useEffect)(() => {
                                if (D && !t) {
                                    return He(() => {
                                        _(We.In);
                                    }, e);
                                }
                            }, [_, t, D, e]),
                                (0, o.useEffect)(() => {
                                    if (m) {
                                        return He(() => {
                                            i && i(), _(We.End);
                                        }, u + e);
                                    }
                                }, [_, m, i, e, u]);
                            const C = (0, o.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${u}ms`,
                                        transitionDelay: `${e}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, e, u],
                                ),
                                B = (0, o.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${u}ms`,
                                        transitionDelay: `${e}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, e, u],
                                ),
                                g = (0, o.useMemo)(
                                    () => ({ width: `${Math.abs(n - a)}%`, left: `${c ? a : n}%` }),
                                    [n, c, a],
                                );
                            return d
                                ? null
                                : s().createElement(
                                      'div',
                                      { className: Ve, style: g },
                                      s().createElement(
                                          'div',
                                          { style: D ? C : B, className: je },
                                          s().createElement(Oe, { size: r }),
                                      ),
                                  );
                        },
                    ),
                    $e = (0, o.memo)(
                        ({
                            to: u,
                            size: e,
                            from: t,
                            lineRef: n,
                            disabled: r,
                            isComplete: a,
                            animationSettings: i,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const E = (0, o.useMemo)(
                                () => ({
                                    width: `${u}%`,
                                    transitionDuration: `${i.line.duration}ms`,
                                    transitionDelay: `${i.line.delay}ms`,
                                }),
                                [i.line.delay, i.line.duration, u],
                            );
                            return s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(Re, {
                                    size: e,
                                    lineRef: n,
                                    disabled: r,
                                    isComplete: a,
                                    baseStyles: E,
                                }),
                                t >= 0 &&
                                    s().createElement(Ue, {
                                        transitionDuration: i.delta.duration,
                                        transitionDelay: i.delta.delay,
                                        freezed: i.freezed,
                                        from: t,
                                        size: e,
                                        to: u,
                                        onChangeAnimationState: l,
                                        onEndAnimation: c,
                                    }),
                            );
                        },
                    ),
                    Ge = 'ProgressBarDeltaGrow_base_7e',
                    qe = 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    Ye = 'ProgressBarDeltaGrow_glow_68',
                    Ke = (u) => (u ? { left: 0 } : { right: 0 }),
                    Xe = (u, e) => (u ? { right: 100 - e + '%' } : { left: `${e}%` }),
                    Ze = (u) => ({ transitionDuration: `${u}ms` }),
                    Qe = (0, o.memo)(
                        ({
                            transitionDuration: u,
                            transitionDelay: e,
                            freezed: t,
                            from: n,
                            size: r,
                            to: a,
                            onEndAnimation: i,
                            onChangeAnimationState: l,
                            className: c,
                        }) => {
                            const E = a < n,
                                A = (0, o.useState)(ze.Idle),
                                F = A[0],
                                m = A[1],
                                d = F === ze.End,
                                D = F === ze.Idle,
                                _ = F === ze.Grow,
                                C = F === ze.Shrink,
                                B = (0, o.useCallback)(
                                    (u) => {
                                        m(u), l && l(u);
                                    },
                                    [l],
                                ),
                                g = (0, o.useCallback)(
                                    (u, e) =>
                                        He(() => {
                                            B(u);
                                        }, e),
                                    [B],
                                );
                            (0, o.useEffect)(() => {
                                if (!t)
                                    return D
                                        ? g(ze.Grow, e)
                                        : _
                                          ? g(ze.Shrink, u)
                                          : C
                                            ? g(ze.End, u)
                                            : void (d && i && i());
                            }, [g, t, d, _, D, C, i, e, u]);
                            const f = (0, o.useMemo)(() => Object.assign({ width: '100%' }, Ze(u), Ke(E)), [E, u]),
                                p = (0, o.useMemo)(() => Object.assign({ width: '0%' }, Ze(u), Ke(E)), [E, u]),
                                h = (0, o.useMemo)(() => Object.assign({ width: '0%' }, Xe(E, n), Ze(u)), [n, E, u]),
                                v = (0, o.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(a - n)}%` }, Xe(E, n), Ze(u)),
                                    [n, E, a, u],
                                );
                            if (d) return null;
                            const w = K()(Ge, c, E && 0 === a && qe);
                            return s().createElement(
                                'div',
                                { style: D ? h : v, className: w },
                                s().createElement(
                                    'div',
                                    { style: C ? p : f, className: Ye },
                                    s().createElement(Oe, { size: r }),
                                ),
                            );
                        },
                    ),
                    Je = (0, o.memo)(
                        ({
                            to: u,
                            size: e,
                            from: t,
                            lineRef: n,
                            disabled: r,
                            isComplete: a,
                            animationSettings: i,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const E = u < t,
                                A = (0, o.useState)(!1),
                                F = A[0],
                                m = A[1],
                                d = (0, o.useCallback)(
                                    (u) => {
                                        u === ze.Shrink && m(!0), c && c(u);
                                    },
                                    [c],
                                ),
                                D = (0, o.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                _ = (0, o.useMemo)(
                                    () => ({ width: `${u}%`, transitionDuration: `${i.line.duration}ms` }),
                                    [i.line.duration, u],
                                );
                            return s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(Re, {
                                    size: e,
                                    lineRef: n,
                                    disabled: r,
                                    isComplete: a,
                                    withoutBounce: E && 0 === u,
                                    baseStyles: F ? _ : D,
                                }),
                                t >= 0 &&
                                    s().createElement(Qe, {
                                        transitionDuration: i.delta.duration,
                                        transitionDelay: i.delta.delay,
                                        onChangeAnimationState: d,
                                        freezed: i.freezed,
                                        onEndAnimation: l,
                                        from: t,
                                        size: e,
                                        to: u,
                                        className: i.delta.className,
                                    }),
                            );
                        },
                    ),
                    ut = ['onComplete', 'onEndAnimation'];
                function et() {
                    return (
                        (et =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        et.apply(this, arguments)
                    );
                }
                const tt = (0, o.memo)((u) => {
                        let e = u.onComplete,
                            t = u.onEndAnimation,
                            n = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(u);
                                for (n = 0; n < a.length; n++) (t = a[n]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                return r;
                            })(u, ut);
                        const r = (0, o.useState)(!1),
                            a = r[0],
                            i = r[1],
                            l = (0, o.useCallback)(() => {
                                const u = 100 === n.to;
                                u !== a && i(u), u && e && e(), t && t();
                            }, [a, e, t, n.to]);
                        switch (n.animationSettings.type) {
                            case Pe.Simple:
                                return s().createElement($e, et({}, n, { onEndAnimation: l, isComplete: a }));
                            case Pe.Growing:
                                return s().createElement(Je, et({}, n, { onEndAnimation: l, isComplete: a }));
                            default:
                                return null;
                        }
                    }),
                    nt = ['onEndAnimation'];
                function rt() {
                    return (
                        (rt =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        rt.apply(this, arguments)
                    );
                }
                const at = (0, o.memo)((u) => {
                    let e = u.onEndAnimation,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(u);
                            for (n = 0; n < a.length; n++) (t = a[n]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                            return r;
                        })(u, nt);
                    const n = (0, o.useRef)({}),
                        r = (0, o.useCallback)(() => {
                            (n.current.from = void 0), e && e();
                        }, [e]),
                        a = 'number' == typeof n.current.from ? n.current.from : t.from;
                    return (
                        (n.current.from = a),
                        s().createElement(tt, rt({}, t, { onEndAnimation: r, key: `${a}-${t.to}`, from: a }))
                    );
                });
                function ot() {
                    return (
                        (ot =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        ot.apply(this, arguments)
                    );
                }
                const st = (0, o.memo)(
                        ({
                            size: u,
                            value: e,
                            lineRef: t,
                            disabled: n,
                            deltaFrom: r,
                            animationSettings: a,
                            onEndAnimation: o,
                            onChangeAnimationState: i,
                            onComplete: l,
                        }) => {
                            if (r === e)
                                return s().createElement(Ie, {
                                    key: `${r}-${e}`,
                                    size: u,
                                    value: e,
                                    lineRef: t,
                                    disabled: n,
                                    onComplete: l,
                                });
                            const c = {
                                from: r,
                                to: e,
                                size: u,
                                lineRef: t,
                                disabled: n,
                                animationSettings: a,
                                onComplete: l,
                                onEndAnimation: o,
                                onChangeAnimationState: i,
                            };
                            return a.withStack
                                ? s().createElement(at, c)
                                : s().createElement(tt, ot({ key: `${r}-${e}` }, c));
                        },
                    ),
                    it = (u) => ({
                        '--progress-base': `url(${u.bgImageBase})`,
                        '--progress-line-base': u.line.bgColorBase,
                        '--progress-line-disabled': u.line.bgColorDisabled,
                        '--progress-line-finished': u.line.bgColorFinished,
                        '--progress-pattern-base': `url(${u.pattern.bgImageBase})`,
                        '--progress-pattern-disabled': `url(${u.pattern.bgImageDisabled})`,
                        '--progress-pattern-finished': `url(${u.pattern.bgImageFinished})`,
                        '--progress-glow': `url('${u.glow}')`,
                        '--progress-glow-small': `url('${u.glowSmall}')`,
                        '--progress-delta-color': u.delta.color,
                        '--progress-delta-shadow': u.delta.shadow,
                    }),
                    lt = (u, e, t) => {
                        if ('number' == typeof t) {
                            return (Z(0, e, t) / e) * 100;
                        }
                        return u;
                    },
                    ct = {
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
                    Et = {
                        freezed: !1,
                        withStack: !1,
                        type: Pe.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    At = (0, o.memo)(
                        ({
                            maxValue: u = 100,
                            theme: e = ct,
                            size: t = xe.Default,
                            animationSettings: n = Et,
                            disabled: r = !1,
                            withoutBackground: a = !1,
                            value: i,
                            deltaFrom: l,
                            lineRef: c,
                            onChangeAnimationState: E,
                            onEndAnimation: A,
                            onComplete: F,
                        }) => {
                            const m = ((u, e, t) =>
                                (0, o.useMemo)(() => {
                                    const n = (Z(0, e, u) / e) * 100;
                                    return { value: n, deltaFrom: lt(n, e, t) };
                                }, [t, e, u]))(i, u, l);
                            return s().createElement(
                                'div',
                                { className: K()(Ne.base, Ne[`base__${t}`]), style: it(e) },
                                !a && s().createElement(Te, { size: t }),
                                s().createElement(st, {
                                    size: t,
                                    lineRef: c,
                                    disabled: r,
                                    value: m.value,
                                    deltaFrom: m.deltaFrom,
                                    animationSettings: n,
                                    onEndAnimation: A,
                                    onChangeAnimationState: E,
                                    onComplete: F,
                                }),
                            );
                        },
                    ),
                    Ft = 'ItemBlockProgression_base_19',
                    mt = 'ItemBlockProgression_base__small_02',
                    dt = 'ItemBlockProgression_text_d9',
                    Dt = 'ItemBlockProgression_text__large_7e',
                    _t = 'ItemBlockProgression_text__score_9d',
                    Ct = 'ItemBlockProgression_count_b1',
                    Bt = 'ItemBlockProgression_description_b2',
                    gt = ({
                        unlockCondition: u,
                        progressionVal: e,
                        maxProgressionVal: t,
                        hideProgressBarAndString: n,
                        className: r,
                    }) => {
                        const a = (0, o.useMemo)(() => `/ ${t}`, [t]),
                            i = (0, o.useContext)(C),
                            l = K()(Ft, (i.small || i.medium || i.large || i.extraLarge) && mt, r),
                            c = K()(dt, (i.large || i.extraLarge) && Dt);
                        return s().createElement(
                            'div',
                            { className: l },
                            !n &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement(
                                        'span',
                                        { className: K()(Ct, c) },
                                        s().createElement('span', { className: _t }, e),
                                        a,
                                    ),
                                    s().createElement(At, { value: e, size: xe.Small, maxValue: t }),
                                ),
                            s().createElement('span', { className: K()(Bt, c) }, u),
                        );
                    },
                    ft = 'Icon_base_d5',
                    pt = 'Icon_base__placeholder_9c',
                    ht = 'Icon_imageTemp_1f',
                    vt = ({ src: u, alt: e, onClick: t, onLoad: n, className: r }) => {
                        const a = (0, o.useState)(!0),
                            i = a[0],
                            l = a[1],
                            c = (0, o.useState)(!1),
                            E = c[0],
                            A = c[1];
                        (0, o.useEffect)(() => {
                            A(!0);
                        }, []);
                        const F = (0, o.useCallback)(() => {
                                l(!1), n && n();
                            }, [n]),
                            m = s().createElement('img', {
                                className: K()(r, i && ht),
                                src: u,
                                onClick: t,
                                onLoad: F,
                                alt: e,
                            });
                        return E
                            ? i
                                ? s().createElement(
                                      'div',
                                      { className: K()(r, ft) },
                                      i && s().createElement('div', { className: pt }),
                                      m,
                                  )
                                : m
                            : null;
                    },
                    wt = 'Item_base_50',
                    bt = 'Item_base__first_a0',
                    yt = 'Item_base__firstSmall_e6',
                    St = 'Item_base__firstLarge_53',
                    kt = 'Item_content_bb',
                    Nt = 'Item_content__small_9a',
                    xt = 'Item_content__large_a3',
                    Pt = 'Item_image_f0',
                    Tt = 'Item_image__small_9c',
                    Mt = 'Item_image__large_38',
                    Ot = 'Item_image__locked_0f',
                    Lt = 'Item_image__progress_21',
                    Rt = 'Item_imageContainer_8f',
                    It = 'Item_imageContainer__small_6c',
                    Ht = 'Item_imageContainer__large_17',
                    zt = 'Item_hoverContent_51',
                    Wt = 'Item_itemProgression_d8',
                    Vt = 'Item_itemProgression__small_2e',
                    jt = 'Item_itemProgression__large_34',
                    Ut = 'Item_itemProgressionWithBar_f5',
                    $t = 'Item_itemProgressionWithBar__small_20',
                    Gt = 'Item_itemProgressionWithBar__large_ab',
                    qt = 'Item_itemSeparator_1f',
                    Yt = 'Item_itemSeparator__small_94',
                    Kt = 'Item_itemSeparator__large_ba';
                function Xt() {
                    return (
                        (Xt =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        Xt.apply(this, arguments)
                    );
                }
                const Zt = se('model', void 0, (u) => ({
                        onSelectItem: (e, t) => u.onSelectItem({ intCD: e, level: t }),
                    }))(
                        ({
                            itemId: u,
                            onSelectItem: e,
                            inProgress: t,
                            unlocked: n,
                            progressBlock: r,
                            icon: a,
                            level: i,
                            levelText: l,
                            isFirst: c,
                        }) => {
                            const E = (0, o.useContext)(C),
                                A = E.small,
                                F = E.medium || E.large || E.extraLarge,
                                m = (0, o.useMemo)(() => K()(wt, c && bt, c && A && yt, c && F && St), [c, A, F]),
                                d = (0, o.useMemo)(
                                    () => K()(Pt, (t || !n) && Ot, t && Lt, A && Tt, F && Mt),
                                    [t, n, A, F],
                                ),
                                D = K()(kt, A && Nt, F && xt),
                                _ = K()(Rt, A && It, F && Ht),
                                B = K()(qt, A && Yt, F && Kt);
                            let g;
                            g = r.hideProgressBarAndString ? K()(Wt, A && Vt, F && jt) : K()(Ut, A && $t, F && Gt);
                            const f = (0, o.useCallback)(() => {
                                    eu('cust_progress_exiting'), e(u, i);
                                }, [u, i, e]),
                                p = (0, o.useCallback)(() => {
                                    n && tu.playHighlight();
                                }, [n]),
                                h = (0, o.useMemo)(
                                    () => ({
                                        id: u,
                                        tooltip: 'techCustomizationItem',
                                        showInventoryBlock: !1,
                                        level: i,
                                    }),
                                    [u, i],
                                );
                            return s().createElement(
                                'div',
                                { className: m },
                                !c && s().createElement(Be, { unlocked: n || t, className: B }),
                                s().createElement(
                                    'div',
                                    { className: D },
                                    s().createElement(
                                        me,
                                        { args: h, isEnabled: -1 !== u },
                                        s().createElement(
                                            'div',
                                            { className: _, onMouseEnter: p },
                                            s().createElement(vt, { className: d, src: a || '', onClick: f }),
                                            n && s().createElement(he, { className: zt }),
                                        ),
                                    ),
                                    t && s().createElement(gt, Xt({}, r, { className: g })),
                                    n && s().createElement(ke, { levelText: l }),
                                ),
                            );
                        },
                    ),
                    Qt = 'List_base_37';
                function Jt() {
                    return (
                        (Jt =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        Jt.apply(this, arguments)
                    );
                }
                const un = ({ eachLevelInfo: u, itemId: e, scaleFactor: t }) =>
                        s().createElement(
                            'div',
                            { className: Qt },
                            s().createElement(
                                Zt,
                                Jt(
                                    { key: u.items[0].value.level, itemId: e, scaleFactor: t, isFirst: !0 },
                                    u.items[0].value,
                                ),
                            ),
                            s().createElement(
                                'div',
                                { className: Qt },
                                u.items.map(
                                    ({ value: u }, n) =>
                                        0 !== n &&
                                        s().createElement(Zt, Jt({ key: u.level, itemId: e, scaleFactor: t }, u)),
                                ),
                            ),
                        ),
                    en = 'ProgressionSequence_base_d9',
                    tn = 'ProgressionSequence_base__small_c3',
                    nn = 'ProgressionSequence_base__large_44',
                    rn = 'ProgressionSequence_header_30',
                    an = ['itemUserString'];
                const on = (u) => {
                        let e = u.itemUserString,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(u);
                                for (n = 0; n < a.length; n++) (t = a[n]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                return r;
                            })(u, an);
                        const n = (0, o.useContext)(C),
                            r = K()(en, n.small && tn, (n.medium || n.large || n.extraLarge) && nn);
                        return s().createElement(
                            'div',
                            { className: r },
                            s().createElement(ae, { title: e, className: rn }),
                            s().createElement(un, t),
                        );
                    },
                    sn = 'Grid_base_d1',
                    ln = 'Grid_content_ec',
                    cn = 'Grid_content__small_a4',
                    En = 'Grid_content__large_c3';
                function An() {
                    return (
                        (An =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        An.apply(this, arguments)
                    );
                }
                const Fn = ({ items: u }) => {
                        const e = (0, o.useContext)(C),
                            t = K()(ln, e.small && cn, (e.medium || e.large || e.extraLarge) && En);
                        return s().createElement(
                            'div',
                            { className: sn },
                            s().createElement(
                                'div',
                                { className: t },
                                u.map(({ value: u }) => s().createElement(on, An({ key: u.itemId }, u))),
                            ),
                        );
                    },
                    mn = 'Header_base_0d',
                    dn = 'Header_tankTypeIcon_d6',
                    Dn = 'Header_contentContainer_85',
                    _n = 'Header_spaceAtTheEnd_c0',
                    Cn = ({ name: u, level: e, extraText: t, type: n, className: r }) => {
                        const a = (0, o.useMemo)(() => (t ? t.replace('{tankLevel}', e) : `${e} {tankName}`), [t, e]),
                            i = { backgroundImage: `url(${n})` },
                            l = a
                                .split('{tankName}')
                                .map((e, t) =>
                                    1 === t
                                        ? [
                                              s().createElement('span', { key: 'icon', className: dn, style: i }),
                                              s().createElement('span', { key: 'name', className: _n }, u),
                                              s().createElement('span', { key: t }, e),
                                          ]
                                        : s().createElement('span', { key: t }, e),
                                );
                        return s().createElement(
                            'div',
                            { className: K()(mn, r) },
                            s().createElement('div', { className: Dn }, l),
                        );
                    };
                Cn.defaultProps = { extraText: '' };
                const Bn = se('model', (u) => ({ name: u.tankName, level: u.tankLevel, type: u.tankType }))(Cn),
                    gn = {
                        base: 'ProgressiveItemsViewContent_base_54',
                        fadeIn: 'ProgressiveItemsViewContent_fadeIn_8f',
                        overlay: 'ProgressiveItemsViewContent_overlay_2e',
                        overlay__lowSettings: 'ProgressiveItemsViewContent_overlay__lowSettings_b6',
                        closeBtn: 'ProgressiveItemsViewContent_closeBtn_c6',
                        infoBtn: 'ProgressiveItemsViewContent_infoBtn_f4',
                        header: 'ProgressiveItemsViewContent_header_b1',
                        grid: 'ProgressiveItemsViewContent_grid_96',
                        scroll: 'ProgressiveItemsViewContent_scroll_7d',
                        lip: 'ProgressiveItemsViewContent_lip_6e',
                        lip__show: 'ProgressiveItemsViewContent_lip__show_ea',
                    },
                    fn = R.strings.vehicle_customization.progression.about(),
                    pn = R.strings.menu.viewHeader.closeBtn.label(),
                    hn = R.strings.vehicle_customization.progression.tankHeader(),
                    vn = () => {
                        eu(R.sounds.cust_progress_exiting()), (0, b.Sy)();
                    },
                    wn = (function (u, e, t) {
                        if (!e && !t) throw new Error('You should define at least one helper function');
                        return function (n) {
                            var r, a;
                            return (
                                (a = r =
                                    class extends s().Component {
                                        constructor(n) {
                                            super(n), (this.modelCallbackId = void 0), (this.resId = void 0);
                                            let r = {};
                                            const a = y(),
                                                o = a.caller,
                                                s = a.resId,
                                                i =
                                                    window.__feature && window.__feature !== o
                                                        ? `subViews.${o}.${u}`
                                                        : u,
                                                l = S(i, window);
                                            if (
                                                (e &&
                                                    ((r = Object.assign({}, r, e(l))),
                                                    (this.modelCallbackId = q.addCallback(
                                                        u,
                                                        (u) => {
                                                            this.setState(e(u));
                                                        },
                                                        s,
                                                    )),
                                                    (this.resId = s)),
                                                t)
                                            ) {
                                                const u = t(l);
                                                for (const e in u)
                                                    Object.prototype.hasOwnProperty.call(u, e) && (r[e] = u[e].bind(l));
                                            }
                                            this.state = r;
                                        }
                                        componentWillUnmount() {
                                            this.modelCallbackId &&
                                                (q.removeCallback(this.modelCallbackId, this.resId),
                                                (this.modelCallbackId = void 0));
                                        }
                                        render() {
                                            return s().createElement(n, G({}, this.props, this.state));
                                        }
                                    }),
                                (r.displayName = `WithModel(${$(n)})`),
                                a
                            );
                        };
                    })('model', (u) => ({ progressiveItems: u.progressiveItems }))(
                        ({ progressiveItems: u, scrollPositionRef: e, onAboutClick: t }) => {
                            const n = U('model', j.None),
                                r = n.isRendererPipelineDeferred,
                                a = n.itemToScroll,
                                i = (0, o.useRef)(null),
                                l = (0, o.useRef)(null),
                                c = yu();
                            var E;
                            return (
                                (0, o.useEffect)(() => {
                                    eu(R.sounds.cust_progress_entering());
                                }, []),
                                (E = vn),
                                Qu(Xu.n.ESCAPE, E),
                                (0, o.useEffect)(
                                    () =>
                                        X(() => {
                                            const t = i.current,
                                                n = c.contentRef.current;
                                            if (!t || !n) return;
                                            const r = (function (u, e) {
                                                for (let t = 0; t < u.length; t++) if (e(ue(u, t), t, u)) return t;
                                            })(u.items, (u) => u.itemId === a);
                                            if (void 0 !== r) {
                                                const e = Math.round((t.offsetHeight / u.items.length) * r) - 30;
                                                c.applyScroll(e);
                                            } else e.current > 0 && c.applyScroll(e.current, { immediate: !0 });
                                        }),
                                    [a, u.items, c, e],
                                ),
                                (0, o.useEffect)(() => {
                                    const u = (u) => {
                                            e.current = u.value.scrollPosition;
                                        },
                                        t = (u) => {
                                            l.current &&
                                                (0 === u.value.scrollPosition
                                                    ? l.current.classList.remove(gn.lip__show)
                                                    : l.current.classList.add(gn.lip__show));
                                        };
                                    return (
                                        c.events.on('change', u),
                                        c.events.on('change', t),
                                        () => {
                                            c.events.off('change', u), c.events.off('change', t);
                                        }
                                    );
                                }, [c.events, e]),
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', {
                                        className: K()(gn.overlay, !r && gn.overlay__lowSettings),
                                    }),
                                    s().createElement(
                                        'div',
                                        { className: gn.base },
                                        s().createElement(
                                            'div',
                                            { className: gn.header },
                                            s().createElement(Bn, { extraText: hn }),
                                        ),
                                        s().createElement('div', { ref: l, className: K()(gn.lip, gn.lip__hidden) }),
                                        s().createElement(
                                            $u.Vertical.Default,
                                            { className: gn.scroll, api: c },
                                            s().createElement(
                                                'div',
                                                { ref: i, className: gn.grid },
                                                s().createElement(Fn, { items: u.items }),
                                            ),
                                        ),
                                        s().createElement(
                                            'div',
                                            { className: gn.infoBtn },
                                            s().createElement(Ku, { caption: fn, type: 'info', onClick: t }),
                                        ),
                                        s().createElement(
                                            'div',
                                            { className: gn.closeBtn },
                                            s().createElement(Ku, {
                                                caption: pn,
                                                type: 'close',
                                                side: 'right',
                                                onClick: vn,
                                            }),
                                        ),
                                    ),
                                )
                            );
                        },
                    ),
                    bn = ({ withDescription: u, onClick: e }) =>
                        s().createElement(Ku, {
                            caption: R.strings.vehicle_customization.customizationHeader.back(),
                            goto: u ? R.strings.vehicle_customization.customizationHeader.toDecales() : '',
                            onClick: e,
                        }),
                    yn = 'Tutorial_base_56',
                    Sn = 'Tutorial_overlay_5e',
                    kn = 'Tutorial_overlay__lowSettings_b4',
                    Nn = 'Tutorial_scroll_fc',
                    xn = 'Tutorial_goBackContainer_3d',
                    Pn = 'FormatText_base_d0',
                    Tn = ({ binding: u, text: e = '', classMix: t, alignment: n = k.left }) =>
                        null === e
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : s().createElement(
                                  o.Fragment,
                                  null,
                                  e.split('\n').map((e, r) =>
                                      s().createElement(
                                          'div',
                                          { className: K()(Pn, t), key: `${e}-${r}` },
                                          ((u, e, t) =>
                                              u
                                                  .split(/%\((.*?)\)(?:[sd])?/g)
                                                  .map((u) => (t && u in t ? t[u] : O(u, e))))(e, n, u).map((u, e) =>
                                              s().createElement(o.Fragment, { key: `${e}-${u}` }, u),
                                          ),
                                      ),
                                  ),
                              ),
                    Mn = 'PlayVideoButton_base_93',
                    On = 'PlayVideoButton_hoverPreload_b8',
                    Ln = ({ className: u, onClick: e }) => {
                        const t = K()(u, Mn);
                        return s().createElement(
                            s().Fragment,
                            null,
                            s().createElement('div', { className: On }),
                            s().createElement('div', { className: t, onClick: e }),
                        );
                    },
                    Rn = 'TutorialElement_base__small_19',
                    In = 'TutorialElement_base__medium_e2',
                    Hn = 'TutorialElement_icon__small_2e',
                    zn = 'TutorialElement_icon__medium_3d',
                    Wn = 'TutorialElement_elementTitle_15',
                    Vn = 'TutorialElement_elementTitle_container_66',
                    jn = 'TutorialElement_elementDescription_82',
                    Un = ({ elementType: u, isSmall: e = !1 }) => {
                        const t = e ? Rn : In,
                            n = e ? Hn : zn,
                            r = (0, o.useMemo)(
                                () => ({
                                    backgroundImage: `url(R.images.gui.maps.icons.customization.progression_tutorial.${u})`,
                                }),
                                [u],
                            );
                        return s().createElement(
                            'div',
                            { className: t },
                            s().createElement('div', { className: n, style: r }),
                            s().createElement(
                                'div',
                                { className: Vn },
                                s().createElement(
                                    'div',
                                    { className: Wn },
                                    R.strings.vehicle_customization.progressionTutorial.$dyn(u).title(),
                                ),
                            ),
                            s().createElement(Tn, {
                                classMix: jn,
                                text: R.strings.vehicle_customization.progressionTutorial.$dyn(u).description(),
                            }),
                        );
                    },
                    $n = 'TutorialContent_base_cf',
                    Gn = 'TutorialContent_main_03',
                    qn = 'TutorialContent_mainTitle_38',
                    Yn = 'TutorialContent_mainTitleContainer_ef',
                    Kn = 'TutorialContent_mainDescription_8b',
                    Xn = 'TutorialContent_mainDescriptionContainer_f5',
                    Zn = 'TutorialContent_videoBlock_66',
                    Qn = 'TutorialContent_videoContainer_a3',
                    Jn = 'TutorialContent_playBtn_63',
                    ur = 'TutorialContent_elementsBlock_6c',
                    er = 'TutorialContent_elementsTitle_31',
                    tr = 'TutorialContent_elementsTitleContainer_40',
                    nr = 'TutorialContent_elementsDescription_be',
                    rr = 'TutorialContent_elementsDescriptionContainer_36',
                    ar = 'TutorialContent_elementsContainer_68',
                    or = 'TutorialContent_elementContainer__small_a7',
                    sr = 'TutorialContent_elementContainer__medium_ad',
                    ir = () => {
                        const u = U('model.tutorial', j.None).showVideo,
                            e = (0, o.useCallback)(() => {
                                u();
                            }, [u]);
                        return s().createElement(
                            'div',
                            { className: $n },
                            s().createElement(
                                'div',
                                { className: Gn },
                                s().createElement(
                                    'div',
                                    { className: Yn },
                                    s().createElement(
                                        'div',
                                        { className: qn },
                                        R.strings.vehicle_customization.progressionTutorial.title(),
                                    ),
                                ),
                                s().createElement(
                                    'div',
                                    { className: Xn },
                                    s().createElement(
                                        'div',
                                        { className: Kn },
                                        R.strings.vehicle_customization.progressionTutorial.description(),
                                    ),
                                ),
                                s().createElement(
                                    'div',
                                    { className: Zn },
                                    s().createElement(
                                        'div',
                                        { className: Qn },
                                        s().createElement(Ln, { className: Jn, onClick: e }),
                                    ),
                                ),
                                s().createElement(
                                    'div',
                                    { className: ur },
                                    s().createElement(
                                        'div',
                                        { className: tr },
                                        s().createElement(
                                            'div',
                                            { className: er },
                                            R.strings.vehicle_customization.progressionTutorial.howto.title(),
                                        ),
                                    ),
                                    s().createElement(
                                        'div',
                                        { className: rr },
                                        s().createElement(Tn, {
                                            classMix: nr,
                                            text: R.strings.vehicle_customization.progressionTutorial.howto.description(),
                                        }),
                                    ),
                                    s().createElement(
                                        'div',
                                        { className: ar },
                                        s().createElement(
                                            'div',
                                            { className: sr },
                                            s().createElement(Un, { elementType: 'improvement' }),
                                        ),
                                        s().createElement(
                                            'div',
                                            { className: sr },
                                            s().createElement(Un, { elementType: 'interaction' }),
                                        ),
                                    ),
                                ),
                                s().createElement(
                                    'div',
                                    { className: ur },
                                    s().createElement(
                                        'div',
                                        { className: tr },
                                        s().createElement(
                                            'div',
                                            { className: er },
                                            R.strings.vehicle_customization.progressionTutorial.features.title(),
                                        ),
                                    ),
                                    s().createElement(
                                        'div',
                                        { className: ar },
                                        s().createElement(
                                            'div',
                                            { className: or },
                                            s().createElement(Un, { isSmall: !0, elementType: 'vehicles' }),
                                        ),
                                        s().createElement(
                                            'div',
                                            { className: or },
                                            s().createElement(Un, { isSmall: !0, elementType: 'quests' }),
                                        ),
                                        s().createElement(
                                            'div',
                                            { className: or },
                                            s().createElement(Un, { isSmall: !0, elementType: 'modes' }),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    },
                    lr = ({ onBackClick: u }) => {
                        const e = !(0, o.useContext)(C).extraSmall,
                            t = U('model', j.None).isRendererPipelineDeferred,
                            n = yu();
                        return (
                            Qu(Xu.n.ESCAPE, u),
                            s().createElement(
                                'div',
                                { className: yn },
                                s().createElement('div', { className: K()(Sn, !t && kn) }),
                                s().createElement(
                                    $u.Vertical.Default,
                                    { className: Nn, api: n },
                                    s().createElement(ir, null),
                                ),
                                s().createElement(
                                    'div',
                                    { className: xn },
                                    s().createElement(bn, { onClick: u, withDescription: e }),
                                ),
                            )
                        );
                    },
                    cr = ({ isTutorialShown: u, onBackClick: e, onAboutClick: t }) => {
                        const n = (0, o.useRef)(0);
                        return u
                            ? s().createElement(lr, { onBackClick: e })
                            : s().createElement(wn, { scrollPositionRef: n, onAboutClick: t });
                    },
                    Er = () => {
                        const u = (0, o.useState)(!1),
                            e = u[0],
                            t = u[1],
                            n = (0, o.useCallback)(() => t(!1), []),
                            r = (0, o.useCallback)(() => t(!0), []);
                        return s().createElement(
                            p,
                            null,
                            s().createElement(
                                'div',
                                { className: h },
                                s().createElement(
                                    'div',
                                    { className: v },
                                    s().createElement(cr, { onBackClick: n, onAboutClick: r, isTutorialShown: e }),
                                ),
                                s().createElement('div', { className: w }),
                            ),
                        );
                    };
                model.progressiveItems &&
                    model.progressiveItems.items.forEach(({ value: u }) => {
                        u.eachLevelInfo.items.forEach(({ value: u }) => {
                            u.icon && a.O.view.addPreloadTexture(u.icon);
                        });
                    }),
                    engine.whenReady.then(() => {
                        l().render(s().createElement(Er, null), document.getElementById('root'));
                    });
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
                var r = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [e, t, n] = deferred[i], a = !0, o = 0; o < e.length; o++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[o]))
                            ? e.splice(o--, 1)
                            : ((a = !1), n < r && (r = n));
                    if (a) {
                        deferred.splice(i--, 1);
                        var s = t();
                        void 0 !== s && (u = s);
                    }
                }
                return u;
            }
            n = n || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > n; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [e, t, n];
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
        (__webpack_require__.j = 987),
        (() => {
            var u = { 987: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var n,
                        r,
                        [a, o, s] = t,
                        i = 0;
                    if (a.some((e) => 0 !== u[e])) {
                        for (n in o) __webpack_require__.o(o, n) && (__webpack_require__.m[n] = o[n]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (e && e(t); i < a.length; i++)
                        (r = a[i]), __webpack_require__.o(u, r) && u[r] && u[r][0](), (u[r] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [858], () => __webpack_require__(34));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
