(() => {
    'use strict';
    var __webpack_modules__ = {
            527: (u, e, t) => {
                t.r(e),
                    t.d(e, { mouse: () => c, off: () => a, on: () => i, onResize: () => o, onScaleUpdated: () => s });
                var n = t(2472),
                    r = t(1176);
                const o = (0, n.E)('clientResized'),
                    s = (0, n.E)('self.onScaleUpdated'),
                    i = (u, e) => engine.on(u, e),
                    a = (u, e) => engine.off(u, e),
                    E = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') },
                    c = (function () {
                        const u = { listeners: 0, enabled: !0, initialized: !1 };
                        function e() {
                            u.enabled && (0, r.R)(!1);
                        }
                        function t() {
                            u.enabled && (0, r.R)(!0);
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
                                : (0, r.R)(!1);
                        }
                        const o = ['down', 'up', 'move'].reduce(
                            (e, t) => (
                                (e[t] = (function (e) {
                                    return (t) => {
                                        u.listeners += 1;
                                        let r = !0;
                                        const o = `mouse${e}`,
                                            s = E[e]((u) => t([u, 'outside']));
                                        function i(u) {
                                            t([u, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(o, i),
                                            n(),
                                            () => {
                                                r &&
                                                    (s(),
                                                    window.removeEventListener(o, i),
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
                        return Object.assign({}, o, {
                            disable() {
                                (u.enabled = !1), n();
                            },
                            enable() {
                                (u.enabled = !0), n();
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
            5959: (u, e, t) => {
                t.r(e),
                    t.d(e, {
                        events: () => n,
                        getMouseGlobalPosition: () => s,
                        getSize: () => o,
                        graphicsQuality: () => i,
                        playSound: () => r.G,
                        setRTPC: () => r.E,
                    });
                var n = t(527),
                    r = t(2493);
                function o(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function s(u = 'px') {
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
            2493: (u, e, t) => {
                function n(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error(`playSound('${u}'): `, e);
                    });
                }
                function r(u, e) {
                    engine.call('SetRTPCGlobal', u, e).catch((t) => {
                        console.error(`setRTPC('${u}', '${e}'): `, t);
                    });
                }
                t.d(e, { E: () => r, G: () => n });
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
                t.d(e, { O: () => o });
                var n = t(5959),
                    r = t(514);
                const o = { view: t(7641), client: n, sound: r.ZP };
            },
            514: (u, e, t) => {
                t.d(e, { ZP: () => s });
                var n = t(5959);
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    o = Object.keys(r).reduce((u, e) => ((u[e] = () => (0, n.playSound)(r[e])), u), {}),
                    s = { play: Object.assign({}, o, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            3722: (u, e, t) => {
                function n(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function r(u, e, t) {
                    return `url(${n(u, e, t)})`;
                }
                t.r(e), t.d(e, { getBgUrl: () => r, getTextureUrl: () => n });
            },
            6112: (u, e, t) => {
                t.d(e, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (u, e, t) => {
                t.d(e, { U: () => r });
                var n = t(2472);
                const r = {
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
                        addModelObserver: () => c,
                        addPreloadTexture: () => i,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => w,
                        events: () => o.U,
                        extraSize: () => f,
                        forceTriggerMouseMove: () => b,
                        freezeTextureBeforeResize: () => _,
                        getBrowserTexturePath: () => E,
                        getDisplayStatus: () => v,
                        getScale: () => D,
                        getSize: () => A,
                        getViewGlobalPosition: () => d,
                        isEventHandled: () => h,
                        isFocused: () => p,
                        pxToRem: () => B,
                        remToPx: () => m,
                        resize: () => F,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => C,
                        setEventHandled: () => g,
                        setInputPaddingsRem: () => a,
                        setSidePaddingsRem: () => l,
                        whenTutorialReady: () => T,
                    });
                var n = t(3722),
                    r = t(6112),
                    o = t(6538),
                    s = t(8566);
                function i(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function a(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, 15);
                }
                function E(u, e, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, n);
                }
                function c(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function l(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, 15);
                }
                function A(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function F(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function d(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: m(e.x), y: m(e.y) };
                }
                function _() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function D() {
                    return viewEnv.getScale();
                }
                function B(u) {
                    return viewEnv.pxToRem(u);
                }
                function m(u) {
                    return viewEnv.remToPx(u);
                }
                function C(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function p() {
                    return viewEnv.isFocused();
                }
                function g() {
                    return viewEnv.setEventHandled();
                }
                function h() {
                    return viewEnv.isEventHandled();
                }
                function b() {
                    viewEnv.forceTriggerMouseMove();
                }
                function v() {
                    return viewEnv.getShowingStatus();
                }
                const w = Object.keys(r.W).reduce(
                        (u, e) => ((u[e] = () => viewEnv.getShowingStatus() === r.W[e]), u),
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
                    T = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : o.U.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (u, e, t) => {
                t.d(e, { qP: () => o });
                const n = ['args'],
                    r = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const o = e.args,
                                s = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        n,
                                        r = {},
                                        o = Object.keys(u);
                                    for (n = 0; n < o.length; n++) (t = o[n]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                    return r;
                                })(e, n);
                            return void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, s, {
                                          arguments:
                                              ((r = o),
                                              Object.entries(r).map(([u, e]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: u });
                        var r;
                    },
                    o = {
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
            5521: (u, e, t) => {
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
                    })(r || (r = {}));
            },
            1358: (u, e, t) => {
                t.d(e, { Z: () => o });
                var n = t(3138);
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
                        const o = n.O.view.addModelObserver(u, t, r);
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
                r.__instance = void 0;
                const o = r;
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
                t.d(e, { Sw: () => o.Z, B3: () => E, Z5: () => s.Z5, B0: () => i, ry: () => m });
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
                var o = t(1358),
                    s = t(8613);
                let i;
                var a;
                ((a = i || (i = {}))[(a.UNDEFINED = 0)] = 'UNDEFINED'),
                    (a[(a.TOOLTIP = 1)] = 'TOOLTIP'),
                    (a[(a.POP_OVER = 2)] = 'POP_OVER'),
                    (a[(a.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (a[(a.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (a[(a.MOVE = 16)] = 'MOVE'),
                    (a[(a.CLOSE = 32)] = 'CLOSE'),
                    (a[(a.MINIMIZE = 64)] = 'MINIMIZE');
                const E = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    l = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    A = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var F = t(5521),
                    d = t(3138);
                const _ = ['args'];
                function D(u, e, t, n, r, o, s) {
                    try {
                        var i = u[o](s),
                            a = i.value;
                    } catch (u) {
                        return void t(u);
                    }
                    i.done ? e(a) : Promise.resolve(a).then(n, r);
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
                                    return new Promise(function (n, r) {
                                        var o = u.apply(e, t);
                                        function s(u) {
                                            D(o, n, r, s, i, 'next', u);
                                        }
                                        function i(u) {
                                            D(o, n, r, s, i, 'throw', u);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    C = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const r = e.args,
                                o = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        n,
                                        r = {},
                                        o = Object.keys(u);
                                    for (n = 0; n < o.length; n++) (t = o[n]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                    return r;
                                })(e, _);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, o, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, o));
                        } else viewEnv.handleViewEvent({ __Type: t, type: u });
                        var n;
                    },
                    p = () => C(i.CLOSE),
                    g = (u, e) => {
                        u.keyCode === F.n.ESCAPE && e();
                    };
                var h = t(7572);
                const b = r.instance,
                    v = {
                        DataTracker: o.Z,
                        ViewModel: h.Z,
                        ViewEventType: i,
                        NumberFormatType: E,
                        RealFormatType: c,
                        TimeFormatType: l,
                        DateFormatType: A,
                        makeGlobalBoundingBox: B,
                        sendMoveEvent: (u) => C(i.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: p,
                        sendClosePopOverEvent: () => C(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            C(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, n, r = R.invalid('resId'), o) => {
                            const s = d.O.view.getViewGlobalPosition(),
                                a = t.getBoundingClientRect(),
                                E = a.x,
                                c = a.y,
                                l = a.width,
                                A = a.height,
                                F = {
                                    x: d.O.view.pxToRem(E) + s.x,
                                    y: d.O.view.pxToRem(c) + s.y,
                                    width: d.O.view.pxToRem(l),
                                    height: d.O.view.pxToRem(A),
                                };
                            C(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
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
                            g(u, p);
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
                        ClickOutsideManager: b,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = v;
            },
            8613: (u, e, t) => {
                t.d(e, { Ew: () => o, Z5: () => n, cy: () => r });
                const n = {
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
                    },
                    o = {
                        getRegionalDateTime: (u, e, t = !0) => regionalDateTime.getRegionalDateTime(u, e, t),
                        getFormattedDateTime: (u, e, t = !0) => regionalDateTime.getFormattedDateTime(u, e, t),
                    };
            },
            3760: (u, e, t) => {
                var n = t(6483),
                    r = t.n(n),
                    o = t(3138),
                    s = t(6179),
                    i = t.n(s);
                const a = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    E = ['children', 'className', 'theme'];
                function c() {
                    return (
                        (c =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        c.apply(this, arguments)
                    );
                }
                const l = i().forwardRef(function (u, e) {
                    let t = u.children,
                        n = u.className,
                        l = u.theme,
                        A = void 0 === l ? 'default' : l,
                        F = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                n,
                                r = {},
                                o = Object.keys(u);
                            for (n = 0; n < o.length; n++) (t = o[n]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                            return r;
                        })(u, E);
                    const d = (function () {
                            const u = (0, s.useRef)(0);
                            var e;
                            return (
                                (e = () => {
                                    window.cancelAnimationFrame(u.current);
                                }),
                                (0, s.useEffect)(() => e, []),
                                (0, s.useMemo)(
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
                        _ = i().useRef(null);
                    var D;
                    return (
                        (D = () => {
                            d.run(() => {
                                const u = _.current;
                                if (!u) return;
                                const e = u.scrollWidth,
                                    t = u.scrollHeight;
                                o.O.view.resize(e, t);
                                const n = window.getComputedStyle(u);
                                o.O.view.setSidePaddingsRem({
                                    left: parseInt(n.getPropertyValue('padding-left'), 10),
                                    top: parseInt(n.getPropertyValue('padding-top'), 10),
                                    right: parseInt(n.getPropertyValue('padding-right'), 10),
                                    bottom: parseInt(n.getPropertyValue('padding-bottom'), 10),
                                });
                            });
                        }),
                        (0, s.useEffect)(D, []),
                        i().createElement(
                            'div',
                            c({}, F, {
                                className: r()(a.base, a[`base__theme-${A}`], n),
                                ref: function (u) {
                                    (_.current = u), 'function' == typeof e ? e(u) : e && (e.current = u);
                                },
                            }),
                            i().createElement('div', { className: a.decorator }, t),
                        )
                    );
                });
                var A = t(493),
                    F = t.n(A);
                let d, _, D, B, m, C, p, g;
                function h(u, e) {
                    return u.replace(/\{\w+\}/g, (u) => String(e[u.slice(1, -1)]));
                }
                !(function (u) {
                    (u.Items = 'items'),
                        (u.Equipment = 'equipment'),
                        (u.Xp = 'xp'),
                        (u.XpFactor = 'xpFactor'),
                        (u.Blueprints = 'blueprints'),
                        (u.BlueprintsAny = 'blueprintsAny'),
                        (u.Goodies = 'goodies'),
                        (u.Berths = 'berths'),
                        (u.Slots = 'slots'),
                        (u.Tokens = 'tokens'),
                        (u.CrewSkins = 'crewSkins'),
                        (u.CrewBooks = 'crewBooks'),
                        (u.Customizations = 'customizations'),
                        (u.CreditsFactor = 'creditsFactor'),
                        (u.Tankman = 'tankman'),
                        (u.Tankwoman = 'tankwoman'),
                        (u.TankmenXp = 'tankmenXP'),
                        (u.TankmenXpFactor = 'tankmenXPFactor'),
                        (u.FreeXpFactor = 'freeXPFactor'),
                        (u.BattleToken = 'battleToken'),
                        (u.PremiumUniversal = 'premium_universal'),
                        (u.Gold = 'gold'),
                        (u.Credits = 'credits'),
                        (u.Crystal = 'crystal'),
                        (u.FreeXp = 'freeXP'),
                        (u.Premium = 'premium'),
                        (u.PremiumPlus = 'premium_plus'),
                        (u.BattlePassPoints = 'battlePassPoints'),
                        (u.BattlePassSelectToken = 'battlePassSelectToken'),
                        (u.StyleProgressToken = 'styleProgressToken'),
                        (u.TmanToken = 'tmanToken'),
                        (u.NaturalCover = 'naturalCover'),
                        (u.BpCoin = 'bpcoin'),
                        (u.BattlaPassFinalAchievement = 'dossier_achievement'),
                        (u.BattleBadge = 'dossier_badge'),
                        (u.NewYearInvoice = 'newYearInvoice'),
                        (u.NewYearSlot = 'newYearSlot'),
                        (u.BonusX5 = 'battle_bonus_x5'),
                        (u.CrewBonusX3 = 'crew_bonus_x3'),
                        (u.Vehicles = 'vehicles'),
                        (u.EpicSelectToken = 'epicSelectToken'),
                        (u.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                        (u.DeluxeGift = 'deluxe_gift'),
                        (u.BattleBoosterGift = 'battleBooster_gift'),
                        (u.OptionalDevice = 'optionalDevice'),
                        (u.EquipCoin = 'equipCoin');
                })(d || (d = {})),
                    (function (u) {
                        (u.Gold = 'gold'),
                            (u.Credits = 'credits'),
                            (u.Crystal = 'crystal'),
                            (u.Premium = 'premium'),
                            (u.PremiumPlus = 'premium_plus'),
                            (u.Vehicles = 'vehicles'),
                            (u.Customizations = 'customizations'),
                            (u.Blueprints = 'blueprints'),
                            (u.BlueprintsAny = 'blueprintsAny'),
                            (u.BlueprintsFinal = 'finalBlueprints'),
                            (u.Goodies = 'goodies'),
                            (u.CrewSkins = 'crewSkins'),
                            (u.Xp = 'xp'),
                            (u.XpFactor = 'xpFactor'),
                            (u.FreeXp = 'freeXP'),
                            (u.FreeXPFactor = 'freeXPFactor'),
                            (u.TankmenXP = 'tankmenXP'),
                            (u.TankmenXPFactor = 'tankmenXPFactor'),
                            (u.DailyXPFactor = 'dailyXPFactor'),
                            (u.CreditsFactor = 'creditsFactor'),
                            (u.Items = 'items'),
                            (u.StrBonus = 'strBonus'),
                            (u.Groups = 'groups'),
                            (u.Berths = 'berths'),
                            (u.Slots = 'slots'),
                            (u.Meta = 'meta'),
                            (u.Tokens = 'tokens'),
                            (u.Dossier = 'dossier'),
                            (u.OneOf = 'oneof'),
                            (u.PremiumUniversal = 'premium_universal'),
                            (u.BadgesGroup = 'badgesGroup'),
                            (u.Entitlements = 'entitlements'),
                            (u.RankedDailyBattles = 'rankedDailyBattles'),
                            (u.RankedBonusBattles = 'rankedBonusBattles'),
                            (u.BattlePassPoints = 'battlePassPoints'),
                            (u.BattleBadge = 'dossier_badge'),
                            (u.BattleAchievement = 'dossier_achievement'),
                            (u.EquipCoin = 'equipCoin');
                    })(_ || (_ = {})),
                    (function (u) {
                        (u.Big = 'big'),
                            (u.Small = 'small'),
                            (u.Mini = 'mini'),
                            (u.S600x450 = 's600x450'),
                            (u.S400x300 = 's400x300'),
                            (u.S296x222 = 's296x222'),
                            (u.S232x174 = 's232x174'),
                            (u.S180x135 = 's180x135'),
                            (u.S128x100 = 's128x100'),
                            (u.S80x80 = 's80x80'),
                            (u.S64x64 = 's64x64'),
                            (u.S48x48 = 's48x48');
                    })(D || (D = {})),
                    (function (u) {
                        (u.MULTI = 'multi'),
                            (u.CURRENCY = 'currency'),
                            (u.PREMIUM_PLUS = 'premium_plus'),
                            (u.NUMBER = 'number'),
                            (u.STRING = 'string');
                    })(B || (B = {})),
                    (function (u) {
                        (u.BATTLE_BOOSTER = 'battleBooster'),
                            (u.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (u.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (u.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (u.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (u.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (u.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (u.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                            (u.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
                            (u.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6');
                    })(m || (m = {})),
                    (function (u) {
                        u.BATTLE_BOOSTER = 'battleBooster';
                    })(C || (C = {})),
                    (function (u) {
                        (u.BATTLE_BOOSTER = 'battleBooster'),
                            (u.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (u.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (u.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (u.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (u.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (u.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (u.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                            (u.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
                            (u.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6');
                    })(p || (p = {})),
                    t(1281),
                    (function (u) {
                        (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
                    })(g || (g = {}));
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
                );
                var b = t(9916);
                const v = [
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
                function w(u) {
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
                const f = (u, e, t = {}, n = 0) => {
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
                    T = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            n = u.args,
                            r = u.onMouseEnter,
                            o = u.onMouseLeave,
                            i = u.onMouseDown,
                            a = u.onClick,
                            E = u.ignoreShowDelay,
                            c = void 0 !== E && E,
                            l = u.ignoreMouseClick,
                            A = void 0 !== l && l,
                            F = u.decoratorId,
                            d = void 0 === F ? 0 : F,
                            _ = u.isEnabled,
                            D = void 0 === _ || _,
                            B = u.targetId,
                            m = void 0 === B ? 0 : B,
                            C = u.onShow,
                            p = u.onHide,
                            g = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    r = {},
                                    o = Object.keys(u);
                                for (n = 0; n < o.length; n++) (t = o[n]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                return r;
                            })(u, v);
                        const h = (0, s.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            b = (0, s.useMemo)(
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
                            T = (0, s.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (f(t, d, { isMouseEvent: !0, on: !0, arguments: w(n) }, b),
                                    C && C(),
                                    (h.current.isVisible = !0));
                            }, [t, d, n, b, C]),
                            y = (0, s.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const u = h.current.timeoutId;
                                    u > 0 && (clearTimeout(u), (h.current.timeoutId = 0)),
                                        f(t, d, { on: !1 }, b),
                                        h.current.isVisible && p && p(),
                                        (h.current.isVisible = !1);
                                }
                            }, [t, d, b, p]),
                            P = (0, s.useCallback)((u) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(h.current.prevTarget) && y();
                                    }, 200)));
                            }, []);
                        return (
                            (0, s.useEffect)(() => {
                                const u = h.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', P, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', P, { capture: !0 }),
                                            u && window.clearTimeout(u);
                                    }
                                );
                            }, []),
                            (0, s.useEffect)(() => {
                                !1 === D && y();
                            }, [D, y]),
                            (0, s.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', y),
                                    () => {
                                        window.removeEventListener('mouseleave', y), y();
                                    }
                                ),
                                [y],
                            ),
                            D
                                ? (0, s.cloneElement)(
                                      e,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((k = e.props.onMouseEnter),
                                                  (u) => {
                                                      (u.clientX === window.innerWidth &&
                                                          u.clientY === window.innerHeight) ||
                                                          ((h.current.timeoutId = window.setTimeout(T, c ? 100 : 400)),
                                                          r && r(u),
                                                          k && k(u));
                                                  }),
                                              onMouseLeave: ((u) => (e) => {
                                                  y(), null == o || o(e), null == u || u(e);
                                              })(e.props.onMouseLeave),
                                              onClick: ((u) => (e) => {
                                                  !1 === A && y(), null == a || a(e), null == u || u(e);
                                              })(e.props.onClick),
                                              onMouseDown: ((u) => (e) => {
                                                  !1 === A && y(), null == i || i(e), null == u || u(e);
                                              })(e.props.onMouseDown),
                                          },
                                          g,
                                      ),
                                  )
                                : e
                        );
                        var k;
                    },
                    y = ['children'];
                function P() {
                    return (
                        (P =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        P.apply(this, arguments)
                    );
                }
                const k = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    r = {},
                                    o = Object.keys(u);
                                for (n = 0; n < o.length; n++) (t = o[n]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                return r;
                            })(u, y);
                        return i().createElement(
                            T,
                            P(
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
                    O = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function S() {
                    return (
                        (S =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        S.apply(this, arguments)
                    );
                }
                const N = R.views.common.tooltip_window.simple_tooltip_content,
                    x = (u) => {
                        let e = u.children,
                            t = u.body,
                            n = u.header,
                            r = u.note,
                            o = u.alert,
                            a = u.args,
                            E = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    r = {},
                                    o = Object.keys(u);
                                for (n = 0; n < o.length; n++) (t = o[n]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                return r;
                            })(u, O);
                        const c = (0, s.useMemo)(() => {
                            const u = Object.assign({}, a, { body: t, header: n, note: r, alert: o });
                            for (const e in u) void 0 === u[e] && delete u[e];
                            return u;
                        }, [o, t, n, r, a]);
                        return i().createElement(
                            T,
                            S(
                                {
                                    contentId:
                                        ((l = null == a ? void 0 : a.hasHtmlContent),
                                        l ? N.SimpleTooltipHtmlContent('resId') : N.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                E,
                            ),
                            e,
                        );
                        var l;
                    };
                function L() {
                    return (
                        (L =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        L.apply(this, arguments)
                    );
                }
                const I = ({ children: u, tooltipArgs: e, className: t }) => {
                    if (!e) return u;
                    const n = i().createElement('div', { className: t }, u);
                    if (e.header || e.body) return i().createElement(x, e, n);
                    const r = e.contentId;
                    return r ? i().createElement(T, L({}, e, { contentId: r }), n) : i().createElement(k, e, n);
                };
                class M extends i().PureComponent {
                    render() {
                        let u;
                        u = 'gold' === this.props.format ? b.B3.GOLD : b.B3.INTEGRAL;
                        const e = b.Z5.getNumberFormat(this.props.value, u);
                        return void 0 !== this.props.value && void 0 !== e ? e : null;
                    }
                }
                M.defaultProps = { format: 'integral' };
                const U = [
                        d.Items,
                        d.Equipment,
                        d.Xp,
                        d.XpFactor,
                        d.Blueprints,
                        d.BlueprintsAny,
                        d.Goodies,
                        d.Berths,
                        d.Slots,
                        d.Tokens,
                        d.CrewSkins,
                        d.CrewBooks,
                        d.Customizations,
                        d.CreditsFactor,
                        d.TankmenXp,
                        d.TankmenXpFactor,
                        d.FreeXpFactor,
                        d.BattleToken,
                        d.PremiumUniversal,
                        d.NaturalCover,
                        d.BpCoin,
                        d.BattlePassSelectToken,
                        d.BattlaPassFinalAchievement,
                        d.BattleBadge,
                        d.BonusX5,
                        d.CrewBonusX3,
                        d.NewYearInvoice,
                        d.EpicSelectToken,
                        d.Comp7TokenWeeklyReward,
                        d.DeluxeGift,
                        d.BattleBoosterGift,
                        d.OptionalDevice,
                    ],
                    G = [d.Gold, d.Credits, d.Crystal, d.FreeXp],
                    q = [d.BattlePassPoints, d.EquipCoin],
                    Y = [d.PremiumPlus, d.Premium],
                    W = ['engravings', 'backgrounds'],
                    j = ['engraving', 'background'],
                    V = (u, e = D.Small) => {
                        const t = u.name,
                            n = u.type,
                            r = u.value,
                            o = u.icon,
                            s = u.item,
                            i = u.dogTagType,
                            a = ((u) => {
                                switch (u) {
                                    case D.S600x450:
                                        return 'c_600x450';
                                    case D.S400x300:
                                        return 'c_400x300';
                                    case D.S296x222:
                                        return 'c_296x222';
                                    case D.S232x174:
                                        return 'c_232x174';
                                    case D.Big:
                                        return 'c_80x80';
                                    case D.Small:
                                        return 'c_48x48';
                                    default:
                                        return u;
                                }
                            })(e);
                        switch (t) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${n}_${r}`;
                            case 'premium':
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${t}_${r}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${s}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${e}.${o}`;
                            case 'tokens':
                            case 'battleToken':
                                return 'big' === e
                                    ? u.iconBig.replace('..', 'img://gui')
                                    : u.iconSmall.replace('..', 'img://gui');
                            case 'customizations':
                            case 'styleProgress':
                            case 'crewSkins':
                            case 'goodies':
                            case 'groups':
                            case 'tmanToken':
                            case 'battlePassSelectToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${o}`;
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${e}.${o}`;
                            case 'dogTagComponents':
                                return ((u, e, t) => {
                                    const n = W[u];
                                    if (n) {
                                        const r = R.images.gui.maps.icons.dogtags.$dyn(e).$dyn(n),
                                            o = r.$dyn(t);
                                        return o ? `${o}` : `${r.$dyn(j[u])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(i, e, o);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${a}.${o}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${a}.${o}`;
                            case 'xp':
                            case 'xpFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.exp`;
                            case 'creditsFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.credits`;
                            case 'tankmenXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.tankmenXP`;
                            case 'dailyXPFactor':
                            case 'freeXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.freeXP`;
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${a}.${o}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${t}`;
                        }
                    },
                    z = [D.Small, D.Big],
                    $ = {
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
                    },
                    X = ({
                        name: u,
                        image: e,
                        isPeriodic: t = !1,
                        size: n = D.Big,
                        special: o,
                        value: s,
                        valueType: a,
                        style: E,
                        className: c,
                        classNames: l,
                        tooltipArgs: A,
                        periodicIconTooltipArgs: F,
                    }) => {
                        const d = ((u, e) => {
                                if (void 0 === e || !z.includes(u)) return null;
                                switch (e) {
                                    case m.BATTLE_BOOSTER:
                                    case m.BATTLE_BOOSTER_REPLACE:
                                        return C.BATTLE_BOOSTER;
                                }
                            })(n, o),
                            _ = ((u) => {
                                if (void 0 === u) return null;
                                switch (u) {
                                    case m.BATTLE_BOOSTER:
                                        return p.BATTLE_BOOSTER;
                                    case m.BATTLE_BOOSTER_REPLACE:
                                        return p.BATTLE_BOOSTER_REPLACE;
                                    case m.BUILT_IN_EQUIPMENT:
                                        return p.BUILT_IN_EQUIPMENT;
                                    case m.EQUIPMENT_PLUS:
                                        return p.EQUIPMENT_PLUS;
                                    case m.EQUIPMENT_TROPHY_BASIC:
                                        return p.EQUIPMENT_TROPHY_BASIC;
                                    case m.EQUIPMENT_TROPHY_UPGRADED:
                                        return p.EQUIPMENT_TROPHY_UPGRADED;
                                    case m.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return p.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case m.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return p.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case m.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return p.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case m.PROGRESSION_STYLE_UPGRADED_1:
                                        return p.PROGRESSION_STYLE_UPGRADED_1;
                                    case m.PROGRESSION_STYLE_UPGRADED_2:
                                        return p.PROGRESSION_STYLE_UPGRADED_2;
                                    case m.PROGRESSION_STYLE_UPGRADED_3:
                                        return p.PROGRESSION_STYLE_UPGRADED_3;
                                    case m.PROGRESSION_STYLE_UPGRADED_4:
                                        return p.PROGRESSION_STYLE_UPGRADED_4;
                                    case m.PROGRESSION_STYLE_UPGRADED_5:
                                        return p.PROGRESSION_STYLE_UPGRADED_5;
                                    case m.PROGRESSION_STYLE_UPGRADED_6:
                                        return p.PROGRESSION_STYLE_UPGRADED_6;
                                }
                            })(o),
                            g = ((u, e) => {
                                if (void 0 === u) return null;
                                switch (e) {
                                    case B.MULTI: {
                                        const e = Number(u);
                                        return isFinite(e) && e > 1 ? `x${Math.floor(e)}` : null;
                                    }
                                    case B.CURRENCY:
                                    case B.NUMBER:
                                        return i().createElement(M, { format: 'integral', value: Number(u) });
                                    case B.PREMIUM_PLUS: {
                                        const e = Number(u);
                                        return isNaN(e) ? u : null;
                                    }
                                    default:
                                        return u;
                                }
                            })(s, a);
                        return i().createElement(
                            'div',
                            { className: r()($.base, $[`base__${n}`], c), style: E },
                            i().createElement(
                                I,
                                { tooltipArgs: A, className: $.tooltipWrapper },
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement(
                                        'div',
                                        { className: r()($.image, null == l ? void 0 : l.image) },
                                        d &&
                                            i().createElement('div', {
                                                className: r()($.highlight, null == l ? void 0 : l.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${d}_highlight)`,
                                                },
                                            }),
                                        e &&
                                            i().createElement('div', {
                                                className: r()($.icon, null == l ? void 0 : l.rewardIcon),
                                                style: { backgroundImage: `url(${e})` },
                                            }),
                                        _ &&
                                            i().createElement('div', {
                                                className: r()($.overlay, null == l ? void 0 : l.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${_}_overlay)`,
                                                },
                                            }),
                                    ),
                                    g &&
                                        i().createElement(
                                            'div',
                                            {
                                                className: r()(
                                                    $.info,
                                                    $[`info__${u}`],
                                                    a === B.MULTI && $.info__multi,
                                                    null == l ? void 0 : l.info,
                                                ),
                                            },
                                            g,
                                        ),
                                ),
                            ),
                            t &&
                                i().createElement(
                                    I,
                                    { tooltipArgs: F },
                                    i().createElement('div', {
                                        className: r()($.timer, null == l ? void 0 : l.periodicIcon),
                                    }),
                                ),
                        );
                    };
                function H() {
                    return (
                        (H =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        H.apply(this, arguments)
                    );
                }
                const K = i().memo(
                    ({
                        data: u,
                        size: e = D.Big,
                        isVertical: t = !1,
                        count: n,
                        classMix: o,
                        rewardItemClassMix: a,
                        boxRewardTooltip: E,
                        boxRewardValue: c,
                    }) => {
                        const l = (0, s.useMemo)(
                                () => (n && n < u.length ? `R.images.gui.maps.icons.quests.bonuses.${e}.default` : ''),
                                [n, u.length, e],
                            ),
                            A =
                                c ||
                                ((F = R.strings.tooltips.quests.awards.additional.bottom()),
                                (d = { count: u.length - (n || 0) }),
                                F.replace(/(\{|%\()\w+(\}|\)s)/g, (u) => {
                                    const e = 0 === u.indexOf('%') ? 2 : 1;
                                    return String(d[u.slice(e, -e)]);
                                }));
                        var F, d;
                        const _ = r()('Rewards_base_26', t && 'Rewards_base__vertical_9f', o),
                            B = r()('Rewards_reward_7b', t && 'Rewards_reward__vertical_c6', a);
                        return i().createElement(
                            'div',
                            { className: _ },
                            l
                                ? i().createElement(
                                      i().Fragment,
                                      null,
                                      u
                                          .slice(0, n)
                                          .map((u, t) =>
                                              i().createElement(
                                                  'div',
                                                  { key: t, className: B },
                                                  i().createElement(X, H({ size: e }, u)),
                                              ),
                                          ),
                                      i().createElement(
                                          'div',
                                          { className: B },
                                          i().createElement(X, {
                                              name: 'more',
                                              image: l,
                                              size: e,
                                              value: A,
                                              tooltipArgs: E,
                                          }),
                                      ),
                                  )
                                : u.map((u, t) =>
                                      i().createElement(
                                          'div',
                                          { key: t, className: B },
                                          i().createElement(X, H({ size: e }, u)),
                                      ),
                                  ),
                        );
                    },
                );
                var Z = t(3403);
                let Q;
                function J() {
                    return !1;
                }
                !(function (u) {
                    (u[(u.UNCOMPLETED = 0)] = 'UNCOMPLETED'),
                        (u[(u.COMPLETED = 1)] = 'COMPLETED'),
                        (u[(u.LOCKED = 2)] = 'LOCKED');
                })(Q || (Q = {})),
                    console.log;
                var uu = t(9174);
                function eu(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, n = new Array(e); t < e; t++) n[t] = u[t];
                    return n;
                }
                const tu = (u) => (0 === u ? window : window.subViews.get(u));
                var nu = t(3946);
                const ru = ((u, e) => {
                        const t = (0, s.createContext)({});
                        return [
                            function ({ mode: u = 'real', options: n, children: r, mocks: a }) {
                                const E = (0, s.useRef)([]),
                                    c = (u, t, n) => {
                                        var r;
                                        const s = (function ({
                                                initializer: u = !0,
                                                rootId: e = 0,
                                                getRoot: t = tu,
                                                context: n = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function s(u, e = 0) {
                                                    viewEnv.removeDataChangedCallback(u, e)
                                                        ? r.delete(u)
                                                        : console.error("Can't remove callback by id:", u);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (u, e, t) => {
                                                        t.forEach((e) => {
                                                            const t = r.get(e);
                                                            void 0 !== t && t(u);
                                                        });
                                                    });
                                                });
                                                const i = (u) => {
                                                    const r = t(e),
                                                        o = n.split('.').reduce((u, e) => u[e], r);
                                                    return 'string' != typeof u || 0 === u.length
                                                        ? o
                                                        : u.split('.').reduce((u, e) => {
                                                              const t = u[e];
                                                              return 'function' == typeof t ? t.bind(u) : t;
                                                          }, o);
                                                };
                                                return {
                                                    subscribe: (t, s) => {
                                                        const a = 'string' == typeof s ? `${n}.${s}` : n,
                                                            E = o.O.view.addModelObserver(a, e, !0);
                                                        return r.set(E, t), u && t(i(s)), E;
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
                                                        for (
                                                            var u,
                                                                t = (function (u, e) {
                                                                    var t =
                                                                        ('undefined' != typeof Symbol &&
                                                                            u[Symbol.iterator]) ||
                                                                        u['@@iterator'];
                                                                    if (t) return (t = t.call(u)).next.bind(t);
                                                                    if (
                                                                        Array.isArray(u) ||
                                                                        (t = (function (u, e) {
                                                                            if (u) {
                                                                                if ('string' == typeof u)
                                                                                    return eu(u, e);
                                                                                var t = Object.prototype.toString
                                                                                    .call(u)
                                                                                    .slice(8, -1);
                                                                                return (
                                                                                    'Object' === t &&
                                                                                        u.constructor &&
                                                                                        (t = u.constructor.name),
                                                                                    'Map' === t || 'Set' === t
                                                                                        ? Array.from(u)
                                                                                        : 'Arguments' === t ||
                                                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                                t,
                                                                                            )
                                                                                          ? eu(u, e)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(u)) ||
                                                                        (e && u && 'number' == typeof u.length)
                                                                    ) {
                                                                        t && (u = t);
                                                                        var n = 0;
                                                                        return function () {
                                                                            return n >= u.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: u[n++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(r.keys());
                                                            !(u = t()).done;

                                                        )
                                                            s(u.value, e);
                                                    },
                                                    unsubscribe: s,
                                                };
                                            })(t),
                                            i =
                                                'real' === u
                                                    ? s
                                                    : Object.assign({}, s, {
                                                          readByPath:
                                                              null != (r = null == n ? void 0 : n.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            a = (e) =>
                                                'mocks' === u ? (null == n ? void 0 : n.getter(e)) : i.readByPath(e),
                                            c = (u) => E.current.push(u),
                                            l = (({ observableModel: u }) => {
                                                const e = (0, nu.Om)(() => {
                                                    return (
                                                        (e = u.array('rewards').get()),
                                                        (t = (u) => {
                                                            return {
                                                                name: u.name,
                                                                image: V(u, D.Big),
                                                                value: u.value,
                                                                valueType:
                                                                    ((e = u.name),
                                                                    U.includes(e)
                                                                        ? B.MULTI
                                                                        : G.includes(e)
                                                                          ? B.CURRENCY
                                                                          : q.includes(e)
                                                                            ? B.NUMBER
                                                                            : Y.includes(e)
                                                                              ? B.PREMIUM_PLUS
                                                                              : B.STRING),
                                                            };
                                                            var e;
                                                        }),
                                                        Array.isArray(e)
                                                            ? e.map(t)
                                                            : e.map((u, e, n) => t(null == u ? void 0 : u.value, e, n))
                                                    );
                                                    var e, t;
                                                });
                                                return {
                                                    primitives: u.primitives([
                                                        'title',
                                                        'taskState',
                                                        'secondsBeforeUnlock',
                                                    ]),
                                                    computes: { getRewards: e },
                                                };
                                            })({
                                                mode: u,
                                                readByPath: a,
                                                externalModel: i,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const n = null != t ? t : a(e),
                                                            r = uu.LO.box(n, { equals: J });
                                                        return (
                                                            'real' === u &&
                                                                i.subscribe(
                                                                    (0, uu.aD)((u) => r.set(u)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const n = null != t ? t : a(e),
                                                            r = uu.LO.box(n, { equals: J });
                                                        return (
                                                            'real' === u &&
                                                                i.subscribe(
                                                                    (0, uu.aD)((u) => r.set(u)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const n = a(t);
                                                        if (Array.isArray(e)) {
                                                            const r = e.reduce(
                                                                (u, e) => ((u[e] = uu.LO.box(n[e], {})), u),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === u &&
                                                                    i.subscribe(
                                                                        (0, uu.aD)((u) => {
                                                                            e.forEach((e) => {
                                                                                r[e].set(u[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                r
                                                            );
                                                        }
                                                        {
                                                            const r = e,
                                                                o = Object.entries(r),
                                                                s = o.reduce(
                                                                    (u, [e, t]) => ((u[t] = uu.LO.box(n[e], {})), u),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === u &&
                                                                    i.subscribe(
                                                                        (0, uu.aD)((u) => {
                                                                            o.forEach(([e, t]) => {
                                                                                s[t].set(u[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                s
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: c,
                                            }),
                                            A = { mode: u, model: l, externalModel: i, cleanup: c };
                                        return {
                                            model: l,
                                            controls: 'mocks' === u && n ? n.controls(A) : e(A),
                                            externalModel: i,
                                            mode: u,
                                        };
                                    },
                                    l = (0, s.useRef)(!1),
                                    A = (0, s.useState)(u),
                                    F = A[0],
                                    d = A[1],
                                    _ = (0, s.useState)(() => c(u, n, a)),
                                    m = _[0],
                                    C = _[1];
                                return (
                                    (0, s.useEffect)(() => {
                                        l.current ? C(c(F, n, a)) : (l.current = !0);
                                    }, [a, F, n]),
                                    (0, s.useEffect)(() => {
                                        d(u);
                                    }, [u]),
                                    (0, s.useEffect)(
                                        () => () => {
                                            m.externalModel.dispose(), E.current.forEach((u) => u());
                                        },
                                        [m],
                                    ),
                                    i().createElement(t.Provider, { value: m }, r)
                                );
                            },
                            () => (0, s.useContext)(t),
                        ];
                    })(0, function () {}),
                    ou = ru[0],
                    su = ru[1];
                var iu = t(8045);
                let au, Eu, cu;
                !(function (u) {
                    (u[(u.Word = 0)] = 'Word'),
                        (u[(u.LineBreak = 1)] = 'LineBreak'),
                        (u[(u.NewLine = 2)] = 'NewLine'),
                        (u[(u.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                        (u[(u.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                        (u[(u.Binding = 5)] = 'Binding');
                })(au || (au = {})),
                    (function (u) {
                        (u.FlexStart = 'flex-start'), (u.Center = 'center'), (u.FlexEnd = 'flex-end');
                    })(Eu || (Eu = {})),
                    (function (u) {
                        (u.NBSP = ' '), (u.ZWNBSP = '\ufeff'), (u.NEW_LINE = '\n');
                    })(cu || (cu = {}));
                const lu = { [cu.NBSP]: au.NoBreakSymbol, [cu.ZWNBSP]: au.NoBreakSymbol, [cu.NEW_LINE]: au.LineBreak },
                    Au = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'th'].includes(
                        R.strings.settings.LANGUAGE_CODE().toLowerCase(),
                    ),
                    Fu = {
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
                    du = 'renderers_word_f3',
                    _u = (u) => ({ color: `#${u}` }),
                    Du = ({ elementList: u, textBlock: e, key: t }) => {
                        const n = e.colorTag;
                        return n
                            ? Fu[n]
                                ? i().createElement(
                                      'span',
                                      { key: t, 'data-block-type': e.blockType, className: r()(du, Fu[n]) },
                                      u,
                                  )
                                : i().createElement(
                                      'span',
                                      { key: t, 'data-block-type': e.blockType, className: du, style: _u(n) },
                                      u,
                                  )
                            : i().createElement('span', { key: t, 'data-block-type': e.blockType, className: du }, u);
                    },
                    Bu = {
                        [au.Word]: Du,
                        [au.NoBreakSymbol]: Du,
                        [au.Binding]: ({ elementList: u, textBlock: e, key: t }) =>
                            i().createElement(
                                'span',
                                { key: t, 'data-block-type': e.blockType },
                                u.map((u) => i().createElement(i().Fragment, { key: t }, u)),
                            ),
                        [au.LineBreak]: ({ key: u }) =>
                            i().createElement('span', {
                                key: u,
                                'data-block-type': au.LineBreak,
                                className: 'renderers_lineBreak_b5',
                            }),
                        [au.NewLine]: ({ elementList: u, key: e }) =>
                            i().createElement(
                                'span',
                                { key: e, 'data-block-type': au.NewLine, className: 'renderers_newLine_bd' },
                                u,
                            ),
                        [au.NoBreakWrapper]: ({ elementList: u, key: e }) =>
                            i().createElement(
                                'span',
                                {
                                    key: e,
                                    'data-block-type': au.NoBreakWrapper,
                                    className: 'renderers_noBreakWrapper_10',
                                },
                                u,
                            ),
                    },
                    mu = (u, e, t) => {
                        const n = [];
                        return (
                            u.childList.forEach((r, o) => {
                                const s = `${t}_${o}`;
                                if (((u) => void 0 !== u.childList)(r)) {
                                    const u = r,
                                        e = u.blockType,
                                        t = mu(u, Bu[e], s);
                                    n.push(...t);
                                } else n.push(e({ elementList: [r], textBlock: u, key: s }));
                            }),
                            n
                        );
                    },
                    Cu = (u, e, t, n) => {
                        let r = e.exec(u),
                            o = 0;
                        for (; r; ) o !== r.index && t(u.slice(o, r.index)), n(r), (o = e.lastIndex), (r = e.exec(u));
                        o !== u.length && t(u.slice(o));
                    },
                    pu = new RegExp('[฀-๿][ัำ-ฺ็-๎]*', 'gu'),
                    gu = Au
                        ? (u) => {
                              const e = [];
                              return (
                                  Cu(
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
                                                      Cu(
                                                          u,
                                                          /\S\s+/g,
                                                          (u) => {
                                                              var t;
                                                              'th' === R.strings.settings.LANGUAGE_CODE().toLowerCase()
                                                                  ? e.push(...((t = u), t.match(pu) || []))
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
                        : (u) => {
                              const e = /[\s\u002d]/g;
                              let t = e.exec(u);
                              if (!t) return [u];
                              const n = [];
                              let r = 0;
                              for (; t; ) n.push(u.slice(r, e.lastIndex)), (r = e.lastIndex), (t = e.exec(u));
                              return r !== u.length && n.push(u.slice(r)), n;
                          },
                    hu = (u, e = '') => {
                        const t = [];
                        return (
                            Cu(
                                u,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (u) => {
                                    t.push({ blockType: au.Word, colorTag: e, childList: gu(u) });
                                },
                                (u) => {
                                    const n = u[0],
                                        r = lu[n.charAt(0)];
                                    r === au.LineBreak
                                        ? t.push(
                                              ...((u) => {
                                                  const e = [
                                                      {
                                                          blockType: au.LineBreak,
                                                          colorTag: '',
                                                          childList: [u.charAt(0)],
                                                      },
                                                  ];
                                                  for (let t = 0; t < u.length - 1; t++)
                                                      e.push({
                                                          blockType: au.NewLine,
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
                    bu = (u, e, t = '') => {
                        const n = [];
                        return (
                            Cu(
                                u,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (u) => {
                                    n.push(...hu(u, t));
                                },
                                (u) => {
                                    const r = u[1],
                                        o = void 0 === e[r] ? u[0] : e[r];
                                    'string' == typeof o || 'number' == typeof o
                                        ? n.push(...hu(String(o), t))
                                        : n.push({ blockType: au.Binding, colorTag: t, childList: [o] });
                                },
                            ),
                            n
                        );
                    },
                    vu = (u, e) => {
                        if (!u) return [e];
                        const t = [],
                            n = Object.assign({}, e, { childList: e.childList.splice(0, 1) });
                        if (u.blockType === au.NoBreakWrapper) u.childList.push(n), t.push(u);
                        else {
                            const e = Object.assign({}, u, { childList: u.childList.splice(-1) });
                            u.childList.length > 0 && t.push(u),
                                t.push({ blockType: au.NoBreakWrapper, colorTag: '', childList: [e, n] });
                        }
                        return e.childList.length > 0 && t.push(e), t;
                    },
                    wu = (u, e = {}) => {
                        if (!u) return [];
                        const t = ((u) => {
                            const e = [];
                            let t = !1;
                            return (
                                u.forEach((u) => {
                                    u.blockType === au.NoBreakSymbol
                                        ? ((t = !0), e.push(...vu(e.pop(), u)))
                                        : (t ? e.push(...vu(e.pop(), u)) : e.push(u), (t = !1));
                                }),
                                e
                            );
                        })(
                            ((u, e) => {
                                const t = [];
                                return (
                                    Cu(
                                        u,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})/g,
                                        (u) => {
                                            t.push(...bu(u, e));
                                        },
                                        (u) => {
                                            t.push(...bu(u[2], e, u[1]));
                                        },
                                    ),
                                    t
                                );
                            })(((n = u), n.replace(/&nbsp;/g, ' ')).replace(/&zwnbsp;/g, '\ufeff'), e),
                        );
                        var n;
                        return ((u) => {
                            const e = [];
                            return (
                                u.forEach((u, t) => {
                                    e.push(
                                        ...((u, e) => {
                                            const t = [],
                                                n = u.blockType,
                                                r = Bu[n],
                                                o = mu(u, r, e);
                                            return (
                                                n === au.NoBreakWrapper
                                                    ? t.push(r({ elementList: o, textBlock: u, key: `${e}` }))
                                                    : t.push(...o),
                                                t
                                            );
                                        })(u, t),
                                    );
                                }),
                                e
                            );
                        })(t);
                    },
                    fu = (u, e) => !u || u.offsetTop + u.offsetHeight > e,
                    Tu = (u, e) => u.offsetLeft + u.offsetWidth - e,
                    Ru = (u, e, t) => {
                        if (!u || !u.textContent) return [!1, 0];
                        if (u.offsetLeft > e) return [!1, 0];
                        const n = Tu(u, e),
                            r = u.textContent.length,
                            o = u.offsetWidth / r,
                            s = Math.ceil(n / o);
                        if (n > 0) {
                            const n = Math.floor((e - u.offsetLeft) / o);
                            return n >= t ? [!0, t + s] : [!1, n];
                        }
                        const i = Math.max(t + s, 0);
                        return r < i ? [!1, 0] : [!0, i];
                    },
                    yu = (u, e, t, n, r, o) => {
                        let s = -1,
                            a = null;
                        for (let E = t; E >= 0; E--) {
                            const t = u[E],
                                c = Number(u[E].getAttribute('data-block-type'));
                            if (c === au.LineBreak || c === au.NewLine || c === au.Binding) continue;
                            const l = t.textContent || '';
                            if (!(t.childElementCount > 1)) {
                                const u = Ru(t, n, r),
                                    c = u[0],
                                    A = u[1];
                                if (!c) {
                                    A > 0 && (r -= A);
                                    continue;
                                }
                                const F = l.slice(0, l.length - A) + o,
                                    d = e[E];
                                (a = i().cloneElement(d, d.props, F)), (s = E);
                                break;
                            }
                            {
                                const u = t.children,
                                    c = e[E],
                                    A = c.props.children,
                                    F = yu(u, A, u.length - 1, n, r, o),
                                    d = F[0],
                                    _ = F[1];
                                if (!(d < 0)) {
                                    const u = A.slice(0, d);
                                    (a = i().cloneElement(c, c.props, u, _)), (s = E);
                                    break;
                                }
                                r -= l.length;
                            }
                        }
                        return [s, a];
                    },
                    Pu = i().memo(
                        ({
                            text: u,
                            classMix: e,
                            onSizeChanged: t,
                            binding: n,
                            isTooltipEnable: o = !1,
                            isTruncationAvailable: a = !1,
                            targetId: E,
                            justifyContent: c = Eu.FlexStart,
                            alignContent: l = Eu.FlexStart,
                            truncateIdentify: A = '...',
                        }) => {
                            const F = (0, s.useRef)(null),
                                d = (0, s.useRef)({ height: 0, width: 0 }),
                                _ = (0, s.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                D = _[0],
                                B = _[1],
                                m = (0, s.useMemo)(() => wu(u, n), [n, u]),
                                C = (0, s.useMemo)(() => {
                                    if (
                                        o &&
                                        D.isTruncated &&
                                        (!n || !Object.values(n).find((u) => 'object' == typeof u))
                                    )
                                        return {
                                            args: { text: u, stringifyKwargs: n ? JSON.stringify(n) : '' },
                                            contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                            targetId: E,
                                        };
                                }, [n, o, E, u, D.isTruncated]),
                                p = (0, s.useCallback)(
                                    (u) => {
                                        (d.current.width = u.contentRect.width),
                                            (d.current.height = u.contentRect.height);
                                        const e = ((u, e, t, n = '...') => {
                                                const r = [...e],
                                                    o = u.current;
                                                if (!o) return [r, !1];
                                                const s = t.height,
                                                    i = t.width,
                                                    a = o.lastElementChild;
                                                if (!fu(a, s) && Tu(a, i) <= 0) return [r, !1];
                                                const E = o.children,
                                                    c = ((u, e) => {
                                                        let t = 0,
                                                            n = u.length - 1;
                                                        for (; n - t >= 0; ) {
                                                            const r = t + Math.ceil(0.5 * (n - t));
                                                            fu(u[r], e) ? (n = r - 1) : (t = r + 1);
                                                        }
                                                        return t - 1;
                                                    })(E, s);
                                                if (c < 0) return [r, !1];
                                                const l = yu(E, r, c, i, n.length, n),
                                                    A = l[0],
                                                    F = l[1];
                                                return F && (r.splice(A, 1, F), r.splice(A + 1)), [r, !0];
                                            })(F, m, d.current, A),
                                            n = e[0],
                                            r = e[1];
                                        B({ elementList: n, isTruncated: r, isTruncateFinished: !0 }), t && t(r);
                                    },
                                    [t, A, m],
                                ),
                                g = (0, s.useMemo)(() => ({ justifyContent: c, alignContent: l }), [l, c]);
                            return (
                                ((u, e, t = !0) => {
                                    const n = (0, s.useCallback)(
                                        (u) => {
                                            const t = u[0];
                                            e && e(t);
                                        },
                                        [e],
                                    );
                                    (0, s.useEffect)(() => {
                                        if (!u.current || !t) return;
                                        const e = new iu.Z((u) => n(u));
                                        return (
                                            e.observe(u.current),
                                            () => {
                                                e.disconnect();
                                            }
                                        );
                                    }, [n, t, u]);
                                })(F, p, a),
                                i().createElement(
                                    'div',
                                    {
                                        className: r()(
                                            'ExtendedText_base_71',
                                            e,
                                            'ExtendedText_base__zeroPadding_25',
                                            a && 'ExtendedText_base__isTruncationAvailable_5b',
                                        ),
                                        style: g,
                                    },
                                    i().createElement('div', { className: 'ExtendedText_unTruncated_b8', ref: F }, m),
                                    i().createElement(
                                        I,
                                        { tooltipArgs: C },
                                        i().createElement(
                                            'div',
                                            {
                                                className: r()(
                                                    'ExtendedText_truncated_97',
                                                    !D.isTruncateFinished && a && 'ExtendedText_truncated__hide_31',
                                                ),
                                                style: g,
                                            },
                                            D.isTruncateFinished && a ? D.elementList : m,
                                        ),
                                    ),
                                )
                            );
                        },
                    );
                var ku = t(8613);
                function Ou(u = 0) {
                    let e = u;
                    const t = Math.trunc(e / 86400);
                    e -= 86400 * t;
                    const n = Math.trunc(e / 3600);
                    e -= 3600 * n;
                    const r = Math.trunc(e / 60);
                    return (e -= 60 * r), { days: t, hours: n, minutes: r, seconds: e };
                }
                Date.now(), ku.Ew.getRegionalDateTime, ku.Ew.getFormattedDateTime;
                const Su = () => {};
                let Nu;
                b.Sw.instance,
                    (function (u) {
                        (u.None = 'None'), (u.Shallow = 'Shallow'), (u.Deep = 'Deep');
                    })(Nu || (Nu = {})),
                    b.Sw.instance;
                const xu = (u = 0, e, t = 0, n = Su) => {
                        const r = (0, s.useState)(u),
                            o = r[0],
                            i = r[1];
                        return (
                            (0, s.useEffect)(() => {
                                if (u > 0) {
                                    i(u);
                                    const r = Date.now(),
                                        o = setInterval(
                                            () => {
                                                const e = u - Math.floor((Date.now() - r) / 1e3);
                                                null !== t && e <= t ? (i(t), n && n(), clearInterval(o)) : i(e);
                                            },
                                            1e3 * (e || (u > 120 ? 60 : 1)),
                                        );
                                    return () => {
                                        clearInterval(o);
                                    };
                                }
                            }, [u, e, t, n]),
                            o
                        );
                    },
                    Lu = (u, e, t) => {
                        const n = u.days,
                            r = u.hours,
                            o = u.minutes;
                        return n >= 1
                            ? 0 === r
                                ? h(R.strings.sm_lobby.countdown.days(), { days: n })
                                : h(R.strings.sm_lobby.countdown.daysHours(), { days: n, hours: r })
                            : e && r < 1 && o < 5
                              ? h(R.strings.sm_lobby.countdown.endsSoon(), { minutes: 5 })
                              : 0 === r
                                ? o < 1
                                    ? R.strings.sm_lobby.countdown.lessThanMinute()
                                    : h(
                                          t
                                              ? R.strings.sm_lobby.countdown.minutesShort()
                                              : R.strings.sm_lobby.countdown.minutes(),
                                          { minutes: o },
                                      )
                                : 0 === o
                                  ? h(R.strings.sm_lobby.countdown.hours(), { hours: r })
                                  : h(
                                        t
                                            ? R.strings.sm_lobby.countdown.hoursMinutesShort()
                                            : R.strings.sm_lobby.countdown.hoursMinutes(),
                                        { hours: r, minutes: o },
                                    );
                    },
                    Iu = R.strings.sm_lobby.tooltips.task,
                    Mu = (0, Z.Pi)(() => {
                        const u = su().model,
                            e = ((u, e = !1, t = !1) => {
                                const n = xu(u, 1);
                                return { timeString: Lu(Ou(n), e, t), secondsLeft: n, isEndingSoon: n < 300 };
                            })(u.primitives.secondsBeforeUnlock.get()).timeString,
                            t = u.primitives.taskState.get(),
                            n = t === Q.COMPLETED,
                            o = t === Q.LOCKED;
                        return i().createElement(
                            'div',
                            {
                                className: r()(
                                    'TaskState_base_19',
                                    n && 'TaskState_base__completed_d4',
                                    o && 'TaskState_base__locked_91',
                                ),
                            },
                            i().createElement('div', { className: 'TaskState_statusIcon_38' }),
                            n && i().createElement('div', null, Iu.completed()),
                            t === Q.UNCOMPLETED && i().createElement('div', null, Iu.active()),
                            o &&
                                i().createElement(Pu, {
                                    text: Iu.locked(),
                                    binding: { timer: i().createElement('div', { className: 'TaskState_time_d7' }, e) },
                                }),
                        );
                    }),
                    Uu = (0, Z.Pi)(() => {
                        const u = su().model,
                            e = u.primitives,
                            t = e.title,
                            n = e.taskState,
                            r = u.computes.getRewards().length,
                            o = n.get() === Q.LOCKED;
                        return i().createElement(
                            'div',
                            { className: 'TaskTooltipApp_base_78' },
                            !o && i().createElement('div', { className: 'TaskTooltipApp_icon_1e' }),
                            i().createElement('div', { className: 'TaskTooltipApp_title_1c' }, t.get()),
                            r > 0 &&
                                i().createElement(K, {
                                    classMix: 'TaskTooltipApp_rewards_88',
                                    size: r > 3 ? D.Small : D.Big,
                                    data: u.computes.getRewards(),
                                }),
                            i().createElement('div', { className: 'TaskTooltipApp_dots_59' }),
                            i().createElement(Mu, null),
                        );
                    });
                engine.whenReady.then(() => {
                    F().render(
                        i().createElement(ou, null, i().createElement(l, null, i().createElement(Uu, null))),
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
                var r = 1 / 0;
                for (a = 0; a < deferred.length; a++) {
                    for (var [e, t, n] = deferred[a], o = !0, s = 0; s < e.length; s++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[s]))
                            ? e.splice(s--, 1)
                            : ((o = !1), n < r && (r = n));
                    if (o) {
                        deferred.splice(a--, 1);
                        var i = t();
                        void 0 !== i && (u = i);
                    }
                }
                return u;
            }
            n = n || 0;
            for (var a = deferred.length; a > 0 && deferred[a - 1][2] > n; a--) deferred[a] = deferred[a - 1];
            deferred[a] = [e, t, n];
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
        (__webpack_require__.j = 298),
        (() => {
            var u = { 298: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var n,
                        r,
                        [o, s, i] = t,
                        a = 0;
                    if (o.some((e) => 0 !== u[e])) {
                        for (n in s) __webpack_require__.o(s, n) && (__webpack_require__.m[n] = s[n]);
                        if (i) var E = i(__webpack_require__);
                    }
                    for (e && e(t); a < o.length; a++)
                        (r = o[a]), __webpack_require__.o(u, r) && u[r] && u[r][0](), (u[r] = 0);
                    return __webpack_require__.O(E);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(3760));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
