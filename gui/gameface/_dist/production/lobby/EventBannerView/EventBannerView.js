(() => {
    'use strict';
    var __webpack_modules__ = {
            527: (u, e, n) => {
                n.r(e),
                    n.d(e, { mouse: () => l, off: () => s, on: () => i, onResize: () => a, onScaleUpdated: () => o });
                var t = n(2472),
                    r = n(1176);
                const a = (0, t.E)('clientResized'),
                    o = (0, t.E)('self.onScaleUpdated'),
                    i = (u, e) => engine.on(u, e),
                    s = (u, e) => engine.off(u, e),
                    c = { down: (0, t.E)('mousedown'), up: (0, t.E)('mouseup'), move: (0, t.E)('mousemove') },
                    l = (function () {
                        const u = { listeners: 0, enabled: !0, initialized: !1 };
                        function e() {
                            u.enabled && (0, r.R)(!1);
                        }
                        function n() {
                            u.enabled && (0, r.R)(!0);
                        }
                        function t() {
                            u.enabled
                                ? u.listeners < 1
                                    ? ((u.initialized = !1),
                                      document.body.removeEventListener('mouseenter', e),
                                      document.body.removeEventListener('mouseleave', n))
                                    : u.initialized ||
                                      ((u.initialized = !0),
                                      document.body.addEventListener('mouseenter', e),
                                      document.body.addEventListener('mouseleave', n))
                                : (0, r.R)(!1);
                        }
                        const a = ['down', 'up', 'move'].reduce(
                            (e, n) => (
                                (e[n] = (function (e) {
                                    return (n) => {
                                        u.listeners += 1;
                                        let r = !0;
                                        const a = `mouse${e}`,
                                            o = c[e]((u) => n([u, 'outside']));
                                        function i(u) {
                                            n([u, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(a, i),
                                            t(),
                                            () => {
                                                r &&
                                                    (o(),
                                                    window.removeEventListener(a, i),
                                                    (u.listeners -= 1),
                                                    t(),
                                                    (r = !1));
                                            }
                                        );
                                    };
                                })(n)),
                                e
                            ),
                            {},
                        );
                        return Object.assign({}, a, {
                            disable() {
                                (u.enabled = !1), t();
                            },
                            enable() {
                                (u.enabled = !0), t();
                            },
                            enableOutside() {
                                u.enabled && (0, r.R)(!0);
                            },
                            disableOutside() {
                                u.enabled && (0, r.R)(!1);
                            },
                        });
                    })();
            },
            5959: (u, e, n) => {
                n.r(e),
                    n.d(e, {
                        events: () => t,
                        getMouseGlobalPosition: () => o,
                        getSize: () => a,
                        graphicsQuality: () => i,
                        playSound: () => r.G,
                        setRTPC: () => r.E,
                    });
                var t = n(527),
                    r = n(2493);
                function a(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function o(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const i = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (u, e, n) => {
                function t(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                n.d(e, { R: () => t });
            },
            2493: (u, e, n) => {
                function t(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error(`playSound('${u}'): `, e);
                    });
                }
                function r(u, e) {
                    engine.call('SetRTPCGlobal', u, e).catch((n) => {
                        console.error(`setRTPC('${u}', '${e}'): `, n);
                    });
                }
                n.d(e, { E: () => r, G: () => t });
            },
            2472: (u, e, n) => {
                function t(u) {
                    return (e) => (
                        engine.on(u, e),
                        () => {
                            engine.off(u, e);
                        }
                    );
                }
                n.d(e, { E: () => t });
            },
            3138: (u, e, n) => {
                n.d(e, { O: () => a });
                var t = n(5959),
                    r = n(514);
                const a = { view: n(7641), client: t, sound: r.ZP };
            },
            514: (u, e, n) => {
                n.d(e, { ZP: () => o });
                var t = n(5959);
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    a = Object.keys(r).reduce((u, e) => ((u[e] = () => (0, t.playSound)(r[e])), u), {}),
                    o = { play: Object.assign({}, a, { sound: t.playSound }), setRTPC: t.setRTPC };
            },
            3722: (u, e, n) => {
                function t(u, e, n = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, n);
                }
                function r(u, e, n) {
                    return `url(${t(u, e, n)})`;
                }
                n.r(e), n.d(e, { getBgUrl: () => r, getTextureUrl: () => t });
            },
            6112: (u, e, n) => {
                n.d(e, { W: () => t });
                const t = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (u, e, n) => {
                n.d(e, { U: () => r });
                var t = n(2472);
                const r = {
                    onTextureFrozen: (0, t.E)('self.onTextureFrozen'),
                    onTextureReady: (0, t.E)('self.onTextureReady'),
                    onDomBuilt: (0, t.E)('self.onDomBuilt'),
                    onLoaded: (0, t.E)('self.onLoaded'),
                    onDisplayChanged: (0, t.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, t.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, t.E)('children.onAdded'),
                        onLoaded: (0, t.E)('children.onLoaded'),
                        onRemoved: (0, t.E)('children.onRemoved'),
                        onAttached: (0, t.E)('children.onAttached'),
                        onTextureReady: (0, t.E)('children.onTextureReady'),
                        onRequestPosition: (0, t.E)('children.requestPosition'),
                    },
                };
            },
            7641: (u, e, n) => {
                n.r(e),
                    n.d(e, {
                        addModelObserver: () => E,
                        addPreloadTexture: () => s,
                        children: () => t,
                        displayStatus: () => r.W,
                        displayStatusIs: () => w,
                        events: () => a.U,
                        extraSize: () => y,
                        forceTriggerMouseMove: () => b,
                        freezeTextureBeforeResize: () => B,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => g,
                        getScale: () => D,
                        getSize: () => F,
                        getViewGlobalPosition: () => _,
                        isEventHandled: () => f,
                        isFocused: () => h,
                        pxToRem: () => m,
                        remToPx: () => C,
                        resize: () => d,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => p,
                        setEventHandled: () => v,
                        setInputPaddingsRem: () => c,
                        setSidePaddingsRem: () => A,
                        whenTutorialReady: () => T,
                    });
                var t = n(3722),
                    r = n(6112),
                    a = n(6538),
                    o = n(8566);
                const i = 15;
                function s(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function c(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, i);
                }
                function l(u, e, n, t = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, n, t);
                }
                function E(u, e, n) {
                    return viewEnv.addDataChangedCallback(u, e, n);
                }
                function A(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, i);
                }
                function F(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function d(u, e, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function _(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: C(e.x), y: C(e.y) };
                }
                function B() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function D() {
                    return viewEnv.getScale();
                }
                function m(u) {
                    return viewEnv.pxToRem(u);
                }
                function C(u) {
                    return viewEnv.remToPx(u);
                }
                function p(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function h() {
                    return viewEnv.isFocused();
                }
                function v() {
                    return viewEnv.setEventHandled();
                }
                function f() {
                    return viewEnv.isEventHandled();
                }
                function b() {
                    viewEnv.forceTriggerMouseMove();
                }
                function g() {
                    return viewEnv.getShowingStatus();
                }
                const w = Object.keys(r.W).reduce(
                        (u, e) => ((u[e] = () => viewEnv.getShowingStatus() === r.W[e]), u),
                        {},
                    ),
                    y = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    T = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : a.U.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (u, e, n) => {
                n.d(e, { qP: () => a });
                const t = ['args'],
                    r = (u, e) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const a = e.args,
                                o = (function (u, e) {
                                    if (null == u) return {};
                                    var n = {};
                                    for (var t in u)
                                        if ({}.hasOwnProperty.call(u, t)) {
                                            if (e.indexOf(t) >= 0) continue;
                                            n[t] = u[t];
                                        }
                                    return n;
                                })(e, t);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: u }, o, {
                                          arguments:
                                              ((r = a),
                                              Object.entries(r).map(([u, e]) => {
                                                  const n = 'GFValueProxy';
                                                  switch (typeof e) {
                                                      case 'number':
                                                          return { __Type: n, name: u, number: e };
                                                      case 'boolean':
                                                          return { __Type: n, name: u, bool: e };
                                                      default:
                                                          return { __Type: n, name: u, string: e.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: u }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: u });
                        var r;
                    },
                    a = {
                        close(u) {
                            r('popover' === u ? 2 : 32);
                        },
                        minimize() {
                            r(64);
                        },
                        move(u) {
                            r(16, { isMouseEvent: !0, on: u });
                        },
                    };
            },
            5521: (u, e, n) => {
                let t, r;
                n.d(e, { n: () => t }),
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
                    })(t || (t = {})),
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
            1358: (u, e, n) => {
                n.d(e, { Z: () => a });
                var t = n(3138);
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
                    addCallback(u, e, n = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = t.O.view.addModelObserver(u, n, r);
                        return (
                            a > 0
                                ? ((this._callbacks[a] = e),
                                  n > 0 && (this._views[n] ? this._views[n].push(a) : (this._views[n] = [a])))
                                : console.error("Can't add callback for model:", u),
                            a
                        );
                    }
                    removeCallback(u, e = 0) {
                        let n = !1;
                        return (
                            void 0 !== u &&
                                void 0 !== this._callbacks[u] &&
                                ((n = viewEnv.removeDataChangedCallback(u, e)), delete this._callbacks[u]),
                            n || console.error("Can't remove callback by id:", u),
                            n
                        );
                    }
                    _emmitDataChanged(u, e, n) {
                        n.forEach((n) => {
                            const t = this._callbacks[n];
                            void 0 !== t && t(u, e);
                        });
                    }
                }
                r.__instance = void 0;
                const a = r;
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
            9916: (u, e, n) => {
                n.d(e, { Sw: () => a.Z, B0: () => i, ry: () => m });
                class t {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (u) => {
                                this.entries.forEach(({ container: e, callback: n }) => {
                                    let t = u.target;
                                    do {
                                        if (t === e) return;
                                        t = t.parentNode;
                                    } while (t);
                                    n();
                                });
                            });
                    }
                    static get instance() {
                        return t.__instance || (t.__instance = new t()), t.__instance;
                    }
                    register(u, e) {
                        this.addMouseListener(), this.entries.push({ container: u, callback: e });
                    }
                    unregister(u, e) {
                        const n = u,
                            t = e;
                        (this.entries = this.entries.filter(({ container: u, callback: e }) => u !== n || e !== t)),
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
                t.__instance = void 0;
                const r = t;
                var a = n(1358),
                    o = n(8613);
                let i;
                var s;
                ((s = i || (i = {}))[(s.UNDEFINED = 0)] = 'UNDEFINED'),
                    (s[(s.TOOLTIP = 1)] = 'TOOLTIP'),
                    (s[(s.POP_OVER = 2)] = 'POP_OVER'),
                    (s[(s.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (s[(s.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (s[(s.MOVE = 16)] = 'MOVE'),
                    (s[(s.CLOSE = 32)] = 'CLOSE'),
                    (s[(s.MINIMIZE = 64)] = 'MINIMIZE');
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    A = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var F = n(5521),
                    d = n(3138);
                const _ = ['args'];
                function B(u, e, n, t, r, a, o) {
                    try {
                        var i = u[a](o),
                            s = i.value;
                    } catch (u) {
                        return void n(u);
                    }
                    i.done ? e(s) : Promise.resolve(s).then(t, r);
                }
                const D = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
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
                                        n = arguments;
                                    return new Promise(function (t, r) {
                                        var a = u.apply(e, n);
                                        function o(u) {
                                            B(a, t, r, o, i, 'next', u);
                                        }
                                        function i(u) {
                                            B(a, t, r, o, i, 'throw', u);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    C = (u, e) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const r = e.args,
                                a = (function (u, e) {
                                    if (null == u) return {};
                                    var n = {};
                                    for (var t in u)
                                        if ({}.hasOwnProperty.call(u, t)) {
                                            if (e.indexOf(t) >= 0) continue;
                                            n[t] = u[t];
                                        }
                                    return n;
                                })(e, _);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: u }, a, {
                                          arguments:
                                              ((t = r),
                                              Object.entries(t).map(([u, e]) => {
                                                  const n = { __Type: 'GFValueProxy', name: u };
                                                  switch (typeof e) {
                                                      case 'number':
                                                          n.number = e;
                                                          break;
                                                      case 'boolean':
                                                          n.bool = e;
                                                          break;
                                                      default:
                                                          n.string = e.toString();
                                                  }
                                                  return n;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: u }, a));
                        } else viewEnv.handleViewEvent({ __Type: n, type: u });
                        var t;
                    },
                    p = () => C(i.CLOSE),
                    h = (u, e) => {
                        u.keyCode === F.n.ESCAPE && e();
                    };
                var v = n(7572);
                const f = r.instance,
                    b = {
                        DataTracker: a.Z,
                        ViewModel: v.Z,
                        ViewEventType: i,
                        NumberFormatType: c,
                        RealFormatType: l,
                        TimeFormatType: E,
                        DateFormatType: A,
                        makeGlobalBoundingBox: D,
                        sendMoveEvent: (u) => C(i.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: p,
                        sendClosePopOverEvent: () => C(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, n = 0) => {
                            C(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: n, args: e });
                        },
                        sendShowPopOverEvent: (u, e, n, t, r = R.invalid('resId'), a) => {
                            const o = d.O.view.getViewGlobalPosition(),
                                s = n.getBoundingClientRect(),
                                c = s.x,
                                l = s.y,
                                E = s.width,
                                A = s.height,
                                F = {
                                    x: d.O.view.pxToRem(c) + o.x,
                                    y: d.O.view.pxToRem(l) + o.y,
                                    width: d.O.view.pxToRem(E),
                                    height: d.O.view.pxToRem(A),
                                };
                            C(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: t || R.invalid('resId'),
                                targetID: r,
                                direction: e,
                                bbox: D(F),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (u) => {
                            const e = (e) => h(e, u);
                            return (
                                window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e)
                            );
                        },
                        closeOnEsc: (u) => {
                            h(u, p);
                        },
                        handleViewEvent: C,
                        onBindingsReady: m,
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
                            const n = {};
                            if ('object' != typeof e) return e;
                            for (const t in e)
                                if (Object.prototype.hasOwnProperty.call(e, t)) {
                                    const r = Object.prototype.toString.call(e[t]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = e[t];
                                        n[t] = [];
                                        for (let e = 0; e < r.length; e++) n[t].push({ value: u(r[e].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (n[t] = u(e[t]))
                                            : (n[t] = e[t]);
                                }
                            return n;
                        },
                        ClickOutsideManager: f,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = b;
            },
            8613: (u, e, n) => {
                n.d(e, { Ew: () => a, Z5: () => t, cy: () => r });
                const t = {
                        getNumberFormat: (u, e) => systemLocale.getNumberFormat(u, e),
                        getRealFormat: (u, e) => systemLocale.getRealFormat(u, e),
                        getTimeFormat: (u, e) => systemLocale.getTimeFormat(u, e),
                        getDateFormat: (u, e) => systemLocale.getDateFormat(u, e),
                        toUpperCase: (u) => systemLocale.toUpperCase(u),
                        toLowerCase: (u) => systemLocale.toUpperCase(u),
                    },
                    r = {
                        getNumberFormat: (u) => userLocale.getNumberFormat(u),
                        getTimeFormat: (u, e, n) => userLocale.getTimeFormat(u, e, void 0 === n || n),
                        getTimeString: (u, e, n) => userLocale.getTimeString(u, e, void 0 === n || n),
                    },
                    a = {
                        getRegionalDateTime: (u, e, n = !0) => regionalDateTime.getRegionalDateTime(u, e, n),
                        getFormattedDateTime: (u, e, n = !0) => regionalDateTime.getFormattedDateTime(u, e, n),
                    };
            },
            3166: (u, e, n) => {
                var t = n(6179),
                    r = n.n(t),
                    a = n(493),
                    o = n.n(a),
                    i = n(6483),
                    s = n.n(i);
                const c = [
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
                function l() {
                    return (
                        (l = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var n = arguments[e];
                                      for (var t in n) ({}).hasOwnProperty.call(n, t) && (u[t] = n[t]);
                                  }
                                  return u;
                              }),
                        l.apply(null, arguments)
                    );
                }
                const E = (0, t.memo)(function (u) {
                        let e = u.width,
                            n = u.height,
                            a = u.getImageSource,
                            o = u.frameCount,
                            i = u.onAnimate,
                            s = u.frameTime,
                            E = void 0 === s ? 33 : s,
                            _ = u.initialFrameIndex,
                            B = void 0 === _ ? 0 : _,
                            D = u.lastFrameIndex,
                            m = void 0 === D ? o - 1 : D,
                            C = u.loop,
                            p = void 0 === C || C,
                            h = u.state,
                            v = void 0 === h ? 'play' : h,
                            f = u.onAnimationDone,
                            b = u.onAnimationComplete,
                            g = u.poster,
                            w = (function (u, e) {
                                if (null == u) return {};
                                var n = {};
                                for (var t in u)
                                    if ({}.hasOwnProperty.call(u, t)) {
                                        if (e.indexOf(t) >= 0) continue;
                                        n[t] = u[t];
                                    }
                                return n;
                            })(u, c);
                        const y = (0, t.useRef)(null);
                        return (
                            (0, t.useEffect)(() => {
                                const u = y.current;
                                if (!u) return;
                                const e = u.getContext('2d'),
                                    n = (n) => {
                                        e.clearRect(0, 0, u.width, u.height), e.drawImage(n.img, -n.x, -n.y);
                                    };
                                switch (v) {
                                    case 'play':
                                        return (function () {
                                            const u = d(B, m, a),
                                                e = A(B, m),
                                                t = window.setInterval(() => {
                                                    const r = e(),
                                                        a = u.get(r);
                                                    a
                                                        ? (null == i || i(r, a),
                                                          n(a),
                                                          r === m &&
                                                              (null == b || b(),
                                                              p || (null == f || f(), window.clearInterval(t))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, E);
                                            return () => window.clearInterval(t);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const u = 0 === B && g ? { path: g, x: 0, y: 0 } : a(B),
                                                e = new Image();
                                            e.src = u.path;
                                            const t = () => n(F(u, e));
                                            return (
                                                e.addEventListener('load', t), () => e.removeEventListener('load', t)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [E, a, B, m, p, i, b, f, g, v]),
                            r().createElement('canvas', l({}, w, { width: e, height: n, ref: y }))
                        );
                    }),
                    A = (u, e) => {
                        let n = u;
                        return () => {
                            const t = n;
                            return (n += 1), n > e && (n = u), t;
                        };
                    },
                    F = (u, e) => Object.assign({}, u, { img: e }),
                    d = (u, e, n) => {
                        const t = new Map(),
                            r = {};
                        for (let a = u; a <= e; a++) {
                            const u = n(a),
                                e = r[u.path];
                            if (e) t.set(a, F(u, e));
                            else {
                                const e = new Image();
                                (r[u.path] = e),
                                    (e.src = u.path),
                                    (e.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${a})`,
                                            u.path,
                                            `(${u.x},${u.y})`,
                                        );
                                    }),
                                    t.set(a, F(u, e));
                            }
                        }
                        return t;
                    },
                    _ = {
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
                    B = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function D() {
                    return (
                        (D = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var n = arguments[e];
                                      for (var t in n) ({}).hasOwnProperty.call(n, t) && (u[t] = n[t]);
                                  }
                                  return u;
                              }),
                        D.apply(null, arguments)
                    );
                }
                const m = (u) => {
                    let e = u.size,
                        n = u.value,
                        t = u.isEmpty,
                        a = u.fadeInAnimation,
                        o = u.hide,
                        i = u.maximumNumber,
                        c = u.className,
                        l = (function (u, e) {
                            if (null == u) return {};
                            var n = {};
                            for (var t in u)
                                if ({}.hasOwnProperty.call(u, t)) {
                                    if (e.indexOf(t) >= 0) continue;
                                    n[t] = u[t];
                                }
                            return n;
                        })(u, B);
                    const E = t ? null : n,
                        A = 'string' == typeof E;
                    if ((E && !A && E < 0) || 0 === E) return null;
                    const F = E && !A && E > i,
                        d = s()(
                            _.base,
                            _[`base__${e}`],
                            a && _.base__animated,
                            o && _.base__hidden,
                            !E && _.base__pattern,
                            t && _.base__empty,
                            c,
                        );
                    return r().createElement(
                        'div',
                        D({ className: d }, l),
                        r().createElement('div', { className: _.bg }),
                        r().createElement('div', { className: _.pattern }),
                        r().createElement(
                            'div',
                            { className: s()(_.value, A && _.value__text) },
                            F ? i : E,
                            F && r().createElement('span', { className: _.plus }, '+'),
                        ),
                    );
                };
                m.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
                var C = n(9916);
                const p = [
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
                function h(u) {
                    return Object.entries(u || {}).map(([u, e]) => {
                        const n = { __Type: 'GFValueProxy', name: u };
                        switch (typeof e) {
                            case 'number':
                                n.number = e;
                                break;
                            case 'boolean':
                                n.bool = e;
                                break;
                            case 'undefined':
                                break;
                            default:
                                n.string = e.toString();
                        }
                        return n;
                    });
                }
                const v = (u, e, n = {}, t = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: C.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: t,
                                },
                                n,
                            ),
                        );
                    },
                    f = (u) => {
                        let e = u.children,
                            n = u.contentId,
                            r = u.args,
                            a = u.onMouseEnter,
                            o = u.onMouseLeave,
                            i = u.onMouseDown,
                            s = u.onClick,
                            c = u.ignoreShowDelay,
                            l = void 0 !== c && c,
                            E = u.ignoreMouseClick,
                            A = void 0 !== E && E,
                            F = u.decoratorId,
                            d = void 0 === F ? 0 : F,
                            _ = u.isEnabled,
                            B = void 0 === _ || _,
                            D = u.targetId,
                            m = void 0 === D ? 0 : D,
                            C = u.onShow,
                            f = u.onHide,
                            b = (function (u, e) {
                                if (null == u) return {};
                                var n = {};
                                for (var t in u)
                                    if ({}.hasOwnProperty.call(u, t)) {
                                        if (e.indexOf(t) >= 0) continue;
                                        n[t] = u[t];
                                    }
                                return n;
                            })(u, p);
                        const g = (0, t.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            w = (0, t.useMemo)(
                                () =>
                                    m ||
                                    ((u = 1) => {
                                        const e = new Error().stack;
                                        let n,
                                            t = R.invalid('resId');
                                        return (
                                            e &&
                                                ((n = e.split('\n')[u].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== n &&
                                                    window.subViews[n] &&
                                                    (t = window.subViews[n].id)),
                                            { caller: n, stack: e, resId: t }
                                        );
                                    })().resId,
                                [m],
                            ),
                            y = (0, t.useCallback)(() => {
                                (g.current.isVisible && g.current.timeoutId) ||
                                    (v(n, d, { isMouseEvent: !0, on: !0, arguments: h(r) }, w),
                                    C && C(),
                                    (g.current.isVisible = !0));
                            }, [n, d, r, w, C]),
                            T = (0, t.useCallback)(() => {
                                if (g.current.isVisible || g.current.timeoutId) {
                                    const u = g.current.timeoutId;
                                    u > 0 && (clearTimeout(u), (g.current.timeoutId = 0)),
                                        v(n, d, { on: !1 }, w),
                                        g.current.isVisible && f && f(),
                                        (g.current.isVisible = !1);
                                }
                            }, [n, d, w, f]),
                            k = (0, t.useCallback)((u) => {
                                g.current.isVisible &&
                                    ((g.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (g.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(g.current.prevTarget) && T();
                                    }, 200)));
                            }, []);
                        return (
                            (0, t.useEffect)(() => {
                                const u = g.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', k, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', k, { capture: !0 }),
                                            u && window.clearTimeout(u);
                                    }
                                );
                            }, []),
                            (0, t.useEffect)(() => {
                                !1 === B && T();
                            }, [B, T]),
                            (0, t.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', T),
                                    () => {
                                        window.removeEventListener('mouseleave', T), T();
                                    }
                                ),
                                [T],
                            ),
                            B
                                ? (0, t.cloneElement)(
                                      e,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((x = e.props.onMouseEnter),
                                                  (u) => {
                                                      (u.clientX === window.innerWidth &&
                                                          u.clientY === window.innerHeight) ||
                                                          ((g.current.timeoutId = window.setTimeout(y, l ? 100 : 400)),
                                                          a && a(u),
                                                          x && x(u));
                                                  }),
                                              onMouseLeave: ((u) => (e) => {
                                                  T(), null == o || o(e), null == u || u(e);
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
                        var x;
                    };
                var b = n(3138),
                    g = n(6112);
                function w() {}
                function y() {
                    return !1;
                }
                console.log;
                const T = [
                    'src',
                    'className',
                    'autoplay',
                    'style',
                    'loop',
                    'isPrebufferKeyframes',
                    'keyframesNameConfig',
                    'onClick',
                ];
                function k() {
                    return (
                        (k = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var n = arguments[e];
                                      for (var t in n) ({}).hasOwnProperty.call(n, t) && (u[t] = n[t]);
                                  }
                                  return u;
                              }),
                        k.apply(null, arguments)
                    );
                }
                const x = (0, t.forwardRef)(function (u, e) {
                        let n = u.src,
                            a = u.className,
                            o = u.autoplay,
                            i = void 0 !== o && o,
                            s = u.style,
                            c = u.loop,
                            l = void 0 !== c && c,
                            E = u.isPrebufferKeyframes,
                            A = u.keyframesNameConfig,
                            F = u.onClick,
                            d = (function (u, e) {
                                if (null == u) return {};
                                var n = {};
                                for (var t in u)
                                    if ({}.hasOwnProperty.call(u, t)) {
                                        if (e.indexOf(t) >= 0) continue;
                                        n[t] = u[t];
                                    }
                                return n;
                            })(u, T);
                        const _ = e,
                            B = (0, t.useRef)(null);
                        var D;
                        return (
                            (D = () =>
                                b.O.view.events.onDisplayChanged((u, e) => {
                                    var n, t;
                                    e === g.W.hidden && (null == (n = B.current) || n.pause()),
                                        e === g.W.shown && (null == (t = B.current) || t.play());
                                })),
                            (0, t.useEffect)(D, []),
                            (0, t.useEffect)(
                                () =>
                                    ((u) => {
                                        let e,
                                            n = null;
                                        return (
                                            (n = requestAnimationFrame(() => {
                                                n = requestAnimationFrame(() => {
                                                    (n = null),
                                                        (e = (() => {
                                                            const u = B.current;
                                                            if (!_ || !u || !E)
                                                                return void (
                                                                    null != u &&
                                                                    u.cohFastSeek &&
                                                                    (u.cohFastSeek = !1)
                                                                );
                                                            const e = u.cohGetKeyframeTimestamps();
                                                            e.length > 0
                                                                ? ((u.cohFastSeek = !0),
                                                                  e.map((e) => {
                                                                      null == u || u.cohPrebufferKeyframe(e);
                                                                  }))
                                                                : console.warn(
                                                                      "Can't prebuffered keyframes, keyframes was not found",
                                                                  );
                                                        })());
                                                });
                                            })),
                                            () => {
                                                'function' == typeof e && e(), null !== n && cancelAnimationFrame(n);
                                            }
                                        );
                                    })(),
                                [E, _],
                            ),
                            (0, t.useEffect)(() => {
                                if (_ && B.current) {
                                    const u = { changeTimeHandlers: [], changeKeyframeHandlers: [], changeTimeLoop: w },
                                        e = () => {
                                            let e = 0;
                                            const n = (function (n) {
                                                    let t = 0;
                                                    return [
                                                        function n() {
                                                            (() => {
                                                                if (B.current) {
                                                                    const n = B.current,
                                                                        t = n.currentTime,
                                                                        r = n.duration;
                                                                    if (
                                                                        (e !== t &&
                                                                            (u.changeTimeHandlers.forEach((u) =>
                                                                                u({ currentTime: t, duration: r }),
                                                                            ),
                                                                            (e = t)),
                                                                        B.current.paused || !_ || !E)
                                                                    )
                                                                        return;
                                                                    const a = B.current.cohGetKeyframeTimestamps();
                                                                    a.forEach((e, n) => {
                                                                        t > a[n] - 0.02 &&
                                                                            t < a[n] &&
                                                                            u.changeKeyframeHandlers.forEach((u) => {
                                                                                const t = Object.keys(
                                                                                    null != A ? A : {},
                                                                                )[n];
                                                                                return u({
                                                                                    time: e,
                                                                                    name: `${A ? t : `Point_${n}`}`,
                                                                                });
                                                                            });
                                                                    });
                                                                }
                                                            })(),
                                                                (t = requestAnimationFrame(n));
                                                        },
                                                        function () {
                                                            cancelAnimationFrame(t);
                                                        },
                                                    ];
                                                })(),
                                                t = n[0],
                                                r = n[1];
                                            return t(), r;
                                        };
                                    u.changeTimeLoop = e();
                                    const n = (e) => (
                                            u.changeTimeHandlers.push(e),
                                            () => {
                                                const n = u.changeTimeHandlers,
                                                    t = n.indexOf(e);
                                                t < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeTimeHandler, this reference was not found",
                                                      )
                                                    : n.splice(t, 1);
                                            }
                                        ),
                                        t = (e) => (
                                            u.changeKeyframeHandlers.push(e),
                                            () => {
                                                const n = u.changeKeyframeHandlers,
                                                    t = n.indexOf(e);
                                                t < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeKeyframeHandlers, this reference was not found",
                                                      )
                                                    : n.splice(t, 1);
                                            }
                                        ),
                                        r = () => {
                                            var u;
                                            return null == (u = B.current) ? void 0 : u.currentTime;
                                        },
                                        a = () => {
                                            var u;
                                            return null == (u = B.current) ? void 0 : u.duration;
                                        },
                                        o = (u) => {
                                            var e, n;
                                            B.current &&
                                                (B.current.currentTime =
                                                    ((e = B.current.duration), (n = u) < 0 ? 0 : n > e ? e : n));
                                        },
                                        i = () => {
                                            var u;
                                            return null == (u = B.current) ? void 0 : u.play();
                                        },
                                        s = () => {
                                            var u;
                                            return null == (u = B.current) ? void 0 : u.pause();
                                        },
                                        c = () => {
                                            s(), o(0);
                                        },
                                        l = () => {
                                            var u, e;
                                            return null !=
                                                (u = null == (e = B.current) ? void 0 : e.cohGetKeyframeTimestamps())
                                                ? u
                                                : [];
                                        },
                                        F = (u) => {
                                            o(u), i();
                                        },
                                        d = (u) => {
                                            o(u), s();
                                        },
                                        D = () => {
                                            (u.changeTimeHandlers = []),
                                                (u.changeKeyframeHandlers = []),
                                                null == u.changeTimeLoop || u.changeTimeLoop();
                                        },
                                        m = (u, e) => {
                                            var n;
                                            return (
                                                null == (n = B.current) || n.addEventListener(u, e),
                                                () => {
                                                    var n;
                                                    return null == (n = B.current)
                                                        ? void 0
                                                        : n.removeEventListener(u, e);
                                                }
                                            );
                                        },
                                        C = (u, e) => {
                                            var n;
                                            return (
                                                null == (n = B.current) || n.removeEventListener(u, e),
                                                () => {
                                                    var n;
                                                    return null == (n = B.current)
                                                        ? void 0
                                                        : n.removeEventListener(u, e);
                                                }
                                            );
                                        };
                                    return (
                                        (_.current = {
                                            on: m,
                                            off: C,
                                            play: i,
                                            pause: s,
                                            stop: c,
                                            cleanup: D,
                                            getCurrentTime: r,
                                            getDuration: a,
                                            getCachedKeyframes: l,
                                            goToAndPlay: F,
                                            goToAndStop: d,
                                            setCurrentTime: o,
                                            domRef: B.current,
                                            onChangeTime: n,
                                            onKeyframes: t,
                                        }),
                                        () => {
                                            D(), (_.current = null);
                                        }
                                    );
                                }
                            }, [A, _, E]),
                            (0, t.useEffect)(() => {
                                B.current && i && B.current.play();
                            }, [i, l]),
                            (0, t.useEffect)(() => {
                                if (B.current)
                                    return () => {
                                        B.current && B.current.pause();
                                    };
                            }, []),
                            r().createElement(
                                'video',
                                k({ src: n, className: a, style: s, loop: l, ref: B, onClick: F }, d),
                            )
                        );
                    }),
                    O = (0, t.memo)(x),
                    S = ['children'];
                function L() {
                    return (
                        (L = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var n = arguments[e];
                                      for (var t in n) ({}).hasOwnProperty.call(n, t) && (u[t] = n[t]);
                                  }
                                  return u;
                              }),
                        L.apply(null, arguments)
                    );
                }
                const N = (u) => {
                        let e = u.children,
                            n = (function (u, e) {
                                if (null == u) return {};
                                var n = {};
                                for (var t in u)
                                    if ({}.hasOwnProperty.call(u, t)) {
                                        if (e.indexOf(t) >= 0) continue;
                                        n[t] = u[t];
                                    }
                                return n;
                            })(u, S);
                        return r().createElement(
                            f,
                            L(
                                {
                                    contentId:
                                        R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                            'resId',
                                        ),
                                    ignoreShowDelay: !0,
                                },
                                n,
                            ),
                            e,
                        );
                    },
                    P = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function M() {
                    return (
                        (M = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var n = arguments[e];
                                      for (var t in n) ({}).hasOwnProperty.call(n, t) && (u[t] = n[t]);
                                  }
                                  return u;
                              }),
                        M.apply(null, arguments)
                    );
                }
                const I = R.views.common.tooltip_window.simple_tooltip_content,
                    V = (u) => {
                        let e = u.children,
                            n = u.body,
                            a = u.header,
                            o = u.note,
                            i = u.alert,
                            s = u.args,
                            c = (function (u, e) {
                                if (null == u) return {};
                                var n = {};
                                for (var t in u)
                                    if ({}.hasOwnProperty.call(u, t)) {
                                        if (e.indexOf(t) >= 0) continue;
                                        n[t] = u[t];
                                    }
                                return n;
                            })(u, P);
                        const l = (0, t.useMemo)(() => {
                            const u = Object.assign({}, s, { body: n, header: a, note: o, alert: i });
                            for (const e in u) void 0 === u[e] && delete u[e];
                            return u;
                        }, [i, n, a, o, s]);
                        return r().createElement(
                            f,
                            M(
                                {
                                    contentId:
                                        ((E = null == s ? void 0 : s.hasHtmlContent),
                                        E ? I.SimpleTooltipHtmlContent('resId') : I.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: l,
                                },
                                c,
                            ),
                            e,
                        );
                        var E;
                    };
                function j() {
                    return (
                        (j = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var n = arguments[e];
                                      for (var t in n) ({}).hasOwnProperty.call(n, t) && (u[t] = n[t]);
                                  }
                                  return u;
                              }),
                        j.apply(null, arguments)
                    );
                }
                const W = ({ children: u, tooltipArgs: e, className: n }) => {
                    if (!e) return u;
                    const t = r().createElement('div', { className: n }, u);
                    if (e.header || e.body) return r().createElement(V, e, t);
                    const a = e.contentId;
                    return a ? r().createElement(f, j({}, e, { contentId: a }), t) : r().createElement(N, e, t);
                };
                var H = n(8045);
                const z = {
                    base: 'ExtendedText_base_71',
                    base__zeroPadding: 'ExtendedText_base__zeroPadding_25',
                    base__isTruncationAvailable: 'ExtendedText_base__isTruncationAvailable_5b',
                    truncated: 'ExtendedText_truncated_97',
                    truncated__hide: 'ExtendedText_truncated__hide_31',
                    unTruncated: 'ExtendedText_unTruncated_b8',
                    tooltip: 'ExtendedText_tooltip_91',
                    'tooltip__justify-flex-start': 'ExtendedText_tooltip__justify-flex-start_00',
                    'tooltip__justify-center': 'ExtendedText_tooltip__justify-center_08',
                    'tooltip__justify-flex-end': 'ExtendedText_tooltip__justify-flex-end_90',
                    'tooltip__align-flex-start': 'ExtendedText_tooltip__align-flex-start_40',
                    'tooltip__align-center': 'ExtendedText_tooltip__align-center_54',
                    'tooltip__align-flex-end': 'ExtendedText_tooltip__align-flex-end_d2',
                };
                let K;
                function U(u, e) {
                    return u.replace(/\{\w+\}/g, (u) => String(e[u.slice(1, -1)]));
                }
                n(1281),
                    (function (u) {
                        (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
                    })(K || (K = {}));
                let q, G, $;
                new RegExp(
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
                ),
                    (function (u) {
                        (u[(u.Word = 0)] = 'Word'),
                            (u[(u.LineBreak = 1)] = 'LineBreak'),
                            (u[(u.NewLine = 2)] = 'NewLine'),
                            (u[(u.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                            (u[(u.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                            (u[(u.Binding = 5)] = 'Binding');
                    })(q || (q = {})),
                    (function (u) {
                        (u.FlexStart = 'flex-start'), (u.Center = 'center'), (u.FlexEnd = 'flex-end');
                    })(G || (G = {})),
                    (function (u) {
                        (u.NBSP = ' '), (u.ZWNBSP = '\ufeff'), (u.NEW_LINE = '\n');
                    })($ || ($ = {}));
                const Y = { [$.NBSP]: q.NoBreakSymbol, [$.ZWNBSP]: q.NoBreakSymbol, [$.NEW_LINE]: q.LineBreak },
                    Z = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'th'].includes(
                        R.strings.settings.LANGUAGE_CODE().toLowerCase(),
                    ),
                    X = {
                        blackReal: 'colors_blackReal_fc',
                        whiteReal: 'colors_whiteReal_31',
                        white: 'colors_white_45',
                        whiteOrange: 'colors_whiteOrange_81',
                        whiteSpanish: 'colors_whiteSpanish_c3',
                        par: 'colors_par_5b',
                        parSecondary: 'colors_parSecondary_fd',
                        parTertiary: 'colors_parTertiary_97',
                        red: 'colors_red_79',
                        redDark: 'colors_redDark_73',
                        yellow: 'colors_yellow_76',
                        orange: 'colors_orange_cd',
                        cream: 'colors_cream_0f',
                        brown: 'colors_brown_82',
                        greenBright: 'colors_greenBright_68',
                        green: 'colors_green_fa',
                        greenDark: 'colors_greenDark_a9',
                        blueBooster: 'colors_blueBooster_26',
                        blueTeamkiller: 'colors_blueTeamkiller_86',
                        cred: 'colors_cred_35',
                        gold: 'colors_gold_c3',
                        bond: 'colors_bond_ce',
                        prom: 'colors_prom_83',
                    },
                    Q = 'renderers_word_f3',
                    J = (u) => ({ color: `#${u}` }),
                    uu = ({ elementList: u, textBlock: e, key: n }) => {
                        const t = e.colorTag;
                        return t
                            ? X[t]
                                ? r().createElement(
                                      'span',
                                      { key: n, 'data-block-type': e.blockType, className: s()(Q, X[t]) },
                                      u,
                                  )
                                : r().createElement(
                                      'span',
                                      { key: n, 'data-block-type': e.blockType, className: Q, style: J(t) },
                                      u,
                                  )
                            : r().createElement('span', { key: n, 'data-block-type': e.blockType, className: Q }, u);
                    },
                    eu = {
                        [q.Word]: uu,
                        [q.NoBreakSymbol]: uu,
                        [q.Binding]: ({ elementList: u, textBlock: e, key: n }) =>
                            r().createElement(
                                'span',
                                { key: n, 'data-block-type': e.blockType },
                                u.map((u) => r().createElement(r().Fragment, { key: n }, u)),
                            ),
                        [q.LineBreak]: ({ key: u }) =>
                            r().createElement('span', {
                                key: u,
                                'data-block-type': q.LineBreak,
                                className: 'renderers_lineBreak_b5',
                            }),
                        [q.NewLine]: ({ elementList: u, key: e }) =>
                            r().createElement(
                                'span',
                                { key: e, 'data-block-type': q.NewLine, className: 'renderers_newLine_bd' },
                                u,
                            ),
                        [q.NoBreakWrapper]: ({ elementList: u, key: e }) =>
                            r().createElement(
                                'span',
                                {
                                    key: e,
                                    'data-block-type': q.NoBreakWrapper,
                                    className: 'renderers_noBreakWrapper_10',
                                },
                                u,
                            ),
                    },
                    nu = (u, e, n) => {
                        const t = [];
                        return (
                            u.childList.forEach((r, a) => {
                                const o = `${n}_${a}`;
                                if (((u) => void 0 !== u.childList)(r)) {
                                    const u = r,
                                        e = u.blockType,
                                        n = nu(u, eu[e], o);
                                    t.push(...n);
                                } else t.push(e({ elementList: [r], textBlock: u, key: o }));
                            }),
                            t
                        );
                    },
                    tu = (u, e, n, t) => {
                        let r = e.exec(u),
                            a = 0;
                        for (; r; ) a !== r.index && n(u.slice(a, r.index)), t(r), (a = e.lastIndex), (r = e.exec(u));
                        a !== u.length && n(u.slice(a));
                    },
                    ru = new RegExp('[฀-๿][ัำ-ฺ็-๎]*', 'gu'),
                    au = Z
                        ? (u) => {
                              const e = [];
                              return (
                                  tu(
                                      u,
                                      /[^a-zA-Z0-9]+/g,
                                      (u) => {
                                          e.push(u);
                                      },
                                      (u) => {
                                          e.push(
                                              ...((u) => {
                                                  const e = [];
                                                  return (
                                                      tu(
                                                          u,
                                                          /\S\s+/g,
                                                          (u) => {
                                                              var n;
                                                              'th' === R.strings.settings.LANGUAGE_CODE().toLowerCase()
                                                                  ? e.push(...((n = u), n.match(ru) || []))
                                                                  : e.push(...u.split(''));
                                                          },
                                                          (u) => {
                                                              e.push(u[0]);
                                                          },
                                                      ),
                                                      e
                                                  );
                                              })(u[0]),
                                          );
                                      },
                                  ),
                                  e
                              );
                          }
                        : (u, e) => {
                              const n = /[\s\u002d]/g;
                              let t = n.exec(u);
                              if (!t) return [u];
                              const r = [];
                              let a = 0;
                              for (; t; ) {
                                  const o = e.justifyContent === G.FlexEnd ? t.index : n.lastIndex;
                                  r.push(u.slice(a, o)), (a = o), (t = n.exec(u));
                              }
                              return a !== u.length && r.push(u.slice(a)), r;
                          },
                    ou = (u, e = '', n) => {
                        const t = [];
                        return (
                            tu(
                                u,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (u) => {
                                    t.push({ blockType: q.Word, colorTag: e, childList: au(u, n) });
                                },
                                (u) => {
                                    const n = u[0],
                                        r = Y[n.charAt(0)];
                                    r === q.LineBreak
                                        ? t.push(
                                              ...((u) => {
                                                  const e = [
                                                      {
                                                          blockType: q.LineBreak,
                                                          colorTag: '',
                                                          childList: [u.charAt(0)],
                                                      },
                                                  ];
                                                  for (let n = 0; n < u.length - 1; n++)
                                                      e.push({
                                                          blockType: q.NewLine,
                                                          colorTag: '',
                                                          childList: [u.charAt(0)],
                                                      });
                                                  return e;
                                              })(n),
                                          )
                                        : t.push({ blockType: r, colorTag: e, childList: [n] });
                                },
                            ),
                            t
                        );
                    },
                    iu = (u, e, n = '', t) => {
                        const r = [];
                        return (
                            tu(
                                u,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (u) => {
                                    r.push(...ou(u, n, t));
                                },
                                (u) => {
                                    const a = u[1],
                                        o = void 0 === e[a] ? u[0] : e[a];
                                    'string' == typeof o || 'number' == typeof o
                                        ? r.push(...ou(String(o), n, t))
                                        : r.push({ blockType: q.Binding, colorTag: n, childList: [o] });
                                },
                            ),
                            r
                        );
                    },
                    su = (u, e) => {
                        if (!u) return [e];
                        const n = [],
                            t = Object.assign({}, e, { childList: e.childList.splice(0, 1) });
                        if (u.blockType === q.NoBreakWrapper) u.childList.push(t), n.push(u);
                        else {
                            const e = Object.assign({}, u, { childList: u.childList.splice(-1) });
                            u.childList.length > 0 && n.push(u),
                                n.push({ blockType: q.NoBreakWrapper, colorTag: '', childList: [e, t] });
                        }
                        return e.childList.length > 0 && n.push(e), n;
                    },
                    cu = (u, e = {}, n) => {
                        if (!u) return [];
                        const t = ((u) => {
                            const e = [];
                            let n = !1;
                            return (
                                u.forEach((u) => {
                                    u.blockType === q.NoBreakSymbol
                                        ? ((n = !0), e.push(...su(e.pop(), u)))
                                        : (n ? e.push(...su(e.pop(), u)) : e.push(u), (n = !1));
                                }),
                                e
                            );
                        })(
                            ((u, e, n) => {
                                const t = [];
                                return (
                                    tu(
                                        u,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})(\s*)/g,
                                        (u) => {
                                            t.push(...iu(u, e, '', n));
                                        },
                                        (u) => {
                                            t.push(...iu(u[2] + u[3], e, u[1], n));
                                        },
                                    ),
                                    t
                                );
                            })(((r = u), r.replace(/&nbsp;/g, ' ')).replace(/&zwnbsp;/g, '\ufeff'), e, n),
                        );
                        var r;
                        return ((u) => {
                            const e = [];
                            return (
                                u.forEach((u, n) => {
                                    e.push(
                                        ...((u, e) => {
                                            const n = [],
                                                t = u.blockType,
                                                r = eu[t],
                                                a = nu(u, r, e);
                                            return (
                                                t === q.NoBreakWrapper
                                                    ? n.push(r({ elementList: a, textBlock: u, key: `${e}` }))
                                                    : n.push(...a),
                                                n
                                            );
                                        })(u, n),
                                    );
                                }),
                                e
                            );
                        })(t);
                    },
                    lu = (u, e) => !u || u.offsetTop + u.offsetHeight > e,
                    Eu = (u, e) => u.offsetLeft + u.offsetWidth - e,
                    Au = (u, e, n) => {
                        if (!u || !u.textContent) return [!1, 0];
                        if (u.offsetLeft > e) return [!1, 0];
                        const t = Eu(u, e),
                            r = u.textContent.length,
                            a = u.offsetWidth / r,
                            o = Math.ceil(t / a);
                        if (t > 0) {
                            const t = Math.floor((e - u.offsetLeft) / a);
                            return t >= n ? [!0, n + o] : [!1, t];
                        }
                        const i = Math.max(n + o, 0);
                        return r < i ? [!1, 0] : [!0, i];
                    },
                    Fu = (u, e, n, t, a, o) => {
                        let i = -1,
                            s = null;
                        for (let c = n; c >= 0; c--) {
                            const n = u[c],
                                l = Number(u[c].getAttribute('data-block-type'));
                            if (l === q.LineBreak || l === q.NewLine || l === q.Binding) continue;
                            const E = n.textContent || '';
                            if (!(n.childElementCount > 1)) {
                                const u = Au(n, t, a),
                                    l = u[0],
                                    A = u[1];
                                if (!l) {
                                    A > 0 && (a -= A);
                                    continue;
                                }
                                const F = E.slice(0, E.length - A) + o,
                                    d = e[c];
                                (s = r().cloneElement(d, d.props, F)), (i = c);
                                break;
                            }
                            {
                                const u = n.children,
                                    l = e[c],
                                    A = l.props.children,
                                    F = Fu(u, A, u.length - 1, t, a, o),
                                    d = F[0],
                                    _ = F[1];
                                if (!(d < 0)) {
                                    const u = A.slice(0, d);
                                    (s = r().cloneElement(l, l.props, u, _)), (i = c);
                                    break;
                                }
                                a -= E.length;
                            }
                        }
                        return [i, s];
                    },
                    du = r().memo(
                        ({
                            text: u,
                            classMix: e,
                            onSizeChanged: n,
                            binding: a,
                            isTooltipEnable: o = !1,
                            isTruncationAvailable: i = !1,
                            customTooltipArgs: c,
                            targetId: l,
                            justifyContent: E = G.FlexStart,
                            alignContent: A = G.FlexStart,
                            truncateIdentify: F = '...',
                        }) => {
                            const d = (0, t.useRef)(null),
                                _ = (0, t.useRef)({ height: 0, width: 0 }),
                                B = (0, t.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                D = B[0],
                                m = B[1],
                                C = (0, t.useMemo)(() => cu(u, a, { justifyContent: E }), [a, E, u]),
                                p = (0, t.useMemo)(() => {
                                    if (
                                        o &&
                                        D.isTruncated &&
                                        (!a || !Object.values(a).find((u) => 'object' == typeof u))
                                    )
                                        return {
                                            args: Object.assign({ text: u }, c, {
                                                stringifyKwargs: a ? JSON.stringify(a) : '',
                                            }),
                                            contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                            targetId: l,
                                        };
                                }, [a, o, l, u, c, D.isTruncated]),
                                h = (0, t.useCallback)(
                                    (u) => {
                                        (_.current.width = u.contentRect.width),
                                            (_.current.height = u.contentRect.height);
                                        const e = ((u, e, n, t = '...') => {
                                                const r = [...e],
                                                    a = u.current;
                                                if (!a) return [r, !1];
                                                const o = n.height,
                                                    i = n.width,
                                                    s = a.lastElementChild;
                                                if (!lu(s, o) && Eu(s, i) <= 0) return [r, !1];
                                                const c = a.children,
                                                    l = ((u, e) => {
                                                        let n = 0,
                                                            t = u.length - 1;
                                                        for (; t - n >= 0; ) {
                                                            const r = n + Math.ceil(0.5 * (t - n));
                                                            lu(u[r], e) ? (t = r - 1) : (n = r + 1);
                                                        }
                                                        return n - 1;
                                                    })(c, o);
                                                if (l < 0) return [r, !1];
                                                const E = Fu(c, r, l, i, t.length, t),
                                                    A = E[0],
                                                    F = E[1];
                                                return F && (r.splice(A, 1, F), r.splice(A + 1)), [r, !0];
                                            })(d, C, _.current, F),
                                            t = e[0],
                                            r = e[1];
                                        m({ elementList: t, isTruncated: r, isTruncateFinished: !0 }), n && n(r);
                                    },
                                    [n, F, C],
                                ),
                                v = (0, t.useMemo)(() => ({ justifyContent: E, alignContent: A }), [A, E]);
                            return (
                                ((u, e, n = !0) => {
                                    const r = (0, t.useCallback)(
                                        (u) => {
                                            const n = u[0];
                                            e && e(n);
                                        },
                                        [e],
                                    );
                                    (0, t.useEffect)(() => {
                                        if (!u.current || !n) return;
                                        const e = new H.Z((u) => r(u));
                                        return (
                                            e.observe(u.current),
                                            () => {
                                                e.disconnect();
                                            }
                                        );
                                    }, [r, n, u]);
                                })(d, h, i),
                                r().createElement(
                                    'div',
                                    {
                                        className: s()(
                                            z.base,
                                            e,
                                            z.base__zeroPadding,
                                            i && z.base__isTruncationAvailable,
                                        ),
                                        style: v,
                                    },
                                    r().createElement('div', { className: z.unTruncated, ref: d }, C),
                                    r().createElement(
                                        W,
                                        {
                                            tooltipArgs: p,
                                            className: s()(
                                                z.tooltip,
                                                z[`tooltip__justify-${E}`],
                                                z[`tooltip__align-${A}`],
                                            ),
                                        },
                                        r().createElement(
                                            'div',
                                            {
                                                className: s()(
                                                    z.truncated,
                                                    !D.isTruncateFinished && i && z.truncated__hide,
                                                ),
                                                style: v,
                                            },
                                            D.isTruncateFinished && i ? D.elementList : C,
                                        ),
                                    ),
                                )
                            );
                        },
                    );
                let _u;
                !(function (u) {
                    (u.LowRisk = 'lowRisk'), (u.MediumRisk = 'mediumRisk'), (u.HighRisk = 'highRisk');
                })(_u || (_u = {}));
                var Bu = n(3403),
                    Du = n(7030),
                    mu = n(9174);
                function Cu(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var n = 0, t = Array(e); n < e; n++) t[n] = u[n];
                    return t;
                }
                const pu = (u) => (0 === u ? window : window.subViews.get(u)),
                    hu = ((u, e) => {
                        const n = (0, t.createContext)({});
                        return [
                            function ({ mode: u = 'real', options: a, children: o, mocks: i }) {
                                const s = (0, t.useRef)([]),
                                    c = (u, n, t) => {
                                        var r;
                                        const a = (function ({
                                                initializer: u = !0,
                                                rootId: e = 0,
                                                getRoot: n = pu,
                                                context: t = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function a(u, e = 0) {
                                                    viewEnv.removeDataChangedCallback(u, e)
                                                        ? r.delete(u)
                                                        : console.error("Can't remove callback by id:", u);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (u, e, n) => {
                                                        n.forEach((e) => {
                                                            const n = r.get(e);
                                                            void 0 !== n && n(u);
                                                        });
                                                    });
                                                });
                                                const o = (u) => {
                                                    const r = n(e),
                                                        a = t.split('.').reduce((u, e) => u[e], r);
                                                    return 'string' != typeof u || 0 === u.length
                                                        ? a
                                                        : u.split('.').reduce((u, e) => {
                                                              const n = u[e];
                                                              return 'function' == typeof n ? n.bind(u) : n;
                                                          }, a);
                                                };
                                                return {
                                                    subscribe: (n, a) => {
                                                        const i = 'string' == typeof a ? `${t}.${a}` : t,
                                                            s = b.O.view.addModelObserver(i, e, !0);
                                                        return r.set(s, n), u && n(o(a)), s;
                                                    },
                                                    readByPath: o,
                                                    createCallback: (u, e) => {
                                                        const n = o(e);
                                                        return (...e) => {
                                                            n(u(...e));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (u) => {
                                                        const e = o(u);
                                                        return () => {
                                                            e();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (
                                                            var u,
                                                                n = (function (u, e) {
                                                                    var n =
                                                                        ('undefined' != typeof Symbol &&
                                                                            u[Symbol.iterator]) ||
                                                                        u['@@iterator'];
                                                                    if (n) return (n = n.call(u)).next.bind(n);
                                                                    if (
                                                                        Array.isArray(u) ||
                                                                        (n = (function (u, e) {
                                                                            if (u) {
                                                                                if ('string' == typeof u)
                                                                                    return Cu(u, e);
                                                                                var n = {}.toString
                                                                                    .call(u)
                                                                                    .slice(8, -1);
                                                                                return (
                                                                                    'Object' === n &&
                                                                                        u.constructor &&
                                                                                        (n = u.constructor.name),
                                                                                    'Map' === n || 'Set' === n
                                                                                        ? Array.from(u)
                                                                                        : 'Arguments' === n ||
                                                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                                n,
                                                                                            )
                                                                                          ? Cu(u, e)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(u)) ||
                                                                        (e && u && 'number' == typeof u.length)
                                                                    ) {
                                                                        n && (u = n);
                                                                        var t = 0;
                                                                        return function () {
                                                                            return t >= u.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: u[t++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(r.keys());
                                                            !(u = n()).done;

                                                        )
                                                            a(u.value, e);
                                                    },
                                                    unsubscribe: a,
                                                };
                                            })(n),
                                            o =
                                                'real' === u
                                                    ? a
                                                    : Object.assign({}, a, {
                                                          readByPath:
                                                              null != (r = null == t ? void 0 : t.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            i = (e) =>
                                                'mocks' === u ? (null == t ? void 0 : t.getter(e)) : o.readByPath(e),
                                            c = (u) => s.current.push(u),
                                            l = (({ observableModel: u }) => ({ root: u.object() }))({
                                                mode: u,
                                                readByPath: i,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (e, n) => {
                                                        const t = null != n ? n : i(e),
                                                            r = mu.LO.box(t, { equals: y });
                                                        return (
                                                            'real' === u &&
                                                                o.subscribe(
                                                                    (0, mu.aD)((u) => r.set(u)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (e, n) => {
                                                        const t = null != n ? n : i(e),
                                                            r = mu.LO.box(t, { equals: y });
                                                        return (
                                                            'real' === u &&
                                                                o.subscribe(
                                                                    (0, mu.aD)((u) => r.set(u)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (e, n) => {
                                                        const t = i(n);
                                                        if (Array.isArray(e)) {
                                                            const r = e.reduce(
                                                                (u, e) => ((u[e] = mu.LO.box(t[e], {})), u),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === u &&
                                                                    o.subscribe(
                                                                        (0, mu.aD)((u) => {
                                                                            e.forEach((e) => {
                                                                                r[e].set(u[e]);
                                                                            });
                                                                        }),
                                                                        n,
                                                                    ),
                                                                r
                                                            );
                                                        }
                                                        {
                                                            const r = e,
                                                                a = Object.entries(r),
                                                                i = a.reduce(
                                                                    (u, [e, n]) => ((u[n] = mu.LO.box(t[e], {})), u),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === u &&
                                                                    o.subscribe(
                                                                        (0, mu.aD)((u) => {
                                                                            a.forEach(([e, n]) => {
                                                                                i[n].set(u[e]);
                                                                            });
                                                                        }),
                                                                        n,
                                                                    ),
                                                                i
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: c,
                                            }),
                                            E = { mode: u, model: l, externalModel: o, cleanup: c };
                                        return {
                                            model: l,
                                            controls: 'mocks' === u && t ? t.controls(E) : e(E),
                                            externalModel: o,
                                            mode: u,
                                        };
                                    },
                                    l = (0, t.useRef)(!1),
                                    E = (0, t.useState)(u),
                                    A = E[0],
                                    F = E[1],
                                    d = (0, t.useState)(() => c(u, a, i)),
                                    _ = d[0],
                                    B = d[1];
                                return (
                                    (0, t.useEffect)(() => {
                                        l.current ? B(c(A, a, i)) : (l.current = !0);
                                    }, [i, A, a]),
                                    (0, t.useEffect)(() => {
                                        F(u);
                                    }, [u]),
                                    (0, t.useEffect)(
                                        () => () => {
                                            _.externalModel.dispose(), s.current.forEach((u) => u());
                                        },
                                        [_],
                                    ),
                                    r().createElement(n.Provider, { value: _ }, o)
                                );
                            },
                            () => (0, t.useContext)(n),
                        ];
                    })(0, ({ externalModel: u }) => ({ openEventHangar: u.createCallbackNoArgs('onClick') })),
                    vu = hu[0],
                    fu = hu[1];
                var bu = n(8613);
                const gu = 1e3,
                    wu = 60,
                    yu = 3600,
                    Tu = 86400;
                function ku(u = 0) {
                    let e = u;
                    const n = Math.trunc(e / Tu);
                    e -= n * Tu;
                    const t = Math.trunc(e / yu);
                    e -= t * yu;
                    const r = Math.trunc(e / wu);
                    return (e -= r * wu), { days: n, hours: t, minutes: r, seconds: e };
                }
                Date.now(), bu.Ew.getRegionalDateTime, bu.Ew.getFormattedDateTime;
                const xu = (u, e = !0) =>
                        u.days > 7 && e
                            ? U(R.strings.common.duration.days(), { days: u.days })
                            : u.days >= 1
                              ? 0 === u.hours
                                  ? U(R.strings.common.duration.days(), { days: u.days })
                                  : `${U(R.strings.common.duration.days(), { days: u.days })} ${U(R.strings.common.duration.hours(), { hours: u.hours })}`
                              : u.hours >= 1
                                ? 0 === u.minutes
                                    ? U(R.strings.common.duration.hours(), { hours: u.hours })
                                    : `${U(R.strings.common.duration.hours(), { hours: u.hours })} ${U(R.strings.common.duration.minutes(), { minutes: u.minutes })}`
                                : U(R.strings.common.duration.minutes(), { minutes: u.minutes || 1 }),
                    Ou = () => {};
                let Su;
                C.Sw.instance,
                    (function (u) {
                        (u.None = 'None'), (u.Shallow = 'Shallow'), (u.Deep = 'Deep');
                    })(Su || (Su = {})),
                    C.Sw.instance;
                const Ru = (u = 0, e, n = 0, r = Ou) => {
                        const a = (0, t.useState)(u),
                            o = a[0],
                            i = a[1];
                        return (
                            (0, t.useEffect)(() => {
                                if (u > 0) {
                                    i(u);
                                    const t = Date.now(),
                                        a = setInterval(
                                            () => {
                                                const e = u - Math.floor((Date.now() - t) / gu);
                                                null !== n && e <= n ? (i(n), r && r(), clearInterval(a)) : i(e);
                                            },
                                            (e || (u > 120 ? wu : 1)) * gu,
                                        );
                                    return () => {
                                        clearInterval(a);
                                    };
                                }
                            }, [u, e, n, r]),
                            o
                        );
                    },
                    Lu = {
                        base: 'BannerTime_base_16',
                        time: 'BannerTime_time_90',
                        base__big: 'BannerTime_base__big_81',
                        base__wideSmall: 'BannerTime_base__wideSmall_61',
                        base__thinSmall: 'BannerTime_base__thinSmall_6d',
                        base__thinExtraSmall: 'BannerTime_base__thinExtraSmall_8f',
                        timerIcon: 'BannerTime_timerIcon_4c',
                        container: 'BannerTime_container_93',
                    },
                    Nu = R.strings.halloween_lobby.banner,
                    Pu = (0, t.memo)(function ({ date: u, endDate: e, size: n }) {
                        const t = Ru(Math.max(0, e - u), 1),
                            a = t < Tu,
                            o = t < 300,
                            i = t < 300 ? 300 : t,
                            c = new Date(e * gu);
                        return r().createElement(
                            'div',
                            { className: s()(Lu.base, Lu[`base__${n}`]) },
                            r().createElement(
                                'div',
                                { className: s()(Lu.container, a && Lu.container__countdown) },
                                r().createElement(du, {
                                    classMix: Lu.time,
                                    text: a
                                        ? o
                                            ? Nu.countdownText.last()
                                            : Nu.countdownText.regular()
                                        : Nu.dateText(),
                                    binding: a
                                        ? {
                                              icon: r().createElement('div', { className: Lu.timerIcon }),
                                              timer: xu(ku(i)),
                                          }
                                        : {
                                              day: `${c.getDate()}`,
                                              month: `${R.strings.menu.dateTime.months.$num(c.getMonth() + 1)}`,
                                          },
                                    justifyContent: G.Center,
                                }),
                            ),
                        );
                    }),
                    Mu = {
                        base: 'EventBannerViewApp_base_da',
                        banner: 'EventBannerViewApp_banner_a1',
                        banner__big: 'EventBannerViewApp_banner__big_2e',
                        banner__wideSmall: 'EventBannerViewApp_banner__wideSmall_ed',
                        banner__thinSmall: 'EventBannerViewApp_banner__thinSmall_cf',
                        banner__thinExtraSmall: 'EventBannerViewApp_banner__thinExtraSmall_bf',
                        hoverArea: 'EventBannerViewApp_hoverArea_b8',
                        bg: 'EventBannerViewApp_bg_e4',
                        hoverBg: 'EventBannerViewApp_hoverBg_cf',
                        container: 'EventBannerViewApp_container_7f',
                        header: 'EventBannerViewApp_header_8c',
                        subheader: 'EventBannerViewApp_subheader_6e',
                        new: 'EventBannerViewApp_new_87',
                        performanceIcon: 'EventBannerViewApp_performanceIcon_5c',
                        banner__mediumRisk: 'EventBannerViewApp_banner__mediumRisk_4b',
                        banner__highRisk: 'EventBannerViewApp_banner__highRisk_1e',
                        shape: 'EventBannerViewApp_shape_e8',
                        tank: 'EventBannerViewApp_tank_13',
                        animWave: 'EventBannerViewApp_animWave_71',
                        tankSequence: 'EventBannerViewApp_tankSequence_7a',
                        videoHover: 'EventBannerViewApp_videoHover_86',
                        video: 'EventBannerViewApp_video_8b',
                        videoHover__static: 'EventBannerViewApp_videoHover__static_89',
                        video__static: 'EventBannerViewApp_video__static_48',
                        animNoiseContainer: 'EventBannerViewApp_animNoiseContainer_6c',
                        noise: 'EventBannerViewApp_noise_03',
                        noiseBar: 'EventBannerViewApp_noiseBar_05',
                        noiseBarsMove: 'EventBannerViewApp_noiseBarsMove_40',
                        noise__delay: 'EventBannerViewApp_noise__delay_ba',
                        noiseBar__delay: 'EventBannerViewApp_noiseBar__delay_f2',
                        animNoiseBrightness: 'EventBannerViewApp_animNoiseBrightness_68',
                        stepAnimContainer: 'EventBannerViewApp_stepAnimContainer_5d',
                        stepAnimContainer__noiseScreen: 'EventBannerViewApp_stepAnimContainer__noiseScreen_3c',
                        stepMoveScreen: 'EventBannerViewApp_stepMoveScreen_93',
                        stepAnimContainer__noiseBar: 'EventBannerViewApp_stepAnimContainer__noiseBar_f0',
                        stepMoveBars: 'EventBannerViewApp_stepMoveBars_a2',
                    },
                    Iu = (u) => 1 + --u * u * u * u * u,
                    Vu = R.images.halloween.gui.maps.icons.eventBanner,
                    ju = R.strings.halloween_lobby.banner,
                    Wu = {
                        width: 164,
                        height: 96,
                        frameCount: 36,
                        chunk: { count: 1, rows: 3, columns: 12 },
                        getChunkPath: (u) => `R.images.halloween.gui.maps.icons.eventBanner.sequences.tank_${u}`,
                    };
                const Hu = (function (u) {
                    const e = u.chunk,
                        n = e.rows * e.columns;
                    return (t) => {
                        const r = t % n,
                            a = (r % e.columns) * u.width,
                            o = Math.trunc(r / e.columns) * u.height;
                        return { path: u.getChunkPath(Math.trunc(t / n)), x: a, y: o };
                    };
                })(Wu);
                let zu;
                !(function (u) {
                    (u.Big = 'big'),
                        (u.WideSmall = 'wideSmall'),
                        (u.ThinSmall = 'thinSmall'),
                        (u.ThinExtraSmall = 'thinExtraSmall');
                })(zu || (zu = {}));
                const Ku = '302*152',
                    Uu = '302*114',
                    qu = '222*114',
                    Gu = '162*114',
                    $u = { [Ku]: zu.Big, [Uu]: zu.WideSmall, [qu]: zu.ThinSmall, [Gu]: zu.ThinExtraSmall },
                    Yu = (0, Bu.Pi)(() => {
                        const u = fu(),
                            e = u.model,
                            n = u.controls,
                            a = e.root.get(),
                            o = a.isNew,
                            i = a.performanceRisk,
                            c = a.date,
                            l = a.endDate,
                            A = (0, t.useState)(zu.Big),
                            F = A[0],
                            d = A[1],
                            _ = (0, t.useState)(!1),
                            B = _[0],
                            D = _[1],
                            C = (0, t.useRef)(null),
                            p = (0, t.useRef)(null),
                            h = (0, Du.useSpring)({
                                from: { x: 50, opacity: 0 },
                                to: { x: 0, opacity: 1 },
                                delay: 500,
                                config: { duration: 1500, easing: Iu },
                            });
                        return (
                            (0, t.useEffect)(() => {
                                const u = C.current,
                                    e = p.current;
                                u && e && (B ? e.play() : (u.play(), e.pause()));
                            }, [B, C, p]),
                            (0, t.useEffect)(() => {
                                const u = () => {
                                    const u = b.O.view.getSize('rem'),
                                        e = $u[`${u.width}*${u.height}`];
                                    e && d(e);
                                };
                                return (
                                    b.O.client.events.on('screenResized', u),
                                    b.O.client.events.on('self.onScaleUpdated', u),
                                    u(),
                                    () => {
                                        b.O.client.events.off('screenResized', u),
                                            b.O.client.events.off('self.onScaleUpdated', u);
                                    }
                                );
                            }, []),
                            r().createElement(
                                'div',
                                { className: Mu.base },
                                r().createElement(
                                    f,
                                    { contentId: R.views.halloween.lobby.tooltips.EventBannerTooltip('resId') },
                                    r().createElement(
                                        Du.animated.div,
                                        {
                                            className: s()(Mu.banner, Mu[`banner__${F}`], Mu[`banner__${i}`]),
                                            onClick: () => {
                                                b.O.sound.play.click(), n.openEventHangar();
                                            },
                                            onMouseEnter: () => {
                                                b.O.sound.play.highlight(), D(!0);
                                            },
                                            onMouseLeave: () => D(!1),
                                            style: h,
                                        },
                                        r().createElement('div', {
                                            className: Mu.bg,
                                            style: { backgroundImage: `url(${Vu.bg.$dyn(`size_${F}`)})` },
                                        }),
                                        r().createElement('div', { className: Mu.hoverArea }),
                                        r().createElement(
                                            'div',
                                            { className: Mu.tank },
                                            r().createElement(E, {
                                                width: Wu.width,
                                                height: Wu.height,
                                                frameCount: Wu.frameCount,
                                                getImageSource: Hu,
                                                frameTime: 126,
                                                className: Mu.tankSequence,
                                            }),
                                        ),
                                        b.O.client.graphicsQuality.isLow()
                                            ? r().createElement('div', { className: s()(Mu.video, Mu.video__static) })
                                            : r().createElement(O, {
                                                  ref: C,
                                                  src: R.videos.halloween.banner_loop(),
                                                  className: Mu.video,
                                                  loop: !0,
                                                  autoplay: !0,
                                              }),
                                        b.O.client.graphicsQuality.isLow()
                                            ? r().createElement('div', {
                                                  className: s()(Mu.videoHover, Mu.videoHover__static),
                                              })
                                            : r().createElement(O, {
                                                  ref: p,
                                                  src: R.videos.halloween.banner_hover(),
                                                  className: Mu.videoHover,
                                                  loop: !0,
                                                  autoplay: !0,
                                              }),
                                        r().createElement('div', {
                                            className: Mu.hoverBg,
                                            style: { backgroundImage: `url(${Vu.hover.$dyn(`size_${F}_hover`)})` },
                                        }),
                                        r().createElement(
                                            'div',
                                            { className: Mu.animNoiseContainer },
                                            r().createElement(
                                                'div',
                                                { className: Mu.noise },
                                                r().createElement('div', {
                                                    className: s()(
                                                        Mu.stepAnimContainer,
                                                        Mu.stepAnimContainer__noiseScreen,
                                                    ),
                                                }),
                                            ),
                                            r().createElement(
                                                'div',
                                                { className: Mu.noiseBar },
                                                r().createElement('div', {
                                                    className: s()(
                                                        Mu.stepAnimContainer,
                                                        Mu.stepAnimContainer__noiseBar,
                                                    ),
                                                }),
                                            ),
                                            r().createElement(
                                                'div',
                                                { className: s()(Mu.noiseBar, Mu.noiseBar__delay) },
                                                r().createElement('div', {
                                                    className: s()(
                                                        Mu.stepAnimContainer,
                                                        Mu.stepAnimContainer__noiseBar,
                                                    ),
                                                }),
                                            ),
                                        ),
                                        r().createElement('div', { className: Mu.shape }),
                                        r().createElement(
                                            'div',
                                            { className: Mu.container },
                                            r().createElement(du, {
                                                text: ju.header(),
                                                justifyContent: G.Center,
                                                classMix: Mu.header,
                                                isTruncationAvailable: !0,
                                            }),
                                            r().createElement(du, {
                                                text: ju.subheader(),
                                                justifyContent: G.Center,
                                                classMix: Mu.subheader,
                                                isTruncationAvailable: !0,
                                            }),
                                        ),
                                        r().createElement(Pu, { date: c, endDate: l, size: F }),
                                        r().createElement(
                                            'div',
                                            { className: Mu.new },
                                            o && r().createElement(m, { size: 'small', value: ju.new() }),
                                        ),
                                        i !== _u.LowRisk &&
                                            !o &&
                                            r().createElement('div', { className: Mu.performanceIcon }),
                                    ),
                                ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    o().render(
                        r().createElement(vu, null, r().createElement(Yu, null)),
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
        var n = (__webpack_module_cache__[u] = { exports: {} });
        return __webpack_modules__[u](n, n.exports, __webpack_require__), n.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (u, e, n, t) => {
            if (!e) {
                var r = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [e, n, t] = deferred[s], a = !0, o = 0; o < e.length; o++)
                        (!1 & t || r >= t) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[o]))
                            ? e.splice(o--, 1)
                            : ((a = !1), t < r && (r = t));
                    if (a) {
                        deferred.splice(s--, 1);
                        var i = n();
                        void 0 !== i && (u = i);
                    }
                }
                return u;
            }
            t = t || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > t; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [e, n, t];
        }),
        (__webpack_require__.n = (u) => {
            var e = u && u.__esModule ? () => u.default : () => u;
            return __webpack_require__.d(e, { a: e }), e;
        }),
        (__webpack_require__.d = (u, e) => {
            for (var n in e)
                __webpack_require__.o(e, n) &&
                    !__webpack_require__.o(u, n) &&
                    Object.defineProperty(u, n, { enumerable: !0, get: e[n] });
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
        (__webpack_require__.j = 734),
        (() => {
            var u = { 734: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, n) => {
                    var t,
                        r,
                        [a, o, i] = n,
                        s = 0;
                    if (a.some((e) => 0 !== u[e])) {
                        for (t in o) __webpack_require__.o(o, t) && (__webpack_require__.m[t] = o[t]);
                        if (i) var c = i(__webpack_require__);
                    }
                    for (e && e(n); s < a.length; s++)
                        (r = a[s]), __webpack_require__.o(u, r) && u[r] && u[r][0](), (u[r] = 0);
                    return __webpack_require__.O(c);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(3166));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
