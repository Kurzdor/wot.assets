(() => {
    'use strict';
    var __webpack_modules__ = {
            768: (u, e, t) => {
                t.d(e, { O: () => tu });
                var n = {};
                t.r(n),
                    t.d(n, { mouse: () => m, off: () => A, on: () => E, onResize: () => l, onScaleUpdated: () => c });
                var r = {};
                t.r(r),
                    t.d(r, {
                        events: () => n,
                        getMouseGlobalPosition: () => _,
                        getSize: () => B,
                        graphicsQuality: () => C,
                        playSound: () => d,
                        setRTPC: () => D,
                    });
                var a = {};
                t.r(a), t.d(a, { getBgUrl: () => v, getTextureUrl: () => h });
                var o = {};
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
                t.r(o),
                    t.d(o, {
                        addModelObserver: () => I,
                        addPreloadTexture: () => M,
                        children: () => a,
                        displayStatus: () => w,
                        displayStatusIs: () => J,
                        events: () => b,
                        extraSize: () => uu,
                        forceTriggerMouseMove: () => Z,
                        freezeTextureBeforeResize: () => $,
                        getBrowserTexturePath: () => L,
                        getDisplayStatus: () => Q,
                        getScale: () => j,
                        getSize: () => H,
                        getViewGlobalPosition: () => V,
                        isEventHandled: () => X,
                        isFocused: () => Y,
                        pxToRem: () => U,
                        remToPx: () => G,
                        resize: () => W,
                        sendEvent: () => N,
                        setAnimateWindow: () => q,
                        setEventHandled: () => K,
                        setInputPaddingsRem: () => R,
                        setSidePaddingsRem: () => z,
                        whenTutorialReady: () => eu,
                    });
                const l = i('clientResized'),
                    c = i('self.onScaleUpdated'),
                    E = (u, e) => engine.on(u, e),
                    A = (u, e) => engine.off(u, e),
                    F = { down: i('mousedown'), up: i('mouseup'), move: i('mousemove') };
                const m = (function () {
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
                                    const a = `mouse${e}`,
                                        o = F[e]((u) => t([u, 'outside']));
                                    function i(u) {
                                        t([u, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, i),
                                        n(),
                                        () => {
                                            r &&
                                                (o(),
                                                window.removeEventListener(a, i),
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
                function _(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const C = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    g = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    f = Object.keys(g).reduce((u, e) => ((u[e] = () => d(g[e])), u), {}),
                    p = { play: Object.assign({}, f, { sound: d }), setRTPC: D };
                function h(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function v(u, e, t) {
                    return `url(${h(u, e, t)})`;
                }
                const w = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    b = {
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
                    y = ['args'];
                const S = 2,
                    x = 16,
                    k = 32,
                    P = 64,
                    T = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const r = e.args,
                                a = (function (u, e) {
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
                    N = {
                        close(u) {
                            T('popover' === u ? S : k);
                        },
                        minimize() {
                            T(P);
                        },
                        move(u) {
                            T(x, { isMouseEvent: !0, on: u });
                        },
                    },
                    O = 15;
                function M(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function R(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, O);
                }
                function L(u, e, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, n);
                }
                function I(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function z(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, O);
                }
                function H(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function W(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function V(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: G(e.x), y: G(e.y) };
                }
                function $() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function j() {
                    return viewEnv.getScale();
                }
                function U(u) {
                    return viewEnv.pxToRem(u);
                }
                function G(u) {
                    return viewEnv.remToPx(u);
                }
                function q(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function Y() {
                    return viewEnv.isFocused();
                }
                function K() {
                    return viewEnv.setEventHandled();
                }
                function X() {
                    return viewEnv.isEventHandled();
                }
                function Z() {
                    viewEnv.forceTriggerMouseMove();
                }
                function Q() {
                    return viewEnv.getShowingStatus();
                }
                const J = Object.keys(w).reduce((u, e) => ((u[e] = () => viewEnv.getShowingStatus() === w[e]), u), {}),
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
                            window.isDomBuilt ? u() : b.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]),
                    tu = { view: o, client: r, sound: p };
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
            358: (u, e, t) => {
                t.d(e, { Z: () => a });
                var n = t(768);
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
                t.d(e, { Sw: () => a.Z, B0: () => i, ry: () => B, Sy: () => C });
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
                var o = t(613);
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
                const s = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var A = t(521),
                    F = t(768);
                const m = ['args'];
                function d(u, e, t, n, r, a, o) {
                    try {
                        var i = u[a](o),
                            s = i.value;
                    } catch (u) {
                        return void t(u);
                    }
                    i.done ? e(s) : Promise.resolve(s).then(n, r);
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
                                    return new Promise(function (n, r) {
                                        var a = u.apply(e, t);
                                        function o(u) {
                                            d(a, n, r, o, i, 'next', u);
                                        }
                                        function i(u) {
                                            d(a, n, r, o, i, 'throw', u);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    _ = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const r = e.args,
                                a = (function (u, e) {
                                    if (null == u) return {};
                                    var t = {};
                                    for (var n in u)
                                        if ({}.hasOwnProperty.call(u, n)) {
                                            if (e.indexOf(n) >= 0) continue;
                                            t[n] = u[n];
                                        }
                                    return t;
                                })(e, m);
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
                    C = () => _(i.CLOSE),
                    g = (u, e) => {
                        u.keyCode === A.n.ESCAPE && e();
                    };
                var f = t(572);
                const p = r.instance,
                    h = {
                        DataTracker: a.Z,
                        ViewModel: f.Z,
                        ViewEventType: i,
                        NumberFormatType: s,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: E,
                        makeGlobalBoundingBox: D,
                        sendMoveEvent: (u) => _(i.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: C,
                        sendClosePopOverEvent: () => _(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            _(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, n, r = R.invalid('resId'), a) => {
                            const o = F.O.view.getViewGlobalPosition(),
                                s = t.getBoundingClientRect(),
                                l = s.x,
                                c = s.y,
                                E = s.width,
                                A = s.height,
                                m = {
                                    x: F.O.view.pxToRem(l) + o.x,
                                    y: F.O.view.pxToRem(c) + o.y,
                                    width: F.O.view.pxToRem(E),
                                    height: F.O.view.pxToRem(A),
                                };
                            _(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: e,
                                bbox: D(m),
                                on: !0,
                                args: a,
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
                        handleViewEvent: _,
                        onBindingsReady: B,
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
                        ClickOutsideManager: p,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = h;
            },
            613: (u, e, t) => {
                t.d(e, { Ew: () => a, Z5: () => n, cy: () => r });
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
                    a = {
                        getRegionalDateTime: (u, e, t = !0) => regionalDateTime.getRegionalDateTime(u, e, t),
                        getFormattedDateTime: (u, e, t = !0) => regionalDateTime.getFormattedDateTime(u, e, t),
                    };
            },
            910: (u, e, t) => {
                var n = {};
                t.r(n),
                    t.d(n, {
                        Area: () => au,
                        Bar: () => tu,
                        DefaultScroll: () => ru,
                        Direction: () => H,
                        defaultSettings: () => W,
                        useHorizontalScrollApi: () => $,
                    });
                var r = {};
                t.r(r), t.d(r, { Area: () => hu, Bar: () => gu, Default: () => pu, useVerticalScrollApi: () => ou });
                var a = t(768),
                    o = t(179),
                    i = t.n(o),
                    s = t(493),
                    l = t.n(s);
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
                    B = Object.assign({ width: d, height: D }, F(d, D, E)),
                    _ = (0, o.createContext)(B),
                    C = ['children'];
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
                        })(u, C);
                    const n = (0, o.useContext)(_),
                        r = n.extraLarge,
                        a = n.large,
                        i = n.medium,
                        s = n.small,
                        l = n.extraSmall,
                        E = n.extraLargeWidth,
                        A = n.largeWidth,
                        F = n.mediumWidth,
                        m = n.smallWidth,
                        d = n.extraSmallWidth,
                        D = n.extraLargeHeight,
                        B = n.largeHeight,
                        g = n.mediumHeight,
                        f = n.smallHeight,
                        p = n.extraSmallHeight,
                        h = { extraLarge: D, large: B, medium: g, small: f, extraSmall: p };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && r) return e;
                        if (t.large && a) return e;
                        if (t.medium && i) return e;
                        if (t.small && s) return e;
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
                            if (t.largeHeight && B) return e;
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
                    p = ({ children: u }) => {
                        const e = (0, o.useContext)(_),
                            t = (0, o.useState)(e),
                            n = t[0],
                            r = t[1],
                            s = (0, o.useCallback)((u, e) => {
                                const t = a.O.view.pxToRem(u),
                                    n = a.O.view.pxToRem(e);
                                r(Object.assign({ width: t, height: n }, F(t, n, E)));
                            }, []),
                            l = (0, o.useCallback)(() => {
                                const u = a.O.client.getSize('px');
                                s(u.width, u.height);
                            }, [s]);
                        f(() => {
                            a.O.client.events.on('clientResized', s), a.O.client.events.on('self.onScaleUpdated', l);
                        }),
                            (0, o.useEffect)(
                                () => () => {
                                    a.O.client.events.off('clientResized', s),
                                        a.O.client.events.off('self.onScaleUpdated', l);
                                },
                                [s, l],
                            );
                        const c = (0, o.useMemo)(() => Object.assign({}, n), [n]);
                        return i().createElement(_.Provider, { value: c }, u);
                    },
                    h = 'App_base_aa',
                    v = 'App_contentWrapper_bf',
                    w = 'App_offset_1c';
                var b = t(483),
                    y = t.n(b);
                const S = (u) => {
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
                    x = (u, e, t) => (t < u ? u : t > e ? e : t),
                    k = [];
                function P(u) {
                    const e = (0, o.useRef)(u);
                    return (
                        (0, o.useLayoutEffect)(() => {
                            e.current = u;
                        }),
                        (0, o.useCallback)((...u) => (0, e.current)(...u), k)
                    );
                }
                function T(u, e, t = []) {
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
                function N(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error('[lib/sounds.js] playSound(', u, '): ', e);
                    });
                }
                const O = {
                    playHighlight() {
                        N('highlight');
                    },
                    playClick() {
                        N('play');
                    },
                    playYes() {
                        N('yes1');
                    },
                };
                function M(u, e) {
                    var t = ('undefined' != typeof Symbol && u[Symbol.iterator]) || u['@@iterator'];
                    if (t) return (t = t.call(u)).next.bind(t);
                    if (
                        Array.isArray(u) ||
                        (t = (function (u, e) {
                            if (u) {
                                if ('string' == typeof u) return L(u, e);
                                var t = {}.toString.call(u).slice(8, -1);
                                return (
                                    'Object' === t && u.constructor && (t = u.constructor.name),
                                    'Map' === t || 'Set' === t
                                        ? Array.from(u)
                                        : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                          ? L(u, e)
                                          : void 0
                                );
                            }
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
                function L(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, n = Array(e); t < e; t++) n[t] = u[t];
                    return n;
                }
                function I(u, e, t) {
                    const n = (0, o.useMemo)(
                        () =>
                            (function (u, e, t, n) {
                                let r,
                                    a = !1,
                                    o = 0;
                                function i() {
                                    r && clearTimeout(r);
                                }
                                function s(...s) {
                                    const l = this,
                                        c = Date.now() - o;
                                    function E() {
                                        (o = Date.now()), t.apply(l, s);
                                    }
                                    a ||
                                        (n && !r && E(),
                                        i(),
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
                                    (s.cancel = function () {
                                        i(), (a = !0);
                                    }),
                                    s
                                );
                            })(t, u),
                        e,
                    );
                    return (0, o.useEffect)(() => n.cancel, [n]), n;
                }
                var z = t(30);
                let H;
                !(function (u) {
                    (u[(u.Next = -1)] = 'Next'), (u[(u.Prev = 1)] = 'Prev');
                })(H || (H = {}));
                const W = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    V = ({
                        getContainerSize: u,
                        getBounds: e,
                        setScrollPosition: t,
                        getDirection: n,
                        getWrapperSize: r,
                        triggerMouseMoveOnUpdate: i = !1,
                    }) => {
                        const s = (u, t) => {
                            const n = e(u),
                                r = n[0],
                                a = n[1];
                            return a <= r ? 0 : x(r, a, t);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                E = void 0 === c ? W : c,
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
                                            for (var n, r = M(e(u).values()); !(n = r()).done; ) (0, n.value)(...t);
                                        };
                                    return (0, o.useMemo)(() => ({ on: t, off: n, trigger: r }), []);
                                })(),
                                d = I(
                                    () => {
                                        a.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                D = (0, z.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (u) => {
                                        const e = A.current;
                                        e && (t(e, u), m.trigger('change', u), i && d());
                                    },
                                    onRest: (u) => m.trigger('rest', u),
                                    onStart: (u) => m.trigger('start', u),
                                    onPause: (u) => m.trigger('pause', u),
                                })),
                                B = D[0],
                                _ = D[1],
                                C = (0, o.useCallback)(
                                    (u, e, t) => {
                                        var n;
                                        const r = B.scrollPosition.get(),
                                            a = (null != (n = B.scrollPosition.goal) ? n : 0) - r;
                                        return s(u, e * t + a + r);
                                    },
                                    [B.scrollPosition],
                                ),
                                g = (0, o.useCallback)(
                                    (u, { immediate: e = !1, reset: t = !0 } = {}) => {
                                        const n = A.current;
                                        n &&
                                            _.start({
                                                scrollPosition: s(n, u),
                                                immediate: e,
                                                reset: t,
                                                config: E.animationConfig,
                                                from: { scrollPosition: s(n, B.scrollPosition.get()) },
                                            });
                                    },
                                    [_, E.animationConfig, B.scrollPosition],
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
                                            a = C(e, u, n);
                                        g(a);
                                    },
                                    [g, C, E.step],
                                ),
                                p = (0, o.useCallback)(
                                    (u) => {
                                        0 !== u.deltaY && f(n(u)),
                                            A.current && m.trigger('mouseWheel', u, B.scrollPosition, e(A.current));
                                    },
                                    [B.scrollPosition, f, m],
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
                                        S(() => {
                                            const u = A.current;
                                            u &&
                                                (g(s(u, B.scrollPosition.goal), { immediate: !0 }),
                                                m.trigger('resizeHandled'));
                                        }),
                                    [g, B.scrollPosition.goal],
                                ),
                                v = P(() => {
                                    const u = A.current;
                                    if (!u) return;
                                    const e = s(u, B.scrollPosition.goal);
                                    e !== B.scrollPosition.goal && g(e, { immediate: !0 }),
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
                                    clampPosition: s,
                                    handleMouseWheel: p,
                                    applyScroll: g,
                                    applyStepTo: f,
                                    contentRef: A,
                                    wrapperRef: F,
                                    scrollPosition: _,
                                    animationScroll: B,
                                    recalculateContent: v,
                                    events: { on: m.on, off: m.off },
                                }),
                                [B.scrollPosition, g, f, m.off, m.on, v, p, _, E.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    $ = V({
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
                        getDirection: (u) => (u.deltaY > 1 ? H.Next : H.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    j = 'HorizontalBar_base_49',
                    U = 'HorizontalBar_base__nonActive_82',
                    G = 'HorizontalBar_leftButton_5f',
                    q = 'HorizontalBar_rightButton_03',
                    Y = 'HorizontalBar_track_0d',
                    K = 'HorizontalBar_thumb_fd',
                    X = 'HorizontalBar_rail_32',
                    Z = 'disable',
                    Q = { pending: !1, offset: 0 },
                    J = (u) => {
                        var e;
                        return 0.9 * (null != (e = u.getWrapperSize()) ? e : 0);
                    },
                    uu = () => {},
                    eu = (u, e) => Math.max(20, u.offsetWidth * e),
                    tu = (0, o.memo)(({ api: u, classNames: e = {}, getStepByRailClick: t = J, onDrag: n = uu }) => {
                        const r = (0, o.useRef)(null),
                            s = (0, o.useRef)(null),
                            l = (0, o.useRef)(null),
                            c = (0, o.useRef)(null),
                            E = (0, o.useRef)(null),
                            A = u.stepTimeout || 100,
                            F = (0, o.useState)(Q),
                            m = F[0],
                            d = F[1],
                            D = (0, o.useCallback)(
                                (u) => {
                                    d(u),
                                        E.current && n({ type: u.pending ? 'dragStart' : 'dragEnd', thumb: E.current });
                                },
                                [n],
                            ),
                            B = () => {
                                const e = c.current,
                                    t = E.current,
                                    n = u.getWrapperSize(),
                                    r = u.getContainerSize();
                                if (!(n && e && t && r)) return;
                                const a = u.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, n / r),
                                    i = x(0, 1, a / (r - n)),
                                    A = (e.offsetWidth - eu(e, o)) * i;
                                (t.style.transform = `translateX(${0 | A}px)`),
                                    ((u) => {
                                        if (s.current && l.current && c.current && E.current) {
                                            if (0 === u)
                                                return s.current.classList.add(Z), void l.current.classList.remove(Z);
                                            if (
                                                ((e = c.current),
                                                (t = E.current),
                                                u - (e.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return s.current.classList.remove(Z), void l.current.classList.add(Z);
                                            var e, t;
                                            s.current.classList.remove(Z), l.current.classList.remove(Z);
                                        }
                                    })(A);
                            },
                            _ = P(() => {
                                (() => {
                                    const e = E.current,
                                        t = c.current,
                                        n = u.getWrapperSize(),
                                        a = u.getContainerSize();
                                    if (!(a && e && n && t)) return;
                                    const o = Math.min(1, n / a);
                                    (e.style.width = `${eu(t, o)}px`),
                                        (e.style.display = 'flex'),
                                        r.current &&
                                            (1 === o ? r.current.classList.add(U) : r.current.classList.remove(U));
                                })(),
                                    B();
                            });
                        (0, o.useEffect)(() => S(_)),
                            (0, o.useEffect)(
                                () =>
                                    S(() => {
                                        const e = () => {
                                            B();
                                        };
                                        let t = uu;
                                        const n = () => {
                                            t(), (t = S(_));
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
                                if (!m.pending) return;
                                const e = a.O.client.events.mouse.move(([e, t]) => {
                                        var r;
                                        const a = u.contentRef.current,
                                            o = u.wrapperRef.current;
                                        if (!a || !o) return;
                                        const i = c.current,
                                            s = E.current;
                                        if (!i || !s) return;
                                        if ('inside' === t && e.clientX < 0) return;
                                        const l = e.clientX - m.offset - i.getBoundingClientRect().x,
                                            A = (l / i.offsetWidth) * (null != (r = u.getContainerSize()) ? r : 0);
                                        u.scrollPosition.start({
                                            scrollPosition: u.clampPosition(a, A),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: u.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: s, thumbOffset: l, contentOffset: A });
                                    }),
                                    t = a.O.client.events.mouse.up(() => {
                                        e(), D(Q);
                                    });
                                return () => {
                                    e(), t();
                                };
                            }, [u, m.offset, m.pending, n, D]);
                        const C = T((e) => u.applyStepTo(e), A, [u]),
                            g = C[0],
                            f = C[1];
                        (0, o.useEffect)(
                            () => (
                                document.addEventListener('mouseup', f, !0),
                                () => document.removeEventListener('mouseup', f, !0)
                            ),
                            [f],
                        );
                        const p = (u) => {
                            u.target.classList.contains(Z) || N('highlight');
                        };
                        return i().createElement(
                            'div',
                            { className: y()(j, e.base), ref: r, onWheel: u.handleMouseWheel },
                            i().createElement('div', {
                                className: y()(G, e.leftButton),
                                onMouseDown: (u) => {
                                    u.target.classList.contains(Z) || 0 !== u.button || (N('play'), g(H.Next));
                                },
                                onMouseUp: f,
                                ref: s,
                                onMouseEnter: p,
                            }),
                            i().createElement(
                                'div',
                                {
                                    className: y()(Y, e.track),
                                    onMouseDown: (e) => {
                                        const n = E.current;
                                        if (n && 0 === e.button)
                                            if ((N('play'), e.target === n))
                                                D({ pending: !0, offset: e.screenX - n.getBoundingClientRect().x });
                                            else {
                                                ((e) => {
                                                    const n = E.current,
                                                        r = u.contentRef.current;
                                                    if (!n || !r) return;
                                                    const a = t(u);
                                                    u.applyScroll(u.animationScroll.scrollPosition.get() + a * e);
                                                })(e.screenX > n.getBoundingClientRect().x ? H.Prev : H.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: p,
                                },
                                i().createElement('div', { ref: E, className: y()(K, e.thumb) }),
                                i().createElement('div', { className: y()(X, e.rail) }),
                            ),
                            i().createElement('div', {
                                className: y()(q, e.rightButton),
                                onMouseDown: (u) => {
                                    u.target.classList.contains(Z) || 0 !== u.button || (N('play'), g(H.Prev));
                                },
                                onMouseUp: f,
                                ref: l,
                                onMouseEnter: p,
                            }),
                        );
                    }),
                    nu = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    ru = ({
                        children: u,
                        api: e,
                        className: t,
                        barClassNames: n,
                        areaClassName: r,
                        classNames: a,
                        scrollClassName: s,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const E = (0, o.useMemo)(() => {
                                const u = n || {};
                                return Object.assign({}, u, { base: y()(nu.base, u.base) });
                            }, [n]),
                            A = (0, o.useMemo)(() => Object.assign({}, e, { handleMouseWheel: () => {} }), [e]);
                        return i().createElement(
                            'div',
                            { className: y()(nu.defaultScroll, t), onWheel: e.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: y()(nu.defaultScrollArea, r) },
                                i().createElement(au, { className: s, api: A, classNames: a }, u),
                            ),
                            i().createElement(tu, { getStepByRailClick: l, api: e, onDrag: c, classNames: E }),
                        );
                    },
                    au = ({ api: u, className: e, classNames: t, children: n }) => (
                        (0, o.useEffect)(() => S(u.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: y()(nu.base, e) },
                            i().createElement(
                                'div',
                                {
                                    className: y()(nu.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: u.handleMouseWheel,
                                    ref: u.wrapperRef,
                                },
                                i().createElement(
                                    'div',
                                    { className: y()(nu.content, null == t ? void 0 : t.content), ref: u.contentRef },
                                    n,
                                ),
                            ),
                        )
                    );
                (au.Bar = tu), (au.Default = ru);
                const ou = V({
                        getBounds: (u) => [0, u.scrollHeight - u.offsetHeight],
                        getContainerSize: (u) => u.scrollHeight,
                        getWrapperSize: (u) => u.offsetHeight,
                        setScrollPosition: (u, e) => {
                            u.scrollTop = e.value.scrollPosition;
                        },
                        getDirection: (u) => (u.deltaY > 1 ? H.Next : H.Prev),
                    }),
                    iu = 'VerticalBar_base_f3',
                    su = 'VerticalBar_base__nonActive_42',
                    lu = 'VerticalBar_topButton_d7',
                    cu = 'VerticalBar_bottomButton_06',
                    Eu = 'VerticalBar_track_df',
                    Au = 'VerticalBar_thumb_32',
                    Fu = 'VerticalBar_rail_43',
                    mu = 'disable',
                    du = () => {},
                    Du = { pending: !1, offset: 0 },
                    Bu = (u) => {
                        var e;
                        return 0.9 * (null != (e = u.getWrapperSize()) ? e : 0);
                    },
                    _u = (u, e) => {
                        u.contentRef.current && e(u.contentRef.current);
                    },
                    Cu = (u, e) => Math.max(20, u.offsetHeight * e),
                    gu = (0, o.memo)(({ api: u, classNames: e = {}, getStepByRailClick: t = Bu, onDrag: n = du }) => {
                        const r = (0, o.useRef)(null),
                            s = (0, o.useRef)(null),
                            l = (0, o.useRef)(null),
                            c = (0, o.useRef)(null),
                            E = (0, o.useRef)(null),
                            A = u.stepTimeout || 100,
                            F = (0, o.useState)(Du),
                            m = F[0],
                            d = F[1],
                            D = (0, o.useCallback)(
                                (u) => {
                                    d(u),
                                        E.current && n({ type: u.pending ? 'dragStart' : 'dragEnd', thumb: E.current });
                                },
                                [n],
                            ),
                            B = P(() => {
                                const e = E.current,
                                    t = c.current,
                                    n = u.getWrapperSize(),
                                    a = u.getContainerSize();
                                if (!(n && a && e && t)) return;
                                const o = Math.min(1, n / a);
                                return (
                                    (e.style.height = `${Cu(t, o)}px`),
                                    (e.style.display = 'flex'),
                                    r.current &&
                                        (1 === o ? r.current.classList.add(su) : r.current.classList.remove(su)),
                                    o
                                );
                            }),
                            _ = P(() => {
                                const e = c.current,
                                    t = E.current,
                                    n = u.getWrapperSize(),
                                    r = u.getContainerSize();
                                if (!(n && e && t && r)) return;
                                const a = u.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, n / r),
                                    i = x(0, 1, a / (r - n)),
                                    A = (e.offsetHeight - Cu(e, o)) * i;
                                (t.style.transform = `translateY(${0 | A}px)`),
                                    ((u) => {
                                        if (s.current && l.current && c.current && E.current) {
                                            if (0 === Math.round(u))
                                                return s.current.classList.add(mu), void l.current.classList.remove(mu);
                                            if (
                                                ((e = c.current),
                                                (t = E.current),
                                                u - (e.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return s.current.classList.remove(mu), void l.current.classList.add(mu);
                                            var e, t;
                                            s.current.classList.remove(mu), l.current.classList.remove(mu);
                                        }
                                    })(A);
                            }),
                            C = P(() => {
                                _u(u, () => {
                                    B(), _();
                                });
                            });
                        (0, o.useEffect)(() => S(C)),
                            (0, o.useEffect)(() => {
                                const e = () => {
                                    _u(u, () => {
                                        _();
                                    });
                                };
                                let t = du;
                                const n = () => {
                                    t(), (t = S(C));
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
                                if (!m.pending) return;
                                const e = a.O.client.events.mouse.up(() => {
                                        D(Du);
                                    }),
                                    t = a.O.client.events.mouse.move(([e]) => {
                                        _u(u, (t) => {
                                            const r = c.current,
                                                a = E.current,
                                                o = u.getContainerSize();
                                            if (!r || !a || !o) return;
                                            const i = e.screenY - m.offset - r.getBoundingClientRect().y,
                                                s = (i / r.offsetHeight) * o;
                                            u.scrollPosition.start({
                                                scrollPosition: u.clampPosition(t, s),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: a, thumbOffset: i, contentOffset: s });
                                        });
                                    });
                                return () => {
                                    e(), t();
                                };
                            }, [u, m.offset, m.pending, n, D]);
                        const g = T((e) => u.applyStepTo(e), A, [u]),
                            f = g[0],
                            p = g[1];
                        (0, o.useEffect)(
                            () => (
                                document.addEventListener('mouseup', p, !0),
                                () => document.removeEventListener('mouseup', p, !0)
                            ),
                            [p],
                        );
                        const h = (u) => {
                            u.target.classList.contains(mu) || N('highlight');
                        };
                        return i().createElement(
                            'div',
                            { className: y()(iu, e.base), ref: r, onWheel: u.handleMouseWheel },
                            i().createElement('div', {
                                className: y()(lu, e.topButton),
                                onMouseDown: (u) => {
                                    u.target.classList.contains(mu) || 0 !== u.button || (N('play'), f(H.Next));
                                },
                                ref: s,
                                onMouseEnter: h,
                            }),
                            i().createElement(
                                'div',
                                {
                                    className: y()(Eu, e.track),
                                    onMouseDown: (e) => {
                                        const n = E.current;
                                        if (n && 0 === e.button)
                                            if ((N('play'), e.target === n))
                                                D({ pending: !0, offset: e.screenY - n.getBoundingClientRect().y });
                                            else {
                                                ((e) => {
                                                    E.current &&
                                                        _u(u, (n) => {
                                                            if (!n) return;
                                                            const r = t(u),
                                                                a = u.clampPosition(n, n.scrollTop + r * e);
                                                            u.applyScroll(a);
                                                        });
                                                })(e.screenY > n.getBoundingClientRect().y ? H.Prev : H.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: h,
                                },
                                i().createElement('div', { ref: E, className: y()(Au, e.thumb) }),
                                i().createElement('div', { className: y()(Fu, e.rail) }),
                            ),
                            i().createElement('div', {
                                className: y()(cu, e.bottomButton),
                                onMouseDown: (u) => {
                                    u.target.classList.contains(mu) || 0 !== u.button || (N('play'), f(H.Prev));
                                },
                                onMouseUp: p,
                                ref: l,
                                onMouseEnter: h,
                            }),
                        );
                    }),
                    fu = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    pu = ({
                        children: u,
                        api: e,
                        className: t,
                        barClassNames: n,
                        areaClassName: r,
                        scrollClassName: a,
                        scrollClassNames: s,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const E = (0, o.useMemo)(() => {
                                const u = n || {};
                                return Object.assign({}, u, { base: y()(fu.base, u.base) });
                            }, [n]),
                            A = (0, o.useMemo)(() => Object.assign({}, e, { handleMouseWheel: () => {} }), [e]);
                        return i().createElement(
                            'div',
                            { className: y()(fu.defaultScroll, t), onWheel: e.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: y()(fu.area, r) },
                                i().createElement(hu, { className: a, classNames: s, api: A }, u),
                            ),
                            i().createElement(gu, { getStepByRailClick: l, api: e, onDrag: c, classNames: E }),
                        );
                    },
                    hu = ({ className: u, classNames: e, children: t, api: n }) => (
                        (0, o.useEffect)(() => S(n.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: y()(fu.base, u), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: y()(fu.content, null == e ? void 0 : e.content), ref: n.contentRef },
                                t,
                            ),
                        )
                    );
                hu.Default = pu;
                const vu = { Vertical: r, Horizontal: n },
                    wu = {
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
                    bu = [
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
                function yu() {
                    return (
                        (yu = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        yu.apply(null, arguments)
                    );
                }
                class Su extends i().PureComponent {
                    constructor(...u) {
                        super(...u),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (u) => (e) => {
                                u && u(e),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && N(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (u) => (e) => {
                                u && u(e), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (u) => (e) => {
                                u && u(e),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && N(this.props.soundClick);
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
                            s = u.onMouseEnter,
                            l = u.onMouseLeave,
                            c = u.onMouseDown,
                            E = u.onMouseUp,
                            A =
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
                                })(u, bu)),
                            F = y()(wu.base, wu[`base__${a}`], wu[`base__${r}`], null == o ? void 0 : o.base),
                            m = y()(wu.icon, wu[`icon__${a}`], wu[`icon__${r}`], null == o ? void 0 : o.icon),
                            d = y()(wu.glow, null == o ? void 0 : o.glow),
                            D = y()(wu.caption, wu[`caption__${a}`], null == o ? void 0 : o.caption),
                            B = y()(wu.goto, null == o ? void 0 : o.goto);
                        return i().createElement(
                            'div',
                            yu(
                                {
                                    className: F,
                                    onMouseEnter: this._onMouseEnter(s),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(E),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                A,
                            ),
                            'info' !== a && i().createElement('div', { className: wu.shine }),
                            i().createElement('div', { className: m }, i().createElement('div', { className: d })),
                            i().createElement('div', { className: D }, e),
                            n && i().createElement('div', { className: B }, n),
                        );
                    }
                }
                Su.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var xu = t(521),
                    ku = t(916);
                const Pu = (u) => {
                    console.error(u.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function Tu(u = xu.n.NONE, e = Pu, t = !1, n = !1) {
                    (0, o.useEffect)(() => {
                        if (u !== xu.n.NONE)
                            return (
                                window.addEventListener('keydown', r, t),
                                () => {
                                    window.removeEventListener('keydown', r, t);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === u) {
                                if (!n && a.O.view.isEventHandled()) return;
                                a.O.view.setEventHandled(), e(r), t && r.stopPropagation();
                            }
                        }
                    }, [e, u, t, n]);
                }
                const Nu = (u = 1) => {
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
                    Ou = (u, e) => u.split('.').reduce((u, e) => u && u[e], e),
                    Mu = (u) => u && 'ArrayItem' === u.__proto__.constructor.name,
                    Ru = (u, e) => (u.length > 0 ? `${u}.${e}` : e),
                    Lu = (u) =>
                        ((u, e) =>
                            u.split('.').reduce((u, t) => {
                                const n = Ou(`${u}.${t}`, window);
                                return Mu(n) ? e(u, t, n) : `${u}.${t}`;
                            }))(u, (u, e) => `${u}.${e}.value`),
                    Iu = (u) => {
                        const e = ((u) => {
                                const e = Nu(),
                                    t = e.caller,
                                    n = e.resId,
                                    r = window.__feature && window.__feature !== t && t ? `subViews.${t}` : '';
                                return { modelPrefix: r, modelPath: Ru(r, u || ''), resId: n };
                            })(),
                            t = e.modelPrefix,
                            n = u.split('.');
                        if (n.length > 0) {
                            const u = [n[0]];
                            return (
                                n.reduce((e, n) => {
                                    const r = Ou(Ru(t, `${e}.${n}`), window);
                                    return Mu(r) ? (u.push(r.id), `${e}.${n}.value`) : (u.push(n), `${e}.${n}`);
                                }),
                                u.reduce((u, e) => u + '.' + e)
                            );
                        }
                        return '';
                    },
                    zu = ku.Sw.instance;
                let Hu;
                !(function (u) {
                    (u.None = 'None'), (u.Shallow = 'Shallow'), (u.Deep = 'Deep');
                })(Hu || (Hu = {}));
                const Wu = (u = 'model', e = Hu.Deep) => {
                    const t = (0, o.useState)(0),
                        n = (t[0], t[1]),
                        r = (0, o.useMemo)(() => Nu(), []),
                        a = r.caller,
                        i = r.resId,
                        s = (0, o.useMemo)(
                            () => (window.__feature && window.__feature !== a ? `subViews.${a}.${u}` : u),
                            [a, u],
                        ),
                        l = (0, o.useState)(() =>
                            ((u) => {
                                const e = Ou(u, window);
                                for (const u in e) 'function' == typeof e[u] && (e[u] = e[u].bind(e));
                                return Mu(e) ? e.value : e;
                            })(Lu(s)),
                        ),
                        c = l[0],
                        E = l[1],
                        A = (0, o.useRef)(-1);
                    return (
                        f(() => {
                            if (
                                ('boolean' == typeof e &&
                                    ((e = e ? Hu.Deep : Hu.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                e !== Hu.None)
                            ) {
                                const t = (u) => {
                                        ((u) => u && 'CoherentArrayProxy' === u.__proto__.constructor.name)(u) &&
                                        e === Hu.Deep
                                            ? (u === c && n((u) => u + 1), E(u))
                                            : E(Object.assign([], u));
                                    },
                                    r = Iu(u);
                                A.current = zu.addCallback(r, t, i, e === Hu.Deep);
                            }
                        }),
                        (0, o.useEffect)(() => {
                            if (e !== Hu.None)
                                return () => {
                                    zu.removeCallback(A.current, i);
                                };
                        }, [i, e]),
                        c
                    );
                };
                function Vu(u, e) {
                    var t;
                    if (!(e >= u.length)) return Array.isArray(u) ? u[e] : null == (t = u[e]) ? void 0 : t.value;
                }
                const $u = Vu;
                const ju = 'ProgressionHeader_base_d3',
                    Uu = 'ProgressionHeader_base__large_26',
                    Gu = 'ProgressionHeader_line_60',
                    qu = 'ProgressionHeader_title_3f',
                    Yu = ({ title: u, className: e }) => {
                        const t = (0, o.useContext)(_),
                            n = y()(ju, (t.large || t.extraLarge) && Uu, e);
                        return i().createElement(
                            'div',
                            { className: n },
                            i().createElement('div', { className: Gu }),
                            i().createElement(
                                'span',
                                { className: qu },
                                R.strings.common.common.open_quotes(),
                                u,
                                R.strings.common.common.close_quotes(),
                            ),
                            i().createElement('div', { className: Gu }),
                        );
                    };
                var Ku = t(281);
                let Xu;
                function Zu(u, e) {
                    return u.replace(/\{\w+\}/g, (u) => String(e[u.slice(1, -1)]));
                }
                !(function (u) {
                    (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
                })(Xu || (Xu = {}));
                const Qu = (u) => u.replace(/&nbsp;/g, ' '),
                    Ju = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    ue = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    ee = (u, e, t = Xu.left) => u.split(e).reduce(t === Xu.left ? Ju : ue, []),
                    te = (() => {
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
                    ne = ['zh_cn', 'zh_sg', 'zh_tw'],
                    re = (u, e = Xu.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (ne.includes(t)) return te(u);
                        if ('ja' === t) {
                            return (0, Ku.D4)()
                                .parse(u)
                                .map((u) => Qu(u));
                        }
                        return ((u, e = Xu.left) => {
                            let t = [];
                            const n =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                r = Qu(u);
                            return ee(r, /( )/, e).forEach((u) => (t = t.concat(ee(u, n, Xu.left)))), t;
                        })(u, e);
                    };
                var ae = t(613);
                Date.now(), ae.Ew.getRegionalDateTime, ae.Ew.getFormattedDateTime;
                ku.Sw.instance;
                function oe() {
                    return (
                        (oe = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        oe.apply(null, arguments)
                    );
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
                function se(u) {
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
                const le = (u, e, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: ku.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    ce = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            n = u.args,
                            r = u.onMouseEnter,
                            a = u.onMouseLeave,
                            i = u.onMouseDown,
                            s = u.onClick,
                            l = u.ignoreShowDelay,
                            c = void 0 !== l && l,
                            E = u.ignoreMouseClick,
                            A = void 0 !== E && E,
                            F = u.decoratorId,
                            m = void 0 === F ? 0 : F,
                            d = u.isEnabled,
                            D = void 0 === d || d,
                            B = u.targetId,
                            _ = void 0 === B ? 0 : B,
                            C = u.onShow,
                            g = u.onHide,
                            f = (function (u, e) {
                                if (null == u) return {};
                                var t = {};
                                for (var n in u)
                                    if ({}.hasOwnProperty.call(u, n)) {
                                        if (e.indexOf(n) >= 0) continue;
                                        t[n] = u[n];
                                    }
                                return t;
                            })(u, ie);
                        const p = (0, o.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            h = (0, o.useMemo)(() => _ || Nu().resId, [_]),
                            v = (0, o.useCallback)(() => {
                                (p.current.isVisible && p.current.timeoutId) ||
                                    (le(t, m, { isMouseEvent: !0, on: !0, arguments: se(n) }, h),
                                    C && C(),
                                    (p.current.isVisible = !0));
                            }, [t, m, n, h, C]),
                            w = (0, o.useCallback)(() => {
                                if (p.current.isVisible || p.current.timeoutId) {
                                    const u = p.current.timeoutId;
                                    u > 0 && (clearTimeout(u), (p.current.timeoutId = 0)),
                                        le(t, m, { on: !1 }, h),
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
                                              ((y = e.props.onMouseEnter),
                                              (u) => {
                                                  (u.clientX === window.innerWidth &&
                                                      u.clientY === window.innerHeight) ||
                                                      ((p.current.timeoutId = window.setTimeout(v, c ? 100 : 400)),
                                                      r && r(u),
                                                      y && y(u));
                                              }),
                                          onMouseLeave: ((u) => (e) => {
                                              w(), null == a || a(e), null == u || u(e);
                                          })(e.props.onMouseLeave),
                                          onClick: ((u) => (e) => {
                                              !1 === A && w(), null == s || s(e), null == u || u(e);
                                          })(e.props.onClick),
                                          onMouseDown: ((u) => (e) => {
                                              !1 === A && w(), null == i || i(e), null == u || u(e);
                                          })(e.props.onMouseDown),
                                      },
                                      f,
                                  ),
                              )
                            : e;
                        var y;
                    },
                    Ee = ['children'];
                function Ae() {
                    return (
                        (Ae = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        Ae.apply(null, arguments)
                    );
                }
                const Fe = (u) => {
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
                            })(u, Ee);
                        return i().createElement(
                            ce,
                            Ae(
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
                    me = 'HoverContent_base_5c',
                    de = 'HoverContent_icon_99',
                    De = 'HoverContent_text_e7',
                    Be = ({ className: u }) => {
                        const e = (0, o.useMemo)(() => R.strings.vehicle_customization.progression.item.hover(), []);
                        return i().createElement(
                            'span',
                            { className: y()(me, u) },
                            i().createElement('span', { className: de }),
                            i().createElement('span', { className: De }, e),
                        );
                    },
                    _e = 'Icon_base_d5',
                    Ce = 'Icon_base__placeholder_9c',
                    ge = 'Icon_imageTemp_1f',
                    fe = ({ src: u, alt: e, onClick: t, onLoad: n, className: r }) => {
                        const a = (0, o.useState)(!0),
                            s = a[0],
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
                            m = i().createElement('img', {
                                className: y()(r, s && ge),
                                src: u,
                                onClick: t,
                                onLoad: F,
                                alt: e,
                            });
                        return E
                            ? s
                                ? i().createElement(
                                      'div',
                                      { className: y()(r, _e) },
                                      s && i().createElement('div', { className: Ce }),
                                      m,
                                  )
                                : m
                            : null;
                    },
                    pe = 'Item_base_50',
                    he = 'Item_base__first_a0',
                    ve = 'Item_base__firstSmall_e6',
                    we = 'Item_base__firstLarge_53',
                    be = 'Item_content_bb',
                    ye = 'Item_content__small_9a',
                    Se = 'Item_content__large_a3',
                    xe = 'Item_image_f0',
                    ke = 'Item_image__small_9c',
                    Pe = 'Item_image__large_38',
                    Te = 'Item_image__locked_0f',
                    Ne = 'Item_image__progress_21',
                    Oe = 'Item_imageContainer_8f',
                    Me = 'Item_imageContainer__small_6c',
                    Re = 'Item_imageContainer__large_17',
                    Le = 'Item_hoverContent_51',
                    Ie = 'Item_itemProgression_d8',
                    ze = 'Item_itemProgression__small_2e',
                    He = 'Item_itemProgression__large_34',
                    We = 'Item_itemProgressionWithBar_f5',
                    Ve = 'Item_itemProgressionWithBar__small_20',
                    $e = 'Item_itemProgressionWithBar__large_ab',
                    je = 'Item_itemSeparator_1f',
                    Ue = 'Item_itemSeparator__small_94',
                    Ge = 'Item_itemSeparator__large_ba',
                    qe = 'ItemBlockDone_base_b5',
                    Ye = 'ItemBlockDone_base__large_69',
                    Ke = 'ItemBlockDone_contentContainer_04',
                    Xe = 'ItemBlockDone_contentContainer__small_61',
                    Ze = 'ItemBlockDone_contentContainer__large_b2',
                    Qe = ({ levelText: u }) => {
                        const e = (0, o.useContext)(_),
                            t = e.small,
                            n = e.large || e.extraLarge,
                            r = y()(qe, n && Ye),
                            a = y()(Ke, t && Xe, n && Ze);
                        return i().createElement(
                            'div',
                            { className: r },
                            i().createElement('div', { className: a }, u),
                        );
                    },
                    Je = {
                        base: 'ProgressBar_base_45',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let ut, et;
                !(function (u) {
                    (u.Small = 'small'), (u.Medium = 'medium'), (u.Default = 'medium');
                })(ut || (ut = {})),
                    (function (u) {
                        (u[(u.Simple = 0)] = 'Simple'), (u[(u.Growing = 1)] = 'Growing');
                    })(et || (et = {}));
                const tt = ({ size: u = ut.Default }) => {
                        const e = y()(Je.background, Je[`background__${u}`]);
                        return i().createElement('div', { className: e });
                    },
                    nt = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                    rt = ({ size: u }) => {
                        const e = y()(nt.base, nt[`base__${u}`]);
                        return i().createElement('div', { className: e });
                    },
                    at = {
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
                    ot = (0, o.memo)(
                        ({ size: u, lineRef: e, disabled: t, baseStyles: n, isComplete: r, withoutBounce: a }) => {
                            const o = y()(
                                    at.base,
                                    at[`base__${u}`],
                                    t && at.base__disabled,
                                    r && at.base__finished,
                                    a && at.base__withoutBounce,
                                ),
                                s = !t && !r;
                            return i().createElement(
                                'div',
                                { className: o, style: n, ref: e },
                                i().createElement('div', { className: at.pattern }),
                                i().createElement('div', { className: at.gradient }),
                                s && i().createElement(rt, { size: u }),
                            );
                        },
                    ),
                    it = ({ size: u, value: e, lineRef: t, disabled: n, onComplete: r }) => {
                        const a = (0, o.useMemo)(() => ({ width: `${e}%`, transitionProperty: 'none' }), [e]),
                            s = 100 === e;
                        return (
                            (0, o.useEffect)(() => {
                                s && r && r();
                            }, [s, r]),
                            i().createElement(ot, { size: u, disabled: n, baseStyles: a, isComplete: s, lineRef: t })
                        );
                    },
                    st = (u, e) => {
                        let t;
                        const n = setTimeout(() => {
                            t = u();
                        }, e);
                        return () => {
                            'function' == typeof t && t(), clearTimeout(n);
                        };
                    };
                let lt, ct;
                !(function (u) {
                    (u.Idle = 'Idle'), (u.Grow = 'Grow'), (u.Shrink = 'Shrink'), (u.End = 'End');
                })(lt || (lt = {})),
                    (function (u) {
                        (u.Idle = 'Idle'), (u.In = 'In'), (u.End = 'End');
                    })(ct || (ct = {}));
                const Et = 'ProgressBarDeltaSimple_base_6c',
                    At = 'ProgressBarDeltaSimple_delta_99',
                    Ft = (0, o.memo)(
                        ({
                            transitionDuration: u,
                            transitionDelay: e,
                            freezed: t,
                            from: n,
                            size: r,
                            to: a,
                            onEndAnimation: s,
                            onChangeAnimationState: l,
                        }) => {
                            const c = a < n,
                                E = (0, o.useState)(ct.Idle),
                                A = E[0],
                                F = E[1],
                                m = A === ct.In,
                                d = A === ct.End,
                                D = A === ct.Idle,
                                B = (0, o.useCallback)(
                                    (u) => {
                                        F(u), l && l(u);
                                    },
                                    [l],
                                );
                            (0, o.useEffect)(() => {
                                if (D && !t) {
                                    return st(() => {
                                        B(ct.In);
                                    }, e);
                                }
                            }, [B, t, D, e]),
                                (0, o.useEffect)(() => {
                                    if (m) {
                                        return st(() => {
                                            s && s(), B(ct.End);
                                        }, u + e);
                                    }
                                }, [B, m, s, e, u]);
                            const _ = (0, o.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${u}ms`,
                                        transitionDelay: `${e}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, e, u],
                                ),
                                C = (0, o.useMemo)(
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
                                : i().createElement(
                                      'div',
                                      { className: Et, style: g },
                                      i().createElement(
                                          'div',
                                          { style: D ? _ : C, className: At },
                                          i().createElement(rt, { size: r }),
                                      ),
                                  );
                        },
                    ),
                    mt = (0, o.memo)(
                        ({
                            to: u,
                            size: e,
                            from: t,
                            lineRef: n,
                            disabled: r,
                            isComplete: a,
                            animationSettings: s,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const E = (0, o.useMemo)(
                                () => ({
                                    width: `${u}%`,
                                    transitionDuration: `${s.line.duration}ms`,
                                    transitionDelay: `${s.line.delay}ms`,
                                }),
                                [s.line.delay, s.line.duration, u],
                            );
                            return i().createElement(
                                i().Fragment,
                                null,
                                i().createElement(ot, {
                                    size: e,
                                    lineRef: n,
                                    disabled: r,
                                    isComplete: a,
                                    baseStyles: E,
                                }),
                                t >= 0 &&
                                    i().createElement(Ft, {
                                        transitionDuration: s.delta.duration,
                                        transitionDelay: s.delta.delay,
                                        freezed: s.freezed,
                                        from: t,
                                        size: e,
                                        to: u,
                                        onChangeAnimationState: l,
                                        onEndAnimation: c,
                                    }),
                            );
                        },
                    ),
                    dt = 'ProgressBarDeltaGrow_base_7e',
                    Dt = 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    Bt = 'ProgressBarDeltaGrow_glow_68',
                    _t = (u) => (u ? { left: 0 } : { right: 0 }),
                    Ct = (u, e) => (u ? { right: 100 - e + '%' } : { left: `${e}%` }),
                    gt = (u) => ({ transitionDuration: `${u}ms` }),
                    ft = (0, o.memo)(
                        ({
                            transitionDuration: u,
                            transitionDelay: e,
                            freezed: t,
                            from: n,
                            size: r,
                            to: a,
                            onEndAnimation: s,
                            onChangeAnimationState: l,
                            className: c,
                        }) => {
                            const E = a < n,
                                A = (0, o.useState)(lt.Idle),
                                F = A[0],
                                m = A[1],
                                d = F === lt.End,
                                D = F === lt.Idle,
                                B = F === lt.Grow,
                                _ = F === lt.Shrink,
                                C = (0, o.useCallback)(
                                    (u) => {
                                        m(u), l && l(u);
                                    },
                                    [l],
                                ),
                                g = (0, o.useCallback)(
                                    (u, e) =>
                                        st(() => {
                                            C(u);
                                        }, e),
                                    [C],
                                );
                            (0, o.useEffect)(() => {
                                if (!t)
                                    return D
                                        ? g(lt.Grow, e)
                                        : B
                                          ? g(lt.Shrink, u)
                                          : _
                                            ? g(lt.End, u)
                                            : void (d && s && s());
                            }, [g, t, d, B, D, _, s, e, u]);
                            const f = (0, o.useMemo)(() => Object.assign({ width: '100%' }, gt(u), _t(E)), [E, u]),
                                p = (0, o.useMemo)(() => Object.assign({ width: '0%' }, gt(u), _t(E)), [E, u]),
                                h = (0, o.useMemo)(() => Object.assign({ width: '0%' }, Ct(E, n), gt(u)), [n, E, u]),
                                v = (0, o.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(a - n)}%` }, Ct(E, n), gt(u)),
                                    [n, E, a, u],
                                );
                            if (d) return null;
                            const w = y()(dt, c, E && 0 === a && Dt);
                            return i().createElement(
                                'div',
                                { style: D ? h : v, className: w },
                                i().createElement(
                                    'div',
                                    { style: _ ? p : f, className: Bt },
                                    i().createElement(rt, { size: r }),
                                ),
                            );
                        },
                    ),
                    pt = (0, o.memo)(
                        ({
                            to: u,
                            size: e,
                            from: t,
                            lineRef: n,
                            disabled: r,
                            isComplete: a,
                            animationSettings: s,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const E = u < t,
                                A = (0, o.useState)(!1),
                                F = A[0],
                                m = A[1],
                                d = (0, o.useCallback)(
                                    (u) => {
                                        u === lt.Shrink && m(!0), c && c(u);
                                    },
                                    [c],
                                ),
                                D = (0, o.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                B = (0, o.useMemo)(
                                    () => ({ width: `${u}%`, transitionDuration: `${s.line.duration}ms` }),
                                    [s.line.duration, u],
                                );
                            return i().createElement(
                                i().Fragment,
                                null,
                                i().createElement(ot, {
                                    size: e,
                                    lineRef: n,
                                    disabled: r,
                                    isComplete: a,
                                    withoutBounce: E && 0 === u,
                                    baseStyles: F ? B : D,
                                }),
                                t >= 0 &&
                                    i().createElement(ft, {
                                        transitionDuration: s.delta.duration,
                                        transitionDelay: s.delta.delay,
                                        onChangeAnimationState: d,
                                        freezed: s.freezed,
                                        onEndAnimation: l,
                                        from: t,
                                        size: e,
                                        to: u,
                                        className: s.delta.className,
                                    }),
                            );
                        },
                    ),
                    ht = ['onComplete', 'onEndAnimation'];
                function vt() {
                    return (
                        (vt = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        vt.apply(null, arguments)
                    );
                }
                const wt = (0, o.memo)((u) => {
                        let e = u.onComplete,
                            t = u.onEndAnimation,
                            n = (function (u, e) {
                                if (null == u) return {};
                                var t = {};
                                for (var n in u)
                                    if ({}.hasOwnProperty.call(u, n)) {
                                        if (e.indexOf(n) >= 0) continue;
                                        t[n] = u[n];
                                    }
                                return t;
                            })(u, ht);
                        const r = (0, o.useState)(!1),
                            a = r[0],
                            s = r[1],
                            l = (0, o.useCallback)(() => {
                                const u = 100 === n.to;
                                u !== a && s(u), u && e && e(), t && t();
                            }, [a, e, t, n.to]);
                        switch (n.animationSettings.type) {
                            case et.Simple:
                                return i().createElement(mt, vt({}, n, { onEndAnimation: l, isComplete: a }));
                            case et.Growing:
                                return i().createElement(pt, vt({}, n, { onEndAnimation: l, isComplete: a }));
                            default:
                                return null;
                        }
                    }),
                    bt = ['onEndAnimation'];
                function yt() {
                    return (
                        (yt = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        yt.apply(null, arguments)
                    );
                }
                const St = (0, o.memo)((u) => {
                    let e = u.onEndAnimation,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t = {};
                            for (var n in u)
                                if ({}.hasOwnProperty.call(u, n)) {
                                    if (e.indexOf(n) >= 0) continue;
                                    t[n] = u[n];
                                }
                            return t;
                        })(u, bt);
                    const n = (0, o.useRef)({}),
                        r = (0, o.useCallback)(() => {
                            (n.current.from = void 0), e && e();
                        }, [e]),
                        a = 'number' == typeof n.current.from ? n.current.from : t.from;
                    return (
                        (n.current.from = a),
                        i().createElement(wt, yt({}, t, { onEndAnimation: r, key: `${a}-${t.to}`, from: a }))
                    );
                });
                function xt() {
                    return (
                        (xt = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        xt.apply(null, arguments)
                    );
                }
                const kt = (0, o.memo)(
                        ({
                            size: u,
                            value: e,
                            lineRef: t,
                            disabled: n,
                            deltaFrom: r,
                            animationSettings: a,
                            onEndAnimation: o,
                            onChangeAnimationState: s,
                            onComplete: l,
                        }) => {
                            if (r === e)
                                return i().createElement(it, {
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
                                onChangeAnimationState: s,
                            };
                            return a.withStack
                                ? i().createElement(St, c)
                                : i().createElement(wt, xt({ key: `${r}-${e}` }, c));
                        },
                    ),
                    Pt = (u) => ({
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
                    Tt = (u, e, t) => {
                        if ('number' == typeof t) {
                            return (x(0, e, t) / e) * 100;
                        }
                        return u;
                    },
                    Nt = {
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
                    Ot = {
                        freezed: !1,
                        withStack: !1,
                        type: et.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    Mt = (0, o.memo)(
                        ({
                            maxValue: u = 100,
                            theme: e = Nt,
                            size: t = ut.Default,
                            animationSettings: n = Ot,
                            disabled: r = !1,
                            withoutBackground: a = !1,
                            value: s,
                            deltaFrom: l,
                            lineRef: c,
                            onChangeAnimationState: E,
                            onEndAnimation: A,
                            onComplete: F,
                        }) => {
                            const m = ((u, e, t) =>
                                (0, o.useMemo)(() => {
                                    const n = (x(0, e, u) / e) * 100;
                                    return { value: n, deltaFrom: Tt(n, e, t) };
                                }, [t, e, u]))(s, u, l);
                            return i().createElement(
                                'div',
                                { className: y()(Je.base, Je[`base__${t}`]), style: Pt(e) },
                                !a && i().createElement(tt, { size: t }),
                                i().createElement(kt, {
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
                    Rt = 'ItemBlockProgression_base_19',
                    Lt = 'ItemBlockProgression_base__small_02',
                    It = 'ItemBlockProgression_text_d9',
                    zt = 'ItemBlockProgression_text__large_7e',
                    Ht = 'ItemBlockProgression_text__score_9d',
                    Wt = 'ItemBlockProgression_count_b1',
                    Vt = 'ItemBlockProgression_description_b2',
                    $t = ({
                        unlockCondition: u,
                        progressionVal: e,
                        maxProgressionVal: t,
                        hideProgressBarAndString: n,
                        className: r,
                    }) => {
                        const a = (0, o.useMemo)(() => `/ ${t}`, [t]),
                            s = (0, o.useContext)(_),
                            l = y()(Rt, (s.small || s.medium || s.large || s.extraLarge) && Lt, r),
                            c = y()(It, (s.large || s.extraLarge) && zt);
                        return i().createElement(
                            'div',
                            { className: l },
                            !n &&
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement(
                                        'span',
                                        { className: y()(Wt, c) },
                                        i().createElement('span', { className: Ht }, e),
                                        a,
                                    ),
                                    i().createElement(Mt, { value: e, size: ut.Small, maxValue: t }),
                                ),
                            i().createElement('span', { className: y()(Vt, c) }, u),
                        );
                    },
                    jt = 'Separator_base_44',
                    Ut = 'Separator_lock_98',
                    Gt = 'Separator_lockImage_6c',
                    qt = 'Separator_arrow_12',
                    Yt = ({ unlocked: u, className: e }) =>
                        i().createElement(
                            'span',
                            { className: y()(jt, e) },
                            i().createElement('span', { className: qt }),
                            !u &&
                                i().createElement(
                                    'span',
                                    { className: Ut },
                                    i().createElement('img', {
                                        src: 'R.images.gui.maps.icons.customization.progeression_screen.lockx2',
                                        className: Gt,
                                    }),
                                ),
                        );
                function Kt() {
                    return (
                        (Kt = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        Kt.apply(null, arguments)
                    );
                }
                const Xt = (function (u, e, t) {
                        if (!e && !t) throw new Error('You should define at least one helper function');
                        return function (n) {
                            var r;
                            return (
                                ((r = class extends i().Component {
                                    constructor(n) {
                                        super(n);
                                        let r = {};
                                        const a = Nu().caller,
                                            o = window.__feature && window.__feature !== a ? `subViews.${a}.${u}` : u,
                                            i = Ou(o, window);
                                        if ((e && (r = Object.assign({}, r, e(i))), t)) {
                                            const u = t(i);
                                            for (const e in u)
                                                Object.prototype.hasOwnProperty.call(u, e) && (r[e] = u[e].bind(i));
                                        }
                                        this.state = r;
                                    }
                                    render() {
                                        return i().createElement(n, oe({}, this.props, this.state));
                                    }
                                }).displayName = `InjectProps(${(function (u) {
                                    return u.displayName || u.name || 'Component';
                                })(n)})`),
                                r
                            );
                        };
                    })('model', void 0, (u) => ({ onSelectItem: (e, t) => u.onSelectItem({ intCD: e, level: t }) }))(
                        ({
                            itemId: u,
                            onSelectItem: e,
                            inProgress: t,
                            unlocked: n,
                            progressBlock: r,
                            icon: a,
                            level: s,
                            levelText: l,
                            isFirst: c,
                        }) => {
                            const E = (0, o.useContext)(_),
                                A = E.small,
                                F = E.medium || E.large || E.extraLarge,
                                m = (0, o.useMemo)(() => y()(pe, c && he, c && A && ve, c && F && we), [c, A, F]),
                                d = (0, o.useMemo)(
                                    () => y()(xe, (t || !n) && Te, t && Ne, A && ke, F && Pe),
                                    [t, n, A, F],
                                ),
                                D = y()(be, A && ye, F && Se),
                                B = y()(Oe, A && Me, F && Re),
                                C = y()(je, A && Ue, F && Ge);
                            let g;
                            g = r.hideProgressBarAndString ? y()(Ie, A && ze, F && He) : y()(We, A && Ve, F && $e);
                            const f = (0, o.useCallback)(() => {
                                    N('cust_progress_exiting'), e(u, s);
                                }, [u, s, e]),
                                p = (0, o.useCallback)(() => {
                                    n && O.playHighlight();
                                }, [n]),
                                h = (0, o.useMemo)(
                                    () => ({
                                        id: u,
                                        tooltip: 'techCustomizationItem',
                                        showInventoryBlock: !1,
                                        level: s,
                                    }),
                                    [u, s],
                                );
                            return i().createElement(
                                'div',
                                { className: m },
                                !c && i().createElement(Yt, { unlocked: n || t, className: C }),
                                i().createElement(
                                    'div',
                                    { className: D },
                                    i().createElement(
                                        'div',
                                        { className: B, onMouseEnter: p },
                                        i().createElement(
                                            'div',
                                            { className: B, onMouseEnter: p },
                                            i().createElement(
                                                Fe,
                                                { args: h, isEnabled: -1 !== u },
                                                i().createElement(
                                                    'div',
                                                    null,
                                                    i().createElement(fe, { className: d, src: a || '', onClick: f }),
                                                    n && i().createElement(Be, { className: Le }),
                                                ),
                                            ),
                                        ),
                                    ),
                                    t && i().createElement($t, Kt({}, r, { className: g })),
                                    n && i().createElement(Qe, { levelText: l }),
                                ),
                            );
                        },
                    ),
                    Zt = 'List_base_37';
                function Qt() {
                    return (
                        (Qt = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        Qt.apply(null, arguments)
                    );
                }
                const Jt = ({ eachLevelInfo: u, itemId: e, scaleFactor: t }) =>
                        i().createElement(
                            'div',
                            { className: Zt },
                            i().createElement(
                                Xt,
                                Qt(
                                    { key: u.items[0].value.level, itemId: e, scaleFactor: t, isFirst: !0 },
                                    u.items[0].value,
                                ),
                            ),
                            i().createElement(
                                'div',
                                { className: Zt },
                                u.items.map(
                                    ({ value: u }, n) =>
                                        0 !== n &&
                                        i().createElement(Xt, Qt({ key: u.level, itemId: e, scaleFactor: t }, u)),
                                ),
                            ),
                        ),
                    un = 'ProgressionSequence_base_d9',
                    en = 'ProgressionSequence_base__small_c3',
                    tn = 'ProgressionSequence_base__large_44',
                    nn = 'ProgressionSequence_header_30',
                    rn = ['itemUserString'];
                const an = (u) => {
                        let e = u.itemUserString,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t = {};
                                for (var n in u)
                                    if ({}.hasOwnProperty.call(u, n)) {
                                        if (e.indexOf(n) >= 0) continue;
                                        t[n] = u[n];
                                    }
                                return t;
                            })(u, rn);
                        const n = (0, o.useContext)(_),
                            r = y()(un, n.small && en, (n.medium || n.large || n.extraLarge) && tn);
                        return i().createElement(
                            'div',
                            { className: r },
                            i().createElement(Yu, { title: e, className: nn }),
                            i().createElement(Jt, t),
                        );
                    },
                    on = 'Grid_base_d1',
                    sn = 'Grid_content_ec',
                    ln = 'Grid_content__small_a4',
                    cn = 'Grid_content__large_c3';
                function En() {
                    return (
                        (En = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                  }
                                  return u;
                              }),
                        En.apply(null, arguments)
                    );
                }
                const An = ({ items: u }) => {
                        const e = (0, o.useContext)(_),
                            t = y()(sn, e.small && ln, (e.medium || e.large || e.extraLarge) && cn);
                        return i().createElement(
                            'div',
                            { className: on },
                            i().createElement(
                                'div',
                                { className: t },
                                u.map(({ value: u }) => i().createElement(an, En({ key: u.itemId }, u))),
                            ),
                        );
                    },
                    Fn = 'Header_base_0d',
                    mn = 'Header_tankTypeIcon_d6',
                    dn = 'Header_contentContainer_85',
                    Dn = 'Header_spaceAtTheEnd_c0',
                    Bn = ({ name: u, level: e, extraText: t, type: n, className: r }) => {
                        const a = t ? t.replace('{tankLevel}', e) : `${e} {tankName}`,
                            o = { backgroundImage: `url(${n})` };
                        return i().createElement(
                            'div',
                            { className: y()(Fn, r) },
                            i().createElement(
                                'div',
                                { className: dn },
                                a
                                    .split('{tankName}')
                                    .map((e, t) =>
                                        1 === t
                                            ? [
                                                  i().createElement('span', { key: 'icon', className: mn, style: o }),
                                                  i().createElement('span', { key: 'name', className: Dn }, u),
                                                  i().createElement('span', { key: t }, e),
                                              ]
                                            : i().createElement('span', { key: t }, e),
                                    ),
                            ),
                        );
                    };
                Bn.defaultProps = { extraText: '' };
                const _n = {
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
                    Cn = R.strings.vehicle_customization.progression.about(),
                    gn = R.strings.menu.viewHeader.closeBtn.label(),
                    fn = R.strings.vehicle_customization.progression.tankHeader(),
                    pn = () => {
                        N(R.sounds.cust_progress_exiting()), (0, ku.Sy)();
                    },
                    hn = ({ scrollPositionRef: u, onAboutClick: e }) => {
                        const t = Wu('model'),
                            n = t.isRendererPipelineDeferred,
                            r = t.itemToScroll,
                            a = t.tankName,
                            s = t.tankLevel,
                            l = t.tankType,
                            c = t.progressiveItems,
                            E = (0, o.useRef)(null),
                            A = (0, o.useRef)(null),
                            F = ou();
                        var m;
                        return (
                            (0, o.useEffect)(() => {
                                N(R.sounds.cust_progress_entering());
                            }, []),
                            (m = pn),
                            Tu(xu.n.ESCAPE, m),
                            (0, o.useEffect)(
                                () =>
                                    S(() => {
                                        const e = E.current,
                                            t = F.contentRef.current;
                                        if (!e || !t) return;
                                        const n = (function (u, e) {
                                            for (let t = 0; t < u.length; t++) if (e($u(u, t), t, u)) return t;
                                        })(c.items, (u) => u.itemId === r);
                                        if (void 0 !== n) {
                                            const u = Math.round((e.offsetHeight / c.items.length) * n) - 30;
                                            F.applyScroll(u);
                                        } else u.current > 0 && F.applyScroll(u.current, { immediate: !0 });
                                    }),
                                [r, c.items, F, u],
                            ),
                            (0, o.useEffect)(() => {
                                const e = (e) => {
                                        u.current = e.value.scrollPosition;
                                    },
                                    t = (u) => {
                                        A.current &&
                                            (0 === u.value.scrollPosition
                                                ? A.current.classList.remove(_n.lip__show)
                                                : A.current.classList.add(_n.lip__show));
                                    };
                                return (
                                    F.events.on('change', e),
                                    F.events.on('change', t),
                                    () => {
                                        F.events.off('change', e), F.events.off('change', t);
                                    }
                                );
                            }, [F.events, u]),
                            i().createElement(
                                i().Fragment,
                                null,
                                i().createElement('div', { className: y()(_n.overlay, !n && _n.overlay__lowSettings) }),
                                i().createElement(
                                    'div',
                                    { className: _n.base },
                                    i().createElement(
                                        'div',
                                        { className: _n.header },
                                        i().createElement(Bn, { extraText: fn, name: a, level: s, type: l }),
                                    ),
                                    i().createElement('div', { ref: A, className: y()(_n.lip, _n.lip__hidden) }),
                                    i().createElement(
                                        vu.Vertical.Default,
                                        { className: _n.scroll, api: F },
                                        i().createElement(
                                            'div',
                                            { ref: E, className: _n.grid },
                                            i().createElement(An, { items: c.items }),
                                        ),
                                    ),
                                    i().createElement(
                                        'div',
                                        { className: _n.infoBtn },
                                        i().createElement(Su, { caption: Cn, type: 'info', onClick: e }),
                                    ),
                                    i().createElement(
                                        'div',
                                        { className: _n.closeBtn },
                                        i().createElement(Su, {
                                            caption: gn,
                                            type: 'close',
                                            side: 'right',
                                            onClick: pn,
                                        }),
                                    ),
                                ),
                            )
                        );
                    },
                    vn = ({ withDescription: u, onClick: e }) =>
                        i().createElement(Su, {
                            caption: R.strings.vehicle_customization.customizationHeader.back(),
                            goto: u ? R.strings.vehicle_customization.customizationHeader.toDecales() : '',
                            onClick: e,
                        }),
                    wn = 'Tutorial_base_56',
                    bn = 'Tutorial_overlay_5e',
                    yn = 'Tutorial_overlay__lowSettings_b4',
                    Sn = 'Tutorial_scroll_fc',
                    xn = 'Tutorial_goBackContainer_3d',
                    kn = 'FormatText_base_d0',
                    Pn = ({ binding: u, text: e = '', classMix: t, alignment: n = Xu.left, formatWithBrackets: r }) => {
                        if (null === e) return console.error("FormatText was supplied with 'null'"), null;
                        const a = r && u ? Zu(e, u) : e;
                        return i().createElement(
                            o.Fragment,
                            null,
                            a.split('\n').map((e, r) =>
                                i().createElement(
                                    'div',
                                    { className: y()(kn, t), key: `${e}-${r}` },
                                    ((u, e, t) =>
                                        u.split(/%\((.*?)\)(?:[sd])?/g).map((u) => (t && u in t ? t[u] : re(u, e))))(
                                        e,
                                        n,
                                        u,
                                    ).map((u, e) => i().createElement(o.Fragment, { key: `${e}-${u}` }, u)),
                                ),
                            ),
                        );
                    },
                    Tn = 'PlayVideoButton_base_93',
                    Nn = 'PlayVideoButton_hoverPreload_b8',
                    On = ({ className: u, onClick: e }) => {
                        const t = y()(u, Tn);
                        return i().createElement(
                            i().Fragment,
                            null,
                            i().createElement('div', { className: Nn }),
                            i().createElement('div', { className: t, onClick: e }),
                        );
                    },
                    Mn = 'TutorialElement_base__small_19',
                    Rn = 'TutorialElement_base__medium_e2',
                    Ln = 'TutorialElement_icon__small_2e',
                    In = 'TutorialElement_icon__medium_3d',
                    zn = 'TutorialElement_elementTitle_15',
                    Hn = 'TutorialElement_elementTitle_container_66',
                    Wn = 'TutorialElement_elementDescription_82',
                    Vn = ({ elementType: u, isSmall: e = !1 }) => {
                        const t = e ? Mn : Rn,
                            n = e ? Ln : In,
                            r = (0, o.useMemo)(
                                () => ({
                                    backgroundImage: `url(R.images.gui.maps.icons.customization.progression_tutorial.${u})`,
                                }),
                                [u],
                            );
                        return i().createElement(
                            'div',
                            { className: t },
                            i().createElement('div', { className: n, style: r }),
                            i().createElement(
                                'div',
                                { className: Hn },
                                i().createElement(
                                    'div',
                                    { className: zn },
                                    R.strings.vehicle_customization.progressionTutorial.$dyn(u).title(),
                                ),
                            ),
                            i().createElement(Pn, {
                                classMix: Wn,
                                text: R.strings.vehicle_customization.progressionTutorial.$dyn(u).description(),
                            }),
                        );
                    },
                    $n = 'TutorialContent_base_cf',
                    jn = 'TutorialContent_main_03',
                    Un = 'TutorialContent_mainTitle_38',
                    Gn = 'TutorialContent_mainTitleContainer_ef',
                    qn = 'TutorialContent_mainDescription_8b',
                    Yn = 'TutorialContent_mainDescriptionContainer_f5',
                    Kn = 'TutorialContent_videoBlock_66',
                    Xn = 'TutorialContent_videoContainer_a3',
                    Zn = 'TutorialContent_playBtn_63',
                    Qn = 'TutorialContent_elementsBlock_6c',
                    Jn = 'TutorialContent_elementsTitle_31',
                    ur = 'TutorialContent_elementsTitleContainer_40',
                    er = 'TutorialContent_elementsDescription_be',
                    tr = 'TutorialContent_elementsDescriptionContainer_36',
                    nr = 'TutorialContent_elementsContainer_68',
                    rr = 'TutorialContent_elementContainer__small_a7',
                    ar = 'TutorialContent_elementContainer__medium_ad',
                    or = () => {
                        const u = Wu('model.tutorial', Hu.None).showVideo,
                            e = (0, o.useCallback)(() => {
                                u();
                            }, [u]);
                        return i().createElement(
                            'div',
                            { className: $n },
                            i().createElement(
                                'div',
                                { className: jn },
                                i().createElement(
                                    'div',
                                    { className: Gn },
                                    i().createElement(
                                        'div',
                                        { className: Un },
                                        R.strings.vehicle_customization.progressionTutorial.title(),
                                    ),
                                ),
                                i().createElement(
                                    'div',
                                    { className: Yn },
                                    i().createElement(
                                        'div',
                                        { className: qn },
                                        R.strings.vehicle_customization.progressionTutorial.description(),
                                    ),
                                ),
                                i().createElement(
                                    'div',
                                    { className: Kn },
                                    i().createElement(
                                        'div',
                                        { className: Xn },
                                        i().createElement(On, { className: Zn, onClick: e }),
                                    ),
                                ),
                                i().createElement(
                                    'div',
                                    { className: Qn },
                                    i().createElement(
                                        'div',
                                        { className: ur },
                                        i().createElement(
                                            'div',
                                            { className: Jn },
                                            R.strings.vehicle_customization.progressionTutorial.howto.title(),
                                        ),
                                    ),
                                    i().createElement(
                                        'div',
                                        { className: tr },
                                        i().createElement(Pn, {
                                            classMix: er,
                                            text: R.strings.vehicle_customization.progressionTutorial.howto.description(),
                                        }),
                                    ),
                                    i().createElement(
                                        'div',
                                        { className: nr },
                                        i().createElement(
                                            'div',
                                            { className: ar },
                                            i().createElement(Vn, { elementType: 'improvement' }),
                                        ),
                                        i().createElement(
                                            'div',
                                            { className: ar },
                                            i().createElement(Vn, { elementType: 'interaction' }),
                                        ),
                                    ),
                                ),
                                i().createElement(
                                    'div',
                                    { className: Qn },
                                    i().createElement(
                                        'div',
                                        { className: ur },
                                        i().createElement(
                                            'div',
                                            { className: Jn },
                                            R.strings.vehicle_customization.progressionTutorial.features.title(),
                                        ),
                                    ),
                                    i().createElement(
                                        'div',
                                        { className: nr },
                                        i().createElement(
                                            'div',
                                            { className: rr },
                                            i().createElement(Vn, { isSmall: !0, elementType: 'vehicles' }),
                                        ),
                                        i().createElement(
                                            'div',
                                            { className: rr },
                                            i().createElement(Vn, { isSmall: !0, elementType: 'quests' }),
                                        ),
                                        i().createElement(
                                            'div',
                                            { className: rr },
                                            i().createElement(Vn, { isSmall: !0, elementType: 'modes' }),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    },
                    ir = ({ onBackClick: u }) => {
                        const e = !(0, o.useContext)(_).extraSmall,
                            t = Wu('model', Hu.None).isRendererPipelineDeferred,
                            n = ou();
                        return (
                            Tu(xu.n.ESCAPE, u),
                            i().createElement(
                                'div',
                                { className: wn },
                                i().createElement('div', { className: y()(bn, !t && yn) }),
                                i().createElement(
                                    vu.Vertical.Default,
                                    { className: Sn, api: n },
                                    i().createElement(or, null),
                                ),
                                i().createElement(
                                    'div',
                                    { className: xn },
                                    i().createElement(vn, { onClick: u, withDescription: e }),
                                ),
                            )
                        );
                    },
                    sr = ({ isTutorialShown: u, onBackClick: e, onAboutClick: t }) => {
                        const n = (0, o.useRef)(0);
                        return u
                            ? i().createElement(ir, { onBackClick: e })
                            : i().createElement(hn, { scrollPositionRef: n, onAboutClick: t });
                    },
                    lr = () => {
                        const u = (0, o.useState)(!1),
                            e = u[0],
                            t = u[1],
                            n = (0, o.useCallback)(() => t(!1), []),
                            r = (0, o.useCallback)(() => t(!0), []);
                        return i().createElement(
                            p,
                            null,
                            i().createElement(
                                'div',
                                { className: h },
                                i().createElement(
                                    'div',
                                    { className: v },
                                    i().createElement(sr, { onBackClick: n, onAboutClick: r, isTutorialShown: e }),
                                ),
                                i().createElement('div', { className: w }),
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
                        l().render(i().createElement(lr, null), document.getElementById('root'));
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
                    for (var [e, t, n] = deferred[s], a = !0, o = 0; o < e.length; o++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[o]))
                            ? e.splice(o--, 1)
                            : ((a = !1), n < r && (r = n));
                    if (a) {
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
        (__webpack_require__.j = 987),
        (() => {
            var u = { 987: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var n,
                        r,
                        [a, o, i] = t,
                        s = 0;
                    if (a.some((e) => 0 !== u[e])) {
                        for (n in o) __webpack_require__.o(o, n) && (__webpack_require__.m[n] = o[n]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (e && e(t); s < a.length; s++)
                        (r = a[s]), __webpack_require__.o(u, r) && u[r] && u[r][0](), (u[r] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [858], () => __webpack_require__(910));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
