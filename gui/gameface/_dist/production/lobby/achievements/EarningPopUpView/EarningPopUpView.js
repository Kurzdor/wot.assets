(() => {
    'use strict';
    var __webpack_modules__ = {
            527: (u, e, t) => {
                t.r(e),
                    t.d(e, { mouse: () => A, off: () => o, on: () => s, onResize: () => r, onScaleUpdated: () => i });
                var n = t(2472),
                    a = t(1176);
                const r = (0, n.E)('clientResized'),
                    i = (0, n.E)('self.onScaleUpdated'),
                    s = (u, e) => engine.on(u, e),
                    o = (u, e) => engine.off(u, e),
                    E = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const A = (function () {
                    const u = { listeners: 0, enabled: !0, initialized: !1 };
                    function e() {
                        u.enabled && (0, a.R)(!1);
                    }
                    function t() {
                        u.enabled && (0, a.R)(!0);
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
                            : (0, a.R)(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (e, t) => (
                            (e[t] = (function (e) {
                                return (t) => {
                                    u.listeners += 1;
                                    let a = !0;
                                    const r = `mouse${e}`,
                                        i = E[e]((u) => t([u, 'outside']));
                                    function s(u) {
                                        t([u, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, s),
                                        n(),
                                        () => {
                                            a &&
                                                (i(),
                                                window.removeEventListener(r, s),
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
                    return Object.assign({}, r, {
                        disable() {
                            (u.enabled = !1), n();
                        },
                        enable() {
                            (u.enabled = !0), n();
                        },
                        enableOutside() {
                            u.enabled && (0, a.R)(!0);
                        },
                        disableOutside() {
                            u.enabled && (0, a.R)(!1);
                        },
                    });
                })();
            },
            5959: (u, e, t) => {
                t.r(e),
                    t.d(e, {
                        events: () => n,
                        getMouseGlobalPosition: () => r,
                        getSize: () => a,
                        graphicsQuality: () => i,
                    });
                var n = t(527);
                function a(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function r(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const i = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (u, e, t) => {
                function n(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                t.d(e, { R: () => n });
            },
            2472: (u, e, t) => {
                function n(u) {
                    return (e) => (
                        engine.on(u, e),
                        () => {
                            engine.off(u, e);
                        }
                    );
                }
                t.d(e, { E: () => n });
            },
            3138: (u, e, t) => {
                t.d(e, { O: () => a });
                var n = t(5959);
                const a = { view: t(7641), client: n };
            },
            3722: (u, e, t) => {
                function n(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function a(u, e, t) {
                    return `url(${n(u, e, t)})`;
                }
                t.r(e), t.d(e, { getBgUrl: () => a, getTextureUrl: () => n });
            },
            6112: (u, e, t) => {
                t.d(e, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (u, e, t) => {
                t.d(e, { U: () => a });
                var n = t(2472);
                const a = {
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
            7641: (u, e, t) => {
                t.r(e),
                    t.d(e, {
                        addModelObserver: () => A,
                        addPreloadTexture: () => s,
                        children: () => n,
                        displayStatus: () => a.W,
                        displayStatusIs: () => x,
                        events: () => r.U,
                        extraSize: () => f,
                        forceTriggerMouseMove: () => b,
                        freezeTextureBeforeResize: () => d,
                        getBrowserTexturePath: () => E,
                        getDisplayStatus: () => p,
                        getScale: () => B,
                        getSize: () => F,
                        getViewGlobalPosition: () => D,
                        isEventHandled: () => v,
                        isFocused: () => g,
                        pxToRem: () => C,
                        remToPx: () => m,
                        resize: () => c,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => _,
                        setEventHandled: () => h,
                        setInputPaddingsRem: () => o,
                        setSidePaddingsRem: () => l,
                        whenTutorialReady: () => w,
                    });
                var n = t(3722),
                    a = t(6112),
                    r = t(6538),
                    i = t(8566);
                function s(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function o(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, 15);
                }
                function E(u, e, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, n);
                }
                function A(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function l(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, 15);
                }
                function F(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function c(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function D(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: m(e.x), y: m(e.y) };
                }
                function d() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function B() {
                    return viewEnv.getScale();
                }
                function C(u) {
                    return viewEnv.pxToRem(u);
                }
                function m(u) {
                    return viewEnv.remToPx(u);
                }
                function _(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function g() {
                    return viewEnv.isFocused();
                }
                function h() {
                    return viewEnv.setEventHandled();
                }
                function v() {
                    return viewEnv.isEventHandled();
                }
                function b() {
                    viewEnv.forceTriggerMouseMove();
                }
                function p() {
                    return viewEnv.getShowingStatus();
                }
                const x = Object.keys(a.W).reduce(
                        (u, e) => ((u[e] = () => viewEnv.getShowingStatus() === a.W[e]), u),
                        {},
                    ),
                    f = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    w = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : r.U.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (u, e, t) => {
                t.d(e, { qP: () => E });
                const n = ['args'];
                const a = 2,
                    r = 16,
                    i = 32,
                    s = 64,
                    o = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const r = e.args,
                                i = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        n,
                                        a = {},
                                        r = Object.keys(u);
                                    for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                    return a;
                                })(e, n);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, i, {
                                          arguments:
                                              ((a = r),
                                              Object.entries(a).map(([u, e]) => {
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
                        var a;
                    },
                    E = {
                        close(u) {
                            o('popover' === u ? a : i);
                        },
                        minimize() {
                            o(s);
                        },
                        move(u) {
                            o(r, { isMouseEvent: !0, on: u });
                        },
                    };
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
                            (u[(u.KEY_9 = 57)] = 'KEY_9');
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
                t.d(e, { Z: () => r });
                var n = t(3138);
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
                        const r = n.O.view.addModelObserver(u, t, a);
                        return (
                            r > 0
                                ? ((this._callbacks[r] = e),
                                  t > 0 && (this._views[t] ? this._views[t].push(r) : (this._views[t] = [r])))
                                : console.error("Can't add callback for model:", u),
                            r
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
                const r = a;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9916);
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
            9916: (u, e, t) => {
                t.d(e, { B3: () => o, Z5: () => i.Z5, B0: () => s, ry: () => C });
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
                var r = t(1358);
                var i = t(8613);
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
                const o = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    E = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    A = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    l = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var F = t(5521),
                    c = t(3138);
                const D = ['args'];
                function d(u, e, t, n, a, r, i) {
                    try {
                        var s = u[r](i),
                            o = s.value;
                    } catch (u) {
                        return void t(u);
                    }
                    s.done ? e(o) : Promise.resolve(o).then(n, a);
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
                                        var r = u.apply(e, t);
                                        function i(u) {
                                            d(r, n, a, i, s, 'next', u);
                                        }
                                        function s(u) {
                                            d(r, n, a, i, s, 'throw', u);
                                        }
                                        i(void 0);
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
                                r = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        n,
                                        a = {},
                                        r = Object.keys(u);
                                    for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                    return a;
                                })(e, D);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, r, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, r));
                        } else viewEnv.handleViewEvent({ __Type: t, type: u });
                        var n;
                    },
                    _ = () => m(s.CLOSE),
                    g = (u, e) => {
                        u.keyCode === F.n.ESCAPE && e();
                    };
                var h = t(7572);
                const v = a.instance,
                    b = {
                        DataTracker: r.Z,
                        ViewModel: h.Z,
                        ViewEventType: s,
                        NumberFormatType: o,
                        RealFormatType: E,
                        TimeFormatType: A,
                        DateFormatType: l,
                        makeGlobalBoundingBox: B,
                        sendMoveEvent: (u) => m(s.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: _,
                        sendClosePopOverEvent: () => m(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            m(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, n, a = R.invalid('resId'), r) => {
                            const i = c.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                E = o.x,
                                A = o.y,
                                l = o.width,
                                F = o.height,
                                D = {
                                    x: c.O.view.pxToRem(E) + i.x,
                                    y: c.O.view.pxToRem(A) + i.y,
                                    width: c.O.view.pxToRem(l),
                                    height: c.O.view.pxToRem(F),
                                };
                            m(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: e,
                                bbox: B(D),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (u) => {
                            const e = (e) => g(e, u);
                            return (
                                window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e)
                            );
                        },
                        closeOnEsc: (u) => {
                            g(u, _);
                        },
                        handleViewEvent: m,
                        onBindingsReady: C,
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
                        ClickOutsideManager: v,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = b;
            },
            8613: (u, e, t) => {
                t.d(e, { Z5: () => n, cy: () => a });
                const n = {
                        getNumberFormat: (u, e) => systemLocale.getNumberFormat(u, e),
                        getRealFormat: (u, e) => systemLocale.getRealFormat(u, e),
                        getTimeFormat: (u, e) => systemLocale.getTimeFormat(u, e),
                        getDateFormat: (u, e) => systemLocale.getDateFormat(u, e),
                        toUpperCase: (u) => systemLocale.toUpperCase(u),
                        toLowerCase: (u) => systemLocale.toUpperCase(u),
                    },
                    a = {
                        getNumberFormat: (u) => userLocale.getNumberFormat(u),
                        getTimeFormat: (u, e, t) => userLocale.getTimeFormat(u, e, void 0 === t || t),
                        getTimeString: (u, e, t) => userLocale.getTimeString(u, e, void 0 === t || t),
                    };
            },
            6017: (u, e, t) => {
                var n = t(6179),
                    a = t.n(n),
                    r = t(493),
                    i = t.n(r),
                    s = t(3138);
                const o = (u) => {
                    (0, n.useEffect)(u, []);
                };
                var E = t(3403);
                function A() {
                    return !1;
                }
                console.log;
                var l = t(9174);
                function F(u, e) {
                    var t = ('undefined' != typeof Symbol && u[Symbol.iterator]) || u['@@iterator'];
                    if (t) return (t = t.call(u)).next.bind(t);
                    if (
                        Array.isArray(u) ||
                        (t = (function (u, e) {
                            if (!u) return;
                            if ('string' == typeof u) return c(u, e);
                            var t = Object.prototype.toString.call(u).slice(8, -1);
                            'Object' === t && u.constructor && (t = u.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(u);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return c(u, e);
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
                function c(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, n = new Array(e); t < e; t++) n[t] = u[t];
                    return n;
                }
                const D = (u) => (0 === u ? window : window.subViews.get(u));
                function d(u) {
                    return (
                        !1 ===
                        (function (u) {
                            return null == u;
                        })(u)
                    );
                }
                function B(u, e) {
                    var t;
                    if (!(e >= u.length)) return Array.isArray(u) ? u[e] : null == (t = u[e]) ? void 0 : t.value;
                }
                const C = B;
                function m(u, e) {
                    return (function (u, e, t) {
                        const n = [];
                        for (let a = 0; a < u.length; a++) {
                            const r = C(u, a);
                            e(r, a, u) && n.push(t(r, a, u));
                        }
                        return n;
                    })(u, d, e);
                }
                function _(u, e, t) {
                    if (Array.isArray(u)) return u.reduce(e, t);
                    let n = t;
                    for (let t = 0; t < u.length; t++) {
                        n = e(n, C(u, t), t, u);
                    }
                    return n;
                }
                var g = t(3946);
                const h = ((u, e) => {
                        const t = (0, n.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: i, children: o, mocks: E }) {
                                const c = (0, n.useRef)([]),
                                    d = (t, n, a) => {
                                        var r;
                                        const i = (function ({
                                                initializer: u = !0,
                                                rootId: e = 0,
                                                getRoot: t = D,
                                                context: n = 'model',
                                            } = {}) {
                                                const a = new Map();
                                                function r(u, e = 0) {
                                                    viewEnv.removeDataChangedCallback(u, e)
                                                        ? a.delete(u)
                                                        : console.error("Can't remove callback by id:", u);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (u, e, t) => {
                                                        t.forEach((e) => {
                                                            const t = a.get(e);
                                                            void 0 !== t && t(u);
                                                        });
                                                    });
                                                });
                                                const i = (u) => {
                                                    const a = t(e),
                                                        r = n.split('.').reduce((u, e) => u[e], a);
                                                    return 'string' != typeof u || 0 === u.length
                                                        ? r
                                                        : u.split('.').reduce((u, e) => {
                                                              const t = u[e];
                                                              return 'function' == typeof t ? t.bind(u) : t;
                                                          }, r);
                                                };
                                                return {
                                                    subscribe: (t, r) => {
                                                        const o = 'string' == typeof r ? `${n}.${r}` : n,
                                                            E = s.O.view.addModelObserver(o, e, !0);
                                                        return a.set(E, t), u && t(i(r)), E;
                                                    },
                                                    readByPath: i,
                                                    createCallback: (u, e) => {
                                                        const t = i(e);
                                                        return (...e) => {
                                                            t(u(...e));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (u) => {
                                                        const e = i(u);
                                                        return () => {
                                                            e();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var u, t = F(a.keys()); !(u = t()).done; ) r(u.value, e);
                                                    },
                                                    unsubscribe: r,
                                                };
                                            })(n),
                                            o =
                                                'real' === t
                                                    ? i
                                                    : Object.assign({}, i, {
                                                          readByPath:
                                                              null != (r = null == a ? void 0 : a.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            E = (u) =>
                                                'mocks' === t ? (null == a ? void 0 : a.getter(u)) : o.readByPath(u),
                                            d = (u) => c.current.push(u),
                                            B = u({
                                                mode: t,
                                                readByPath: E,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (u, e) => {
                                                        const n = null != e ? e : E(u),
                                                            a = l.LO.box(n, { equals: A });
                                                        return (
                                                            'real' === t &&
                                                                o.subscribe(
                                                                    (0, l.aD)((u) => a.set(u)),
                                                                    u,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (u, e) => {
                                                        const n = null != e ? e : E(u),
                                                            a = l.LO.box(n, { equals: A });
                                                        return (
                                                            'real' === t &&
                                                                o.subscribe(
                                                                    (0, l.aD)((u) => a.set(u)),
                                                                    u,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (u, e) => {
                                                        const n = E(e);
                                                        if (Array.isArray(u)) {
                                                            const a = u.reduce(
                                                                (u, e) => ((u[e] = l.LO.box(n[e], {})), u),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    o.subscribe(
                                                                        (0, l.aD)((e) => {
                                                                            u.forEach((u) => {
                                                                                a[u].set(e[u]);
                                                                            });
                                                                        }),
                                                                        e,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                        {
                                                            const a = u,
                                                                r = Object.entries(a),
                                                                i = r.reduce(
                                                                    (u, [e, t]) => ((u[t] = l.LO.box(n[e], {})), u),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    o.subscribe(
                                                                        (0, l.aD)((u) => {
                                                                            r.forEach(([e, t]) => {
                                                                                i[t].set(u[e]);
                                                                            });
                                                                        }),
                                                                        e,
                                                                    ),
                                                                i
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: d,
                                            }),
                                            C = { mode: t, model: B, externalModel: o, cleanup: d };
                                        return {
                                            model: B,
                                            controls: 'mocks' === t && a ? a.controls(C) : e(C),
                                            externalModel: o,
                                            mode: t,
                                        };
                                    },
                                    B = (0, n.useRef)(!1),
                                    C = (0, n.useState)(r),
                                    m = C[0],
                                    _ = C[1],
                                    g = (0, n.useState)(() => d(r, i, E)),
                                    h = g[0],
                                    v = g[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        B.current ? v(d(m, i, E)) : (B.current = !0);
                                    }, [E, m, i]),
                                    (0, n.useEffect)(() => {
                                        _(r);
                                    }, [r]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            h.externalModel.dispose(), c.current.forEach((u) => u());
                                        },
                                        [h],
                                    ),
                                    a().createElement(t.Provider, { value: h }, o)
                                );
                            },
                            () => (0, n.useContext)(t),
                        ];
                    })(
                        ({ observableModel: u }) => {
                            const e = { root: u.object(), achievements: u.array('achievements') },
                                t = (0, g.Om)(() => m(e.achievements.get(), (u) => Object.assign({}, u)), {
                                    equals: A,
                                }),
                                n = (0, g.Om)(
                                    () => {
                                        const u = B(t(), 0);
                                        if (u) return u;
                                        throw new Error("Can't get the first achievement, array is empty");
                                    },
                                    { equals: A },
                                ),
                                a = (0, g.Om)(
                                    () => {
                                        const u = n();
                                        return `${u.key}_${u.currentValue}`;
                                    },
                                    { equals: A },
                                ),
                                r = (0, g.Om)(() => _(t(), (u, { achievementScore: e }) => u + e, 0), { equals: A });
                            return Object.assign({}, e, {
                                computes: {
                                    achievementsList: t,
                                    firstAchievement: n,
                                    notificationUniqueKey: a,
                                    totalScore: r,
                                    isMultiple: (0, g.Om)(() => t().length > 1),
                                },
                            });
                        },
                        ({ externalModel: u }) => ({
                            animationShown: u.createCallbackNoArgs('onShown'),
                            goToAchievement: u.createCallback(
                                (u, e, t, n) => ({ achievementId: u, category: e, isMultiple: t, isTrophy: n }),
                                'onGoToAchievement',
                            ),
                        }),
                    ),
                    v = h[0],
                    b = h[1];
                var p = t(6483),
                    x = t.n(p);
                const f = {
                    linear: (u) => u,
                    easeInQuad: (u) => u * u,
                    easeOutQuad: (u) => u * (2 - u),
                    easeInOutQuad: (u) => (u < 0.5 ? 2 * u * u : (4 - 2 * u) * u - 1),
                    easeInCubic: (u) => u * u * u,
                    easeOutCubic: (u) => --u * u * u + 1,
                    easeInOutCubic: (u) => (u < 0.5 ? 4 * u * u * u : (u - 1) * (2 * u - 2) * (2 * u - 2) + 1),
                    easeInQuart: (u) => u * u * u * u,
                    easeOutQuart: (u) => 1 - --u * u * u * u,
                    easeInOutQuart: (u) => (u < 0.5 ? 8 * u * u * u * u : 1 - 8 * --u * u * u * u),
                    easeInQuint: (u) => u * u * u * u * u,
                    easeOutQuint: (u) => 1 + --u * u * u * u * u,
                    easeInOutQuint: (u) => (u < 0.5 ? 16 * u * u * u * u * u : 1 + 16 * --u * u * u * u * u),
                    easeInCirc: (u) => 1 - Math.sqrt(1 - Math.pow(u, 2)),
                    easeOutCirc: (u) => Math.sqrt(1 - Math.pow(u - 1, 2)),
                    easeInOutCirc(u) {
                        const e = Math.sqrt,
                            t = Math.pow;
                        return u < 0.5 ? (1 - e(1 - t(2 * u, 2))) / 2 : (e(1 - t(-2 * u + 2, 2)) + 1) / 2;
                    },
                    easeOutBack(u) {
                        const e = 1.70158;
                        return 1 + 2.70158 * Math.pow(u - 1, 3) + e * Math.pow(u - 1, 2);
                    },
                };
                function w() {
                    const u = (0, n.useRef)(0);
                    var e;
                    return (
                        (e = () => {
                            window.clearTimeout(u.current);
                        }),
                        (0, n.useEffect)(() => e, []),
                        (0, n.useMemo)(
                            () => ({
                                run: (e, t) => {
                                    window.clearTimeout(u.current),
                                        (u.current = window.setTimeout(() => {
                                            (u.current = 0), e();
                                        }, t));
                                },
                                clear: () => {
                                    window.clearTimeout(u.current), (u.current = 0);
                                },
                                get isRunning() {
                                    return 0 !== u.current;
                                },
                            }),
                            [],
                        )
                    );
                }
                function y(u) {
                    engine.call('PlaySound', u);
                }
                const S = {
                    playHighlight() {
                        y('highlight');
                    },
                    playClick() {
                        y('play');
                    },
                    playYes() {
                        y('yes1');
                    },
                };
                var k = t(7030),
                    O = t(9916);
                class T extends a().PureComponent {
                    render() {
                        let u;
                        if ('gold' === this.props.format) u = O.B3.GOLD;
                        else u = O.B3.INTEGRAL;
                        const e = O.Z5.getNumberFormat(this.props.value, u);
                        return void 0 !== this.props.value && void 0 !== e ? e : null;
                    }
                }
                T.defaultProps = { format: 'integral' };
                const L = [
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
                function N(u) {
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
                const M = (u, e, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: O.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    P = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            a = u.args,
                            r = u.onMouseEnter,
                            i = u.onMouseLeave,
                            s = u.onMouseDown,
                            o = u.onClick,
                            E = u.ignoreShowDelay,
                            A = void 0 !== E && E,
                            l = u.ignoreMouseClick,
                            F = void 0 !== l && l,
                            c = u.decoratorId,
                            D = void 0 === c ? 0 : c,
                            d = u.isEnabled,
                            B = void 0 === d || d,
                            C = u.targetId,
                            m = void 0 === C ? 0 : C,
                            _ = u.onShow,
                            g = u.onHide,
                            h = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(u);
                                for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                return a;
                            })(u, L);
                        const v = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            b = (0, n.useMemo)(
                                () =>
                                    m ||
                                    ((u = 1) => {
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
                                    })().resId,
                                [m],
                            ),
                            p = (0, n.useCallback)(() => {
                                (v.current.isVisible && v.current.timeoutId) ||
                                    (M(t, D, { isMouseEvent: !0, on: !0, arguments: N(a) }, b),
                                    _ && _(),
                                    (v.current.isVisible = !0));
                            }, [t, D, a, b, _]),
                            x = (0, n.useCallback)(() => {
                                if (v.current.isVisible || v.current.timeoutId) {
                                    const u = v.current.timeoutId;
                                    u > 0 && (clearTimeout(u), (v.current.timeoutId = 0)),
                                        M(t, D, { on: !1 }, b),
                                        v.current.isVisible && g && g(),
                                        (v.current.isVisible = !1);
                                }
                            }, [t, D, b, g]),
                            f = (0, n.useCallback)((u) => {
                                v.current.isVisible &&
                                    ((v.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (v.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(v.current.prevTarget) && x();
                                    }, 200)));
                            }, []);
                        (0, n.useEffect)(() => {
                            const u = v.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', f, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', f, { capture: !0 }),
                                        u && window.clearTimeout(u);
                                }
                            );
                        }, []),
                            (0, n.useEffect)(() => {
                                !1 === B && x();
                            }, [B, x]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', x),
                                    () => {
                                        window.removeEventListener('mouseleave', x), x();
                                    }
                                ),
                                [x],
                            );
                        return B
                            ? (0, n.cloneElement)(
                                  e,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((w = e.props.onMouseEnter),
                                              (u) => {
                                                  (u.clientX === window.innerWidth &&
                                                      u.clientY === window.innerHeight) ||
                                                      ((v.current.timeoutId = window.setTimeout(p, A ? 100 : 400)),
                                                      r && r(u),
                                                      w && w(u));
                                              }),
                                          onMouseLeave: ((u) => (e) => {
                                              x(), null == i || i(e), null == u || u(e);
                                          })(e.props.onMouseLeave),
                                          onClick: ((u) => (e) => {
                                              !1 === F && x(), null == o || o(e), null == u || u(e);
                                          })(e.props.onClick),
                                          onMouseDown: ((u) => (e) => {
                                              !1 === F && x(), null == s || s(e), null == u || u(e);
                                          })(e.props.onMouseDown),
                                      },
                                      h,
                                  ),
                              )
                            : e;
                        var w;
                    },
                    I = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function W() {
                    return (
                        (W =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        W.apply(this, arguments)
                    );
                }
                const $ = R.views.common.tooltip_window.simple_tooltip_content,
                    H = (u) => {
                        let e = u.children,
                            t = u.body,
                            r = u.header,
                            i = u.note,
                            s = u.alert,
                            o = u.args,
                            E = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(u);
                                for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                return a;
                            })(u, I);
                        const A = (0, n.useMemo)(() => {
                            const u = Object.assign({}, o, { body: t, header: r, note: i, alert: s });
                            for (const e in u) void 0 === u[e] && delete u[e];
                            return u;
                        }, [s, t, r, i, o]);
                        return a().createElement(
                            P,
                            W(
                                {
                                    contentId:
                                        ((l = null == o ? void 0 : o.hasHtmlContent),
                                        l ? $.SimpleTooltipHtmlContent('resId') : $.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: A,
                                },
                                E,
                            ),
                            e,
                        );
                        var l;
                    };
                let V;
                !(function (u) {
                    (u.S80x80 = 's80x80'), (u.S64x64 = 's64x64'), (u.S48x48 = 's48x48');
                })(V || (V = {}));
                const j = {
                        base: 'PointsReward_base_02',
                        base__s48x48: 'PointsReward_base__s48x48_33',
                        base__s64x64: 'PointsReward_base__s64x64_46',
                        base__s80x80: 'PointsReward_base__s80x80_76',
                        icon: 'PointsReward_icon_21',
                        label: 'PointsReward_label_0c',
                        iconPlus: 'PointsReward_iconPlus_f3',
                    },
                    z = R.strings.achievements_page.achievementsPointsTooltip,
                    q = ({ points: u, size: e = V.S64x64, className: t, classNames: n }) =>
                        a().createElement(
                            H,
                            { header: z.header(), body: z.body() },
                            a().createElement(
                                'div',
                                { className: x()(j.base, j[`base__${e}`], t) },
                                a().createElement('div', { className: x()(j.icon, null == n ? void 0 : n.icon) }),
                                a().createElement(
                                    'div',
                                    { className: j.label },
                                    a().createElement('div', { className: j.iconPlus }),
                                    a().createElement(T, { value: u }),
                                ),
                            ),
                        );
                let U, G, K, Y, Z, Q;
                !(function (u) {
                    (u.Circular = 'circular'), (u.Shield = 'shield');
                })(U || (U = {})),
                    (function (u) {
                        (u.S100x100 = 's100x100'),
                            (u.S128x128 = 's128x128'),
                            (u.S180x180 = 's180x180'),
                            (u.S280x280 = 's280x280'),
                            (u.S360x360 = 's360x360'),
                            (u.S420x420 = 's420x420'),
                            (u.Flexable = 'flexable');
                    })(G || (G = {})),
                    (function (u) {
                        (u.s52x44 = 's52x44'),
                            (u.s68x56 = 's68x56'),
                            (u.s94x80 = 's94x80'),
                            (u.s144x116 = 's144x116'),
                            (u.s218x176 = 's218x176'),
                            (u.s54x60 = 's54x60'),
                            (u.s68x76 = 's68x76'),
                            (u.s94x108 = 's94x108'),
                            (u.s148x168 = 's148x168'),
                            (u.s192x216 = 's192x216'),
                            (u.s228x256 = 's228x256');
                    })(K || (K = {})),
                    (function (u) {
                        (u.Single = 'single'),
                            (u.Cumulative = 'cumulative'),
                            (u.Staged = 'staged'),
                            (u.Subcategory = 'subcategory'),
                            (u.Category = 'Category');
                    })(Y || (Y = {})),
                    (function (u) {
                        (u.Top = 'top'), (u.Center = 'center'), (u.Bottom = 'bottom');
                    })(Z || (Z = {})),
                    (function (u) {
                        (u.Default = ''), (u.PersonalMissions = 'personal_missions');
                    })(Q || (Q = {}));
                var X = t(1281);
                let J;
                function uu(u, e) {
                    return u.replace(/\{\w+\}/g, (u) => String(e[u.slice(1, -1)]));
                }
                function eu(u, e) {
                    return u.replace(/(\{|%\()\w+(\}|\)s)/g, (u) => {
                        const t = 0 === u.indexOf('%') ? 2 : 1;
                        return String(e[u.slice(t, -t)]);
                    });
                }
                !(function (u) {
                    (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
                })(J || (J = {}));
                const tu = (u) => u.replace(/&nbsp;/g, ' '),
                    nu = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    au = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    ru = (u, e, t = J.left) => u.split(e).reduce(t === J.left ? nu : au, []),
                    iu = (() => {
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
                    su = ['zh_cn', 'zh_sg', 'zh_tw'],
                    ou = (u, e = J.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (su.includes(t)) return iu(u);
                        if ('ja' === t) {
                            return (0, X.D4)()
                                .parse(u)
                                .map((u) => tu(u));
                        }
                        return ((u, e = J.left) => {
                            let t = [];
                            const n =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                a = tu(u);
                            return ru(a, /( )/, e).forEach((u) => (t = t.concat(ru(u, n, J.left)))), t;
                        })(u, e);
                    },
                    Eu = {
                        base: 'AdvancedAchievement_base_03',
                        base__s100x100: 'AdvancedAchievement_base__s100x100_52',
                        base__s128x128: 'AdvancedAchievement_base__s128x128_d3',
                        base__s180x180: 'AdvancedAchievement_base__s180x180_10',
                        base__s280x280: 'AdvancedAchievement_base__s280x280_ac',
                        base__s360x360: 'AdvancedAchievement_base__s360x360_c6',
                        base__s420x420: 'AdvancedAchievement_base__s420x420_8a',
                        base__flexable: 'AdvancedAchievement_base__flexable_4f',
                        background: 'AdvancedAchievement_background_cf',
                        border: 'AdvancedAchievement_border_5d',
                        icon: 'AdvancedAchievement_icon_bb',
                        base__shield: 'AdvancedAchievement_base__shield_68',
                        icon__bottom: 'AdvancedAchievement_icon__bottom_57',
                        base__circular: 'AdvancedAchievement_base__circular_2d',
                        icon__top: 'AdvancedAchievement_icon__top_2d',
                        stage: 'AdvancedAchievement_stage_fa',
                    };
                let Au;
                !(function (u) {
                    (u.Single = 'single'), (u.Cumulative = 'cumulative'), (u.Staged = 'staged');
                })(Au || (Au = {}));
                const lu = R.images.gui.maps.icons.advanced_achievements,
                    Fu = { [Au.Single]: U.Circular, [Au.Staged]: U.Circular, [Au.Cumulative]: U.Shield },
                    cu = {
                        [G.S100x100]: K.s52x44,
                        [G.S128x128]: K.s68x56,
                        [G.S180x180]: K.s94x80,
                        [G.S280x280]: K.s144x116,
                        [G.S360x360]: K.s218x176,
                        [G.S420x420]: K.s218x176,
                        [G.Flexable]: K.s218x176,
                    },
                    Du = {
                        [G.S100x100]: K.s54x60,
                        [G.S128x128]: K.s68x76,
                        [G.S180x180]: K.s94x108,
                        [G.S280x280]: K.s148x168,
                        [G.S360x360]: K.s192x216,
                        [G.S420x420]: K.s228x256,
                        [G.Flexable]: K.s228x256,
                    },
                    du = (u, e, t, n) => {
                        switch (u) {
                            case U.Shield:
                                return { backgroundImage: `url(${lu.borders.shield.$dyn(`tier_${n}_${e}`)})` };
                            case U.Circular:
                            default:
                                return {
                                    backgroundImage: `url(${lu.borders.circular.$dyn(t ? `circular_trophy_${e}` : `circular_${e}`)})`,
                                };
                        }
                    },
                    Bu = (u, e, t, n) => {
                        switch (u) {
                            case U.Shield:
                                return { backgroundImage: `url(${lu.backgrounds.shield.$dyn(`${n}_${e}`)})` };
                            case U.Circular:
                            default:
                                return {
                                    backgroundImage: `url(${lu.backgrounds.circular.$dyn(t ? `trophy_${e}` : `${n}_${e}`)})`,
                                };
                        }
                    },
                    Cu = (u, e, t, n, a, r) => {
                        const i = t ? '_trophy' : '',
                            s = u === U.Shield ? `_tier_${a}` : '',
                            o = ((u) => (u === Q.PersonalMissions ? Du : cu))(r),
                            E = o[e],
                            A = ((u, e) => {
                                if (e === G.S360x360 && u === K.s218x176) return { width: 188, height: 150 };
                                const t = u.substring(1).split('x');
                                return { width: t[0], height: t[1] };
                            })(E, e),
                            l = A.width,
                            F = A.height,
                            c = lu.icons.$dyn(`${n}${i}${s}_${E}`);
                        return c
                            ? { backgroundImage: `url(${c})`, width: `${l}rem`, height: `${F}rem` }
                            : { width: `${l}rem`, height: `${F}rem` };
                    },
                    mu = ({
                        keyName: u,
                        type: e,
                        backgroundName: t,
                        size: n = G.S180x180,
                        level: r = 0,
                        stage: i = 0,
                        isTrophy: s = !1,
                        iconPosition: o = Z.Center,
                        iconSizeMap: E = Q.Default,
                        classNames: A,
                    }) => {
                        const l = Fu[e] || U.Circular,
                            F = n === G.Flexable ? G.S420x420 : n;
                        return a().createElement(
                            'div',
                            {
                                className: x()(
                                    Eu.base,
                                    Eu[`base__${n}`],
                                    Eu[`base__${l}`],
                                    null == A ? void 0 : A.base,
                                ),
                            },
                            a().createElement('div', {
                                className: x()(Eu.background, null == A ? void 0 : A.background),
                                style: Bu(l, F, s, t),
                            }),
                            a().createElement('div', {
                                className: x()(Eu.border, null == A ? void 0 : A.border),
                                style: du(l, F, s, r),
                            }),
                            a().createElement('div', {
                                className: x()(
                                    Eu.icon,
                                    Eu[`icon__${o}`],
                                    Eu[`icon__${((c = E), c.replace(/_\w/g, (u) => u[1].toUpperCase()))}`],
                                    null == A ? void 0 : A.icon,
                                ),
                                style: Cu(l, n, s, u, r, E),
                            }),
                            e === Au.Staged &&
                                Boolean(i) &&
                                a().createElement(
                                    'div',
                                    {
                                        className: x()(Eu.stage, null == A ? void 0 : A.stage),
                                        lang: R.strings.settings.LANGUAGE_CODE(),
                                    },
                                    i,
                                ),
                        );
                        var c;
                    },
                    _u = {
                        base: 'Category_base_94',
                        base__s100x100: 'Category_base__s100x100_92',
                        base__s128x128: 'Category_base__s128x128_d0',
                        base__s180x180: 'Category_base__s180x180_c5',
                        base__s280x280: 'Category_base__s280x280_36',
                        base__s360x360: 'Category_base__s360x360_a7',
                        base__s420x420: 'Category_base__s420x420_bd',
                        base__flexable: 'Category_base__flexable_b6',
                        background: 'Category_background_16',
                        border: 'Category_border_14',
                        icon: 'Category_icon_69',
                    };
                let gu, hu;
                !(function (u) {
                    (u.S100x100 = 's100x100'),
                        (u.S128x128 = 's128x128'),
                        (u.S180x180 = 's180x180'),
                        (u.S280x280 = 's280x280'),
                        (u.S360x360 = 's360x360'),
                        (u.S420x420 = 's420x420'),
                        (u.Flexable = 'flexable');
                })(gu || (gu = {})),
                    (function (u) {
                        (u.s54x68 = 's54x68'),
                            (u.s68x82 = 's68x82'),
                            (u.s100x118 = 's100x118'),
                            (u.s156x182 = 's156x182'),
                            (u.s200x236 = 's200x236'),
                            (u.s250x278 = 's250x278');
                    })(hu || (hu = {}));
                const vu = R.images.gui.maps.icons.advanced_achievements,
                    bu = {
                        [gu.S100x100]: hu.s54x68,
                        [gu.S128x128]: hu.s68x82,
                        [gu.S180x180]: hu.s100x118,
                        [gu.S280x280]: hu.s156x182,
                        [gu.S360x360]: hu.s200x236,
                        [gu.S420x420]: hu.s250x278,
                    },
                    pu = ({
                        keyName: u,
                        backgroundName: e,
                        size: t = gu.S280x280,
                        level: n = 0,
                        isTrophy: r = !1,
                        classNames: i,
                    }) => {
                        const s = t === gu.Flexable ? gu.S420x420 : t;
                        return a().createElement(
                            'div',
                            { className: x()(_u.base, _u[`base__${t}`], null == i ? void 0 : i.base) },
                            a().createElement('div', {
                                className: x()(_u.background, null == i ? void 0 : i.background),
                                style: { backgroundImage: `url(${vu.backgrounds.category.$dyn(`${e}_${s}`)})` },
                            }),
                            a().createElement('div', {
                                className: x()(_u.border, null == i ? void 0 : i.border),
                                style: {
                                    backgroundImage: `url(${vu.borders.category.$dyn(r ? `trophy_${s}` : `tier_${n}_${s}`)})`,
                                },
                            }),
                            a().createElement('div', {
                                className: x()(_u.icon, null == i ? void 0 : i.icon),
                                style: { backgroundImage: `url(${vu.icons.category.$dyn(`${u}_${n}_${bu[s]}`)})` },
                            }),
                        );
                    },
                    xu = {
                        base: 'Subcategory_base_7c',
                        base__s100x100: 'Subcategory_base__s100x100_23',
                        base__s128x128: 'Subcategory_base__s128x128_f2',
                        base__s180x180: 'Subcategory_base__s180x180_84',
                        base__s280x280: 'Subcategory_base__s280x280_eb',
                        base__s360x360: 'Subcategory_base__s360x360_dc',
                        base__s420x420: 'Subcategory_base__s420x420_1e',
                        base__s480x480: 'Subcategory_base__s480x480_2a',
                        base__flexable: 'Subcategory_base__flexable_06',
                        background: 'Subcategory_background_68',
                        border: 'Subcategory_border_74',
                        icon: 'Subcategory_icon_17',
                    };
                let fu, wu;
                !(function (u) {
                    (u.S100x100 = 's100x100'),
                        (u.S128x128 = 's128x128'),
                        (u.S180x180 = 's180x180'),
                        (u.S280x280 = 's280x280'),
                        (u.S360x360 = 's360x360'),
                        (u.S420x420 = 's420x420'),
                        (u.S480x480 = 's480x480'),
                        (u.Flexable = 'flexable');
                })(fu || (fu = {})),
                    (function (u) {
                        (u.s52x62 = 's52x62'),
                            (u.s68x72 = 's68x72'),
                            (u.s94x94 = 's94x94'),
                            (u.s144x140 = 's144x140'),
                            (u.s188x176 = 's188x176'),
                            (u.s218x212 = 's218x212'),
                            (u.s250x198 = 's250x198');
                    })(wu || (wu = {}));
                const yu = R.images.gui.maps.icons.advanced_achievements,
                    Su = {
                        [fu.S100x100]: wu.s52x62,
                        [fu.S128x128]: wu.s68x72,
                        [fu.S180x180]: wu.s94x94,
                        [fu.S280x280]: wu.s144x140,
                        [fu.S360x360]: wu.s188x176,
                        [fu.S420x420]: wu.s218x212,
                        [fu.S480x480]: wu.s250x198,
                    },
                    ku = ({
                        keyName: u,
                        backgroundName: e,
                        size: t = fu.S280x280,
                        level: n = 0,
                        isTrophy: r = !1,
                        classNames: i,
                    }) => {
                        const s = t === fu.Flexable ? fu.S480x480 : t;
                        return a().createElement(
                            'div',
                            { className: x()(xu.base, xu[`base__${t}`], null == i ? void 0 : i.base) },
                            a().createElement('div', {
                                className: x()(xu.background, null == i ? void 0 : i.background),
                                style: { backgroundImage: `url(${yu.backgrounds.subcategory.$dyn(`${e}_${s}`)})` },
                            }),
                            a().createElement('div', {
                                className: x()(xu.border, null == i ? void 0 : i.border),
                                style: {
                                    backgroundImage: `url(${yu.borders.subcategory.$dyn(r ? `trophy_${s}` : `tier_${n}_${s}`)})`,
                                },
                            }),
                            a().createElement('div', {
                                className: x()(xu.icon, null == i ? void 0 : i.icon),
                                style: { backgroundImage: `url(${yu.icons.subcategory.$dyn(`${u}_${n}_${Su[s]}`)})` },
                            }),
                        );
                    },
                    Ou = { [Y.Single]: Au.Single, [Y.Staged]: Au.Staged, [Y.Cumulative]: Au.Cumulative },
                    Tu = ({
                        keyName: u,
                        type: e,
                        backgroundName: t,
                        size: n,
                        level: r,
                        stage: i,
                        isTrophy: s,
                        iconPosition: o,
                        iconSizeMap: E,
                        classNames: A,
                    }) => {
                        switch (e) {
                            case Y.Category:
                                return a().createElement(pu, {
                                    keyName: u,
                                    backgroundName: t,
                                    size: n,
                                    level: r,
                                    isTrophy: s,
                                    classNames: A,
                                });
                            case Y.Subcategory:
                                return a().createElement(ku, {
                                    keyName: u,
                                    backgroundName: t,
                                    size: n,
                                    level: r,
                                    isTrophy: s,
                                    classNames: A,
                                });
                            case Y.Single:
                            case Y.Staged:
                            case Y.Cumulative:
                                return a().createElement(mu, {
                                    keyName: u,
                                    type: Ou[e],
                                    backgroundName: t,
                                    size: n,
                                    level: r,
                                    stage: i,
                                    isTrophy: s,
                                    iconPosition: o,
                                    iconSizeMap: E,
                                    classNames: A,
                                });
                            default:
                                return console.warn(`Unreachable code for type '${e}' in AchievementResolver.`), null;
                        }
                    },
                    Lu = (u, e, t) =>
                        e.extraLargeHeight || e.largeHeight || e.mediumHeight || e.smallHeight || e.extraSmallHeight
                            ? (e.extraLargeHeight && t.extraLarge) ||
                              (e.largeHeight && t.large) ||
                              (e.mediumHeight && t.medium) ||
                              (e.smallHeight && t.small) ||
                              (e.extraSmallHeight && t.extraSmall)
                                ? u
                                : null
                            : u,
                    Nu = {
                        extraLarge: { weight: 4, width: 2560, height: 1440 },
                        large: { weight: 3, width: 1920, height: 1080 },
                        medium: { weight: 2, width: 1600, height: 900 },
                        small: { weight: 1, width: 1366, height: 768 },
                        extraSmall: { weight: 0, width: 1024, height: 768 },
                    };
                var Mu;
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
                })(Mu || (Mu = {}));
                const Pu = s.O.client.getSize('rem'),
                    Ru = Pu.width,
                    Iu = Pu.height,
                    Wu = Object.assign(
                        { width: Ru, height: Iu },
                        (function (u, e, t) {
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
                                r = Math.min(n, a);
                            return {
                                extraLarge: r === t.extraLarge.weight,
                                large: r === t.large.weight,
                                medium: r === t.medium.weight,
                                small: r === t.small.weight,
                                extraSmall: r === t.extraSmall.weight,
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
                        })(Ru, Iu, Nu),
                    ),
                    $u = (0, n.createContext)(Wu),
                    Hu = ['children'];
                const Vu = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(u);
                            for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                            return a;
                        })(u, Hu);
                    const a = (0, n.useContext)($u),
                        r = a.extraLarge,
                        i = a.large,
                        s = a.medium,
                        o = a.small,
                        E = a.extraSmall,
                        A = a.extraLargeWidth,
                        l = a.largeWidth,
                        F = a.mediumWidth,
                        c = a.smallWidth,
                        D = a.extraSmallWidth,
                        d = a.extraLargeHeight,
                        B = a.largeHeight,
                        C = a.mediumHeight,
                        m = a.smallHeight,
                        _ = a.extraSmallHeight,
                        g = { extraLarge: d, large: B, medium: C, small: m, extraSmall: _ };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && r) return e;
                        if (t.large && i) return e;
                        if (t.medium && s) return e;
                        if (t.small && o) return e;
                        if (t.extraSmall && E) return e;
                    } else {
                        if (t.extraLargeWidth && A) return Lu(e, t, g);
                        if (t.largeWidth && l) return Lu(e, t, g);
                        if (t.mediumWidth && F) return Lu(e, t, g);
                        if (t.smallWidth && c) return Lu(e, t, g);
                        if (t.extraSmallWidth && D) return Lu(e, t, g);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && d) return e;
                            if (t.largeHeight && B) return e;
                            if (t.mediumHeight && C) return e;
                            if (t.smallHeight && m) return e;
                            if (t.extraSmallHeight && _) return e;
                        }
                    }
                    return null;
                };
                Vu.defaultProps = {
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
                (0, n.memo)(Vu);
                let ju, zu, qu;
                !(function (u) {
                    (u[(u.ExtraSmall = Nu.extraSmall.width)] = 'ExtraSmall'),
                        (u[(u.Small = Nu.small.width)] = 'Small'),
                        (u[(u.Medium = Nu.medium.width)] = 'Medium'),
                        (u[(u.Large = Nu.large.width)] = 'Large'),
                        (u[(u.ExtraLarge = Nu.extraLarge.width)] = 'ExtraLarge');
                })(ju || (ju = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = Nu.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = Nu.small.width)] = 'Small'),
                            (u[(u.Medium = Nu.medium.width)] = 'Medium'),
                            (u[(u.Large = Nu.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = Nu.extraLarge.width)] = 'ExtraLarge');
                    })(zu || (zu = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = Nu.extraSmall.height)] = 'ExtraSmall'),
                            (u[(u.Small = Nu.small.height)] = 'Small'),
                            (u[(u.Medium = Nu.medium.height)] = 'Medium'),
                            (u[(u.Large = Nu.large.height)] = 'Large'),
                            (u[(u.ExtraLarge = Nu.extraLarge.height)] = 'ExtraLarge');
                    })(qu || (qu = {}));
                let Uu;
                !(function (u) {
                    (u[(u.Default = 0)] = 'Default'),
                        (u[(u.First = 1)] = 'First'),
                        (u[(u.Second = 2)] = 'Second'),
                        (u[(u.Third = 3)] = 'Third');
                })(Uu || (Uu = {}));
                const Gu = (u) => (u >= 90 ? Uu.Third : u >= 60 ? Uu.Second : u >= 30 ? Uu.First : Uu.Default),
                    Ku = 'Achievement_base_83',
                    Yu = 'Achievement_shine_e9',
                    Zu = 33,
                    Qu = 0,
                    Xu = !0,
                    Ju = 'play';
                function ue(u) {
                    const e = u.chunk,
                        t = e.rows * e.columns;
                    return (n) => {
                        const a = n % t,
                            r = (a % e.columns) * u.width,
                            i = Math.trunc(a / e.columns) * u.height;
                        return { path: u.getChunkPath(Math.trunc(n / t)), x: r, y: i };
                    };
                }
                const ee = [
                    'width',
                    'height',
                    'getImageSource',
                    'frameCount',
                    'onAnimate',
                    'frameTime',
                    'initialFrameIndex',
                    'lastFrameIndex',
                    'loop',
                    'state',
                    'onAnimationDone',
                    'onAnimationComplete',
                    'poster',
                ];
                function te() {
                    return (
                        (te =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        te.apply(this, arguments)
                    );
                }
                const ne = (0, n.memo)(function (u) {
                        let e = u.width,
                            t = u.height,
                            r = u.getImageSource,
                            i = u.frameCount,
                            s = u.onAnimate,
                            o = u.frameTime,
                            E = void 0 === o ? Zu : o,
                            A = u.initialFrameIndex,
                            l = void 0 === A ? Qu : A,
                            F = u.lastFrameIndex,
                            c = void 0 === F ? i - 1 : F,
                            D = u.loop,
                            d = void 0 === D ? Xu : D,
                            B = u.state,
                            C = void 0 === B ? Ju : B,
                            m = u.onAnimationDone,
                            _ = u.onAnimationComplete,
                            g = u.poster,
                            h = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(u);
                                for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                return a;
                            })(u, ee);
                        const v = (0, n.useRef)(null);
                        return (
                            (0, n.useEffect)(() => {
                                const u = v.current;
                                if (!u) return;
                                const e = u.getContext('2d'),
                                    t = (t) => {
                                        e.clearRect(0, 0, u.width, u.height), e.drawImage(t.img, -t.x, -t.y);
                                    };
                                switch (C) {
                                    case 'play':
                                        return (function () {
                                            const u = ie(l, c, r),
                                                e = ae(l, c),
                                                n = window.setInterval(() => {
                                                    const a = e(),
                                                        r = u.get(a);
                                                    r
                                                        ? (null == s || s(a, r),
                                                          t(r),
                                                          a === c &&
                                                              (null == _ || _(),
                                                              d || (null == m || m(), window.clearInterval(n))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, E);
                                            return () => window.clearInterval(n);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const u = 0 === l && g ? { path: g, x: 0, y: 0 } : r(l),
                                                e = new Image();
                                            e.src = u.path;
                                            const n = () => t(re(u, e));
                                            return (
                                                e.addEventListener('load', n), () => e.removeEventListener('load', n)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [E, r, l, c, d, s, _, m, g, C]),
                            a().createElement('canvas', te({}, h, { width: e, height: t, ref: v }))
                        );
                    }),
                    ae = (u, e) => {
                        let t = u;
                        return () => {
                            const n = t;
                            return (t += 1), t > e && (t = u), n;
                        };
                    },
                    re = (u, e) => Object.assign({}, u, { img: e }),
                    ie = (u, e, t) => {
                        const n = new Map(),
                            a = {};
                        for (let r = u; r <= e; r++) {
                            const u = t(r),
                                e = a[u.path];
                            if (e) n.set(r, re(u, e));
                            else {
                                const e = new Image();
                                (a[u.path] = e),
                                    (e.src = u.path),
                                    (e.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${r})`,
                                            u.path,
                                            `(${u.x},${u.y})`,
                                        );
                                    }),
                                    n.set(r, re(u, e));
                            }
                        }
                        return n;
                    },
                    se = 'Shine_base_48';
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
                const Ee = {
                    width: 400,
                    height: 400,
                    frameCount: 50,
                    chunk: { count: 2, rows: 5, columns: 5 },
                    getChunkPath:
                        ((Ae = 'R.images.gui.maps.icons.sequence.sun_shine_big_sprite.sprite_'), (u) => `${Ae}${u}`),
                };
                var Ae;
                const le = ({ duration: u, isPlaying: e, onAnimationComplete: t, className: r }) => {
                        const i = (function (u = {}, e = []) {
                                var t, a, r, i;
                                const s = (0, n.useState)(null != (t = u.state) ? t : Ju),
                                    o = s[0],
                                    E = s[1],
                                    A = (0, n.useState)(null != (a = u.initialFrameIndex) ? a : Qu),
                                    l = A[0],
                                    F = A[1],
                                    c = (0, n.useState)(null != (r = u.frameTime) ? r : Zu),
                                    D = c[0],
                                    d = c[1],
                                    B = (0, n.useState)(null != (i = u.loop) ? i : Xu),
                                    C = B[0],
                                    m = B[1],
                                    _ = (0, n.useRef)(l),
                                    g = (0, n.useCallback)((u) => {
                                        F(u), E('play');
                                    }, []),
                                    h = (0, n.useCallback)((u) => {
                                        F(u), E('stop');
                                    }, []),
                                    v = (0, n.useCallback)(() => {
                                        F(0), E('stop');
                                    }, []),
                                    b = (0, n.useCallback)(() => E('play'), []),
                                    p = (0, n.useCallback)(() => {
                                        F(_.current + 1), E('stop');
                                    }, []);
                                return {
                                    props: {
                                        state: o,
                                        initialFrameIndex: l,
                                        frameTime: D,
                                        loop: C,
                                        onAnimate: (0, n.useCallback)((e, t) => {
                                            (_.current = e), null == u.onAnimate || u.onAnimate(e, t);
                                        }, e),
                                        onAnimationDone: (0, n.useCallback)(() => {
                                            v();
                                        }, e),
                                    },
                                    enableLoop: (0, n.useCallback)(() => m(!0), []),
                                    disableLoop: (0, n.useCallback)(() => m(!1), []),
                                    setState: E,
                                    setInitialFrameIndex: F,
                                    setFrameTime: d,
                                    goAndPlay: g,
                                    goAndStop: h,
                                    stop: v,
                                    play: b,
                                    pause: p,
                                };
                            })({ state: 'stop' }),
                            s = (0, k.useSpring)(() => ({
                                from: { opacity: 0 },
                                config: { duration: u, easing: f.easeInCubic },
                                onRest: t,
                            })),
                            o = s[0],
                            E = s[1];
                        return (
                            (0, n.useEffect)(() => {
                                e ? (i.play(), E.start({ from: { opacity: 1 }, to: { opacity: 0 } })) : i.stop();
                            }, [E, e, i]),
                            a().createElement(
                                k.animated.div,
                                { style: o, className: x()(se, r) },
                                a().createElement(
                                    ne,
                                    oe({}, i.props, {
                                        width: Ee.width,
                                        height: Ee.height,
                                        frameCount: Ee.frameCount,
                                        frameTime: 50,
                                        getImageSource: ue(Ee),
                                    }),
                                ),
                            )
                        );
                    },
                    Fe = (0, E.Pi)(({ isVisible: u, onAppearAnimationEnd: e, onHideAnimationEnd: t, className: r }) => {
                        const i = b().model,
                            s = i.computes.firstAchievement(),
                            o = i.computes.isMultiple(),
                            E = (0, n.useState)(!1),
                            A = E[0],
                            l = E[1],
                            F = (0, k.useSpring)(() => ({
                                from: { opacity: 0, transform: 'scale(1.2)', filter: 'brightness(1)' },
                                config: { duration: 400, easing: f.easeInCirc },
                            })),
                            c = F[0],
                            D = F[1],
                            d = (0, n.useState)(!1),
                            B = d[0],
                            C = d[1];
                        (0, n.useEffect)(() => {
                            if (B)
                                return ((u, e) => {
                                    let t;
                                    const n = setTimeout(() => {
                                        t = u();
                                    }, e);
                                    return () => {
                                        'function' == typeof t && t(), clearTimeout(n);
                                    };
                                })(() => (null == t ? void 0 : t()), 500);
                        }, [B, t]),
                            (0, n.useEffect)(() => {
                                u
                                    ? D.start({
                                          to: { opacity: 1, transform: 'scale(1)', filter: 'brightness(2)' },
                                          onRest: () => {
                                              l(!0),
                                                  D.start({
                                                      to: { filter: 'brightness(1)' },
                                                      config: { duration: 700, easing: f.easeInCirc },
                                                  });
                                          },
                                      })
                                    : D.start({ to: { opacity: 0, transform: 'scale(0.5)' }, onRest: () => C(!0) });
                            }, [D, o, u, t]);
                        return a().createElement(
                            'div',
                            { className: x()(Ku, r) },
                            a().createElement(le, {
                                duration: 700,
                                isPlaying: A,
                                onAnimationComplete: () => {
                                    l(!1), null == e || e();
                                },
                                className: Yu,
                            }),
                            a().createElement(
                                k.animated.div,
                                { style: c },
                                a().createElement(Tu, {
                                    keyName: s.key,
                                    type: s.type,
                                    backgroundName: s.background,
                                    size: G.S128x128,
                                    level: Gu(((m = s.currentValue), (_ = s.maxValue), Math.floor((m / _) * 100))),
                                    stage: s.stage,
                                    isTrophy: s.isTrophy,
                                    iconPosition: s.iconPosition,
                                    iconSizeMap: s.iconSizeMap,
                                }),
                            ),
                        );
                        var m, _;
                    }),
                    ce = 'Background_base_6d',
                    De = 'Background_gradient_b5',
                    de = 'Background_base__hover_72',
                    Be = 'Background_icon_f4',
                    Ce = 'Background_pattern_a6',
                    me = ({ isTrophy: u, isHover: e, className: t }) =>
                        a().createElement(
                            'div',
                            { className: x()(ce, e && de, t) },
                            a().createElement('div', { className: De }),
                            u && a().createElement('div', { className: Be }),
                            a().createElement('div', { className: Ce }),
                        ),
                    _e = 'FormatText_base_d0',
                    ge = ({ binding: u, text: e = '', classMix: t, alignment: r = J.left, formatWithBrackets: i }) => {
                        if (null === e) return console.error("FormatText was supplied with 'null'"), null;
                        const s = i && u ? uu(e, u) : e;
                        return a().createElement(
                            n.Fragment,
                            null,
                            s.split('\n').map((e, i) =>
                                a().createElement(
                                    'div',
                                    { className: x()(_e, t), key: `${e}-${i}` },
                                    ((u, e, t) =>
                                        u.split(/%\((.*?)\)(?:[sd])?/g).map((u) => (t && u in t ? t[u] : ou(u, e))))(
                                        e,
                                        r,
                                        u,
                                    ).map((u, e) => a().createElement(n.Fragment, { key: `${e}-${u}` }, u)),
                                ),
                            ),
                        );
                    },
                    he = 'TextOverflow_base_3b',
                    ve = ({ content: u, classMix: e }) => {
                        const t = (0, n.useRef)(null),
                            r = (0, n.useState)(!0),
                            i = r[0],
                            s = r[1];
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
                                    u && u.offsetWidth >= u.scrollWidth && s(!1);
                                }),
                            ),
                            a().createElement(
                                H,
                                { isEnabled: i, body: u },
                                a().createElement('div', { ref: t, className: x()(he, e) }, u),
                            )
                        );
                    },
                    be = 'Details_base_f2',
                    pe = 'Details_title_7b',
                    xe = 'Details_description_6e',
                    fe = R.strings.advanced_achievements,
                    we = R.strings.achievements_page.earningNotification,
                    ye = (0, E.Pi)(({ className: u }) => {
                        const e = b().model,
                            t = e.computes.achievementsList(),
                            n = e.computes.firstAchievement(),
                            r = n.key,
                            i = n.type,
                            s = n.stage,
                            o = n.isTrophy,
                            E = ((u, e, t, n = !1) =>
                                u !== Y.Staged || !e || n
                                    ? tu(t)
                                    : tu(
                                          eu(R.strings.advanced_achievements.steppedAchievementTitle(), {
                                              achievementName: t,
                                              stage: e,
                                          }),
                                      ))(i, s, fe.name.$dyn(r)),
                            A = ((u, e, t) => {
                                const n = e ? we.trophy : we.achievement;
                                return t > 1
                                    ? {
                                          title: eu(n.title.multiple(), { count: t }),
                                          description: n.description.multiple(),
                                      }
                                    : { title: u, description: n.description.single() };
                            })(E, o, t.length),
                            l = A.title,
                            F = A.description;
                        return a().createElement(
                            'div',
                            { className: x()(be, u) },
                            a().createElement(ve, { content: l, classMix: pe }),
                            e.computes.isMultiple()
                                ? a().createElement(ge, {
                                      text: F,
                                      binding: { name: a().createElement(ve, { content: E, classMix: xe }) },
                                      classMix: xe,
                                  })
                                : a().createElement(ve, { content: F, classMix: xe }),
                        );
                    }),
                    Se = 'Glow_base_b9',
                    ke = 'Glow_glowContainer_2c',
                    Oe = 'Glow_glow_ea',
                    Te = ({ isVisible: u, isHover: e }) => {
                        const t = (0, k.useSpring)(() => ({
                                from: { opacity: 0, x: '120%' },
                                config: { duration: 3500, easing: f.easeOutBack },
                            })),
                            r = t[0],
                            i = t[1],
                            s = (0, n.useRef)(2),
                            o = (0, n.useCallback)(() => {
                                (s.current -= 1),
                                    i.start({
                                        from: { opacity: 0, x: '-20%' },
                                        to: [{ opacity: 1, immediate: !0 }, { x: '120%' }],
                                        delay: 1e3,
                                        onRest: () => {
                                            s.current > 0 && o();
                                        },
                                    });
                            }, [i]);
                        return (
                            (0, n.useEffect)(() => {
                                u && o();
                            }, [u, o]),
                            (0, n.useEffect)(() => {
                                e && (s.current = 0);
                            }, [e]),
                            a().createElement(
                                'div',
                                { className: Se },
                                a().createElement(
                                    k.animated.div,
                                    { style: r, className: ke },
                                    a().createElement('div', { className: Oe }),
                                ),
                            )
                        );
                    },
                    Le = { beginning: { x: '0rem' }, end: { x: '-340rem' } },
                    Ne = { beginning: { x: '105%', opacity: 1 }, end: { x: '0%', opacity: 1 } },
                    Me = {
                        beginning: (u) => ({ opacity: 0, x: `-${6 * (u + 1)}rem`, y: `-${6 * (u + 1)}rem` }),
                        end: { x: '0rem', y: '0rem' },
                    },
                    Pe = {
                        base: 'Notification_base_49',
                        base__disabled: 'Notification_base__disabled_9a',
                        moveWrapper: 'Notification_moveWrapper_4e',
                        content: 'Notification_content_fc',
                        background: 'Notification_background_23',
                        background__1: 'Notification_background__1_b7',
                        background__2: 'Notification_background__2_39',
                        background__3: 'Notification_background__3_84',
                        close: 'Notification_close_17',
                        achievementMoveWrapper: 'Notification_achievementMoveWrapper_0f',
                        achievement: 'Notification_achievement_f1',
                        details: 'Notification_details_a9',
                        base__trophy: 'Notification_base__trophy_f4',
                        pointsWrapper: 'Notification_pointsWrapper_80',
                        points: 'Notification_points_2b',
                        pointsIcon: 'Notification_pointsIcon_51',
                    },
                    Re = (0, E.Pi)(() => {
                        const u = b(),
                            e = u.model,
                            t = u.controls,
                            r = e.computes.firstAchievement(),
                            i = e.computes.totalScore(),
                            s = e.computes.isMultiple(),
                            E = r.isTrophy,
                            A = !E,
                            l = (0, k.useSpring)(() => ({
                                from: Le.beginning,
                                config: { duration: 700, easing: f.easeInOutQuad },
                            })),
                            F = l[0],
                            c = l[1],
                            D = (0, k.useSpring)(() => ({
                                from: Ne.beginning,
                                config: { duration: 700, easing: f.easeInOutQuad },
                            })),
                            d = D[0],
                            B = D[1],
                            C = (0, k.useSpring)(() => ({
                                from: { opacity: 0, transform: 'scale(1.2)' },
                                config: { duration: 300, easing: f.easeOutCirc },
                            })),
                            m = C[0],
                            _ = C[1],
                            g = (0, k.useSprings)(
                                2,
                                (u) => ({ from: Me.beginning(u), config: { duration: 300, easing: f.easeOutCirc } }),
                                [],
                            ),
                            h = g[0],
                            v = g[1],
                            p = (0, n.useState)(!1),
                            O = p[0],
                            T = p[1],
                            L = w(),
                            N = w(),
                            M = (0, n.useState)(!1),
                            P = M[0],
                            I = M[1],
                            W = (0, n.useState)(!0),
                            $ = W[0],
                            H = W[1],
                            j = () => {
                                if ($) {
                                    T(!1),
                                        s && v.start(Me.beginning),
                                        y(
                                            s
                                                ? R.sounds.ach_notification_multi_out()
                                                : R.sounds.ach_notification_single_out(),
                                        );
                                    const u = s ? 300 : 0;
                                    c.start({ to: Le.beginning, delay: u }),
                                        B.start({
                                            to: Object.assign({}, Ne.beginning, { opacity: 0 }),
                                            delay: u,
                                            onRest: () => H(!1),
                                        });
                                }
                            },
                            z = (0, n.useState)(!1),
                            U = z[0],
                            G = z[1];
                        return (
                            o(() => {
                                y(s ? R.sounds.ach_notification_multi() : R.sounds.ach_notification_single());
                            }),
                            a().createElement(
                                'div',
                                {
                                    className: x()(Pe.base, !O && Pe.base__disabled, E && Pe.base__trophy),
                                    onMouseEnter: () => {
                                        G(!0), L.clear(), N.clear(), y(R.sounds.ach_notification_hover());
                                    },
                                    onMouseLeave: () => {
                                        G(!1), L.run(j, 3e3);
                                    },
                                    onClick: () => {
                                        t.goToAchievement(r.id, r.category, s, E), H(!1), j();
                                    },
                                },
                                a().createElement(
                                    'div',
                                    { className: Pe.moveWrapper },
                                    a().createElement(
                                        k.animated.div,
                                        { style: d, className: Pe.content },
                                        a().createElement(me, {
                                            isTrophy: E,
                                            isHover: U,
                                            className: x()(Pe.background, Pe.background__1),
                                        }),
                                        a().createElement('div', {
                                            className: Pe.close,
                                            onMouseEnter: S.playHighlight,
                                            onClick: (u) => {
                                                u.stopPropagation(), H(!1), j(), y(R.sounds.cancelcloseno());
                                            },
                                        }),
                                        a().createElement(ye, { className: Pe.details }),
                                        A &&
                                            a().createElement(
                                                k.animated.div,
                                                { style: m, className: Pe.pointsWrapper },
                                                a().createElement(q, {
                                                    size: V.S48x48,
                                                    points: i,
                                                    className: Pe.points,
                                                    classNames: { icon: Pe.pointsIcon },
                                                }),
                                            ),
                                    ),
                                ),
                                s &&
                                    h.map((u, e) =>
                                        a().createElement(
                                            k.animated.div,
                                            {
                                                style: u,
                                                key: e,
                                                className: x()(Pe.background, Pe[`background__${e + 2}`]),
                                            },
                                            a().createElement(me, { isHover: U }),
                                        ),
                                    ),
                                a().createElement(
                                    k.animated.div,
                                    { style: F, className: Pe.achievementMoveWrapper },
                                    a().createElement(Fe, {
                                        isVisible: $,
                                        onAppearAnimationEnd: () => {
                                            c.start({
                                                to: Le.end,
                                                delay: 50,
                                                onRest: () => {
                                                    T(!0),
                                                        A && _.start({ opacity: 1, transform: 'scale(1)' }),
                                                        s && v.start({ from: { opacity: 1 }, to: Me.end }),
                                                        N.run(() => I(!0), 1800),
                                                        L.run(j, 1e4);
                                                },
                                            }),
                                                B.start(Ne.end);
                                        },
                                        onHideAnimationEnd: t.animationShown,
                                        className: Pe.achievement,
                                    }),
                                ),
                                a().createElement(Te, { isVisible: P, isHover: U }),
                            )
                        );
                    }),
                    Ie = 'App_base_9f',
                    We = (0, E.Pi)(() => {
                        const u = b().model,
                            e = u.root.get().isAnimationPlaying,
                            t = u.computes.achievementsList();
                        var r, i;
                        return (
                            o(() => {
                                s.O.view.setSidePaddingsRem({ top: 140, bottom: 180, left: 0, right: 0 });
                            }),
                            (r = () => {
                                e ? s.O.view.resize(500, 400, 'rem') : s.O.view.resize(1, 1, 'rem');
                            }),
                            (i = [e]),
                            (0, n.useEffect)(() => {
                                let u = null;
                                return (
                                    (u = requestAnimationFrame(() => {
                                        u = requestAnimationFrame(() => {
                                            (u = null), r();
                                        });
                                    })),
                                    () => {
                                        null !== u && cancelAnimationFrame(u);
                                    }
                                );
                            }, i),
                            a().createElement(
                                'div',
                                { className: Ie },
                                t.length > 0 && a().createElement(Re, { key: u.computes.notificationUniqueKey() }),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    i().render(
                        a().createElement(v, null, a().createElement(We, null)),
                        document.getElementById('root'),
                    );
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
                var a = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [e, t, n] = deferred[o], r = !0, i = 0; i < e.length; i++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[i]))
                            ? e.splice(i--, 1)
                            : ((r = !1), n < a && (a = n));
                    if (r) {
                        deferred.splice(o--, 1);
                        var s = t();
                        void 0 !== s && (u = s);
                    }
                }
                return u;
            }
            n = n || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > n; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [e, t, n];
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
        (__webpack_require__.j = 703),
        (() => {
            var u = { 703: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var n,
                        a,
                        [r, i, s] = t,
                        o = 0;
                    if (r.some((e) => 0 !== u[e])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (s) var E = s(__webpack_require__);
                    }
                    for (e && e(t); o < r.length; o++)
                        (a = r[o]), __webpack_require__.o(u, a) && u[a] && u[a][0](), (u[a] = 0);
                    return __webpack_require__.O(E);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [549], () => __webpack_require__(6017));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
