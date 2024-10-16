(() => {
    'use strict';
    var __webpack_modules__ = {
            9768: (u, e, t) => {
                t.d(e, { O: () => Q });
                var n = {};
                t.r(n),
                    t.d(n, { mouse: () => d, off: () => A, on: () => c, onResize: () => l, onScaleUpdated: () => E });
                var r = {};
                t.r(r),
                    t.d(r, {
                        events: () => n,
                        getMouseGlobalPosition: () => C,
                        getSize: () => _,
                        graphicsQuality: () => p,
                        playSound: () => D,
                        setRTPC: () => B,
                    });
                var o = {};
                t.r(o), t.d(o, { getBgUrl: () => b, getTextureUrl: () => f });
                var i = {};
                function a(u) {
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
                t.r(i),
                    t.d(i, {
                        addModelObserver: () => P,
                        addPreloadTexture: () => x,
                        children: () => o,
                        displayStatus: () => g,
                        displayStatusIs: () => $,
                        events: () => w,
                        extraSize: () => Z,
                        forceTriggerMouseMove: () => H,
                        freezeTextureBeforeResize: () => j,
                        getBrowserTexturePath: () => R,
                        getDisplayStatus: () => Y,
                        getScale: () => V,
                        getSize: () => N,
                        getViewGlobalPosition: () => I,
                        isEventHandled: () => K,
                        isFocused: () => G,
                        pxToRem: () => W,
                        remToPx: () => U,
                        resize: () => M,
                        sendEvent: () => k,
                        setAnimateWindow: () => z,
                        setEventHandled: () => q,
                        setInputPaddingsRem: () => L,
                        setSidePaddingsRem: () => S,
                        whenTutorialReady: () => X,
                    });
                const l = a('clientResized'),
                    E = a('self.onScaleUpdated'),
                    c = (u, e) => engine.on(u, e),
                    A = (u, e) => engine.off(u, e),
                    F = { down: a('mousedown'), up: a('mouseup'), move: a('mousemove') },
                    d = (function () {
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
                        const r = ['down', 'up', 'move'].reduce(
                            (e, t) => (
                                (e[t] = (function (e) {
                                    return (t) => {
                                        u.listeners += 1;
                                        let r = !0;
                                        const o = `mouse${e}`,
                                            i = F[e]((u) => t([u, 'outside']));
                                        function a(u) {
                                            t([u, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(o, a),
                                            n(),
                                            () => {
                                                r &&
                                                    (i(),
                                                    window.removeEventListener(o, a),
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
                                u.enabled && s(!0);
                            },
                            disableOutside() {
                                u.enabled && s(!1);
                            },
                        });
                    })();
                function D(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error(`playSound('${u}'): `, e);
                    });
                }
                function B(u, e) {
                    engine.call('SetRTPCGlobal', u, e).catch((t) => {
                        console.error(`setRTPC('${u}', '${e}'): `, t);
                    });
                }
                function _(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function C(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const p = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    v = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    h = Object.keys(v).reduce((u, e) => ((u[e] = () => D(v[e])), u), {}),
                    m = { play: Object.assign({}, h, { sound: D }), setRTPC: B };
                function f(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function b(u, e, t) {
                    return `url(${f(u, e, t)})`;
                }
                const g = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    w = {
                        onTextureFrozen: a('self.onTextureFrozen'),
                        onTextureReady: a('self.onTextureReady'),
                        onDomBuilt: a('self.onDomBuilt'),
                        onLoaded: a('self.onLoaded'),
                        onDisplayChanged: a('self.onShowingStatusChanged'),
                        onFocusUpdated: a('self.onFocusChanged'),
                        children: {
                            onAdded: a('children.onAdded'),
                            onLoaded: a('children.onLoaded'),
                            onRemoved: a('children.onRemoved'),
                            onAttached: a('children.onAttached'),
                            onTextureReady: a('children.onTextureReady'),
                            onRequestPosition: a('children.requestPosition'),
                        },
                    },
                    y = ['args'],
                    T = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const r = e.args,
                                o = (function (u, e) {
                                    if (null == u) return {};
                                    var t = {};
                                    for (var n in u)
                                        if ({}.hasOwnProperty.call(u, n)) {
                                            if (e.indexOf(n) >= 0) continue;
                                            t[n] = u[n];
                                        }
                                    return t;
                                })(e, y);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, o, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: u });
                        var n;
                    },
                    k = {
                        close(u) {
                            T('popover' === u ? 2 : 32);
                        },
                        minimize() {
                            T(64);
                        },
                        move(u) {
                            T(16, { isMouseEvent: !0, on: u });
                        },
                    },
                    O = 15;
                function x(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function L(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, O);
                }
                function R(u, e, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, n);
                }
                function P(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function S(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, O);
                }
                function N(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function M(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function I(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: U(e.x), y: U(e.y) };
                }
                function j() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function V() {
                    return viewEnv.getScale();
                }
                function W(u) {
                    return viewEnv.pxToRem(u);
                }
                function U(u) {
                    return viewEnv.remToPx(u);
                }
                function z(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function G() {
                    return viewEnv.isFocused();
                }
                function q() {
                    return viewEnv.setEventHandled();
                }
                function K() {
                    return viewEnv.isEventHandled();
                }
                function H() {
                    viewEnv.forceTriggerMouseMove();
                }
                function Y() {
                    return viewEnv.getShowingStatus();
                }
                const $ = Object.keys(g).reduce((u, e) => ((u[e] = () => viewEnv.getShowingStatus() === g[e]), u), {}),
                    Z = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    X = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : w.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]),
                    Q = { view: i, client: r, sound: m };
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
                var n = t(9768);
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
                t.d(e, { B0: () => a, ry: () => C });
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
                    i = t(8613);
                let a;
                var s;
                ((s = a || (a = {}))[(s.UNDEFINED = 0)] = 'UNDEFINED'),
                    (s[(s.TOOLTIP = 1)] = 'TOOLTIP'),
                    (s[(s.POP_OVER = 2)] = 'POP_OVER'),
                    (s[(s.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (s[(s.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (s[(s.MOVE = 16)] = 'MOVE'),
                    (s[(s.CLOSE = 32)] = 'CLOSE'),
                    (s[(s.MINIMIZE = 64)] = 'MINIMIZE');
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    E = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    A = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var F = t(5521),
                    d = t(9768);
                const D = ['args'];
                function B(u, e, t, n, r, o, i) {
                    try {
                        var a = u[o](i),
                            s = a.value;
                    } catch (u) {
                        return void t(u);
                    }
                    a.done ? e(s) : Promise.resolve(s).then(n, r);
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
                                        var o = u.apply(e, t);
                                        function i(u) {
                                            B(o, n, r, i, a, 'next', u);
                                        }
                                        function a(u) {
                                            B(o, n, r, i, a, 'throw', u);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    p = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const r = e.args,
                                o = (function (u, e) {
                                    if (null == u) return {};
                                    var t = {};
                                    for (var n in u)
                                        if ({}.hasOwnProperty.call(u, n)) {
                                            if (e.indexOf(n) >= 0) continue;
                                            t[n] = u[n];
                                        }
                                    return t;
                                })(e, D);
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
                    v = () => p(a.CLOSE),
                    h = (u, e) => {
                        u.keyCode === F.n.ESCAPE && e();
                    };
                var m = t(7572);
                const f = r.instance,
                    b = {
                        DataTracker: o.Z,
                        ViewModel: m.Z,
                        ViewEventType: a,
                        NumberFormatType: l,
                        RealFormatType: E,
                        TimeFormatType: c,
                        DateFormatType: A,
                        makeGlobalBoundingBox: _,
                        sendMoveEvent: (u) => p(a.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: v,
                        sendClosePopOverEvent: () => p(a.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            p(a.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, n, r = R.invalid('resId'), o) => {
                            const i = d.O.view.getViewGlobalPosition(),
                                s = t.getBoundingClientRect(),
                                l = s.x,
                                E = s.y,
                                c = s.width,
                                A = s.height,
                                F = {
                                    x: d.O.view.pxToRem(l) + i.x,
                                    y: d.O.view.pxToRem(E) + i.y,
                                    width: d.O.view.pxToRem(c),
                                    height: d.O.view.pxToRem(A),
                                };
                            p(a.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: e,
                                bbox: _(F),
                                on: !0,
                                args: o,
                            });
                        },
                        addEscapeListener: (u) => {
                            const e = (e) => h(e, u);
                            return (
                                window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e)
                            );
                        },
                        closeOnEsc: (u) => {
                            h(u, v);
                        },
                        handleViewEvent: p,
                        onBindingsReady: C,
                        onLayoutReady: () =>
                            new Promise((u) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        u();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(a.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(a.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(a.POP_OVER),
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
                        ClickOutsideManager: f,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = b;
            },
            8613: (u, e, t) => {
                t.d(e, { Z5: () => n, cy: () => r });
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
                    };
            },
            2674: (u, e, t) => {
                var n = t(6179),
                    r = t.n(n),
                    o = t(493),
                    i = t.n(o),
                    a = t(6483),
                    s = t.n(a),
                    l = t(9768);
                const E = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    c = ['children', 'className', 'theme'];
                function A() {
                    return (
                        (A = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        A.apply(null, arguments)
                    );
                }
                const F = r().forwardRef(function (u, e) {
                        let t = u.children,
                            o = u.className,
                            i = u.theme,
                            a = void 0 === i ? 'default' : i,
                            F = (function (u, e) {
                                if (null == u) return {};
                                var t = {};
                                for (var n in u)
                                    if ({}.hasOwnProperty.call(u, n)) {
                                        if (e.indexOf(n) >= 0) continue;
                                        t[n] = u[n];
                                    }
                                return t;
                            })(u, c);
                        const d = (function () {
                                const u = (0, n.useRef)(0);
                                var e;
                                return (
                                    (e = () => {
                                        window.cancelAnimationFrame(u.current);
                                    }),
                                    (0, n.useEffect)(() => e, []),
                                    (0, n.useMemo)(
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
                            D = r().useRef(null);
                        var B;
                        return (
                            (B = () => {
                                d.run(() => {
                                    const u = D.current;
                                    if (!u) return;
                                    const e = u.scrollWidth,
                                        t = u.scrollHeight;
                                    l.O.view.resize(e, t);
                                    const n = window.getComputedStyle(u);
                                    l.O.view.setSidePaddingsRem({
                                        left: parseInt(n.getPropertyValue('padding-left'), 10),
                                        top: parseInt(n.getPropertyValue('padding-top'), 10),
                                        right: parseInt(n.getPropertyValue('padding-right'), 10),
                                        bottom: parseInt(n.getPropertyValue('padding-bottom'), 10),
                                    });
                                });
                            }),
                            (0, n.useEffect)(B, []),
                            r().createElement(
                                'div',
                                A({}, F, {
                                    className: s()(E.base, E[`base__theme-${a}`], o),
                                    ref: function (u) {
                                        (D.current = u), 'function' == typeof e ? e(u) : e && (e.current = u);
                                    },
                                }),
                                r().createElement('div', { className: E.decorator }, t),
                            )
                        );
                    }),
                    d = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    D = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3],
                    B = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    _ = (u) =>
                        B
                            ? `${u}`
                            : (function (u) {
                                  let e = '';
                                  for (let t = D.length - 1; t >= 0; t--) for (; u >= D[t]; ) (e += d[t]), (u -= D[t]);
                                  return e;
                              })(u);
                var C = t(9916);
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
                function v(u) {
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
                                    type: C.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    m = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            r = u.args,
                            o = u.onMouseEnter,
                            i = u.onMouseLeave,
                            a = u.onMouseDown,
                            s = u.onClick,
                            l = u.ignoreShowDelay,
                            E = void 0 !== l && l,
                            c = u.ignoreMouseClick,
                            A = void 0 !== c && c,
                            F = u.decoratorId,
                            d = void 0 === F ? 0 : F,
                            D = u.isEnabled,
                            B = void 0 === D || D,
                            _ = u.targetId,
                            C = void 0 === _ ? 0 : _,
                            m = u.onShow,
                            f = u.onHide,
                            b = (function (u, e) {
                                if (null == u) return {};
                                var t = {};
                                for (var n in u)
                                    if ({}.hasOwnProperty.call(u, n)) {
                                        if (e.indexOf(n) >= 0) continue;
                                        t[n] = u[n];
                                    }
                                return t;
                            })(u, p);
                        const g = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            w = (0, n.useMemo)(
                                () =>
                                    C ||
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
                                [C],
                            ),
                            y = (0, n.useCallback)(() => {
                                (g.current.isVisible && g.current.timeoutId) ||
                                    (h(t, d, { isMouseEvent: !0, on: !0, arguments: v(r) }, w),
                                    m && m(),
                                    (g.current.isVisible = !0));
                            }, [t, d, r, w, m]),
                            T = (0, n.useCallback)(() => {
                                if (g.current.isVisible || g.current.timeoutId) {
                                    const u = g.current.timeoutId;
                                    u > 0 && (clearTimeout(u), (g.current.timeoutId = 0)),
                                        h(t, d, { on: !1 }, w),
                                        g.current.isVisible && f && f(),
                                        (g.current.isVisible = !1);
                                }
                            }, [t, d, w, f]),
                            k = (0, n.useCallback)((u) => {
                                g.current.isVisible &&
                                    ((g.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (g.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(g.current.prevTarget) && T();
                                    }, 200)));
                            }, []);
                        return (
                            (0, n.useEffect)(() => {
                                const u = g.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', k, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', k, { capture: !0 }),
                                            u && window.clearTimeout(u);
                                    }
                                );
                            }, []),
                            (0, n.useEffect)(() => {
                                !1 === B && T();
                            }, [B, T]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', T),
                                    () => {
                                        window.removeEventListener('mouseleave', T), T();
                                    }
                                ),
                                [T],
                            ),
                            B
                                ? (0, n.cloneElement)(
                                      e,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((O = e.props.onMouseEnter),
                                                  (u) => {
                                                      (u.clientX === window.innerWidth &&
                                                          u.clientY === window.innerHeight) ||
                                                          ((g.current.timeoutId = window.setTimeout(y, E ? 100 : 400)),
                                                          o && o(u),
                                                          O && O(u));
                                                  }),
                                              onMouseLeave: ((u) => (e) => {
                                                  T(), null == i || i(e), null == u || u(e);
                                              })(e.props.onMouseLeave),
                                              onClick: ((u) => (e) => {
                                                  !1 === A && T(), null == s || s(e), null == u || u(e);
                                              })(e.props.onClick),
                                              onMouseDown: ((u) => (e) => {
                                                  !1 === A && T(), null == a || a(e), null == u || u(e);
                                              })(e.props.onMouseDown),
                                          },
                                          b,
                                      ),
                                  )
                                : e
                        );
                        var O;
                    },
                    f = ['children'];
                function b() {
                    return (
                        (b = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        b.apply(null, arguments)
                    );
                }
                const g = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t = {};
                                for (var n in u)
                                    if ({}.hasOwnProperty.call(u, n)) {
                                        if (e.indexOf(n) >= 0) continue;
                                        t[n] = u[n];
                                    }
                                return t;
                            })(u, f);
                        return r().createElement(
                            m,
                            b(
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
                    w = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function y() {
                    return (
                        (y = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        y.apply(null, arguments)
                    );
                }
                const T = R.views.common.tooltip_window.simple_tooltip_content,
                    k = (u) => {
                        let e = u.children,
                            t = u.body,
                            o = u.header,
                            i = u.note,
                            a = u.alert,
                            s = u.args,
                            l = (function (u, e) {
                                if (null == u) return {};
                                var t = {};
                                for (var n in u)
                                    if ({}.hasOwnProperty.call(u, n)) {
                                        if (e.indexOf(n) >= 0) continue;
                                        t[n] = u[n];
                                    }
                                return t;
                            })(u, w);
                        const E = (0, n.useMemo)(() => {
                            const u = Object.assign({}, s, { body: t, header: o, note: i, alert: a });
                            for (const e in u) void 0 === u[e] && delete u[e];
                            return u;
                        }, [a, t, o, i, s]);
                        return r().createElement(
                            m,
                            y(
                                {
                                    contentId:
                                        ((c = null == s ? void 0 : s.hasHtmlContent),
                                        c ? T.SimpleTooltipHtmlContent('resId') : T.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: E,
                                },
                                l,
                            ),
                            e,
                        );
                        var c;
                    };
                function O() {
                    return (
                        (O = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        O.apply(null, arguments)
                    );
                }
                const x = ({ children: u, tooltipArgs: e, className: t }) => {
                    if (!e) return u;
                    const n = r().createElement('div', { className: t }, u);
                    if (e.header || e.body) return r().createElement(k, e, n);
                    const o = e.contentId;
                    return o ? r().createElement(m, O({}, e, { contentId: o }), n) : r().createElement(g, e, n);
                };
                var L = t(8045);
                const P = {
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
                let S;
                t(1281),
                    (function (u) {
                        (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
                    })(S || (S = {}));
                let N, M, I;
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
                    })(N || (N = {})),
                    (function (u) {
                        (u.FlexStart = 'flex-start'), (u.Center = 'center'), (u.FlexEnd = 'flex-end');
                    })(M || (M = {})),
                    (function (u) {
                        (u.NBSP = ' '), (u.ZWNBSP = '\ufeff'), (u.NEW_LINE = '\n');
                    })(I || (I = {}));
                const j = { [I.NBSP]: N.NoBreakSymbol, [I.ZWNBSP]: N.NoBreakSymbol, [I.NEW_LINE]: N.LineBreak },
                    V = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'th'].includes(
                        R.strings.settings.LANGUAGE_CODE().toLowerCase(),
                    ),
                    W = {
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
                    U = 'renderers_word_f3',
                    z = (u) => ({ color: `#${u}` }),
                    G = ({ elementList: u, textBlock: e, key: t }) => {
                        const n = e.colorTag;
                        return n
                            ? W[n]
                                ? r().createElement(
                                      'span',
                                      { key: t, 'data-block-type': e.blockType, className: s()(U, W[n]) },
                                      u,
                                  )
                                : r().createElement(
                                      'span',
                                      { key: t, 'data-block-type': e.blockType, className: U, style: z(n) },
                                      u,
                                  )
                            : r().createElement('span', { key: t, 'data-block-type': e.blockType, className: U }, u);
                    },
                    q = {
                        [N.Word]: G,
                        [N.NoBreakSymbol]: G,
                        [N.Binding]: ({ elementList: u, textBlock: e, key: t }) =>
                            r().createElement(
                                'span',
                                { key: t, 'data-block-type': e.blockType },
                                u.map((u) => r().createElement(r().Fragment, { key: t }, u)),
                            ),
                        [N.LineBreak]: ({ key: u }) =>
                            r().createElement('span', {
                                key: u,
                                'data-block-type': N.LineBreak,
                                className: 'renderers_lineBreak_b5',
                            }),
                        [N.NewLine]: ({ elementList: u, key: e }) =>
                            r().createElement(
                                'span',
                                { key: e, 'data-block-type': N.NewLine, className: 'renderers_newLine_bd' },
                                u,
                            ),
                        [N.NoBreakWrapper]: ({ elementList: u, key: e }) =>
                            r().createElement(
                                'span',
                                {
                                    key: e,
                                    'data-block-type': N.NoBreakWrapper,
                                    className: 'renderers_noBreakWrapper_10',
                                },
                                u,
                            ),
                    },
                    K = (u, e, t) => {
                        const n = [];
                        return (
                            u.childList.forEach((r, o) => {
                                const i = `${t}_${o}`;
                                if (((u) => void 0 !== u.childList)(r)) {
                                    const u = r,
                                        e = u.blockType,
                                        t = K(u, q[e], i);
                                    n.push(...t);
                                } else n.push(e({ elementList: [r], textBlock: u, key: i }));
                            }),
                            n
                        );
                    },
                    H = (u, e, t, n) => {
                        let r = e.exec(u),
                            o = 0;
                        for (; r; ) o !== r.index && t(u.slice(o, r.index)), n(r), (o = e.lastIndex), (r = e.exec(u));
                        o !== u.length && t(u.slice(o));
                    },
                    Y = new RegExp('[฀-๿][ัำ-ฺ็-๎]*', 'gu'),
                    $ = V
                        ? (u) => {
                              const e = [];
                              return (
                                  H(
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
                                                      H(
                                                          u,
                                                          /\S\s+/g,
                                                          (u) => {
                                                              var t;
                                                              'th' === R.strings.settings.LANGUAGE_CODE().toLowerCase()
                                                                  ? e.push(...((t = u), t.match(Y) || []))
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
                              const t = /[\s\u002d]/g;
                              let n = t.exec(u);
                              if (!n) return [u];
                              const r = [];
                              let o = 0;
                              for (; n; ) {
                                  const i = e.justifyContent === M.FlexEnd ? n.index : t.lastIndex;
                                  r.push(u.slice(o, i)), (o = i), (n = t.exec(u));
                              }
                              return o !== u.length && r.push(u.slice(o)), r;
                          },
                    Z = (u, e = '', t) => {
                        const n = [];
                        return (
                            H(
                                u,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (u) => {
                                    n.push({ blockType: N.Word, colorTag: e, childList: $(u, t) });
                                },
                                (u) => {
                                    const t = u[0],
                                        r = j[t.charAt(0)];
                                    r === N.LineBreak
                                        ? n.push(
                                              ...((u) => {
                                                  const e = [
                                                      {
                                                          blockType: N.LineBreak,
                                                          colorTag: '',
                                                          childList: [u.charAt(0)],
                                                      },
                                                  ];
                                                  for (let t = 0; t < u.length - 1; t++)
                                                      e.push({
                                                          blockType: N.NewLine,
                                                          colorTag: '',
                                                          childList: [u.charAt(0)],
                                                      });
                                                  return e;
                                              })(t),
                                          )
                                        : n.push({ blockType: r, colorTag: e, childList: [t] });
                                },
                            ),
                            n
                        );
                    },
                    X = (u, e, t = '', n) => {
                        const r = [];
                        return (
                            H(
                                u,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (u) => {
                                    r.push(...Z(u, t, n));
                                },
                                (u) => {
                                    const o = u[1],
                                        i = void 0 === e[o] ? u[0] : e[o];
                                    'string' == typeof i || 'number' == typeof i
                                        ? r.push(...Z(String(i), t, n))
                                        : r.push({ blockType: N.Binding, colorTag: t, childList: [i] });
                                },
                            ),
                            r
                        );
                    },
                    Q = (u, e) => {
                        if (!u) return [e];
                        const t = [],
                            n = Object.assign({}, e, { childList: e.childList.splice(0, 1) });
                        if (u.blockType === N.NoBreakWrapper) u.childList.push(n), t.push(u);
                        else {
                            const e = Object.assign({}, u, { childList: u.childList.splice(-1) });
                            u.childList.length > 0 && t.push(u),
                                t.push({ blockType: N.NoBreakWrapper, colorTag: '', childList: [e, n] });
                        }
                        return e.childList.length > 0 && t.push(e), t;
                    },
                    J = (u, e = {}, t) => {
                        if (!u) return [];
                        const n = ((u) => {
                            const e = [];
                            let t = !1;
                            return (
                                u.forEach((u) => {
                                    u.blockType === N.NoBreakSymbol
                                        ? ((t = !0), e.push(...Q(e.pop(), u)))
                                        : (t ? e.push(...Q(e.pop(), u)) : e.push(u), (t = !1));
                                }),
                                e
                            );
                        })(
                            ((u, e, t) => {
                                const n = [];
                                return (
                                    H(
                                        u,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})(\s*)/g,
                                        (u) => {
                                            n.push(...X(u, e, '', t));
                                        },
                                        (u) => {
                                            n.push(...X(u[2] + u[3], e, u[1], t));
                                        },
                                    ),
                                    n
                                );
                            })(((r = u), r.replace(/&nbsp;/g, ' ')).replace(/&zwnbsp;/g, '\ufeff'), e, t),
                        );
                        var r;
                        return ((u) => {
                            const e = [];
                            return (
                                u.forEach((u, t) => {
                                    e.push(
                                        ...((u, e) => {
                                            const t = [],
                                                n = u.blockType,
                                                r = q[n],
                                                o = K(u, r, e);
                                            return (
                                                n === N.NoBreakWrapper
                                                    ? t.push(r({ elementList: o, textBlock: u, key: `${e}` }))
                                                    : t.push(...o),
                                                t
                                            );
                                        })(u, t),
                                    );
                                }),
                                e
                            );
                        })(n);
                    },
                    uu = (u, e) => !u || u.offsetTop + u.offsetHeight > e,
                    eu = (u, e) => u.offsetLeft + u.offsetWidth - e,
                    tu = (u, e, t) => {
                        if (!u || !u.textContent) return [!1, 0];
                        if (u.offsetLeft > e) return [!1, 0];
                        const n = eu(u, e),
                            r = u.textContent.length,
                            o = u.offsetWidth / r,
                            i = Math.ceil(n / o);
                        if (n > 0) {
                            const n = Math.floor((e - u.offsetLeft) / o);
                            return n >= t ? [!0, t + i] : [!1, n];
                        }
                        const a = Math.max(t + i, 0);
                        return r < a ? [!1, 0] : [!0, a];
                    },
                    nu = (u, e, t, n, o, i) => {
                        let a = -1,
                            s = null;
                        for (let l = t; l >= 0; l--) {
                            const t = u[l],
                                E = Number(u[l].getAttribute('data-block-type'));
                            if (E === N.LineBreak || E === N.NewLine || E === N.Binding) continue;
                            const c = t.textContent || '';
                            if (!(t.childElementCount > 1)) {
                                const u = tu(t, n, o),
                                    E = u[0],
                                    A = u[1];
                                if (!E) {
                                    A > 0 && (o -= A);
                                    continue;
                                }
                                const F = c.slice(0, c.length - A) + i,
                                    d = e[l];
                                (s = r().cloneElement(d, d.props, F)), (a = l);
                                break;
                            }
                            {
                                const u = t.children,
                                    E = e[l],
                                    A = E.props.children,
                                    F = nu(u, A, u.length - 1, n, o, i),
                                    d = F[0],
                                    D = F[1];
                                if (!(d < 0)) {
                                    const u = A.slice(0, d);
                                    (s = r().cloneElement(E, E.props, u, D)), (a = l);
                                    break;
                                }
                                o -= c.length;
                            }
                        }
                        return [a, s];
                    },
                    ru = r().memo(
                        ({
                            text: u,
                            classMix: e,
                            onSizeChanged: t,
                            binding: o,
                            isTooltipEnable: i = !1,
                            isTruncationAvailable: a = !1,
                            customTooltipArgs: l,
                            targetId: E,
                            justifyContent: c = M.FlexStart,
                            alignContent: A = M.FlexStart,
                            truncateIdentify: F = '...',
                        }) => {
                            const d = (0, n.useRef)(null),
                                D = (0, n.useRef)({ height: 0, width: 0 }),
                                B = (0, n.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                _ = B[0],
                                C = B[1],
                                p = (0, n.useMemo)(() => J(u, o, { justifyContent: c }), [o, c, u]),
                                v = (0, n.useMemo)(() => {
                                    if (
                                        i &&
                                        _.isTruncated &&
                                        (!o || !Object.values(o).find((u) => 'object' == typeof u))
                                    )
                                        return {
                                            args: Object.assign({ text: u }, l, {
                                                stringifyKwargs: o ? JSON.stringify(o) : '',
                                            }),
                                            contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                            targetId: E,
                                        };
                                }, [o, i, E, u, l, _.isTruncated]),
                                h = (0, n.useCallback)(
                                    (u) => {
                                        (D.current.width = u.contentRect.width),
                                            (D.current.height = u.contentRect.height);
                                        const e = ((u, e, t, n = '...') => {
                                                const r = [...e],
                                                    o = u.current;
                                                if (!o) return [r, !1];
                                                const i = t.height,
                                                    a = t.width,
                                                    s = o.lastElementChild;
                                                if (!uu(s, i) && eu(s, a) <= 0) return [r, !1];
                                                const l = o.children,
                                                    E = ((u, e) => {
                                                        let t = 0,
                                                            n = u.length - 1;
                                                        for (; n - t >= 0; ) {
                                                            const r = t + Math.ceil(0.5 * (n - t));
                                                            uu(u[r], e) ? (n = r - 1) : (t = r + 1);
                                                        }
                                                        return t - 1;
                                                    })(l, i);
                                                if (E < 0) return [r, !1];
                                                const c = nu(l, r, E, a, n.length, n),
                                                    A = c[0],
                                                    F = c[1];
                                                return F && (r.splice(A, 1, F), r.splice(A + 1)), [r, !0];
                                            })(d, p, D.current, F),
                                            n = e[0],
                                            r = e[1];
                                        C({ elementList: n, isTruncated: r, isTruncateFinished: !0 }), t && t(r);
                                    },
                                    [t, F, p],
                                ),
                                m = (0, n.useMemo)(() => ({ justifyContent: c, alignContent: A }), [A, c]);
                            return (
                                ((u, e, t = !0) => {
                                    const r = (0, n.useCallback)(
                                        (u) => {
                                            const t = u[0];
                                            e && e(t);
                                        },
                                        [e],
                                    );
                                    (0, n.useEffect)(() => {
                                        if (!u.current || !t) return;
                                        const e = new L.Z((u) => r(u));
                                        return (
                                            e.observe(u.current),
                                            () => {
                                                e.disconnect();
                                            }
                                        );
                                    }, [r, t, u]);
                                })(d, h, a),
                                r().createElement(
                                    'div',
                                    {
                                        className: s()(
                                            P.base,
                                            e,
                                            P.base__zeroPadding,
                                            a && P.base__isTruncationAvailable,
                                        ),
                                        style: m,
                                    },
                                    r().createElement('div', { className: P.unTruncated, ref: d }, p),
                                    r().createElement(
                                        x,
                                        {
                                            tooltipArgs: v,
                                            className: s()(
                                                P.tooltip,
                                                P[`tooltip__justify-${c}`],
                                                P[`tooltip__align-${A}`],
                                            ),
                                        },
                                        r().createElement(
                                            'div',
                                            {
                                                className: s()(
                                                    P.truncated,
                                                    !_.isTruncateFinished && a && P.truncated__hide,
                                                ),
                                                style: m,
                                            },
                                            _.isTruncateFinished && a ? _.elementList : p,
                                        ),
                                    ),
                                )
                            );
                        },
                    );
                var ou = t(3403);
                function iu() {
                    return !1;
                }
                console.log;
                var au = t(9174);
                function su(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, n = Array(e); t < e; t++) n[t] = u[t];
                    return n;
                }
                const lu = (u) => (0 === u ? window : window.subViews.get(u)),
                    Eu = ((u, e) => {
                        const t = (0, n.createContext)({});
                        return [
                            function ({ mode: u = 'real', options: o, children: i, mocks: a }) {
                                const s = (0, n.useRef)([]),
                                    E = (u, t, n) => {
                                        var r;
                                        const o = (function ({
                                                initializer: u = !0,
                                                rootId: e = 0,
                                                getRoot: t = lu,
                                                context: n = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function o(u, e = 0) {
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
                                                    subscribe: (t, o) => {
                                                        const a = 'string' == typeof o ? `${n}.${o}` : n,
                                                            s = l.O.view.addModelObserver(a, e, !0);
                                                        return r.set(s, t), u && t(i(o)), s;
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
                                                                                    return su(u, e);
                                                                                var t = {}.toString
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
                                                                                          ? su(u, e)
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
                                                            o(u.value, e);
                                                    },
                                                    unsubscribe: o,
                                                };
                                            })(t),
                                            i =
                                                'real' === u
                                                    ? o
                                                    : Object.assign({}, o, {
                                                          readByPath:
                                                              null != (r = null == n ? void 0 : n.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            a = (e) =>
                                                'mocks' === u ? (null == n ? void 0 : n.getter(e)) : i.readByPath(e),
                                            E = (u) => s.current.push(u),
                                            c = (({ observableModel: u }) => ({
                                                root: u.object(),
                                                levels: u.array('levels'),
                                            }))({
                                                mode: u,
                                                readByPath: a,
                                                externalModel: i,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const n = null != t ? t : a(e),
                                                            r = au.LO.box(n, { equals: iu });
                                                        return (
                                                            'real' === u &&
                                                                i.subscribe(
                                                                    (0, au.aD)((u) => r.set(u)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const n = null != t ? t : a(e),
                                                            r = au.LO.box(n, { equals: iu });
                                                        return (
                                                            'real' === u &&
                                                                i.subscribe(
                                                                    (0, au.aD)((u) => r.set(u)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const n = a(t);
                                                        if (Array.isArray(e)) {
                                                            const r = e.reduce(
                                                                (u, e) => ((u[e] = au.LO.box(n[e], {})), u),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === u &&
                                                                    i.subscribe(
                                                                        (0, au.aD)((u) => {
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
                                                                a = o.reduce(
                                                                    (u, [e, t]) => ((u[t] = au.LO.box(n[e], {})), u),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === u &&
                                                                    i.subscribe(
                                                                        (0, au.aD)((u) => {
                                                                            o.forEach(([e, t]) => {
                                                                                a[t].set(u[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: E,
                                            }),
                                            A = { mode: u, model: c, externalModel: i, cleanup: E };
                                        return {
                                            model: c,
                                            controls: 'mocks' === u && n ? n.controls(A) : e(A),
                                            externalModel: i,
                                            mode: u,
                                        };
                                    },
                                    c = (0, n.useRef)(!1),
                                    A = (0, n.useState)(u),
                                    F = A[0],
                                    d = A[1],
                                    D = (0, n.useState)(() => E(u, o, a)),
                                    B = D[0],
                                    _ = D[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        c.current ? _(E(F, o, a)) : (c.current = !0);
                                    }, [a, F, o]),
                                    (0, n.useEffect)(() => {
                                        d(u);
                                    }, [u]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            B.externalModel.dispose(), s.current.forEach((u) => u());
                                        },
                                        [B],
                                    ),
                                    r().createElement(t.Provider, { value: B }, i)
                                );
                            },
                            () => (0, n.useContext)(t),
                        ];
                    })(0, function () {}),
                    cu = Eu[0],
                    Au = Eu[1],
                    Fu = 'LevelReservesApp_divider_ef',
                    du = 'LevelReservesApp_levelContainer_8a',
                    Du = 'LevelReservesApp_levelTitle_eb',
                    Bu = 'LevelReservesApp_levelDesc_bf',
                    _u = (0, ou.Pi)(() => {
                        const u = Au().model,
                            e = u.root.get().hasOptionalReserves,
                            t = u.levels.get(),
                            n = (u) => R.strings.fl_common.levelReservesTooltip.$dyn(u ? 'level' : 'levelAvailable'),
                            o = e ? t.length + 1 : t.length;
                        return r().createElement(
                            F,
                            null,
                            r().createElement(
                                'div',
                                { className: 'LevelReservesApp_base_b8' },
                                r().createElement(
                                    'div',
                                    { className: 'LevelReservesApp_title_80' },
                                    R.strings.fl_common.levelReservesTooltip.title(),
                                ),
                                r().createElement(
                                    'div',
                                    { className: 'LevelReservesApp_desc_0c' },
                                    R.strings.fl_common.levelReservesTooltip.desc(),
                                ),
                                r().createElement(
                                    'div',
                                    { className: 'LevelReservesApp_container_5c' },
                                    r().createElement('div', { className: Fu }),
                                    ((i = t),
                                    (a = (u, e) =>
                                        r().createElement(
                                            r().Fragment,
                                            { key: e },
                                            r().createElement(
                                                'div',
                                                { className: du },
                                                r().createElement(
                                                    'div',
                                                    { className: Du },
                                                    r().createElement(ru, {
                                                        text: R.strings.fl_common.levelReservesTooltip.levelTitle(),
                                                        binding: { lvl: _(e + 1) },
                                                    }),
                                                ),
                                                r().createElement(
                                                    'div',
                                                    { className: Bu },
                                                    r().createElement(ru, {
                                                        text: n(e),
                                                        binding: {
                                                            lvl: R.strings.fl_info_page.progression.ranksTable.$dyn(u),
                                                        },
                                                    }),
                                                ),
                                            ),
                                            r().createElement('div', { className: Fu }),
                                        )),
                                    Array.isArray(i)
                                        ? i.map(a)
                                        : i.map((u, e, t) => a(null == u ? void 0 : u.value, e))),
                                    e &&
                                        r().createElement(
                                            r().Fragment,
                                            null,
                                            r().createElement(
                                                'div',
                                                { className: du },
                                                r().createElement(
                                                    'div',
                                                    { className: Du },
                                                    r().createElement(ru, {
                                                        text: R.strings.fl_common.levelReservesTooltip.levelTitle(),
                                                        binding: { lvl: _(o) },
                                                    }),
                                                ),
                                                r().createElement(
                                                    'div',
                                                    { className: Bu },
                                                    r().createElement(ru, {
                                                        text: R.strings.fl_common.levelReservesTooltip.optionalReserve(),
                                                    }),
                                                ),
                                            ),
                                            r().createElement('div', { className: Fu }),
                                        ),
                                ),
                                r().createElement(
                                    'div',
                                    { className: 'LevelReservesApp_footer_d3' },
                                    r().createElement('div', { className: 'LevelReservesApp_infoIcon_80' }),
                                    r().createElement(ru, {
                                        text: R.strings.fl_common.levelReservesTooltip.info(),
                                        binding: { lvl: _(o) },
                                        classMix: 'LevelReservesApp_infoLabel_72',
                                    }),
                                ),
                            ),
                        );
                        var i, a;
                    });
                engine.whenReady.then(() => {
                    i().render(
                        r().createElement(cu, null, r().createElement(_u, null)),
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
                for (s = 0; s < deferred.length; s++) {
                    for (var [e, t, n] = deferred[s], o = !0, i = 0; i < e.length; i++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[i]))
                            ? e.splice(i--, 1)
                            : ((o = !1), n < r && (r = n));
                    if (o) {
                        deferred.splice(s--, 1);
                        var a = t();
                        void 0 !== a && (u = a);
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
        (__webpack_require__.j = 609),
        (() => {
            var u = { 609: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var n,
                        r,
                        [o, i, a] = t,
                        s = 0;
                    if (o.some((e) => 0 !== u[e])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (a) var l = a(__webpack_require__);
                    }
                    for (e && e(t); s < o.length; s++)
                        (r = o[s]), __webpack_require__.o(u, r) && u[r] && u[r][0](), (u[r] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(2674));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
