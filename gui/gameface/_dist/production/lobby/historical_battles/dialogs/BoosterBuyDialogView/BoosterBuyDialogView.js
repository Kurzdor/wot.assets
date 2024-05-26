(() => {
    'use strict';
    var __webpack_modules__ = {
            67: (u, e, t) => {
                t.d(e, { O: () => G });
                var n = {};
                t.r(n), t.d(n, { mouse: () => E, onResize: () => l });
                var o = {};
                t.r(o),
                    t.d(o, {
                        events: () => n,
                        getMouseGlobalPosition: () => F,
                        getSize: () => A,
                        graphicsQuality: () => d,
                    });
                var i = {};
                t.r(i), t.d(i, { getBgUrl: () => D, getTextureUrl: () => _ });
                var a = {};
                function r(u) {
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
                t.r(a),
                    t.d(a, {
                        addModelObserver: () => x,
                        addPreloadTexture: () => f,
                        children: () => i,
                        displayStatus: () => B,
                        displayStatusIs: () => Y,
                        events: () => m,
                        extraSize: () => K,
                        forceTriggerMouseMove: () => V,
                        freezeTextureBeforeResize: () => L,
                        getBrowserTexturePath: () => k,
                        getDisplayStatus: () => j,
                        getScale: () => P,
                        getSize: () => O,
                        getViewGlobalPosition: () => S,
                        isEventHandled: () => U,
                        isFocused: () => I,
                        pxToRem: () => R,
                        remToPx: () => N,
                        resize: () => M,
                        sendEvent: () => b,
                        setAnimateWindow: () => H,
                        setEventHandled: () => W,
                        setInputPaddingsRem: () => y,
                        setSidePaddingsRem: () => T,
                        whenTutorialReady: () => $,
                    });
                const l = r('clientResized'),
                    c = { down: r('mousedown'), up: r('mouseup'), move: r('mousemove') };
                const E = (function () {
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
                    const o = ['down', 'up', 'move'].reduce(
                        (e, t) => (
                            (e[t] = (function (e) {
                                return (t) => {
                                    u.listeners += 1;
                                    let o = !0;
                                    const i = `mouse${e}`,
                                        a = c[e]((u) => t([u, 'outside']));
                                    function r(u) {
                                        t([u, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, r),
                                        n(),
                                        () => {
                                            o &&
                                                (a(),
                                                window.removeEventListener(i, r),
                                                (u.listeners -= 1),
                                                n(),
                                                (o = !1));
                                        }
                                    );
                                };
                            })(t)),
                            e
                        ),
                        {},
                    );
                    return Object.assign({}, o, {
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
                function _(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function D(u, e, t) {
                    return `url(${_(u, e, t)})`;
                }
                const B = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    m = {
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
                    C = ['args'];
                const h = 2,
                    g = 16,
                    p = 32,
                    v = 64,
                    w = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const o = e.args,
                                i = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        n,
                                        o = {},
                                        i = Object.keys(u);
                                    for (n = 0; n < i.length; n++) (t = i[n]), e.indexOf(t) >= 0 || (o[t] = u[t]);
                                    return o;
                                })(e, C);
                            return void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, i, {
                                          arguments:
                                              ((n = o),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: u });
                        var n;
                    },
                    b = {
                        close(u) {
                            w('popover' === u ? h : p);
                        },
                        minimize() {
                            w(v);
                        },
                        move(u) {
                            w(g, { isMouseEvent: !0, on: u });
                        },
                    };
                function f(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function y(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, 15);
                }
                function k(u, e, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, n);
                }
                function x(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function T(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, 15);
                }
                function O(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function M(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function S(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: N(e.x), y: N(e.y) };
                }
                function L() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function P() {
                    return viewEnv.getScale();
                }
                function R(u) {
                    return viewEnv.pxToRem(u);
                }
                function N(u) {
                    return viewEnv.remToPx(u);
                }
                function H(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function I() {
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
                function j() {
                    return viewEnv.getShowingStatus();
                }
                const Y = Object.keys(B).reduce((u, e) => ((u[e] = () => viewEnv.getShowingStatus() === B[e]), u), {}),
                    K = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    $ = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : m.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]),
                    G = { view: a, client: o };
            },
            521: (u, e, t) => {
                let n, o;
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
                    })(o || (o = {}));
            },
            358: (u, e, t) => {
                t.d(e, { Z: () => i });
                var n = t(67);
                class o {
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
                        return window.__dataTracker || (window.__dataTracker = new o()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(u, e, t = 0, o = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const i = n.O.view.addModelObserver(u, t, o);
                        return (
                            i > 0
                                ? ((this._callbacks[i] = e),
                                  t > 0 && (this._views[t] ? this._views[t].push(i) : (this._views[t] = [i])))
                                : console.error("Can't add callback for model:", u),
                            i
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
                o.__instance = void 0;
                const i = o;
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
                t.d(e, { Sw: () => i.Z, B0: () => s, ry: () => m, Eu: () => C });
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
                const o = n;
                var i = t(358);
                const a = {
                        getNumberFormat: (u, e) => systemLocale.getNumberFormat(u, e),
                        getRealFormat: (u, e) => systemLocale.getRealFormat(u, e),
                        getTimeFormat: (u, e) => systemLocale.getTimeFormat(u, e),
                        getDateFormat: (u, e) => systemLocale.getDateFormat(u, e),
                        toUpperCase: (u) => systemLocale.toUpperCase(u),
                        toLowerCase: (u) => systemLocale.toUpperCase(u),
                    },
                    r = {
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
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    A = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var F = t(521),
                    d = t(67);
                const _ = ['args'];
                function D(u, e, t, n, o, i, a) {
                    try {
                        var r = u[i](a),
                            s = r.value;
                    } catch (u) {
                        return void t(u);
                    }
                    r.done ? e(s) : Promise.resolve(s).then(n, o);
                }
                const B = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
                    m = (function () {
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
                                    return new Promise(function (n, o) {
                                        var i = u.apply(e, t);
                                        function a(u) {
                                            D(i, n, o, a, r, 'next', u);
                                        }
                                        function r(u) {
                                            D(i, n, o, a, r, 'throw', u);
                                        }
                                        a(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    C = () =>
                        new Promise((u) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    u();
                                });
                            });
                        }),
                    h = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const o = e.args,
                                i = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        n,
                                        o = {},
                                        i = Object.keys(u);
                                    for (n = 0; n < i.length; n++) (t = i[n]), e.indexOf(t) >= 0 || (o[t] = u[t]);
                                    return o;
                                })(e, _);
                            void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, i, {
                                          arguments:
                                              ((n = o),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, i));
                        } else viewEnv.handleViewEvent({ __Type: t, type: u });
                        var n;
                    },
                    g = () => h(s.CLOSE),
                    p = (u, e) => {
                        u.keyCode === F.n.ESCAPE && e();
                    };
                var v = t(572);
                const w = o.instance,
                    b = {
                        DataTracker: i.Z,
                        ViewModel: v.Z,
                        ViewEventType: s,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: E,
                        DateFormatType: A,
                        makeGlobalBoundingBox: B,
                        sendMoveEvent: (u) => h(s.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: g,
                        sendClosePopOverEvent: () => h(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            h(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, n, o = R.invalid('resId'), i) => {
                            const a = d.O.view.getViewGlobalPosition(),
                                r = t.getBoundingClientRect(),
                                l = r.x,
                                c = r.y,
                                E = r.width,
                                A = r.height,
                                F = {
                                    x: d.O.view.pxToRem(l) + a.x,
                                    y: d.O.view.pxToRem(c) + a.y,
                                    width: d.O.view.pxToRem(E),
                                    height: d.O.view.pxToRem(A),
                                };
                            h(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: n || R.invalid('resId'),
                                targetID: o,
                                direction: e,
                                bbox: B(F),
                                on: !0,
                                args: i,
                            });
                        },
                        addEscapeListener: (u) => {
                            const e = (e) => p(e, u);
                            return (
                                window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e)
                            );
                        },
                        closeOnEsc: (u) => {
                            p(u, g);
                        },
                        handleViewEvent: h,
                        onBindingsReady: m,
                        onLayoutReady: C,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
                        dumpViewModel: function u(e) {
                            const t = {};
                            if ('object' != typeof e) return e;
                            for (const n in e)
                                if (Object.prototype.hasOwnProperty.call(e, n)) {
                                    const o = Object.prototype.toString.call(e[n]);
                                    if (o.startsWith('[object CoherentArrayProxy]')) {
                                        const o = e[n];
                                        t[n] = [];
                                        for (let e = 0; e < o.length; e++) t[n].push({ value: u(o[e].value) });
                                    } else
                                        o.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = u(e[n]))
                                            : (t[n] = e[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: w,
                        SystemLocale: a,
                        UserLocale: r,
                    };
                window.ViewEnvHelper = b;
            },
            371: (u, e, t) => {
                var n = t(179),
                    o = t.n(n),
                    i = t(493),
                    a = t.n(i),
                    r = t(483),
                    s = t.n(r);
                const l = (u, e, t) =>
                    e.extraLargeHeight || e.largeHeight || e.mediumHeight || e.smallHeight || e.extraSmallHeight
                        ? (e.extraLargeHeight && t.extraLarge) ||
                          (e.largeHeight && t.large) ||
                          (e.mediumHeight && t.medium) ||
                          (e.smallHeight && t.small) ||
                          (e.extraSmallHeight && t.extraSmall)
                            ? u
                            : null
                        : u;
                var c = t(67);
                const E = {
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
                        o = (function (u, e) {
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
                        i = Math.min(n, o);
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
                        extraLargeHeight: o === t.extraLarge.weight,
                        largeHeight: o === t.large.weight,
                        mediumHeight: o === t.medium.weight,
                        smallHeight: o === t.small.weight,
                        extraSmallHeight: o === t.extraSmall.weight,
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
                const d = c.O.client.getSize('rem'),
                    _ = d.width,
                    D = d.height,
                    B = Object.assign({ width: _, height: D }, F(_, D, E)),
                    m = (0, n.createContext)(B),
                    C = ['children'];
                const h = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                n,
                                o = {},
                                i = Object.keys(u);
                            for (n = 0; n < i.length; n++) (t = i[n]), e.indexOf(t) >= 0 || (o[t] = u[t]);
                            return o;
                        })(u, C);
                    const o = (0, n.useContext)(m),
                        i = o.extraLarge,
                        a = o.large,
                        r = o.medium,
                        s = o.small,
                        c = o.extraSmall,
                        E = o.extraLargeWidth,
                        A = o.largeWidth,
                        F = o.mediumWidth,
                        d = o.smallWidth,
                        _ = o.extraSmallWidth,
                        D = o.extraLargeHeight,
                        B = o.largeHeight,
                        h = o.mediumHeight,
                        g = o.smallHeight,
                        p = o.extraSmallHeight,
                        v = { extraLarge: D, large: B, medium: h, small: g, extraSmall: p };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && i) return e;
                        if (t.large && a) return e;
                        if (t.medium && r) return e;
                        if (t.small && s) return e;
                        if (t.extraSmall && c) return e;
                    } else {
                        if (t.extraLargeWidth && E) return l(e, t, v);
                        if (t.largeWidth && A) return l(e, t, v);
                        if (t.mediumWidth && F) return l(e, t, v);
                        if (t.smallWidth && d) return l(e, t, v);
                        if (t.extraSmallWidth && _) return l(e, t, v);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && D) return e;
                            if (t.largeHeight && B) return e;
                            if (t.mediumHeight && h) return e;
                            if (t.smallHeight && g) return e;
                            if (t.extraSmallHeight && p) return e;
                        }
                    }
                    return null;
                };
                h.defaultProps = {
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
                (0, n.memo)(h);
                const g = (u) => {
                        const e = (0, n.useRef)(!1);
                        e.current || (u(), (e.current = !0));
                    },
                    p = (0, n.memo)(({ children: u }) => {
                        const e = (0, n.useContext)(m),
                            t = (0, n.useState)(e),
                            i = t[0],
                            a = t[1],
                            r = (0, n.useCallback)((u, e) => {
                                const t = c.O.view.pxToRem(u),
                                    n = c.O.view.pxToRem(e);
                                a(Object.assign({ width: t, height: n }, F(t, n, E)));
                            }, []);
                        g(() => {
                            engine.on('clientResized', r);
                        }),
                            (0, n.useEffect)(() => () => engine.off('clientResized', r), [r]);
                        const s = (0, n.useMemo)(() => Object.assign({}, i), [i]);
                        return o().createElement(m.Provider, { value: s }, u);
                    });
                let v;
                !(function (u) {
                    (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
                })(v || (v = {}));
                (() => {
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
                })();
                let w;
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
                })(w || (w = {}));
                var b = t(364);
                Date.now();
                function f(u) {
                    engine.call('PlaySound', u);
                }
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
                    k = (u, e) => u.split('.').reduce((u, e) => u && u[e], e),
                    x = (u) => u && 'ArrayItem' === u.__proto__.constructor.name,
                    T = (u, e) => (u.length > 0 ? `${u}.${e}` : e),
                    O = (u) =>
                        ((u, e) =>
                            u.split('.').reduce((u, t) => {
                                const n = k(`${u}.${t}`, window);
                                return x(n) ? e(u, t, n) : `${u}.${t}`;
                            }))(u, (u, e) => `${u}.${e}.value`),
                    M = (u) => {
                        const e = ((u) => {
                                const e = y(),
                                    t = e.caller,
                                    n = e.resId,
                                    o = window.__feature && window.__feature !== t && t ? `subViews.${t}` : '';
                                return { modelPrefix: o, modelPath: T(o, u || ''), resId: n };
                            })(),
                            t = e.modelPrefix,
                            n = u.split('.');
                        if (n.length > 0) {
                            const u = [n[0]];
                            return (
                                n.reduce((e, n) => {
                                    const o = k(T(t, `${e}.${n}`), window);
                                    return x(o) ? (u.push(o.id), `${e}.${n}.value`) : (u.push(n), `${e}.${n}`);
                                }),
                                u.reduce((u, e) => u + '.' + e)
                            );
                        }
                        return '';
                    },
                    S = b.Sw.instance;
                let L;
                !(function (u) {
                    (u.None = 'None'), (u.Shallow = 'Shallow'), (u.Deep = 'Deep');
                })(L || (L = {}));
                const P = (u = 'model', e = L.Deep) => {
                    const t = (0, n.useState)(0),
                        o = (t[0], t[1]),
                        i = (0, n.useMemo)(() => y(), []),
                        a = i.caller,
                        r = i.resId,
                        s = (0, n.useMemo)(
                            () => (window.__feature && window.__feature !== a ? `subViews.${a}.${u}` : u),
                            [a, u],
                        ),
                        l = (0, n.useState)(() =>
                            ((u) => {
                                const e = k(u, window);
                                for (const u in e) 'function' == typeof e[u] && (e[u] = e[u].bind(e));
                                return x(e) ? e.value : e;
                            })(O(s)),
                        ),
                        c = l[0],
                        E = l[1],
                        A = (0, n.useRef)(-1);
                    return (
                        g(() => {
                            if (
                                ('boolean' == typeof e &&
                                    ((e = e ? L.Deep : L.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                e !== L.None)
                            ) {
                                const t = (u) => {
                                        ((u) => u && 'CoherentArrayProxy' === u.__proto__.constructor.name)(u) &&
                                        e === L.Deep
                                            ? (u === c && o((u) => u + 1), E(u))
                                            : E(Object.assign([], u));
                                    },
                                    n = M(u);
                                A.current = S.addCallback(n, t, r, e === L.Deep);
                            }
                        }),
                        (0, n.useEffect)(() => {
                            if (e !== L.None)
                                return () => {
                                    S.removeCallback(A.current, r);
                                };
                        }, [r, e]),
                        c
                    );
                };
                b.Sw.instance;
                var N = t(521);
                const H = (u) => {
                    console.error(u.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function I(u = N.n.NONE, e = H, t = !1) {
                    (0, n.useEffect)(() => {
                        if (u !== N.n.NONE)
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
                const W = /<link.*?>/g,
                    U = /\.\.\//g,
                    V = /<script.*?>/g,
                    j = 'default.css',
                    Y = (u) => {
                        const e = u.match(U);
                        return e && e.join('');
                    },
                    K = () => {
                        for (
                            var u = 0, e = Array.from(document.head.querySelectorAll('link[rel="stylesheet"]'));
                            u < e.length;
                            u++
                        ) {
                            const t = e[u];
                            if (!t.href.includes(j)) return t.href;
                        }
                        return '';
                    },
                    $ = (u) => {
                        const e = K(),
                            t = Y(e);
                        let n,
                            o = u;
                        for (; null !== (n = V.exec(u)); ) {
                            const u = n[0].match(/<script (defer|defer="defer") src="(.*?)">/);
                            if (u) {
                                const e = t + u[2].replace(U, '');
                                o = o.replace(u[2], e);
                            }
                        }
                        return o;
                    },
                    G = 'SubView_base_df',
                    q = 'subViews.onChanged',
                    z = (() => {
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
                    X = (0, n.memo)(({ id: u, fallback: e, onLoadCallback: t, mixClass: i }) => {
                        const a = (0, n.useState)(''),
                            r = a[0],
                            l = a[1],
                            c = (0, n.useMemo)(() => ({ __html: $(r) }), [r]),
                            E = (0, n.useMemo)(() => window.subViews.addChildChangedCallback(u), [u]),
                            A = (0, n.useState)(!1),
                            F = A[0],
                            d = A[1],
                            _ = (0, n.useCallback)(
                                (u) => {
                                    u.includes(E) &&
                                        (d(!0), engine.off(q, _), window.subViews.removeChildChangedCallback(E));
                                },
                                [E],
                            ),
                            D = (0, n.useCallback)((u) => {
                                z.add(
                                    () =>
                                        new Promise((e) => {
                                            l(u);
                                            const t = new MutationObserver(() => {
                                                    t.disconnect(), e();
                                                }),
                                                n = document.getElementById('root');
                                            n && t.observe(n, { childList: !0 });
                                        }),
                                );
                            }, []);
                        (0, n.useEffect)(() => {
                            if (window.subViews.ids().includes(u)) {
                                const e = window.subViews.get(u),
                                    t = e.path;
                                let n;
                                if ((n = t.split('/').pop()))
                                    return (
                                        (n = n.split('.')[0]),
                                        (window.subViews[n] = Object.assign({ id: u }, e)),
                                        engine.on(`subView:inject->${n}`, D),
                                        (({ path: u, name: e }) => {
                                            const t = new XMLHttpRequest();
                                            (t.onreadystatechange = () => {
                                                4 === t.readyState &&
                                                    (200 === t.status
                                                        ? (0, b.Eu)().then(() => {
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
                                                engine.off(`subView:inject->${n}`, D),
                                                console.info(`Sub view ${n} is destroyed: ${t}`);
                                        }
                                    );
                                console.error("subView: can't get View component name");
                            } else engine.on(q, _);
                        }, [_, D, u, F]),
                            (0, n.useEffect)(
                                () => () => {
                                    r &&
                                        ((u) => {
                                            const e = Y(K());
                                            let t;
                                            for (; null !== (t = W.exec(u)); ) {
                                                const u = t[0].match(/href="(.*?)"/);
                                                if (u) {
                                                    const t = e + u[1].replace(U, ''),
                                                        n = document.head.querySelector(`[href="${t}"]`);
                                                    n && document.head.removeChild(n);
                                                }
                                            }
                                        })(r);
                                },
                                [r],
                            );
                        const B = s()(G, i);
                        if (r) {
                            let e;
                            return (
                                (e = document.getElementById('root')) && e.setAttribute('id', 'bugSubView'),
                                ((u) => {
                                    let e;
                                    const t = K(),
                                        n = Y(t);
                                    for (; null !== (e = W.exec(u)); ) {
                                        const u = e[0].match(/href="(.*?)"/);
                                        if (u && !u[1].includes(j) && n) {
                                            const e = n + u[1].replace(U, ''),
                                                t = document.createElement('link');
                                            (t.href = e), (t.rel = 'stylesheet'), document.head.appendChild(t);
                                        }
                                    }
                                })(r),
                                t && t(u),
                                o().createElement('div', { className: B, dangerouslySetInnerHTML: c })
                            );
                        }
                        return e ? o().createElement('div', { className: B }, o().createElement(e, null)) : null;
                    }),
                    Z = {
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
                let Q, J;
                !(function (u) {
                    (u.main = 'main'),
                        (u.primary = 'primary'),
                        (u.primaryGreen = 'primaryGreen'),
                        (u.primaryRed = 'primaryRed'),
                        (u.secondary = 'secondary'),
                        (u.ghost = 'ghost');
                })(Q || (Q = {})),
                    (function (u) {
                        (u.extraSmall = 'extraSmall'), (u.small = 'small'), (u.medium = 'medium');
                    })(J || (J = {}));
                const uu = ({
                    children: u,
                    size: e,
                    isFocused: t,
                    type: i,
                    disabled: a,
                    mixClass: r,
                    soundHover: l,
                    soundClick: c,
                    onMouseEnter: E,
                    onMouseMove: A,
                    onMouseDown: F,
                    onMouseUp: d,
                    onMouseLeave: _,
                    onClick: D,
                }) => {
                    const B = (0, n.useRef)(null),
                        m = (0, n.useState)(t),
                        C = m[0],
                        h = m[1],
                        g = (0, n.useState)(!1),
                        p = g[0],
                        v = g[1],
                        w = (0, n.useState)(!1),
                        b = w[0],
                        y = w[1],
                        k = (0, n.useCallback)(() => {
                            a || (B.current && (B.current.focus(), h(!0)));
                        }, [a]),
                        x = (0, n.useCallback)(
                            (u) => {
                                C && null !== B.current && !B.current.contains(u.target) && h(!1);
                            },
                            [C],
                        ),
                        T = (0, n.useCallback)(
                            (u) => {
                                a || (D && D(u));
                            },
                            [a, D],
                        ),
                        O = (0, n.useCallback)(
                            (u) => {
                                a || (null !== l && f(l), E && E(u), y(!0));
                            },
                            [a, l, E],
                        ),
                        M = (0, n.useCallback)(
                            (u) => {
                                A && A(u);
                            },
                            [A],
                        ),
                        S = (0, n.useCallback)(
                            (u) => {
                                a || (d && d(u), v(!1));
                            },
                            [a, d],
                        ),
                        L = (0, n.useCallback)(
                            (u) => {
                                a || (null !== c && f(c), F && F(u), t && k(), v(!0));
                            },
                            [a, c, F, k, t],
                        ),
                        P = (0, n.useCallback)(
                            (u) => {
                                a || (_ && _(u), v(!1));
                            },
                            [a, _],
                        ),
                        N = s()(
                            Z.base,
                            Z[`base__${i}`],
                            {
                                [Z.base__disabled]: a,
                                [Z[`base__${e}`]]: e,
                                [Z.base__focus]: C,
                                [Z.base__highlightActive]: p,
                                [Z.base__firstHover]: b,
                            },
                            r,
                        ),
                        H = s()(Z.state, Z.state__default);
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
                            h(t);
                        }, [t]),
                        o().createElement(
                            'div',
                            {
                                ref: B,
                                className: N,
                                onMouseEnter: O,
                                onMouseMove: M,
                                onMouseUp: S,
                                onMouseDown: L,
                                onMouseLeave: P,
                                onClick: T,
                            },
                            i !== Q.ghost &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: Z.back }),
                                    o().createElement('span', { className: Z.texture }),
                                ),
                            o().createElement(
                                'span',
                                { className: H },
                                o().createElement('span', { className: Z.stateDisabled }),
                                o().createElement('span', { className: Z.stateHighlightHover }),
                                o().createElement('span', { className: Z.stateHighlightActive }),
                            ),
                            o().createElement(
                                'span',
                                { className: Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                u,
                            ),
                        )
                    );
                };
                uu.defaultProps = { type: Q.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const eu = (0, n.memo)(uu),
                    tu = [
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
                function nu(u) {
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
                const ou = (u, e, t = {}, n = 0) => {
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
                    iu = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            o = u.args,
                            i = u.onMouseEnter,
                            a = u.onMouseLeave,
                            r = u.onMouseDown,
                            s = u.onClick,
                            l = u.ignoreShowDelay,
                            c = void 0 !== l && l,
                            E = u.ignoreMouseClick,
                            A = void 0 !== E && E,
                            F = u.decoratorId,
                            d = void 0 === F ? 0 : F,
                            _ = u.isEnabled,
                            D = void 0 === _ || _,
                            B = u.targetId,
                            m = void 0 === B ? 0 : B,
                            C = u.onShow,
                            h = u.onHide,
                            g = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    o = {},
                                    i = Object.keys(u);
                                for (n = 0; n < i.length; n++) (t = i[n]), e.indexOf(t) >= 0 || (o[t] = u[t]);
                                return o;
                            })(u, tu);
                        const p = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            v = (0, n.useMemo)(() => m || y().resId, [m]),
                            w = (0, n.useCallback)(() => {
                                (p.current.isVisible && p.current.timeoutId) ||
                                    (ou(t, d, { isMouseEvent: !0, on: !0, arguments: nu(o) }, v),
                                    C && C(),
                                    (p.current.isVisible = !0));
                            }, [t, d, o, v, C]),
                            b = (0, n.useCallback)(() => {
                                if (p.current.isVisible || p.current.timeoutId) {
                                    const u = p.current.timeoutId;
                                    u > 0 && (clearTimeout(u), (p.current.timeoutId = 0)),
                                        ou(t, d, { on: !1 }, v),
                                        p.current.isVisible && h && h(),
                                        (p.current.isVisible = !1);
                                }
                            }, [t, d, v, h]),
                            f = (0, n.useCallback)((u) => {
                                p.current.isVisible &&
                                    ((p.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (p.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(p.current.prevTarget) && b();
                                    }, 200)));
                            }, []);
                        (0, n.useEffect)(() => {
                            const u = p.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', f, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', f, { capture: !0 }),
                                        u && window.clearTimeout(u);
                                }
                            );
                        }, []),
                            (0, n.useEffect)(() => {
                                !1 === D && b();
                            }, [D, b]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', b),
                                    () => {
                                        window.removeEventListener('mouseleave', b), b();
                                    }
                                ),
                                [b],
                            );
                        return D
                            ? (0, n.cloneElement)(
                                  e,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((k = e.props.onMouseEnter),
                                              (u) => {
                                                  (u.clientX === window.innerWidth &&
                                                      u.clientY === window.innerHeight) ||
                                                      ((p.current.timeoutId = window.setTimeout(w, c ? 100 : 400)),
                                                      i && i(u),
                                                      k && k(u));
                                              }),
                                          onMouseLeave: ((u) => (e) => {
                                              b(), null == a || a(e), null == u || u(e);
                                          })(e.props.onMouseLeave),
                                          onClick: ((u) => (e) => {
                                              !1 === A && b(), null == s || s(e), null == u || u(e);
                                          })(e.props.onClick),
                                          onMouseDown: ((u) => (e) => {
                                              !1 === A && b(), null == r || r(e), null == u || u(e);
                                          })(e.props.onMouseDown),
                                      },
                                      g,
                                  ),
                              )
                            : e;
                        var k;
                    },
                    au = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function ru() {
                    return (
                        (ru =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        ru.apply(this, arguments)
                    );
                }
                const su = R.views.common.tooltip_window.simple_tooltip_content,
                    lu = (u) => {
                        let e = u.children,
                            t = u.body,
                            i = u.header,
                            a = u.note,
                            r = u.alert,
                            s = u.args,
                            l = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    o = {},
                                    i = Object.keys(u);
                                for (n = 0; n < i.length; n++) (t = i[n]), e.indexOf(t) >= 0 || (o[t] = u[t]);
                                return o;
                            })(u, au);
                        const c = (0, n.useMemo)(() => {
                            const u = Object.assign({}, s, { body: t, header: i, note: a, alert: r });
                            for (const e in u) void 0 === u[e] && delete u[e];
                            return u;
                        }, [r, t, i, a, s]);
                        return o().createElement(
                            iu,
                            ru(
                                {
                                    contentId:
                                        ((E = null == s ? void 0 : s.hasHtmlContent),
                                        E ? su.SimpleTooltipHtmlContent('resId') : su.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            e,
                        );
                        var E;
                    },
                    cu = 'TextOverflow_base_3b',
                    Eu = ({ content: u, classMix: e }) => {
                        const t = (0, n.useRef)(null),
                            i = (0, n.useState)(!0),
                            a = i[0],
                            r = i[1];
                        return (
                            (0, n.useEffect)(() =>
                                ((u) => {
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
                                })(() => {
                                    const u = t.current;
                                    u && u.offsetWidth >= u.scrollWidth && r(!1);
                                }),
                            ),
                            o().createElement(
                                lu,
                                { isEnabled: a, body: u },
                                o().createElement('div', { ref: t, className: s()(cu, e) }, u),
                            )
                        );
                    };
                let Au;
                !(function (u) {
                    (u.backport = 'backport'), (u.unbound = 'unbound'), (u.normal = 'normal'), (u.absent = 'absent');
                })(Au || (Au = {}));
                const Fu = (u, e) => ({
                        isEnabled: u !== Au.absent,
                        args: e,
                        contentId: R.views.dialogs.common.DialogTemplateGenericTooltip('resId'),
                        decoratorId:
                            u === Au.unbound
                                ? R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId')
                                : void 0,
                        ignoreShowDelay: u === Au.backport,
                        ignoreMouseClick: !0,
                    }),
                    du = 'DialogTemplateButton_base_0b',
                    _u = 'DialogTemplateButton_label_83',
                    Du = 'DialogTemplateButton_label__noTooltip_14',
                    Bu = (0, n.memo)(
                        ({ onClick: u, isFocused: e, buttonID: t, isDisabled: i, label: a, tooltip: r, type: l }) => {
                            const c = (0, n.useCallback)(() => {
                                    u({ buttonID: t });
                                }, [u, t]),
                                E = (0, n.useCallback)(
                                    (u) => {
                                        u.altKey || !e || i || c();
                                    },
                                    [e, i, c],
                                );
                            I(N.n.ENTER, E);
                            const A = (0, n.useMemo)(() => Fu(r.type, { buttonID: t }), [r.type, t]),
                                F = s()(_u, r.type !== Au.absent && Du);
                            return o().createElement(
                                iu,
                                A,
                                o().createElement(
                                    'div',
                                    { className: du },
                                    o().createElement(
                                        eu,
                                        { size: J.medium, type: l, disabled: i, onClick: c, isFocused: e },
                                        o().createElement(Eu, { classMix: F, content: a || '' }),
                                    ),
                                ),
                            );
                        },
                    ),
                    mu = 'DialogTemplateButtonList_base_8e';
                function Cu() {
                    return (
                        (Cu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        Cu.apply(this, arguments)
                    );
                }
                const hu = (0, n.memo)(() => {
                        const u = P('model').onButtonClicked,
                            e = P('model.focus'),
                            t = e.focusedIndex,
                            i = e.onTabPressed,
                            a = P('model.buttons'),
                            r = (0, n.useCallback)(
                                (u) => {
                                    i({ shift: u.shiftKey });
                                },
                                [i],
                            );
                        return (
                            I(N.n.TAB, r),
                            o().createElement(
                                'div',
                                { className: mu },
                                a.map(({ value: e }, n) =>
                                    o().createElement(Bu, Cu({ key: e.buttonID, isFocused: n === t, onClick: u }, e)),
                                ),
                            )
                        );
                    }),
                    gu = 'DialogTemplateWrapper_base_f7',
                    pu = 'DialogTemplateWrapper_base__hidden_5f',
                    vu = 'DialogTemplateWrapper_subView_30';
                function wu() {
                    return (
                        (wu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        wu.apply(this, arguments)
                    );
                }
                const bu = (0, n.memo)(({ Template: u }) => {
                        const e = P('model', L.None),
                            t = e.onCloseClicked,
                            i = e.placeHolders,
                            a = e.background,
                            r = e.dimmerAlpha,
                            l = e.displayFlags;
                        (0, n.useEffect)(() => {
                            const u = document.getElementById('root');
                            u && u.setAttribute('id', 'stubDialogTemplate');
                        }, []);
                        const c = l.map(({ value: u }) => u),
                            E = (0, n.useRef)(i.map(({ value: u }) => u.resourceID)),
                            A = (0, n.useState)(0 !== E.current.length),
                            F = A[0],
                            d = A[1],
                            _ = (0, n.useCallback)(
                                (u = 'default') => {
                                    t({ reason: u });
                                },
                                [t],
                            ),
                            D = (0, n.useCallback)(() => {
                                _('escape');
                            }, [_]);
                        var B;
                        (B = D), I(N.n.ESCAPE, B);
                        const m = (0, n.useCallback)((u) => {
                                const e = E.current,
                                    t = e.indexOf(u);
                                t > -1 && (e.splice(t, 1), 0 === e.length && d(!1));
                            }, []),
                            C = (0, n.useMemo)(() => {
                                const u = { backgroundColor: `rgba(19, 18, 16, ${r})` };
                                return a && (u.backgroundImage = `url(${a})`), u;
                            }, [a, r]),
                            h = (0, n.useMemo)(
                                () =>
                                    i.reduce(
                                        (u, { value: e }) => (
                                            (u[e.placeHolder] = o().createElement(X, {
                                                key: e.placeHolder,
                                                id: e.resourceID,
                                                mixClass: vu,
                                                onLoadCallback: m,
                                            })),
                                            u
                                        ),
                                        {},
                                    ),
                                [m, i],
                            ),
                            g = s()(gu, F && pu);
                        return o().createElement(
                            p,
                            null,
                            o().createElement(
                                'div',
                                { className: g, style: C },
                                o().createElement(
                                    u,
                                    wu(
                                        {
                                            onClose: _,
                                            buttons: o().createElement(hu, null),
                                            displayFlags: c,
                                            isShown: !F,
                                        },
                                        h,
                                    ),
                                ),
                            ),
                        );
                    }),
                    fu = {
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
                    yu = [
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
                class xu extends o().PureComponent {
                    constructor(...u) {
                        super(...u),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (u) => (e) => {
                                u && u(e),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && f(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (u) => (e) => {
                                u && u(e), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (u) => (e) => {
                                u && u(e),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && f(this.props.soundClick);
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
                            i = u.side,
                            a = u.type,
                            r = u.classNames,
                            l = u.onMouseEnter,
                            c = u.onMouseLeave,
                            E = u.onMouseDown,
                            A = u.onMouseUp,
                            F =
                                (u.soundClick,
                                u.soundHover,
                                (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        n,
                                        o = {},
                                        i = Object.keys(u);
                                    for (n = 0; n < i.length; n++) (t = i[n]), e.indexOf(t) >= 0 || (o[t] = u[t]);
                                    return o;
                                })(u, yu)),
                            d = s()(fu.base, fu[`base__${a}`], fu[`base__${i}`], null == r ? void 0 : r.base),
                            _ = s()(fu.icon, fu[`icon__${a}`], fu[`icon__${i}`], null == r ? void 0 : r.icon),
                            D = s()(fu.glow, null == r ? void 0 : r.glow),
                            B = s()(fu.caption, fu[`caption__${a}`], null == r ? void 0 : r.caption),
                            m = s()(fu.goto, null == r ? void 0 : r.goto);
                        return o().createElement(
                            'div',
                            ku(
                                {
                                    className: d,
                                    onMouseEnter: this._onMouseEnter(l),
                                    onMouseLeave: this._onMouseLeave(c),
                                    onMouseDown: this._onMouseDown(E),
                                    onMouseUp: this._onMouseUp(A),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                F,
                            ),
                            'info' !== a && o().createElement('div', { className: fu.shine }),
                            o().createElement('div', { className: _ }, o().createElement('div', { className: D })),
                            o().createElement('div', { className: B }, e),
                            n && o().createElement('div', { className: m }, n),
                        );
                    }
                }
                let Tu;
                (xu.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' }),
                    (function (u) {
                        (u.responsiveHeader = 'responsiveHeader'),
                            (u.responsiveClosePosition = 'responsiveClosePosition'),
                            (u.disableResponsiveContentPosition = 'disableResponsiveContentPosition');
                    })(Tu || (Tu = {}));
                var Ou = t(30);
                const Mu = 'LayerItem_base_7d',
                    Su = ({ x: u, y: e, path: t, koeffX: i, koeffY: a }) => {
                        const r = (0, Ou.useSpring)(() => ({
                                xy: [0, 0],
                                config: { mass: 0.2, tension: 500, friction: 150 },
                            })),
                            s = r[0],
                            l = r[1],
                            c = (0, n.useCallback)((u, e) => `translate3d(${u * i}rem,${e * a}rem,0)`, [i, a]);
                        l.start({ xy: ((u, e) => [u, e])(u, e) });
                        const E = (0, n.useMemo)(
                            () => ({ transform: s.xy.to(c), backgroundImage: `url(${t})` }),
                            [t, s.xy, c],
                        );
                        return o().createElement(Ou.animated.div, { className: Mu, style: E });
                    },
                    Lu = 'HBParallax_base_23',
                    Pu = [
                        {
                            path: 'R.images.historical_battles.gui.maps.icons.backgrounds.parallax.sparkles_1',
                            koeffX: 0.02,
                            koeffY: 0.02,
                        },
                        {
                            path: 'R.images.historical_battles.gui.maps.icons.backgrounds.parallax.sparkles_2',
                            koeffX: 0.02,
                            koeffY: 0.02,
                        },
                        {
                            path: 'R.images.historical_battles.gui.maps.icons.backgrounds.parallax.sparkles_3',
                            koeffX: 0.03,
                            koeffY: 0.03,
                        },
                        {
                            path: 'R.images.historical_battles.gui.maps.icons.backgrounds.parallax.sparkles_4',
                            koeffX: 0.04,
                            koeffY: 0.04,
                        },
                        {
                            path: 'R.images.historical_battles.gui.maps.icons.backgrounds.parallax.sparkles_5',
                            koeffX: 0.05,
                            koeffY: 0.05,
                        },
                        {
                            path: 'R.images.historical_battles.gui.maps.icons.backgrounds.parallax.sparkles_6',
                            koeffX: 0.06,
                            koeffY: 0.06,
                        },
                        {
                            path: 'R.images.historical_battles.gui.maps.icons.backgrounds.parallax.sparkles_7',
                            koeffX: 0.04,
                            koeffY: 0.04,
                        },
                    ];
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
                const Nu = () => {
                        const u = (0, Ou.useSpring)({
                                from: { opacity: 0 },
                                to: { opacity: 1 },
                                delay: 500,
                                config: { duration: 500 },
                            }),
                            e = (0, n.useState)({ x: 0, y: 0 }),
                            t = e[0],
                            i = e[1],
                            a = (0, n.createRef)(),
                            r = (0, n.useCallback)(
                                (u) => {
                                    if (!a.current) return;
                                    const e = a.current.getBoundingClientRect(),
                                        t = e.width,
                                        n = e.height;
                                    return !(
                                        0 === u.clientX ||
                                        0 === u.clientY ||
                                        u.clientX >= t - 1 ||
                                        u.clientY >= n - 1
                                    );
                                },
                                [a],
                            );
                        return (
                            (0, n.useEffect)(() => {
                                const u = (u) => {
                                    if (!r(u)) return;
                                    const e = c.O.client.getSize('rem').width,
                                        t = c.O.client.getSize('rem').height / 2;
                                    i({ x: e / 2 - u.clientX, y: t - u.clientY });
                                };
                                return (
                                    document.addEventListener('mousemove', u),
                                    () => {
                                        document.removeEventListener('mousemove', u);
                                    }
                                );
                            }, [r]),
                            o().createElement(
                                Ou.animated.div,
                                { ref: a, className: Lu, style: u },
                                Pu.map((u, e) => o().createElement(Su, Ru({ key: e, x: t.x, y: t.y }, u))),
                            )
                        );
                    },
                    Hu = {
                        base: 'BoosterBuyDialogTemplate_base_c7',
                        topRight: 'BoosterBuyDialogTemplate_topRight_4d',
                        center: 'BoosterBuyDialogTemplate_center_5f',
                        center__shown: 'BoosterBuyDialogTemplate_center__shown_18',
                        center__shownAnimate: 'BoosterBuyDialogTemplate_center__shownAnimate_71',
                        windowIn: 'BoosterBuyDialogTemplate_windowIn_87',
                        center__withIcon: 'BoosterBuyDialogTemplate_center__withIcon_04',
                        base__extraSmallHeight: 'BoosterBuyDialogTemplate_base__extraSmallHeight_02',
                        center__responsive: 'BoosterBuyDialogTemplate_center__responsive_57',
                        base__smallHeight: 'BoosterBuyDialogTemplate_base__smallHeight_e0',
                        icon: 'BoosterBuyDialogTemplate_icon_b4',
                        icon__responsive: 'BoosterBuyDialogTemplate_icon__responsive_7d',
                        title: 'BoosterBuyDialogTemplate_title_79',
                        title__responsive: 'BoosterBuyDialogTemplate_title__responsive_9d',
                        content: 'BoosterBuyDialogTemplate_content_00',
                        footer: 'BoosterBuyDialogTemplate_footer_05',
                        buttons: 'BoosterBuyDialogTemplate_buttons_e1',
                        divider: 'BoosterBuyDialogTemplate_divider_ec',
                        divider__noContent: 'BoosterBuyDialogTemplate_divider__noContent_37',
                        divider__noFooter: 'BoosterBuyDialogTemplate_divider__noFooter_80',
                        closeBtn: 'BoosterBuyDialogTemplate_closeBtn_5a',
                        closeBtn__responsive: 'BoosterBuyDialogTemplate_closeBtn__responsive_af',
                    },
                    Iu = (0, n.memo)(
                        ({
                            isShown: u = !0,
                            classMix: e,
                            onClose: t,
                            icon: i,
                            topRight: a,
                            title: r,
                            content: l,
                            buttons: E,
                            footer: F,
                            displayFlags: d,
                            classNames: _,
                        }) => {
                            const D = ((u, e) => Object.keys(e).reduce((e, t) => ((e[t] = u.includes(t)), e), {}))(
                                    d,
                                    Tu,
                                ),
                                B = D.responsiveHeader,
                                C = D.responsiveClosePosition,
                                h = D.disableResponsiveContentPosition,
                                g = (function (u, e, t) {
                                    const o = (0, n.useContext)(m);
                                    let i = Object.entries(o).filter(([u, e]) => !0 === e && u in A);
                                    return (
                                        t && (i = i.filter((u) => t.includes(u[0]))),
                                        u.reduce((u, t) => {
                                            const n = i.map((u) =>
                                                s()(
                                                    e[((u, e) => u + '__' + e)(t, u[0])],
                                                    e[
                                                        ((u, e) => {
                                                            return u + ((t = e)[0].toUpperCase() + t.slice(1));
                                                            var t;
                                                        })(t, u[0])
                                                    ],
                                                ),
                                            );
                                            return (u[t] = s()(e[t], ...n)), u;
                                        }, {})
                                    );
                                })(['base'], Hu),
                                p = !c.O.client.graphicsQuality.isLow(),
                                v = (0, n.useCallback)(() => {
                                    t && t();
                                }, [t]),
                                w = s()(g.base, e),
                                b = s()(
                                    Hu.center,
                                    i && Hu.center__withIcon,
                                    u && p ? Hu.center__shownAnimate : Hu.center__shown,
                                    !h && Hu.center__responsive,
                                    null == _ ? void 0 : _.center,
                                ),
                                f = s()(Hu.icon, B && Hu.icon__responsive),
                                y = s()(Hu.title, B && Hu.title__responsive),
                                k = s()(Hu.closeBtn, C && Hu.closeBtn__responsive),
                                x = s()(
                                    Hu.divider,
                                    !l && Hu.divider__noContent,
                                    !F && Hu.divider__noFooter,
                                    null == _ ? void 0 : _.divider,
                                );
                            return o().createElement(
                                'div',
                                { className: w },
                                p && o().createElement(Nu, null),
                                o().createElement(
                                    'div',
                                    { className: Hu.topRight },
                                    a,
                                    o().createElement(
                                        'div',
                                        { className: k },
                                        o().createElement(xu, {
                                            caption: R.strings.menu.viewHeader.closeBtn.label(),
                                            type: 'close',
                                            side: 'right',
                                            onClick: v,
                                        }),
                                    ),
                                ),
                                o().createElement(
                                    'div',
                                    { className: b },
                                    i && o().createElement('div', { className: f }, i),
                                    r && o().createElement('div', { className: y }, r),
                                    l && o().createElement('div', { className: Hu.content }, l),
                                    o().createElement('div', { className: x }),
                                    F && o().createElement('div', { className: Hu.footer }, F),
                                    E && o().createElement('div', { className: Hu.buttons }, E),
                                ),
                            );
                        },
                    );
                engine.whenReady.then(() => {
                    a().render(o().createElement(bu, { Template: Iu }), document.getElementById('root'));
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
                var o = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [e, t, n] = deferred[s], i = !0, a = 0; a < e.length; a++)
                        (!1 & n || o >= n) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[a]))
                            ? e.splice(a--, 1)
                            : ((i = !1), n < o && (o = n));
                    if (i) {
                        deferred.splice(s--, 1);
                        var r = t();
                        void 0 !== r && (u = r);
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
        (__webpack_require__.j = 278),
        (() => {
            var u = { 278: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var n,
                        o,
                        [i, a, r] = t,
                        s = 0;
                    if (i.some((e) => 0 !== u[e])) {
                        for (n in a) __webpack_require__.o(a, n) && (__webpack_require__.m[n] = a[n]);
                        if (r) var l = r(__webpack_require__);
                    }
                    for (e && e(t); s < i.length; s++)
                        (o = i[s]), __webpack_require__.o(u, o) && u[o] && u[o][0](), (u[o] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [881], () => __webpack_require__(371));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
