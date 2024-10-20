(() => {
    'use strict';
    var __webpack_modules__ = {
            768: (u, e, t) => {
                t.d(e, { O: () => Q });
                var r = {};
                t.r(r),
                    t.d(r, { mouse: () => D, off: () => l, on: () => F, onResize: () => E, onScaleUpdated: () => A });
                var i = {};
                t.r(i),
                    t.d(i, {
                        events: () => r,
                        getMouseGlobalPosition: () => B,
                        getSize: () => _,
                        graphicsQuality: () => C,
                        playSound: () => c,
                        setRTPC: () => m,
                    });
                var a = {};
                t.r(a), t.d(a, { getBgUrl: () => p, getTextureUrl: () => v });
                var n = {};
                function o(u) {
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
                t.r(n),
                    t.d(n, {
                        addModelObserver: () => I,
                        addPreloadTexture: () => y,
                        children: () => a,
                        displayStatus: () => w,
                        displayStatusIs: () => Y,
                        events: () => O,
                        extraSize: () => Z,
                        forceTriggerMouseMove: () => z,
                        freezeTextureBeforeResize: () => H,
                        getBrowserTexturePath: () => N,
                        getDisplayStatus: () => j,
                        getScale: () => V,
                        getSize: () => L,
                        getViewGlobalPosition: () => k,
                        isEventHandled: () => q,
                        isFocused: () => K,
                        pxToRem: () => U,
                        remToPx: () => W,
                        resize: () => M,
                        sendEvent: () => b,
                        setAnimateWindow: () => G,
                        setEventHandled: () => $,
                        setInputPaddingsRem: () => P,
                        setSidePaddingsRem: () => x,
                        whenTutorialReady: () => X,
                    });
                const E = o('clientResized'),
                    A = o('self.onScaleUpdated'),
                    F = (u, e) => engine.on(u, e),
                    l = (u, e) => engine.off(u, e),
                    d = { down: o('mousedown'), up: o('mouseup'), move: o('mousemove') },
                    D = (function () {
                        const u = { listeners: 0, enabled: !0, initialized: !1 };
                        function e() {
                            u.enabled && s(!1);
                        }
                        function t() {
                            u.enabled && s(!0);
                        }
                        function r() {
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
                        const i = ['down', 'up', 'move'].reduce(
                            (e, t) => (
                                (e[t] = (function (e) {
                                    return (t) => {
                                        u.listeners += 1;
                                        let i = !0;
                                        const a = `mouse${e}`,
                                            n = d[e]((u) => t([u, 'outside']));
                                        function o(u) {
                                            t([u, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(a, o),
                                            r(),
                                            () => {
                                                i &&
                                                    (n(),
                                                    window.removeEventListener(a, o),
                                                    (u.listeners -= 1),
                                                    r(),
                                                    (i = !1));
                                            }
                                        );
                                    };
                                })(t)),
                                e
                            ),
                            {},
                        );
                        return Object.assign({}, i, {
                            disable() {
                                (u.enabled = !1), r();
                            },
                            enable() {
                                (u.enabled = !0), r();
                            },
                            enableOutside() {
                                u.enabled && s(!0);
                            },
                            disableOutside() {
                                u.enabled && s(!1);
                            },
                        });
                    })();
                function c(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error(`playSound('${u}'): `, e);
                    });
                }
                function m(u, e) {
                    engine.call('SetRTPCGlobal', u, e).catch((t) => {
                        console.error(`setRTPC('${u}', '${e}'): `, t);
                    });
                }
                function _(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function B(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const C = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    f = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    h = Object.keys(f).reduce((u, e) => ((u[e] = () => c(f[e])), u), {}),
                    g = { play: Object.assign({}, h, { sound: c }), setRTPC: m };
                function v(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function p(u, e, t) {
                    return `url(${v(u, e, t)})`;
                }
                const w = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    O = {
                        onTextureFrozen: o('self.onTextureFrozen'),
                        onTextureReady: o('self.onTextureReady'),
                        onDomBuilt: o('self.onDomBuilt'),
                        onLoaded: o('self.onLoaded'),
                        onDisplayChanged: o('self.onShowingStatusChanged'),
                        onFocusUpdated: o('self.onFocusChanged'),
                        children: {
                            onAdded: o('children.onAdded'),
                            onLoaded: o('children.onLoaded'),
                            onRemoved: o('children.onRemoved'),
                            onAttached: o('children.onAttached'),
                            onTextureReady: o('children.onTextureReady'),
                            onRequestPosition: o('children.requestPosition'),
                        },
                    },
                    T = ['args'],
                    R = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const i = e.args,
                                a = (function (u, e) {
                                    if (null == u) return {};
                                    var t = {};
                                    for (var r in u)
                                        if ({}.hasOwnProperty.call(u, r)) {
                                            if (e.indexOf(r) >= 0) continue;
                                            t[r] = u[r];
                                        }
                                    return t;
                                })(e, T);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, a, {
                                          arguments:
                                              ((r = i),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, a));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: u });
                        var r;
                    },
                    b = {
                        close(u) {
                            R('popover' === u ? 2 : 32);
                        },
                        minimize() {
                            R(64);
                        },
                        move(u) {
                            R(16, { isMouseEvent: !0, on: u });
                        },
                    },
                    S = 15;
                function y(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function P(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, S);
                }
                function N(u, e, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, r);
                }
                function I(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function x(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, S);
                }
                function L(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function M(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function k(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: W(e.x), y: W(e.y) };
                }
                function H() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function V() {
                    return viewEnv.getScale();
                }
                function U(u) {
                    return viewEnv.pxToRem(u);
                }
                function W(u) {
                    return viewEnv.remToPx(u);
                }
                function G(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function K() {
                    return viewEnv.isFocused();
                }
                function $() {
                    return viewEnv.setEventHandled();
                }
                function q() {
                    return viewEnv.isEventHandled();
                }
                function z() {
                    viewEnv.forceTriggerMouseMove();
                }
                function j() {
                    return viewEnv.getShowingStatus();
                }
                const Y = Object.keys(w).reduce((u, e) => ((u[e] = () => viewEnv.getShowingStatus() === w[e]), u), {}),
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
                            window.isDomBuilt ? u() : O.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]),
                    Q = { view: n, client: i, sound: g };
            },
            358: (u, e, t) => {
                t.d(e, { Z: () => a });
                var r = t(768);
                class i {
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
                        return window.__dataTracker || (window.__dataTracker = new i()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(u, e, t = 0, i = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = r.O.view.addModelObserver(u, t, i);
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
                            const r = this._callbacks[t];
                            void 0 !== r && r(u, e);
                        });
                    }
                }
                i.__instance = void 0;
                const a = i;
            },
            572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(976);
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
            976: (u, e, t) => {
                t.d(e, { Sw: () => a.Z, Gr: () => A, Z5: () => n.Z5, ry: () => C });
                class r {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (u) => {
                                this.entries.forEach(({ container: e, callback: t }) => {
                                    let r = u.target;
                                    do {
                                        if (r === e) return;
                                        r = r.parentNode;
                                    } while (r);
                                    t();
                                });
                            });
                    }
                    static get instance() {
                        return r.__instance || (r.__instance = new r()), r.__instance;
                    }
                    register(u, e) {
                        this.addMouseListener(), this.entries.push({ container: u, callback: e });
                    }
                    unregister(u, e) {
                        const t = u,
                            r = e;
                        (this.entries = this.entries.filter(({ container: u, callback: e }) => u !== t || e !== r)),
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
                r.__instance = void 0;
                const i = r;
                var a = t(358),
                    n = t(613);
                let o;
                var s;
                ((s = o || (o = {}))[(s.UNDEFINED = 0)] = 'UNDEFINED'),
                    (s[(s.TOOLTIP = 1)] = 'TOOLTIP'),
                    (s[(s.POP_OVER = 2)] = 'POP_OVER'),
                    (s[(s.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (s[(s.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (s[(s.MOVE = 16)] = 'MOVE'),
                    (s[(s.CLOSE = 32)] = 'CLOSE'),
                    (s[(s.MINIMIZE = 64)] = 'MINIMIZE');
                const E = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    A = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    F = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    l = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                let d, D;
                !(function (u) {
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
                })(d || (d = {})),
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
                    })(D || (D = {}));
                var c = t(768);
                const m = ['args'];
                function _(u, e, t, r, i, a, n) {
                    try {
                        var o = u[a](n),
                            s = o.value;
                    } catch (u) {
                        return void t(u);
                    }
                    o.done ? e(s) : Promise.resolve(s).then(r, i);
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
                                    return new Promise(function (r, i) {
                                        var a = u.apply(e, t);
                                        function n(u) {
                                            _(a, r, i, n, o, 'next', u);
                                        }
                                        function o(u) {
                                            _(a, r, i, n, o, 'throw', u);
                                        }
                                        n(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    f = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const i = e.args,
                                a = (function (u, e) {
                                    if (null == u) return {};
                                    var t = {};
                                    for (var r in u)
                                        if ({}.hasOwnProperty.call(u, r)) {
                                            if (e.indexOf(r) >= 0) continue;
                                            t[r] = u[r];
                                        }
                                    return t;
                                })(e, m);
                            void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, a, {
                                          arguments:
                                              ((r = i),
                                              Object.entries(r).map(([u, e]) => {
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
                        var r;
                    },
                    h = () => f(o.CLOSE),
                    g = (u, e) => {
                        u.keyCode === d.ESCAPE && e();
                    };
                var v = t(572);
                const p = i.instance,
                    w = {
                        DataTracker: a.Z,
                        ViewModel: v.Z,
                        ViewEventType: o,
                        NumberFormatType: E,
                        RealFormatType: A,
                        TimeFormatType: F,
                        DateFormatType: l,
                        makeGlobalBoundingBox: B,
                        sendMoveEvent: (u) => f(o.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: h,
                        sendClosePopOverEvent: () => f(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            f(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, r, i = R.invalid('resId'), a) => {
                            const n = c.O.view.getViewGlobalPosition(),
                                s = t.getBoundingClientRect(),
                                E = s.x,
                                A = s.y,
                                F = s.width,
                                l = s.height,
                                d = {
                                    x: c.O.view.pxToRem(E) + n.x,
                                    y: c.O.view.pxToRem(A) + n.y,
                                    width: c.O.view.pxToRem(F),
                                    height: c.O.view.pxToRem(l),
                                };
                            f(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: r || R.invalid('resId'),
                                targetID: i,
                                direction: e,
                                bbox: B(d),
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
                            g(u, h);
                        },
                        handleViewEvent: f,
                        onBindingsReady: C,
                        onLayoutReady: () =>
                            new Promise((u) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        u();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
                        dumpViewModel: function u(e) {
                            const t = {};
                            if ('object' != typeof e) return e;
                            for (const r in e)
                                if (Object.prototype.hasOwnProperty.call(e, r)) {
                                    const i = Object.prototype.toString.call(e[r]);
                                    if (i.startsWith('[object CoherentArrayProxy]')) {
                                        const i = e[r];
                                        t[r] = [];
                                        for (let e = 0; e < i.length; e++) t[r].push({ value: u(i[e].value) });
                                    } else
                                        i.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[r] = u(e[r]))
                                            : (t[r] = e[r]);
                                }
                            return t;
                        },
                        ClickOutsideManager: p,
                        SystemLocale: n.Z5,
                        UserLocale: n.cy,
                    };
                window.ViewEnvHelper = w;
            },
            613: (u, e, t) => {
                t.d(e, { Ew: () => a, Z5: () => r, cy: () => i });
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
                    },
                    a = {
                        getRegionalDateTime: (u, e, t = !0) => regionalDateTime.getRegionalDateTime(u, e, t),
                        getFormattedDateTime: (u, e, t = !0) => regionalDateTime.getFormattedDateTime(u, e, t),
                    };
            },
            519: (u, e, t) => {
                var r = t(942);
                const i = (u, e, t) =>
                    e.extraLargeHeight || e.largeHeight || e.mediumHeight || e.smallHeight || e.extraSmallHeight
                        ? (e.extraLargeHeight && t.extraLarge) ||
                          (e.largeHeight && t.large) ||
                          (e.mediumHeight && t.medium) ||
                          (e.smallHeight && t.small) ||
                          (e.extraSmallHeight && t.extraSmall)
                            ? u
                            : null
                        : u;
                var a = t(768);
                const n = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var o;
                function s(u, e, t) {
                    const r = (function (u, e) {
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
                        i = (function (u, e) {
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
                        a = Math.min(r, i);
                    return {
                        extraLarge: a === t.extraLarge.weight,
                        large: a === t.large.weight,
                        medium: a === t.medium.weight,
                        small: a === t.small.weight,
                        extraSmall: a === t.extraSmall.weight,
                        extraLargeWidth: r === t.extraLarge.weight,
                        largeWidth: r === t.large.weight,
                        mediumWidth: r === t.medium.weight,
                        smallWidth: r === t.small.weight,
                        extraSmallWidth: r === t.extraSmall.weight,
                        extraLargeHeight: i === t.extraLarge.weight,
                        largeHeight: i === t.large.weight,
                        mediumHeight: i === t.medium.weight,
                        smallHeight: i === t.small.weight,
                        extraSmallHeight: i === t.extraSmall.weight,
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
                const E = a.O.client.getSize('rem'),
                    A = E.width,
                    F = E.height,
                    l = Object.assign({ width: A, height: F }, s(A, F, n)),
                    d = (0, r.createContext)(l),
                    D = ['children'],
                    c = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t = {};
                                for (var r in u)
                                    if ({}.hasOwnProperty.call(u, r)) {
                                        if (e.indexOf(r) >= 0) continue;
                                        t[r] = u[r];
                                    }
                                return t;
                            })(u, D);
                        const a = (0, r.useContext)(d),
                            n = a.extraLarge,
                            o = a.large,
                            s = a.medium,
                            E = a.small,
                            A = a.extraSmall,
                            F = a.extraLargeWidth,
                            l = a.largeWidth,
                            c = a.mediumWidth,
                            m = a.smallWidth,
                            _ = a.extraSmallWidth,
                            B = a.extraLargeHeight,
                            C = a.largeHeight,
                            f = a.mediumHeight,
                            h = a.smallHeight,
                            g = a.extraSmallHeight,
                            v = { extraLarge: B, large: C, medium: f, small: h, extraSmall: g };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && n) return e;
                            if (t.large && o) return e;
                            if (t.medium && s) return e;
                            if (t.small && E) return e;
                            if (t.extraSmall && A) return e;
                        } else {
                            if (t.extraLargeWidth && F) return i(e, t, v);
                            if (t.largeWidth && l) return i(e, t, v);
                            if (t.mediumWidth && c) return i(e, t, v);
                            if (t.smallWidth && m) return i(e, t, v);
                            if (t.extraSmallWidth && _) return i(e, t, v);
                            if (
                                !(
                                    t.extraLargeWidth ||
                                    t.largeWidth ||
                                    t.mediumWidth ||
                                    t.smallWidth ||
                                    t.extraSmallWidth
                                )
                            ) {
                                if (t.extraLargeHeight && B) return e;
                                if (t.largeHeight && C) return e;
                                if (t.mediumHeight && f) return e;
                                if (t.smallHeight && h) return e;
                                if (t.extraSmallHeight && g) return e;
                            }
                        }
                        return null;
                    };
                (c.defaultProps = {
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
                }),
                    (0, r.memo)(c);
                const m = (u) => {
                        const e = (0, r.useRef)(!1);
                        e.current || (u(), (e.current = !0));
                    },
                    _ = ({ children: u }) => {
                        const e = (0, r.useContext)(d),
                            t = (0, r.useState)(e),
                            i = t[0],
                            o = t[1],
                            E = (0, r.useCallback)((u, e) => {
                                const t = a.O.view.pxToRem(u),
                                    r = a.O.view.pxToRem(e);
                                o(Object.assign({ width: t, height: r }, s(t, r, n)));
                            }, []),
                            A = (0, r.useCallback)(() => {
                                const u = a.O.client.getSize('px');
                                E(u.width, u.height);
                            }, [E]);
                        m(() => {
                            a.O.client.events.on('clientResized', E), a.O.client.events.on('self.onScaleUpdated', A);
                        }),
                            (0, r.useEffect)(
                                () => () => {
                                    a.O.client.events.off('clientResized', E),
                                        a.O.client.events.off('self.onScaleUpdated', A);
                                },
                                [E, A],
                            );
                        const F = (0, r.useMemo)(() => Object.assign({}, i), [i]);
                        return r.createElement(d.Provider, { value: F }, u);
                    };
                var B = t(601),
                    C = t.n(B),
                    f = t(483),
                    h = t.n(f);
                const g = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    v = ['children', 'className', 'theme'];
                function p() {
                    return (
                        (p = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var r in t) ({}).hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                  }
                                  return u;
                              }),
                        p.apply(null, arguments)
                    );
                }
                const w = r.forwardRef(function (u, e) {
                    let t = u.children,
                        i = u.className,
                        n = u.theme,
                        o = void 0 === n ? 'default' : n,
                        s = (function (u, e) {
                            if (null == u) return {};
                            var t = {};
                            for (var r in u)
                                if ({}.hasOwnProperty.call(u, r)) {
                                    if (e.indexOf(r) >= 0) continue;
                                    t[r] = u[r];
                                }
                            return t;
                        })(u, v);
                    const E = (function () {
                            const u = (0, r.useRef)(0);
                            var e;
                            return (
                                (e = () => {
                                    window.cancelAnimationFrame(u.current);
                                }),
                                (0, r.useEffect)(() => e, []),
                                (0, r.useMemo)(
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
                        A = r.useRef(null);
                    var F;
                    return (
                        (F = () => {
                            E.run(() => {
                                const u = A.current;
                                if (!u) return;
                                const e = u.scrollWidth,
                                    t = u.scrollHeight;
                                a.O.view.resize(e, t);
                                const r = window.getComputedStyle(u);
                                a.O.view.setSidePaddingsRem({
                                    left: parseInt(r.getPropertyValue('padding-left'), 10),
                                    top: parseInt(r.getPropertyValue('padding-top'), 10),
                                    right: parseInt(r.getPropertyValue('padding-right'), 10),
                                    bottom: parseInt(r.getPropertyValue('padding-bottom'), 10),
                                });
                            });
                        }),
                        (0, r.useEffect)(F, []),
                        r.createElement(
                            'div',
                            p({}, s, {
                                className: h()(g.base, g[`base__theme-${o}`], i),
                                ref: function (u) {
                                    (A.current = u), 'function' == typeof e ? e(u) : e && (e.current = u);
                                },
                            }),
                            r.createElement('div', { className: g.decorator }, t),
                        )
                    );
                });
                let O;
                function T(u, e) {
                    return u.replace(/\{\w+\}/g, (u) => String(e[u.slice(1, -1)]));
                }
                t(948),
                    (function (u) {
                        (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
                    })(O || (O = {}));
                const b = (u) => u.replace(/&nbsp;/g, ' ');
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
                var S = t(976),
                    y = t(613);
                const P = 3600;
                Date.now(), y.Ew.getRegionalDateTime, y.Ew.getFormattedDateTime;
                const N = (u = 1) => {
                        const e = new Error().stack;
                        let t,
                            r = R.invalid('resId');
                        return (
                            e &&
                                ((t = e.split('\n')[u].split('.js')[0].split('/').pop() || ''),
                                window.__feature &&
                                    window.__feature !== t &&
                                    window.subViews[t] &&
                                    (r = window.subViews[t].id)),
                            { caller: t, stack: e, resId: r }
                        );
                    },
                    I = (u, e) => u.split('.').reduce((u, e) => u && u[e], e),
                    x = (u) => u && 'ArrayItem' === u.__proto__.constructor.name,
                    L = (u, e) => (u.length > 0 ? `${u}.${e}` : e),
                    M = S.Sw.instance;
                let k;
                !(function (u) {
                    (u.None = 'None'), (u.Shallow = 'Shallow'), (u.Deep = 'Deep');
                })(k || (k = {}));
                const H = (u = 'model', e = k.Deep) => {
                    const t = (0, r.useState)(0),
                        i = (t[0], t[1]),
                        a = (0, r.useMemo)(() => N(), []),
                        n = a.caller,
                        o = a.resId,
                        s = (0, r.useMemo)(
                            () => (window.__feature && window.__feature !== n ? `subViews.${n}.${u}` : u),
                            [n, u],
                        ),
                        E = (0, r.useState)(() =>
                            ((u) => {
                                const e = I(u, window);
                                for (const u in e) 'function' == typeof e[u] && (e[u] = e[u].bind(e));
                                return x(e) ? e.value : e;
                            })(
                                ((u) =>
                                    ((u, e) =>
                                        u.split('.').reduce((u, e) => {
                                            const t = I(`${u}.${e}`, window);
                                            return x(t) ? ((u, e) => `${u}.${e}.value`)(u, e) : `${u}.${e}`;
                                        }))(u))(s),
                            ),
                        ),
                        A = E[0],
                        F = E[1],
                        l = (0, r.useRef)(-1);
                    return (
                        m(() => {
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
                                            ? (u === A && i((u) => u + 1), F(u))
                                            : F(Object.assign([], u));
                                    },
                                    r = ((u) => {
                                        const e = ((u) => {
                                                const e = N(),
                                                    t = e.caller,
                                                    r = e.resId,
                                                    i =
                                                        window.__feature && window.__feature !== t && t
                                                            ? `subViews.${t}`
                                                            : '';
                                                return { modelPrefix: i, modelPath: L(i, ''), resId: r };
                                            })(),
                                            t = e.modelPrefix,
                                            r = u.split('.');
                                        if (r.length > 0) {
                                            const u = [r[0]];
                                            return (
                                                r.reduce((e, r) => {
                                                    const i = I(L(t, `${e}.${r}`), window);
                                                    return x(i)
                                                        ? (u.push(i.id), `${e}.${r}.value`)
                                                        : (u.push(r), `${e}.${r}`);
                                                }),
                                                u.reduce((u, e) => u + '.' + e)
                                            );
                                        }
                                        return '';
                                    })(u);
                                l.current = M.addCallback(r, t, o, e === k.Deep);
                            }
                        }),
                        (0, r.useEffect)(() => {
                            if (e !== k.None)
                                return () => {
                                    M.removeCallback(l.current, o);
                                };
                        }, [o, e]),
                        A
                    );
                };
                let V, U, W, G;
                S.Sw.instance,
                    (function (u) {
                        (u.FAKE_MODIFIER = 'fakeModifier'),
                            (u.VEHICLE_HEALTH = 'vehicleHealth'),
                            (u.GRAVITY_FACTOR = 'gravityFactor'),
                            (u.DISP_FACTOR_CHASSIS_MOVEMENT = 'dispFactorChassisMovement'),
                            (u.DISP_FACTOR_CHASSIS_ROTATION = 'dispFactorChassisRotation'),
                            (u.TURRET_ROTATION_SPEED = 'turretRotationSpeed'),
                            (u.GUN_ROTATION_SPEED = 'gunRotationSpeed'),
                            (u.RELOAD_TIME = 'reloadTime'),
                            (u.TWIN_GUN_RELOAD_TIME = 'twinGunReloadTime'),
                            (u.CLIP_INTERVAL = 'clipInterval'),
                            (u.BURST_INTERVAL = 'burstInterval'),
                            (u.AUTORELOAD_TIME = 'autoreloadTime'),
                            (u.AIMING_TIME = 'aimingTime'),
                            (u.SHOT_DISPERSION_RADIUS = 'shotDispersionRadius'),
                            (u.DISP_FACTOR_TURRET_ROTATION = 'dispFactorTurretRotation'),
                            (u.DISP_FACTOR_AFTER_SHOT = 'dispFactorAfterShot'),
                            (u.DISP_FACTOR_WHILE_GUN_DAMAGED = 'dispFactorWhileGunDamaged'),
                            (u.SHELL_GRAVITY = 'shellGravity'),
                            (u.SHELL_SPEED = 'shellSpeed'),
                            (u.DAMAGE_RANDOMIZATION = 'damageRandomization'),
                            (u.PIERCING_POWER_RANDOMIZATION = 'piercingPowerRandomization'),
                            (u.NORMALIZATION_ANGLE = 'normalizationAngle'),
                            (u.RICOCHET_ANGLE = 'ricochetAngle'),
                            (u.ENGINE_POWER = 'enginePower'),
                            (u.ENGINE_FIRE_FACTOR = 'engineFireFactor'),
                            (u.FW_MAX_SPEED = 'fwMaxSpeed'),
                            (u.BK_MAX_SPEED = 'bkMaxSpeed'),
                            (u.ROTATION_SPEED_ON_STILL = 'rotationSpeedOnStill'),
                            (u.ROTATION_SPEED_ON_MOVE = 'rotationSpeedOnMove'),
                            (u.INVISIBILITY_ON_STILL = 'invisibilityOnStill'),
                            (u.INVISIBILITY_ON_MOVE = 'invisibilityOnMove'),
                            (u.VISION_RADIUS = 'visionRadius'),
                            (u.RADIO_DISTANCE = 'radioDistance'),
                            (u.BATTLE_LENGTH = 'battleLength'),
                            (u.VEHICLE_RAMMING_DAMAGE = 'vehicleRammingDamage'),
                            (u.VEHICLE_PRESSURE_DAMAGE = 'vehiclePressureDamage'),
                            (u.TURRET_RAMMING_DAMAGE = 'turretRammingDamage'),
                            (u.TURRET_PRESSURE_DAMAGE = 'turretPressureDamage'),
                            (u.ENV_HULL_DAMAGE = 'envHullDamage'),
                            (u.ENV_CHASSIS_DAMAGE = 'envChassisDamage'),
                            (u.ENV_TANKMAN_DAMAGE_CHANCE = 'envTankmanDamageChance'),
                            (u.ENV_MODULE_DAMAGE_CHANCE = 'envModuleDamageChance'),
                            (u.REPAIR_SPEED = 'repairSpeed'),
                            (u.VISION_MIN_RADIUS = 'visionMinRadius'),
                            (u.VISION_MAX_RADIUS = 'visionMaxRadius'),
                            (u.VISION_TIME = 'visionTime'),
                            (u.EQUIPMENT_COOLDOWN = 'equipmentCooldown'),
                            (u.INVISIBILITY_FACTOR_AT_SHOT = 'invisibilityFactorAtShot'),
                            (u.VEHICLE_AOI_RADIUS = 'vehicleAoIRadius'),
                            (u.DEVICE_DAMAGE_FIRST = 'deviceDamageFirst');
                    })(V || (V = {})),
                    (function (u) {
                        (u.UNDEFINED = 'undefined'),
                            (u.METERS_PER_SECOND = 'metersPerSecond'),
                            (u.KILOMETERS_PER_HOUR = 'km_per_hour'),
                            (u.RADIANS = 'radians'),
                            (u.DEGREES = 'degrees'),
                            (u.DEGREES_PER_SECOND = 'degrees_per_second'),
                            (u.HIT_POINTS = 'hitPoints'),
                            (u.MILLIMETERS = 'millimeters'),
                            (u.METERS = 'meters'),
                            (u.SECONDS = 'seconds'),
                            (u.MINUTES = 'minutes'),
                            (u.RADIANS_PER_SECOND = 'radians_per_second'),
                            (u.METER_PER_SECOND_SQUARED = 'meter_per_second_squared'),
                            (u.PROBABILITY = 'probability'),
                            (u.DEVIATION = 'deviation'),
                            (u.LOGIC = 'logic'),
                            (u.HORSEPOWER = 'horsepower');
                    })(U || (U = {})),
                    (function (u) {
                        (u.UNDEFINED = 'undefined'), (u.VAL = 'val'), (u.MUL = 'mul'), (u.ADD = 'add');
                    })(W || (W = {})),
                    (function (u) {
                        (u.UNDEFINED = 'undefined'), (u.POSITIVE = 'positive'), (u.NEGATIVE = 'negative');
                    })(G || (G = {}));
                class K {}
                (K.useType = {
                    oneOf:
                        (...u) =>
                        (e) =>
                            u.some((u) => e.useType === u),
                }),
                    (K.modificationType = {
                        oneOf:
                            (...u) =>
                            (e) =>
                                u.some((u) => e.modificationType === u),
                    }),
                    (K.value = { isPositiveInteger: (u) => u.value >= 1 && Number.isInteger(u.value) });
                const $ =
                    (...u) =>
                    (e) =>
                        0 !== u.length && u.every((u) => u(e));
                class q {}
                var z;
                (q.multiplierToPercent = (u) => 100 * u - 100),
                    (q.radiansToDegrees = (u) => u * (180 / Math.PI)),
                    (q.metPerSecondToKmPerHour = (u) => 3.6 * u),
                    (q.radiansPerSecondToDegreesPerSecond = (u) => u * (180 / Math.PI)),
                    (q.probabilityToPercent = (u) => 100 * u),
                    (q.default = (u) => u);
                class j {}
                (z = j),
                    (j.percent = (u, e, t) => {
                        const r = z.default(u, e, t);
                        return b(T(R.strings.modifier_formatter.modifier.format.percentage(), { value: r }));
                    }),
                    (j.multiplier = (u, e, t) => {
                        const r = z.default(u, e, t);
                        return b(T(R.strings.modifier_formatter.modifier.format.multiplier(), { value: r }));
                    }),
                    (j.hitpoints = (u, e, t) => {
                        const r = z.default(u, e, t);
                        return b(T(R.strings.modifier_formatter.modifier.format.hitpoints(), { value: r }));
                    }),
                    (j.seconds = (u, e, t) => {
                        const r = z.default(u, e, t);
                        return b(T(R.strings.modifier_formatter.modifier.format.seconds(), { value: r }));
                    }),
                    (j.minutes = (u, e, t) => {
                        const r = z.default(u, e, t);
                        return b(T(R.strings.modifier_formatter.modifier.format.minutes(), { value: r }));
                    }),
                    (j.deviation = (u, e, t) => {
                        const r = z.default(u, e, t);
                        return b(T(R.strings.modifier_formatter.modifier.format.deviation(), { value: r }));
                    }),
                    (j.millimeters = (u, e, t) => {
                        const r = z.default(u, e, t);
                        return b(T(R.strings.modifier_formatter.modifier.format.millimeters(), { value: r }));
                    }),
                    (j.degree = (u, e, t) => {
                        const r = z.default(u, e, t);
                        return b(T(R.strings.modifier_formatter.modifier.format.degrees(), { value: r }));
                    }),
                    (j.meters = (u, e, t) => {
                        const r = z.default(u, e, t);
                        return b(T(R.strings.modifier_formatter.modifier.format.meters(), { value: r }));
                    }),
                    (j.kmPerHour = (u, e, t) => {
                        const r = z.default(u, e, t);
                        return b(T(R.strings.modifier_formatter.modifier.format.km_per_hour(), { value: r }));
                    }),
                    (j.metersPerSecond = (u, e, t) => {
                        const r = z.default(u, e, t);
                        return b(T(R.strings.modifier_formatter.modifier.format.meters_per_second(), { value: r }));
                    }),
                    (j.degreesPerSecond = (u, e, t) => {
                        const r = z.default(u, e, t);
                        return b(T(R.strings.modifier_formatter.modifier.format.degrees_per_second(), { value: r }));
                    }),
                    (j.meterPerSecondSquared = (u, e, t) => {
                        const r = z.default(u, e, t);
                        return b(
                            T(R.strings.modifier_formatter.modifier.format.meter_per_second_squared(), { value: r }),
                        );
                    }),
                    (j.horsepower = (u, e, t) => {
                        const r = z.default(u, e, t);
                        return b(T(R.strings.modifier_formatter.modifier.format.horsepower(), { value: r }));
                    }),
                    (j.logic = (u) =>
                        u
                            ? R.strings.modifier_formatter.modifier.format.logic.on()
                            : b(R.strings.modifier_formatter.modifier.format.logic.off())),
                    (j.time = (u, e, t) => {
                        const r = u >= 0 ? t : '-',
                            i = ((u, e = !0) =>
                                u.days > 7 && e
                                    ? T(R.strings.common.duration.days(), { days: u.days })
                                    : u.days >= 1
                                      ? 0 === u.hours
                                          ? T(R.strings.common.duration.days(), { days: u.days })
                                          : `${T(R.strings.common.duration.days(), { days: u.days })} ${T(R.strings.common.duration.hours(), { hours: u.hours })}`
                                      : u.hours >= 1
                                        ? 0 === u.minutes
                                            ? T(R.strings.common.duration.hours(), { hours: u.hours })
                                            : `${T(R.strings.common.duration.hours(), { hours: u.hours })} ${T(R.strings.common.duration.minutes(), { minutes: u.minutes })}`
                                        : T(R.strings.common.duration.minutes(), { minutes: u.minutes || 1 }))(
                                (function (u = 0) {
                                    let e = u;
                                    const t = Math.trunc(e / 86400);
                                    e -= 86400 * t;
                                    const r = Math.trunc(e / P);
                                    e -= r * P;
                                    const i = Math.trunc(e / 60);
                                    return (e -= 60 * i), { days: t, hours: r, minutes: i, seconds: e };
                                })(Math.abs(u)),
                                !1,
                            );
                        return b(`${r}${i}`);
                    }),
                    (j.default = (u, e, t) => {
                        const r = u >= 0 ? t : '',
                            i = ((u, e) => {
                                const t = Math.pow(10, e);
                                return Math.round((u + Number.EPSILON) * t) / t;
                            })(u, e);
                        return `${r}${S.Z5.getRealFormat(i, S.Gr.WO_ZERO_DIGITS)}`;
                    });
                const Y = {
                    generalOverrides: [
                        {
                            condition: K.useType.oneOf(W.MUL),
                            valueConverter: q.multiplierToPercent,
                            numberOfDecimals: 0,
                            formatter: j.percent,
                        },
                        {
                            condition: $(K.useType.oneOf(W.MUL), K.value.isPositiveInteger),
                            valueConverter: q.default,
                            numberOfDecimals: 0,
                            prefixForPositiveValue: '',
                            formatter: j.multiplier,
                        },
                        { condition: K.useType.oneOf(W.VAL), prefixForPositiveValue: '' },
                    ],
                    defaultPrefixForPositiveValue: '+',
                    physTypes: {
                        [U.UNDEFINED]: { overrides: [], defaultNumberOfDecimals: 2, defaultFormatter: j.default },
                        [U.RADIANS]: {
                            overrides: [
                                { condition: K.useType.oneOf(W.ADD, W.VAL), valueConverter: q.radiansToDegrees },
                            ],
                            defaultNumberOfDecimals: 0,
                            defaultFormatter: j.degree,
                        },
                        [U.DEGREES]: { overrides: [], defaultNumberOfDecimals: 0, defaultFormatter: j.degree },
                        [U.HIT_POINTS]: { overrides: [], defaultNumberOfDecimals: 0, defaultFormatter: j.hitpoints },
                        [U.METERS_PER_SECOND]: {
                            overrides: [
                                {
                                    condition: $(
                                        K.modificationType.oneOf(V.FW_MAX_SPEED, V.BK_MAX_SPEED),
                                        K.useType.oneOf(W.VAL, W.ADD),
                                    ),
                                    valueConverter: q.metPerSecondToKmPerHour,
                                    formatter: j.kmPerHour,
                                },
                            ],
                            defaultNumberOfDecimals: 0,
                            defaultFormatter: j.metersPerSecond,
                        },
                        [U.KILOMETERS_PER_HOUR]: {
                            overrides: [],
                            defaultNumberOfDecimals: 0,
                            defaultFormatter: j.kmPerHour,
                        },
                        [U.MILLIMETERS]: { overrides: [], defaultNumberOfDecimals: 0, defaultFormatter: j.millimeters },
                        [U.SECONDS]: {
                            overrides: [
                                {
                                    condition: $(
                                        K.modificationType.oneOf(V.BATTLE_LENGTH),
                                        K.useType.oneOf(W.VAL, W.ADD),
                                    ),
                                    formatter: j.time,
                                },
                            ],
                            defaultNumberOfDecimals: 2,
                            defaultFormatter: j.seconds,
                        },
                        [U.MINUTES]: { overrides: [], defaultNumberOfDecimals: 0, defaultFormatter: j.minutes },
                        [U.METERS]: {
                            overrides: [
                                {
                                    condition: $(
                                        K.modificationType.oneOf(V.VISION_MIN_RADIUS),
                                        K.useType.oneOf(W.VAL, W.ADD),
                                    ),
                                    numberOfDecimals: 0,
                                },
                            ],
                            defaultNumberOfDecimals: 2,
                            defaultFormatter: j.meters,
                        },
                        [U.RADIANS_PER_SECOND]: {
                            overrides: [
                                {
                                    condition: K.useType.oneOf(W.VAL, W.ADD),
                                    valueConverter: q.radiansPerSecondToDegreesPerSecond,
                                    formatter: j.degreesPerSecond,
                                },
                            ],
                            defaultNumberOfDecimals: 0,
                            defaultFormatter: j.degreesPerSecond,
                        },
                        [U.DEGREES_PER_SECOND]: {
                            overrides: [],
                            defaultNumberOfDecimals: 0,
                            defaultFormatter: j.degreesPerSecond,
                        },
                        [U.METER_PER_SECOND_SQUARED]: {
                            overrides: [],
                            defaultNumberOfDecimals: 2,
                            defaultFormatter: j.meterPerSecondSquared,
                        },
                        [U.PROBABILITY]: {
                            overrides: [
                                {
                                    condition: K.useType.oneOf(W.VAL, W.ADD),
                                    valueConverter: q.probabilityToPercent,
                                    formatter: j.percent,
                                },
                            ],
                            defaultNumberOfDecimals: 0,
                            defaultFormatter: j.percent,
                        },
                        [U.DEVIATION]: {
                            overrides: [
                                {
                                    condition: K.useType.oneOf(W.VAL),
                                    valueConverter: q.probabilityToPercent,
                                    numberOfDecimals: 0,
                                    prefixForPositiveValue: '',
                                    formatter: j.deviation,
                                },
                                {
                                    condition: K.useType.oneOf(W.ADD),
                                    valueConverter: q.probabilityToPercent,
                                    numberOfDecimals: 0,
                                    formatter: j.percent,
                                },
                            ],
                            defaultNumberOfDecimals: 2,
                            defaultFormatter: j.default,
                        },
                        [U.HORSEPOWER]: { overrides: [], defaultNumberOfDecimals: 0, defaultFormatter: j.horsepower },
                        [U.LOGIC]: { overrides: [], defaultNumberOfDecimals: 0, defaultFormatter: j.logic },
                    },
                };
                function Z(u, e) {
                    var t = ('undefined' != typeof Symbol && u[Symbol.iterator]) || u['@@iterator'];
                    if (t) return (t = t.call(u)).next.bind(t);
                    if (
                        Array.isArray(u) ||
                        (t = (function (u, e) {
                            if (u) {
                                if ('string' == typeof u) return X(u, e);
                                var t = {}.toString.call(u).slice(8, -1);
                                return (
                                    'Object' === t && u.constructor && (t = u.constructor.name),
                                    'Map' === t || 'Set' === t
                                        ? Array.from(u)
                                        : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                          ? X(u, e)
                                          : void 0
                                );
                            }
                        })(u)) ||
                        (e && u && 'number' == typeof u.length)
                    ) {
                        t && (u = t);
                        var r = 0;
                        return function () {
                            return r >= u.length ? { done: !0 } : { done: !1, value: u[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function X(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, r = Array(e); t < e; t++) r[t] = u[t];
                    return r;
                }
                class Q {
                    constructor() {
                        (this.formatRestriction = (u, e) => {
                            const t = Object.assign({}, u, { value: e, useType: W.VAL });
                            return this.formatModifier(t);
                        }),
                            (this.formatModifier = (u) => {
                                let e = Y.physTypes[u.physicalType];
                                if (
                                    (void 0 === e &&
                                        (console.warn('Not found formatter for physicalType', u.physicalType),
                                        (e = Y.physTypes[U.UNDEFINED])),
                                    void 0 === e)
                                )
                                    throw Error(`Not found formatter for physicalType=${u.physicalType.toString()}`);
                                let t = e.defaultFormatter,
                                    r = q.default,
                                    i = e.defaultNumberOfDecimals,
                                    a = Y.defaultPrefixForPositiveValue;
                                for (var n = 0, o = [Y.generalOverrides, e.overrides]; n < o.length; n++)
                                    for (var s, E = Z(o[n]); !(s = E()).done; ) {
                                        const e = s.value;
                                        var A, F;
                                        e.condition(u) &&
                                            ((t = e.formatter || t),
                                            (r = e.valueConverter || r),
                                            (i = null != (A = e.numberOfDecimals) ? A : i),
                                            (a = null != (F = e.prefixForPositiveValue) ? F : a));
                                    }
                                return t(r(u.value), i, a);
                            });
                    }
                }
                const J = 'ModifierParameter_base_84',
                    uu = 'ModifierParameter_paramName_9a',
                    eu = (u) => R.strings.battle_modifiers.modifier.name.$dyn(u),
                    tu = ({ value: u }) => {
                        if (u.useType === W.UNDEFINED)
                            return r.createElement(
                                'div',
                                { className: J },
                                r.createElement('div', { className: 'ModifierParameter_paramIcon_ff' }),
                                r.createElement('div', { className: uu }, eu(u.resName)),
                            );
                        const e = h()(
                                'ModifierParameter_paramValue_7d',
                                u.gameplayImpact === G.UNDEFINED && 'ModifierParameter_paramValue__undefined_f6',
                                u.gameplayImpact === G.POSITIVE && 'ModifierParameter_paramValue__positive_e4',
                                u.gameplayImpact === G.NEGATIVE && 'ModifierParameter_paramValue__negative_7e',
                            ),
                            t = new Q();
                        return r.createElement(
                            'div',
                            { className: J },
                            r.createElement('div', { className: e }, t.formatModifier(u)),
                            r.createElement(
                                'div',
                                { className: uu },
                                r.createElement('div', null, eu(u.resName)),
                                ((u, e) => {
                                    const t = ((u, e) => {
                                        if (2 === e.limits.length) {
                                            const t = {};
                                            return (
                                                e.limits.forEach(({ value: r }) => {
                                                    t[r.limitType] = u.formatRestriction(e, r.value);
                                                }),
                                                b(
                                                    T(
                                                        R.strings.battle_modifiers.modifiersDomainTooltip.restrict.twoRestriction(),
                                                        {
                                                            min: T(
                                                                R.strings.battle_modifiers.modifiersDomainTooltip.restrict.min(),
                                                                { value: t.min },
                                                            ),
                                                            max: T(
                                                                R.strings.battle_modifiers.modifiersDomainTooltip.restrict.max(),
                                                                { value: t.max },
                                                            ),
                                                        },
                                                    ),
                                                )
                                            );
                                        }
                                        if (1 === e.limits.length) {
                                            const t = e.limits[0].value,
                                                r = R.strings.battle_modifiers.modifiersDomainTooltip.restrict.$dyn(
                                                    t.limitType,
                                                );
                                            return 'string' != typeof r
                                                ? (console.warn(`prefix was not found for limitType: "${t.limitType}"`),
                                                  null)
                                                : b(
                                                      T(
                                                          R.strings.battle_modifiers.modifiersDomainTooltip.restrict.oneRestriction(),
                                                          {
                                                              restriction: T(r, {
                                                                  value: u.formatRestriction(e, t.value),
                                                              }),
                                                          },
                                                      ),
                                                  );
                                        }
                                        return null;
                                    })(u, e);
                                    return null === t
                                        ? null
                                        : r.createElement(
                                              'div',
                                              { className: 'ModifierParameter_restrictBlock_97' },
                                              t,
                                          );
                                })(t, u),
                            ),
                        );
                    },
                    ru = (u) => ({
                        backgroundImage: `url(R.images.battle_modifiers.gui.maps.icons.feature.domains.c_80x80.${u})`,
                    }),
                    iu = (u) => (e) => {
                        const t = R.strings.battle_modifiers.domain.$dyn(e);
                        return t ? t.$dyn(u) : (console.warn(`Modifier's ${u} was not found`, e), null);
                    },
                    au = iu('name'),
                    nu = iu('description'),
                    ou = () => {
                        const u = H('model'),
                            e = u.modifiersDomain,
                            t = u.modifiers;
                        return r.createElement(
                            w,
                            null,
                            r.createElement(
                                'div',
                                { className: 'App_base_17' },
                                r.createElement(
                                    'div',
                                    { className: 'App_header_5e' },
                                    r.createElement('div', { className: 'App_icon_7c', style: ru(e) }),
                                    r.createElement(
                                        'div',
                                        { className: 'App_headerText_b7' },
                                        r.createElement('div', { className: 'App_title_21' }, au(e)),
                                        r.createElement('div', { className: 'App_description_d2' }, nu(e)),
                                    ),
                                ),
                                r.createElement('div', { className: 'App_separator_35' }),
                                r.createElement(
                                    'div',
                                    { className: 'App_params_dc' },
                                    r.createElement(
                                        'div',
                                        { className: 'App_paramsTitle_4a' },
                                        1 === t.length
                                            ? R.strings.battle_modifiers.modifiersDomainTooltip.subtitle.single()
                                            : R.strings.battle_modifiers.modifiersDomainTooltip.subtitle.plural(),
                                    ),
                                    r.createElement(
                                        'div',
                                        { className: 'App_paramsList_4b' },
                                        t.map(({ value: u }, e) => r.createElement(tu, { value: u, key: e })),
                                    ),
                                ),
                            ),
                        );
                    };
                engine.whenReady.then(() => {
                    C().render(r.createElement(_, null, r.createElement(ou, null)), document.getElementById('root'));
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
        (__webpack_require__.O = (u, e, t, r) => {
            if (!e) {
                var i = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [e, t, r] = deferred[s], a = !0, n = 0; n < e.length; n++)
                        (!1 & r || i >= r) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[n]))
                            ? e.splice(n--, 1)
                            : ((a = !1), r < i && (i = r));
                    if (a) {
                        deferred.splice(s--, 1);
                        var o = t();
                        void 0 !== o && (u = o);
                    }
                }
                return u;
            }
            r = r || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > r; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [e, t, r];
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
            var u = { 993: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var r,
                        i,
                        [a, n, o] = t,
                        s = 0;
                    if (a.some((e) => 0 !== u[e])) {
                        for (r in n) __webpack_require__.o(n, r) && (__webpack_require__.m[r] = n[r]);
                        if (o) var E = o(__webpack_require__);
                    }
                    for (e && e(t); s < a.length; s++)
                        (i = a[s]), __webpack_require__.o(u, i) && u[i] && u[i][0](), (u[i] = 0);
                    return __webpack_require__.O(E);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(519));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
