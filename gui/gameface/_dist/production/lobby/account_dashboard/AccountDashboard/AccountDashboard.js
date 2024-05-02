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
                t.d(u, { O: () => Y });
                var a = {};
                t.r(a),
                    t.d(a, { mouse: () => m, off: () => E, on: () => d, onResize: () => l, onScaleUpdated: () => c });
                var n = {};
                t.r(n),
                    t.d(n, {
                        events: () => a,
                        getMouseGlobalPosition: () => F,
                        getSize: () => A,
                        graphicsQuality: () => B,
                    });
                var r = {};
                t.r(r), t.d(r, { getBgUrl: () => g, getTextureUrl: () => D });
                var o = {};
                function s(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                function i(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.r(o),
                    t.d(o, {
                        addModelObserver: () => S,
                        addPreloadTexture: () => y,
                        children: () => r,
                        displayStatus: () => C,
                        displayStatusIs: () => q,
                        events: () => p,
                        extraSize: () => V,
                        forceTriggerMouseMove: () => X,
                        freezeTextureBeforeResize: () => O,
                        getBrowserTexturePath: () => N,
                        getDisplayStatus: () => z,
                        getScale: () => I,
                        getSize: () => M,
                        getViewGlobalPosition: () => R,
                        isEventHandled: () => G,
                        isFocused: () => U,
                        pxToRem: () => H,
                        remToPx: () => W,
                        resize: () => L,
                        sendEvent: () => x,
                        setAnimateWindow: () => $,
                        setEventHandled: () => j,
                        setInputPaddingsRem: () => T,
                        setSidePaddingsRem: () => P,
                        whenTutorialReady: () => K,
                    });
                const l = s('clientResized'),
                    c = s('self.onScaleUpdated'),
                    d = (e, u) => engine.on(e, u),
                    E = (e, u) => engine.off(e, u),
                    _ = { down: s('mousedown'), up: s('mouseup'), move: s('mousemove') };
                const m = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function u() {
                        e.enabled && i(!1);
                    }
                    function t() {
                        e.enabled && i(!0);
                    }
                    function a() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', u),
                                  document.body.removeEventListener('mouseleave', t))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', u),
                                  document.body.addEventListener('mouseleave', t))
                            : i(!1);
                    }
                    const n = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let n = !0;
                                    const r = `mouse${u}`,
                                        o = _[u]((e) => t([e, 'outside']));
                                    function s(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, s),
                                        a(),
                                        () => {
                                            n &&
                                                (o(),
                                                window.removeEventListener(r, s),
                                                (e.listeners -= 1),
                                                a(),
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
                            (e.enabled = !1), a();
                        },
                        enable() {
                            (e.enabled = !0), a();
                        },
                        enableOutside() {
                            e.enabled && i(!0);
                        },
                        disableOutside() {
                            e.enabled && i(!1);
                        },
                    });
                })();
                function A(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function F(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const B = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function D(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function g(e, u, t) {
                    return `url(${D(e, u, t)})`;
                }
                const C = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    p = {
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
                const b = 2,
                    v = 16,
                    f = 32,
                    w = 64,
                    k = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const n = u.args,
                                r = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        n = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                    return n;
                                })(u, h);
                            return void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, r, {
                                          arguments:
                                              ((a = n),
                                              Object.entries(a).map(([e, u]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, r));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var a;
                    },
                    x = {
                        close(e) {
                            k('popover' === e ? b : f);
                        },
                        minimize() {
                            k(w);
                        },
                        move(e) {
                            k(v, { isMouseEvent: !0, on: e });
                        },
                    };
                function y(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function T(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function N(e, u, t, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, a);
                }
                function S(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function P(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function M(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function L(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function R(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: W(u.x), y: W(u.y) };
                }
                function O() {
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
                function $(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function U() {
                    return viewEnv.isFocused();
                }
                function j() {
                    return viewEnv.setEventHandled();
                }
                function G() {
                    return viewEnv.isEventHandled();
                }
                function X() {
                    viewEnv.forceTriggerMouseMove();
                }
                function z() {
                    return viewEnv.getShowingStatus();
                }
                const q = Object.keys(C).reduce((e, u) => ((e[u] = () => viewEnv.getShowingStatus() === C[u]), e), {}),
                    V = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    K = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : p.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    Y = { view: o, client: n };
            },
            521: (e, u, t) => {
                'use strict';
                let a, n;
                t.d(u, { n: () => a }),
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
            358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                var a = t(67);
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
                        const r = a.O.view.addModelObserver(e, t, n);
                        return (
                            r > 0
                                ? ((this._callbacks[r] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(r) : (this._views[t] = [r])))
                                : console.error("Can't add callback for model:", e),
                            r
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
                            const a = this._callbacks[t];
                            void 0 !== a && a(e, u);
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
            916: (e, u, t) => {
                'use strict';
                t.d(u, {
                    Sw: () => r.Z,
                    B3: () => i,
                    Z5: () => o.Z5,
                    B0: () => s,
                    wU: () => b,
                    ry: () => B,
                    Eu: () => D,
                    SW: () => p,
                    P3: () => h,
                });
                class a {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: u, callback: t }) => {
                                    let a = e.target;
                                    do {
                                        if (a === u) return;
                                        a = a.parentNode;
                                    } while (a);
                                    t();
                                });
                            });
                    }
                    static get instance() {
                        return a.__instance || (a.__instance = new a()), a.__instance;
                    }
                    register(e, u) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: u });
                    }
                    unregister(e, u) {
                        const t = e,
                            a = u;
                        (this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== a)),
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
                var r = t(358);
                var o = t(613);
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
                const i = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var E = t(521),
                    _ = t(67);
                const m = ['args'];
                function A(e, u, t, a, n, r, o) {
                    try {
                        var s = e[r](o),
                            i = s.value;
                    } catch (e) {
                        return void t(e);
                    }
                    s.done ? u(i) : Promise.resolve(i).then(a, n);
                }
                const F = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    B = (function () {
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
                                    return new Promise(function (a, n) {
                                        var r = e.apply(u, t);
                                        function o(e) {
                                            A(r, a, n, o, s, 'next', e);
                                        }
                                        function s(e) {
                                            A(r, a, n, o, s, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    D = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    g = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const n = u.args,
                                r = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        n = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                    return n;
                                })(u, m);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, r, {
                                          arguments:
                                              ((a = n),
                                              Object.entries(a).map(([e, u]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, r));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var a;
                    },
                    C = () => g(s.CLOSE),
                    p = () => g(s.POP_OVER, { on: !1 }),
                    h = (e, u, t, a, n = R.invalid('resId'), r) => {
                        const o = _.O.view.getViewGlobalPosition(),
                            i = t.getBoundingClientRect(),
                            l = i.x,
                            c = i.y,
                            d = i.width,
                            E = i.height,
                            m = {
                                x: _.O.view.pxToRem(l) + o.x,
                                y: _.O.view.pxToRem(c) + o.y,
                                width: _.O.view.pxToRem(d),
                                height: _.O.view.pxToRem(E),
                            };
                        g(s.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: e,
                            decoratorID: a || R.invalid('resId'),
                            targetID: n,
                            direction: u,
                            bbox: F(m),
                            on: !0,
                            args: r,
                        });
                    },
                    b = () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
                    v = (e, u) => {
                        e.keyCode === E.n.ESCAPE && u();
                    };
                var f = t(572);
                const w = n.instance,
                    k = {
                        DataTracker: r.Z,
                        ViewModel: f.Z,
                        ViewEventType: s,
                        NumberFormatType: i,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => g(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: C,
                        sendClosePopOverEvent: p,
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            g(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: h,
                        addEscapeListener: (e) => {
                            const u = (u) => v(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            v(e, C);
                        },
                        handleViewEvent: g,
                        onBindingsReady: B,
                        onLayoutReady: D,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: b,
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const a in u)
                                if (Object.prototype.hasOwnProperty.call(u, a)) {
                                    const n = Object.prototype.toString.call(u[a]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = u[a];
                                        t[a] = [];
                                        for (let u = 0; u < n.length; u++) t[a].push({ value: e(n[u].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[a] = e(u[a]))
                                            : (t[a] = u[a]);
                                }
                            return t;
                        },
                        ClickOutsideManager: w,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = k;
            },
            613: (e, u, t) => {
                'use strict';
                t.d(u, { Ew: () => r, Z5: () => a, cy: () => n });
                const a = {
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
                    },
                    r = {
                        getRegionalDateTime: (e, u, t = !0) => regionalDateTime.getRegionalDateTime(e, u, t),
                        getFormattedDateTime: (e, u, t = !0) => regionalDateTime.getFormattedDateTime(e, u, t),
                    };
            },
            704: (e, u, t) => {
                'use strict';
                var a = t(179),
                    n = t.n(a);
                const r = (e, u, t) =>
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
                const s = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var i;
                function l(e, u, t) {
                    const a = (function (e, u) {
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
                        r = Math.min(a, n);
                    return {
                        extraLarge: r === t.extraLarge.weight,
                        large: r === t.large.weight,
                        medium: r === t.medium.weight,
                        small: r === t.small.weight,
                        extraSmall: r === t.extraSmall.weight,
                        extraLargeWidth: a === t.extraLarge.weight,
                        largeWidth: a === t.large.weight,
                        mediumWidth: a === t.medium.weight,
                        smallWidth: a === t.small.weight,
                        extraSmallWidth: a === t.extraSmall.weight,
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
                })(i || (i = {}));
                const c = o.O.client.getSize('rem'),
                    d = c.width,
                    E = c.height,
                    _ = Object.assign({ width: d, height: E }, l(d, E, s)),
                    m = (0, a.createContext)(_),
                    A = ['children'];
                const F = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                            return n;
                        })(e, A);
                    const n = (0, a.useContext)(m),
                        o = n.extraLarge,
                        s = n.large,
                        i = n.medium,
                        l = n.small,
                        c = n.extraSmall,
                        d = n.extraLargeWidth,
                        E = n.largeWidth,
                        _ = n.mediumWidth,
                        F = n.smallWidth,
                        B = n.extraSmallWidth,
                        D = n.extraLargeHeight,
                        g = n.largeHeight,
                        C = n.mediumHeight,
                        p = n.smallHeight,
                        h = n.extraSmallHeight,
                        b = { extraLarge: D, large: g, medium: C, small: p, extraSmall: h };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && o) return u;
                        if (t.large && s) return u;
                        if (t.medium && i) return u;
                        if (t.small && l) return u;
                        if (t.extraSmall && c) return u;
                    } else {
                        if (t.extraLargeWidth && d) return r(u, t, b);
                        if (t.largeWidth && E) return r(u, t, b);
                        if (t.mediumWidth && _) return r(u, t, b);
                        if (t.smallWidth && F) return r(u, t, b);
                        if (t.extraSmallWidth && B) return r(u, t, b);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && D) return u;
                            if (t.largeHeight && g) return u;
                            if (t.mediumHeight && C) return u;
                            if (t.smallHeight && p) return u;
                            if (t.extraSmallHeight && h) return u;
                        }
                    }
                    return null;
                };
                F.defaultProps = {
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
                (0, a.memo)(F);
                const B = (e) => {
                        const u = (0, a.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    },
                    D = ({ children: e }) => {
                        const u = (0, a.useContext)(m),
                            t = (0, a.useState)(u),
                            r = t[0],
                            i = t[1],
                            c = (0, a.useCallback)((e, u) => {
                                const t = o.O.view.pxToRem(e),
                                    a = o.O.view.pxToRem(u);
                                i(Object.assign({ width: t, height: a }, l(t, a, s)));
                            }, []),
                            d = (0, a.useCallback)(() => {
                                const e = o.O.client.getSize('px');
                                c(e.width, e.height);
                            }, [c]);
                        B(() => {
                            o.O.client.events.on('clientResized', c), o.O.client.events.on('self.onScaleUpdated', d);
                        }),
                            (0, a.useEffect)(
                                () => () => {
                                    o.O.client.events.off('clientResized', c),
                                        o.O.client.events.off('self.onScaleUpdated', d);
                                },
                                [c, d],
                            );
                        const E = (0, a.useMemo)(() => Object.assign({}, r), [r]);
                        return n().createElement(m.Provider, { value: E }, e);
                    };
                var g = t(483),
                    C = t.n(g),
                    p = t(926),
                    h = t.n(p);
                let b, v, f;
                !(function (e) {
                    (e[(e.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = s.small.width)] = 'Small'),
                        (e[(e.Medium = s.medium.width)] = 'Medium'),
                        (e[(e.Large = s.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge');
                })(b || (b = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.width)] = 'Small'),
                            (e[(e.Medium = s.medium.width)] = 'Medium'),
                            (e[(e.Large = s.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge');
                    })(v || (v = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = s.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.height)] = 'Small'),
                            (e[(e.Medium = s.medium.height)] = 'Medium'),
                            (e[(e.Large = s.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.height)] = 'ExtraLarge');
                    })(f || (f = {}));
                const w = () => {
                        const e = (0, a.useContext)(m),
                            u = e.width,
                            t = e.height,
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return b.ExtraLarge;
                                    case e.large:
                                        return b.Large;
                                    case e.medium:
                                        return b.Medium;
                                    case e.small:
                                        return b.Small;
                                    case e.extraSmall:
                                        return b.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), b.ExtraSmall;
                                }
                            })(e),
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return v.ExtraLarge;
                                    case e.largeWidth:
                                        return v.Large;
                                    case e.mediumWidth:
                                        return v.Medium;
                                    case e.smallWidth:
                                        return v.Small;
                                    case e.extraSmallWidth:
                                        return v.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), v.ExtraSmall;
                                }
                            })(e),
                            o = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return f.ExtraLarge;
                                    case e.largeHeight:
                                        return f.Large;
                                    case e.mediumHeight:
                                        return f.Medium;
                                    case e.smallHeight:
                                        return f.Small;
                                    case e.extraSmallHeight:
                                        return f.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), f.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: n, mediaWidth: r, mediaHeight: o, remScreenWidth: u, remScreenHeight: t };
                    },
                    k = ['children', 'className'];
                function x() {
                    return (
                        (x =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        x.apply(this, arguments)
                    );
                }
                const y = {
                        [v.ExtraSmall]: '',
                        [v.Small]: h().SMALL_WIDTH,
                        [v.Medium]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH}`,
                        [v.Large]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH} ${h().LARGE_WIDTH}`,
                        [v.ExtraLarge]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH} ${h().LARGE_WIDTH} ${h().EXTRA_LARGE_WIDTH}`,
                    },
                    T = {
                        [f.ExtraSmall]: '',
                        [f.Small]: h().SMALL_HEIGHT,
                        [f.Medium]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT}`,
                        [f.Large]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT} ${h().LARGE_HEIGHT}`,
                        [f.ExtraLarge]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT} ${h().LARGE_HEIGHT} ${h().EXTRA_LARGE_HEIGHT}`,
                    },
                    N = {
                        [b.ExtraSmall]: '',
                        [b.Small]: h().SMALL,
                        [b.Medium]: `${h().SMALL} ${h().MEDIUM}`,
                        [b.Large]: `${h().SMALL} ${h().MEDIUM} ${h().LARGE}`,
                        [b.ExtraLarge]: `${h().SMALL} ${h().MEDIUM} ${h().LARGE} ${h().EXTRA_LARGE}`,
                    },
                    S = (e) => {
                        let u = e.children,
                            t = e.className,
                            a = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, k);
                        const r = w(),
                            o = r.mediaWidth,
                            s = r.mediaHeight,
                            i = r.mediaSize;
                        return n().createElement('div', x({ className: C()(t, y[o], T[s], N[i]) }, a), u);
                    },
                    P = ['children'];
                const M = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                            return n;
                        })(e, P);
                    return n().createElement(D, null, n().createElement(S, t, u));
                };
                var L = t(493),
                    O = t.n(L);
                function I(e) {
                    engine.call('PlaySound', e);
                }
                const H = {
                        playHighlight() {
                            I('highlight');
                        },
                        playClick() {
                            I('play');
                        },
                        playYes() {
                            I('yes1');
                        },
                    },
                    W = {
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
                    $ = [
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
                function U() {
                    return (
                        (U =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        U.apply(this, arguments)
                    );
                }
                class j extends n().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && I(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && I(this.props.soundClick);
                            }),
                            (this._onMouseUp = (e) => (u) => {
                                e && e(u), this.setState({ click: !1 });
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 }));
                    }
                    render() {
                        const e = this.props,
                            u = e.caption,
                            t = e.onClick,
                            a = e.goto,
                            r = e.side,
                            o = e.type,
                            s = e.classNames,
                            i = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            d = e.onMouseUp,
                            E =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        n = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                    return n;
                                })(e, $)),
                            _ = C()(W.base, W[`base__${o}`], W[`base__${r}`], null == s ? void 0 : s.base),
                            m = C()(W.icon, W[`icon__${o}`], W[`icon__${r}`], null == s ? void 0 : s.icon),
                            A = C()(W.glow, null == s ? void 0 : s.glow),
                            F = C()(W.caption, W[`caption__${o}`], null == s ? void 0 : s.caption),
                            B = C()(W.goto, null == s ? void 0 : s.goto);
                        return n().createElement(
                            'div',
                            U(
                                {
                                    className: _,
                                    onMouseEnter: this._onMouseEnter(i),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(d),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                E,
                            ),
                            'info' !== o && n().createElement('div', { className: W.shine }),
                            n().createElement('div', { className: m }, n().createElement('div', { className: A })),
                            n().createElement('div', { className: F }, u),
                            a && n().createElement('div', { className: B }, a),
                        );
                    }
                }
                j.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var G = t(797);
                let X;
                function z(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(X || (X = {}));
                const q = (e) => e.replace(/&nbsp;/g, ' '),
                    V = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    K = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    Y = (e, u, t = X.left) => e.split(u).reduce(t === X.left ? V : K, []),
                    Q = (() => {
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
                        return (u) =>
                            u
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(e);
                    })(),
                    Z = ['zh_cn', 'zh_sg', 'zh_tw'],
                    J = (e, u = X.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (Z.includes(t)) return Q(e);
                        if ('ja' === t) {
                            return (0, G.D4)()
                                .parse(e)
                                .map((e) => q(e));
                        }
                        return ((e, u = X.left) => {
                            let t = [];
                            const a =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                n = q(e);
                            return Y(n, /( )/, u).forEach((e) => (t = t.concat(Y(e, a, X.left)))), t;
                        })(e, u);
                    };
                var ee = t(916),
                    ue = t(613);
                const te = 1e3,
                    ae = 60,
                    ne = 3600,
                    re = 86400;
                Date.now(), ue.Ew.getRegionalDateTime, ue.Ew.getFormattedDateTime;
                function oe(e = 0) {
                    let u = e;
                    const t = Math.trunc(u / re);
                    u -= t * re;
                    const a = Math.trunc(u / ne);
                    u -= a * ne;
                    const n = Math.trunc(u / ae);
                    return (u -= n * ae), { days: t, hours: a, minutes: n, seconds: u };
                }
                const se = () => {},
                    ie = (e = 0, u, t = 0, n = se) => {
                        const r = (0, a.useState)(e),
                            o = r[0],
                            s = r[1];
                        return (
                            (0, a.useEffect)(() => {
                                if (e > 0) {
                                    s(e);
                                    const a = Date.now(),
                                        r = setInterval(
                                            () => {
                                                const u = e - Math.floor((Date.now() - a) / te);
                                                null !== t && u <= t ? (s(t), n && n(), clearInterval(r)) : s(u);
                                            },
                                            (u || (e > 120 ? ae : 1)) * te,
                                        );
                                    return () => {
                                        clearInterval(r);
                                    };
                                }
                            }, [e, u, t, n]),
                            o
                        );
                    },
                    le = (e = 1) => {
                        const u = new Error().stack;
                        let t,
                            a = R.invalid('resId');
                        return (
                            u &&
                                ((t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                window.__feature &&
                                    window.__feature !== t &&
                                    window.subViews[t] &&
                                    (a = window.subViews[t].id)),
                            { caller: t, stack: u, resId: a }
                        );
                    },
                    ce = (e, u) => e.split('.').reduce((e, u) => e && e[u], u),
                    de = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    Ee = (e, u) => (e.length > 0 ? `${e}.${u}` : u),
                    _e = (e) =>
                        ((e, u) =>
                            e.split('.').reduce((e, t) => {
                                const a = ce(`${e}.${t}`, window);
                                return de(a) ? u(e, t, a) : `${e}.${t}`;
                            }))(e, (e, u) => `${e}.${u}.value`),
                    me = (e) => {
                        const u = ((e) => {
                                const u = le(),
                                    t = u.caller,
                                    a = u.resId,
                                    n = window.__feature && window.__feature !== t && t ? `subViews.${t}` : '';
                                return { modelPrefix: n, modelPath: Ee(n, e || ''), resId: a };
                            })(),
                            t = u.modelPrefix,
                            a = e.split('.');
                        if (a.length > 0) {
                            const e = [a[0]];
                            return (
                                a.reduce((u, a) => {
                                    const n = ce(Ee(t, `${u}.${a}`), window);
                                    return de(n) ? (e.push(n.id), `${u}.${a}.value`) : (e.push(a), `${u}.${a}`);
                                }),
                                e.reduce((e, u) => e + '.' + u)
                            );
                        }
                        return '';
                    },
                    Ae = ee.Sw.instance;
                let Fe;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(Fe || (Fe = {}));
                const Be = (e = 'model', u = Fe.Deep) => {
                        const t = (0, a.useState)(0),
                            n = (t[0], t[1]),
                            r = (0, a.useMemo)(() => le(), []),
                            o = r.caller,
                            s = r.resId,
                            i = (0, a.useMemo)(
                                () => (window.__feature && window.__feature !== o ? `subViews.${o}.${e}` : e),
                                [o, e],
                            ),
                            l = (0, a.useState)(() =>
                                ((e) => {
                                    const u = ce(e, window);
                                    for (const e in u) 'function' == typeof u[e] && (u[e] = u[e].bind(u));
                                    return de(u) ? u.value : u;
                                })(_e(i)),
                            ),
                            c = l[0],
                            d = l[1],
                            E = (0, a.useRef)(-1);
                        return (
                            B(() => {
                                if (
                                    ('boolean' == typeof u &&
                                        ((u = u ? Fe.Deep : Fe.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    u !== Fe.None)
                                ) {
                                    const t = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            u === Fe.Deep
                                                ? (e === c && n((e) => e + 1), d(e))
                                                : d(Object.assign([], e));
                                        },
                                        a = me(e);
                                    E.current = Ae.addCallback(a, t, s, u === Fe.Deep);
                                }
                            }),
                            (0, a.useEffect)(() => {
                                if (u !== Fe.None)
                                    return () => {
                                        Ae.removeCallback(E.current, s);
                                    };
                            }, [s, u]),
                            c
                        );
                    },
                    De = (ee.Sw.instance, ie),
                    ge = {};
                function Ce(e, u, t, a = Fe.Deep) {
                    const r = (r) => {
                        const o = r.path || u || void 0,
                            s = Be(o, (o && ge[o]) || !1 ? Fe.None : a),
                            i = Object.assign({}, t(s, r), r);
                        return n().createElement(e, i);
                    };
                    var o;
                    return (r.displayName = `WithModel(${((o = e), o.displayName || o.name || 'Component')})`), r;
                }
                const pe = (e) => {
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
                };
                var he = t(521);
                const be = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function ve(e = he.n.NONE, u = be, t = !1, n = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== he.n.NONE)
                            return (
                                window.addEventListener('keydown', a, t),
                                () => {
                                    window.removeEventListener('keydown', a, t);
                                }
                            );
                        function a(a) {
                            if (a.keyCode === e) {
                                if (!n && o.O.view.isEventHandled()) return;
                                o.O.view.setEventHandled(), u(a), t && a.stopPropagation();
                            }
                        }
                    }, [u, e, t, n]);
                }
                const fe = 'display',
                    we = (e, u) => {
                        const t = Be('tutorialModel.effects.items').filter((t) => {
                            if (!t) return !1;
                            const a = t.value,
                                n = window.__featureId.toString();
                            return a.componentId === e && a.type === u && a.viewId === n;
                        });
                        if (0 === t.length) return null;
                        const a = Object.assign({}, t[0].value);
                        return {
                            effect: a,
                            completeEffect: () => {
                                tutorialModel.onEffectCompleted({
                                    componentId: e,
                                    viewId: window.__featureId.toFixed(0),
                                    effectType: u,
                                    effectBuilder: a.builder,
                                }),
                                    u === fe && window.tutorialApi && window.tutorialApi.updateComponents();
                            },
                        };
                    },
                    ke = 'visible_change',
                    xe = ke,
                    ye = (e, u) => {
                        const t = Be('tutorialModel.triggers.items').filter((t) => {
                            if (!t) return !1;
                            const a = t.value,
                                n = a.triggers.filter((e) => e.value === u);
                            return a.componentId === e && n.length > 0;
                        });
                        if (0 === t.length) return null;
                        if (!window.tutorialModel.foundComponents.items.some((u) => u.value.componentId === e))
                            return null;
                        return {
                            trigger: t[0].value,
                            runTrigger: (t) => {
                                window.tutorialModel.onTriggerActivated({ componentId: e, triggerType: u, state: t });
                            },
                        };
                    },
                    Te = 'FormatText_base_d0',
                    Ne = ({ binding: e, text: u = '', classMix: t, alignment: r = X.left, formatWithBrackets: o }) => {
                        if (null === u) return console.error("FormatText was supplied with 'null'"), null;
                        const s = o && e ? z(u, e) : u;
                        return n().createElement(
                            a.Fragment,
                            null,
                            s.split('\n').map((u, o) =>
                                n().createElement(
                                    'div',
                                    { className: C()(Te, t), key: `${u}-${o}` },
                                    ((e, u, t) =>
                                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (t && e in t ? t[e] : J(e, u))))(
                                        u,
                                        r,
                                        e,
                                    ).map((e, u) => n().createElement(a.Fragment, { key: `${u}-${e}` }, e)),
                                ),
                            ),
                        );
                    },
                    Se = 'BonusXpBlock_base_91',
                    Pe = 'BonusXpBlock_base__locked_c9',
                    Me = 'BonusXpBlock_lock_1f',
                    Le = 'BonusXpBlock_locked_overlay_e2',
                    Re = 'BonusXpBlock_base__disabled_a6',
                    Oe = 'BonusXpBlock_disabled_overlay_9b',
                    Ie = 'BonusXpBlock_xp_1c',
                    He = 'BonusXpBlock_xp__x1_8c',
                    We = 'BonusXpBlock_xp__x2_a5',
                    $e = 'BonusXpBlock_xp__x3_8a',
                    Ue = 'BonusXpBlock_xp__x4_36',
                    je = 'BonusXpBlock_xp__x5_16',
                    Ge = 'BonusXpBlock_xp__wotPlus_dd',
                    Xe = 'BonusXpBlock_xp__locked_7a',
                    ze = 'BonusXpBlock_hover_43',
                    qe = 'BonusXpBlock_text_97',
                    Ve = 'BonusXpBlock_heading_a4',
                    Ke = 'BonusXpBlock_multiplier_value_50',
                    Ye = 'BonusXpBlock_multiplier_unavailable_0c',
                    Qe = 'BonusXpBlock_uses_f2',
                    Ze = 'BonusXpBlock_usesLeft_fb',
                    Je = 'BonusXpBlock_alert_b3',
                    eu = 'BonusXpBlock_alertIcon_6c',
                    uu = 'BonusXpBlock_xpIconContainer_87',
                    tu = 'BonusXpBlock_xpIcon_ce',
                    au = 'BonusXpBlock_daily_applied_xp_c4',
                    nu = 'BonusXpBlock_plus_sign_b9',
                    ru = {
                        blackReal: 'FormatTextWithColorTags_blackReal_3c',
                        whiteReal: 'FormatTextWithColorTags_whiteReal_8a',
                        white: 'FormatTextWithColorTags_white_16',
                        whiteOrange: 'FormatTextWithColorTags_whiteOrange_18',
                        whiteSpanish: 'FormatTextWithColorTags_whiteSpanish_10',
                        par: 'FormatTextWithColorTags_par_ca',
                        parSecondary: 'FormatTextWithColorTags_parSecondary_8d',
                        parTertiary: 'FormatTextWithColorTags_parTertiary_a3',
                        red: 'FormatTextWithColorTags_red_60',
                        redDark: 'FormatTextWithColorTags_redDark_03',
                        yellow: 'FormatTextWithColorTags_yellow_ad',
                        orange: 'FormatTextWithColorTags_orange_e4',
                        cream: 'FormatTextWithColorTags_cream_cd',
                        brown: 'FormatTextWithColorTags_brown_c8',
                        greenBright: 'FormatTextWithColorTags_greenBright_f0',
                        green: 'FormatTextWithColorTags_green_c5',
                        greenDark: 'FormatTextWithColorTags_greenDark_af',
                        blueBooster: 'FormatTextWithColorTags_blueBooster_ac',
                        blueTeamkiller: 'FormatTextWithColorTags_blueTeamkiller_6f',
                        cred: 'FormatTextWithColorTags_cred_4e',
                        gold: 'FormatTextWithColorTags_gold_90',
                        bond: 'FormatTextWithColorTags_bond_71',
                        prom: 'FormatTextWithColorTags_prom_dd',
                        parNoWidth: 'FormatTextWithColorTags_parNoWidth_5a',
                    },
                    ou = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    su = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    iu = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    lu = (0, a.memo)(({ text: e, binding: u, classMix: t }) => {
                        const r = (0, a.useCallback)((e) => ({ color: `#${e}` }), []),
                            o = (0, a.useMemo)(() => u || {}, [u]);
                        let s = ou.exec(e),
                            i = e,
                            l = 0;
                        for (; s; ) {
                            const t = s[0],
                                a = su.exec(t),
                                c = iu.exec(t),
                                d = s[1];
                            if (a && c) {
                                const e = a[0],
                                    s = e + l++ + e;
                                (i = i.replace(t, `%(${s})`)),
                                    (o[s] = ru[e]
                                        ? n().createElement(
                                              'span',
                                              { className: ru[e] },
                                              n().createElement(Ne, { text: d, binding: u }),
                                          )
                                        : n().createElement(
                                              'span',
                                              { style: r(e) },
                                              n().createElement(Ne, { text: d, binding: u }),
                                          ));
                            }
                            s = ou.exec(e);
                        }
                        return n().createElement(Ne, { text: i, classMix: t, binding: o });
                    });
                class cu extends n().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = ee.B3.GOLD;
                        else e = ee.B3.INTEGRAL;
                        const u = ee.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                cu.defaultProps = { format: 'integral' };
                const du = {
                        get heading() {
                            return R.strings.account_dashboard.bonusXp.heading();
                        },
                        get description() {
                            return R.strings.account_dashboard.bonusXp.descriptionWotPremium();
                        },
                        get descriptionDailyRemaining() {
                            return R.strings.account_dashboard.bonusXp.descriptionDailyRemaining();
                        },
                        get descriptionMoreWotPlus() {
                            return R.strings.account_dashboard.bonusXp.descriptionMoreWotPlus();
                        },
                        get descriptionMoreWotPremium() {
                            return R.strings.account_dashboard.bonusXp.descriptionMoreWotPremium();
                        },
                        get descriptionWotPremium() {
                            return R.strings.account_dashboard.bonusXp.descriptionWotPremium();
                        },
                        get unavailable() {
                            return R.strings.account_dashboard.bonusXp.unavailable();
                        },
                        get wotPlusLabel() {
                            return R.strings.account_dashboard.bonusXp.wotPlusLabel();
                        },
                        get wotPremiumLabel() {
                            return R.strings.account_dashboard.bonusXp.wotPremiumLabel();
                        },
                        get descriptionWotPlus() {
                            return R.strings.account_dashboard.bonusXp.descriptionWotPlus();
                        },
                        get descriptionDailyEarning() {
                            return R.strings.account_dashboard.bonusXp.descriptionDailyEarning();
                        },
                        get xpAddSign() {
                            return R.strings.account_dashboard.bonusXp.xpAddSign();
                        },
                    },
                    Eu = [He, We, $e, Ue, je],
                    _u = ({ isWotPlus: e, isWotPremium: u, isExhausted: t, isWotPlusBonusEnabled: a }, r) => {
                        if (e && u && t && a) {
                            const e = {
                                xp: n().createElement(
                                    'div',
                                    { className: au },
                                    n().createElement('span', { className: nu }, du.xpAddSign),
                                    n().createElement(cu, { value: r }),
                                ),
                                icon: n().createElement(
                                    'div',
                                    { className: uu },
                                    n().createElement('div', { className: tu }),
                                ),
                            };
                            return mu(du.descriptionDailyEarning, Ke, e);
                        }
                        const o = (({ isWotPlus: e, isWotPremium: u, isExhausted: t, isWotPlusBonusEnabled: a }) => {
                                if (t) {
                                    if (e && !u) return { text: du.descriptionMoreWotPremium, classMix: Ke };
                                    if (!e && u)
                                        return a
                                            ? { text: du.descriptionMoreWotPlus, classMix: Ke }
                                            : { text: du.descriptionDailyRemaining, classMix: Ke };
                                }
                                return { text: du.descriptionDailyRemaining, classMix: Ke };
                            })({ isWotPlus: e, isWotPremium: u, isExhausted: t, isWotPlusBonusEnabled: a }),
                            s = o.text,
                            i = o.classMix;
                        return n().createElement(Ne, { text: s, classMix: i });
                    },
                    mu = (e, u, t) => n().createElement(lu, { text: e, classMix: u, binding: t }),
                    Au = Ce(
                        (e) => {
                            const u = e.className,
                                t = e.isEnabled,
                                r = e.multiplier,
                                o = e.totalUses,
                                s = e.usesLeft,
                                i = e.onClick,
                                l = e.isWotPlusBonusEnabled,
                                c = e.isWotPlus,
                                d = e.isWotPremium,
                                E = e.dailyAppliedXP,
                                _ = t && ((!d && !c) || (!l && !d)),
                                m = !_ && t,
                                A = !t,
                                F = m && 0 === s,
                                B = (0, a.useCallback)(() => {
                                    t && (i(), I('play'));
                                }, [i, t]),
                                D = (0, a.useCallback)(() => {
                                    t && I('highlight');
                                }, [t]);
                            return n().createElement(
                                'div',
                                {
                                    className: C()(u, Se, _ && Pe, A && Re),
                                    'data-testid': 'BonusXpBlock',
                                    onClick: B,
                                    onMouseEnter: D,
                                },
                                n().createElement('div', { className: Oe }),
                                n().createElement('div', { className: ze }),
                                n().createElement('div', { className: C()(Ie, l ? Ge : Eu[r - 1] || Eu[0], _ && Xe) }),
                                _ &&
                                    n().createElement(
                                        n().Fragment,
                                        null,
                                        n().createElement('div', { className: Le }),
                                        n().createElement(
                                            'div',
                                            { className: qe },
                                            n().createElement('div', { className: Me }),
                                            n().createElement('h3', { className: Ve }, du.heading),
                                            (({ isWotPlusBonusEnabled: e }) =>
                                                e
                                                    ? mu(du.descriptionWotPlus, Ye, {
                                                          wotPlus: du.wotPlusLabel,
                                                          wotPremium: du.wotPremiumLabel,
                                                      })
                                                    : mu(du.descriptionWotPremium, Ye, {
                                                          wotPremium: du.wotPremiumLabel,
                                                      }))({ isWotPlusBonusEnabled: l }),
                                        ),
                                    ),
                                m &&
                                    n().createElement(
                                        'div',
                                        { className: qe },
                                        n().createElement('h3', { className: Ve }, du.heading),
                                        n().createElement(
                                            'h2',
                                            { className: Qe },
                                            n().createElement('span', { className: Ze }, s),
                                            ' / ',
                                            o,
                                        ),
                                        _u(
                                            { isWotPlus: c, isWotPremium: d, isExhausted: F, isWotPlusBonusEnabled: l },
                                            E,
                                        ),
                                    ),
                                A &&
                                    n().createElement(
                                        'div',
                                        { className: qe },
                                        n().createElement('h3', { className: Ve }, du.heading),
                                        n().createElement(Ne, { text: du.unavailable, classMix: Ye }),
                                        n().createElement(
                                            'div',
                                            { className: Je },
                                            n().createElement('div', { className: eu }),
                                        ),
                                    ),
                            );
                        },
                        'model.bonusXp',
                        (e, u) => Object.assign({}, e, u),
                    ),
                    Fu = 'ExcludedMapsBlock_base_6b',
                    Bu = 'ExcludedMapsBlock_base__disabled_68',
                    Du = 'ExcludedMapsBlock_header_d4',
                    gu = 'ExcludedMapsBlock_base_background_03',
                    Cu = 'ExcludedMapsBlock_disabledPattern_09',
                    pu = 'ExcludedMapsBlock_lock_e8',
                    hu = 'ExcludedMapsBlock_hover_b0',
                    bu = 'ExcludedMapsBlock_disabledContent_b4',
                    vu = 'ExcludedMapsBlock_unavailableText_d6',
                    fu = 'ExcludedMapsBlock_slotContainer_b6';
                let wu;
                !(function (e) {
                    (e.empty = 'empty'), (e.selected = 'selected'), (e.disabled = 'disabled');
                })(wu || (wu = {}));
                const ku = [
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
                function xu(e) {
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
                const yu = (e, u, t = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: ee.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: a,
                                },
                                t,
                            ),
                        );
                    },
                    Tu = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            n = e.args,
                            r = e.onMouseEnter,
                            o = e.onMouseLeave,
                            s = e.onMouseDown,
                            i = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            d = e.ignoreMouseClick,
                            E = void 0 !== d && d,
                            _ = e.decoratorId,
                            m = void 0 === _ ? 0 : _,
                            A = e.isEnabled,
                            F = void 0 === A || A,
                            B = e.targetId,
                            D = void 0 === B ? 0 : B,
                            g = e.onShow,
                            C = e.onHide,
                            p = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, ku);
                        const h = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            b = (0, a.useMemo)(() => D || le().resId, [D]),
                            v = (0, a.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (yu(t, m, { isMouseEvent: !0, on: !0, arguments: xu(n) }, b),
                                    g && g(),
                                    (h.current.isVisible = !0));
                            }, [t, m, n, b, g]),
                            f = (0, a.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const e = h.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (h.current.timeoutId = 0)),
                                        yu(t, m, { on: !1 }, b),
                                        h.current.isVisible && C && C(),
                                        (h.current.isVisible = !1);
                                }
                            }, [t, m, b, C]),
                            w = (0, a.useCallback)((e) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(h.current.prevTarget) && f();
                                    }, 200)));
                            }, []);
                        (0, a.useEffect)(() => {
                            const e = h.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', w, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', w, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, a.useEffect)(() => {
                                !1 === F && f();
                            }, [F, f]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', f),
                                    () => {
                                        window.removeEventListener('mouseleave', f), f();
                                    }
                                ),
                                [f],
                            );
                        return F
                            ? (0, a.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((k = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((h.current.timeoutId = window.setTimeout(v, c ? 100 : 400)),
                                                      r && r(e),
                                                      k && k(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              f(), null == o || o(u), null == e || e(u);
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              !1 === E && f(), null == i || i(u), null == e || e(u);
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              !1 === E && f(), null == s || s(u), null == e || e(u);
                                          })(u.props.onMouseDown),
                                      },
                                      p,
                                  ),
                              )
                            : u;
                        var k;
                    },
                    Nu = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Su() {
                    return (
                        (Su =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Su.apply(this, arguments)
                    );
                }
                const Pu = R.views.common.tooltip_window.simple_tooltip_content,
                    Mu = (e) => {
                        let u = e.children,
                            t = e.body,
                            r = e.header,
                            o = e.note,
                            s = e.alert,
                            i = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, Nu);
                        const c = (0, a.useMemo)(() => {
                            const e = Object.assign({}, i, { body: t, header: r, note: o, alert: s });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [s, t, r, o, i]);
                        return n().createElement(
                            Tu,
                            Su(
                                {
                                    contentId:
                                        ((d = null == i ? void 0 : i.hasHtmlContent),
                                        d ? Pu.SimpleTooltipHtmlContent('resId') : Pu.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var d;
                    },
                    Lu = 'SlotItem_base_5b',
                    Ru = 'SlotItem_base__responsive_39',
                    Ou = 'SlotItem_mapImage_6b',
                    Iu = 'SlotItem_timerContainer_91',
                    Hu = 'SlotItem_base__select_15',
                    Wu = 'SlotItem_base__disabled_88',
                    $u = 'SlotItem_base__replace_c5',
                    Uu = 'SlotItem_base__cooldown_6a',
                    ju = 'SlotItem_mapTitle_a4',
                    Gu = 'SlotItem_removeButton_25',
                    Xu = 'SlotItem_removeButton_icon_7e',
                    zu = 'SlotItem_timerText_11',
                    qu = R.strings.excluded_maps.notSelected(),
                    Vu = ({ isEnabled: e = !0, isResponsive: u, isMapNameDisplayed: t, tooltipStrings: a }) =>
                        e
                            ? n().createElement(
                                  Mu,
                                  {
                                      header: (null == a ? void 0 : a.disabledTooltipHeader) || ct.selectTooltipHeader,
                                      body: (null == a ? void 0 : a.selectTooltipBody) || ct.selectTooltipBody,
                                  },
                                  n().createElement(
                                      'div',
                                      { className: C()(Lu, Hu, u && Ru), 'data-testid': 'slot' },
                                      t && n().createElement('div', { className: ju }, qu),
                                  ),
                              )
                            : n().createElement(
                                  Mu,
                                  {
                                      header:
                                          (null == a ? void 0 : a.disabledTooltipHeader) || ct.disabledTooltipHeader,
                                      body: (null == a ? void 0 : a.disabledTooltipBody) || ct.disabledTooltipBody,
                                  },
                                  n().createElement('div', { className: C()(Lu, Wu, u && Ru), 'data-testid': 'slot' }),
                              ),
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
                let Yu, Qu;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(Yu || (Yu = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
                    })(Qu || (Qu = {}));
                const Zu = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: r,
                    disabled: o,
                    mixClass: s,
                    soundHover: i,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: d,
                    onMouseDown: E,
                    onMouseUp: _,
                    onMouseLeave: m,
                    onClick: A,
                }) => {
                    const F = (0, a.useRef)(null),
                        B = (0, a.useState)(t),
                        D = B[0],
                        g = B[1],
                        p = (0, a.useState)(!1),
                        h = p[0],
                        b = p[1],
                        v = (0, a.useState)(!1),
                        f = v[0],
                        w = v[1],
                        k = (0, a.useCallback)(() => {
                            o || (F.current && (F.current.focus(), g(!0)));
                        }, [o]),
                        x = (0, a.useCallback)(
                            (e) => {
                                D && null !== F.current && !F.current.contains(e.target) && g(!1);
                            },
                            [D],
                        ),
                        y = (0, a.useCallback)(
                            (e) => {
                                o || (A && A(e));
                            },
                            [o, A],
                        ),
                        T = (0, a.useCallback)(
                            (e) => {
                                o || (null !== i && I(i), c && c(e), w(!0));
                            },
                            [o, i, c],
                        ),
                        N = (0, a.useCallback)(
                            (e) => {
                                d && d(e);
                            },
                            [d],
                        ),
                        S = (0, a.useCallback)(
                            (e) => {
                                o || (_ && _(e), b(!1));
                            },
                            [o, _],
                        ),
                        P = (0, a.useCallback)(
                            (e) => {
                                o || (null !== l && I(l), E && E(e), t && k(), b(!0));
                            },
                            [o, l, E, k, t],
                        ),
                        M = (0, a.useCallback)(
                            (e) => {
                                o || (m && m(e), b(!1));
                            },
                            [o, m],
                        ),
                        L = C()(
                            Ku.base,
                            Ku[`base__${r}`],
                            {
                                [Ku.base__disabled]: o,
                                [Ku[`base__${u}`]]: u,
                                [Ku.base__focus]: D,
                                [Ku.base__highlightActive]: h,
                                [Ku.base__firstHover]: f,
                            },
                            s,
                        ),
                        O = C()(Ku.state, Ku.state__default);
                    return (
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mousedown', x),
                                () => {
                                    document.removeEventListener('mousedown', x);
                                }
                            ),
                            [x],
                        ),
                        (0, a.useEffect)(() => {
                            g(t);
                        }, [t]),
                        n().createElement(
                            'div',
                            {
                                ref: F,
                                className: L,
                                onMouseEnter: T,
                                onMouseMove: N,
                                onMouseUp: S,
                                onMouseDown: P,
                                onMouseLeave: M,
                                onClick: y,
                            },
                            r !== Yu.ghost &&
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement('div', { className: Ku.back }),
                                    n().createElement('span', { className: Ku.texture }),
                                ),
                            n().createElement(
                                'span',
                                { className: O },
                                n().createElement('span', { className: Ku.stateDisabled }),
                                n().createElement('span', { className: Ku.stateHighlightHover }),
                                n().createElement('span', { className: Ku.stateHighlightActive }),
                            ),
                            n().createElement(
                                'span',
                                { className: Ku.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                Zu.defaultProps = { type: Yu.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const Ju = (0, a.memo)(Zu),
                    et = (e) =>
                        e.days > 0
                            ? z(R.strings.common.duration.days(), { days: e.days })
                            : e.hours > 0
                              ? z(R.strings.common.duration.hours(), { hours: e.hours })
                              : e.minutes > 0
                                ? z(R.strings.common.duration.minutes(), { minutes: e.minutes })
                                : z(R.strings.common.duration.seconds(), { seconds: e.seconds }),
                    ut =
                        ((0, a.memo)(({ duration: e }) => {
                            const u = e >= 0 ? et(oe(e)) : R.strings.common.duration.unlimited();
                            return n().createElement('span', null, u);
                        }),
                        (e) => {
                            const u = R.images.gui.maps.icons.map;
                            return u[`c_${e.mapId}`] ? u[`c_${e.mapId}`]() : '';
                        }),
                    tt = (e) => {
                        const u = Object.assign({}, e);
                        return (
                            u.hours > 0 && u.minutes > 0 && u.hours++,
                            u.seconds > 0 && u.minutes++,
                            u.seconds < 0 && u.seconds,
                            et(u)
                        );
                    },
                    at = (e) =>
                        e.hours > 0 && e.minutes > 0
                            ? `${z(R.strings.common.duration.hours(), { hours: e.hours })} ${z(R.strings.common.duration.minutes(), { minutes: e.minutes })}`
                            : tt(e),
                    nt = ({
                        map: e,
                        isMapNameDisplayed: u,
                        isResponsive: t,
                        onRemoveButtonClick: a,
                        tooltipStrings: r,
                    }) => {
                        const o = Math.floor(e.cooldownEndTimeInSecs - Date.now() / te),
                            s = o <= 0 && '' !== e.mapId,
                            i = o > 0,
                            l = C()(Lu, s && $u, i && Uu, t && Ru),
                            c = ((e) => {
                                const u = R.strings.arenas;
                                return u[`c_${e.mapId}`] && u[`c_${e.mapId}`].name ? u[`c_${e.mapId}`].name() : '';
                            })(e);
                        if (i) {
                            const t = oe(o),
                                a = tt(t),
                                r = z(ct.cooldownTooltipBody, { cooldownStr: at(t) });
                            return n().createElement(
                                Mu,
                                { header: ct.cooldownTooltipHeader, body: r },
                                n().createElement(
                                    'div',
                                    { className: l, 'data-testid': 'slot' },
                                    n().createElement('img', { src: ut(e), className: Ou }),
                                    n().createElement(
                                        'div',
                                        { className: Iu, 'data-testid': 'timer' },
                                        n().createElement('div', { className: zu }, a),
                                    ),
                                    u && n().createElement('div', { className: ju }, c),
                                ),
                            );
                        }
                        return n().createElement(
                            Mu,
                            {
                                header: (null == r ? void 0 : r.replaceTooltipHeader) || ct.replaceTooltipHeader,
                                body: (null == r ? void 0 : r.replaceTooltipBody) || ct.replaceTooltipBody,
                            },
                            n().createElement(
                                'div',
                                { className: l, 'data-testid': 'slot' },
                                a &&
                                    n().createElement(
                                        Ju,
                                        { type: 'ghost', mixClass: Gu, onClick: () => a(e.mapId) },
                                        n().createElement('img', {
                                            src: R.images.gui.maps.icons.library.cross(),
                                            className: Xu,
                                        }),
                                    ),
                                n().createElement('img', { src: ut(e), className: Ou }),
                                u && n().createElement('div', { className: ju }, c),
                            ),
                        );
                    },
                    rt = ['map'];
                const ot = (e) => {
                        let u = e.map,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, rt);
                        const a = Math.floor(u.cooldownEndTimeInSecs - Date.now() / te);
                        return ie(a), n().createElement(nt, Object.assign({ map: u }, t));
                    },
                    st = ({
                        slotState: e,
                        cooldownEndTimeInSecs: u,
                        mapId: t,
                        isMapNameDisplayed: a,
                        onRemoveButtonClick: r,
                        isResponsive: o,
                        tooltipStrings: s,
                        MapSlotComponent: i = ot,
                    }) => {
                        if (e === wu.selected)
                            return n().createElement(i, {
                                map: { slotState: e, cooldownEndTimeInSecs: u, mapId: t },
                                isMapNameDisplayed: a,
                                onRemoveButtonClick: r,
                                isResponsive: o,
                                tooltipStrings: s,
                            });
                        const l = e !== wu.disabled;
                        return n().createElement(Vu, {
                            isEnabled: l,
                            isMapNameDisplayed: a,
                            isResponsive: o,
                            tooltipStrings: s,
                        });
                    },
                    it = Ce(
                        ({ className: e, path: u, excludedMaps: t, isResponsive: a }) =>
                            n().createElement(
                                'div',
                                { className: e },
                                t
                                    .slice(0, 3)
                                    .map(({ value: { cooldownEndTimeInSecs: e, mapId: t, slotState: r } }, o) =>
                                        n().createElement(st, {
                                            cooldownEndTimeInSecs: e,
                                            mapId: t,
                                            slotState: r,
                                            key: `${u}.${o}.id`,
                                            isResponsive: a,
                                        }),
                                    ),
                            ),
                        null,
                        (e, u) => Object.assign({}, u, { excludedMaps: e }),
                    );
                function lt() {
                    return (
                        (lt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        lt.apply(this, arguments)
                    );
                }
                const ct = {
                        get header() {
                            return R.strings.account_dashboard.excludedMaps.header();
                        },
                        get disabledTooltipHeader() {
                            return R.strings.account_dashboard.excludedMaps.disabledTooltipHeader();
                        },
                        get disabledTooltipBody() {
                            return R.strings.account_dashboard.excludedMaps.disabledTooltipBody();
                        },
                        get selectTooltipHeader() {
                            return R.strings.account_dashboard.excludedMaps.selectTooltipHeader();
                        },
                        get selectTooltipBody() {
                            return R.strings.account_dashboard.excludedMaps.selectTooltipBody();
                        },
                        get cooldownTooltipHeader() {
                            return R.strings.account_dashboard.excludedMaps.cooldownTooltipHeader();
                        },
                        get cooldownTooltipBody() {
                            return R.strings.account_dashboard.excludedMaps.cooldownTooltipBody();
                        },
                        get replaceTooltipHeader() {
                            return R.strings.account_dashboard.excludedMaps.replaceTooltipHeader();
                        },
                        get replaceTooltipBody() {
                            return R.strings.account_dashboard.excludedMaps.replaceTooltipBody();
                        },
                        get temporarilyUnavailable() {
                            return R.strings.account_dashboard.temporarilyUnavailable();
                        },
                    },
                    dt = Ce(
                        ({ className: e, isEnabled: u, onClick: t }) => {
                            const r = (0, a.useCallback)(() => {
                                    t(), I('play');
                                }, [t]),
                                o = (0, a.useCallback)(() => {
                                    I('highlight');
                                }, []);
                            return u
                                ? n().createElement(
                                      'div',
                                      { className: C()(Fu, e), onClick: r, onMouseEnter: o },
                                      n().createElement('div', { className: gu }),
                                      n().createElement('div', { className: hu }),
                                      n().createElement('div', { className: Du }, ct.header),
                                      n().createElement(it, {
                                          path: 'model.excludedMaps.excludedMaps',
                                          className: fu,
                                          isResponsive: !0,
                                      }),
                                  )
                                : n().createElement(
                                      'div',
                                      { className: C()(Fu, Bu) },
                                      n().createElement('div', { className: gu }),
                                      n().createElement('div', { className: Cu }),
                                      n().createElement(
                                          'div',
                                          { className: bu },
                                          n().createElement('img', {
                                              src: R.images.gui.maps.icons.account_dashboard.premium_missions.lock(),
                                              alt: '',
                                              className: pu,
                                          }),
                                          n().createElement('div', { className: Du }, ct.header),
                                          n().createElement('div', { className: vu }, ct.temporarilyUnavailable),
                                      ),
                                  );
                        },
                        'model.excludedMaps',
                        (e, u) => {
                            let t = lt({}, e);
                            return Object.assign({}, t, u, {
                                excludedMaps: t.excludedMaps ? t.excludedMaps.map((e) => e.value) : [],
                            });
                        },
                    ),
                    Et = 'TextOverflow_base_3b',
                    _t = ({ content: e, classMix: u }) => {
                        const t = (0, a.useRef)(null),
                            r = (0, a.useState)(!0),
                            o = r[0],
                            s = r[1];
                        return (
                            (0, a.useEffect)(() =>
                                pe(() => {
                                    const e = t.current;
                                    e && e.offsetWidth >= e.scrollWidth && s(!1);
                                }),
                            ),
                            n().createElement(
                                Mu,
                                { isEnabled: o, body: e },
                                n().createElement('div', { ref: t, className: C()(Et, u) }, e),
                            )
                        );
                    },
                    mt = 'Header_base_5a',
                    At = 'Header_accountTitleBlock_dc',
                    Ft = 'Header_base__withSubtitle_20',
                    Bt = 'Header_accountName_41',
                    Dt = 'Header_suffixBadge_c8',
                    gt = 'Header_header_da',
                    Ct = 'Header_badge_86',
                    pt = 'Header_badge_overlay_6c',
                    ht = 'Header_hover_a2',
                    bt = 'Header_suffixBadgeShadow_4d',
                    vt = 'Header_plusIcon_69',
                    ft = 'Header_accountName__teamKiller_8c',
                    wt = 'Header_accountName__overflow_dc',
                    kt = 'Header_subtitle_3f',
                    xt = 'Header_alertIcon_c6',
                    yt = 'Header_clanSubtitle_c0',
                    Tt = 'PendingInfoBlock_button_9e',
                    Nt = ({ emailButtonLabel: e, onClick: u }) =>
                        n().createElement(Ju, { type: 'main', mixClass: Tt, size: 'small', onClick: u }, e),
                    St = R.images.gui.maps.icons;
                function Pt(e) {
                    return `url(${e})`;
                }
                function Mt(e, u, t) {
                    const a = e.$dyn(u);
                    return 'string' == typeof a ? Pt(a) : t(e);
                }
                const Lt = () => {},
                    Rt = (e) => Pt(e.badge_empty()),
                    Ot = (e) => Mt(St.library.badges.c_80x80, `badge_${e}`, Rt),
                    It = (e) => Mt(St.library.badges.c_80x80, `badge_${e}`, Lt),
                    Ht = (e) => Mt(St.library.badges.c_48x48, `badge_${e}`, Lt),
                    Wt = (e) => Mt(St.library.badges.strips.c_100x40, `strip_${e}`, Lt),
                    $t = (e) => Mt(St.library.badges.strips.c_68x28, `strip_${e}`, Lt);
                const Ut = R.strings.account_dashboard.header.clanSubtitle(),
                    jt = R.strings.account_dashboard.header.badgeTooltip(),
                    Gt = Ce(
                        ({
                            badgeID: e,
                            userName: u,
                            isInClan: t,
                            className: r,
                            suffixBadgeID: o,
                            roleInClan: s,
                            clanAbbrev: i,
                            isTeamKiller: l,
                            isEmailPending: c,
                            emailButtonLabel: d,
                            onShowBadges: E,
                            onAccountInfoButtonClick: _,
                        }) => {
                            const m = t || c,
                                A = C()(Bt, l && ft, c && wt),
                                F = ((B = _), () => B());
                            var B;
                            const D = (0, a.useCallback)(() => {
                                    E(), I('play');
                                }, [E]),
                                g = (0, a.useCallback)(() => {
                                    I('highlight');
                                }, []),
                                p = n().createElement(
                                    Tu,
                                    {
                                        contentId: R.views.lobby.tooltips.clans.ClanShortInfoTooltipContent('resId'),
                                        decoratorId:
                                            R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    },
                                    n().createElement('span', null, i),
                                );
                            return n().createElement(
                                'div',
                                {
                                    className: C()(mt, m && Ft, r),
                                    style:
                                        ((h = e),
                                        (b = o),
                                        {
                                            '--badge-image-large': Ot(h),
                                            '--badge-image-small': Ot(h),
                                            '--suffix-image-large': It(b),
                                            '--suffix-image-small': Ht(b),
                                            '--shadow-image-large': Wt(b),
                                            '--shadow-image-small': $t(b),
                                        }),
                                },
                                n().createElement(
                                    Mu,
                                    { body: jt },
                                    n().createElement(
                                        'div',
                                        { className: Ct, onClick: D, onMouseEnter: g, id: 'dashboard-header-badge' },
                                        n().createElement('div', { className: pt }),
                                        n().createElement('div', { className: ht }),
                                        0 === e.length && n().createElement('div', { className: vt }),
                                    ),
                                ),
                                n().createElement(
                                    'div',
                                    { className: At },
                                    c
                                        ? n().createElement(
                                              Tu,
                                              {
                                                  contentId:
                                                      R.views.lobby.account_completion.tooltips.HangarTooltip('resId'),
                                              },
                                              n().createElement(
                                                  'div',
                                                  { className: gt },
                                                  n().createElement('div', { className: A }, u),
                                                  c && n().createElement('div', { className: xt }),
                                                  o.length > 0 &&
                                                      n().createElement(
                                                          'div',
                                                          { className: Dt },
                                                          n().createElement('div', { className: bt }),
                                                      ),
                                              ),
                                          )
                                        : n().createElement(
                                              'div',
                                              { className: gt },
                                              n().createElement(_t, { content: u, classMix: A }),
                                              c && n().createElement('div', { className: xt }),
                                              o.length > 0 &&
                                                  n().createElement(
                                                      'div',
                                                      { className: Dt },
                                                      n().createElement('div', { className: bt }),
                                                  ),
                                          ),
                                    n().createElement(
                                        'div',
                                        { className: kt },
                                        c && n().createElement(Nt, { emailButtonLabel: d, onClick: F }),
                                        t &&
                                            n().createElement(Ne, {
                                                classMix: yt,
                                                binding: {
                                                    position: R.strings.menu.profile.header.clan.position.$dyn(s),
                                                    clanTag: p,
                                                },
                                                text: Ut,
                                            }),
                                    ),
                                ),
                            );
                            var h, b;
                        },
                        'model.header',
                        (e, u) => Object.assign({}, u, e),
                    ),
                    Xt = (e) => {
                        (0, a.useEffect)(e, []);
                    },
                    zt = {
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
                var qt;
                !(function (e) {
                    (e[(e.Left = 0)] = 'Left'),
                        (e[(e.Right = 1)] = 'Right'),
                        (e[(e.Top = 2)] = 'Top'),
                        (e[(e.Bottom = 3)] = 'Bottom');
                })(qt || (qt = {}));
                const Vt = ['__left', '__right', '__top', '__bottom'],
                    Kt =
                        ((0, a.forwardRef)(
                            ({ children: e, disableAutoSizeUpdate: u, onOutsideClick: t, customStyles: r = {} }, s) => {
                                const i = (0, a.useRef)(null),
                                    l = (0, a.useRef)(null),
                                    c = (0, a.useRef)(null),
                                    d = (0, a.useState)(window.decorator && window.decorator.directionType),
                                    E = d[0],
                                    _ = d[1],
                                    m = (0, a.useCallback)(() => {
                                        H.playClick(), o.O.view.sendEvent.close();
                                    }, []),
                                    A = (0, a.useCallback)(() => {
                                        H.playHighlight();
                                    }, []),
                                    F = C()(zt.arrow, zt[`arrow${Vt[E]}`]);
                                Xt(
                                    () => (
                                        o.O.client.events.mouse.enableOutside(),
                                        o.O.client.events.mouse.down(([, e]) => {
                                            'outside' === e && (t ? t() : o.O.view.sendEvent.close('popover'));
                                        })
                                    ),
                                );
                                const B = (0, a.useCallback)(
                                        (e) => {
                                            let u = e.target;
                                            do {
                                                if (u === i.current || u === c.current) return;
                                                u = u.parentNode;
                                            } while (u);
                                            const a = window.decorator;
                                            if (void 0 !== window.decorator) {
                                                const e = o.O.client.getMouseGlobalPosition(),
                                                    u = ![a.boundX, a.boundY, a.boundWidth, a.boundHeight].includes(
                                                        void 0,
                                                    ),
                                                    t =
                                                        e.x < a.boundX ||
                                                        e.x > a.boundX + a.boundWidth ||
                                                        e.y > a.boundY + a.boundHeight ||
                                                        e.y < a.boundY;
                                                if (u && !t) return;
                                            }
                                            t ? t() : o.O.view.sendEvent.close('popover');
                                        },
                                        [i, c, t],
                                    ),
                                    D = (0, a.useCallback)(
                                        () => (
                                            o.O.view.freezeTextureBeforeResize(),
                                            pe(() => {
                                                if (l.current) {
                                                    const e = l.current.scrollWidth,
                                                        u = l.current.scrollHeight;
                                                    o.O.view.resize(e, u), _(window.decorator.directionType);
                                                }
                                            })
                                        ),
                                        [],
                                    );
                                return (
                                    (0, a.useImperativeHandle)(s, () => ({ updateSize: D })),
                                    Xt(() => {
                                        o.O.view.setInputPaddingsRem(58);
                                    }),
                                    (0, a.useEffect)(() => {
                                        document.addEventListener('mousedown', B, { capture: !0 });
                                        const e = ((e) => {
                                            let u = !1;
                                            return {
                                                promise: new Promise((t, a) => {
                                                    e.then((e) => !u && t(e)).catch((e) => !u && a(e));
                                                }),
                                                cancel() {
                                                    u = !0;
                                                },
                                            };
                                        })((0, ee.Eu)());
                                        return (
                                            !u && e.promise.then(() => D()),
                                            () => {
                                                e.cancel(), document.removeEventListener('mousedown', B);
                                            }
                                        );
                                    }, [D, B, u]),
                                    n().createElement(
                                        'div',
                                        { className: zt.base, ref: l },
                                        n().createElement(
                                            'div',
                                            { className: zt.decorator },
                                            n().createElement(
                                                'div',
                                                { className: zt.content, ref: i },
                                                e,
                                                window.decorator &&
                                                    window.decorator.isCloseBtnVisible &&
                                                    n().createElement(
                                                        Mu,
                                                        { body: R.strings.dialogs.common.error.cancel() },
                                                        n().createElement('div', {
                                                            className: zt.closeBtn,
                                                            onClick: m,
                                                            onMouseEnter: A,
                                                            ref: c,
                                                        }),
                                                    ),
                                            ),
                                            n().createElement('div', { className: F, style: r.arrow }),
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
                function Yt() {
                    return (
                        (Yt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Yt.apply(this, arguments)
                    );
                }
                const Qt = (e) => {
                        let u = e.contentId,
                            t = e.decoratorId,
                            r = e.direction,
                            o = void 0 === r ? qt.Top : r,
                            s = e.targetId,
                            i = e.args,
                            l = e.onClick,
                            c = e.children,
                            d = e.isEnabled,
                            E = void 0 === d || d,
                            _ = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, Kt);
                        const m = (0, a.useRef)(null),
                            A = (0, a.useCallback)(() => {
                                if ((0, ee.wU)()) return (0, ee.SW)();
                                m.current && (0, ee.P3)(u, o, m.current, t, s, i);
                            }, [u, o, i, t, s]);
                        return n().createElement(
                            'div',
                            Yt(
                                {
                                    ref: m,
                                    onClick:
                                        ((F = c.props.onClick),
                                        (e) => {
                                            E && (A(), l && l(e), F && F(e));
                                        }),
                                },
                                _,
                            ),
                            c,
                        );
                        var F;
                    },
                    Zt = {
                        base: 'ParentalControlBlock_base_0c',
                        text: 'ParentalControlBlock_text_82',
                        heading: 'ParentalControlBlock_heading_f6',
                        icon: 'ParentalControlBlock_icon_9c',
                        description: 'ParentalControlBlock_description_38',
                        infoIcon: 'ParentalControlBlock_infoIcon_79',
                        glow: 'ParentalControlBlock_glow_d5',
                    },
                    Jt = Ce(
                        ({ className: e, popoverContentId: u }) =>
                            n().createElement(
                                'div',
                                { className: C()(Zt.base, e) },
                                n().createElement('img', {
                                    className: Zt.icon,
                                    src: R.images.gui.maps.icons.account_dashboard.parental_control.parental_icon(),
                                }),
                                n().createElement(
                                    'div',
                                    { className: Zt.text },
                                    n().createElement(
                                        'h2',
                                        { className: Zt.heading },
                                        R.strings.account_dashboard.parentalControl.important(),
                                    ),
                                    n().createElement(
                                        'div',
                                        { className: Zt.description },
                                        n().createElement(
                                            'div',
                                            { className: Zt.description_text },
                                            R.strings.account_dashboard.parentalControl.limitEnabled(),
                                        ),
                                        n().createElement(
                                            Qt,
                                            {
                                                contentId: u,
                                                decoratorId:
                                                    R.views.common.pop_over_window.pop_over_window.PopOverWindow(
                                                        'resId',
                                                    ),
                                            },
                                            n().createElement('img', {
                                                src: R.images.gui.maps.icons.library.info(),
                                                className: Zt.infoIcon,
                                            }),
                                        ),
                                    ),
                                ),
                                n().createElement('div', { className: Zt.glow }),
                            ),
                        'model.parentalControl',
                        (e, u) => Object.assign({}, e, u),
                    ),
                    ea = {
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
                    ua = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function ta() {
                    return (
                        (ta =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        ta.apply(this, arguments)
                    );
                }
                const aa = (e) => {
                    let u = e.size,
                        t = e.value,
                        a = e.isEmpty,
                        r = e.fadeInAnimation,
                        o = e.hide,
                        s = e.maximumNumber,
                        i = e.className,
                        l = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                            return n;
                        })(e, ua);
                    const c = a ? null : t,
                        d = 'string' == typeof c;
                    if ((c && !d && c < 0) || 0 === c) return null;
                    const E = c && !d && c > s,
                        _ = C()(
                            ea.base,
                            ea[`base__${u}`],
                            r && ea.base__animated,
                            o && ea.base__hidden,
                            !c && ea.base__pattern,
                            a && ea.base__empty,
                            i,
                        );
                    return n().createElement(
                        'div',
                        ta({ className: _ }, l),
                        n().createElement('div', { className: ea.bg }),
                        n().createElement('div', { className: ea.pattern }),
                        n().createElement(
                            'div',
                            { className: C()(ea.value, d && ea.value__text) },
                            E ? s : c,
                            E && n().createElement('span', { className: ea.plus }, '+'),
                        ),
                    );
                };
                aa.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
                const na = 'Flame_base_90',
                    ra = 'Flame_slides_58',
                    oa = 'Flame_frame_29',
                    sa = (0, a.memo)(({ className: e }) => {
                        const u = (() => {
                            const e = R.images.gui.maps.icons.dogtags.icons.flame;
                            return Array(42)
                                .fill(null)
                                .map((u, t) => {
                                    const a = `flame_${`0${t}`.slice(-2)}`;
                                    return a in e ? e[a]() : e.flame_00();
                                });
                        })();
                        return n().createElement(
                            'div',
                            { className: C()(na, e), 'data-testid': 'Flame' },
                            n().createElement(
                                'div',
                                { className: ra },
                                u.map((e) => n().createElement('img', { key: e, src: e, className: oa })),
                            ),
                        );
                    }),
                    ia = {
                        base: 'PersonalDogTagBlock_base_3c',
                        base__disabled: 'PersonalDogTagBlock_base__disabled_30',
                        base_background: 'PersonalDogTagBlock_base_background_95',
                        hover: 'PersonalDogTagBlock_hover_79',
                        heading: 'PersonalDogTagBlock_heading_8e',
                        dogTag: 'PersonalDogTagBlock_dogTag_d8',
                        dogTag_engraving: 'PersonalDogTagBlock_dogTag_engraving_ee',
                        dogTag_background: 'PersonalDogTagBlock_dogTag_background_c1',
                        dogTag_highlight: 'PersonalDogTagBlock_dogTag_highlight_d3',
                        counter: 'PersonalDogTagBlock_counter_7c',
                        temporarilyUnavailable: 'PersonalDogTagBlock_temporarilyUnavailable_07',
                    },
                    la = ['className'];
                const ca = {
                        get heading() {
                            return R.strings.account_dashboard.personalDogTag.heading();
                        },
                        get temporarilyUnavailable() {
                            return R.strings.account_dashboard.temporarilyUnavailable();
                        },
                    },
                    da = Ce(
                        (e) => {
                            let u = e.className,
                                t = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        n = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                    return n;
                                })(e, la);
                            const r = t.isEnabled,
                                o = t.isHighlighted,
                                s = t.background,
                                i = t.engraving,
                                l = t.counter,
                                c = t.onClick,
                                d = !r,
                                E = (0, a.useCallback)(() => {
                                    r && (c(), I('play'));
                                }, [c, r]),
                                _ = (0, a.useCallback)(() => {
                                    r && I('highlight');
                                }, [r]);
                            return n().createElement(
                                'div',
                                {
                                    className: C()(ia.base, d && ia.base__disabled, o && ia.base__highlighted, u),
                                    onClick: E,
                                    onMouseEnter: _,
                                    id: 'dashboard-dogtag-block',
                                },
                                n().createElement('div', { className: ia.base_background }),
                                n().createElement('div', { className: ia.hover }),
                                n().createElement('h2', { className: ia.heading }, ca.heading),
                                r &&
                                    n().createElement(
                                        'div',
                                        { className: ia.dogTag },
                                        l > 0 &&
                                            n().createElement(
                                                'div',
                                                { className: ia.counter },
                                                n().createElement(aa, { value: l }),
                                            ),
                                        n().createElement('img', {
                                            className: ia.dogTag_background,
                                            src: ((A = s), R.images.gui.maps.icons.dogtags.small.backgrounds[A]()),
                                            alt: 'background',
                                        }),
                                        n().createElement('img', {
                                            className: ia.dogTag_engraving,
                                            src: ((m = i), R.images.gui.maps.icons.dogtags.small.engravings[m]()),
                                            alt: 'engraving',
                                        }),
                                        o && n().createElement(sa, { className: ia.dogTag_highlight }),
                                    ),
                                d &&
                                    n().createElement(
                                        'p',
                                        { className: ia.temporarilyUnavailable },
                                        ca.temporarilyUnavailable,
                                    ),
                            );
                            var m, A;
                        },
                        'model.dogTags',
                        (e, u) => Object.assign({}, e, u),
                    ),
                    Ea = 'PlayerSubscriptionsBlock_base_47',
                    _a = 'PlayerSubscriptionsBlock_base__disabled_aa',
                    ma = 'PlayerSubscriptionsBlock_title_3b',
                    Aa = 'PlayerSubscriptionsBlock_base_background_0b',
                    Fa = 'PlayerSubscriptionsBlock_subtitle_5f',
                    Ba = 'PlayerSubscriptionsBlock_hover_7a',
                    Da = 'PlayerSubscriptionsBlock_disabledPattern_92',
                    ga = Ce(
                        ({ className: e, isEnabled: u, onClick: t }) => {
                            const r = (0, a.useCallback)(() => {
                                    u && (t(), I('play'));
                                }, [t, u]),
                                o = (0, a.useCallback)(() => {
                                    u && I('highlight');
                                }, [u]);
                            return n().createElement(
                                'div',
                                { className: C()(Ea, !u && _a, e), onClick: r, onMouseEnter: o },
                                n().createElement('div', { className: Aa }),
                                n().createElement('div', { className: Ba }),
                                !u && n().createElement('div', { className: Da }),
                                n().createElement(
                                    'div',
                                    { className: ma },
                                    R.strings.player_subscriptions.dashboard.title(),
                                ),
                                n().createElement(
                                    'div',
                                    { className: Fa },
                                    u
                                        ? R.strings.player_subscriptions.dashboard.activate()
                                        : R.strings.player_subscriptions.dashboard.unavailable(),
                                ),
                            );
                        },
                        'model.subscriptions',
                        (e, u) => Object.assign({}, e, u),
                    ),
                    Ca = {
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
                    };
                let pa, ha, ba;
                !(function (e) {
                    (e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                })(pa || (pa = {})),
                    (function (e) {
                        (e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.equipCoin = 'equipCoin');
                    })(ha || (ha = {})),
                    (function (e) {
                        (e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG');
                    })(ba || (ba = {}));
                const va = (0, a.memo)(
                        ({
                            isDiscount: e,
                            isInteractiveDiscount: u,
                            size: t,
                            type: a,
                            value: r,
                            discountValue: o,
                            showPlus: s,
                            isEnough: i = !0,
                            stockBackgroundName: l = ba.Red,
                            className: c,
                            classNames: d,
                        }) =>
                            n().createElement(
                                'span',
                                { className: C()(Ca.base, Ca[`base__${t}`], c) },
                                n().createElement(
                                    'span',
                                    {
                                        className: C()(
                                            Ca.value,
                                            Ca[`value__${a}`],
                                            !i && Ca.value__notEnough,
                                            null == d ? void 0 : d.value,
                                        ),
                                    },
                                    s && r > 0 && '+',
                                    n().createElement(cu, { value: r, format: a === ha.gold ? 'gold' : 'integral' }),
                                ),
                                n().createElement('span', {
                                    className: C()(Ca.icon, Ca[`icon__${a}-${t}`], null == d ? void 0 : d.icon),
                                }),
                                e &&
                                    n().createElement(
                                        'span',
                                        {
                                            className: C()(
                                                Ca.stock,
                                                o && Ca.stock__indent,
                                                u && Ca.stock__interactive,
                                                null == d ? void 0 : d.stock,
                                            ),
                                        },
                                        n().createElement('span', {
                                            className: Ca.stockBackground,
                                            style: { backgroundImage: `url(R.images.gui.maps.icons.library.${l})` },
                                        }),
                                        Boolean(o) && o,
                                    ),
                            ),
                    ),
                    fa = {
                        base: 'PremiumAccountBlock_base_2e',
                        base__wotPremiumActive: 'PremiumAccountBlock_base__wotPremiumActive_89',
                        base__onlyWgPremiumActive: 'PremiumAccountBlock_base__onlyWgPremiumActive_0d',
                        hover: 'PremiumAccountBlock_hover_95',
                        base__disabled: 'PremiumAccountBlock_base__disabled_69',
                        emblem: 'PremiumAccountBlock_emblem_89',
                        emblem_symbol: 'PremiumAccountBlock_emblem_symbol_5c',
                        header: 'PremiumAccountBlock_header_fd',
                        wotPremiumTimeLeft: 'PremiumAccountBlock_wotPremiumTimeLeft_7c',
                        wgPremiumTimeLeft: 'PremiumAccountBlock_wgPremiumTimeLeft_f1',
                        wotPremiumBenefits: 'PremiumAccountBlock_wotPremiumBenefits_be',
                        upgradeExperience: 'PremiumAccountBlock_upgradeExperience_b0',
                        upgradeCreditReserve: 'PremiumAccountBlock_upgradeCreditReserve_4f',
                        upgradePremiumMissions: 'PremiumAccountBlock_upgradePremiumMissions_96',
                        upgradeExcludeMapSlot: 'PremiumAccountBlock_upgradeExcludeMapSlot_23',
                        upgradePlatoonBonusCredits: 'PremiumAccountBlock_upgradePlatoonBonusCredits_70',
                        mainBenefits: 'PremiumAccountBlock_mainBenefits_68',
                        xpBonus: 'PremiumAccountBlock_xpBonus_bb',
                        creditBonus: 'PremiumAccountBlock_creditBonus_28',
                        platoonBonus: 'PremiumAccountBlock_platoonBonus_63',
                        otherBenefits: 'PremiumAccountBlock_otherBenefits_6a',
                        table: 'PremiumAccountBlock_table_39',
                        standardAccount: 'PremiumAccountBlock_standardAccount_ab',
                        premiumAccount: 'PremiumAccountBlock_premiumAccount_85',
                    };
                function wa() {
                    return (
                        (wa =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        wa.apply(this, arguments)
                    );
                }
                const ka = R.strings.account_dashboard.premiumAccount,
                    xa = (e) => {
                        const u = oe(e),
                            t = ['days', 'hours'].find((e) => u[e] > 0);
                        return t ? z(R.strings.common.duration[t](), { [t]: u[t] + 1 }) : ka.minimumTimeLeft();
                    },
                    ya = (e) =>
                        e
                            .split('\n')
                            .reduce(
                                (e, u, t) => (
                                    t > 0 && e.push(n().createElement('br', { key: `br-${t}` })),
                                    e.push(n().createElement('div', { className: fa.header_line, key: t }, u)),
                                    e
                                ),
                                [],
                            ),
                    Ta = Ce(
                        ({
                            className: e,
                            wotPremiumSecondsLeft: u,
                            wgPremiumSecondsLeft: t,
                            xpBonus: r,
                            creditBonus: o,
                            platoonBonus: s,
                            standardAccountCredits: i,
                            standardAccountXp: l,
                            premiumAccountCredits: c,
                            premiumAccountXp: d,
                            onClick: E,
                        }) => {
                            const _ = ie(u),
                                m = ie(t),
                                A = u > 0,
                                F = t > 0,
                                B = !A && !F,
                                D = F && !A,
                                g = (0, a.useCallback)(() => {
                                    E(), I('play');
                                }, [E]),
                                p = (0, a.useCallback)(() => {
                                    I('highlight');
                                }, []);
                            return n().createElement(
                                'div',
                                {
                                    className: C()(
                                        fa.base,
                                        e,
                                        A && fa.base__wotPremiumActive,
                                        D && fa.base__onlyWgPremiumActive,
                                    ),
                                    onClick: g,
                                    onMouseEnter: p,
                                },
                                n().createElement('div', { className: fa.hover }),
                                A &&
                                    n().createElement(
                                        n().Fragment,
                                        null,
                                        n().createElement(
                                            'div',
                                            { className: fa.emblem },
                                            n().createElement('div', { className: fa.emblem_symbol }),
                                        ),
                                        n().createElement('h2', { className: fa.header }, ka.WoTPremiumAccount()),
                                        n().createElement('div', { className: fa.wotPremiumTimeLeft }, xa(_)),
                                        F &&
                                            n().createElement(
                                                'div',
                                                { className: fa.wgPremiumTimeLeft, 'data-testid': 'wgPremiumTimeLeft' },
                                                ka.WGPremium(),
                                                ' ',
                                                xa(m),
                                            ),
                                    ),
                                D &&
                                    n().createElement(
                                        n().Fragment,
                                        null,
                                        n().createElement(
                                            'h2',
                                            { className: fa.header, 'data-testid': 'onlyWgHeader' },
                                            ya(ka.upgrade.toWoTPremiumAccount()),
                                        ),
                                        n().createElement(
                                            'div',
                                            { className: fa.wotPremiumBenefits },
                                            n().createElement(
                                                'div',
                                                { className: fa.upgradeExperience },
                                                ka.upgrade.experience(),
                                            ),
                                            n().createElement(
                                                'div',
                                                { className: fa.upgradeCreditReserve },
                                                ka.upgrade.creditReserve(),
                                            ),
                                            n().createElement(
                                                'div',
                                                { className: fa.upgradePremiumMissions },
                                                ka.upgrade.premiumMissions(),
                                            ),
                                            n().createElement(
                                                'div',
                                                { className: fa.upgradeExcludeMapSlot },
                                                ka.upgrade.excludeMapSlot(),
                                            ),
                                            n().createElement(
                                                'div',
                                                { className: fa.upgradePlatoonBonusCredits },
                                                ka.upgrade.platoonBonusCredits(),
                                            ),
                                        ),
                                    ),
                                B &&
                                    n().createElement(
                                        n().Fragment,
                                        null,
                                        n().createElement(
                                            'h2',
                                            { className: fa.header, 'data-testid': 'header' },
                                            ya(ka.tryWoTPremiumAccount()),
                                        ),
                                        n().createElement(
                                            'div',
                                            { className: fa.mainBenefits },
                                            n().createElement('div', { className: fa.xpBonus }, '+', r, '%'),
                                            n().createElement('div', { className: fa.creditBonus }, '+', o, '%'),
                                            n().createElement('div', { className: fa.platoonBonus }, '+', s, '%'),
                                        ),
                                        n().createElement('div', { className: fa.otherBenefits }, ka.otherBenefits()),
                                    ),
                                !D &&
                                    n().createElement(
                                        'div',
                                        { className: fa.table },
                                        n().createElement(
                                            'div',
                                            { className: fa.standardAccount },
                                            n().createElement('p', null, ka.standardAccount()),
                                            n().createElement(
                                                'p',
                                                null,
                                                n().createElement(va, { type: ha.credits, size: pa.small, value: i }),
                                            ),
                                            n().createElement(
                                                'p',
                                                null,
                                                n().createElement(va, { type: ha.xp, size: pa.small, value: l }),
                                            ),
                                        ),
                                        n().createElement(
                                            'div',
                                            { className: fa.premiumAccount },
                                            n().createElement('p', null, ka.WoTPremium()),
                                            n().createElement(
                                                'p',
                                                null,
                                                n().createElement(va, { type: ha.credits, size: pa.small, value: c }),
                                            ),
                                            n().createElement(
                                                'p',
                                                null,
                                                n().createElement(va, { type: ha.xp, size: pa.small, value: d }),
                                            ),
                                        ),
                                    ),
                            );
                        },
                        'model.premiumAccount',
                        (e, u) => {
                            let t = wa({}, e);
                            return Object.assign({}, t, u);
                        },
                    ),
                    Na = 'PremiumQuestsBlock_base_1a',
                    Sa = 'PremiumQuestsBlock_base__locked_e0',
                    Pa = 'PremiumQuestsBlock_base__disabled_07',
                    Ma = 'PremiumQuestsBlock_base_background_a4',
                    La = 'PremiumQuestsBlock_hover_ff',
                    Ra = 'PremiumQuestsBlock_heading_e0',
                    Oa = 'PremiumQuestsBlock_quests_9f',
                    Ia = 'PremiumQuestsBlock_quest1_63',
                    Ha = 'PremiumQuestsBlock_quest2_27',
                    Wa = 'PremiumQuestsBlock_quest3_ce',
                    $a = 'PremiumQuestsBlock_line_b0',
                    Ua = 'PremiumQuestsBlock_temporarilyUnavailable_ef',
                    ja = ['className'];
                const Ga = {
                        get heading() {
                            return R.strings.account_dashboard.premiumQuests.heading();
                        },
                        get temporarilyUnavailable() {
                            return R.strings.account_dashboard.temporarilyUnavailable();
                        },
                    },
                    Xa = [
                        'PremiumQuestsBlock_quests__completed0_5d',
                        'PremiumQuestsBlock_quests__completed1_97',
                        'PremiumQuestsBlock_quests__completed2_0a',
                        'PremiumQuestsBlock_quests__completed3_fc',
                    ],
                    za = Ce(
                        (e) => {
                            let u = e.className,
                                t = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        n = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                    return n;
                                })(e, ja);
                            const r = t.isEnabled,
                                o = t.completedMissionsCount,
                                s = t.onClick,
                                i = !r,
                                l = o > -1 && r,
                                c = o <= -1 && r,
                                d = (0, a.useCallback)(() => {
                                    r && (s(), I('play'));
                                }, [s, r]),
                                E = (0, a.useCallback)(() => {
                                    r && I('highlight');
                                }, [r]);
                            return n().createElement(
                                'div',
                                { className: C()(Na, c && Sa, i && Pa, u), onClick: d, onMouseEnter: E },
                                n().createElement('div', { className: Ma }),
                                n().createElement('div', { className: La }),
                                n().createElement('h2', { className: Ra }, Ga.heading),
                                l &&
                                    n().createElement(
                                        'div',
                                        { className: C()(Oa, Xa[o]), 'data-testid': 'quests' },
                                        n().createElement('div', { className: Ia }),
                                        n().createElement('div', { className: $a }),
                                        n().createElement('div', { className: Ha }),
                                        n().createElement('div', { className: $a }),
                                        n().createElement('div', { className: Wa }),
                                    ),
                                i && n().createElement('p', { className: Ua }, Ga.temporarilyUnavailable),
                            );
                        },
                        'model.premiumQuests',
                        (e, u) => Object.assign({}, e, u),
                    );
                let qa, Va;
                !(function (e) {
                    (e.Timer = 'timer'), (e.Countdown = 'countdown'), (e.Cooldown = 'cooldown'), (e.None = 'none');
                })(qa || (qa = {})),
                    (function (e) {
                        (e.Description = 'description'),
                            (e.Short = 'short'),
                            (e.Long = 'long'),
                            (e.Extended = 'extended');
                    })(Va || (Va = {}));
                const Ka = 'Countdown_base_fe',
                    Ya = 'Countdown_icon_8b',
                    Qa = 'Countdown_description_8d',
                    Za = (e) => e.toString().padStart(2, '0'),
                    Ja = (e, u) => {
                        switch (u) {
                            case Va.Description:
                                return ((e, u = !0) =>
                                    e.days > 7 && u
                                        ? z(R.strings.common.duration.days(), { days: e.days })
                                        : e.days >= 1
                                          ? 0 === e.hours
                                              ? z(R.strings.common.duration.days(), { days: e.days })
                                              : `${z(R.strings.common.duration.days(), { days: e.days })} ${z(R.strings.common.duration.hours(), { hours: e.hours })}`
                                          : e.hours >= 1
                                            ? 0 === e.minutes
                                                ? z(R.strings.common.duration.hours(), { hours: e.hours })
                                                : `${z(R.strings.common.duration.hours(), { hours: e.hours })} ${z(R.strings.common.duration.minutes(), { minutes: e.minutes })}`
                                            : z(R.strings.common.duration.minutes(), { minutes: e.minutes || 1 }))(e);
                            case Va.Short:
                                return `${Za(e.minutes)}:${Za(e.seconds)}`;
                            case Va.Long:
                                return `${Za(e.hours)}:${Za(e.minutes)}:${Za(e.seconds)}`;
                            case Va.Extended:
                                return `${z(R.strings.common.duration.days(), { days: e.days })} | ${Za(e.hours)}:${Za(e.minutes)}:${Za(e.seconds)}`;
                        }
                    },
                    en = R.images.gui.maps.icons.components.countdown,
                    un = (e, u) => {
                        const t = 2 === u ? en.big : en;
                        switch (e) {
                            case qa.Timer:
                                return t.clock();
                            case qa.Countdown:
                                return t.hourglass();
                            case qa.Cooldown:
                                return t.lock();
                        }
                    },
                    tn = (0, a.memo)(
                        ({
                            duration: e,
                            icon: u = qa.Timer,
                            style: t = Va.Description,
                            onTimeReached: r,
                            className: s = '',
                            classNames: i = {},
                        }) => {
                            const l = t !== Va.Description ? 1 : void 0,
                                c = De(e, l),
                                d = (() => {
                                    const e = (0, a.useState)(o.O.view.getScale()),
                                        u = e[0],
                                        t = e[1];
                                    return (
                                        (0, a.useEffect)(() => {
                                            const e = () => {
                                                t(o.O.view.getScale());
                                            };
                                            return (
                                                window.addEventListener('resize', e),
                                                () => {
                                                    window.removeEventListener('resize', e);
                                                }
                                            );
                                        }, []),
                                        u
                                    );
                                })();
                            r && r[c] && r[c]();
                            const E = Ja(oe(c), t);
                            return n().createElement(
                                'div',
                                { className: C()(Ka, s) },
                                u !== qa.None &&
                                    n().createElement('div', {
                                        className: C()(Ya, i.icon),
                                        style: { backgroundImage: `url('${un(u, d)}')` },
                                    }),
                                n().createElement('div', { className: C()(Qa, i.text) }, E),
                            );
                        },
                    ),
                    an = 'ReserveStockBlock_base_68',
                    nn = 'ReserveStockBlock_base_background_ee',
                    rn = 'ReserveStockBlock_base__allLocked_35',
                    on = 'ReserveStockBlock_hover_9c',
                    sn = 'ReserveStockBlock_title_15',
                    ln = 'ReserveStockBlock_text__locked_77',
                    cn = 'ReserveStockBlock_text_93',
                    dn = 'ReserveStockBlock_lock_6e',
                    En = 'ReserveStockBlock_lockGlow_70',
                    _n = 'ReserveStockBlock_alertContainer_c9',
                    mn = 'ReserveStockBlock_alertIcon_3f',
                    An = 'ReserveStockBlock_alertGlow_88',
                    Fn = 'ReserveStockBlock_cornerHighlight_74',
                    Bn = 'ReserveStockBlock_currencyContainer_ed',
                    Dn = 'ReserveStockBlock_countdownContainer_45',
                    gn = 'ReserveStockBlock_checkmark_6f',
                    Cn = 'ReserveStockBlock_textContainer_24',
                    pn = 'ReserveStockBlock_divider_64',
                    hn = ({
                        className: e,
                        currentAmount: u,
                        isFeatureEnabled: t,
                        isLocked: a,
                        currencyType: r,
                        maxAmount: o,
                        title: s,
                    }) => {
                        const i = u >= o;
                        return n().createElement(
                            'div',
                            { className: C()(cn, (a || !t) && ln, e) },
                            n().createElement('div', { className: sn }, s),
                            t &&
                                a &&
                                n().createElement(
                                    'div',
                                    { className: dn },
                                    n().createElement('div', { className: En }),
                                ),
                            t
                                ? n().createElement(
                                      'div',
                                      { className: Bn, 'data-testid': 'footer' },
                                      i && n().createElement('div', { className: gn }),
                                      n().createElement(va, { size: 'small', type: r, value: i ? o : u }),
                                  )
                                : n().createElement(
                                      'div',
                                      { className: _n },
                                      n().createElement(
                                          'div',
                                          { className: mn },
                                          n().createElement('div', { className: An }),
                                      ),
                                  ),
                        );
                    },
                    bn = {
                        get creditBlockTitle() {
                            return R.strings.account_dashboard.reserveStock.creditBlockTitle();
                        },
                        get goldBlockTitle() {
                            return R.strings.account_dashboard.reserveStock.goldBlockTitle();
                        },
                    },
                    vn = Ce(
                        ({
                            className: e,
                            creditCurrentAmount: u,
                            goldCurrentAmount: t,
                            goldMaxAmount: r,
                            creditMaxAmount: o,
                            openingTime: s,
                            openingSoonThreshold: i,
                            isPremiumActive: l,
                            isWotPlusActive: c,
                            isCreditReserveEnabled: d,
                            isGoldReserveEnabled: E,
                            onClick: _,
                        }) => {
                            const m = s - Math.floor(Date.now() / 1e3),
                                A = m > 0 ? m : 0,
                                F = A <= i,
                                B = C()(an, d && E && !l && !c && rn, e),
                                D = (0, a.useCallback)(() => {
                                    _(), I('play');
                                }, [_]),
                                g = (0, a.useCallback)(() => {
                                    I('highlight');
                                }, []);
                            return n().createElement(
                                'div',
                                { className: B, onClick: D, onMouseEnter: g, 'data-testid': 'block' },
                                n().createElement('div', { className: nn }),
                                n().createElement('div', { className: on }),
                                n().createElement('div', { className: pn }),
                                n().createElement('div', { className: Dn }, n().createElement(tn, { duration: A })),
                                F && n().createElement('div', { className: Fn, 'data-testid': 'openingSoon' }),
                                n().createElement(
                                    'div',
                                    { className: Cn },
                                    n().createElement(hn, {
                                        currencyType: 'credits',
                                        currentAmount: u,
                                        maxAmount: o,
                                        isFeatureEnabled: d,
                                        isLocked: !l,
                                        title: bn.creditBlockTitle,
                                    }),
                                    n().createElement(hn, {
                                        currencyType: 'gold',
                                        currentAmount: t,
                                        maxAmount: r,
                                        isFeatureEnabled: E,
                                        isLocked: !c,
                                        title: bn.goldBlockTitle,
                                    }),
                                ),
                            );
                        },
                        'model.reserveStock',
                        (e, u) => Object.assign({}, e, u),
                    ),
                    fn = 'AccountDashboardApp_base_b3',
                    wn = 'AccountDashboardApp_close_23',
                    kn = 'AccountDashboardApp_header_0f',
                    xn = 'AccountDashboardApp_cards_eb',
                    yn = 'AccountDashboardApp_mainBlock_0a',
                    Tn = 'AccountDashboardApp_footer_56',
                    Nn = 'AccountDashboardApp_block_19',
                    Sn = 'AccountDashboardApp_block__header_21',
                    Pn = 'AccountDashboardApp_block__playerSubscriptions_de',
                    Mn = 'AccountDashboardApp_block__premiumAccount_f0',
                    Ln = 'AccountDashboardApp_block__bonusXp_b3',
                    Rn = 'AccountDashboardApp_block__reserveStock_c6',
                    On = 'AccountDashboardApp_block__personalDogTag_03',
                    In = 'AccountDashboardApp_block__premiumQuests_1a',
                    Hn = 'AccountDashboardApp_block__bannedMaps_68',
                    Wn = 'AccountDashboardApp_block__parentalControl_42',
                    $n = ['onClose'];
                function Un() {
                    return (
                        (Un =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Un.apply(this, arguments)
                    );
                }
                const jn = { close: R.strings.account_dashboard.close() },
                    Gn = (e) => () => e(),
                    Xn = Ce(
                        (e) => {
                            let u = e.onClose,
                                t = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        n = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                    return n;
                                })(e, $n);
                            const r = t.isParentalControlEnabled,
                                o = t.isPlayerSubscriptionsEntrypointHidden;
                            var s;
                            (s = () => u()), ve(he.n.ESCAPE, s);
                            const i = w().mediaSize < b.Small,
                                l = we('DogTagsWidget', fe),
                                c = we('NewBadgeHintBtn', fe);
                            (0, a.useEffect)(
                                () =>
                                    pe(() => {
                                        null !== l && l.completeEffect();
                                    }),
                                [l],
                            ),
                                (0, a.useEffect)(
                                    () =>
                                        pe(() => {
                                            null !== c && c.completeEffect();
                                        }),
                                    [c],
                                );
                            const d = ye('DogTagsWidget', xe);
                            (0, a.useEffect)(() => {
                                d && d.runTrigger(!0);
                            }, [d]);
                            const E = ye('NewBadgeHintBtn', xe);
                            return (
                                (0, a.useEffect)(() => {
                                    E && E.runTrigger(!0);
                                }, [E]),
                                n().createElement(
                                    'div',
                                    { className: fn },
                                    n().createElement(
                                        'div',
                                        { className: wn },
                                        n().createElement(j, {
                                            caption: i ? '' : jn.close,
                                            type: 'close',
                                            side: 'right',
                                            onClick: Gn(u),
                                        }),
                                    ),
                                    n().createElement(
                                        'div',
                                        { className: yn },
                                        n().createElement(
                                            'div',
                                            { className: kn },
                                            n().createElement(Gt, { className: C()(Nn, Sn) }),
                                            !o && n().createElement(ga, { className: C()(Nn, Pn) }),
                                        ),
                                        n().createElement(
                                            'div',
                                            { className: xn },
                                            n().createElement(Ta, { className: C()(Nn, Mn) }),
                                            n().createElement(Au, { className: C()(Nn, Ln) }),
                                            n().createElement(vn, { className: C()(Nn, Rn) }),
                                            n().createElement(da, { className: C()(Nn, On) }),
                                            n().createElement(za, { className: C()(Nn, In) }),
                                            n().createElement(dt, { className: C()(Nn, Hn) }),
                                        ),
                                    ),
                                    r &&
                                        n().createElement(
                                            'div',
                                            { className: Tn },
                                            n().createElement(Jt, { className: C()(Nn, Wn) }),
                                        ),
                                )
                            );
                        },
                        'model',
                        (e, u) => {
                            let t = Un({}, e);
                            return Object.assign({}, t, u);
                        },
                    );
                engine.whenReady.then(() => {
                    O().render(
                        n().createElement(M, null, n().createElement(Xn, null)),
                        document.getElementById('root'),
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
        (__webpack_require__.O = (e, u, t, a) => {
            if (!u) {
                var n = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [u, t, a] = deferred[i], r = !0, o = 0; o < u.length; o++)
                        (!1 & a || n >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[o]))
                            ? u.splice(o--, 1)
                            : ((r = !1), a < n && (n = a));
                    if (r) {
                        deferred.splice(i--, 1);
                        var s = t();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > a; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [u, t, a];
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
        (__webpack_require__.j = 430),
        (() => {
            var e = { 430: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var a,
                        n,
                        [r, o, s] = t,
                        i = 0;
                    if (r.some((u) => 0 !== e[u])) {
                        for (a in o) __webpack_require__.o(o, a) && (__webpack_require__.m[a] = o[a]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (u && u(t); i < r.length; i++)
                        (n = r[i]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [507], () => __webpack_require__(704));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
