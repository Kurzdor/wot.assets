(() => {
    var __webpack_modules__ = {
            926: (u) => {
                u.exports = {
                    SMALL_WIDTH: 'mediaSmallWidth',
                    MEDIUM_WIDTH: 'mediaMediumWidth',
                    LARGE_WIDTH: 'mediaLargeWidth',
                    EXTRA_LARGE_WIDTH: 'mediaExtraLargeWidth',
                    SMALL_HEIGHT: 'mediaSmallHeight',
                    MEDIUM_HEIGHT: 'mediaMediumHeight',
                    LARGE_HEIGHT: 'mediaLargeHeight',
                    EXTRA_LARGE_HEIGHT: 'mediaExtraLargeHeight',
                    SMALL: 'mediaSmall',
                    MEDIUM: 'mediaMedium',
                    LARGE: 'mediaLarge',
                    EXTRA_LARGE: 'mediaExtraLarge',
                };
            },
            67: (u, e, t) => {
                'use strict';
                t.d(e, { O: () => Z });
                var r = {};
                t.r(r),
                    t.d(r, { mouse: () => d, off: () => A, on: () => c, onResize: () => l, onScaleUpdated: () => E });
                var n = {};
                t.r(n),
                    t.d(n, {
                        events: () => r,
                        getMouseGlobalPosition: () => B,
                        getSize: () => D,
                        graphicsQuality: () => m,
                    });
                var a = {};
                t.r(a), t.d(a, { getBgUrl: () => C, getTextureUrl: () => _ });
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
                        addModelObserver: () => M,
                        addPreloadTexture: () => L,
                        children: () => a,
                        displayStatus: () => g,
                        displayStatusIs: () => X,
                        events: () => h,
                        extraSize: () => j,
                        forceTriggerMouseMove: () => Y,
                        freezeTextureBeforeResize: () => N,
                        getBrowserTexturePath: () => P,
                        getDisplayStatus: () => q,
                        getScale: () => H,
                        getSize: () => y,
                        getViewGlobalPosition: () => k,
                        isEventHandled: () => V,
                        isFocused: () => G,
                        pxToRem: () => I,
                        remToPx: () => W,
                        resize: () => O,
                        sendEvent: () => T,
                        setAnimateWindow: () => U,
                        setEventHandled: () => z,
                        setInputPaddingsRem: () => x,
                        setSidePaddingsRem: () => R,
                        whenTutorialReady: () => K,
                    });
                const l = s('clientResized'),
                    E = s('self.onScaleUpdated'),
                    c = (u, e) => engine.on(u, e),
                    A = (u, e) => engine.off(u, e),
                    F = { down: s('mousedown'), up: s('mouseup'), move: s('mousemove') };
                const d = (function () {
                    const u = { listeners: 0, enabled: !0, initialized: !1 };
                    function e() {
                        u.enabled && o(!1);
                    }
                    function t() {
                        u.enabled && o(!0);
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
                            : o(!1);
                    }
                    const n = ['down', 'up', 'move'].reduce(
                        (e, t) => (
                            (e[t] = (function (e) {
                                return (t) => {
                                    u.listeners += 1;
                                    let n = !0;
                                    const a = `mouse${e}`,
                                        i = F[e]((u) => t([u, 'outside']));
                                    function s(u) {
                                        t([u, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, s),
                                        r(),
                                        () => {
                                            n &&
                                                (i(),
                                                window.removeEventListener(a, s),
                                                (u.listeners -= 1),
                                                r(),
                                                (n = !1));
                                        }
                                    );
                                };
                            })(t)),
                            e
                        ),
                        {},
                    );
                    return Object.assign({}, n, {
                        disable() {
                            (u.enabled = !1), r();
                        },
                        enable() {
                            (u.enabled = !0), r();
                        },
                        enableOutside() {
                            u.enabled && o(!0);
                        },
                        disableOutside() {
                            u.enabled && o(!1);
                        },
                    });
                })();
                function D(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function B(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const m = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function _(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function C(u, e, t) {
                    return `url(${_(u, e, t)})`;
                }
                const g = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    h = {
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
                    f = ['args'];
                const p = 2,
                    v = 16,
                    w = 32,
                    b = 64,
                    S = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const n = e.args,
                                a = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        r,
                                        n = {},
                                        a = Object.keys(u);
                                    for (r = 0; r < a.length; r++) (t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                    return n;
                                })(e, f);
                            return void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, a, {
                                          arguments:
                                              ((r = n),
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
                    T = {
                        close(u) {
                            S('popover' === u ? p : w);
                        },
                        minimize() {
                            S(b);
                        },
                        move(u) {
                            S(v, { isMouseEvent: !0, on: u });
                        },
                    };
                function L(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function x(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, 15);
                }
                function P(u, e, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, r);
                }
                function M(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function R(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, 15);
                }
                function y(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function O(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function k(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: W(e.x), y: W(e.y) };
                }
                function N() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function H() {
                    return viewEnv.getScale();
                }
                function I(u) {
                    return viewEnv.pxToRem(u);
                }
                function W(u) {
                    return viewEnv.remToPx(u);
                }
                function U(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function G() {
                    return viewEnv.isFocused();
                }
                function z() {
                    return viewEnv.setEventHandled();
                }
                function V() {
                    return viewEnv.isEventHandled();
                }
                function Y() {
                    viewEnv.forceTriggerMouseMove();
                }
                function q() {
                    return viewEnv.getShowingStatus();
                }
                const X = Object.keys(g).reduce((u, e) => ((u[e] = () => viewEnv.getShowingStatus() === g[e]), u), {}),
                    j = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    K = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : h.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]),
                    Z = { view: i, client: n };
            },
            521: (u, e, t) => {
                'use strict';
                let r, n;
                t.d(e, { n: () => r }),
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
                    })(r || (r = {})),
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
                    })(n || (n = {}));
            },
            358: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => a });
                var r = t(67);
                class n {
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
                        return window.__dataTracker || (window.__dataTracker = new n()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(u, e, t = 0, n = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = r.O.view.addModelObserver(u, t, n);
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
                n.__instance = void 0;
                const a = n;
            },
            572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
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
                'use strict';
                t.d(e, { Sw: () => a.Z, ry: () => m });
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
                const n = r;
                var a = t(358);
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
                var A = t(521),
                    F = t(67);
                const d = ['args'];
                function D(u, e, t, r, n, a, i) {
                    try {
                        var s = u[a](i),
                            o = s.value;
                    } catch (u) {
                        return void t(u);
                    }
                    s.done ? e(o) : Promise.resolve(o).then(r, n);
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
                                    return new Promise(function (r, n) {
                                        var a = u.apply(e, t);
                                        function i(u) {
                                            D(a, r, n, i, s, 'next', u);
                                        }
                                        function s(u) {
                                            D(a, r, n, i, s, 'throw', u);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    _ = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const n = e.args,
                                a = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        r,
                                        n = {},
                                        a = Object.keys(u);
                                    for (r = 0; r < a.length; r++) (t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                    return n;
                                })(e, d);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, a, {
                                          arguments:
                                              ((r = n),
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
                    C = () => _(s.CLOSE),
                    g = (u, e) => {
                        u.keyCode === A.n.ESCAPE && e();
                    };
                var h = t(572);
                const f = n.instance,
                    p = {
                        DataTracker: a.Z,
                        ViewModel: h.Z,
                        ViewEventType: s,
                        NumberFormatType: o,
                        RealFormatType: l,
                        TimeFormatType: E,
                        DateFormatType: c,
                        makeGlobalBoundingBox: B,
                        sendMoveEvent: (u) => _(s.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: C,
                        sendClosePopOverEvent: () => _(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            _(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, r, n = R.invalid('resId'), a) => {
                            const i = F.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                E = o.y,
                                c = o.width,
                                A = o.height,
                                d = {
                                    x: F.O.view.pxToRem(l) + i.x,
                                    y: F.O.view.pxToRem(E) + i.y,
                                    width: F.O.view.pxToRem(c),
                                    height: F.O.view.pxToRem(A),
                                };
                            _(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: r || R.invalid('resId'),
                                targetID: n,
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
                            g(u, C);
                        },
                        handleViewEvent: _,
                        onBindingsReady: m,
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
                            for (const r in e)
                                if (Object.prototype.hasOwnProperty.call(e, r)) {
                                    const n = Object.prototype.toString.call(e[r]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = e[r];
                                        t[r] = [];
                                        for (let e = 0; e < n.length; e++) t[r].push({ value: u(n[e].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[r] = u(e[r]))
                                            : (t[r] = e[r]);
                                }
                            return t;
                        },
                        ClickOutsideManager: f,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = p;
            },
            613: (u, e, t) => {
                'use strict';
                t.d(e, { Ew: () => a, Z5: () => r, cy: () => n });
                const r = {
                        getNumberFormat: (u, e) => systemLocale.getNumberFormat(u, e),
                        getRealFormat: (u, e) => systemLocale.getRealFormat(u, e),
                        getTimeFormat: (u, e) => systemLocale.getTimeFormat(u, e),
                        getDateFormat: (u, e) => systemLocale.getDateFormat(u, e),
                        toUpperCase: (u) => systemLocale.toUpperCase(u),
                        toLowerCase: (u) => systemLocale.toUpperCase(u),
                    },
                    n = {
                        getNumberFormat: (u) => userLocale.getNumberFormat(u),
                        getTimeFormat: (u, e, t) => userLocale.getTimeFormat(u, e, void 0 === t || t),
                        getTimeString: (u, e, t) => userLocale.getTimeString(u, e, void 0 === t || t),
                    },
                    a = {
                        getRegionalDateTime: (u, e, t = !0) => regionalDateTime.getRegionalDateTime(u, e, t),
                        getFormattedDateTime: (u, e, t = !0) => regionalDateTime.getFormattedDateTime(u, e, t),
                    };
            },
            653: (u, e, t) => {
                'use strict';
                var r = {};
                t.r(r),
                    t.d(r, {
                        Area: () => lu,
                        Bar: () => iu,
                        DefaultScroll: () => ou,
                        Direction: () => V,
                        defaultSettings: () => Y,
                        useHorizontalScrollApi: () => X,
                    });
                var n = {};
                t.r(n), t.d(n, { Area: () => Su, Bar: () => vu, Default: () => bu, useVerticalScrollApi: () => Eu });
                var a = t(483),
                    i = t.n(a);
                const s = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var o = t(926),
                    l = t.n(o),
                    E = t(179),
                    c = t.n(E);
                t(281);
                let A;
                !(function (u) {
                    (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
                })(A || (A = {}));
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
                var F = t(916),
                    d = t(613);
                Date.now(), d.Ew.getRegionalDateTime, d.Ew.getFormattedDateTime;
                var D = t(67);
                F.Sw.instance;
                let B;
                !(function (u) {
                    (u.None = 'None'), (u.Shallow = 'Shallow'), (u.Deep = 'Deep');
                })(B || (B = {}));
                F.Sw.instance;
                const m = (u, e, t) =>
                    e.extraLargeHeight || e.largeHeight || e.mediumHeight || e.smallHeight || e.extraSmallHeight
                        ? (e.extraLargeHeight && t.extraLarge) ||
                          (e.largeHeight && t.large) ||
                          (e.mediumHeight && t.medium) ||
                          (e.smallHeight && t.small) ||
                          (e.extraSmallHeight && t.extraSmall)
                            ? u
                            : null
                        : u;
                var _;
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
                })(_ || (_ = {}));
                const C = D.O.client.getSize('rem'),
                    g = C.width,
                    h = C.height,
                    f = Object.assign(
                        { width: g, height: h },
                        (function (u, e, t) {
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
                                n = (function (u, e) {
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
                                a = Math.min(r, n);
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
                                extraLargeHeight: n === t.extraLarge.weight,
                                largeHeight: n === t.large.weight,
                                mediumHeight: n === t.medium.weight,
                                smallHeight: n === t.small.weight,
                                extraSmallHeight: n === t.extraSmall.weight,
                            };
                        })(g, h, s),
                    ),
                    p = (0, E.createContext)(f),
                    v = ['children'];
                const w = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                r,
                                n = {},
                                a = Object.keys(u);
                            for (r = 0; r < a.length; r++) (t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                            return n;
                        })(u, v);
                    const r = (0, E.useContext)(p),
                        n = r.extraLarge,
                        a = r.large,
                        i = r.medium,
                        s = r.small,
                        o = r.extraSmall,
                        l = r.extraLargeWidth,
                        c = r.largeWidth,
                        A = r.mediumWidth,
                        F = r.smallWidth,
                        d = r.extraSmallWidth,
                        D = r.extraLargeHeight,
                        B = r.largeHeight,
                        _ = r.mediumHeight,
                        C = r.smallHeight,
                        g = r.extraSmallHeight,
                        h = { extraLarge: D, large: B, medium: _, small: C, extraSmall: g };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && n) return e;
                        if (t.large && a) return e;
                        if (t.medium && i) return e;
                        if (t.small && s) return e;
                        if (t.extraSmall && o) return e;
                    } else {
                        if (t.extraLargeWidth && l) return m(e, t, h);
                        if (t.largeWidth && c) return m(e, t, h);
                        if (t.mediumWidth && A) return m(e, t, h);
                        if (t.smallWidth && F) return m(e, t, h);
                        if (t.extraSmallWidth && d) return m(e, t, h);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && D) return e;
                            if (t.largeHeight && B) return e;
                            if (t.mediumHeight && _) return e;
                            if (t.smallHeight && C) return e;
                            if (t.extraSmallHeight && g) return e;
                        }
                    }
                    return null;
                };
                w.defaultProps = {
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
                (0, E.memo)(w);
                let b, S, T;
                !(function (u) {
                    (u[(u.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                        (u[(u.Small = s.small.width)] = 'Small'),
                        (u[(u.Medium = s.medium.width)] = 'Medium'),
                        (u[(u.Large = s.large.width)] = 'Large'),
                        (u[(u.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge');
                })(b || (b = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = s.small.width)] = 'Small'),
                            (u[(u.Medium = s.medium.width)] = 'Medium'),
                            (u[(u.Large = s.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge');
                    })(S || (S = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = s.extraSmall.height)] = 'ExtraSmall'),
                            (u[(u.Small = s.small.height)] = 'Small'),
                            (u[(u.Medium = s.medium.height)] = 'Medium'),
                            (u[(u.Large = s.large.height)] = 'Large'),
                            (u[(u.ExtraLarge = s.extraLarge.height)] = 'ExtraLarge');
                    })(T || (T = {}));
                S.ExtraSmall,
                    S.Small,
                    l().SMALL_WIDTH,
                    S.Medium,
                    l().SMALL_WIDTH,
                    l().MEDIUM_WIDTH,
                    S.Large,
                    l().SMALL_WIDTH,
                    l().MEDIUM_WIDTH,
                    l().LARGE_WIDTH,
                    S.ExtraLarge,
                    l().SMALL_WIDTH,
                    l().MEDIUM_WIDTH,
                    l().LARGE_WIDTH,
                    l().EXTRA_LARGE_WIDTH,
                    T.ExtraSmall,
                    T.Small,
                    l().SMALL_HEIGHT,
                    T.Medium,
                    l().SMALL_HEIGHT,
                    l().MEDIUM_HEIGHT,
                    T.Large,
                    l().SMALL_HEIGHT,
                    l().MEDIUM_HEIGHT,
                    l().LARGE_HEIGHT,
                    T.ExtraLarge,
                    l().SMALL_HEIGHT,
                    l().MEDIUM_HEIGHT,
                    l().LARGE_HEIGHT,
                    l().EXTRA_LARGE_HEIGHT,
                    b.ExtraSmall,
                    b.Small,
                    l().SMALL,
                    b.Medium,
                    l().SMALL,
                    l().MEDIUM,
                    b.Large,
                    l().SMALL,
                    l().MEDIUM,
                    l().LARGE,
                    b.ExtraLarge,
                    l().SMALL,
                    l().MEDIUM,
                    l().LARGE,
                    l().EXTRA_LARGE;
                (0, E.createContext)('model');
                function L(u) {
                    engine.call('PlaySound', u);
                }
                const x = {
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
                let P, M;
                !(function (u) {
                    (u.main = 'main'),
                        (u.primary = 'primary'),
                        (u.primaryGreen = 'primaryGreen'),
                        (u.primaryRed = 'primaryRed'),
                        (u.secondary = 'secondary'),
                        (u.ghost = 'ghost');
                })(P || (P = {})),
                    (function (u) {
                        (u.extraSmall = 'extraSmall'), (u.small = 'small'), (u.medium = 'medium');
                    })(M || (M = {}));
                const y = ({
                    children: u,
                    size: e,
                    isFocused: t,
                    type: r,
                    disabled: n,
                    mixClass: a,
                    soundHover: s,
                    soundClick: o,
                    onMouseEnter: l,
                    onMouseMove: A,
                    onMouseDown: F,
                    onMouseUp: d,
                    onMouseLeave: D,
                    onClick: B,
                }) => {
                    const m = (0, E.useRef)(null),
                        _ = (0, E.useState)(t),
                        C = _[0],
                        g = _[1],
                        h = (0, E.useState)(!1),
                        f = h[0],
                        p = h[1],
                        v = (0, E.useState)(!1),
                        w = v[0],
                        b = v[1],
                        S = (0, E.useCallback)(() => {
                            n || (m.current && (m.current.focus(), g(!0)));
                        }, [n]),
                        T = (0, E.useCallback)(
                            (u) => {
                                C && null !== m.current && !m.current.contains(u.target) && g(!1);
                            },
                            [C],
                        ),
                        M = (0, E.useCallback)(
                            (u) => {
                                n || (B && B(u));
                            },
                            [n, B],
                        ),
                        y = (0, E.useCallback)(
                            (u) => {
                                n || (null !== s && L(s), l && l(u), b(!0));
                            },
                            [n, s, l],
                        ),
                        O = (0, E.useCallback)(
                            (u) => {
                                A && A(u);
                            },
                            [A],
                        ),
                        k = (0, E.useCallback)(
                            (u) => {
                                n || (d && d(u), p(!1));
                            },
                            [n, d],
                        ),
                        N = (0, E.useCallback)(
                            (u) => {
                                n || (null !== o && L(o), F && F(u), t && S(), p(!0));
                            },
                            [n, o, F, S, t],
                        ),
                        H = (0, E.useCallback)(
                            (u) => {
                                n || (D && D(u), p(!1));
                            },
                            [n, D],
                        ),
                        I = i()(
                            x.base,
                            x[`base__${r}`],
                            {
                                [x.base__disabled]: n,
                                [x[`base__${e}`]]: e,
                                [x.base__focus]: C,
                                [x.base__highlightActive]: f,
                                [x.base__firstHover]: w,
                            },
                            a,
                        ),
                        W = i()(x.state, x.state__default);
                    return (
                        (0, E.useEffect)(
                            () => (
                                document.addEventListener('mousedown', T),
                                () => {
                                    document.removeEventListener('mousedown', T);
                                }
                            ),
                            [T],
                        ),
                        (0, E.useEffect)(() => {
                            g(t);
                        }, [t]),
                        c().createElement(
                            'div',
                            {
                                ref: m,
                                className: I,
                                onMouseEnter: y,
                                onMouseMove: O,
                                onMouseUp: k,
                                onMouseDown: N,
                                onMouseLeave: H,
                                onClick: M,
                            },
                            r !== P.ghost &&
                                c().createElement(
                                    c().Fragment,
                                    null,
                                    c().createElement('div', { className: x.back }),
                                    c().createElement('span', { className: x.texture }),
                                ),
                            c().createElement(
                                'span',
                                { className: W },
                                c().createElement('span', { className: x.stateDisabled }),
                                c().createElement('span', { className: x.stateHighlightHover }),
                                c().createElement('span', { className: x.stateHighlightActive }),
                            ),
                            c().createElement(
                                'span',
                                { className: x.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                u,
                            ),
                        )
                    );
                };
                y.defaultProps = { type: P.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                (0, E.memo)(y);
                const O = (u) => {
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
                    k = (u, e, t) => (t < u ? u : t > e ? e : t),
                    N = [];
                function H(u) {
                    const e = (0, E.useRef)(u);
                    return (
                        (0, E.useLayoutEffect)(() => {
                            e.current = u;
                        }),
                        (0, E.useCallback)((...u) => (0, e.current)(...u), N)
                    );
                }
                function I(u, e, t = []) {
                    const r = (0, E.useRef)(0),
                        n = (0, E.useCallback)(() => window.clearInterval(r.current), t || []);
                    (0, E.useEffect)(() => n, [n]);
                    const a = (null != t ? t : []).concat([e]);
                    return [
                        (0, E.useCallback)((t) => {
                            (r.current = window.setInterval(() => u(t, !0), e)), u(t, !1);
                        }, a),
                        n,
                    ];
                }
                function W(u, e) {
                    var t = ('undefined' != typeof Symbol && u[Symbol.iterator]) || u['@@iterator'];
                    if (t) return (t = t.call(u)).next.bind(t);
                    if (
                        Array.isArray(u) ||
                        (t = (function (u, e) {
                            if (!u) return;
                            if ('string' == typeof u) return U(u, e);
                            var t = Object.prototype.toString.call(u).slice(8, -1);
                            'Object' === t && u.constructor && (t = u.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(u);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return U(u, e);
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
                function U(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, r = new Array(e); t < e; t++) r[t] = u[t];
                    return r;
                }
                function G(u, e, t) {
                    const r = (0, E.useMemo)(
                        () =>
                            (function (u, e, t, r) {
                                let n,
                                    a = !1,
                                    i = 0;
                                function s() {
                                    n && clearTimeout(n);
                                }
                                function o(...o) {
                                    const l = this,
                                        E = Date.now() - i;
                                    function c() {
                                        (i = Date.now()), t.apply(l, o);
                                    }
                                    a ||
                                        (r && !n && c(),
                                        s(),
                                        void 0 === r && E > u
                                            ? c()
                                            : !0 !== e &&
                                              (n = setTimeout(
                                                  r
                                                      ? function () {
                                                            n = void 0;
                                                        }
                                                      : c,
                                                  void 0 === r ? u - E : u,
                                              )));
                                }
                                return (
                                    'boolean' != typeof e && ((r = t), (t = e), (e = void 0)),
                                    (o.cancel = function () {
                                        s(), (a = !0);
                                    }),
                                    o
                                );
                            })(t, u),
                        e,
                    );
                    return (0, E.useEffect)(() => r.cancel, [r]), r;
                }
                var z = t(30);
                let V;
                !(function (u) {
                    (u[(u.Next = -1)] = 'Next'), (u[(u.Prev = 1)] = 'Prev');
                })(V || (V = {}));
                const Y = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    q = ({
                        getContainerSize: u,
                        getBounds: e,
                        setScrollPosition: t,
                        getDirection: r,
                        getWrapperSize: n,
                        triggerMouseMoveOnUpdate: a = !1,
                    }) => {
                        const i = (u, t) => {
                            const r = e(u),
                                n = r[0],
                                a = r[1];
                            return a <= n ? 0 : k(n, a, t);
                        };
                        return (s = {}) => {
                            const o = s.settings,
                                l = void 0 === o ? Y : o,
                                c = (0, E.useRef)(null),
                                A = (0, E.useRef)(null),
                                F = (() => {
                                    const u = (0, E.useMemo)(() => ({}), []),
                                        e = (e) => (u[e] || (u[e] = new Map()), u[e]),
                                        t = (u, t) => {
                                            e(u).set(t, t);
                                        },
                                        r = (u, t) => {
                                            e(u).delete(t);
                                        },
                                        n = (u, ...t) => {
                                            for (var r, n = W(e(u).values()); !(r = n()).done; ) (0, r.value)(...t);
                                        };
                                    return (0, E.useMemo)(() => ({ on: t, off: r, trigger: n }), []);
                                })(),
                                d = G(
                                    () => {
                                        D.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                B = (0, z.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (u) => {
                                        const e = c.current;
                                        e && (t(e, u), F.trigger('change', u), a && d());
                                    },
                                    onRest: (u) => F.trigger('rest', u),
                                    onStart: (u) => F.trigger('start', u),
                                    onPause: (u) => F.trigger('pause', u),
                                })),
                                m = B[0],
                                _ = B[1],
                                C = (0, E.useCallback)(
                                    (u, e, t) => {
                                        var r;
                                        const n = m.scrollPosition.get(),
                                            a = (null != (r = m.scrollPosition.goal) ? r : 0) - n;
                                        return i(u, e * t + a + n);
                                    },
                                    [m.scrollPosition],
                                ),
                                g = (0, E.useCallback)(
                                    (u, { immediate: e = !1, reset: t = !0 } = {}) => {
                                        const r = c.current;
                                        r &&
                                            _.start({
                                                scrollPosition: i(r, u),
                                                immediate: e,
                                                reset: t,
                                                config: l.animationConfig,
                                                from: { scrollPosition: i(r, m.scrollPosition.get()) },
                                            });
                                    },
                                    [_, l.animationConfig, m.scrollPosition],
                                ),
                                h = (0, E.useCallback)(
                                    (u) => {
                                        const e = c.current,
                                            t = A.current;
                                        if (!e || !t) return;
                                        const r = ((u, e) => {
                                                switch (e.type) {
                                                    case 'proportional':
                                                        return n(u) / e.factor;
                                                    case 'fixed':
                                                        return e.value;
                                                }
                                            })(t, l.step),
                                            a = C(e, u, r);
                                        g(a);
                                    },
                                    [g, C, l.step],
                                ),
                                f = (0, E.useCallback)(
                                    (u) => {
                                        0 !== u.deltaY && h(r(u)),
                                            c.current && F.trigger('mouseWheel', u, m.scrollPosition, e(c.current));
                                    },
                                    [m.scrollPosition, h, F],
                                ),
                                p = ((u, e = []) => {
                                    const t = (0, E.useRef)(),
                                        r = (0, E.useCallback)((...e) => {
                                            t.current && t.current(), (t.current = u(...e));
                                        }, e);
                                    return (
                                        (0, E.useEffect)(
                                            () => () => {
                                                t.current && t.current();
                                            },
                                            [r],
                                        ),
                                        r
                                    );
                                })(
                                    () =>
                                        O(() => {
                                            const u = c.current;
                                            u &&
                                                (g(i(u, m.scrollPosition.goal), { immediate: !0 }),
                                                F.trigger('resizeHandled'));
                                        }),
                                    [g, m.scrollPosition.goal],
                                ),
                                v = H(() => {
                                    const u = c.current;
                                    if (!u) return;
                                    const e = i(u, m.scrollPosition.goal);
                                    e !== m.scrollPosition.goal && g(e, { immediate: !0 }),
                                        F.trigger('recalculateContent');
                                });
                            (0, E.useEffect)(
                                () => (
                                    window.addEventListener('resize', p),
                                    () => {
                                        window.removeEventListener('resize', p);
                                    }
                                ),
                                [p],
                            );
                            return (0, E.useMemo)(
                                () => ({
                                    getWrapperSize: () => (A.current ? n(A.current) : void 0),
                                    getContainerSize: () => (c.current ? u(c.current) : void 0),
                                    getBounds: () =>
                                        c.current
                                            ? e(c.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: l.step.clampedArrowStepTimeout,
                                    clampPosition: i,
                                    handleMouseWheel: f,
                                    applyScroll: g,
                                    applyStepTo: h,
                                    contentRef: c,
                                    wrapperRef: A,
                                    scrollPosition: _,
                                    animationScroll: m,
                                    recalculateContent: v,
                                    events: { on: F.on, off: F.off },
                                }),
                                [m.scrollPosition, g, h, F.off, F.on, v, f, _, l.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    X = q({
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
                        getDirection: (u) => (u.deltaY > 1 ? V.Next : V.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    j = 'HorizontalBar_base_49',
                    K = 'HorizontalBar_base__nonActive_82',
                    Z = 'HorizontalBar_leftButton_5f',
                    Q = 'HorizontalBar_rightButton_03',
                    $ = 'HorizontalBar_track_0d',
                    J = 'HorizontalBar_thumb_fd',
                    uu = 'HorizontalBar_rail_32',
                    eu = 'disable',
                    tu = { pending: !1, offset: 0 },
                    ru = (u) => {
                        var e;
                        return 0.9 * (null != (e = u.getWrapperSize()) ? e : 0);
                    },
                    nu = () => {},
                    au = (u, e) => Math.max(20, u.offsetWidth * e),
                    iu = (0, E.memo)(({ api: u, classNames: e = {}, getStepByRailClick: t = ru, onDrag: r = nu }) => {
                        const n = (0, E.useRef)(null),
                            a = (0, E.useRef)(null),
                            s = (0, E.useRef)(null),
                            o = (0, E.useRef)(null),
                            l = (0, E.useRef)(null),
                            A = u.stepTimeout || 100,
                            F = (0, E.useState)(tu),
                            d = F[0],
                            B = F[1],
                            m = (0, E.useCallback)(
                                (u) => {
                                    B(u),
                                        l.current && r({ type: u.pending ? 'dragStart' : 'dragEnd', thumb: l.current });
                                },
                                [r],
                            ),
                            _ = () => {
                                const e = o.current,
                                    t = l.current,
                                    r = u.getWrapperSize(),
                                    n = u.getContainerSize();
                                if (!(r && e && t && n)) return;
                                const i = u.animationScroll.scrollPosition.get(),
                                    E = Math.min(1, r / n),
                                    c = k(0, 1, i / (n - r)),
                                    A = (e.offsetWidth - au(e, E)) * c;
                                (t.style.transform = `translateX(${0 | A}px)`),
                                    ((u) => {
                                        if (a.current && s.current && o.current && l.current) {
                                            if (0 === u)
                                                return a.current.classList.add(eu), void s.current.classList.remove(eu);
                                            if (
                                                ((e = o.current),
                                                (t = l.current),
                                                u - (e.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return a.current.classList.remove(eu), void s.current.classList.add(eu);
                                            var e, t;
                                            a.current.classList.remove(eu), s.current.classList.remove(eu);
                                        }
                                    })(A);
                            },
                            C = H(() => {
                                (() => {
                                    const e = l.current,
                                        t = o.current,
                                        r = u.getWrapperSize(),
                                        a = u.getContainerSize();
                                    if (!(a && e && r && t)) return;
                                    const i = Math.min(1, r / a);
                                    (e.style.width = `${au(t, i)}px`),
                                        (e.style.display = 'flex'),
                                        n.current &&
                                            (1 === i ? n.current.classList.add(K) : n.current.classList.remove(K));
                                })(),
                                    _();
                            });
                        (0, E.useEffect)(() => O(C)),
                            (0, E.useEffect)(
                                () =>
                                    O(() => {
                                        const e = () => {
                                            _();
                                        };
                                        let t = nu;
                                        const r = () => {
                                            t(), (t = O(C));
                                        };
                                        return (
                                            u.events.on('recalculateContent', C),
                                            u.events.on('rest', e),
                                            u.events.on('change', e),
                                            u.events.on('resizeHandled', r),
                                            () => {
                                                t(),
                                                    u.events.off('recalculateContent', C),
                                                    u.events.off('rest', e),
                                                    u.events.off('change', e),
                                                    u.events.off('resizeHandled', r);
                                            }
                                        );
                                    }),
                                [u],
                            ),
                            (0, E.useEffect)(() => {
                                if (!d.pending) return;
                                const e = D.O.client.events.mouse.move(([e, t]) => {
                                        var n;
                                        const a = u.contentRef.current,
                                            i = u.wrapperRef.current;
                                        if (!a || !i) return;
                                        const s = o.current,
                                            E = l.current;
                                        if (!s || !E) return;
                                        if ('inside' === t && e.clientX < 0) return;
                                        const c = e.clientX - d.offset - s.getBoundingClientRect().x,
                                            A = (c / s.offsetWidth) * (null != (n = u.getContainerSize()) ? n : 0);
                                        u.scrollPosition.start({
                                            scrollPosition: u.clampPosition(a, A),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: u.animationScroll.scrollPosition.get() },
                                        }),
                                            r({ type: 'dragging', thumb: E, thumbOffset: c, contentOffset: A });
                                    }),
                                    t = D.O.client.events.mouse.up(() => {
                                        e(), m(tu);
                                    });
                                return () => {
                                    e(), t();
                                };
                            }, [u, d.offset, d.pending, r, m]);
                        const g = I((e) => u.applyStepTo(e), A, [u]),
                            h = g[0],
                            f = g[1];
                        (0, E.useEffect)(
                            () => (
                                document.addEventListener('mouseup', f, !0),
                                () => document.removeEventListener('mouseup', f, !0)
                            ),
                            [f],
                        );
                        const p = (u) => {
                            u.target.classList.contains(eu) || L('highlight');
                        };
                        return c().createElement(
                            'div',
                            { className: i()(j, e.base), ref: n, onWheel: u.handleMouseWheel },
                            c().createElement('div', {
                                className: i()(Z, e.leftButton),
                                onMouseDown: (u) => {
                                    u.target.classList.contains(eu) || 0 !== u.button || (L('play'), h(V.Next));
                                },
                                onMouseUp: f,
                                ref: a,
                                onMouseEnter: p,
                            }),
                            c().createElement(
                                'div',
                                {
                                    className: i()($, e.track),
                                    onMouseDown: (e) => {
                                        const r = l.current;
                                        if (r && 0 === e.button)
                                            if ((L('play'), e.target === r))
                                                m({ pending: !0, offset: e.screenX - r.getBoundingClientRect().x });
                                            else {
                                                ((e) => {
                                                    const r = l.current,
                                                        n = u.contentRef.current;
                                                    if (!r || !n) return;
                                                    const a = t(u);
                                                    u.applyScroll(u.animationScroll.scrollPosition.get() + a * e);
                                                })(e.screenX > r.getBoundingClientRect().x ? V.Prev : V.Next);
                                            }
                                    },
                                    ref: o,
                                    onMouseEnter: p,
                                },
                                c().createElement('div', { ref: l, className: i()(J, e.thumb) }),
                                c().createElement('div', { className: i()(uu, e.rail) }),
                            ),
                            c().createElement('div', {
                                className: i()(Q, e.rightButton),
                                onMouseDown: (u) => {
                                    u.target.classList.contains(eu) || 0 !== u.button || (L('play'), h(V.Prev));
                                },
                                onMouseUp: f,
                                ref: s,
                                onMouseEnter: p,
                            }),
                        );
                    }),
                    su = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    ou = ({
                        children: u,
                        api: e,
                        className: t,
                        barClassNames: r,
                        areaClassName: n,
                        classNames: a,
                        scrollClassName: s,
                        getStepByRailClick: o,
                        onDrag: l,
                    }) => {
                        const A = (0, E.useMemo)(() => {
                                const u = r || {};
                                return Object.assign({}, u, { base: i()(su.base, u.base) });
                            }, [r]),
                            F = (0, E.useMemo)(() => Object.assign({}, e, { handleMouseWheel: () => {} }), [e]);
                        return c().createElement(
                            'div',
                            { className: i()(su.defaultScroll, t), onWheel: e.handleMouseWheel },
                            c().createElement(
                                'div',
                                { className: i()(su.defaultScrollArea, n) },
                                c().createElement(lu, { className: s, api: F, classNames: a }, u),
                            ),
                            c().createElement(iu, { getStepByRailClick: o, api: e, onDrag: l, classNames: A }),
                        );
                    },
                    lu = ({ api: u, className: e, classNames: t, children: r }) => (
                        (0, E.useEffect)(() => O(u.recalculateContent)),
                        c().createElement(
                            'div',
                            { className: i()(su.base, e) },
                            c().createElement(
                                'div',
                                {
                                    className: i()(su.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: u.handleMouseWheel,
                                    ref: u.wrapperRef,
                                },
                                c().createElement(
                                    'div',
                                    { className: i()(su.content, null == t ? void 0 : t.content), ref: u.contentRef },
                                    r,
                                ),
                            ),
                        )
                    );
                (lu.Bar = iu), (lu.Default = ou);
                const Eu = q({
                        getBounds: (u) => [0, u.scrollHeight - u.offsetHeight],
                        getContainerSize: (u) => u.scrollHeight,
                        getWrapperSize: (u) => u.offsetHeight,
                        setScrollPosition: (u, e) => {
                            u.scrollTop = e.value.scrollPosition;
                        },
                        getDirection: (u) => (u.deltaY > 1 ? V.Next : V.Prev),
                    }),
                    cu = 'VerticalBar_base_f3',
                    Au = 'VerticalBar_base__nonActive_42',
                    Fu = 'VerticalBar_topButton_d7',
                    du = 'VerticalBar_bottomButton_06',
                    Du = 'VerticalBar_track_df',
                    Bu = 'VerticalBar_thumb_32',
                    mu = 'VerticalBar_rail_43',
                    _u = 'disable',
                    Cu = () => {},
                    gu = { pending: !1, offset: 0 },
                    hu = (u) => {
                        var e;
                        return 0.9 * (null != (e = u.getWrapperSize()) ? e : 0);
                    },
                    fu = (u, e) => {
                        u.contentRef.current && e(u.contentRef.current);
                    },
                    pu = (u, e) => Math.max(20, u.offsetHeight * e),
                    vu = (0, E.memo)(({ api: u, classNames: e = {}, getStepByRailClick: t = hu, onDrag: r = Cu }) => {
                        const n = (0, E.useRef)(null),
                            a = (0, E.useRef)(null),
                            s = (0, E.useRef)(null),
                            o = (0, E.useRef)(null),
                            l = (0, E.useRef)(null),
                            A = u.stepTimeout || 100,
                            F = (0, E.useState)(gu),
                            d = F[0],
                            B = F[1],
                            m = (0, E.useCallback)(
                                (u) => {
                                    B(u),
                                        l.current && r({ type: u.pending ? 'dragStart' : 'dragEnd', thumb: l.current });
                                },
                                [r],
                            ),
                            _ = H(() => {
                                const e = l.current,
                                    t = o.current,
                                    r = u.getWrapperSize(),
                                    a = u.getContainerSize();
                                if (!(r && a && e && t)) return;
                                const i = Math.min(1, r / a);
                                return (
                                    (e.style.height = `${pu(t, i)}px`),
                                    (e.style.display = 'flex'),
                                    n.current &&
                                        (1 === i ? n.current.classList.add(Au) : n.current.classList.remove(Au)),
                                    i
                                );
                            }),
                            C = H(() => {
                                const e = o.current,
                                    t = l.current,
                                    r = u.getWrapperSize(),
                                    n = u.getContainerSize();
                                if (!(r && e && t && n)) return;
                                const i = u.animationScroll.scrollPosition.get(),
                                    E = Math.min(1, r / n),
                                    c = k(0, 1, i / (n - r)),
                                    A = (e.offsetHeight - pu(e, E)) * c;
                                (t.style.transform = `translateY(${0 | A}px)`),
                                    ((u) => {
                                        if (a.current && s.current && o.current && l.current) {
                                            if (0 === Math.round(u))
                                                return a.current.classList.add(_u), void s.current.classList.remove(_u);
                                            if (
                                                ((e = o.current),
                                                (t = l.current),
                                                u - (e.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return a.current.classList.remove(_u), void s.current.classList.add(_u);
                                            var e, t;
                                            a.current.classList.remove(_u), s.current.classList.remove(_u);
                                        }
                                    })(A);
                            }),
                            g = H(() => {
                                fu(u, () => {
                                    _(), C();
                                });
                            });
                        (0, E.useEffect)(() => O(g)),
                            (0, E.useEffect)(() => {
                                const e = () => {
                                    fu(u, () => {
                                        C();
                                    });
                                };
                                let t = Cu;
                                const r = () => {
                                    t(), (t = O(g));
                                };
                                return (
                                    u.events.on('recalculateContent', g),
                                    u.events.on('rest', e),
                                    u.events.on('change', e),
                                    u.events.on('resizeHandled', r),
                                    () => {
                                        t(),
                                            u.events.off('recalculateContent', g),
                                            u.events.off('rest', e),
                                            u.events.off('change', e),
                                            u.events.off('resizeHandled', r);
                                    }
                                );
                            }, [u]),
                            (0, E.useEffect)(() => {
                                if (!d.pending) return;
                                const e = D.O.client.events.mouse.up(() => {
                                        m(gu);
                                    }),
                                    t = D.O.client.events.mouse.move(([e]) => {
                                        fu(u, (t) => {
                                            const n = o.current,
                                                a = l.current,
                                                i = u.getContainerSize();
                                            if (!n || !a || !i) return;
                                            const s = e.screenY - d.offset - n.getBoundingClientRect().y,
                                                E = (s / n.offsetHeight) * i;
                                            u.scrollPosition.start({
                                                scrollPosition: u.clampPosition(t, E),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                r({ type: 'dragging', thumb: a, thumbOffset: s, contentOffset: E });
                                        });
                                    });
                                return () => {
                                    e(), t();
                                };
                            }, [u, d.offset, d.pending, r, m]);
                        const h = I((e) => u.applyStepTo(e), A, [u]),
                            f = h[0],
                            p = h[1];
                        (0, E.useEffect)(
                            () => (
                                document.addEventListener('mouseup', p, !0),
                                () => document.removeEventListener('mouseup', p, !0)
                            ),
                            [p],
                        );
                        const v = (u) => {
                            u.target.classList.contains(_u) || L('highlight');
                        };
                        return c().createElement(
                            'div',
                            { className: i()(cu, e.base), ref: n, onWheel: u.handleMouseWheel },
                            c().createElement('div', {
                                className: i()(Fu, e.topButton),
                                onMouseDown: (u) => {
                                    u.target.classList.contains(_u) || 0 !== u.button || (L('play'), f(V.Next));
                                },
                                ref: a,
                                onMouseEnter: v,
                            }),
                            c().createElement(
                                'div',
                                {
                                    className: i()(Du, e.track),
                                    onMouseDown: (e) => {
                                        const r = l.current;
                                        if (r && 0 === e.button)
                                            if ((L('play'), e.target === r))
                                                m({ pending: !0, offset: e.screenY - r.getBoundingClientRect().y });
                                            else {
                                                ((e) => {
                                                    l.current &&
                                                        fu(u, (r) => {
                                                            if (!r) return;
                                                            const n = t(u),
                                                                a = u.clampPosition(r, r.scrollTop + n * e);
                                                            u.applyScroll(a);
                                                        });
                                                })(e.screenY > r.getBoundingClientRect().y ? V.Prev : V.Next);
                                            }
                                    },
                                    ref: o,
                                    onMouseEnter: v,
                                },
                                c().createElement('div', { ref: l, className: i()(Bu, e.thumb) }),
                                c().createElement('div', { className: i()(mu, e.rail) }),
                            ),
                            c().createElement('div', {
                                className: i()(du, e.bottomButton),
                                onMouseDown: (u) => {
                                    u.target.classList.contains(_u) || 0 !== u.button || (L('play'), f(V.Prev));
                                },
                                onMouseUp: p,
                                ref: s,
                                onMouseEnter: v,
                            }),
                        );
                    }),
                    wu = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    bu = ({
                        children: u,
                        api: e,
                        className: t,
                        barClassNames: r,
                        areaClassName: n,
                        scrollClassName: a,
                        scrollClassNames: s,
                        getStepByRailClick: o,
                        onDrag: l,
                    }) => {
                        const A = (0, E.useMemo)(() => {
                                const u = r || {};
                                return Object.assign({}, u, { base: i()(wu.base, u.base) });
                            }, [r]),
                            F = (0, E.useMemo)(() => Object.assign({}, e, { handleMouseWheel: () => {} }), [e]);
                        return c().createElement(
                            'div',
                            { className: i()(wu.defaultScroll, t), onWheel: e.handleMouseWheel },
                            c().createElement(
                                'div',
                                { className: i()(wu.area, n) },
                                c().createElement(Su, { className: a, classNames: s, api: F }, u),
                            ),
                            c().createElement(vu, { getStepByRailClick: o, api: e, onDrag: l, classNames: A }),
                        );
                    },
                    Su = ({ className: u, classNames: e, children: t, api: r }) => (
                        (0, E.useEffect)(() => O(r.recalculateContent)),
                        c().createElement(
                            'div',
                            { className: i()(wu.base, u), ref: r.wrapperRef, onWheel: r.handleMouseWheel },
                            c().createElement(
                                'div',
                                { className: i()(wu.content, null == e ? void 0 : e.content), ref: r.contentRef },
                                t,
                            ),
                        )
                    );
                Su.Default = bu;
                R.views.common.tooltip_window.simple_tooltip_content;
                let Tu, Lu, xu, Pu, Mu, Ru, yu;
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
                        (u.NewYearAlbumsAccess = 'newYearAlbumsAccess'),
                        (u.NewYearFillers = 'ny22Fillers'),
                        (u.NewYearInvoice = 'newYearInvoice'),
                        (u.NewYearToyFragments = 'ny22ToyFragments'),
                        (u.NewYearSlot = 'newYearSlot'),
                        (u.BonusX5 = 'battle_bonus_x5'),
                        (u.CrewBonusX3 = 'crew_bonus_x3'),
                        (u.Vehicles = 'vehicles'),
                        (u.EpicSelectToken = 'epicSelectToken'),
                        (u.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                        (u.BattleBoosterGift = 'battleBooster_gift'),
                        (u.OptionalDevice = 'optionalDevice');
                })(Tu || (Tu = {})),
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
                            (u.BattleAchievement = 'dossier_achievement');
                    })(Lu || (Lu = {})),
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
                            (u.S48x48 = 's48x48');
                    })(xu || (xu = {})),
                    (function (u) {
                        (u.MULTI = 'multi'),
                            (u.CURRENCY = 'currency'),
                            (u.PREMIUM_PLUS = 'premium_plus'),
                            (u.NUMBER = 'number'),
                            (u.STRING = 'string');
                    })(Pu || (Pu = {})),
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
                            (u.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4');
                    })(Mu || (Mu = {})),
                    (function (u) {
                        u.BATTLE_BOOSTER = 'battleBooster';
                    })(Ru || (Ru = {})),
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
                            (u.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4');
                    })(yu || (yu = {}));
                let Ou;
                !(function (u) {
                    (u.Plus = 'plus'), (u.Minus = 'minus');
                })(Ou || (Ou = {}));
                var ku;
                !(function (u) {
                    (u.None = ''), (u.Trophy = 'trophy'), (u.Deluxe = 'delux');
                })(ku || (ku = {}));
                R.strings.selectable_reward.reward;
                R.strings.selectable_reward.tabs;
                let Nu;
                !(function (u) {
                    (u[(u.None = 0)] = 'None'), (u[(u.Accepting = 1)] = 'Accepting');
                })(Nu || (Nu = {}));
                (0, E.createContext)(Nu.None), R.strings.selectable_reward.error;
                let Hu;
                !(function (u) {
                    (u.Normal = 'normal'), (u.Error = 'error');
                })(Hu || (Hu = {}));
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
        (__webpack_require__.O = (u, e, t, r) => {
            if (!e) {
                var n = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [e, t, r] = deferred[o], a = !0, i = 0; i < e.length; i++)
                        (!1 & r || n >= r) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[i]))
                            ? e.splice(i--, 1)
                            : ((a = !1), r < n && (n = r));
                    if (a) {
                        deferred.splice(o--, 1);
                        var s = t();
                        void 0 !== s && (u = s);
                    }
                }
                return u;
            }
            r = r || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > r; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [e, t, r];
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
        (__webpack_require__.j = 100),
        (() => {
            var u = { 100: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var r,
                        n,
                        [a, i, s] = t,
                        o = 0;
                    if (a.some((e) => 0 !== u[e])) {
                        for (r in i) __webpack_require__.o(i, r) && (__webpack_require__.m[r] = i[r]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (e && e(t); o < a.length; o++)
                        (n = a[o]), __webpack_require__.o(u, n) && u[n] && u[n][0](), (u[n] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [127], () => __webpack_require__(653));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
