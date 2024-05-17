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
            67: (e, t, u) => {
                'use strict';
                u.d(t, { O: () => K });
                var a = {};
                u.r(a),
                    u.d(a, { mouse: () => d, off: () => _, on: () => m, onResize: () => l, onScaleUpdated: () => c });
                var n = {};
                u.r(n),
                    u.d(n, {
                        events: () => a,
                        getMouseGlobalPosition: () => F,
                        getSize: () => A,
                        graphicsQuality: () => p,
                    });
                var r = {};
                u.r(r), u.d(r, { getBgUrl: () => D, getTextureUrl: () => b });
                var s = {};
                function i(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                function o(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                u.r(s),
                    u.d(s, {
                        addModelObserver: () => R,
                        addPreloadTexture: () => L,
                        children: () => r,
                        displayStatus: () => g,
                        displayStatusIs: () => q,
                        events: () => B,
                        extraSize: () => X,
                        forceTriggerMouseMove: () => j,
                        freezeTextureBeforeResize: () => I,
                        getBrowserTexturePath: () => T,
                        getDisplayStatus: () => V,
                        getScale: () => O,
                        getSize: () => N,
                        getViewGlobalPosition: () => M,
                        isEventHandled: () => U,
                        isFocused: () => G,
                        pxToRem: () => W,
                        remToPx: () => H,
                        resize: () => k,
                        sendEvent: () => y,
                        setAnimateWindow: () => $,
                        setEventHandled: () => z,
                        setInputPaddingsRem: () => P,
                        setSidePaddingsRem: () => x,
                        whenTutorialReady: () => Y,
                    });
                const l = i('clientResized'),
                    c = i('self.onScaleUpdated'),
                    m = (e, t) => engine.on(e, t),
                    _ = (e, t) => engine.off(e, t),
                    E = { down: i('mousedown'), up: i('mouseup'), move: i('mousemove') };
                const d = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && o(!1);
                    }
                    function u() {
                        e.enabled && o(!0);
                    }
                    function a() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', u))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', u))
                            : o(!1);
                    }
                    const n = ['down', 'up', 'move'].reduce(
                        (t, u) => (
                            (t[u] = (function (t) {
                                return (u) => {
                                    e.listeners += 1;
                                    let n = !0;
                                    const r = `mouse${t}`,
                                        s = E[t]((e) => u([e, 'outside']));
                                    function i(e) {
                                        u([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, i),
                                        a(),
                                        () => {
                                            n &&
                                                (s(),
                                                window.removeEventListener(r, i),
                                                (e.listeners -= 1),
                                                a(),
                                                (n = !1));
                                        }
                                    );
                                };
                            })(u)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, n, {
                        disable() {
                            (e.enabled = !1), a();
                        },
                        enable() {
                            (e.enabled = !0), a();
                        },
                        enableOutside() {
                            e.enabled && o(!0);
                        },
                        disableOutside() {
                            e.enabled && o(!1);
                        },
                    });
                })();
                function A(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function F(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const p = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function b(e, t, u = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, u);
                }
                function D(e, t, u) {
                    return `url(${b(e, t, u)})`;
                }
                const g = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    B = {
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
                    h = ['args'];
                const C = 2,
                    v = 16,
                    f = 32,
                    w = 64,
                    S = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const n = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        a,
                                        n = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) (u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]);
                                    return n;
                                })(t, h);
                            return void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, r, {
                                          arguments:
                                              ((a = n),
                                              Object.entries(a).map(([e, t]) => {
                                                  const u = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: u, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: u, name: e, bool: t };
                                                      default:
                                                          return { __Type: u, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, r));
                        }
                        return viewEnv.handleViewEvent({ __Type: u, type: e });
                        var a;
                    },
                    y = {
                        close(e) {
                            S('popover' === e ? C : f);
                        },
                        minimize() {
                            S(w);
                        },
                        move(e) {
                            S(v, { isMouseEvent: !0, on: e });
                        },
                    };
                function L(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function P(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function T(e, t, u, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, u, a);
                }
                function R(e, t, u) {
                    return viewEnv.addDataChangedCallback(e, t, u);
                }
                function x(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function N(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function k(e, t, u = 'px') {
                    return 'rem' === u ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function M(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: H(t.x), y: H(t.y) };
                }
                function I() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function O() {
                    return viewEnv.getScale();
                }
                function W(e) {
                    return viewEnv.pxToRem(e);
                }
                function H(e) {
                    return viewEnv.remToPx(e);
                }
                function $(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function G() {
                    return viewEnv.isFocused();
                }
                function z() {
                    return viewEnv.setEventHandled();
                }
                function U() {
                    return viewEnv.isEventHandled();
                }
                function j() {
                    viewEnv.forceTriggerMouseMove();
                }
                function V() {
                    return viewEnv.getShowingStatus();
                }
                const q = Object.keys(g).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === g[t]), e), {}),
                    X = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    Y = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : B.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    K = { view: s, client: n };
            },
            521: (e, t, u) => {
                'use strict';
                let a, n;
                u.d(t, { n: () => a }),
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
                    })(a || (a = {})),
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
            358: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => r });
                var a = u(67);
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
                    addCallback(e, t, u = 0, n = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = a.O.view.addModelObserver(e, u, n);
                        return (
                            r > 0
                                ? ((this._callbacks[r] = t),
                                  u > 0 && (this._views[u] ? this._views[u].push(r) : (this._views[u] = [r])))
                                : console.error("Can't add callback for model:", e),
                            r
                        );
                    }
                    removeCallback(e, t = 0) {
                        let u = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((u = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            u || console.error("Can't remove callback by id:", e),
                            u
                        );
                    }
                    _emmitDataChanged(e, t, u) {
                        u.forEach((u) => {
                            const a = this._callbacks[u];
                            void 0 !== a && a(e, t);
                        });
                    }
                }
                n.__instance = void 0;
                const r = n;
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
            916: (e, t, u) => {
                'use strict';
                u.d(t, {
                    Sw: () => r.Z,
                    B3: () => o,
                    Z5: () => s.Z5,
                    B0: () => i,
                    c9: () => b,
                    ry: () => p,
                    Sy: () => D,
                });
                class a {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: u }) => {
                                    let a = e.target;
                                    do {
                                        if (a === t) return;
                                        a = a.parentNode;
                                    } while (a);
                                    u();
                                });
                            });
                    }
                    static get instance() {
                        return a.__instance || (a.__instance = new a()), a.__instance;
                    }
                    register(e, t) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: t });
                    }
                    unregister(e, t) {
                        const u = e,
                            a = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== u || t !== a)),
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
                a.__instance = void 0;
                const n = a;
                var r = u(358);
                var s = u(613);
                let i;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(i || (i = {}));
                const o = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = u(521),
                    E = u(67);
                const d = ['args'];
                function A(e, t, u, a, n, r, s) {
                    try {
                        var i = e[r](s),
                            o = i.value;
                    } catch (e) {
                        return void u(e);
                    }
                    i.done ? t(o) : Promise.resolve(o).then(a, n);
                }
                const F = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    p = (function () {
                        var e,
                            t =
                                ((e = function* () {
                                    return (
                                        !(!engine._BindingsReady || !engine._WindowLoaded) ||
                                        new Promise((e) => {
                                            engine.on('Ready', e);
                                        })
                                    );
                                }),
                                function () {
                                    var t = this,
                                        u = arguments;
                                    return new Promise(function (a, n) {
                                        var r = e.apply(t, u);
                                        function s(e) {
                                            A(r, a, n, s, i, 'next', e);
                                        }
                                        function i(e) {
                                            A(r, a, n, s, i, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    b = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const n = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        a,
                                        n = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) (u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]);
                                    return n;
                                })(t, d);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, r, {
                                          arguments:
                                              ((a = n),
                                              Object.entries(a).map(([e, t]) => {
                                                  const u = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          u.number = t;
                                                          break;
                                                      case 'boolean':
                                                          u.bool = t;
                                                          break;
                                                      default:
                                                          u.string = t.toString();
                                                  }
                                                  return u;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, r));
                        } else viewEnv.handleViewEvent({ __Type: u, type: e });
                        var a;
                    },
                    D = () => b(i.CLOSE),
                    g = (e, t) => {
                        e.keyCode === _.n.ESCAPE && t();
                    };
                var B = u(572);
                const h = n.instance,
                    C = {
                        DataTracker: r.Z,
                        ViewModel: B.Z,
                        ViewEventType: i,
                        NumberFormatType: o,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: m,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => b(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: D,
                        sendClosePopOverEvent: () => b(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            b(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: (e, t, u, a, n = R.invalid('resId'), r) => {
                            const s = E.O.view.getViewGlobalPosition(),
                                o = u.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                m = o.width,
                                _ = o.height,
                                d = {
                                    x: E.O.view.pxToRem(l) + s.x,
                                    y: E.O.view.pxToRem(c) + s.y,
                                    width: E.O.view.pxToRem(m),
                                    height: E.O.view.pxToRem(_),
                                };
                            b(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: n,
                                direction: t,
                                bbox: F(d),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => g(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            g(e, D);
                        },
                        handleViewEvent: b,
                        onBindingsReady: p,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(i.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(i.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(i.POP_OVER),
                        dumpViewModel: function e(t) {
                            const u = {};
                            if ('object' != typeof t) return t;
                            for (const a in t)
                                if (Object.prototype.hasOwnProperty.call(t, a)) {
                                    const n = Object.prototype.toString.call(t[a]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = t[a];
                                        u[a] = [];
                                        for (let t = 0; t < n.length; t++) u[a].push({ value: e(n[t].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (u[a] = e(t[a]))
                                            : (u[a] = t[a]);
                                }
                            return u;
                        },
                        ClickOutsideManager: h,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = C;
            },
            613: (e, t, u) => {
                'use strict';
                u.d(t, { Ew: () => r, Z5: () => a, cy: () => n });
                const a = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    n = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, u) => userLocale.getTimeFormat(e, t, void 0 === u || u),
                        getTimeString: (e, t, u) => userLocale.getTimeString(e, t, void 0 === u || u),
                    },
                    r = {
                        getRegionalDateTime: (e, t, u = !0) => regionalDateTime.getRegionalDateTime(e, t, u),
                        getFormattedDateTime: (e, t, u = !0) => regionalDateTime.getFormattedDateTime(e, t, u),
                    };
            },
            202: (e, t, u) => {
                'use strict';
                var a = {};
                u.r(a),
                    u.d(a, {
                        Area: () => Tt,
                        Bar: () => yt,
                        DefaultScroll: () => Pt,
                        Direction: () => _t,
                        defaultSettings: () => Et,
                        useHorizontalScrollApi: () => At,
                    });
                var n = {};
                u.r(n), u.d(n, { Area: () => Yt, Bar: () => Vt, Default: () => Xt, useVerticalScrollApi: () => Rt });
                var r = u(179),
                    s = u.n(r);
                const i = (e, t, u) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && u.extraLarge) ||
                          (t.largeHeight && u.large) ||
                          (t.mediumHeight && u.medium) ||
                          (t.smallHeight && u.small) ||
                          (t.extraSmallHeight && u.extraSmall)
                            ? e
                            : null
                        : e;
                var o = u(67);
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var c;
                function m(e, t, u) {
                    const a = (function (e, t) {
                            switch (!0) {
                                case e >= t.extraLarge.width:
                                    return t.extraLarge.weight;
                                case e >= t.large.width && e < t.extraLarge.width:
                                    return t.large.weight;
                                case e >= t.medium.width && e < t.large.width:
                                    return t.medium.weight;
                                case e >= t.small.width && e < t.medium.width:
                                    return t.small.weight;
                                default:
                                    return t.extraSmall.weight;
                            }
                        })(e, u),
                        n = (function (e, t) {
                            switch (!0) {
                                case e >= t.extraLarge.height:
                                    return t.extraLarge.weight;
                                case e >= t.large.height && e < t.extraLarge.height:
                                    return t.large.weight;
                                case e >= t.medium.height && e < t.large.height:
                                    return t.medium.weight;
                                case e >= t.small.height && e < t.medium.height:
                                    return t.small.weight;
                                default:
                                    return t.extraSmall.weight;
                            }
                        })(t, u),
                        r = Math.min(a, n);
                    return {
                        extraLarge: r === u.extraLarge.weight,
                        large: r === u.large.weight,
                        medium: r === u.medium.weight,
                        small: r === u.small.weight,
                        extraSmall: r === u.extraSmall.weight,
                        extraLargeWidth: a === u.extraLarge.weight,
                        largeWidth: a === u.large.weight,
                        mediumWidth: a === u.medium.weight,
                        smallWidth: a === u.small.weight,
                        extraSmallWidth: a === u.extraSmall.weight,
                        extraLargeHeight: n === u.extraLarge.weight,
                        largeHeight: n === u.large.weight,
                        mediumHeight: n === u.medium.weight,
                        smallHeight: n === u.small.weight,
                        extraSmallHeight: n === u.extraSmall.weight,
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
                const _ = o.O.client.getSize('rem'),
                    E = _.width,
                    d = _.height,
                    A = Object.assign({ width: E, height: d }, m(E, d, l)),
                    F = (0, r.createContext)(A),
                    p = ['children'];
                const b = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]);
                            return n;
                        })(e, p);
                    const a = (0, r.useContext)(F),
                        n = a.extraLarge,
                        s = a.large,
                        o = a.medium,
                        l = a.small,
                        c = a.extraSmall,
                        m = a.extraLargeWidth,
                        _ = a.largeWidth,
                        E = a.mediumWidth,
                        d = a.smallWidth,
                        A = a.extraSmallWidth,
                        b = a.extraLargeHeight,
                        D = a.largeHeight,
                        g = a.mediumHeight,
                        B = a.smallHeight,
                        h = a.extraSmallHeight,
                        C = { extraLarge: b, large: D, medium: g, small: B, extraSmall: h };
                    if (u.extraLarge || u.large || u.medium || u.small || u.extraSmall) {
                        if (u.extraLarge && n) return t;
                        if (u.large && s) return t;
                        if (u.medium && o) return t;
                        if (u.small && l) return t;
                        if (u.extraSmall && c) return t;
                    } else {
                        if (u.extraLargeWidth && m) return i(t, u, C);
                        if (u.largeWidth && _) return i(t, u, C);
                        if (u.mediumWidth && E) return i(t, u, C);
                        if (u.smallWidth && d) return i(t, u, C);
                        if (u.extraSmallWidth && A) return i(t, u, C);
                        if (
                            !(u.extraLargeWidth || u.largeWidth || u.mediumWidth || u.smallWidth || u.extraSmallWidth)
                        ) {
                            if (u.extraLargeHeight && b) return t;
                            if (u.largeHeight && D) return t;
                            if (u.mediumHeight && g) return t;
                            if (u.smallHeight && B) return t;
                            if (u.extraSmallHeight && h) return t;
                        }
                    }
                    return null;
                };
                b.defaultProps = {
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
                (0, r.memo)(b);
                const D = (e) => {
                        const t = (0, r.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    g = ({ children: e }) => {
                        const t = (0, r.useContext)(F),
                            u = (0, r.useState)(t),
                            a = u[0],
                            n = u[1],
                            i = (0, r.useCallback)((e, t) => {
                                const u = o.O.view.pxToRem(e),
                                    a = o.O.view.pxToRem(t);
                                n(Object.assign({ width: u, height: a }, m(u, a, l)));
                            }, []),
                            c = (0, r.useCallback)(() => {
                                const e = o.O.client.getSize('px');
                                i(e.width, e.height);
                            }, [i]);
                        D(() => {
                            o.O.client.events.on('clientResized', i), o.O.client.events.on('self.onScaleUpdated', c);
                        }),
                            (0, r.useEffect)(
                                () => () => {
                                    o.O.client.events.off('clientResized', i),
                                        o.O.client.events.off('self.onScaleUpdated', c);
                                },
                                [i, c],
                            );
                        const _ = (0, r.useMemo)(() => Object.assign({}, a), [a]);
                        return s().createElement(F.Provider, { value: _ }, e);
                    };
                var B = u(483),
                    h = u.n(B),
                    C = u(926),
                    v = u.n(C);
                let f, w, S;
                !(function (e) {
                    (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = l.small.width)] = 'Small'),
                        (e[(e.Medium = l.medium.width)] = 'Medium'),
                        (e[(e.Large = l.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                })(f || (f = {})),
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
                        const e = (0, r.useContext)(F),
                            t = e.width,
                            u = e.height,
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return f.ExtraLarge;
                                    case e.large:
                                        return f.Large;
                                    case e.medium:
                                        return f.Medium;
                                    case e.small:
                                        return f.Small;
                                    case e.extraSmall:
                                        return f.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), f.ExtraSmall;
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
                            s = ((e) => {
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
                        return { mediaSize: a, mediaWidth: n, mediaHeight: s, remScreenWidth: t, remScreenHeight: u };
                    },
                    L = ['children', 'className'];
                function P() {
                    return (
                        (P =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        P.apply(this, arguments)
                    );
                }
                const T = {
                        [w.ExtraSmall]: '',
                        [w.Small]: v().SMALL_WIDTH,
                        [w.Medium]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH}`,
                        [w.Large]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH} ${v().LARGE_WIDTH}`,
                        [w.ExtraLarge]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH} ${v().LARGE_WIDTH} ${v().EXTRA_LARGE_WIDTH}`,
                    },
                    x = {
                        [S.ExtraSmall]: '',
                        [S.Small]: v().SMALL_HEIGHT,
                        [S.Medium]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT}`,
                        [S.Large]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT} ${v().LARGE_HEIGHT}`,
                        [S.ExtraLarge]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT} ${v().LARGE_HEIGHT} ${v().EXTRA_LARGE_HEIGHT}`,
                    },
                    N = {
                        [f.ExtraSmall]: '',
                        [f.Small]: v().SMALL,
                        [f.Medium]: `${v().SMALL} ${v().MEDIUM}`,
                        [f.Large]: `${v().SMALL} ${v().MEDIUM} ${v().LARGE}`,
                        [f.ExtraLarge]: `${v().SMALL} ${v().MEDIUM} ${v().LARGE} ${v().EXTRA_LARGE}`,
                    },
                    k = (e) => {
                        let t = e.children,
                            u = e.className,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]);
                                return n;
                            })(e, L);
                        const n = y(),
                            r = n.mediaWidth,
                            i = n.mediaHeight,
                            o = n.mediaSize;
                        return s().createElement('div', P({ className: h()(u, T[r], x[i], N[o]) }, a), t);
                    },
                    M = ['children'];
                const I = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]);
                            return n;
                        })(e, M);
                    return s().createElement(g, null, s().createElement(k, u, t));
                };
                var O = u(493),
                    W = u.n(O);
                function H(e) {
                    engine.call('PlaySound', e);
                }
                const $ = {
                        playHighlight() {
                            H('highlight');
                        },
                        playClick() {
                            H('play');
                        },
                        playYes() {
                            H('yes1');
                        },
                    },
                    G = 'Tabs_base_d9',
                    z = 'Tabs_base__vertical_c0',
                    U = 'Tabs_list_0a',
                    j = 'Tabs_list__centered_dc',
                    V = 'Tabs_wrapper_2d',
                    q = 'Tabs_wrapper__centered_d8',
                    X = 'Tabs_wrapper__vertical_a5';
                function Y() {
                    return (
                        (Y =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Y.apply(this, arguments)
                    );
                }
                const K = 'tabs-role';
                var Z;
                !(function (e) {
                    (e.LIST = 'tabs-list'), (e.CONTENT = 'tab-content'), (e.TAB = 'tab-key');
                })(Z || (Z = {}));
                class Q extends r.Component {
                    constructor(...e) {
                        super(...e),
                            (this.tabsProps = {}),
                            (this.elementsList = []),
                            (this.tabsListIndex = null),
                            (this.state = { activeKey: '', activeElements: [] }),
                            (this._getFirstTabKey = (e) => {
                                if (!e) return;
                                const t = e.find((e) => e.props[Z.TAB]);
                                return t && t.props[Z.TAB];
                            }),
                            (this.handleSetActiveKey = (e) => {
                                this.setState({ activeKey: e }),
                                    this.props.onTabChange &&
                                        this.props.onTabChange({ from: this.state.activeKey, to: e });
                            });
                    }
                    componentDidMount() {
                        const e = s().Children.toArray(this.props.children),
                            t = e.findIndex((e) => e.props[K] === Z.LIST);
                        if (t < 0) return;
                        const u =
                            this.props.activeKey || this._getFirstTabKey(s().Children.toArray(e[t].props.children));
                        (e[t] = s().cloneElement(e[t], {
                            children: s()
                                .Children.toArray(e[t].props.children)
                                .map((e) => s().cloneElement(e, { key: e.props[Z.TAB] })),
                        })),
                            (this.elementsList = e),
                            (this.tabsListIndex = t),
                            this.handleSetActiveKey(u);
                    }
                    componentWillReceiveProps(e) {
                        void 0 !== e.activeKey &&
                            e.activeKey !== this.props.activeKey &&
                            this.handleSetActiveKey(e.activeKey);
                    }
                    componentDidUpdate(e, t) {
                        if (null === this.tabsListIndex) return;
                        const u = s().Children.toArray(this.props.children)[this.tabsListIndex],
                            a = u.props.children.reduce(
                                (e, t, u) => ((e[u] = t.props), e),
                                Object.assign({}, this.tabsProps),
                            ),
                            n =
                                ((r = this.tabsProps),
                                (i = a),
                                !(
                                    Object.keys(r).length === Object.keys(i).length &&
                                    Object.keys(r).every(
                                        (e) => Object.prototype.hasOwnProperty.call(i, e) && r[e] === i[e],
                                    )
                                ));
                        var r, i;
                        const o = h()(
                                V,
                                u.props.className,
                                this.props.isTabsCentered && q,
                                this.props.isVerticalTabs && X,
                            ),
                            l = h()(U, this.props.isTabsCentered && j);
                        if (t.activeKey !== this.state.activeKey || n) {
                            const e = this.elementsList.findIndex((e) => {
                                    if (e.props[K] === Z.CONTENT) return e.props[Z.TAB].includes(this.state.activeKey);
                                }),
                                t = this.elementsList.filter((t, u) => [this.tabsListIndex, e].includes(u)),
                                n = t[0].props.children,
                                r = n.map((e, t) =>
                                    s().cloneElement(
                                        e,
                                        Object.assign(
                                            {},
                                            a[t],
                                            { key: t, isActive: this.state.activeKey === e.props[Z.TAB] },
                                            this.props.isVerticalTabs
                                                ? {}
                                                : { isFirst: 0 === t, isLast: t === n.length - 1 },
                                            {
                                                onClick: (e) => {
                                                    const u = a[t][Z.TAB];
                                                    this.state.activeKey === u ||
                                                        (a[t].onClick && a[t].onClick(e),
                                                        this.handleSetActiveKey(u),
                                                        this.props.onClickSound && H(this.props.onClickSound));
                                                },
                                                onMouseEnter: (e) => {
                                                    a[t].onMouseEnter && a[t].onMouseEnter(e),
                                                        this.props.onMouseEnterSound && H(this.props.onMouseEnterSound);
                                                },
                                            },
                                        ),
                                    ),
                                );
                            (this.tabsProps = a),
                                this.setState({
                                    activeElements: [
                                        s().createElement(
                                            'div',
                                            { className: l, key: Z.LIST },
                                            s().createElement('div', Y({}, u.props, { className: o }), r),
                                        ),
                                        t[1],
                                    ],
                                });
                        }
                    }
                    render() {
                        const e = this.state.activeElements,
                            t = h()(G, this.props.isVerticalTabs && z);
                        return s().createElement('div', { className: t }, e);
                    }
                }
                Q.defaultProps = { onClickSound: R.sounds.play(), onMouseEnterSound: R.sounds.highlight() };
                const J = ['children', 'className', 'activeKey', 'onClickSound', 'onMouseEnterSound', 'isTabsCentered'];
                function ee() {
                    return (
                        (ee =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        ee.apply(this, arguments)
                    );
                }
                const te = (e) => {
                        let t = e.children,
                            u = e.className,
                            a = e.activeKey,
                            n = e.onClickSound,
                            r = e.onMouseEnterSound,
                            i = e.isTabsCentered,
                            o = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]);
                                return n;
                            })(e, J);
                        return s().createElement(
                            'div',
                            ee({ className: u }, o),
                            s().createElement(
                                Q,
                                { activeKey: a, onClickSound: n, onMouseEnterSound: r, isTabsCentered: i },
                                t,
                            ),
                        );
                    },
                    ue = {
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
                    ae = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function ne() {
                    return (
                        (ne =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        ne.apply(this, arguments)
                    );
                }
                const re = (e) => {
                    let t = e.size,
                        u = e.value,
                        a = e.isEmpty,
                        n = e.fadeInAnimation,
                        r = e.hide,
                        i = e.maximumNumber,
                        o = e.className,
                        l = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]);
                            return n;
                        })(e, ae);
                    const c = a ? null : u,
                        m = 'string' == typeof c;
                    if ((c && !m && c < 0) || 0 === c) return null;
                    const _ = c && !m && c > i,
                        E = h()(
                            ue.base,
                            ue[`base__${t}`],
                            n && ue.base__animated,
                            r && ue.base__hidden,
                            !c && ue.base__pattern,
                            a && ue.base__empty,
                            o,
                        );
                    return s().createElement(
                        'div',
                        ne({ className: E }, l),
                        s().createElement('div', { className: ue.bg }),
                        s().createElement('div', { className: ue.pattern }),
                        s().createElement(
                            'div',
                            { className: h()(ue.value, m && ue.value__text) },
                            _ ? i : c,
                            _ && s().createElement('span', { className: ue.plus }, '+'),
                        ),
                    );
                };
                re.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
                const se = ({ children: e, component: t, props: u = {} }) =>
                        t ? s().createElement(t, u, e) : e || null,
                    ie = 'Tab_base_dd',
                    oe = 'Tab_base__first_4a',
                    le = 'Tab_base__last_96',
                    ce = 'Tab_base__medium_ec',
                    me = 'Tab_base__active_5d',
                    _e = 'Tab_divider_ca',
                    Ee = 'Tab_divider__show_62',
                    de = 'Tab_state_6c',
                    Ae = 'Tab_stateHighlight_1e',
                    Fe = 'Tab_stateBorder_64',
                    pe = 'Tab_stateBorder__positionLeft_e7',
                    be = 'Tab_stateBorder__positionRight_db',
                    De = 'Tab_counter_e1',
                    ge = ['isActive', 'isFirst', 'isLast', 'isMedium', 'isNotified', 'children', 'wrapper', 'counter'];
                function Be() {
                    return (
                        (Be =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Be.apply(this, arguments)
                    );
                }
                const he = (0, r.memo)((e) => {
                        let t = e.isActive,
                            u = void 0 !== t && t,
                            a = e.isFirst,
                            n = void 0 !== a && a,
                            r = e.isLast,
                            i = void 0 !== r && r,
                            o = e.isMedium,
                            l = void 0 !== o && o,
                            c = e.isNotified,
                            m = void 0 !== c && c,
                            _ = e.children,
                            E = void 0 === _ ? 'Tab' : _,
                            d = e.wrapper,
                            A = void 0 === d ? {} : d,
                            F = e.counter,
                            p = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]);
                                return n;
                            })(e, ge);
                        return s().createElement(
                            se,
                            A,
                            s().createElement(
                                'div',
                                Be({ className: h()(ie, { [me]: u }, { [oe]: n }, { [le]: i }, { [ce]: l }) }, p),
                                s().createElement(
                                    'span',
                                    { className: de },
                                    s().createElement('span', { className: Ae }),
                                    s().createElement('span', { className: h()(Fe, pe) }),
                                    s().createElement('span', { className: h()(Fe, be) }),
                                ),
                                E,
                                !i && !u && s().createElement('span', { className: h()(_e, Ee) }),
                                (Boolean(F) || m) &&
                                    s().createElement(
                                        'div',
                                        { className: De },
                                        s().createElement(re, { value: F, isEmpty: m }),
                                    ),
                            ),
                        );
                    }),
                    Ce = {
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
                    ve = [
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
                function fe() {
                    return (
                        (fe =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        fe.apply(this, arguments)
                    );
                }
                class we extends s().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && H(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && H(this.props.soundClick);
                            }),
                            (this._onMouseUp = (e) => (t) => {
                                e && e(t), this.setState({ click: !1 });
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 }));
                    }
                    render() {
                        const e = this.props,
                            t = e.caption,
                            u = e.onClick,
                            a = e.goto,
                            n = e.side,
                            r = e.type,
                            i = e.classNames,
                            o = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            m = e.onMouseUp,
                            _ =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        a,
                                        n = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) (u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]);
                                    return n;
                                })(e, ve)),
                            E = h()(Ce.base, Ce[`base__${r}`], Ce[`base__${n}`], null == i ? void 0 : i.base),
                            d = h()(Ce.icon, Ce[`icon__${r}`], Ce[`icon__${n}`], null == i ? void 0 : i.icon),
                            A = h()(Ce.glow, null == i ? void 0 : i.glow),
                            F = h()(Ce.caption, Ce[`caption__${r}`], null == i ? void 0 : i.caption),
                            p = h()(Ce.goto, null == i ? void 0 : i.goto);
                        return s().createElement(
                            'div',
                            fe(
                                {
                                    className: E,
                                    onMouseEnter: this._onMouseEnter(o),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(m),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: u,
                                },
                                _,
                            ),
                            'info' !== r && s().createElement('div', { className: Ce.shine }),
                            s().createElement('div', { className: d }, s().createElement('div', { className: A })),
                            s().createElement('div', { className: F }, t),
                            a && s().createElement('div', { className: p }, a),
                        );
                    }
                }
                we.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const Se = (e) => {
                    let t,
                        u = null;
                    return (
                        (u = requestAnimationFrame(() => {
                            u = requestAnimationFrame(() => {
                                (u = null), (t = e());
                            });
                        })),
                        () => {
                            'function' == typeof t && t(), null !== u && cancelAnimationFrame(u);
                        }
                    );
                };
                var ye = u(521),
                    Le = u(916);
                const Pe = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function Te(e = ye.n.NONE, t = Pe, u = !1, a = !1) {
                    (0, r.useEffect)(() => {
                        if (e !== ye.n.NONE)
                            return (
                                window.addEventListener('keydown', n, u),
                                () => {
                                    window.removeEventListener('keydown', n, u);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (!a && o.O.view.isEventHandled()) return;
                                o.O.view.setEventHandled(), t(n), u && n.stopPropagation();
                            }
                        }
                    }, [t, e, u, a]);
                }
                const Re = (e = 1) => {
                        const t = new Error().stack;
                        let u,
                            a = R.invalid('resId');
                        return (
                            t &&
                                ((u = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                window.__feature &&
                                    window.__feature !== u &&
                                    window.subViews[u] &&
                                    (a = window.subViews[u].id)),
                            { caller: u, stack: t, resId: a }
                        );
                    },
                    xe = (e, t) => e.split('.').reduce((e, t) => e && e[t], t),
                    Ne = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    ke = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    Me = (e) =>
                        ((e, t) =>
                            e.split('.').reduce((e, u) => {
                                const a = xe(`${e}.${u}`, window);
                                return Ne(a) ? t(e, u, a) : `${e}.${u}`;
                            }))(e, (e, t) => `${e}.${t}.value`),
                    Ie = (e) => {
                        const t = ((e) => {
                                const t = Re(),
                                    u = t.caller,
                                    a = t.resId,
                                    n = window.__feature && window.__feature !== u && u ? `subViews.${u}` : '';
                                return { modelPrefix: n, modelPath: ke(n, e || ''), resId: a };
                            })(),
                            u = t.modelPrefix,
                            a = e.split('.');
                        if (a.length > 0) {
                            const e = [a[0]];
                            return (
                                a.reduce((t, a) => {
                                    const n = xe(ke(u, `${t}.${a}`), window);
                                    return Ne(n) ? (e.push(n.id), `${t}.${a}.value`) : (e.push(a), `${t}.${a}`);
                                }),
                                e.reduce((e, t) => e + '.' + t)
                            );
                        }
                        return '';
                    },
                    Oe = Le.Sw.instance;
                let We;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(We || (We = {}));
                const He = (e = 'model', t = We.Deep) => {
                    const u = (0, r.useState)(0),
                        a = (u[0], u[1]),
                        n = (0, r.useMemo)(() => Re(), []),
                        s = n.caller,
                        i = n.resId,
                        o = (0, r.useMemo)(
                            () => (window.__feature && window.__feature !== s ? `subViews.${s}.${e}` : e),
                            [s, e],
                        ),
                        l = (0, r.useState)(() =>
                            ((e) => {
                                const t = xe(e, window);
                                for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                return Ne(t) ? t.value : t;
                            })(Me(o)),
                        ),
                        c = l[0],
                        m = l[1],
                        _ = (0, r.useRef)(-1);
                    return (
                        D(() => {
                            if (
                                ('boolean' == typeof t &&
                                    ((t = t ? We.Deep : We.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                t !== We.None)
                            ) {
                                const u = (e) => {
                                        ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                        t === We.Deep
                                            ? (e === c && a((e) => e + 1), m(e))
                                            : m(Object.assign([], e));
                                    },
                                    n = Ie(e);
                                _.current = Oe.addCallback(n, u, i, t === We.Deep);
                            }
                        }),
                        (0, r.useEffect)(() => {
                            if (t !== We.None)
                                return () => {
                                    Oe.removeCallback(_.current, i);
                                };
                        }, [i, t]),
                        c
                    );
                };
                var $e = u(664);
                const Ge = 'App_base_b9',
                    ze = 'App_background_fd',
                    Ue = 'App_horizontalTabs_62',
                    je = 'App_tabContent_5e',
                    Ve = 'App_tabContent__visible_dd',
                    qe = 'App_radialShadow_01',
                    Xe = 'App_shadow_c1',
                    Ye = 'App_background__win_2b',
                    Ke = 'App_playerBattleTypeStatus_3e',
                    Ze = 'App_mapName_bf',
                    Qe = 'App_bottomComponents_0b',
                    Je = 'App_closeButton_fa',
                    et = 'AppAnimations_baseEnterDone_7f',
                    tt = { enterActive: 'AppAnimations_baseEnterActive_88', enterDone: et },
                    ut = { enterActive: 'AppAnimations_background_76', enterDone: et },
                    at = { enterActive: 'AppAnimations_horizontalTabs_d2', enterDone: et },
                    nt = (e, t, u) => (u < e ? e : u > t ? t : u),
                    rt = [];
                function st(e) {
                    const t = (0, r.useRef)(e);
                    return (
                        (0, r.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, r.useCallback)((...e) => (0, t.current)(...e), rt)
                    );
                }
                function it(e, t, u = []) {
                    const a = (0, r.useRef)(0),
                        n = (0, r.useCallback)(() => window.clearInterval(a.current), u || []);
                    (0, r.useEffect)(() => n, [n]);
                    const s = (null != u ? u : []).concat([t]);
                    return [
                        (0, r.useCallback)((u) => {
                            (a.current = window.setInterval(() => e(u, !0), t)), e(u, !1);
                        }, s),
                        n,
                    ];
                }
                function ot(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return lt(e, t);
                            var u = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === u && e.constructor && (u = e.constructor.name);
                            if ('Map' === u || 'Set' === u) return Array.from(e);
                            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))
                                return lt(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        u && (e = u);
                        var a = 0;
                        return function () {
                            return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function lt(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, a = new Array(t); u < t; u++) a[u] = e[u];
                    return a;
                }
                function ct(e, t, u) {
                    const a = (0, r.useMemo)(
                        () =>
                            (function (e, t, u, a) {
                                let n,
                                    r = !1,
                                    s = 0;
                                function i() {
                                    n && clearTimeout(n);
                                }
                                function o(...o) {
                                    const l = this,
                                        c = Date.now() - s;
                                    function m() {
                                        (s = Date.now()), u.apply(l, o);
                                    }
                                    r ||
                                        (a && !n && m(),
                                        i(),
                                        void 0 === a && c > e
                                            ? m()
                                            : !0 !== t &&
                                              (n = setTimeout(
                                                  a
                                                      ? function () {
                                                            n = void 0;
                                                        }
                                                      : m,
                                                  void 0 === a ? e - c : e,
                                              )));
                                }
                                return (
                                    'boolean' != typeof t && ((a = u), (u = t), (t = void 0)),
                                    (o.cancel = function () {
                                        i(), (r = !0);
                                    }),
                                    o
                                );
                            })(u, e),
                        t,
                    );
                    return (0, r.useEffect)(() => a.cancel, [a]), a;
                }
                var mt = u(30);
                let _t;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(_t || (_t = {}));
                const Et = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    dt = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: u,
                        getDirection: a,
                        getWrapperSize: n,
                        triggerMouseMoveOnUpdate: s = !1,
                    }) => {
                        const i = (e, u) => {
                            const a = t(e),
                                n = a[0],
                                r = a[1];
                            return r <= n ? 0 : nt(n, r, u);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                m = void 0 === c ? Et : c,
                                _ = (0, r.useRef)(null),
                                E = (0, r.useRef)(null),
                                d = (() => {
                                    const e = (0, r.useMemo)(() => ({}), []),
                                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                                        u = (e, u) => {
                                            t(e).set(u, u);
                                        },
                                        a = (e, u) => {
                                            t(e).delete(u);
                                        },
                                        n = (e, ...u) => {
                                            for (var a, n = ot(t(e).values()); !(a = n()).done; ) (0, a.value)(...u);
                                        };
                                    return (0, r.useMemo)(() => ({ on: u, off: a, trigger: n }), []);
                                })(),
                                A = ct(
                                    () => {
                                        o.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                F = (0, mt.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = _.current;
                                        t && (u(t, e), d.trigger('change', e), s && A());
                                    },
                                    onRest: (e) => d.trigger('rest', e),
                                    onStart: (e) => d.trigger('start', e),
                                    onPause: (e) => d.trigger('pause', e),
                                })),
                                p = F[0],
                                b = F[1],
                                D = (0, r.useCallback)(
                                    (e, t, u) => {
                                        var a;
                                        const n = p.scrollPosition.get(),
                                            r = (null != (a = p.scrollPosition.goal) ? a : 0) - n;
                                        return i(e, t * u + r + n);
                                    },
                                    [p.scrollPosition],
                                ),
                                g = (0, r.useCallback)(
                                    (e, { immediate: t = !1, reset: u = !0 } = {}) => {
                                        const a = _.current;
                                        a &&
                                            b.start({
                                                scrollPosition: i(a, e),
                                                immediate: t,
                                                reset: u,
                                                config: m.animationConfig,
                                                from: { scrollPosition: i(a, p.scrollPosition.get()) },
                                            });
                                    },
                                    [b, m.animationConfig, p.scrollPosition],
                                ),
                                B = (0, r.useCallback)(
                                    (e) => {
                                        const t = _.current,
                                            u = E.current;
                                        if (!t || !u) return;
                                        const a = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return n(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(u, m.step),
                                            r = D(t, e, a);
                                        g(r);
                                    },
                                    [g, D, m.step],
                                ),
                                h = (0, r.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && B(a(e)),
                                            _.current && d.trigger('mouseWheel', e, p.scrollPosition, t(_.current));
                                    },
                                    [p.scrollPosition, B, d],
                                ),
                                C = ((e, t = []) => {
                                    const u = (0, r.useRef)(),
                                        a = (0, r.useCallback)((...t) => {
                                            u.current && u.current(), (u.current = e(...t));
                                        }, t);
                                    return (
                                        (0, r.useEffect)(
                                            () => () => {
                                                u.current && u.current();
                                            },
                                            [a],
                                        ),
                                        a
                                    );
                                })(
                                    () =>
                                        Se(() => {
                                            const e = _.current;
                                            e &&
                                                (g(i(e, p.scrollPosition.goal), { immediate: !0 }),
                                                d.trigger('resizeHandled'));
                                        }),
                                    [g, p.scrollPosition.goal],
                                ),
                                v = st(() => {
                                    const e = _.current;
                                    if (!e) return;
                                    const t = i(e, p.scrollPosition.goal);
                                    t !== p.scrollPosition.goal && g(t, { immediate: !0 }),
                                        d.trigger('recalculateContent');
                                });
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('resize', C),
                                    () => {
                                        window.removeEventListener('resize', C);
                                    }
                                ),
                                [C],
                            );
                            return (0, r.useMemo)(
                                () => ({
                                    getWrapperSize: () => (E.current ? n(E.current) : void 0),
                                    getContainerSize: () => (_.current ? e(_.current) : void 0),
                                    getBounds: () =>
                                        _.current
                                            ? t(_.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: m.step.clampedArrowStepTimeout,
                                    clampPosition: i,
                                    handleMouseWheel: h,
                                    applyScroll: g,
                                    applyStepTo: B,
                                    contentRef: _,
                                    wrapperRef: E,
                                    scrollPosition: b,
                                    animationScroll: p,
                                    recalculateContent: v,
                                    events: { on: d.on, off: d.off },
                                }),
                                [p.scrollPosition, g, B, d.off, d.on, v, h, b, m.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    At = dt({
                        getBounds: (e) => {
                            var t, u;
                            return [
                                0,
                                e.offsetWidth -
                                    (null != (t = null == (u = e.parentElement) ? void 0 : u.offsetWidth) ? t : 0),
                            ];
                        },
                        getContainerSize: (e) => e.offsetWidth,
                        getWrapperSize: (e) => e.offsetWidth,
                        setScrollPosition: (e, t) => {
                            e.style.transform = `translateX(-${t.value.scrollPosition}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? _t.Next : _t.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    Ft = 'HorizontalBar_base_49',
                    pt = 'HorizontalBar_base__nonActive_82',
                    bt = 'HorizontalBar_leftButton_5f',
                    Dt = 'HorizontalBar_rightButton_03',
                    gt = 'HorizontalBar_track_0d',
                    Bt = 'HorizontalBar_thumb_fd',
                    ht = 'HorizontalBar_rail_32',
                    Ct = 'disable',
                    vt = { pending: !1, offset: 0 },
                    ft = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    wt = () => {},
                    St = (e, t) => Math.max(20, e.offsetWidth * t),
                    yt = (0, r.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = ft, onDrag: a = wt }) => {
                        const n = (0, r.useRef)(null),
                            i = (0, r.useRef)(null),
                            l = (0, r.useRef)(null),
                            c = (0, r.useRef)(null),
                            m = (0, r.useRef)(null),
                            _ = e.stepTimeout || 100,
                            E = (0, r.useState)(vt),
                            d = E[0],
                            A = E[1],
                            F = (0, r.useCallback)(
                                (e) => {
                                    A(e),
                                        m.current && a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: m.current });
                                },
                                [a],
                            ),
                            p = () => {
                                const t = c.current,
                                    u = m.current,
                                    a = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(a && t && u && n)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, a / n),
                                    o = nt(0, 1, r / (n - a)),
                                    _ = (t.offsetWidth - St(t, s)) * o;
                                (u.style.transform = `translateX(${0 | _}px)`),
                                    ((e) => {
                                        if (i.current && l.current && c.current && m.current) {
                                            if (0 === e)
                                                return i.current.classList.add(Ct), void l.current.classList.remove(Ct);
                                            if (
                                                ((t = c.current),
                                                (u = m.current),
                                                e - (t.offsetWidth - u.offsetWidth) >= -0.5)
                                            )
                                                return i.current.classList.remove(Ct), void l.current.classList.add(Ct);
                                            var t, u;
                                            i.current.classList.remove(Ct), l.current.classList.remove(Ct);
                                        }
                                    })(_);
                            },
                            b = st(() => {
                                (() => {
                                    const t = m.current,
                                        u = c.current,
                                        a = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(r && t && a && u)) return;
                                    const s = Math.min(1, a / r);
                                    (t.style.width = `${St(u, s)}px`),
                                        (t.style.display = 'flex'),
                                        n.current &&
                                            (1 === s ? n.current.classList.add(pt) : n.current.classList.remove(pt));
                                })(),
                                    p();
                            });
                        (0, r.useEffect)(() => Se(b)),
                            (0, r.useEffect)(
                                () =>
                                    Se(() => {
                                        const t = () => {
                                            p();
                                        };
                                        let u = wt;
                                        const a = () => {
                                            u(), (u = Se(b));
                                        };
                                        return (
                                            e.events.on('recalculateContent', b),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', a),
                                            () => {
                                                u(),
                                                    e.events.off('recalculateContent', b),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', a);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, r.useEffect)(() => {
                                if (!d.pending) return;
                                const t = o.O.client.events.mouse.move(([t, u]) => {
                                        var n;
                                        const r = e.contentRef.current,
                                            s = e.wrapperRef.current;
                                        if (!r || !s) return;
                                        const i = c.current,
                                            o = m.current;
                                        if (!i || !o) return;
                                        if ('inside' === u && t.clientX < 0) return;
                                        const l = t.clientX - d.offset - i.getBoundingClientRect().x,
                                            _ = (l / i.offsetWidth) * (null != (n = e.getContainerSize()) ? n : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(r, _),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            a({ type: 'dragging', thumb: o, thumbOffset: l, contentOffset: _ });
                                    }),
                                    u = o.O.client.events.mouse.up(() => {
                                        t(), F(vt);
                                    });
                                return () => {
                                    t(), u();
                                };
                            }, [e, d.offset, d.pending, a, F]);
                        const D = it((t) => e.applyStepTo(t), _, [e]),
                            g = D[0],
                            B = D[1];
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', B, !0),
                                () => document.removeEventListener('mouseup', B, !0)
                            ),
                            [B],
                        );
                        const C = (e) => {
                            e.target.classList.contains(Ct) || H('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: h()(Ft, t.base), ref: n, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: h()(bt, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ct) || 0 !== e.button || (H('play'), g(_t.Next));
                                },
                                onMouseUp: B,
                                ref: i,
                                onMouseEnter: C,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: h()(gt, t.track),
                                    onMouseDown: (t) => {
                                        const a = m.current;
                                        if (a && 0 === t.button)
                                            if ((H('play'), t.target === a))
                                                F({ pending: !0, offset: t.screenX - a.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const a = m.current,
                                                        n = e.contentRef.current;
                                                    if (!a || !n) return;
                                                    const r = u(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + r * t);
                                                })(t.screenX > a.getBoundingClientRect().x ? _t.Prev : _t.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: C,
                                },
                                s().createElement('div', { ref: m, className: h()(Bt, t.thumb) }),
                                s().createElement('div', { className: h()(ht, t.rail) }),
                            ),
                            s().createElement('div', {
                                className: h()(Dt, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ct) || 0 !== e.button || (H('play'), g(_t.Prev));
                                },
                                onMouseUp: B,
                                ref: l,
                                onMouseEnter: C,
                            }),
                        );
                    }),
                    Lt = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Pt = ({
                        children: e,
                        api: t,
                        className: u,
                        barClassNames: a,
                        areaClassName: n,
                        classNames: i,
                        scrollClassName: o,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const m = (0, r.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: h()(Lt.base, e.base) });
                            }, [a]),
                            _ = (0, r.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return s().createElement(
                            'div',
                            { className: h()(Lt.defaultScroll, u), onWheel: t.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: h()(Lt.defaultScrollArea, n) },
                                s().createElement(Tt, { className: o, api: _, classNames: i }, e),
                            ),
                            s().createElement(yt, { getStepByRailClick: l, api: t, onDrag: c, classNames: m }),
                        );
                    },
                    Tt = ({ api: e, className: t, classNames: u, children: a }) => (
                        (0, r.useEffect)(() => Se(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: h()(Lt.base, t) },
                            s().createElement(
                                'div',
                                {
                                    className: h()(Lt.wrapper, null == u ? void 0 : u.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                s().createElement(
                                    'div',
                                    { className: h()(Lt.content, null == u ? void 0 : u.content), ref: e.contentRef },
                                    a,
                                ),
                            ),
                        )
                    );
                (Tt.Bar = yt), (Tt.Default = Pt);
                const Rt = dt({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? _t.Next : _t.Prev),
                    }),
                    xt = 'VerticalBar_base_f3',
                    Nt = 'VerticalBar_base__nonActive_42',
                    kt = 'VerticalBar_topButton_d7',
                    Mt = 'VerticalBar_bottomButton_06',
                    It = 'VerticalBar_track_df',
                    Ot = 'VerticalBar_thumb_32',
                    Wt = 'VerticalBar_rail_43',
                    Ht = 'disable',
                    $t = () => {},
                    Gt = { pending: !1, offset: 0 },
                    zt = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Ut = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    jt = (e, t) => Math.max(20, e.offsetHeight * t),
                    Vt = (0, r.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = zt, onDrag: a = $t }) => {
                        const n = (0, r.useRef)(null),
                            i = (0, r.useRef)(null),
                            l = (0, r.useRef)(null),
                            c = (0, r.useRef)(null),
                            m = (0, r.useRef)(null),
                            _ = e.stepTimeout || 100,
                            E = (0, r.useState)(Gt),
                            d = E[0],
                            A = E[1],
                            F = (0, r.useCallback)(
                                (e) => {
                                    A(e),
                                        m.current && a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: m.current });
                                },
                                [a],
                            ),
                            p = st(() => {
                                const t = m.current,
                                    u = c.current,
                                    a = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(a && r && t && u)) return;
                                const s = Math.min(1, a / r);
                                return (
                                    (t.style.height = `${jt(u, s)}px`),
                                    (t.style.display = 'flex'),
                                    n.current &&
                                        (1 === s ? n.current.classList.add(Nt) : n.current.classList.remove(Nt)),
                                    s
                                );
                            }),
                            b = st(() => {
                                const t = c.current,
                                    u = m.current,
                                    a = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(a && t && u && n)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, a / n),
                                    o = nt(0, 1, r / (n - a)),
                                    _ = (t.offsetHeight - jt(t, s)) * o;
                                (u.style.transform = `translateY(${0 | _}px)`),
                                    ((e) => {
                                        if (i.current && l.current && c.current && m.current) {
                                            if (0 === Math.round(e))
                                                return i.current.classList.add(Ht), void l.current.classList.remove(Ht);
                                            if (
                                                ((t = c.current),
                                                (u = m.current),
                                                e - (t.offsetHeight - u.offsetHeight) >= -0.5)
                                            )
                                                return i.current.classList.remove(Ht), void l.current.classList.add(Ht);
                                            var t, u;
                                            i.current.classList.remove(Ht), l.current.classList.remove(Ht);
                                        }
                                    })(_);
                            }),
                            D = st(() => {
                                Ut(e, () => {
                                    p(), b();
                                });
                            });
                        (0, r.useEffect)(() => Se(D)),
                            (0, r.useEffect)(() => {
                                const t = () => {
                                    Ut(e, () => {
                                        b();
                                    });
                                };
                                let u = $t;
                                const a = () => {
                                    u(), (u = Se(D));
                                };
                                return (
                                    e.events.on('recalculateContent', D),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', a),
                                    () => {
                                        u(),
                                            e.events.off('recalculateContent', D),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', a);
                                    }
                                );
                            }, [e]),
                            (0, r.useEffect)(() => {
                                if (!d.pending) return;
                                const t = o.O.client.events.mouse.up(() => {
                                        F(Gt);
                                    }),
                                    u = o.O.client.events.mouse.move(([t]) => {
                                        Ut(e, (u) => {
                                            const n = c.current,
                                                r = m.current,
                                                s = e.getContainerSize();
                                            if (!n || !r || !s) return;
                                            const i = t.screenY - d.offset - n.getBoundingClientRect().y,
                                                o = (i / n.offsetHeight) * s;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(u, o),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: u.scrollTop },
                                            }),
                                                a({ type: 'dragging', thumb: r, thumbOffset: i, contentOffset: o });
                                        });
                                    });
                                return () => {
                                    t(), u();
                                };
                            }, [e, d.offset, d.pending, a, F]);
                        const g = it((t) => e.applyStepTo(t), _, [e]),
                            B = g[0],
                            C = g[1];
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', C, !0),
                                () => document.removeEventListener('mouseup', C, !0)
                            ),
                            [C],
                        );
                        const v = (e) => {
                            e.target.classList.contains(Ht) || H('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: h()(xt, t.base), ref: n, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: h()(kt, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ht) || 0 !== e.button || (H('play'), B(_t.Next));
                                },
                                ref: i,
                                onMouseEnter: v,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: h()(It, t.track),
                                    onMouseDown: (t) => {
                                        const a = m.current;
                                        if (a && 0 === t.button)
                                            if ((H('play'), t.target === a))
                                                F({ pending: !0, offset: t.screenY - a.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    m.current &&
                                                        Ut(e, (a) => {
                                                            if (!a) return;
                                                            const n = u(e),
                                                                r = e.clampPosition(a, a.scrollTop + n * t);
                                                            e.applyScroll(r);
                                                        });
                                                })(t.screenY > a.getBoundingClientRect().y ? _t.Prev : _t.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: v,
                                },
                                s().createElement('div', { ref: m, className: h()(Ot, t.thumb) }),
                                s().createElement('div', { className: h()(Wt, t.rail) }),
                            ),
                            s().createElement('div', {
                                className: h()(Mt, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ht) || 0 !== e.button || (H('play'), B(_t.Prev));
                                },
                                onMouseUp: C,
                                ref: l,
                                onMouseEnter: v,
                            }),
                        );
                    }),
                    qt = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Xt = ({
                        children: e,
                        api: t,
                        className: u,
                        barClassNames: a,
                        areaClassName: n,
                        scrollClassName: i,
                        scrollClassNames: o,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const m = (0, r.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: h()(qt.base, e.base) });
                            }, [a]),
                            _ = (0, r.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return s().createElement(
                            'div',
                            { className: h()(qt.defaultScroll, u), onWheel: t.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: h()(qt.area, n) },
                                s().createElement(Yt, { className: i, classNames: o, api: _ }, e),
                            ),
                            s().createElement(Vt, { getStepByRailClick: l, api: t, onDrag: c, classNames: m }),
                        );
                    },
                    Yt = ({ className: e, classNames: t, children: u, api: a }) => (
                        (0, r.useEffect)(() => Se(a.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: h()(qt.base, e), ref: a.wrapperRef, onWheel: a.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: h()(qt.content, null == t ? void 0 : t.content), ref: a.contentRef },
                                u,
                            ),
                        )
                    );
                Yt.Default = Xt;
                const Kt = { Vertical: n, Horizontal: a };
                let Zt;
                !(function (e) {
                    (e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH');
                })(Zt || (Zt = {}));
                const Qt = ({
                        children: e,
                        contentID: t,
                        decoratorID: u = 0,
                        targetId: a = 0,
                        args: n,
                        isEnabled: s = !0,
                        onMouseDown: i,
                    }) => {
                        const o = (0, r.useCallback)(() => {
                                (0, Le.c9)(Le.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: u,
                                    targetID: a,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: n,
                                }),
                                    $.playYes();
                            }, [n, t, u, a]),
                            l = (0, r.useCallback)(() => {
                                (0, Le.c9)(Le.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: u,
                                    targetID: a,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [t, u, a]),
                            c = (0, r.useCallback)(
                                (e) => {
                                    i && i(e), ((e) => e.button === Zt.RIGHT)(e) && o();
                                },
                                [i, o],
                            );
                        return (
                            (0, r.useEffect)(() => {
                                !1 === s && l();
                            }, [s, l]),
                            s ? (0, r.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    Jt = ['children'];
                function eu() {
                    return (
                        (eu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        eu.apply(this, arguments)
                    );
                }
                const tu = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]);
                            return n;
                        })(e, Jt);
                    return s().createElement(
                        Qt,
                        eu({}, u, { contentID: R.views.common.BackportContextMenu('resId') }),
                        t,
                    );
                };
                class uu extends s().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = Le.B3.GOLD;
                        else e = Le.B3.INTEGRAL;
                        const t = Le.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== t ? t : null;
                    }
                }
                uu.defaultProps = { format: 'integral' };
                const au = [
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
                function nu(e) {
                    return Object.entries(e || {}).map(([e, t]) => {
                        const u = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                u.number = t;
                                break;
                            case 'boolean':
                                u.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                u.string = t.toString();
                        }
                        return u;
                    });
                }
                const ru = (e, t, u = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: Le.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: a,
                                },
                                u,
                            ),
                        );
                    },
                    su = (e) => {
                        let t = e.children,
                            u = e.contentId,
                            a = e.args,
                            n = e.onMouseEnter,
                            s = e.onMouseLeave,
                            i = e.onMouseDown,
                            o = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            m = e.ignoreMouseClick,
                            _ = void 0 !== m && m,
                            E = e.decoratorId,
                            d = void 0 === E ? 0 : E,
                            A = e.isEnabled,
                            F = void 0 === A || A,
                            p = e.targetId,
                            b = void 0 === p ? 0 : p,
                            D = e.onShow,
                            g = e.onHide,
                            B = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]);
                                return n;
                            })(e, au);
                        const h = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            C = (0, r.useMemo)(() => b || Re().resId, [b]),
                            v = (0, r.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (ru(u, d, { isMouseEvent: !0, on: !0, arguments: nu(a) }, C),
                                    D && D(),
                                    (h.current.isVisible = !0));
                            }, [u, d, a, C, D]),
                            f = (0, r.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const e = h.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (h.current.timeoutId = 0)),
                                        ru(u, d, { on: !1 }, C),
                                        h.current.isVisible && g && g(),
                                        (h.current.isVisible = !1);
                                }
                            }, [u, d, C, g]),
                            w = (0, r.useCallback)((e) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(h.current.prevTarget) && f();
                                    }, 200)));
                            }, []);
                        (0, r.useEffect)(() => {
                            const e = h.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', w, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', w, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, r.useEffect)(() => {
                                !1 === F && f();
                            }, [F, f]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', f),
                                    () => {
                                        window.removeEventListener('mouseleave', f), f();
                                    }
                                ),
                                [f],
                            );
                        return F
                            ? (0, r.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((S = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((h.current.timeoutId = window.setTimeout(v, c ? 100 : 400)),
                                                      n && n(e),
                                                      S && S(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              f(), null == s || s(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === _ && f(), null == o || o(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === _ && f(), null == i || i(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      B,
                                  ),
                              )
                            : t;
                        var S;
                    },
                    iu = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function ou() {
                    return (
                        (ou =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        ou.apply(this, arguments)
                    );
                }
                const lu = R.views.common.tooltip_window.simple_tooltip_content,
                    cu = (e) => {
                        let t = e.children,
                            u = e.body,
                            a = e.header,
                            n = e.note,
                            i = e.alert,
                            o = e.args,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]);
                                return n;
                            })(e, iu);
                        const c = (0, r.useMemo)(() => {
                            const e = Object.assign({}, o, { body: u, header: a, note: n, alert: i });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [i, u, a, n, o]);
                        return s().createElement(
                            su,
                            ou(
                                {
                                    contentId:
                                        ((m = null == o ? void 0 : o.hasHtmlContent),
                                        m ? lu.SimpleTooltipHtmlContent('resId') : lu.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            t,
                        );
                        var m;
                    },
                    mu = 'TextOverflow_base_3b',
                    _u = ({ content: e, classMix: t }) => {
                        const u = (0, r.useRef)(null),
                            a = (0, r.useState)(!0),
                            n = a[0],
                            i = a[1];
                        return (
                            (0, r.useEffect)(() =>
                                Se(() => {
                                    const e = u.current;
                                    e && e.offsetWidth >= e.scrollWidth && i(!1);
                                }),
                            ),
                            s().createElement(
                                cu,
                                { isEnabled: n, body: e },
                                s().createElement('div', { ref: u, className: h()(mu, t) }, e),
                            )
                        );
                    },
                    Eu = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    du = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function Au(e) {
                    let t = '';
                    for (let u = du.length - 1; u >= 0; u--) for (; e >= du[u]; ) (t += Eu[u]), (e -= du[u]);
                    return t;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                var Fu = u(281);
                let pu;
                function bu(e, t) {
                    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(pu || (pu = {}));
                const Du = (e) => e.replace(/&nbsp;/g, ' '),
                    gu = (e, t, u) => {
                        if (u % 2) {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                        return [...e, t];
                    },
                    Bu = (e, t, u) => {
                        if (0 === u) return [t];
                        if (u % 2) return [...e, ' ' === t ? ' ' : t];
                        {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                    },
                    hu = (e, t, u = pu.left) => e.split(t).reduce(u === pu.left ? gu : Bu, []),
                    Cu = (() => {
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
                        return (t) =>
                            t
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(e);
                    })(),
                    vu = ['zh_cn', 'zh_sg', 'zh_tw'],
                    fu = (e, t = pu.left) => {
                        const u = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (vu.includes(u)) return Cu(e);
                        if ('ja' === u) {
                            return (0, Fu.D4)()
                                .parse(e)
                                .map((e) => Du(e));
                        }
                        return ((e, t = pu.left) => {
                            let u = [];
                            const a =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                n = Du(e);
                            return hu(n, /( )/, t).forEach((e) => (u = u.concat(hu(e, a, pu.left)))), u;
                        })(e, t);
                    },
                    wu = {
                        base: 'Content_base_0b',
                        base__platoon: 'Content_base__platoon_e3',
                        name: 'Content_name_f9',
                        base__rowBrPlayer: 'Content_base__rowBrPlayer_3b',
                        userName: 'Content_userName_7c',
                        clanTag: 'Content_clanTag_e7',
                        anonymizer: 'Content_anonymizer_7f',
                        base__hover: 'Content_base__hover_cf',
                        vehicle: 'Content_vehicle_3e',
                        vehicleTypeIcon: 'Content_vehicleTypeIcon_5c',
                        vehicleName: 'Content_vehicleName_18',
                        level: 'Content_level_cb',
                        damage: 'Content_damage_cb',
                        kills: 'Content_kills_6c',
                    },
                    Su = s().memo(({ isPlatoon: e, type: t, anonymizerNick: u, user: a, isRowHovered: n }) => {
                        const i = a.userName,
                            o = a.clanAbbrev,
                            l = a.vehicleName,
                            c = a.vehicleType,
                            m = a.vehicleLevel,
                            _ = a.damage,
                            E = a.kills,
                            d = a.databaseID,
                            A = a.hiddenUserName,
                            F = 'rowBrPlayer' === t || 'rowBrPlatoon' === t,
                            p = (0, r.useState)(!1),
                            b = p[0],
                            D = p[1],
                            g = h()(wu.base, wu[`base__${t}`], e && wu.base__platoon, (F || n || b) && wu.base__hover),
                            B = (0, r.useMemo)(
                                () => ({
                                    backgroundImage: `url(${R.images.gui.maps.icons.battleRoyale.vehicleTypes.$dyn(c)})`,
                                }),
                                [c],
                            ),
                            C = o ? `[${o}]` : null,
                            v = (0, r.useCallback)(() => {
                                e && D(!0);
                            }, [e]),
                            f = (0, r.useCallback)(() => {
                                e && D(!1);
                            }, [e]),
                            w = (0, r.useMemo)(() => ({ userName: i, databaseID: d, hiddenUserName: A }), [i, d, A]),
                            S =
                                'rowBrEnemy' === t
                                    ? R.strings.battle_royale.battleResult.stats.anonymizer.enemy.header()
                                    : R.strings.battle_royale.battleResult.stats.anonymizer.header();
                        return s().createElement(
                            'div',
                            { className: g, onMouseEnter: v, onMouseLeave: f },
                            s().createElement(
                                'div',
                                { className: wu.name },
                                i &&
                                    s().createElement(
                                        tu,
                                        { args: w },
                                        s().createElement(
                                            'div',
                                            { className: wu.userName },
                                            s().createElement(_u, { content: i }),
                                        ),
                                    ),
                                C && s().createElement('span', { className: wu.clanTag }, C),
                                u &&
                                    s().createElement(
                                        cu,
                                        {
                                            isEnabled: !0,
                                            header: bu(S, { name: u }),
                                            body: R.strings.battle_royale.battleResult.stats.anonymizer.body(),
                                        },
                                        s().createElement('div', { className: wu.anonymizer }),
                                    ),
                            ),
                            s().createElement(
                                'div',
                                { className: wu.vehicle },
                                s().createElement('div', { className: wu.vehicleTypeIcon, style: B }),
                                s().createElement('span', { className: wu.vehicleName }, l),
                            ),
                            s().createElement('span', { className: wu.level }, Au(m)),
                            s().createElement(
                                'span',
                                { className: wu.damage },
                                s().createElement(uu, { value: _, format: 'integral' }),
                            ),
                            s().createElement('span', { className: wu.kills }, E),
                        );
                    }),
                    yu = 'LeaderboardRow_base_19',
                    Lu = 'LeaderboardRow_base__leader_6c',
                    Pu = 'LeaderboardRow_place_61',
                    Tu = 'LeaderboardRow_players_c7',
                    Ru = 'LeaderboardRow_base__platoon_95';
                function xu() {
                    return (
                        (xu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        xu.apply(this, arguments)
                    );
                }
                const Nu = s().memo(({ place: e, isSquadMode: t, playersList: u, index: a }) => {
                        const n = (0, r.useState)(!1),
                            i = n[0],
                            o = n[1],
                            l = h()(yu, 0 === a && Lu, t && Ru),
                            c = (0, r.useCallback)(() => {
                                t || o(!0);
                            }, [t]),
                            m = (0, r.useCallback)(() => {
                                t || o(!1);
                            }, [t]);
                        return s().createElement(
                            'div',
                            { className: l, onMouseEnter: c, onMouseLeave: m },
                            s().createElement('div', { className: Pu }, e),
                            s().createElement(
                                'div',
                                { className: Tu },
                                u.map(({ value: e }, u) =>
                                    s().createElement(
                                        Su,
                                        xu({ key: `${u}_${e.user.userName}` }, e, { isPlatoon: t, isRowHovered: i }),
                                    ),
                                ),
                            ),
                        );
                    }),
                    ku = 'Leaderboard_base_49',
                    Mu = 'Leaderboard_middle_65',
                    Iu = 'Leaderboard_base__large_73',
                    Ou = 'Leaderboard_scrollContent_e5',
                    Wu = 'Leaderboard_legend_ec',
                    Hu = 'Leaderboard_damage_80',
                    $u = 'Leaderboard_kills_66',
                    Gu = 'Leaderboard_content_34';
                function zu() {
                    return (
                        (zu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        zu.apply(this, arguments)
                    );
                }
                const Uu = s().memo(() => {
                        const e = He('model.leaderboardLobbyModel').placesList,
                            t = Rt(),
                            u = (0, r.useContext)(F);
                        return s().createElement(
                            'div',
                            { className: h()(ku, (u.extraLarge || u.large) && Iu) },
                            s().createElement(
                                'div',
                                { className: Mu },
                                e &&
                                    s().createElement(
                                        'div',
                                        { className: Gu },
                                        s().createElement(
                                            'div',
                                            { className: Wu },
                                            s().createElement('div', { className: Hu }),
                                            s().createElement('div', { className: $u }),
                                        ),
                                        s().createElement(
                                            Kt.Vertical.Area.Default,
                                            { api: t },
                                            s().createElement(
                                                'div',
                                                { className: Ou },
                                                e.map(({ value: e }, t) =>
                                                    s().createElement(Nu, zu({ key: e.place, index: t }, e)),
                                                ),
                                            ),
                                        ),
                                    ),
                            ),
                        );
                    }),
                    ju = 'progressionCompleted';
                let Vu;
                !(function (e) {
                    (e.Active = 'active'), (e.Paused = 'paused'), (e.Completed = 'completed');
                })(Vu || (Vu = {}));
                const qu = {
                        base: 'StatItem_base_b6',
                        wreathImage: 'StatItem_wreathImage_ee',
                        statImage: 'StatItem_statImage_97',
                        statText: 'StatItem_statText_95',
                        divider: 'StatItem_divider_44',
                        maxValue: 'StatItem_maxValue_6d',
                        titleText: 'StatItem_titleText_7c',
                    },
                    Xu = s().memo(({ currentValue: e, maxValue: t, type: u }) => {
                        const a = Le.Z5.getNumberFormat(e, Le.B3.INTEGRAL),
                            n = R.strings.battle_royale.battleResult.stats.$dyn(u),
                            i = (0, r.useMemo)(
                                () => ({
                                    backgroundImage: `url(${R.images.gui.maps.icons.battleRoyale.battleResult.stat_list.$dyn(u)})`,
                                }),
                                [u],
                            );
                        return s().createElement(
                            cu,
                            { header: n.header(), body: n.body(), isEnabled: u.length > 0 },
                            s().createElement(
                                'div',
                                { className: qu.base },
                                s().createElement('div', { className: qu.wreathImage }),
                                s().createElement('div', { className: qu.statImage, style: i }),
                                s().createElement(
                                    'div',
                                    { className: qu.statText },
                                    s().createElement('span', { className: qu.currentValue }, a),
                                    t >= 0 &&
                                        s().createElement(
                                            s().Fragment,
                                            null,
                                            s().createElement('span', { className: qu.divider }, '/'),
                                            s().createElement('span', { className: qu.maxValue }, t),
                                        ),
                                ),
                                s().createElement('div', { className: qu.titleText }, n.title()),
                            ),
                        );
                    }),
                    Yu = 'StatsList_base_b3',
                    Ku = s().memo(
                        ({
                            statsList: e,
                            animationTrigger: t,
                            isAnimationSkipped: u,
                            onAnimationComplete: a,
                            transitionTimeout: n,
                            itemStartState: i,
                            itemFinishState: o,
                            isWinner: l,
                        }) => {
                            const c = (0, r.useState)(-1),
                                m = c[0],
                                _ = c[1],
                                E = e.length,
                                d = (0, r.useCallback)(() => {
                                    if (u) return;
                                    const e = m + 1;
                                    e < E ? (H(R.sounds.BR_result_effectiveness()), _(e)) : a && a();
                                }, [E, m, a, u]);
                            return (
                                (0, r.useEffect)(() => {
                                    t && !u && (H(R.sounds.BR_result_effectiveness()), _(0));
                                }, [t, u]),
                                (0, r.useEffect)(() => {
                                    u && _(e.length);
                                }, [u, e.length]),
                                s().createElement(
                                    'div',
                                    { className: Yu },
                                    e.map(({ value: e }, t) =>
                                        s().createElement(
                                            $e.Z,
                                            {
                                                key: `${e.type}_${e.currentValue}`,
                                                timeout: n || 300,
                                                in: m >= t,
                                                enter: !u,
                                                onEntered: d,
                                                classNames: o,
                                            },
                                            s().createElement(
                                                'div',
                                                { className: i },
                                                !(l && 'place' === e.type) && s().createElement(Xu, e),
                                            ),
                                        ),
                                    ),
                                )
                            );
                        },
                    ),
                    Zu = (e, t) => {
                        let u;
                        const a = setTimeout(() => {
                            u = e();
                        }, t);
                        return () => {
                            'function' == typeof u && u(), clearTimeout(a);
                        };
                    },
                    Qu = 'Title_base_e9',
                    Ju = 'Title_titleWrapper_70',
                    ea = 'Title_base__win_b7',
                    ta = 'Title_titleBg_b0',
                    ua = 'Title_place_ff',
                    aa = 'Title_base__winner_7f',
                    na = 'Title_base__firstPlace_74',
                    ra = 'Title_wreathIcon_51',
                    sa = 'Title_titleText_bd',
                    ia = 'Title_base__lose_a0',
                    oa = 'Title_vehicle_7f',
                    la = 'Title_vehicleTypeIcon_a4',
                    ca = 'Title_vehicleName_1c',
                    ma = 'TitleAnimations_baseEnterDone_0b',
                    _a = {
                        enterActive: 'TitleAnimations_wreathIcon_9e',
                        enterDone: 'TitleAnimations_wreathIcon__enterDone_84',
                    },
                    Ea = {
                        enterActive: 'TitleAnimations_titleBg_15',
                        enterDone: 'TitleAnimations_titleBg__enterDone_87',
                    },
                    da = { enterActive: 'TitleAnimations_title_76', enterDone: ma },
                    Aa = { enterActive: 'TitleAnimations_place_35', enterDone: 'TitleAnimations_place__enterDone_66' },
                    Fa = { enterActive: 'TitleAnimations_vehicle_dc', enterDone: ma };
                var pa;
                !(function (e) {
                    (e[(e.WREATH_ENTER = 0)] = 'WREATH_ENTER'),
                        (e[(e.BG_ENTER = 1)] = 'BG_ENTER'),
                        (e[(e.TITLE_ENTER = 2)] = 'TITLE_ENTER'),
                        (e[(e.VEHICLE_ENTER = 3)] = 'VEHICLE_ENTER');
                })(pa || (pa = {}));
                const ba = [200, 200, 500],
                    Da = [600, 400, 500, 300],
                    ga = s().memo(
                        ({
                            isFirstPlace: e,
                            isWinner: t,
                            place: u,
                            finishResultLabel: a,
                            vehicleType: n,
                            vehicleName: i,
                            onAnimationComplete: o,
                            animationTrigger: l,
                            isAnimationSkipped: c,
                        }) => {
                            const m = (0, r.useState)(-1),
                                _ = m[0],
                                E = m[1],
                                d = (0, r.useMemo)(
                                    () => ({
                                        backgroundImage: `url(${R.images.gui.maps.icons.battleRoyale.vehicleTypes.$dyn(n)})`,
                                    }),
                                    [n],
                                );
                            (0, r.useEffect)(() => {
                                l && !c && E(0);
                            }, [l, c]),
                                (0, r.useEffect)(() => {
                                    c && E(pa.VEHICLE_ENTER);
                                }, [c]),
                                (0, r.useEffect)(() => {
                                    if (!(_ < pa.WREATH_ENTER || _ >= pa.VEHICLE_ENTER || c))
                                        return Zu(() => E(_ + 1), ba[_]);
                                }, [_, c]);
                            const A = (0, r.useCallback)(() => {
                                    c || (o && o());
                                }, [o, c]),
                                F = h()(Qu, t && ea, !t && ia, t && !e && aa, e && na);
                            return s().createElement(
                                'div',
                                { className: F },
                                t &&
                                    s().createElement(
                                        $e.Z,
                                        {
                                            timeout: Da[pa.WREATH_ENTER],
                                            in: _ >= pa.WREATH_ENTER,
                                            enter: !c,
                                            classNames: _a,
                                        },
                                        s().createElement('div', { className: ra }),
                                    ),
                                s().createElement(
                                    'div',
                                    { className: Ju },
                                    t &&
                                        s().createElement(
                                            $e.Z,
                                            {
                                                timeout: Da[pa.TITLE_ENTER],
                                                in: _ >= pa.TITLE_ENTER,
                                                enter: !c,
                                                classNames: Aa,
                                            },
                                            s().createElement('div', { className: ua }, u),
                                        ),
                                    e &&
                                        s().createElement(
                                            $e.Z,
                                            {
                                                timeout: Da[pa.BG_ENTER],
                                                in: _ >= pa.BG_ENTER,
                                                enter: !c,
                                                classNames: Ea,
                                            },
                                            s().createElement('div', { className: ta }),
                                        ),
                                    s().createElement(
                                        $e.Z,
                                        {
                                            timeout: Da[pa.TITLE_ENTER],
                                            in: _ >= pa.TITLE_ENTER,
                                            enter: !c,
                                            classNames: da,
                                        },
                                        s().createElement('div', { className: sa }, a),
                                    ),
                                    s().createElement(
                                        $e.Z,
                                        {
                                            timeout: Da[pa.VEHICLE_ENTER],
                                            in: _ >= pa.VEHICLE_ENTER,
                                            enter: !c,
                                            onEntered: A,
                                            classNames: Fa,
                                        },
                                        s().createElement(
                                            'div',
                                            { className: oa },
                                            s().createElement('div', { className: la, style: d }),
                                            s().createElement('div', { className: ca }, i),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    Ba = {
                        base: 'PremiumRewardItem_base_b1',
                        image: 'PremiumRewardItem_image_37',
                        base__crystal: 'PremiumRewardItem_base__crystal_ab',
                        base__xp: 'PremiumRewardItem_base__xp_55',
                        base__credits: 'PremiumRewardItem_base__credits_33',
                        base__brcoin: 'PremiumRewardItem_base__brcoin_eb',
                        base__brProgressionToken: 'PremiumRewardItem_base__brProgressionToken_9a',
                        base__battlePassPoints: 'PremiumRewardItem_base__battlePassPoints_77',
                    },
                    ha = s().memo(({ value: e, type: t }) => {
                        const u = Le.Z5.getNumberFormat(e, Le.B3.INTEGRAL),
                            a = h()(Ba.base, Ba[`base__${t}`]),
                            n = (0, r.useMemo)(
                                () => ({
                                    backgroundImage: `url(${R.images.gui.maps.icons.battleRoyale.battleResult.battle_reward.rewards.$dyn(`${t}_small`)})`,
                                }),
                                [t],
                            );
                        return s().createElement(
                            I,
                            null,
                            s().createElement(
                                cu,
                                { body: R.strings.battle_royale.battleResult.premiumRewards.tooltip() },
                                s().createElement(
                                    'div',
                                    { className: a },
                                    s().createElement('div', { className: Ba.image, style: n }),
                                    s().createElement('span', null, u),
                                ),
                            ),
                        );
                    }),
                    Ca = 'PremiumRewards_base_9a',
                    va = 'PremiumRewards_ribbonLine_ec',
                    fa = 'PremiumRewards_ribbonLine__left_6d',
                    wa = 'PremiumRewards_ribbonLine__right_7e',
                    Sa = 'PremiumRewards_ribbonDot_1c',
                    ya = 'PremiumRewards_ribbonDot__left_fd',
                    La = 'PremiumRewards_ribbonDot__right_c4',
                    Pa = 'PremiumRewards_premium_33',
                    Ta = 'PremiumRewards_premiumLine_0c',
                    Ra = 'PremiumRewards_premiumWrapper_1f',
                    xa = 'PremiumRewards_premiumTitleWrapper_f2',
                    Na = 'PremiumRewards_premiumIcon_27',
                    ka = 'PremiumRewards_premiumText_8f',
                    Ma = 'PremiumRewards_rewardsList_7b',
                    Ia = 'PremiumRewards_rewardsItem_07',
                    Oa = s().memo(({ battleRewardsList: e }) =>
                        s().createElement(
                            'div',
                            { className: Ca },
                            s().createElement(
                                'div',
                                { className: Pa },
                                s().createElement(
                                    'div',
                                    { className: Ta },
                                    s().createElement('div', { className: h()(va, fa) }),
                                    s().createElement('div', { className: h()(Sa, ya) }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: xa },
                                    s().createElement('div', { className: Na }),
                                    s().createElement(
                                        'div',
                                        { className: ka },
                                        R.strings.battle_royale.battleResult.premiumRewards.title(),
                                    ),
                                ),
                                s().createElement(
                                    'div',
                                    { className: Ra },
                                    s().createElement(
                                        'div',
                                        { className: Ma },
                                        e.map(({ value: e }) =>
                                            s().createElement(
                                                'div',
                                                { className: Ia, key: `${e.type}_${e.value}` },
                                                s().createElement(ha, e),
                                            ),
                                        ),
                                    ),
                                ),
                                s().createElement(
                                    'div',
                                    { className: Ta },
                                    s().createElement('div', { className: h()(va, wa) }),
                                    s().createElement('div', { className: h()(Sa, La) }),
                                ),
                            ),
                        ),
                    ),
                    Wa = 'Ribbon_base_69',
                    Ha = 'Ribbon_shadow_a4',
                    $a = 'Ribbon_shadow__top_c9',
                    Ga = 'Ribbon_shadow__bottom_a2',
                    za = 'Ribbon_topLine_26',
                    Ua = 'Ribbon_bottomLine_04',
                    ja = 'Ribbon_ribbonLine_a5',
                    Va = 'Ribbon_ribbonIcon_66',
                    qa = 'Ribbon_base__win_15',
                    Xa = 'Ribbon_base__prem_78',
                    Ya = 'Ribbon_base__lose_9b',
                    Ka = 'Ribbon_base__lose_prem_ad',
                    Za = s().memo(({ battleRewardsListWithPremium: e, isWinner: t, hasPremium: u }) =>
                        s().createElement(
                            'div',
                            { className: h()(Wa, t && (u ? Xa : qa), !t && (u ? Ka : Ya)) },
                            s().createElement('div', { className: h()(Ha, $a) }),
                            s().createElement('div', { className: Va }),
                            s().createElement('div', { className: za }, s().createElement('div', { className: ja })),
                            u &&
                                s().createElement(
                                    'div',
                                    { className: Ua },
                                    s().createElement('div', { className: ja }),
                                ),
                            !u && e.length > 0 && s().createElement(Oa, { battleRewardsList: e }),
                            s().createElement('div', { className: h()(Ha, Ga) }),
                        ),
                    ),
                    Qa = {
                        base: 'Reward_base_07',
                        image: 'Reward_image_f5',
                        base__crystal: 'Reward_base__crystal_30',
                        base__xp: 'Reward_base__xp_c3',
                        base__credits: 'Reward_base__credits_40',
                        base__brcoin: 'Reward_base__brcoin_18',
                        base__brProgressionToken: 'Reward_base__brProgressionToken_38',
                        base__battlePassPoints: 'Reward_base__battlePassPoints_68',
                    },
                    Ja = s().memo(({ value: e, type: t }) => {
                        const u = Le.Z5.getNumberFormat(e, Le.B3.INTEGRAL),
                            a = h()(Qa.base, Qa[`base__${t}`]),
                            n = (0, r.useMemo)(
                                () => ({
                                    backgroundImage: `url(${R.images.gui.maps.icons.battleRoyale.battleResult.battle_reward.rewards.$dyn(t)})`,
                                }),
                                [t],
                            );
                        return s().createElement(
                            'div',
                            { className: a },
                            s().createElement('div', { className: Qa.image, style: n }),
                            s().createElement('span', null, u),
                        );
                    }),
                    en = (0, r.memo)(({ value: e, type: t, classMix: u }) => {
                        const a = (0, r.useMemo)(() => ({ currencyType: t }), [t]);
                        return s().createElement(
                            su,
                            {
                                contentId: R.views.battle_royale.lobby.tooltips.RewardCurrencyTooltipView('resId'),
                                args: a,
                            },
                            s().createElement('div', null, s().createElement(Ja, { value: e, type: t, classMix: u })),
                        );
                    }),
                    tn = 'BattleRewardList_base_68',
                    un = s().memo(
                        ({
                            battleRewardsList: e,
                            animationTrigger: t,
                            isAnimationSkipped: u,
                            onAnimationComplete: a,
                            transitionTimeout: n,
                            itemStartState: i,
                            itemFinishState: o,
                        }) => {
                            const l = (0, r.useState)(-1),
                                c = l[0],
                                m = l[1],
                                _ = e.length,
                                E = (0, r.useCallback)(() => {
                                    if (u) return;
                                    const e = c + 1;
                                    e < _ ? (H(R.sounds.BR_result_numbers()), m(e)) : a && a();
                                }, [_, c, a, u]);
                            return (
                                (0, r.useEffect)(() => {
                                    t && !u && (H(R.sounds.BR_result_numbers()), m(0));
                                }, [t, u]),
                                (0, r.useEffect)(() => {
                                    u && m(_);
                                }, [_, u]),
                                s().createElement(
                                    I,
                                    null,
                                    s().createElement(
                                        'div',
                                        { className: tn },
                                        e.map(({ value: e }, t) =>
                                            s().createElement(
                                                $e.Z,
                                                {
                                                    key: `${e.type}_${e.value}`,
                                                    timeout: n || 300,
                                                    in: c >= t,
                                                    enter: !u,
                                                    onEntered: E,
                                                    classNames: o,
                                                },
                                                s().createElement('div', { className: i }, s().createElement(en, e)),
                                            ),
                                        ),
                                    ),
                                )
                            );
                        },
                    ),
                    an = 'FormatText_base_d0',
                    nn = ({ binding: e, text: t = '', classMix: u, alignment: a = pu.left, formatWithBrackets: n }) => {
                        if (null === t) return console.error("FormatText was supplied with 'null'"), null;
                        const i = n && e ? bu(t, e) : t;
                        return s().createElement(
                            r.Fragment,
                            null,
                            i.split('\n').map((t, n) =>
                                s().createElement(
                                    'div',
                                    { className: h()(an, u), key: `${t}-${n}` },
                                    ((e, t, u) =>
                                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (u && e in u ? u[e] : fu(e, t))))(
                                        t,
                                        a,
                                        e,
                                    ).map((e, t) => s().createElement(r.Fragment, { key: `${t}-${e}` }, e)),
                                ),
                            ),
                        );
                    },
                    rn = {
                        base: 'ProgressBar_base_45',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let sn, on;
                !(function (e) {
                    (e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium');
                })(sn || (sn = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(on || (on = {}));
                const ln = ({ size: e = sn.Default }) => {
                        const t = h()(rn.background, rn[`background__${e}`]);
                        return s().createElement('div', { className: t });
                    },
                    cn = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                    mn = ({ size: e }) => {
                        const t = h()(cn.base, cn[`base__${e}`]);
                        return s().createElement('div', { className: t });
                    },
                    _n = {
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
                    En = (0, r.memo)(
                        ({ size: e, lineRef: t, disabled: u, baseStyles: a, isComplete: n, withoutBounce: r }) => {
                            const i = h()(
                                    _n.base,
                                    _n[`base__${e}`],
                                    u && _n.base__disabled,
                                    n && _n.base__finished,
                                    r && _n.base__withoutBounce,
                                ),
                                o = !u && !n;
                            return s().createElement(
                                'div',
                                { className: i, style: a, ref: t },
                                s().createElement('div', { className: _n.pattern }),
                                s().createElement('div', { className: _n.gradient }),
                                o && s().createElement(mn, { size: e }),
                            );
                        },
                    ),
                    dn = ({ size: e, value: t, lineRef: u, disabled: a, onComplete: n }) => {
                        const i = (0, r.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                            o = 100 === t;
                        return (
                            (0, r.useEffect)(() => {
                                o && n && n();
                            }, [o, n]),
                            s().createElement(En, { size: e, disabled: a, baseStyles: i, isComplete: o, lineRef: u })
                        );
                    };
                let An, Fn;
                !(function (e) {
                    (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
                })(An || (An = {})),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                    })(Fn || (Fn = {}));
                const pn = 'ProgressBarDeltaSimple_base_6c',
                    bn = 'ProgressBarDeltaSimple_delta_99',
                    Dn = (0, r.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: u,
                            from: a,
                            size: n,
                            to: i,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                        }) => {
                            const c = i < a,
                                m = (0, r.useState)(Fn.Idle),
                                _ = m[0],
                                E = m[1],
                                d = _ === Fn.In,
                                A = _ === Fn.End,
                                F = _ === Fn.Idle,
                                p = (0, r.useCallback)(
                                    (e) => {
                                        E(e), l && l(e);
                                    },
                                    [l],
                                );
                            (0, r.useEffect)(() => {
                                if (F && !u) {
                                    return Zu(() => {
                                        p(Fn.In);
                                    }, t);
                                }
                            }, [p, u, F, t]),
                                (0, r.useEffect)(() => {
                                    if (d) {
                                        return Zu(() => {
                                            o && o(), p(Fn.End);
                                        }, e + t);
                                    }
                                }, [p, d, o, t, e]);
                            const b = (0, r.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, t, e],
                                ),
                                D = (0, r.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, t, e],
                                ),
                                g = (0, r.useMemo)(
                                    () => ({ width: `${Math.abs(a - i)}%`, left: `${c ? i : a}%` }),
                                    [a, c, i],
                                );
                            return A
                                ? null
                                : s().createElement(
                                      'div',
                                      { className: pn, style: g },
                                      s().createElement(
                                          'div',
                                          { style: F ? b : D, className: bn },
                                          s().createElement(mn, { size: n }),
                                      ),
                                  );
                        },
                    ),
                    gn = (0, r.memo)(
                        ({
                            to: e,
                            size: t,
                            from: u,
                            lineRef: a,
                            disabled: n,
                            isComplete: i,
                            animationSettings: o,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const m = (0, r.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${o.line.duration}ms`,
                                    transitionDelay: `${o.line.delay}ms`,
                                }),
                                [o.line.delay, o.line.duration, e],
                            );
                            return s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(En, {
                                    size: t,
                                    lineRef: a,
                                    disabled: n,
                                    isComplete: i,
                                    baseStyles: m,
                                }),
                                u >= 0 &&
                                    s().createElement(Dn, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        freezed: o.freezed,
                                        from: u,
                                        size: t,
                                        to: e,
                                        onChangeAnimationState: l,
                                        onEndAnimation: c,
                                    }),
                            );
                        },
                    ),
                    Bn = 'ProgressBarDeltaGrow_base_7e',
                    hn = 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    Cn = 'ProgressBarDeltaGrow_glow_68',
                    vn = (e) => (e ? { left: 0 } : { right: 0 }),
                    fn = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    wn = (e) => ({ transitionDuration: `${e}ms` }),
                    Sn = (0, r.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: u,
                            from: a,
                            size: n,
                            to: i,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                            className: c,
                        }) => {
                            const m = i < a,
                                _ = (0, r.useState)(An.Idle),
                                E = _[0],
                                d = _[1],
                                A = E === An.End,
                                F = E === An.Idle,
                                p = E === An.Grow,
                                b = E === An.Shrink,
                                D = (0, r.useCallback)(
                                    (e) => {
                                        d(e), l && l(e);
                                    },
                                    [l],
                                ),
                                g = (0, r.useCallback)(
                                    (e, t) =>
                                        Zu(() => {
                                            D(e);
                                        }, t),
                                    [D],
                                );
                            (0, r.useEffect)(() => {
                                if (!u)
                                    return F
                                        ? g(An.Grow, t)
                                        : p
                                          ? g(An.Shrink, e)
                                          : b
                                            ? g(An.End, e)
                                            : void (A && o && o());
                            }, [g, u, A, p, F, b, o, t, e]);
                            const B = (0, r.useMemo)(() => Object.assign({ width: '100%' }, wn(e), vn(m)), [m, e]),
                                C = (0, r.useMemo)(() => Object.assign({ width: '0%' }, wn(e), vn(m)), [m, e]),
                                v = (0, r.useMemo)(() => Object.assign({ width: '0%' }, fn(m, a), wn(e)), [a, m, e]),
                                f = (0, r.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(i - a)}%` }, fn(m, a), wn(e)),
                                    [a, m, i, e],
                                );
                            if (A) return null;
                            const w = h()(Bn, c, m && 0 === i && hn);
                            return s().createElement(
                                'div',
                                { style: F ? v : f, className: w },
                                s().createElement(
                                    'div',
                                    { style: b ? C : B, className: Cn },
                                    s().createElement(mn, { size: n }),
                                ),
                            );
                        },
                    ),
                    yn = (0, r.memo)(
                        ({
                            to: e,
                            size: t,
                            from: u,
                            lineRef: a,
                            disabled: n,
                            isComplete: i,
                            animationSettings: o,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const m = e < u,
                                _ = (0, r.useState)(!1),
                                E = _[0],
                                d = _[1],
                                A = (0, r.useCallback)(
                                    (e) => {
                                        e === An.Shrink && d(!0), c && c(e);
                                    },
                                    [c],
                                ),
                                F = (0, r.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                                p = (0, r.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${o.line.duration}ms` }),
                                    [o.line.duration, e],
                                );
                            return s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(En, {
                                    size: t,
                                    lineRef: a,
                                    disabled: n,
                                    isComplete: i,
                                    withoutBounce: m && 0 === e,
                                    baseStyles: E ? p : F,
                                }),
                                u >= 0 &&
                                    s().createElement(Sn, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        onChangeAnimationState: A,
                                        freezed: o.freezed,
                                        onEndAnimation: l,
                                        from: u,
                                        size: t,
                                        to: e,
                                        className: o.delta.className,
                                    }),
                            );
                        },
                    ),
                    Ln = ['onComplete', 'onEndAnimation'];
                function Pn() {
                    return (
                        (Pn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Pn.apply(this, arguments)
                    );
                }
                const Tn = (0, r.memo)((e) => {
                        let t = e.onComplete,
                            u = e.onEndAnimation,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]);
                                return n;
                            })(e, Ln);
                        const n = (0, r.useState)(!1),
                            i = n[0],
                            o = n[1],
                            l = (0, r.useCallback)(() => {
                                const e = 100 === a.to;
                                e !== i && o(e), e && t && t(), u && u();
                            }, [i, t, u, a.to]);
                        switch (a.animationSettings.type) {
                            case on.Simple:
                                return s().createElement(gn, Pn({}, a, { onEndAnimation: l, isComplete: i }));
                            case on.Growing:
                                return s().createElement(yn, Pn({}, a, { onEndAnimation: l, isComplete: i }));
                            default:
                                return null;
                        }
                    }),
                    Rn = ['onEndAnimation'];
                function xn() {
                    return (
                        (xn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        xn.apply(this, arguments)
                    );
                }
                const Nn = (0, r.memo)((e) => {
                    let t = e.onEndAnimation,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]);
                            return n;
                        })(e, Rn);
                    const a = (0, r.useRef)({}),
                        n = (0, r.useCallback)(() => {
                            (a.current.from = void 0), t && t();
                        }, [t]),
                        i = 'number' == typeof a.current.from ? a.current.from : u.from;
                    return (
                        (a.current.from = i),
                        s().createElement(Tn, xn({}, u, { onEndAnimation: n, key: `${i}-${u.to}`, from: i }))
                    );
                });
                function kn() {
                    return (
                        (kn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        kn.apply(this, arguments)
                    );
                }
                const Mn = (0, r.memo)(
                        ({
                            size: e,
                            value: t,
                            lineRef: u,
                            disabled: a,
                            deltaFrom: n,
                            animationSettings: r,
                            onEndAnimation: i,
                            onChangeAnimationState: o,
                            onComplete: l,
                        }) => {
                            if (n === t)
                                return s().createElement(dn, {
                                    key: `${n}-${t}`,
                                    size: e,
                                    value: t,
                                    lineRef: u,
                                    disabled: a,
                                    onComplete: l,
                                });
                            const c = {
                                from: n,
                                to: t,
                                size: e,
                                lineRef: u,
                                disabled: a,
                                animationSettings: r,
                                onComplete: l,
                                onEndAnimation: i,
                                onChangeAnimationState: o,
                            };
                            return r.withStack
                                ? s().createElement(Nn, c)
                                : s().createElement(Tn, kn({ key: `${n}-${t}` }, c));
                        },
                    ),
                    In = (e) => ({
                        '--progress-base': `url(${e.bgImageBase})`,
                        '--progress-line-base': e.line.bgColorBase,
                        '--progress-line-disabled': e.line.bgColorDisabled,
                        '--progress-line-finished': e.line.bgColorFinished,
                        '--progress-pattern-base': `url(${e.pattern.bgImageBase})`,
                        '--progress-pattern-disabled': `url(${e.pattern.bgImageDisabled})`,
                        '--progress-pattern-finished': `url(${e.pattern.bgImageFinished})`,
                        '--progress-glow': `url('${e.glow}')`,
                        '--progress-glow-small': `url('${e.glowSmall}')`,
                        '--progress-delta-color': e.delta.color,
                        '--progress-delta-shadow': e.delta.shadow,
                    }),
                    On = (e, t, u) => {
                        if ('number' == typeof u) {
                            return (nt(0, t, u) / t) * 100;
                        }
                        return e;
                    },
                    Wn = {
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
                    Hn = {
                        freezed: !1,
                        withStack: !1,
                        type: on.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    $n = (0, r.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = Wn,
                            size: u = sn.Default,
                            animationSettings: a = Hn,
                            disabled: n = !1,
                            withoutBackground: i = !1,
                            value: o,
                            deltaFrom: l,
                            lineRef: c,
                            onChangeAnimationState: m,
                            onEndAnimation: _,
                            onComplete: E,
                        }) => {
                            const d = ((e, t, u) =>
                                (0, r.useMemo)(() => {
                                    const a = (nt(0, t, e) / t) * 100;
                                    return { value: a, deltaFrom: On(a, t, u) };
                                }, [u, t, e]))(o, e, l);
                            return s().createElement(
                                'div',
                                { className: h()(rn.base, rn[`base__${u}`]), style: In(t) },
                                !i && s().createElement(ln, { size: u }),
                                s().createElement(Mn, {
                                    size: u,
                                    lineRef: c,
                                    disabled: n,
                                    value: d.value,
                                    deltaFrom: d.deltaFrom,
                                    animationSettings: a,
                                    onEndAnimation: _,
                                    onChangeAnimationState: m,
                                    onComplete: E,
                                }),
                            );
                        },
                    );
                var Gn = u(403);
                function zn() {
                    return !1;
                }
                console.log;
                var Un = u(174);
                function jn(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return Vn(e, t);
                            var u = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === u && e.constructor && (u = e.constructor.name);
                            if ('Map' === u || 'Set' === u) return Array.from(e);
                            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))
                                return Vn(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        u && (e = u);
                        var a = 0;
                        return function () {
                            return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function Vn(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, a = new Array(t); u < t; u++) a[u] = e[u];
                    return a;
                }
                const qn = (e) => (0 === e ? window : window.subViews.get(e));
                const Xn = ((e, t) => {
                        const u = (0, r.createContext)({});
                        return [
                            function ({ mode: a = 'real', options: n, children: i, mocks: l }) {
                                const c = (0, r.useRef)([]),
                                    m = (u, a, n) => {
                                        var r;
                                        const s = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: u = qn,
                                                context: a = 'model',
                                            } = {}) {
                                                const n = new Map();
                                                function r(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? n.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, u) => {
                                                        u.forEach((t) => {
                                                            const u = n.get(t);
                                                            void 0 !== u && u(e);
                                                        });
                                                    });
                                                });
                                                const s = (e) => {
                                                    const n = u(t),
                                                        r = a.split('.').reduce((e, t) => e[t], n);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? r
                                                        : e.split('.').reduce((e, t) => {
                                                              const u = e[t];
                                                              return 'function' == typeof u ? u.bind(e) : u;
                                                          }, r);
                                                };
                                                return {
                                                    subscribe: (u, r) => {
                                                        const i = 'string' == typeof r ? `${a}.${r}` : a,
                                                            l = o.O.view.addModelObserver(i, t, !0);
                                                        return n.set(l, u), e && u(s(r)), l;
                                                    },
                                                    readByPath: s,
                                                    createCallback: (e, t) => {
                                                        const u = s(t);
                                                        return (...t) => {
                                                            u(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = s(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, u = jn(n.keys()); !(e = u()).done; ) r(e.value, t);
                                                    },
                                                    unsubscribe: r,
                                                };
                                            })(a),
                                            i =
                                                'real' === u
                                                    ? s
                                                    : Object.assign({}, s, {
                                                          readByPath:
                                                              null != (r = null == n ? void 0 : n.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            l = (e) =>
                                                'mocks' === u ? (null == n ? void 0 : n.getter(e)) : i.readByPath(e),
                                            m = (e) => c.current.push(e),
                                            _ = e({
                                                mode: u,
                                                readByPath: l,
                                                externalModel: i,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const a = null != t ? t : l(e),
                                                            n = Un.LO.box(a, { equals: zn });
                                                        return (
                                                            'real' === u &&
                                                                i.subscribe(
                                                                    (0, Un.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const a = null != t ? t : l(e),
                                                            n = Un.LO.box(a, { equals: zn });
                                                        return (
                                                            'real' === u &&
                                                                i.subscribe(
                                                                    (0, Un.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const a = l(t);
                                                        if (Array.isArray(e)) {
                                                            const n = e.reduce(
                                                                (e, t) => ((e[t] = Un.LO.box(a[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === u &&
                                                                    i.subscribe(
                                                                        (0, Un.aD)((t) => {
                                                                            e.forEach((e) => {
                                                                                n[e].set(t[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                n
                                                            );
                                                        }
                                                        {
                                                            const n = e,
                                                                r = Object.entries(n),
                                                                s = r.reduce(
                                                                    (e, [t, u]) => ((e[u] = Un.LO.box(a[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === u &&
                                                                    i.subscribe(
                                                                        (0, Un.aD)((e) => {
                                                                            r.forEach(([t, u]) => {
                                                                                s[u].set(e[t]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                s
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: m,
                                            }),
                                            E = { mode: u, model: _, externalModel: i, cleanup: m };
                                        return {
                                            model: _,
                                            controls: 'mocks' === u && n ? n.controls(E) : t(E),
                                            externalModel: i,
                                            mode: u,
                                        };
                                    },
                                    _ = (0, r.useRef)(!1),
                                    E = (0, r.useState)(a),
                                    d = E[0],
                                    A = E[1],
                                    F = (0, r.useState)(() => m(a, n, l)),
                                    p = F[0],
                                    b = F[1];
                                return (
                                    (0, r.useEffect)(() => {
                                        _.current ? b(m(d, n, l)) : (_.current = !0);
                                    }, [l, d, n]),
                                    (0, r.useEffect)(() => {
                                        A(a);
                                    }, [a]),
                                    (0, r.useEffect)(
                                        () => () => {
                                            p.externalModel.dispose(), c.current.forEach((e) => e());
                                        },
                                        [p],
                                    ),
                                    s().createElement(u.Provider, { value: p }, i)
                                );
                            },
                            () => (0, r.useContext)(u),
                        ];
                    })(
                        ({ observableModel: e }) => ({
                            root: e.object(),
                            battlePassProgress: e.object('personalResults.battlePassProgress'),
                            userInfo: e.object('playerBattleTypeStatus.user'),
                            battleTypeInfo: e.object('playerBattleTypeStatus'),
                        }),
                        ({ externalModel: e }) => ({
                            submit: e.createCallbackNoArgs('personalResults.battlePassProgress.onSubmitClick'),
                            invite: e.createCallbackNoArgs('playerBattleTypeStatus.onInviteToPlatoon'),
                        }),
                    ),
                    Yn = Xn[0],
                    Kn = Xn[1];
                let Zn, Qn, Jn, er, tr, ur, ar;
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
                        (e.Tankman = 'tankman'),
                        (e.Tankwoman = 'tankwoman'),
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
                        (e.NewYearInvoice = 'newYearInvoice'),
                        (e.NewYearSlot = 'newYearSlot'),
                        (e.BonusX5 = 'battle_bonus_x5'),
                        (e.CrewBonusX3 = 'crew_bonus_x3'),
                        (e.Vehicles = 'vehicles'),
                        (e.EpicSelectToken = 'epicSelectToken'),
                        (e.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                        (e.DeluxeGift = 'deluxe_gift'),
                        (e.BattleBoosterGift = 'battleBooster_gift'),
                        (e.OptionalDevice = 'optionalDevice'),
                        (e.EquipCoin = 'equipCoin');
                })(Zn || (Zn = {})),
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
                            (e.BattleAchievement = 'dossier_achievement'),
                            (e.EquipCoin = 'equipCoin');
                    })(Qn || (Qn = {})),
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
                            (e.S64x64 = 's64x64'),
                            (e.S48x48 = 's48x48');
                    })(Jn || (Jn = {})),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(er || (er = {})),
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
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                            (e.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
                            (e.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6');
                    })(tr || (tr = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(ur || (ur = {})),
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
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                            (e.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
                            (e.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6');
                    })(ar || (ar = {}));
                Zn.Items,
                    Zn.Equipment,
                    Zn.Xp,
                    Zn.XpFactor,
                    Zn.Blueprints,
                    Zn.BlueprintsAny,
                    Zn.Goodies,
                    Zn.Berths,
                    Zn.Slots,
                    Zn.Tokens,
                    Zn.CrewSkins,
                    Zn.CrewBooks,
                    Zn.Customizations,
                    Zn.CreditsFactor,
                    Zn.TankmenXp,
                    Zn.TankmenXpFactor,
                    Zn.FreeXpFactor,
                    Zn.BattleToken,
                    Zn.PremiumUniversal,
                    Zn.NaturalCover,
                    Zn.BpCoin,
                    Zn.BattlePassSelectToken,
                    Zn.BattlaPassFinalAchievement,
                    Zn.BattleBadge,
                    Zn.BonusX5,
                    Zn.CrewBonusX3,
                    Zn.NewYearInvoice,
                    Zn.EpicSelectToken,
                    Zn.Comp7TokenWeeklyReward,
                    Zn.DeluxeGift,
                    Zn.BattleBoosterGift,
                    Zn.OptionalDevice,
                    Zn.Gold,
                    Zn.Credits,
                    Zn.Crystal,
                    Zn.FreeXp,
                    Zn.BattlePassPoints,
                    Zn.EquipCoin,
                    Zn.PremiumPlus,
                    Zn.Premium,
                    Jn.Small,
                    Jn.Big;
                let nr, rr, sr, ir, or, lr, cr;
                !(function (e) {
                    (e.Active = 'active'),
                        (e.Paused = 'paused'),
                        (e.Completed = 'completed'),
                        (e.NotStarted = 'notStarted');
                })(nr || (nr = {})),
                    (function (e) {
                        (e.Vehicle = 'vehicle'), (e.Style = 'style'), (e.Tankman = 'tankman');
                    })(rr || (rr = {})),
                    (function (e) {
                        (e.Micro = 'micro'), (e.Small = 'small'), (e.Medium = 'medium');
                    })(sr || (sr = {})),
                    (function (e) {
                        (e.ACTIVE = 'active'), (e.COMPLETED = 'completed'), (e.NOT_CHOSEN = 'notChosen');
                    })(ir || (ir = {})),
                    (function (e) {
                        (e.AwaitSeason = 'awaitSeason'),
                            (e.Bought = 'bought'),
                            (e.Free = 'free'),
                            (e.Completed = 'completed'),
                            (e.CompletedRightNow = 'completedRightNow'),
                            (e.SwitchedChapterRightNow = 'switchedChapterRightNow'),
                            (e.NoVehiclesBase = 'noVehiclesBase'),
                            (e.ChapterNotChosen = 'chapterNotChosen');
                    })(or || (or = {})),
                    (function (e) {
                        (e.None = ''),
                            (e.ShowLevel = 'show'),
                            (e.HideLevel = 'hide'),
                            (e.HideLevelWithDelay = 'hideWithDelay');
                    })(lr || (lr = {})),
                    (function (e) {
                        (e.style = 'style'), (e.tankman = 'tankman');
                    })(cr || (cr = {}));
                cr.style, cr.tankman;
                var mr = u(613);
                Date.now(), mr.Ew.getRegionalDateTime, mr.Ew.getFormattedDateTime;
                const _r = (e) => {
                        switch (e) {
                            case sr.Micro:
                                return 's';
                            case sr.Small:
                                return 'm';
                            default:
                                return 'l';
                        }
                    },
                    Er = (e, t, u = '') => {
                        const a = u.length > 0 ? `_${u}` : u,
                            n = e.$dyn(`c_${t}${a}`),
                            r = String(t).slice(-1),
                            s = e.$dyn(`default_${r}${a}`);
                        return n || s;
                    },
                    dr = (e, t, u) => {
                        const a = R.images.gui.maps.icons.battlePass.logo.chapterIcons,
                            n = t ? 'BP' : '',
                            r = `${_r(u)}${n}`;
                        return { backgroundImage: `url(${Er(a, e, r)})` };
                    },
                    Ar = (e, t) => {
                        const u = t.postfix ? `_${t.postfix}` : '';
                        return ((e) => {
                            const t = e.path.$dyn(`${e.name}_${e.id}`),
                                u = e.path.$dyn('default');
                            return t || u;
                        })(e).$dyn(`${t.name}${u}`);
                    };
                let Fr;
                !(function (e) {
                    (e.Season = 'season'), (e.Chapter = 'chapter');
                })(Fr || (Fr = {}));
                const pr = {
                        base: 'Emblem_base_be',
                        progress: 'Emblem_progress_37',
                        progress__small: 'Emblem_progress__small_42',
                        progress__completed: 'Emblem_progress__completed_69',
                        hideProgress: 'Emblem_hideProgress_b4',
                        progress__hidden: 'Emblem_progress__hidden_6d',
                        image: 'Emblem_image_dc',
                        image__micro: 'Emblem_image__micro_aa',
                        image__small: 'Emblem_image__small_ce',
                        extra: 'Emblem_extra_d4',
                        extra__micro: 'Emblem_extra__micro_f7',
                        extra__small: 'Emblem_extra__small_28',
                        hideLevel: 'Emblem_hideLevel_f2',
                        showLevel: 'Emblem_showLevel_c5',
                        hideLevelSmall: 'Emblem_hideLevelSmall_cc',
                        showLevelSmall: 'Emblem_showLevelSmall_31',
                        hideLevelMicro: 'Emblem_hideLevelMicro_15',
                        showLevelMicro: 'Emblem_showLevelMicro_bc',
                        showIcon: 'Emblem_showIcon_c2',
                        showIconSmall: 'Emblem_showIconSmall_1d',
                        showIconMicro: 'Emblem_showIconMicro_f8',
                    },
                    br = {
                        base: 'Label_base_85',
                        textWithBlend: 'Label_textWithBlend_07',
                        textWithBlend__show: 'Label_textWithBlend__show_fa',
                        show: 'Label_show_69',
                        textWithBlend__new: 'Label_textWithBlend__new_4a',
                        textWithBlend__hide: 'Label_textWithBlend__hide_f1',
                        hide: 'Label_hide_33',
                        textMask: 'Label_textMask_7f',
                        textMask__gold: 'Label_textMask__gold_71',
                        textMask__goldContrast: 'Label_textMask__goldContrast_05',
                        textMask__animated: 'Label_textMask__animated_38',
                        maskAppearance: 'Label_maskAppearance_26',
                        textMask__micro: 'Label_textMask__micro_37',
                        textMask__small: 'Label_textMask__small_54',
                        textMask__medium: 'Label_textMask__medium_eb',
                        textMask__large: 'Label_textMask__large_0a',
                        textMask__extraLarge: 'Label_textMask__extraLarge_4c',
                        text: 'Label_text_67',
                        text__micro: 'Label_text__micro_a4',
                        text__small: 'Label_text__small_e0',
                        text__large: 'Label_text__large_65',
                        text__extraLarge: 'Label_text__extraLarge_22',
                        text__blended: 'Label_text__blended_67',
                        text__filtered: 'Label_text__filtered_86',
                        text__rewardScreen: 'Label_text__rewardScreen_68',
                        textAppearance: 'Label_textAppearance_31',
                        text__show: 'Label_text__show_95',
                        text__hide: 'Label_text__hide_37',
                        text__hideWithDelay: 'Label_text__hideWithDelay_53',
                        text__new: 'Label_text__new_a0',
                        hideLevel: 'Label_hideLevel_61',
                        showLevel: 'Label_showLevel_55',
                        hideLevelSmall: 'Label_hideLevelSmall_9d',
                        showLevelSmall: 'Label_showLevelSmall_96',
                        hideLevelMicro: 'Label_hideLevelMicro_9e',
                        showLevelMicro: 'Label_showLevelMicro_50',
                        showIcon: 'Label_showIcon_0f',
                        showIconSmall: 'Label_showIconSmall_96',
                        hideProgress: 'Label_hideProgress_0c',
                        showIconMicro: 'Label_showIconMicro_1e',
                    },
                    Dr = ({
                        level: e,
                        size: t,
                        isGold: u,
                        isForRewardScreen: a,
                        curState: n,
                        isFirstLevel: r,
                        showProgressionCompleted: i,
                    }) => {
                        const o = h()(br.base, br[`base__${t}`]),
                            l = h()(
                                br.text,
                                br.text__filtered,
                                br[`text__${t}`],
                                br[`text__${n}`],
                                i && br.text__hideWithDelay,
                                r && br.text__new,
                                a && br.text__rewardScreen,
                            ),
                            c = h()(
                                br.textWithBlend,
                                r && br.text__new,
                                i && br.text__hideWithDelay,
                                br[`textWithBlend__${n}`],
                            ),
                            m = h()(br.text, br.text__blended, br[`text__${t}`], a && br.text__rewardScreen),
                            _ = h()(
                                br.textMask,
                                u && br.textMask__gold,
                                a && br.textMask__animated,
                                u && a && br.textMask__goldContrast,
                                br[`textMask__${t}`],
                            );
                        return s().createElement(
                            'div',
                            { className: o },
                            s().createElement('div', { className: l }, e),
                            s().createElement(
                                'div',
                                { className: c },
                                s().createElement('div', { className: m }, e),
                                s().createElement('div', { className: _ }),
                            ),
                        );
                    },
                    gr = {
                        label: 'EmblemLabels_label_14',
                        label__small: 'EmblemLabels_label__small_a3',
                        label__micro: 'EmblemLabels_label__micro_4b',
                        label__hasProgress: 'EmblemLabels_label__hasProgress_26',
                        label__hasProgressProgression: 'EmblemLabels_label__hasProgressProgression_77',
                        label__hasProgressSmall: 'EmblemLabels_label__hasProgressSmall_c1',
                        label__show: 'EmblemLabels_label__show_3d',
                        showLevel: 'EmblemLabels_showLevel_04',
                        label__showSmall: 'EmblemLabels_label__showSmall_7e',
                        showLevelSmall: 'EmblemLabels_showLevelSmall_2f',
                        label__hide: 'EmblemLabels_label__hide_28',
                        hideLevel: 'EmblemLabels_hideLevel_be',
                        label_hideSmall: 'EmblemLabels_label_hideSmall_65',
                        hideLevelSmall: 'EmblemLabels_hideLevelSmall_c1',
                        label__hideWithDelay: 'EmblemLabels_label__hideWithDelay_68',
                        label__hideWithDelaySmall: 'EmblemLabels_label__hideWithDelaySmall_36',
                        label__new: 'EmblemLabels_label__new_d7',
                        label__newSmall: 'EmblemLabels_label__newSmall_c1',
                        label__disabled: 'EmblemLabels_label__disabled_b6',
                        icon: 'EmblemLabels_icon_40',
                        icon__small: 'EmblemLabels_icon__small_f3',
                        icon__micro: 'EmblemLabels_icon__micro_cf',
                        icon__animated: 'EmblemLabels_icon__animated_09',
                        showIcon: 'EmblemLabels_showIcon_d3',
                        icon__animatedSmall: 'EmblemLabels_icon__animatedSmall_e4',
                        icon__animatedMicro: 'EmblemLabels_icon__animatedMicro_10',
                        showIconSmall: 'EmblemLabels_showIconSmall_cb',
                        hideLevelMicro: 'EmblemLabels_hideLevelMicro_65',
                        showLevelMicro: 'EmblemLabels_showLevelMicro_ab',
                        hideProgress: 'EmblemLabels_hideProgress_7f',
                        showIconMicro: 'EmblemLabels_showIconMicro_5c',
                    },
                    Br = (e, t) => {
                        const u = e ? 'BP' : '';
                        return `${((e) => {
                            switch (e) {
                                case sr.Small:
                                    return 'l';
                                case sr.Micro:
                                    return 's';
                                default:
                                    return 'xl';
                            }
                        })(t)}${u}`;
                    },
                    hr = (0, r.memo)(
                        ({
                            newLevel: e,
                            level: t,
                            size: u,
                            battlePassState: a,
                            hasProgression: n,
                            isGolden: r,
                            labelAnimation: i,
                            newLabelAnimation: o,
                            isChapterChosen: l = !1,
                            chapterID: c = 0,
                            seasonNum: m = -1,
                            isProgressionCompleted: _ = !1,
                            hasBeenActive: E = !1,
                            isChapterSelection: d = !1,
                            isProgression: A = !1,
                        }) => {
                            let F = '',
                                p = '';
                            u === sr.Small
                                ? ((F = 'Small'), (p = '__small'))
                                : u === sr.Micro && ((F = 'Micro'), (p = '__micro'));
                            const b = a === or.SwitchedChapterRightNow,
                                D = a === or.CompletedRightNow,
                                g = ((e, t, u, a, n) => (e || n ? t || !u : t || !a))(d, _, E, l, A),
                                B = !A && !d;
                            return s().createElement(
                                s().Fragment,
                                null,
                                g
                                    ? s().createElement('div', {
                                          className: h()(gr.icon, p && gr[`icon${p}`], D && gr[`icon__animated${F}`]),
                                          style: {
                                              backgroundImage: `url(${(() => {
                                                  const e = R.images.gui.maps.icons.battlePass.logo,
                                                      t = Br(r, u);
                                                  if (B) {
                                                      if (_) {
                                                          const u = { path: e.icon, name: Fr.Season, id: m };
                                                          return Ar(u, { name: 'icon', postfix: t });
                                                      }
                                                      if (!l) return e.$dyn('not_chosen');
                                                  }
                                                  return Er(e.chapterIcons, c, t);
                                              })()})`,
                                          },
                                      })
                                    : s().createElement(
                                          'div',
                                          {
                                              className: h()(
                                                  gr.label,
                                                  gr[`label${p}`],
                                                  b && gr.label__new,
                                                  b && gr[`label__new${F}`],
                                                  !D && _ && gr.label__disabled,
                                                  gr[`label__${i}${F}`],
                                                  n && gr[`label__hasProgress${F}`],
                                                  n && gr[`label__hasProgress${F}${A ? 'Progression' : ''}`],
                                              ),
                                              lang: R.strings.settings.LANGUAGE_CODE(),
                                          },
                                          s().createElement(Dr, {
                                              level: t,
                                              size: u,
                                              isGold: r,
                                              isFirstLevel: b,
                                              curState: i,
                                              showProgressionCompleted: D,
                                              key: 'label',
                                          }),
                                      ),
                                e &&
                                    s().createElement(
                                        'div',
                                        {
                                            className: h()(
                                                gr.label,
                                                gr[`label${p}`],
                                                b && gr.label__new,
                                                b && gr[`label__new${F}`],
                                                gr[`label__${o}${F}`],
                                                n && gr[`label__hasProgress${F}`],
                                            ),
                                        },
                                        s().createElement(Dr, {
                                            level: e,
                                            size: u,
                                            isGold: r,
                                            isFirstLevel: b,
                                            curState: o,
                                            key: 'newLabel',
                                        }),
                                    ),
                            );
                        },
                    ),
                    Cr = {
                        base: 'EmblemProgressBar_base_5c',
                        base__small: 'EmblemProgressBar_base__small_6c',
                        base__completed: 'EmblemProgressBar_base__completed_6d',
                        hideProgress: 'EmblemProgressBar_hideProgress_18',
                        base__completePostProgression: 'EmblemProgressBar_base__completePostProgression_20',
                        base__hidden: 'EmblemProgressBar_base__hidden_8b',
                        hideLevel: 'EmblemProgressBar_hideLevel_1e',
                        showLevel: 'EmblemProgressBar_showLevel_5d',
                        hideLevelSmall: 'EmblemProgressBar_hideLevelSmall_ae',
                        showLevelSmall: 'EmblemProgressBar_showLevelSmall_df',
                        hideLevelMicro: 'EmblemProgressBar_hideLevelMicro_13',
                        showLevelMicro: 'EmblemProgressBar_showLevelMicro_ae',
                        showIcon: 'EmblemProgressBar_showIcon_55',
                        showIconSmall: 'EmblemProgressBar_showIconSmall_26',
                        showIconMicro: 'EmblemProgressBar_showIconMicro_78',
                    },
                    vr = (0, r.memo)(
                        ({
                            progression: e,
                            isNoVehicles: t = !1,
                            showProgressionCompleted: u,
                            isProgressionCompleted: a,
                            size: n,
                        }) => {
                            const r = h()(
                                Cr.base,
                                Cr[`base__${n}`],
                                u && Cr.base__completed,
                                !u && a && Cr.base__hidden,
                            );
                            return s().createElement(
                                'div',
                                { className: r },
                                s().createElement($n, {
                                    key: e.to,
                                    size: sn.Small,
                                    value: e.to || 0,
                                    deltaFrom: e.from || 0,
                                    disabled: t,
                                }),
                            );
                        },
                    );
                function fr() {
                    return (
                        (fr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        fr.apply(this, arguments)
                    );
                }
                let wr, Sr;
                !(function (e) {
                    (e.Closed = 'closed'), (e.Open = 'open');
                })(wr || (wr = {})),
                    (function (e) {
                        (e.Gold = 'gold'), (e.Completed = 'completed'), (e.Initial = 'initial');
                    })(Sr || (Sr = {}));
                const yr = (e, t, u, a, n) => {
                        const r = { path: R.images.gui.maps.icons.battlePass.logo.emblem, name: Fr.Chapter, id: a },
                            s = e ? wr.Open : wr.Closed,
                            i = ((e, t) =>
                                e
                                    ? Sr.Gold
                                    : t === or.Completed || t === or.CompletedRightNow
                                      ? Sr.Completed
                                      : Sr.Initial)(t, u),
                            o = n.length > 0 ? `_${n}` : '';
                        return { backgroundImage: `url(${Ar(r, { name: 'emblem', postfix: `${s}_${i}${o}` })})` };
                    },
                    Lr = (e, t) => {
                        const u = { path: R.images.gui.maps.icons.battlePass.logo.extra, name: Fr.Season, id: e };
                        return { backgroundImage: `url(${Ar(u, { name: 'extra', postfix: t })})` };
                    },
                    Pr = (0, r.memo)((e) => {
                        const t = e.progression,
                            u = e.size,
                            a = e.battlePassState,
                            n = e.hasBattlePass,
                            r = e.isChapterChosen,
                            i = e.hasBeenActive,
                            o = void 0 !== i && i,
                            l = e.isChapterSelection,
                            c = void 0 !== l && l,
                            m = e.isOpen,
                            _ = void 0 !== m && m,
                            E = e.isProgression,
                            d = void 0 !== E && E,
                            A = e.showProgressBar,
                            F = void 0 === A || A,
                            p = e.isExtra,
                            b = void 0 !== p && p,
                            D = e.chapterID,
                            g = e.seasonNum,
                            B = ((e) => {
                                switch (e) {
                                    case sr.Small:
                                        return 'small';
                                    case sr.Micro:
                                        return 'micro';
                                    default:
                                        return '';
                                }
                            })(u),
                            C = a === or.CompletedRightNow,
                            v = n || a === or.Bought,
                            f = (a === or.Completed || C) && v,
                            w = (a === or.Completed || C) && !v,
                            S = f || w,
                            y = void 0 !== t.from,
                            L = F && ((y && r) || o);
                        return s().createElement(
                            'div',
                            { className: pr.base },
                            b &&
                                s().createElement('div', {
                                    className: h()(pr.extra, B && pr[`extra__${B}`]),
                                    style: Lr(g, B),
                                }),
                            s().createElement(
                                'div',
                                { className: h()(pr.image, B && pr[`image__${B}`]), style: yr(_, v, a, D, B) },
                                a !== or.AwaitSeason &&
                                    s().createElement(
                                        s().Fragment,
                                        null,
                                        s().createElement(
                                            hr,
                                            fr(
                                                {
                                                    hasProgression: y,
                                                    isGolden: v,
                                                    isProgressionCompleted: S,
                                                    isChapterChosen: r,
                                                    hasBeenActive: o,
                                                    isChapterSelection: c,
                                                    isProgression: d,
                                                },
                                                e,
                                                t,
                                            ),
                                        ),
                                        L &&
                                            s().createElement(vr, {
                                                key: t.to,
                                                progression: t,
                                                showProgressionCompleted: C,
                                                isProgressionCompleted: S,
                                                size: u,
                                            }),
                                    ),
                            ),
                        );
                    }),
                    Tr = 'BattlePassEmblem_base_65',
                    Rr = 'BattlePassEmblem_flag_0c',
                    xr = 'BattlePassEmblem_flag__isChapterChosen_08',
                    Nr = 'BattlePassEmblem_emblem_2c',
                    kr = 'BattlePassEmblem_chapterLogoIcon_4d',
                    Mr = 'BattlePassEmblem_freePoints_8e',
                    Ir = (e, t) => {
                        const u = R.images.gui.maps.icons.battlePass.logo.flag;
                        return { backgroundImage: `url(${Er(u, e, t ? 's' : 'm')})` };
                    },
                    Or = (0, Gn.Pi)(() => {
                        const e = Kn(),
                            t = e.model,
                            u = e.controls,
                            a = t.battlePassProgress.get(),
                            n = a.hasExtra,
                            r = a.freePoints,
                            i = a.chapterID,
                            o = a.currentLevel,
                            l = a.currentLevelPoints,
                            c = a.isBattlePassPurchased,
                            m = a.progressionState,
                            _ = a.chapterState,
                            E = a.seasonNum,
                            d = { level: o, from: l },
                            A = m === ju,
                            F = 0 !== i && _ === Vu.Active,
                            p = ((e) => void 0 !== e.from && (e.level > 1 || e.from > 0))(d),
                            b = p && F,
                            D = A ? or.Completed : b ? (c ? or.Bought : or.Free) : or.ChapterNotChosen,
                            g = y().mediaSize <= f.Small,
                            B = g ? sr.Micro : sr.Small,
                            C = D === or.Completed,
                            v = b && !C,
                            w = D === or.Bought,
                            S = A && r > 0;
                        return s().createElement(
                            'div',
                            {
                                className: Tr,
                                onClick: u.submit,
                                onMouseDown: () => {
                                    $.playClick();
                                },
                                onMouseOver: () => {
                                    $.playHighlight();
                                },
                            },
                            !A && b && s().createElement('div', { className: h()(Rr, v && xr), style: Ir(i, g) }),
                            s().createElement(
                                'div',
                                { className: Nr },
                                s().createElement(Pr, {
                                    progression: d,
                                    size: B,
                                    battlePassState: D,
                                    hasBattlePass: c,
                                    isChapterChosen: F,
                                    isProgression: !1,
                                    chapterID: i,
                                    seasonNum: E,
                                    hasBeenActive: b,
                                    showProgressBar: !1,
                                    isOpen: v || S,
                                    isExtra: n,
                                }),
                                v && s().createElement('div', { className: kr, style: dr(i, w, B) }),
                                S && s().createElement('div', { className: Mr }, r),
                            ),
                        );
                    }),
                    Wr = {
                        base: 'BattlePassWidget_base_99',
                        content: 'BattlePassWidget_content_f7',
                        base__progress: 'BattlePassWidget_base__progress_a5',
                        title: 'BattlePassWidget_title_b9',
                        base__progressionCompleted: 'BattlePassWidget_base__progressionCompleted_54',
                        base__chapterNotChosen: 'BattlePassWidget_base__chapterNotChosen_0e',
                        progressionContainer: 'BattlePassWidget_progressionContainer_bf',
                        progressionBar: 'BattlePassWidget_progressionBar_25',
                        achievedPoints: 'BattlePassWidget_achievedPoints_df',
                        plus: 'BattlePassWidget_plus_ef',
                        pointsStats: 'BattlePassWidget_pointsStats_f9',
                        pointsMax: 'BattlePassWidget_pointsMax_21',
                        icon: 'BattlePassWidget_icon_85',
                        progressionCompleted: 'BattlePassWidget_progressionCompleted_8b',
                        chapterNotChosen: 'BattlePassWidget_chapterNotChosen_5a',
                        notUsedPoints: 'BattlePassWidget_notUsedPoints_63',
                    },
                    Hr = (0, Gn.Pi)(({ animationTrigger: e, isAnimationSkipped: t }) => {
                        const u = Kn().model.battlePassProgress.get(),
                            a = u.maxPoints,
                            n = u.earnedPoints,
                            i = u.currentLevelPoints,
                            o = u.progressionState,
                            l = u.chapterID,
                            c = u.chapterState,
                            m = u.freePoints,
                            _ = R.strings.battle_royale.battleResult.battlePassWidget,
                            E = (0, r.useState)(Hn.delta.duration),
                            d = E[0],
                            A = E[1],
                            F = (0, r.useState)(!0),
                            p = F[0],
                            b = F[1],
                            D = Boolean(n),
                            g = o === ju,
                            B = 0 !== l && c === Vu.Active,
                            C = g
                                ? _.tooltips.progressionCompleted()
                                : B
                                  ? _.tooltips.inProgress()
                                  : _.tooltips.chapterNotChosen(),
                            v = Object.assign({}, Hn, { freezed: p, delta: { duration: d, delay: 0 } });
                        (0, r.useEffect)(() => {
                            if (D && e && !t)
                                return (
                                    b(!1),
                                    H(R.sounds.bp_progress_bar_start()),
                                    Zu(() => {
                                        H(R.sounds.bp_progress_bar_stop());
                                    }, Hn.delta.duration)
                                );
                        }, [e, t, D]),
                            (0, r.useEffect)(() => {
                                D && t && (A(0), H(R.sounds.bp_progress_bar_stop()), e || b(!1));
                            }, [e, t, D]);
                        const f = h()(
                            Wr.base,
                            Wr[`base__${o}`],
                            !g && B && Wr.base__progress,
                            !g && !B && Wr.base__chapterNotChosen,
                        );
                        return s().createElement(
                            'div',
                            { className: f },
                            s().createElement(
                                cu,
                                { body: C },
                                s().createElement('div', null, s().createElement(Or, null)),
                            ),
                            s().createElement(
                                'div',
                                { className: Wr.content },
                                s().createElement('div', { className: Wr.title }, _.title()),
                                !g &&
                                    !B &&
                                    s().createElement(
                                        'div',
                                        { className: Wr.chapterNotChosen },
                                        s().createElement(nn, {
                                            classMix: Wr.chapterText,
                                            text: _.chapterNotChosen(),
                                            binding: {
                                                points: s().createElement('span', { className: Wr.notUsedPoints }, m),
                                                icon: s().createElement('span', { className: Wr.icon }),
                                            },
                                        }),
                                    ),
                                g &&
                                    s().createElement(
                                        'div',
                                        { className: Wr.progressionCompleted },
                                        _.progressionCompleted(),
                                    ),
                                !g &&
                                    B &&
                                    s().createElement(
                                        s().Fragment,
                                        null,
                                        s().createElement(
                                            'div',
                                            { className: Wr.progressionContainer },
                                            s().createElement(
                                                'div',
                                                { className: Wr.progressionBar },
                                                s().createElement($n, {
                                                    deltaFrom: i - n,
                                                    value: i,
                                                    maxValue: a,
                                                    animationSettings: v,
                                                }),
                                            ),
                                            D &&
                                                s().createElement(
                                                    'div',
                                                    { className: Wr.achievedPoints },
                                                    s().createElement('span', { className: Wr.plus }, '+'),
                                                    n,
                                                ),
                                        ),
                                        s().createElement(
                                            'div',
                                            { className: Wr.pointsStats },
                                            i,
                                            '/',
                                            s().createElement('span', { className: Wr.pointsMax }, a),
                                            s().createElement('span', { className: Wr.icon }),
                                        ),
                                    ),
                            ),
                        );
                    }),
                    $r = 'Result_base_41',
                    Gr = 'Result_title_6a',
                    zr = 'Result_base__lose_b8',
                    Ur = 'Result_base__win_32',
                    jr = 'Result_content_35',
                    Vr = 'Result_statItemStartState_d1',
                    qr = 'Result_ribbon_e5',
                    Xr = 'Result_ribbonComponent_98',
                    Yr = 'Result_battleRewardsList_b4',
                    Kr = 'Result_battleRewardsItemStartState_62',
                    Zr = 'Result_battleRewardsItemStartStatePremium_33',
                    Qr = 'Result_widget_0b',
                    Jr = 'Result_widget__battleQuests_a7',
                    es = 'Result_widgetsContainer_4c',
                    ts = 'ResultAnimations_baseEnterDone_b8',
                    us = { enterActive: 'ResultAnimations_baseEnterActive_dc', enterDone: ts },
                    as = { enterActive: 'ResultAnimations_itemsBase_f1', enterDone: ts },
                    ns = { enterActive: 'ResultAnimations_ribbon_d9', enterDone: ts },
                    rs = { enterActive: 'ResultAnimations_battlePassWidget_10', enterDone: ts },
                    ss = { enterActive: 'ResultAnimations_battleQuetsWidget_e0', enterDone: ts },
                    is = ['children'];
                function os() {
                    return (
                        (os =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        os.apply(this, arguments)
                    );
                }
                const ls = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]);
                                return n;
                            })(e, is);
                        return s().createElement(
                            su,
                            os(
                                {
                                    contentId:
                                        R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                            'resId',
                                        ),
                                    ignoreShowDelay: !0,
                                },
                                u,
                            ),
                            t,
                        );
                    },
                    cs = 'BattleQuestsWidget_base_2d',
                    ms = 'BattleQuestsWidget_content_32',
                    _s = 'BattleQuestsWidget_emblemContainer_10',
                    Es = 'BattleQuestsWidget_emblem_15',
                    ds = 'BattleQuestsWidget_glow_96',
                    As = 'BattleQuestsWidget_title_0b',
                    Fs = 'BattleQuestsWidget_questsComplete_d9',
                    ps = 'BattleQuestsWidget_questsCompleteContainer_d8',
                    bs = (0, r.memo)(({ questCompleted: e }) => {
                        const t = (0, r.useMemo)(() => ({ tooltipId: 'QuestCompletedTooltip' }), []),
                            u = R.strings.battle_royale.battleResult.battleQuestsWidget;
                        return s().createElement(
                            I,
                            null,
                            s().createElement(
                                ls,
                                { args: t, isEnabled: !0 },
                                s().createElement(
                                    'div',
                                    { className: cs },
                                    s().createElement(
                                        'div',
                                        { className: _s },
                                        s().createElement('div', { className: ds }),
                                        s().createElement('div', { className: Es }),
                                    ),
                                    s().createElement(
                                        'div',
                                        { className: ms },
                                        s().createElement('div', { className: As }, u.title()),
                                        s().createElement(
                                            'div',
                                            { className: ps },
                                            s().createElement(
                                                'div',
                                                { className: Fs },
                                                bu(u.questsComplete(), { count: e }),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    });
                var Ds;
                !(function (e) {
                    (e[(e.TitleEnter = 0)] = 'TitleEnter'),
                        (e[(e.StatsEnter = 1)] = 'StatsEnter'),
                        (e[(e.RibbonEnter = 2)] = 'RibbonEnter'),
                        (e[(e.BattleRewardsEnter = 3)] = 'BattleRewardsEnter'),
                        (e[(e.ProgressEnter = 4)] = 'ProgressEnter'),
                        (e[(e.AnimationFinished = 5)] = 'AnimationFinished');
                })(Ds || (Ds = {}));
                const gs = s().memo(
                        ({
                            onAnimationComplete: e,
                            animationTrigger: t,
                            isAnimationSkipped: u,
                            isWinner: a,
                            isFirstPlace: n,
                        }) => {
                            const i = He('model.personalResults'),
                                o = i.finishResultLabel,
                                l = i.vehicleName,
                                c = i.vehicleType,
                                m = i.statsList,
                                _ = i.place,
                                E = i.hasPremium,
                                d = i.questCompleted,
                                A = i.battleRewardsList,
                                F = i.battleRewardsListWithPremium,
                                p = i.battlePassProgress,
                                b = 'disabled' !== p.battlePassState,
                                D = h()($r, a && Ur, !a && zr),
                                g = E ? Zr : Kr,
                                B = (0, r.useState)(-1),
                                C = B[0],
                                v = B[1],
                                f = (0, r.useCallback)(() => {
                                    if (u) return;
                                    let t = C + 1;
                                    switch (t) {
                                        case Ds.ProgressEnter:
                                            0 === p.earnedPoints && (t += 1);
                                            break;
                                        case Ds.RibbonEnter:
                                            H(R.sounds.BR_result_redtape());
                                    }
                                    t === Ds.AnimationFinished && e && e(), v(t);
                                }, [u, C, p.earnedPoints, e]);
                            (0, r.useEffect)(() => {
                                t && !u && v(0);
                            }, [t, u]),
                                (0, r.useEffect)(() => {
                                    u && v(Ds.AnimationFinished);
                                }, [u]);
                            const w = h()(Qr, b && Jr),
                                S = l && systemLocale.toUpperCase(l);
                            return s().createElement(
                                'div',
                                { className: D },
                                s().createElement(
                                    'div',
                                    { className: Gr },
                                    s().createElement(ga, {
                                        finishResultLabel: o,
                                        isFirstPlace: n,
                                        place: _,
                                        isWinner: a,
                                        vehicleType: c,
                                        vehicleName: S,
                                        animationTrigger: C >= Ds.TitleEnter,
                                        isAnimationSkipped: u,
                                        onAnimationComplete: f,
                                    }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: jr },
                                    s().createElement(Ku, {
                                        statsList: m,
                                        animationTrigger: C >= Ds.StatsEnter,
                                        isAnimationSkipped: u,
                                        onAnimationComplete: f,
                                        itemStartState: Vr,
                                        itemFinishState: as,
                                        transitionTimeout: 200,
                                        isWinner: a,
                                    }),
                                    s().createElement(
                                        'div',
                                        { className: qr },
                                        s().createElement(
                                            $e.Z,
                                            {
                                                timeout: 500,
                                                in: C >= Ds.RibbonEnter,
                                                enter: !u,
                                                classNames: ns,
                                                onEntered: f,
                                            },
                                            s().createElement(
                                                'div',
                                                { className: Xr },
                                                s().createElement(Za, {
                                                    battleRewardsListWithPremium: F,
                                                    isWinner: a,
                                                    hasPremium: E,
                                                }),
                                            ),
                                        ),
                                        s().createElement(
                                            'div',
                                            { className: Yr },
                                            s().createElement(un, {
                                                battleRewardsList: A,
                                                animationTrigger: C >= Ds.BattleRewardsEnter,
                                                isAnimationSkipped: u,
                                                onAnimationComplete: f,
                                                itemStartState: g,
                                                itemFinishState: us,
                                                transitionTimeout: 200,
                                            }),
                                        ),
                                    ),
                                    s().createElement(
                                        'div',
                                        { className: es },
                                        b &&
                                            s().createElement(
                                                $e.Z,
                                                {
                                                    timeout: 500,
                                                    in: C >= Ds.ProgressEnter,
                                                    enter: !u,
                                                    classNames: rs,
                                                    onEntered: f,
                                                },
                                                s().createElement(
                                                    'div',
                                                    { className: Qr },
                                                    s().createElement(Hr, {
                                                        animationTrigger: C >= Ds.AnimationFinished,
                                                        isAnimationSkipped: u,
                                                    }),
                                                ),
                                            ),
                                        d > 0 &&
                                            s().createElement(
                                                I,
                                                null,
                                                s().createElement(
                                                    $e.Z,
                                                    {
                                                        timeout: 500,
                                                        in: C >= Ds.ProgressEnter,
                                                        enter: !u,
                                                        classNames: ss,
                                                        onEntered: f,
                                                    },
                                                    s().createElement(
                                                        'div',
                                                        { className: w },
                                                        s().createElement(bs, { questCompleted: d }),
                                                    ),
                                                ),
                                            ),
                                    ),
                                ),
                            );
                        },
                    ),
                    Bs = {
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
                let hs, Cs;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(hs || (hs = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(Cs || (Cs = {}));
                const vs = ({
                    children: e,
                    size: t,
                    isFocused: u,
                    type: a,
                    disabled: n,
                    mixClass: i,
                    soundHover: o,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: m,
                    onMouseDown: _,
                    onMouseUp: E,
                    onMouseLeave: d,
                    onClick: A,
                }) => {
                    const F = (0, r.useRef)(null),
                        p = (0, r.useState)(u),
                        b = p[0],
                        D = p[1],
                        g = (0, r.useState)(!1),
                        B = g[0],
                        C = g[1],
                        v = (0, r.useState)(!1),
                        f = v[0],
                        w = v[1],
                        S = (0, r.useCallback)(() => {
                            n || (F.current && (F.current.focus(), D(!0)));
                        }, [n]),
                        y = (0, r.useCallback)(
                            (e) => {
                                b && null !== F.current && !F.current.contains(e.target) && D(!1);
                            },
                            [b],
                        ),
                        L = (0, r.useCallback)(
                            (e) => {
                                n || (A && A(e));
                            },
                            [n, A],
                        ),
                        P = (0, r.useCallback)(
                            (e) => {
                                n || (null !== o && H(o), c && c(e), w(!0));
                            },
                            [n, o, c],
                        ),
                        T = (0, r.useCallback)(
                            (e) => {
                                m && m(e);
                            },
                            [m],
                        ),
                        x = (0, r.useCallback)(
                            (e) => {
                                n || (E && E(e), C(!1));
                            },
                            [n, E],
                        ),
                        N = (0, r.useCallback)(
                            (e) => {
                                n || (null !== l && H(l), _ && _(e), u && S(), C(!0));
                            },
                            [n, l, _, S, u],
                        ),
                        k = (0, r.useCallback)(
                            (e) => {
                                n || (d && d(e), C(!1));
                            },
                            [n, d],
                        ),
                        M = h()(
                            Bs.base,
                            Bs[`base__${a}`],
                            {
                                [Bs.base__disabled]: n,
                                [Bs[`base__${t}`]]: t,
                                [Bs.base__focus]: b,
                                [Bs.base__highlightActive]: B,
                                [Bs.base__firstHover]: f,
                            },
                            i,
                        ),
                        I = h()(Bs.state, Bs.state__default);
                    return (
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mousedown', y),
                                () => {
                                    document.removeEventListener('mousedown', y);
                                }
                            ),
                            [y],
                        ),
                        (0, r.useEffect)(() => {
                            D(u);
                        }, [u]),
                        s().createElement(
                            'div',
                            {
                                ref: F,
                                className: M,
                                onMouseEnter: P,
                                onMouseMove: T,
                                onMouseUp: x,
                                onMouseDown: N,
                                onMouseLeave: k,
                                onClick: L,
                            },
                            a !== hs.ghost &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: Bs.back }),
                                    s().createElement('span', { className: Bs.texture }),
                                ),
                            s().createElement(
                                'span',
                                { className: I },
                                s().createElement('span', { className: Bs.stateDisabled }),
                                s().createElement('span', { className: Bs.stateHighlightHover }),
                                s().createElement('span', { className: Bs.stateHighlightActive }),
                            ),
                            s().createElement(
                                'span',
                                { className: Bs.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                vs.defaultProps = { type: hs.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const fs = (0, r.memo)(vs);
                let ws;
                !(function (e) {
                    (e.Solo = 'solo'), (e.RandomPlatoon = 'randomPlatoon'), (e.Platoon = 'platoon');
                })(ws || (ws = {}));
                const Ss = (e, t) => {
                        const u = e.$dyn(t);
                        if ('string' == typeof u) return u;
                        throw new Error(`ReadString  ${t} is invalid `);
                    },
                    ys = 'Platoon_container_df',
                    Ls = 'Platoon_header_9f',
                    Ps = 'Platoon_userInfo_ed',
                    Ts = 'Platoon_name_c6',
                    Rs = 'Platoon_clan_b1',
                    xs = 'Platoon_icon_da',
                    Ns = R.strings.battle_royale.battleResult.playerBattleTypeStatus,
                    ks = R.images.gui.maps.icons.battleRoyale.battleResult.battle_type,
                    Ms = ({ userName: e, clanAbbrev: t, battleType: u }) =>
                        s().createElement(
                            s().Fragment,
                            null,
                            s().createElement(
                                'div',
                                { className: ys },
                                s().createElement('div', { className: Ls }, Ss(Ns.header, u)),
                                s().createElement(
                                    'div',
                                    { className: Ps },
                                    s().createElement('div', { className: Ts }, e),
                                    t &&
                                        s().createElement(nn, {
                                            text: Ns.clan(),
                                            binding: { clanAbbrev: t },
                                            classMix: Rs,
                                        }),
                                ),
                            ),
                            s().createElement('div', {
                                style: { backgroundImage: `url(${ks.$dyn(u)})` },
                                className: xs,
                            }),
                        ),
                    Is = 'PlayerBattleTypeStatus_base_50',
                    Os = 'PlayerBattleTypeStatus_container_51',
                    Ws = 'PlayerBattleTypeStatus_header_f3',
                    Hs = 'PlayerBattleTypeStatus_text_30',
                    $s = 'PlayerBattleTypeStatus_icon_36',
                    Gs = 'PlayerBattleTypeStatus_button_80',
                    zs = R.strings.battle_royale.battleResult.playerBattleTypeStatus,
                    Us = (0, Gn.Pi)(() => {
                        const e = Kn(),
                            t = e.model,
                            u = e.controls,
                            a = t.battleTypeInfo.get(),
                            n = a.battleType,
                            r = a.isPlatoonWindowOpen,
                            i = t.userInfo.get(),
                            o = i.userName,
                            l = i.clanAbbrev;
                        return s().createElement(
                            'div',
                            { className: Is },
                            (() => {
                                switch (n) {
                                    case ws.Solo:
                                        return s().createElement(
                                            s().Fragment,
                                            null,
                                            s().createElement(
                                                'div',
                                                { className: Os },
                                                s().createElement('div', { className: Ws }, zs.header.solo()),
                                                s().createElement('div', { className: Hs }, zs.text.solo()),
                                            ),
                                            s().createElement('div', { className: $s }),
                                        );
                                    case ws.RandomPlatoon:
                                        return s().createElement(
                                            s().Fragment,
                                            null,
                                            s().createElement(Ms, { userName: o, clanAbbrev: l, battleType: n }),
                                            s().createElement(
                                                fs,
                                                {
                                                    type: hs.primary,
                                                    size: Cs.medium,
                                                    mixClass: Gs,
                                                    onClick: u.invite,
                                                    disabled: r,
                                                },
                                                zs.button.text(),
                                            ),
                                        );
                                    case ws.Platoon:
                                        return s().createElement(Ms, { userName: o, clanAbbrev: l, battleType: n });
                                    default:
                                        return console.error(`Invalid battle type ${n}`), null;
                                }
                            })(),
                        );
                    }),
                    js = [1, 2, 3, 4, 5];
                let Vs;
                var qs;
                !(function (e) {
                    (e.Results = 'results'), (e.Leaderboard = 'leaderboard');
                })(Vs || (Vs = {})),
                    (function (e) {
                        (e[(e.BackgroundEnter = 0)] = 'BackgroundEnter'),
                            (e[(e.TabBarEnter = 1)] = 'TabBarEnter'),
                            (e[(e.ResultContentEnter = 2)] = 'ResultContentEnter'),
                            (e[(e.BottomComponentsEnter = 3)] = 'BottomComponentsEnter'),
                            (e[(e.AnimationFinished = 4)] = 'AnimationFinished');
                    })(qs || (qs = {}));
                const Xs = () => {
                    const e = He('model').mapName,
                        t = He('model.personalResults').place,
                        u = (0, r.useState)(Vs.Results),
                        a = u[0],
                        n = u[1],
                        i = (0, r.useState)({ animationStage: -1, isSkipped: !1 }),
                        o = i[0],
                        l = i[1];
                    (0, r.useEffect)(
                        () =>
                            Se(() => {
                                l({ animationStage: 0, isSkipped: !1 });
                            }),
                        [],
                    );
                    const c = (0, r.useCallback)(() => {
                            (o.animationStage = qs.AnimationFinished), (o.isSkipped = !0), l(Object.assign({}, o));
                        }, [o]),
                        m = (0, r.useCallback)(
                            (e) => {
                                const t = e.currentTarget.getAttribute('tab-key');
                                o.isSkipped || c(), n(t);
                            },
                            [o.isSkipped, c],
                        ),
                        _ = (0, r.useCallback)(() => {
                            (0, Le.Sy)();
                        }, []),
                        E = (0, r.useCallback)(() => {
                            o.isSkipped ? _() : c();
                        }, [o.isSkipped, _, c]);
                    Te(ye.n.ESCAPE, E);
                    const d = (0, r.useCallback)(() => {
                            o.isSkipped ||
                                ((o.animationStage += 1),
                                o.animationStage === qs.AnimationFinished
                                    ? (o.isSkipped = !0)
                                    : l(Object.assign({}, o)));
                        }, [o]),
                        A = js.includes(t),
                        F = 1 === t;
                    return s().createElement(
                        'div',
                        { className: Ge },
                        s().createElement(
                            $e.Z,
                            {
                                in: o.animationStage >= qs.BackgroundEnter,
                                timeout: 500,
                                classNames: ut,
                                enter: !o.isSkipped,
                                onEntered: d,
                            },
                            s().createElement(
                                'div',
                                { className: h()(ze, A && Ye) },
                                s().createElement('div', { className: Xe }),
                                s().createElement('div', { className: qe }),
                            ),
                        ),
                        s().createElement(
                            'div',
                            { className: h()(je, a === Vs.Results && Ve) },
                            s().createElement(gs, {
                                animationTrigger: o.animationStage >= qs.ResultContentEnter,
                                isAnimationSkipped: o.isSkipped,
                                onAnimationComplete: d,
                                isWinner: A,
                                isFirstPlace: F,
                            }),
                        ),
                        s().createElement(
                            'div',
                            { className: h()(je, a === Vs.Leaderboard && Ve) },
                            s().createElement(Uu, null),
                        ),
                        s().createElement(
                            $e.Z,
                            {
                                timeout: 500,
                                in: o.animationStage >= qs.TabBarEnter,
                                enter: !o.isSkipped,
                                className: Ue,
                                classNames: at,
                                onEntered: d,
                            },
                            s().createElement(
                                te,
                                { isTabsCentered: !0 },
                                s().createElement(
                                    'div',
                                    { 'tabs-role': Z.LIST },
                                    s().createElement(
                                        he,
                                        { 'tabs-role': Z.TAB, 'tab-key': Vs.Results, onClick: m },
                                        R.strings.battle_royale.battleResult.tab.result(),
                                    ),
                                    s().createElement(
                                        he,
                                        { 'tabs-role': Z.TAB, 'tab-key': Vs.Leaderboard, onClick: m },
                                        R.strings.battle_royale.battleResult.tab.leaderboard(),
                                    ),
                                ),
                            ),
                        ),
                        s().createElement(
                            $e.Z,
                            {
                                timeout: 500,
                                in: o.animationStage >= qs.BottomComponentsEnter,
                                enter: !o.isSkipped,
                                classNames: tt,
                                onEntered: d,
                            },
                            s().createElement(
                                'div',
                                { className: Qe },
                                s().createElement('p', { className: Ze }, e),
                                s().createElement('div', { className: Ke }, s().createElement(Us, null)),
                            ),
                        ),
                        s().createElement(
                            'div',
                            { className: Je },
                            s().createElement(we, {
                                caption: R.strings.menu.viewHeader.closeBtn.label(),
                                type: 'close',
                                side: 'right',
                                onClick: _,
                            }),
                        ),
                    );
                };
                engine.whenReady.then(() => {
                    W().render(
                        s().createElement(Yn, null, s().createElement(I, null, s().createElement(Xs, null))),
                        document.getElementById('root'),
                    );
                });
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(e) {
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var u = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](u, u.exports, __webpack_require__), u.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, u, a) => {
            if (!t) {
                var n = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [t, u, a] = deferred[o], r = !0, s = 0; s < t.length; s++)
                        (!1 & a || n >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[s]))
                            ? t.splice(s--, 1)
                            : ((r = !1), a < n && (n = a));
                    if (r) {
                        deferred.splice(o--, 1);
                        var i = u();
                        void 0 !== i && (e = i);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > a; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [t, u, a];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(t, { a: t }), t;
        }),
        (__webpack_require__.d = (e, t) => {
            for (var u in t)
                __webpack_require__.o(t, u) &&
                    !__webpack_require__.o(e, u) &&
                    Object.defineProperty(e, u, { enumerable: !0, get: t[u] });
        }),
        (__webpack_require__.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (__webpack_require__.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (__webpack_require__.r = (e) => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (__webpack_require__.j = 969),
        (() => {
            var e = { 969: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, u) => {
                    var a,
                        n,
                        [r, s, i] = u,
                        o = 0;
                    if (r.some((t) => 0 !== e[t])) {
                        for (a in s) __webpack_require__.o(s, a) && (__webpack_require__.m[a] = s[a]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (t && t(u); o < r.length; o++)
                        (n = r[o]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
                    return __webpack_require__.O(l);
                },
                u = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            u.forEach(t.bind(null, 0)), (u.push = t.bind(null, u.push.bind(u)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [695], () => __webpack_require__(202));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
