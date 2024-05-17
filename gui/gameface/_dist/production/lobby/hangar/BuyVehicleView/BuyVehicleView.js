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
                t.d(e, { O: () => Y });
                var r = {};
                t.r(r),
                    t.d(r, { mouse: () => d, off: () => A, on: () => E, onResize: () => s, onScaleUpdated: () => c });
                var n = {};
                t.r(n),
                    t.d(n, {
                        events: () => r,
                        getMouseGlobalPosition: () => D,
                        getSize: () => F,
                        graphicsQuality: () => m,
                    });
                var a = {};
                t.r(a), t.d(a, { getBgUrl: () => C, getTextureUrl: () => B });
                var i = {};
                function o(u) {
                    return (e) => (
                        engine.on(u, e),
                        () => {
                            engine.off(u, e);
                        }
                    );
                }
                function l(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                t.r(i),
                    t.d(i, {
                        addModelObserver: () => O,
                        addPreloadTexture: () => k,
                        children: () => a,
                        displayStatus: () => h,
                        displayStatusIs: () => q,
                        events: () => g,
                        extraSize: () => K,
                        forceTriggerMouseMove: () => z,
                        freezeTextureBeforeResize: () => R,
                        getBrowserTexturePath: () => L,
                        getDisplayStatus: () => U,
                        getScale: () => P,
                        getSize: () => N,
                        getViewGlobalPosition: () => I,
                        isEventHandled: () => $,
                        isFocused: () => j,
                        pxToRem: () => W,
                        remToPx: () => H,
                        resize: () => M,
                        sendEvent: () => x,
                        setAnimateWindow: () => V,
                        setEventHandled: () => G,
                        setInputPaddingsRem: () => T,
                        setSidePaddingsRem: () => S,
                        whenTutorialReady: () => X,
                    });
                const s = o('clientResized'),
                    c = o('self.onScaleUpdated'),
                    E = (u, e) => engine.on(u, e),
                    A = (u, e) => engine.off(u, e),
                    _ = { down: o('mousedown'), up: o('mouseup'), move: o('mousemove') };
                const d = (function () {
                    const u = { listeners: 0, enabled: !0, initialized: !1 };
                    function e() {
                        u.enabled && l(!1);
                    }
                    function t() {
                        u.enabled && l(!0);
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
                            : l(!1);
                    }
                    const n = ['down', 'up', 'move'].reduce(
                        (e, t) => (
                            (e[t] = (function (e) {
                                return (t) => {
                                    u.listeners += 1;
                                    let n = !0;
                                    const a = `mouse${e}`,
                                        i = _[e]((u) => t([u, 'outside']));
                                    function o(u) {
                                        t([u, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, o),
                                        r(),
                                        () => {
                                            n &&
                                                (i(),
                                                window.removeEventListener(a, o),
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
                            u.enabled && l(!0);
                        },
                        disableOutside() {
                            u.enabled && l(!1);
                        },
                    });
                })();
                function F(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function D(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const m = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function B(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function C(u, e, t) {
                    return `url(${B(u, e, t)})`;
                }
                const h = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    g = {
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
                    p = ['args'];
                const b = 2,
                    v = 16,
                    f = 32,
                    w = 64,
                    y = (u, e) => {
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
                                })(e, p);
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
                    x = {
                        close(u) {
                            y('popover' === u ? b : f);
                        },
                        minimize() {
                            y(w);
                        },
                        move(u) {
                            y(v, { isMouseEvent: !0, on: u });
                        },
                    };
                function k(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function T(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, 15);
                }
                function L(u, e, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, r);
                }
                function O(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function S(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, 15);
                }
                function N(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function M(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function I(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: H(e.x), y: H(e.y) };
                }
                function R() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function P() {
                    return viewEnv.getScale();
                }
                function W(u) {
                    return viewEnv.pxToRem(u);
                }
                function H(u) {
                    return viewEnv.remToPx(u);
                }
                function V(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function j() {
                    return viewEnv.isFocused();
                }
                function G() {
                    return viewEnv.setEventHandled();
                }
                function $() {
                    return viewEnv.isEventHandled();
                }
                function z() {
                    viewEnv.forceTriggerMouseMove();
                }
                function U() {
                    return viewEnv.getShowingStatus();
                }
                const q = Object.keys(h).reduce((u, e) => ((u[e] = () => viewEnv.getShowingStatus() === h[e]), u), {}),
                    K = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    X = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : g.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]),
                    Y = { view: i, client: n };
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
                t.d(e, {
                    B3: () => l,
                    Z5: () => i.Z5,
                    B0: () => o,
                    wU: () => b,
                    ry: () => m,
                    Eu: () => B,
                    SW: () => g,
                    P3: () => p,
                });
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
                let o;
                !(function (u) {
                    (u[(u.UNDEFINED = 0)] = 'UNDEFINED'),
                        (u[(u.TOOLTIP = 1)] = 'TOOLTIP'),
                        (u[(u.POP_OVER = 2)] = 'POP_OVER'),
                        (u[(u.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (u[(u.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (u[(u.MOVE = 16)] = 'MOVE'),
                        (u[(u.CLOSE = 32)] = 'CLOSE'),
                        (u[(u.MINIMIZE = 64)] = 'MINIMIZE');
                })(o || (o = {}));
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    s = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var A = t(521),
                    _ = t(67);
                const d = ['args'];
                function F(u, e, t, r, n, a, i) {
                    try {
                        var o = u[a](i),
                            l = o.value;
                    } catch (u) {
                        return void t(u);
                    }
                    o.done ? e(l) : Promise.resolve(l).then(r, n);
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
                                        t = arguments;
                                    return new Promise(function (r, n) {
                                        var a = u.apply(e, t);
                                        function i(u) {
                                            F(a, r, n, i, o, 'next', u);
                                        }
                                        function o(u) {
                                            F(a, r, n, i, o, 'throw', u);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    B = () =>
                        new Promise((u) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    u();
                                });
                            });
                        }),
                    C = (u, e) => {
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
                    h = () => C(o.CLOSE),
                    g = () => C(o.POP_OVER, { on: !1 }),
                    p = (u, e, t, r, n = R.invalid('resId'), a) => {
                        const i = _.O.view.getViewGlobalPosition(),
                            l = t.getBoundingClientRect(),
                            s = l.x,
                            c = l.y,
                            E = l.width,
                            A = l.height,
                            d = {
                                x: _.O.view.pxToRem(s) + i.x,
                                y: _.O.view.pxToRem(c) + i.y,
                                width: _.O.view.pxToRem(E),
                                height: _.O.view.pxToRem(A),
                            };
                        C(o.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: u,
                            decoratorID: r || R.invalid('resId'),
                            targetID: n,
                            direction: e,
                            bbox: D(d),
                            on: !0,
                            args: a,
                        });
                    },
                    b = () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
                    v = (u, e) => {
                        u.keyCode === A.n.ESCAPE && e();
                    };
                var f = t(572);
                const w = n.instance,
                    y = {
                        DataTracker: a.Z,
                        ViewModel: f.Z,
                        ViewEventType: o,
                        NumberFormatType: l,
                        RealFormatType: s,
                        TimeFormatType: c,
                        DateFormatType: E,
                        makeGlobalBoundingBox: D,
                        sendMoveEvent: (u) => C(o.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: h,
                        sendClosePopOverEvent: g,
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            C(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: p,
                        addEscapeListener: (u) => {
                            const e = (e) => v(e, u);
                            return (
                                window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e)
                            );
                        },
                        closeOnEsc: (u) => {
                            v(u, h);
                        },
                        handleViewEvent: C,
                        onBindingsReady: m,
                        onLayoutReady: B,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: b,
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
                        ClickOutsideManager: w,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = y;
            },
            613: (u, e, t) => {
                'use strict';
                t.d(e, { Z5: () => r, cy: () => n });
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
                    };
            },
            922: (u, e, t) => {
                'use strict';
                var r = t(179),
                    n = t.n(r);
                const a = (u, e, t) =>
                    e.extraLargeHeight || e.largeHeight || e.mediumHeight || e.smallHeight || e.extraSmallHeight
                        ? (e.extraLargeHeight && t.extraLarge) ||
                          (e.largeHeight && t.large) ||
                          (e.mediumHeight && t.medium) ||
                          (e.smallHeight && t.small) ||
                          (e.extraSmallHeight && t.extraSmall)
                            ? u
                            : null
                        : u;
                var i = t(67);
                const o = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var l;
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
                })(l || (l = {}));
                const c = i.O.client.getSize('rem'),
                    E = c.width,
                    A = c.height,
                    _ = Object.assign({ width: E, height: A }, s(E, A, o)),
                    d = (0, r.createContext)(_),
                    F = ['children'];
                const D = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                r,
                                n = {},
                                a = Object.keys(u);
                            for (r = 0; r < a.length; r++) (t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                            return n;
                        })(u, F);
                    const n = (0, r.useContext)(d),
                        i = n.extraLarge,
                        o = n.large,
                        l = n.medium,
                        s = n.small,
                        c = n.extraSmall,
                        E = n.extraLargeWidth,
                        A = n.largeWidth,
                        _ = n.mediumWidth,
                        D = n.smallWidth,
                        m = n.extraSmallWidth,
                        B = n.extraLargeHeight,
                        C = n.largeHeight,
                        h = n.mediumHeight,
                        g = n.smallHeight,
                        p = n.extraSmallHeight,
                        b = { extraLarge: B, large: C, medium: h, small: g, extraSmall: p };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && i) return e;
                        if (t.large && o) return e;
                        if (t.medium && l) return e;
                        if (t.small && s) return e;
                        if (t.extraSmall && c) return e;
                    } else {
                        if (t.extraLargeWidth && E) return a(e, t, b);
                        if (t.largeWidth && A) return a(e, t, b);
                        if (t.mediumWidth && _) return a(e, t, b);
                        if (t.smallWidth && D) return a(e, t, b);
                        if (t.extraSmallWidth && m) return a(e, t, b);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && B) return e;
                            if (t.largeHeight && C) return e;
                            if (t.mediumHeight && h) return e;
                            if (t.smallHeight && g) return e;
                            if (t.extraSmallHeight && p) return e;
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
                (0, r.memo)(D);
                const m = (u) => {
                        const e = (0, r.useRef)(!1);
                        e.current || (u(), (e.current = !0));
                    },
                    B = ({ children: u }) => {
                        const e = (0, r.useContext)(d),
                            t = (0, r.useState)(e),
                            a = t[0],
                            l = t[1],
                            c = (0, r.useCallback)((u, e) => {
                                const t = i.O.view.pxToRem(u),
                                    r = i.O.view.pxToRem(e);
                                l(Object.assign({ width: t, height: r }, s(t, r, o)));
                            }, []),
                            E = (0, r.useCallback)(() => {
                                const u = i.O.client.getSize('px');
                                c(u.width, u.height);
                            }, [c]);
                        m(() => {
                            i.O.client.events.on('clientResized', c), i.O.client.events.on('self.onScaleUpdated', E);
                        }),
                            (0, r.useEffect)(
                                () => () => {
                                    i.O.client.events.off('clientResized', c),
                                        i.O.client.events.off('self.onScaleUpdated', E);
                                },
                                [c, E],
                            );
                        const A = (0, r.useMemo)(() => Object.assign({}, a), [a]);
                        return n().createElement(d.Provider, { value: A }, u);
                    };
                var C = t(483),
                    h = t.n(C),
                    g = t(926),
                    p = t.n(g);
                let b, v, f;
                !(function (u) {
                    (u[(u.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                        (u[(u.Small = o.small.width)] = 'Small'),
                        (u[(u.Medium = o.medium.width)] = 'Medium'),
                        (u[(u.Large = o.large.width)] = 'Large'),
                        (u[(u.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge');
                })(b || (b = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = o.small.width)] = 'Small'),
                            (u[(u.Medium = o.medium.width)] = 'Medium'),
                            (u[(u.Large = o.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge');
                    })(v || (v = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = o.extraSmall.height)] = 'ExtraSmall'),
                            (u[(u.Small = o.small.height)] = 'Small'),
                            (u[(u.Medium = o.medium.height)] = 'Medium'),
                            (u[(u.Large = o.large.height)] = 'Large'),
                            (u[(u.ExtraLarge = o.extraLarge.height)] = 'ExtraLarge');
                    })(f || (f = {}));
                const w = () => {
                        const u = (0, r.useContext)(d),
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
                            a = ((u) => {
                                switch (!0) {
                                    case u.extraLargeWidth:
                                        return v.ExtraLarge;
                                    case u.largeWidth:
                                        return v.Large;
                                    case u.mediumWidth:
                                        return v.Medium;
                                    case u.smallWidth:
                                        return v.Small;
                                    case u.extraSmallWidth:
                                        return v.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), v.ExtraSmall;
                                }
                            })(u),
                            i = ((u) => {
                                switch (!0) {
                                    case u.extraLargeHeight:
                                        return f.ExtraLarge;
                                    case u.largeHeight:
                                        return f.Large;
                                    case u.mediumHeight:
                                        return f.Medium;
                                    case u.smallHeight:
                                        return f.Small;
                                    case u.extraSmallHeight:
                                        return f.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), f.ExtraSmall;
                                }
                            })(u);
                        return { mediaSize: n, mediaWidth: a, mediaHeight: i, remScreenWidth: e, remScreenHeight: t };
                    },
                    y = ['children', 'className'];
                function x() {
                    return (
                        (x =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        x.apply(this, arguments)
                    );
                }
                const k = {
                        [v.ExtraSmall]: '',
                        [v.Small]: p().SMALL_WIDTH,
                        [v.Medium]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH}`,
                        [v.Large]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH} ${p().LARGE_WIDTH}`,
                        [v.ExtraLarge]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH} ${p().LARGE_WIDTH} ${p().EXTRA_LARGE_WIDTH}`,
                    },
                    T = {
                        [f.ExtraSmall]: '',
                        [f.Small]: p().SMALL_HEIGHT,
                        [f.Medium]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT}`,
                        [f.Large]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT} ${p().LARGE_HEIGHT}`,
                        [f.ExtraLarge]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT} ${p().LARGE_HEIGHT} ${p().EXTRA_LARGE_HEIGHT}`,
                    },
                    L = {
                        [b.ExtraSmall]: '',
                        [b.Small]: p().SMALL,
                        [b.Medium]: `${p().SMALL} ${p().MEDIUM}`,
                        [b.Large]: `${p().SMALL} ${p().MEDIUM} ${p().LARGE}`,
                        [b.ExtraLarge]: `${p().SMALL} ${p().MEDIUM} ${p().LARGE} ${p().EXTRA_LARGE}`,
                    },
                    O = (u) => {
                        let e = u.children,
                            t = u.className,
                            r = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(u);
                                for (r = 0; r < a.length; r++) (t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                return n;
                            })(u, y);
                        const a = w(),
                            i = a.mediaWidth,
                            o = a.mediaHeight,
                            l = a.mediaSize;
                        return n().createElement('div', x({ className: h()(t, k[i], T[o], L[l]) }, r), e);
                    },
                    S = ['children'];
                const N = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                r,
                                n = {},
                                a = Object.keys(u);
                            for (r = 0; r < a.length; r++) (t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                            return n;
                        })(u, S);
                    return n().createElement(B, null, n().createElement(O, t, e));
                };
                var M = t(493),
                    I = t.n(M);
                function P(u) {
                    engine.call('PlaySound', u);
                }
                const W = {
                        playHighlight() {
                            P('highlight');
                        },
                        playClick() {
                            P('play');
                        },
                        playYes() {
                            P('yes1');
                        },
                    },
                    H = {
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
                    V = [
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
                function j() {
                    return (
                        (j =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        j.apply(this, arguments)
                    );
                }
                class G extends n().PureComponent {
                    constructor(...u) {
                        super(...u),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (u) => (e) => {
                                u && u(e),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && P(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (u) => (e) => {
                                u && u(e), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (u) => (e) => {
                                u && u(e),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && P(this.props.soundClick);
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
                            r = u.goto,
                            a = u.side,
                            i = u.type,
                            o = u.classNames,
                            l = u.onMouseEnter,
                            s = u.onMouseLeave,
                            c = u.onMouseDown,
                            E = u.onMouseUp,
                            A =
                                (u.soundClick,
                                u.soundHover,
                                (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        r,
                                        n = {},
                                        a = Object.keys(u);
                                    for (r = 0; r < a.length; r++) (t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                    return n;
                                })(u, V)),
                            _ = h()(H.base, H[`base__${i}`], H[`base__${a}`], null == o ? void 0 : o.base),
                            d = h()(H.icon, H[`icon__${i}`], H[`icon__${a}`], null == o ? void 0 : o.icon),
                            F = h()(H.glow, null == o ? void 0 : o.glow),
                            D = h()(H.caption, H[`caption__${i}`], null == o ? void 0 : o.caption),
                            m = h()(H.goto, null == o ? void 0 : o.goto);
                        return n().createElement(
                            'div',
                            j(
                                {
                                    className: _,
                                    onMouseEnter: this._onMouseEnter(l),
                                    onMouseLeave: this._onMouseLeave(s),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(E),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                A,
                            ),
                            'info' !== i && n().createElement('div', { className: H.shine }),
                            n().createElement('div', { className: d }, n().createElement('div', { className: F })),
                            n().createElement('div', { className: D }, e),
                            r && n().createElement('div', { className: m }, r),
                        );
                    }
                }
                G.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var $ = t(521),
                    z = t(916);
                const U = (u) => {
                    console.error(u.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function q(u = $.n.NONE, e = U, t = !1, n = !1) {
                    (0, r.useEffect)(() => {
                        if (u !== $.n.NONE)
                            return (
                                window.addEventListener('keydown', r, t),
                                () => {
                                    window.removeEventListener('keydown', r, t);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === u) {
                                if (!n && i.O.view.isEventHandled()) return;
                                i.O.view.setEventHandled(), e(r), t && r.stopPropagation();
                            }
                        }
                    }, [e, u, t, n]);
                }
                var K = t(515);
                let X, Y, Z;
                function Q() {}
                !(function (u) {
                    (u.small = 'small'), (u.big = 'big'), (u.large = 'large'), (u.extraLarge = 'extraLarge');
                })(X || (X = {})),
                    (function (u) {
                        (u.credits = 'credits'),
                            (u.gold = 'gold'),
                            (u.crystal = 'crystal'),
                            (u.xp = 'xp'),
                            (u.freeXP = 'freeXP'),
                            (u.equipCoin = 'equipCoin');
                    })(Y || (Y = {})),
                    (function (u) {
                        (u.Red = 'RedActionBG'), (u.Blue = 'BlueActionBG');
                    })(Z || (Z = {}));
                function J() {
                    return !1;
                }
                console.log;
                var uu = t(174);
                function eu(u, e) {
                    var t = ('undefined' != typeof Symbol && u[Symbol.iterator]) || u['@@iterator'];
                    if (t) return (t = t.call(u)).next.bind(t);
                    if (
                        Array.isArray(u) ||
                        (t = (function (u, e) {
                            if (!u) return;
                            if ('string' == typeof u) return tu(u, e);
                            var t = Object.prototype.toString.call(u).slice(8, -1);
                            'Object' === t && u.constructor && (t = u.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(u);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return tu(u, e);
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
                function tu(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, r = new Array(e); t < e; t++) r[t] = u[t];
                    return r;
                }
                const ru = (u) => (0 === u ? window : window.subViews.get(u));
                const nu = () => (u, e) => {
                        const t = (0, r.createContext)({});
                        return [
                            function ({ mode: a = 'real', options: o, children: l, mocks: s }) {
                                const c = (0, r.useRef)([]),
                                    E = (t, r, n) => {
                                        var a;
                                        const o = (function ({
                                                initializer: u = !0,
                                                rootId: e = 0,
                                                getRoot: t = ru,
                                                context: r = 'model',
                                            } = {}) {
                                                const n = new Map();
                                                function a(u, e = 0) {
                                                    viewEnv.removeDataChangedCallback(u, e)
                                                        ? n.delete(u)
                                                        : console.error("Can't remove callback by id:", u);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (u, e, t) => {
                                                        t.forEach((e) => {
                                                            const t = n.get(e);
                                                            void 0 !== t && t(u);
                                                        });
                                                    });
                                                });
                                                const o = (u) => {
                                                    const n = t(e),
                                                        a = r.split('.').reduce((u, e) => u[e], n);
                                                    return 'string' != typeof u || 0 === u.length
                                                        ? a
                                                        : u.split('.').reduce((u, e) => {
                                                              const t = u[e];
                                                              return 'function' == typeof t ? t.bind(u) : t;
                                                          }, a);
                                                };
                                                return {
                                                    subscribe: (t, a) => {
                                                        const l = 'string' == typeof a ? `${r}.${a}` : r,
                                                            s = i.O.view.addModelObserver(l, e, !0);
                                                        return n.set(s, t), u && t(o(a)), s;
                                                    },
                                                    readByPath: o,
                                                    createCallback: (u, e) => {
                                                        const t = o(e);
                                                        return (...e) => {
                                                            t(u(...e));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (u) => {
                                                        const e = o(u);
                                                        return () => {
                                                            e();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var u, t = eu(n.keys()); !(u = t()).done; ) a(u.value, e);
                                                    },
                                                    unsubscribe: a,
                                                };
                                            })(r),
                                            l =
                                                'real' === t
                                                    ? o
                                                    : Object.assign({}, o, {
                                                          readByPath:
                                                              null != (a = null == n ? void 0 : n.getter)
                                                                  ? a
                                                                  : () => {},
                                                      }),
                                            s = (u) =>
                                                'mocks' === t ? (null == n ? void 0 : n.getter(u)) : l.readByPath(u),
                                            E = (u) => c.current.push(u),
                                            A = u({
                                                mode: t,
                                                readByPath: s,
                                                externalModel: l,
                                                observableModel: {
                                                    array: (u, e) => {
                                                        const r = null != e ? e : s(u),
                                                            n = uu.LO.box(r, { equals: J });
                                                        return (
                                                            'real' === t &&
                                                                l.subscribe(
                                                                    (0, uu.aD)((u) => n.set(u)),
                                                                    u,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (u, e) => {
                                                        const r = null != e ? e : s(u),
                                                            n = uu.LO.box(r, { equals: J });
                                                        return (
                                                            'real' === t &&
                                                                l.subscribe(
                                                                    (0, uu.aD)((u) => n.set(u)),
                                                                    u,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (u, e) => {
                                                        const r = s(e);
                                                        if (Array.isArray(u)) {
                                                            const n = u.reduce(
                                                                (u, e) => ((u[e] = uu.LO.box(r[e], {})), u),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    l.subscribe(
                                                                        (0, uu.aD)((e) => {
                                                                            u.forEach((u) => {
                                                                                n[u].set(e[u]);
                                                                            });
                                                                        }),
                                                                        e,
                                                                    ),
                                                                n
                                                            );
                                                        }
                                                        {
                                                            const n = u,
                                                                a = Object.entries(n),
                                                                i = a.reduce(
                                                                    (u, [e, t]) => ((u[t] = uu.LO.box(r[e], {})), u),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    l.subscribe(
                                                                        (0, uu.aD)((u) => {
                                                                            a.forEach(([e, t]) => {
                                                                                i[t].set(u[e]);
                                                                            });
                                                                        }),
                                                                        e,
                                                                    ),
                                                                i
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: E,
                                            }),
                                            _ = { mode: t, model: A, externalModel: l, cleanup: E };
                                        return {
                                            model: A,
                                            controls: 'mocks' === t && n ? n.controls(_) : e(_),
                                            externalModel: l,
                                            mode: t,
                                        };
                                    },
                                    A = (0, r.useRef)(!1),
                                    _ = (0, r.useState)(a),
                                    d = _[0],
                                    F = _[1],
                                    D = (0, r.useState)(() => E(a, o, s)),
                                    m = D[0],
                                    B = D[1];
                                return (
                                    (0, r.useEffect)(() => {
                                        A.current ? B(E(d, o, s)) : (A.current = !0);
                                    }, [s, d, o]),
                                    (0, r.useEffect)(() => {
                                        F(a);
                                    }, [a]),
                                    (0, r.useEffect)(
                                        () => () => {
                                            m.externalModel.dispose(), c.current.forEach((u) => u());
                                        },
                                        [m],
                                    ),
                                    n().createElement(t.Provider, { value: m }, l)
                                );
                            },
                            () => (0, r.useContext)(t),
                        ];
                    },
                    au = nu()(
                        ({ observableModel: u }) =>
                            Object.assign(
                                {},
                                u.primitives(['gold', 'credits', 'crystals', 'freeExp', 'equipCoin', 'isWGMAvailable']),
                                {
                                    goldTooltip: u.object('goldTooltip'),
                                    creditsTooltip: u.object('creditsTooltip'),
                                    crystalsTooltip: u.object('crystalsTooltip'),
                                    freeExpTooltip: u.object('freeExpTooltip'),
                                    equipCoinTooltip: u.object('equipCoinTooltip'),
                                },
                            ),
                        Q,
                    ),
                    iu = au[0],
                    ou = au[1];
                class lu extends n().PureComponent {
                    render() {
                        let u;
                        if ('gold' === this.props.format) u = z.B3.GOLD;
                        else u = z.B3.INTEGRAL;
                        const e = z.Z5.getNumberFormat(this.props.value, u);
                        return void 0 !== this.props.value && void 0 !== e ? e : null;
                    }
                }
                lu.defaultProps = { format: 'integral' };
                const su = [
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
                function cu(u) {
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
                const Eu = (u, e, t = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: z.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: r,
                                },
                                t,
                            ),
                        );
                    },
                    Au = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            n = u.args,
                            a = u.onMouseEnter,
                            i = u.onMouseLeave,
                            o = u.onMouseDown,
                            l = u.onClick,
                            s = u.ignoreShowDelay,
                            c = void 0 !== s && s,
                            E = u.ignoreMouseClick,
                            A = void 0 !== E && E,
                            _ = u.decoratorId,
                            d = void 0 === _ ? 0 : _,
                            F = u.isEnabled,
                            D = void 0 === F || F,
                            m = u.targetId,
                            B = void 0 === m ? 0 : m,
                            C = u.onShow,
                            h = u.onHide,
                            g = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(u);
                                for (r = 0; r < a.length; r++) (t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                return n;
                            })(u, su);
                        const p = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            b = (0, r.useMemo)(
                                () =>
                                    B ||
                                    ((u = 1) => {
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
                                    })().resId,
                                [B],
                            ),
                            v = (0, r.useCallback)(() => {
                                (p.current.isVisible && p.current.timeoutId) ||
                                    (Eu(t, d, { isMouseEvent: !0, on: !0, arguments: cu(n) }, b),
                                    C && C(),
                                    (p.current.isVisible = !0));
                            }, [t, d, n, b, C]),
                            f = (0, r.useCallback)(() => {
                                if (p.current.isVisible || p.current.timeoutId) {
                                    const u = p.current.timeoutId;
                                    u > 0 && (clearTimeout(u), (p.current.timeoutId = 0)),
                                        Eu(t, d, { on: !1 }, b),
                                        p.current.isVisible && h && h(),
                                        (p.current.isVisible = !1);
                                }
                            }, [t, d, b, h]),
                            w = (0, r.useCallback)((u) => {
                                p.current.isVisible &&
                                    ((p.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (p.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(p.current.prevTarget) && f();
                                    }, 200)));
                            }, []);
                        (0, r.useEffect)(() => {
                            const u = p.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', w, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', w, { capture: !0 }),
                                        u && window.clearTimeout(u);
                                }
                            );
                        }, []),
                            (0, r.useEffect)(() => {
                                !1 === D && f();
                            }, [D, f]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', f),
                                    () => {
                                        window.removeEventListener('mouseleave', f), f();
                                    }
                                ),
                                [f],
                            );
                        return D
                            ? (0, r.cloneElement)(
                                  e,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((y = e.props.onMouseEnter),
                                              (u) => {
                                                  (u.clientX === window.innerWidth &&
                                                      u.clientY === window.innerHeight) ||
                                                      ((p.current.timeoutId = window.setTimeout(v, c ? 100 : 400)),
                                                      a && a(u),
                                                      y && y(u));
                                              }),
                                          onMouseLeave: ((u) => (e) => {
                                              f(), null == i || i(e), null == u || u(e);
                                          })(e.props.onMouseLeave),
                                          onClick: ((u) => (e) => {
                                              !1 === A && f(), null == l || l(e), null == u || u(e);
                                          })(e.props.onClick),
                                          onMouseDown: ((u) => (e) => {
                                              !1 === A && f(), null == o || o(e), null == u || u(e);
                                          })(e.props.onMouseDown),
                                      },
                                      g,
                                  ),
                              )
                            : e;
                        var y;
                    };
                let _u;
                !(function (u) {
                    (u.backport = 'backport'), (u.normal = 'normal'), (u.absent = 'absent');
                })(_u || (_u = {}));
                const du = 'Waiting_waiting_48',
                    Fu = 'Waiting_alertIcon_9d',
                    Du = 'Waiting_frame1_c0',
                    mu = 'Waiting_frame2_bb',
                    Bu = 'Waiting_frame3_4c',
                    Cu = (0, r.memo)(() =>
                        n().createElement(
                            n().Fragment,
                            null,
                            n().createElement(
                                'span',
                                { className: du },
                                n().createElement('span', { className: Du }, '- '),
                                n().createElement('span', { className: mu }, '- '),
                                n().createElement('span', { className: Bu }, '- '),
                            ),
                            n().createElement('span', { className: Fu }),
                        ),
                    ),
                    hu = {
                        base: 'CurrencyItem_base_a5',
                        base__credits: 'CurrencyItem_base__credits_87',
                        base__gold: 'CurrencyItem_base__gold_83',
                        icon: 'CurrencyItem_icon_e3',
                        base__crystal: 'CurrencyItem_base__crystal_0b',
                        base__freeXP: 'CurrencyItem_base__freeXP_a0',
                        base__equipCoin: 'CurrencyItem_base__equipCoin_49',
                    };
                function gu() {
                    return (
                        (gu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        gu.apply(this, arguments)
                    );
                }
                const pu = ({ value: u, currencyType: e, isWGMAvailable: t, tooltip: r, tooltipRootId: a }) => {
                        const i = e === Y.gold ? 'gold' : 'integral',
                            o =
                                ((l = r.type),
                                (s = { currency: e }),
                                {
                                    isEnabled: l !== _u.absent,
                                    args: s,
                                    contentId: R.views.dialogs.common.DialogTemplateGenericTooltip('resId'),
                                    decoratorId:
                                        l === _u.normal
                                            ? R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId')
                                            : void 0,
                                    ignoreShowDelay: l === _u.backport,
                                    ignoreMouseClick: !0,
                                });
                        var l, s;
                        return n().createElement(
                            Au,
                            gu({}, o, { targetId: a }),
                            n().createElement(
                                'span',
                                { className: h()(hu.base, hu[`base__${e}`]) },
                                n().createElement('div', { className: hu.icon }),
                                t ? n().createElement(lu, { value: u, format: i }) : n().createElement(Cu, null),
                            ),
                        );
                    },
                    bu = 'MoneyBalanceApp_base_6a',
                    vu = (0, K.Pi)(({ tooltipRootId: u, className: e }) => {
                        const t = ou().model,
                            r = t.isWGMAvailable.get(),
                            a = [
                                [t.crystals.get(), t.crystalsTooltip.get(), Y.crystal],
                                [t.gold.get(), t.goldTooltip.get(), Y.gold],
                                [t.credits.get(), t.creditsTooltip.get(), Y.credits],
                                [t.freeExp.get(), t.freeExpTooltip.get(), Y.freeXP],
                                [t.equipCoin.get(), t.equipCoinTooltip.get(), Y.equipCoin],
                            ];
                        return n().createElement(
                            'div',
                            { className: h()(bu, e) },
                            a
                                .filter(([u]) => -1 !== u)
                                .map(([e, t, a]) =>
                                    n().createElement(pu, {
                                        key: a,
                                        value: e,
                                        currencyType: a,
                                        isWGMAvailable: r,
                                        tooltip: t,
                                        tooltipRootId: u,
                                    }),
                                ),
                        );
                    }),
                    fu = n().memo(function ({
                        rootId: u = R.views.dialogs.widgets.MoneyBalance('resId'),
                        className: e,
                    }) {
                        return n().createElement(
                            iu,
                            { options: { rootId: u } },
                            n().createElement(vu, { tooltipRootId: u, className: e }),
                        );
                    });
                var wu = t(946);
                const yu = nu()(
                        ({ observableModel: u }) => {
                            const e = Object.assign(
                                    {},
                                    u.primitives([
                                        'isRestore',
                                        'hasTradeInWidget',
                                        'hasTradeInVehiclesToSelect',
                                        'hasTradeInGoldConfirmation',
                                        'hasDisclaimer',
                                        'isBuyButtonEnabled',
                                        'isRentAvailable',
                                        'title',
                                        'rentButtonLabel',
                                        'buyButtonLabel',
                                    ]),
                                    {
                                        vehicle: u.object('vehicle'),
                                        tradeInVehicleToSell: u.object('tradeInVehicleToSell'),
                                        options: u.array('options'),
                                        totals: u.object('totals'),
                                        buyButtonTooltip: u.object('buyButtonTooltip'),
                                        totalsPrice: u.array('totals.price'),
                                    },
                                ),
                                t = (0, wu.Om)(() => -1 !== e.tradeInVehicleToSell.get().vehicleCD);
                            return Object.assign({}, e, { computes: { isTradeInVehicleSelected: t } });
                        },
                        ({ externalModel: u }) => ({
                            close: u.createCallbackNoArgs('onCloseBtnClick'),
                            buy: u.createCallbackNoArgs('onBuyBtnClick'),
                            showLicenseInfo: u.createCallbackNoArgs('onDisclaimerClick'),
                            selectRentPackage: u.createCallbackNoArgs('onSelectRentPackage'),
                            selectTradeInVehicle: u.createCallbackNoArgs('onSelectTradeInVehicleToSell'),
                            clearTradeInVehicle: u.createCallbackNoArgs('onClearTradeInVehicleToSell'),
                            toggleOption: u.createCallback((u) => ({ index: u }), 'onOptionClick'),
                        }),
                    ),
                    xu = yu[0],
                    ku = yu[1],
                    Tu = {
                        base: 'Currency_base_57',
                        icon: 'Currency_icon_c5',
                        base__small: 'Currency_base__small_af',
                        base__big: 'Currency_base__big_bc',
                        base__large: 'Currency_base__large_65',
                        base__extraLarge: 'Currency_base__extraLarge_4d',
                        'icon__credits-small': 'Currency_icon__credits-small_9b',
                        'icon__credits-big': 'Currency_icon__credits-big_96',
                        'icon__credits-large': 'Currency_icon__credits-large_ac',
                        'icon__credits-extraLarge': 'Currency_icon__credits-extraLarge_16',
                        'icon__gold-small': 'Currency_icon__gold-small_86',
                        'icon__gold-big': 'Currency_icon__gold-big_15',
                        'icon__gold-large': 'Currency_icon__gold-large_36',
                        'icon__gold-extraLarge': 'Currency_icon__gold-extraLarge_a0',
                        'icon__crystal-small': 'Currency_icon__crystal-small_27',
                        'icon__crystal-big': 'Currency_icon__crystal-big_cd',
                        'icon__crystal-large': 'Currency_icon__crystal-large_d3',
                        'icon__crystal-extraLarge': 'Currency_icon__crystal-extraLarge_09',
                        'icon__xp-small': 'Currency_icon__xp-small_a7',
                        'icon__xp-big': 'Currency_icon__xp-big_97',
                        'icon__xp-large': 'Currency_icon__xp-large_6b',
                        'icon__xp-extraLarge': 'Currency_icon__xp-extraLarge_67',
                        'icon__freeXP-small': 'Currency_icon__freeXP-small_ca',
                        'icon__freeXP-big': 'Currency_icon__freeXP-big_21',
                        'icon__freeXP-large': 'Currency_icon__freeXP-large_c8',
                        'icon__freeXP-extraLarge': 'Currency_icon__freeXP-extraLarge_58',
                        'icon__equipCoin-small': 'Currency_icon__equipCoin-small_32',
                        'icon__equipCoin-big': 'Currency_icon__equipCoin-big_79',
                        'icon__equipCoin-large': 'Currency_icon__equipCoin-large_2c',
                        'icon__equipCoin-extraLarge': 'Currency_icon__equipCoin-extraLarge_8a',
                        value: 'Currency_value_e1',
                        value__freeXP: 'Currency_value__freeXP_cb',
                        value__credits: 'Currency_value__credits_76',
                        value__gold: 'Currency_value__gold_dd',
                        value__xp: 'Currency_value__xp_b0',
                        value__crystal: 'Currency_value__crystal_19',
                        value__equipCoin: 'Currency_value__equipCoin_d0',
                        value__notEnough: 'Currency_value__notEnough_56',
                        stock: 'Currency_stock_87',
                        stock__indent: 'Currency_stock__indent_a1',
                        stock__interactive: 'Currency_stock__interactive_93',
                        stockBackground: 'Currency_stockBackground_82',
                    },
                    Lu = (0, r.memo)(
                        ({
                            isDiscount: u,
                            isInteractiveDiscount: e,
                            size: t,
                            type: r,
                            value: a,
                            discountValue: i,
                            showPlus: o,
                            isEnough: l = !0,
                            stockBackgroundName: s = Z.Red,
                            className: c,
                            classNames: E,
                        }) =>
                            n().createElement(
                                'span',
                                { className: h()(Tu.base, Tu[`base__${t}`], c) },
                                n().createElement(
                                    'span',
                                    {
                                        className: h()(
                                            Tu.value,
                                            Tu[`value__${r}`],
                                            !l && Tu.value__notEnough,
                                            null == E ? void 0 : E.value,
                                        ),
                                    },
                                    o && a > 0 && '+',
                                    n().createElement(lu, { value: a, format: r === Y.gold ? 'gold' : 'integral' }),
                                ),
                                n().createElement('span', {
                                    className: h()(Tu.icon, Tu[`icon__${r}-${t}`], null == E ? void 0 : E.icon),
                                }),
                                u &&
                                    n().createElement(
                                        'span',
                                        {
                                            className: h()(
                                                Tu.stock,
                                                i && Tu.stock__indent,
                                                e && Tu.stock__interactive,
                                                null == E ? void 0 : E.stock,
                                            ),
                                        },
                                        n().createElement('span', {
                                            className: Tu.stockBackground,
                                            style: { backgroundImage: `url(R.images.gui.maps.icons.library.${s})` },
                                        }),
                                        Boolean(i) && i,
                                    ),
                            ),
                    ),
                    Ou = ['children'];
                function Su() {
                    return (
                        (Su =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        Su.apply(this, arguments)
                    );
                }
                const Nu = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                r,
                                n = {},
                                a = Object.keys(u);
                            for (r = 0; r < a.length; r++) (t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                            return n;
                        })(u, Ou);
                    return n().createElement(
                        Au,
                        Su(
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
                };
                function Mu(u, e) {
                    var t;
                    if (!(e >= u.length)) return Array.isArray(u) ? u[e] : null == (t = u[e]) ? void 0 : t.value;
                }
                const Iu = Mu;
                function Ru(u, e) {
                    return Array.isArray(u) ? u.map(e) : u.map((u, t, r) => e(null == u ? void 0 : u.value, t, r));
                }
                const Pu = 'CompoundPrice_base_96',
                    Wu = 'CompoundPrice_base__withDiscount_9e',
                    Hu = 'CompoundPrice_freePrice_83',
                    Vu = 'CompoundPrice_currencyWrapper_08',
                    ju = 'CompoundPrice_currency_68',
                    Gu = 'CompoundPrice_currencyHitArea_45',
                    $u = 'CompoundPrice_currencyHitArea__withDiscount_a5';
                function zu() {
                    return (
                        (zu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        zu.apply(this, arguments)
                    );
                }
                const Uu = ({ prices: u, tooltipKey: e, size: t, className: r, classNames: a }) => {
                        const i = (function (u, e) {
                            if (Array.isArray(u)) return u.some(e);
                            for (let t = 0; t < u.length; t++) if (e(Iu(u, t), t, u)) return !0;
                            return !1;
                        })(u, (u) => u.isDiscount);
                        return n().createElement(
                            'div',
                            { className: h()(Pu, i && Wu, r) },
                            0 === u.length
                                ? n().createElement(
                                      'div',
                                      { className: Hu },
                                      R.strings.hangar.buyVehicleWindow.freePrice(),
                                  )
                                : Ru(u, (u, r) =>
                                      n().createElement(
                                          'div',
                                          {
                                              key: r,
                                              className: h()(
                                                  Vu,
                                                  null == a ? void 0 : a.currency,
                                                  u.isDiscount && (null == a ? void 0 : a.currencyWithDiscount),
                                              ),
                                          },
                                          n().createElement(Lu, zu({}, u, { size: t || u.size, className: ju })),
                                          n().createElement(
                                              Nu,
                                              {
                                                  args: { tooltipId: 'actionPrice', tooltipKey: e, currency: u.type },
                                                  isEnabled: u.isDiscount,
                                              },
                                              n().createElement('div', { className: h()(Gu, u.isDiscount && $u) }),
                                          ),
                                      ),
                                  ),
                        );
                    },
                    qu = {
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
                let Ku, Xu;
                !(function (u) {
                    (u.main = 'main'),
                        (u.primary = 'primary'),
                        (u.primaryGreen = 'primaryGreen'),
                        (u.primaryRed = 'primaryRed'),
                        (u.secondary = 'secondary'),
                        (u.ghost = 'ghost');
                })(Ku || (Ku = {})),
                    (function (u) {
                        (u.extraSmall = 'extraSmall'), (u.small = 'small'), (u.medium = 'medium'), (u.large = 'large');
                    })(Xu || (Xu = {}));
                const Yu = ({
                    children: u,
                    size: e,
                    isFocused: t,
                    type: a,
                    disabled: i,
                    mixClass: o,
                    soundHover: l,
                    soundClick: s,
                    onMouseEnter: c,
                    onMouseMove: E,
                    onMouseDown: A,
                    onMouseUp: _,
                    onMouseLeave: d,
                    onClick: F,
                }) => {
                    const D = (0, r.useRef)(null),
                        m = (0, r.useState)(t),
                        B = m[0],
                        C = m[1],
                        g = (0, r.useState)(!1),
                        p = g[0],
                        b = g[1],
                        v = (0, r.useState)(!1),
                        f = v[0],
                        w = v[1],
                        y = (0, r.useCallback)(() => {
                            i || (D.current && (D.current.focus(), C(!0)));
                        }, [i]),
                        x = (0, r.useCallback)(
                            (u) => {
                                B && null !== D.current && !D.current.contains(u.target) && C(!1);
                            },
                            [B],
                        ),
                        k = (0, r.useCallback)(
                            (u) => {
                                i || (F && F(u));
                            },
                            [i, F],
                        ),
                        T = (0, r.useCallback)(
                            (u) => {
                                i || (null !== l && P(l), c && c(u), w(!0));
                            },
                            [i, l, c],
                        ),
                        L = (0, r.useCallback)(
                            (u) => {
                                E && E(u);
                            },
                            [E],
                        ),
                        O = (0, r.useCallback)(
                            (u) => {
                                i || (_ && _(u), b(!1));
                            },
                            [i, _],
                        ),
                        S = (0, r.useCallback)(
                            (u) => {
                                i || (null !== s && P(s), A && A(u), t && y(), b(!0));
                            },
                            [i, s, A, y, t],
                        ),
                        N = (0, r.useCallback)(
                            (u) => {
                                i || (d && d(u), b(!1));
                            },
                            [i, d],
                        ),
                        M = h()(
                            qu.base,
                            qu[`base__${a}`],
                            {
                                [qu.base__disabled]: i,
                                [qu[`base__${e}`]]: e,
                                [qu.base__focus]: B,
                                [qu.base__highlightActive]: p,
                                [qu.base__firstHover]: f,
                            },
                            o,
                        ),
                        I = h()(qu.state, qu.state__default);
                    return (
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mousedown', x),
                                () => {
                                    document.removeEventListener('mousedown', x);
                                }
                            ),
                            [x],
                        ),
                        (0, r.useEffect)(() => {
                            C(t);
                        }, [t]),
                        n().createElement(
                            'div',
                            {
                                ref: D,
                                className: M,
                                onMouseEnter: T,
                                onMouseMove: L,
                                onMouseUp: O,
                                onMouseDown: S,
                                onMouseLeave: N,
                                onClick: k,
                            },
                            a !== Ku.ghost &&
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement('div', { className: qu.back }),
                                    n().createElement('span', { className: qu.texture }),
                                ),
                            n().createElement(
                                'span',
                                { className: I },
                                n().createElement('span', { className: qu.stateDisabled }),
                                n().createElement('span', { className: qu.stateHighlightHover }),
                                n().createElement('span', { className: qu.stateHighlightActive }),
                            ),
                            n().createElement(
                                'span',
                                { className: qu.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                u,
                            ),
                        )
                    );
                };
                Yu.defaultProps = { type: Ku.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const Zu = (0, r.memo)(Yu),
                    Qu = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Ju() {
                    return (
                        (Ju =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        Ju.apply(this, arguments)
                    );
                }
                const ue = R.views.common.tooltip_window.simple_tooltip_content,
                    ee = (u) => {
                        let e = u.children,
                            t = u.body,
                            a = u.header,
                            i = u.note,
                            o = u.alert,
                            l = u.args,
                            s = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(u);
                                for (r = 0; r < a.length; r++) (t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                return n;
                            })(u, Qu);
                        const c = (0, r.useMemo)(() => {
                            const u = Object.assign({}, l, { body: t, header: a, note: i, alert: o });
                            for (const e in u) void 0 === u[e] && delete u[e];
                            return u;
                        }, [o, t, a, i, l]);
                        return n().createElement(
                            Au,
                            Ju(
                                {
                                    contentId:
                                        ((E = null == l ? void 0 : l.hasHtmlContent),
                                        E ? ue.SimpleTooltipHtmlContent('resId') : ue.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                s,
                            ),
                            e,
                        );
                        var E;
                    },
                    te = (u) => {
                        (0, r.useEffect)(u, []);
                    },
                    re = {
                        base: 'PopoverDecorator_base_ed',
                        decorator: 'PopoverDecorator_decorator_d3',
                        arrow: 'PopoverDecorator_arrow_8a',
                        arrow__bottom: 'PopoverDecorator_arrow__bottom_c3',
                        arrow__top: 'PopoverDecorator_arrow__top_6e',
                        arrow__left: 'PopoverDecorator_arrow__left_7a',
                        arrow__right: 'PopoverDecorator_arrow__right_b6',
                        closeBtn: 'PopoverDecorator_closeBtn_32',
                        content: 'PopoverDecorator_content_f0',
                    };
                var ne;
                !(function (u) {
                    (u[(u.Left = 0)] = 'Left'),
                        (u[(u.Right = 1)] = 'Right'),
                        (u[(u.Top = 2)] = 'Top'),
                        (u[(u.Bottom = 3)] = 'Bottom');
                })(ne || (ne = {}));
                const ae = ['__left', '__right', '__top', '__bottom'],
                    ie =
                        ((0, r.forwardRef)(
                            ({ children: u, disableAutoSizeUpdate: e, onOutsideClick: t, customStyles: a = {} }, o) => {
                                const l = (0, r.useRef)(null),
                                    s = (0, r.useRef)(null),
                                    c = (0, r.useRef)(null),
                                    E = (0, r.useState)(window.decorator && window.decorator.directionType),
                                    A = E[0],
                                    _ = E[1],
                                    d = (0, r.useCallback)(() => {
                                        W.playClick(), i.O.view.sendEvent.close();
                                    }, []),
                                    F = (0, r.useCallback)(() => {
                                        W.playHighlight();
                                    }, []),
                                    D = h()(re.arrow, re[`arrow${ae[A]}`]);
                                te(
                                    () => (
                                        i.O.client.events.mouse.enableOutside(),
                                        i.O.client.events.mouse.down(([, u]) => {
                                            'outside' === u && (t ? t() : i.O.view.sendEvent.close('popover'));
                                        })
                                    ),
                                );
                                const m = (0, r.useCallback)(
                                        (u) => {
                                            let e = u.target;
                                            do {
                                                if (e === l.current || e === c.current) return;
                                                e = e.parentNode;
                                            } while (e);
                                            const r = window.decorator;
                                            if (void 0 !== window.decorator) {
                                                const u = i.O.client.getMouseGlobalPosition(),
                                                    e = ![r.boundX, r.boundY, r.boundWidth, r.boundHeight].includes(
                                                        void 0,
                                                    ),
                                                    t =
                                                        u.x < r.boundX ||
                                                        u.x > r.boundX + r.boundWidth ||
                                                        u.y > r.boundY + r.boundHeight ||
                                                        u.y < r.boundY;
                                                if (e && !t) return;
                                            }
                                            t ? t() : i.O.view.sendEvent.close('popover');
                                        },
                                        [l, c, t],
                                    ),
                                    B = (0, r.useCallback)(
                                        () => (
                                            i.O.view.freezeTextureBeforeResize(),
                                            ((u) => {
                                                let e,
                                                    t = null;
                                                return (
                                                    (t = requestAnimationFrame(() => {
                                                        t = requestAnimationFrame(() => {
                                                            (t = null), (e = u());
                                                        });
                                                    })),
                                                    () => {
                                                        'function' == typeof e && e(),
                                                            null !== t && cancelAnimationFrame(t);
                                                    }
                                                );
                                            })(() => {
                                                if (s.current) {
                                                    const u = s.current.scrollWidth,
                                                        e = s.current.scrollHeight;
                                                    i.O.view.resize(u, e), _(window.decorator.directionType);
                                                }
                                            })
                                        ),
                                        [],
                                    );
                                return (
                                    (0, r.useImperativeHandle)(o, () => ({ updateSize: B })),
                                    te(() => {
                                        i.O.view.setInputPaddingsRem(58);
                                    }),
                                    (0, r.useEffect)(() => {
                                        document.addEventListener('mousedown', m, { capture: !0 });
                                        const u = ((u) => {
                                            let e = !1;
                                            return {
                                                promise: new Promise((t, r) => {
                                                    u.then((u) => !e && t(u)).catch((u) => !e && r(u));
                                                }),
                                                cancel() {
                                                    e = !0;
                                                },
                                            };
                                        })((0, z.Eu)());
                                        return (
                                            !e && u.promise.then(() => B()),
                                            () => {
                                                u.cancel(), document.removeEventListener('mousedown', m);
                                            }
                                        );
                                    }, [B, m, e]),
                                    n().createElement(
                                        'div',
                                        { className: re.base, ref: s },
                                        n().createElement(
                                            'div',
                                            { className: re.decorator },
                                            n().createElement(
                                                'div',
                                                { className: re.content, ref: l },
                                                u,
                                                window.decorator &&
                                                    window.decorator.isCloseBtnVisible &&
                                                    n().createElement(
                                                        ee,
                                                        { body: R.strings.dialogs.common.error.cancel() },
                                                        n().createElement('div', {
                                                            className: re.closeBtn,
                                                            onClick: d,
                                                            onMouseEnter: F,
                                                            ref: c,
                                                        }),
                                                    ),
                                            ),
                                            n().createElement('div', { className: D, style: a.arrow }),
                                        ),
                                    )
                                );
                            },
                        ),
                        [
                            'contentId',
                            'decoratorId',
                            'direction',
                            'targetId',
                            'args',
                            'onClick',
                            'children',
                            'isEnabled',
                        ]);
                function oe() {
                    return (
                        (oe =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        oe.apply(this, arguments)
                    );
                }
                const le = (u) => {
                        let e = u.contentId,
                            t = u.decoratorId,
                            a = u.direction,
                            i = void 0 === a ? ne.Top : a,
                            o = u.targetId,
                            l = u.args,
                            s = u.onClick,
                            c = u.children,
                            E = u.isEnabled,
                            A = void 0 === E || E,
                            _ = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(u);
                                for (r = 0; r < a.length; r++) (t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                return n;
                            })(u, ie);
                        const d = (0, r.useRef)(null),
                            F = (0, r.useCallback)(() => {
                                if ((0, z.wU)()) return (0, z.SW)();
                                d.current && (0, z.P3)(e, i, d.current, t, o, l);
                            }, [e, i, l, t, o]);
                        return n().createElement(
                            'div',
                            oe(
                                {
                                    ref: d,
                                    onMouseDown:
                                        ((D = c.props.onClick),
                                        (u) => {
                                            A && (F(), s && s(u), D && D(u));
                                        }),
                                },
                                _,
                            ),
                            c,
                        );
                        var D;
                    },
                    se = ['children'];
                function ce() {
                    return (
                        (ce =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        ce.apply(this, arguments)
                    );
                }
                const Ee = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                r,
                                n = {},
                                a = Object.keys(u);
                            for (r = 0; r < a.length; r++) (t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                            return n;
                        })(u, se);
                    return n().createElement(
                        le,
                        ce(
                            {
                                decoratorId:
                                    R.views.common.pop_over_window.backport_pop_over.BackportPopOverWindow('resId'),
                                contentId:
                                    R.views.common.pop_over_window.backport_pop_over.BackportPopOverContent('resId'),
                            },
                            t,
                        ),
                        e,
                    );
                };
                function Ae() {
                    return (
                        (Ae =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        Ae.apply(this, arguments)
                    );
                }
                const _e = ({ children: u, tooltipArgs: e, className: t }) => {
                        if (!e) return u;
                        const r = n().createElement('div', { className: t }, u);
                        if (e.header || e.body) return n().createElement(ee, e, r);
                        const a = e.contentId;
                        return a ? n().createElement(Au, Ae({}, e, { contentId: a }), r) : n().createElement(Nu, e, r);
                    },
                    de = (u, e) => u.split(',').includes(e),
                    Fe = (u) => ({
                        vehicleName: u.name,
                        isElite: u.isPremium,
                        vehicleLvl: u.tier,
                        vehicleNation: u.nation,
                        vehicleShortName: u.name,
                        vehicleType: u.type,
                    }),
                    De = (u) =>
                        u.tooltipId
                            ? { args: { tooltipId: u.tooltipId } }
                            : {
                                  header: u.header || void 0,
                                  body: u.body || void 0,
                                  isEnabled: Boolean(u.header || u.body),
                              },
                    me = 'BuyButton_base_cd',
                    Be = (0, K.Pi)(() => {
                        const u = ku(),
                            e = u.model,
                            t = u.controls,
                            r = e.vehicle.get(),
                            a = e.buyButtonTooltip.get(),
                            i = e.isBuyButtonEnabled.get(),
                            o = e.computes.isTradeInVehicleSelected(),
                            l = i && e.hasTradeInGoldConfirmation.get() && o;
                        return n().createElement(
                            _e,
                            { tooltipArgs: De(a) },
                            n().createElement(
                                'div',
                                null,
                                n().createElement(
                                    Ee,
                                    { args: { alias: 'VehicleSellConfirmationPopover' }, isEnabled: l },
                                    n().createElement(
                                        Zu,
                                        {
                                            onClick: l ? void 0 : t.buy,
                                            type: de(r.tags, 'premium') ? Ku.main : Ku.primary,
                                            size: Xu.medium,
                                            mixClass: me,
                                            disabled: !i,
                                        },
                                        e.buyButtonLabel.get(),
                                    ),
                                ),
                            ),
                        );
                    });
                var Ce = t(45);
                const he = 'ExtendedText_base_71',
                    ge = 'ExtendedText_base__zeroPadding_25',
                    pe = 'ExtendedText_base__isTruncationAvailable_5b',
                    be = 'ExtendedText_truncated_97',
                    ve = 'ExtendedText_truncated__hide_31',
                    fe = 'ExtendedText_unTruncated_b8';
                var we = t(281);
                let ye;
                function xe(u, e) {
                    return u.replace(/\{\w+\}/g, (u) => String(e[u.slice(1, -1)]));
                }
                function ke(u) {
                    return u.replace(/-/g, '_');
                }
                function Te(u) {
                    return u[0].toUpperCase() + u.slice(1);
                }
                !(function (u) {
                    (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
                })(ye || (ye = {}));
                const Le = (u) => u.replace(/&nbsp;/g, ' '),
                    Oe = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    Se = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    Ne = (u, e, t = ye.left) => u.split(e).reduce(t === ye.left ? Oe : Se, []),
                    Me = (() => {
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
                    Ie = ['zh_cn', 'zh_sg', 'zh_tw'],
                    Re = (u, e = ye.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (Ie.includes(t)) return Me(u);
                        if ('ja' === t) {
                            return (0, we.D4)()
                                .parse(u)
                                .map((u) => Le(u));
                        }
                        return ((u, e = ye.left) => {
                            let t = [];
                            const r =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                n = Le(u);
                            return Ne(n, /( )/, e).forEach((u) => (t = t.concat(Ne(u, r, ye.left)))), t;
                        })(u, e);
                    };
                let Pe, We, He;
                !(function (u) {
                    (u[(u.Word = 0)] = 'Word'),
                        (u[(u.LineBreak = 1)] = 'LineBreak'),
                        (u[(u.NewLine = 2)] = 'NewLine'),
                        (u[(u.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                        (u[(u.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                        (u[(u.Binding = 5)] = 'Binding');
                })(Pe || (Pe = {})),
                    (function (u) {
                        (u.FlexStart = 'flex-start'), (u.Center = 'center'), (u.FlexEnd = 'flex-end');
                    })(We || (We = {})),
                    (function (u) {
                        (u.NBSP = ' '), (u.ZWNBSP = '\ufeff'), (u.NEW_LINE = '\n');
                    })(He || (He = {}));
                const Ve = { [He.NBSP]: Pe.NoBreakSymbol, [He.ZWNBSP]: Pe.NoBreakSymbol, [He.NEW_LINE]: Pe.LineBreak },
                    je = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'th'].includes(
                        R.strings.settings.LANGUAGE_CODE().toLowerCase(),
                    ),
                    Ge = {
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
                    $e = 'renderers_noBreakWrapper_10',
                    ze = 'renderers_lineBreak_b5',
                    Ue = 'renderers_newLine_bd',
                    qe = 'renderers_word_f3',
                    Ke = (u) => ({ color: `#${u}` }),
                    Xe = ({ elementList: u, textBlock: e, key: t }) => {
                        const r = e.colorTag;
                        return r
                            ? Ge[r]
                                ? n().createElement(
                                      'span',
                                      { key: t, 'data-block-type': e.blockType, className: h()(qe, Ge[r]) },
                                      u,
                                  )
                                : n().createElement(
                                      'span',
                                      { key: t, 'data-block-type': e.blockType, className: qe, style: Ke(r) },
                                      u,
                                  )
                            : n().createElement('span', { key: t, 'data-block-type': e.blockType, className: qe }, u);
                    },
                    Ye = {
                        [Pe.Word]: Xe,
                        [Pe.NoBreakSymbol]: Xe,
                        [Pe.Binding]: ({ elementList: u, textBlock: e, key: t }) =>
                            n().createElement(
                                'span',
                                { key: t, 'data-block-type': e.blockType },
                                u.map((u) => n().createElement(n().Fragment, { key: t }, u)),
                            ),
                        [Pe.LineBreak]: ({ key: u }) =>
                            n().createElement('span', { key: u, 'data-block-type': Pe.LineBreak, className: ze }),
                        [Pe.NewLine]: ({ elementList: u, key: e }) =>
                            n().createElement('span', { key: e, 'data-block-type': Pe.NewLine, className: Ue }, u),
                        [Pe.NoBreakWrapper]: ({ elementList: u, key: e }) =>
                            n().createElement(
                                'span',
                                { key: e, 'data-block-type': Pe.NoBreakWrapper, className: $e },
                                u,
                            ),
                    },
                    Ze = (u, e, t) => {
                        const r = [];
                        return (
                            u.childList.forEach((n, a) => {
                                const i = `${t}_${a}`;
                                if (((u) => void 0 !== u.childList)(n)) {
                                    const u = n,
                                        e = u.blockType,
                                        t = Ze(u, Ye[e], i);
                                    r.push(...t);
                                } else r.push(e({ elementList: [n], textBlock: u, key: i }));
                            }),
                            r
                        );
                    },
                    Qe = (u) => {
                        const e = [];
                        return (
                            u.forEach((u, t) => {
                                e.push(
                                    ...((u, e) => {
                                        const t = [],
                                            r = u.blockType,
                                            n = Ye[r],
                                            a = Ze(u, n, e);
                                        return (
                                            r === Pe.NoBreakWrapper
                                                ? t.push(n({ elementList: a, textBlock: u, key: `${e}` }))
                                                : t.push(...a),
                                            t
                                        );
                                    })(u, t),
                                );
                            }),
                            e
                        );
                    },
                    Je = (u, e, t, r) => {
                        let n = e.exec(u),
                            a = 0;
                        for (; n; ) a !== n.index && t(u.slice(a, n.index)), r(n), (a = e.lastIndex), (n = e.exec(u));
                        a !== u.length && t(u.slice(a));
                    },
                    ut = je
                        ? (u) => {
                              const e = [];
                              return (
                                  Je(
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
                                                      Je(
                                                          u,
                                                          /\S\s+/g,
                                                          (u) => {
                                                              e.push(...u.split(''));
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
                              const r = [];
                              let n = 0;
                              for (; t; ) r.push(u.slice(n, e.lastIndex)), (n = e.lastIndex), (t = e.exec(u));
                              return n !== u.length && r.push(u.slice(n)), r;
                          },
                    et = (u, e = '') => {
                        const t = [];
                        return (
                            Je(
                                u,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (u) => {
                                    t.push({ blockType: Pe.Word, colorTag: e, childList: ut(u) });
                                },
                                (u) => {
                                    const r = u[0],
                                        n = Ve[r.charAt(0)];
                                    n === Pe.LineBreak
                                        ? t.push(
                                              ...((u) => {
                                                  const e = [
                                                      {
                                                          blockType: Pe.LineBreak,
                                                          colorTag: '',
                                                          childList: [u.charAt(0)],
                                                      },
                                                  ];
                                                  for (let t = 0; t < u.length - 1; t++)
                                                      e.push({
                                                          blockType: Pe.NewLine,
                                                          colorTag: '',
                                                          childList: [u.charAt(0)],
                                                      });
                                                  return e;
                                              })(r),
                                          )
                                        : t.push({ blockType: n, colorTag: e, childList: [r] });
                                },
                            ),
                            t
                        );
                    },
                    tt = (u, e, t = '') => {
                        const r = [];
                        return (
                            Je(
                                u,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (u) => {
                                    r.push(...et(u, t));
                                },
                                (u) => {
                                    const n = u[1],
                                        a = void 0 === e[n] ? u[0] : e[n];
                                    'string' == typeof a || 'number' == typeof a
                                        ? r.push(...et(String(a), t))
                                        : r.push({ blockType: Pe.Binding, colorTag: t, childList: [a] });
                                },
                            ),
                            r
                        );
                    },
                    rt = (u, e) => {
                        if (!u) return [e];
                        const t = [],
                            r = Object.assign({}, e, { childList: e.childList.splice(0, 1) });
                        if (u.blockType === Pe.NoBreakWrapper) u.childList.push(r), t.push(u);
                        else {
                            const e = Object.assign({}, u, { childList: u.childList.splice(-1) });
                            u.childList.length > 0 && t.push(u),
                                t.push({ blockType: Pe.NoBreakWrapper, colorTag: '', childList: [e, r] });
                        }
                        return e.childList.length > 0 && t.push(e), t;
                    },
                    nt = (u, e = {}) => {
                        if (!u) return [];
                        const t = ((u) => {
                            const e = [];
                            let t = !1;
                            return (
                                u.forEach((u) => {
                                    u.blockType === Pe.NoBreakSymbol
                                        ? ((t = !0), e.push(...rt(e.pop(), u)))
                                        : (t ? e.push(...rt(e.pop(), u)) : e.push(u), (t = !1));
                                }),
                                e
                            );
                        })(
                            ((u, e) => {
                                const t = [];
                                return (
                                    Je(
                                        u,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})/g,
                                        (u) => {
                                            t.push(...tt(u, e));
                                        },
                                        (u) => {
                                            t.push(...tt(u[2], e, u[1]));
                                        },
                                    ),
                                    t
                                );
                            })(Le(u).replace(/&zwnbsp;/g, '\ufeff'), e),
                        );
                        return Qe(t);
                    },
                    at = (u, e) => !u || u.offsetTop + u.offsetHeight > e,
                    it = (u, e) => u.offsetLeft + u.offsetWidth - e,
                    ot = (u, e, t) => {
                        if (!u || !u.textContent) return [!1, 0];
                        if (u.offsetLeft > e) return [!1, 0];
                        const r = it(u, e),
                            n = u.textContent.length,
                            a = u.offsetWidth / n,
                            i = Math.ceil(r / a);
                        if (r > 0) {
                            const r = Math.floor((e - u.offsetLeft) / a);
                            return r >= t ? [!0, t + i] : [!1, r];
                        }
                        const o = Math.max(t + i, 0);
                        return n < o ? [!1, 0] : [!0, o];
                    },
                    lt = (u, e, t, r, a, i) => {
                        let o = -1,
                            l = null;
                        for (let s = t; s >= 0; s--) {
                            const t = u[s],
                                c = Number(u[s].getAttribute('data-block-type'));
                            if (c === Pe.LineBreak || c === Pe.NewLine || c === Pe.Binding) continue;
                            const E = t.textContent || '';
                            if (!(t.childElementCount > 1)) {
                                const u = ot(t, r, a),
                                    c = u[0],
                                    A = u[1];
                                if (!c) {
                                    A > 0 && (a -= A);
                                    continue;
                                }
                                const _ = E.slice(0, E.length - A) + i,
                                    d = e[s];
                                (l = n().cloneElement(d, d.props, _)), (o = s);
                                break;
                            }
                            {
                                const u = t.children,
                                    c = e[s],
                                    A = c.props.children,
                                    _ = lt(u, A, u.length - 1, r, a, i),
                                    d = _[0],
                                    F = _[1];
                                if (!(d < 0)) {
                                    const u = A.slice(0, d);
                                    (l = n().cloneElement(c, c.props, u, F)), (o = s);
                                    break;
                                }
                                a -= E.length;
                            }
                        }
                        return [o, l];
                    },
                    st = (u, e, t, r = '...') => {
                        const n = [...e],
                            a = u.current;
                        if (!a) return [n, !1];
                        const i = t.height,
                            o = t.width,
                            l = a.lastElementChild;
                        if (!at(l, i) && it(l, o) <= 0) return [n, !1];
                        const s = a.children,
                            c = ((u, e) => {
                                let t = 0,
                                    r = u.length - 1;
                                for (; r - t >= 0; ) {
                                    const n = t + Math.ceil(0.5 * (r - t));
                                    at(u[n], e) ? (r = n - 1) : (t = n + 1);
                                }
                                return t - 1;
                            })(s, i);
                        if (c < 0) return [n, !1];
                        const E = lt(s, n, c, o, r.length, r),
                            A = E[0],
                            _ = E[1];
                        return _ && (n.splice(A, 1, _), n.splice(A + 1)), [n, !0];
                    },
                    ct = n().memo(
                        ({
                            text: u,
                            classMix: e,
                            onSizeChanged: t,
                            binding: a,
                            isTooltipEnable: i = !1,
                            isTruncationAvailable: o = !1,
                            targetId: l,
                            justifyContent: s = We.FlexStart,
                            alignContent: c = We.FlexStart,
                            truncateIdentify: E = '...',
                        }) => {
                            const A = (0, r.useRef)(null),
                                _ = (0, r.useRef)({ height: 0, width: 0 }),
                                d = (0, r.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                F = d[0],
                                D = d[1],
                                m = (0, r.useMemo)(() => nt(u, a), [a, u]),
                                B = (0, r.useMemo)(() => {
                                    if (
                                        i &&
                                        F.isTruncated &&
                                        (!a || !Object.values(a).find((u) => 'object' == typeof u))
                                    )
                                        return {
                                            args: { text: u, stringifyKwargs: a ? JSON.stringify(a) : '' },
                                            contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                            targetId: l,
                                        };
                                }, [a, i, l, u, F.isTruncated]),
                                C = (0, r.useCallback)(
                                    (u) => {
                                        (_.current.width = u.contentRect.width),
                                            (_.current.height = u.contentRect.height);
                                        const e = st(A, m, _.current, E),
                                            r = e[0],
                                            n = e[1];
                                        D({ elementList: r, isTruncated: n, isTruncateFinished: !0 }), t && t(n);
                                    },
                                    [t, E, m],
                                ),
                                g = (0, r.useMemo)(() => ({ justifyContent: s, alignContent: c }), [c, s]);
                            return (
                                ((u, e, t = !0) => {
                                    const n = (0, r.useCallback)(
                                        (u) => {
                                            const t = u[0];
                                            e && e(t);
                                        },
                                        [e],
                                    );
                                    (0, r.useEffect)(() => {
                                        if (!u.current || !t) return;
                                        const e = new Ce.Z((u) => n(u));
                                        return (
                                            e.observe(u.current),
                                            () => {
                                                e.disconnect();
                                            }
                                        );
                                    }, [n, t, u]);
                                })(A, C, o),
                                n().createElement(
                                    'div',
                                    { className: h()(he, e, ge, o && pe), style: g },
                                    n().createElement('div', { className: fe, ref: A }, m),
                                    n().createElement(
                                        _e,
                                        { tooltipArgs: B },
                                        n().createElement(
                                            'div',
                                            { className: h()(be, !F.isTruncateFinished && o && ve), style: g },
                                            F.isTruncateFinished && o ? F.elementList : m,
                                        ),
                                    ),
                                )
                            );
                        },
                    ),
                    Et = 'Disclaimer_base_1d',
                    At = 'Disclaimer_link_84',
                    _t = 'Disclaimer_linkIcon_24',
                    dt = (0, K.Pi)(({ className: u }) => {
                        const e = ku().controls;
                        return n().createElement(
                            'div',
                            { className: h()(Et, u) },
                            n().createElement(ct, {
                                text: R.strings.hangar.buyVehicleWindow.disclaimer.text(),
                                binding: {
                                    link: n().createElement(
                                        'div',
                                        { onClick: e.showLicenseInfo, className: At },
                                        R.strings.hangar.buyVehicleWindow.disclaimer.button(),
                                        n().createElement('div', { className: _t }),
                                    ),
                                },
                            }),
                        );
                    }),
                    Ft = 'FormatText_base_d0',
                    Dt = ({ binding: u, text: e = '', classMix: t, alignment: a = ye.left, formatWithBrackets: i }) => {
                        if (null === e) return console.error("FormatText was supplied with 'null'"), null;
                        const o = i && u ? xe(e, u) : e;
                        return n().createElement(
                            r.Fragment,
                            null,
                            o.split('\n').map((e, i) =>
                                n().createElement(
                                    'div',
                                    { className: h()(Ft, t), key: `${e}-${i}` },
                                    ((u, e, t) =>
                                        u.split(/%\((.*?)\)(?:[sd])?/g).map((u) => (t && u in t ? t[u] : Re(u, e))))(
                                        e,
                                        a,
                                        u,
                                    ).map((u, e) => n().createElement(r.Fragment, { key: `${e}-${u}` }, u)),
                                ),
                            ),
                        );
                    };
                let mt, Bt, Ct;
                !(function (u) {
                    (u.small = 'small'), (u.big = 'big'), (u.large = 'large');
                })(mt || (mt = {})),
                    (function (u) {
                        (u.credits = 'credits'),
                            (u.gold = 'gold'),
                            (u.crystal = 'crystal'),
                            (u.xp = 'xp'),
                            (u.freeXP = 'freeXP'),
                            (u.equipCoin = 'equipCoin');
                    })(Bt || (Bt = {})),
                    (function (u) {
                        (u.Default = 'default'),
                            (u.Warning = 'warning'),
                            (u.Selected = 'selected'),
                            (u.Disabled = 'disabled');
                    })(Ct || (Ct = {}));
                const ht = {
                        base: 'OptionCard_base_19',
                        iconWrapper: 'OptionCard_iconWrapper_57',
                        iconWrapper__selected: 'OptionCard_iconWrapper__selected_1c',
                        iconWrapper__default: 'OptionCard_iconWrapper__default_82',
                        iconWrapper__disabled: 'OptionCard_iconWrapper__disabled_02',
                        icon: 'OptionCard_icon_0b',
                        iconWrapper__warning: 'OptionCard_iconWrapper__warning_55',
                        warning: 'OptionCard_warning_78',
                        glow: 'OptionCard_glow_b3',
                        check: 'OptionCard_check_a9',
                        content: 'OptionCard_content_4d',
                        title: 'OptionCard_title_3f',
                        price: 'OptionCard_price_8e',
                    },
                    gt = ({
                        optionState: u,
                        price: e,
                        title: t,
                        icon: a,
                        tooltip: i,
                        isPriceVisible: o,
                        className: l,
                        onClick: s,
                    }) => {
                        const c = (0, r.useCallback)(() => {
                                u !== Ct.Disabled && W.playHighlight();
                            }, [u]),
                            E = (0, r.useCallback)(() => {
                                u !== Ct.Disabled && (s(), W.playClick());
                            }, [u, s]);
                        return n().createElement(
                            'div',
                            { className: h()(ht.base, l), onMouseEnter: c },
                            n().createElement(
                                _e,
                                { tooltipArgs: De(i) },
                                n().createElement(
                                    'div',
                                    { className: h()(ht.iconWrapper, ht[`iconWrapper__${u}`]), onClick: E },
                                    n().createElement('div', {
                                        className: ht.icon,
                                        style: { backgroundImage: `url(${a})` },
                                    }),
                                    u === Ct.Warning && n().createElement('div', { className: ht.warning }),
                                    u === Ct.Selected &&
                                        n().createElement(
                                            n().Fragment,
                                            null,
                                            n().createElement('div', { className: ht.glow }),
                                            n().createElement('div', { className: ht.check }),
                                        ),
                                ),
                            ),
                            n().createElement(
                                'div',
                                { className: ht.content },
                                n().createElement(Dt, { text: t, classMix: ht.title }),
                                o &&
                                    n().createElement(Uu, {
                                        tooltipKey: e.tooltipKey,
                                        prices: e.price,
                                        size: mt.small,
                                    }),
                            ),
                        );
                    },
                    pt = 'OptionList_base_d1',
                    bt = 'OptionList_option_8d';
                function vt() {
                    return (
                        (vt =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        vt.apply(this, arguments)
                    );
                }
                const ft = (0, K.Pi)(({ className: u }) => {
                        const e = ku(),
                            t = e.model,
                            r = e.controls;
                        return n().createElement(
                            'div',
                            { className: h()(pt, u) },
                            Ru(t.options.get(), (u, e) =>
                                n().createElement(
                                    gt,
                                    vt({ key: e }, u, { onClick: () => r.toggleOption(e), className: bt }),
                                ),
                            ),
                        );
                    }),
                    wt = 'RentButton_base_f9',
                    yt = 'RentButton_content_ab',
                    xt = 'RentButton_icon_12',
                    kt = 'RentButton_label_c7',
                    Tt = (0, K.Pi)(({ className: u }) => {
                        const e = ku().model;
                        return n().createElement(
                            Ee,
                            { args: { alias: 'RentalTermSelectionPopover' } },
                            n().createElement(
                                Zu,
                                { type: Ku.ghost, size: Xu.medium, mixClass: h()(wt, u) },
                                n().createElement(
                                    'div',
                                    { className: yt },
                                    n().createElement('div', { className: xt }),
                                    n().createElement('div', { className: kt }, e.rentButtonLabel.get()),
                                ),
                            ),
                        );
                    }),
                    Lt = 'SelectButton_base_79',
                    Ot = 'SelectButton_content_cb',
                    St = 'SelectButton_icon_07',
                    Nt = 'SelectButton_label_ec',
                    Mt = ({ onClick: u, isDisabled: e }) =>
                        n().createElement(
                            Nu,
                            { args: { tooltipId: e ? 'tradeInInfoNotAvailable' : 'tradeInInfo' } },
                            n().createElement(
                                'div',
                                null,
                                n().createElement(
                                    Zu,
                                    { mixClass: Lt, type: Ku.ghost, size: Xu.medium, onClick: u, disabled: e },
                                    n().createElement(
                                        'div',
                                        { className: Ot },
                                        n().createElement('div', { className: St }),
                                        n().createElement(
                                            'div',
                                            { className: Nt },
                                            R.strings.hangar.buyVehicleWindow.tradeInBtnLabel(),
                                        ),
                                    ),
                                ),
                            ),
                        ),
                    It = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    Rt = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const Pt = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    Wt = (u) =>
                        Pt
                            ? `${u}`
                            : (function (u) {
                                  let e = '';
                                  for (let t = Rt.length - 1; t >= 0; t--)
                                      for (; u >= Rt[t]; ) (e += It[t]), (u -= Rt[t]);
                                  return e;
                              })(u),
                    Ht = {
                        base: 'TankName_base_f1',
                        base__sizeMedium: 'TankName_base__sizeMedium_3a',
                        base__sizBig: 'TankName_base__sizBig_a9',
                        base__typeWhite: 'TankName_base__typeWhite_32',
                        base__typeWhiteSpanish: 'TankName_base__typeWhiteSpanish_e2',
                        base__typeColored: 'TankName_base__typeColored_bc',
                        level: 'TankName_level_bb',
                        type: 'TankName_type_3c',
                        type__extraSmall: 'TankName_type__extraSmall_80',
                        type__medium: 'TankName_type__medium_ff',
                        type__big: 'TankName_type__big_9a',
                        type__eliteExtraSmall: 'TankName_type__eliteExtraSmall_74',
                        type__eliteMedium: 'TankName_type__eliteMedium_10',
                        type__eliteBig: 'TankName_type__eliteBig_ac',
                        name: 'TankName_name_56',
                        premiumIGR: 'TankName_premiumIGR_25',
                    };
                let Vt, jt;
                !(function (u) {
                    (u.extraSmall = 'extraSmall'), (u.medium = 'medium'), (u.big = 'big');
                })(Vt || (Vt = {})),
                    (function (u) {
                        (u.colored = 'colored'), (u.white = 'white'), (u.whiteSpanish = 'whiteSpanish');
                    })(jt || (jt = {}));
                const Gt = ({
                        isElite: u,
                        vehicleName: e,
                        vehicleShortName: t,
                        vehicleType: r,
                        vehicleLvl: a,
                        tags: i = '',
                        size: o = Vt.extraSmall,
                        type: l = jt.colored,
                        className: s,
                        classNames: c,
                        isShortName: E = !1,
                    }) => {
                        const A = `${ke(r)}${u ? '_elite' : ''}`,
                            _ = R.images.gui.maps.icons.vehicleTypes.big.$dyn(A);
                        return n().createElement(
                            'div',
                            { className: h()(Ht.base, Ht[`base__size${Te(o)}`], Ht[`base__type${Te(l)}`], s) },
                            n().createElement('div', { className: h()(Ht.level, null == c ? void 0 : c.level) }, Wt(a)),
                            n().createElement('div', {
                                className: h()(
                                    Ht.type,
                                    u && Ht[`type__elite${Te(o)}`],
                                    Ht[`type__${o}`],
                                    null == c ? void 0 : c.typeIcon,
                                ),
                                style: { backgroundImage: `url(${_})` },
                            }),
                            de(i, 'premiumIGR') && n().createElement('div', { className: Ht.premiumIGR }),
                            n().createElement(
                                'div',
                                { className: h()(Ht.name, null == c ? void 0 : c.name) },
                                E ? t : e,
                            ),
                        );
                    },
                    $t = 'VehicleButton_base_c7',
                    zt = 'VehicleButton_vehicleButton_e1',
                    Ut = 'VehicleButton_content_d0',
                    qt = 'VehicleButton_tankName_44',
                    Kt = 'VehicleButton_nationFlag_fa',
                    Xt = 'VehicleButton_vehicleIcon_33',
                    Yt = 'VehicleButton_resetButton_03',
                    Zt = 'VehicleButton_resetIcon_29';
                function Qt() {
                    return (
                        (Qt =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        Qt.apply(this, arguments)
                    );
                }
                const Jt = ({ onClick: u, onClear: e, vehicle: t }) => {
                        const r = R.images.gui.maps.icons.tradeIn.nations.$dyn(t.nation),
                            a = R.images.gui.maps.icons.vehicle.small.$dyn(`${t.nation}_${t.techName}`);
                        return n().createElement(
                            'div',
                            { className: $t },
                            n().createElement(
                                Nu,
                                { args: { tooltipId: 'selectedVehicleTradeOff' } },
                                n().createElement(
                                    Zu,
                                    { onClick: u, mixClass: zt, type: Ku.ghost, size: Xu.medium },
                                    n().createElement(
                                        'div',
                                        { className: Ut },
                                        n().createElement('div', {
                                            className: Kt,
                                            style: { backgroundImage: `url(${r})` },
                                        }),
                                        n().createElement('div', {
                                            className: Xt,
                                            style: { backgroundImage: `url(${a})` },
                                        }),
                                        n().createElement(Gt, Qt({ className: qt, type: jt.whiteSpanish }, Fe(t))),
                                    ),
                                ),
                            ),
                            n().createElement(
                                Zu,
                                { onClick: e, mixClass: Yt, type: Ku.ghost, size: Xu.medium },
                                n().createElement('div', { className: Zt }),
                            ),
                        );
                    },
                    ur = 'TradeIn_base_da',
                    er = (0, K.Pi)(({ className: u }) => {
                        const e = ku(),
                            t = e.model,
                            r = e.controls;
                        return n().createElement(
                            'div',
                            { className: h()(ur, u) },
                            t.computes.isTradeInVehicleSelected()
                                ? n().createElement(Jt, {
                                      onClick: r.selectTradeInVehicle,
                                      onClear: r.clearTradeInVehicle,
                                      vehicle: t.tradeInVehicleToSell.get(),
                                  })
                                : n().createElement(Mt, {
                                      onClick: r.selectTradeInVehicle,
                                      isDisabled: !t.hasTradeInVehiclesToSelect.get(),
                                  }),
                        );
                    }),
                    tr = 'Footer_base_ff',
                    rr = 'Footer_separator_f0',
                    nr = 'Footer_separator__bottom_18',
                    ar = 'Footer_options_60',
                    ir = 'Footer_totalsWrapper_3c',
                    or = 'Footer_totals_ce',
                    lr = 'Footer_totals__collapsed_24',
                    sr = 'Footer_totalsCurrency_3b',
                    cr = 'Footer_totals__currencyAtBottom_cd',
                    Er = 'Footer_totalsCurrencyWithDiscount_83',
                    Ar = 'Footer_actions_72',
                    _r = 'Footer_rentButton_30',
                    dr = 'Footer_disclaimer_66',
                    Fr = 'Footer_tradeInWrapper_c1',
                    Dr = 'Footer_tradeIn_92',
                    mr = (0, K.Pi)(() => {
                        const u = ku().model,
                            e = u.isRentAvailable.get(),
                            t = w().mediaWidth,
                            r = u.totalsPrice.get(),
                            a = (t < b.Medium && r.length > 1) || e,
                            i = e && 1 === r.length;
                        return n().createElement(
                            'div',
                            { className: tr },
                            n().createElement('div', { className: rr }),
                            n().createElement(ft, { className: ar }),
                            n().createElement(
                                'div',
                                { className: ir },
                                n().createElement(Uu, {
                                    tooltipKey: u.totals.get().tooltipKey,
                                    prices: r,
                                    className: h()(or, a && lr, i && cr),
                                    classNames: { currency: sr, currencyWithDiscount: Er },
                                }),
                                n().createElement(
                                    'div',
                                    { className: Ar },
                                    e && n().createElement(Tt, { className: _r }),
                                    n().createElement(Be, null),
                                ),
                            ),
                            n().createElement('div', { className: h()(rr, nr) }),
                            u.hasDisclaimer.get() && n().createElement(dt, { className: dr }),
                            u.hasTradeInWidget.get() &&
                                n().createElement('div', { className: Fr }, n().createElement(er, { className: Dr })),
                        );
                    }),
                    Br = 'Title_base_49',
                    Cr = 'Title_label_a3',
                    hr = 'Title_vehicleWrapper_5d',
                    gr = 'Title_vehicleTooltipHitArea_ec',
                    pr = 'Title_vehicle_d4';
                function br() {
                    return (
                        (br =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        br.apply(this, arguments)
                    );
                }
                const vr = (0, K.Pi)(() => {
                        const u = ku().model,
                            e = u.vehicle.get(),
                            t = ke(e.type);
                        return n().createElement(
                            'div',
                            { className: Br },
                            n().createElement('div', { className: Cr }, u.title.get()),
                            n().createElement(
                                'div',
                                { className: hr },
                                n().createElement(
                                    Gt,
                                    br({ size: Vt.big, type: jt.whiteSpanish, className: pr }, Fe(e)),
                                ),
                                n().createElement(
                                    ee,
                                    {
                                        body: e.isPremium
                                            ? R.strings.menu.header.vehicleType.elite.$dyn(t)
                                            : R.strings.menu.header.vehicleType.$dyn(t),
                                    },
                                    n().createElement('div', { className: gr }),
                                ),
                            ),
                        );
                    }),
                    fr = 'VehicleImage_base_6e',
                    wr = R.images.gui.maps.shop.vehicles.c_600x450.empty_tank(),
                    yr = n().memo(({ techName: u, className: e }) =>
                        n().createElement('div', {
                            className: h()(fr, e),
                            style: {
                                backgroundImage: `url(${R.images.gui.maps.shop.vehicles.c_600x450.$dyn(u) || wr})`,
                            },
                        }),
                    ),
                    xr = 'BuyVehicleViewApp_base_b7',
                    kr = 'BuyVehicleViewApp_background_e3',
                    Tr = 'BuyVehicleViewApp_topRight_d9',
                    Lr = 'BuyVehicleViewApp_closeBtn_0b',
                    Or = 'BuyVehicleViewApp_flag_4e',
                    Sr = 'BuyVehicleViewApp_wrapper_62',
                    Nr = 'BuyVehicleViewApp_content_fc',
                    Mr = 'BuyVehicleViewApp_vehicleImage_c9',
                    Ir = (0, K.Pi)(() => {
                        const u = ku(),
                            e = u.model,
                            t = u.controls,
                            r = e.vehicle.get();
                        var a;
                        return (
                            (a = t.close),
                            q($.n.ESCAPE, a),
                            n().createElement(
                                'div',
                                { className: xr },
                                n().createElement('div', { className: kr }),
                                n().createElement(fu, { className: Tr }),
                                n().createElement(
                                    'div',
                                    { className: Lr },
                                    n().createElement(G, {
                                        caption: R.strings.menu.viewHeader.closeBtn.label(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: t.close,
                                    }),
                                ),
                                n().createElement('div', {
                                    className: Or,
                                    style: {
                                        backgroundImage: `url(R.images.gui.maps.icons.eventBoards.flagsOverlay.${r.nation})`,
                                    },
                                }),
                                n().createElement(
                                    'div',
                                    { className: Sr },
                                    n().createElement(vr, null),
                                    n().createElement(
                                        'div',
                                        { className: Nr },
                                        n().createElement(yr, { techName: r.techName, className: Mr }),
                                    ),
                                    n().createElement(mr, null),
                                ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    I().render(
                        n().createElement(xu, null, n().createElement(N, null, n().createElement(Ir, null))),
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
        (__webpack_require__.O = (u, e, t, r) => {
            if (!e) {
                var n = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [e, t, r] = deferred[l], a = !0, i = 0; i < e.length; i++)
                        (!1 & r || n >= r) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[i]))
                            ? e.splice(i--, 1)
                            : ((a = !1), r < n && (n = r));
                    if (a) {
                        deferred.splice(l--, 1);
                        var o = t();
                        void 0 !== o && (u = o);
                    }
                }
                return u;
            }
            r = r || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > r; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [e, t, r];
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
        (__webpack_require__.j = 435),
        (() => {
            var u = { 435: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var r,
                        n,
                        [a, i, o] = t,
                        l = 0;
                    if (a.some((e) => 0 !== u[e])) {
                        for (r in i) __webpack_require__.o(i, r) && (__webpack_require__.m[r] = i[r]);
                        if (o) var s = o(__webpack_require__);
                    }
                    for (e && e(t); l < a.length; l++)
                        (n = a[l]), __webpack_require__.o(u, n) && u[n] && u[n][0](), (u[n] = 0);
                    return __webpack_require__.O(s);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [76], () => __webpack_require__(922));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
