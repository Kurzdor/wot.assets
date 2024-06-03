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
                t.d(e, { O: () => X });
                var n = {};
                t.r(n),
                    t.d(n, { mouse: () => D, off: () => A, on: () => E, onResize: () => l, onScaleUpdated: () => c });
                var r = {};
                t.r(r),
                    t.d(r, {
                        events: () => n,
                        getMouseGlobalPosition: () => m,
                        getSize: () => d,
                        graphicsQuality: () => B,
                    });
                var a = {};
                t.r(a), t.d(a, { getBgUrl: () => _, getTextureUrl: () => C });
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
                        addModelObserver: () => k,
                        addPreloadTexture: () => S,
                        children: () => a,
                        displayStatus: () => g,
                        displayStatusIs: () => q,
                        events: () => f,
                        extraSize: () => K,
                        forceTriggerMouseMove: () => V,
                        freezeTextureBeforeResize: () => H,
                        getBrowserTexturePath: () => L,
                        getDisplayStatus: () => j,
                        getScale: () => P,
                        getSize: () => N,
                        getViewGlobalPosition: () => O,
                        isEventHandled: () => U,
                        isFocused: () => $,
                        pxToRem: () => W,
                        remToPx: () => I,
                        resize: () => R,
                        sendEvent: () => y,
                        setAnimateWindow: () => G,
                        setEventHandled: () => z,
                        setInputPaddingsRem: () => M,
                        setSidePaddingsRem: () => T,
                        whenTutorialReady: () => Y,
                    });
                const l = s('clientResized'),
                    c = s('self.onScaleUpdated'),
                    E = (u, e) => engine.on(u, e),
                    A = (u, e) => engine.off(u, e),
                    F = { down: s('mousedown'), up: s('mouseup'), move: s('mousemove') };
                const D = (function () {
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
                    const r = ['down', 'up', 'move'].reduce(
                        (e, t) => (
                            (e[t] = (function (e) {
                                return (t) => {
                                    u.listeners += 1;
                                    let r = !0;
                                    const a = `mouse${e}`,
                                        i = F[e]((u) => t([u, 'outside']));
                                    function s(u) {
                                        t([u, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, s),
                                        n(),
                                        () => {
                                            r &&
                                                (i(),
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
                            u.enabled && o(!0);
                        },
                        disableOutside() {
                            u.enabled && o(!1);
                        },
                    });
                })();
                function d(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function m(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const B = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function C(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function _(u, e, t) {
                    return `url(${C(u, e, t)})`;
                }
                const g = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
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
                    h = ['args'];
                const p = 2,
                    v = 16,
                    b = 32,
                    w = 64,
                    x = (u, e) => {
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
                                })(e, h);
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
                    y = {
                        close(u) {
                            x('popover' === u ? p : b);
                        },
                        minimize() {
                            x(w);
                        },
                        move(u) {
                            x(v, { isMouseEvent: !0, on: u });
                        },
                    };
                function S(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function M(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, 15);
                }
                function L(u, e, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, n);
                }
                function k(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function T(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, 15);
                }
                function N(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function R(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function O(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: I(e.x), y: I(e.y) };
                }
                function H() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function P() {
                    return viewEnv.getScale();
                }
                function W(u) {
                    return viewEnv.pxToRem(u);
                }
                function I(u) {
                    return viewEnv.remToPx(u);
                }
                function G(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function $() {
                    return viewEnv.isFocused();
                }
                function z() {
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
                const q = Object.keys(g).reduce((u, e) => ((u[e] = () => viewEnv.getShowingStatus() === g[e]), u), {}),
                    K = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    Y = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : f.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]),
                    X = { view: i, client: r };
            },
            521: (u, e, t) => {
                'use strict';
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
                'use strict';
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
                t.d(e, { Sw: () => a.Z, ry: () => B, Eu: () => C });
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
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var A = t(521),
                    F = t(67);
                const D = ['args'];
                function d(u, e, t, n, r, a, i) {
                    try {
                        var s = u[a](i),
                            o = s.value;
                    } catch (u) {
                        return void t(u);
                    }
                    s.done ? e(o) : Promise.resolve(o).then(n, r);
                }
                const m = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
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
                                        function i(u) {
                                            d(a, n, r, i, s, 'next', u);
                                        }
                                        function s(u) {
                                            d(a, n, r, i, s, 'throw', u);
                                        }
                                        i(void 0);
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
                    _ = (u, e) => {
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
                                })(e, D);
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
                    g = () => _(s.CLOSE),
                    f = (u, e) => {
                        u.keyCode === A.n.ESCAPE && e();
                    };
                var h = t(572);
                const p = r.instance,
                    v = {
                        DataTracker: a.Z,
                        ViewModel: h.Z,
                        ViewEventType: s,
                        NumberFormatType: o,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: E,
                        makeGlobalBoundingBox: m,
                        sendMoveEvent: (u) => _(s.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: g,
                        sendClosePopOverEvent: () => _(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            _(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, n, r = R.invalid('resId'), a) => {
                            const i = F.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                E = o.width,
                                A = o.height,
                                D = {
                                    x: F.O.view.pxToRem(l) + i.x,
                                    y: F.O.view.pxToRem(c) + i.y,
                                    width: F.O.view.pxToRem(E),
                                    height: F.O.view.pxToRem(A),
                                };
                            _(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: e,
                                bbox: m(D),
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
                        handleViewEvent: _,
                        onBindingsReady: B,
                        onLayoutReady: C,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
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
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = v;
            },
            613: (u, e, t) => {
                'use strict';
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
            274: (u, e, t) => {
                'use strict';
                var n = {};
                t.r(n),
                    t.d(n, {
                        Area: () => yu,
                        Bar: () => bu,
                        DefaultScroll: () => xu,
                        Direction: () => lu,
                        defaultSettings: () => cu,
                        useHorizontalScrollApi: () => Au,
                    });
                var r = {};
                t.r(r), t.d(r, { Area: () => ju, Bar: () => zu, Default: () => Vu, useVerticalScrollApi: () => Su });
                var a = t(67),
                    i = t(179),
                    s = t.n(i);
                const o = (u, e, t) =>
                        e.extraLargeHeight || e.largeHeight || e.mediumHeight || e.smallHeight || e.extraSmallHeight
                            ? (e.extraLargeHeight && t.extraLarge) ||
                              (e.largeHeight && t.large) ||
                              (e.mediumHeight && t.medium) ||
                              (e.smallHeight && t.small) ||
                              (e.extraSmallHeight && t.extraSmall)
                                ? u
                                : null
                            : u,
                    l = {
                        extraLarge: { weight: 4, width: 2560, height: 1440 },
                        large: { weight: 3, width: 1920, height: 1080 },
                        medium: { weight: 2, width: 1600, height: 900 },
                        small: { weight: 1, width: 1366, height: 768 },
                        extraSmall: { weight: 0, width: 1024, height: 768 },
                    };
                var c;
                function E(u, e, t) {
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
                })(c || (c = {}));
                const A = a.O.client.getSize('rem'),
                    F = A.width,
                    D = A.height,
                    d = Object.assign({ width: F, height: D }, E(F, D, l)),
                    m = (0, i.createContext)(d),
                    B = ['children'];
                const C = (u) => {
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
                    const n = (0, i.useContext)(m),
                        r = n.extraLarge,
                        a = n.large,
                        s = n.medium,
                        l = n.small,
                        c = n.extraSmall,
                        E = n.extraLargeWidth,
                        A = n.largeWidth,
                        F = n.mediumWidth,
                        D = n.smallWidth,
                        d = n.extraSmallWidth,
                        C = n.extraLargeHeight,
                        _ = n.largeHeight,
                        g = n.mediumHeight,
                        f = n.smallHeight,
                        h = n.extraSmallHeight,
                        p = { extraLarge: C, large: _, medium: g, small: f, extraSmall: h };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && r) return e;
                        if (t.large && a) return e;
                        if (t.medium && s) return e;
                        if (t.small && l) return e;
                        if (t.extraSmall && c) return e;
                    } else {
                        if (t.extraLargeWidth && E) return o(e, t, p);
                        if (t.largeWidth && A) return o(e, t, p);
                        if (t.mediumWidth && F) return o(e, t, p);
                        if (t.smallWidth && D) return o(e, t, p);
                        if (t.extraSmallWidth && d) return o(e, t, p);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && C) return e;
                            if (t.largeHeight && _) return e;
                            if (t.mediumHeight && g) return e;
                            if (t.smallHeight && f) return e;
                            if (t.extraSmallHeight && h) return e;
                        }
                    }
                    return null;
                };
                C.defaultProps = {
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
                (0, i.memo)(C);
                const _ = (u) => {
                        const e = (0, i.useRef)(!1);
                        e.current || (u(), (e.current = !0));
                    },
                    g = ({ children: u }) => {
                        const e = (0, i.useContext)(m),
                            t = (0, i.useState)(e),
                            n = t[0],
                            r = t[1],
                            o = (0, i.useCallback)((u, e) => {
                                const t = a.O.view.pxToRem(u),
                                    n = a.O.view.pxToRem(e);
                                r(Object.assign({ width: t, height: n }, E(t, n, l)));
                            }, []),
                            c = (0, i.useCallback)(() => {
                                const u = a.O.client.getSize('px');
                                o(u.width, u.height);
                            }, [o]);
                        _(() => {
                            a.O.client.events.on('clientResized', o), a.O.client.events.on('self.onScaleUpdated', c);
                        }),
                            (0, i.useEffect)(
                                () => () => {
                                    a.O.client.events.off('clientResized', o),
                                        a.O.client.events.off('self.onScaleUpdated', c);
                                },
                                [o, c],
                            );
                        const A = (0, i.useMemo)(() => Object.assign({}, n), [n]);
                        return s().createElement(m.Provider, { value: A }, u);
                    };
                var f = t(483),
                    h = t.n(f),
                    p = t(926),
                    v = t.n(p);
                let b, w, x;
                !(function (u) {
                    (u[(u.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (u[(u.Small = l.small.width)] = 'Small'),
                        (u[(u.Medium = l.medium.width)] = 'Medium'),
                        (u[(u.Large = l.large.width)] = 'Large'),
                        (u[(u.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                })(b || (b = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = l.small.width)] = 'Small'),
                            (u[(u.Medium = l.medium.width)] = 'Medium'),
                            (u[(u.Large = l.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                    })(w || (w = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = l.extraSmall.height)] = 'ExtraSmall'),
                            (u[(u.Small = l.small.height)] = 'Small'),
                            (u[(u.Medium = l.medium.height)] = 'Medium'),
                            (u[(u.Large = l.large.height)] = 'Large'),
                            (u[(u.ExtraLarge = l.extraLarge.height)] = 'ExtraLarge');
                    })(x || (x = {}));
                const y = () => {
                        const u = (0, i.useContext)(m),
                            e = u.width,
                            t = u.height,
                            n = ((u) => {
                                switch (!0) {
                                    case u.extraLarge:
                                        return b.ExtraLarge;
                                    case u.large:
                                        return b.Large;
                                    case u.medium:
                                        return b.Medium;
                                    case u.small:
                                        return b.Small;
                                    case u.extraSmall:
                                        return b.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), b.ExtraSmall;
                                }
                            })(u),
                            r = ((u) => {
                                switch (!0) {
                                    case u.extraLargeWidth:
                                        return w.ExtraLarge;
                                    case u.largeWidth:
                                        return w.Large;
                                    case u.mediumWidth:
                                        return w.Medium;
                                    case u.smallWidth:
                                        return w.Small;
                                    case u.extraSmallWidth:
                                        return w.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), w.ExtraSmall;
                                }
                            })(u),
                            a = ((u) => {
                                switch (!0) {
                                    case u.extraLargeHeight:
                                        return x.ExtraLarge;
                                    case u.largeHeight:
                                        return x.Large;
                                    case u.mediumHeight:
                                        return x.Medium;
                                    case u.smallHeight:
                                        return x.Small;
                                    case u.extraSmallHeight:
                                        return x.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), x.ExtraSmall;
                                }
                            })(u);
                        return { mediaSize: n, mediaWidth: r, mediaHeight: a, remScreenWidth: e, remScreenHeight: t };
                    },
                    S = ['children', 'className'];
                function M() {
                    return (
                        (M =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        M.apply(this, arguments)
                    );
                }
                const L = {
                        [w.ExtraSmall]: '',
                        [w.Small]: v().SMALL_WIDTH,
                        [w.Medium]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH}`,
                        [w.Large]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH} ${v().LARGE_WIDTH}`,
                        [w.ExtraLarge]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH} ${v().LARGE_WIDTH} ${v().EXTRA_LARGE_WIDTH}`,
                    },
                    k = {
                        [x.ExtraSmall]: '',
                        [x.Small]: v().SMALL_HEIGHT,
                        [x.Medium]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT}`,
                        [x.Large]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT} ${v().LARGE_HEIGHT}`,
                        [x.ExtraLarge]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT} ${v().LARGE_HEIGHT} ${v().EXTRA_LARGE_HEIGHT}`,
                    },
                    T = {
                        [b.ExtraSmall]: '',
                        [b.Small]: v().SMALL,
                        [b.Medium]: `${v().SMALL} ${v().MEDIUM}`,
                        [b.Large]: `${v().SMALL} ${v().MEDIUM} ${v().LARGE}`,
                        [b.ExtraLarge]: `${v().SMALL} ${v().MEDIUM} ${v().LARGE} ${v().EXTRA_LARGE}`,
                    },
                    N = (u) => {
                        let e = u.children,
                            t = u.className,
                            n = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(u);
                                for (n = 0; n < a.length; n++) (t = a[n]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                return r;
                            })(u, S);
                        const r = y(),
                            a = r.mediaWidth,
                            i = r.mediaHeight,
                            o = r.mediaSize;
                        return s().createElement('div', M({ className: h()(t, L[a], k[i], T[o]) }, n), e);
                    },
                    O = ['children'];
                const H = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(u);
                            for (n = 0; n < a.length; n++) (t = a[n]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                            return r;
                        })(u, O);
                    return s().createElement(g, null, s().createElement(N, t, e));
                };
                var P = t(493),
                    W = t.n(P),
                    I = t(521),
                    G = t(916);
                const $ = (u) => {
                    console.error(u.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function z(u = I.n.NONE, e = $, t = !1, n = !1) {
                    (0, i.useEffect)(() => {
                        if (u !== I.n.NONE)
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
                const U = (u = 1) => {
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
                    V = (u, e) => u.split('.').reduce((u, e) => u && u[e], e),
                    j = (u) => u && 'ArrayItem' === u.__proto__.constructor.name,
                    q = (u, e) => (u.length > 0 ? `${u}.${e}` : e),
                    K = (u) =>
                        ((u, e) =>
                            u.split('.').reduce((u, t) => {
                                const n = V(`${u}.${t}`, window);
                                return j(n) ? e(u, t, n) : `${u}.${t}`;
                            }))(u, (u, e) => `${u}.${e}.value`),
                    Y = (u) => {
                        const e = ((u) => {
                                const e = U(),
                                    t = e.caller,
                                    n = e.resId,
                                    r = window.__feature && window.__feature !== t && t ? `subViews.${t}` : '';
                                return { modelPrefix: r, modelPath: q(r, u || ''), resId: n };
                            })(),
                            t = e.modelPrefix,
                            n = u.split('.');
                        if (n.length > 0) {
                            const u = [n[0]];
                            return (
                                n.reduce((e, n) => {
                                    const r = V(q(t, `${e}.${n}`), window);
                                    return j(r) ? (u.push(r.id), `${e}.${n}.value`) : (u.push(n), `${e}.${n}`);
                                }),
                                u.reduce((u, e) => u + '.' + e)
                            );
                        }
                        return '';
                    },
                    X = G.Sw.instance;
                let Z;
                !(function (u) {
                    (u.None = 'None'), (u.Shallow = 'Shallow'), (u.Deep = 'Deep');
                })(Z || (Z = {}));
                const Q = (u = 'model', e = Z.Deep) => {
                        const t = (0, i.useState)(0),
                            n = (t[0], t[1]),
                            r = (0, i.useMemo)(() => U(), []),
                            a = r.caller,
                            s = r.resId,
                            o = (0, i.useMemo)(
                                () => (window.__feature && window.__feature !== a ? `subViews.${a}.${u}` : u),
                                [a, u],
                            ),
                            l = (0, i.useState)(() =>
                                ((u) => {
                                    const e = V(u, window);
                                    for (const u in e) 'function' == typeof e[u] && (e[u] = e[u].bind(e));
                                    return j(e) ? e.value : e;
                                })(K(o)),
                            ),
                            c = l[0],
                            E = l[1],
                            A = (0, i.useRef)(-1);
                        return (
                            _(() => {
                                if (
                                    ('boolean' == typeof e &&
                                        ((e = e ? Z.Deep : Z.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    e !== Z.None)
                                ) {
                                    const t = (u) => {
                                            ((u) => u && 'CoherentArrayProxy' === u.__proto__.constructor.name)(u) &&
                                            e === Z.Deep
                                                ? (u === c && n((u) => u + 1), E(u))
                                                : E(Object.assign([], u));
                                        },
                                        r = Y(u);
                                    A.current = X.addCallback(r, t, s, e === Z.Deep);
                                }
                            }),
                            (0, i.useEffect)(() => {
                                if (e !== Z.None)
                                    return () => {
                                        X.removeCallback(A.current, s);
                                    };
                            }, [s, e]),
                            c
                        );
                    },
                    J = (u) => {
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
                    uu = (u, e, t) => (t < u ? u : t > e ? e : t),
                    eu = [];
                function tu(u) {
                    const e = (0, i.useRef)(u);
                    return (
                        (0, i.useLayoutEffect)(() => {
                            e.current = u;
                        }),
                        (0, i.useCallback)((...u) => (0, e.current)(...u), eu)
                    );
                }
                function nu(u, e, t = []) {
                    const n = (0, i.useRef)(0),
                        r = (0, i.useCallback)(() => window.clearInterval(n.current), t || []);
                    (0, i.useEffect)(() => r, [r]);
                    const a = (null != t ? t : []).concat([e]);
                    return [
                        (0, i.useCallback)((t) => {
                            (n.current = window.setInterval(() => u(t, !0), e)), u(t, !1);
                        }, a),
                        r,
                    ];
                }
                function ru(u) {
                    engine.call('PlaySound', u);
                }
                function au(u, e) {
                    var t = ('undefined' != typeof Symbol && u[Symbol.iterator]) || u['@@iterator'];
                    if (t) return (t = t.call(u)).next.bind(t);
                    if (
                        Array.isArray(u) ||
                        (t = (function (u, e) {
                            if (!u) return;
                            if ('string' == typeof u) return iu(u, e);
                            var t = Object.prototype.toString.call(u).slice(8, -1);
                            'Object' === t && u.constructor && (t = u.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(u);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return iu(u, e);
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
                function iu(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, n = new Array(e); t < e; t++) n[t] = u[t];
                    return n;
                }
                function su(u, e, t) {
                    const n = (0, i.useMemo)(
                        () =>
                            (function (u, e, t, n) {
                                let r,
                                    a = !1,
                                    i = 0;
                                function s() {
                                    r && clearTimeout(r);
                                }
                                function o(...o) {
                                    const l = this,
                                        c = Date.now() - i;
                                    function E() {
                                        (i = Date.now()), t.apply(l, o);
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
                                    (o.cancel = function () {
                                        s(), (a = !0);
                                    }),
                                    o
                                );
                            })(t, u),
                        e,
                    );
                    return (0, i.useEffect)(() => n.cancel, [n]), n;
                }
                var ou = t(30);
                let lu;
                !(function (u) {
                    (u[(u.Next = -1)] = 'Next'), (u[(u.Prev = 1)] = 'Prev');
                })(lu || (lu = {}));
                const cu = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    Eu = ({
                        getContainerSize: u,
                        getBounds: e,
                        setScrollPosition: t,
                        getDirection: n,
                        getWrapperSize: r,
                        triggerMouseMoveOnUpdate: s = !1,
                    }) => {
                        const o = (u, t) => {
                            const n = e(u),
                                r = n[0],
                                a = n[1];
                            return a <= r ? 0 : uu(r, a, t);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                E = void 0 === c ? cu : c,
                                A = (0, i.useRef)(null),
                                F = (0, i.useRef)(null),
                                D = (() => {
                                    const u = (0, i.useMemo)(() => ({}), []),
                                        e = (e) => (u[e] || (u[e] = new Map()), u[e]),
                                        t = (u, t) => {
                                            e(u).set(t, t);
                                        },
                                        n = (u, t) => {
                                            e(u).delete(t);
                                        },
                                        r = (u, ...t) => {
                                            for (var n, r = au(e(u).values()); !(n = r()).done; ) (0, n.value)(...t);
                                        };
                                    return (0, i.useMemo)(() => ({ on: t, off: n, trigger: r }), []);
                                })(),
                                d = su(
                                    () => {
                                        a.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                m = (0, ou.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (u) => {
                                        const e = A.current;
                                        e && (t(e, u), D.trigger('change', u), s && d());
                                    },
                                    onRest: (u) => D.trigger('rest', u),
                                    onStart: (u) => D.trigger('start', u),
                                    onPause: (u) => D.trigger('pause', u),
                                })),
                                B = m[0],
                                C = m[1],
                                _ = (0, i.useCallback)(
                                    (u, e, t) => {
                                        var n;
                                        const r = B.scrollPosition.get(),
                                            a = (null != (n = B.scrollPosition.goal) ? n : 0) - r;
                                        return o(u, e * t + a + r);
                                    },
                                    [B.scrollPosition],
                                ),
                                g = (0, i.useCallback)(
                                    (u, { immediate: e = !1, reset: t = !0 } = {}) => {
                                        const n = A.current;
                                        n &&
                                            C.start({
                                                scrollPosition: o(n, u),
                                                immediate: e,
                                                reset: t,
                                                config: E.animationConfig,
                                                from: { scrollPosition: o(n, B.scrollPosition.get()) },
                                            });
                                    },
                                    [C, E.animationConfig, B.scrollPosition],
                                ),
                                f = (0, i.useCallback)(
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
                                            a = _(e, u, n);
                                        g(a);
                                    },
                                    [g, _, E.step],
                                ),
                                h = (0, i.useCallback)(
                                    (u) => {
                                        0 !== u.deltaY && f(n(u)),
                                            A.current && D.trigger('mouseWheel', u, B.scrollPosition, e(A.current));
                                    },
                                    [B.scrollPosition, f, D],
                                ),
                                p = ((u, e = []) => {
                                    const t = (0, i.useRef)(),
                                        n = (0, i.useCallback)((...e) => {
                                            t.current && t.current(), (t.current = u(...e));
                                        }, e);
                                    return (
                                        (0, i.useEffect)(
                                            () => () => {
                                                t.current && t.current();
                                            },
                                            [n],
                                        ),
                                        n
                                    );
                                })(
                                    () =>
                                        J(() => {
                                            const u = A.current;
                                            u &&
                                                (g(o(u, B.scrollPosition.goal), { immediate: !0 }),
                                                D.trigger('resizeHandled'));
                                        }),
                                    [g, B.scrollPosition.goal],
                                ),
                                v = tu(() => {
                                    const u = A.current;
                                    if (!u) return;
                                    const e = o(u, B.scrollPosition.goal);
                                    e !== B.scrollPosition.goal && g(e, { immediate: !0 }),
                                        D.trigger('recalculateContent');
                                });
                            (0, i.useEffect)(
                                () => (
                                    window.addEventListener('resize', p),
                                    () => {
                                        window.removeEventListener('resize', p);
                                    }
                                ),
                                [p],
                            );
                            return (0, i.useMemo)(
                                () => ({
                                    getWrapperSize: () => (F.current ? r(F.current) : void 0),
                                    getContainerSize: () => (A.current ? u(A.current) : void 0),
                                    getBounds: () =>
                                        A.current
                                            ? e(A.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: E.step.clampedArrowStepTimeout,
                                    clampPosition: o,
                                    handleMouseWheel: h,
                                    applyScroll: g,
                                    applyStepTo: f,
                                    contentRef: A,
                                    wrapperRef: F,
                                    scrollPosition: C,
                                    animationScroll: B,
                                    recalculateContent: v,
                                    events: { on: D.on, off: D.off },
                                }),
                                [B.scrollPosition, g, f, D.off, D.on, v, h, C, E.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    Au = Eu({
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
                        getDirection: (u) => (u.deltaY > 1 ? lu.Next : lu.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    Fu = 'HorizontalBar_base_49',
                    Du = 'HorizontalBar_base__nonActive_82',
                    du = 'HorizontalBar_leftButton_5f',
                    mu = 'HorizontalBar_rightButton_03',
                    Bu = 'HorizontalBar_track_0d',
                    Cu = 'HorizontalBar_thumb_fd',
                    _u = 'HorizontalBar_rail_32',
                    gu = 'disable',
                    fu = { pending: !1, offset: 0 },
                    hu = (u) => {
                        var e;
                        return 0.9 * (null != (e = u.getWrapperSize()) ? e : 0);
                    },
                    pu = () => {},
                    vu = (u, e) => Math.max(20, u.offsetWidth * e),
                    bu = (0, i.memo)(({ api: u, classNames: e = {}, getStepByRailClick: t = hu, onDrag: n = pu }) => {
                        const r = (0, i.useRef)(null),
                            o = (0, i.useRef)(null),
                            l = (0, i.useRef)(null),
                            c = (0, i.useRef)(null),
                            E = (0, i.useRef)(null),
                            A = u.stepTimeout || 100,
                            F = (0, i.useState)(fu),
                            D = F[0],
                            d = F[1],
                            m = (0, i.useCallback)(
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
                                    i = Math.min(1, n / r),
                                    s = uu(0, 1, a / (r - n)),
                                    A = (e.offsetWidth - vu(e, i)) * s;
                                (t.style.transform = `translateX(${0 | A}px)`),
                                    ((u) => {
                                        if (o.current && l.current && c.current && E.current) {
                                            if (0 === u)
                                                return o.current.classList.add(gu), void l.current.classList.remove(gu);
                                            if (
                                                ((e = c.current),
                                                (t = E.current),
                                                u - (e.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return o.current.classList.remove(gu), void l.current.classList.add(gu);
                                            var e, t;
                                            o.current.classList.remove(gu), l.current.classList.remove(gu);
                                        }
                                    })(A);
                            },
                            C = tu(() => {
                                (() => {
                                    const e = E.current,
                                        t = c.current,
                                        n = u.getWrapperSize(),
                                        a = u.getContainerSize();
                                    if (!(a && e && n && t)) return;
                                    const i = Math.min(1, n / a);
                                    (e.style.width = `${vu(t, i)}px`),
                                        (e.style.display = 'flex'),
                                        r.current &&
                                            (1 === i ? r.current.classList.add(Du) : r.current.classList.remove(Du));
                                })(),
                                    B();
                            });
                        (0, i.useEffect)(() => J(C)),
                            (0, i.useEffect)(
                                () =>
                                    J(() => {
                                        const e = () => {
                                            B();
                                        };
                                        let t = pu;
                                        const n = () => {
                                            t(), (t = J(C));
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
                                    }),
                                [u],
                            ),
                            (0, i.useEffect)(() => {
                                if (!D.pending) return;
                                const e = a.O.client.events.mouse.move(([e, t]) => {
                                        var r;
                                        const a = u.contentRef.current,
                                            i = u.wrapperRef.current;
                                        if (!a || !i) return;
                                        const s = c.current,
                                            o = E.current;
                                        if (!s || !o) return;
                                        if ('inside' === t && e.clientX < 0) return;
                                        const l = e.clientX - D.offset - s.getBoundingClientRect().x,
                                            A = (l / s.offsetWidth) * (null != (r = u.getContainerSize()) ? r : 0);
                                        u.scrollPosition.start({
                                            scrollPosition: u.clampPosition(a, A),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: u.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: o, thumbOffset: l, contentOffset: A });
                                    }),
                                    t = a.O.client.events.mouse.up(() => {
                                        e(), m(fu);
                                    });
                                return () => {
                                    e(), t();
                                };
                            }, [u, D.offset, D.pending, n, m]);
                        const _ = nu((e) => u.applyStepTo(e), A, [u]),
                            g = _[0],
                            f = _[1];
                        (0, i.useEffect)(
                            () => (
                                document.addEventListener('mouseup', f, !0),
                                () => document.removeEventListener('mouseup', f, !0)
                            ),
                            [f],
                        );
                        const p = (u) => {
                            u.target.classList.contains(gu) || ru('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: h()(Fu, e.base), ref: r, onWheel: u.handleMouseWheel },
                            s().createElement('div', {
                                className: h()(du, e.leftButton),
                                onMouseDown: (u) => {
                                    u.target.classList.contains(gu) || 0 !== u.button || (ru('play'), g(lu.Next));
                                },
                                onMouseUp: f,
                                ref: o,
                                onMouseEnter: p,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: h()(Bu, e.track),
                                    onMouseDown: (e) => {
                                        const n = E.current;
                                        if (n && 0 === e.button)
                                            if ((ru('play'), e.target === n))
                                                m({ pending: !0, offset: e.screenX - n.getBoundingClientRect().x });
                                            else {
                                                ((e) => {
                                                    const n = E.current,
                                                        r = u.contentRef.current;
                                                    if (!n || !r) return;
                                                    const a = t(u);
                                                    u.applyScroll(u.animationScroll.scrollPosition.get() + a * e);
                                                })(e.screenX > n.getBoundingClientRect().x ? lu.Prev : lu.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: p,
                                },
                                s().createElement('div', { ref: E, className: h()(Cu, e.thumb) }),
                                s().createElement('div', { className: h()(_u, e.rail) }),
                            ),
                            s().createElement('div', {
                                className: h()(mu, e.rightButton),
                                onMouseDown: (u) => {
                                    u.target.classList.contains(gu) || 0 !== u.button || (ru('play'), g(lu.Prev));
                                },
                                onMouseUp: f,
                                ref: l,
                                onMouseEnter: p,
                            }),
                        );
                    }),
                    wu = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    xu = ({
                        children: u,
                        api: e,
                        className: t,
                        barClassNames: n,
                        areaClassName: r,
                        classNames: a,
                        scrollClassName: o,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const E = (0, i.useMemo)(() => {
                                const u = n || {};
                                return Object.assign({}, u, { base: h()(wu.base, u.base) });
                            }, [n]),
                            A = (0, i.useMemo)(() => Object.assign({}, e, { handleMouseWheel: () => {} }), [e]);
                        return s().createElement(
                            'div',
                            { className: h()(wu.defaultScroll, t), onWheel: e.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: h()(wu.defaultScrollArea, r) },
                                s().createElement(yu, { className: o, api: A, classNames: a }, u),
                            ),
                            s().createElement(bu, { getStepByRailClick: l, api: e, onDrag: c, classNames: E }),
                        );
                    },
                    yu = ({ api: u, className: e, classNames: t, children: n }) => (
                        (0, i.useEffect)(() => J(u.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: h()(wu.base, e) },
                            s().createElement(
                                'div',
                                {
                                    className: h()(wu.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: u.handleMouseWheel,
                                    ref: u.wrapperRef,
                                },
                                s().createElement(
                                    'div',
                                    { className: h()(wu.content, null == t ? void 0 : t.content), ref: u.contentRef },
                                    n,
                                ),
                            ),
                        )
                    );
                (yu.Bar = bu), (yu.Default = xu);
                const Su = Eu({
                        getBounds: (u) => [0, u.scrollHeight - u.offsetHeight],
                        getContainerSize: (u) => u.scrollHeight,
                        getWrapperSize: (u) => u.offsetHeight,
                        setScrollPosition: (u, e) => {
                            u.scrollTop = e.value.scrollPosition;
                        },
                        getDirection: (u) => (u.deltaY > 1 ? lu.Next : lu.Prev),
                    }),
                    Mu = 'VerticalBar_base_f3',
                    Lu = 'VerticalBar_base__nonActive_42',
                    ku = 'VerticalBar_topButton_d7',
                    Tu = 'VerticalBar_bottomButton_06',
                    Nu = 'VerticalBar_track_df',
                    Ru = 'VerticalBar_thumb_32',
                    Ou = 'VerticalBar_rail_43',
                    Hu = 'disable',
                    Pu = () => {},
                    Wu = { pending: !1, offset: 0 },
                    Iu = (u) => {
                        var e;
                        return 0.9 * (null != (e = u.getWrapperSize()) ? e : 0);
                    },
                    Gu = (u, e) => {
                        u.contentRef.current && e(u.contentRef.current);
                    },
                    $u = (u, e) => Math.max(20, u.offsetHeight * e),
                    zu = (0, i.memo)(({ api: u, classNames: e = {}, getStepByRailClick: t = Iu, onDrag: n = Pu }) => {
                        const r = (0, i.useRef)(null),
                            o = (0, i.useRef)(null),
                            l = (0, i.useRef)(null),
                            c = (0, i.useRef)(null),
                            E = (0, i.useRef)(null),
                            A = u.stepTimeout || 100,
                            F = (0, i.useState)(Wu),
                            D = F[0],
                            d = F[1],
                            m = (0, i.useCallback)(
                                (u) => {
                                    d(u),
                                        E.current && n({ type: u.pending ? 'dragStart' : 'dragEnd', thumb: E.current });
                                },
                                [n],
                            ),
                            B = tu(() => {
                                const e = E.current,
                                    t = c.current,
                                    n = u.getWrapperSize(),
                                    a = u.getContainerSize();
                                if (!(n && a && e && t)) return;
                                const i = Math.min(1, n / a);
                                return (
                                    (e.style.height = `${$u(t, i)}px`),
                                    (e.style.display = 'flex'),
                                    r.current &&
                                        (1 === i ? r.current.classList.add(Lu) : r.current.classList.remove(Lu)),
                                    i
                                );
                            }),
                            C = tu(() => {
                                const e = c.current,
                                    t = E.current,
                                    n = u.getWrapperSize(),
                                    r = u.getContainerSize();
                                if (!(n && e && t && r)) return;
                                const a = u.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, n / r),
                                    s = uu(0, 1, a / (r - n)),
                                    A = (e.offsetHeight - $u(e, i)) * s;
                                (t.style.transform = `translateY(${0 | A}px)`),
                                    ((u) => {
                                        if (o.current && l.current && c.current && E.current) {
                                            if (0 === Math.round(u))
                                                return o.current.classList.add(Hu), void l.current.classList.remove(Hu);
                                            if (
                                                ((e = c.current),
                                                (t = E.current),
                                                u - (e.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return o.current.classList.remove(Hu), void l.current.classList.add(Hu);
                                            var e, t;
                                            o.current.classList.remove(Hu), l.current.classList.remove(Hu);
                                        }
                                    })(A);
                            }),
                            _ = tu(() => {
                                Gu(u, () => {
                                    B(), C();
                                });
                            });
                        (0, i.useEffect)(() => J(_)),
                            (0, i.useEffect)(() => {
                                const e = () => {
                                    Gu(u, () => {
                                        C();
                                    });
                                };
                                let t = Pu;
                                const n = () => {
                                    t(), (t = J(_));
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
                            }, [u]),
                            (0, i.useEffect)(() => {
                                if (!D.pending) return;
                                const e = a.O.client.events.mouse.up(() => {
                                        m(Wu);
                                    }),
                                    t = a.O.client.events.mouse.move(([e]) => {
                                        Gu(u, (t) => {
                                            const r = c.current,
                                                a = E.current,
                                                i = u.getContainerSize();
                                            if (!r || !a || !i) return;
                                            const s = e.screenY - D.offset - r.getBoundingClientRect().y,
                                                o = (s / r.offsetHeight) * i;
                                            u.scrollPosition.start({
                                                scrollPosition: u.clampPosition(t, o),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: a, thumbOffset: s, contentOffset: o });
                                        });
                                    });
                                return () => {
                                    e(), t();
                                };
                            }, [u, D.offset, D.pending, n, m]);
                        const g = nu((e) => u.applyStepTo(e), A, [u]),
                            f = g[0],
                            p = g[1];
                        (0, i.useEffect)(
                            () => (
                                document.addEventListener('mouseup', p, !0),
                                () => document.removeEventListener('mouseup', p, !0)
                            ),
                            [p],
                        );
                        const v = (u) => {
                            u.target.classList.contains(Hu) || ru('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: h()(Mu, e.base), ref: r, onWheel: u.handleMouseWheel },
                            s().createElement('div', {
                                className: h()(ku, e.topButton),
                                onMouseDown: (u) => {
                                    u.target.classList.contains(Hu) || 0 !== u.button || (ru('play'), f(lu.Next));
                                },
                                ref: o,
                                onMouseEnter: v,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: h()(Nu, e.track),
                                    onMouseDown: (e) => {
                                        const n = E.current;
                                        if (n && 0 === e.button)
                                            if ((ru('play'), e.target === n))
                                                m({ pending: !0, offset: e.screenY - n.getBoundingClientRect().y });
                                            else {
                                                ((e) => {
                                                    E.current &&
                                                        Gu(u, (n) => {
                                                            if (!n) return;
                                                            const r = t(u),
                                                                a = u.clampPosition(n, n.scrollTop + r * e);
                                                            u.applyScroll(a);
                                                        });
                                                })(e.screenY > n.getBoundingClientRect().y ? lu.Prev : lu.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: v,
                                },
                                s().createElement('div', { ref: E, className: h()(Ru, e.thumb) }),
                                s().createElement('div', { className: h()(Ou, e.rail) }),
                            ),
                            s().createElement('div', {
                                className: h()(Tu, e.bottomButton),
                                onMouseDown: (u) => {
                                    u.target.classList.contains(Hu) || 0 !== u.button || (ru('play'), f(lu.Prev));
                                },
                                onMouseUp: p,
                                ref: l,
                                onMouseEnter: v,
                            }),
                        );
                    }),
                    Uu = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Vu = ({
                        children: u,
                        api: e,
                        className: t,
                        barClassNames: n,
                        areaClassName: r,
                        scrollClassName: a,
                        scrollClassNames: o,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const E = (0, i.useMemo)(() => {
                                const u = n || {};
                                return Object.assign({}, u, { base: h()(Uu.base, u.base) });
                            }, [n]),
                            A = (0, i.useMemo)(() => Object.assign({}, e, { handleMouseWheel: () => {} }), [e]);
                        return s().createElement(
                            'div',
                            { className: h()(Uu.defaultScroll, t), onWheel: e.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: h()(Uu.area, r) },
                                s().createElement(ju, { className: a, classNames: o, api: A }, u),
                            ),
                            s().createElement(zu, { getStepByRailClick: l, api: e, onDrag: c, classNames: E }),
                        );
                    },
                    ju = ({ className: u, classNames: e, children: t, api: n }) => (
                        (0, i.useEffect)(() => J(n.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: h()(Uu.base, u), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: h()(Uu.content, null == e ? void 0 : e.content), ref: n.contentRef },
                                t,
                            ),
                        )
                    );
                ju.Default = Vu;
                const qu = { Vertical: r, Horizontal: n },
                    Ku = {
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
                        base__firstHover: 'CButton_base__firstHover_d5',
                        base__highlightActive: 'CButton_base__highlightActive_b2',
                        content: 'CButton_content_cc',
                    };
                let Yu, Xu;
                !(function (u) {
                    (u.main = 'main'),
                        (u.primary = 'primary'),
                        (u.primaryGreen = 'primaryGreen'),
                        (u.primaryRed = 'primaryRed'),
                        (u.secondary = 'secondary'),
                        (u.ghost = 'ghost');
                })(Yu || (Yu = {})),
                    (function (u) {
                        (u.extraSmall = 'extraSmall'), (u.small = 'small'), (u.medium = 'medium'), (u.large = 'large');
                    })(Xu || (Xu = {}));
                const Zu = ({
                    children: u,
                    size: e,
                    isFocused: t,
                    type: n,
                    disabled: r,
                    mixClass: a,
                    soundHover: o,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: E,
                    onMouseDown: A,
                    onMouseUp: F,
                    onMouseLeave: D,
                    onClick: d,
                }) => {
                    const m = (0, i.useRef)(null),
                        B = (0, i.useState)(t),
                        C = B[0],
                        _ = B[1],
                        g = (0, i.useState)(!1),
                        f = g[0],
                        p = g[1],
                        v = (0, i.useState)(!1),
                        b = v[0],
                        w = v[1],
                        x = (0, i.useCallback)(() => {
                            r || (m.current && (m.current.focus(), _(!0)));
                        }, [r]),
                        y = (0, i.useCallback)(
                            (u) => {
                                C && null !== m.current && !m.current.contains(u.target) && _(!1);
                            },
                            [C],
                        ),
                        S = (0, i.useCallback)(
                            (u) => {
                                r || (d && d(u));
                            },
                            [r, d],
                        ),
                        M = (0, i.useCallback)(
                            (u) => {
                                r || (null !== o && ru(o), c && c(u), w(!0));
                            },
                            [r, o, c],
                        ),
                        L = (0, i.useCallback)(
                            (u) => {
                                E && E(u);
                            },
                            [E],
                        ),
                        k = (0, i.useCallback)(
                            (u) => {
                                r || (F && F(u), p(!1));
                            },
                            [r, F],
                        ),
                        T = (0, i.useCallback)(
                            (u) => {
                                r || (null !== l && ru(l), A && A(u), t && x(), p(!0));
                            },
                            [r, l, A, x, t],
                        ),
                        N = (0, i.useCallback)(
                            (u) => {
                                r || (D && D(u), p(!1));
                            },
                            [r, D],
                        ),
                        O = h()(
                            Ku.base,
                            Ku[`base__${n}`],
                            {
                                [Ku.base__disabled]: r,
                                [Ku[`base__${e}`]]: e,
                                [Ku.base__focus]: C,
                                [Ku.base__highlightActive]: f,
                                [Ku.base__firstHover]: b,
                            },
                            a,
                        ),
                        H = h()(Ku.state, Ku.state__default);
                    return (
                        (0, i.useEffect)(
                            () => (
                                document.addEventListener('mousedown', y),
                                () => {
                                    document.removeEventListener('mousedown', y);
                                }
                            ),
                            [y],
                        ),
                        (0, i.useEffect)(() => {
                            _(t);
                        }, [t]),
                        s().createElement(
                            'div',
                            {
                                ref: m,
                                className: O,
                                onMouseEnter: M,
                                onMouseMove: L,
                                onMouseUp: k,
                                onMouseDown: T,
                                onMouseLeave: N,
                                onClick: S,
                            },
                            n !== Yu.ghost &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: Ku.back }),
                                    s().createElement('span', { className: Ku.texture }),
                                ),
                            s().createElement(
                                'span',
                                { className: H },
                                s().createElement('span', { className: Ku.stateDisabled }),
                                s().createElement('span', { className: Ku.stateHighlightHover }),
                                s().createElement('span', { className: Ku.stateHighlightActive }),
                            ),
                            s().createElement(
                                'span',
                                { className: Ku.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                u,
                            ),
                        )
                    );
                };
                Zu.defaultProps = { type: Yu.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const Qu = (0, i.memo)(Zu);
                var Ju = t(281);
                let ue;
                function ee(u, e) {
                    return u.replace(/\{\w+\}/g, (u) => String(e[u.slice(1, -1)]));
                }
                !(function (u) {
                    (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
                })(ue || (ue = {}));
                const te = (u) => u.replace(/&nbsp;/g, ' '),
                    ne = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    re = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    ae = (u, e, t = ue.left) => u.split(e).reduce(t === ue.left ? ne : re, []),
                    ie = (() => {
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
                    se = ['zh_cn', 'zh_sg', 'zh_tw'],
                    oe = (u, e = ue.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (se.includes(t)) return ie(u);
                        if ('ja' === t) {
                            return (0, Ju.D4)()
                                .parse(u)
                                .map((u) => te(u));
                        }
                        return ((u, e = ue.left) => {
                            let t = [];
                            const n =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                r = te(u);
                            return ae(r, /( )/, e).forEach((u) => (t = t.concat(ae(u, n, ue.left)))), t;
                        })(u, e);
                    },
                    le = 'FormatText_base_d0',
                    ce = ({ binding: u, text: e = '', classMix: t, alignment: n = ue.left, formatWithBrackets: r }) => {
                        if (null === e) return console.error("FormatText was supplied with 'null'"), null;
                        const a = r && u ? ee(e, u) : e;
                        return s().createElement(
                            i.Fragment,
                            null,
                            a.split('\n').map((e, r) =>
                                s().createElement(
                                    'div',
                                    { className: h()(le, t), key: `${e}-${r}` },
                                    ((u, e, t) =>
                                        u.split(/%\((.*?)\)(?:[sd])?/g).map((u) => (t && u in t ? t[u] : oe(u, e))))(
                                        e,
                                        n,
                                        u,
                                    ).map((u, e) => s().createElement(i.Fragment, { key: `${e}-${u}` }, u)),
                                ),
                            ),
                        );
                    };
                let Ee;
                !(function (u) {
                    (u.None = ''),
                        (u.Tiny = 'tiny'),
                        (u.Small = 'small'),
                        (u.Medium = 'medium'),
                        (u.Large = 'large'),
                        (u.Huge = 'huge');
                })(Ee || (Ee = {}));
                const Ae = (u, e) => u.getBoundingClientRect().top >= e,
                    Fe = (u, e) => {
                        const t = u.current;
                        if (t) {
                            const u = t.getBoundingClientRect(),
                                n = u.top + e,
                                r = Array.from(t.children);
                            if (r.length) {
                                const e = ((u, e) => {
                                    const t = u.length - 1;
                                    if (!Ae(u[t], e)) return -1;
                                    let n = 0,
                                        r = t - 1,
                                        a = !1;
                                    for (; r - n > 1; ) {
                                        const t = n + Math.floor(0.5 * (r - n + 1));
                                        (a = Ae(u[t], e)), a ? (r = t) : (n = t);
                                    }
                                    return a || Ae(u[r], e) ? n : r;
                                })(r, n);
                                if (e > 0) {
                                    const t = r[e].getBoundingClientRect();
                                    return u.right - t.right < 16 ? e : e + 1;
                                }
                            }
                        }
                        return -1;
                    },
                    De = 'ShortenedText_base_fe',
                    de = 'ShortenedText_base__shown_af',
                    me = ({ blocks: u, linesCount: e = 2, mediaSize: t }) => {
                        const n = (0, i.useState)(u),
                            r = n[0],
                            o = n[1],
                            l = (0, i.useState)({ width: 0, height: 0 }),
                            c = l[0],
                            E = l[1],
                            A = (0, i.useRef)(null),
                            F = (0, i.useRef)({ shortened: !1 }),
                            D = (0, i.useCallback)(() => {
                                (0, G.Eu)().then(() => {
                                    const u = ((u) => {
                                        const e = u.current;
                                        return e ? window.getComputedStyle(e).getPropertyValue('line-height') : '';
                                    })(A);
                                    if (u) {
                                        const t = Number(u.split('rem')[0]),
                                            n = A.current;
                                        if (n && isFinite(t)) {
                                            const u = a.O.view.remToPx(e * t);
                                            E({ height: u, width: n.getBoundingClientRect().width });
                                        }
                                    }
                                });
                            }, [e]);
                        (0, i.useEffect)(() => {
                            if (u.length) return F.current.shortened && (F.current.shortened = !1), J(D);
                        }, [u, t, D]),
                            (0, i.useEffect)(() => {
                                if (c.height && !F.current.shortened) {
                                    const e = Fe(A, c.height);
                                    if (-1 !== e) {
                                        const t = u.slice(0, e);
                                        t.push(s().createElement('span', { key: e }, '...')),
                                            o(t),
                                            (F.current.shortened = !0);
                                    }
                                }
                            }, [u, c, t]);
                        const d = (0, i.useMemo)(() => (c.height ? { maxHeight: `${c.height}rem` } : {}), [c.height]);
                        return s().createElement('div', { ref: A, className: h()(De, c.height && de), style: d }, r);
                    },
                    Be = {
                        paragraph: 'TaggedText_paragraph_7f',
                        paragraph__left: 'TaggedText_paragraph__left_6f',
                        paragraph__right: 'TaggedText_paragraph__right_01',
                        paragraph__center: 'TaggedText_paragraph__center_ab',
                        neutral: 'TaggedText_neutral_f3',
                        expTag: 'TaggedText_expTag_81',
                        stats: 'TaggedText_stats_f2',
                        colorTag: 'TaggedText_colorTag_4a',
                    };
                function Ce() {
                    Ce = function (u, e) {
                        return new t(u, void 0, e);
                    };
                    var u = RegExp.prototype,
                        e = new WeakMap();
                    function t(u, n, r) {
                        var a = new RegExp(u, n);
                        return e.set(a, r || e.get(u)), ge(a, t.prototype);
                    }
                    function n(u, t) {
                        var n = e.get(t);
                        return Object.keys(n).reduce(function (e, t) {
                            return (e[t] = u[n[t]]), e;
                        }, Object.create(null));
                    }
                    return (
                        _e(t, RegExp),
                        (t.prototype.exec = function (e) {
                            var t = u.exec.call(this, e);
                            return t && (t.groups = n(t, this)), t;
                        }),
                        (t.prototype[Symbol.replace] = function (t, r) {
                            if ('string' == typeof r) {
                                var a = e.get(this);
                                return u[Symbol.replace].call(
                                    this,
                                    t,
                                    r.replace(/\$<([^>]+)>/g, function (u, e) {
                                        return '$' + a[e];
                                    }),
                                );
                            }
                            if ('function' == typeof r) {
                                var i = this;
                                return u[Symbol.replace].call(this, t, function () {
                                    var u = arguments;
                                    return (
                                        'object' != typeof u[u.length - 1] && (u = [].slice.call(u)).push(n(u, i)),
                                        r.apply(this, u)
                                    );
                                });
                            }
                            return u[Symbol.replace].call(this, t, r);
                        }),
                        Ce.apply(this, arguments)
                    );
                }
                function _e(u, e) {
                    if ('function' != typeof e && null !== e)
                        throw new TypeError('Super expression must either be null or a function');
                    (u.prototype = Object.create(e && e.prototype, {
                        constructor: { value: u, writable: !0, configurable: !0 },
                    })),
                        e && ge(u, e);
                }
                function ge(u, e) {
                    return (
                        (ge =
                            Object.setPrototypeOf ||
                            function (u, e) {
                                return (u.__proto__ = e), u;
                            }),
                        ge(u, e)
                    );
                }
                function fe(u) {
                    const e = [te(u)];
                    let t = 0;
                    for (; t < e.length; ) {
                        const u = e[t];
                        if ('string' == typeof u) {
                            const n = Ce(/\{(.*)Open\}(.*?)\{\1Close\}/, { tag: 1 }).exec(u);
                            if (n) {
                                const r = u.split(n[0]);
                                let a = 1;
                                const i = n[2]
                                    .split(' ')
                                    .map(
                                        (u, e, r) => (
                                            (u = r.length - 1 === e ? u : u + ' '),
                                            s().createElement(
                                                'span',
                                                { key: `sub${t}-${a}-${e}`, className: Be[n[1]] },
                                                u,
                                            )
                                        ),
                                    );
                                for (; a < r.length; ) r.splice(a, 0, ...i), (a += i.length + 1);
                                '' === r[0] && r.splice(0, 1), e.splice(t, 1, ...r);
                            } else if (u.substr(0, u.length - 1).includes(' ')) {
                                const n = u.split(' ').map((u, e, t) => (t.length - 1 === e ? u : u + ' '));
                                e.splice(t, 1, ...n), (t += n.length);
                            } else t++;
                        } else t++;
                    }
                    return e;
                }
                const he = ({ text: u, align: e, classMix: t }) => {
                    const n = h()(Be.paragraph, Be[`paragraph__${e}`]),
                        r = u.split('\n');
                    return s().createElement(
                        'div',
                        { className: t },
                        r.map((u, e) => s().createElement('div', { key: e, className: n }, fe(u))),
                    );
                };
                he.defaultProps = { align: 'left' };
                const pe = 'Alert_base_c1',
                    ve = 'Alert_icon_80',
                    be = 'Alert_text_cd',
                    we = ({ text: u }) =>
                        s().createElement(
                            'div',
                            { className: pe },
                            s().createElement('i', { className: ve }),
                            s().createElement('span', { className: be }, u),
                        ),
                    xe = 'InventoryInfo_base_ee',
                    ye = 'InventoryInfo_icon_5c',
                    Se = 'InventoryInfo_text_35',
                    Me = ({ text: u }) =>
                        s().createElement(
                            'div',
                            { className: xe },
                            s().createElement('i', { className: ye }),
                            s().createElement('span', { className: Se }, u),
                        ),
                    Le = 'InfoBlock_price_ec',
                    ke = 'InfoBlock_price__disabled_59',
                    Te = 'InfoBlock_label_38',
                    Ne = 'InfoBlock_tokenIcon_ff',
                    Re = 'InfoBlock_inventoryInHangar_b5',
                    Oe = ({ inventoryCount: u, isDisabled: e, price: t, isNotEnoughMoney: n, tokenIcon: r }) => {
                        const a = u > 0 && e,
                            i = t > 0,
                            o = r || R.images.gui.maps.icons.offers.token(),
                            l = h()(Le, n && ke);
                        return s().createElement(
                            s().Fragment,
                            null,
                            a &&
                                s().createElement(
                                    'div',
                                    { className: Re },
                                    s().createElement(Me, { text: R.strings.offers.giftsWindow.inHangar() }),
                                ),
                            i &&
                                s().createElement(
                                    'div',
                                    { className: l },
                                    s().createElement('div', { className: Te }, t),
                                    s().createElement('i', { className: Ne, style: { backgroundImage: `url(${o})` } }),
                                ),
                        );
                    },
                    He = 'RentInfo_base_21',
                    Pe = 'RentInfo_icon_b0',
                    We = 'RentInfo_text_65',
                    Ie = R.strings.offers.giftsWindow.rent,
                    Ge = { time: Ie.days(), wins: Ie.wins(), battles: Ie.battles() },
                    $e = ({ amount: u, type: e }) => {
                        const t = (0, i.useMemo)(
                                () => ({ value: s().createElement('span', { key: 'value' }, u) }),
                                [u],
                            ),
                            n = (0, i.useMemo)(() => {
                                const u = Ge[e];
                                return { amount: s().createElement(ce, { key: 'amount', text: u, binding: t }) };
                            }, [e, t]);
                        return s().createElement(
                            'div',
                            { className: He },
                            s().createElement('i', { className: Pe }),
                            s().createElement(ce, {
                                classMix: We,
                                text: R.strings.offers.giftsWindow.rent.title(),
                                binding: n,
                            }),
                        );
                    },
                    ze = 'Gift_base_94',
                    Ue = 'Gift_base__disabled_20',
                    Ve = 'Gift_base__small_e5',
                    je = 'Gift_overlay_36',
                    qe = 'Gift_flag_90',
                    Ke = 'Gift_info_4e',
                    Ye = 'Gift_availableCount_74',
                    Xe = 'Gift_rent_28',
                    Ze = 'Gift_bottomLabels_b9',
                    Qe = 'Gift_base__noAdditionalInfo_19',
                    Je = 'Gift_bottomInfo_70',
                    ut = 'Gift_bottomInfo__narrow_45',
                    et = 'Gift_availableCountLabel_07',
                    tt = 'Gift_button_d5',
                    nt = 'Gift_alert_4f',
                    rt = 'Gift_title_52',
                    at = 'Gift_titleStatic_aa',
                    it = 'Gift_description_6d',
                    st = 'Gift_disabled_f4',
                    ot = 'Gift_disabledBg_7a',
                    lt = 'Gift_icon_34',
                    ct = 'Gift_icon__withCount_a6',
                    Et = 'Gift_count_a4',
                    At = 'Gift_countLabel_3c',
                    Ft = 'Gift_highlight_d1',
                    Dt = (u) => {
                        const e = u.id,
                            t = u.title,
                            n = u.description,
                            r = u.icon,
                            a = u.nationFlag,
                            o = u.count,
                            l = u.highlight,
                            c = u.rentType,
                            E = u.rentValue,
                            A = u.inventoryCount,
                            F = u.isDisabled,
                            D = u.buttonLabel,
                            d = u.onClick,
                            m = u.price,
                            B = u.isNotEnoughMoney,
                            C = u.availableCount,
                            _ = y().mediaSize <= b.Small,
                            g = (0, i.useCallback)(() => {
                                F || d(e);
                            }, [e, F, d]),
                            f = 'no_rent' !== c,
                            p = A > 0 && F,
                            v = o > 1,
                            w = C > 0 && !p && !f,
                            x = m > 0,
                            S = (0, i.useMemo)(() => ({ backgroundImage: `url('${r}')` }), [r]),
                            M = (0, i.useMemo)(() => (a ? { backgroundImage: `url('${a}')` } : {}), [a]),
                            L = (0, i.useMemo)(
                                () =>
                                    l
                                        ? {
                                              backgroundImage: `url(R.images.gui.maps.icons.offers.card.${_ ? 'small' : 'big'}.${l})`,
                                          }
                                        : {},
                                [l, _],
                            ),
                            k = (0, i.useMemo)(
                                () =>
                                    fe(n)
                                        .filter((u) => Boolean(u))
                                        .map((u, e) =>
                                            'string' == typeof u ? s().createElement('span', { key: e }, `${u} `) : u,
                                        ),
                                [n],
                            );
                        return s().createElement(
                            'div',
                            { className: h()(ze, F && Ue, _ && Ve, !(x || p || f) && Qe), onClick: g },
                            s().createElement('div', { className: je }),
                            s().createElement('div', { className: qe, style: M }),
                            s().createElement('div', { className: h()(lt, v && ct), style: S }),
                            s().createElement('div', { className: Ft, style: L }),
                            F
                                ? s().createElement(
                                      'div',
                                      { className: st },
                                      s().createElement('div', { className: ot }),
                                      p &&
                                          !B &&
                                          s().createElement(
                                              'div',
                                              { className: nt },
                                              s().createElement(we, {
                                                  text: R.strings.offers.giftsWindow.unavailable(),
                                              }),
                                          ),
                                  )
                                : s().createElement(
                                      'div',
                                      { className: tt },
                                      s().createElement(Qu, { type: Yu.primary, size: Xu.small }, D),
                                  ),
                            v &&
                                s().createElement(
                                    'div',
                                    { className: Et },
                                    s().createElement(ce, {
                                        classMix: At,
                                        text: R.strings.offers.giftsWindow.multiplier(),
                                        binding: { value: s().createElement('span', { key: 'count' }, o) },
                                    }),
                                ),
                            s().createElement(
                                'div',
                                { className: Ke },
                                s().createElement(he, { text: t, classMix: rt }),
                                s().createElement(
                                    'div',
                                    { className: it },
                                    s().createElement(me, {
                                        blocks: k,
                                        mediaSize: _ ? Ee.Small : Ee.Large,
                                        linesCount: _ ? 2 : 3,
                                    }),
                                ),
                                f &&
                                    s().createElement(
                                        'div',
                                        { className: Xe },
                                        s().createElement($e, { amount: E, type: c }),
                                    ),
                                s().createElement(Oe, u),
                            ),
                            s().createElement(
                                'div',
                                { className: Ze },
                                s().createElement(
                                    'div',
                                    { className: h()(Je, w && !x && ut) },
                                    s().createElement(he, { text: t, classMix: at }),
                                    f &&
                                        s().createElement(
                                            'div',
                                            { className: Xe },
                                            s().createElement($e, { amount: E, type: c }),
                                        ),
                                    s().createElement(Oe, u),
                                ),
                                w &&
                                    s().createElement(
                                        'div',
                                        { className: Ye },
                                        s().createElement(ce, {
                                            text: R.strings.offers.giftsWindow.availableCount(),
                                            binding: {
                                                count: s().createElement(
                                                    'span',
                                                    { className: et, key: 'available' },
                                                    C,
                                                ),
                                            },
                                        }),
                                    ),
                            ),
                        );
                    },
                    dt = 'Gifts_base_3f',
                    mt = 'Gifts_box_3c',
                    Bt = 'Gifts_box__extrasmall_7f',
                    Ct = 'Gifts_box__small_27',
                    _t = 'Gifts_lip_49',
                    gt = 'Gifts_lip__extrasmall_db',
                    ft = 'Gifts_lip__small_91',
                    ht = 'Gifts_bottom_12';
                function pt() {
                    return (
                        (pt =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        pt.apply(this, arguments)
                    );
                }
                const vt = () => {
                    const u = Q('model'),
                        e = u.gifts,
                        t = u.tokensIcon,
                        n = (0, i.useContext)(m),
                        r = n.extraSmallWidth,
                        a = n.smallWidth,
                        o = Su(),
                        l = (0, i.useState)(!0),
                        c = l[0],
                        E = l[1],
                        A = (0, i.useCallback)(
                            (u) => {
                                e.onItemClicked({ index: u });
                            },
                            [e],
                        ),
                        F = tu(() => {
                            (() => {
                                const u = o.getBounds()[0],
                                    e = o.animationScroll.scrollPosition.get();
                                E(e === u);
                            })();
                        });
                    return (
                        (0, i.useEffect)(
                            () => (
                                o.events.on('change', F),
                                o.events.on('recalculateContent', F),
                                () => {
                                    o.events.off('change', F), o.events.off('recalculateContent', F);
                                }
                            ),
                            [o.events, F],
                        ),
                        s().createElement(
                            'div',
                            { className: dt },
                            !c && s().createElement('div', { className: h()(_t, r && gt, a && ft) }),
                            s().createElement(
                                qu.Vertical.Area.Default,
                                { api: o },
                                s().createElement(
                                    'div',
                                    { className: h()(mt, r && Bt, a && Ct) },
                                    e.items.map(({ value: u }) =>
                                        s().createElement(Dt, pt({ key: u.id, tokenIcon: t, onClick: A }, u)),
                                    ),
                                    s().createElement('div', { className: ht }),
                                ),
                            ),
                        )
                    );
                };
                let bt, wt;
                !(function (u) {
                    (u.Timer = 'timer'), (u.Countdown = 'countdown'), (u.Cooldown = 'cooldown'), (u.None = 'none');
                })(bt || (bt = {})),
                    (function (u) {
                        (u.Description = 'description'),
                            (u.Short = 'short'),
                            (u.Long = 'long'),
                            (u.Extended = 'extended');
                    })(wt || (wt = {}));
                var xt = t(613);
                const yt = 60,
                    St = 3600,
                    Mt = 86400;
                Date.now(), xt.Ew.getRegionalDateTime, xt.Ew.getFormattedDateTime;
                const Lt = () => {},
                    kt = (u = 0, e, t = 0, n = Lt) => {
                        const r = (0, i.useState)(u),
                            a = r[0],
                            s = r[1];
                        return (
                            (0, i.useEffect)(() => {
                                if (u > 0) {
                                    s(u);
                                    const r = Date.now(),
                                        a = setInterval(
                                            () => {
                                                const e = u - Math.floor((Date.now() - r) / 1e3);
                                                null !== t && e <= t ? (s(t), n && n(), clearInterval(a)) : s(e);
                                            },
                                            1e3 * (e || (u > 120 ? yt : 1)),
                                        );
                                    return () => {
                                        clearInterval(a);
                                    };
                                }
                            }, [u, e, t, n]),
                            a
                        );
                    },
                    Tt = (G.Sw.instance, kt),
                    Nt = 'Countdown_base_fe',
                    Rt = 'Countdown_icon_8b',
                    Ot = 'Countdown_description_8d',
                    Ht = (u) => u.toString().padStart(2, '0'),
                    Pt = (u, e) => {
                        switch (e) {
                            case wt.Description:
                                return ((u, e = !0) =>
                                    u.days > 7 && e
                                        ? ee(R.strings.common.duration.days(), { days: u.days })
                                        : u.days >= 1
                                          ? 0 === u.hours
                                              ? ee(R.strings.common.duration.days(), { days: u.days })
                                              : `${ee(R.strings.common.duration.days(), { days: u.days })} ${ee(R.strings.common.duration.hours(), { hours: u.hours })}`
                                          : u.hours >= 1
                                            ? 0 === u.minutes
                                                ? ee(R.strings.common.duration.hours(), { hours: u.hours })
                                                : `${ee(R.strings.common.duration.hours(), { hours: u.hours })} ${ee(R.strings.common.duration.minutes(), { minutes: u.minutes })}`
                                            : ee(R.strings.common.duration.minutes(), { minutes: u.minutes || 1 }))(u);
                            case wt.Short:
                                return `${Ht(u.minutes)}:${Ht(u.seconds)}`;
                            case wt.Long:
                                return `${Ht(u.hours)}:${Ht(u.minutes)}:${Ht(u.seconds)}`;
                            case wt.Extended:
                                return `${ee(R.strings.common.duration.days(), { days: u.days })} | ${Ht(u.hours)}:${Ht(u.minutes)}:${Ht(u.seconds)}`;
                        }
                    },
                    Wt = R.images.gui.maps.icons.components.countdown,
                    It = (u, e) => {
                        const t = 2 === e ? Wt.big : Wt;
                        switch (u) {
                            case bt.Timer:
                                return t.clock();
                            case bt.Countdown:
                                return t.hourglass();
                            case bt.Cooldown:
                                return t.lock();
                        }
                    },
                    Gt = (0, i.memo)(
                        ({
                            duration: u,
                            icon: e = bt.Timer,
                            style: t = wt.Description,
                            onTimeReached: n,
                            className: r = '',
                            classNames: o = {},
                        }) => {
                            const l = t !== wt.Description ? 1 : void 0,
                                c = Tt(u, l),
                                E = (() => {
                                    const u = (0, i.useState)(a.O.view.getScale()),
                                        e = u[0],
                                        t = u[1];
                                    return (
                                        (0, i.useEffect)(() => {
                                            const u = () => {
                                                t(a.O.view.getScale());
                                            };
                                            return (
                                                window.addEventListener('resize', u),
                                                () => {
                                                    window.removeEventListener('resize', u);
                                                }
                                            );
                                        }, []),
                                        e
                                    );
                                })();
                            n && n[c] && n[c]();
                            const A = Pt(
                                (function (u = 0) {
                                    let e = u;
                                    const t = Math.trunc(e / Mt);
                                    e -= t * Mt;
                                    const n = Math.trunc(e / St);
                                    e -= n * St;
                                    const r = Math.trunc(e / yt);
                                    return (e -= r * yt), { days: t, hours: n, minutes: r, seconds: e };
                                })(c),
                                t,
                            );
                            return s().createElement(
                                'div',
                                { className: h()(Nt, r) },
                                e !== bt.None &&
                                    s().createElement('div', {
                                        className: h()(Rt, o.icon),
                                        style: { backgroundImage: `url('${It(e, E)}')` },
                                    }),
                                s().createElement('div', { className: h()(Ot, o.text) }, A),
                            );
                        },
                    ),
                    $t = {
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
                    zt = [
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
                function Ut() {
                    return (
                        (Ut =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        Ut.apply(this, arguments)
                    );
                }
                class Vt extends s().PureComponent {
                    constructor(...u) {
                        super(...u),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (u) => (e) => {
                                u && u(e),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && ru(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (u) => (e) => {
                                u && u(e), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (u) => (e) => {
                                u && u(e),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && ru(this.props.soundClick);
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
                            i = u.classNames,
                            o = u.onMouseEnter,
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
                                })(u, zt)),
                            F = h()($t.base, $t[`base__${a}`], $t[`base__${r}`], null == i ? void 0 : i.base),
                            D = h()($t.icon, $t[`icon__${a}`], $t[`icon__${r}`], null == i ? void 0 : i.icon),
                            d = h()($t.glow, null == i ? void 0 : i.glow),
                            m = h()($t.caption, $t[`caption__${a}`], null == i ? void 0 : i.caption),
                            B = h()($t.goto, null == i ? void 0 : i.goto);
                        return s().createElement(
                            'div',
                            Ut(
                                {
                                    className: F,
                                    onMouseEnter: this._onMouseEnter(o),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(E),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                A,
                            ),
                            'info' !== a && s().createElement('div', { className: $t.shine }),
                            s().createElement('div', { className: D }, s().createElement('div', { className: d })),
                            s().createElement('div', { className: m }, e),
                            n && s().createElement('div', { className: B }, n),
                        );
                    }
                }
                Vt.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const jt = 'Header_base_2d',
                    qt = 'Header_header_c7',
                    Kt = 'Header_pageBack_3d',
                    Yt = 'Header_title_5e',
                    Xt = 'Header_token_dd',
                    Zt = 'Header_tokenText_6a',
                    Qt = 'Header_tokenLabel_5b',
                    Jt = 'Header_tokenIcon_fc',
                    un = 'Header_choices_7f',
                    en = 'Header_description_9b',
                    tn = 'Header_descriptionSpacer_fd',
                    nn = 'Header_learnMore_0c',
                    rn = 'Header_learnMoreText_1f',
                    an = 'Header_learnMoreIcon_4f',
                    sn = 'Header_sign_2c',
                    on = 'Header_signText_a1',
                    ln = 'Header_signClock_74',
                    cn = 'Header_signClockIcon_70',
                    En = 'Header_signClockText_4f',
                    An = 'Header_border_40',
                    Fn = () => {
                        const u = Q('model'),
                            e = u.onBack,
                            t = u.onLearnMore,
                            n = u.name,
                            r = u.description,
                            a = u.learnMore,
                            o = u.tokens,
                            l = u.tokensIcon,
                            c = u.clicksCount,
                            E = u.expiration,
                            A = u.signImageLarge,
                            F = u.signImageSmall,
                            D = u.showPrice,
                            d = (0, i.useContext)(m),
                            B = d.extraSmallWidth || d.smallWidth,
                            C = l || R.images.gui.maps.icons.offers.token(),
                            _ = (B ? F : A) || R.images.gui.maps.icons.offers.sign(),
                            g = (0, i.useCallback)(() => {
                                e();
                            }, [e]),
                            f = (0, i.useCallback)(() => {
                                t();
                            }, [t]),
                            h = (0, i.useMemo)(
                                () =>
                                    s().createElement(
                                        'span',
                                        { className: nn, key: 'learnMore', onClick: f },
                                        s().createElement('span', { className: rn }, a),
                                        s().createElement('i', { className: an }),
                                    ),
                                [a, f],
                            ),
                            p = (0, i.useMemo)(
                                () => ({
                                    count: s().createElement('span', { className: Qt, key: 'tokens' }, o),
                                    icon: s().createElement('i', {
                                        className: Jt,
                                        style: { backgroundImage: `url(${C})` },
                                    }),
                                }),
                                [o, C],
                            ),
                            v = (0, i.useMemo)(
                                () => ({ current: s().createElement('span', { className: un, key: 'current' }, c) }),
                                [c],
                            ),
                            b = (0, i.useMemo)(() => ({ learnMore: h }), [h]),
                            w = (0, i.useMemo)(
                                () =>
                                    r
                                        ? a
                                            ? s().createElement(
                                                  'div',
                                                  { className: en },
                                                  s().createElement(ce, { text: `${r}%(learnMore)`, binding: b }),
                                              )
                                            : s().createElement('div', { className: en }, r)
                                        : a
                                          ? s().createElement('div', { className: en }, h)
                                          : s().createElement('div', { className: tn }),
                                [r, a, b, h],
                            );
                        return s().createElement(
                            'div',
                            { className: jt },
                            s().createElement(
                                'div',
                                { className: Kt },
                                s().createElement(Vt, {
                                    caption: R.strings.menu.viewHeader.backBtn.label(),
                                    goto: R.strings.offers.giftsWindow.backGoto(),
                                    side: 'left',
                                    type: 'back',
                                    onClick: g,
                                }),
                            ),
                            s().createElement(
                                'div',
                                { className: qt },
                                s().createElement('div', { className: Yt }, n),
                                s().createElement(
                                    'div',
                                    { className: Xt },
                                    D
                                        ? s().createElement(ce, {
                                              classMix: Zt,
                                              text: `${R.strings.offers.giftsWindow.tokensAvailable()}%(icon)`,
                                              binding: p,
                                          })
                                        : s().createElement(ce, {
                                              classMix: Zt,
                                              text: R.strings.offers.giftsWindow.giftsAvailable(),
                                              binding: v,
                                          }),
                                ),
                                w,
                                s().createElement('div', { className: An }),
                                s().createElement(
                                    'div',
                                    { className: sn, style: { backgroundImage: `url(${_})` } },
                                    s().createElement('div', { className: on }, R.strings.offers.giftsWindow.openFor()),
                                    s().createElement(
                                        'div',
                                        { className: ln },
                                        s().createElement('div', { className: cn }),
                                        s().createElement(Gt, {
                                            duration: E,
                                            icon: bt.None,
                                            style: wt.Description,
                                            classNames: { text: En },
                                        }),
                                    ),
                                ),
                            ),
                        );
                    },
                    Dn = 'App_base_55',
                    dn = () => {
                        const u = Q('model'),
                            e = u.background,
                            t = u.onBack;
                        var n;
                        (n = t), z(I.n.ESCAPE, n);
                        const r = (0, i.useMemo)(
                            () => ({ backgroundImage: `url('${e || 'R.images.gui.maps.icons.storage.background'}')` }),
                            [e],
                        );
                        return s().createElement(
                            g,
                            null,
                            s().createElement(
                                'div',
                                { className: Dn, style: r },
                                s().createElement(Fn, null),
                                s().createElement(vt, null),
                            ),
                        );
                    },
                    mn = 'OfferGiftsWindow_base_1d';
                a.O.view.extraSize.set(0, 35),
                    engine.whenReady.then(() => {
                        W().render(
                            s().createElement(
                                H,
                                null,
                                s().createElement('div', { className: mn }, s().createElement(dn, null)),
                            ),
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
                for (o = 0; o < deferred.length; o++) {
                    for (var [e, t, n] = deferred[o], a = !0, i = 0; i < e.length; i++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[i]))
                            ? e.splice(i--, 1)
                            : ((a = !1), n < r && (r = n));
                    if (a) {
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
        (__webpack_require__.j = 917),
        (() => {
            var u = { 917: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var n,
                        r,
                        [a, i, s] = t,
                        o = 0;
                    if (a.some((e) => 0 !== u[e])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (e && e(t); o < a.length; o++)
                        (r = a[o]), __webpack_require__.o(u, r) && u[r] && u[r][0](), (u[r] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [809], () => __webpack_require__(274));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
