(() => {
    var __webpack_modules__ = {
            926: (e) => {
                e.exports = {
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
            67: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => K });
                var r = {};
                t.r(r),
                    t.d(r, { mouse: () => A, off: () => E, on: () => d, onResize: () => l, onScaleUpdated: () => c });
                var n = {};
                t.r(n),
                    t.d(n, {
                        events: () => r,
                        getMouseGlobalPosition: () => F,
                        getSize: () => _,
                        graphicsQuality: () => g,
                    });
                var a = {};
                t.r(a), t.d(a, { getBgUrl: () => B, getTextureUrl: () => D });
                var i = {};
                function s(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                function o(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.r(i),
                    t.d(i, {
                        addModelObserver: () => L,
                        addPreloadTexture: () => x,
                        children: () => a,
                        displayStatus: () => C,
                        displayStatusIs: () => q,
                        events: () => h,
                        extraSize: () => Y,
                        forceTriggerMouseMove: () => j,
                        freezeTextureBeforeResize: () => N,
                        getBrowserTexturePath: () => T,
                        getDisplayStatus: () => $,
                        getScale: () => I,
                        getSize: () => k,
                        getViewGlobalPosition: () => O,
                        isEventHandled: () => V,
                        isFocused: () => z,
                        pxToRem: () => H,
                        remToPx: () => W,
                        resize: () => P,
                        sendEvent: () => y,
                        setAnimateWindow: () => U,
                        setEventHandled: () => G,
                        setInputPaddingsRem: () => R,
                        setSidePaddingsRem: () => M,
                        whenTutorialReady: () => X,
                    });
                const l = s('clientResized'),
                    c = s('self.onScaleUpdated'),
                    d = (e, u) => engine.on(e, u),
                    E = (e, u) => engine.off(e, u),
                    m = { down: s('mousedown'), up: s('mouseup'), move: s('mousemove') };
                const A = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function u() {
                        e.enabled && o(!1);
                    }
                    function t() {
                        e.enabled && o(!0);
                    }
                    function r() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', u),
                                  document.body.removeEventListener('mouseleave', t))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', u),
                                  document.body.addEventListener('mouseleave', t))
                            : o(!1);
                    }
                    const n = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let n = !0;
                                    const a = `mouse${u}`,
                                        i = m[u]((e) => t([e, 'outside']));
                                    function s(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, s),
                                        r(),
                                        () => {
                                            n &&
                                                (i(),
                                                window.removeEventListener(a, s),
                                                (e.listeners -= 1),
                                                r(),
                                                (n = !1));
                                        }
                                    );
                                };
                            })(t)),
                            u
                        ),
                        {},
                    );
                    return Object.assign({}, n, {
                        disable() {
                            (e.enabled = !1), r();
                        },
                        enable() {
                            (e.enabled = !0), r();
                        },
                        enableOutside() {
                            e.enabled && o(!0);
                        },
                        disableOutside() {
                            e.enabled && o(!1);
                        },
                    });
                })();
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function F(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const g = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function D(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function B(e, u, t) {
                    return `url(${D(e, u, t)})`;
                }
                const C = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
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
                    p = ['args'];
                const f = 2,
                    b = 16,
                    v = 32,
                    w = 64,
                    S = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const n = u.args,
                                a = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        n = {},
                                        a = Object.keys(e);
                                    for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                    return n;
                                })(u, p);
                            return void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, a, {
                                          arguments:
                                              ((r = n),
                                              Object.entries(r).map(([e, u]) => {
                                                  const t = 'GFValueProxy';
                                                  switch (typeof u) {
                                                      case 'number':
                                                          return { __Type: t, name: e, number: u };
                                                      case 'boolean':
                                                          return { __Type: t, name: e, bool: u };
                                                      default:
                                                          return { __Type: t, name: e, string: u.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, a));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var r;
                    },
                    y = {
                        close(e) {
                            S('popover' === e ? f : v);
                        },
                        minimize() {
                            S(w);
                        },
                        move(e) {
                            S(b, { isMouseEvent: !0, on: e });
                        },
                    };
                function x(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function R(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function T(e, u, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, r);
                }
                function L(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function M(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function k(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function P(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function O(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: W(u.x), y: W(u.y) };
                }
                function N() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function I() {
                    return viewEnv.getScale();
                }
                function H(e) {
                    return viewEnv.pxToRem(e);
                }
                function W(e) {
                    return viewEnv.remToPx(e);
                }
                function U(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function z() {
                    return viewEnv.isFocused();
                }
                function G() {
                    return viewEnv.setEventHandled();
                }
                function V() {
                    return viewEnv.isEventHandled();
                }
                function j() {
                    viewEnv.forceTriggerMouseMove();
                }
                function $() {
                    return viewEnv.getShowingStatus();
                }
                const q = Object.keys(C).reduce((e, u) => ((e[u] = () => viewEnv.getShowingStatus() === C[u]), e), {}),
                    Y = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    X = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : h.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    K = { view: i, client: n };
            },
            521: (e, u, t) => {
                'use strict';
                let r, n;
                t.d(u, { n: () => r }),
                    (function (e) {
                        (e[(e.NONE = -1)] = 'NONE'),
                            (e[(e.ALT = 165)] = 'ALT'),
                            (e[(e.ENTER = 13)] = 'ENTER'),
                            (e[(e.ESCAPE = 27)] = 'ESCAPE'),
                            (e[(e.SPACE = 32)] = 'SPACE'),
                            (e[(e.END = 35)] = 'END'),
                            (e[(e.HOME = 36)] = 'HOME'),
                            (e[(e.ARROW_LEFT = 37)] = 'ARROW_LEFT'),
                            (e[(e.ARROW_UP = 38)] = 'ARROW_UP'),
                            (e[(e.ARROW_RIGHT = 39)] = 'ARROW_RIGHT'),
                            (e[(e.ARROW_DOWN = 40)] = 'ARROW_DOWN'),
                            (e[(e.NUM_PLUS = 107)] = 'NUM_PLUS'),
                            (e[(e.NUM_MINUS = 109)] = 'NUM_MINUS'),
                            (e[(e.PLUS = 187)] = 'PLUS'),
                            (e[(e.MINUS = 189)] = 'MINUS'),
                            (e[(e.PAGE_UP = 33)] = 'PAGE_UP'),
                            (e[(e.PAGE_DOWN = 34)] = 'PAGE_DOWN'),
                            (e[(e.BACKSPACE = 8)] = 'BACKSPACE'),
                            (e[(e.DELETE = 46)] = 'DELETE'),
                            (e[(e.TAB = 9)] = 'TAB'),
                            (e[(e.KEY_N = 78)] = 'KEY_N'),
                            (e[(e.KEY_1 = 49)] = 'KEY_1'),
                            (e[(e.KEY_2 = 50)] = 'KEY_2'),
                            (e[(e.KEY_3 = 51)] = 'KEY_3'),
                            (e[(e.KEY_4 = 52)] = 'KEY_4'),
                            (e[(e.KEY_5 = 53)] = 'KEY_5'),
                            (e[(e.KEY_6 = 54)] = 'KEY_6'),
                            (e[(e.KEY_7 = 55)] = 'KEY_7'),
                            (e[(e.KEY_8 = 56)] = 'KEY_8'),
                            (e[(e.KEY_9 = 57)] = 'KEY_9');
                    })(r || (r = {})),
                    (function (e) {
                        (e.ALT = 'Alt'),
                            (e.ALT_GRAPH = 'AltGraph'),
                            (e.CAPS_LOCK = 'CapsLock'),
                            (e.CONTROL = 'Control'),
                            (e.FN = 'Fn'),
                            (e.FN_LOCK = 'FnLock'),
                            (e.META = 'Meta'),
                            (e.NUM_LOCK = 'NumLock'),
                            (e.SCROLL_LOCK = 'ScrollLock'),
                            (e.SHIFT = 'Shift'),
                            (e.SYMBOL = 'Symbol'),
                            (e.SYMBOL_LOCK = 'SymbolLock');
                    })(n || (n = {}));
            },
            358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => a });
                var r = t(67);
                class n {
                    constructor() {
                        (this._callbacks = void 0),
                            (this._updateHandler = void 0),
                            (this._views = void 0),
                            (this.clearViewCallbacks = (e) => {
                                this._views[e] &&
                                    (this._views[e].forEach((e) => {
                                        delete this._callbacks[e];
                                    }),
                                    delete this._views[e]);
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
                    addCallback(e, u, t = 0, n = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = r.O.view.addModelObserver(e, t, n);
                        return (
                            a > 0
                                ? ((this._callbacks[a] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(a) : (this._views[t] = [a])))
                                : console.error("Can't add callback for model:", e),
                            a
                        );
                    }
                    removeCallback(e, u = 0) {
                        let t = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((t = viewEnv.removeDataChangedCallback(e, u)), delete this._callbacks[e]),
                            t || console.error("Can't remove callback by id:", e),
                            t
                        );
                    }
                    _emmitDataChanged(e, u, t) {
                        t.forEach((t) => {
                            const r = this._callbacks[t];
                            void 0 !== r && r(e, u);
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
                                    this.callbacks.forEach((e) => {
                                        e(this.data);
                                    });
                            }),
                            (this.dataTracker = new _DataTracker__WEBPACK_IMPORTED_MODULE_0__.Z()),
                            (this.modelPath = path),
                            (this.callbacks = new Set()),
                            (0, _index__WEBPACK_IMPORTED_MODULE_1__.ry)().then(() => {
                                this._addCallback(path),
                                    watchingFields.forEach((e) => {
                                        this._addCallback(path + '.' + e);
                                    }),
                                    this._notifyObservers();
                            });
                    }
                    subscribe(e) {
                        this.callbacks.add(e), null !== this.data && void 0 !== this.data && e(this.data);
                    }
                    unsubscribe(e) {
                        this.callbacks.delete(e);
                    }
                    destroy() {
                        this.dataTracker.clear(), this.callbacks.clear();
                    }
                    _addCallback(e) {
                        this.dataTracker.addCallback(e, this._notifyObservers);
                    }
                }
                const __WEBPACK_DEFAULT_EXPORT__ = ViewModel;
            },
            916: (e, u, t) => {
                'use strict';
                t.d(u, { B0: () => s, ry: () => g });
                class r {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: u, callback: t }) => {
                                    let r = e.target;
                                    do {
                                        if (r === u) return;
                                        r = r.parentNode;
                                    } while (r);
                                    t();
                                });
                            });
                    }
                    static get instance() {
                        return r.__instance || (r.__instance = new r()), r.__instance;
                    }
                    register(e, u) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: u });
                    }
                    unregister(e, u) {
                        const t = e,
                            r = u;
                        (this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== r)),
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
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(s || (s = {}));
                const o = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var E = t(521),
                    m = t(67);
                const A = ['args'];
                function _(e, u, t, r, n, a, i) {
                    try {
                        var s = e[a](i),
                            o = s.value;
                    } catch (e) {
                        return void t(e);
                    }
                    s.done ? u(o) : Promise.resolve(o).then(r, n);
                }
                const F = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    g = (function () {
                        var e,
                            u =
                                ((e = function* () {
                                    return (
                                        !(!engine._BindingsReady || !engine._WindowLoaded) ||
                                        new Promise((e) => {
                                            engine.on('Ready', e);
                                        })
                                    );
                                }),
                                function () {
                                    var u = this,
                                        t = arguments;
                                    return new Promise(function (r, n) {
                                        var a = e.apply(u, t);
                                        function i(e) {
                                            _(a, r, n, i, s, 'next', e);
                                        }
                                        function s(e) {
                                            _(a, r, n, i, s, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    D = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const n = u.args,
                                a = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        n = {},
                                        a = Object.keys(e);
                                    for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                    return n;
                                })(u, A);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, a, {
                                          arguments:
                                              ((r = n),
                                              Object.entries(r).map(([e, u]) => {
                                                  const t = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof u) {
                                                      case 'number':
                                                          t.number = u;
                                                          break;
                                                      case 'boolean':
                                                          t.bool = u;
                                                          break;
                                                      default:
                                                          t.string = u.toString();
                                                  }
                                                  return t;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, a));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var r;
                    },
                    B = () => D(s.CLOSE),
                    C = (e, u) => {
                        e.keyCode === E.n.ESCAPE && u();
                    };
                var h = t(572);
                const p = n.instance,
                    f = {
                        DataTracker: a.Z,
                        ViewModel: h.Z,
                        ViewEventType: s,
                        NumberFormatType: o,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => D(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: B,
                        sendClosePopOverEvent: () => D(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            D(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, r, n = R.invalid('resId'), a) => {
                            const i = m.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                d = o.width,
                                E = o.height,
                                A = {
                                    x: m.O.view.pxToRem(l) + i.x,
                                    y: m.O.view.pxToRem(c) + i.y,
                                    width: m.O.view.pxToRem(d),
                                    height: m.O.view.pxToRem(E),
                                };
                            D(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: n,
                                direction: u,
                                bbox: F(A),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => C(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            C(e, B);
                        },
                        handleViewEvent: D,
                        onBindingsReady: g,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const r in u)
                                if (Object.prototype.hasOwnProperty.call(u, r)) {
                                    const n = Object.prototype.toString.call(u[r]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = u[r];
                                        t[r] = [];
                                        for (let u = 0; u < n.length; u++) t[r].push({ value: e(n[u].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[r] = e(u[r]))
                                            : (t[r] = u[r]);
                                }
                            return t;
                        },
                        ClickOutsideManager: p,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = f;
            },
            613: (e, u, t) => {
                'use strict';
                t.d(u, { Z5: () => r, cy: () => n });
                const r = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    n = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    };
            },
            427: (e, u, t) => {
                'use strict';
                var r = {};
                t.r(r),
                    t.d(r, {
                        Area: () => Xe,
                        Bar: () => $e,
                        DefaultScroll: () => Ye,
                        Direction: () => Re,
                        defaultSettings: () => Te,
                        useHorizontalScrollApi: () => Me,
                    });
                var n = {};
                t.r(n), t.d(n, { Area: () => mu, Bar: () => cu, Default: () => Eu, useVerticalScrollApi: () => Ke });
                var a = t(179),
                    i = t.n(a);
                const s = (e, u, t) =>
                    u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                        ? (u.extraLargeHeight && t.extraLarge) ||
                          (u.largeHeight && t.large) ||
                          (u.mediumHeight && t.medium) ||
                          (u.smallHeight && t.small) ||
                          (u.extraSmallHeight && t.extraSmall)
                            ? e
                            : null
                        : e;
                var o = t(67);
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var c;
                function d(e, u, t) {
                    const r = (function (e, u) {
                            switch (!0) {
                                case e >= u.extraLarge.width:
                                    return u.extraLarge.weight;
                                case e >= u.large.width && e < u.extraLarge.width:
                                    return u.large.weight;
                                case e >= u.medium.width && e < u.large.width:
                                    return u.medium.weight;
                                case e >= u.small.width && e < u.medium.width:
                                    return u.small.weight;
                                default:
                                    return u.extraSmall.weight;
                            }
                        })(e, t),
                        n = (function (e, u) {
                            switch (!0) {
                                case e >= u.extraLarge.height:
                                    return u.extraLarge.weight;
                                case e >= u.large.height && e < u.extraLarge.height:
                                    return u.large.weight;
                                case e >= u.medium.height && e < u.large.height:
                                    return u.medium.weight;
                                case e >= u.small.height && e < u.medium.height:
                                    return u.small.weight;
                                default:
                                    return u.extraSmall.weight;
                            }
                        })(u, t),
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
                }
                !(function (e) {
                    (e.extraLarge = 'extraLarge'),
                        (e.large = 'large'),
                        (e.medium = 'medium'),
                        (e.small = 'small'),
                        (e.extraSmall = 'extraSmall'),
                        (e.extraLargeWidth = 'extraLargeWidth'),
                        (e.largeWidth = 'largeWidth'),
                        (e.mediumWidth = 'mediumWidth'),
                        (e.smallWidth = 'smallWidth'),
                        (e.extraSmallWidth = 'extraSmallWidth'),
                        (e.extraLargeHeight = 'extraLargeHeight'),
                        (e.largeHeight = 'largeHeight'),
                        (e.mediumHeight = 'mediumHeight'),
                        (e.smallHeight = 'smallHeight'),
                        (e.extraSmallHeight = 'extraSmallHeight');
                })(c || (c = {}));
                const E = o.O.client.getSize('rem'),
                    m = E.width,
                    A = E.height,
                    _ = Object.assign({ width: m, height: A }, d(m, A, l)),
                    F = (0, a.createContext)(_),
                    g = ['children'];
                const D = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                r,
                                n = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                            return n;
                        })(e, g);
                    const r = (0, a.useContext)(F),
                        n = r.extraLarge,
                        i = r.large,
                        o = r.medium,
                        l = r.small,
                        c = r.extraSmall,
                        d = r.extraLargeWidth,
                        E = r.largeWidth,
                        m = r.mediumWidth,
                        A = r.smallWidth,
                        _ = r.extraSmallWidth,
                        D = r.extraLargeHeight,
                        B = r.largeHeight,
                        C = r.mediumHeight,
                        h = r.smallHeight,
                        p = r.extraSmallHeight,
                        f = { extraLarge: D, large: B, medium: C, small: h, extraSmall: p };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && n) return u;
                        if (t.large && i) return u;
                        if (t.medium && o) return u;
                        if (t.small && l) return u;
                        if (t.extraSmall && c) return u;
                    } else {
                        if (t.extraLargeWidth && d) return s(u, t, f);
                        if (t.largeWidth && E) return s(u, t, f);
                        if (t.mediumWidth && m) return s(u, t, f);
                        if (t.smallWidth && A) return s(u, t, f);
                        if (t.extraSmallWidth && _) return s(u, t, f);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && D) return u;
                            if (t.largeHeight && B) return u;
                            if (t.mediumHeight && C) return u;
                            if (t.smallHeight && h) return u;
                            if (t.extraSmallHeight && p) return u;
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
                (0, a.memo)(D);
                const B = (e) => {
                        const u = (0, a.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    },
                    C = ({ children: e }) => {
                        const u = (0, a.useContext)(F),
                            t = (0, a.useState)(u),
                            r = t[0],
                            n = t[1],
                            s = (0, a.useCallback)((e, u) => {
                                const t = o.O.view.pxToRem(e),
                                    r = o.O.view.pxToRem(u);
                                n(Object.assign({ width: t, height: r }, d(t, r, l)));
                            }, []),
                            c = (0, a.useCallback)(() => {
                                const e = o.O.client.getSize('px');
                                s(e.width, e.height);
                            }, [s]);
                        B(() => {
                            o.O.client.events.on('clientResized', s), o.O.client.events.on('self.onScaleUpdated', c);
                        }),
                            (0, a.useEffect)(
                                () => () => {
                                    o.O.client.events.off('clientResized', s),
                                        o.O.client.events.off('self.onScaleUpdated', c);
                                },
                                [s, c],
                            );
                        const E = (0, a.useMemo)(() => Object.assign({}, r), [r]);
                        return i().createElement(F.Provider, { value: E }, e);
                    };
                var h = t(483),
                    p = t.n(h),
                    f = t(926),
                    b = t.n(f);
                let v, w, S;
                !(function (e) {
                    (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = l.small.width)] = 'Small'),
                        (e[(e.Medium = l.medium.width)] = 'Medium'),
                        (e[(e.Large = l.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                })(v || (v = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.width)] = 'Small'),
                            (e[(e.Medium = l.medium.width)] = 'Medium'),
                            (e[(e.Large = l.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                    })(w || (w = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = l.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.height)] = 'Small'),
                            (e[(e.Medium = l.medium.height)] = 'Medium'),
                            (e[(e.Large = l.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.height)] = 'ExtraLarge');
                    })(S || (S = {}));
                const y = () => {
                        const e = (0, a.useContext)(F),
                            u = e.width,
                            t = e.height,
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return v.ExtraLarge;
                                    case e.large:
                                        return v.Large;
                                    case e.medium:
                                        return v.Medium;
                                    case e.small:
                                        return v.Small;
                                    case e.extraSmall:
                                        return v.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), v.ExtraSmall;
                                }
                            })(e),
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return w.ExtraLarge;
                                    case e.largeWidth:
                                        return w.Large;
                                    case e.mediumWidth:
                                        return w.Medium;
                                    case e.smallWidth:
                                        return w.Small;
                                    case e.extraSmallWidth:
                                        return w.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), w.ExtraSmall;
                                }
                            })(e),
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return S.ExtraLarge;
                                    case e.largeHeight:
                                        return S.Large;
                                    case e.mediumHeight:
                                        return S.Medium;
                                    case e.smallHeight:
                                        return S.Small;
                                    case e.extraSmallHeight:
                                        return S.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), S.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: r, mediaWidth: n, mediaHeight: i, remScreenWidth: u, remScreenHeight: t };
                    },
                    x = ['children', 'className'];
                function T() {
                    return (
                        (T =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        T.apply(this, arguments)
                    );
                }
                const L = {
                        [w.ExtraSmall]: '',
                        [w.Small]: b().SMALL_WIDTH,
                        [w.Medium]: `${b().SMALL_WIDTH} ${b().MEDIUM_WIDTH}`,
                        [w.Large]: `${b().SMALL_WIDTH} ${b().MEDIUM_WIDTH} ${b().LARGE_WIDTH}`,
                        [w.ExtraLarge]: `${b().SMALL_WIDTH} ${b().MEDIUM_WIDTH} ${b().LARGE_WIDTH} ${b().EXTRA_LARGE_WIDTH}`,
                    },
                    M = {
                        [S.ExtraSmall]: '',
                        [S.Small]: b().SMALL_HEIGHT,
                        [S.Medium]: `${b().SMALL_HEIGHT} ${b().MEDIUM_HEIGHT}`,
                        [S.Large]: `${b().SMALL_HEIGHT} ${b().MEDIUM_HEIGHT} ${b().LARGE_HEIGHT}`,
                        [S.ExtraLarge]: `${b().SMALL_HEIGHT} ${b().MEDIUM_HEIGHT} ${b().LARGE_HEIGHT} ${b().EXTRA_LARGE_HEIGHT}`,
                    },
                    k = {
                        [v.ExtraSmall]: '',
                        [v.Small]: b().SMALL,
                        [v.Medium]: `${b().SMALL} ${b().MEDIUM}`,
                        [v.Large]: `${b().SMALL} ${b().MEDIUM} ${b().LARGE}`,
                        [v.ExtraLarge]: `${b().SMALL} ${b().MEDIUM} ${b().LARGE} ${b().EXTRA_LARGE}`,
                    },
                    P = (e) => {
                        let u = e.children,
                            t = e.className,
                            r = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, x);
                        const n = y(),
                            a = n.mediaWidth,
                            s = n.mediaHeight,
                            o = n.mediaSize;
                        return i().createElement('div', T({ className: p()(t, L[a], M[s], k[o]) }, r), u);
                    },
                    O = ['children'];
                const N = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                r,
                                n = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                            return n;
                        })(e, O);
                    return i().createElement(C, null, i().createElement(P, t, u));
                };
                var I = t(403);
                const H = (e, u) => {
                    const t = [];
                    for (let r = 0; r < e; r++) t.push(u(r));
                    return t;
                };
                function W() {
                    return !1;
                }
                console.log;
                var U = t(174);
                function z(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return G(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return G(e, u);
                        })(e)) ||
                        (u && e && 'number' == typeof e.length)
                    ) {
                        t && (e = t);
                        var r = 0;
                        return function () {
                            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function G(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, r = new Array(u); t < u; t++) r[t] = e[t];
                    return r;
                }
                const V = (e) => (0 === e ? window : window.subViews.get(e));
                function j(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                const $ = j;
                var q = t(946);
                let Y;
                !(function (e) {
                    (e.None = 'none'), (e.Accepting = 'accepting');
                })(Y || (Y = {}));
                const X = ((e, u) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: n, children: s, mocks: l }) {
                                const c = (0, a.useRef)([]),
                                    d = (t, r, n) => {
                                        var a;
                                        const i = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = V,
                                                context: r = 'model',
                                            } = {}) {
                                                const n = new Map();
                                                function a(e, u = 0) {
                                                    viewEnv.removeDataChangedCallback(e, u)
                                                        ? n.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, u, t) => {
                                                        t.forEach((u) => {
                                                            const t = n.get(u);
                                                            void 0 !== t && t(e);
                                                        });
                                                    });
                                                });
                                                const i = (e) => {
                                                    const n = t(u),
                                                        a = r.split('.').reduce((e, u) => e[u], n);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? a
                                                        : e.split('.').reduce((e, u) => {
                                                              const t = e[u];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, a);
                                                };
                                                return {
                                                    subscribe: (t, a) => {
                                                        const s = 'string' == typeof a ? `${r}.${a}` : r,
                                                            l = o.O.view.addModelObserver(s, u, !0);
                                                        return n.set(l, t), e && t(i(a)), l;
                                                    },
                                                    readByPath: i,
                                                    createCallback: (e, u) => {
                                                        const t = i(u);
                                                        return (...u) => {
                                                            t(e(...u));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const u = i(e);
                                                        return () => {
                                                            u();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, t = z(n.keys()); !(e = t()).done; ) a(e.value, u);
                                                    },
                                                    unsubscribe: a,
                                                };
                                            })(r),
                                            s =
                                                'real' === t
                                                    ? i
                                                    : Object.assign({}, i, {
                                                          readByPath:
                                                              null != (a = null == n ? void 0 : n.getter)
                                                                  ? a
                                                                  : () => {},
                                                      }),
                                            l = (e) =>
                                                'mocks' === t ? (null == n ? void 0 : n.getter(e)) : s.readByPath(e),
                                            d = (e) => c.current.push(e),
                                            E = e({
                                                mode: t,
                                                readByPath: l,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (e, u) => {
                                                        const r = null != u ? u : l(e),
                                                            n = U.LO.box(r, { equals: W });
                                                        return (
                                                            'real' === t &&
                                                                s.subscribe(
                                                                    (0, U.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (e, u) => {
                                                        const r = null != u ? u : l(e),
                                                            n = U.LO.box(r, { equals: W });
                                                        return (
                                                            'real' === t &&
                                                                s.subscribe(
                                                                    (0, U.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (e, u) => {
                                                        const r = l(u);
                                                        if (Array.isArray(e)) {
                                                            const n = e.reduce(
                                                                (e, u) => ((e[u] = U.LO.box(r[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    s.subscribe(
                                                                        (0, U.aD)((u) => {
                                                                            e.forEach((e) => {
                                                                                n[e].set(u[e]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                n
                                                            );
                                                        }
                                                        {
                                                            const n = e,
                                                                a = Object.entries(n),
                                                                i = a.reduce(
                                                                    (e, [u, t]) => ((e[t] = U.LO.box(r[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    s.subscribe(
                                                                        (0, U.aD)((e) => {
                                                                            a.forEach(([u, t]) => {
                                                                                i[t].set(e[u]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                i
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: d,
                                            }),
                                            m = { mode: t, model: E, externalModel: s, cleanup: d };
                                        return {
                                            model: E,
                                            controls: 'mocks' === t && n ? n.controls(m) : u(m),
                                            externalModel: s,
                                            mode: t,
                                        };
                                    },
                                    E = (0, a.useRef)(!1),
                                    m = (0, a.useState)(r),
                                    A = m[0],
                                    _ = m[1],
                                    F = (0, a.useState)(() => d(r, n, l)),
                                    g = F[0],
                                    D = F[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        E.current ? D(d(A, n, l)) : (E.current = !0);
                                    }, [l, A, n]),
                                    (0, a.useEffect)(() => {
                                        _(r);
                                    }, [r]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            g.externalModel.dispose(), c.current.forEach((e) => e());
                                        },
                                        [g],
                                    ),
                                    i().createElement(t.Provider, { value: g }, s)
                                );
                            },
                            () => (0, a.useContext)(t),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const u = {
                                    root: e.object(),
                                    tabs: e.array('tabs'),
                                    rewards: e.array('rewards'),
                                    animationState: U.LO.box(Y.None),
                                },
                                t = (0, q.Om)((e) => $(u.tabs.get(), e), { equals: W }),
                                r = (0, q.Om)((e) => $(u.rewards.get(), e), { equals: W });
                            return Object.assign({}, u, { computes: { tabByIndex: t, rewardByIndex: r } });
                        },
                        ({ externalModel: e, model: u }) => {
                            const t = (0, U.aD)((e) => u.animationState.set(e));
                            return {
                                close: e.createCallbackNoArgs('onCloseClick'),
                                submit: e.createCallbackNoArgs('onOkClick'),
                                reduceReward: e.createCallback((e) => ({ type: e }), 'onRewardReduce'),
                                addReward: e.createCallback((e) => ({ type: e }), 'onRewardAdd'),
                                openTab: e.createCallback((e) => ({ type: e }), 'onTabClick'),
                                setAnimationState: t,
                            };
                        },
                    ),
                    K = (X[0], X[1]);
                let Z, Q, J, ee, ue, te, re;
                !(function (e) {
                    (e.Items = 'items'),
                        (e.Equipment = 'equipment'),
                        (e.Xp = 'xp'),
                        (e.XpFactor = 'xpFactor'),
                        (e.Blueprints = 'blueprints'),
                        (e.BlueprintsAny = 'blueprintsAny'),
                        (e.Goodies = 'goodies'),
                        (e.Berths = 'berths'),
                        (e.Slots = 'slots'),
                        (e.Tokens = 'tokens'),
                        (e.CrewSkins = 'crewSkins'),
                        (e.CrewBooks = 'crewBooks'),
                        (e.Customizations = 'customizations'),
                        (e.CreditsFactor = 'creditsFactor'),
                        (e.TankmenXp = 'tankmenXP'),
                        (e.TankmenXpFactor = 'tankmenXPFactor'),
                        (e.FreeXpFactor = 'freeXPFactor'),
                        (e.BattleToken = 'battleToken'),
                        (e.PremiumUniversal = 'premium_universal'),
                        (e.Gold = 'gold'),
                        (e.Credits = 'credits'),
                        (e.Crystal = 'crystal'),
                        (e.FreeXp = 'freeXP'),
                        (e.Premium = 'premium'),
                        (e.PremiumPlus = 'premium_plus'),
                        (e.BattlePassPoints = 'battlePassPoints'),
                        (e.BattlePassSelectToken = 'battlePassSelectToken'),
                        (e.StyleProgressToken = 'styleProgressToken'),
                        (e.TmanToken = 'tmanToken'),
                        (e.NaturalCover = 'naturalCover'),
                        (e.BpCoin = 'bpcoin'),
                        (e.BattlaPassFinalAchievement = 'dossier_achievement'),
                        (e.BattleBadge = 'dossier_badge'),
                        (e.NewYearAlbumsAccess = 'newYearAlbumsAccess'),
                        (e.NewYearFillers = 'ny22Fillers'),
                        (e.NewYearInvoice = 'newYearInvoice'),
                        (e.NewYearToyFragments = 'ny22ToyFragments'),
                        (e.NewYearSlot = 'newYearSlot'),
                        (e.BonusX5 = 'battle_bonus_x5'),
                        (e.CrewBonusX3 = 'crew_bonus_x3'),
                        (e.Vehicles = 'vehicles'),
                        (e.EpicSelectToken = 'epicSelectToken'),
                        (e.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                        (e.BattleBoosterGift = 'battleBooster_gift'),
                        (e.OptionalDevice = 'optionalDevice');
                })(Z || (Z = {})),
                    (function (e) {
                        (e.Gold = 'gold'),
                            (e.Credits = 'credits'),
                            (e.Crystal = 'crystal'),
                            (e.Premium = 'premium'),
                            (e.PremiumPlus = 'premium_plus'),
                            (e.Vehicles = 'vehicles'),
                            (e.Customizations = 'customizations'),
                            (e.Blueprints = 'blueprints'),
                            (e.BlueprintsAny = 'blueprintsAny'),
                            (e.BlueprintsFinal = 'finalBlueprints'),
                            (e.Goodies = 'goodies'),
                            (e.CrewSkins = 'crewSkins'),
                            (e.Xp = 'xp'),
                            (e.XpFactor = 'xpFactor'),
                            (e.FreeXp = 'freeXP'),
                            (e.FreeXPFactor = 'freeXPFactor'),
                            (e.TankmenXP = 'tankmenXP'),
                            (e.TankmenXPFactor = 'tankmenXPFactor'),
                            (e.DailyXPFactor = 'dailyXPFactor'),
                            (e.CreditsFactor = 'creditsFactor'),
                            (e.Items = 'items'),
                            (e.StrBonus = 'strBonus'),
                            (e.Groups = 'groups'),
                            (e.Berths = 'berths'),
                            (e.Slots = 'slots'),
                            (e.Meta = 'meta'),
                            (e.Tokens = 'tokens'),
                            (e.Dossier = 'dossier'),
                            (e.OneOf = 'oneof'),
                            (e.PremiumUniversal = 'premium_universal'),
                            (e.BadgesGroup = 'badgesGroup'),
                            (e.Entitlements = 'entitlements'),
                            (e.RankedDailyBattles = 'rankedDailyBattles'),
                            (e.RankedBonusBattles = 'rankedBonusBattles'),
                            (e.BattlePassPoints = 'battlePassPoints'),
                            (e.BattleBadge = 'dossier_badge'),
                            (e.BattleAchievement = 'dossier_achievement');
                    })(Q || (Q = {})),
                    (function (e) {
                        (e.Big = 'big'),
                            (e.Small = 'small'),
                            (e.Mini = 'mini'),
                            (e.S600x450 = 's600x450'),
                            (e.S400x300 = 's400x300'),
                            (e.S296x222 = 's296x222'),
                            (e.S232x174 = 's232x174'),
                            (e.S180x135 = 's180x135'),
                            (e.S128x100 = 's128x100'),
                            (e.S80x80 = 's80x80'),
                            (e.S48x48 = 's48x48');
                    })(J || (J = {})),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(ee || (ee = {})),
                    (function (e) {
                        (e.BATTLE_BOOSTER = 'battleBooster'),
                            (e.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (e.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (e.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (e.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (e.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (e.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (e.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (e.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4');
                    })(ue || (ue = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(te || (te = {})),
                    (function (e) {
                        (e.BATTLE_BOOSTER = 'battleBooster'),
                            (e.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (e.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (e.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (e.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (e.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (e.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (e.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (e.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4');
                    })(re || (re = {}));
                var ne = t(916);
                const ae = [
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
                function ie(e) {
                    return Object.entries(e || {}).map(([e, u]) => {
                        const t = { __Type: 'GFValueProxy', name: e };
                        switch (typeof u) {
                            case 'number':
                                t.number = u;
                                break;
                            case 'boolean':
                                t.bool = u;
                                break;
                            case 'undefined':
                                break;
                            default:
                                t.string = u.toString();
                        }
                        return t;
                    });
                }
                const se = (e, u, t = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: ne.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: r,
                                },
                                t,
                            ),
                        );
                    },
                    oe = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            r = e.args,
                            n = e.onMouseEnter,
                            i = e.onMouseLeave,
                            s = e.onMouseDown,
                            o = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            d = e.ignoreMouseClick,
                            E = void 0 !== d && d,
                            m = e.decoratorId,
                            A = void 0 === m ? 0 : m,
                            _ = e.isEnabled,
                            F = void 0 === _ || _,
                            g = e.targetId,
                            D = void 0 === g ? 0 : g,
                            B = e.onShow,
                            C = e.onHide,
                            h = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, ae);
                        const p = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            f = (0, a.useMemo)(
                                () =>
                                    D ||
                                    ((e = 1) => {
                                        const u = new Error().stack;
                                        let t,
                                            r = R.invalid('resId');
                                        return (
                                            u &&
                                                ((t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== t &&
                                                    window.subViews[t] &&
                                                    (r = window.subViews[t].id)),
                                            { caller: t, stack: u, resId: r }
                                        );
                                    })().resId,
                                [D],
                            ),
                            b = (0, a.useCallback)(() => {
                                (p.current.isVisible && p.current.timeoutId) ||
                                    (se(t, A, { isMouseEvent: !0, on: !0, arguments: ie(r) }, f),
                                    B && B(),
                                    (p.current.isVisible = !0));
                            }, [t, A, r, f, B]),
                            v = (0, a.useCallback)(() => {
                                if (p.current.isVisible || p.current.timeoutId) {
                                    const e = p.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (p.current.timeoutId = 0)),
                                        se(t, A, { on: !1 }, f),
                                        p.current.isVisible && C && C(),
                                        (p.current.isVisible = !1);
                                }
                            }, [t, A, f, C]),
                            w = (0, a.useCallback)((e) => {
                                p.current.isVisible &&
                                    ((p.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (p.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(p.current.prevTarget) && v();
                                    }, 200)));
                            }, []);
                        (0, a.useEffect)(() => {
                            const e = p.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', w, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', w, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, a.useEffect)(() => {
                                !1 === F && v();
                            }, [F, v]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', v),
                                    () => {
                                        window.removeEventListener('mouseleave', v), v();
                                    }
                                ),
                                [v],
                            );
                        return F
                            ? (0, a.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((S = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((p.current.timeoutId = window.setTimeout(b, c ? 100 : 400)),
                                                      n && n(e),
                                                      S && S(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              v(), null == i || i(u), null == e || e(u);
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              !1 === E && v(), null == o || o(u), null == e || e(u);
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              !1 === E && v(), null == s || s(u), null == e || e(u);
                                          })(u.props.onMouseDown),
                                      },
                                      h,
                                  ),
                              )
                            : u;
                        var S;
                    },
                    le = ['children'];
                function ce() {
                    return (
                        (ce =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        ce.apply(this, arguments)
                    );
                }
                const de = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                r,
                                n = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                            return n;
                        })(e, le);
                    return i().createElement(
                        oe,
                        ce(
                            {
                                contentId:
                                    R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                        'resId',
                                    ),
                                ignoreShowDelay: !0,
                            },
                            t,
                        ),
                        u,
                    );
                };
                function Ee(e) {
                    engine.call('PlaySound', e);
                }
                t(281);
                let me;
                function Ae(e, u) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const t = 0 === e.indexOf('%') ? 2 : 1;
                        return String(u[e.slice(t, -t)]);
                    });
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(me || (me = {}));
                const _e = (e) => e.replace(/&nbsp;/g, ' '),
                    Fe =
                        ((() => {
                            const e = new RegExp(
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
                        })(),
                        (e, u = J.Small) => `R.images.gui.maps.icons.quests.bonuses.${u}.${e}_gift`),
                    ge = (e, u = 's180x135', t = 'R.images.gui.maps.icons.selectableReward.reward') => `${t}.${u}.${e}`,
                    De = {
                        base: 'Category_base_01',
                        glow: 'Category_glow_8a',
                        glow__show: 'Category_glow__show_c1',
                        title: 'Category_title_e6',
                        base__selected: 'Category_base__selected_75',
                        imageContainer: 'Category_imageContainer_a0',
                        image: 'Category_image_12',
                        base__completed: 'Category_base__completed_fb',
                        base__accepting: 'Category_base__accepting_71',
                        blink: 'Category_blink_4f',
                        check: 'Category_check_13',
                        counter: 'Category_counter_1f',
                        slideUp: 'Category_slideUp_bf',
                        show: 'Category_show_c1',
                    },
                    Be = R.strings.selectable_reward.tabs,
                    Ce = (0, I.Pi)(({ index: e }) => {
                        const u = y().mediaSize,
                            t = K(),
                            r = t.model,
                            n = t.controls,
                            a = r.animationState.get(),
                            s = r.computes.tabByIndex(e),
                            o = s.count === s.limit,
                            l = r.root.get().selectedTab === s.type,
                            c = u >= v.Medium ? J.Big : J.Small;
                        return i().createElement(
                            'div',
                            {
                                className: p()(
                                    De.base,
                                    o && De.base__completed,
                                    l ? De.base__selected : s.count && De[`base__${a}`],
                                ),
                                onClick: () => {
                                    Ee('bp_click'), n.openTab(s.type);
                                },
                                onMouseEnter: () => Ee('bp_highlight'),
                            },
                            i().createElement('div', { className: p()(De.glow, l && De.glow__show) }),
                            i().createElement(
                                'div',
                                { className: De.title },
                                ((d = s.type), R.strings.selectable_reward.tabs.items.$dyn(d)),
                            ),
                            i().createElement(
                                de,
                                { args: { type: s.type } },
                                i().createElement(
                                    'div',
                                    { className: De.imageContainer },
                                    i().createElement('div', {
                                        className: De.image,
                                        style: { backgroundImage: `url(${Fe(s.type, c)})` },
                                    }),
                                    i().createElement('div', { className: De.check }),
                                ),
                            ),
                            i().createElement(
                                'div',
                                { className: De.counter },
                                Ae(Be.counter(), { count: s.count, limit: s.limit }),
                            ),
                        );
                        var d;
                    }),
                    he = (e) => {
                        let u,
                            t = null;
                        return (
                            (t = requestAnimationFrame(() => {
                                t = requestAnimationFrame(() => {
                                    (t = null), (u = e());
                                });
                            })),
                            () => {
                                'function' == typeof u && u(), null !== t && cancelAnimationFrame(t);
                            }
                        );
                    },
                    pe = (e, u, t) => (t < e ? e : t > u ? u : t),
                    fe = [];
                function be(e) {
                    const u = (0, a.useRef)(e);
                    return (
                        (0, a.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, a.useCallback)((...e) => (0, u.current)(...e), fe)
                    );
                }
                function ve(e, u, t = []) {
                    const r = (0, a.useRef)(0),
                        n = (0, a.useCallback)(() => window.clearInterval(r.current), t || []);
                    (0, a.useEffect)(() => n, [n]);
                    const i = (null != t ? t : []).concat([u]);
                    return [
                        (0, a.useCallback)((t) => {
                            (r.current = window.setInterval(() => e(t, !0), u)), e(t, !1);
                        }, i),
                        n,
                    ];
                }
                function we(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return Se(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return Se(e, u);
                        })(e)) ||
                        (u && e && 'number' == typeof e.length)
                    ) {
                        t && (e = t);
                        var r = 0;
                        return function () {
                            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function Se(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, r = new Array(u); t < u; t++) r[t] = e[t];
                    return r;
                }
                function ye(e, u, t) {
                    const r = (0, a.useMemo)(
                        () =>
                            (function (e, u, t, r) {
                                let n,
                                    a = !1,
                                    i = 0;
                                function s() {
                                    n && clearTimeout(n);
                                }
                                function o(...o) {
                                    const l = this,
                                        c = Date.now() - i;
                                    function d() {
                                        (i = Date.now()), t.apply(l, o);
                                    }
                                    a ||
                                        (r && !n && d(),
                                        s(),
                                        void 0 === r && c > e
                                            ? d()
                                            : !0 !== u &&
                                              (n = setTimeout(
                                                  r
                                                      ? function () {
                                                            n = void 0;
                                                        }
                                                      : d,
                                                  void 0 === r ? e - c : e,
                                              )));
                                }
                                return (
                                    'boolean' != typeof u && ((r = t), (t = u), (u = void 0)),
                                    (o.cancel = function () {
                                        s(), (a = !0);
                                    }),
                                    o
                                );
                            })(t, e),
                        u,
                    );
                    return (0, a.useEffect)(() => r.cancel, [r]), r;
                }
                var xe = t(30);
                let Re;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(Re || (Re = {}));
                const Te = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    Le = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: r,
                        getWrapperSize: n,
                        triggerMouseMoveOnUpdate: i = !1,
                    }) => {
                        const s = (e, t) => {
                            const r = u(e),
                                n = r[0],
                                a = r[1];
                            return a <= n ? 0 : pe(n, a, t);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                d = void 0 === c ? Te : c,
                                E = (0, a.useRef)(null),
                                m = (0, a.useRef)(null),
                                A = (() => {
                                    const e = (0, a.useMemo)(() => ({}), []),
                                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                        t = (e, t) => {
                                            u(e).set(t, t);
                                        },
                                        r = (e, t) => {
                                            u(e).delete(t);
                                        },
                                        n = (e, ...t) => {
                                            for (var r, n = we(u(e).values()); !(r = n()).done; ) (0, r.value)(...t);
                                        };
                                    return (0, a.useMemo)(() => ({ on: t, off: r, trigger: n }), []);
                                })(),
                                _ = ye(
                                    () => {
                                        o.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                F = (0, xe.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = E.current;
                                        u && (t(u, e), A.trigger('change', e), i && _());
                                    },
                                    onRest: (e) => A.trigger('rest', e),
                                    onStart: (e) => A.trigger('start', e),
                                    onPause: (e) => A.trigger('pause', e),
                                })),
                                g = F[0],
                                D = F[1],
                                B = (0, a.useCallback)(
                                    (e, u, t) => {
                                        var r;
                                        const n = g.scrollPosition.get(),
                                            a = (null != (r = g.scrollPosition.goal) ? r : 0) - n;
                                        return s(e, u * t + a + n);
                                    },
                                    [g.scrollPosition],
                                ),
                                C = (0, a.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const r = E.current;
                                        r &&
                                            D.start({
                                                scrollPosition: s(r, e),
                                                immediate: u,
                                                reset: t,
                                                config: d.animationConfig,
                                                from: { scrollPosition: s(r, g.scrollPosition.get()) },
                                            });
                                    },
                                    [D, d.animationConfig, g.scrollPosition],
                                ),
                                h = (0, a.useCallback)(
                                    (e) => {
                                        const u = E.current,
                                            t = m.current;
                                        if (!u || !t) return;
                                        const r = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return n(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, d.step),
                                            a = B(u, e, r);
                                        C(a);
                                    },
                                    [C, B, d.step],
                                ),
                                p = (0, a.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && h(r(e)),
                                            E.current && A.trigger('mouseWheel', e, g.scrollPosition, u(E.current));
                                    },
                                    [g.scrollPosition, h, A],
                                ),
                                f = ((e, u = []) => {
                                    const t = (0, a.useRef)(),
                                        r = (0, a.useCallback)((...u) => {
                                            t.current && t.current(), (t.current = e(...u));
                                        }, u);
                                    return (
                                        (0, a.useEffect)(
                                            () => () => {
                                                t.current && t.current();
                                            },
                                            [r],
                                        ),
                                        r
                                    );
                                })(
                                    () =>
                                        he(() => {
                                            const e = E.current;
                                            e &&
                                                (C(s(e, g.scrollPosition.goal), { immediate: !0 }),
                                                A.trigger('resizeHandled'));
                                        }),
                                    [C, g.scrollPosition.goal],
                                ),
                                b = be(() => {
                                    const e = E.current;
                                    if (!e) return;
                                    const u = s(e, g.scrollPosition.goal);
                                    u !== g.scrollPosition.goal && C(u, { immediate: !0 }),
                                        A.trigger('recalculateContent');
                                });
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('resize', f),
                                    () => {
                                        window.removeEventListener('resize', f);
                                    }
                                ),
                                [f],
                            );
                            return (0, a.useMemo)(
                                () => ({
                                    getWrapperSize: () => (m.current ? n(m.current) : void 0),
                                    getContainerSize: () => (E.current ? e(E.current) : void 0),
                                    getBounds: () =>
                                        E.current
                                            ? u(E.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: d.step.clampedArrowStepTimeout,
                                    clampPosition: s,
                                    handleMouseWheel: p,
                                    applyScroll: C,
                                    applyStepTo: h,
                                    contentRef: E,
                                    wrapperRef: m,
                                    scrollPosition: D,
                                    animationScroll: g,
                                    recalculateContent: b,
                                    events: { on: A.on, off: A.off },
                                }),
                                [g.scrollPosition, C, h, A.off, A.on, b, p, D, d.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    Me = Le({
                        getBounds: (e) => {
                            var u, t;
                            return [
                                0,
                                e.offsetWidth -
                                    (null != (u = null == (t = e.parentElement) ? void 0 : t.offsetWidth) ? u : 0),
                            ];
                        },
                        getContainerSize: (e) => e.offsetWidth,
                        getWrapperSize: (e) => e.offsetWidth,
                        setScrollPosition: (e, u) => {
                            e.style.transform = `translateX(-${u.value.scrollPosition}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Re.Next : Re.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    ke = 'HorizontalBar_base_49',
                    Pe = 'HorizontalBar_base__nonActive_82',
                    Oe = 'HorizontalBar_leftButton_5f',
                    Ne = 'HorizontalBar_rightButton_03',
                    Ie = 'HorizontalBar_track_0d',
                    He = 'HorizontalBar_thumb_fd',
                    We = 'HorizontalBar_rail_32',
                    Ue = 'disable',
                    ze = { pending: !1, offset: 0 },
                    Ge = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    Ve = () => {},
                    je = (e, u) => Math.max(20, e.offsetWidth * u),
                    $e = (0, a.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = Ge, onDrag: r = Ve }) => {
                        const n = (0, a.useRef)(null),
                            s = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            d = (0, a.useRef)(null),
                            E = e.stepTimeout || 100,
                            m = (0, a.useState)(ze),
                            A = m[0],
                            _ = m[1],
                            F = (0, a.useCallback)(
                                (e) => {
                                    _(e),
                                        d.current && r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current });
                                },
                                [r],
                            ),
                            g = () => {
                                const u = c.current,
                                    t = d.current,
                                    r = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(r && u && t && n)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, r / n),
                                    o = pe(0, 1, a / (n - r)),
                                    E = (u.offsetWidth - je(u, i)) * o;
                                (t.style.transform = `translateX(${0 | E}px)`),
                                    ((e) => {
                                        if (s.current && l.current && c.current && d.current) {
                                            if (0 === e)
                                                return s.current.classList.add(Ue), void l.current.classList.remove(Ue);
                                            if (
                                                ((u = c.current),
                                                (t = d.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return s.current.classList.remove(Ue), void l.current.classList.add(Ue);
                                            var u, t;
                                            s.current.classList.remove(Ue), l.current.classList.remove(Ue);
                                        }
                                    })(E);
                            },
                            D = be(() => {
                                (() => {
                                    const u = d.current,
                                        t = c.current,
                                        r = e.getWrapperSize(),
                                        a = e.getContainerSize();
                                    if (!(a && u && r && t)) return;
                                    const i = Math.min(1, r / a);
                                    (u.style.width = `${je(t, i)}px`),
                                        (u.style.display = 'flex'),
                                        n.current &&
                                            (1 === i ? n.current.classList.add(Pe) : n.current.classList.remove(Pe));
                                })(),
                                    g();
                            });
                        (0, a.useEffect)(() => he(D)),
                            (0, a.useEffect)(
                                () =>
                                    he(() => {
                                        const u = () => {
                                            g();
                                        };
                                        let t = Ve;
                                        const r = () => {
                                            t(), (t = he(D));
                                        };
                                        return (
                                            e.events.on('recalculateContent', D),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', r),
                                            () => {
                                                t(),
                                                    e.events.off('recalculateContent', D),
                                                    e.events.off('rest', u),
                                                    e.events.off('change', u),
                                                    e.events.off('resizeHandled', r);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, a.useEffect)(() => {
                                if (!A.pending) return;
                                const u = o.O.client.events.mouse.move(([u, t]) => {
                                        var n;
                                        const a = e.contentRef.current,
                                            i = e.wrapperRef.current;
                                        if (!a || !i) return;
                                        const s = c.current,
                                            o = d.current;
                                        if (!s || !o) return;
                                        if ('inside' === t && u.clientX < 0) return;
                                        const l = u.clientX - A.offset - s.getBoundingClientRect().x,
                                            E = (l / s.offsetWidth) * (null != (n = e.getContainerSize()) ? n : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(a, E),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            r({ type: 'dragging', thumb: o, thumbOffset: l, contentOffset: E });
                                    }),
                                    t = o.O.client.events.mouse.up(() => {
                                        u(), F(ze);
                                    });
                                return () => {
                                    u(), t();
                                };
                            }, [e, A.offset, A.pending, r, F]);
                        const B = ve((u) => e.applyStepTo(u), E, [e]),
                            C = B[0],
                            h = B[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', h, !0),
                                () => document.removeEventListener('mouseup', h, !0)
                            ),
                            [h],
                        );
                        const f = (e) => {
                            e.target.classList.contains(Ue) || Ee('highlight');
                        };
                        return i().createElement(
                            'div',
                            { className: p()(ke, u.base), ref: n, onWheel: e.handleMouseWheel },
                            i().createElement('div', {
                                className: p()(Oe, u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ue) || 0 !== e.button || (Ee('play'), C(Re.Next));
                                },
                                onMouseUp: h,
                                ref: s,
                                onMouseEnter: f,
                            }),
                            i().createElement(
                                'div',
                                {
                                    className: p()(Ie, u.track),
                                    onMouseDown: (u) => {
                                        const r = d.current;
                                        if (r && 0 === u.button)
                                            if ((Ee('play'), u.target === r))
                                                F({ pending: !0, offset: u.screenX - r.getBoundingClientRect().x });
                                            else {
                                                ((u) => {
                                                    const r = d.current,
                                                        n = e.contentRef.current;
                                                    if (!r || !n) return;
                                                    const a = t(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + a * u);
                                                })(u.screenX > r.getBoundingClientRect().x ? Re.Prev : Re.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: f,
                                },
                                i().createElement('div', { ref: d, className: p()(He, u.thumb) }),
                                i().createElement('div', { className: p()(We, u.rail) }),
                            ),
                            i().createElement('div', {
                                className: p()(Ne, u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ue) || 0 !== e.button || (Ee('play'), C(Re.Prev));
                                },
                                onMouseUp: h,
                                ref: l,
                                onMouseEnter: f,
                            }),
                        );
                    }),
                    qe = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Ye = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: r,
                        areaClassName: n,
                        classNames: s,
                        scrollClassName: o,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const d = (0, a.useMemo)(() => {
                                const e = r || {};
                                return Object.assign({}, e, { base: p()(qe.base, e.base) });
                            }, [r]),
                            E = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return i().createElement(
                            'div',
                            { className: p()(qe.defaultScroll, t), onWheel: u.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: p()(qe.defaultScrollArea, n) },
                                i().createElement(Xe, { className: o, api: E, classNames: s }, e),
                            ),
                            i().createElement($e, { getStepByRailClick: l, api: u, onDrag: c, classNames: d }),
                        );
                    },
                    Xe = ({ api: e, className: u, classNames: t, children: r }) => (
                        (0, a.useEffect)(() => he(e.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: p()(qe.base, u) },
                            i().createElement(
                                'div',
                                {
                                    className: p()(qe.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                i().createElement(
                                    'div',
                                    { className: p()(qe.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    r,
                                ),
                            ),
                        )
                    );
                (Xe.Bar = $e), (Xe.Default = Ye);
                const Ke = Le({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Re.Next : Re.Prev),
                    }),
                    Ze = 'VerticalBar_base_f3',
                    Qe = 'VerticalBar_base__nonActive_42',
                    Je = 'VerticalBar_topButton_d7',
                    eu = 'VerticalBar_bottomButton_06',
                    uu = 'VerticalBar_track_df',
                    tu = 'VerticalBar_thumb_32',
                    ru = 'VerticalBar_rail_43',
                    nu = 'disable',
                    au = () => {},
                    iu = { pending: !1, offset: 0 },
                    su = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    ou = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    lu = (e, u) => Math.max(20, e.offsetHeight * u),
                    cu = (0, a.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = su, onDrag: r = au }) => {
                        const n = (0, a.useRef)(null),
                            s = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            d = (0, a.useRef)(null),
                            E = e.stepTimeout || 100,
                            m = (0, a.useState)(iu),
                            A = m[0],
                            _ = m[1],
                            F = (0, a.useCallback)(
                                (e) => {
                                    _(e),
                                        d.current && r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current });
                                },
                                [r],
                            ),
                            g = be(() => {
                                const u = d.current,
                                    t = c.current,
                                    r = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(r && a && u && t)) return;
                                const i = Math.min(1, r / a);
                                return (
                                    (u.style.height = `${lu(t, i)}px`),
                                    (u.style.display = 'flex'),
                                    n.current &&
                                        (1 === i ? n.current.classList.add(Qe) : n.current.classList.remove(Qe)),
                                    i
                                );
                            }),
                            D = be(() => {
                                const u = c.current,
                                    t = d.current,
                                    r = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(r && u && t && n)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, r / n),
                                    o = pe(0, 1, a / (n - r)),
                                    E = (u.offsetHeight - lu(u, i)) * o;
                                (t.style.transform = `translateY(${0 | E}px)`),
                                    ((e) => {
                                        if (s.current && l.current && c.current && d.current) {
                                            if (0 === Math.round(e))
                                                return s.current.classList.add(nu), void l.current.classList.remove(nu);
                                            if (
                                                ((u = c.current),
                                                (t = d.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return s.current.classList.remove(nu), void l.current.classList.add(nu);
                                            var u, t;
                                            s.current.classList.remove(nu), l.current.classList.remove(nu);
                                        }
                                    })(E);
                            }),
                            B = be(() => {
                                ou(e, () => {
                                    g(), D();
                                });
                            });
                        (0, a.useEffect)(() => he(B)),
                            (0, a.useEffect)(() => {
                                const u = () => {
                                    ou(e, () => {
                                        D();
                                    });
                                };
                                let t = au;
                                const r = () => {
                                    t(), (t = he(B));
                                };
                                return (
                                    e.events.on('recalculateContent', B),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', r),
                                    () => {
                                        t(),
                                            e.events.off('recalculateContent', B),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', r);
                                    }
                                );
                            }, [e]),
                            (0, a.useEffect)(() => {
                                if (!A.pending) return;
                                const u = o.O.client.events.mouse.up(() => {
                                        F(iu);
                                    }),
                                    t = o.O.client.events.mouse.move(([u]) => {
                                        ou(e, (t) => {
                                            const n = c.current,
                                                a = d.current,
                                                i = e.getContainerSize();
                                            if (!n || !a || !i) return;
                                            const s = u.screenY - A.offset - n.getBoundingClientRect().y,
                                                o = (s / n.offsetHeight) * i;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, o),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                r({ type: 'dragging', thumb: a, thumbOffset: s, contentOffset: o });
                                        });
                                    });
                                return () => {
                                    u(), t();
                                };
                            }, [e, A.offset, A.pending, r, F]);
                        const C = ve((u) => e.applyStepTo(u), E, [e]),
                            h = C[0],
                            f = C[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', f, !0),
                                () => document.removeEventListener('mouseup', f, !0)
                            ),
                            [f],
                        );
                        const b = (e) => {
                            e.target.classList.contains(nu) || Ee('highlight');
                        };
                        return i().createElement(
                            'div',
                            { className: p()(Ze, u.base), ref: n, onWheel: e.handleMouseWheel },
                            i().createElement('div', {
                                className: p()(Je, u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(nu) || 0 !== e.button || (Ee('play'), h(Re.Next));
                                },
                                ref: s,
                                onMouseEnter: b,
                            }),
                            i().createElement(
                                'div',
                                {
                                    className: p()(uu, u.track),
                                    onMouseDown: (u) => {
                                        const r = d.current;
                                        if (r && 0 === u.button)
                                            if ((Ee('play'), u.target === r))
                                                F({ pending: !0, offset: u.screenY - r.getBoundingClientRect().y });
                                            else {
                                                ((u) => {
                                                    d.current &&
                                                        ou(e, (r) => {
                                                            if (!r) return;
                                                            const n = t(e),
                                                                a = e.clampPosition(r, r.scrollTop + n * u);
                                                            e.applyScroll(a);
                                                        });
                                                })(u.screenY > r.getBoundingClientRect().y ? Re.Prev : Re.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: b,
                                },
                                i().createElement('div', { ref: d, className: p()(tu, u.thumb) }),
                                i().createElement('div', { className: p()(ru, u.rail) }),
                            ),
                            i().createElement('div', {
                                className: p()(eu, u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(nu) || 0 !== e.button || (Ee('play'), h(Re.Prev));
                                },
                                onMouseUp: f,
                                ref: l,
                                onMouseEnter: b,
                            }),
                        );
                    }),
                    du = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Eu = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: r,
                        areaClassName: n,
                        scrollClassName: s,
                        scrollClassNames: o,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const d = (0, a.useMemo)(() => {
                                const e = r || {};
                                return Object.assign({}, e, { base: p()(du.base, e.base) });
                            }, [r]),
                            E = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return i().createElement(
                            'div',
                            { className: p()(du.defaultScroll, t), onWheel: u.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: p()(du.area, n) },
                                i().createElement(mu, { className: s, classNames: o, api: E }, e),
                            ),
                            i().createElement(cu, { getStepByRailClick: l, api: u, onDrag: c, classNames: d }),
                        );
                    },
                    mu = ({ className: e, classNames: u, children: t, api: r }) => (
                        (0, a.useEffect)(() => he(r.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: p()(du.base, e), ref: r.wrapperRef, onWheel: r.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: p()(du.content, null == u ? void 0 : u.content), ref: r.contentRef },
                                t,
                            ),
                        )
                    );
                mu.Default = Eu;
                const Au = { Vertical: n, Horizontal: r },
                    _u = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Fu() {
                    return (
                        (Fu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Fu.apply(this, arguments)
                    );
                }
                const gu = R.views.common.tooltip_window.simple_tooltip_content,
                    Du = (e) => {
                        let u = e.children,
                            t = e.body,
                            r = e.header,
                            n = e.note,
                            s = e.alert,
                            o = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, _u);
                        const c = (0, a.useMemo)(() => {
                            const e = Object.assign({}, o, { body: t, header: r, note: n, alert: s });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [s, t, r, n, o]);
                        return i().createElement(
                            oe,
                            Fu(
                                {
                                    contentId:
                                        ((d = null == o ? void 0 : o.hasHtmlContent),
                                        d ? gu.SimpleTooltipHtmlContent('resId') : gu.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var d;
                    },
                    Bu = 'state_normal',
                    Cu = 'state_limited',
                    hu = {
                        base: 'Reward_base_fc',
                        base__selected: 'Reward_base__selected_6d',
                        reward: 'Reward_reward_3f',
                        image: 'Reward_image_5e',
                        base__stateReceived: 'Reward_base__stateReceived_ff',
                        base__stateLimited: 'Reward_base__stateLimited_6e',
                        base__accepting: 'Reward_base__accepting_9d',
                        blink: 'Reward_blink_2d',
                        optDeviceType: 'Reward_optDeviceType_7f',
                        disabled: 'Reward_disabled_31',
                        packSize: 'Reward_packSize_63',
                        label: 'Reward_label_e6',
                        storage: 'Reward_storage_0b',
                        storage__hidden: 'Reward_storage__hidden_0a',
                        storageIcon: 'Reward_storageIcon_45',
                        countText: 'Reward_countText_61',
                        select: 'Reward_select_89',
                        state: 'Reward_state_19',
                        stateText: 'Reward_stateText_4b',
                        stateIcon: 'Reward_stateIcon_c6',
                        glow: 'Reward_glow_dc',
                        base__stateNormal: 'Reward_base__stateNormal_99',
                        slideUp: 'Reward_slideUp_f1',
                        show: 'Reward_show_0f',
                    },
                    pu = {
                        base: 'SelectButton_base_1c',
                        base__plus: 'SelectButton_base__plus_01',
                        base__disabled: 'SelectButton_base__disabled_f4',
                        base__minus: 'SelectButton_base__minus_13',
                    };
                let fu;
                !(function (e) {
                    (e.Plus = 'plus'), (e.Minus = 'minus');
                })(fu || (fu = {}));
                const bu = ({ type: e = fu.Plus, isEnabled: u = !0, onClick: t }) =>
                    i().createElement('div', {
                        className: p()(pu.base, pu[`base__${e}`], !u && pu.base__disabled),
                        onClick: (e) => {
                            e.stopPropagation(), u && t(e);
                        },
                    });
                var vu;
                !(function (e) {
                    (e.None = 'none'),
                        (e.Trophy = 'trophy'),
                        (e.Deluxe = 'delux'),
                        (e.Modernized = 'modernized'),
                        (e.BattleBooster = 'battleBooster');
                })(vu || (vu = {}));
                const wu = R.strings.selectable_reward.reward;
                const Su = (0, I.Pi)(({ index: e }) => {
                        const u = K(),
                            t = u.model,
                            r = u.controls,
                            n = t.animationState.get(),
                            a = t.computes.rewardByIndex(e),
                            s = a.type,
                            o = a.count,
                            l = a.state,
                            c = a.storageCount,
                            d = a.packSize,
                            E = r.addReward,
                            m = r.reduceReward,
                            A = o > 0 && 'state_received' !== l,
                            _ = n === Y.Accepting && A,
                            F = (function (e) {
                                return e.startsWith(vu.Trophy)
                                    ? vu.Trophy
                                    : e.startsWith(vu.Deluxe)
                                      ? vu.Deluxe
                                      : e.startsWith(vu.Modernized)
                                        ? vu.Modernized
                                        : e.toLowerCase().endsWith(vu.BattleBooster.toLowerCase())
                                          ? vu.BattleBooster
                                          : vu.None;
                            })(s);
                        return i().createElement(
                            'div',
                            {
                                className: p()(
                                    hu.base,
                                    A && hu.base__selected,
                                    _ && hu.base__accepting,
                                    hu[`base__${((g = l), g.replace(/_\w/g, (e) => e[1].toUpperCase()))}`],
                                ),
                                onClick: () => {
                                    l === Bu
                                        ? (Ee(R.sounds.bp_click()), E(s))
                                        : l === Cu && Ee(R.sounds.bp_click_limit());
                                },
                                onMouseEnter: () => Ee(R.sounds.bp_highlight()),
                            },
                            i().createElement(
                                'div',
                                { className: p()(hu.storage, c <= 0 && hu.storage__hidden) },
                                i().createElement('div', { className: hu.storageIcon }),
                                c,
                            ),
                            i().createElement(
                                de,
                                { args: { type: s } },
                                i().createElement(
                                    'div',
                                    { className: hu.reward },
                                    i().createElement('div', {
                                        className: hu.image,
                                        style: { backgroundImage: `url(${ge(s)})` },
                                    }),
                                    F !== vu.None &&
                                        i().createElement('div', {
                                            className: hu.optDeviceType,
                                            style: {
                                                backgroundImage: `url(R.images.gui.maps.icons.selectableReward.reward.optDeviceType.${F})`,
                                            },
                                        }),
                                    !A &&
                                        l !== Bu &&
                                        i().createElement('div', {
                                            className: hu.disabled,
                                            style: { maskImage: `url(${ge(s)})` },
                                        }),
                                    d > 1 &&
                                        i().createElement(
                                            'div',
                                            { className: hu.packSize },
                                            Ae(wu.packSizeCount(), { packSize: d }),
                                        ),
                                ),
                            ),
                            i().createElement(
                                'div',
                                { className: hu.label },
                                ((e) => {
                                    var u;
                                    const t = e.split('_')[1],
                                        r = t && R.strings.blueprints.nations.$dyn(t),
                                        n = null == (u = R.strings.artefacts.$dyn(e)) ? void 0 : u.$dyn('name');
                                    return r || (n ? _e(n) : void console.error('title for reward is not provided'));
                                })(s),
                            ),
                            A || l === Bu
                                ? i().createElement(
                                      i().Fragment,
                                      null,
                                      i().createElement('span', { className: hu.countText }, o),
                                      i().createElement(
                                          'div',
                                          { className: hu.select },
                                          i().createElement(bu, {
                                              type: fu.Minus,
                                              isEnabled: A,
                                              onClick: () => {
                                                  Ee(R.sounds.bp_click_minus()), m(s);
                                              },
                                          }),
                                          i().createElement(bu, {
                                              type: fu.Plus,
                                              isEnabled: l === Bu,
                                              onClick: () => {
                                                  l === Bu && (Ee(R.sounds.bp_click_plus()), E(s));
                                              },
                                          }),
                                      ),
                                  )
                                : i().createElement(
                                      Du,
                                      l === Cu && 0 === o
                                          ? {
                                                header: wu.tooltip.state_limited.header(),
                                                body: wu.tooltip.state_limited.body(),
                                            }
                                          : { isEnabled: !1 },
                                      i().createElement(
                                          'div',
                                          { className: hu.state },
                                          i().createElement('div', { className: hu.stateText }, wu.$dyn(l)),
                                          i().createElement('div', { className: hu.stateIcon }),
                                      ),
                                  ),
                            i().createElement('div', { className: hu.glow }),
                        );
                        var g;
                    }),
                    yu = 'ContentGrid_base_59',
                    xu = 'ContentGrid_scrollArea_e0',
                    Ru = 'ContentGrid_scrollAreaInner_ba',
                    Tu = 'ContentGrid_reward_68',
                    Lu = {
                        base: 'Lip_base_57',
                        base__top: 'Lip_base__top_11',
                        base__bottom: 'Lip_base__bottom_a5',
                        base__show: 'Lip_base__show_65',
                    };
                let Mu;
                !(function (e) {
                    (e.Top = 'top'), (e.Bottom = 'bottom');
                })(Mu || (Mu = {}));
                const ku = ({ position: e, visible: u }) =>
                        i().createElement('div', { className: p()(Lu.base, Lu[`base__${e}`], u && Lu.base__show) }),
                    Pu = (0, I.Pi)(() => {
                        const e = K().model,
                            u = e.root.get().selectedTab,
                            t = e.rewards.get(),
                            r = Ke(),
                            n = (0, a.useState)('default'),
                            s = n[0],
                            o = n[1],
                            l = be(() => {
                                const e = r.getBounds(),
                                    u = e[0],
                                    t = e[1],
                                    n = r.animationScroll.scrollPosition.goal,
                                    a = r.getContainerSize(),
                                    i = r.getWrapperSize();
                                if (a && i)
                                    if (a !== i)
                                        switch (n) {
                                            case u:
                                                o('start');
                                                break;
                                            case t:
                                                o('end');
                                                break;
                                            default:
                                                o('default');
                                        }
                                    else o('hidden');
                            });
                        return (
                            (0, a.useEffect)(
                                () => (
                                    r.events.on('change', l),
                                    r.events.on('recalculateContent', l),
                                    r.events.on('resizeHandled', l),
                                    () => {
                                        r.events.off('change', l),
                                            r.events.off('recalculateContent', l),
                                            r.events.off('resizeHandled', l);
                                    }
                                ),
                                [r.events, l],
                            ),
                            (0, a.useEffect)(
                                () =>
                                    he(() => {
                                        r.applyScroll(0);
                                    }),
                                [r, u],
                            ),
                            i().createElement(
                                'div',
                                { className: yu },
                                i().createElement(
                                    Au.Vertical.Area.Default,
                                    { api: r, key: 'area', className: xu },
                                    i().createElement(
                                        'div',
                                        { className: Ru },
                                        H(t.length, (e) =>
                                            i().createElement(
                                                'div',
                                                { key: e, className: Tu },
                                                i().createElement(Su, { index: e }),
                                            ),
                                        ),
                                    ),
                                ),
                                'hidden' !== s &&
                                    i().createElement(
                                        i().Fragment,
                                        null,
                                        i().createElement(ku, { position: Mu.Top, visible: 'start' !== s }),
                                        i().createElement(ku, { position: Mu.Bottom, visible: 'end' !== s }),
                                    ),
                            )
                        );
                    }),
                    Ou = {
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
                let Nu, Iu;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(Nu || (Nu = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
                    })(Iu || (Iu = {}));
                const Hu = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: r,
                    disabled: n,
                    mixClass: s,
                    soundHover: o,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: d,
                    onMouseDown: E,
                    onMouseUp: m,
                    onMouseLeave: A,
                    onClick: _,
                }) => {
                    const F = (0, a.useRef)(null),
                        g = (0, a.useState)(t),
                        D = g[0],
                        B = g[1],
                        C = (0, a.useState)(!1),
                        h = C[0],
                        f = C[1],
                        b = (0, a.useState)(!1),
                        v = b[0],
                        w = b[1],
                        S = (0, a.useCallback)(() => {
                            n || (F.current && (F.current.focus(), B(!0)));
                        }, [n]),
                        y = (0, a.useCallback)(
                            (e) => {
                                D && null !== F.current && !F.current.contains(e.target) && B(!1);
                            },
                            [D],
                        ),
                        x = (0, a.useCallback)(
                            (e) => {
                                n || (_ && _(e));
                            },
                            [n, _],
                        ),
                        T = (0, a.useCallback)(
                            (e) => {
                                n || (null !== o && Ee(o), c && c(e), w(!0));
                            },
                            [n, o, c],
                        ),
                        L = (0, a.useCallback)(
                            (e) => {
                                d && d(e);
                            },
                            [d],
                        ),
                        M = (0, a.useCallback)(
                            (e) => {
                                n || (m && m(e), f(!1));
                            },
                            [n, m],
                        ),
                        k = (0, a.useCallback)(
                            (e) => {
                                n || (null !== l && Ee(l), E && E(e), t && S(), f(!0));
                            },
                            [n, l, E, S, t],
                        ),
                        P = (0, a.useCallback)(
                            (e) => {
                                n || (A && A(e), f(!1));
                            },
                            [n, A],
                        ),
                        O = p()(
                            Ou.base,
                            Ou[`base__${r}`],
                            {
                                [Ou.base__disabled]: n,
                                [Ou[`base__${u}`]]: u,
                                [Ou.base__focus]: D,
                                [Ou.base__highlightActive]: h,
                                [Ou.base__firstHover]: v,
                            },
                            s,
                        ),
                        N = p()(Ou.state, Ou.state__default);
                    return (
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mousedown', y),
                                () => {
                                    document.removeEventListener('mousedown', y);
                                }
                            ),
                            [y],
                        ),
                        (0, a.useEffect)(() => {
                            B(t);
                        }, [t]),
                        i().createElement(
                            'div',
                            {
                                ref: F,
                                className: O,
                                onMouseEnter: T,
                                onMouseMove: L,
                                onMouseUp: M,
                                onMouseDown: k,
                                onMouseLeave: P,
                                onClick: x,
                            },
                            r !== Nu.ghost &&
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement('div', { className: Ou.back }),
                                    i().createElement('span', { className: Ou.texture }),
                                ),
                            i().createElement(
                                'span',
                                { className: N },
                                i().createElement('span', { className: Ou.stateDisabled }),
                                i().createElement('span', { className: Ou.stateHighlightHover }),
                                i().createElement('span', { className: Ou.stateHighlightActive }),
                            ),
                            i().createElement(
                                'span',
                                { className: Ou.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                Hu.defaultProps = { type: Nu.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const Wu = (0, a.memo)(Hu);
                function Uu() {
                    const e = (0, a.useRef)(0);
                    var u;
                    return (
                        (u = () => {
                            window.clearTimeout(e.current);
                        }),
                        (0, a.useEffect)(() => u, []),
                        (0, a.useMemo)(
                            () => ({
                                run: (u, t) => {
                                    window.clearTimeout(e.current),
                                        (e.current = window.setTimeout(() => {
                                            u(), (e.current = 0);
                                        }, t));
                                },
                                clear: () => {
                                    window.clearTimeout(e.current), (e.current = 0);
                                },
                                get isRunning() {
                                    return 0 !== e.current;
                                },
                            }),
                            [],
                        )
                    );
                }
                const zu = 'Footer_base_78',
                    Gu = 'Footer_description_7a',
                    Vu = 'Footer_selectRewards_b0',
                    ju = 'Footer_rewardsSelected_06',
                    $u = 'Footer_rewardsSelectedCount_af',
                    qu = 'Footer_rewardsSelectedIcon_83',
                    Yu = 'Footer_buttons_10',
                    Xu = 'Footer_cButton_fe',
                    Ku = (0, I.Pi)(() => {
                        const e = K(),
                            u = e.model,
                            t = e.controls,
                            r = u.root.get().totalRewardCount,
                            n = r > 0,
                            a = y().mediaSize > v.Small ? Iu.medium : Iu.small,
                            s = Uu();
                        return i().createElement(
                            'div',
                            { className: zu },
                            i().createElement(
                                'div',
                                { className: Gu },
                                n
                                    ? i().createElement(
                                          'div',
                                          { className: ju },
                                          R.strings.selectable_reward.footer.rewardsSelected(),
                                          i().createElement('span', { className: $u }, r),
                                          i().createElement(
                                              oe,
                                              {
                                                  contentId:
                                                      R.views.lobby.common.tooltips.SelectedRewardsTooltipView('resId'),
                                              },
                                              i().createElement('div', { className: qu }),
                                          ),
                                      )
                                    : i().createElement(
                                          'div',
                                          { className: Vu },
                                          R.strings.selectable_reward.footer.selectRewards(),
                                      ),
                            ),
                            i().createElement(
                                'div',
                                { className: Yu },
                                i().createElement(
                                    Wu,
                                    {
                                        size: a,
                                        type: Nu.primary,
                                        disabled: !n,
                                        mixClass: Xu,
                                        onClick: () => {
                                            t.setAnimationState(Y.Accepting), s.run(t.submit, 600);
                                        },
                                    },
                                    R.strings.selectable_reward.footer.okBtn.label(),
                                ),
                                i().createElement(
                                    Wu,
                                    { size: a, type: Nu.secondary, mixClass: Xu, onClick: t.close },
                                    R.strings.selectable_reward.footer.closeBtn.label(),
                                ),
                            ),
                        );
                    }),
                    Zu = {
                        base: 'Content_base_8e',
                        base__accepting: 'Content_base__accepting_d1',
                        heading: 'Content_heading_b3',
                        slideUp: 'Content_slideUp_84',
                        title: 'Content_title_aa',
                        subTitle: 'Content_subTitle_61',
                        wrapper: 'Content_wrapper_b8',
                        show: 'Content_show_00',
                        wrapper__shown: 'Content_wrapper__shown_e4',
                        categories: 'Content_categories_54',
                        footer: 'Content_footer_ec',
                        base__windowed: 'Content_base__windowed_4a',
                        blink: 'Content_blink_95',
                    },
                    Qu = (0, I.Pi)(({ title: e, subTitle: u }) => {
                        const t = (0, a.useState)(!1),
                            r = t[0],
                            n = t[1],
                            s = K().model,
                            o = s.tabs.get(),
                            l = s.animationState.get();
                        return (
                            (0, a.useEffect)(() => {
                                if (!r)
                                    return ((e, u) => {
                                        let t;
                                        const r = setTimeout(() => {
                                            t = e();
                                        }, u);
                                        return () => {
                                            'function' == typeof t && t(), clearTimeout(r);
                                        };
                                    })(() => {
                                        n(!0);
                                    }, 600);
                            }, [r]),
                            i().createElement(
                                'div',
                                { className: p()(Zu.base, Zu[`base__${l}`]) },
                                i().createElement(
                                    'div',
                                    { className: Zu.heading },
                                    i().createElement('div', { className: Zu.title }, e),
                                    i().createElement('div', { className: Zu.subTitle }, u),
                                ),
                                i().createElement(
                                    'div',
                                    { className: p()(Zu.wrapper, r && Zu.wrapper__shown) },
                                    i().createElement(
                                        'div',
                                        { className: Zu.categories },
                                        H(o.length, (e) => i().createElement(Ce, { key: e, index: e })),
                                    ),
                                    i().createElement(Pu, null),
                                ),
                                i().createElement('div', { className: Zu.footer }, i().createElement(Ku, null)),
                            )
                        );
                    }),
                    Ju = 'Error_base_71',
                    et = 'Error_image_a8',
                    ut = 'Error_title_49',
                    tt = 'Error_description_4f',
                    rt = 'Error_footer_2d',
                    nt = 'Error_button_4d',
                    at = R.strings.selectable_reward.error,
                    it = (0, I.Pi)(() => {
                        const e = K().controls;
                        return i().createElement(
                            'div',
                            { className: Ju },
                            i().createElement('div', { className: et }),
                            i().createElement('div', { className: ut }, at.title()),
                            i().createElement('div', { className: tt }, at.description()),
                            i().createElement(
                                'div',
                                { className: rt },
                                i().createElement(
                                    Wu,
                                    { mixClass: nt, type: Nu.primary, size: Iu.medium, onClick: e.close },
                                    at.button(),
                                ),
                            ),
                        );
                    }),
                    st = 'RewardSelection_base_0f';
                (0, I.Pi)(({ title: e, subTitle: u }) => {
                    const t = K().model.tabs.get();
                    return i().createElement(
                        N,
                        { className: st },
                        t.length > 0 ? i().createElement(Qu, { title: e, subTitle: u }) : i().createElement(it, null),
                    );
                });
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(e) {
        var u = __webpack_module_cache__[e];
        if (void 0 !== u) return u.exports;
        var t = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](t, t.exports, __webpack_require__), t.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, u, t, r) => {
            if (!u) {
                var n = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [u, t, r] = deferred[o], a = !0, i = 0; i < u.length; i++)
                        (!1 & r || n >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[i]))
                            ? u.splice(i--, 1)
                            : ((a = !1), r < n && (n = r));
                    if (a) {
                        deferred.splice(o--, 1);
                        var s = t();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            r = r || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > r; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [u, t, r];
        }),
        (__webpack_require__.n = (e) => {
            var u = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(u, { a: u }), u;
        }),
        (__webpack_require__.d = (e, u) => {
            for (var t in u)
                __webpack_require__.o(u, t) &&
                    !__webpack_require__.o(e, t) &&
                    Object.defineProperty(e, t, { enumerable: !0, get: u[t] });
        }),
        (__webpack_require__.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (__webpack_require__.o = (e, u) => Object.prototype.hasOwnProperty.call(e, u)),
        (__webpack_require__.r = (e) => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (__webpack_require__.j = 268),
        (() => {
            var e = { 268: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var r,
                        n,
                        [a, i, s] = t,
                        o = 0;
                    if (a.some((u) => 0 !== e[u])) {
                        for (r in i) __webpack_require__.o(i, r) && (__webpack_require__.m[r] = i[r]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (u && u(t); o < a.length; o++)
                        (n = a[o]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [127], () => __webpack_require__(427));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
