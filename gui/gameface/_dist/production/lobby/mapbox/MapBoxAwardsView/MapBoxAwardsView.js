(() => {
    'use strict';
    var __webpack_modules__ = {
            768: (u, e, t) => {
                t.d(e, { O: () => tu });
                var n = {};
                t.r(n),
                    t.d(n, { mouse: () => F, off: () => _, on: () => c, onResize: () => l, onScaleUpdated: () => E });
                var a = {};
                t.r(a),
                    t.d(a, {
                        events: () => n,
                        getMouseGlobalPosition: () => m,
                        getSize: () => B,
                        graphicsQuality: () => C,
                        playSound: () => d,
                        setRTPC: () => D,
                    });
                var r = {};
                t.r(r), t.d(r, { getBgUrl: () => w, getTextureUrl: () => v });
                var i = {};
                function s(u) {
                    return (e) => (
                        engine.on(u, e),
                        () => {
                            engine.off(u, e);
                        }
                    );
                }
                function o(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                t.r(i),
                    t.d(i, {
                        addModelObserver: () => I,
                        addPreloadTexture: () => M,
                        children: () => r,
                        displayStatus: () => b,
                        displayStatusIs: () => J,
                        events: () => f,
                        extraSize: () => uu,
                        forceTriggerMouseMove: () => Q,
                        freezeTextureBeforeResize: () => $,
                        getBrowserTexturePath: () => N,
                        getDisplayStatus: () => Z,
                        getScale: () => q,
                        getSize: () => G,
                        getViewGlobalPosition: () => W,
                        isEventHandled: () => K,
                        isFocused: () => X,
                        pxToRem: () => Y,
                        remToPx: () => V,
                        resize: () => H,
                        sendEvent: () => x,
                        setAnimateWindow: () => z,
                        setEventHandled: () => j,
                        setInputPaddingsRem: () => L,
                        setSidePaddingsRem: () => U,
                        whenTutorialReady: () => eu,
                    });
                const l = s('clientResized'),
                    E = s('self.onScaleUpdated'),
                    c = (u, e) => engine.on(u, e),
                    _ = (u, e) => engine.off(u, e),
                    A = { down: s('mousedown'), up: s('mouseup'), move: s('mousemove') };
                const F = (function () {
                    const u = { listeners: 0, enabled: !0, initialized: !1 };
                    function e() {
                        u.enabled && o(!1);
                    }
                    function t() {
                        u.enabled && o(!0);
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
                            : o(!1);
                    }
                    const a = ['down', 'up', 'move'].reduce(
                        (e, t) => (
                            (e[t] = (function (e) {
                                return (t) => {
                                    u.listeners += 1;
                                    let a = !0;
                                    const r = `mouse${e}`,
                                        i = A[e]((u) => t([u, 'outside']));
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
                    return Object.assign({}, a, {
                        disable() {
                            (u.enabled = !1), n();
                        },
                        enable() {
                            (u.enabled = !0), n();
                        },
                        enableOutside() {
                            u.enabled && o(!0);
                        },
                        disableOutside() {
                            u.enabled && o(!1);
                        },
                    });
                })();
                function d(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error(`playSound('${u}'): `, e);
                    });
                }
                function D(u, e) {
                    engine.call('SetRTPCGlobal', u, e).catch((t) => {
                        console.error(`setRTPC('${u}', '${e}'): `, t);
                    });
                }
                function B(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function m(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const C = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    g = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    p = Object.keys(g).reduce((u, e) => ((u[e] = () => d(g[e])), u), {}),
                    h = { play: Object.assign({}, p, { sound: d }), setRTPC: D };
                function v(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function w(u, e, t) {
                    return `url(${v(u, e, t)})`;
                }
                const b = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    f = {
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
                    T = ['args'];
                const S = 2,
                    R = 16,
                    P = 32,
                    O = 64,
                    y = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const a = e.args,
                                r = (function (u, e) {
                                    if (null == u) return {};
                                    var t = {};
                                    for (var n in u)
                                        if ({}.hasOwnProperty.call(u, n)) {
                                            if (e.indexOf(n) >= 0) continue;
                                            t[n] = u[n];
                                        }
                                    return t;
                                })(e, T);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, r, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, r));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: u });
                        var n;
                    },
                    x = {
                        close(u) {
                            y('popover' === u ? S : P);
                        },
                        minimize() {
                            y(O);
                        },
                        move(u) {
                            y(R, { isMouseEvent: !0, on: u });
                        },
                    },
                    k = 15;
                function M(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function L(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, k);
                }
                function N(u, e, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, n);
                }
                function I(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function U(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, k);
                }
                function G(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function H(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function W(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: V(e.x), y: V(e.y) };
                }
                function $() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function q() {
                    return viewEnv.getScale();
                }
                function Y(u) {
                    return viewEnv.pxToRem(u);
                }
                function V(u) {
                    return viewEnv.remToPx(u);
                }
                function z(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function X() {
                    return viewEnv.isFocused();
                }
                function j() {
                    return viewEnv.setEventHandled();
                }
                function K() {
                    return viewEnv.isEventHandled();
                }
                function Q() {
                    viewEnv.forceTriggerMouseMove();
                }
                function Z() {
                    return viewEnv.getShowingStatus();
                }
                const J = Object.keys(b).reduce((u, e) => ((u[e] = () => viewEnv.getShowingStatus() === b[e]), u), {}),
                    uu = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    eu = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : f.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]),
                    tu = { view: i, client: a, sound: h };
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
            358: (u, e, t) => {
                t.d(e, { Z: () => r });
                var n = t(768);
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
            572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(916);
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
            916: (u, e, t) => {
                t.d(e, { Sw: () => r.Z, B3: () => o, Z5: () => i.Z5, B0: () => s, ry: () => B, Sy: () => C });
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
                var r = t(358);
                var i = t(613);
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
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = t(521),
                    A = t(768);
                const F = ['args'];
                function d(u, e, t, n, a, r, i) {
                    try {
                        var s = u[r](i),
                            o = s.value;
                    } catch (u) {
                        return void t(u);
                    }
                    s.done ? e(o) : Promise.resolve(o).then(n, a);
                }
                const D = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
                    B = (function () {
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
                                    var t = {};
                                    for (var n in u)
                                        if ({}.hasOwnProperty.call(u, n)) {
                                            if (e.indexOf(n) >= 0) continue;
                                            t[n] = u[n];
                                        }
                                    return t;
                                })(e, F);
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
                    C = () => m(s.CLOSE),
                    g = (u, e) => {
                        u.keyCode === _.n.ESCAPE && e();
                    };
                var p = t(572);
                const h = a.instance,
                    v = {
                        DataTracker: r.Z,
                        ViewModel: p.Z,
                        ViewEventType: s,
                        NumberFormatType: o,
                        RealFormatType: l,
                        TimeFormatType: E,
                        DateFormatType: c,
                        makeGlobalBoundingBox: D,
                        sendMoveEvent: (u) => m(s.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: C,
                        sendClosePopOverEvent: () => m(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            m(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, n, a = R.invalid('resId'), r) => {
                            const i = A.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                E = o.y,
                                c = o.width,
                                _ = o.height,
                                F = {
                                    x: A.O.view.pxToRem(l) + i.x,
                                    y: A.O.view.pxToRem(E) + i.y,
                                    width: A.O.view.pxToRem(c),
                                    height: A.O.view.pxToRem(_),
                                };
                            m(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: e,
                                bbox: D(F),
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
                            g(u, C);
                        },
                        handleViewEvent: m,
                        onBindingsReady: B,
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
                        ClickOutsideManager: h,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = v;
            },
            613: (u, e, t) => {
                t.d(e, { Ew: () => r, Z5: () => n, cy: () => a });
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
                    },
                    r = {
                        getRegionalDateTime: (u, e, t = !0) => regionalDateTime.getRegionalDateTime(u, e, t),
                        getFormattedDateTime: (u, e, t = !0) => regionalDateTime.getFormattedDateTime(u, e, t),
                    };
            },
            115: (u, e, t) => {
                var n = t(179),
                    a = t.n(n);
                const r = (u, e, t) =>
                    e.extraLargeHeight || e.largeHeight || e.mediumHeight || e.smallHeight || e.extraSmallHeight
                        ? (e.extraLargeHeight && t.extraLarge) ||
                          (e.largeHeight && t.large) ||
                          (e.mediumHeight && t.medium) ||
                          (e.smallHeight && t.small) ||
                          (e.extraSmallHeight && t.extraSmall)
                            ? u
                            : null
                        : u;
                var i = t(768);
                const s = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var o;
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
                })(o || (o = {}));
                const E = i.O.client.getSize('rem'),
                    c = E.width,
                    _ = E.height,
                    A = Object.assign({ width: c, height: _ }, l(c, _, s)),
                    F = (0, n.createContext)(A),
                    d = ['children'];
                const D = (u) => {
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
                        })(u, d);
                    const a = (0, n.useContext)(F),
                        i = a.extraLarge,
                        s = a.large,
                        o = a.medium,
                        l = a.small,
                        E = a.extraSmall,
                        c = a.extraLargeWidth,
                        _ = a.largeWidth,
                        A = a.mediumWidth,
                        D = a.smallWidth,
                        B = a.extraSmallWidth,
                        m = a.extraLargeHeight,
                        C = a.largeHeight,
                        g = a.mediumHeight,
                        p = a.smallHeight,
                        h = a.extraSmallHeight,
                        v = { extraLarge: m, large: C, medium: g, small: p, extraSmall: h };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && i) return e;
                        if (t.large && s) return e;
                        if (t.medium && o) return e;
                        if (t.small && l) return e;
                        if (t.extraSmall && E) return e;
                    } else {
                        if (t.extraLargeWidth && c) return r(e, t, v);
                        if (t.largeWidth && _) return r(e, t, v);
                        if (t.mediumWidth && A) return r(e, t, v);
                        if (t.smallWidth && D) return r(e, t, v);
                        if (t.extraSmallWidth && B) return r(e, t, v);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && m) return e;
                            if (t.largeHeight && C) return e;
                            if (t.mediumHeight && g) return e;
                            if (t.smallHeight && p) return e;
                            if (t.extraSmallHeight && h) return e;
                        }
                    }
                    return null;
                };
                D.defaultProps = {
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
                (0, n.memo)(D);
                const B = (u) => {
                        const e = (0, n.useRef)(!1);
                        e.current || (u(), (e.current = !0));
                    },
                    m = ({ children: u }) => {
                        const e = (0, n.useContext)(F),
                            t = (0, n.useState)(e),
                            r = t[0],
                            o = t[1],
                            E = (0, n.useCallback)((u, e) => {
                                const t = i.O.view.pxToRem(u),
                                    n = i.O.view.pxToRem(e);
                                o(Object.assign({ width: t, height: n }, l(t, n, s)));
                            }, []),
                            c = (0, n.useCallback)(() => {
                                const u = i.O.client.getSize('px');
                                E(u.width, u.height);
                            }, [E]);
                        B(() => {
                            i.O.client.events.on('clientResized', E), i.O.client.events.on('self.onScaleUpdated', c);
                        }),
                            (0, n.useEffect)(
                                () => () => {
                                    i.O.client.events.off('clientResized', E),
                                        i.O.client.events.off('self.onScaleUpdated', c);
                                },
                                [E, c],
                            );
                        const _ = (0, n.useMemo)(() => Object.assign({}, r), [r]);
                        return a().createElement(F.Provider, { value: _ }, u);
                    };
                var C = t(493),
                    g = t.n(C),
                    p = t(483),
                    h = t.n(p);
                function v(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error('[lib/sounds.js] playSound(', u, '): ', e);
                    });
                }
                const w = {
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
                    base__large: 'CButton_base__large_5c',
                    base__disabled: 'CButton_base__disabled_d9',
                    back: 'CButton_back_e5',
                    texture: 'CButton_texture_fe',
                    state: 'CButton_state_11',
                    base__focus: 'CButton_base__focus_83',
                    stateHighlightHover: 'CButton_stateHighlightHover_ff',
                    stateHighlightActive: 'CButton_stateHighlightActive_35',
                    stateDisabled: 'CButton_stateDisabled_54',
                    base__highlightActive: 'CButton_base__highlightActive_b2',
                    content: 'CButton_content_cc',
                };
                let b, f;
                !(function (u) {
                    (u.main = 'main'),
                        (u.primary = 'primary'),
                        (u.primaryGreen = 'primaryGreen'),
                        (u.primaryRed = 'primaryRed'),
                        (u.secondary = 'secondary'),
                        (u.ghost = 'ghost');
                })(b || (b = {})),
                    (function (u) {
                        (u.extraSmall = 'extraSmall'), (u.small = 'small'), (u.medium = 'medium'), (u.large = 'large');
                    })(f || (f = {}));
                const T = ({
                    children: u,
                    size: e,
                    isFocused: t,
                    type: r,
                    disabled: i,
                    mixClass: s,
                    soundHover: o,
                    soundClick: l,
                    onMouseEnter: E,
                    onMouseMove: c,
                    onMouseDown: _,
                    onMouseUp: A,
                    onMouseLeave: F,
                    onClick: d,
                }) => {
                    const D = (0, n.useRef)(null),
                        B = (0, n.useState)(t),
                        m = B[0],
                        C = B[1],
                        g = (0, n.useState)(!1),
                        p = g[0],
                        f = g[1];
                    return (
                        (0, n.useEffect)(() => {
                            function u(u) {
                                m && null !== D.current && !D.current.contains(u.target) && C(!1);
                            }
                            return (
                                document.addEventListener('mousedown', u),
                                () => {
                                    document.removeEventListener('mousedown', u);
                                }
                            );
                        }, [m]),
                        (0, n.useEffect)(() => {
                            C(t);
                        }, [t]),
                        a().createElement(
                            'div',
                            {
                                ref: D,
                                className: h()(
                                    w.base,
                                    w[`base__${r}`],
                                    i && w.base__disabled,
                                    e && w[`base__${e}`],
                                    m && w.base__focus,
                                    p && w.base__highlightActive,
                                    s,
                                ),
                                onMouseEnter: function (u) {
                                    i || (null !== o && v(o), E && E(u));
                                },
                                onMouseMove: function (u) {
                                    c && c(u);
                                },
                                onMouseUp: function (u) {
                                    i || (A && A(u), f(!1));
                                },
                                onMouseDown: function (u) {
                                    i ||
                                        (null !== l && v(l),
                                        _ && _(u),
                                        t && (i || (D.current && (D.current.focus(), C(!0)))),
                                        f(!0));
                                },
                                onMouseLeave: function (u) {
                                    i || (F && F(u), f(!1));
                                },
                                onClick: function (u) {
                                    i || (d && d(u));
                                },
                            },
                            r !== b.ghost &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement('div', { className: w.back }),
                                    a().createElement('span', { className: w.texture }),
                                ),
                            a().createElement(
                                'span',
                                { className: h()(w.state, w.state__default) },
                                a().createElement('span', { className: w.stateDisabled }),
                                a().createElement('span', { className: w.stateHighlightHover }),
                                a().createElement('span', { className: w.stateHighlightActive }),
                            ),
                            a().createElement(
                                'span',
                                { className: w.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                u,
                            ),
                        )
                    );
                };
                T.defaultProps = { type: b.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const S = T,
                    P = {
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
                    O = [
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
                class x extends a().PureComponent {
                    constructor(...u) {
                        super(...u),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (u) => (e) => {
                                u && u(e),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && v(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (u) => (e) => {
                                u && u(e), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (u) => (e) => {
                                u && u(e),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && v(this.props.soundClick);
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
                            i = u.type,
                            s = u.classNames,
                            o = u.onMouseEnter,
                            l = u.onMouseLeave,
                            E = u.onMouseDown,
                            c = u.onMouseUp,
                            _ =
                                (u.soundClick,
                                u.soundHover,
                                (function (u, e) {
                                    if (null == u) return {};
                                    var t = {};
                                    for (var n in u)
                                        if ({}.hasOwnProperty.call(u, n)) {
                                            if (e.indexOf(n) >= 0) continue;
                                            t[n] = u[n];
                                        }
                                    return t;
                                })(u, O)),
                            A = h()(P.base, P[`base__${i}`], P[`base__${r}`], null == s ? void 0 : s.base),
                            F = h()(P.icon, P[`icon__${i}`], P[`icon__${r}`], null == s ? void 0 : s.icon),
                            d = h()(P.glow, null == s ? void 0 : s.glow),
                            D = h()(P.caption, P[`caption__${i}`], null == s ? void 0 : s.caption),
                            B = h()(P.goto, null == s ? void 0 : s.goto);
                        return a().createElement(
                            'div',
                            y(
                                {
                                    className: A,
                                    onMouseEnter: this._onMouseEnter(o),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(E),
                                    onMouseUp: this._onMouseUp(c),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                _,
                            ),
                            'info' !== i && a().createElement('div', { className: P.shine }),
                            a().createElement('div', { className: F }, a().createElement('div', { className: d })),
                            a().createElement('div', { className: D }, e),
                            n && a().createElement('div', { className: B }, n),
                        );
                    }
                }
                x.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                t(281);
                let k;
                function M(u, e) {
                    return u.replace(/\{\w+\}/g, (u) => String(e[u.slice(1, -1)]));
                }
                !(function (u) {
                    (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
                })(k || (k = {}));
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
                var L = t(916),
                    N = t(613);
                Date.now(), N.Ew.getRegionalDateTime, N.Ew.getFormattedDateTime;
                const I = (u = 1) => {
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
                    U = (u, e) => u.split('.').reduce((u, e) => u && u[e], e),
                    G = (u) => u && 'ArrayItem' === u.__proto__.constructor.name,
                    H = (u, e) => (u.length > 0 ? `${u}.${e}` : e),
                    W = (u) =>
                        ((u, e) =>
                            u.split('.').reduce((u, t) => {
                                const n = U(`${u}.${t}`, window);
                                return G(n) ? e(u, t, n) : `${u}.${t}`;
                            }))(u, (u, e) => `${u}.${e}.value`),
                    $ = (u) => {
                        const e = ((u) => {
                                const e = I(),
                                    t = e.caller,
                                    n = e.resId,
                                    a = window.__feature && window.__feature !== t && t ? `subViews.${t}` : '';
                                return { modelPrefix: a, modelPath: H(a, u || ''), resId: n };
                            })(),
                            t = e.modelPrefix,
                            n = u.split('.');
                        if (n.length > 0) {
                            const u = [n[0]];
                            return (
                                n.reduce((e, n) => {
                                    const a = U(H(t, `${e}.${n}`), window);
                                    return G(a) ? (u.push(a.id), `${e}.${n}.value`) : (u.push(n), `${e}.${n}`);
                                }),
                                u.reduce((u, e) => u + '.' + e)
                            );
                        }
                        return '';
                    },
                    q = L.Sw.instance;
                let Y;
                !(function (u) {
                    (u.None = 'None'), (u.Shallow = 'Shallow'), (u.Deep = 'Deep');
                })(Y || (Y = {}));
                const V = (u = 'model', e = Y.Deep) => {
                    const t = (0, n.useState)(0),
                        a = (t[0], t[1]),
                        r = (0, n.useMemo)(() => I(), []),
                        i = r.caller,
                        s = r.resId,
                        o = (0, n.useMemo)(
                            () => (window.__feature && window.__feature !== i ? `subViews.${i}.${u}` : u),
                            [i, u],
                        ),
                        l = (0, n.useState)(() =>
                            ((u) => {
                                const e = U(u, window);
                                for (const u in e) 'function' == typeof e[u] && (e[u] = e[u].bind(e));
                                return G(e) ? e.value : e;
                            })(W(o)),
                        ),
                        E = l[0],
                        c = l[1],
                        _ = (0, n.useRef)(-1);
                    return (
                        B(() => {
                            if (
                                ('boolean' == typeof e &&
                                    ((e = e ? Y.Deep : Y.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                e !== Y.None)
                            ) {
                                const t = (u) => {
                                        ((u) => u && 'CoherentArrayProxy' === u.__proto__.constructor.name)(u) &&
                                        e === Y.Deep
                                            ? (u === E && a((u) => u + 1), c(u))
                                            : c(Object.assign([], u));
                                    },
                                    n = $(u);
                                _.current = q.addCallback(n, t, s, e === Y.Deep);
                            }
                        }),
                        (0, n.useEffect)(() => {
                            if (e !== Y.None)
                                return () => {
                                    q.removeCallback(_.current, s);
                                };
                        }, [s, e]),
                        E
                    );
                };
                L.Sw.instance;
                var z = t(521);
                const X = (u) => {
                    console.error(u.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function j(u = z.n.NONE, e = X, t = !1, a = !1) {
                    (0, n.useEffect)(() => {
                        if (u !== z.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === u) {
                                if (!a && i.O.view.isEventHandled()) return;
                                i.O.view.setEventHandled(), e(n), t && n.stopPropagation();
                            }
                        }
                    }, [e, u, t, a]);
                }
                function K() {
                    !(function (u = z.n.ESCAPE) {
                        j(u, L.Sy, !0);
                    })(z.n.ESCAPE);
                }
                function Q(u, e, t) {
                    const a = (0, n.useContext)(F);
                    let r = Object.entries(a).filter(([u, e]) => !0 === e && u in o);
                    return (
                        t && (r = r.filter((u) => t.includes(u[0]))),
                        u.reduce((u, t) => {
                            const n = r.map((u) =>
                                h()(
                                    e[((u, e) => u + '__' + e)(t, u[0])],
                                    e[
                                        ((u, e) => {
                                            return u + ((t = e)[0].toUpperCase() + t.slice(1));
                                            var t;
                                        })(t, u[0])
                                    ],
                                ),
                            );
                            return (u[t] = h()(e[t], ...n)), u;
                        }, {})
                    );
                }
                let Z, J, uu, eu, tu, nu, au, ru;
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
                        (u.EquipCoin = 'equipCoin'),
                        (u.LootBox = 'lootBox'),
                        (u.BrCoin = 'brcoin');
                })(Z || (Z = {})),
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
                    })(J || (J = {})),
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
                    })(uu || (uu = {})),
                    (function (u) {
                        (u.MULTI = 'multi'),
                            (u.CURRENCY = 'currency'),
                            (u.PREMIUM_PLUS = 'premium_plus'),
                            (u.NUMBER = 'number'),
                            (u.STRING = 'string');
                    })(eu || (eu = {})),
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
                    })(tu || (tu = {})),
                    (function (u) {
                        u.BATTLE_BOOSTER = 'battleBooster';
                    })(nu || (nu = {})),
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
                    })(au || (au = {})),
                    (function (u) {
                        (u[(u.Engraving = 0)] = 'Engraving'), (u[(u.Background = 1)] = 'Background');
                    })(ru || (ru = {}));
                class iu extends a().PureComponent {
                    render() {
                        let u;
                        if ('gold' === this.props.format) u = L.B3.GOLD;
                        else u = L.B3.INTEGRAL;
                        const e = L.Z5.getNumberFormat(this.props.value, u);
                        return void 0 !== this.props.value && void 0 !== e ? e : null;
                    }
                }
                iu.defaultProps = { format: 'integral' };
                const su = [
                        Z.Items,
                        Z.Equipment,
                        Z.Xp,
                        Z.XpFactor,
                        Z.Blueprints,
                        Z.BlueprintsAny,
                        Z.Goodies,
                        Z.Berths,
                        Z.Slots,
                        Z.Tokens,
                        Z.CrewSkins,
                        Z.CrewBooks,
                        Z.Customizations,
                        Z.CreditsFactor,
                        Z.TankmenXp,
                        Z.TankmenXpFactor,
                        Z.FreeXpFactor,
                        Z.BattleToken,
                        Z.PremiumUniversal,
                        Z.NaturalCover,
                        Z.BpCoin,
                        Z.BattlePassSelectToken,
                        Z.BattlaPassFinalAchievement,
                        Z.BattleBadge,
                        Z.BonusX5,
                        Z.CrewBonusX3,
                        Z.NewYearInvoice,
                        Z.EpicSelectToken,
                        Z.Comp7TokenWeeklyReward,
                        Z.DeluxeGift,
                        Z.BattleBoosterGift,
                        Z.OptionalDevice,
                    ],
                    ou = [Z.Gold, Z.Credits, Z.Crystal, Z.FreeXp],
                    lu = [Z.BattlePassPoints, Z.EquipCoin],
                    Eu = [Z.PremiumPlus, Z.Premium],
                    cu = ['engravings', 'backgrounds'],
                    _u = ['engraving', 'background'],
                    Au = (u, e = uu.Small) => {
                        const t = u.name,
                            n = u.type,
                            a = u.value,
                            r = u.icon,
                            i = u.item,
                            s = u.dogTagType,
                            o = ((u) => {
                                switch (u) {
                                    case uu.S600x450:
                                        return 'c_600x450';
                                    case uu.S400x300:
                                        return 'c_400x300';
                                    case uu.S296x222:
                                        return 'c_296x222';
                                    case uu.S232x174:
                                        return 'c_232x174';
                                    case uu.Big:
                                        return 'c_80x80';
                                    case uu.Small:
                                        return 'c_48x48';
                                    default:
                                        return u;
                                }
                            })(e);
                        switch (t) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${n}_${a}`;
                            case 'premium':
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${t}_${a}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${i}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${e}.${r}`;
                            case 'tokens':
                            case 'lootBox':
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
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${r}`;
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${e}.${r}`;
                            case 'dogTagComponents':
                                return ((u, e, t) => {
                                    const n = cu[u];
                                    if (n) {
                                        const a = R.images.gui.maps.icons.dogtags.$dyn(e).$dyn(n),
                                            r = a.$dyn(t);
                                        return r ? `${r}` : `${a.$dyn(_u[u])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(s, e, r);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${o}.${r}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${o}.${r}`;
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
                                return `R.images.gui.maps.icons.collectionItems.${o}.${r}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${t}`;
                        }
                    },
                    Fu =
                        (uu.Small,
                        uu.Big,
                        [
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
                        ]);
                function du(u) {
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
                const Du = (u, e, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: L.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    Bu = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            a = u.args,
                            r = u.onMouseEnter,
                            i = u.onMouseLeave,
                            s = u.onMouseDown,
                            o = u.onClick,
                            l = u.ignoreShowDelay,
                            E = void 0 !== l && l,
                            c = u.ignoreMouseClick,
                            _ = void 0 !== c && c,
                            A = u.decoratorId,
                            F = void 0 === A ? 0 : A,
                            d = u.isEnabled,
                            D = void 0 === d || d,
                            B = u.targetId,
                            m = void 0 === B ? 0 : B,
                            C = u.onShow,
                            g = u.onHide,
                            p = (function (u, e) {
                                if (null == u) return {};
                                var t = {};
                                for (var n in u)
                                    if ({}.hasOwnProperty.call(u, n)) {
                                        if (e.indexOf(n) >= 0) continue;
                                        t[n] = u[n];
                                    }
                                return t;
                            })(u, Fu);
                        const h = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            v = (0, n.useMemo)(() => m || I().resId, [m]),
                            w = (0, n.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (Du(t, F, { isMouseEvent: !0, on: !0, arguments: du(a) }, v),
                                    C && C(),
                                    (h.current.isVisible = !0));
                            }, [t, F, a, v, C]),
                            b = (0, n.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const u = h.current.timeoutId;
                                    u > 0 && (clearTimeout(u), (h.current.timeoutId = 0)),
                                        Du(t, F, { on: !1 }, v),
                                        h.current.isVisible && g && g(),
                                        (h.current.isVisible = !1);
                                }
                            }, [t, F, v, g]),
                            f = (0, n.useCallback)((u) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(h.current.prevTarget) && b();
                                    }, 200)));
                            }, []);
                        (0, n.useEffect)(() => {
                            const u = h.current.hideTimerId;
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
                                              ((T = e.props.onMouseEnter),
                                              (u) => {
                                                  (u.clientX === window.innerWidth &&
                                                      u.clientY === window.innerHeight) ||
                                                      ((h.current.timeoutId = window.setTimeout(w, E ? 100 : 400)),
                                                      r && r(u),
                                                      T && T(u));
                                              }),
                                          onMouseLeave: ((u) => (e) => {
                                              b(), null == i || i(e), null == u || u(e);
                                          })(e.props.onMouseLeave),
                                          onClick: ((u) => (e) => {
                                              !1 === _ && b(), null == o || o(e), null == u || u(e);
                                          })(e.props.onClick),
                                          onMouseDown: ((u) => (e) => {
                                              !1 === _ && b(), null == s || s(e), null == u || u(e);
                                          })(e.props.onMouseDown),
                                      },
                                      p,
                                  ),
                              )
                            : e;
                        var T;
                    },
                    mu = ['children'];
                function Cu() {
                    return (
                        (Cu = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        Cu.apply(null, arguments)
                    );
                }
                const gu = (u) => {
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
                            })(u, mu);
                        return a().createElement(
                            Bu,
                            Cu(
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
                    pu = {
                        base: 'Reward_base_2b',
                        base__third: 'Reward_base__third_01',
                        base__medium: 'Reward_base__medium_d6',
                        base__small: 'Reward_base__small_2a',
                        base__extraSmall: 'Reward_base__extraSmall_ef',
                        icon: 'Reward_icon_d4',
                        fadeInWithScale: 'Reward_fadeInWithScale_ff',
                        base__regular: 'Reward_base__regular_80',
                        overlay: 'Reward_overlay_45',
                        value: 'Reward_value_61',
                        value__multi: 'Reward_value__multi_a5',
                        value__credits: 'Reward_value__credits_40',
                        value__gold: 'Reward_value__gold_cd',
                        value__crystal: 'Reward_value__crystal_d5',
                        captionContainer: 'Reward_captionContainer_f1',
                        caption: 'Reward_caption_bd',
                        title: 'Reward_title_5b',
                        fadeIn: 'Reward_fadeIn_ab',
                        slideUp: 'Reward_slideUp_b2',
                        raysAppearance: 'Reward_raysAppearance_1c',
                        rotate: 'Reward_rotate_41',
                    },
                    hu = uu.S600x450,
                    vu = ({ data: u, hasThird: e, index: t }) => {
                        const r = (0, n.useCallback)((u) => ({ tooltipId: u }), []),
                            i =
                                ((s = u.name),
                                su.includes(s)
                                    ? eu.MULTI
                                    : ou.includes(s)
                                      ? eu.CURRENCY
                                      : lu.includes(s)
                                        ? eu.NUMBER
                                        : Eu.includes(s)
                                          ? eu.PREMIUM_PLUS
                                          : eu.STRING);
                        var s;
                        const o =
                                i !== eu.STRING
                                    ? ((u, e) => {
                                          if (void 0 === u) return null;
                                          switch (e) {
                                              case eu.MULTI: {
                                                  const e = Number(u);
                                                  return isFinite(e) && e > 1 ? `x${Math.floor(e)}` : null;
                                              }
                                              case eu.CURRENCY:
                                              case eu.NUMBER:
                                                  return a().createElement(iu, {
                                                      format: 'integral',
                                                      value: Number(u),
                                                  });
                                              case eu.PREMIUM_PLUS: {
                                                  const e = Number(u);
                                                  return isNaN(e) ? u : null;
                                              }
                                              default:
                                                  return u;
                                          }
                                      })(u.value, i)
                                    : null,
                            l =
                                'overlayType' in u
                                    ? ((u) => {
                                          if (void 0 === u) return null;
                                          switch (u) {
                                              case tu.BATTLE_BOOSTER:
                                                  return au.BATTLE_BOOSTER;
                                              case tu.BATTLE_BOOSTER_REPLACE:
                                                  return au.BATTLE_BOOSTER_REPLACE;
                                              case tu.BUILT_IN_EQUIPMENT:
                                                  return au.BUILT_IN_EQUIPMENT;
                                              case tu.EQUIPMENT_PLUS:
                                                  return au.EQUIPMENT_PLUS;
                                              case tu.EQUIPMENT_TROPHY_BASIC:
                                                  return au.EQUIPMENT_TROPHY_BASIC;
                                              case tu.EQUIPMENT_TROPHY_UPGRADED:
                                                  return au.EQUIPMENT_TROPHY_UPGRADED;
                                              case tu.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                                  return au.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                              case tu.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                                  return au.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                              case tu.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                                  return au.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                              case tu.PROGRESSION_STYLE_UPGRADED_1:
                                                  return au.PROGRESSION_STYLE_UPGRADED_1;
                                              case tu.PROGRESSION_STYLE_UPGRADED_2:
                                                  return au.PROGRESSION_STYLE_UPGRADED_2;
                                              case tu.PROGRESSION_STYLE_UPGRADED_3:
                                                  return au.PROGRESSION_STYLE_UPGRADED_3;
                                              case tu.PROGRESSION_STYLE_UPGRADED_4:
                                                  return au.PROGRESSION_STYLE_UPGRADED_4;
                                              case tu.PROGRESSION_STYLE_UPGRADED_5:
                                                  return au.PROGRESSION_STYLE_UPGRADED_5;
                                              case tu.PROGRESSION_STYLE_UPGRADED_6:
                                                  return au.PROGRESSION_STYLE_UPGRADED_6;
                                          }
                                      })(u.overlayType)
                                    : void 0;
                        const E = 1200 + 200 * t;
                        (0, n.useEffect)(
                            () =>
                                ((u, e) => {
                                    let t;
                                    const n = setTimeout(() => {
                                        t = u();
                                    }, e);
                                    return () => {
                                        'function' == typeof t && t(), clearTimeout(n);
                                    };
                                })(() => v(R.sounds.bp_reward()), E),
                            [E],
                        );
                        const c = Q(['base'], pu),
                            _ = (0, n.useMemo)(
                                () => ({ backgroundImage: `url(${Au(u, hu)})`, animationDelay: `${E}ms` }),
                                [E, u],
                            ),
                            A = h()(c.base, e ? pu.base__third : pu.base__regular),
                            F = h()(pu.icon, pu[`icon__${t}`]),
                            d = h()(pu.value, pu[`value__${u.name}`], pu[`value__${i}`]);
                        return a().createElement(
                            gu,
                            { args: r(u.tooltipId) },
                            a().createElement(
                                'div',
                                { className: A },
                                a().createElement(
                                    'div',
                                    { className: F, style: _ },
                                    Boolean(l) &&
                                        a().createElement('div', {
                                            className: pu.overlay,
                                            style: {
                                                backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${hu}.${l}_overlay)`,
                                            },
                                        }),
                                    o && a().createElement('div', { className: d }, o),
                                ),
                                a().createElement(
                                    'div',
                                    { className: pu.captionContainer },
                                    a().createElement(
                                        'div',
                                        { className: pu.caption },
                                        u.label && a().createElement('div', { className: pu.title }, u.label),
                                    ),
                                ),
                            ),
                        );
                    },
                    wu = 'Rewards_base_5e',
                    bu = ({ rewards: u }) => {
                        const e = u.length >= 3;
                        return a().createElement(
                            'div',
                            { className: wu },
                            u.map((u, t) => a().createElement(vu, { key: t, index: t, data: u, hasThird: e })),
                        );
                    },
                    fu = {
                        base: 'App_base_6f',
                        container: 'App_container_11',
                        fadeInWithScale: 'App_fadeInWithScale_b0',
                        close: 'App_close_25',
                        blackout: 'App_blackout_ff',
                        light: 'App_light_3d',
                        light__gold: 'App_light__gold_83',
                        rays: 'App_rays_68',
                        raysAppearance: 'App_raysAppearance_5b',
                        rotate: 'App_rotate_07',
                        ribbon: 'App_ribbon_98',
                        slideUp: 'App_slideUp_ae',
                        ribbon__gold: 'App_ribbon__gold_ab',
                        base__small: 'App_base__small_24',
                        base__extraSmall: 'App_base__extraSmall_46',
                        base__extraLarge: 'App_base__extraLarge_c4',
                        header: 'App_header_e5',
                        title: 'App_title_61',
                        subTitle: 'App_subTitle_70',
                        footer: 'App_footer_5b',
                        base__medium: 'App_base__medium_31',
                        button: 'App_button_21',
                        fadeIn: 'App_fadeIn_d6',
                    },
                    Tu = R.strings.mapbox.awardsView,
                    Su = () => {
                        K();
                        const u = V('model'),
                            e = u.battlesNumber,
                            t = u.rewards.items.map(({ value: u }) => u),
                            n = M(Tu.subTitle(), { number: e }),
                            r = e >= 50,
                            i = Q(['base'], fu),
                            s = h()(fu.light, r && fu.light__gold),
                            o = h()(fu.ribbon, r && fu.ribbon__gold);
                        return a().createElement(
                            'div',
                            { className: i.base },
                            a().createElement(
                                'div',
                                { className: fu.container },
                                a().createElement('div', { className: fu.blackout }),
                                a().createElement('div', { className: s }),
                                a().createElement('div', { className: fu.rays }),
                                a().createElement('div', { className: o }),
                                a().createElement(
                                    'div',
                                    { className: fu.header },
                                    a().createElement('div', { className: fu.title }, Tu.title()),
                                    a().createElement('div', { className: fu.subTitle }, n),
                                ),
                                a().createElement(
                                    'div',
                                    { className: fu.close },
                                    a().createElement(x, {
                                        caption: R.strings.menu.viewHeader.closeBtn.label(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: L.Sy,
                                    }),
                                ),
                                a().createElement(bu, { rewards: t }),
                                a().createElement(
                                    'div',
                                    { className: fu.footer },
                                    a().createElement(
                                        S,
                                        { onClick: L.Sy, size: f.medium, type: b.primary, mixClass: fu.button },
                                        Tu.button(),
                                    ),
                                ),
                            ),
                        );
                    };
                engine.whenReady.then(() => {
                    g().render(
                        a().createElement(m, null, a().createElement(Su, null)),
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
        (__webpack_require__.j = 154),
        (() => {
            var u = { 154: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var n,
                        a,
                        [r, i, s] = t,
                        o = 0;
                    if (r.some((e) => 0 !== u[e])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (e && e(t); o < r.length; o++)
                        (a = r[o]), __webpack_require__.o(u, a) && u[a] && u[a][0](), (u[a] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [320], () => __webpack_require__(115));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
